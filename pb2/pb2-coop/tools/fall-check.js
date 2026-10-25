// Where does the player end up on a level? Compares single player, a co-op match with the stock map (party of
// 1: nothing appended, no HP scaling) and a co-op match for 2. Prints the player's height over ~20 s.
// usage: node tools/fall-check.js [level=0]
const { spawn } = require('child_process');
const path = require('path');
const { chromium } = require('playwright-core');

const PORT = 2069;
const URL = `http://localhost:${PORT}/`;
const LEVEL = parseInt(process.argv[2] || '0', 10);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function page(browser) {
  const p = await (await browser.newContext({ viewport: { width: 800, height: 450 } })).newPage();
  p.on('pageerror', (e) => console.log('  pageerror:', e.message.slice(0, 160)));
  await p.goto(URL);
  await p.waitForFunction(() => typeof $ММ === 'function' && globalThis.coopClient, null, { timeout: 30000 });
  await p.waitForTimeout(2500);
  await p.evaluate(() => import('/dev/coop-dev.js'));
  return p;
}

async function track(p, label) {
  const out = [];
  for (let i = 0; i < 16; i++) {
    await sleep(i < 8 ? 300 : 1000);
    const s = await Promise.race([p.evaluate(() => {
      const me = $0Ме1А && $0Ме1А[$НAlНc];
      const car = me && me.$HНрНТ >= 0 ? $сoopT[me.$HНрНТ] : null;
      const pod = car ? `(pod ${Math.round(car.hea)}hp broken=${car.$оeoТе ? 1 : 0} frame=${car.currentFrame} rider=${car.$OOHAТ} io=${car.io ? 1 : 0})` : '';
      return me ? `${Math.round(me.hea)}hp@${Math.round(me.x)},${Math.round(me.y)}${pod}` : currentFrameLabel;
    }), sleep(3000).then(() => 'TIMEOUT')]);
    out.push(s);
  }
  console.log(`${label}:\n  ${out.join('  ')}`);
}

(async () => {
  const server = spawn(process.execPath, [path.join(__dirname, '../server/server.js'), String(PORT)], { stdio: 'ignore' });
  await sleep(1500);
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  try {
    // Single player: the difficulty screen's start path ($lсосТ = level, then $TO1eH("c<N>a")).
    if (process.argv[3] !== "mp1") {
    const sp = await page(browser);
    await sp.evaluate(() => {
      globalThis.$AооАA = 'Solo'; globalThis.$1еT1Н = 'Solo';
      try { HUD.$ТTTсH1(); } catch (e) {}
      globalThis.$pМоcT(); gotoAndStop('menu'); globalThis.$oеeес();
    });
    await sleep(1000);
    await sp.evaluate((lvl) => {
      globalThis.$lсосТ = lvl;
      globalThis.$TO1eH('c' + lvl + 'a');
    }, LEVEL);
    await track(sp, `single player, level ${LEVEL + 1}`);
    }

    for (const party of (process.argv[3] === "sp" ? [] : process.argv[3] === "mp1" ? [1] : [1, 2])) {
      const mp = await page(browser);
      await mp.evaluate(() => coopDev.lobby('Host'));
      await mp.evaluate(([lvl, n]) => coopDev.create(lvl, n, 'Fall check'), [LEVEL, party]);
      if (party === 2) {
        // A guest joins and is tracked instead: their pod is a copy appended to the map.
        await sleep(3000);
        const uid = await mp.evaluate(() => $ММ.match_details.uid);
        const guest = await page(browser);
        await guest.evaluate(() => coopDev.lobby('Guest'));
        await guest.evaluate((id) => coopDev.join(id), uid);
        await track(guest, `co-op match, guest of a party of 2, level ${LEVEL + 1}`);
      } else {
        await track(mp, `co-op match, party of ${party}${party === 1 ? ' (stock map)' : ''}, level ${LEVEL + 1}`);
      }
    }
  } finally {
    await browser.close().catch(() => {});
    server.kill();
    process.exit(0);
  }
})();
