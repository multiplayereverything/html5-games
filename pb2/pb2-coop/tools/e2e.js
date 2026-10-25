// End-to-end co-op test: own server + two headless Edge clients (host and guest).
// usage: node tools/e2e.js            (needs Microsoft Edge installed)
// Level 1 (drop pods) for deaths and a team wipe, then mission complete -> lobby -> level 2.
const { spawn } = require('child_process');
const path = require('path');
const { chromium } = require('playwright-core');

const PORT = 2061;
const URL = `http://localhost:${PORT}/`;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let failures = 0;
function check(name, ok, detail) {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  ' + detail : ''}`);
  if (!ok) failures++;
}

async function openClient(browser, name) {
  const context = await browser.newContext({ viewport: { width: 800, height: 600 } });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('dialog', (d) => { errors.push(`dialog: ${d.message()}`); d.dismiss().catch(() => {}); });
  page.on('console', (m) => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) errors.push(`console: ${m.text().slice(0, 200)}`); });
  await page.goto(URL);
  // $ММ is a top-level class: a global binding but not a globalThis property.
  await page.waitForFunction(() => typeof $ММ === 'function' && typeof globalThis.coopClient === 'object', null, { timeout: 30000 });
  await page.waitForTimeout(3000);
  await page.evaluate(() => import('/dev/coop-dev.js'));
  await page.evaluate(() => { globalThis.$ll11o = [{ mdl: 'gun_shotgun', upg: 1 }]; }); // some equipment to keep
  // Remember chat lines (the server's countdowns arrive as chat messages), read off the in-game chat's 11 lines.
  // (Replacing the game's chat function would trip its anti-tamper.)
  await page.evaluate(() => {
    globalThis.__chat = [];
    setInterval(() => {
      const lines = globalThis.$pОеlО;
      if (!lines || lines.isRemoved) return;
      for (let k = 0; k < 11; k++) {
        const l = lines[$еIс0 + k];
        const t = l && l.$MН1Mp && String(l.$MН1Mp.htmlText);
        if (t && l.$testSeen !== t) { l.$testSeen = t; __chat.push(t); }
      }
    }, 100);
  });
  const ok = await page.evaluate((n) => coopDev.lobby(n), name);
  check(`${name} reaches the lobby`, ok);
  // Every read is time-limited: a stuck page fails the test instead of hanging it.
  const state = () => Promise.race([
    page.evaluate(() => coopDev.state()),
    sleep(5000).then(async () => {
      await page.screenshot({ path: path.join(__dirname, 'out', `stuck-${name}.png`), timeout: 5000 }).catch(() => {});
      throw new Error(`${name}'s page stopped responding; errors so far: ${errors.slice(-3).join(' | ') || 'none'}`);
    }),
  ]);
  return { page, errors, state };
}

// The pause menu (Esc) in co-op: Continue, Graphics, Controls, Respawn, Leave match / Return to Lobby, Restart Level
// (host only), 28 px apart; viewport y of each button's middle.
const MENU_Y = { respawn: 324, leave: 352, restart: 380 };
async function escClick(page, which) {
  await page.bringToFront();
  await page.keyboard.press('Escape');
  await sleep(800);
  await page.mouse.move(395, MENU_Y[which] - 2);
  await page.mouse.move(400, MENU_Y[which]);
  await sleep(200);
  await page.mouse.click(400, MENU_Y[which]);
}

// Esc, then "Respawn" (in co-op: give up, you're down).
const escRespawn = (page) => escClick(page, 'respawn');

// Chat lines received since the last call.
const chat = (page) => page.evaluate(() => __chat.splice(0));

// Where a game HUD object is on the page (its x/y up the parent chain; the 800x400 game sits 100 px down).
const screenPos = (page, expr) => page.evaluate((e) => {
  let o = eval(e);
  let x = 0;
  let y = 0;
  for (; o && o !== stage; o = o.parent) { x += o.x; y += o.y; }
  return { x, y: y + 100 };
}, expr);

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
  }, 420000);
  await sleep(1500);

  browser = await chromium.launch({ channel: 'msedge', headless: true });
  try {
    const host = await openClient(browser, 'Host');
    const created = await host.page.evaluate(() => coopDev.create(0, 2, 'E2E'));
    check('host creates a co-op match on level 1', created[0] === 'ok', JSON.stringify(created));
    let hs = await waitFor(host, (s) => s.actors > 0 && s.me && s.me.hea > 0, 20000);
    check('host spawns alive in slot 0', hs.slot === 0 && hs.me && hs.me.hea > 0, JSON.stringify(hs.me));

    const guest = await openClient(browser, 'Guest');
    const joined = await guest.page.evaluate(() => coopDev.join(1000));
    check('guest joins', joined[0] === 'ok', JSON.stringify(joined));
    let gs = await waitFor(guest, (s) => s.actors > 0 && s.me && s.me.hea > 0, 30000);
    check('guest spawns alive in a guest slot', gs.slot > 0 && !gs.spectator && gs.me && gs.me.hea > 0, `slot ${gs.slot} ${JSON.stringify(gs.me)}`);
    const guestSlot = gs.slot;

    hs = await waitFor(host, (s) => s.humans.some((h) => h.startsWith(guestSlot + ':Guest')), 15000);
    check('host sees the guest', hs.humans.some((h) => h.startsWith(guestSlot + ':Guest')));
    gs = await guest.state();
    check('guest sees the host', gs.humans.some((h) => h.startsWith('0:Host')));

    // Level 1 drop: both pods break on landing and the players stand on the platform (y ~620-700), alive.
    // Before the fix, multiplayer kept the pod unbreakable and the players fell through the floor.
    await sleep(8000);
    hs = await host.state();
    gs = await guest.state();
    const landed = (s) => s.me && s.me.hea > 0 && s.me.y > 550 && s.me.y < 760;
    check('both players land on the level 1 platform', landed(hs) && landed(gs), `host y=${hs.me && hs.me.y}, guest y=${gs.me && gs.me.y}`);

    // Co-op rules (as multiplayer COOP): a dead player stays dead and spectates. Deaths the way a player does
    // it: Esc, then "Respawn" in the pause menu, with real keyboard/mouse input (never by writing game state
    // from the test: the game's anti-tamper reacts to that).
    await escRespawn(guest.page);
    gs = await waitFor(guest, (s) => s.me && s.me.hea <= 0, 10000);
    check('guest dies via Esc > Respawn', gs.me && gs.me.hea <= 0, `hea ${gs.me && Math.round(gs.me.hea)}`);
    await sleep(10000);
    gs = await guest.state();
    hs = await host.state();
    check('dead guest does not respawn (spectates)', gs.me && gs.me.hea <= 0 && gs.match && gs.match.map === 'c0a', `hea ${gs.me && Math.round(gs.me.hea)}`);
    check('host keeps playing and sees the guest down', hs.me && hs.me.hea > 0 && hs.humans.some((h) => h.startsWith(guestSlot + ':Guest:0')), hs.humans.join(' '));

    // Whole team down -> the level restarts for everyone, and everyone spawns again.
    await escRespawn(host.page);
    hs = await waitFor(host, (s) => s.me && s.me.hea <= 0, 10000);
    check('host dies too', hs.me && hs.me.hea <= 0);
    await sleep(6000);
    hs = await waitFor(host, (s) => s.match && s.match.map === 'c0a' && s.me && s.me.hea > 0, 30000);
    gs = await waitFor(guest, (s) => s.match && s.match.map === 'c0a' && s.me && s.me.hea > 0, 30000);
    check('team wipe restarts the level, both alive again', hs.me && hs.me.hea > 0 && gs.me && gs.me.hea > 0);

    // A player who is down when the others complete the level keeps their equipment. Solo's completion step makes
    // "the guns you hold" your equipment - none for a downed player; it's reproduced here between the co-op hooks.
    await escRespawn(guest.page);
    gs = await waitFor(guest, (s) => s.me && s.me.hea <= 0, 10000);
    const kept = await guest.page.evaluate(() => {
      const before = JSON.stringify($ll11o);
      if (!coopClient.beforeComplete()) return 'not completed';
      $ll11o = []; // what solo's completion leaves for someone holding nothing
      coopClient.afterComplete();
      return before === JSON.stringify($ll11o) ? 'kept ' + before : 'lost: ' + JSON.stringify($ll11o);
    });
    check('a downed player keeps their equipment when the level is completed', gs.me.hea <= 0 && kept.startsWith('kept'), kept);

    // Mission complete -> everyone back on the campaign screen, together in a lobby on the next level.
    // The guest's game records the black cover fading in over the level (the top stage child, partly opaque).
    await guest.page.evaluate(() => {
      globalThis.__fade = [];
      const watch = setInterval(() => {
        const top = stage.children[stage.children.length - 1];
        if (stage.currentFrameLabel === 'gaming' && top && top.alpha > 0 && top.alpha < 1) __fade.push(Math.round(top.alpha * 100));
        if (stage.currentFrameLabel !== 'gaming') clearInterval(watch);
      }, 50);
    });
    await host.page.evaluate(() => coopClient.missionComplete());
    await sleep(4300);
    await guest.page.screenshot({ path: path.join(__dirname, 'out', 'complete-fade.png') });
    hs = await waitFor(host, (s) => s.frame === 'campaign' && s.lobby, 20000);
    gs = await waitFor(guest, (s) => s.frame === 'campaign' && s.lobby, 20000);
    let fade = await guest.page.evaluate(() => __fade);
    check('a completed level fades to black before the lobby (like solo)', fade.length >= 5 && fade[fade.length - 1] > fade[0], fade.join(','));
    const doneStatus = (await guest.page.evaluate(() => coopClient.screen.state())).status;
    check('the lobby says Level complete!', /Level complete/.test(doneStatus), doneStatus);
    check('mission complete returns both to the campaign screen', hs.frame === 'campaign' && gs.frame === 'campaign', `${hs.frame} / ${gs.frame}`);
    check('both are in one lobby on level 2, host leads', hs.lobby && gs.lobby && hs.lobby.id === gs.lobby.id &&
      hs.lobby.level === 1 && hs.lobby.isHost && !gs.lobby.isHost && hs.lobby.members.length === 2, JSON.stringify(hs.lobby));
    await host.page.screenshot({ path: path.join(__dirname, 'out', 'return-host.png') });
    await guest.page.screenshot({ path: path.join(__dirname, 'out', 'return-guest.png') });

    // The host starts the next level from the lobby.
    await host.page.evaluate(() => coopClient.screen.startLobby());
    hs = await waitFor(host, (s) => s.match && s.match.map === 'c1a' && s.me && s.me.hea > 0, 30000);
    gs = await waitFor(guest, (s) => s.match && s.match.map === 'c1a' && s.me && s.me.hea > 0, 30000);
    check('host starts level 2, both play it', hs.me && hs.me.hea > 0 && gs.me && gs.me.hea > 0 && !gs.spectator, `host ${hs.slot}, guest ${gs.slot}`);
    check('they see each other on level 2',
      hs.humans.some((h) => h.startsWith(gs.slot + ':Guest')) && gs.humans.some((h) => h.startsWith('0:Host')));

    // The host's in-game menu: "Leave match" reads "Return to Lobby" and takes everyone back to the lobby, on the
    // same level; the guest's still reads "Leave match". Real Esc + click (the button below "Respawn").
    const caption = (page) => page.evaluate(() => {
      const find = (o) => { for (const c of (o && o.children) || []) { if (typeof c.text === 'string' && c.text) return c.text; const f = find(c); if (f) return f; } return ''; };
      return find($TeIOl.$Acооl);
    });
    // Party panel (top right): each one sees the other's name and health bar.
    await sleep(1000);
    const hp = await host.page.evaluate(() => coopClient.panelRows());
    const gp = await guest.page.evaluate(() => coopClient.panelRows());
    check('party panel lists the other player with a health bar', hp.length === 1 && hp[0].name === 'Guest' && !hp[0].down &&
      gp.length === 1 && gp[0].name === 'Host' && !gp[0].down, JSON.stringify([hp, gp]));
    await host.page.screenshot({ path: path.join(__dirname, 'out', 'party-panel.png') });

    // Scoreboard (Tab): the team column shows health, and only the host has a kick button, on the guest's row.
    const board = async (c, other) => {
      await c.page.bringToFront();
      await c.page.keyboard.down('Tab');
      await sleep(500);
      const b = await c.page.evaluate((o) => {
        const row = $сМоо0[o];
        const mine = $сМоо0[$НAlНc];
        const header = [];
        const walk = (x) => { for (const ch of x.children || []) { if (typeof ch.text === 'string') header.push(ch.text); if (ch !== $lITeI.$O1Нр0) walk(ch); } };
        walk($lITeI);
        return { shown: $lITeI.visible, health: row && row.f2.htmlText, kick: row && row.$МeсlTT[1].visible,
          ownKick: mine && mine.$МeсlTT[1].visible, profile: row && row.$МeсlTT[0].visible, report: row && row.$МeсlTT[3].visible,
          header: header.includes('Health') && !header.includes('Team') };
      }, other);
      if (c === host) await c.page.screenshot({ path: path.join(__dirname, 'out', 'scoreboard-host.png') });
      await c.page.keyboard.up('Tab');
      return b;
    };
    const hb = await board(host, gs.slot);
    const gb = await board(guest, 0);
    check('scoreboard shows health and a Health column', hb.shown && /\d+ HP/.test(hb.health) && /\d+ HP/.test(gb.health) && hb.header, JSON.stringify(hb));
    check('only the host can kick, and only others', hb.kick === true && hb.ownKick === false && gb.kick === false && gb.ownKick === false &&
      !hb.profile && !hb.report, JSON.stringify([hb, gb]));

    // The host's "Restart Level" (Esc menu): a countdown in everyone's chat, then the level loads again for both.
    const restartShown = await host.page.evaluate(() => !!($TeIOl.$coopRestart && $TeIOl.$coopRestart.visible));
    const guestRestartShown = await guest.page.evaluate(() => !!($TeIOl.$coopRestart && $TeIOl.$coopRestart.visible));
    check('Restart Level is in the host\'s menu only', restartShown && !guestRestartShown, `${restartShown} / ${guestRestartShown}`);
    const loads = [(await host.state()).load, (await guest.state()).load];
    await chat(host.page);
    await chat(guest.page);
    await escClick(host.page, 'restart');
    hs = await waitFor(host, (s) => s.load !== loads[0] && s.match && s.match.map === 'c1a' && s.me && s.me.hea > 0, 30000);
    gs = await waitFor(guest, (s) => s.load !== loads[1] && s.match && s.match.map === 'c1a' && s.me && s.me.hea > 0, 30000);
    check('Restart Level reloads level 2 for both, both alive', hs.load !== loads[0] && gs.load !== loads[1] && hs.me.hea > 0 && gs.me.hea > 0,
      `${loads} -> ${hs.load}, ${gs.load}`);
    const restartChat = (await chat(guest.page)).join(' | ');
    check('restart countdown in the chat', /restarting the level/.test(restartChat) && /Restarting level in 3/.test(restartChat) &&
      /Restarting level in 1/.test(restartChat), restartChat);

    await sleep(1000);
    check('host menu says Return to Lobby, guest menu says Leave match', (await caption(host.page)) === 'Return to Lobby' &&
      (await caption(guest.page)) === 'Leave match', `${await caption(host.page)} / ${await caption(guest.page)}`);
    await chat(guest.page);
    // The guest's game records the black cover fading in over the level (the top stage child, partly opaque).
    await guest.page.evaluate(() => {
      globalThis.__fade = [];
      const watch = setInterval(() => {
        const top = stage.children[stage.children.length - 1];
        if (stage.currentFrameLabel === 'gaming' && top && top.alpha > 0 && top.alpha < 1) __fade.push(Math.round(top.alpha * 100));
        if (stage.currentFrameLabel !== 'gaming') clearInterval(watch);
      }, 50);
    });
    await escClick(host.page, 'leave');
    await sleep(1500);
    const lobbyChat = (await chat(guest.page)).join(' | ');
    hs = await waitFor(host, (s) => s.frame === 'campaign' && s.lobby, 20000);
    gs = await waitFor(guest, (s) => s.frame === 'campaign' && s.lobby, 20000);
    check('Return to Lobby brings both back to one lobby on the same level', hs.lobby && gs.lobby && hs.lobby.id === gs.lobby.id &&
      hs.lobby.level === 1 && hs.lobby.isHost, JSON.stringify(hs.lobby));
    check('lobby countdown in the chat', /back to the lobby/.test(lobbyChat) && /Back to the lobby in 3/.test(lobbyChat), lobbyChat);
    fade = await guest.page.evaluate(() => __fade);
    check('Return to Lobby goes straight back (no fade)', fade.length === 0, fade.join(','));
    const gstatus = (await guest.page.evaluate(() => coopClient.screen.state())).status;
    check('the lobby says Back in the lobby (not Level complete)', /Back in the lobby/.test(gstatus), gstatus);

    // The host kicks the guest from the scoreboard (asks first): the guest is back on the co-op screen, told why.
    await host.page.evaluate(() => coopClient.screen.startLobby());
    hs = await waitFor(host, (s) => s.match && s.match.map === 'c1a' && s.me && s.me.hea > 0, 30000);
    gs = await waitFor(guest, (s) => s.match && s.match.map === 'c1a' && s.me && s.me.hea > 0, 30000);
    await host.page.evaluate((slot) => coopClient.askKick(slot), gs.slot);
    await sleep(500);
    const asked = await host.page.evaluate(() => !!HUD.$plАAO());
    await host.page.screenshot({ path: path.join(__dirname, 'out', 'kick-ask.png') });
    // The dialog's "Kick" button: found by its caption.
    const kickAt = await screenPos(host.page,
      "(function f(o){for(const c of o.children||[]){if(c.text==='Kick')return c.parent;const r=f(c);if(r)return r;}return null;})(HUD.$plАAO())");
    await host.page.mouse.move(kickAt.x + 30, kickAt.y + 8);
    await sleep(200);
    await host.page.mouse.click(kickAt.x + 30, kickAt.y + 8);
    gs = await waitFor(guest, (s) => s.frame === 'campaign', 15000);
    const gscreen = await guest.page.evaluate(() => coopClient.screen.state());
    hs = await waitFor(host, (s) => !s.humans.some((h) => h.includes(':Guest:')), 15000);
    check('kick asks the host, then sends the guest back to the co-op screen', asked && gs.frame === 'campaign' && !gscreen.lobby &&
      /removed/.test(gscreen.status), `asked ${asked}, ${gs.frame}, ${JSON.stringify(gscreen.status)}`);
    check('host keeps playing without the guest', hs.match && hs.match.map === 'c1a' && hs.me.hea > 0 &&
      !hs.humans.some((h) => h.includes(':Guest:')), hs.humans.join(' '));

    const pageErrors = [...host.errors, ...guest.errors];
    check('no page errors', pageErrors.length === 0, pageErrors.slice(0, 3).join(' | '));
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
