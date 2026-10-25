// Test helper: a headless host that creates a co-op match and keeps it open, so a real browser can join it.
// usage: node tools/host-bot.js [serverUrl] [level] [party] [minutes]
const { chromium } = require('playwright-core');

const URL = process.argv[2] || 'http://localhost:2053/';
const LEVEL = parseInt(process.argv[3] || '1', 10);
const PARTY = parseInt(process.argv[4] || '2', 10);
const MINUTES = parseFloat(process.argv[5] || '10');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await (await browser.newContext({ viewport: { width: 800, height: 450 } })).newPage();
  await page.goto(URL);
  await page.waitForFunction(() => typeof $ММ === 'function' && globalThis.coopClient, null, { timeout: 30000 });
  await page.waitForTimeout(2500);
  await page.evaluate(() => import('/dev/coop-dev.js'));
  await page.evaluate(() => coopDev.lobby('HostBot'));
  console.log('create:', JSON.stringify(await page.evaluate(([l, p]) => coopDev.create(l, p, 'HostBot co-op'), [LEVEL, PARTY])));
  const end = Date.now() + MINUTES * 60000;
  while (Date.now() < end) {
    await page.waitForTimeout(5000);
    const s = await Promise.race([page.evaluate(() => coopDev.state()), new Promise((r) => setTimeout(() => r(null), 4000))]);
    console.log(new Date().toISOString().slice(11, 19), s ? `${s.match && s.match.map} me=${JSON.stringify(s.me)} humans=${s.humans.filter((h) => !/Soldier|Security|Drone|Civil|Usurp/.test(h)).join(',')}` : 'host page not responding');
  }
  await browser.close();
})();
