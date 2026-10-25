// Plazma Burst 2 campaign co-op server.
// Serves the game (with the files in ../client overriding the originals) and runs the game's own
// match-server code from scripts/libs/flash.js in a Node sandbox, with local stand-ins for the
// parts that only exist on the official server (auth registry, map lookup).
//
// usage: node server/server.js [port] [--verbose]      then open http://localhost:<port>/
const fs = require('fs');
const http = require('http');
const path = require('path');
const vm = require('vm');
const { Server } = require('socket.io');
const maps = require('./maps');
const coop = require('./coop');
const patches = require('./patches');
const share = require('./share');
const lobby = require('./lobby');

const args = process.argv.slice(2);
const PORT = parseInt(args.find((a) => /^\d+$/.test(a)) || process.env.PORT || '2053', 10);
const GAME = path.resolve(__dirname, '../../plazma_burst_2/game_compiled');
const OVERRIDES = path.resolve(__dirname, '../client');
const VERBOSE = args.includes('--verbose') || !!process.env.PB2_VERBOSE;
const seenErrors = new Set(); // errors already logged, so repeating ones don't flood the console

// ---------------------------------------------------------------- game server code in a sandbox

const sandbox = vm.createContext({
  console, setTimeout, clearTimeout, setInterval, clearInterval, Date, Math, JSON,
  URL, TextEncoder, TextDecoder,
});
sandbox.globalThis = sandbox;
sandbox.window = sandbox;
sandbox.document = { location: { hostname: 'server', href: 'http://server/' }, addEventListener() {} };
sandbox.navigator = { userAgent: 'node' };
sandbox.addEventListener = () => {};
sandbox.trace = (...a) => { if (VERBOSE) console.log('[game]', ...a); };
sandbox.ChatNewMsg = () => {};
sandbox.TRACK_MP_LOGS = false;
sandbox.ReportCaughtError = (e) => console.error('[game error]', e);
sandbox.getCallstack = () => '';

for (const f of ['_strings.js', 'scripts/libs/tools.js', 'scripts/libs/xml.js', 'scripts/connection.js', 'scripts/libs/flash.js'])
  vm.runInContext(fs.readFileSync(path.join(GAME, f), 'utf8'), sandbox, { filename: f });

const g = (expr) => vm.runInContext(expr, sandbox);
const MM = g('$ММ');
const Connection = g('$рсНAе');
MM.$T0еcр = true; // run as the server

// Alphabet for the compact number encoding ($ММ.$Oоolр / $OНННО). The browser fills it in at startup
// from code we don't load: char codes 3..125, without '-' (the sign).
MM.$ocMТр1 = Array.from({ length: 123 }, (_, i) => String.fromCharCode(i + 3)).filter((c) => c !== '-').join('');

// Server metrics: not needed.
sandbox.$OcМср = { $АlpАO() {}, $IАОp0: new Proxy({}, { get: (_, k) => String(k) }) };

// Auth/moderation registry. Everyone is a guest with the nickname they typed; nothing is banned or logged.
let nextUid = 1;
const registryBase = {
  $1OoOН: new WeakMap(),
  $T0ОHОс: new Map(),
  $IIрМeT: new Map(),
  $pсеIcH: [],
  entries: {},
  $ТОIсe: () => 0,
  // (connection, version, hash, login, password, ?, first_uid, ?, done)
  // (connection, version, hash, login, password, nickname, first_uid, client build, done)
  $ITTНрl(connection, version, hash, login, password, nickname, firstUid, build, done) {
    const typed = login && login !== '.guest' ? login : nickname;
    const nick = String(typed || '').replace(/[^\w .\-]/g, '').slice(0, 20) || ('Player' + nextUid);
    connection.$ppO0l = {
      nickname: nick,
      login: nick.toLowerCase(),
      login_proof: '',
      uid: nextUid++,
      mdl: 0,
      mdl2: 0,
      is_staff: false,
      is_guest: true,
      is_vpn: false,
      is_public_supporter: false,
      support_months: 0,
    };
    // Per-player stats record the lobby and matches read (reputation, skill, ...).
    connection.$НMМpо = { key: 'guest' + connection.$ppO0l.uid, login: connection.$ppO0l.login, reputation: 0, skill: 0, wins: 0, loses: 0 };
    // Device fingerprint used by match ban lists; none here.
    connection.$сOрpM = { $0О1еcM: () => null };
    // Auth session, needed to own matches.
    registryBase.$1OoOН.set(connection, { id: connection.$ppO0l.uid, $АAMсo: Date.now() + 48 * 3600 * 1000 });
    console.log(`[auth] ${nick} (${connection.ip})`);
    done(null);
  },
};
// Event logging, rating updates and per-tick moderation checks: nothing to do locally.
for (const k of ['$оlеоН', '$lр1oМе', '$НАеоТc', '$Т0ОcpT', '$0еMlMp']) registryBase[k] = () => null;
const reportedUnknown = new Set();
sandbox.$с0A = new Proxy(registryBase, {
  get(target, key) {
    if (key in target) return target[key];
    if (typeof key === 'symbol') return undefined;
    if (VERBOSE && !reportedUnknown.has(key)) {
      reportedUnknown.add(key);
      console.log('[registry] unhandled', String(key));
    }
    // Unknown members are either log-type constants or checks; a no-op function serves both.
    return () => null;
  },
});

// HTTP helper the match uses to look up a map: answer locally instead of calling plazmaburst2.com.
sandbox.$HAcТМН = 'local-map-lookup';
sandbox.$ТНeAHH = 'local';
sandbox.$оH1MpH = 'local'; // request key for the official map endpoint; unused here
sandbox.$0pMoНI = {
  $оОOорl(_unused, url, method, opts, onDone) {
    const [mapId] = String(opts.data).split('[^c]');
    setImmediate(() => onDone(maps.lookup(mapId)));
  },
};

// ---------------------------------------------------------------- campaign co-op

const Match = g('$ООТТl');
const SPECTATOR_SLOT = MM.$оОсOс;
const CAMPAIGN_ROUND_MS = 6 * 60 * 60 * 1000;
MM.$I1OТIc.push('coop_party', 'coop_difficulty'); // match fields included in match listings

function partySize(match) {
  return Math.max(1, Math.min(coop.MAX_PARTY, parseInt(match.desired_players_max || match.max_players, 10) || 1));
}

// Seat order of a match: who plays seat 0 (host), 1, 2... It decides whose equipment goes where in the level
// and who is seated where when it loads. First load: the lobby's order (host first), else just the owner.
// Later loads: whoever is seated, in seat order (re-seating keeps that order, see $IcсcA below).
function seatOrder(match) {
  if (match.$coopSlots) {
    const seated = match.$coopSlots.map((s) => match.$p1OOc[s]).filter(Boolean);
    if (seated.length) return seated;
  }
  const owner = match.$eс0МО0;
  return (owner && owner.$coopPendingRanks) || (owner ? [owner] : []);
}

// Map lookups happen synchronously inside $ееААT; tell maps.js the party size and each seat's equipment.
const loadMap = Match.prototype.$ееААT;
Match.prototype.$ееААT = function (mapId, callback) {
  const order = seatOrder(this);
  this.$coopSeatOrder = order;
  maps.setBuild(partySize(this), order.map((c) => c.$coopLoadout || null));
  return loadMap.call(this, mapId, callback);
};

// Applying a map: campaign maps have more actors than humans, so lift the host's player cap and remember
// which actor slots are for people.
const applyMap = Match.prototype.$epсАTo;
Match.prototype.$epсАTo = function (parts, callback) {
  const mapId = parts[4];
  if (!coop.isCampaignId(mapId)) {
    this.$coopSlots = null;
    return applyMap.call(this, parts, callback);
  }
  const party = partySize(this);
  const built = maps.built(mapId, party);
  const desired = this.desired_players_max;
  this.desired_players_max = built.playersMax;
  // Seat-holders are re-seated inside applyMap, so the slot list must be in place first.
  this.$coopSlots = built.slots;
  this.coop_party = party; // shown in the co-op screen's game list
  // Difficulty picked in the lobby (players joining the running game apply it from the listing).
  const starter = this.$eс0МО0;
  if (starter && starter.$coopPendingDifficulty !== undefined) {
    this.coop_difficulty = starter.$coopPendingDifficulty;
    starter.$coopPendingDifficulty = undefined;
  }
  if (this.coop_difficulty === undefined) this.coop_difficulty = 1;
  this.$coopMapId = mapId;
  // A campaign level is not a timed round: the round only ends when everyone is dead (restart) or the
  // level's own mission-complete trigger fires.
  this.round_duration = CAMPAIGN_ROUND_MS;
  try {
    return applyMap.call(this, parts, callback);
  } finally {
    this.desired_players_max = desired;
    this.$coopBusy = false;
    this.$coopPending = null;
    clearTimeout(this.$coopCountdown);
    console.log(`[match] "${this.title}" loaded ${coop.levelName(mapId)} for ${party} players (slots ${built.slots.join(',')})`);
    // A lobby's match is ready: send the other members in.
    const owner = this.$eс0МО0;
    if (owner && owner.$coopLobby) lobby.started(owner, this.uid);
  }
};

// Listing info refresh: when the match owner has left (their stats record is cleared on disconnect), the stock
// code looks the owner up in the official server's account registry, which doesn't exist here, and crashed every
// match-list request after that. The owner's reputation is only shown in the stock lobby; use 0.
const refreshListing = Match.prototype.$сlc1eМ;
Match.prototype.$сlc1eМ = function () {
  const owner = this.$eс0МО0;
  if (owner && !owner.$НMМpо && !registryBase.$IIрМeT.get(this.match_owner_auth_id)) {
    this.match_owner_reputation = 0;
    return;
  }
  return refreshListing.call(this);
};

// Seating: in a campaign match only the host actor and the appended guest actors take people. Someone in the
// match's seat order gets their own seat (that's where their equipment was put); anyone else the first free one.
const takeSlot = Connection.prototype.$IcсcA;
Connection.prototype.$IcсcA = function (match, slot = -1, notify = true) {
  const allowed = match && match.$coopSlots;
  if (allowed && slot !== SPECTATOR_SLOT) {
    const order = match.$coopSeatOrder || [];
    const own = allowed[order.indexOf(this)];
    // Seats held for other people in the seat order who are still connected (lobby members may not have
    // joined yet).
    const held = new Set(order.map((c, r) => (c !== this && !c.$TlHр1 ? allowed[r] : undefined)));
    const free = (s) => s !== undefined && match.$p1OOc[s] === null;
    if (free(own)) slot = own;
    else if (!(allowed.includes(slot) && free(slot) && !held.has(slot))) {
      const open = allowed.find((s) => free(s) && !held.has(s));
      slot = open === undefined ? SPECTATOR_SLOT : open;
    }
  }
  return takeSlot.call(this, match, slot, notify);
};

// Level flow commands sent (hidden) by client/coop/coop-client.js: the level's own triggers (complete, fail; every
// client runs them, so the first report wins) and the host's in-game menu (lobby, restart, kick).
// Level changes are announced in the chat with a countdown; one is pending at a time ($coopPending), except that
// completing the mission or going back to the lobby wins over a restart that is still counting down.
const COUNTDOWN_S = 3;

// Says `intro` (if any), then "<what> in 3...", "2...", "1..." a second apart, then runs `done`.
function countdown(match, intro, what, color, done) {
  clearTimeout(match.$coopCountdown);
  if (intro) match.$HАeHT(intro, color);
  let n = COUNTDOWN_S;
  const tick = () => {
    if (n === 0) {
      match.$coopCountdown = null;
      done();
      return;
    }
    match.$HАeHT(`${what} in ${n}...`, color);
    n--;
    match.$coopCountdown = setTimeout(tick, 1000);
  };
  tick();
}

function partyOf(match) {
  return seatOrder(match).filter((c) => c && c.$eоIIH === match);
}

function coopCommand(text, connection) {
  const match = connection.$eоIIH;
  if (!match || !match.$coopSlots) return;
  const [cmd, ...rest] = text.split(' ');
  const arg = rest.join(' ');
  const isHost = partyOf(match)[0] === connection;
  const level = parseInt(String(match.$coopMapId || '').slice(1), 10);
  const toLobby = (lvl, completed = false) => () => {
    const people = partyOf(match);
    const host = people.includes(match.$eс0МО0) ? match.$eс0МО0 : people[0];
    if (host) lobby.regroup(host, people, lvl, match.coop_party || people.length, match.coop_difficulty, completed);
  };
  const restart = () => match.$ееААT('reload');
  const busy = match.$coopBusy;
  const overridesRestart = busy && match.$coopPending === 'restart';

  if (cmd === 'complete') {
    if (busy && !overridesRestart) return;
    // Back to a lobby together (host and seat order kept), on the next level: the host starts it when ready.
    // The trigger's own target isn't used: it holds the level's internal id, not the next map.
    const last = !coop.isCampaignId(`c${level + 1}a`);
    match.$coopBusy = true;
    match.$coopPending = 'lobby';
    countdown(match, last ? 'Campaign complete! Well played.' : 'Mission complete!', 'Back to the lobby', '#88ff88',
      toLobby(last ? level : level + 1, true));
  } else if (cmd === 'lobby') {
    // The host's "Return to Lobby": everyone back to one lobby on this same level.
    if (!isHost || (busy && !overridesRestart)) return;
    match.$coopBusy = true;
    match.$coopPending = 'lobby';
    countdown(match, 'The host is taking everyone back to the lobby.', 'Back to the lobby', '#ffff88', toLobby(level));
  } else if (cmd === 'restart') {
    // The host's "Restart Level".
    if (!isHost || busy) return;
    match.$coopBusy = true;
    match.$coopPending = 'restart';
    countdown(match, 'The host is restarting the level.', 'Restarting level', '#ffff88', restart);
  } else if (cmd === 'fail') {
    if (busy) return;
    match.$coopBusy = true;
    match.$coopPending = 'restart';
    countdown(match, `Mission failed${arg ? ': ' + arg : ''}.`, 'Restarting level', '#ff8888', restart);
  } else if (cmd === 'kick') {
    // The host's Kick on the scoreboard: that player leaves the level and goes back to their co-op screen.
    const target = match.$p1OOc[parseInt(arg, 10)];
    if (!isHost || !target || target === connection) return;
    const name = (target.$ppO0l && target.$ppO0l.nickname) || 'A player';
    match.$HАeHT(`${name} was removed by the host.`, '#ff8888');
    if (target.socket) target.socket.emit('coop-kicked');
    // In case their game doesn't leave by itself.
    setTimeout(() => { if (target.$eоIIH === match) target.$рОеAо(true); }, 3000);
  }
}

// Catching up on a level: a player who has just spawned asks the host (first seat in the match) for the state
// of triggers, doors and timers, which the host's game sends back through here. Covers everything that happened
// before their game was listening (late joiners, a slightly slower load).
const SNAPSHOT_MAX_CHARS = 200000;
let nextSyncId = 1;
const syncTargets = new Map(); // id -> connection waiting for a snapshot
function catchUp(c, msg) {
  const match = c.$eоIIH;
  if (!match || !match.$coopSlots || !msg) return;
  if (msg.op === 'request') {
    const host = seatOrder(match).find((p) => p && p !== c && p.$eоIIH === match && p.socket);
    if (!host) return;
    const id = nextSyncId++;
    syncTargets.set(id, c);
    setTimeout(() => syncTargets.delete(id), 30000);
    host.socket.emit('coop-sync-request', { to: id });
  } else if (msg.op === 'snapshot') {
    const target = syncTargets.get(msg.to);
    syncTargets.delete(msg.to);
    if (!target || target.$eоIIH !== match || !target.socket) return;
    const data = JSON.stringify(msg.data || null);
    if (data.length <= SNAPSHOT_MAX_CHARS) target.socket.emit('coop-snapshot', msg.data);
  }
}

function decodeParts(msg) {
  return String(msg.data).split(Connection.$MоMcM).map((p) => Connection.$МIеAА(p, Connection.$1ITeI));
}

// Log incoming reliable messages by name (PB2_VERBOSE=1) and any handler errors.
const handleReliable = MM.$c0рlc;
MM.$c0рlc = function (msg, connection) {
  const parts = decodeParts(msg);
  const type = MM.$OНННО(parts[0]);
  if (VERBOSE && type !== MM.RELIABLE_RESPONSE && type !== MM.RELIABLE_PING)
    console.log('[recv]', MM.$lНАMН[type] || type, connection.$ppO0l ? connection.$ppO0l.nickname : '(no profile)');
  if (type === MM.RELIABLE_CHAT && connection.$ppO0l && String(parts[2]).startsWith('-coop ')) {
    coopCommand(parts[2].slice('-coop '.length), connection);
    return;
  }
  try {
    return handleReliable.call(this, msg, connection);
  } catch (e) {
    // The stock server drops the client on any handler error. Log it (once per distinct error) and keep the
    // player connected instead: one bad message shouldn't kick someone out of a co-op run.
    const key = String(e && e.stack);
    if (!seenErrors.has(key)) {
      seenErrors.add(key);
      console.error('[handler]', MM.$lНАMН[type], e);
    }
  }
};

// ---------------------------------------------------------------- web + socket.io

const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css', '.json': 'application/json',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.mp3': 'audio/mpeg', '.ogg': 'audio/ogg', '.otf': 'font/otf', '.ttf': 'font/ttf', '.svg': 'image/svg+xml' };

const PATCHED = patches.build(GAME); // game files with the co-op patches applied, keyed by relative path

function relPath(urlPath) {
  return path.normalize(decodeURIComponent(urlPath.split('?')[0])).replace(/^([/\\])+/, '').replace(/\\/g, '/') || 'index.html';
}

function resolveFile(rel) {
  for (const root of [OVERRIDES, GAME]) {
    const file = path.join(root, rel);
    if (file.startsWith(root) && fs.existsSync(file) && fs.statSync(file).isFile()) return file;
  }
  return null;
}

// Error reports from players' games. The game posts its errors to h5/index.php?action=report_error (on the official
// site); here they're appended to logs/client-errors.log and shown as one line in this window, so a problem on a
// friend's PC (like the missing images over Radmin) shows up right away. The same error from the same player is
// shown once per 10 minutes.
const ERROR_LOG = path.resolve(__dirname, '../logs/client-errors.log');
const ERROR_BODY_MAX = 20000;
const errorSeen = new Map(); // ip + message -> time last shown
function playerAt(ip) {
  const c = MM.connections.find((x) => x.$coopIp === ip && x.$ppO0l);
  return c ? `${c.$ppO0l.nickname} (${ip})` : ip;
}
function reportError(req, res) {
  let body = '';
  req.on('data', (d) => { if (body.length < ERROR_BODY_MAX) body += d; });
  req.on('end', () => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('ok');
    const f = new URLSearchParams(body);
    const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0].trim().replace(/^::ffff:/, '');
    const message = (f.get('message') || '?').slice(0, 2000);
    const who = playerAt(ip);
    try {
      fs.mkdirSync(path.dirname(ERROR_LOG), { recursive: true });
      fs.appendFileSync(ERROR_LOG, `${new Date().toISOString()}  ${who}  [${f.get('type') || ''}] ${message}\n` +
        `  ${(f.get('stack') || '').slice(0, 3000).replace(/\n/g, '\n  ')}\n  ${f.get('js_engine') || ''}\n\n`);
    } catch (e) {}
    const key = ip + '|' + message;
    if (Date.now() - (errorSeen.get(key) || 0) < 600000) return;
    errorSeen.set(key, Date.now());
    console.log(`[game error on a player's PC] ${who}: ${message.slice(0, 160)}  (details: logs/client-errors.log)`);
  });
}

const server = http.createServer((req, res) => {
  const rel = relPath(req.url === '/' ? '/index.html' : req.url);
  if (rel === 'h5/index.php' && req.method === 'POST' && /action=report_error/.test(req.url)) return reportError(req, res);
  if (rel === 'coop/info.json') {
    // Read by the co-op screen (share link) and the test tools (memory).
    res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' });
    res.end(JSON.stringify({
      publicUrl: share.info.publicUrl,
      tunnel: share.info.tunnel,
      lan: share.info.lan,
      players: MM.connections.length,
      matches: MM.matches.length,
      memoryMb: Math.round(process.memoryUsage().rss / 1048576),
    }));
    return;
  }
  const type = MIME[path.extname(rel).toLowerCase()] || 'application/octet-stream';
  if (PATCHED[rel] !== undefined) {
    res.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'no-cache' });
    res.end(PATCHED[rel]);
    return;
  }
  const file = resolveFile(rel);
  if (!file) { res.writeHead(404); res.end('not found'); return; }
  res.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'no-cache' });
  fs.createReadStream(file).pipe(res);
});

const io = new Server(server, { cors: { origin: true, credentials: true } });

io.on('connection', (socket) => {
  const ip = (socket.handshake.headers['x-forwarded-for'] || socket.handshake.address || '').split(',')[0].trim();
  // The obfuscated server code reads socket.io's `socket.conn` under a renamed property.
  socket.$оТ1сO = socket.conn;
  const c = new Connection({ socket, ip });
  c.$coopIp = ip.replace(/^::ffff:/, ''); // to name players in error reports
  MM.connections.push(c);
  console.log(`[net] connected ${ip}  (${MM.connections.length} connections)`);
  // Co-op lobby requests and equipment updates (server/lobby.js), beside the game's own messages.
  socket.on('coop', (msg, ack) => lobby.handle(c, msg, ack));
  socket.on('coop-sync', (msg) => catchUp(c, msg));
  socket.on('disconnect', () => {
    lobby.leave(c, 'The host disconnected');
    console.log(`[net] disconnected ${ip}`);
  });
});

setInterval(() => {
  try {
    MM.$AОAcc(Date.now());
    MM.$оА100c();
  } catch (e) {
    const key = String(e && e.stack);
    if (!seenErrors.has(key)) {
      seenErrors.add(key);
      console.error('[tick]', e);
    }
  }
}, 16);

server.listen(PORT, () => {
  share.info.lan = share.lanUrls(PORT);
  console.log(`PB2 co-op server running.`);
  console.log(`  You:              http://localhost:${PORT}/`);
  for (const u of share.info.lan) console.log(`  Same Wi-Fi/LAN:   ${u}`);
  if (args.includes('--tunnel')) {
    const proc = share.startTunnel(PORT, (url) => console.log(`  Internet:         ${url}   <- send this link to friends`));
    if (proc) proc.on('error', () => console.log('  Internet link unavailable: install cloudflared (see README) or forward port ' + PORT + ' on your router.'));
  }
});
