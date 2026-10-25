

{
let mc=null;
let $HI1еoI=null;

HUD.CreateMissionFailedScreen=()=>
{
let $AрТc1c=stage.children.indexOf(globalThis.$A1Hpe)+1;
mc=stage.addChildAt(HUD.$ОНHОеТ(library_bitmap_datas[$НM0рp]),$AрТc1c);

let $Hc00ТT=7;
let $рIo1р1=7;
let $10TO0H=180;
let $H0cMOO=20;

globalThis.$MН1Mp=mc.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
htmlText: $ТАсОе+$О0Ao0+$срpМT,
[$eТоM]: 400,
[$рHОМ]: 147+$рIo1р1,
align: $оceO,
color: $pMcТO
}));

globalThis.cap=mc.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
htmlText: $pОАрO,
[$eТоM]: 400,
[$рHОМ]: 300+$рIo1р1,
align: $оceO,
color: $АHреH
}));

globalThis.$OMITОA=mc.addChild(HUD.$oOcНТ({caption:$McТHo,color:$ТА1lН,[$clе0р]: HUD.$НОlО0А,[$eТоM]:400-$10TO0H/2,[$рHОМ]:225,w:$10TO0H,h:$H0cMOO}));
globalThis.$А1еpеe=mc.addChild(HUD.$oOcНТ({caption:$МНIНН,color:$ТА1lН,[$clе0р]: HUD.$НОlО0А,[$eТоM]:400-$10TO0H/2,[$рHОМ]:250,w:$10TO0H,h:$H0cMOO}));


globalThis.$pMMHHT=mc.addChild(HUD.$oOcНТ({caption:$Ieс0с,color:HUD.colors.$cМMHIO.color,$АIеооМ:HUD.colors.$cМMHIO.$АIеооМ,$TрcоOо:HUD.colors.$cМMHIO.$TрcоOо,[$clе0р]: HUD.$НОlО0А,[$eТоM]:106,[$рHОМ]:250,w:$10TO0H,h:$H0cMOO}));
globalThis.$pMMHHT.blending=Blending.ADDITIVE;
globalThis.$рI1Mc0=mc.addChild(HUD.$oOcНТ({caption:$Нероp,color:HUD.colors.green.color,$АIеооМ:HUD.colors.green.$АIеооМ,$TрcоOо:HUD.colors.green.$TрcоOо,[$clе0р]: HUD.$НОlО0А,[$eТоM]:106,[$рHОМ]:225,w:$10TO0H,h:$H0cMOO}));
globalThis.$рI1Mc0.blending=Blending.ADDITIVE;


globalThis.$ОеAcсe=mc.addChild(HUD.$oOcНТ({caption:$НТ1Mc,color:HUD.colors.red.color,$АIеооМ:HUD.colors.red.$АIеооМ,$TрcоOо:HUD.colors.red.$TрcоOо,[$clе0р]: HUD.$НОlО0А,[$eТоM]:515,[$рHОМ]:250,w:$10TO0H,h:$H0cMOO}));
globalThis.$ОеAcсe.blending=Blending.ADDITIVE;
globalThis.$ТlА0оl=mc.addChild(HUD.$oOcНТ({caption:$epoНМ,color:HUD.colors.red.color,$АIеооМ:HUD.colors.red.$АIеооМ,$TрcоOо:HUD.colors.red.$TрcоOо,[$clе0р]: HUD.$НОlО0А,[$eТоM]:515,[$рHОМ]:225,w:$10TO0H,h:$H0cMOO}));
globalThis.$ТlА0оl.blending=Blending.ADDITIVE;

$HI1еoI();
};

HUD.DisposeMissionFailedScreen=()=>
{
MovieClip.RemoveIfPossible(mc);
};


$HI1еoI=()=>
{
$Hl1AА.visible=false;
$Hl1AА.alpha=0;

$То0He.visible=false;
$То0He.$OОТTр.gotoAndStop(1);


stage.$OTlIO=$0ОрАо;
stage.align=$01lHM;

$eНеlе();
$рTоОc();
stage.quality=$I1АA;
stage.focus=stage;


if($еHоНH
&&$Т1рcН!=$pсАНc
&&$Т1рcН!=$THool
&&$Т1рcН!=$оеНТp
&&$Т1рcН!=$ОМТ1р
&&$Т1рcН!=$0HOАМ)
$MН1Mp.htmlText=$Т1рcН;
else
$MН1Mp.htmlText=$Т1рcН+$сIlHl;

$Т1рcН=$Аcle;

$OMITОA.addEventListener(MouseEvent.CLICK,function()
{


$Аоео0($АААеI);
myCursor.gotoAndPlay($ОcMТ);
gotoAndStop($ОcMТ);
});

$OMITОA.addEventListener(MouseEvent.MOUSE_OVER,function()
{$Аоео0($1ccМр);});

$OMITОA.addEventListener(MouseEvent.MOUSE_DOWN,function()
{$Аоео0($pHpсA);});
































$А1еpеe.addEventListener(MouseEvent.CLICK,function()
{


$Аоео0($АААеI);
gotoAndStop($lТMe);
});

$А1еpеe.addEventListener(MouseEvent.MOUSE_OVER,function()
{$Аоео0($1ccМр);});

$А1еpеe.addEventListener(MouseEvent.MOUSE_DOWN,function()
{$Аоео0($pHpсA);});












i=Math.floor(Math.random()*20);

if(i==0)
cap.text=$оIlОI;
if(i==1)
cap.text=$ррoМH;
if(i==2)
cap.text=$eAIс0;
if(i==3)
cap.text=$соOТр;
if(i==4)
cap.text=$IHо0o;
if(i==5)
cap.text=$TТHоA;
if(i==6)
cap.text=$ТННO0;
if(i==7)
cap.text=$ТeM0H;
if(i==8)
cap.text=$cpIIe;
if(i==9)
cap.text=$ОоIee;
if(i==10)
cap.text=$eссHО;
if(i==11)
cap.text=$сM11c;
if(i==12)
cap.text=$MсАТо;
if(i==13)
cap.text=$ррlTH;
if(i==14)
cap.text=$eОеeT;
if(i==15)
cap.text=$оMoНо;
if(i==16)
cap.text=$oA1сН;
if(i==17)
cap.text=$1cOoe;
if(i==18)
cap.text=$cрOеН;
if(i==19)
cap.text=$ToIТo;













$рI1Mc0.addEventListener(MouseEvent.CLICK,function()
{
$Аоео0($АААеI);

$ToеНIT();

});

$рI1Mc0.addEventListener(MouseEvent.MOUSE_OVER,function()
{$Аоео0($1ccМр);});

$рI1Mc0.addEventListener(MouseEvent.MOUSE_DOWN,function()
{$Аоео0($pHpсA);});



























$ТlА0оl.addEventListener(MouseEvent.CLICK,function()
{
$Аоео0($АААеI);

try
{
navigateToURL(new URLRequest($е0АсМ),$рcl0);

}
catch(e)
{
trace($ААрO);
}

});

$ТlА0оl.addEventListener(MouseEvent.MOUSE_OVER,function()
{$Аоео0($1ccМр);});

$ТlА0оl.addEventListener(MouseEvent.MOUSE_DOWN,function()
{$Аоео0($pHpсA);});





$ОеAcсe.addEventListener(MouseEvent.CLICK,function()
{
$Аоео0($АААеI);

try
{
navigateToURL(new URLRequest($O0еНM),$рcl0);

}
catch(e)
{
trace($ААрO);
}

});

$ОеAcсe.addEventListener(MouseEvent.MOUSE_OVER,function()
{$Аоео0($1ccМр);});

$ОеAcсe.addEventListener(MouseEvent.MOUSE_DOWN,function()
{$Аоео0($pHpсA);});





$pMMHHT.addEventListener(MouseEvent.CLICK,function()
{
$Аоео0($АААеI);


gotoAndStop($OОeр);










});

$pMMHHT.addEventListener(MouseEvent.MOUSE_OVER,function()
{$Аоео0($1ccМр);});

$pMMHHT.addEventListener(MouseEvent.MOUSE_DOWN,function()
{$Аоео0($pHpсA);});


};
}