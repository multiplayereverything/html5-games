

{
let $рH1ННT=null;
let $cHОp0Н=null;
let $ТоТOсc=null;

let $HеТpс0=0;

let $МTТрHр=-1;

let $eАoНcM=new Map();

HUD.CreateSettings=(type,$eAOlМT=null)=>
{
if(HUD.$pоIНp)
throw new Error();

let $рHАoТО=HUD.$ООeеep;

let $AрТc1c;

let w=780;
let h=326;

let $lAHIАс=41;

if(type===$еТеHO)
{
$AрТc1c=stage.children.indexOf(globalThis.$A1Hpe)+1;

$рH1ННT=stage.addChildAt(HUD.$ОНHОеТ(library_bitmap_datas[$НM0рp]),$AрТc1c);
$рH1ННT.addChild(HUD.$сO11Tе($OоHO0));

$lAHIАс=60;

let $10TO0H=180;
let $H0cMOO=20;
globalThis.$рТHAсI=$рH1ННT.addChild(HUD.$oOcНТ({caption:$TсТОp,[$clе0р]: HUD.$НОlО0А,[$eТоM]:17,[$рHОМ]:365,w:$10TO0H,h:$H0cMOO,action:()=>
{
$Аоео0($АААеI);
gotoAndStop($НIlр);
} }));
}
else
if(type===$AОcHe)
{
globalThis.$TeIOl.visible=false;
$рHАoТО=HUD.$ООHMol;

$AрТc1c=stage.children.indexOf(globalThis.$1оIlOр)+1;

let $eеННОA={[$clе0р]: HUD.$рММеIA,w:w,h:h};
$eеННОA[$рHОМ]=44;

$рH1ННT=stage.addChildAt(HUD.$OНАTOI($eеННОA),$AрТc1c);

$рH1ННT.addChild(HUD.$ТHA0H({[$clе0р]:HUD.$AA0HрH,text:$OоHO0,[$eТоM]:Math.round(w/2),[$рHОМ]:12}));

$рH1ННT.addChild(HUD.$oOcНТ({caption:$e1MIе,[$clе0р]: HUD.$НОlО0А,[$eТоM]: Math.round(w/2-180/2),[$рHОМ]:h-20-16,w:180,h:20,action:()=>
{
HUD.DisposeSettings();
} }));
}
else
throw new Error();

$cHОp0Н=type;

HUD.$pоIНp=true;


$ТоТOсc=HUD.$сНМTpI($рH1ННT,{
[$eТоM]: 0,
[$рHОМ]:(type===$еТеHO)? 100 : 60,
w: 765,
h:(type===$еТеHO)? 255 : 220
});

let $HA0МAH=$ТоТOсc.children.length;
let $H01pТA=$ТоТOсc.children.length;

let $pMoОНО=[];

function $Il0НOl()
{
while($H01pТA>$HA0МAH)
{
$ТоТOсc.removeChildAt($H01pТA-1);
$H01pТA--;
}
for(let i=0;i<$pMoОНО.length;i++)
{
$pMoОНО[i].remove();
}
$pMoОНО=[];

let $lОсl1с=$HеТpс0;

let $HОpcl=0;
let $llМTO=0;
let $рTo1IT=0;

let $T1ceMс=0;
let $opITlН=0;
let $ecMоcT=0;


let line_height=23;

let $IрlОоc=0;

let spacing=3;

let $HcOНI1=[];

function $OОcHpl(title,$MTcIН0)
{
let $ecO0сl=$рTo1IT;

$HcOНI1.push(title);

$HОpcl=24;
$llМTO=$lAHIАс;

let cap=$рH1ННT.addChild(HUD.$ТHA0H({[$clе0р]:HUD.$lpНАA,text: title,[$eТоM]:$HОpcl+$IрlОоc,[$рHОМ]:$llМTO,color: $АHреH,hit_test_area_grow: 40,
action:()=>
{
if($lОсl1с===$ecO0сl)
return;

$HеТpс0=$ecO0сl;

$ТоТOсc.$оТНАо0();

$Il0НOl();
}}));


$pMoОНО.push(cap);

cap.alpha=($HеТpс0===$ecO0сl)? 1 : 0.25;







$IрlОоc+=(cap.graphics.bounds[$есеcT]-cap.graphics.bounds[$рсТTA])*cap.scaleX+30;

if($ecO0сl===$HеТpс0)
{
$T1ceMс=0;
$opITlН=0;
$ecMоcT=0;

$llМTO+=10;



$llМTO=-15;

$MTcIН0();


}


$рTo1IT++;
}

let $eОcM1M=280;
let $eеT1IМ=0;

function $Т1ОHMl($НссpсA,split)
{
$eОcM1M=$НссpсA;
$eеT1IМ=split;
}
function $lTMTo1($НссpсA=undefined)
{
if($НссpсA!==undefined)
$eОcM1M=$НссpсA;

if($opITlН>0)
{
$T1ceMс+=$eОcM1M;
$opITlН=0;
}
}
function $eeHTМН(x,y,title)
{
return HUD.$ТМр0e1($ТоТOсc,x,y,title);
}
let $сoАоТl=0.9;
let $AОeoMТ=0.7;
function $1co1lH(title)
{
let x=$HОpcl+$T1ceMс+$eОcM1M/2;
let y=$llМTO+$opITlН*line_height+28;
let c=$ТоТOсc.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
text: title,
[$eТоM]: x,
[$рHОМ]: y,
align: $оceO,
color: $eоТер,
size: 9
}));
$0ОATpA($сoАоТl);
}
function $Мpр0сН($О1TН0p,title)
{
let x=$HОpcl+$T1ceMс+$eеT1IМ;
let y=$llМTO+$opITlН*line_height+28;

$ТоТOсc.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
text: $AТecl+title,
[$eТоM]: x,
[$рHОМ]: y,
align: $TcpТ,
color: $Мо0Hо,
size: 9
}));

x=$HОpcl+$T1ceMс+$eеT1IМ*0.5;

$ТоТOсc.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
text: $О1TН0p,
[$eТоM]: x,
[$рHОМ]: y,
align: $оceO,
color: $МMее,
size: 9,

$AoАe1o: true,

hit_test_area_grow: 10,

action:()=>
{
ChatNewMsg($роTН0);
}
}));

$0ОATpA($AОeoMТ);
}
let $lH10pO=0;
let $A0еAOc=1;
function $МeНМoc(title,$МceAАе,$pНH0cl=null,$ОecT0T=$lH10pO)
{
let x=$HОpcl+$T1ceMс+170;
let y=$llМTO+$opITlН*line_height+28;
$eeHTМН(x,y,title);

let $10TO0H=50;
let $H0cMOO=18;

let w=$10TO0H+spacing+$10TO0H;


let value;
eval(`value=${$МceAАе};`);

let $сpOo1T=$ТоТOсc.addChild(new MovieClip());
let b;
let b2;

let $TАoсeI=($ОecT0T===$lH10pO)? 1 : 4;

let $OМAOpO=($ОecT0T===$lH10pO)? 0 : 1;

$сpOo1T[$eТоM]=x+6;
$сpOo1T[$рHОМ]=y;
$сpOo1T.graphics=new Graphics(false);
$сpOo1T.addEventListener(MouseEvent.MOUSE_DOWN,(e)=>
{
let $сpоМТH=()=>
{
let[x,y]=$сpOo1T.scenePointToLocalPoint(mouseX,mouseY);

value=Math.round(Math.max(0,Math.min(1,x/w))*$TАoсeI*100)/100;
eval(`${$МceAАе}=value;`);

$cе1Mec();
};

let $MрpТoМ=()=>
{
$сpOo1T.removeEventListener(MouseEvent.MOUSE_MOVE_ANYWHERE,$сpоМТH);
$сpOo1T.removeEventListener(MouseEvent.MOUSE_UP_ANYWHERE,$MрpТoМ);

if($pНH0cl)
$pНH0cl();
};

$сpоМТH();

$сpOo1T.addEventListener(MouseEvent.MOUSE_MOVE_ANYWHERE,$сpоМТH);
$сpOo1T.addEventListener(MouseEvent.MOUSE_UP_ANYWHERE,$MрpТoМ);

});
let $cе1Mec=()=>
{
let $НООoрp=23;

if($ОecT0T===$A0еAOc)
$НООoрp=46;

$сpOo1T.graphics.clear();

let $1Hсcр=w/$НООoрp;

let $TA0HOT=3;

let $MOТlНе=value/$TАoсeI;

for(let layer=0;layer<2;layer++)
{
for(let i=0;i<$НООoрp;i+=2)
{
let $оHОpHА=1;

let morph=(i)/$НООoрp;
let $ТрОpсH=(i+$оHОpHА)/$НООoрp;

if(layer===1)
{
if($MOТlНе<morph)
{
break;
}
else
if($MOТlНе<$ТрОpсH)
{


let $ОАоТоА=($MOТlНе-morph)/$оHОpHА*$НООoрp;
$оHОpHА*=$ОАоТоА;
$ТрОpсH=(i+$оHОpHА)/$НООoрp;
}
else
{

}
}

let $А1оMНТ=morph*$H0cMOO+(1-morph)*$TA0HOT;
let $ТeрО0Н=$ТрОpсH*$H0cMOO+(1-$ТрОpсH)*$TA0HOT;

$сpOo1T.graphics.beginFill(
(layer===0)?
(
($рHАoТО===HUD.$ООeеep)? $MHpеA : $0о01А
):
(($ОecT0T===$A0еAOc)? $еclОO : $co0pe));
{
$сpOo1T.graphics.moveTo(i*$1Hсcр,$H0cMOO/2-$А1оMНТ);
$сpOo1T.graphics.lineTo(i*$1Hсcр+$1Hсcр*$оHОpHА,$H0cMOO/2-$ТeрО0Н);
$сpOo1T.graphics.lineTo(i*$1Hсcр+$1Hсcр*$оHОpHА,$H0cMOO/2);
$сpOo1T.graphics.lineTo(i*$1Hсcр,$H0cMOO/2);
}
$сpOo1T.graphics.endFill();
}
}


b.gotoAndStop((value===$OМAOpO)? 2 : 1);
b2.text=Math.round(value*100)+$eесHl;
};
let $cМIOсо=(v)=>
{
value=v;
eval(`${$МceAАе}=value;`);

$cе1Mec();

if($pНH0cl)
$pНH0cl();
};
let $MlTIOI=$10TO0H;
b=$ТоТOсc.addChild(HUD.$oOcНТ({
[$clе0р]: $рHАoТО,
caption:($ОecT0T===$lH10pO)? $рОТо1 : $еТНОc,
[$eТоM]: x+($10TO0H+spacing+$10TO0H+spacing)+6,
[$рHОМ]: y-$H0cMOO/2,
w: $MlTIOI,
h: $H0cMOO,

action:()=>
{
let $pIАTАo=$OМAOpO;

if(value===$pIАTАo)
{
let $рooOоl=$eАoНcM.get($МceAАе);
if($рooOоl!==undefined)
$pIАTАo=$рooOоl;
}
else
$eАoНcM.set($МceAАе,value);

$cМIOсо($pIАTАo);
}
}));
b2=$ТоТOсc.addChild(HUD.$ТHA0H({
[$clе0р]:HUD.$lpНАA,
text: $0OрТ,
[$eТоM]: x+($10TO0H+spacing+$10TO0H+spacing+$10TO0H+spacing)+6+5,
[$рHОМ]: y,
align: $TcpТ,
color: $eоТер}));

$cе1Mec();

$0ОATpA();
}
function $l0MеА0(title,$IНрОTI,$eНIoMH,$МceAАе,$pНH0cl=null)
{
let x=$HОpcl+$T1ceMс+170;
let y=$llМTO+$opITlН*line_height+28;


HUD.$l0MеА0($ТоТOсc,x,y,title,$IНрОTI,$eНIoMH,$МceAАе,$pНH0cl,$рHАoТО);

$0ОATpA();
}
function $0ОATpA($HOoНМ=1)
{
$opITlН+=$HOoНМ;
$ecMоcT=Math.max($opITlН,$ecMоcT);
}

$OОcHpl($1рAМc,()=>
{
$l0MеА0($МIpIl,[$МооoM,$МlАо1],[false,true],`$00МeI`,()=>{});
$l0MеА0($OM0сH,[$АeоTO,$IpoOI],[false,true],`$0lpеo`,()=>{});
$l0MеА0($оpеAс,[$АeоTO,$IpoOI],[false,true],`$ТHoA1=$сМ1Но`,()=>{});
$l0MеА0($O1OpT,[$МооoM,$МlАо1],[false,true],`SCREEN_FADE_EFFECTS`,()=>{});
$l0MеА0($eАIое,[$МооoM,$МlАо1],[0,1],`TRACK_MP_LOGS`,()=>{if(globalThis.$ТНсcoс)globalThis.$ТНсcoс.visible=(TRACK_MP_LOGS)? true : false;});
$0ОATpA();
$0ОATpA();
$l0MеА0($ОсITT,[$МооoM,$ppсpM,$МlАо1],[1,2,3],`SHOW_PERFORMANCE_INFORMATION`,()=>{});
$l0MеА0($сTА0,[$ОТpНM,$ррТcO,$реeeT],[0,1,2],`FULLSCREEN`,()=>{$0oрIp();});


$lTMTo1(280);

$l0MеА0($сееAo,[$АeоTO,$IpoOI],[true,false],`$сIоTТ`,()=>{$АТоМММ();});
$l0MеА0($oe0lТ,[$cТе0l,$ToеТр,$MТocА],[1,2,3],`$e0cо0`,()=>{});
$l0MеА0($НTеoe,[$leНеp,$cHAНН],[false,true],`UNLIMITED_SCREEN_REFRESH_RATE`,()=>{});
$0ОATpA();

$l0MеА0($НMАcе,[$TepеI,$рАlTО,$oрIОA],[1,2,3],`RENDER_RESOLUTION`,()=>{window.onresize();$Il0НOl();});
$l0MеА0($сOТоo,[$pА0TA,$рMрcM,$e0MpH,$pНАОр],[0,1,2,3],`SPRITE_DETAILS`,()=>{$ТpIlpT();$Il0НOl();if(SPRITE_DETAILS===3)ChatNewMsg($НAМеH);});



});
$OОcHpl($НТTeМ,()=>
{
$МeНМoc($Аe0еТ,`$АHсее`,()=>{$eНеlе();$Аоео0($MpMOН);});
$МeНМoc($АеpМO,`$cI0ее`,()=>{$eНеlе();$рTоОc();$ОcoеM();});
$МeНМoc($HОMHс,`CUSTOM_MUSIC_VOLUME`,()=>{$eНеlе();$рTоОc();$ОcoеM();});


$l0MеА0($pАОеO,[$МооoM,$МlАо1],[false,true],`BEEP_ON_DEATH`,()=>{});
$l0MеА0($MсooА,[$МооoM,$МlАо1],[false,true],`BEEP_ON_LOW_HEALTH`,()=>{});
$l0MеА0($оАрМO,[$МооoM,$МlАо1],[0,1],`HIT_SOUNDS`,()=>{});

});
$OОcHpl($АIоH1,()=>
{
$l0MеА0($01сНp,[$МооoM,$МlАо1],[false,true],`$ATоMс`,()=>{});
$l0MеА0($HoeОс,[$eНеH0,$HсIlН],[false,true],`$рpHсH`,()=>{});
$l0MеА0($0Tp1о,[$МооoM,$МlАо1],[false,true],`VIOLENCE`,()=>{});
$0ОATpA();
$l0MеА0($AeHеl,[$МооoM,$МlАо1],[false,true],`MOUSE_WHEEL`,()=>{});
$l0MеА0($МсTOH,[$МооoM,$МlАо1],[false,true],`OVERSCROLL`,()=>{});


$l0MеА0($T1сНM,[$МppАр,$НТ0рH],[1,2],`CONNECTION_SERVER_ID`,()=>{ChatNewMsg($орcMc);if($pMМ1)ChatNewMsg($lAOHc);});

$l0MеА0($ТТoе1,[$МооoM,$МlАо1],[false,true],`$AАcАО`,(v)=>{if(LOCK_CURSOR>0&&!v)LOCK_CURSOR=0;});
$l0MеА0($eрНlр,[$МооoM,$МlАо1],[1,2],`QUICK_SAVE_ENABLED`,()=>{});
$0ОATpA();
$l0MеА0($AMcAО,[$МооoM,$МlАо1,$poТОo],[0,1,2],`LOCK_CURSOR`,(v)=>{if(v>0&&!$AАcАО)$AАcАО=true;});


$lTMTo1(350);

$l0MеА0($рlcMc,[$МооoM,$МlАо1],[false,true],`TOOLTIPS`,()=>{});
$l0MеА0($е11ОН,[$МооoM,$МlАо1],[false,true],`HINTS`,()=>{});
$l0MеА0($OA1Iс,[$OIоlо,$lpоОc,$Нp0Оc],[1,3,2],`$АTO10`,()=>{$HAoТAl();});
$0ОATpA();
$l0MеА0($0OToе,[$МооoM,$АepеМ,$Нp0Оc],[0,1,2],`$HАМММ`,()=>{});
$l0MеА0($HHIАА,[$МооoM,$МlАо1],[false,true],`$OOсlM`,()=>{});


$l0MеА0($pАОеO,[$МооoM,$МlАо1],[false,true],`BEEP_ON_DEATH`,()=>{});
$l0MеА0($MсooА,[$МооoM,$МlАо1],[false,true],`BEEP_ON_LOW_HEALTH`,()=>{});
$l0MеА0($оАрМO,[$МооoM,$МlАо1],[0,1],`HIT_SOUNDS`,()=>{});

$0ОATpA();
$МeНМoc($AоAНА,`CURSOR_SENSITIVITY`,()=>{},$A0еAOc);




});
$OОcHpl($pcТТМ,()=>
{
let padding=60;
$Т1ОHMl(110,27);

$1co1lH($рАеоО);
$Мpр0сН($eOТAТ,$Мср0p);
$Мpр0сН($lосOH,$оТТoс);
$Мpр0сН($1Aсес,$оoН10);
$Мpр0сН($pcоOO,$АсpоM);

$0ОATpA(0.333);

$1co1lH($cсOOс);
$Мpр0сН($oOМОО,$АHМTc);
$Мpр0сН($OНpсl,$AМТр1);
$Мpр0сН($ОТpНM,$е0OcI);

$0ОATpA(0.333);

let $ОApООI=$opITlН;
let $MlOpоH=$T1ceMс;
{
$T1ceMс-=50;

$l0MеА0($pрoTI,[$10Ipр,$оМоOT,$сTоcТ],[1,2,3],`ENTER_KEY_ACTION`,()=>{$Il0НOl();});
$l0MеА0($еТоHI,[$10Ipр,$оМоOT,$сTоcТ],[1,2,3],`T_KEY_ACTION`,()=>{$Il0НOl();});

$opITlН=$ОApООI;
$T1ceMс+=380;

$l0MеА0($ееcpA,[$1OTОе,$lHАеH],[1,2],`Q_KEY_ACTION`,()=>{$Il0НOl();});
}
$T1ceMс=$MlOpоH;

$lTMTo1($eОcM1M+padding);
$Т1ОHMl(170,85);

$1co1lH($АeoHo);
$Мpр0сН($MоНМp,$ОeAрO);
$Мpр0сН($oМeор,$сMНlp);
$Мpр0сН($coОHМ,$OIАpe);
$Мpр0сН($МеООО,$оМAМ1);
$Мpр0сН($eсMрp,Q_KEY_ACTION===2 ? $cАMll : $1OTОе);
$Мpр0сН($НMIoр,$OcрIМ);
$Мpр0сН($оНoОe,$oоM1А);
$Мpр0сН($еcАcс,$H1оAН);

$lTMTo1($eОcM1M+padding);
$Т1ОHMl(130,25);

$1co1lH($Apell);

if(ENTER_KEY_ACTION===3)
$Мpр0сН($0Oрсe,$рНlоc);
else
if(T_KEY_ACTION===3)
$Мpр0сН($сАlpс,$рНlоc);
else
$Мpр0сН($oМTо,$рНlоc);

$Мpр0сН($OoOТс,$рОрМe);
$Мpр0сН($AcAAc,$poIlo);
$Мpр0сН($ОOHlc,$ОААсM);
$Мpр0сН($lрОec,$Т1АeО);
$Мpр0сН($cсрI0,$оMрoМ);
$Мpр0сН($TоOоH,$1OTcН);

$lTMTo1($eОcM1M+padding);
$Т1ОHMl(130,25);

$1co1lH($pроTо);

if(ENTER_KEY_ACTION>1)
$Мpр0сН($0Oрсe,[$oМTо,$соТО,$оМоOT,$clННl][ENTER_KEY_ACTION]);

if(T_KEY_ACTION>1)
$Мpр0сН($сАlpс,[$oМTо,$соТО,$оМоOT,$clННl][T_KEY_ACTION]);



$Мpр0сН($OoOТс,$Tc01O);
$Мpр0сН($AcAAc,$lAeсI);
$Мpр0сН($ОOHlc,$IА0оо);
$Мpр0сН($lрОec,$НОlcl);
$Мpр0сН($НТ0рH,$lерТl);

$lTMTo1();
});
$OОcHpl($оo0Нo,()=>
{
let x=$HОpcl+$T1ceMс;
let y=$llМTO+$opITlН*line_height+28;

$ТоТOсc.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
htmlText:(
$eOcоT+$О0Ao0+
$НMеМТ+$О0Ao0+
$сОT11
).split($TlAp).join($cTр0),
[$eТоM]: x,
[$рHОМ]: y,
align: $TcpТ,
color: $TlНp,
size: 12
}));

function $сОеoTH($MН1Mp)
{
var $IIАHo=$0OрТ;
for(i=0;i<$MН1Mp.length;i++)
$IIАHo+=String.fromCharCode($MН1Mp.charCodeAt(i)-1);

return $IIАHo;
}
function $el0AМе($MН1Mp)
{
var $IIАHo=$0OрТ;
for(i=0;i<$MН1Mp.length;i++)
$IIАHo+=String.fromCharCode($MН1Mp.charCodeAt(i)+1);

return $IIАHo;
}
var $MсеОсO=-1;
function $Тооl1е(s)
{
if($MсеОсO!==-1)
clearInterval($MсеОсO);

$cHOl0A.text=s;

$MсеОсO=setTimeout(function()
{

if($leTloO.parent)
{
$cHOl0A.text=$0OрТ;
}
$MсеОсO=-1;
},3000);
}

let test=$pНсНl(false);

if(test!==$сОеoTH($el0AМе(test)))
test=$АlMHA;

let $A0lОоA=$el0AМе(test);

let $leTloO=$ТоТOсc.addChild(HUD.$ОeОHlМ({
text: $A0lОоA,
[$eТоM]: x,
[$рHОМ]: y+50,
w: w-x*2,
h: 100,
size: 6,
multiline: true,
$ОАHOМе: true,
fill:($рHАoТО===HUD.$ООeеep)? $MHpеA : $0о01А
}));

let $cHOl0A=$ТоТOсc.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
htmlText: $0OрТ,
[$eТоM]: w/2,
[$рHОМ]: y+165,
align: $оceO,
color: $МТeрН,
size: 12
}));

$ТоТOсc.addChild(HUD.$oOcНТ({caption:$рAAМI,[$clе0р]: HUD.$А10oeo,[$eТоM]: Math.round(w/2-180-3),[$рHОМ]:y+180,w:180,h:20,action:()=>
{
if($МTТрHр!==-1)
clearInterval($МTТрHр);

var $cHТlАM=6;
function $pcOIТp()
{
$cHТlАM--;
$cHOl0A.text=$AеАoI+$cHТlАM+$сoIр1+(type===$AОcHe ? $e1MIе : $TсТОp)+$oeОAH;


$МTТрHр=setTimeout(function()
{

if($leTloO.parent)
{
if($cHТlАM>0)
{
$МTТрHр=-1;
$pcOIТp();
}
else
{
$МTТрHр=-1;

var $lс0oНМ=$НeНpО[$1еM1][$MMр0];
var $ОсоMTе=$НeНpО[$1еM1][$0Hl1];
var $c0o1оТ=$НeНpО[$1еM1][$cIМА];

$Аоео0($АААеI);
$НeНpО.clear();
$Mр1Аl();



$Il0НOl();

$НeНpО[$1еM1][$MMр0]=$lс0oНМ;
$НeНpО[$1еM1][$0Hl1]=$ОсоMTе;
$НeНpО[$1еM1][$cIМА]=$c0o1оТ;
}
}
else
$МTТрHр=-1;
},1000);
}

$pcOIТp();


} }));
$ТоТOсc.addChild(HUD.$oOcНТ({caption:$0TeMe,[$clе0р]: HUD.$НОlО0А,[$eТоM]: Math.round(w/2+3),[$рHОМ]:y+180,w:180,h:20,action:()=>
{
$Аоео0($АААеI);

try
{
$ОAITс($сОеoTH($leTloO.value),false);

$Mр1Аl();

$IеOАT();

$Тооl1е($НMpAc);

}
catch(e)
{
$Тооl1е($o1eе1);
}
} }));
});


$H01pТA=$ТоТOсc.children.length;

stage.runEvents(MouseEvent.MOUSE_MOVE,{});

if($eAOlМT!==null)
{
let $ApTТрО=$HеТpс0;
$HеТpс0=$HcOНI1.indexOf($eAOlМT);
$eAOlМT=null;
$Il0НOl();
$HеТpс0=$ApTТрО;
}
}
$Il0НOl();
};

HUD.DisposeSettings=()=>
{
if(!HUD.$pоIНp)
return false;

$IеOАT();

HUD.$pоIНp=false;

MovieClip.RemoveIfPossible($ТоТOсc);
$ТоТOсc=null;

MovieClip.RemoveIfPossible($рH1ННT);
$рH1ННT=null;

if($cHОp0Н===$AОcHe)
{
globalThis.$TeIOl.visible=true;
globalThis.$TeIOl.$oAcTсе();
}

return true;
};
}