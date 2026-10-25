// Does the lobby difficulty change the fight? Host and guest start level 2 from a co-op lobby on each difficulty,
// the host walks into the enemies firing (real keyboard/mouse), and the host's health is sampled. Also reports the
// difficulty flags in both games and how the nearest enemies behave.
// usage: node tools/difficulty-probe.js [level=1] [difficulties=0,1,2]
const { spawn } = require('child_process');
const path = require('path');
const { chromium } = require('playwright-core');

const PORT = 2074;
const URL = `http://localhost:${PORT}/`;
const LEVEL = parseInt(process.argv[2] || '1', 10);
const DIFFS = (process.argv[3] || '0,1,2').split(',').map(Number);
const NAMES = ['Easy', 'Normal', 'Hard', 'Impossible'];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function client(browser, name) {
  const page = await (await browser.newContext({ viewport: { width: 800, height: 600 } })).newPage();
  await page.goto(URL);
  await page.waitForFunction(() => typeof $ММ === 'function' && globalThis.coopClient && currentFrameLabel === 'name_prompt', null, { timeout: 30000 });
  await page.waitForTimeout(1500);
  await page.evaluate((n) => {
    globalThis.$AооАA = n; globalThis.$1еT1Н = n; globalThis.$HHolА = 41;
    try { HUD.$ТTTсH1(); } catch (e) {}
    globalThis.$pМоcT(); gotoAndStop('menu'); globalThis.$oеeес();
  }, name);
  await page.waitForTimeout(800);
  await page.evaluate(() => { globalThis.$pМоcT(); gotoAndStop('campaign'); globalThis.$oеeес(); });
  await page.waitForTimeout(500);
  return page;
}

const until = (page, fn, arg, ms) => page.waitForFunction(fn, arg, { timeout: ms, polling: 250 }).then(() => true, () => false);

(async () => {
  const server = spawn(process.execPath, [path.join(__dirname, '../server/server.js'), String(PORT)], { stdio: 'ignore' });
  await sleep(1500);
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  try {
    for (const diff of DIFFS) {
      const host = await client(browser, 'Host');
      const guest = await client(browser, 'Guest');
      await host.evaluate(() => coopClient.screen.hostLobby());
      await until(guest, () => (coopClient.screen.state().lobbies || []).length > 0, null, 10000);
      await guest.evaluate(() => coopClient.screen.joinLobby(coopClient.screen.state().lobbies[0].id));
      await host.evaluate(([l, d]) => { coopClient.screen.selectLevel(l); coopClient.screen.selectDifficulty(d); }, [LEVEL, diff]);
      await until(guest, (d) => (coopClient.screen.state().lobby || {}).difficulty === d, diff, 5000);
      await sleep(500);
      await host.evaluate(() => coopClient.screen.startLobby());
      const inLevel = (id) => $ММ.match_details && $ММ.match_details.map_id === id && currentFrameLabel === 'gaming' && $0Ме1А[$НAlНc] && $0Ме1А[$НAlНc].hea > 0;
      await until(host, inLevel, `c${LEVEL}a`, 30000);
      await until(guest, inLevel, `c${LEVEL}a`, 30000);
      await sleep(1500);
      const flags = (p) => p.evaluate(() => `${$НOIHo ? 'E' : '-'}${$OАМАO ? 'H' : '-'}${LOW_HPS ? 'I' : '-'}`);
      const fh = await flags(host), fg = await flags(guest);
      // Enemy health at the start, on both screens (Hard raises weak enemies' health; co-op also scales it per player).
      const startHea = (p) => p.evaluate(() => $0Ме1А.filter((a) => a && !a.$HМ0М1 && a.io).slice(0, 6).map((a) => `${Math.round(a.hea)}/${Math.round(a.hmax)}`).join(' '));
      const myMax = (p) => p.evaluate(() => `${Math.round($0Ме1А[$НAlНc].hea)}/${Math.round($0Ме1А[$НAlНc].hmax)}`);
      console.log(`${NAMES[diff].padEnd(10)} enemy hea/hmax host: ${await startHea(host)} | guest: ${await startHea(guest)} | my hea/hmax host ${await myMax(host)} guest ${await myMax(guest)}`);

      // The host walks right firing for 6 s; health sampled every second for 12 s.
      await host.bringToFront();
      await host.keyboard.down('d');
      await host.mouse.move(700, 300);
      const hea = [];
      const t0 = Date.now();
      let released = false;
      while (Date.now() - t0 < 12000) {
        if (!released && Date.now() - t0 > 6000) { await host.keyboard.up('d'); released = true; }
        await host.mouse.down(); await sleep(250); await host.mouse.up(); await sleep(250);
        if (hea.length < Math.floor((Date.now() - t0) / 1000)) hea.push(await host.evaluate(() => Math.round($0Ме1А[$НAlНc].hea)));
      }
      if (!released) await host.keyboard.up('d');
      // Enemy limb values: on Hard the game blends them toward hea*0.9-30 every frame.
      const limbs = await host.evaluate(() => $0Ме1А.filter((a) => a && !a.$HМ0М1 && a.io && a.hea > 0).slice(0, 3)
        .map((a) => `${Math.round(a.hea)}:${Math.round(a.$ААНММ)}/${Math.round(a.$НТcep)}`).join(' '));
      console.log(`${NAMES[diff].padEnd(10)} flags host ${fh} guest ${fg} | host health per second: ${hea.join(' ')} | enemies hea:limbs ${limbs}`);
      await host.context().close();
      await guest.context().close();
    }
  } finally {
    await browser.close();
    server.kill();
  }
})();
