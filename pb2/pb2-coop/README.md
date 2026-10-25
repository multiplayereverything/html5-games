# Plazma Burst 2 — Campaign Co-op

Play the Plazma Burst 2 campaign (all 42 levels) together with friends.

Runs on your own copy of the game's HTML5 build (`../plazma_burst_2/game_compiled`). Nothing in the game
folder is changed and no game files are included here: the co-op server patches the game in memory while
serving it.

## Play

1. Double-click **`Play Co-op.bat`** (needs [Node.js](https://nodejs.org/) 18+). It starts the server and
   opens the game at `http://localhost:2053/`.
2. Main menu → **CO-OP CAMPAIGN**. It's the solo campaign screen — your character, colours, **Equipment**,
   **Achievements** and **credits** — with a co-op server list where the level grid was.
   - **Host:** press **Host Lobby**. In your lobby you get the level grid: click a level you've unlocked, pick
     the number of players and the difficulty (Easy / Normal / Hard / Impossible - everyone plays on it), and
     press **Start Level N** once your friends are in.
   - **Join:** your friends open the link shown under *Friends join at*, go to **CO-OP CAMPAIGN** and press
     **Join** next to your lobby (or a game already running). In the lobby they see the level you picked but
     can't change it; they can still change their character and buy equipment while they wait.
3. **Play Solo** on the same screen gives you the normal single-player campaign screen.

### Friends on the internet
The server window prints the addresses to share:
- **Same Wi-Fi / LAN:** `http://<your-pc-ip>:2053/` (the server window lists it). When Windows asks whether
  to let Node.js through the firewall the first time, allow it on private networks.
- **Internet:** `Play Co-op.bat` opens a free Cloudflare quick tunnel (using `bin/cloudflared.exe`, no account
  needed) and prints an `https://….trycloudflare.com` link — send that to your friends. It's a new link each
  time you start the server, and it stops when you close the server window. Alternatively forward TCP port 2053
  on your router and share `http://<your-public-ip>:2053/`.

## How co-op works
- Each guest gets their own character in the level (a copy of your starting point, including your drop pod).
- Enemies get +1/6 health for each extra player (2 players = 1.17×, 4 players = 1.5×, 8 players = 2.17×).
- Co-op rules like multiplayer COOP: you spawn once per level. If you die you stay down and spectate until a
  teammate revives you (with a revive tool, if the campaign has given you one). If the whole team is down, the
  level restarts for everyone. (**Esc → Respawn** just gives up: you go down.)
- Vehicles (drones, mechs) can be destroyed and show their health bar, as in solo.
- Enemies use the game's own multiplayer sync. Triggers fired by a player reach everyone, and a player who
  loads in late catches up on the level's triggers, doors and timers from the host.
- Everyone starts each level with their own equipment; nobody else can pick up your kit before you've had it.
- Level 1 drops everyone in from the sky in drop pods: steer onto the platform, or you'll fall off the map.
- When any player completes the mission, everyone goes back to the co-op screen together, in the same lobby
  with the next level picked; the host presses **Start Level N** when everyone's ready (time to buy equipment).
  A failed mission restarts the level for everyone.
- The host's in-game menu has **Return to Lobby** instead of Leave match: it takes the whole party back to the
  lobby on the same level (guests can still Leave match on their own). It also has **Restart Level**.
  Going back to the lobby and restarting are counted down in the chat (3, 2, 1).
- Top right: your teammates' names and health bars (DOWN when they're out).
- Scoreboard (hold **Tab**): everyone's health; the host has a **kick** button (✕) on the other players' rows.
  A kicked player goes back to their co-op screen.
- Game errors on a friend's PC are written to `logs/client-errors.log` and shown in the server window.
- Equipment and credits work like solo: everyone starts each level with **their own** equipment (laid out at
  the level's equipment spot, next to each player), and completing a level keeps the guns you're holding and
  pays credits into your own save — spend them in **Equipment** between levels.
- Progress: completing a level unlocks the next one in the **host's** campaign save.
- Up to 8 players; extra people who join a full game watch as spectators.

## Files
- `server/server.js` — the co-op server: runs the game's own multiplayer server code in Node, serves the game.
- `server/campaign.js`, `server/coop.js` — read the campaign levels and turn them into co-op maps.
- `server/patches.js` — the in-memory patches to the game's scripts.
- `server/share.js` — LAN addresses and the Cloudflare quick tunnel.
- `bin/cloudflared.exe` — Cloudflare's tunnel client (from github.com/cloudflare/cloudflared releases).
- `client/coop/coop-client.js` — in-game side: co-op screen, level flow, spawn rules, menu.
- `tools/` — automated tests (headless Microsoft Edge via playwright-core). `npm test` covers joining, the
  co-op screen, deaths and team wipes, back to the lobby after a level, 4-player parties, leaving/rejoining, save progress, and friends
  connecting through a tunnel-style proxy (http and https). `npm run test:levels` plays through all 42 levels;
  `npm run test:internet` has a friend join through a real Cloudflare tunnel.
