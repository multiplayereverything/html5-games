// How friends reach this server: LAN addresses, and optionally a public link through a Cloudflare quick tunnel
// (`cloudflared tunnel --url ...`, no account needed) when cloudflared is installed.
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');

// A cloudflared.exe next to the mod (bin/) is used when cloudflared isn't installed on PATH.
const BUNDLED = path.join(__dirname, '..', 'bin', process.platform === 'win32' ? 'cloudflared.exe' : 'cloudflared');
const CLOUDFLARED = fs.existsSync(BUNDLED) ? BUNDLED : 'cloudflared';

const info = { lan: [], publicUrl: null, tunnel: 'off' };

function lanUrls(port) {
  const urls = [];
  for (const list of Object.values(os.networkInterfaces()))
    for (const a of list || [])
      if (a.family === 'IPv4' && !a.internal) urls.push(`http://${a.address}:${port}/`);
  return urls;
}

function startTunnel(port, onUrl) {
  info.tunnel = 'starting';
  let proc;
  try {
    proc = spawn(CLOUDFLARED, ['tunnel', '--no-autoupdate', '--url', `http://localhost:${port}`], { stdio: ['ignore', 'pipe', 'pipe'] });
  } catch (e) {
    info.tunnel = 'unavailable';
    return null;
  }
  const scan = (chunk) => {
    const m = /https:\/\/[a-z0-9-]+\.trycloudflare\.com/.exec(String(chunk));
    if (m && !info.publicUrl) {
      info.publicUrl = m[0];
      info.tunnel = 'on';
      onUrl(m[0]);
    }
  };
  proc.stdout.on('data', scan);
  proc.stderr.on('data', scan);
  proc.on('error', () => { info.tunnel = 'unavailable'; });
  proc.on('exit', () => {
    if (info.tunnel !== 'unavailable') info.tunnel = 'stopped';
    info.publicUrl = null;
  });
  process.on('exit', () => proc.kill());
  return proc;
}

module.exports = { info, lanUrls, startTunnel };
