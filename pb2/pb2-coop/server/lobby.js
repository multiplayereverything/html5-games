// Co-op lobbies: a waiting room before a level starts. The host picks the level and party size on the campaign
// screen, friends join, and when the host starts, the host's game creates the real match and everyone else is
// told to join it. Each member's equipment (the solo campaign's "hero1" gun list) travels with them so the
// server can put it into the level.
//
// Talks over the game's own socket.io connection with a custom event: socket.emit('coop', {op, ...}, ack).

const MAX_PARTY = 8;
// Difficulty, as on the solo difficulty screen: 0 easy, 1 normal, 2 hard, 3 impossible. The host picks it and
// every player's game uses it (each game runs the NPCs, so they must agree).
const DIFFICULTIES = 4;
const NORMAL = 1;
const cleanDifficulty = (v, fallback = NORMAL) => {
  const n = parseInt(v, 10);
  return n >= 0 && n < DIFFICULTIES ? n : fallback;
};
const lobbies = new Map(); // id -> lobby
let nextId = 1;

const nameOf = (c) => (c.$ppO0l && c.$ppO0l.nickname) || 'Player';

// Equipment from a client: {hero1: [{mdl, upg}], hero2: [...]} = the solo campaign's two gun lists (main hero,
// second hero). Sanitized: it ends up inside map XML.
function cleanGuns(list) {
  if (!Array.isArray(list)) return [];
  return list.slice(0, 12)
    .filter((g) => g && /^[a-z0-9_]{1,40}$/.test(String(g.mdl)))
    .map((g) => ({ mdl: String(g.mdl), upg: Math.max(0, Math.min(10, parseInt(g.upg, 10) || 0)) }));
}
function cleanLoadout(l) {
  return { hero1: cleanGuns(l && l.hero1), hero2: cleanGuns(l && l.hero2) };
}

function view(lobby, forConn) {
  return {
    id: lobby.id,
    title: lobby.title,
    level: lobby.level,
    party: lobby.party,
    difficulty: lobby.difficulty,
    host: nameOf(lobby.host),
    members: lobby.members.map(nameOf),
    isHost: forConn === lobby.host,
  };
}

function push(lobby) {
  for (const m of lobby.members) if (m.socket) m.socket.emit('coop-lobby', view(lobby, m));
}

function leave(conn, reason) {
  const lobby = conn.$coopLobby;
  if (!lobby) return;
  conn.$coopLobby = null;
  lobby.members = lobby.members.filter((m) => m !== conn);
  if (conn === lobby.host) {
    lobbies.delete(lobby.id);
    for (const m of lobby.members) {
      m.$coopLobby = null;
      if (m.socket) m.socket.emit('coop-lobby', null, reason || 'The host closed the lobby');
    }
  } else {
    push(lobby);
  }
}

// Called by server.js when the host's match has been created for a lobby: tell the others to join it.
function started(owner, matchUid) {
  const lobby = owner.$coopLobby;
  if (!lobby || lobby.host !== owner) return;
  lobbies.delete(lobby.id);
  for (const m of lobby.members) {
    m.$coopLobby = null;
    if (m !== owner && m.socket) m.socket.emit('coop-start', { uid: matchUid, level: lobby.level, difficulty: lobby.difficulty });
  }
  owner.$coopPendingRanks = null;
}

// After a level: put the players of a finished match back into one lobby (host first) on the given level.
// Each client leaves the match and opens its campaign screen in that lobby ('coop-return').
// `completed`: the level was won (the client plays the mission-complete sound with its fade-out).
function regroup(host, people, level, party, difficulty, completed = false) {
  for (const c of people) leave(c);
  const lobby = {
    id: nextId++,
    title: `${nameOf(host)}'s lobby`,
    host,
    members: [host, ...people.filter((c) => c !== host)],
    level: Math.max(0, level | 0),
    party: Math.max(people.length, Math.max(2, Math.min(MAX_PARTY, party | 0))),
    difficulty: cleanDifficulty(difficulty),
  };
  lobbies.set(lobby.id, lobby);
  for (const m of lobby.members) {
    m.$coopLobby = lobby;
    if (m.socket) m.socket.emit('coop-return', { ...view(lobby, m), completed });
  }
  console.log(`[lobby] ${lobby.title} regrouped for ${lobby.members.length} on level ${lobby.level + 1}`);
}

function handle(conn, msg, ack) {
  const reply = typeof ack === 'function' ? ack : () => {};
  if (!conn.$ppO0l) return reply({ error: 'Not signed in yet' });
  const m = msg || {};
  if (m.loadout !== undefined) conn.$coopLoadout = cleanLoadout(m.loadout);

  switch (m.op) {
    case 'list':
      return reply({ lobbies: [...lobbies.values()].map((l) => view(l, conn)) });

    case 'host': {
      leave(conn);
      const lobby = {
        id: nextId++,
        title: `${nameOf(conn)}'s lobby`,
        host: conn,
        members: [conn],
        level: Math.max(0, parseInt(m.level, 10) || 0),
        party: Math.max(2, Math.min(MAX_PARTY, parseInt(m.party, 10) || 2)),
        difficulty: cleanDifficulty(m.difficulty),
      };
      lobbies.set(lobby.id, lobby);
      conn.$coopLobby = lobby;
      console.log(`[lobby] ${lobby.title} opened`);
      return reply({ lobby: view(lobby, conn) });
    }

    case 'join': {
      const lobby = lobbies.get(parseInt(m.id, 10));
      if (!lobby) return reply({ error: 'That lobby is gone' });
      if (lobby.members.includes(conn)) return reply({ lobby: view(lobby, conn) });
      if (lobby.members.length >= lobby.party) return reply({ error: 'That lobby is full' });
      leave(conn);
      lobby.members.push(conn);
      conn.$coopLobby = lobby;
      push(lobby);
      return reply({ lobby: view(lobby, conn) });
    }

    case 'leave':
      leave(conn, 'The host left');
      return reply({ ok: true });

    case 'update': {
      const lobby = conn.$coopLobby;
      if (!lobby || lobby.host !== conn) return reply({ error: 'Only the host can change the lobby' });
      if (m.level !== undefined) lobby.level = Math.max(0, parseInt(m.level, 10) || 0);
      if (m.difficulty !== undefined) lobby.difficulty = cleanDifficulty(m.difficulty, lobby.difficulty);
      if (m.party !== undefined) lobby.party = Math.max(lobby.members.length, Math.max(2, Math.min(MAX_PARTY, parseInt(m.party, 10) || 2)));
      push(lobby);
      return reply({ lobby: view(lobby, conn) });
    }

    case 'loadout':
      return reply({ ok: true });

    case 'start': {
      const lobby = conn.$coopLobby;
      if (!lobby || lobby.host !== conn) return reply({ error: 'Only the host can start' });
      // Seat order (and equipment order in the level) = lobby order, host first.
      conn.$coopPendingRanks = lobby.members.slice();
      conn.$coopPendingDifficulty = lobby.difficulty;
      return reply({ ok: true, level: lobby.level, party: lobby.party, difficulty: lobby.difficulty, title: `${nameOf(conn)}'s co-op` });
    }

    default:
      return reply({ error: 'Unknown request' });
  }
}

module.exports = { handle, leave, started, regroup, cleanLoadout };
