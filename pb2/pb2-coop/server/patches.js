// In-memory patches applied to the game's own files as they are served. Nothing in the game folder is
// changed and no game code is shipped with the mod: each patch is an exact find/replace on the user's copy,
// and the server refuses to start if a pattern is missing (e.g. a different game build).
const fs = require('fs');
const path = require('path');

// `coopClient` is defined by client/coop/coop-client.js, loaded after the game scripts.
const IN_COOP_CAMPAIGN = '$pMМ1&&globalThis.coopClient&&coopClient.isCampaign()';

const PATCHES = {
  'scripts/libs/errors.js': [
    {
      why: 'the page forces https on any host but localhost; this server is plain http on LAN/forwarded ports, ' +
        'so only do that on the official site (a Cloudflare tunnel link is https already)',
      find: 'if(location.protocol===$coOol)\nlocation.protocol=$1IM0c;',
      replace: "if(location.protocol===$coOol&&location.host.toLowerCase().indexOf('plazmaburst2.com')!==-1)\nlocation.protocol=$1IM0c;",
    },
  ],
  'scripts/libs/flash.js': [
    {
      why: 'first sync for a slot this client\'s map does not have yet (level change: the new seat is announced ' +
        'before this client has loaded the new level) - skip it; a full sync follows once the level is loaded',
      find: 'player=$0Ме1А[i];\nelse\nplayer=$OHlIlA(i);\n',
      replace: 'player=$0Ме1А[i];\nelse\nplayer=$OHlIlA(i);\nif(!player)return;\n',
    },
  ],
  'scripts/frame2.js': [
    {
      why: 'vehicles may break in co-op campaign: multiplayer puts every vehicle with 0 hp back to 1 hp right ' +
        'before the "0 hp -> break" check, so nothing could ever be destroyed (level 1 drones, mechs, and the drop ' +
        'pod, whose breaking on landing is how it lets the player out). Every client sees the same bullets and ' +
        'breaks it as in single player',
      find: 'if($pMМ1)\nif(mc[$МIIро]<=0)\nif(!mc.$оeoТе)\n{\nmc[$МIIро]=1;',
      replace: `if($pMМ1&&!(${IN_COOP_CAMPAIGN}))\nif(mc[$МIIро]<=0)\nif(!mc.$оeoТе)\n{\nmc[$МIIро]=1;`,
    },
    {
      why: 'a breaking vehicle (or a landed drop pod) ejects its human rider in co-op campaign (multiplayer only ' +
        'ejects humans when forced); otherwise the rider stays "in" the wreck with no collision and falls through ' +
        'the floor. Getting out normally stays network-driven as in multiplayer',
      find: 'if(!$еeрIОM)\nif($pMМ1&&($сoopT[b].$OOHAТ!==-1&&$0Ме1А[$сoopT[b].$OOHAТ].$HМ0М1))\nreturn;',
      replace: `if(!$еeрIОM)\nif($pMМ1&&!(($сoopT[b].$eрlсe==2||$сoopT[b].$оeoТе)&&(${IN_COOP_CAMPAIGN}))&&($сoopT[b].$OOHAТ!==-1&&$0Ме1А[$сoopT[b].$OOHAТ].$HМ0М1))\nreturn;`,
    },
    {
      why: 'vehicle health bars (drones, mechs) show in co-op campaign as in single player; multiplayer hides ' +
        'them when the vehicle is created',
      find: 'if($pMМ1)\n{\n$Т0TpA.gui.visible=false;\n}',
      replace: `if($pMМ1&&!(${IN_COOP_CAMPAIGN}))\n{\n$Т0TpA.gui.visible=false;\n}`,
    },
    {
      why: 'level start hands each gun lying within ~40 px of you to you; in co-op only untagged guns or your own ' +
        'equipment (server/coop.js tags each kit gun with its owner) - the host used to grab every seat\'s kit',
      find: 'if(!$00pеH)\nif($ОpMрс[i2].$cppее!=-2)\nif($ОpMрс[i2].$Тссес>$0Ме1А[$НAlНc][$eТоM]-40)',
      replace: `if(!$00pеH)\nif($ОpMрс[i2].$cppее!=-2)\nif(!(${IN_COOP_CAMPAIGN})||coopClient.ownsGunAt($ОpMрс[i2].$Тссес))\nif($ОpMрс[i2].$Тссес>$0Ме1А[$НAlНc][$eТоM]-40)`,
    },
    {
      why: 'walk-over pickup ($cTоpeо): a seat\'s equipment (tagged gun, see server/coop.js) is only ever picked up ' +
        'by its owner',
      find: 'if(ok)\nif(i2!==$НAlНc||$соесНl||$pНОoM(mc))',
      replace: `if(ok&&(${IN_COOP_CAMPAIGN}))ok=coopClient.mayPick(mc,i2);\nif(ok)\nif(i2!==$НAlНc||$соесНl||$pНОoM(mc))`,
    },
    {
      why: 'co-op: a player\'s own death trigger reaches everyone (levels 37/38: the hero\'s death stops the heroes\' ' +
        'dialogue); stock runs it only on that player\'s game. NPC death triggers stay as in stock multiplayer',
      find: 'if(mc.$1МOОM!==-1)\nif(!mc.$HМ0М1||(i===$НAlНc&&!$00pеH)||!$pMМ1)\n{\n$Oр0ol=i;\n\n$AоАе0=mc.$АTТМc;\n\n\n$pАTIТ(mc.$1МOОM);',
      replace: 'if(mc.$1МOОM!==-1)\nif(!mc.$HМ0М1||(i===$НAlНc&&!$00pеH)||!$pMМ1)\n{\n$Oр0ol=i;\n\n$AоАе0=mc.$АTТМc;\n\n\n$pАTIТ(mc.$1МOОM);\n' +
        `if(mc.$HМ0М1&&(${IN_COOP_CAMPAIGN}))coopClient.broadcastTrigger(mc.$1МOОM);`,
    },
    {
      why: 'co-op: no taking over a teammate when you die. Levels marked "casual" (37-41, with the second hero as ' +
        'an ally) hand you the nearest living teammate on death; in co-op both players took over the ally and ' +
        'controlled the same character. Dead players spectate instead',
      find: 'if(i==$НAlНc)\n{\nif($о0Мp0)\n{\nok=true;\nvar $рHocHН=0;',
      replace: `if(i==$НAlНc)\n{\nif($о0Мp0&&!(${IN_COOP_CAMPAIGN}))\n{\nok=true;\nvar $рHocHН=0;`,
    },
    {
      why: 'co-op: no switching to another character of your team with the "next character" key on casual levels ' +
        '(each player keeps their own)',
      find: 'else\n{\nif($о0Мp0)\n{\nok=true;\ni=$НAlНc;',
      replace: `else\n{\nif($о0Мp0&&!(${IN_COOP_CAMPAIGN}))\n{\nok=true;\ni=$НAlНc;`,
    },
    {
      why: 'player sync "X holds guns A, B": never give a seat\'s equipment (tagged gun) to someone else. The server ' +
        'keeps each player\'s gun numbers from the previous level, and on the next level such a number can be ' +
        'another player\'s kit (the host got the guest\'s kit on level 9 this way)',
      find: 'if(i2>=0&&i2<$cс0Hс)\n{\nif($ОpMрс[i2].picken_by!=-1)\n{',
      replace: `if(i2>=0&&i2<$cс0Hс&&!((${IN_COOP_CAMPAIGN})&&!coopClient.mayPick($ОpMрс[i2],i)))\n{\nif($ОpMрс[i2].picken_by!=-1)\n{`,
    },
    {
      why: 'character weapon-slot setter (_slotN = gun number, used by the state sync): never put a seat\'s ' +
        'equipment (tagged gun) into someone else\'s slot. The server\'s sync carries gun numbers from the previous ' +
        'level, which on the next level can be another player\'s kit',
      find: 'if($Т0TpA[$1ee0c+i]===$H1HАН)\nreturn;\n\nif(($H1HАН>=0&&$H1HАН<$ОpMрс.length&&$ОpMрс[$H1HАН])||$H1HАН===$ММ.$pTcHМ)',
      replace: 'if($Т0TpA[$1ee0c+i]===$H1HАН)\nreturn;\n' +
        `if((${IN_COOP_CAMPAIGN})&&$H1HАН>=0&&$ОpMрс[$H1HАН]&&!coopClient.mayPick($ОpMрс[$H1HАН],$Т0TpA.$MeсНе))\nreturn;\n` +
        '\nif(($H1HАН>=0&&$H1HАН<$ОpMрс.length&&$ОpMрс[$H1HАН])||$H1HАН===$ММ.$pTcHМ)',
    },
    {
      why: 'co-op campaign plays the solo difficulty: Hard: weaker enemies get extra health at spawn (hmax<300 -> halfway to 300) (stock: single player only)',
      find: "if(!$pMМ1)\nif($OАМАO)\nif(!$Т0TpA.$HМ0М1)",
      replace: `if((!$pMМ1||(${IN_COOP_CAMPAIGN})))
if($OАМАO)
if(!$Т0TpA.$HМ0М1)`,
    },
    {
      why: 'co-op campaign plays the solo difficulty: Impossible: class-2 weapons lose power (stock: single player only)',
      find: "if(!$pMМ1)\nif(LOW_HPS)\n{\nif($оMАМe.$1l1TO==2)",
      replace: `if((!$pMМ1||(${IN_COOP_CAMPAIGN})))
if(LOW_HPS)
{
if($оMАМe.$1l1TO==2)`,
    },
    {
      why: 'co-op campaign plays the solo difficulty: Impossible: harsher hazard-region damage (stock: single player only)',
      find: "if(!$еHоНH&&!$pMМ1)\nif(LOW_HPS)\n$lcAHМ[$оTolТ]=",
      replace: `if(!$еHоНH&&(!$pMМ1||(${IN_COOP_CAMPAIGN})))
if(LOW_HPS)
$lcAHМ[$оTolТ]=`,
    },
    {
      why: 'co-op campaign plays the solo difficulty: Impossible: character type 7 at a quarter health (stock: single player only)',
      find: "if(!$pMМ1)\nif(LOW_HPS)\nif(n==7)",
      replace: `if((!$pMМ1||(${IN_COOP_CAMPAIGN})))
if(LOW_HPS)
if(n==7)`,
    },
    {
      why: 'co-op campaign plays the solo difficulty: Impossible: railgun swapped for a sniper (stock: single player only)',
      find: "if(LOW_HPS)\nif(!$pMМ1)\nif(!$еHоНH)\n{\nif($AeАpНM===$МНpМ)",
      replace: `if(LOW_HPS)
if((!$pMМ1||(${IN_COOP_CAMPAIGN})))
if(!$еHоНH)
{
if($AeАpНM===$МНpМ)`,
    },
    {
      why: 'co-op campaign plays the solo difficulty: Impossible: character health caps (stock: single player only)',
      find: "if(!$pMМ1)\nif(LOW_HPS)\n{\nvar $HеIре0=130;",
      replace: `if((!$pMМ1||(${IN_COOP_CAMPAIGN})))
if(LOW_HPS)
{
var $HеIре0=130;`,
    },
    {
      why: 'co-op campaign plays the solo difficulty: Impossible: damage multiplier on strict casual levels (stock: single player only)',
      find: "if(!$pMМ1)\nif(LOW_HPS)\nif($IeА1I)",
      replace: `if((!$pMМ1||(${IN_COOP_CAMPAIGN})))
if(LOW_HPS)
if($IeА1I)`,
    },
    {
      why: 'hero health as in solo: player characters (and the second hero as an ally) get 500 + 50 per armor ' +
        'upgrade, x1.5 in battlesuit 49; solo does it in its own branch of the character setup, which multiplayer ' +
        'skips (co-op players had the map\'s 100, and Hard then boosted that to 200)',
      find: "else\n{\nmc.$o0oоI=$TНА1l;\n}\n}\n}\nelse\n{\nif(mc.$MeсНе==$НAlНc||mc.char==3)",
      replace: `else\n{\nmc.$o0oоI=$TНА1l;\n}\nif((${IN_COOP_CAMPAIGN})&&(mc.$HМ0М1||mc.char==3))coopClient.heroHealth(mc);\n}\n}\nelse\n{\nif(mc.$MeсНе==$НAlНc||mc.char==3)`,
    },
    {
      why: 'Impossible: level 39 exempts the second hero from the health cap (its scripted fight); the check uses the ' +
        'solo map name, which is empty in multiplayer, so co-op also checks the match\'s map',
      find: 'if($ОoAоl===$HTHОo)\n{\nif(mc.char==3)',
      replace: `if($ОoAоl===$HTHОo||((${IN_COOP_CAMPAIGN})&&$ММ.match_details&&$ММ.match_details.map_id===$HTHОo))\n{\nif(mc.char==3)`,
    },
    {
      why: 'delayed player-info reset: the level can change during the 3 s delay and the slot may be gone ' +
        '(stock bug, hit by co-op level changes)',
      find: 'setTimeout(function(){\n$0Ме1А[i].info=undefined;\n},3000);',
      replace: 'setTimeout(function(){\nif($0Ме1А[i])$0Ме1А[i].info=undefined;\n},3000);',
    },
    {
      why: 'scoreboard "players / max": in co-op the max is the party size, not every character on the map',
      find: '$lITeI.f4.text=($HHcМlH)+$oОТIp+$ММ[$OpНpp][$НTоОр];',
      replace: `$lITeI.f4.text=($HHcМlH)+$oОТIp+((${IN_COOP_CAMPAIGN})?coopClient.partySize():$ММ[$OpНpp][$НTоОр]);`,
    },
    {
      why: 'co-op campaign, before a player\'s one spawn on the level: let the death overlay fade in fully so the ' +
        'spawn below runs (stock COOP caps it). After that the stock COOP rule applies: dead players spectate',
      find: 'if(!$lMH0М)\nif($pMМ1&&$IcеНе===$ММ.$рocoТ)',
      replace: `if(!$lMH0М)\nif($pMМ1&&$IcеНе===$ММ.$рocoТ&&!((${IN_COOP_CAMPAIGN})&&coopClient.canSpawn()))`,
    },
    {
      why: 'co-op campaign: a player spawns through the Deathmatch/TDM spawn queue, once per level ' +
        '(coopClient.canSpawn); no respawns after that, as in multiplayer COOP',
      find: '$ОНAMр();\n\n\n\nif($IcеНе===$ММ.$IсОeо||$IcеНе===$ММ.$eHTНT)',
      replace: `$ОНAMр();\n\n\n\nif($IcеНе===$ММ.$IсОeо||$IcеНе===$ММ.$eHTНT||((${IN_COOP_CAMPAIGN})&&coopClient.canSpawn()))`,
    },
    {
      why: 'co-op spawn point: the player\'s start on the level, still seated in any starting vehicle (level 1 ' +
        'drop pod), instead of a random spot on the map',
      find: '$ТMО1e(()=>\n{\n$1сHooО();\n},0);',
      replace: `$ТMО1e(()=>\n{\nif(${IN_COOP_CAMPAIGN}){if($1MАТAО===$pcОсlH&&coopClient.canSpawn()){` +
        // Revive at the start, then seat the player in their starting vehicle. The level build only half-links
        // it in multiplayer ($OcАe1 skips human players unless forced), and a half-linked rider has no collision
        // of its own and falls through the floor.
        'var __coopStart=$0Ме1А[$НAlНc].$HНрНТ;' +
        'coopClient.heroHealth($0Ме1А[$НAlНc]);' +
        '$eМОAOН(coopClient.startPoint($0Ме1А[$НAlНc].x,$0Ме1А[$НAlНc].y));' +
        'if(__coopStart>=0&&$сoopT[__coopStart]&&$сoopT[__coopStart].$OOHAТ===-1)$OcАe1($НAlНc,__coopStart,true);' +
        'coopClient.markSpawned();coopClient.takeKit();coopClient.applyLook();' +
        '}}else\n$1сHooО();\n},0);',
    },
    {
      why: 'scoreboard (Tab) rows in co-op campaign: after the game fills a row, coop-client.js puts health/down in ' +
        'the team column and keeps only the buttons that mean something among friends',
      find: 'for(let i=0;i<$Т0H0pe.$МeсlTT.length;i++)\n$Т0H0pe.$МeсlTT[i].visible=$Нс0оT1;\n}',
      replace: 'for(let i=0;i<$Т0H0pe.$МeсlTT.length;i++)\n$Т0H0pe.$МeсlTT[i].visible=$Нс0оT1;\n' +
        `if(${IN_COOP_CAMPAIGN})coopClient.scoreRow(i,$Т0H0pe,mc,$Нс0оT1);\n}`,
    },
  ],
  'scripts/screens/HUD.js': [
    {
      why: 'scoreboard (Tab): in co-op campaign the row\'s kick button is the host\'s Kick (asks first, then the ' +
        'server sends that player back to their co-op screen); coop-client.js shows it to the host only',
      find: '$Аоео0($АААеI);\n\n\nif(params.$оНHlH()===$pТIoA)',
      replace: `$Аоео0($АААеI);\nif((${IN_COOP_CAMPAIGN})&&params.$еоepI!==undefined){coopClient.askKick(params.$еоepI);return;}\n\n\n` +
        'if(params.$оНHlH()===$pТIoA)',
    },
  ],
  'scripts/frame18.js': [
    {
      why: 'in-game menu: the host\'s "Leave match" is "Return to Lobby" in co-op campaign - the whole party goes back to ' +
        'the co-op screen together, on the same level (guests keep "Leave match")',
      find: '$TeIOl.$Acооl.addEventListener(MouseEvent.CLICK,function()\n{\n$pМоcT();',
      replace: '$TeIOl.$Acооl.addEventListener(MouseEvent.CLICK,function()\n{\n' +
        `if((${IN_COOP_CAMPAIGN})&&coopClient.isAuthority()){$Аоео0($АААеI);coopClient.partyToLobby();return;}\n` +
        '$pМоcT();',
    },
    {
      why: 'level start in multiplayer turns Easy off (meant for PvP bots); in co-op campaign the lobby\'s difficulty ' +
        'applies, Easy included, as in solo',
      find: 'if($pMМ1)\n{\n$НOIHo=false;\n$M1МТ1.visible=false;\n}',
      replace: `if($pMМ1)\n{\nif(!(${IN_COOP_CAMPAIGN}))$НOIHo=false;\n$M1МТ1.visible=false;\n}`,
    },
  ],
  'scripts/screens/EscMenu.js': [
    {
      why: 'in-game menu: room for a "Restart Level" button in co-op (the menu is built when the match scene is)',
      find: 'let h=192;',
      replace: `let h=192+((${IN_COOP_CAMPAIGN})?28:0);`,
    },
    {
      why: 'the host\'s "Restart Level" in co-op campaign: the server counts down in the chat and reloads the level ' +
        'for everyone. Hidden until coop-client.js sees this player is the host',
      find: 'w:$10TO0H,h:$H0cMOO}));\n\nmc.$I01oI=',
      replace: 'w:$10TO0H,h:$H0cMOO}));\n' +
        "if(h>192){mc.$coopRestart=mc.addChild(HUD.$oOcНТ({caption:'Restart Level',color:$АcНрA,[$clе0р]: HUD.$НОlО0А," +
        '[$eТоM]:$cc00AI,[$рHОМ]:offset+($llМTO++)*28,w:$10TO0H,h:$H0cMOO,action:()=>{coopClient.restartLevel();$еOpcl();} }));' +
        'mc.$coopRestart.visible=false;}\n\nmc.$I01oI=',
    },
  ],
  'index.html': [
    {
      why: 'friends on the LAN / Radmin address get a plain-http page, which lacks crypto.subtle (the game hashes ' +
        'its sprite sheets with it: no images at all) - load the stand-ins before the game\'s scripts',
      find: '<script src="_strings.js"></script>',
      replace: '<script src="coop/secure-context.js"></script><script src="_strings.js"></script>',
    },
    {
      why: 'load the co-op client after the game scripts',
      find: '<script src="scripts/main.js"></script>',
      replace: '<script src="scripts/main.js"></script><script src="coop/coop-client.js"></script>',
    },
  ],
  'scripts/screens/Campaign.js': [
    {
      why: 'campaign screen in co-op mode: clicking a level picks it for the co-op lobby instead of starting solo',
      find: 'if($cМТpТо.visible)\nreturn;\n\n$lсосТ=$еоepI;',
      replace: 'if($cМТpТо.visible)\nreturn;\nif(globalThis.coopClient&&coopClient.lobbyScreen()){coopClient.pickLevel($еоepI);return;}\n\n$lсосТ=$еоepI;',
    },
  ],
  'scripts/screens/Menu.js': [
    {
      why: 'main menu: the campaign entry opens the co-op campaign screen',
      find: '$oAMcео[$TIT0е+0].$MН1Mp.text=$HореM;',
      replace: '$oAMcео[$TIT0е+0].$MН1Mp.text="CO-OP CAMPAIGN";',
    },
    {
      why: 'main menu: hide MULTIPLAYER (entry 3) the way the menu already hides OLD MULTIPLAYER; this server only ' +
        'runs the co-op campaign',
      find: 'if(true)\n$OpI00е(4);',
      replace: 'if(true)\n$OpI00е(4);\n$OpI00е(3);',
    },
  ],
  'scripts/actions.js': [
    {
      why: 'trigger action 7 (mission complete) in co-op runs the solo completion code too (keep the guns you ' +
        'hold as equipment, earn credits, achievements, save); coopClient.beforeComplete() prepares it once per ' +
        'level and returns false for repeats',
      find: 'if(!$еHоНH)\nif($AAсAр==$Аcle)\nif(!$pMМ1)\n{\nfor($cpОlТ=0;',
      replace: `if((${IN_COOP_CAMPAIGN})?coopClient.beforeComplete():(!$еHоНH&&$AAсAр==$Аcle&&!$pMМ1))\n{\nfor($cpОlТ=0;`,
    },
    {
      why: 'end of the solo completion code: in co-op, undo what would move solo on to its own next level, then ' +
        'ask the server to load the next level for everyone',
      find: '$Аоео0($eIрoс);\n}\n\n\nbreak;\ncase 8:',
      replace: `$Аоео0($eIрoс);\nif(${IN_COOP_CAMPAIGN})coopClient.afterComplete();\n}\n\n\nbreak;\ncase 8:`,
    },
    {
      why: 'trigger action 47 (campaign finale: credits roll, +10000 credits, achievements; level 41 ends with it ' +
        'instead of 7) is off in multiplayer, so co-op could never finish level 41. In co-op it runs like a ' +
        'mission complete: the solo bookkeeping, then back to the lobby (on level 42)',
      find: 'case 47:\nif(!$еHоНH)\nif(!$pMМ1)\n{',
      replace: `case 47:\nif((${IN_COOP_CAMPAIGN})?coopClient.beforeComplete():(!$еHоНH&&!$pMМ1))\n{`,
    },
    {
      why: 'end of action 47 in co-op: undo the move to the credits screen, then report the level complete',
      find: '$lсосТ++;\n}\n\nbreak;\ncase 48:',
      replace: `$lсосТ++;\nif(${IN_COOP_CAMPAIGN})coopClient.afterComplete();\n}\n\nbreak;\ncase 48:`,
    },
    {
      why: 'trigger action 9 (mission failed): in co-op, restart the level for everyone instead of leaving',
      find: '$AAсAр=$соOO;\n\nif($pMМ1)\n{\n$ММ.$рОеAо();',
      replace: `$AAсAр=$соOO;\n\nif(${IN_COOP_CAMPAIGN}){$AAсAр=$Аcle;$Hl1AА.visible=false;coopClient.missionFailed($Т1рcН);}else\n` +
        'if($pMМ1)\n{\n$ММ.$рОеAо();',
    },
  ],
};

function count(haystack, needle) {
  let n = 0;
  for (let i = haystack.indexOf(needle); i !== -1; i = haystack.indexOf(needle, i + needle.length)) n++;
  return n;
}

// Reads every patched file once and returns { relPath: patchedText }. Throws if a patch doesn't apply exactly once.
function build(gameDir) {
  // Debugging aid: PB2_SKIP_PATCHES="respawn,overlay" leaves out patches whose description contains a word.
  const skip = (process.env.PB2_SKIP_PATCHES || '').split(',').map((s) => s.trim()).filter(Boolean);
  const out = {};
  for (const [rel, list] of Object.entries(PATCHES)) {
    let text = fs.readFileSync(path.join(gameDir, rel), 'utf8');
    for (const p of list) {
      if (skip.some((w) => p.why.includes(w))) continue;
      const n = count(text, p.find);
      if (n !== 1) throw new Error(`patch "${p.why}" for ${rel}: expected 1 match, found ${n}`);
      text = text.replace(p.find, () => p.replace);
    }
    out[rel] = text;
  }
  return out;
}

module.exports = { build };
