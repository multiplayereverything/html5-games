// Builds the zip to send to friends: the co-op mod, portable Node.js (so they install nothing) and this PC's copy of
// the game. Private use only: the game files belong to their developer and the itch.io page gives no sharing terms.
// usage: node tools/make-package.js            -> ../dist/PB2-Coop-<version>.zip
const { execFileSync } = require('child_process');
const crypto = require('crypto');
const fs = require('fs');
const https = require('https');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const GAME = path.resolve(ROOT, '../plazma_burst_2/game_compiled');
const DIST = path.resolve(ROOT, '../dist');
const NODE_VERSION = 'v24.22.1'; // current LTS when this was written
const NODE_ZIP = `node-${NODE_VERSION}-win-x64.zip`;
const CACHE = path.join(DIST, '.cache');
const VERSION = require(path.join(ROOT, 'package.json')).version;
const NAME = `PB2-Coop-${VERSION}`;
const STAGE = path.join(DIST, NAME);
// Windows' own tar (bsdtar) reads and writes zip; a Git-for-Windows tar earlier in PATH takes "C:" for a host.
const TAR = process.platform === 'win32' ? path.join(process.env.SystemRoot || 'C:\\Windows', 'System32', 'tar.exe') : 'tar';

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) return resolve(get(res.headers.location));
      if (res.statusCode !== 200) return reject(new Error(`${url}: HTTP ${res.statusCode}`));
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

// Portable Node.js from nodejs.org, checked against the release's SHASUMS256.txt; cached in dist/.cache.
async function portableNode() {
  fs.mkdirSync(CACHE, { recursive: true });
  const zip = path.join(CACHE, NODE_ZIP);
  if (!fs.existsSync(zip)) {
    console.log(`downloading ${NODE_ZIP} ...`);
    fs.writeFileSync(zip, await get(`https://nodejs.org/dist/${NODE_VERSION}/${NODE_ZIP}`));
  }
  const sums = (await get(`https://nodejs.org/dist/${NODE_VERSION}/SHASUMS256.txt`)).toString();
  const want = (sums.split('\n').find((l) => l.endsWith(`  ${NODE_ZIP}`)) || '').split(' ')[0];
  const have = crypto.createHash('sha256').update(fs.readFileSync(zip)).digest('hex');
  if (!want || want !== have) throw new Error(`${NODE_ZIP}: checksum mismatch (got ${have}, want ${want || 'none'})`);
  const out = path.join(CACHE, 'node-extract');
  if (!fs.existsSync(path.join(out, `node-${NODE_VERSION}-win-x64`, 'node.exe'))) {
    fs.rmSync(out, { recursive: true, force: true });
    fs.mkdirSync(out, { recursive: true });
    execFileSync(TAR, ['-xf', zip, '-C', out]);
  }
  return path.join(out, `node-${NODE_VERSION}-win-x64`);
}

function copy(from, to) {
  fs.cpSync(from, to, { recursive: true });
}

function write(rel, text) {
  // Windows scripts and the README get Windows line endings; everything a friend opens in Notepad reads fine.
  fs.writeFileSync(path.join(STAGE, rel), text.replace(/\r?\n/g, '\r\n'));
}

(async () => {
  if (!fs.existsSync(path.join(GAME, 'scripts', 'frame2.js'))) throw new Error(`game not found at ${GAME}`);
  const node = await portableNode();
  fs.rmSync(STAGE, { recursive: true, force: true });

  // The mod: server, the in-game co-op client, the tunnel tool, the package manifest. No tests or dev helpers.
  const mod = path.join(STAGE, 'pb2-coop');
  for (const rel of ['server', 'client/coop', 'bin', 'package.json', 'package-lock.json', 'README.md']) copy(path.join(ROOT, rel), path.join(mod, rel));
  // Only the runtime dependency (socket.io), installed fresh.
  execFileSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['install', '--omit=dev', '--no-audit', '--no-fund'],
    { cwd: mod, stdio: 'inherit', shell: process.platform === 'win32' });

  // Portable Node.js: node.exe and its license.
  fs.mkdirSync(path.join(STAGE, 'node'));
  for (const f of ['node.exe', 'LICENSE']) copy(path.join(node, f), path.join(STAGE, 'node', f));

  // The game, where the server looks for it.
  copy(GAME, path.join(STAGE, 'plazma_burst_2', 'game_compiled'));

  write('Setup.bat', `@echo off
rem Plazma Burst 2 Co-op - one-time setup: checks the files and puts a "PB2 Co-op" shortcut on the desktop.
cd /d "%~dp0"
echo Checking files...
"node\\node.exe" -e "require('./pb2-coop/server/patches').build('plazma_burst_2/game_compiled'); console.log('OK - game and co-op mod match.')" || (echo. & echo Setup failed: the game files don't match this co-op version. & pause & exit /b 1)
powershell -NoProfile -ExecutionPolicy Bypass -Command "$s=(New-Object -ComObject WScript.Shell).CreateShortcut([Environment]::GetFolderPath('Desktop')+'\\PB2 Co-op.lnk'); $s.TargetPath='%~dp0Play Co-op.bat'; $s.WorkingDirectory='%~dp0'; $s.Description='Plazma Burst 2 Co-op'; $s.Save()"
echo.
echo Done. Start the game with "PB2 Co-op" on your desktop (or "Play Co-op.bat" in this folder).
echo The first time, Windows may ask whether Node.js may use the network: allow it on private networks
echo so friends on your Wi-Fi can join.
pause
`);
  write('Play Co-op.bat', `@echo off
rem Starts the Plazma Burst 2 co-op server and opens the game. Keep this window open while playing.
cd /d "%~dp0pb2-coop"
start "" http://localhost:2053/
"..\\node\\node.exe" server\\server.js 2053 --tunnel
pause
`);
  write('README.txt', `Plazma Burst 2 - Campaign Co-op  (version ${VERSION})
==================================================

Play the Plazma Burst 2 campaign together with friends.

SETUP (once)
  1. Unzip this folder anywhere (for example Documents).
  2. Double-click "Setup.bat". It checks the files and adds a "PB2 Co-op" shortcut to your desktop.

PLAY
  - Double-click "PB2 Co-op" (or "Play Co-op.bat"). A black window opens - keep it open while playing - and the
    game opens in your browser.
  - Main menu > CO-OP CAMPAIGN.
      Host:  press "Host Lobby", pick a level, the number of players and the difficulty, then "Start Level".
      Join:  your friends open the link shown under "Friends join at" (the black window shows it too), go to
             CO-OP CAMPAIGN and press "Join" next to your lobby.
  - Friends who only JOIN don't need this package at all - just the link.

INTERNET PLAY
  The black window prints a link like https://something.trycloudflare.com - send that to your friends.
  It changes every time you start. Friends on the same Wi-Fi can also use the http://192.168... address.

PROBLEMS
  - "Setup failed: the game files don't match": ask for a newer version of this package.
  - Windows "protected your PC" warning: More info > Run anyway (the scripts are plain text you can read).
  - The black window shows what the server is doing; send a screenshot of it if something goes wrong.

WHAT'S INSIDE
  pb2-coop\\         the co-op mod (server + in-game co-op client)
  node\\             Node.js ${NODE_VERSION} (portable; runs the server). License: node\\LICENSE
  pb2-coop\\bin\\     cloudflared (Cloudflare quick tunnel for internet play), Apache-2.0
  plazma_burst_2\\   the game (Plazma Burst 2 by Eric Gurt, from itch.io) - for private use among friends only;
                    please don't re-upload it. Support the developer: https://eric-gurt.itch.io/plazma-burst-2

Co-op mod built with Claude Code (Anthropic).
`);

  // Zip it (Windows' tar writes zip with -a).
  fs.mkdirSync(DIST, { recursive: true });
  const zip = path.join(DIST, `${NAME}.zip`);
  fs.rmSync(zip, { force: true });
  execFileSync(TAR, ['-a', '-c', '-f', zip, '-C', DIST, NAME]);
  console.log(`\n${zip}  ${(fs.statSync(zip).size / 1048576).toFixed(1)} MB`);
})().catch((e) => {
  console.error('package failed:', e.message);
  process.exit(1);
});
