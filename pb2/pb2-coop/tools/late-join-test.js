// Late joiner sees the NPCs the host already killed as dead (catch-up snapshot, deadNpcs).
// usage: node tools/late-join-test.js            (needs Microsoft Edge installed)
const { spawn } = require('child_process');
const path = require('path');
const { chromium } = require('playwright-core');

const PORT = 2069;
const URL = `http://localhost:${PORT}/`;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let failures = 0;
function check(name, ok, detail) {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  ' + detail : ''}`);
  if (!ok) failures++;
}

async function openClient(browser, name) {
  const page = await (await browser.newContext({ viewport: { width: 800, height: 600 } })).newPage();
  const errors = [];
  let loads = 0;
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('load', () => loads++);
  await page.goto(URL);
  await page.waitForFunction(() => typeof $ММ === 'function' && typeof globalThis.coopClient === 'object', null, { timeout: 30000 });
  await page.waitForTimeout(3000);
  await page.evaluate(() => import('/dev/coop-dev.js'));
  await page.evaluate((n) => coopDev.lobby(n), name);
  return { page, errors, reloads: () => loads - 1 };
}

// NPC slots that are standing (alive) on this game.
const aliveNpcs = (page) => page.evaluate(() => ($0Ме1А || []).map((a, i) => (a && !a.$HМ0М1 && a.io && a.hea > 0 ? i : -1)).filter((i) => i >= 0));

(async () => {
  const server = spawn(process.execPath, [path.join(__dirname, '../server/server.js'), String(PORT)], { stdio: 'ignore' });
  let browser = null;
  const watchdog = setTimeout(() => {
    console.log('FAIL  test run  timed out');
    server.kill();
    if (browser) browser.close().catch(() => {});
    setTimeout(() => process.exit(1), 2000);
  }, 180000);
  await sleep(1500);
  browser = await chromium.launch({ channel: 'msedge', headless: true });
  try {
    const host = await openClient(browser, 'Host');
    await host.page.evaluate(() => coopDev.create(1, 2, 'Late'));
    await host.page.waitForFunction(() => coopDev.state().me && coopDev.state().me.hea > 0, null, { timeout: 30000 });
    await sleep(3000);
    // Three soldiers die on the host's game before anyone else is there.
    const killed = (await aliveNpcs(host.page)).slice(0, 3);
    await host.page.evaluate((ids) => ids.forEach((i) => { $0Ме1А[i].hea = -50; }), killed);
    await sleep(2000);
    const hostAlive = await aliveNpcs(host.page);
    check('three NPCs are down on the host', killed.length === 3 && killed.every((i) => !hostAlive.includes(i)), `killed ${killed}`);

    const guest = await openClient(browser, 'Guest');
    await guest.page.evaluate(() => coopDev.join(1000));
    await guest.page.waitForFunction(() => coopDev.state().me && coopDev.state().me.hea > 0, null, { timeout: 30000 });
    await sleep(5000);
    let guestAlive = await aliveNpcs(guest.page);
    check('the late joiner sees them dead', killed.every((i) => !guestAlive.includes(i)), `still standing: ${killed.filter((i) => guestAlive.includes(i))}`);
    check('the other NPCs are still alive for the joiner', guestAlive.length > 0 && hostAlive.every((i) => guestAlive.includes(i)),
      `host ${hostAlive.length}, guest ${guestAlive.length}`);
    await sleep(8000);
    guestAlive = await aliveNpcs(guest.page);
    check('they stay dead', killed.every((i) => !guestAlive.includes(i)), `standing again: ${killed.filter((i) => guestAlive.includes(i))}`);
    check('no page reloads (anti-tamper) and no page errors', host.reloads() === 0 && guest.reloads() === 0 &&
      host.errors.length + guest.errors.length === 0, [...host.errors, ...guest.errors].slice(0, 3).join(' | '));
  } catch (e) {
    check('test run', false, e.message);
  } finally {
    await browser.close().catch(() => {});
    server.kill();
  }
  clearTimeout(watchdog);
  console.log(failures ? `\n${failures} check(s) failed` : '\nall checks passed');
  process.exit(failures ? 1 : 0);
})();
