// Plazma Burst 2 campaign co-op: client side. Loaded after the game scripts (see server/patches.js).
(function () {
  const G = globalThis;
  // Game classes are top-level `class` declarations: global bindings, but not properties of globalThis.
  const MM = $ММ;

  // ------------------------------------------------------------------ server address
  // The lobby connects to localhost:2053 or plazmaburst2.com. Point it at the server this page came from,
  // so a friend opening the host's link (LAN address or tunnel) talks to the same co-op server.
  const openConnection = MM.$OeАоoI;
  MM.$OeАоoI = function (url) {
    if (/:2053$/.test(String(url))) url = location.origin;
    return openConnection.call(this, url);
  };

  // ------------------------------------------------------------------ helpers
  const CAMPAIGN_ID = /^c(\d+)a$/;

  function details() {
    return MM.match_details || null;
  }

  function levelIndex(mapId) {
    const m = CAMPAIGN_ID.exec(mapId || '');
    return m ? parseInt(m[1], 10) : -1;
  }

  function isOwner() {
    const d = details();
    return !!(d && MM.$ppO0l && d.match_owner_login === MM.$ppO0l.login);
  }

  // Hidden command to the co-op server (handled there, never shown in chat).
  function command(text) {
    MM.Event(MM.RELIABLE_CHAT, MM.$Oоolр(0), '-coop ' + text);
  }

  // The current map load, as a key: match id, map and the match_details object. A level restart brings a new
  // details object; but the host's game can reuse the same object for the next match, overwriting its fields,
  // so the object alone isn't enough (it made the host skip the spawn on the next level).
  const loadIds = new WeakMap();
  let nextLoadId = 1;
  function loadKey() {
    const d = details();
    if (!d) return null;
    if (!loadIds.has(d)) loadIds.set(d, nextLoadId++);
    return `${loadIds.get(d)}/${d.uid}/${d.map_id}`;
  }

  // Triggers run on every client, so each player's game reports the same event. Report once per map load.
  const reported = new Set();
  let completing = null; // solo state saved by beforeComplete, restored by afterComplete

  // Co-op rules as in multiplayer COOP: every player spawns once per level (at the level start, or where they
  // join a level in progress). After that a dead player stays dead and spectates until a teammate revives them;
  // if the whole team is down, the level restarts for everyone. Sampled twice a second; only human players
  // (at most 8) are looked at.
  const spawned = new Set(); // map loads (loadKey) on which this player has spawned
  const spawnAsked = new Set(); // map loads on which this player's spawn code has run
  const aliveSeen = new Map(); // loadKey -> Set(actor index): humans who have played on this map
  // While a level loads, a player's character briefly exists with full health before multiplayer marks it dead to
  // await its spawn. Only someone alive for this long has really spawned (else they'd never get their spawn).
  const SURELY_ALIVE_MS = 3000;
  // Recent spawn events of this player (for the test tools).
  const spawnEvents = [];
  const spawnLog = (what) => {
    const d = details();
    spawnEvents.push(`${(performance.now() / 1000).toFixed(1)}s ${d ? d.map_id + '/' + d.uid : '-'} ${what}`);
    if (spawnEvents.length > 20) spawnEvents.shift();
  };
  // Character objects are reused from one level to the next, so the timing restarts with each map load.
  const surelyAlive = (a, now, key) => {
    if (a.$coopAliveKey !== key) { a.$coopAliveKey = key; a.$coopAliveSince = 0; }
    if (!(a.hea > 0)) { a.$coopAliveSince = 0; return false; }
    if (!a.$coopAliveSince) a.$coopAliveSince = now;
    return now - a.$coopAliveSince >= SURELY_ALIVE_MS;
  };
  // Party panel: the other players' heads, names and health, top right (where multiplayer's team scores were). It
  // sits next to the match scene's HUD and goes away with it.
  const PANEL_W = 150;
  const ROW_H = 22;
  const BAR_W = 40;
  const HEAD_W = 22; // the head icon's column
  // A copy of the game's own character clip with only the head showing, in that player's look.
  function headIcon(parent) {
    const c = parent.addChild(new G.player());
    for (const ch of c.children) if (ch !== c.head) ch.visible = false;
    c.x = 9;
    c.y = 19; // the head is drawn above its origin, about 18 px tall
    return c;
  }
  const panel = { clip: null, anchor: null, rows: [], slots: '' };
  function partyPanel() {
    const anchor = G.$e01c1р;
    const d = details();
    const show = !!(anchor && anchor.parent && G.$pMМ1 && G.$0Ме1А && d && levelIndex(d.map_id) >= 0);
    if (panel.clip && (!show || panel.anchor !== anchor)) {
      MovieClip.RemoveIfPossible(panel.clip);
      panel.clip = null;
    }
    if (!show) return;
    const mates = [];
    G.$0Ме1А.forEach((a, i) => { if (a && a.io && a.$HМ0М1 && i !== G.$НAlНc) mates.push(i); });
    if (!panel.clip || panel.slots !== mates.join()) {
      if (panel.clip) MovieClip.RemoveIfPossible(panel.clip);
      const parent = anchor.parent;
      panel.anchor = anchor;
      panel.slots = mates.join();
      panel.clip = parent.addChildAt(new MovieClip(), parent.children.indexOf(anchor) + 1);
      panel.clip.x = 800 - PANEL_W - 4;
      panel.clip.y = 24;
      panel.clip.visible = mates.length > 0;
      const g = (panel.clip.graphics = new Graphics(false));
      g.beginFill('rgba(0,0,0,0.45)');
      g.drawRect(0, 0, PANEL_W, mates.length * ROW_H + 4);
      g.endFill();
      panel.rows = mates.map((slot, n) => {
        const row = panel.clip.addChild(new MovieClip());
        row.x = 4;
        row.y = 2 + n * ROW_H;
        const head = headIcon(row);
        const barX = PANEL_W - 8 - BAR_W;
        const name = row.addChild(HUD.$ТHA0H({ type: HUD.$lpНАA, size: 10, x: Math.round((HEAD_W + barX - 4) / 2), y: 10,
          align: 'center', color: '#ffffff', text: '' }));
        const down = row.addChild(HUD.$ТHA0H({ type: HUD.$lpНАA, size: 10, x: PANEL_W - 8, y: 10, align: 'right', color: '#ff8080', text: 'DOWN' }));
        const bar = row.addChild(new MovieClip());
        bar.x = barX;
        bar.y = 8;
        bar.graphics = new Graphics(false);
        return { slot, head, name, down, bar, shown: '', look: null };
      });
    }
    for (const r of panel.rows) {
      const a = G.$0Ме1А[r.slot];
      if (!a) continue;
      const nick = String(a.nickname || '?');
      // A player killed by others can keep a sliver of health on their teammates' games; the dead flag is what counts.
      const f = a.hea > 0 && !a.$оeoТе ? Math.max(0, Math.min(1, a.hea / (a.hmax || a.hea))) : 0;
      // Their head as their character shows it (model and colours), faded while they're down.
      if (a.head && (r.look !== a.head.filters || r.lookFrame !== a.$lOeНc)) {
        r.look = a.head.filters;
        r.lookFrame = a.$lOeНc;
        r.head.head.gotoAndStop(a.$lOeНc);
        r.head.head.filters = a.head.filters;
      }
      r.head.alpha = f > 0 ? 1 : 0.4;
      const state = `${nick}|${Math.round(f * BAR_W)}`;
      if (state === r.shown) continue;
      r.shown = state;
      r.name.text = nick.length > 11 ? nick.slice(0, 10) + '…' : nick;
      r.name.textColor = f > 0 ? '#ffffff' : '#9a9a9a';
      r.down.visible = !(f > 0);
      r.bar.visible = f > 0;
      const g = r.bar.graphics;
      g.clear();
      g.beginFill('#202020');
      g.drawRect(0, 0, BAR_W, 6);
      g.endFill();
      g.beginFill(f > 0.5 ? '#60d060' : f > 0.25 ? '#e0c040' : '#e05050');
      g.drawRect(0, 0, Math.max(1, Math.round(f * BAR_W)), 6);
      g.endFill();
    }
  }
  // A HUD problem shows once in the console instead of breaking the game every 200 ms.
  setInterval(() => {
    try {
      partyPanel();
    } catch (e) {
      if (!panel.failed) console.error('co-op party panel:', e);
      panel.failed = true;
    }
  }, 200);

  let wipedSince = 0;
  setInterval(() => {
    const d = details();
    const actors = G.$0Ме1А;
    if (!d || !G.$pMМ1 || !actors || levelIndex(d.map_id) < 0) return;
    listen(); // lobby events (e.g. back to the lobby after the level) also reach players who joined directly
    // Multiplayer corner panel: the team scores (and team switch buttons) and "Spectate" mean nothing in a
    // campaign level, so they're hidden; "Join Game" stays for someone spectating a full game. Menu stays.
    if (G.$e01c1р) G.$e01c1р.visible = false;
    if (G.$cecНH) G.$cecНH.visible = !!G.$00pеH;
    hideOthersKitItems();
    // The host's in-game menu: "Leave match" takes the whole party back to the lobby (see partyToLobby).
    if (G.$TeIOl && G.$TeIOl.$Acооl) relabel(G.$TeIOl.$Acооl, G.coopClient.isAuthority() ? 'Return to Lobby' : 'Leave match');
    // ...and "Restart Level" (patched into the menu, hidden for guests).
    if (G.$TeIOl && G.$TeIOl.$coopRestart) G.$TeIOl.$coopRestart.visible = G.coopClient.isAuthority();
    // Scoreboard: the team column shows health (see scoreRow).
    if (G.$lITeI) {
      const header = findText(G.$lITeI, /^Team$/);
      if (header) header.text = 'Health';
    }
    const now = Date.now();
    const key = loadKey();
    let seen = aliveSeen.get(key);
    if (!seen) {
      aliveSeen.clear(); // only the current load matters
      aliveSeen.set(key, (seen = new Set()));
    }
    let anyAlive = false;
    for (let i = 0; i < actors.length; i++) {
      const a = actors[i];
      if (!a || !a.$HМ0М1 || !a.io) continue;
      if (a.hea > 0) anyAlive = true;
      if (i === G.$НAlНc && (a.hea > 0) !== !!a.$coopWasAlive) {
        a.$coopWasAlive = a.hea > 0;
        spawnLog(a.hea > 0 ? 'alive' : 'down');
      }
      if (i === G.$НAlНc && a.hea > 0 && spawnAsked.has(key)) spawned.add(key);
      if (surelyAlive(a, now, key)) {
        seen.add(i);
        if (i === G.$НAlНc) spawned.add(key);
      }
    }
    // Wiped: everyone who has been alive on this level is down (players still waiting for their first spawn
    // don't count), for two seconds in a row.
    if (anyAlive || seen.size === 0) { wipedSince = 0; return; }
    if (!wipedSince) wipedSince = Date.now();
    else if (Date.now() - wipedSince > 2000) {
      wipedSince = 0;
      G.coopClient.missionFailed('The whole team is down');
    }
  }, 500);

  // ---- level state for catching up: triggers (runs left, enabled), doors/movables (position, target, moving)
  // and timers (running, elapsed, runs left). NPCs keep the stock multiplayer sync.
  function levelState() {
    const d = details();
    return {
      map: d && d.map_id,
      uid: d && d.uid,
      triggers: (G.$eННА || []).map((t) => (t ? [t.$cААТ1, t.$oOlОO ? 1 : 0] : null)),
      movables: (G.$АAHОе || []).map((m) => (m ? [m.x, m.y, m.tarx, m.tary, m.$1TIeе ? 1 : 0] : null)),
      timers: (G.$o0IсО || []).map((t) => (t ? [t.$oOlОO ? 1 : 0, t.$OАосс, t.$cААТ1] : null)),
      // NPCs already killed: multiplayer only syncs characters while they're alive, so a late joiner would still
      // see them standing.
      deadNpcs: (G.$0Ме1А || []).map((a, i) => (a && !a.$HМ0М1 && !(a.hea > 0) ? i : -1)).filter((i) => i >= 0),
    };
  }

  function applyLevelState(state) {
    const d = details();
    if (!state || !d || state.map !== d.map_id || state.uid !== d.uid) return;
    // Triggers the host has run more often than this game (runs left count down; -1 = unlimited) are run here the
    // missing number of times, the way a broadcast trigger arrives (host as the activator), so what they do - spawn
    // reinforcements, open doors, ... - happens here too. Copying only their counters left those effects out.
    const host = G.coopClient.authority();
    (state.triggers || []).forEach((v, i) => {
      const t = G.$eННА[i];
      if (!t || !v) return;
      const [hostLeft, hostEnabled] = v;
      for (let n = 0; hostLeft >= 0 && t.$cААТ1 > hostLeft && t.$oOlОO && n < 50; n++) {
        G.$Oр0ol = host;
        G.$pАTIТ(i);
      }
      t.$oOlОO = !!hostEnabled;
      if (hostLeft >= 0 && t.$cААТ1 > hostLeft) t.$cААТ1 = hostLeft; // e.g. the host had disabled it before it ran
    });
    (state.movables || []).forEach((v, i) => {
      const m = G.$АAHОе[i];
      if (m && v) { m.x = v[0]; m.y = v[1]; m.tarx = v[2]; m.tary = v[3]; m.$1TIeе = !!v[4]; }
    });
    (state.timers || []).forEach((v, i) => {
      const t = G.$o0IсО[i];
      if (t && v) { t.$oOlОO = !!v[0]; t.$OАосс = v[1]; t.$cААТ1 = v[2]; }
    });
    // After the triggers above (they may have spawned some of them): NPCs the host has killed are removed here the
    // way the game's own sync removes a dead character (frame2.js, the "hea <= 0" branch of a character update).
    (state.deadNpcs || []).forEach((i) => {
      const a = G.$0Ме1А[i];
      if (!a || a.$HМ0М1 || !(a.hea > 0)) return;
      a.hea = 0;
      a.$оeoТе = true;
      a.alpha = 1;
      a.io = false;
      a.visible = false;
    });
    spawnLog('caught up with the host');
  }

  // Body part model fields set for a full battlesuit (model 49+), as in solo (frame2.js $pНTс1).
  const LOOK_PART_FIELDS = ['$THMcM', '$AААH1', '$сТlAМ', '$ТIpec', '$НOоМO', '$ОIMОo', '$cHАoс', '$Hlppе', '$Аc01о', '$ТрH0c', '$ОАOрр'];

  // Owner tag of a co-op equipment gun: actor slot + 1 in the thousandths of its start x (0 = an ordinary gun).
  function kitTag(x) {
    return Math.round((x - Math.floor(x)) * 1000);
  }

  // Mission failed is reported once per map load too, separately from completion (a level can still be completed
  // while its restart is counting down).
  const failReported = new Set();
  // Other players' equipment grenades (items that only add to a grenade count, weapon slot -2): their owner picks them
  // up on their own game, and that isn't synced, so on everyone else's screen they'd lie at the spawn for the whole
  // level (no one else may take them). Hidden here; the owner's own game still gives them to the owner.
  function hideOthersKitItems() {
    if (!spawned.has(loadKey())) return; // our own seat is only certain once we've spawned
    const guns = G.$ОpMрс || [];
    for (let i = 0; i < G.$cс0Hс; i++) {
      const g = guns[i];
      if (!g || !g.io || g.$cppее !== -2 || g.picken_by !== -1) continue;
      const tag = kitTag(g.$Тссес);
      if (tag && tag !== G.$НAlНc + 1) {
        g.visible = false;
        g.io = false;
      }
    }
  }

  // The first text field under a game HUD object whose text matches.
  function findText(o, re) {
    for (const c of (o && o.children) || []) {
      if (typeof c.text === 'string' && re.test(c.text)) return c;
      const f = findText(c, re);
      if (f) return f;
    }
    return null;
  }

  // Set the caption of a game HUD button (its text field child).
  function relabel(btn, caption) {
    const tf = findText(btn, /Leave match|Return to Lobby/);
    if (tf && tf.text !== caption) tf.text = caption;
  }

  function once(fn) {
    const d = details();
    const key = loadKey();
    if (!d || failReported.has(key)) return;
    failReported.add(key);
    fn(d);
  }

  // ------------------------------------------------------------------ API used by patched game code
  G.coopClient = {
    // In a co-op campaign match. This server only runs campaign levels, so any multiplayer match counts unless its
    // details say otherwise: while a level is being set up they can still be missing, and the co-op rules (whose
    // equipment is whose, ...) must already apply then.
    isCampaign() {
      if (!G.$pMМ1) return false;
      const d = details();
      return !d || levelIndex(d.map_id) >= 0;
    },

    // Mission complete (trigger action 7). In co-op the solo completion code runs between these two calls: it
    // turns the guns you hold into your equipment, pays credits, checks achievements and saves. beforeComplete
    // prepares it (once per level: every player's game fires the trigger) and afterComplete undoes what would
    // move solo on to its own next level, then asks the server to load the next level for everyone.
    beforeComplete() {
      const d = details();
      const key = loadKey();
      if (!d || reported.has(key)) return false;
      reported.add(key);
      const idx = levelIndex(d.map_id);
      completing = { level: G.$lсосТ, pointer: G.LEVEL_POINTER, unlocked: G.$HHolА, speed: G.$MАTOc };
      // Solo turns the guns you hold into your equipment; a player who is down holds none, so keep theirs.
      const me = (G.$0Ме1А || [])[G.$НAlНc];
      if (!me || !(me.hea > 0)) {
        const copy = (list) => (list || []).map((g) => ({ ...g }));
        completing.equipment = { hero1: copy(G.$ll11o), hero2: copy(G.$AАcco) };
      }
      G.$lсосТ = idx;
      // As in solo, credits are paid for a level that's new in this player's own campaign.
      G.$0eосA = idx >= G.$HHolА;
      return true;
    },

    afterComplete() {
      const was = completing;
      completing = null;
      if (was) {
        G.$lсосТ = was.level;
        G.LEVEL_POINTER = was.pointer;
        G.$MАTOc = was.speed; // solo slows the game down at the end of a level
        if (!isOwner()) G.$HHolА = was.unlocked; // the host's save drives which levels are unlocked
        if (was.equipment) {
          G.$ll11o = was.equipment.hero1;
          G.$AАcco = was.equipment.hero2;
        }
      }
      G.$AAсAр = ''; // not "complete": the level stays playable until the server loads the next one
      try { G.$Hl1AА.visible = false; G.$Hl1AА.alpha = 0; } catch (e) {}
      G.$IеOАT();
      sendLoadout();
      command('complete');
    },

    // Same as the trigger, for tools: complete the level with only the unlock step of the solo bookkeeping
    // (no guns, credits or achievements).
    missionComplete() {
      if (!G.coopClient.beforeComplete()) return;
      if (G.$lсосТ === G.$HHolА) G.$HHolА++;
      G.coopClient.afterComplete();
    },

    // The host's "Return to Lobby" in the in-game menu (patched): the server brings everyone back to the lobby.
    partyToLobby() {
      command('lobby');
    },

    // The host's "Restart Level" (in-game menu) and "Kick" (scoreboard); the server checks it's the host.
    restartLevel() {
      command('restart');
    },
    kick(slot) {
      command('kick ' + slot);
    },
    // The scoreboard's kick button (patched in HUD.js): asks the host first.
    askKick(slot) {
      if (!G.coopClient.isAuthority() || slot === G.$НAlНc) return;
      const mc = G.$0Ме1А && G.$0Ме1А[slot];
      const name = (mc && mc.nickname) || 'this player';
      HUD.$MссМТ(`Kick ${name} from the game?`, () => G.coopClient.kick(slot), null, 'Kick', 'Cancel');
    },

    // A scoreboard (Tab) row, after the game filled it (patched in frame2.js). The team column shows the player's
    // health, or DOWN. Profile and report (official site accounts) are hidden; kick is the host's, on others' rows.
    scoreRow(slot, row, mc, present) {
      if (!present || !row) return;
      const icons = row.$МeсlTT || [];
      if (icons[0]) icons[0].visible = false;
      if (icons[1]) icons[1].visible = G.coopClient.isAuthority() && slot !== G.$НAlНc;
      if (icons[3]) icons[3].visible = false;
      row.f2.htmlText = mc.hea > 0 && !mc.$оeoТе
        ? `<font color="#80ff80">${Math.max(1, Math.round(mc.hea))} HP</font>`
        : '<font color="#ff8080">DOWN</font>';
    },

    missionFailed(reason) {
      once(() => command('fail ' + String(reason || '').slice(0, 120)));
    },

    // Level start hands guns lying next to you to you. A gun whose start x carries a seat tag in its
    // thousandths (server/coop.js) is that seat's equipment: only its owner gets it.
    ownsGunAt(x) {
      const tag = kitTag(x);
      return tag === 0 || tag === G.$НAlНc + 1;
    },

    // Walk-over pickup of `gun` by actor `who`: a seat's equipment is only ever picked up by its owner (the game
    // drops and re-picks guns on its own, e.g. when a slot is already taken, so "until they've had it" let the
    // host take a guest's kit).
    mayPick(gun, who) {
      const tag = kitTag(gun.$Тссес);
      return tag === 0 || tag === who + 1;
    },

    // Where to spawn for start point (x, y). If it's on or in a moving part (a lift, a door), follow that part:
    // solo's hero rides it from the first frame, but a multiplayer spawn comes a moment later, after it moved
    // (level 31 starts on a lift; spawning at the old spot got the players crushed).
    startPoint(x, y) {
      for (const m of G.$АAHОе || []) {
        if (!m || m.$MМАНcН === undefined) continue;
        const x0 = m.$MМАНcН, y0 = m.$pIАlМ;
        if (x >= x0 - 5 && x <= x0 + m.w + 5 && y >= y0 - 20 && y <= y0 + m.h) {
          return { x: x + (m.x - x0), y: y + (m.y - y0) };
        }
      }
      return { x, y };
    },

    // Hero health as in solo (frame2.js, solo branch of the character setup): the player characters and the second
    // hero get 500 + 50 per armor upgrade bought in the Equipment shop (armorA main hero, armorB second hero), x1.5
    // with battlesuit 49 - then Impossible's cap for them. Called when the level is built (every game, for every
    // player slot and the ally) and again at your spawn (your own armor is what counts for you).
    heroHealth(mc) {
      if (!mc || !(mc.char == 3 || mc.char == 1 || (mc.char >= 40 && mc.char <= 49))) return;
      const armor = mc.char == 3 ? G.armorB : mc.char == 1 ? G.armorA : 0;
      let v = 500 + (armor || 0) * 50;
      if (G.$рHоеН[0] >= 49) v *= 1.5;
      if (G.LOW_HPS && v < 2000) {
        let cap = mc.char == 49 || (mc.char == 1 && G.$рHоеН[0] == 49) ? 150 : 130;
        const d = details();
        if (d && d.map_id === 'c38a' && mc.char == 3) cap = 10000; // level 39's scripted second-hero fight
        v = Math.min(v, cap);
      }
      if (mc.hmax > 0) mc.hea *= v / mc.hmax;
      mc.hmax = v;
    },

    // On spawning: take your own equipment (tagged guns and grenades) like the level start does for a gun next to
    // you. A guest's game doesn't know its seat yet at level start, so this is where guests get their kit. One gun
    // per weapon slot; the first one becomes the gun in your hands if you hold none.
    takeKit() {
      const me = G.$НAlНc;
      const guns = G.$ОpMрс;
      const player = G.$0Ме1А[me];
      if (!guns || !player) return;
      const slots = new Set();
      for (let i = 0; i < G.$cс0Hс; i++) if (guns[i] && guns[i].io && guns[i].picken_by === me) slots.add(guns[i].$cppее);
      let first = -1;
      for (let i = 0; i < G.$cс0Hс; i++) {
        const g = guns[i];
        // Your equipment grenades: the game's own pickup adds them to your grenade count (up to its limit).
        if (g && g.io && g.picken_by === -1 && g.$cppее === -2 && kitTag(g.$Тссес) === me + 1) G.$cTоpeо(i, me, true);
        if (!g || !g.io || g.picken_by !== -1 || g.$cppее === -2 || slots.has(g.$cppее)) continue;
        if (kitTag(g.$Тссес) !== me + 1) continue;
        g.picken_by = me;
        slots.add(g.$cppее);
        if (first < 0) first = i;
      }
      if (first < 0) return;
      if (player[G.$МАТОе] === -1) player[G.$МАТОе] = first;
      G.$o0MIс(me);
      G.$pрMТl();
    },

    // Dress this player in their campaign look (battlesuit and colours from the campaign screen), as solo does for
    // the hero; multiplayer would use the stock look. Each body part's colour goes in as the solo palette index
    // (the colour letter code accepts digits for it), and the game's own skin sync shows it to everyone.
    applyLook() {
      const me = G.$0Ме1А[G.$НAlНc];
      if (!me || !me.$HМ0М1) return;
      const hero = me.char == 3 ? 1 : me.char == 1 || (me.char >= 40 && me.char <= 49) ? 0 : -1;
      if (hero < 0) return; // a level with another character (level 42)
      const model = G.$рHоеН[hero];
      me.$lOeНc = model;
      if (hero === 0 && model >= 49) {
        for (const f of LOOK_PART_FIELDS) me[f] = model;
        me.$MAНIp = 0.75;
      }
      const colour = (list) => String((list && list[hero]) || 0);
      me.$Нр01I = [colour(G.skin_color_head), colour(G.skin_color_arms), colour(G.skin_color_legs), colour(G.skin_color_body)];
      const nickname = me.nickname;
      G.$pНTс1(me);
      me.nickname = nickname;
      G.$AOеоО(me);
      G.$1loHе(me);
    },

    // The co-op spawn code ran for this player on this level. That only asks for the spawn; the player counts as
    // spawned once seen alive after it (the request can fail, and then the game must be allowed to ask again).
    markSpawned() {
      const d = details();
      spawnLog('spawn code ran');
      if (d) spawnAsked.add(loadKey());
      // Catch up on whatever happened on this level before our game was listening (see server catchUp).
      if (!G.coopClient.isAuthority() && socket()) socket().emit('coop-sync', { op: 'request' });
    },

    // The game may spawn this player: they haven't been alive on this level yet (see the co-op rules above).
    canSpawn() {
      const d = details();
      return !!d && !spawned.has(loadKey());
    },

    // The host: the lowest occupied player seat (the host sits in the map's own player slot, guests are appended
    // after it), so every game agrees without comparing names. If the host leaves, the next player takes over.
    // It answers late joiners' catch-up requests.
    authority() {
      const actors = G.$0Ме1А || [];
      for (let i = 0; i < actors.length; i++) if (actors[i] && actors[i].$HМ0М1 && actors[i].io) return i;
      return -1;
    },

    isAuthority() {
      return !G.$00pеH && G.coopClient.authority() === G.$НAlНc;
    },

    // Run trigger `id` on everyone else's game too.
    broadcastTrigger(id) {
      MM.$epоoАp(MM.RELIABLE_EXEC_TRIGGER, MM.$Oоolр(id), '', '');
    },

    // Seats for people on this map (host + guest player slots), shown on the scoreboard.
    partySize() {
      const actors = G.$0Ме1А || [];
      let n = 0;
      for (let i = 0; i < actors.length; i++) if (actors[i] && actors[i].$HМ0М1) n++;
      return n;
    },

    levelIndex,
    loadKey, // for tools/: changes with every map load, restarts included
    panelRows: () => panel.rows.map((r) => ({ slot: r.slot, name: r.name.text, down: r.down.visible, bar: r.shown })), // for tools/
    isOwner,
    spawnEvents,
  };

  // ------------------------------------------------------------------ lobby connection
  // Connect and authenticate the same way the stock lobby does (MPLobby.js), without opening the lobby.
  function ensureLobby(done) {
    if (MM.$00е0T && MM.$ceTOI === MM.$00е0T && !MM.$00е0T.$TlHр1) return done(null);
    if (MM.$ceTOI && !MM.$ceTOI.$TlHр1 && MM.$ceTOI.$coopAuthing) {
      MM.$ceTOI.$coopAuthing.push(done);
      return;
    }
    if (MM.$ceTOI) MM.$ceTOI.Disconnect();
    const c = MM.$OeАоoI(location.origin);
    MM.$ceTOI = c;
    MM.$сАрoHc = location.origin;
    c.$coopAuthing = [done];
    const rnd = () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(36);
    c.$OMeTо(MM.$МеoрО,
      [MM.RELIABLE_AUTHENTICATE, '.guest', '.guest', 'version_h5', 'hash_h5', MM.$p1еeс, G.$1еT1Н,
        JSON.stringify([rnd(), rnd(), rnd(), rnd()].join('.')), '1769098189070'],
      (r) => {
        const waiting = c.$coopAuthing;
        c.$coopAuthing = null;
        let err = null;
        if (r[0] === 'ok') {
          MM.$ppO0l = JSON.parse(r[1]);
          MM.$00е0T = c;
          MM.$1МАTMH = performance.now();
        } else err = r[1] || 'Unable to connect';
        waiting.forEach((cb) => cb(err));
      });
  }

  function request(parts, done) {
    ensureLobby((err) => {
      if (err) return done(['fail', err]);
      MM.$ceTOI.$OMeTо(MM.$МеoрО, parts, done);
    });
  }

  // ------------------------------------------------------------------ main menu
  // Edition line under the logo (its lettering ends around y 118), in a deliberately silly font.
  const createMenu = HUD.CreateMenuScreen;
  HUD.CreateMenuScreen = (...args) => {
    const r = createMenu(...args);
    const menu = stage.children[stage.children.indexOf(G.$A1Hpe) + 1];
    if (menu) {
      const t = menu.addChild(new TextField());
      t.font = 'bold 17px "Comic Sans MS", "Comic Neue", "Chalkboard SE", cursive';
      t.align = 'center';
      t.color = '#ffd23f';
      t.text = 'Jessnix & Zarx Edition';
      t.x = 600;
      t.y = 128;
      t.rotation = -3;
    }
    return r;
  };

  // ------------------------------------------------------------------ co-op campaign screen
  // Main menu > CO-OP CAMPAIGN opens the solo campaign screen itself (characters, equipment, credits, achievements)
  // with a server list where the level grid was. Host a lobby or join one; in a lobby only the host gets the level
  // grid, and a click there picks the lobby's level (Campaign.js patch). "Play Solo" gives back the solo screen.
  const PARTY_SIZES = [2, 3, 4, 6, 8];
  // Difficulty as on the solo difficulty screen (0 easy .. 3 impossible), with its button colours there.
  const DIFFICULTIES = [
    { name: 'Easy', color: '#4DAA55', w: 48 },
    { name: 'Normal', color: '#88D0FF', w: 62 },
    { name: 'Hard', color: '#E04141', w: 48 },
    { name: 'Impossible', color: '#5A7DAC', w: 80 },
  ];
  const NORMAL = 1;
  const difficultyName = (d) => (DIFFICULTIES[d] || DIFFICULTIES[NORMAL]).name;
  // Use the lobby's difficulty in this game: the solo difficulty screen's flags (easy, hard, impossible = hard + low
  // health, normal = none), set the same way and at the same point that screen does - in the menu, before the level
  // (never during one). Every player's game runs the NPCs, so all of them use the host's choice.
  function applyDifficulty(d) {
    if (stage.currentFrameLabel !== 'campaign') return;
    const n = DIFFICULTIES[d] ? d : NORMAL;
    const easy = n === 0, hard = n >= 2, impossible = n === 3;
    if (G.$НOIHo === easy && G.$OАМАO === hard && G.LOW_HPS === impossible) return;
    G.$НOIHo = easy;
    G.$OАМАO = hard;
    G.LOW_HPS = impossible;
  }
  const difficultyText = (d) => `<font color="${(DIFFICULTIES[d] || DIFFICULTIES[NORMAL]).color}">${difficultyName(d).toUpperCase()}</font>`;

  const HP_PER_EXTRA_PLAYER = 1 / 6; // keep in sync with server/coop.js
  // "enemies x1.17" for a party of n.
  const enemyHealthText = (n) => `enemies x${+(1 + HP_PER_EXTRA_PLAYER * (n - 1)).toFixed(2)}`;
  const REFRESH_MS = 3000;
  const GREEN = HUD.colors.green;
  const GRID = { x: 30, y: 75, step: 35, perRow: 21 }; // the solo screen's level grid
  const TOP = { x: 37, y: 65 }; // where the level grid's label is: the server list / a guest's lobby go there
  const SERVER_ROWS = 3;
  const HERO2_FROM_LEVEL = 30; // the solo screen shows the second hero (486, 266) from this many levels unlocked
  const STOCK_BUTTONS = [[413, 365], [605, 365]]; // "Custom Map", "Next Level"
  const STOCK_GRID = [[37, 65], [30, 75]]; // "CHOOSE LEVEL:", the level buttons
  // Leaving the campaign screen for these keeps you in your lobby (equipment shop, achievements, the match).
  const STAY_IN_LOBBY = ['eq', 'eq2', 'achiv', 'loading', 'gaming', 'campaign'];

  const ui = {
    screen: null, // the solo campaign screen's root clip while it is shown
    layer: null, // our clip on top of it
    solo: false,
    level: null,
    party: 2,
    lobby: null, // the lobby we're in (server view), or null
    lobbies: null,
    games: null,
    status: '',
    nextStatus: '', // shown when the campaign screen opens next (after a level)
    busy: false,
    timer: 0,
    listingSince: 0, // when the game-list request in flight was sent (0 = none)
    shareLink: location.host,
  };

  function text(parent, htmlText, x, y, color, align) {
    return parent.addChild(HUD.$ТHA0H({ type: HUD.$cММIсО, htmlText, x, y, color, align }));
  }

  function button(parent, caption, x, y, w, h, action, style, size) {
    const s = style || {};
    return parent.addChild(HUD.$oOcНТ({ caption, size, color: s.color || '#88D0FF', $АIеооМ: s.$АIеооМ, $TрcоOо: s.$TрcоOо,
      type: HUD.$НОlО0А, x, y, w, h, action }));
  }

  const greenStyle = { color: '#ffffff', $АIеооМ: GREEN.$АIеооМ, $TрcоOо: GREEN.$TрcоOо };

  function click() {
    try { G.$Аоео0(G.$АААеI); } catch (e) {}
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }

  function unlocked(i) {
    return i <= G.$HHolА || G.$еMОHТс;
  }

  // Your equipment for both heroes, as the solo campaign keeps it (Equipment screen / gun carry-over).
  function loadout() {
    const list = (l) => (l || []).map((g) => ({ mdl: g.mdl, upg: g.upg }));
    return { hero1: list(G.$ll11o), hero2: list(G.$AАcco) };
  }

  // ---- talking to the server
  function socket() {
    return MM.$ceTOI && MM.$ceTOI.socket;
  }

  function listen() {
    const s = socket();
    if (!s || s.$coopListening) return;
    s.$coopListening = true;
    s.on('coop-lobby', (state, reason) => {
      ui.lobby = state;
      if (!state && reason) ui.status = '!' + reason;
      if (state) ui.level = state.level;
      render();
    });
    // Level complete: the server put everyone back into a lobby on the next level.
    s.on('coop-return', (state) => {
      ui.lobby = state;
      ui.level = state.level;
      ui.busy = false;
      const done = state.completed ? 'Level complete!' : 'Back in the lobby.';
      ui.nextStatus = state.isHost ? `${done} Start level ${state.level + 1} when everyone's ready.` : done;
      // A won level ends like solo's: the mission-complete sound and a fade to black. Otherwise straight back.
      if (state.completed) {
        try { G.$Аоео0(G.$eIрoс); } catch (e) {}
        fadeThrough(returnToCampaign);
      } else {
        returnToCampaign();
      }
    });
    // Catching up (server catchUp): the host answers with the level's state, the asker applies it.
    s.on('coop-sync-request', (m) => {
      if (G.coopClient.isCampaign() && G.coopClient.isAuthority()) s.emit('coop-sync', { op: 'snapshot', to: m.to, data: levelState() });
    });
    s.on('coop-snapshot', (state) => applyLevelState(state));
    // The host removed this player (scoreboard Kick): leave the level for the co-op screen.
    s.on('coop-kicked', () => {
      ui.lobby = null;
      ui.nextStatus = '!You were removed from the game by the host.';
      returnToCampaign();
    });
    s.on('coop-start', (m) => {
      ui.busy = true;
      ui.lobby = null;
      setStatus(`Starting level ${m.level + 1}...`);
      joinMatch(m.uid);
    });
  }

  // A lobby request ({op, ...}); your current equipment always goes along.
  function coopRequest(msg) {
    return new Promise((resolve) => {
      ensureLobby((err) => {
        if (err) return resolve({ error: err });
        listen();
        socket().emit('coop', { ...msg, loadout: loadout() }, (r) => resolve(r || {}));
      });
    });
  }

  function sendLoadout() {
    coopRequest({ op: 'loadout' });
  }

  // ---- drawing
  // Browsing: the level grid is hidden and the top of the screen lists lobbies and running games.
  // In a lobby, the host sees the level grid (a click picks the lobby's level) with the lobby below it; guests
  // see the lobby where the grid was. Character, equipment, achievements and credits stay as in solo.
  function render() {
    if (!ui.layer) return;
    const layer = ui.layer;
    while (layer.numChildren > 0) layer.removeChildAt(0);
    const hostOfLobby = !!(ui.lobby && ui.lobby.isHost);
    if (ui.lobby) applyDifficulty(ui.lobby.difficulty);
    setStockVisible(ui.solo, ui.solo || hostOfLobby);

    if (ui.solo) {
      button(layer, 'Co-op Mode', 413, 143, 180, 20, () => { click(); ui.solo = false; render(); }, greenStyle);
      return;
    }

    if (hostOfLobby) {
      // The lobby's level, highlighted over its grid button.
      const lvl = ui.lobby.level;
      const x = GRID.x + (lvl % GRID.perRow) * GRID.step;
      const y = GRID.y + Math.floor(lvl / GRID.perRow) * GRID.step;
      const b = button(layer, String(lvl + 1), x, y, 25, 25, () => {}, greenStyle, 10);
      b.blending = Blending.ADDITIVE;
      drawHostLobby(layer, ui.lobby);
    } else if (ui.lobby) {
      drawGuestLobby(layer, ui.lobby);
    } else {
      drawServerList(layer);
    }
  }

  function statusLine(parent, x, y) {
    if (ui.status) text(parent, escapeHtml(ui.status.replace(/^!/, '')), x, y, ui.status.startsWith('!') ? '#ff8888' : '#ffff88');
    else text(parent, `Friends join at: <font color="#ffffff">${escapeHtml(ui.shareLink)}</font>`, x, y, '#7d8fa3');
  }

  function partyPicker(parent, x, y, value, onPick) {
    text(parent, 'PLAYERS:', x, y + 4);
    PARTY_SIZES.forEach((n, k) => {
      button(parent, String(n), x + 75 + k * 34, y - 7, 30, 20, onPick ? () => { click(); onPick(n); } : null, n === value ? greenStyle : null);
    });
    text(parent, enemyHealthText(value), x + 250, y + 3, '#7d8fa3');
  }

  function difficultyPicker(parent, x, y, value, onPick) {
    text(parent, 'DIFFICULTY:', x, y + 4);
    let bx = x + 92;
    DIFFICULTIES.forEach((d, k) => {
      const picked = k === value;
      button(parent, d.name, bx, y - 3, d.w, 20, onPick && !picked ? () => { click(); onPick(k); } : null,
        picked ? { color: '#ffffff', $АIеооМ: GREEN.$АIеооМ, $TрcоOо: GREEN.$TрcоOо } : { color: d.color });
      bx += d.w + 3;
    });
  }

  function memberList(l) {
    return l.members.map((name, k) => escapeHtml(name) + (k === 0 ? ' <font color="#ffff88">(host)</font>' : '')).join(', ');
  }

  function drawServerList(layer) {
    text(layer, 'CO-OP SERVERS:', TOP.x, TOP.y);
    const rows = [
      ...(ui.lobbies || []).map((l) => ({
        name: l.title, what: `Level ${l.level + 1} ${difficultyName(l.difficulty)} · lobby`, count: `${l.members.length}/${l.party}`,
        full: l.members.length >= l.party, label: 'Join', go: () => joinLobby(l.id),
      })),
      ...(ui.games || []).filter((m) => m.game_type === 'COOP' && levelIndex(m.map_id) >= 0 && m.players_current > 0).map((m) => ({
        name: m.title, what: `${m.map_name.replace('Campaign ', 'Level ')} ${difficultyName(m.coop_difficulty)} · playing`, count: `${m.players_current}/${m.coop_party || '?'}`,
        full: m.players_current >= (m.coop_party || 0), label: 'Join', go: () => joinGame(m),
      })),
    ];
    if (ui.lobbies === null) text(layer, 'Looking for servers...', TOP.x + 10, TOP.y + 22, '#7d8fa3');
    else if (rows.length === 0) text(layer, 'No servers yet. Host a lobby and invite your friends!', TOP.x + 10, TOP.y + 22, '#7d8fa3');
    rows.slice(0, SERVER_ROWS).forEach((r, k) => {
      const y = TOP.y + 20 + k * 22;
      text(layer, escapeHtml(r.name), TOP.x + 10, y + 4, '#ffffff');
      text(layer, escapeHtml(r.what), TOP.x + 230, y + 4, '#88D0FF');
      text(layer, r.count, TOP.x + 390, y + 4, r.full ? '#ff8888' : '#88ff88');
      button(layer, r.full ? 'Full' : r.label, TOP.x + 440, y, 100, 20, r.full || ui.busy ? null : () => { click(); r.go(); }, r.full ? null : GREEN);
    });
    statusLine(layer, TOP.x, TOP.y + 90);

    button(layer, 'Play Solo', 413, 365, 180, 20, () => { click(); ui.solo = true; render(); });
    const ok = !ui.busy;
    button(layer, 'Host Lobby', 605, 365, 180, 20, ok ? () => { click(); hostLobby(); } : null, ok ? GREEN : null);
  }

  // Host: below the level grid, left of Achievements.
  function drawHostLobby(layer, l) {
    const y = GRID.y + 2 * GRID.step - 7; // just under the grid's second row
    text(layer, `LOBBY: <font color="#ffffff">${escapeHtml(l.title)}</font>`, TOP.x, y + 4, '#88D0FF');
    const pickParty = (n) => updateLobby({ party: n });
    const pickDifficulty = (d) => updateLobby({ difficulty: d });
    const members = `IN LOBBY ${l.members.length}/${l.party}: <font color="#ffffff">${memberList(l)}</font>`;
    if (G.$HHolА >= HERO2_FROM_LEVEL) {
      // The second hero's column takes the space above the bottom buttons: everything goes under the level grid.
      partyPicker(layer, TOP.x + 215, y, l.party, pickParty);
      difficultyPicker(layer, TOP.x, y + 21, l.difficulty, pickDifficulty);
      if (ui.status) statusLine(layer, 200, 186);
      else text(layer, members, 200, 186, '#88D0FF');
    } else {
      // Same block as the guests', above the bottom buttons.
      partyPicker(layer, 413, 248, l.party, pickParty);
      difficultyPicker(layer, 413, 274, l.difficulty, pickDifficulty);
      text(layer, members, 413, 300, '#88D0FF');
      statusLine(layer, 413, 322);
    }

    button(layer, 'Leave Lobby', 413, 365, 180, 20, () => { click(); leaveLobby(); });
    const ok = !ui.busy;
    button(layer, `Start Level ${l.level + 1}`, 605, 365, 180, 20, ok ? () => { click(); startLobby(); } : null, ok ? GREEN : null);
  }

  // Guest: lobby and level where the level grid was; who's in it just above the bottom buttons (or, when the
  // second hero's column takes that space, under the level line).
  function drawGuestLobby(layer, l) {
    text(layer, `LOBBY: <font color="#ffffff">${escapeHtml(l.title)}</font>`, TOP.x, TOP.y, '#88D0FF');
    text(layer, `LEVEL <font color="#ffffff">${l.level + 1}</font>  ${difficultyText(l.difficulty)}  (picked by ${escapeHtml(l.host)})`, TOP.x + 300, TOP.y, '#88D0FF');
    if (!ui.status) text(layer, `Waiting for ${escapeHtml(l.host)} to start level ${l.level + 1}...`, TOP.x, TOP.y + 25, '#ffff88');
    const at = G.$HHolА >= HERO2_FROM_LEVEL ? { x: TOP.x, y: TOP.y + 68 } : { x: 413, y: 270 };
    // The host's choices, as plain text: only the host picks them.
    text(layer, `PLAYERS: <font color="#ffffff">${l.party}</font>    <font color="#7d8fa3">${enemyHealthText(l.party)}</font>`, at.x, at.y - 18, '#88D0FF');
    text(layer, `DIFFICULTY: ${difficultyText(l.difficulty)}`, at.x, at.y + 6, '#88D0FF');
    text(layer, `IN LOBBY ${l.members.length}/${l.party}: <font color="#ffffff">${memberList(l)}</font>`, at.x, at.y + 30, '#88D0FF');
    statusLine(layer, at.x === TOP.x ? 200 : at.x, at.y + 52); // beside CHARACTERS when on the left

    button(layer, 'Leave Lobby', 413, 365, 180, 20, () => { click(); leaveLobby(); });
    button(layer, 'Waiting for host', 605, 365, 180, 20, null);
  }

  // Parts of the solo screen co-op mode hides: its "Custom Map" / "Next Level" buttons (ours sit there), and
  // the level grid except for a lobby's host.
  function setStockVisible(buttons, grid) {
    const kids = (ui.screen && ui.screen.children) || [];
    for (const c of kids) {
      const at = (x, y) => Math.round(c.x) === x && Math.round(c.y) === y;
      if (STOCK_BUTTONS.some(([x, y]) => at(x, y))) c.visible = buttons;
      if (STOCK_GRID.some(([x, y]) => at(x, y))) c.visible = grid;
    }
  }

  function setStatus(s) {
    ui.status = s;
    render();
  }

  // ---- actions
  async function hostLobby() {
    ui.busy = true;
    if (!unlocked(ui.level)) ui.level = Math.min(G.$HHolА, G.$сclpO - 1); // e.g. after a lobby on a level you lack
    const r = await coopRequest({ op: 'host', level: ui.level, party: ui.party });
    ui.busy = false;
    if (r.error) return setStatus('!' + r.error);
    ui.lobby = r.lobby;
    setStatus('Lobby open. Waiting for friends to join...');
  }

  async function joinLobby(id) {
    ui.busy = true;
    const r = await coopRequest({ op: 'join', id });
    ui.busy = false;
    if (r.error) return setStatus('!' + r.error);
    ui.lobby = r.lobby;
    setStatus('');
  }

  async function leaveLobby() {
    await coopRequest({ op: 'leave' });
    ui.lobby = null;
    setStatus('');
  }

  async function updateLobby(change) {
    const r = await coopRequest({ op: 'update', ...change });
    if (r.error) return setStatus('!' + r.error);
    ui.lobby = r.lobby;
    render();
  }

  async function startLobby() {
    ui.busy = true;
    setStatus(`Starting level ${ui.lobby.level + 1}...`);
    const r = await coopRequest({ op: 'start' });
    if (r.error) {
      ui.busy = false;
      return setStatus('!' + r.error);
    }
    const preset = { ranked: false, max_players: r.party, game_type: 'COOP', min_reputation: 0, map_rotation: '',
      title: String(r.title).slice(0, 40), map_id: `c${r.level}a`, password: '', gameplay_modifications: '',
      ping_limit: '', rounds_until_rotation: '15', round_duration_str: 'default', round_duration: 0, p2p: false,
      p2p_region: '', exclude_inactive_players: false, allow_vpn_guests: 1, ping_limit_action: 'spectate',
      respawn_model: 'v2', accept_connections_manually: false };
    request([MM.RELIABLE_CREATE_MATCH, JSON.stringify(preset), MM.$p1еeс], enterMatch);
  }

  function joinGame(m) {
    ui.busy = true;
    setStatus(`Joining ${m.title}...`);
    applyDifficulty(m.coop_difficulty);
    sendLoadout(); // used from the next level on
    joinMatch(m.uid);
  }

  // Leave the level for the campaign screen: the in-game menu's exit (stop the level, leave the match), but
  // to the campaign screen instead of the multiplayer lobby.
  // A completed level fades to black before the lobby, like the end of a level in solo, and the co-op screen fades
  // in. (Solo uses its overlay $Hl1AА, which multiplayer keeps clear every frame, so this one is ours.)
  const FADE_OUT_MS = 1200;
  const FADE_IN_MS = 500;
  let fading = null;
  function fadeThrough(then) {
    if (stage.currentFrameLabel !== 'gaming' || fading) {
      then();
      return;
    }
    const cover = (fading = stage.addChild(HUD.$OоОT1е('#000000')));
    cover.alpha = 0;
    const start = Date.now();
    let switched = false;
    const timer = setInterval(() => {
      const t = Date.now() - start;
      if (t < FADE_OUT_MS) {
        cover.alpha = t / FADE_OUT_MS;
        return;
      }
      if (!switched) {
        switched = true;
        try { then(); } catch (e) { console.error(e); }
        stage.addChild(cover); // back on top of the co-op screen
      }
      cover.alpha = Math.max(0, 1 - (t - FADE_OUT_MS) / FADE_IN_MS);
      if (cover.alpha > 0) return;
      clearInterval(timer);
      MovieClip.RemoveIfPossible(cover);
      fading = null;
    }, 30);
  }

  function returnToCampaign() {
    if (stage.currentFrameLabel !== 'gaming') return;
    G.$pМоcT();
    if (G.$pMМ1) MM.$рОеAо();
    G.$0lH1p.stop();
    G.$coОlp();
    G.$срMеl = 0;
    G.$pMМ1 = false;
    G.gotoAndStop('campaign');
    G.$oеeес();
  }

  function joinMatch(uid) {
    request([MM.RELIABLE_JOIN_MATCH, uid, MM.$p1еeс, -1, '1', ''], enterMatch);
  }

  function enterMatch(r) {
    if (r[0] === 'ok') {
      MM.$O0МHOо(r[1], r[2]);
    } else {
      ui.busy = false;
      setStatus('!' + r[1]);
    }
  }

  // ---- keeping the lists fresh
  // One game-list request at a time: the server rejects a second one within 300 ms ("Too fast"). A request
  // that got no answer for 10 s no longer blocks the next one.
  function refresh() {
    if (!ui.layer || ui.solo || ui.lobby) return;
    coopRequest({ op: 'list' }).then((r) => {
      if (!ui.layer) return;
      if (r.lobbies) ui.lobbies = r.lobbies;
      render();
    });
    if (ui.listingSince && Date.now() - ui.listingSince < 10000) return;
    ui.listingSince = Date.now();
    request([MM.RELIABLE_GET_MATCH_LIST, '{}', MM.$p1еeс, 'match_list'], (r) => {
      ui.listingSince = 0;
      if (!ui.layer) return;
      if (r[0] === 'ok') {
        ui.games = JSON.parse(r[1]);
        if (ui.status.startsWith('!Server')) ui.status = '';
      } else ui.status = '!Server: ' + r[1];
      render();
    });
  }

  // The address friends should open: the server's public tunnel link, else its LAN address when this page
  // was opened as localhost (useless to anyone else), else the address this page came from.
  function loadShareLink() {
    fetch('/coop/info.json', { cache: 'no-store' })
      .then((r) => r.json())
      .then((info) => {
        const local = /^(localhost|127\.|\[::1\])/.test(location.hostname);
        const link = info.publicUrl || (local && info.lan && info.lan[0]) || location.origin;
        ui.shareLink = link.replace(/^https?:\/\//, '').replace(/\/$/, '');
        render();
      })
      .catch(() => {});
  }

  // ---- the frame hooks
  const createSolo = HUD.CreateCampaignScreen;
  const disposeSolo = HUD.DisposeCampaignScreen;

  HUD.CreateCampaignScreen = () => {
    createSolo();
    ui.screen = stage.children[stage.children.indexOf(G.$A1Hpe) + 1] || null;
    ui.layer = ui.screen ? ui.screen.addChild(new MovieClip()) : null;
    ui.busy = false;
    ui.status = ui.nextStatus || '';
    ui.nextStatus = '';
    if (ui.level === null || !unlocked(ui.level)) ui.level = Math.min(G.$HHolА, G.$сclpO - 1);
    render();
    refresh();
    loadShareLink();
    ui.timer = setInterval(refresh, REFRESH_MS);
  };

  HUD.DisposeCampaignScreen = () => {
    clearInterval(ui.timer);
    ui.timer = 0;
    ui.layer = null;
    ui.screen = null;
    disposeSolo();
    if (ui.lobby && !STAY_IN_LOBBY.includes(stage.currentFrameLabel)) leaveLobby();
  };

  Object.assign(G.coopClient, {
    // Campaign.js patch: in co-op mode a level click picks the level instead of starting solo.
    lobbyScreen: () => !!ui.layer && !ui.solo,
    pickLevel(i) {
      if (!unlocked(i) || !ui.lobby || !ui.lobby.isHost) return;
      click();
      ui.level = i;
      updateLobby({ level: i });
    },
    // For the test tools: read the screen and press its buttons without pixel coordinates.
    screen: {
      state: () => ({ open: !!ui.layer, solo: ui.solo, level: ui.level, party: ui.party, lobby: ui.lobby,
        lobbies: ui.lobbies, games: ui.games, status: ui.status, busy: ui.busy }),
      selectLevel: (i) => G.coopClient.pickLevel(i),
      selectParty: (n) => (ui.lobby ? updateLobby({ party: n }) : (ui.party = n)),
      selectDifficulty: (d) => updateLobby({ difficulty: d }),
      hostLobby: () => hostLobby(),
      joinLobby: (id) => joinLobby(id),
      startLobby: () => startLobby(),
      leaveLobby: () => leaveLobby(),
      joinGame: (uid) => joinGame((ui.games || []).find((m) => m.uid === uid)),
    },
  });
})();
