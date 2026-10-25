// Remote-friend test: the guest reaches the server only through a forwarding proxy on a non-localhost address,
// the way a friend reaches it through a Cloudflare tunnel (or a forwarded router port): plain HTTP for the page,
// WebSocket upgrade for socket.io, X-Forwarded-For added. The host plays on localhost.
// usage: node tools/tunnel-test.js [https|public]
//   https: the proxy serves TLS with a throwaway self-signed certificate, like the https:// link a Cloudflare
//   tunnel gives out (socket.io then runs over wss). Needs openssl on PATH (it ships with Git for Windows).
//   public: no local proxy; the guest goes through a real Cloudflare quick tunnel (cloudflared, see share.js),
//   i.e. over the internet. The tunnel is closed when the test ends.
const { spawn, execFileSync } = require('child_process');
const fs = require('fs');
const http = require('http');
const https = require('https');
const net = require('net');
const os = require('os');
const path = require('path');
const { chromium } = require('playwright-core');
const share = require('../server/share');

const SERVER_PORT = 2067;
const PROXY_PORT = 2068;
const TLS = process.argv[2] === 'https';
const PUBLIC = process.argv[2] === 'public';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let failures = 0;
function check(name, ok, detail) {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  ' + detail : ''}`);
  if (!ok) failures++;
}

// Minimal tunnel stand-in: forwards requests and upgrades to the server, tagging the client address.
const stats = { http: 0, upgrades: 0 };

function selfSignedCert() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'pb2-tls-'));
  const key = path.join(dir, 'key.pem');
  const cert = path.join(dir, 'cert.pem');
  execFileSync('openssl', ['req', '-x509', '-newkey', 'rsa:2048', '-nodes', '-keyout', key, '-out', cert, '-days', '1', '-subj', '/CN=pb2-coop-test'], { stdio: 'ignore' });
  const out = { key: fs.readFileSync(key), cert: fs.readFileSync(cert) };
  fs.rmSync(dir, { recursive: true, force: true });
  return out;
}

const forward = (req, res) => {
  stats.http++;
  const headers = { ...req.headers, 'x-forwarded-for': req.socket.remoteAddress };
  const out = http.request({ host: '127.0.0.1', port: SERVER_PORT, path: req.url, method: req.method, headers }, (r) => {
    res.writeHead(r.statusCode, r.headers);
    r.pipe(res);
  });
  out.on('error', () => { res.writeHead(502); res.end(); });
  req.pipe(out);
};
const proxy = TLS ? https.createServer(selfSignedCert(), forward) : http.createServer(forward); // unused when PUBLIC
proxy.on('upgrade', (req, socket, head) => {
  stats.upgrades++;
  const up = net.connect(SERVER_PORT, '127.0.0.1', () => {
    const lines = [`${req.method} ${req.url} HTTP/1.1`];
    for (const [k, v] of Object.entries({ ...req.headers, 'x-forwarded-for': req.socket.remoteAddress })) lines.push(`${k}: ${v}`);
    up.write(lines.join('\r\n') + '\r\n\r\n');
    if (head && head.length) up.write(head);
    socket.pipe(up).pipe(socket);
  });
  up.on('error', () => socket.destroy());
  socket.on('error', () => up.destroy());
});

async function openClient(browser, name, url) {
  const page = await (await browser.newContext({ viewport: { width: 800, height: 600 }, ignoreHTTPSErrors: true })).newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto(url);
  await page.waitForFunction(() => typeof $ММ === 'function' && globalThis.coopClient, null, { timeout: 30000 });
  await page.waitForTimeout(2500);
  await page.evaluate(() => import('/dev/coop-dev.js'));
  const ok = await page.evaluate((n) => coopDev.lobby(n), name);
  const state = () => Promise.race([
    page.evaluate(() => coopDev.state()),
    sleep(5000).then(() => { throw new Error(`${name}'s page stopped responding`); }),
  ]);
  return { page, errors, state, ok };
}

async function waitFor(client, predicate, timeoutMs) {
  const end = Date.now() + timeoutMs;
  let s;
  while (Date.now() < end) {
    s = await client.state();
    if (predicate(s)) return s;
    await sleep(500);
  }
  return s;
}

(async () => {
  const server = spawn(process.execPath, [path.join(__dirname, '../server/server.js'), String(SERVER_PORT), '--verbose'], { stdio: ['ignore', 'pipe', 'pipe'] });
  let serverLog = '';
  server.stdout.on('data', (d) => (serverLog += d));
  server.stderr.on('data', (d) => (serverLog += d));
  let tunnel = null;
  let remoteHost;
  if (PUBLIC) {
    remoteHost = await new Promise((resolve) => {
      tunnel = share.startTunnel(SERVER_PORT, (url) => resolve(url + '/'));
      setTimeout(() => resolve(null), 60000);
    });
    check('cloudflared opens a public quick tunnel', !!remoteHost, remoteHost || share.info.tunnel);
    if (!remoteHost) {
      if (tunnel) tunnel.kill();
      server.kill();
      process.exit(1);
    }
    await sleep(8000); // a fresh trycloudflare hostname takes a few seconds to resolve
  } else {
    await new Promise((r) => proxy.listen(PROXY_PORT, '0.0.0.0', r));
    remoteHost = (share.lanUrls(PROXY_PORT)[0] || `http://127.0.0.1:${PROXY_PORT}/`).replace(/^http:/, TLS ? 'https:' : 'http:');
  }
  await sleep(1500);
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  try {
    const host = await openClient(browser, 'Host', `http://localhost:${SERVER_PORT}/`);
    check('host (localhost) reaches the lobby', host.ok);
    const created = await host.page.evaluate(() => coopDev.create(1, 2, 'Tunnel'));
    check('host creates a co-op match', created[0] === 'ok');
    await waitFor(host, (s) => s.me && s.me.hea > 0, 20000);

    const friend = await openClient(browser, 'Friend', remoteHost);
    check(`friend loads the game through the proxy (${remoteHost})`, true);
    check('friend reaches the lobby through the proxy', friend.ok);
    const origin = await friend.page.evaluate(() => [location.origin, $ММ.$ceTOI && $ММ.$ceTOI.socket && $ММ.$ceTOI.socket.io.uri]);
    check('friend\'s lobby connection uses the page\'s own address', origin[1] && origin[1].startsWith(origin[0]), `${origin[1]}`);
    const transport = await friend.page.evaluate(() => $ММ.$ceTOI.socket.io.engine.transport.name);
    check('friend upgrades to WebSocket through the proxy', transport === 'websocket' && (PUBLIC || stats.upgrades > 0), `${transport}${PUBLIC ? '' : `, ${stats.upgrades} upgrade(s)`}`);

    const joined = await friend.page.evaluate(() => coopDev.join(1000));
    let fs = await waitFor(friend, (s) => s.actors > 0 && s.me && s.me.hea > 0, 30000);
    check('friend joins and plays', joined[0] === 'ok' && fs.me && fs.me.hea > 0, `slot ${fs.slot}`);
    let hs = await waitFor(host, (s) => s.humans.some((h) => h.includes(':Friend:')), 15000);
    check('host and friend see each other', hs.humans.some((h) => h.includes(':Friend:')) && fs.humans.some((h) => h.includes(':Host:')));
    check('server sees the friend by forwarded address', /\[auth\] Friend \((?!::1)/.test(serverLog), (serverLog.match(/\[auth\] Friend \([^)]*\)/) || [''])[0]);

    // Level complete -> both back in one lobby; the host starts the next level and the friend follows.
    await host.page.evaluate(() => coopClient.missionComplete());
    fs = await waitFor(friend, (s) => s.frame === 'campaign' && s.lobby, 20000);
    check('level complete brings the friend back to the lobby through the proxy', fs.frame === 'campaign' && fs.lobby && fs.lobby.level === 2, JSON.stringify(fs.lobby));
    await waitFor(host, (s) => s.frame === 'campaign' && s.lobby, 20000);
    await host.page.evaluate(() => coopClient.screen.startLobby());
    fs = await waitFor(friend, (s) => s.match && s.match.map === 'c2a' && s.me && s.me.hea > 0, 30000);
    check('the host starts the next level and the friend follows', fs.match && fs.match.map === 'c2a' && fs.me && fs.me.hea > 0);

    const errs = [...host.errors, ...friend.errors];
    check('no page errors', errs.length === 0, errs.slice(0, 3).join(' | '));
  } catch (e) {
    check('test run', false, e.message);
  } finally {
    await browser.close().catch(() => {});
    if (tunnel) tunnel.kill();
    else proxy.close();
    server.kill();
  }
  const serverErrors = serverLog.split('\n').filter((l) => /\[(handler|tick|game error)\]/.test(l));
  check('no server errors', serverErrors.length === 0, serverErrors.slice(0, 3).join(' | '));
  console.log(failures ? `\n${failures} check(s) failed` : '\nall checks passed');
  process.exit(failures ? 1 : 0);
})();
