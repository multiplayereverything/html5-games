

{
let mc=null;
let $HI1еoI=null;

HUD.CreateCustomMapScreen=()=>
{
let $AрТc1c=stage.children.indexOf(globalThis.$A1Hpe)+1;
mc=stage.addChildAt(HUD.$ОНHОеТ(library_bitmap_datas[$НM0рp]),$AрТc1c);
mc.addChild(HUD.$сO11Tе($реAОо));

let $Hc00ТT=7;
let $рIo1р1=7;
let $10TO0H=180;
let $H0cMOO=20;

mc.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
htmlText: $MННМp+$О0Ao0+$сAоcО,
[$eТоM]: 400,
[$рHОМ]: 106+$рIo1р1,
align: $оceO,
color: $pMcТO
}));

mc.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
htmlText: $МHcоН,
font: $IА0AO,
[$eТоM]: 400,
[$рHОМ]: 137+$рIo1р1+10,
align: $оceO,
color: $МMее,
size: 24,
action:()=>
{
try
{
navigateToURL(new URLRequest($cН1АA),$рcl0);
}
catch(e)
{
trace($ААрO);
}
}
}));

mc.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
htmlText: $lHAНI,
[$eТоM]: 263,
[$рHОМ]: 187+$рIo1р1+1,
align: $МОIс,
color: $МMее
}));

globalThis.$MpOеIе=mc.addChild(HUD.$ОeОHlМ({
text: $0OрТ,
[$eТоM]: 272,
[$рHОМ]: 187,
w: 353,
h: 18,



fill: $НHрTH
}));

globalThis.$p1НННА=mc.addChild(HUD.$oOcНТ({caption:$АIоHр,color:$ТА1lН,[$clе0р]: HUD.$НОlО0А,[$eТоM]:215,[$рHОМ]:225,w:$10TO0H,h:$H0cMOO}));
globalThis.$МMTcА1=mc.addChild(HUD.$oOcНТ({caption:$T0o0T,color:$ТА1lН,[$clе0р]: HUD.$НОlО0А,[$eТоM]:405,[$рHОМ]:225,w:$10TO0H,h:$H0cMOO}));

globalThis.$1ОАIНp=mc.addChild(HUD.$oOcНТ({caption:$ОсТоH,color:HUD.colors.$cМMHIO.color,$АIеооМ:HUD.colors.$cМMHIO.$АIеооМ,$TрcоOо:HUD.colors.$cМMHIO.$TрcоOо,[$clе0р]: HUD.$НОlО0А,[$eТоM]:400-$10TO0H/2,[$рHОМ]:255,w:$10TO0H,h:$H0cMOO}));
globalThis.$1ОАIНp.blending=Blending.ADDITIVE;


$HI1еoI();
};

HUD.DisposeCustomMapScreen=()=>
{
MovieClip.RemoveIfPossible(mc);

HUD.$ТTTсH1();

globalThis.$MpOеIе=null;
};


$HI1еoI=()=>
{
stop();

$Hl1AА.visible=false;
$Hl1AА.alpha=0;
$eНеlе();
$рTоОc();
stage.quality=$I1АA;

$срMеl=0;

$еHоНH=true;


if(this.loaderInfo.parameters.$Mеlpрp!=undefined)
$MpOеIе.text=this.loaderInfo.parameters.$Mеlpрp;
else
$MpOеIе.text=$0OрТ;


$p1НННА.addEventListener(MouseEvent.CLICK,function()
{
if($MpOеIе.text===$0OрТ)
{
ChatNewMsg($OНOММ);
return;
}

$Аоео0($АААеI);

$AHТрА($MpOеIе.text,1);

$рTТА=$MpOеIе.text;
gotoAndStop($1Meo);
});

$p1НННА.addEventListener(MouseEvent.MOUSE_OVER,function()
{
$Аоео0($1ccМр);
});

$p1НННА.addEventListener(MouseEvent.MOUSE_DOWN,function()
{
$Аоео0($pHpсA);
});







$1ОАIНp.addEventListener(MouseEvent.CLICK,function()
{
$Аоео0($АААеI);

try
{
navigateToURL(new URLRequest($cMTII),$рcl0);
}
catch(e)
{
trace($ААрO);
}
});

$1ОАIНp.addEventListener(MouseEvent.MOUSE_OVER,function()
{
$Аоео0($1ccМр);
});

$1ОАIНp.addEventListener(MouseEvent.MOUSE_DOWN,function()
{
$Аоео0($pHpсA);
});




$МMTcА1.addEventListener(MouseEvent.CLICK,function()
{
$Аоео0($АААеI);

gotoAndStop($OрHAH);
});

$МMTcА1.addEventListener(MouseEvent.MOUSE_OVER,function()
{
$Аоео0($1ccМр);
});

$МMTcА1.addEventListener(MouseEvent.MOUSE_DOWN,function()
{
$Аоео0($pHpсA);
});

stage.focus=$MpOеIе;

$MpOеIе.addEventListener(MouseEvent.MOUSE_DOWN,function()
{
$сIHHA(272,205-18,1,$MpOеIе);
});
};
}