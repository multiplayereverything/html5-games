// Map lookup for matches. Answers in the official server's format:
// "xml[^#]map name[^#]approved[^#]max players[^#]map id", or "x[^#]error message".
const coop = require('./coop');

// Party size and per-seat equipment of the match whose map is being looked up (set by the server around the
// lookup call, which happens synchronously inside the match's map load).
let pending = { party: 1, loadouts: [] };
const builds = new Map(); // map id + party -> { slots, playersMax }

function lookup(mapId) {
  if (!coop.isCampaignId(mapId))
    return 'x[^#]Only campaign levels (c0a .. c41a) can be played on this server';

  const { party, loadouts } = pending;
  const b = coop.build(mapId, party, loadouts);
  builds.set(mapId + '/' + party, b);
  return [b.xml, coop.levelName(mapId), 0, b.playersMax, mapId].join('[^#]');
}

module.exports = {
  lookup,
  setBuild(party, loadouts) { pending = { party, loadouts: loadouts || [] }; },
  built: (mapId, party) => builds.get(mapId + '/' + party) || null,
};
