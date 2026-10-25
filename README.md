# Multiplayer Everything: HTML5 games

HTML5 games and their Multiplayer Everything mods, one folder per game. The
[Flash Launcher](https://github.com/multiplayereverything/flash-games-launcher)
runs them: it starts the mod's server, opens the game in a browser window, and
shows the link friends join with.

Questions, bugs, or looking for people to play with? Join the [Multiplayer Everything Discord](https://discord.com/invite/P2MSSUf5GX).

## Games

| Folder | Game | Mod |
|---|---|---|
| [`pb2/`](pb2) | Plazma Burst 2 by Eric Gurt ([itch.io](https://eric-gurt.itch.io/plazma-burst-2)) | Campaign co-op for up to 8 players (all 42 levels) |

## Plazma Burst 2 co-op

```
pb2/plazma_burst_2/   the game's HTML5 build, unchanged
pb2/pb2-coop/         the co-op mod: a Node.js server that serves the game,
                      patches it in memory and runs the co-op
```

The mod looks for the game at `../plazma_burst_2/game_compiled`, so keep the two
folders side by side.

**With the launcher:** put the `pb2` folder in the launcher's `games` folder
(`games\pb2\pb2-coop\...`), select Plazma Burst 2, then:

- **Host co-op**: starts the server with an internet link (Cloudflare quick tunnel,
  no account needed). Send friends the link under *Friends join at*.
- **Host on this network**: friends on the same Wi-Fi only, no internet link.
- **Join with a link**: copy the link a friend sent, then press it.

In the game: main menu, **CO-OP CAMPAIGN**. The host presses **Host Lobby**; friends
press **Join** next to it.

**Without the launcher:** run `pb2/pb2-coop/Play Co-op.bat` (needs
[Node.js](https://nodejs.org/) 18 or newer). See [`pb2/pb2-coop/README.md`](pb2/pb2-coop/README.md)
for how the co-op works and how to run its tests.

Friends who only join need nothing but a browser and the link.

## Third-party files

- `pb2/pb2-coop/bin/cloudflared.exe`: Cloudflare's tunnel client, Apache-2.0
  ([github.com/cloudflare/cloudflared](https://github.com/cloudflare/cloudflared)).
- `pb2/pb2-coop/node_modules/`: the server's npm dependencies (socket.io and its
  dependencies), each under its own license, included so the server runs without
  `npm install`.

## Made with

This project was made with the help of these tools:

- [antislop-ui](https://github.com/miqdadbadjuber/anti-slop/tree/main/skills/antislop-ui)
- [coop-anything](https://github.com/cranebeaker/coop-anything)
- [REA](https://github.com/morluto/rea)
- [Universal Modder](https://github.com/rehan-remade/universal-modder)
