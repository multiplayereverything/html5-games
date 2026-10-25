






class $АМeАсe
{
static init_class()
{







$АМeАсe.overlay=$АМeАсe.$рТеМТl();
document.body.append($АМeАсe.overlay);
$АМeАсe.overlay.style.left=$cHoAA;
$АМeАсe.overlay.style.top=$cHoAA;
$АМeАсe.overlay.style.width=$Тlеlо;
$АМeАсe.overlay.style.height=$AрoHТ;
$АМeАсe.overlay.style.overflow=$Iсo1e;
$АМeАсe.overlay.style.zIndex=3;

$АМeАсe.$epрOHТ=$АМeАсe.$рТеМТl();
document.body.append($АМeАсe.$epрOHТ);
$АМeАсe.$epрOHТ.style.left=$cHoAA;
$АМeАсe.$epрOHТ.style.top=$cHoAA;
$АМeАсe.$epрOHТ.style.width=$Тlеlо;
$АМeАсe.$epрOHТ.style.height=$AрoHТ;
$АМeАсe.$epрOHТ.style.overflow=$Iсo1e;
$АМeАсe.$epрOHТ.style.zIndex=1;


}
static $10lAО1()
{
$АМeАсe.$IcоOНH=$АМeАсe.$рТеМТl();
$АМeАсe.overlay.append($АМeАсe.$IcоOНH);
$АМeАсe.$IcоOНH.style.display=$MOTМо;

let button=$АМeАсe.$oOcНТ();

$АМeАсe.$lОО1рI=button;

$АМeАсe.overlay.append(button);
button.style.right=15+$IppoI;
button.style.bottom=33+$IppoI;
button.style.width=40+$IppoI;
button.style.height=12+$IppoI;

button.style.fontSize=$poHpА;

button.textContent=$cОс1A;

button.onclick=()=>
{
if($АМeАсe.$IcоOНH.style.display===$0OрТ)
$АМeАсe.$IcоOНH.style.display=$MOTМо;
else
$АМeАсe.$IcоOНH.style.display=$0OрТ;
};




let $OTТeНO=null;

let $HОpcl=0;
let $llМTO=0;
for(let prop in Guns.gun_class_scripts)
if(Guns.gun_class_scripts[prop].frames[$АрНО].length>0)
{
let button=$АМeАсe.$oOcНТ();
$АМeАсe.$IcоOНH.append(button);

button.style.left=15+(150)*$HОpcl+$IppoI;
button.style.bottom=15+12+3+12+3+$llМTO*(12)+$IppoI;
button.style.width=150+$IppoI;
button.style.height=12+$IppoI;

button.style.fontSize=$рMОcM;

button.textContent=$еMpll(prop)||prop;

button.onclick=()=>
{
let mc=$еАеО1(prop,{
[$eТоM]: $0Ме1А[$НAlНc][$eТоM],
[$рHОМ]: $0Ме1А[$НAlНc][$рHОМ],
upg: 3,
command:-1});
};

$HОpcl++;
if($HОpcl>4)
{
$HОpcl=0;
$llМTO++;
}
}
$HОpcl=0;
$llМTO++;
let $clHIНe={
'Godmode team':()=>{
for(let i=0;i<$0Ме1А.length;i++)
if($0Ме1А[i])
if($0Ме1А[i][$cАocе]===$0Ме1А[$НAlНc][$cАocе])
{
$0Ме1А[i][$МIIро]*=10000;
$0Ме1А[i].hmax*=10000;
}
},
'Debug mode':()=>{$lIТI11=!$lIТI11;},
'Nap time':()=>{
for(let i=0;i<$0Ме1А.length;i++)
if($0Ме1А[i])
if($0Ме1А[i][$cАocе]!==$0Ме1А[$НAlНc][$cАocе]||$0Ме1А[i].hmax<10000)
{


if($НAlНc!==i)
{
$0Ме1А[i][$МIIро]=0;
$0Ме1А[i].$оeoТе=true;

let mc=$0Ме1А[i];

if($0Ме1А[i].$1МOОM>=0)
setTimeout(()=>
{
$pАTIТ(mc.$1МOОM);
},100);
}
}
},
};
for(let prop in $clHIНe)
{
let button=$АМeАсe.$oOcНТ();
$АМeАсe.$IcоOНH.append(button);

button.style.left=15+(85)*$HОpcl+$IppoI;
button.style.bottom=15+12+3+12+3+$llМTO*(12)+$IppoI;
button.style.width=80+$IppoI;
button.style.height=12+$IppoI;

button.style.fontSize=$рMОcM;

button.textContent=prop;

button.onclick=$clHIНe[prop];

$HОpcl++;
if($HОpcl>14)
{
$HОpcl=0;
$llМTO++;
}
}

for(let i=0;i<88;i++)
{
let button=$АМeАсe.$oOcНТ();
$АМeАсe.$IcоOНH.append(button);

button.style.left=15+8.9*i+$IppoI;
button.style.bottom=15+12+3+$IppoI;
button.style.width=9+$IppoI;
button.style.height=12+$IppoI;

button.style.fontSize=$c10ОО;

button.textContent=(i+1);

button.onclick=()=>
{
if(!$0Ме1А[$НAlНc])
return;

let mc=game.addChildAt(new decor,game.numChildren);

mc.gotoAndStop(i+1);

mc[$eТоM]=$0Ме1А[$НAlНc][$eТоM]+100;
mc[$рHОМ]=$0Ме1А[$НAlНc][$рHОМ];

if(mc.$ОIрpА)
mc.$ОIрpА();
};
}


















































































































}
static $oOcНТ()
{
let e=document.createElement($lНHIс);





e.addEventListener($ТeAАe,()=>$Аоео0($1ccМр));
e.addEventListener($AeeТO,(e)=>{$Аоео0($pHpсA);e.preventDefault();e.stopImmediatePropagation();});
e.addEventListener($oТoop,()=>$Аоео0($АААеI));
return e;
}
static $рТеМТl()
{
let e=document.createElement($р0eeО);
return e;
}
static $ocееТ0()
{
let e=document.createElement($еHpАр);
return e;
}
static $ОeОHlМ(multiline=false)
{
let e=document.createElement(multiline ? $IccHс : $0Т1о0);
e.className=$Тееc1;

e.setAttribute($сIIpе,$oОНpН);
e.setAttribute($p0MAН,$oОНpН);
e.setAttribute($0IОOо,$oОНpН);
e.setAttribute($сеoОМ,$МIcо);

e.spellcheck=false;

e.$рТclАc=()=>
{
return e.value;
};

e.$1ооМАН=(v)=>
{
e.value=v;
};
e.onmousemove=(event)=>
{


event.stopImmediatePropagation();
};
e.onmousedown=(event)=>
{
event.stopImmediatePropagation();
};
e.onmouseup=(event)=>
{
event.stopImmediatePropagation();
};
e.onkeydown=(event)=>
{
if(event.key===$TM0сA)
{

}
else
event.stopImmediatePropagation();
};
e.onkeyup=(event)=>
{
event.stopImmediatePropagation();
};

e.$Ae0ОIА=(start,end)=>
{
let $leTloO=e;
if($leTloO.$MOcOpН){
var $TeеоНе=$leTloO.$MOcOpН();
$TeеоНе.collapse(true);
$TeеоНе.$eITMTo($рOTрI,start);
$TeеоНе.$HОо1pI($рOTрI,end-start);
$TeеоНе.select();
} else if($leTloO.setSelectionRange){
$leTloO.setSelectionRange(start,end);
} else if($leTloO.selectionStart){
$leTloO.selectionStart=start;
$leTloO.selectionEnd=end;
}
$leTloO.focus();
};

return e;
}

static $TМНAoО()
{
SpriteSheets.AssembleFrameBasedMovieClip(sky,$lcAoр);

myCursor.init();

SpriteSheets.InstallFrameChangeLogic(globalThis.$OeМcO,SpriteSheets.recognized_parts[$реepО]);
globalThis.$OeМcO.gotoAndPlay=(frame)=>
{
SpriteSheets.$pIAOТО(globalThis.$OeМcO,frame,false,true);
};
globalThis.$OeМcO.blending=Blending.ADDITIVE;

SpriteSheets.InstallFrameChangeLogic(globalThis.$oOeAо,SpriteSheets.recognized_parts[$оlp0Т]);
SpriteSheets.$pIAOТО(globalThis.$oOeAо);
globalThis.$oOeAо.blending=Blending.ADDITIVE;
globalThis.$oOeAо.visible=false;
}
}
$АМeАсe.init_class();

var myCursor={
init:()=>
{
SpriteSheets.InstallFrameChangeLogic(myCursor._sprite,SpriteSheets.recognized_parts[$T0HOе]||SpriteSheets.recognized_parts[$МecоM]||SpriteSheets.recognized_parts[$еM0оО]);
addEventListener(Event.ENTER_FRAME,myCursor.$oс1оeМ);

let $MН1Mp=myCursor.$MН1Mp;


$MН1Mp.font=(8*SpriteSheets.text_quality_scale)+$IОIОO;
$MН1Mp.align=$оceO;
$MН1Mp.$OрОHeо=(-93.95+347.95/2)/2;
$MН1Mp.$I1IM0М=(26.75+9)/2;

$MН1Mp.scaleX=1/SpriteSheets.text_quality_scale;
$MН1Mp.scaleY=1/SpriteSheets.text_quality_scale;





$MН1Mp.filters.push(new DropShadowFilter(3,3,5,$еMТlМ));
},

_sprite: new MovieClip(),
$1opOMН: 1,
$OрАlTо: false,
$MН1Mp: new TextField(),

get visible()
{
return myCursor._sprite.visible;
},
set visible(v)
{
myCursor._sprite.visible=v;
},

set x(v)
{
myCursor._sprite[$eТоM]=v;

myCursor.$MН1Mp[$eТоM]=v+myCursor.$MН1Mp.$OрОHeо;
},
set y(v)
{
myCursor._sprite[$рHОМ]=v;

myCursor.$MН1Mp[$рHОМ]=v+myCursor.$MН1Mp.$I1IM0М;
},
get x()
{
return myCursor._sprite[$eТоM];
},
get y()
{
return myCursor._sprite[$рHОМ];
},

$cAIpIH: 1,
set alpha(v)
{
myCursor.$cAIpIH=v;
myCursor._sprite.alpha=v;
},
get alpha()
{
return myCursor.$cAIpIH;

},
get currentLabel()
{
if(myCursor.$1opOMН===6)
return $cНOНM;

return $0рHpT;
},
gotoAndStop:(f)=>{

if(typeof f!==$АOpА)
{
if(f===$cНOНM)
f=6;
else
if(f===$0рHpT)
f=7;
else
8;
}




myCursor.$1opOMН=f;

myCursor._sprite.gotoAndStop(f);
myCursor.$OрАlTо=false;

myCursor._sprite.scaleX=1;
myCursor._sprite.scaleY=1;

myCursor.$MН1Mp.visible=(f>=7);
if(f<7)
myCursor._sprite.alpha=1;
},
gotoAndPlay:(f)=>
{
myCursor.gotoAndStop(f);
myCursor.$OрАlTо=true;
},
get currentFrame()
{
return myCursor.$1opOMН;
},
ch1:{set visible(v){if(v)myCursor._sprite.gotoAndStop(9);},set scaleX(v){myCursor._sprite.scaleX=myCursor._sprite.scaleY=v;},set alpha(v){myCursor._sprite.alpha=v*myCursor.$cAIpIH;} },
ch2:{},
ch3:{set visible(v){if(v)myCursor._sprite.gotoAndStop(8);},set scaleX(v){myCursor._sprite.scaleX=myCursor._sprite.scaleY=v;},set alpha(v){myCursor._sprite.alpha=v*myCursor.$cAIpIH;} },
ch4:{set visible(v){if(v)myCursor._sprite.gotoAndStop(7);},set scaleX(v){myCursor._sprite.scaleX=myCursor._sprite.scaleY=v;},set alpha(v){myCursor._sprite.alpha=v*myCursor.$cAIpIH;} },
$oс1оeМ:()=>
{
if(myCursor.$OрАlTо)
{
if(myCursor.$1opOMН<5)
{
myCursor.gotoAndPlay(myCursor.$1opOMН+1);
}
}
}
};


var $ТeНОН=new MovieClip();



{
$ТeНОН.bg=$ТeНОН.addChild(HUD.$OоОT1е($АleA1,0,0,353,136));


for(let i=0;i<7;i++)
{
let line=$ТeНОН.addChild(new MovieClip());
$ТeНОН[$TTрО+i]=line;
line[$eТоM]=5;
line[$рHОМ]=5+i*18;




line.btn=line.addChild(HUD.$oOcНТ({
[$clе0р]: HUD.$0оoоое,
[$eТоM]:0,
[$рHОМ]:0,
w:325+18,
h:18
}));

line.$oоoeO=line.addChild(HUD.$oOcНТ({
[$clе0р]: HUD.$AlТО0о,
[$eТоM]:325,
[$рHОМ]:0,
w:18,
h:18
}));

line.$MН1Mp=line.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
[$eТоM]: 5,
[$рHОМ]: 9
}));

let $oТ0Аос=0.5;
let cross=line.$oоoeO.addChild(SpriteSheets.AssembleFrameBasedMovieClip(new MovieClip().MoveTo(-16/2*$oТ0Аос+18/2,-16/2*$oТ0Аос+18/2),$eНОcТ).gotoAndStop(2));
cross.scaleX=$oТ0Аос;
cross.scaleY=$oТ0Аос;
cross.alpha=0.5;
}
}

var $То0He=new MovieClip();
$То0He.$OОТTр=new MovieClip();

var $oТTop=new MovieClip();
var $pMА0О=new MovieClip();
var $1cMОo=new MovieClip();
var $есНАc=new TextField();



var $eрlcс=new MovieClip();
var $А1IАo=new MovieClip();



var $сОoОM=new MovieClip();
$сОoОM.$сМоо0=new MovieClip();
$сОoОM.$сМоо0.$0AIlI=new MovieClip();
$сОoОM.$сМоо0.$ооТel=new MovieClip();
$сОoОM.$сМоо0.$OMeTA=new MovieClip();
$сОoОM.$сМоо0.$оMОT0=new MovieClip();

var $OIOMlM=new MovieClip();


var $MрTAс=new MovieClip();
var $ТppА1=new MovieClip();

var $oсAеI=new MovieClip();
$oсAеI[$оIpl]=new MovieClip();
$oсAеI.$OeоАT=new MovieClip();


var $МH1р0O=new MovieClip();
$МH1р0O.$pHееОe=new MovieClip();
$МH1р0O.$pIMpеO=new MovieClip();
$МH1р0O.$c1AIp0=new MovieClip();
$МH1р0O.$оесTAM=new MovieClip();
var $рpНсcc=new MovieClip();

var game=new MovieClip();
game.$е0lНl=new MovieClip();



var graphics_3d=new MovieClip();
var graphics_3d_front=new MovieClip();
var sky=new MovieClip();


stage.addChild(sky);
stage.addChild(graphics_3d);
stage.addChild(game);
stage.addChild(graphics_3d_front);

globalThis.$OeМcO=stage.addChild(new MovieClip());
globalThis.$oOeAо=stage.addChild(new MovieClip());

globalThis.$lITeI=null;

globalThis.$Hl1AА=stage.addChild(HUD.$OоОT1е($еMТlМ));
globalThis.$eMpсp=stage.addChild(HUD.$OоОT1е($МMее));
globalThis.$A1Hpe=stage.addChild(HUD.$OоОT1е($МMее));
globalThis.$eMpсp.blending=Blending.OVERLAY;
globalThis.$A1Hpe.alpha=0;
globalThis.$eMpсp.alpha=0;
stage.addChild($ТeНОН);
stage.addChild(myCursor._sprite);
stage.addChild(myCursor.$MН1Mp);







for(let i in window)
if(window[i]instanceof MovieClip)
{
window[i].assumed_name=i;
}

