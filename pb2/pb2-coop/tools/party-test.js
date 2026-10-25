// Party edge cases with headless Edge clients: a full 4-player party, a 5th joiner on a full game,
// a guest leaving and someone taking the freed seat, and host-only campaign progress.
// usage: node tools/party-test.js
const { spawn } = require('child_process');
const path = require('path');
const { chromium } = require('playwright-core');

const PORT = 2065;
const URL = `http://localhost:${PORT}/`;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let failures = 0;
function check(name, ok, detail) {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  ' + detail : ''}`);
  if (!ok) failures++;
}

async function openClient(browser, name, unlocked = 0) {
  const context = await browser.newContext({ viewport: { width: 640, height: 360 } });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(`${name}: ${e.message}`));
  await page.goto(URL);
  await page.waitForFunction(() => typeof $ММ === 'function' && typeof globalThis.coopClient === 'object', null, { timeout: 30000 });
  await page.waitForTimeout(2500);
  await page.evaluate(() => import('/dev/coop-dev.js'));
  await page.evaluate((lvl) => { globalThis.$HHolА = lvl; }, unlocked);
  await page.evaluate((n) => coopDev.lobby(n), name);
  const state = () => Promise.race([
    page.evaluate(() => coopDev.state()),
    sleep(5000).then(() => { throw new Error(`${name}'s page stopped responding`); }),
  ]);
  return { name, context, page, errors, state };
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

const inGameAlive = (s) => s.inMatch && s.actors > 0 && !s.spectator && s.me && s.me.hea > 0;

(async () => {
  const server = spawn(process.execPath, [path.join(__dirname, '../server/server.js'), String(PORT)], { stdio: ['ignore', 'pipe', 'pipe'] });
  let serverLog = '';
  server.stdout.on('data', (d) => (serverLog += d));
  server.stderr.on('data', (d) => (serverLog += d));
  let browser = null;
  const watchdog = setTimeout(() => {
    console.log('FAIL  test run  timed out');
    server.kill();
    if (browser) browser.close().catch(() => {});
    setTimeout(() => process.exit(1), 2000);
  }, 360000);
  await sleep(1500);

  browser = await chromium.launch({ channel: 'msedge', headless: true });
  const all = [];
  try {
    // Host has unlocked up to level 2 (index 1) and hosts level 2 for 4 players.
    const host = await openClient(browser, 'Host', 1);
    all.push(host);
    const created = await host.page.evaluate(() => coopDev.create(1, 4, 'Party'));
    check('host creates a 4-player match on level 2', created[0] === 'ok', JSON.stringify(created));
    await waitFor(host, inGameAlive, 20000);

    const guests = [];
    for (const n of ['Ann', 'Ben', 'Cal']) {
      const g = await openClient(browser, n, 0);
      all.push(g);
      const r = await g.page.evaluate(() => coopDev.join(1000));
      const s = await waitFor(g, inGameAlive, 30000);
      check(`${n} joins and plays`, r[0] === 'ok' && inGameAlive(s), `slot ${s.slot}`);
      guests.push({ client: g, slot: s.slot });
    }
    const slots = [0, ...guests.map((g) => g.slot)];
    check('every player has their own slot', new Set(slots).size === 4, slots.join(','));

    let hs = await waitFor(host, (s) => s.humans.length >= 0 && ['Ann', 'Ben', 'Cal'].every((n) => s.humans.some((h) => h.includes(':' + n + ':'))), 15000);
    check('host sees all three guests', ['Ann', 'Ben', 'Cal'].every((n) => hs.humans.some((h) => h.includes(':' + n + ':'))));
    const cs = await guests[2].client.state();
    check('a guest sees everyone else', ['Host', 'Ann', 'Ben'].every((n) => cs.humans.some((h) => h.includes(':' + n + ':'))));
    // Level 2's Usurpation Soldiers have 70 health in the map; 4 players = x1.5.
    const soldier = hs.humans.find((h) => /:Usurpation Soldier:/.test(h));
    check('enemy health is scaled for 4 players (x1.5: 70 -> 105)', !!soldier && soldier.endsWith(':105'), soldier || hs.humans.slice(0, 8).join(' '));

    // A 5th player on a full game ends up spectating.
    const extra = await openClient(browser, 'Dan', 0);
    all.push(extra);
    const r5 = await extra.page.evaluate(() => coopDev.join(1000));
    const es = await waitFor(extra, (s) => s.inMatch && s.actors > 0, 30000);
    check('5th player on a full game spectates', r5[0] === 'ok' && es.spectator === true, `spectator=${es.spectator} slot=${es.slot}`);
    await extra.context.close();
    all.splice(all.indexOf(extra), 1);

    // A guest leaves mid-level: the others keep playing, the seat frees up, and a newcomer takes it.
    const leaver = guests[1];
    await leaver.client.context.close();
    all.splice(all.indexOf(leaver.client), 1);
    await sleep(4000);
    hs = await host.state();
    check('host keeps playing after a guest leaves', inGameAlive(hs));
    check('the leaver is gone from the host\'s game', !hs.humans.some((h) => h.includes(':Ben:')));
    const comer = await openClient(browser, 'Eve', 0);
    all.push(comer);
    await comer.page.evaluate(() => coopDev.join(1000));
    const ns = await waitFor(comer, inGameAlive, 30000);
    check('a newcomer takes the freed seat', inGameAlive(ns) && ns.slot === leaver.slot, `slot ${ns.slot} (freed ${leaver.slot})`);

    // Progress: completing the host's highest unlocked level unlocks the next one for the host only.
    const before = await Promise.all([host, guests[0].client].map((c) => c.page.evaluate(() => globalThis.$HHolА)));
    await host.page.evaluate(() => coopClient.missionComplete());
    // Everyone still in the match goes back to the campaign screen, together in one lobby on the next level.
    const inLobby = (s) => s.frame === 'campaign' && s.lobby && s.lobby.level === 2;
    hs = await waitFor(host, inLobby, 20000);
    const players = all.filter((c) => c !== host);
    const lobbyStates = await Promise.all(players.map((c) => waitFor(c, inLobby, 20000)));
    const ids = new Set([hs, ...lobbyStates].map((s) => s.lobby && s.lobby.id));
    check('level complete regroups everyone in one lobby on level 3', inLobby(hs) && hs.lobby.isHost && ids.size === 1 &&
      hs.lobby.members.length === all.length, JSON.stringify(hs.lobby));
    await host.page.evaluate(() => coopClient.screen.startLobby());
    hs = await waitFor(host, (s) => s.match && s.match.map === 'c2a' && s.actors > 0, 30000);
    const after = await Promise.all([host, guests[0].client].map((c) => c.page.evaluate(() => globalThis.$HHolА)));
    check('host unlocks the next level', after[0] === before[0] + 1, `${before[0]} -> ${after[0]}`);
    check("guest's own save is untouched", after[1] === before[1], `${before[1]} -> ${after[1]}`);
    const gs = await waitFor(guests[0].client, (s) => s.match && s.match.map === 'c2a' && inGameAlive(s), 30000);
    check('host starts level 3, party plays it together', hs.match.map === 'c2a' && inGameAlive(gs));

    // The host closes their tab mid-match: the match goes on, and the co-op screen's game list keeps working for
    // others (the listing used to crash on the departed owner's missing stats record).
    await host.context.close();
    all.splice(all.indexOf(host), 1);
    await sleep(3000);
    const viewer = await openClient(browser, 'Fay', 0);
    all.push(viewer);
    await viewer.page.evaluate(() => { globalThis.$pМоcT(); gotoAndStop('campaign'); globalThis.$oеeес(); });
    const listed = await waitFor(viewer, () => true, 1000).then(() => viewer.page.waitForFunction(
      () => coopClient.screen.state().games !== null, null, { timeout: 15000, polling: 500 }).then(() => true, () => false));
    const screen = await viewer.page.evaluate(() => coopClient.screen.state());
    check('game list still loads after the host left', listed && !String(screen.status).startsWith('!'), screen.status || `${(screen.games || []).length} game(s)`);
    check('the match is still listed', (screen.games || []).some((m) => m.title === 'Party'));

    const errs = all.flatMap((c) => c.errors);
    check('no page errors', errs.length === 0, errs.slice(0, 3).join(' | '));
  } catch (e) {
    check('test run', false, e.message);
  } finally {
    await browser.close().catch(() => {});
    server.kill();
  }
  clearTimeout(watchdog);
  const serverErrors = serverLog.split('\n').filter((l) => /\[(handler|tick|game error)\]/.test(l));
  check('no server errors', serverErrors.length === 0, serverErrors.slice(0, 3).join(' | '));
  console.log(failures ? `\n${failures} check(s) failed` : '\nall checks passed');
  process.exit(failures ? 1 : 0);
})();
