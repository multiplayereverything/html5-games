// Can map vehicles (level 1's drones) be destroyed in co-op? Brings drone 0's health to 0 on the host and on the
// guest and reports whether it breaks, like it does in single player.
// Also reports whether the drone's health bar is shown (multiplayer hides vehicle bars).
// usage: node tools/drone-check.js
const { spawn } = require('child_process');
const path = require('path');
const { chromium } = require('playwright-core');

const PORT = 2070;
const URL = `http://localhost:${PORT}/`;
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

const drone = (i) => `(() => { const v = $сoopT[${i}]; return v ? \`bar=\${v.gui && v.gui.visible ? 1 : 0} hea=\${Math.round(v.hea)} broken=\${v.$оeoТе ? 1 : 0} type=\${v.$eрlсe}\` : 'none'; })()`;

(async () => {
  const server = spawn(process.execPath, [path.join(__dirname, '../server/server.js'), String(PORT)], { stdio: 'ignore' });
  await sleep(1500);
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  try {
    const host = await page(browser);
    await host.evaluate(() => coopDev.lobby('Host'));
    await host.evaluate(() => coopDev.create(0, 2, 'Drone check'));
    await host.waitForFunction(() => currentFrameLabel === 'gaming' && $сoopT && $сoopT.length > 4, null, { timeout: 30000 });
    const guest = await page(browser);
    await guest.evaluate(() => coopDev.lobby('Guest'));
    await guest.evaluate(() => coopDev.join(1000));
    await guest.waitForFunction(() => currentFrameLabel === 'gaming' && $сoopT && $сoopT.length > 4, null, { timeout: 30000 });
    await sleep(3000);
    console.log('before   host', await host.evaluate(drone(0)), '| guest', await guest.evaluate(drone(0)));
    await host.evaluate(() => { $сoopT[0].hea = 0; });
    await sleep(1500);
    console.log('host hit host', await host.evaluate(drone(0)), '| guest', await guest.evaluate(drone(0)));
    await guest.evaluate(() => { $сoopT[4].hea = 0; });
    await sleep(1500);
    console.log('guest hit (drone 4) host', await host.evaluate(drone(4)), '| guest', await guest.evaluate(drone(4)));
  } finally {
    await browser.close();
    server.kill();
  }
})();
