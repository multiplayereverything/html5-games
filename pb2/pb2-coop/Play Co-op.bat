@echo off
rem Starts the Plazma Burst 2 co-op server and opens the game. Keep this window open while playing.
cd /d "%~dp0"
where node >nul 2>&1 || (echo Node.js is required: https://nodejs.org/ & pause & exit /b 1)
if not exist node_modules\socket.io (
  echo Installing server dependencies...
  call npm install --omit=dev --no-audit --no-fund || (pause & exit /b 1)
)
start "" http://localhost:2053/
node server\server.js 2053 --tunnel
pause
