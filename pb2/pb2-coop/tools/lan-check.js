// Checks that the co-op server is reachable on this PC's LAN addresses (what a friend on the same Wi-Fi
// opens): the game page, the patched co-op client, and a socket.io handshake.
// usage: node tools/lan-check.js
const { spawn } = require('child_process');
const http = require('http');
const path = require('path');
const share = require('../server/share');

const PORT = 2066;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function get(url) {
  return new Promise((resolve) => {
    http.get(url, { timeout: 5000 }, (res) => {
      let body = '';
      res.on('data', (d) => (body += d));
      res.on('end', () => resolve({ status: res.statusCode, body }));
    }).on('error', (e) => resolve({ status: 0, body: e.message }));
  });
}

async function loadsInBrowser(base) {
  const { chromium } = require('playwright-core');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  try {
    const page = await browser.newPage();
    const reports = [];
    page.on('request', (r) => { if (/report_error/.test(r.url())) reports.push(decodeURIComponent((r.postData() || '').split('&')[0]).slice(8, 120)); });
    page.on('pageerror', (e) => reports.push(e.message.slice(0, 120)));
    await page.goto(base);
    const ready = await page.waitForFunction(() => globalThis.currentFrameLabel === 'name_prompt', null, { timeout: 40000 }).then(() => true, () => false);
    await page.waitForTimeout(1000);
    return { ok: ready && reports.length === 0, detail: `${ready ? 'reached the name prompt' : 'never finished loading'}, ${reports.length} error report(s)${reports.length ? ': ' + reports[0] : ''}` };
  } finally {
    await browser.close();
  }
}

(async () => {
  const server = spawn(process.execPath, [path.join(__dirname, '../server/server.js'), String(PORT)], { stdio: 'ignore' });
  await sleep(1500);
  let failures = 0;
  const urls = share.lanUrls(PORT);
  if (urls.length === 0) console.log('no LAN addresses found');
  for (const base of urls) {
    const page = await get(base);
    const client = await get(base + 'coop/coop-client.js');
    const sock = await get(base + 'socket.io/?EIO=4&transport=polling');
    const ok = page.status === 200 && page.body.includes('coop/coop-client.js') && client.status === 200 && sock.status === 200 && sock.body.includes('"sid"');
    console.log(`${ok ? 'PASS' : 'FAIL'}  ${base}  page ${page.status}, co-op client ${client.status}, socket.io ${sock.status}`);
    if (!ok) failures++;
    // A friend's browser on this address: a plain-http page from another machine, which lacks some browser APIs
    // the game uses (crypto.subtle: no images at all before secure-context.js). The game must finish loading
    // without reporting errors.
    const loaded = await loadsInBrowser(base);
    console.log(`${loaded.ok ? 'PASS' : 'FAIL'}  ${base}  game loads in a browser  ${loaded.detail}`);
    if (!loaded.ok) failures++;
  }
  server.kill();
  console.log(failures ? `\n${failures} address(es) failed` : '\nall LAN addresses reachable');
  process.exit(failures ? 1 : 0);
})();
