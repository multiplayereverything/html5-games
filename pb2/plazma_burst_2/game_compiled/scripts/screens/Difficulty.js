

{
let mc=null;
let $HI1еoI=null;

HUD.CreateDifficultyScreen=()=>
{
let $AрТc1c=stage.children.indexOf(globalThis.$A1Hpe)+1;
mc=stage.addChildAt(HUD.$ОНHОеТ(library_bitmap_datas[$НM0рp]),$AрТc1c);
mc.addChild(HUD.$сO11Tе($eМHTе));

let $Hc00ТT=7;
let $рIo1р1=7;
let $10TO0H=180;
let $H0cMOO=20;

globalThis.$сHHОНA=mc.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
htmlText: $lIeее,
[$eТоM]: 400,
[$рHОМ]: 62+$рIo1р1,
align: $оceO,
color: $OМОOН
}));

globalThis.$cpIlTA=mc.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
htmlText: $0OрТ,
[$eТоM]: 400,
[$рHОМ]: 94+$рIo1р1,
align: $оceO,
color: $АHреH
}));

globalThis.$oMАOО1=mc.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
htmlText: $TроOl,
[$eТоM]: 400,
[$рHОМ]: 311+$рIo1р1,
align: $оceO,
color: $НHрTH
}));

globalThis.$еТННО1=mc.addChild(HUD.$oOcНТ({caption:$TоTAT,color:$o0сТO,[$clе0р]: HUD.$НОlО0А,[$eТоM]:400-$10TO0H/2,[$рHОМ]:150,w:$10TO0H,h:$H0cMOO}));
globalThis.$cpМНeо=mc.addChild(HUD.$oOcНТ({caption:$Те1ОH,color:$OpеIe,[$clе0р]: HUD.$НОlО0А,[$eТоM]:400-$10TO0H/2,[$рHОМ]:180,w:$10TO0H,h:$H0cMOO}));
globalThis.$АTсMМ0=mc.addChild(HUD.$oOcНТ({caption:$1ОoOl,color:$ТА1lН,[$clе0р]: HUD.$НОlО0А,[$eТоM]:400-$10TO0H/2,[$рHОМ]:210,w:$10TO0H,h:$H0cMOO}));
globalThis.$MlОО1Т=mc.addChild(HUD.$oOcНТ({caption:$еMoоo,color:$TрHIО,[$clе0р]: HUD.$НОlО0А,[$eТоM]:400-$10TO0H/2,[$рHОМ]:240,w:$10TO0H,h:$H0cMOO}));


globalThis.$НMHTlО=mc.addChild(HUD.$oOcНТ({caption:$T0o0T,color:$ТА1lН,[$clе0р]: HUD.$НОlО0А,[$eТоM]:17,[$рHОМ]:365,w:$10TO0H,h:$H0cMOO,action:()=>{
$Аоео0($АААеI);
gotoAndStop($OрHAH);
} }));


$HI1еoI();
};

HUD.DisposeDifficultyScreen=()=>
{
MovieClip.RemoveIfPossible(mc);
};


$HI1еoI=()=>
{

if($lсосТ>=0)
LEVEL_POINTER=$lсосТ;


stop();

$Hl1AА.visible=false;
$Hl1AА.alpha=0;
$eНеlе();
$рTоОc();
stage.quality=$I1АA;
stage.focus=stage;

$срMеl=0;

$00pеH=false;

if($еHоНH)
{
$сHHОНA.htmlText=$ОTрНA+$рTТА;

}
else
{
$сHHОНA.htmlText=$oecOl+($lсосТ+1);

}



var $0HHс00=true;
















$oMАOО1.htmlText=$осMH0+(LOW_HPS ? $IНOАc :($НOIHo ? $AрHеc :($OАМАO ? $eHAрО : $ОoTНl)))+$AHlTM;

$еТННО1.addEventListener(MouseEvent.CLICK,function()
{
if($0HHс00)
{

$0HHс00=false;
}
$Аоео0($АААеI);
$НOIHo=false;
$OАМАO=true;
LOW_HPS=true;
if($еHоНH)
{
$pМTроO=0;
$TO1eH($рTТА);
}
else
{
$IеOАT();

$pМTроO=0;
$TO1eH($НlAТ+$lсосТ+$I0рАI);
}
});
$еТННО1.addEventListener(MouseEvent.MOUSE_OVER,function()
{$Аоео0($1ccМр);$cpIlTA.htmlText=$AМсОН;});

$еТННО1.addEventListener(MouseEvent.MOUSE_DOWN,function()
{$Аоео0($pHpсA);});

$еТННО1.addEventListener(MouseEvent.MOUSE_OUT,function()
{if(currentLabel==$1Meo)$cpIlTA.htmlText=$Аcle});

$cpМНeо.addEventListener(MouseEvent.CLICK,function()
{
if($0HHс00)
{

$0HHс00=false;
}
$Аоео0($АААеI);
$НOIHo=false;
$OАМАO=true;
LOW_HPS=false;
if($еHоНH)
{
$pМTроO=0;
$TO1eH($рTТА);
}
else
{
$IеOАT();

$pМTроO=0;
$TO1eH($НlAТ+$lсосТ+$I0рАI);
}
});
$cpМНeо.addEventListener(MouseEvent.MOUSE_OVER,function()
{$Аоео0($1ccМр);$cpIlTA.htmlText=$оT1pl+$М1сТН+$pOpОН+$М1сТН+$THocТ;});

$cpМНeо.addEventListener(MouseEvent.MOUSE_DOWN,function()
{$Аоео0($pHpсA);});

$cpМНeо.addEventListener(MouseEvent.MOUSE_OUT,function()
{if(currentLabel==$1Meo)$cpIlTA.htmlText=$Аcle});



$АTсMМ0.addEventListener(MouseEvent.CLICK,function()
{
if($0HHс00)
{

$0HHс00=false;
}
$Аоео0($АААеI);
$НOIHo=false;
$OАМАO=false;
LOW_HPS=false;
if($еHоНH)
{
$pМTроO=0;
$TO1eH($рTТА);
}
else
{
$IеOАT();

$pМTроO=0;
$TO1eH($НlAТ+$lсосТ+$I0рАI);
}
});
$АTсMМ0.addEventListener(MouseEvent.MOUSE_OVER,function()
{$Аоео0($1ccМр);$cpIlTA.htmlText=$l1оlT+$М1сТН+$НcсHА;});

$АTсMМ0.addEventListener(MouseEvent.MOUSE_DOWN,function()
{$Аоео0($pHpсA);});

$АTсMМ0.addEventListener(MouseEvent.MOUSE_OUT,function()
{if(currentLabel==$1Meo)$cpIlTA.htmlText=$Аcle});



$MlОО1Т.addEventListener(MouseEvent.CLICK,function()
{
if($0HHс00)
{

$0HHс00=false;
}
$Аоео0($АААеI);
$НOIHo=true;
$OАМАO=false;
LOW_HPS=false;
if($еHоНH)
{
$pМTроO=0;
$TO1eH($рTТА);
}
else
{
$IеOАT();

$pМTроO=0;
$TO1eH($НlAТ+$lсосТ+$I0рАI);
}
});
$MlОО1Т.addEventListener(MouseEvent.MOUSE_OVER,function()
{$Аоео0($1ccМр);$cpIlTA.htmlText=$MIIlc+$М1сТН+$lОMOO;});

$MlОО1Т.addEventListener(MouseEvent.MOUSE_DOWN,function()
{$Аоео0($pHpсA);});

$MlОО1Т.addEventListener(MouseEvent.MOUSE_OUT,function()
{if(currentLabel==$1Meo)$cpIlTA.htmlText=$Аcle});





















































}
}