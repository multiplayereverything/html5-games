// What do two co-op players see? Compares the enemies (non-human actors) on the host's and the guest's screen,
// then restarts the level (mission failed) and reports who comes back alive.
// usage: node tools/sync-probe.js [level=1]
const { spawn } = require('child_process');
const path = require('path');
const { chromium } = require('playwright-core');

const PORT = 2071;
const URL = `http://localhost:${PORT}/`;
const LEVEL = parseInt(process.argv[2] || '1', 10);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function page(browser, name) {
  const p = await (await browser.newContext({ viewport: { width: 800, height: 600 } })).newPage();
  p.on('pageerror', (e) => console.log(`  ${name} pageerror:`, e.message.slice(0, 160)));
  await p.goto(URL);
  await p.waitForFunction(() => typeof $ММ === 'function' && globalThis.coopClient, null, { timeout: 30000 });
  await p.waitForTimeout(2500);
  await p.evaluate(() => import('/dev/coop-dev.js'));
  await p.evaluate((n) => coopDev.lobby(n), name);
  return p;
}

const snapshot = () => {
  const a = $0Ме1А || [];
  const me = a[$НAlНc];
  return {
    map: $ММ.match_details && $ММ.match_details.map_id,
    detailsTag: $ММ.match_details && ($ММ.match_details.__probe || ($ММ.match_details.__probe = Math.random().toString(36).slice(2, 6))),
    me: me && { slot: $НAlНc, hea: Math.round(me.hea), x: Math.round(me.x), y: Math.round(me.y), guns: me.$МАТОе },
    canSpawn: coopClient.canSpawn(),
    npcs: a.map((n, i) => (n && !n.$HМ0М1 ? `${i}:${Math.round(n.x)},${Math.round(n.y)}:${Math.round(n.hea)}` : null)).filter(Boolean).slice(0, 8),
  };
};

(async () => {
  const server = spawn(process.execPath, [path.join(__dirname, '../server/server.js'), String(PORT)], { stdio: 'ignore' });
  await sleep(1500);
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  try {
    const host = await page(browser, 'Host');
    await host.evaluate((l) => coopDev.create(l, 2, 'Sync probe'), LEVEL);
    await host.waitForFunction(() => currentFrameLabel === 'gaming' && $0Ме1А.length > 0, null, { timeout: 30000 });
    const guest = await page(browser, 'Guest');
    await guest.evaluate(() => coopDev.join(1000));
    await guest.waitForFunction(() => currentFrameLabel === 'gaming' && $0Ме1А.length > 0, null, { timeout: 30000 });
    if (process.argv[3] === 'fight') {
      // The host walks right into the enemies (holding D) and fires (left mouse) for a while.
      await host.bringToFront();
      await host.keyboard.down('d');
      await host.mouse.move(700, 300);
      for (let k = 0; k < 12; k++) { await host.mouse.down(); await sleep(300); await host.mouse.up(); await sleep(200); }
      await host.keyboard.up('d');
    }
    for (const t of [3, 10]) {
      await sleep(t === 3 ? 3000 : 7000);
      const [h, g] = [await host.evaluate(snapshot), await guest.evaluate(snapshot)];
      console.log(`t=${t}s host  me=${JSON.stringify(h.me)} npcs=${h.npcs.join(' ')}`);
      console.log(`t=${t}s guest me=${JSON.stringify(g.me)} npcs=${g.npcs.join(' ')}`);
    }
    // Triggers (remaining runs, enabled) and doors/movables (position) must match on both screens.
    const world = () => ({
      triggers: ($eННА || []).map((t) => (t ? `${t.$cААТ1}${t.$oOlОO ? '' : 'x'}` : '-')).join(','),
      movables: ($АAHОе || []).map((m) => (m ? `${Math.round(m.x)},${Math.round(m.y)}` : '-')).join(' '),
    });
    const [hw, gw] = [await host.evaluate(world), await guest.evaluate(world)];
    const diff = (a, b) => a.split(/[ ,]/).filter((v, k) => v !== b.split(/[ ,]/)[k]).length;
    console.log(`triggers differ in ${diff(hw.triggers, gw.triggers)} of ${hw.triggers.split(',').length}; movables differ in ${diff(hw.movables, gw.movables)}`);
    if (diff(hw.triggers, gw.triggers)) console.log('  host ', hw.triggers, '\n  guest', gw.triggers);
    const before = [await host.evaluate(snapshot), await guest.evaluate(snapshot)].map((s) => s.detailsTag);
    if (process.argv[3] === 'wipe') {
      // As players do it: guest goes down first, then the host (Esc > Respawn), so the team wipe restarts.
      for (const p of [guest, host]) {
        await p.bringToFront();
        await p.keyboard.press('Escape');
        await sleep(800);
        await p.mouse.move(395, 336);
        await p.mouse.move(400, 338);
        await sleep(200);
        await p.mouse.click(400, 338);
        await sleep(4000);
        console.log('  downed:', JSON.stringify((await p.evaluate(snapshot)).me));
      }
    } else await host.evaluate(() => coopClient.missionFailed('probe'));
    for (const t of [6, 12, 20]) {
      await sleep(t === 6 ? 6000 : t === 12 ? 6000 : 8000);
      const r = [];
      for (const p of [host, guest]) { const s = await p.evaluate(snapshot); r.push(`canSpawn=${s.canSpawn} ${JSON.stringify(s.me)}`); }
      console.log(`t+${t}s host ${r[0]} | guest ${r[1]}`);
    }
    for (const [n, p] of [['host', host], ['guest', guest]]) {
      const s = await p.evaluate(snapshot);
      console.log(`after restart ${n}: map=${s.map} details ${s.detailsTag === before[n === 'host' ? 0 : 1] ? 'SAME object' : 'new object'} canSpawn=${s.canSpawn} me=${JSON.stringify(s.me)}`);
    }
  } finally {
    await browser.close();
    server.kill();
  }
})();
