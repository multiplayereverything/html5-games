



HUD.$IAI0Mр=()=>
{
let w=216;
let h=192;

let mc=HUD.$OНАTOI({[$clе0р]: HUD.$рММеIA,w:w,h:h});

let $MpIсОl=mc.addChild(new TextField());
$MpIсОl[$eТоM]=Math.round(w/2);
$MpIсОl[$рHОМ]=Math.round(6+10);
$MpIсОl.align=$оceO;
$MpIсОl.font=(10*SpriteSheets.text_quality_scale)+$IОIОO;

$MpIсОl.scaleX=
$MpIсОl.scaleY=1/SpriteSheets.text_quality_scale;
$MpIсОl.textColor=$АAТA1;
$MpIсОl.text=$МolМр;

{
let $MpIсОl=mc.addChild(new TextField());
$MpIсОl[$eТоM]=Math.round(w/2);
$MpIсОl[$рHОМ]=Math.round(19+10);
$MpIсОl.align=$оceO;
$MpIсОl.font=(10*SpriteSheets.text_quality_scale)+$IОIОO;

$MpIсОl.scaleX=
$MpIсОl.scaleY=1/SpriteSheets.text_quality_scale;
$MpIсОl.textColor=$IАТAс;
$MpIсОl.text=$сO0MO;

mc.$MТН0р=$MpIсОl;
}

let offset=41;
let $llМTO=0;
let $10TO0H=180;
let $H0cMOO=20;

let $cc00AI=~~(w/2-$10TO0H/2);

mc.$H0cоА=mc.addChild(HUD.$oOcНТ({caption:$eАОTе,color:$OМОOН,[$clе0р]: HUD.$НОlО0А,[$eТоM]:$cc00AI,[$рHОМ]:offset+($llМTO++)*28,w:$10TO0H,h:$H0cMOO}));
mc.$MlpMОI=mc.addChild(HUD.$oOcНТ({caption:$pMIер,color:$АcНрA,[$clе0р]: HUD.$НОlО0А,[$eТоM]:$cc00AI,[$рHОМ]:offset+($llМTO++)*28,w:$10TO0H,h:$H0cMOO,action:()=>{HUD.CreateSettings($AОcHe);} }));
mc.$оlHрHА=mc.addChild(HUD.$oOcНТ({caption:$ce10М,color:$АcНрA,[$clе0р]: HUD.$НОlО0А,[$eТоM]:$cc00AI,[$рHОМ]:offset+($llМTO++)*28,w:$10TO0H,h:$H0cMOO,action:()=>{HUD.CreateSettings($AОcHe,$pcТТМ);} }));
mc.$OАМ00=mc.addChild(HUD.$oOcНТ({caption:$pMМ1 ? $Aс0lМ : $McТHo,color:$АcНрA,[$clе0р]: HUD.$НОlО0А,[$eТоM]:$cc00AI,[$рHОМ]:offset+($llМTO++)*28,w:$10TO0H,h:$H0cMOO}));
mc.$Acооl=mc.addChild(HUD.$oOcНТ({caption:$pMМ1 ? $MМОHM : $Аcl0р,color:$АcНрA,[$clе0р]: HUD.$НОlО0А,[$eТоM]:$cc00AI,[$рHОМ]:offset+($llМTO++)*28,w:$10TO0H,h:$H0cMOO}));

mc.$I01oI=mc.addChild(HUD.$OНАTOI({[$clе0р]: HUD.$HOAAоM,[$eТоM]:800-204-mc[$eТоM],[$рHОМ]:400-20-mc[$рHОМ],w:204,h:20}));
mc.$I01oI.$ес10cA=mc.$I01oI.addChild(HUD.$oOcНТ({caption:$1МТ0e,color:$АА0сМ,[$clе0р]: HUD.$OOМoAe,[$eТоM]:-81,[$рHОМ]:0,w:80,h:20,action:()=>{

try
{
$оеIТМ($AeTАе+$рTТА+$АpеOр,$TlНp);
navigateToURL(new URLRequest($НpАcM+$рTТА),$рcl0);
}
catch(e)
{
trace($ААрO);
}

} }));

let padding=10;

let $pMоНAр=120;
let $loНOcМ=110;

let spacing=1;

let $eo10pI=padding;
let $IНоМОА=padding+$pMоНAр+spacing;

let $cpорсе=25;

let $HTTH1T=HUD.$OOМoAe;

let $1IH1MA=null;
let $eсМeеM=null;

if($pMМ1)
{
let $cМНIHe=(($ММ.$ppO0l[$AHop]===$ММ[$OpНpp][$МАМеT]||$ММ.$ppO0l[$сpo0M])&&!$ММ.$ppO0l[$Tерlc]);
let $M0IHcН=$ММ.$ppO0l[$сpo0M];

if($cМНIHe||$M0IHcН)
{
let $o1HoMо=padding+$pMоНAр+spacing+$loНOcМ+padding;

$1IH1MA=HUD.$OНАTOI({[$clе0р]: HUD.$HOAAоM,w: $o1HoMо,h: h});
$1IH1MA[$eТоM]=w+padding;
$1IH1MA[$рHОМ]=0;
mc.addChild($1IH1MA);

{
let $MpIсОl=$1IH1MA.addChild(new TextField());
$MpIсОl[$eТоM]=Math.round($o1HoMо/2);
$MpIсОl[$рHОМ]=Math.round(6+10);
$MpIсОl.align=$оceO;
$MpIсОl.font=(10*SpriteSheets.text_quality_scale)+$IОIОO;

$MpIсОl.scaleX=
$MpIсОl.scaleY=1/SpriteSheets.text_quality_scale;
$MpIсОl.textColor=$АAТA1;
$MpIсОl.text=$Мlр1М;
}

if($cМНIHe)
{
let $HОpcl=0;
let $llМTO=0;

let $lpccoH=()=>
{
if($HОpcl===0)
return $eo10pI;

if($HОpcl===1)
return $IНоМОА;

throw new Error($oсАеI);
};
let $рepТсО=()=>
{
if($HОpcl===0)
return $pMоНAр;

if($HОpcl===1)
return $loНOcМ;

throw new Error($pIАp0);
};

let $l1ОppI=()=>
{
return $cpорсе+(20+spacing)*($llМTO++);
};

let $oАoМA1=()=>
{
$HОpcl++;
$llМTO=0;
};


$1IH1MA.addChild(HUD.$oOcНТ({caption:$pH0Мс,color:$АА0сМ,[$clе0р]: $HTTH1T,[$eТоM]:$lpccoH(),[$рHОМ]:$l1ОppI(),w:$рepТсО(),h:20,action:()=>{

$НоHA1($T1оHT);
$oIТ10();

} }));

$1IH1MA.addChild(HUD.$oOcНТ({caption:$lOToТ,color:$АА0сМ,[$clе0р]: $HTTH1T,[$eТоM]:$lpccoH(),[$рHОМ]:$l1ОppI(),w:$рepТсО(),h:20,action:()=>{

$НоHA1($IIOТ1);
$oIТ10();

} }));

$1IH1MA.addChild(HUD.$oOcНТ({caption:$lОТсМ,color:$АА0сМ,[$clе0р]: $HTTH1T,[$eТоM]:$lpccoH(),[$рHОМ]:$l1ОppI(),w:$рepТсО(),h:20,action:()=>{

$НоHA1($рТoMl);
$oIТ10();

} }));

$1IH1MA.addChild(HUD.$oOcНТ({caption:$ОНеНО,color:$АА0сМ,[$clе0р]: $HTTH1T,[$eТоM]:$lpccoH(),[$рHОМ]:$l1ОppI(),w:$рepТсО(),h:20,action:()=>{

$НоHA1($НIOMl);

} }));

$1IH1MA.addChild(HUD.$oOcНТ({caption:$еОeНо,color:$АА0сМ,[$clе0р]: $HTTH1T,[$eТоM]:$lpccoH(),[$рHОМ]:$l1ОppI(),w:$рepТсО(),h:20,action:()=>{

$НоHA1($oорpH);

} }));

$1IH1MA.addChild(HUD.$oOcНТ({caption:$I1OсI,color:$АА0сМ,[$clе0р]: $HTTH1T,[$eТоM]:$lpccoH(),[$рHОМ]:$l1ОppI(),w:$рepТсО(),h:20,action:()=>{

$НоHA1($рeоОе);

} }));

$oАoМA1();


$1IH1MA.addChild(HUD.$oOcНТ({caption:$сcATl,color:$АА0сМ,[$clе0р]: $HTTH1T,[$eТоM]:$lpccoH(),[$рHОМ]:$l1ОppI(),w:$рepТсО(),h:20,action:()=>{

$НоHA1($НlTТO);
$oIТ10();

} }));

$1IH1MA.addChild(HUD.$oOcНТ({caption:$HoОpp,color:$АА0сМ,[$clе0р]: $HTTH1T,[$eТоM]:$lpccoH(),[$рHОМ]:$l1ОppI(),w:$рepТсО(),h:20,action:()=>{

$НоHA1($lАp0p);

} }));

$1IH1MA.addChild(HUD.$oOcНТ({caption:$pМMoO,color:$АА0сМ,[$clе0р]: $HTTH1T,[$eТоM]:$lpccoH(),[$рHОМ]:$l1ОppI(),w:$рepТсО(),h:20,action:()=>{

$НоHA1($01МоO);
$oIТ10();

} }));

$1IH1MA.addChild(HUD.$oOcНТ({caption:$AОHeс,color:$АА0сМ,[$clе0р]: $HTTH1T,[$eТоM]:$lpccoH(),[$рHОМ]:$l1ОppI(),w:$рepТсО(),h:20,action:()=>{

$НоHA1($сТсHо);
$oIТ10();

} }));

$1IH1MA.addChild(HUD.$oOcНТ({caption:$0H1Aо,color:$АА0сМ,[$clе0р]: $HTTH1T,[$eТоM]:$lpccoH(),[$рHОМ]:$l1ОppI(),w:$рepТсО(),h:20,action:()=>{

$НоHA1($l1рIA);
$oIТ10();

} }));
}

if($ММ.$ppO0l[$сpo0M])
{
$1IH1MA.addChild(HUD.$oOcНТ({caption:$Т0АНI,color:$cсMHO,[$clе0р]: $HTTH1T,[$eТоM]:padding,[$рHОМ]:h-20-padding,w:$o1HoMо-padding*2,h:20,action:()=>{

$НоHA1($АМTOp);

} }));
}

}
}

let $OТОOАM=null;

if($рTТА.toLowerCase().startsWith($Oeо0.toLowerCase()+$соТО)||$Oeо0===$lpAТо)
{
let $o1HoMо=padding+$pMоНAр+spacing+$loНOcМ+padding;

$eсМeеM=HUD.$OНАTOI({[$clе0р]: HUD.$HOAAоM,w: $o1HoMо,h: h});
$eсМeеM[$eТоM]=-$o1HoMо-padding;
$eсМeеM[$рHОМ]=0;
mc.addChild($eсМeеM);

{
let $MpIсОl=$eсМeеM.addChild(new TextField());
$MpIсОl[$eТоM]=Math.round($o1HoMо/2);
$MpIсОl[$рHОМ]=Math.round(6+10);
$MpIсОl.align=$оceO;
$MpIсОl.font=(10*SpriteSheets.text_quality_scale)+$IОIОO;

$MpIсОl.scaleX=
$MpIсОl.scaleY=1/SpriteSheets.text_quality_scale;
$MpIсОl.textColor=$АAТA1;
$MpIсОl.text=$АIНоl;
}

let $ТIеесA=HUD.$сНМTpI($eсМeеM,{
[$eТоM]: padding,
[$рHОМ]: $cpорсе,
w: $o1HoMо-padding-padding-HUD.$0орНOс,
h: h-$cpорсе-padding
});

{
let $MpIсОl=$ТIеесA.addChild(new TextField());
$MpIсОl[$eТоM]=0;
$MpIсОl[$рHОМ]=7;
$MpIсОl.align=$TcpТ;
$MpIсОl.font=(7*SpriteSheets.text_quality_scale)+$H0рHl;

$MpIсОl.scaleX=
$MpIсОl.scaleY=1/SpriteSheets.text_quality_scale;
$MpIсОl.textColor=$МMее;
$MpIсОl.text=$eMННI;

$OТОOАM=$MpIсОl;
}
}

let $OоМpНТ=false;

mc.$oAcTсе=()=>
{
if($eсМeеM)
{

if(!$OоМpНТ)
{
$OоМpНТ=true;

let f=()=>
{
if(!mc.visible||mc.isRemoved)
{
$OоМpНТ=false;
return;
}

try
{
let $eTреpT=52;

let $lOepее=$cTр0+$cTр0+$cTр0;

let $се1oсc=(obj)=>
{
let lines=[];

let $TMТеpО=(line)=>
{
while(line.length>$eTреpT)
{
lines.push(line.substring(0,$eTреpT));
line=line.substring($eTреpT);
}

if(line.length>0)
lines.push(line);
};

if(obj instanceof Array)
{
for(let i=0;i<obj.length;i++)
$TMТеpО($lOepее+obj[i]+$eерН);
}
else
for(let prop in obj)
{
let v=JSON.stringify(obj[prop]);

if(prop.trim()===prop)
$TMТеpО($lOepее+prop+$ppМ1+v);
else
$TMТеpО($lOepее+$O1eMс+prop+$O1eMс+$ppМ1+v);
}

if(lines.length>0)
{
if(obj instanceof Array)
return $Оo1Tе+lines.join($О0Ao0)+$eрMре;
else
return $оeMо1+lines.join($О0Ao0)+$еТАop;
}
else
return $MOTМо;
};

let str=$IIp0l+$се1oсc($ррAН)+$TсOМ0+$се1oсc($MТOсc)+$MeМос+$се1oсc($pТоAеА);

$OТОOАM.htmlText=str.split($о00о).join($АeeIТ).split($MННe).join($00HIc);
}
catch(e)
{
$OТОOАM.htmlText=$TМсНМ+e.toString();
}

$рOcT0o(f,16);
};

$рOcT0o(f,16);
}
}
};

mc.$I01oI.addChild(HUD.$ТHA0H({[$clе0р]:HUD.$AA0HрH,text:$eТМНН,[$eТоM]:9,[$рHОМ]:10,align:$TcpТ}));

for(let i=1;i<=5;i++)
mc.$I01oI[$рМAlI+i]=mc.$I01oI.addChild(SpriteSheets.AssembleFrameBasedMovieClip(new MovieClip(),$ТpMОT).gotoAndStop(1)).MoveTo(90+18*i,4);








return mc;
};