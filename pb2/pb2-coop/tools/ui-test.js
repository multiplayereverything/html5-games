// Co-op screen test: opens main menu > CO-OP CAMPAIGN in two headless clients. The host picks a level and opens
// a lobby from the solo campaign screen, the guest joins it there, the host starts, and both enter the level
// with their own equipment from the solo campaign. Screenshots go to tools/out/ for a visual check.
// usage: node tools/ui-test.js
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');

const PORT = 2062;
// Difficulty the host picks in the lobby (0 easy .. 3 impossible); guests must see it.
const DIFF = parseInt(process.env.DIFF || '0', 10);
const URL = `http://localhost:${PORT}/`;
const OUT = path.join(__dirname, 'out');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let failures = 0;
function check(name, ok, detail) {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  ' + detail : ''}`);
  if (!ok) failures++;
}

async function until(page, fn, arg, timeoutMs) {
  try {
    await page.waitForFunction(fn, arg, { timeout: timeoutMs, polling: 250 });
    return true;
  } catch (e) {
    return false;
  }
}

// A player at the co-op campaign screen with `unlockedUpTo` levels open, `credits` and main-hero equipment `guns`.
async function client(browser, name, unlockedUpTo, credits, guns) {
  const context = await browser.newContext({ viewport: { width: 960, height: 540 } });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto(URL);
  await until(page, () => typeof $ММ === 'function' && globalThis.coopClient && currentFrameLabel === 'name_prompt', null, 30000);
  await page.waitForTimeout(1500);
  // Skip the name prompt like Accept does; give the player some campaign progress.
  await page.evaluate(([n, lvl, cr, g]) => {
    globalThis.$AооАA = n;
    globalThis.$1еT1Н = n;
    globalThis.$HHolА = lvl;
    globalThis.$cррсО = cr;
    globalThis.$ll11o = g;
    try { HUD.$ТTTсH1(); } catch (e) {}
    globalThis.$pМоcT(); gotoAndStop('menu'); globalThis.$oеeес();
  }, [name, unlockedUpTo, credits, guns]);
  await page.waitForTimeout(800);
  await page.evaluate(() => { globalThis.$pМоcT(); gotoAndStop('campaign'); globalThis.$oеeес(); });
  return { page, errors, screen: () => page.evaluate(() => coopClient.screen.state()) };
}

const inLevel = (lvl) => `$ММ.match_details && $ММ.match_details.map_id === 'c${lvl}a' && currentFrameLabel === 'gaming' && $0Ме1А.length > 0`; // page-side expression
// The solo screen's level grid (its "CHOOSE LEVEL:" label) is showing.
const gridVisible = (page) => page.evaluate(() => {
  const screen = stage.children[stage.children.indexOf($A1Hpe) + 1];
  return screen.children.some((c) => c.text === 'CHOOSE LEVEL:' && c.visible);
});
const gunsOnMap = (page) => page.evaluate(() => {
  const held = (cls) => game.children.filter((c) => c instanceof cls).map((c) => c.picken_by);
  return { rifleHeldBy: held(gun_rifle), shotgunHeldBy: held(gun_shotgun), me: $НAlНc, myHea: Math.round($0Ме1А[$НAlНc].hea) };
});

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const server = spawn(process.execPath, [path.join(__dirname, '../server/server.js'), String(PORT)], { stdio: ['ignore', 'pipe', 'pipe'] });
  let serverLog = '';
  server.stdout.on('data', (d) => (serverLog += d));
  server.stderr.on('data', (d) => (serverLog += d));
  await sleep(1500);

  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  try {
    const host = await client(browser, 'Alice', 7, 1234, [{ mdl: 'gun_rifle', upg: 3 }, { mdl: 'item_grenade', upg: 0 }, { mdl: 'item_grenade', upg: 0 }]);
    // Alice changes her campaign look with the ▶ arrows next to Battlesuit / Head / Body / Arms / Legs (real
    // clicks: writing these from the test trips the game's anti-tamper): 5x battlesuit, 3x head, 4x body, 5x arms,
    // 6x legs. Positions in the 960x540 viewport.
    await host.page.bringToFront();
    for (const [y, n] of [[287, 5], [313, 3], [338, 4], [363, 5], [388, 6]]) {
      for (let k = 0; k < n; k++) { await host.page.mouse.click(353, y); await host.page.waitForTimeout(120); }
    }
    const chosen = await host.page.evaluate(() => [$рHоеН[0], skin_color_head[0], skin_color_arms[0], skin_color_legs[0], skin_color_body[0]]);
    const want = `${chosen[0]}/${chosen.slice(1).join('')}`;
    check('host picks a look on the campaign screen', chosen[0] !== 40 && chosen.slice(1).some((v) => v), want);
    let s = await host.screen();
    check('campaign screen opens in co-op mode', s.open && !s.solo);
    check('the solo screen is underneath (credits shown)', await host.page.evaluate(() => /1234/.test(JSON.stringify(stage.children.map((c) => c.children && c.children.map((k) => k.text || '').join('|'))))));
    check('game list loads', await until(host.page, () => coopClient.screen.state().lobbies !== null && coopClient.screen.state().games !== null, null, 10000));
    check('server list hides the level grid', !(await gridVisible(host.page)));
    await host.page.screenshot({ path: path.join(OUT, 'coop-screen-host.png') });

    await host.page.evaluate(() => coopClient.screen.hostLobby());
    s = await host.screen();
    check('host opens a lobby on their latest level', s.lobby && s.lobby.isHost && s.lobby.level === 7 && s.lobby.party === 2, JSON.stringify(s.lobby));
    check('host sees the level grid', await gridVisible(host.page));
    await host.page.evaluate(() => coopClient.screen.selectLevel(5));
    await host.page.evaluate(() => coopClient.screen.selectParty(3));
    await host.page.evaluate(() => coopClient.screen.selectLevel(20));
    await host.page.waitForTimeout(300);
    s = await host.screen();
    check('host picks level and party; locked levels refused', s.lobby.level === 5 && s.lobby.party === 3, JSON.stringify(s.lobby));

    const guest = await client(browser, 'Bob', 0, 50, [{ mdl: 'gun_shotgun', upg: 1 }, { mdl: 'item_grenade', upg: 0 }, { mdl: 'item_grenade', upg: 0 }]);
    check("guest sees the host's lobby", await until(guest.page, () => (coopClient.screen.state().lobbies || []).some((l) => l.host === 'Alice'), null, 10000));
    await guest.page.waitForTimeout(300);
    await guest.page.screenshot({ path: path.join(OUT, 'coop-screen-guest.png') });
    const id = (await guest.screen()).lobbies.find((l) => l.host === 'Alice').id;
    await guest.page.evaluate((i) => coopClient.screen.joinLobby(i), id);
    s = await guest.screen();
    check('guest joins the lobby', s.lobby && !s.lobby.isHost && s.lobby.members.length === 2, JSON.stringify(s.lobby));
    check('guest does not see the level grid', !(await gridVisible(guest.page)));
    check('host sees the guest', await until(host.page, () => (coopClient.screen.state().lobby || {}).members.length === 2, null, 5000));

    await host.page.evaluate(() => coopClient.screen.selectLevel(4));
    check("guest follows the host's level pick", await until(guest.page, () => coopClient.screen.state().lobby.level === 4, null, 5000));
    await guest.page.evaluate(() => coopClient.screen.selectLevel(2));
    check('guest cannot change the level', (await guest.screen()).lobby.level === 4);
    await host.page.evaluate(() => coopClient.screen.selectLevel(5));
    await until(guest.page, () => coopClient.screen.state().lobby.level === 5, null, 5000);
    await host.page.evaluate((d) => coopClient.screen.selectDifficulty(d), DIFF);
    check(`guest sees the host's difficulty (${DIFF})`, await until(guest.page, (d) => coopClient.screen.state().lobby.difficulty === d, DIFF, 5000));
    await host.page.waitForTimeout(300);
    await host.page.screenshot({ path: path.join(OUT, 'coop-lobby-host.png') });
    await guest.page.screenshot({ path: path.join(OUT, 'coop-lobby-guest.png') });

    await host.page.evaluate(() => coopClient.screen.startLobby());
    check('host enters level 6', await until(host.page, inLevel(5), null, 20000));
    check('guest is pulled into level 6', await until(guest.page, inLevel(5), null, 30000));
    check('guest spawns alive', await until(guest.page, () => { const me = $0Ме1А[$НAlНc]; return me && me.hea > 0; }, null, 25000));
    await guest.page.waitForTimeout(2000);
    // Each player holds their own equipment (the host's rifle, the guest's shotgun), seen the same on both screens.
    const guestSlot = (await guest.page.evaluate(() => $НAlНc));
    for (const [who, c] of [['host', host], ['guest', guest]]) {
      const g = await gunsOnMap(c.page);
      check(`${who} sees everyone holding their own equipment`, g.rifleHeldBy.join() === '0' && g.shotgunHeldBy.join() === String(guestSlot), JSON.stringify(g));
    }
    // Alice wears her campaign look, on her screen and on Bob's (colour order: head, arms, legs, body).
    const look = (page) => page.evaluate(() => {
      const a = $0Ме1А.find((x) => x && x.$HМ0М1 && x.io && x.nickname === 'Alice');
      return a && `${a.$lOeНc}/${a.$Нр01I.join('')}`;
    });
    check('host wears their campaign look', (await look(host.page)) === want, `${await look(host.page)} (chosen ${want})`);
    check('guest sees the host campaign look', await until(guest.page, (w) => {
      const a = $0Ме1А.find((x) => x && x.$HМ0М1 && x.io && x.nickname === 'Alice');
      return a && `${a.$lOeНc}/${a.$Нр01I.join('')}` === w;
    }, want, 8000), await look(guest.page));
    // Everyone's game uses the host's difficulty (the solo flags easy / hard / impossible).
    const wantFlags = ['true/false/false', 'false/false/false', 'false/true/false', 'false/true/true'][DIFF];
    const flags = (page) => page.evaluate(() => `${$НOIHo}/${$OАМАO}/${LOW_HPS}`);
    check(`both games play on the host's difficulty (flags ${wantFlags})`, (await flags(host.page)) === wantFlags &&
      (await flags(guest.page)) === wantFlags, `${await flags(host.page)} | ${await flags(guest.page)}`);
    // Equipment grenades: each player gets their own; nobody sees another player's lying at the spawn.
    const grenades = (page) => page.evaluate(() => {
      const tag = (x) => Math.round((x - Math.floor(x)) * 1000);
      const othersLying = ($ОpMрс || []).filter((g) => g && g.io && g.visible && g.$cppее === -2 && g.picken_by === -1 && tag(g.$Тссес) && tag(g.$Тссес) !== $НAlНc + 1).length;
      return { mine: $OН1оc, othersLying };
    });
    for (const [who, c] of [['host', host], ['guest', guest]]) {
      const g = await grenades(c.page);
      check(`${who} has their grenades and sees no one else's lying around`, g.mine >= 1 && g.othersLying === 0, JSON.stringify(g));
    }
    check('credits kept', await host.page.evaluate(() => $cррсО) === 1234 && await guest.page.evaluate(() => $cррсО) === 50);
    await guest.page.screenshot({ path: path.join(OUT, 'ingame-guest.png') });
    await host.page.screenshot({ path: path.join(OUT, 'ingame-host.png') });

    const errs = [...host.errors, ...guest.errors];
    check('no page errors', errs.length === 0, errs.slice(0, 3).join(' | '));
  } catch (e) {
    check('test run', false, e.stack);
  } finally {
    await browser.close();
    server.kill();
  }
  const serverErrors = serverLog.split('\n').filter((l) => /\[(handler|tick|game error)\]/.test(l));
  check('no server errors', serverErrors.length === 0, serverErrors.slice(0, 3).join(' | '));
  console.log(failures ? `\n${failures} check(s) failed` : '\nall checks passed');
  process.exit(failures ? 1 : 0);
})();
