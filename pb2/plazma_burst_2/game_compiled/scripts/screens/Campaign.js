


{
let mc=null;

let $HI1еoI=null;

function $HcATМН()
{
$Аоео0($АААеI);

if(LEVEL_POINTER<0)
LEVEL_POINTER=0;

if($еMОHТс)
{
if(LEVEL_POINTER>$сclpO)
LEVEL_POINTER=$сclpO;
}
else
{
if(LEVEL_POINTER>$HHolА)
LEVEL_POINTER=$HHolА;
}


if(LEVEL_POINTER<$сclpO)
{
$0eосA=true;

$lсосТ=LEVEL_POINTER;

gotoAndStop($1Meo);

}
else
{

gotoAndStop($Аo1O);
}
}
function $еeеАAp(i)
{
var mc,i2;

if(i==0)
mc=skin0;
if(i==1)
mc=skin1;













if(i==0)
{

if($рHоеН[i]>49)
$рHоеН[i]=40;
if($рHоеН[i]<40)
$рHоеН[i]=49;
}
if(i==1)
{

if($рHоеН[i]>61)
$рHоеН[i]=60;
if($рHоеН[i]<60)
$рHоеН[i]=61;
}










{
mc.gotoAndStop(1);

i2=$рHоеН[i];

mc.head.gotoAndStop(i2);

if(i==1)
i2=3;

if(i==0&&$рHоеН[i]<49)
i2=1;

mc.body.gotoAndStop(i2);
mc.$еОТТT.gotoAndStop(i2);
mc.$ooНMН.upper.gotoAndStop(i2);
mc.$ooНMН.middle.gotoAndStop(i2);
mc.$ooНMН.lower.gotoAndStop(i2);
mc.$0T1MH.upper.gotoAndStop(i2);
mc.$0T1MH.middle.gotoAndStop(i2);
mc.$0T1MH.lower.gotoAndStop(i2);
mc.$АсIее.upper.gotoAndStop(i2);
mc.$АсIее.lower.gotoAndStop(i2);
mc.$ТНpТI.upper.gotoAndStop(i2);
mc.$ТНpТI.lower.gotoAndStop(i2);

if(skin_color_head[i]>=$ММТp1.length)
skin_color_head[i]=0;
if(skin_color_head[i]<0)
skin_color_head[i]=$ММТp1.length-1;

if(skin_color_body[i]>=$ММТp1.length)
skin_color_body[i]=0;
if(skin_color_body[i]<0)
skin_color_body[i]=$ММТp1.length-1;

if(skin_color_arms[i]>=$ММТp1.length)
skin_color_arms[i]=0;
if(skin_color_arms[i]<0)
skin_color_arms[i]=$ММТp1.length-1;

if(skin_color_legs[i]>=$ММТp1.length)
skin_color_legs[i]=0;
if(skin_color_legs[i]<0)
skin_color_legs[i]=$ММТp1.length-1;


mc.head.filters=new Array($ММТp1[skin_color_head[i]]);
mc.body.filters=new Array($ММТp1[skin_color_body[i]]);
mc.$АсIее.lower.filters=new Array($ММТp1[skin_color_arms[i]]);
mc.$ТНpТI.lower.filters=new Array($ММТp1[skin_color_arms[i]]);
mc.$ooНMН.upper.filters=new Array($ММТp1[skin_color_legs[i]]);
mc.$ooНMН.middle.filters=new Array($ММТp1[skin_color_legs[i]]);
mc.$ooНMН.lower.filters=new Array($ММТp1[skin_color_legs[i]]);
mc.$0T1MH.upper.filters=new Array($ММТp1[skin_color_legs[i]]);
mc.$0T1MH.middle.filters=new Array($ММТp1[skin_color_legs[i]]);
mc.$0T1MH.lower.filters=new Array($ММТp1[skin_color_legs[i]]);
mc.$еОТТT.filters=new Array($ММТp1[skin_color_legs[i]]);



mc.$АсIее.upper.filters=new Array($ММТp1[skin_color_arms[i]]);
mc.$ТНpТI.upper.filters=new Array($ММТp1[skin_color_arms[i]]);

}

}
function $oсОАрp(i)
{
skin_color_head[i]=0;
skin_color_body[i]=0;
skin_color_arms[i]=0;
skin_color_legs[i]=0;
}

HUD.CreateCampaignScreen=()=>
{
let $AрТc1c=stage.children.indexOf(globalThis.$A1Hpe)+1;
mc=stage.addChildAt(HUD.$ОНHОеТ(library_bitmap_datas[$НM0рp]),$AрТc1c);
mc.addChild(HUD.$сO11Tе($ТTccН));










let $Hc00ТT=7;
let $рIo1р1=7;
let $10TO0H=180;
let $H0cMOO=20;

mc.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
htmlText: $ММoTT,
[$eТоM]: 30+$Hc00ТT,
[$рHОМ]: 53+$рIo1р1
}));

let $AlрM1Н=mc.addChild(new MovieClip());
$AlрM1Н[$eТоM]=30;
$AlрM1Н[$рHОМ]=75;
{
let $0lIl0А=[];
let $HОpcl=0;
let $llМTO=0;


for(let i=0;i<$сclpO;i++)
{






let $АIеооМ=null;
let $TрcоOо=null;
let $о0lрpО=$0OрТ;


if(i>=29&&i<=35)
{

$о0lрpО=$0MHcс;
$АIеооМ=[$еMТlМ,$IcOlО,$ecеp0];
$TрcоOо=[$сАATo,$АрlНe,$АрlНe];
}
else
if(i>35&&i<=40)
{

$о0lрpО=$0cТcр;
$АIеооМ=[$еMТlМ,$0оclO,$HАeTМ];
$TрcоOо=[$0o0IМ,$AloоM,$AloоM];
}
else
if(i==41)
{

$о0lрpО=$MpoOp;
$АIеооМ=[$еMТlМ,$TOeрА,$Op0Mс];
$TрcоOо=[$ТOАAT,$lp1pо,$lp1pо];
}
else
if(i>=13&&i<=17)
{

$о0lрpО=$ТсlMe;
$АIеооМ=[$еMТlМ,$TО1Мl,$МIНII];
$TрcоOо=[$oHеМT,$eеНTA,$eеНTA];
}
else
{

$о0lрpО=$ТА1lН;
$АIеооМ=[$еMТlМ,$АеHее,$оTМpо];
$TрcоOо=[$сАpoI,$TcHOl,$TcHOl];
}

let $0IОррc=(i<=$HHolА||$еMОHТс);


if(!$0IОррc)
{
$АIеооМ[1]=$АIеооМ[2]=$АIеооМ[0];
$TрcоOо[1]=$TрcоOо[2]=$TрcоOо[0];
}

let $еоepI=i;

$0lIl0А[i]=$AlрM1Н.addChild(HUD.$oOcНТ({caption:(i+1)+$0OрТ,size:10,color:$о0lрpО,$АIеооМ:$АIеооМ,$TрcоOо:$TрcоOо,
[$clе0р]: HUD.$НОlО0А,[$eТоM]:0,[$рHОМ]:0,w:25,h:25,action:$0IОррc ?()=>
{
if($cМТpТо.visible)
return;

$lсосТ=$еоepI;

$Аоео0($АААеI);

if(i===$HHolА)
$0eосA=true;

gotoAndStop($1Meo);
} : null
}));

$0lIl0А[i].blending=Blending.ADDITIVE;


$0lIl0А[i][$eТоM]=$HОpcl;
$0lIl0А[i][$рHОМ]=$llМTO;







if($0IОррc)
$0lIl0А[i].alpha=1;
else
$0lIl0А[i].alpha=0.5-Math.max(0,i-$HHolА-5)*0.1;

$HОpcl+=35;
if($HОpcl>730)
{
$HОpcl=0;
$llМTO+=35;
}
}
}

mc.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
htmlText: $MMОрМ,
[$eТоM]: 30+$Hc00ТT,
[$рHОМ]: 174+$рIo1р1
}));

mc.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
htmlText: $MОoоp,
[$eТоM]: 203+$Hc00ТT,
[$рHОМ]: 366+1+$рIo1р1,
color: $НHрTH
}));
globalThis.$рITO0с=mc.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
htmlText: $сННТM,
[$eТоM]: 272+102-5,
[$рHОМ]: 366+1+$рIo1р1,
color: $ОеHMМ,
align: $МОIс
}));



function $eАeрe1(id,x,y)
{
let $1рсoрe=mc.addChild(new MovieClip());
$1рсoрe[$eТоM]=x;
$1рсoрe[$рHОМ]=y;

function $MсрТMT(mc,x,y,rotation)
{
mc[$eТоM]=x;
mc[$рHОМ]=y;
mc.rotation=rotation;
}

let skin=$1рсoрe.addChild(new player());
globalThis[$0рpОМ+id]=skin;
skin.scaleX=skin.scaleY=1.5;
skin.gui.remove();
$MсрТMT(skin.body,-0.7,1.5,0);
$MсрТMT(skin.head,-1.7,-27.85,0);
$MсрТMT(skin.$АсIее.upper,-2.2,-20.55,-14.5);
$MсрТMT(skin.$АсIее.lower,-2.65,-5.35,-14.5);
$MсрТMT(skin.$ТНpТI.upper,0.55,-20.3,-19.9);
$MсрТMT(skin.$ТНpТI.lower,2.6,-5.25,-18.6);
$MсрТMT(skin.$еОТТT,-1.3,-0.2,0);
skin.$еОТТT.$оМMIМA.remove();
$MсрТMT(skin.$ooНMН.upper,-1,1.1,8.5);
$MсрТMT(skin.$ooНMН.middle,-0.55,15.75,6.3);
$MсрТMT(skin.$ooНMН.lower,-5.05,33.35,0);
$MсрТMT(skin.$0T1MH.upper,0.4,0.65,-9.7);
$MсрТMT(skin.$0T1MH.middle,5.55,14.3,-11.9);
$MсрТMT(skin.$0T1MH.lower,6.9,33.2,-3.2);

globalThis[$IcсМТ+id]=$1рсoрe.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
htmlText: $АОpIM,
[$eТоM]: 0,
[$рHОМ]: 334+$рIo1р1-266,
color: $МMее,
align: $оceO
}));

let $HОpcl=189+$Hc00ТT+106/2-97-7;
let $llМTO=206+$рIo1р1-266+1;

let i=0;

let $ОTННII=[
$Т0eTO,
$МТpO0,
$l1OеА,
$IТAНe,
$НcОНМ
];
let $МАМlpТ=[
`$oITOo();$рHоеН[${id}]++;if($рHоеН[${id}]==5)$рHоеН[${id}]++;$oсОАрp(${id});`,
`$oITOo();skin_color_head[${id}]++;`,
`$oITOo();skin_color_body[${id}]++;`,
`$oITOo();skin_color_arms[${id}]++;`,
`$oITOo();skin_color_legs[${id}]++;`
];

for(let i=0;i<$ОTННII.length;i++)
{
let $1TТOoр=(i===0)? 55 : 50;

let $еоepI=i;

let l=$1рсoрe.addChild(HUD.$oOcНТ({[$clе0р]: HUD.$1OMАНp,[$eТоM]:$HОpcl-$1TТOoр,[$рHОМ]:$llМTO+(i)*21,action:()=>{eval($МАМlpТ[$еоepI].split($МррOp).join($оTорp));$еeеАAp(id);} }));
let r=$1рсoрe.addChild(HUD.$oOcНТ({[$clе0р]: HUD.$TTTНMM,[$eТоM]:$HОpcl+$1TТOoр,[$рHОМ]:$llМTO+(i)*21,action:()=>{eval($МАМlpТ[$еоepI]);$еeеАAp(id);} }));

if(i>0)
{
l.alpha=0.45;
r.alpha=0.45;
}

$1рсoрe.addChild(HUD.$ТHA0H({[$clе0р]:HUD.$cММIсО,htmlText:$ОTННII[i],[$eТоM]:$HОpcl,[$рHОМ]:$llМTO+(i)*21,color:$МMее,align:$оceO}));
}



$1рсoрe.addChild(HUD.$oOcНТ({caption:$Acр1p,color:$ТА1lН,[$clе0р]: HUD.$НОlО0А,[$eТоM]:152-97,[$рHОМ]:311-266,w:$10TO0H,h:$H0cMOO,action:()=>{

if($cМТpТо.visible)
return;

$Аоео0($АААеI);

$IеOАT();
gotoAndStop((id===0)? $oрOTс : $М1OТА);
} }));


$еeеАAp(id);
}

$eАeрe1(0,97,266);

if($HHolА>=30)
$eАeрe1(1,486,266);

globalThis.$MOрНHc=mc.addChild(HUD.$oOcНТ({caption:$T0o0T,color:$ТА1lН,[$clе0р]: HUD.$НОlО0А,[$eТоM]:17,[$рHОМ]:365,w:$10TO0H,h:$H0cMOO,action:()=>{

if($cМТpТо.visible)
return;

$Аоео0($АААеI);

$IеOАT();
gotoAndStop($lТMe);
} }));
mc.addChild(HUD.$oOcНТ({caption:$Ieс0с,color:$ТА1lН,[$clе0р]: HUD.$НОlО0А,[$eТоM]:413,[$рHОМ]:365,w:$10TO0H,h:$H0cMOO,action:()=>{
if($cМТpТо.visible)
return;

$Аоео0($АААеI);

$IеOАT();
gotoAndStop($OОeр);
} }));
mc.addChild(HUD.$oOcНТ({caption:$ОМрpо,color:$ТА1lН,[$clе0р]: HUD.$НОlО0А,[$eТоM]:605,[$рHОМ]:365,w:$10TO0H,h:$H0cMOO,action:()=>{
if($cМТpТо.visible)
return;

$IеOАT();
$HcATМН();
} }));
mc.addChild(HUD.$oOcНТ({caption:$HMТАo,color:$ТА1lН,[$clе0р]: HUD.$НОlО0А,[$eТоM]:605,[$рHОМ]:143,w:$10TO0H,h:$H0cMOO,action:()=>{
if($cМТpТо.visible)
return;

$Аоео0($АААеI);

$IеOАT();
gotoAndStop($о0ТHo);
} }));




globalThis.$cМТpТо=mc.addChild(HUD.$ОНHОеТ(library_bitmap_datas[$НM0рp]));
{







globalThis.$cМТpТо.$MН1Mp=globalThis.$cМТpТо.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
htmlText: $MlOМр,
[$eТоM]: 400,
[$рHОМ]: 46+$рIo1р1,
align: $оceO,
color: $pMcТO
}));

let $1coНрр=
[
$HсcOl,
$leНор,
$сHеAА,
$ТHO1о,
$МАH1р,
$HHM1H,
$еl0pM,
$НOоAр
];

globalThis.$cМТpТо.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
htmlText: $1coНрр.join($МTНHе)+$lМе1,
[$eТоM]: 400,
[$рHОМ]: 78+$рIo1р1,
align: $МОIс,
color: $АHреH
}));

globalThis.$cМТpТо.$OIO0АТ=globalThis.$cМТpТо.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
htmlText: $еоpAе,
[$eТоM]: 410,
[$рHОМ]: 78+$рIo1р1,
align: $TcpТ,
color: $МMее
}));

let $M1HТТI=10;

globalThis.$cМТpТо.$HHlрTр=globalThis.$cМТpТо.addChild(HUD.$oOcНТ({caption:$eАОTе,color:$ТА1lН,[$clе0р]: HUD.$НОlО0А,[$eТоM]:310,[$рHОМ]:302+$M1HТТI,w:$10TO0H,h:$H0cMOO}));
globalThis.$cМТpТо.$А1еpеe=globalThis.$cМТpТо.addChild(HUD.$oOcНТ({caption:$МНIНН,color:$ТА1lН,[$clе0р]: HUD.$НОlО0А,[$eТоM]:310,[$рHОМ]:328+$M1HТТI,w:$10TO0H,h:$H0cMOO}));

globalThis.$cМТpТо.$1lO0MI=globalThis.$cМТpТо.addChild(HUD.$oOcНТ({caption:$MM0MА,color:HUD.colors.$cМMHIO.color,$АIеооМ:HUD.colors.$cМMHIO.$АIеооМ,$TрcоOо:HUD.colors.$cМMHIO.$TрcоOо,[$clе0р]: HUD.$НОlО0А,[$eТоM]:104,[$рHОМ]:328+$M1HТТI,w:$10TO0H,h:$H0cMOO}));
globalThis.$cМТpТо.$1lO0MI.blending=Blending.ADDITIVE;
globalThis.$cМТpТо.$еАНAMT=globalThis.$cМТpТо.addChild(HUD.$oOcНТ({caption:$Нероp,color:HUD.colors.green.color,$АIеооМ:HUD.colors.green.$АIеооМ,$TрcоOо:HUD.colors.green.$TрcоOо,[$clе0р]: HUD.$НОlО0А,[$eТоM]:517,[$рHОМ]:328+$M1HТТI,w:$10TO0H,h:$H0cMOO}));
globalThis.$cМТpТо.$еАНAMT.blending=Blending.ADDITIVE;
}



$HI1еoI();



};
HUD.DisposeCampaignScreen=()=>
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

$еHоНH=false;

$pMМ1=false;
$00pеH=false;

$М1оAО=$poесT;

if($срMеl<3)
$cМТpТо.visible=false;
else
{


$HОpcl=Math.ceil($срMеl/30);


str=String($HОpcl-Math.floor($HОpcl/60)*60);
if($HОpcl-Math.floor($HОpcl/60)*60<10)
str=$ТlМe+str;

str=String(Math.floor($HОpcl/60)-Math.floor($HОpcl/60/60)*60)+$0HAТО+str;

if(Math.floor($HОpcl/60)-Math.floor($HОpcl/60/60)*60<10)
str=$ТlМe+str;

str=String(Math.floor($HОpcl/60/60))+$0HAТО+str;

let htmlText=str+$MTeOl;
htmlText=str+$MTeOl;
htmlText+=$Мe00о+$MTeOl;
htmlText+=$р0ТoI+$MTeOl;
htmlText+=Math.round($I0рce)+$MTeOl;
htmlText+=Math.round($АTсре)+$MTeOl;
htmlText+=$ТH0Tе+$MTeOl;
if($ТH0Tе==0)
htmlText+=$сMT0e;
else
htmlText+=Math.round($poTMc/$ТH0Tе*1000)/10+$ТАelI;


$AMTT1=0;

if($ТH0Tе<1||$I0рce<1||$Мe00о<1)
$AMTT1+=300;

if($ТH0Tе<1)
$ТH0Tе=1;

if($I0рce<1)
$I0рce=1;


$AMTT1+=Math.ceil(($Мe00о*8+$р0ТoI)+($АTсре/$I0рce)*80);

if($AMTT1>500)
$AMTT1=500;

if(!$0eосA)
$AMTT1=0;



htmlText+=$сcAOО+$AMTT1+$lсcе;

if($0eосA)
$IеOАT();
else
htmlText+=$OcОlH;

$cМТpТо.$OIO0АТ.htmlText=htmlText;

$cМТpТо.$MН1Mp.text=$рHeОO+$lсосТ+$pАpОo;
}


$0eосA=false;








































































char0.text=$1еT1Н;

if(globalThis.char1)
char1.text=$0АIcc.toUpperCase();

$IlMНM=false;




































































































































































$рITO0с.text=$еcоеl+$cррсО;









$cМТpТо.$HHlрTр.addEventListener(MouseEvent.CLICK,function()
{
$Аоео0($АААеI);
$IеOАT();
$cМТpТо.visible=false;
});
$cМТpТо.$HHlрTр.addEventListener(MouseEvent.MOUSE_OVER,function()
{$Аоео0($1ccМр);});

$cМТpТо.$HHlрTр.addEventListener(MouseEvent.MOUSE_DOWN,function()
{$Аоео0($pHpсA);});


$cМТpТо.$А1еpеe.addEventListener(MouseEvent.CLICK,function()
{
$Аоео0($АААеI);


gotoAndStop($lТMe);
});
$cМТpТо.$А1еpеe.addEventListener(MouseEvent.MOUSE_OVER,function()
{$Аоео0($1ccМр);});

$cМТpТо.$А1еpеe.addEventListener(MouseEvent.MOUSE_DOWN,function()
{$Аоео0($pHpсA);});






































































































$cМТpТо.$1lO0MI.addEventListener(MouseEvent.CLICK,function()
{
$Аоео0($АААеI);


gotoAndStop($OОeр);

});
$cМТpТо.$1lO0MI.addEventListener(MouseEvent.MOUSE_OVER,function()
{$Аоео0($1ccМр);});

$cМТpТо.$1lO0MI.addEventListener(MouseEvent.MOUSE_DOWN,function()
{$Аоео0($pHpсA);});







$cМТpТо.$еАНAMT.addEventListener(MouseEvent.CLICK,function()
{
$Аоео0($АААеI);


$ToеНIT();

});
$cМТpТо.$еАНAMT.addEventListener(MouseEvent.MOUSE_OVER,function()
{$Аоео0($1ccМр);});

$cМТpТо.$еАНAMT.addEventListener(MouseEvent.MOUSE_DOWN,function()
{$Аоео0($pHpсA);});


























$IеOАT();
};
}