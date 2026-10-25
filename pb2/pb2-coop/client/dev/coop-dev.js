// Dev helpers for testing co-op from the browser console (not loaded by the game).
// Load with: await import('/dev/coop-dev.js')   then use window.coopDev.*
const G = globalThis;
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

const queue = [];
setInterval(() => {
  while (queue.length) {
    const [method, args] = queue.shift();
    G.coopDev[method](...args);
  }
}, 50);

function go(frame) {
  G.$pМоcT();
  gotoAndStop(frame);
  G.$oеeес();
}

G.coopDev = {
  // Skip the name prompt and open the multiplayer lobby.
  async lobby(name) {
    G.$AооАA = name;
    G.$1еT1Н = name;
    try { HUD.$ТTTсH1(); } catch (e) {}
    go('menu');
    await wait(500);
    go('MPLobby');
    for (let i = 0; i < 50 && !$ММ.$00е0T; i++) await wait(100);
    await wait(1500); // the server rate-limits match creation right after connecting
    return !!$ММ.$00е0T;
  },
  async create(level = 0, party = 2, title = 'Co-op test') {
    const preset = { ranked: false, max_players: party, game_type: 'COOP', min_reputation: 0, map_rotation: '', title,
      map_id: 'c' + level + 'a', password: '', gameplay_modifications: '', ping_limit: '', rounds_until_rotation: '15',
      round_duration_str: 'default', round_duration: 0, p2p: false, p2p_region: '', exclude_inactive_players: true,
      allow_vpn_guests: 1, ping_limit_action: 'spectate', respawn_model: 'v2', accept_connections_manually: false };
    const r = await new Promise((res) => $ММ.$ceTOI.$OMeTо($ММ.$МеoрО, [$ММ.RELIABLE_CREATE_MATCH, JSON.stringify(preset), $ММ.$p1еeс], res));
    if (r[0] === 'ok') $ММ.$O0МHOо(r[1], r[2]);
    return r;
  },
  async join(uid = 1000) {
    const r = await new Promise((res) => $ММ.$ceTOI.$OMeTо($ММ.$МеoрО, [$ММ.RELIABLE_JOIN_MATCH, uid, $ММ.$p1еeс, -1, '1', ''] /* '1' = send me the map */, res));
    if (r[0] === 'ok') $ММ.$O0МHOо(r[1], r[2]);
    return r;
  },
  // Pause menu > Respawn, as its click handler does it (frame18.js): health 0, applied via $AОТеТ at a safe
  // point of the frame. Call it through later(): see below.
  pressRespawn() {
    G.$AОТеТ(() => {
      if (G.$0Ме1А[G.$НAlНc]) G.$0Ме1А[G.$НAlНc].hea = 0;
    });
  },

  // The game reloads the page when guarded code runs with an injected-script frame ("at <anonymous>:") on the
  // stack, and it also guards health/position values against direct edits. Tests therefore never write game
  // state, and they trigger game actions through this queue, which this file's own timer runs.
  later(method, ...args) {
    queue.push([method, args]);
  },
  state() {
    const me = G.$НAlНc;
    const actors = G.$0Ме1А || [];
    const p = actors[me];
    const md = $ММ.match_details;
    return {
      frame: stage.currentFrameLabel, lobby: G.coopClient.screen && G.coopClient.screen.state().lobby,
      slot: me, spectator: G.$00pеH, inMatch: G.$pMМ1, gameType: G.$IcеНе, actors: actors.length,
      me: p && { hea: p.hea, hmax: p.hmax, x: Math.round(p.x), y: Math.round(p.y), io: p.io },
      humans: actors.map((a, i) => a && a.io ? i + ':' + (a.nickname || '?') + ':' + Math.round(a.hea) : null).filter(Boolean),
      match: md && { map: md.map_id, players_max: md.players_max, coop_state: md.coop_state },
      load: G.coopClient.loadKey(),
    };
  },
};
