// Dev probe: load the game's networking scripts in a Node sandbox and report what breaks.
// usage: node server/probe.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const GAME = path.resolve(__dirname, '../../plazma_burst_2/game_compiled');
const FILES = ['_strings.js', 'scripts/libs/errors.js', 'scripts/libs/tools.js', 'scripts/libs/xml.js', 'scripts/connection.js', 'scripts/libs/flash.js'];

const missing = new Set();
const ctx = vm.createContext({ console, setTimeout, clearTimeout, setInterval, clearInterval, Date, Math, JSON });
ctx.globalThis = ctx;
ctx.window = ctx;
ctx.document = { location: { hostname: 'localhost', href: 'http://localhost/' }, addEventListener() {}, createElement: () => ({ style: {}, getContext: () => null }) };
ctx.navigator = { userAgent: 'node' };
ctx.location = ctx.document.location;

for (const f of FILES) {
  const code = fs.readFileSync(path.join(GAME, f), 'utf8');
  try {
    vm.runInContext(code, ctx, { filename: f });
    console.log('ok  ', f);
  } catch (e) {
    console.log('FAIL', f, '->', e && e.message);
  }
}
console.log('$ММ defined:', typeof vm.runInContext('typeof $ММ', ctx), vm.runInContext('typeof $ММ', ctx));
console.log('match class:', vm.runInContext('typeof $ООТТl', ctx), ' conn class:', vm.runInContext('typeof $рсНAе', ctx));
