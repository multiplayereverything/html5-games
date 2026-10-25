// Campaign levels, read from the game's own scripts. The 42 levels are embedded in scripts/frame2.js as
// $poToНA["c0a"] = '<map data>' (mostly in the compressed '<q.' form that scripts/libs/xml.js expands).
// Key and value are both string-table globals from _strings.js.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const GAME = path.resolve(__dirname, '../../plazma_burst_2/game_compiled');

let cache = null;

function load() {
  if (cache) return cache;

  // Just enough of the game to evaluate string constants and run the map decompressor.
  const ctx = vm.createContext({ console, Date, Math, JSON });
  ctx.globalThis = ctx;
  ctx.window = ctx;
  for (const f of ['_strings.js', 'scripts/libs/tools.js', 'scripts/libs/xml.js'])
    vm.runInContext(fs.readFileSync(path.join(GAME, f), 'utf8'), ctx, { filename: f });
  const expand = vm.runInContext('$сOAМpO', ctx);

  const src = fs.readFileSync(path.join(GAME, 'scripts/frame2.js'), 'utf8');
  // In the shipped file both sides are string-table globals: $poToНA[$key]=$value;
  const entry = /\$poToНA\[([^\]]+)\]=([^;\n]+);/g;
  cache = new Map();
  for (let m; (m = entry.exec(src)); ) {
    const id = vm.runInContext(m[1], ctx);
    const raw = vm.runInContext(m[2], ctx);
    cache.set(id, raw.slice(0, 3) === '<q.' ? expand(raw) : raw);
  }
  return cache;
}

// Map XML for a campaign level id such as "c0a", or null.
function levelXml(id) {
  return load().get(id) || null;
}

function levelIds() {
  return [...load().keys()];
}

module.exports = { levelXml, levelIds, GAME };

if (require.main === module) {
  // node server/campaign.js [id]  -> list levels, or print one level's XML
  const id = process.argv[2];
  if (id) process.stdout.write(levelXml(id) || 'unknown level\n');
  else console.log(levelIds().map((k) => `${k} ${levelXml(k).length}`).join('\n'));
}
