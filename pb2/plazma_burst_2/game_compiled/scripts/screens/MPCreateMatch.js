

{
let mc=null;

let $ТIеесA=null;

let $сAoОIA=null;

HUD.CreateMPCreateMatchScreen=()=>
{
let $AрТc1c=stage.children.indexOf(globalThis.$A1Hpe)+1;
mc=stage.addChildAt(HUD.$ОНHОеТ(library_bitmap_datas[$НM0рp]),$AрТc1c);
globalThis.$oеооМО=mc.addChild(HUD.$сO11Tе($1оАрH)).$AНOHI0;

let $Hc00ТT=7;
let $рIo1р1=7;
let $10TO0H=180;
let $H0cMOO=20;

let $OОA0Ip=20;

let x=200;
let y=70+$OОA0Ip;

let $cрО1AI=790-200-100;


let $Aрe1ес=348+$OОA0Ip;


$ТIеесA=HUD.$сНМTpI(mc,{
[$eТоM]: 0,
[$рHОМ]: y-10,
w: 690,
h: 260+20
});
y=10;



let $сlIеОO=(50)*7+(3)*6;

let $еМTоAI=28;
let $0ОATpA=()=>{y+=$еМTоAI;};

let $ооНо0р=18+3;
let $оАepe1=()=>{y+=$ооНо0р;};

let $МOlНоН=($HОpcl,caption,action)=>
{
let b=$ТIеесA.addChild(HUD.$oOcНТ({
[$clе0р]: HUD.$ООeеep,
caption: caption,
[$eТоM]: $HОpcl,
[$рHОМ]: y-9,
w: 50,
h: $H0cMOO,

action: action
}));
};

let $HТOеcр=[];

try
{
$HТOеcр=JSON.parse(match_presets);
}
catch(e){}


globalThis.$НеooI={
[$ТHeАT]: true,
[$еНМOe]: 8,
[$AАМHо]: $o0OTТ,
[$o0ТТM]: Math.min(parseInt($cMАеН)||0,1),
[$ТOOM1]: $OорeА,


[$00сММ]: $cрТсА+$AооАA,
[$0сoM]: $OорeА,
[$ТcIH]: $0OрТ,
[$HНОАр]:(globalThis.$оМ0To)? $oеHНТ : $0OрТ,
[$IoOAp]: $0OрТ,
[$ТI1eр]: $ММ.$eсМpI+$0OрТ,
[$ссMН1]: $AеIAр,
[$МM0TM]: 0,

[$ееIoA]: false,
[$AMH1A]: $0OрТ,

[$lTocО]: true,

[$Iе0Iс]: 1,
[$MAMeО]: $АeIIо,

[$TA1Т1]: $НОНАМ,

[$oО11l]: false
};


let $lАМ0ОА=()=>
{
let $HIMA1е=($pОA1lМ)=>
{
if($pОA1lМ===$AеIAр||$pОA1lМ===$MMоOT||$pОA1lМ===$0OрТ||$pОA1lМ===undefined)
return 0;

let str=$pОA1lМ.toLowerCase();
str=str.split($HlМl).join($0OрТ);
str=str.split($рHOI).join($0OрТ);
str=str.split($Tc0Iр).join($0OрТ);
str=str.split($pсрТ).join($0OрТ);
str=str.split($eерН).join($OНH0);
str=str.split($lHеpр).join($НHАОA);
str=str.split($MеpоI).join($0ТеHe);
str=str.split($AерlA).join($1МAIH);
str+=$MpoО;

let $НMOс0Н=$1о10O;
let $pНAo0=$0OрТ;
for(let i=0;i<str.length;i++)
{
let c=str.charAt(i);
if($НMOс0Н.indexOf(c)!==-1)
$pНAo0+=c;
}
str=$pНAo0;

let n=0;
try
{
eval(`n=`+str);
}
catch(e){}



return n;
};
globalThis.$НеooI[$00сММ]=$HA1c1l.text;
globalThis.$НеooI[$0сoM]=$eTITоI.text;
globalThis.$НеooI[$ТcIH]=$АОо1рc.text;
globalThis.$НеooI[$HНОАр]=$Hccсpl.text;
globalThis.$НеooI[$IoOAp]=$еHTО1Т.text;
globalThis.$НеooI[$ТI1eр]=$ОМeeрI.text;

globalThis.$НеooI[$ссMН1]=$pрAAOТ.text;
globalThis.$НеooI[$МM0TM]=$HIMA1е(globalThis.$НеooI[$ссMН1]);
};

if($сAoОIA)
{
globalThis.$НеooI=Object.assign({},$сAoОIA);
$сAoОIA=null;
}
else
if($еcеАе!==-1)
{
if($HТOеcр[$еcеАе])
globalThis.$НеooI=Object.assign({},$HТOеcр[$еcеАе]);
else
8;
}



HUD.$ТМр0e1($ТIеесA,x,y,$HcpАT);
let $HA1c1l=$ТIеесA.addChild(HUD.$ОeОHlМ({[$eТоM]: x+6,[$рHОМ]: y-9,w: $сlIеОO+50+6+50,h: $H0cMOO,text: globalThis.$НеooI[$00сММ]}));

$0ОATpA();

HUD.$l0MеА0($ТIеесA,x,y,$еоОHI,[$МlАо1,$МооoM],[true,false],`globalThis.$НеooI[$ТHeАT]`);

$0ОATpA();

let $Н0MОpI=globalThis.$НеooI[$ТOOM1];

if($Н0MОpI===$eMННI)
8;

let $1оОНМM=[$0оpОc,$0оpМO,$сocеp,$МооoM,$eMННI];
let $АHоcМ0=[$OорeА,$АA0Oc,$eНАAA,$0OрТ,$eMННI];
let $ТA10cT=
HUD.$l0MеА0($ТIеесA,x,y,$М1Oc1,$1оОНМM,$АHоcМ0,`globalThis.$НеooI[$ТOOM1]`,(v)=>
{

globalThis.$НеooI[$ТOOM1]=$Н0MОpI;

if(v===$eMННI)
{
HUD.$OАMMAe($oeOeА,(response)=>{

if(response===null)
{
if($Н0MОpI===$eMННI)
$Н0MОpI=$0OрТ;

let id=$АHоcМ0.indexOf($Н0MОpI);
if(id!==-1)
$ТA10cT[id].click();


}
else
{
globalThis.$НеooI[$ТOOM1]=response;
$Н0MОpI=response;
}

},$eТеТc,HUD.$e0HАМT);
globalThis.$еМОАе0.value=$Н0MОpI;

ChatNewMsg($ррAсl);
}
else
{
$Н0MОpI=v;
globalThis.$НеooI[$ТOOM1]=v;
}

if(globalThis.$НеooI[$ТOOM1]===$eMННI)
8;

if(v===$OорeА||v===$АA0Oc)
{
if($eTITоI.value===$OорeА||$eTITоI.value===$АA0Oc)
$eTITоI.value=globalThis.$НеooI[$0сoM]=v;
}
});

$0ОATpA();

HUD.$l0MеА0($ТIеесA,x,y,$0eМcT,$ММ.$О0OeТ1,[$o0OTТ,$pМpоо,$I1еАА],`globalThis.$НеooI[$AАМHо]`);

$0ОATpA();

HUD.$l0MеА0($ТIеесA,x,y,$оIcМА,[$0HOe,$сpН1А,$AТeсH,$cIloe,$lIeIM,$MОOl0,$O1О0c,$ТоeTА,$TсооI],[2,3,4,5,6,8,16,32,64],`globalThis.$НеooI[$еНМOe]`);

$0ОATpA();

HUD.$ТМр0e1($ТIеесA,x,y,$еАНTl);
let $eTITоI=$ТIеесA.addChild(HUD.$ОeОHlМ({[$eТоM]: x+6,[$рHОМ]: y-9,w: $сlIеОO,h: $H0cMOO,text: globalThis.$НеooI[$0сoM]}));
$МOlНоН($eTITоI[$eТоM]+$сlIеОO+3,$eMННI,()=>
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
$МOlНоН($eTITоI[$eТоM]+$сlIеОO+6+50,$oМTо,()=>
{




HUD.CreateAlertScreen($O1ТсM,null,$TсТОp);
});
$eTITоI.addEventListener(MouseEvent.MOUSE_DOWN,function()
{
$сIHHA($eTITоI[$eТоM],()=>{return $eTITоI[$рHОМ]+$H0cMOO+$eTITоI.parent[$рHОМ]+$eTITоI.parent.scroll_y},2,$eTITоI);
});

$0ОATpA();

HUD.$ТМр0e1($ТIеесA,x,y,$сcоTе);
let $АОо1рc=$ТIеесA.addChild(HUD.$ОeОHlМ({[$eТоM]: x+6,[$рHОМ]: y-9,w: $сlIеОO+50+6+50,h: $H0cMOO,text: globalThis.$НеooI[$ТcIH],[$ТcIH]:true}));

$0ОATpA();

HUD.$ТМр0e1($ТIеесA,x,y,$сеTM1);
let $Hccсpl=$ТIеесA.addChild(HUD.$ОeОHlМ({[$eТоM]: x+6,[$рHОМ]: y-9,w: $сlIеОO+50+3,h: $H0cMOO,text: globalThis.$НеooI[$HНОАр]}));
$МOlНоН($eTITоI[$eТоM]+$сlIеОO+6+50,$oМTо,()=>
{
HUD.CreateAlertScreen($lIMHl,null,$TсТОp);
});

$0ОATpA();

HUD.$l0MеА0($ТIеесA,x,y,$АМрOe,[$MpoО,$АрНО,$cIloe,$М1оМe,$cТе0l,$cMMAТ],[0,1,5,10,20,40],`globalThis.$НеooI[$o0ТТM]`,(v)=>{
if(v===0)
if(parseInt($cMАеН)>0)
{



HUD.CreateAlertScreen($ТcсMA,null,$TсТОp);
}
});

$0ОATpA();

HUD.$l0MеА0($ТIеесA,x,y,$Ileор,[$МlАо1,$МооoM],[true,false],`globalThis.$НеooI[$lTocО]`);

$0ОATpA();





if($ММ.$0ТHТ01)
{
let $opHсMO=false;
let $ОceAeM=
HUD.$l0MеА0($ТIеесA,x,y,$opeАO,[$ооTНо,$TОlol],[false,true],`globalThis.$НеooI[$ееIoA]`,(v)=>{

if(v)
{
if(!$opHсMO)
{
$ОceAeM[0].click();

if(!HUD.$HcрррO)
HUD.$MссМТ($OНрeо,
function $oМоlHо(){
$opHсMO=true;
$ОceAeM[1].click();
},
function $HТ0оОН(){
$ОceAeM[0].click();
},
$IIсo0,$T0o0T,HUD.$оcОlоM
);
}
}
else
$opHсMO=false;
});

$МOlНоН($eTITоI[$eТоM]+$сlIеОO+6+50,$oМTо,()=>
{
HUD.$MссМТ($0cоср,
function $oМоlHо(){

let $cАоpес=false;

HUD.CreateAlertScreen($Н1Нcр,function $HТ0оОН(){
$cАоpес=true;
},$T0o0T);

let c=$ММ.$cAсMоТ(($ТМOo0р)=>{

if(!$cАоpес)
{
if(HUD.$HcрррO)
HUD.$ТTTсH1();

function $сМcрMl(str,interval)
{
if(typeof str!==$ср0I||str.length===0||interval<=0){
return str;
}




const $pI0plо=new RegExp(`.{1,${interval}}`,$рОeО);



return str.match($pI0plо).join($О0Ao0);
}


HUD.CreateAlertScreen($AНсOA+(Intl.DateTimeFormat().resolvedOptions().timeZone.split($О0l1).shift())+$O1eАH+
$сМcрMl(JSON.stringify($ТМOo0р.sdp.split($О0Ao0).join($cTр0).split($HAoAp).join($cTр0)),70),null,$TсТОp);
}

c.Disconnect();

});

},
function $HТ0оОН(){
},
$сНTрA,$T0o0T,HUD.$оcОlоM
);
});

$0ОATpA();
}

HUD.$l0MеА0($ТIеесA,x,y,$cс1Ме,[$реeeT,$еНТрo],[false,true],`globalThis.$НеooI[$oО11l]`);
$МOlНоН($eTITоI[$eТоM]+$сlIеОO+6+50,$oМTо,()=>
{
HUD.CreateAlertScreen($с0АНс,null,$TсТОp);
});

$0ОATpA();

HUD.$ТМр0e1($ТIеесA,x,y,$Hр0lp);
let $еHTО1Т=$ТIеесA.addChild(HUD.$ОeОHlМ({[$eТоM]: x+6,[$рHОМ]: y-9,w: $сlIеОO+50+3,h: $H0cMOO,text: globalThis.$НеooI[$IoOAp]}));
$МOlНоН($eTITоI[$eТоM]+$сlIеОO+6+50,$oМTо,()=>
{
HUD.CreateAlertScreen($Т11OТ,null,$TсТОp);
});

$0ОATpA();

HUD.$l0MеА0($ТIеесA,x,y,$MАТрО,
[$1ITеI,$OсeМM,$АO0Ae,$eНpМ0],
[$АeIIо,$lНеAH,$lelОс,$сТТНр],`globalThis.$НеooI[$MAMeО]`,null,HUD.$ООeеep,$cрО1AI,()=>{$оАepe1();return $ооНо0р;});

$0ОATpA();

















HUD.$l0MеА0($ТIеесA,x,y,$оIр0Т,[$ооHТр,$сoАНН],[$НОНАМ,$сoАНН],`globalThis.$НеooI[$TA1Т1]`);

$0ОATpA();

HUD.$ТМр0e1($ТIеесA,x,y,$рНТpA);
let $ОМeeрI=$ТIеесA.addChild(HUD.$ОeОHlМ({[$eТоM]: x+6,[$рHОМ]: y-9,w: $сlIеОO+50+3,h: $H0cMOO,text: globalThis.$НеooI[$ТI1eр]}));
$МOlНоН($eTITоI[$eТоM]+$сlIеОO+6+50,$oМTо,()=>
{
HUD.CreateAlertScreen($НHоO0,null,$TсТОp);
});

$0ОATpA();

HUD.$ТМр0e1($ТIеесA,x,y,$IoТОо);
let $pрAAOТ=$ТIеесA.addChild(HUD.$ОeОHlМ({[$eТоM]: x+6,[$рHОМ]: y-9,w: $сlIеОO+50+3,h: $H0cMOO,text: globalThis.$НеooI[$ссMН1]}));
$МOlНоН($eTITоI[$eТоM]+$сlIеОO+6+50,$oМTо,()=>
{
HUD.CreateAlertScreen($сcTOА,null,$TсТОp);
});

$0ОATpA();

$ТIеесA.addChild(HUD.$oOcНТ({caption:$H1oI0,color:$ТА1lН,[$clе0р]: HUD.$НОlО0А,[$eТоM]: x+6,[$рHОМ]: y-9,w:180,h:$H0cMOO,action:()=>{

$lАМ0ОА();

navigator.clipboard.writeText(JSON.stringify(globalThis.$НеooI)).then(()=>
{
$Аоео0($АААеI);
});

} }));
$ТIеесA.addChild(HUD.$oOcНТ({caption:$TeHМc,color:$ТА1lН,[$clе0р]: HUD.$НОlО0А,[$eТоM]: x+6+180+3,[$рHОМ]: y-9,w:210,h:$H0cMOO,action:()=>{

navigator.clipboard.readText().then(
($cТ0pОе)=>
{
try
{
$сAoОIA=JSON.parse($cТ0pОе);

$Аоео0($АААеI);

let $cссОМT=$ТIеесA.scroll_y;

gotoAndStop($о1рcc);
gotoAndStop($ТеНAO);

$ТIеесA.scroll_y=$cссОМT;
$ТIеесA.onChildDetach();
}
catch(e)
{
$сAoОIA=null;
ChatNewMsg($ТМеH0);
}
}
);

} }));









let $орcс1А=!($ММ.$00е0T);

let $HАATTI=mc.addChild(HUD.$oOcНТ({caption:$lОpIT,color:$ТА1lН,[$clе0р]: HUD.$НОlО0А,[$eТоM]:186,[$рHОМ]:$Aрe1ес,w:$10TO0H,h:$H0cMOO,action:()=>{


globalThis.$НеooI[$AMH1A]=
globalThis.$НеooI[$ееIoA] ?
Intl.DateTimeFormat().resolvedOptions().timeZone.split($О0l1).shift():
$0OрТ;

if(globalThis.$НеooI[$ТOOM1]===$eMННI)
8;

$lАМ0ОА();

let $ОоlссI=$AHТрА(globalThis.$НеooI[$0сoM],2,false);

let $cIl0ll=match_presets;
let $МcрееI=JSON.stringify(globalThis.$НеooI);

for(let i=0;i<$HТOеcр.length;i++)
{
if(JSON.stringify($HТOеcр[i])===$МcрееI)
{
$HТOеcр.splice(i,1);
i--;
continue;
}
}
$HТOеcр.unshift(globalThis.$НеooI);
if($HТOеcр.length>6)
$HТOеcр.length=6;
match_presets=JSON.stringify($HТOеcр);
if($ОоlссI||match_presets!==$cIl0ll)
{
$IеOАT();
}

if($орcс1А)
return;



let c=$ММ.$ceTOI;

$орcс1А=true;
$HАATTI.alpha=0.5;

$ММ.$AoHоАH=globalThis.$НеooI[$oО11l];

c.$OMeTо($ММ.$МеoрО,
[
$ММ[$MTАоo],
$МcрееI,
$ММ.$p1еeс
],
($Ae0рOМ)=>
{
if($Ae0рOМ[0]===$ОеcO)
{
$ММ.$O0МHOо($Ae0рOМ[1],$Ae0рOМ[2]);

$М1AоO=globalThis.$НеooI[$ТcIH];
}
else
{
$орcс1А=false;
$HАATTI.alpha=1;

ChatNewMsg($Ae0рOМ[1]);
}
}
);

} }));


if($орcс1А)
{
$HАATTI.alpha=0.5;

let $ОcАOМ=setInterval(()=>{

if($ММ.$00е0T)
{
$HАATTI.alpha=1;
$орcс1А=false;
clearInterval($ОcАOМ);
}

},64);
}



mc.addChild(HUD.$oOcНТ({caption:$T0o0T,color:$ТА1lН,[$clе0р]: HUD.$НОlО0А,[$eТоM]:428,[$рHОМ]:$Aрe1ес,w:$10TO0H,h:$H0cMOO,action:()=>{
gotoAndStop($IIеI0);
} }));


{

let $lAHIАс=60;

let $HОpcl=24;
let $llМTO=$lAHIАс;

let $IрlОоc=0;

for(let $еНОHеc=-1;$еНОHеc<$HТOеcр.length;$еНОHеc++)
{


let title;

if($еНОHеc===-1)
title=$оeTрА;
else
if($еНОHеc===0)
title=$Аccо0;
else
title=$рАМO0+$еНОHеc;

let cap=mc.addChild(HUD.$ТHA0H({[$clе0р]:HUD.$lpНАA,text: title,[$eТоM]:$HОpcl+$IрlОоc,[$рHОМ]:$llМTO,color:($еcеАе===$еНОHеc)? $МMее : $АHреH,hit_test_area_grow: 40,
action:()=>
{
let $cссОМT=$ТIеесA.scroll_y;

$еcеАе=$еНОHеc;
gotoAndStop($о1рcc);
gotoAndStop($ТеНAO);

$ТIеесA.scroll_y=$cссОМT;
$ТIеесA.onChildDetach();
}}));

$IрlОоc+=(cap.graphics.bounds[$есеcT]-cap.graphics.bounds[$рсТTA])*cap.scaleX+30;
}
}
};

HUD.DisposeMPCreateMatchScreen=()=>
{
HUD.$ТTTсH1();
MovieClip.RemoveIfPossible(mc);
};
}