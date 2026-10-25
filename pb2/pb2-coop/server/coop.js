// Turn a single-player campaign map into a co-op map.
//
// Multiplayer slot i plays actor i (actors = <player> and <enemy> elements in file order), and triggers
// address characters by that same index. So guests are appended as extra <player> elements at the END of
// the map: existing indices (and every trigger) stay valid, and the server gives guests those slots.
const campaign = require('./campaign');

const MAX_PARTY = 8;
// Enemy health multiplier per extra player (2 players = 1.17x, 4 players = 1.5x, 8 players = 2.17x).
const HP_PER_EXTRA_PLAYER = 1 / 6;

function isCampaignId(mapId) {
  return /^c\d+a$/.test(mapId) && campaign.levelXml(mapId) !== null;
}

function levelName(mapId) {
  return 'Campaign ' + (parseInt(mapId.slice(1), 10) + 1);
}

function attr(tag, name) {
  const m = new RegExp(`\\s${name}="([^"]*)"`).exec(tag);
  return m ? m[1] : null;
}

function setAttr(tag, name, value) {
  return tag.replace(new RegExp(`(\\s${name}=")[^"]*(")`), `$1${value}$2`);
}

// Returns { xml, slots, playersMax } for a party of `party` humans. `loadouts[r]` is the equipment of the
// player in seat r (0 = host): {hero1, hero2}, the solo campaign's gun lists for the main and second hero.
function build(mapId, party, loadouts = []) {
  party = Math.max(1, Math.min(MAX_PARTY, party | 0));
  let xml = campaign.levelXml(mapId);

  const actors = xml.match(/<(player|enemy)\s[^>]*\/>/g) || [];
  const host = actors.find((t) => t.startsWith('<player'));
  if (!host) throw new Error(`level ${mapId} has no player`);

  // Scale only hostile characters; allies on the host's team keep their health.
  const hpScale = 1 + HP_PER_EXTRA_PLAYER * (party - 1);
  const hostTeam = attr(host, 'team');
  if (hpScale !== 1) {
    xml = xml.replace(/<enemy\s[^>]*\/>/g, (tag) => {
      if (attr(tag, 'team') === hostTeam) return tag;
      for (const name of ['hea', 'hmax']) {
        const v = parseFloat(attr(tag, name));
        if (!isNaN(v)) tag = setAttr(tag, name, Math.round(v * hpScale));
      }
      return tag;
    });
  }

  // Guests start like the host. If the host starts inside a vehicle (e.g. a drop pod falling from the sky),
  // each guest gets a copy of that vehicle; vehicles are indexed in file order too, so copies are appended
  // at the end and existing vehicle indices stay valid.
  const vehicles = xml.match(/<vehicle\s[^>]*\/>/g) || [];
  const hostCar = parseInt(attr(host, 'incar'), 10);
  const hostVehicle = hostCar >= 0 ? vehicles[hostCar] : null;
  const x = parseFloat(attr(host, 'x'));
  const seatDx = (i) => (hostVehicle ? 60 : 15) * i;
  const guests = [];
  const extraVehicles = [];
  for (let i = 1; i < party; i++) {
    const dx = seatDx(i);
    let tag = setAttr(host, 'x', Math.round(x + dx));
    tag = setAttr(tag, 'ondeath', '-1');
    if (hostVehicle) {
      tag = setAttr(tag, 'incar', vehicles.length + extraVehicles.length);
      extraVehicles.push(setAttr(hostVehicle, 'x', Math.round(parseFloat(attr(hostVehicle, 'x')) + dx)));
    } else {
      tag = setAttr(tag, 'incar', '-1');
    }
    guests.push(tag);
  }
  // Equipment, as in solo. Solo spawns the main hero's gun list at a "hero1_guns" marker and the second hero's
  // at "hero2_guns" (levels 30-36 you play the second hero, levels 37-41 the second hero is your ally; level 33
  // splits it into "..._nonades" / "..._nades"). Each seat gets the list for the character it plays, at that
  // marker, offset like its start position; the ally's list is the host's. Guns are indexed in file order, so
  // they are appended too.
  const markers = (xml.match(/<inf\s[^>]*\/>/g) || []).filter((t) => /^hero[12]_guns/.test(attr(t, 'mark') || ''));
  const isNade = (g) => /nade/.test(g.mdl);
  const lists = {
    hero1_guns: (l) => l.hero1,
    hero2_guns: (l) => l.hero2,
    hero2_guns_nonades: (l) => l.hero2.filter((g) => !isNade(g)),
    hero2_guns_nades: (l) => l.hero2.filter(isNade),
  };
  const playerMark = attr(host, 'char') === '3' ? 'hero2' : 'hero1';
  // The game hands a gun to the local player when it appears within ~40 px of them (that's how solo equipment
  // ends up in your hands), and co-op seats start 15 px apart, so the host's game grabbed every seat's kit. Each
  // kit gun's x carries its owner's actor slot in its thousandths (invisible in game); the patched pickup only
  // takes untagged guns or your own (coopClient.ownsGunAt).
  const seatSlot = (seat) => (seat === 0 ? actors.indexOf(host) : actors.length + seat - 1);
  const tag = (x, seat) => Math.round(x) + (seatSlot(seat) + 1) / 1000;
  const guns = [];
  for (const m of markers) {
    const mark = attr(m, 'mark');
    if (!lists[mark]) continue;
    const seats = mark.startsWith(playerMark) ? party : 1; // the ally's guns once, from the host
    for (let seat = 0; seat < seats; seat++) {
      const l = loadouts[seat];
      if (!l) continue;
      for (const g of lists[mark]({ hero1: l.hero1 || [], hero2: l.hero2 || [] })) {
        const mx = parseFloat(attr(m, 'x'));
        const gx = seats > 1 || mark.startsWith(playerMark) ? tag(mx + seatDx(seat), seat) : Math.round(mx);
        guns.push(`<gun x="${gx}" y="${Math.round(parseFloat(attr(m, 'y')))}" model="${g.mdl}" command="${attr(m, 'forteam') || '-1'}" upg="${g.upg}" />`);
      }
    }
  }

  xml += extraVehicles.join('') + guests.join('') + guns.join('');

  const slots = [actors.indexOf(host)];
  for (let i = 0; i < guests.length; i++) slots.push(actors.length + i);

  return { xml, slots, playersMax: actors.length + guests.length };
}

module.exports = { build, isCampaignId, levelName, MAX_PARTY };

if (require.main === module) {
  const r = build(process.argv[2] || 'c0a', parseInt(process.argv[3] || '2', 10));
  console.log('slots', r.slots, 'players_max', r.playersMax);
  console.log(r.xml.match(/<(player|enemy)\s[^>]*\/>/g).map((t) => t.slice(0, 90)).join('\n'));
}
