


{
let mc=null;

let $ММрес0;
{
$ММрес0=[

$сIорc,
$cеHAI,
$оolc0,
$оolc0,
$00cOН,
$ТеOp0,
$оolc0,
$O1Olp,
$А0Hрl,
$оolc0,
$1НеIТ,
$МAOIl,
$оolc0,
$OM0То,
$с1рН0,
$оolc0,
$МН0Tl,
$ТAАТe,
$оolc0,
$MOсTH,
$оolc0,
$сIAMH,
$оolc0,
$оolc0,
$cреcp,
$lМoAА,
$оolc0,
$сMеое,
$рАМpо,
$оolc0,
$оolc0,
$AМAAO,
$cеHAI,
$оolc0,
$1НoHO,
$рOHoТ,
$оolc0,
$оolc0,
$TeH1о,
$IМMIA,
$оolc0,
$lOMTT,
$оolc0,
$HIТpH,
$MМр1o,
$оolc0,
$oolpH,
$оolc0,
$oIОТ0,
$сOАHс,
$оolc0,
$сMcTТ,
$AAHО0,
$0pАlе,
$оolc0,
$HсeОТ,
$оolc0,
$0pНeр,
$ОeМTA,
$оolc0,
$cсТоA,
$с0pOH,
$оolc0,
$рOoIe,
$оolc0,
$1МMcе,
$HТlTс,
$оolc0,
$сp0Тl,
$оolc0,
$Н1pАA,
$оolc0,
$рcAOс,
$ОрTOM,
$оolc0,
$oMoОО,
$lТT1A,
$HрНеН,
$оolc0,
$Н1р0Т,
$оolc0,
$0НсHe,
$IМе1с,
$оolc0,
$ое1ОT,
$оolc0,
$ОТOTl,
$оolc0,
$оolc0,
$eММОI,
$оolc0,
$рcpOо,
$оolc0,
$НсОоА,
$оolc0,
$сОHоА,
$оolc0,
$oООоo,
$оolc0,
$Аl0ое,


$оolc0,
$оolc0,
$1M0lН,
$cеHAI,
$оolc0,
$0pНeр,
$ОeМTA,
$оolc0,
$ОOсec,
$оolc0,
$оolc0,
$ОHНAM,
$cНМeА,
$IАМlI,
$оolc0,
$1сpрА,
$HсHcс,
$НсOeo,
$оolc0,
$ol0оО,
$ОсНo1,
$c0eoe,
$оolc0,
$оolc0,
$lОOeH,
$МоОHH,
$оolc0,
$lOe1е,
$есMMp,
$оolc0,
$p0pоc,
$есMMp,
$оolc0,
$оolc0,
$оАоTc,
$оolc0,
$АoTcc,
$оolc0,
$Ilc00,
$cеHAI,
$оolc0,
$оolc0,
$АMТеM,
$оolc0,
$оolc0,
$OррАp,
$cеHAI

];
}

let $рpOНоl;
{
$рpOНоl=
[
$I1ТМО,
$10еcM,
$0OрТ,
$0OрТ,
$1НcIо,
$eTT1О,
$0OрТ,
$0OрТ,
$О1АO1,
$ТОccc
];
}

HUD.CreateCreditsScreen=()=>
{
let $AрТc1c=stage.children.indexOf(globalThis.$A1Hpe)+1;

mc=stage.addChildAt(HUD.$ОНHОеТ(library_bitmap_datas[$НM0рp]),$AрТc1c);




let $ОМТoMO=mc.addChild(new MovieClip());
$ОМТoMO[$рHОМ]=380;

let logo=$ОМТoMO.addChild(HUD.$ОНHОеТ(library_bitmap_datas[$pрМTр]));
logo[$eТоM]=400;
logo[$рHОМ]=0;
logo.scaleX=logo.scaleY=288/611;

logo[$eТоM]-=~~(735*logo.scaleX/2);

let offset=~~(171*logo.scaleY)+30;

let $HОoА11=0;

let $А1ТТАT=false;

for(let i=0;i<$ММрес0.length;i++)
{
let line=$ММрес0[i];

let $cpр0Ae=$0OрТ;
let $H1OA1O=$0OрТ;

let $ATelAM=line.split($O1pН);

if($ATelAM.length===2)
{
$cpр0Ae=$ATelAM[0].trim();
$H1OA1O=$ATelAM[1].trim();
}
else
8;

if($cpр0Ae.length>0)
$ОМТoMO.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
text: $cpр0Ae,
[$eТоM]: 400-5,
[$рHОМ]: offset,
align: $МОIс,
color:($cpр0Ae.charAt($cpр0Ae.length-1)===$lМе1)? $АHреH : $НHрTH,
size: 12,
hit_test_area_grow: 20
}));

if($H1OA1O.length>0)
{
let link=null;

for(let tag=0;tag<2;tag++)
{
let tag_name=(tag===0)? $НTIсe : $АсOоН;
let $р0eеp1=(tag===0)? $ОеHMМ : $cTМMА;

let $lеcАHТ=$ОеОO1+tag_name+$MТIОH;
let $HTТIII=$МTcМT+tag_name+$MТIОH;

let $АHНТНc=$H1OA1O.indexOf($lеcАHТ);

if($АHНТНc!==-1)
{
let $HсОoТТ=$H1OA1O.indexOf($HTТIII);

if($HсОoТТ!==-1)
$H1OA1O=$H1OA1O.split($HTТIII).join($cIMO);
else
{
$HсОoТТ=$H1OA1O.length;
$H1OA1O+=$cIMO;
}

link=$H1OA1O.substring($АHНТНc+$lеcАHТ.length,$HсОoТТ);

$H1OA1O=$H1OA1O.split($lеcАHТ).join($Oеср+$р0eеp1+$lМeo);

if(tag===0)
{
if(link.indexOf($сeАМI)===-1)
if(link.indexOf($рIOНA)===-1)
if(link.indexOf($ОcMMl)===-1)
if(link.indexOf($оНо0o)===-1)
link=$оНо0o+link;

if(link.indexOf($ОоlIе)===-1)
link=$lроТ+link;
}
else
{
link=$lоcМс+link;
}
}
}

let $OMOIeO=$ОМТoMO.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
htmlText: $H1OA1O,
[$eТоM]: 400+5,
[$рHОМ]: offset,
align: $TcpТ,
color:($А1ТТАT)? $оМT1е : $МMее,
size: 12,
hit_test_area_grow: link ? 20 : 0,
action: link ?(()=>
{
let t=Date.now();

if(t<$HОoА11+32)
return;

if(MovieClip.current_hover!==$OMOIeO)
return;

$HОoА11=t;

try
{
navigateToURL(new URLRequest(link),$рcl0);
}
catch(e)
{
trace($ААрO);
}
}): null
}));

$А1ТТАT=(link===null);
}
else
{
$А1ТТАT=false;
}

offset+=12;
}

offset+=200;

for(let i=0;i<$рpOНоl.length;i++)
{
let line=$рpOНоl[i];

let link=null;

let size=12;
let type=HUD.$cММIсО;

let $ATelAM=line.split($O1pН);
if($ATelAM.length>1)
{
line=$ATelAM[1];
link=$ATelAM[0];

size=28;
type=HUD.$AA0HрH;
}

let $OMOIeO=$ОМТoMO.addChild(HUD.$ТHA0H({
[$clе0р]: type,
text: line,
[$eТоM]: 400+5,
[$рHОМ]: offset+size/2,
align: $оceO,
color:(link)? $МMее : $АHреH,
size: size,
hit_test_area_grow: link ? 20 : 0,
action: link ?(()=>
{
let t=Date.now();

if(t<$HОoА11+32)
return;

if($OMOIeO!==MovieClip.current_hover)
return;

$HОoА11=t;

try
{
navigateToURL(new URLRequest(link),$рcl0);
}
catch(e)
{
trace($ААрO);
}
}): null
}));

offset+=size;
}

offset+=20;

let $cН1eМc=()=>
{
$lсосТ=LEVEL_POINTER=41;
$TO1eH($OIATА);
};

let $10TO0H=246;
let $H0cMOO=20;

if($MоTl0)
$ОМТoMO.addChild(HUD.$oOcНТ({caption:$H1oсе,color:$ТА1lН,[$clе0р]: HUD.$НОlО0А,[$eТоM]:400-$10TO0H/2,[$рHОМ]:offset,w:$10TO0H,h:$H0cMOO,action:()=>{

$cН1eМc();

} }));

globalThis.$оНОТAH=()=>
{
if($MоTl0)
{
$cН1eМc();
}
else
{
gotoAndStop($НIlр);
}
};

globalThis.$cIНoО1=mc.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
text: $TcАOI,
[$eТоM]: 800-10,
[$рHОМ]: 400-15,
align: $МОIс,
color: $AМTА1,
size: 8,
hit_test_area_grow: 40,
action: globalThis.$оНОТAH
}));


let $oроТHM=-offset+260;
let $OpТ0рТ=388.8;

let $AA00HА=0;
let $IAMеM1=0;

let $0НсHее=true;

let $ееeМp=Date.now();
let $AНТрcp=null;

function $АссАрT(e)
{
if(currentFrameLabel!==$М1ceo)
8;

let t=Date.now();
let dt=(t-$ееeМp)/32;
$ееeМp=t;

if($0НсHее)
{

$AA00HА-=dt;

if($AA00HА<=0)
{
if(JSAudio.isPageVisible)
if($ОМТoMO[$рHОМ]>$oроТHM)
{

$ОМТoMO[$рHОМ]-=0.5*dt;

if($ОМТoMO[$рHОМ]<$oроТHM)
$ОМТoMO[$рHОМ]=$oроТHM;

$IAMеM1=$ОМТoMO[$рHОМ];
}
}
else

$ОМТoMO[$рHОМ]=$TTМсcН($ОМТoMO[$рHОМ],$IAMеM1,0.7,dt);
}

if($AНТрcp)
if($AНТрcp instanceof TextField)
$AНТрcp.alpha=1;

if(MovieClip.current_hover)
if(MovieClip.current_hover instanceof TextField)
MovieClip.current_hover.alpha=0.5;

$AНТрcp=MovieClip.current_hover;
}


mc.addEventListener(Event.ENTER_FRAME,$АссАрT);

mc.addEventListener(MouseEvent.MOUSE_WHEEL,$llOТe1);
function $llOТe1(e)
{
if(currentFrameLabel!==$М1ceo)
8;


$IAMеM1+=e.wheelDelta;

if($IAMеM1<$oроТHM)
$IAMеM1=$oроТHM;

if($IAMеM1>$OpТ0рТ)
$IAMеM1=$OpТ0рТ;

$AA00HА=30;

}

$eНеlе();
$рTоОc();
};
HUD.DisposeCreditsScreen=()=>
{
MovieClip.RemoveIfPossible(mc);
};
}