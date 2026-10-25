// Does co-op play each level like solo? For every level and difficulty, starts the level in real single player
// (difficulty screen, real click) and as a 1-player co-op game (same map: no per-player health scaling, no guests),
// and compares every character's type and max health. Any difference means co-op doesn't match solo there.
// usage: node tools/solo-parity.js [first] [last]   or   node tools/solo-parity.js 2,36,38
//        DIFFS=0,1,2,3 (default all)
const { spawn } = require('child_process');
const path = require('path');
const { chromium } = require('playwright-core');

const PORT = 2076;
const URL = `http://localhost:${PORT}/`;
const LIST = /,/.test(process.argv[2] || '') ? process.argv[2].split(',').map(Number) : null;
const FIRST = LIST ? 0 : parseInt(process.argv[2] || '0', 10);
const LAST = LIST ? 0 : parseInt(process.argv[3] || '41', 10);
const LEVELS = LIST || Array.from({ length: LAST - FIRST + 1 }, (_, k) => FIRST + k);
const DIFFS = (process.env.DIFFS || '0,1,2,3').split(',').map(Number);
const NAMES = ['Easy', 'Normal', 'Hard', 'Impossible'];
const BUTTON_Y = [275, 245, 215, 185]; // difficulty screen buttons in an 800x450 viewport
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let failures = 0;
function check(name, ok, detail) {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  ' + detail : ''}`);
  if (!ok) failures++;
}

// A fresh player at the main menu with every level unlocked.
async function atMenu(browser) {
  const context = await browser.newContext({ viewport: { width: 800, height: 450 } });
  const page = await context.newPage();
  await page.goto(URL);
  await page.waitForFunction(() => typeof $ММ === 'function' && globalThis.coopClient && currentFrameLabel === 'name_prompt', null, { timeout: 30000 });
  await page.waitForTimeout(1500);
  await page.evaluate(() => {
    globalThis.$AооАA = globalThis.$1еT1Н = 'Parity';
    globalThis.$HHolА = 41;
    try { HUD.$ТTTсH1(); } catch (e) {}
    globalThis.$pМоcT(); gotoAndStop('menu'); globalThis.$oеeес();
  });
  await page.waitForTimeout(800);
  return page;
}

const inGame = () => currentFrameLabel === 'gaming' && $0Ме1А && $0Ме1А[$НAlНc] && $0Ме1А[$НAlНc].hmax > 0;
const characters = () => ($0Ме1А || []).map((a) => (a ? `${a.char}:${Math.round(a.hmax)}` : '-'));

async function solo(browser, level, diff) {
  const page = await atMenu(browser);
  await page.evaluate((l) => { $lсосТ = l; $pМоcT(); gotoAndStop('difch'); $oеeес(); }, level);
  await page.waitForTimeout(1200);
  await page.mouse.move(395, BUTTON_Y[diff]);
  await page.mouse.move(400, BUTTON_Y[diff]);
  await page.waitForTimeout(200);
  await page.mouse.click(400, BUTTON_Y[diff]);
  const ok = await page.waitForFunction(inGame, null, { timeout: 30000 }).then(() => true, () => false);
  await page.waitForTimeout(1500);
  const r = ok ? await page.evaluate(characters) : null;
  await page.context().close();
  return r;
}

async function coop(browser, level, diff) {
  const page = await atMenu(browser);
  // The difficulty as the co-op lobby sets it: the solo flags, in the menu.
  await page.evaluate((d) => { $НOIHo = d === 0; $OАМАO = d >= 2; LOW_HPS = d === 3; }, diff);
  await page.evaluate(() => import('/dev/coop-dev.js'));
  await page.evaluate(() => coopDev.lobby('Parity'));
  await page.evaluate((l) => coopDev.create(l, 1, 'Parity'), level);
  const ok = await page.waitForFunction(inGame, null, { timeout: 30000 }).then(() => true, () => false);
  await page.waitForTimeout(1500);
  const r = ok ? await page.evaluate(characters) : null;
  await page.context().close();
  return r;
}

(async () => {
  const server = spawn(process.execPath, [path.join(__dirname, '../server/server.js'), String(PORT)], { stdio: ['ignore', 'pipe', 'pipe'] });
  let serverLog = '';
  server.stdout.on('data', (d) => (serverLog += d));
  await sleep(1500);
  if (!/co-op server running/.test(serverLog)) {
    console.log('FAIL  test server did not start (port in use?)');
    server.kill();
    process.exit(1);
  }
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const perDiff = {};
  try {
    for (const diff of DIFFS) {
      for (const level of LEVELS) {
        const [s, c] = await Promise.all([solo(browser, level, diff), coop(browser, level, diff)]);
        const name = `${NAMES[diff]} level ${level + 1} (c${level}a)`;
        let problems = [];
        if (!s) problems.push('solo level did not start');
        if (!c) problems.push('co-op level did not start');
        if (s && c) {
          const n = Math.max(s.length, c.length);
          for (let i = 0; i < n; i++) if (s[i] !== c[i]) problems.push(`#${i} solo ${s[i]} / co-op ${c[i]}`);
        }
        perDiff[diff] = perDiff[diff] || { pass: 0, fail: 0 };
        perDiff[diff][problems.length ? 'fail' : 'pass']++;
        check(name, problems.length === 0, problems.length ? `${problems.length} difference(s): ${problems.slice(0, 5).join('; ')}` : `${s.length} characters match`);
      }
    }
    for (const d of Object.keys(perDiff)) console.log(`SUMMARY ${NAMES[d]}: ${perDiff[d].pass} match solo, ${perDiff[d].fail} differ`);
  } catch (e) {
    check('test run', false, e.stack);
  } finally {
    await browser.close();
    server.kill();
  }
  console.log(failures ? `\n${failures} check(s) failed` : '\nall checks passed');
  process.exit(failures ? 1 : 0);
})();
