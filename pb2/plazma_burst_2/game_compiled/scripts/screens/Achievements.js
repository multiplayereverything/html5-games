

{
let mc=null;
let $HI1еoI=null;

HUD.CreateAchievementsScreen=()=>
{
let $AрТc1c=stage.children.indexOf(globalThis.$A1Hpe)+1;
mc=stage.addChildAt(HUD.$ОНHОеТ(library_bitmap_datas[$НM0рp]),$AрТc1c);
globalThis.$oеооМО=mc.addChild(HUD.$сO11Tе($HMТАo)).$AНOHI0;

let $Hc00ТT=7;
let $рIo1р1=7;
let $10TO0H=180;
let $H0cMOO=20;

globalThis.$ОpррTT=HUD.$сНМTpI(mc,{
[$eТоM]: 22,
[$рHОМ]: 52,
w: 735+3,
h: 296
});


globalThis.$оАeTОА=mc.addChild(HUD.$oOcНТ({caption:$TсТОp,color:$ТА1lН,[$clе0р]: HUD.$НОlО0А,[$eТоM]:17,[$рHОМ]:365,w:$10TO0H,h:$H0cMOO}));


$HI1еoI();
};

HUD.DisposeAchievementsScreen=()=>
{
MovieClip.RemoveIfPossible(mc);
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

$AMTT1=0;
var $IНН00М=new Array();
for(i=0;i<$lМlос;i++)
{






let $рIo1р1=7;

$Me1cМ=globalThis.$ОpррTT.addChild(HUD.$oOcНТ({
[$clе0р]: HUD.$сToplМ,
[$eТоM]: 0,
[$рHОМ]: 0,
w: 735,
h: 30
}));
$Me1cМ.$MН1Mp=$Me1cМ.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
htmlText: $АрМАl,
[$eТоM]: 6+5,
[$рHОМ]: 8+$рIo1р1,
align: $TcpТ,
color: $МMее,
size: 9
}));
$Me1cМ.$cТIcТ=$Me1cМ.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
htmlText: $oHTео,
[$eТоM]: 567+40,
[$рHОМ]: 8+$рIo1р1,
align: $оceO,
color: $МТpIс,
size: 9
}));
let $Н0lAТ1=$Me1cМ.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
htmlText: $I1Oсe,
[$eТоM]: 648+78/2,
[$рHОМ]: 8+$рIo1р1,
align: $оceO,
color: $НОoM,
size: 9,
bold: true
}));

$Me1cМ[$рHОМ]=32*i;

if($МНc0O[i])
{
$Me1cМ.gotoAndStop(1);
$AMTT1++;
}
else
{
if($рМ1ее[i]>0)
{
$Me1cМ.gotoAndStop(3);
$Н0lAТ1.color=$TlНp;
$Н0lAТ1.text=$Mсеcр;
}
else
{
$Me1cМ.gotoAndStop(2);
$Н0lAТ1.color=$ТcАсТ;
$Н0lAТ1.text=$НAТ0о;
}
}

$Me1cМ.$MН1Mp.text=$0lесp[i];

$Me1cМ.$cТIcТ.text=$рМ1ее[i]+$МpМHо+$MAосT[i];

$IНН00М[i]=$Me1cМ;
}

$oеооМО.text=$1Н0М1+$AMTT1+$Нcр1p+$lМlос+$рHOI;

































































































































$оАeTОА.addEventListener(MouseEvent.CLICK,function()
{
$Аоео0($АААеI);

gotoAndStop($OрHAH);
});

$оАeTОА.addEventListener(MouseEvent.MOUSE_OVER,function()
{
$Аоео0($1ccМр);
});

$оАeTОА.addEventListener(MouseEvent.MOUSE_DOWN,function()
{
$Аоео0($pHpсA);
});


























};
}