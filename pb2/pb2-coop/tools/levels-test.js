// Plays every campaign level the way players do: host and guest (headless Edge) in a lobby, the host picks the
// level and starts it. Per level: both load in alive with no errors, each holds their own equipment, triggers
// and doors match on both screens (NPCs: reported only, they use the stock sync), and completing it brings both
// back to one lobby.
// Also samples server memory between levels.
const { spawn } = require('child_process');
const http = require('http');
const path = require('path');
const { chromium } = require('playwright-core');

const PORT = 2063;
const URL = `http://localhost:${PORT}/`;
// node tools/levels-test.js [first] [last]   or   node tools/levels-test.js 8,14,26   (level indexes, 0 = level 1)
const LIST = /,/.test(process.argv[2] || '') ? process.argv[2].split(',').map(Number) : null;
const FIRST = LIST ? LIST[0] : parseInt(process.argv[2] || '0', 10);
const LAST = LIST ? LIST[LIST.length - 1] : parseInt(process.argv[3] || '41', 10);
const LEVELS = LIST || Array.from({ length: LAST - FIRST + 1 }, (_, k) => FIRST + k);
// DIFFS=0,1,2,3 runs every level on each difficulty (0 easy .. 3 impossible) and also checks every character's
// health against the solo rules; default: Normal only.
const DIFFS = (process.env.DIFFS || '1').split(',').map(Number);
const DIFF_NAMES = ['Easy', 'Normal', 'Hard', 'Impossible'];
const coop = require('../server/coop');

// Expected max health of every character (index = actor slot) on a co-op map for a difficulty, as the game computes
// it: the co-op map's value (enemies already scaled per player), then Hard's boost for non-human characters
// (max under 300 -> halfway to 300), then Impossible's cap per character type (below 2000 health).
const IMPOSSIBLE_CAP = { 1: 130, 2: 130, 3: 130, 4: 100, 6: 150, 7: 210, 8: 130, 9: 190, 11: 300, 13: 150, 14: 170, 15: 350,
  16: 200, 49: 150, 70: 150, 71: 130 };
function expectedHealth(mapId, diff) {
  const xml = coop.build(mapId, 2, []).xml;
  const actors = xml.match(/<(player|enemy)\s[^>]*\/>/g) || [];
  const num = (t, n) => parseFloat((t.match(new RegExp(`\\s${n}="([^"]*)"`)) || [])[1]);
  return actors.map((t) => {
    const human = t.startsWith('<player');
    let hea = num(t, 'hea'), hmax = num(t, 'hmax');
    const char = num(t, 'char');
    // Player characters and the second hero: solo's hero health, 500 (+50 per armor upgrade; the test saves have
    // none), then only Impossible's cap.
    const heroType = char === 1 || char === 3 || (char >= 40 && char <= 49); // level 42's character keeps its own
    if ((human || char === 3) && heroType) {
      hea = hmax = 500;
    } else if (diff >= 2 && hmax > 0 && hmax < 300) {
      if (hea > 0) hea = (hea + 300) / 2;
      hmax = (hmax + 300) / 2;
    }
    if (diff === 3 && hea < 2000) {
      let cap = IMPOSSIBLE_CAP[char] || ((char >= 40 && char <= 48) ? 130 : 130);
      if (mapId === 'c38a' && char === 3) cap = 10000;
      hmax = Math.min(hmax, cap);
    }
    return { hmax: Math.round(hmax), char, human };
  });
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let failures = 0;
function check(name, ok, detail) {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  ' + detail : ''}`);
  if (!ok) failures++;
}

function serverInfo() {
  return new Promise((resolve) => {
    http.get(URL + 'coop/info.json', (res) => {
      let body = '';
      res.on('data', (d) => (body += d));
      res.on('end', () => { try { resolve(JSON.parse(body)); } catch (e) { resolve(null); } });
    }).on('error', () => resolve(null));
  });
}

// A player on the co-op campaign screen with every level unlocked and one gun as equipment for both heroes.
async function client(browser, name, gun) {
  const context = await browser.newContext({ viewport: { width: 800, height: 450 } });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto(URL);
  await page.waitForFunction(() => typeof $ММ === 'function' && globalThis.coopClient && currentFrameLabel === 'name_prompt', null, { timeout: 30000 });
  await page.waitForTimeout(1500);
  await page.evaluate(([n, g]) => {
    globalThis.$AооАA = n;
    globalThis.$1еT1Н = n;
    globalThis.$HHolА = 41;
    globalThis.$ll11o = [{ mdl: g, upg: 0 }];
    globalThis.$AАcco = [{ mdl: g, upg: 0 }];
    try { HUD.$ТTTсH1(); } catch (e) {}
    globalThis.$pМоcT(); gotoAndStop('menu'); globalThis.$oеeес();
  }, [name, gun]);
  await page.waitForTimeout(800);
  await page.evaluate(() => { globalThis.$pМоcT(); gotoAndStop('campaign'); globalThis.$oеeес(); });
  await page.waitForTimeout(500);
  await page.evaluate(() => import('/dev/coop-dev.js'));
  return { page, errors, state: () => page.evaluate(() => coopDev.state()) };
}

async function until(c, fn, arg, ms) {
  try { await c.page.waitForFunction(fn, arg, { timeout: ms, polling: 250 }); return true; } catch (e) { return false; }
}

const onLevel = (id) => {
  const me = $0Ме1А && $0Ме1А[$НAlНc];
  return $ММ.match_details && $ММ.match_details.map_id === id && currentFrameLabel === 'gaming' && me && me.hea > 0;
};
const inLobby = () => stage.currentFrameLabel === 'campaign' && coopClient.screen.state().lobby;

// What both screens must agree on, and what this player holds.
const world = (gun) => ({
  triggers: ($eННА || []).map((t) => (t ? `${t.$cААТ1}${t.$oOlОO ? '' : 'x'}` : '-')).join(','),
  movables: ($АAHОе || []).map((m) => (m ? `${Math.round(m.x)},${Math.round(m.y)}` : '-')).join(' '),
  movableTargets: ($АAHОе || []).map((m) => (m ? `${Math.round(m.tarx)},${Math.round(m.tary)}${m.$1TIeе ? '*' : ''}` : '-')).join(' '),
  npcHea: ($0Ме1А || []).map((a) => (a && !a.$HМ0М1 ? (a.hea > 0 ? 'alive' : 'dead') : '')).join(','),
  hmax: ($0Ме1А || []).map((a) => (a ? Math.round(a.hmax) : null)),
  chars: ($0Ме1А || []).map((a) => (a ? a.char : null)),
  mapName: String($ОoAоl).slice(0, 40),
  flags: `${$НOIHo ? 1 : 0}${$OАМАO ? 1 : 0}${LOW_HPS ? 1 : 0}`,
  othersGrenades: ($ОpMрс || []).filter((g) => g && g.io && g.visible && g.$cppее === -2 && g.picken_by === -1 &&
    Math.round((g.$Тссес - Math.floor(g.$Тссес)) * 1000) && Math.round((g.$Тссес - Math.floor(g.$Тссес)) * 1000) !== $НAlНc + 1).length,
  // My equipment = guns tagged with my seat (server/coop.js). It may lie on the ground (the level start gave me a
  // gun for that slot already, as in solo) or be in my hands, but no one else may have it.
  myKit: (() => {
    const mine = ($ОpMрс || []).filter((g) => g && g.io && Math.round((g.$Тссес - Math.floor(g.$Тссес)) * 1000) === $НAlНc + 1);
    return { total: mine.length, held: mine.filter((g) => g.picken_by === $НAlНc).length,
      takenBy: mine.filter((g) => g.picken_by !== -1 && g.picken_by !== $НAlНc).map((g) => g.picken_by) };
  })(),
  kitGuns: ($ОpMрс || []).map((g, i) => (g && g.io && Math.round((g.$Тссес - Math.floor(g.$Тссес)) * 1000) ? `${i}:${g.model}:tag${Math.round((g.$Тссес - Math.floor(g.$Тссес)) * 1000)}:by${g.picken_by}:${Math.round(g.x)},${Math.round(g.y)}` : '')).filter(Boolean).join(' '),
});
const movableDiff = (hw, gw) => {
  const h = hw.movables.split(' '), g = gw.movables.split(' '), ht = hw.movableTargets.split(' '), gt = gw.movableTargets.split(' ');
  return h.map((v, k) => {
    const [hx, hy] = v.split(',').map(Number), [gx, gy] = (g[k] || '').split(',').map(Number);
    const same = ht[k] === gt[k] && Math.abs(hx - gx) <= 30 && Math.abs(hy - gy) <= 30;
    return same || v === g[k] ? '' : `#${k} ${v}->${ht[k]} / ${g[k]}->${gt[k]}`;
  }).filter(Boolean);
};
const diffCount = (a, b) => a.split(/[ ,]/).filter((v, k) => v !== b.split(/[ ,]/)[k]).length;

(async () => {
  const server = spawn(process.execPath, [path.join(__dirname, '../server/server.js'), String(PORT)], { stdio: ['ignore', 'pipe', 'pipe'] });
  let serverLog = '';
  server.stdout.on('data', (d) => (serverLog += d));
  server.stderr.on('data', (d) => (serverLog += d));
  await sleep(1500);
  // A test server left over from an earlier run would answer instead, with old code.
  if (!/co-op server running/.test(serverLog)) {
    console.log('FAIL  test server did not start (port in use?)\n' + serverLog.slice(0, 400));
    server.kill();
    process.exit(1);
  }

  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const memory = [];
  try {
    const host = await client(browser, 'Host', 'gun_rifle');
    const guest = await client(browser, 'Guest', 'gun_shotgun');
    await host.page.evaluate(() => coopClient.screen.hostLobby());
    await until(guest, () => (coopClient.screen.state().lobbies || []).length > 0, null, 10000);
    const id0 = await guest.page.evaluate(() => coopClient.screen.state().lobbies[0].id);
    await guest.page.evaluate((i) => coopClient.screen.joinLobby(i), id0);
    const lobbyOk = await until(host, () => (coopClient.screen.state().lobby || {}).members.length === 2, null, 10000);
    check('guest joins the host lobby', lobbyOk, JSON.stringify(await guest.page.evaluate(() => { const s = coopClient.screen.state(); return [s.lobby, s.status, s.lobbies]; })));

    const RUNS = [];
    for (const d of DIFFS) for (const lvl of LEVELS) RUNS.push([d, lvl]);
    let lastDiff = null;
    const perDiff = {};
    for (const [diff, lvl] of RUNS) {
      const id = `c${lvl}a`;
      await until(host, inLobby, null, 20000);
      await until(guest, inLobby, null, 20000);
      if (process.env.KIT_DEBUG) for (const c of [host, guest]) await c.page.evaluate(() => {
        // Log every holder change of a tagged kit gun, and every ownership check, with the time.
        globalThis.__kitLog = [];
        const t0 = performance.now();
        const log = (m) => { if (__kitLog.length < 60) __kitLog.push(`${((performance.now() - t0) / 1000).toFixed(2)} ${m}`); };
        const tag = (x) => Math.round((x - Math.floor(x)) * 1000);
        const last = new Map();
        clearInterval(globalThis.__kitWatch);
        globalThis.__kitWatch = setInterval(() => {
          ($ОpMрс || []).forEach((g, i) => {
            if (!g || !tag(g.$Тссес)) return;
            const k = `${g.picken_by}`;
            if (last.get(g) !== k) { last.set(g, k); log(`gun ${i} tag${tag(g.$Тссес)} held by ${k} (me ${$НAlНc})`); }
          });
        }, 20);
        for (const name of ['mayPick', 'ownsGunAt', 'takeKit']) {
          const f = coopClient[name];
          if (f.__wrapped) continue;
          coopClient[name] = function (...a) {
            const r = f.apply(this, a);
            const x = a[0] && a[0].$Тссес !== undefined ? a[0].$Тссес : a[0];
            if (typeof x === 'number' && tag(x)) log(`${name}(tag${tag(x)}${a[1] !== undefined ? ', who ' + a[1] : ''}) -> ${r} (me ${$НAlНc})`);
            if (name === 'takeKit') log('takeKit ran (me ' + $НAlНc + ')');
            return r;
          };
          coopClient[name].__wrapped = true;
        }
      });
      if (process.env.SPAWN_DEBUG) for (const c of [host, guest]) await c.page.evaluate(() => {
        // Log this player's health/position whenever it changes noticeably, and spawn events, every 50 ms.
        globalThis.__spawnLog = [];
        const t0 = performance.now();
        let last = '';
        clearInterval(globalThis.__spawnWatch);
        globalThis.__spawnWatch = setInterval(() => {
          const me = $0Ме1А && $0Ме1А[$НAlНc];
          if (!me || currentFrameLabel !== 'gaming') return;
          const now = `hea ${Math.round(me.hea)} @${Math.round(me.x)},${Math.round(me.y)}`;
          const changed = now.split(' ')[1] !== last.split(' ')[1] || Math.abs(parseInt(now.split('@')[1]) - parseInt((last.split('@')[1] || '0'))) > 40;
          if (changed && __spawnLog.length < 40) __spawnLog.push(`${((performance.now() - t0) / 1000).toFixed(2)} ${now}`);
          last = now;
        }, 50);
      });
      await host.page.evaluate((l) => coopClient.screen.selectLevel(l), lvl);
      if (diff !== lastDiff) {
        await host.page.evaluate((d) => coopClient.screen.selectDifficulty(d), diff);
        await until(guest, (d) => (coopClient.screen.state().lobby || {}).difficulty === d, diff, 5000);
        lastDiff = diff;
      }
      await sleep(500);
      await host.page.evaluate(() => coopClient.screen.startLobby());
      const t0 = Date.now();
      let ok = true;
      for (const c of [host, guest]) if (!(await until(c, onLevel, id, 45000))) ok = false;
      const info = await serverInfo();
      if (info) memory.push(info.memoryMb);
      await sleep(4000);
      // The two screens are read one after the other, so something moving or dying right then can differ for a
      // moment (and timers count from each game's own level start): only differences still there 4 s later count. Doors compare target and moving state exactly and
      // position within 30 px.
      const sample = async () => [await host.page.evaluate(world, 'gun_rifle'), await guest.page.evaluate(world, 'gun_shotgun')];
      let [hw, gw] = await sample();
      if (diffCount(hw.triggers, gw.triggers) || movableDiff(hw, gw).length || diffCount(hw.npcHea, gw.npcHea)) {
        await sleep(4000); // timers count from each game's own level start, a moment apart
        [hw, gw] = await sample();
      }
      const errs = [...host.errors.splice(0), ...guest.errors.splice(0)];
      const problems = [];
      if (!ok) {
        const where = async (c) => c.page.evaluate(() => {
          const me = $0Ме1А && $0Ме1А[$НAlНc];
          const sc = coopClient.screen.state();
          const d = $ММ.match_details;
          return `${stage.currentFrameLabel} map=${d && d.map_id} uid=${d && d.uid} slot=${$НAlНc} hea=${me && Math.round(me.hea)} spect=${$00pеH} ` +
            `canSpawn=${coopClient.canSpawn()} round=${$сoHIe} fade=${$Hl1AА.alpha.toFixed(2)} spawnAsked=${$0рAОТ1} status="${sc.status}" ` +
            `spawn log: ${coopClient.spawnEvents.slice(-6).join(' | ')}`;
        }).catch((e) => 'unreachable: ' + e.message.slice(0, 80));
        problems.push(`did not load for both (host: ${await where(host)}; guest: ${await where(guest)})`);
      }
      if (errs.length) problems.push('errors: ' + errs.slice(0, 2).join(' | '));
      if (hw.myKit.takenBy.length) problems.push(`host's kit taken by ${hw.myKit.takenBy}`);
      if (gw.myKit.takenBy.length) problems.push(`guest's kit taken by ${gw.myKit.takenBy}`);
      const wantFlags = ['100', '000', '010', '011'][diff];
      if (hw.flags !== wantFlags || gw.flags !== wantFlags) problems.push(`difficulty flags ${hw.flags}/${gw.flags}, want ${wantFlags}`);
      if (hw.othersGrenades || gw.othersGrenades) problems.push(`others' grenades lying ${hw.othersGrenades}/${gw.othersGrenades}`);
      if (ok) {
        // Every character's type and max health is the same on both screens (whether they match solo is
        // tools/solo-parity.js's job), and the players have solo's hero health for the difficulty.
        const same = hw.hmax.map((h, i) => (h !== gw.hmax[i] || hw.chars[i] !== gw.chars[i] ? `#${i} ${hw.chars[i]}:${h}/${gw.chars[i]}:${gw.hmax[i]}` : '')).filter(Boolean);
        if (same.length) problems.push(`${same.length} character(s) differ between screens [${same.slice(0, 4).join(' ')}]`);
        const want = expectedHealth(id, diff);
        for (const [who, w] of [['host', hw], ['guest', gw]]) {
          const bad = want.map((e, i) => (e.human && w.hmax[i] != null && Math.abs(w.hmax[i] - e.hmax) > 1 ? `#${i} ${w.hmax[i]}!=${e.hmax}` : '')).filter(Boolean);
          if (bad.length) problems.push(`${who}: player health [${bad.join(' ')}]`);
        }
      }
      const td = diffCount(hw.triggers, gw.triggers);
      const md = movableDiff(hw, gw).length;
      const nd = diffCount(hw.npcHea, gw.npcHea);
      if (td) {
        const h = hw.triggers.split(','), g = gw.triggers.split(',');
        problems.push(`${td} trigger(s) differ [${h.map((v, k) => (v !== g[k] ? `#${k} ${v}/${g[k]}` : '')).filter(Boolean).slice(0, 8).join(' ')}]`);
      }
      if (md) problems.push(`${md} movable(s) differ [${movableDiff(hw, gw).slice(0, 4).join('; ')}]`);
      const note = nd ? ` (info: ${nd} NPC(s) alive on one screen only - stock multiplayer NPC sync)` : '';
      if (process.env.SPAWN_DEBUG) console.log(`  host spawn: ${(await host.page.evaluate(() => __spawnLog)).join(' | ')}
  guest spawn: ${(await guest.page.evaluate(() => __spawnLog)).join(' | ')}
  guest events: ${(await guest.page.evaluate(() => coopClient.spawnEvents.slice(-8))).join(' | ')}`);
      if (process.env.MAP_DEBUG) console.log('  map name:', hw.mapName, '|', gw.mapName);
      if (process.env.KIT_DEBUG) console.log(`  host log: ${(await host.page.evaluate(() => __kitLog)).join(' | ')}
  guest log: ${(await guest.page.evaluate(() => __kitLog)).join(' | ')}`);
      if (process.env.KIT_DEBUG) console.log(`  host(slot ${await host.page.evaluate(() => $НAlНc)}) ${hw.kitGuns}
  guest(slot ${await guest.page.evaluate(() => $НAlНc)}) ${gw.kitGuns}`);
      perDiff[diff] = perDiff[diff] || { pass: 0, fail: 0 };
      perDiff[diff][problems.length ? 'fail' : 'pass']++;
      check(`${DIFFS.length > 1 ? DIFF_NAMES[diff] + ' ' : ''}level ${lvl + 1} (${id})`, problems.length === 0,
        `${Date.now() - t0} ms, kit held ${hw.myKit.held}/${hw.myKit.total} + ${gw.myKit.held}/${gw.myKit.total}${note}${info ? `, server ${info.memoryMb} MB` : ''}${problems.length ? ' -- ' + problems.join('; ') : ''}`);

      await host.page.evaluate(() => coopClient.missionComplete());
    }
    for (const d of Object.keys(perDiff)) console.log(`SUMMARY ${DIFF_NAMES[d]}: ${perDiff[d].pass} passed, ${perDiff[d].fail} failed`);
    const back = (await until(host, inLobby, null, 20000)) && (await until(guest, inLobby, null, 20000));
    check('after the last level both are back in the lobby', back);
  } catch (e) {
    check('test run', false, e.stack);
  } finally {
    await browser.close();
    server.kill();
  }
  if (memory.length > 4) {
    const early = memory.slice(0, 3).reduce((a, b) => a + b) / 3;
    const late = memory.slice(-3).reduce((a, b) => a + b) / 3;
    check('server memory stays steady', late < early * 1.5 + 30, `${early.toFixed(0)} MB -> ${late.toFixed(0)} MB`);
  }
  const serverErrors = serverLog.split('\n').filter((l) => /\[(handler|tick|game error)\]/.test(l));
  check('no server errors', serverErrors.length === 0, serverErrors.slice(0, 3).join(' | '));
  console.log(failures ? `\n${failures} check(s) failed` : '\nall checks passed');
  process.exit(failures ? 1 : 0);
})();
