







class HUD
{
static init_class()
{
HUD.$OOМoAe=1;
HUD.$IоoHAA=2;
HUD.$НОlО0А=3;
HUD.$А10oeo=4;
HUD.$ООeеep=5;
HUD.$ООHMol=6;
HUD.$1OMАНp=7;
HUD.$TTTНMM=8;
HUD.$сToplМ=9;
HUD.$рсccН=10;
HUD.$ОТТроМ=11;
HUD.$1ОcТTс=12;
HUD.$pOOpO0=13;
HUD.$рер1рА=14;
HUD.$TAеpро=15;
HUD.$ocсAМе=16;
HUD.$0оoоое=17;
HUD.$AlТО0о=18;

HUD.$рММеIA=1;
HUD.$HOAAоM=2;
HUD.$еНolМН=3;
HUD.$HНАМАp=4;

HUD.$AA0HрH=1;
HUD.$lpНАA=2;
HUD.$cММIсО=3;
HUD.$lМ0pМ=4;
HUD.$рМоМcT=5;

HUD.$0ММAAM=$e0lрT;

HUD.$0орНOс=8;
HUD.$1pel0=-75;


HUD.colors={
$cМMHIO:{color:$el1Ос,$АIеооМ:[$еMТlМ,$TО1Мl,$МIНII],$TрcоOо:[$oHеМT,$eеНTA,$eеНTA]},
green:{color:$МoАрH,$АIеооМ:[$еMТlМ,$TOeрА,$Op0Mс],$TрcоOо:[$ТOАAT,$lp1pо,$lp1pо]},
red:{color:$AеHeo,$АIеооМ:[$еMТlМ,$сс0Ое,$HeTcO],$TрcоOо:[$lНМ1o,$peHMo,$peHMo]}
};


HUD.$IAI0Mр=null;

HUD.$АAорI=null;
HUD.$сОplp=null;

HUD.$pоIНp=false;
HUD.CreateSettings=null;
HUD.DisposeSettings=null;

HUD.CreateLoadingScreen=null;
HUD.DisposeLoadingScreen=null;

HUD.$HcрррO=false;
HUD.$MссМТ=null;
HUD.CreateAlertScreen=null;
HUD.$ТTTсH1=null;

HUD.CreateCampaignScreen=null;
HUD.DisposeCampaignScreen=null;

HUD.CreateDifficultyScreen=null;
HUD.DisposeDifficultyScreen=null;

HUD.CreateMissionFailedScreen=null;
HUD.DisposeMissionFailedScreen=null;

HUD.CreateCustomMapScreen=null;
HUD.DisposeCustomMapScreen=null;

HUD.CreateEquipmentScreen=null;
HUD.DisposeEquipmentScreen=null;

HUD.CreateAchievementsScreen=null;
HUD.DisposeAchievementsScreen=null;

HUD.CreateMenuScreen=null;
HUD.DisposeMenuScreen=null;

HUD.CreateMPLobbyScreen=null;
HUD.DisposeMPLobbyScreen=null;

HUD.$сcТAс=null;

HUD.$eМHHAc=null;
HUD.$оeрМM1=null;
HUD.$OMАрoO=$0OрТ;

HUD.$НТI0T=null;

HUD.$eНОТlе=(navigator.userAgent.indexOf($0lОIH)!==-1);
}
static $001AeT($1сАНМс,$H1HАН,$МAH1oо)
{
return(Math.max(0,Math.ceil($МAH1oо*$Мoeрсc*Math.min($1сАНМс,1.1)))!==Math.ceil($МAH1oо*$Мoeрсc*Math.min($H1HАН,1.1)));
}
static $1TTeсМ(params)
{
let $1оIlOр=new MovieClip();

let w=296;
let h=20;

let outline=1;

$1оIlOр.graphics=new Graphics(false);
$1оIlOр.graphics.beginFill($IcеоН);
{
$1оIlOр.graphics.drawRect(0,0,w,h);
}
$1оIlOр.graphics.endFill();










let $MpIсОl=$1оIlOр.addChild(new TextField());
$MpIсОl[$eТоM]=4+3;
$MpIсОl[$рHОМ]=3+10;
$MpIсОl.align=$TcpТ;
$MpIсОl.font=(9*SpriteSheets.text_quality_scale)+$IОIОO;
$MpIсОl.letterSpacing=1*SpriteSheets.text_quality_scale;
$MpIсОl.scaleX=
$MpIсОl.scaleY=1/SpriteSheets.text_quality_scale;
$MpIсОl.text=params.caption;

let $pHАорО=$1оIlOр.addChild(new TextField());
$pHАорО[$eТоM]=257.5+37.5/2;
$pHАорО[$рHОМ]=3+10;
$pHАорО.align=$оceO;
$pHАорО.font=(8*SpriteSheets.text_quality_scale)+$IОIОO;
$pHАорО.letterSpacing=1*SpriteSheets.text_quality_scale;
$pHАорО.scaleX=
$pHАорО.scaleY=1/SpriteSheets.text_quality_scale;

$1оIlOр.$рННр0T=
$1оIlOр.$MlоoАT=
$pHАорО;

let $ОНТAАТ=58;
let $HеоМ1е=8;
let $1A1оee=200;
let $plА0eс=4;

let $1АTеMА=($ОМTOОО,$MоАоAН,$оррсcо,clear=true)=>
{
if(clear)
$ОМTOОО.graphics.clear();

if($1A1оee*$оррсcо>0)
{
$ОМTOОО.graphics.setStokeStyle(outline,$MоАоAН[1]);
$ОМTOОО.graphics.beginFill($MоАоAН[0]);
{
$ОМTOОО.graphics.drawRect($ОНТAАТ,$HеоМ1е,Math.min(800,$1A1оee*$оррсcо),$plА0eс);
}
$ОМTOОО.graphics.endFill();
$ОМTOОО.graphics.stroke();
}
};


$1АTеMА($1оIlOр,[$еMТlМ,$еMТlМ],1,false);

let $eМе0cр=false;
let $ТНoоpH=[$0IHpl,$1рА1Т];
let $ееoНОТ=[$НОoM,$THНTo];

if(params.$НT0eIM)
{
let $ОМTOОО=$1оIlOр.addChild(new MovieClip());
$ОМTOОО.graphics=new Graphics(false);

let $оррсcо=1;

let $cе1Mec=()=>
{$1АTеMА($ОМTOОО,$eМе0cр ? $ТНoоpH : params.$НT0eIM,$оррсcо);};

$1оIlOр.$НT0eIM={
set scaleX(v)
{
if(HUD.$001AeT($оррсcо,v,$1A1оee))

{
$оррсcо=v;
$cе1Mec();
}
},
get scaleX()
{return $оррсcо;},
$АTHHсТ()
{
$cе1Mec();
}
};

$cе1Mec();
}

{
let $cоеМАН=$1оIlOр.addChild(new MovieClip());
$cоеМАН.graphics=new Graphics(false);

$cоеМАН.props={};

$cоеМАН.props.$оррсcо=1;

let $cе1Mec=()=>
{$1АTеMА($cоеМАН,$eМе0cр ? $ееoНОТ : params.hp,$cоеМАН.props.$оррсcо);};

$1оIlOр.hp=
$1оIlOр.$оeTpМ0=
{
set scaleX(v)
{
if(HUD.$001AeT($cоеМАН.props.$оррсcо,v,$1A1оee))

{
$cоеМАН.props.$оррсcо=v;
$cе1Mec();
}
},
get scaleX()
{return $cоеМАН.props.$оррсcо;},
$АTHHсТ()
{
$cе1Mec();
}
};

$cе1Mec();
}

$1оIlOр.onFrameChanged=()=>
{
$eМе0cр=($1оIlOр.currentFrame===2);

if($1оIlOр.$НT0eIM)
$1оIlOр.$НT0eIM.$АTHHсТ();

$1оIlOр.hp.$АTHHсТ();

$pHАорО.textColor=$eМе0cр ? $ееoНОТ[0]: params.$рННр0T;
$MpIсОl.textColor=$eМе0cр ? $ееoНОТ[0]: params.$рННр0T;
};

$1оIlOр[$eТоM]=params[$eТоM]||0;
$1оIlOр[$рHОМ]=params[$рHОМ]||0;
return $1оIlOр;
}


static CreateGUI($Io1eАМ,$оТ01lА=false)
{
let gui=new MovieClip();

let $I1рeTр=gui.addChild(new MovieClip());
$I1рeTр.graphics=new Graphics(false);

let $10oAеe;
let $е1oM0Т=[0,1];


let y=-1;

let w=59.95;
let h=8;
let $оОA0o=16;

let outline=1;

let $pоMeАс=2;

if(!$оТ01lА)
{
$оОA0o=10;

$pоMeАс=1.5;

y=-1;
w=29.25;
h=4;
$10oAеe=[$ТcАсТ,$ocр0o];
}
else
{
$10oAеe=[$рO1AА,$ОMAMT];
}

let $орIMеМ=[
-w,y,
w,y,
w-h,y+h,
-w+h,y+h
];

let $eМе0cр=false;

gui.props={};

gui.props.$АoН0Мс=0;

gui.h={
set scaleX(v)
{

if(gui.visible)
if(HUD.$001AeT(gui.props.$АoН0Мс,v,w*2))

{
gui.props.$АoН0Мс=v;

gui.h.$АTHHсТ();
}
},
get scaleX()
{
return gui.props.$АoН0Мс;
},
$АTHHсТ()
{
$I1рeTр.graphics.clear();

$I1рeTр.graphics.startMask($орIMеМ);
{
let colors;

if($eМе0cр)
{
if($MсОТ0%250<125)
colors=[$OОMeН,$OlоО1];
else
colors=[$ОеTlp,$IАо0M];
}
else
{
colors=$10oAеe;
}


$I1рeTр.graphics.createLinearGradient(0,-1,0,7,$е1oM0Т,colors);
$I1рeTр.graphics.drawRect(-w,y,w*2*gui.props.$АoН0Мс,h);
$I1рeTр.graphics.endFill();
}
$I1рeTр.graphics.stopMask($орIMеМ);

if(isNaN(gui.props.$АoН0Мс)||gui.props.$АoН0Мс>1)
{
if(isNaN(gui.props.$АoН0Мс))
$I1рeTр.graphics.beginFill($eeIоА);
else
$I1рeTр.graphics.beginFill($еMТlМ);

$I1рeTр.graphics.drawRect(w-5,y+1.5,1,1);
$I1рeTр.graphics.drawRect(w-5-2,y+1.5,1,1);
$I1рeTр.graphics.drawRect(w-5-4,y+1.5,1,1);
$I1рeTр.graphics.endFill();
}
}
};
gui.h.scaleX=1;

gui.graphics=new Graphics();
gui.graphics.setStokeStyle(outline,$еMТlМ);
gui.graphics.beginFill($еMТlМ);
{
gui.graphics.moveTo(-w,y);
gui.graphics.lineTo(w,y);
gui.graphics.lineTo(w-h,y+h);
gui.graphics.lineTo(-w+h,y+h);
}
gui.graphics.endFill();
gui.graphics.stroke();

gui.$pеMHH=gui.addChild(new TextField());
gui.$pеMHH[$рHОМ]=($оТ01lА ?-23.75 :-17.25)+$оОA0o;
gui.$pеMHH.align=$оceO;
gui.$pеMHH.font=($оОA0o*SpriteSheets.text_quality_scale)+$IОIОO;
gui.$pеMHH.scaleX=gui.$pеMHH.scaleY=1/SpriteSheets.text_quality_scale;

gui.$pеMHH.filters.push(new DropShadowFilter(0,0,2*$pоMeАс,$eM1cр));
gui.$pеMHH.filters.push(new DropShadowFilter(1*$pоMeАс,1*$pоMeАс,0,$еMТlМ));

$Io1eАМ.addChild(gui);

gui._onFrameChanged=()=>
{
$eМе0cр=(gui.currentFrame===2);

gui.h.$АTHHсТ();
};

if(!$оТ01lА)
{
let $ОIАеOM=10;

gui.$cТIcТ=gui.addChild(new TextField());
gui.$cТIcТ[$рHОМ]=-32.4+$ОIАеOM;
gui.$cТIcТ.align=$оceO;
gui.$cТIcТ.font=($ОIАеOM*SpriteSheets.text_quality_scale)+$IОIОO;
gui.$cТIcТ.scaleX=gui.$cТIcТ.scaleY=1/SpriteSheets.text_quality_scale;
gui.$cТIcТ.filters.push(new DropShadowFilter(0,0,3*$pоMeАс,$еMТlМ));
}

return gui;
}

static $НoccHТ(number=0)
{
let mc=new MovieClip();

let w=28;
let h=15;
let $eрАMрT=7;

mc.graphics=new Graphics(false);
mc.graphics.beginFill($АНосМ);
{
mc.graphics.moveTo(0,0);
mc.graphics.lineTo(w,0);
mc.graphics.lineTo(w,h-$eрАMрT);
mc.graphics.lineTo(w-$eрАMрT,h);
mc.graphics.lineTo($eрАMрT,h);
mc.graphics.lineTo(0,h-$eрАMрT);
}
mc.graphics.endFill();





let $pHАорО=mc.addChild(new TextField());
$pHАорО[$eТоM]=Math.round(w/2);
$pHАорО[$рHОМ]=9;
$pHАорО.align=$оceO;
$pHАорО.font=(8*SpriteSheets.text_quality_scale)+$IОIОO;
$pHАорО.scaleX=
$pHАорО.scaleY=1/SpriteSheets.text_quality_scale;

$pHАорО.text=number;

mc.$MН1Mp=$pHАорО;

mc.onFrameChanged=()=>
{
$pHАорО.textColor=(mc.currentFrame===2)? $oсAОl : $OМОOН;
};

return mc;
}

static $oOcНТ(params)
{
let mc=new MovieClip();
mc[$eТоM]=params[$eТоM]||0;
mc[$рHОМ]=params[$рHОМ]||0;

let w=params.w;
let h=params.h;

let $eМHHAc=params.$eМHHAc||$0OрТ;

mc.graphics=new Graphics(false);

let $рTОоАI=false;

let $pMIОTH=false;
let $еlOl0l=false;

let $АTО1оp=false;
let $Mpррсo=false;

let $TTН1oе=0;

let $АIеооМ=[$IcеоН,$IcеоН,$IcеоН];
let $TрcоOо=[null,null,null];

let $АIАAeМ=false;
let $е1T1OM=false;

if(params[$clе0р]===HUD.$НОlО0А||
params[$clе0р]===HUD.$А10oeo||
params[$clе0р]===HUD.$ОТТроМ)
{
$АIеооМ=[$IeAоT,$1clср,$TOoрO];
$TрcоOо=[$IсpНТ,$TcHOl,$TcHOl];

if(params[$clе0р]===HUD.$А10oeo)
{
params.color=params.color||$МAОl0;

$АIеооМ=[$MрНHl,$eOepT,$сIсрc];
$TрcоOо=[$pMТНI,$ТcАсТ,$ТcАсТ];
}
else
if(params[$clе0р]===HUD.$ОТТроМ)
{
$pMIОTH=true;
}

$АIАAeМ=true;
$е1T1OM=true;
}
else
if(params[$clе0р]===HUD.$ООeеep)
{
$АIеооМ=[$MHpеA,$НHрTH,$01рТ];
}
else
if(params[$clе0р]===HUD.$ООHMol)
{


$АIеооМ=[$0о01А,$T1IOТ,$01рТ];
}
else
if(params[$clе0р]===HUD.$1OMАНp||params[$clе0р]===HUD.$TTTНMM)
{
$АIеооМ=[$1IpMH,$МMее,$МMее];


$АIАAeМ=true;
$е1T1OM=true;

mc.hit_test_area_grow=3;
}
else
if(params[$clе0р]===HUD.$сToplМ)
{
$АIеооМ=[$1рlеН,$MАрТO,$00М1А];
$TрcоOо=[$0еOlО,$ocр0o,$ОTО1H];
}
else
if(params[$clе0р]===HUD.$рсccН)
{

$АIеооМ=[$T1e0о,$pссAO,$lOcTе];
}
else
if(params[$clе0р]===HUD.$1ОcТTс||
params[$clе0р]===HUD.$pOOpO0||
params[$clе0р]===HUD.$рер1рА||
params[$clе0р]===HUD.$TAеpро)
{
if(params[$clе0р]===HUD.$1ОcТTс)
{
$АIеооМ=[$ТOo1О,$ОррО1,$TOoрO];
$TрcоOо=[$МТppl,$МеAAе,$оMАo1];
}
else
if(params[$clе0р]===HUD.$pOOpO0)
{
$АIеооМ=[$OТA1I,$0сТcl,$НМlHc];
$TрcоOо=[$Нр0оМ,$IАTO0,$0AOМо];
}
else
if(params[$clе0р]===HUD.$TAеpро)
{
$АIеооМ=[$МlOсM,$ТlOlТ,$оTАee];
$TрcоOо=[$oHAоО,$OОpl0,$IlAMl];
}

$АIАAeМ=true;
$е1T1OM=true;
}
else
if(params[$clе0р]===HUD.$ocсAМе)
{
$АIеооМ=[$T1e0о,$T1e0о,$T1e0о];
$TрcоOо=[$T1e0о,$T1e0о,$T1e0о];

$АIАAeМ=true;
$е1T1OM=true;
$pMIОTH=true;
}
else
if(params[$clе0р]===HUD.$0оoоое||
params[$clе0р]===HUD.$AlТО0о)
{
$АIеооМ=[$T1e0о,$AОMoe,$АlеAр];


$АIАAeМ=true;
$е1T1OM=true;

}

if(params.$АIеооМ)
$АIеооМ=params.$АIеооМ;

if(params.$TрcоOо)
$TрcоOо=params.$TрcоOо;

let $cе1Mec=()=>
{
$TTН1oе=$Mpррсo ?($АTО1оp ? 2 : 1):($АTО1оp ? 1 : 0);

mc.graphics.clear();

if(params[$clе0р]===HUD.$1OMАНp||params[$clе0р]===HUD.$TTTНMM)
{
let $ТcMlOе=(params[$clе0р]===HUD.$1OMАНp)? 1 :-1;
let $1eIНHI=1;

if($Mpррсo)
{
$ТcMlOе*=0.775;
$1eIНHI*=0.775;
}

$ТcMlOе*=0.5;
$1eIНHI*=0.5;

mc.graphics.beginFill($АIеооМ[$TTН1oе]);
{
mc.graphics.moveTo($ТcMlOе*(-12.5),0);
mc.graphics.lineTo($ТcMlOе*(-12.5+25),25/2*$1eIНHI);
mc.graphics.lineTo($ТcMlOе*(-12.5+25),-25/2*$1eIНHI);
}
mc.graphics.endFill();
}
else
{
if($TрcоOо[$TTН1oе]!==null)
mc.graphics.setStokeStyle(1,$TрcоOо[$TTН1oе]);

mc.graphics.beginFill($АIеооМ[$TTН1oе]);
{
mc.graphics.drawRect(0,0,w,h);
}
mc.graphics.endFill();

if($TрcоOо[$TTН1oе]!==null)
mc.graphics.stroke();

if($рTОоАI)
{
mc.graphics.beginFill($МMее);
{
mc.graphics.moveTo(6,6);
mc.graphics.lineTo(6+6,6+7/2);
mc.graphics.lineTo(6,6+7);
}
mc.graphics.endFill();
}
}
};

if($АIАAeМ)
{













mc.addEventListener(MouseEvent.MOUSE_OVER,()=>
{
if(MovieClip.current_hover!==mc)
return;

let new_hover=true;
if(new_hover!==$АTО1оp)
{
$АTО1оp=new_hover;
$cе1Mec();

HUD.$00рос0(mc,(typeof $eМHHAc===$МОTМ)? $eМHHAc(): $eМHHAc,false);
}
});
mc.addEventListener(MouseEvent.MOUSE_OUT,()=>
{
if(MovieClip.current_hover!==mc)
return;

let new_hover=false;
if(new_hover!==$АTО1оp)
{
$АTО1оp=new_hover;
$cе1Mec();

HUD.$00рос0(null,$0OрТ);
}
});
}
if($е1T1OM)
{
let $MрpТoМ=()=>
{
let $оАеOcO=false;

if($оАеOcO!==$Mpррсo)
{
$Mpррсo=$оАеOcO;
$cе1Mec();
}
};

let $AoсОАО=()=>
{
if(MovieClip.current_hover!==mc)
return;



let $оАеOcO=(MovieClip.click_on_release_for===mc);

if($оАеOcO!==$Mpррсo)
{
$Mpррсo=$оАеOcO;
$cе1Mec();

mc.onNextMouseRelease($MрpТoМ);
}
};

mc.addEventListener(MouseEvent.MOUSE_DOWN,$AoсОАО);

}

$cе1Mec();

let $MpIсОl=null;

if(params[$clе0р]===HUD.$НОlО0А||
params[$clе0р]===HUD.$А10oeo||
params[$clе0р]===HUD.$ОТТроМ)
{
$MpIсОl=mc.addChild(new TextField());
$MpIсОl[$eТоM]=Math.round(w/2*SpriteSheets.text_quality_scale)/SpriteSheets.text_quality_scale;
$MpIсОl[$рHОМ]=Math.round((h/2+4)*SpriteSheets.text_quality_scale)/SpriteSheets.text_quality_scale;
$MpIсОl.align=$оceO;
$MpIсОl.font=((params.size||12)*SpriteSheets.text_quality_scale)+$IОIОO;
$MpIсОl.letterSpacing=(params.letterSpacing||0)*SpriteSheets.text_quality_scale;
$MpIсОl.scaleX=
$MpIсОl.scaleY=1/SpriteSheets.text_quality_scale;

$MpIсОl.textColor=params.color||$ТА1lН;
$MpIсОl.text=params.caption||$0OрТ;
}
else
if(params[$clе0р]===HUD.$OOМoAe)
{
$MpIсОl=mc.addChild(new TextField());
$MpIсОl[$eТоM]=Math.round(w/2);
$MpIсОl[$рHОМ]=Math.round(h/2+3);
$MpIсОl.align=$оceO;
$MpIсОl.font=((params.size||9)*SpriteSheets.text_quality_scale)+$IОIОO;
$MpIсОl.letterSpacing=(params.letterSpacing||0)*SpriteSheets.text_quality_scale;
$MpIсОl.scaleX=
$MpIсОl.scaleY=1/SpriteSheets.text_quality_scale;
$MpIсОl.textColor=params.color||$МMее;
$MpIсОl.text=params.caption||$0OрТ;

$еlOl0l=true;
}
else
if(params[$clе0р]===HUD.$IоoHAA)
{


$АIеооМ=[$ОpolМ,$ОpolМ,$ОpolМ];

$еlOl0l=true;

for(let i=0;i<2;i++)
{
let $MpIсОl=mc.addChild(new TextField());

if(i===0)
{
$MpIсОl[$eТоM]=Math.round(w-6);
$MpIсОl.textColor=$МMее;

mc.$OelMcН=$MpIсОl;
}
else
{
$MpIсОl[$eТоM]=Math.round(w-35);
$MpIсОl.textColor=params.color||$МMее;

mc.$Il0MТp=$MpIсОl;
}

$MpIсОl[$рHОМ]=Math.round(h/2+3);
$MpIсОl.align=$МОIс;
$MpIсОl.font=((params.size||9)*SpriteSheets.text_quality_scale)+$IОIОO;
$MpIсОl.letterSpacing=(params.letterSpacing||0)*SpriteSheets.text_quality_scale;
$MpIсОl.scaleX=
$MpIсОl.scaleY=1/SpriteSheets.text_quality_scale;

if(i===0)
$MpIсОl.text=$MpoО;
else
$MpIсОl.text=params.caption ?(params.caption+$lМе1): $0OрТ;
}
let $TеccОe=-1;
mc.onFrameChanged=()=>
{
if($TеccОe!==mc.currentFrame)
{
$TеccОe=mc.currentFrame;

$рTОоАI=(mc.currentFrame===3);

$cе1Mec();
}
};
}
else
if(params[$clе0р]===HUD.$ООeеep||params[$clе0р]===HUD.$ООHMol)
{
let cap=HUD.$ТHA0H({text:params.caption||$oМTо,[$eТоM]:Math.round(w/2),[$рHОМ]:Math.round(h/2),align:$оceO,[$clе0р]:HUD.$lpНАA});

mc.addChild(cap);

mc.onFrameChanged=()=>
{
$АTО1оp=(mc.currentFrame===2);

if(params[$clе0р]===HUD.$ООHMol)
cap.alpha=(mc.currentFrame===2)? 1 : 0.3;

$cе1Mec();
};
}
else
if(params[$clе0р]===HUD.$сToplМ||
params[$clе0р]===HUD.$рсccН)
{
mc.onFrameChanged=()=>
{
if(mc.currentFrame===3)
{
$Mpррсo=true;
$АTО1оp=true;
}
else
if(mc.currentFrame===2)
{
$Mpррсo=false;
$АTО1оp=true;
}
else
{
$Mpррсo=false;
$АTО1оp=false;
}
$cе1Mec();
};
}

let $TМIAАО=$MpIсОl ? $MpIсОl.textColor : null;

if(params.action)
{
if($pMIОTH)
{
if(params[$clе0р]===HUD.$сToplМ||
params[$clе0р]===HUD.$рсccН)
{
mc.addEventListener(MouseEvent.MOUSE_DOWN,()=>
{
if(MovieClip.current_hover!==mc)
return;

params.action();
});
}
else
{
mc.addEventListener(MouseEvent.MOUSE_OVER,()=>
{
if(MovieClip.current_hover!==mc)
return;

if($MpIсОl)
$MpIсОl.textColor=$МMее;

if(!$еlOl0l)
$Аоео0($1ccМр);
});

if($MpIсОl)
mc.addEventListener(MouseEvent.MOUSE_OUT,()=>
{
if($MpIсОl)
$MpIсОl.textColor=$TМIAАО;
});

mc.addEventListener(MouseEvent.MOUSE_DOWN,()=>
{
if(MovieClip.current_hover!==mc)
return;

$Аоео0($pHpсA);

params.action();
});
}
}
else
if(params[$clе0р]===HUD.$ООeеep||params[$clе0р]===HUD.$ООHMol||
params[$clе0р]===HUD.$1OMАНp||params[$clе0р]===HUD.$TTTНMM||
params[$clе0р]===HUD.$IоoHAA)
{
mc.addEventListener(MouseEvent.MOUSE_DOWN,params.action);
}
else
{
mc.addEventListener(MouseEvent.MOUSE_OVER,()=>
{
if(MovieClip.current_hover!==mc)
return;

if($MpIсОl)
$MpIсОl.textColor=$МMее;

if(!$еlOl0l)
$Аоео0($1ccМр);
});

if($MpIсОl)
mc.addEventListener(MouseEvent.MOUSE_OUT,()=>
{
if($MpIсОl)
$MpIсОl.textColor=$TМIAАО;
});

mc.addEventListener(MouseEvent.MOUSE_DOWN,()=>
{
if(MovieClip.current_hover!==mc)
return;

$Аоео0($pHpсA);
});

mc.addEventListener(MouseEvent.CLICK,params.action);
}
}

return mc;
}

static $OНАTOI(params)
{
let mc=new MovieClip();

if(params[$eТоM]===undefined)
mc[$eТоM]=Math.round(800/2-params.w/2);
else
mc[$eТоM]=params[$eТоM];

if(params[$рHОМ]===undefined)
mc[$рHОМ]=Math.round(400/2-params.h/2);
else
mc[$рHОМ]=params[$рHОМ];

mc.graphics=new Graphics(false);
mc.graphics.clear();
if(params[$clе0р]===HUD.$рММеIA)
{
mc.graphics.beginFill($OlА0M);
}
else
if(params[$clе0р]===HUD.$HOAAоM)
{
mc.graphics.beginFill($IcеоН);
}
else
if(params[$clе0р]===HUD.$еНolМН)
{
mc.graphics.setStokeStyle(1,$еMТlМ);
mc.graphics.beginFill($TT0рA);
}
else
if(params[$clе0р]===HUD.$HНАМАp)
{
mc.graphics.createLinearGradient(0,0,params.w,0,[0,1],[$TT0рA,$T1e0о]);

}
else
8;

{
mc.graphics.drawRect(0,0,params.w,params.h);
}
mc.graphics.endFill();

if(params[$clе0р]===HUD.$еНolМН)
{
mc.graphics.stroke();
}


if(params[$clе0р]===HUD.$рММеIA)
{

mc.addEventListener(MouseEvent.MOUSE_OVER,()=>{});
mc.addEventListener(MouseEvent.MOUSE_DOWN,()=>{});
mc.addEventListener(MouseEvent.CLICK,()=>{});
}

return mc;
}

static $OоОT1е(color,x=0,y=0,w=800,h=400)
{
let mc=new MovieClip();
mc.graphics=new Graphics(false);
mc.graphics.clear();
mc.graphics.beginFill(color);
mc.graphics.drawRect(x,y,w,h);
mc.graphics.endFill();
return mc;
}

static $ТHA0H(params)
{
let fontSize=params.size||12;
let font=params.font||$еМрIО;
let $01HIсO=params.bold||false;
let letterSpacing=params.letterSpacing||0;
let color=params.color||$МMее;
let align=params.align||$TcpТ;
let hit_test_area_grow=params.hit_test_area_grow||0;

let $р0ОAАс=params.$р0ОAАс||$МMее;

let $eМHHAc=params.$eМHHAc||$0OрТ;

if(params[$clе0р]===HUD.$AA0HрH)
{
font=params.font||$IА0AO;
fontSize=params.size||10;
color=params.color||$АAТA1;
align=params.align||$оceO;
}
else
if(params[$clе0р]===HUD.$lpНАA)
{
}
else
if(params[$clе0р]===HUD.$cММIсО)
{
color=params.color||$МТpIс;
}
else
if(params[$clе0р]===HUD.$lМ0pМ)
{
font=params.font||$еО01М;
fontSize=params.size||11;
align=params.align||$оceO;
}
else
if(params[$clе0р]===HUD.$рМоМcT)
{
align=params.align||$оceO;
fontSize=params.size||9;
}
else
8;

let $MpIсОl=new TextField();
$MpIсОl[$eТоM]=params[$eТоM]||0;
$MpIсОl[$рHОМ]=(params[$рHОМ]||0)+Math.round(fontSize/2*0.8);
$MpIсОl.align=align;
$MpIсОl.font=($01HIсO ? $1oМТМ : $0OрТ)+(fontSize*SpriteSheets.text_quality_scale)+$pоММI+font;
$MpIсОl.letterSpacing=letterSpacing*SpriteSheets.text_quality_scale;
$MpIсОl.scaleX=
$MpIсОl.scaleY=1/SpriteSheets.text_quality_scale;

$MpIсОl.textColor=color;

if(params.text)
$MpIсОl.text=params.text;

if(params.htmlText)
$MpIсОl.htmlText=params.htmlText;


if(params.action)
{
if(params.$AoАe1o)
{
}
else
{
$MpIсОl.addEventListener(MouseEvent.MOUSE_OVER,()=>
{
if(MovieClip.current_hover!==$MpIсОl)
return;

if(params.$HTОо0о!==true)
$Аоео0($1ccМр);

$MpIсОl.textColor=$р0ОAАс;

HUD.$00рос0(null,(typeof $eМHHAc===$МОTМ)? $eМHHAc(): $eМHHAc,false);
});

$MpIсОl.addEventListener(MouseEvent.MOUSE_OUT,()=>
{
if(MovieClip.current_hover!==$MpIсОl)
return;

$MpIсОl.textColor=color;

HUD.$00рос0(null,$0OрТ);
});
}

$MpIсОl.addEventListener(MouseEvent.MOUSE_DOWN,()=>
{
if(MovieClip.current_hover!==$MpIсОl)
return;

if(params.$HTОо0о!==true)
$Аоео0($pHpсA);

params.action();
});


}


$MpIсОl.hit_test_area_grow=hit_test_area_grow;

return $MpIсОl;
}

static $ТАoAOр(params={})
{
let $1IНplc=(params.$1IНplc===undefined)? true : params.$1IНplc;
let $НОНеAО=(params.$НОНеAО===undefined)? true : params.$НОНеAО;

let mc=new MovieClip();

mc.element=$АМeАсe.$ocееТ0();

if($НОНеAО)
$АМeАсe.overlay.append(mc.element);
else
$АМeАсe.$epрOHТ.append(mc.element);

mc.addEventListener(Event.ENTER_FRAME,()=>
{


let[$HОpcl,$llМTO]=mc.localPointToScenePoint(0,0);


if($1IНplc)
{
mc.element.style.transform=$МАоIТ+$HОpcl+$lcеHН+$llМTO+$ТМcрА;
}
else
{
mc.element.style.left=$HОpcl+$IppoI;
mc.element.style.top=$llМTO+$IppoI;
}
});

mc.onRemove=()=>
{
mc.element.remove();
mc.element=null;
};

return mc;
}

static $ОeОHlМ(params)
{





let x=params[$eТоM]||0;
let y=params[$рHОМ]||0;
let w=params.w||200;
let h=params.h||18;
let size=params.size||$0OрТ;
let color=params.color||$0OрТ;
let text=params.text||$0OрТ;
let fill=params.fill||$НHрTH;

let mc=new MovieClip();
mc.graphics=new Graphics(false);
mc.graphics.clear();
mc.graphics.beginFill(fill);
mc.graphics.drawRect(0,0,w,h);
mc.graphics.endFill();

mc[$eТоM]=x;
mc[$рHОМ]=y;

let element=$АМeАсe.$ОeОHlМ(params.multiline||false);
$АМeАсe.overlay.append(element);

mc.onUpdateHTMLElements=()=>
{

let $ТIеесA=null;
let ptr=mc.parent;
while(ptr)
{
if(ptr.isScrollContainer)
{
$ТIеесA=ptr;
break;
}

ptr=ptr.parent;
}





let path=$0OрТ;

let rects=[];

let $сНТHрН=1;
let $Оplll1=-1;

let $оeорTH=(mode,x,y,x2,y2)=>
{
rect(mode,x,y,x2-x,y2-y);
};
let rect=(mode,x,y,w,h)=>
{
if(mode===$сНТHрН)
rects.push({[$eТоM]:x,[$рHОМ]:y,[$есеcT]:x+w,[$Т1Mll]:y+h});
else
{
let $МАOoАО={[$eТоM]:x,[$рHОМ]:y,[$есеcT]:x+w,[$Т1Mll]:y+h};
let $MHОсIН=[];

for(let i=0;i<rects.length;i++)
{
let r=rects[i];
let intersection={
[$eТоM]: Math.max(r[$eТоM],$МАOoАО[$eТоM]),
[$рHОМ]: Math.max(r[$рHОМ],$МАOoАО[$рHОМ]),
[$есеcT]: Math.min(r[$есеcT],$МАOoАО[$есеcT]),
[$Т1Mll]: Math.min(r[$Т1Mll],$МАOoАО[$Т1Mll])
};

if(intersection[$eТоM]<intersection[$есеcT]&&intersection[$рHОМ]<intersection[$Т1Mll])
{

let parts=[
{[$eТоM]: r[$eТоM],[$рHОМ]: r[$рHОМ],[$есеcT]: $МАOoАО[$eТоM],[$Т1Mll]: $МАOoАО[$рHОМ]},
{[$eТоM]: $МАOoАО[$eТоM],[$рHОМ]: r[$рHОМ],[$есеcT]: $МАOoАО[$есеcT],[$Т1Mll]: $МАOoАО[$рHОМ]},
{[$eТоM]: $МАOoАО[$есеcT],[$рHОМ]: r[$рHОМ],[$есеcT]: r[$есеcT],[$Т1Mll]: $МАOoАО[$рHОМ]},
{[$eТоM]: r[$eТоM],[$рHОМ]: $МАOoАО[$рHОМ],[$есеcT]: $МАOoАО[$eТоM],[$Т1Mll]: $МАOoАО[$Т1Mll]},

{[$eТоM]: $МАOoАО[$есеcT],[$рHОМ]: $МАOoАО[$рHОМ],[$есеcT]: r[$есеcT],[$Т1Mll]: $МАOoАО[$Т1Mll]},
{[$eТоM]: r[$eТоM],[$рHОМ]: $МАOoАО[$Т1Mll],[$есеcT]: $МАOoАО[$eТоM],[$Т1Mll]: r[$Т1Mll]},
{[$eТоM]: $МАOoАО[$eТоM],[$рHОМ]: $МАOoАО[$Т1Mll],[$есеcT]: $МАOoАО[$есеcT],[$Т1Mll]: r[$Т1Mll]},
{[$eТоM]: $МАOoАО[$есеcT],[$рHОМ]: $МАOoАО[$Т1Mll],[$есеcT]: r[$есеcT],[$Т1Mll]: r[$Т1Mll]}
];

for(let part of parts)
if(part[$eТоM]<part[$есеcT]&&part[$рHОМ]<part[$Т1Mll])
$MHОсIН.push(part);
}
else
$MHОсIН.push(r);
}
rects=$MHОсIН;
}
};
let delta=mc.localPointToScenePoint(0,0);
let $1сMoНp=(c)=>
{
let g=c.graphics;
if(g)
{
let min=c.localPointToScenePoint(g.bounds[$рсТTA],g.bounds[$llОOO]);
let max=c.localPointToScenePoint(g.bounds[$есеcT],g.bounds[$Т1Mll]);




min[1]-=delta[1];

max[1]-=delta[1];

$оeорTH($Оplll1,
-10000,min[1],
10000,max[1]);


}
};

if($ТIеесA)
rect($сНТHрН,0,-mc[$рHОМ]-$ТIеесA.scroll_y,$ТIеесA.scroll_area_width,$ТIеесA.scroll_area_height);

let $cАcНMM=HUD.$plАAO();
if($cАcНMM)
if(mc!==globalThis.$еМОАе0)
$1сMoНp($cАcНMM);

if($ТeНОН.visible)
$1сMoНp($ТeНОН.bg);

for(let i=0;i<rects.length;i++)
{
let r=rects[i];
path+=$elрОе+r[$eТоM]+$cTр0+r[$рHОМ]+$AHHcМ+r[$есеcT]+$cTр0+r[$рHОМ]+$AHHcМ+r[$есеcT]+$cTр0+r[$Т1Mll]+$AHHcМ+r[$eТоM]+$cTр0+r[$Т1Mll]+$IIоАр;
}

element.style.clipPath=$оeTМe+path+$МрНMc;

};

if(params[$ТcIH])
if(!HUD.$eНОТlе)
element.style.webkitTextSecurity=$о1ТНH;

element.style.visibility=$Iсo1e;

if(size!==$0OрТ)
element.style.fontSize=size+$IppoI;

if(color!==$0OрТ)
element.style.color=color;

element.$HTОOее=mc;






element.addEventListener($ТeAАe,()=>
{
HUD.$НТI0T=element;
});
element.addEventListener($1ТОeA,()=>
{
if(HUD.$НТI0T===element)
HUD.$НТI0T=null;
});

mc.addEventListener(Event.ENTER_FRAME,()=>
{
element.style.visibility=$0OрТ;

let[$HОpcl,$llМTO]=mc.localPointToScenePoint(0,0);



element.style.top=$llМTO+$IppoI;

element.style.height=h+$IppoI;


element.style.left=0+$IppoI;
element.style.paddingLeft=($HОpcl+5)+$IppoI;
element.style.width=w+($HОpcl)+$IppoI;

element.style.pointerEvents=(
(MovieClip.current_hover===mc&&!MovieClip.click_on_release_for)||
document.activeElement===element
)? $0OрТ : $MOTМо;
});
mc.addEventListener(MouseEvent.MOUSE_OVER,()=>
{
if(MovieClip.current_hover!==mc)
return;


});
mc.addEventListener(MouseEvent.MOUSE_OUT,()=>
{
if(MovieClip.current_hover!==mc)
return;


});

mc.onRemove=()=>
{
if(HUD.$НТI0T===element)
HUD.$НТI0T=null;

element.remove();
element=null;
};

mc.onFocus=()=>
{
setTimeout(()=>
{
if(element)
element.focus();
},0);
};

if(params.$ОАHOМе)
{
element.addEventListener($ТeAАe,()=>
{
element.$Ae0ОIА(0,element.value.length);
});
element.addEventListener($1ТОeA,()=>
{
element.blur();
});
}

element.onmousedown=(e)=>
{
mc.runOwnEvents(MouseEvent.MOUSE_DOWN,e);
e.stopImmediatePropagation();
stage.focus=mc;
};

for(let i=0;i<2;i++)
setGetterSetter(
mc,

(i===0)? $p0оеА : $А1lAA,

()=>
{
if(!element)
{

throw new Error();
return $0OрТ;
}










return element.$рТclАc();
},

(v)=>
{
if(!element)
{

throw new Error();
return;
}

element.$1ооМАН(v);
}
);

mc.value=text;

mc.onAddedAsChild=()=>
{
mc.onAddedAsChild=null;
mc.onUpdateHTMLElements();
};

return mc;
}

static $ОНHОеТ($TоpМMT,x=0,y=0,$оe0AоМ=0,$А0OAlТ=0)
{
let mc=new MovieClip();
mc.graphics=new Graphics(false);
mc.graphics.drawImage($TоpМMT,-$оe0AоМ,-$А0OAlТ);

mc[$eТоM]=x;
mc[$рHОМ]=y;

return mc;
}
static $сO11Tе(text)
{
let x=18;
let y=19;
let w=549;
let h=21;

let mc=new MovieClip();
mc.graphics=new Graphics(false);
mc.graphics.clear();
mc.graphics.createLinearGradient(0,0,w,0,[0,1],[$oTТTc,$о1I10]);
mc.graphics.drawRect(0,0,w,h);
mc.graphics.endFill();

mc[$eТоM]=x;
mc[$рHОМ]=y;

mc.$AНOHI0=mc.addChild(HUD.$ТHA0H({text:text,[$eТоM]:7,[$рHОМ]:~~(h/2),align:$TcpТ,letterSpacing: 2,size: 12,[$clе0р]: HUD.$AA0HрH}));

return mc;
}

static $ТМр0e1($Io1eАМ,x,y,title)
{
let c=$Io1eАМ.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
text: title+$lМе1,
[$eТоM]: x,
[$рHОМ]: y,
align: $МОIс
}));

if(c.text.indexOf($О0l1)!==-1||c.text.indexOf($соТО)!==-1)
{
c.align=$TcpТ;
c.htmlText=title.split($О0l1).join($соМlМ).split($соТО).join($с1cc1)+$lМе1;
c[$eТоM]-=c.graphics.bounds[$есеcT]*c.scaleX+3;
}
return c;
}
static $l0MеА0($Io1eАМ,x,y,title,$IНрОTI,$eНIoMH,$МceAАе,$pНH0cl=null,$рHАoТО=HUD.$ООeеep,$lрТрTс=Infinity,$еIcHМТ=null)
{
if(title!==$0OрТ)
HUD.$ТМр0e1($Io1eАМ,x,y,title);


let spacing=3;

let $10TO0H=50+spacing;
let $H0cMOO=18;

let offset=0;

let $HОMсM1=[];

let value;
eval(`value=${$МceAАе};`);

for(let i=0;i<$IНрОTI.length;i++)
{
let $MlTIOI=$10TO0H;

let $еоepI=i;

let t=$IНрОTI[i];

$MlTIOI=Math.max($10TO0H,$10TO0H+($10TO0H)/2*Math.ceil(t.length/3.5-1.5));


$MlTIOI-=spacing;













if(offset+$MlTIOI>$lрТрTс)
{
offset=0;
y+=$еIcHМТ();
}

let b=$Io1eАМ.addChild(HUD.$oOcНТ({
[$clе0р]: $рHАoТО,
caption: t,
[$eТоM]: x+offset+6,
[$рHОМ]: y-$H0cMOO/2,
w: $MlTIOI,
h: $H0cMOO,

action:()=>
{
value=$eНIoMH[$еоepI];
if($МceAАе.charAt(0)!==$HlМl)
eval(`${$МceAАе}=value;`);

for(let i=0;i<$HОMсM1.length;i++)
$HОMсM1[i].gotoAndStop(($eНIoMH[i]===value)? 2 : 1);

if($pНH0cl)
$pНH0cl(value);
}
}));
$HОMсM1.push(b);

if($eНIoMH[i]===value)
b.gotoAndStop(2);

offset+=$MlTIOI+spacing;
}

return $HОMсM1;
}

static $сНМTpI(parent,params)
{
let x=params[$eТоM]||0;
let y=params[$рHОМ]||0;
let w=params.w||100;
let h=params.h||100;

let $сIpIAM=params.$сIpIAM||false;
let $ТepсМН=params.$ТepсМН||false;

let mc=new MovieClip();

mc.isScrollContainer=true;

mc.scroll_y=0;
mc.$МoНHMH=100;
mc.$oMМcТе=0;
mc.scroll_area_width=w;
mc.scroll_area_height=h;




mc[$eТоM]=x;
mc[$рHОМ]=y;

parent.addChild(mc);

let $eМОрlc=1;

let $ееОо1I=null;




let $l1oHOH=false;
let $TрМl1I=0;
let $1AccHT=0;

let $eolpOA=(v)=>
{





if(!$l1oHOH)
{
if(v>0&&v<HUD.$0орНOс)
v=HUD.$0орНOс;

if(v!==$eМОрlc)
{
$eМОрlc=v;

let old_y=$ееОо1I ? $ееОо1I[$рHОМ] : 0;

if($ееОо1I)
$ееОо1I.remove();

$ееОо1I=parent.addChild(HUD.$oOcНТ({caption:$0OрТ,color:$ТА1lН,[$clе0р]: HUD.$НОlО0А,[$eТоM]:x+w,[$рHОМ]:y,w:HUD.$0орНOс,h:$eМОрlc}));
mc.$ееОо1I=$ееОо1I;

$ееОо1I[$рHОМ]=old_y;

$ееОо1I.addEventListener(MouseEvent.MOUSE_DOWN,()=>
{
$l1oHOH=true;
$TрМl1I=$ееОо1I[$рHОМ];
$1AccHT=mouseY;
});
$ееОо1I.addEventListener(MouseEvent.MOUSE_UP_ANYWHERE,()=>
{
$l1oHOH=false;
});

$ееОо1I.visible=(v>0&&v<h);
}
}
};
$eolpOA(30);

let $НoсOcT=false;

mc.$оТНАо0=()=>
{
$НoсOcT=true;
$ееОо1I[$рHОМ]=y;
mc.scroll_y=0;
};

let $HОp1рI=true;

mc.context2d_prerender_callback=(ctx)=>
{
if($HОp1рI)
{
$HОp1рI=false;

$НoсOcT=true;
$сHОНlо();
}

ctx.beginPath();
ctx.rect(-5,0,w+5,h);
ctx.clip();

ctx.translate(0,mc.scroll_y);
};



mc.$AоOАН=()=>
{

let $ММННIО=0;

function $1срсlс($eMOАе,$AОIpТО=0)
{


if($eMOАе.graphics)
{
$ММННIО=Math.max($ММННIО,$eMOАе[$рHОМ]+$eMOАе.graphics.bounds[$Т1Mll]+$eMOАе.graphics.bounds.outline+$AОIpТО-h);


}

if($сIpIAM)
for(let i=0;i<$eMOАе.children.length;i++)
$1срсlс($eMOАе.children[i],$AОIpТО+$eMOАе[$рHОМ]);
}
for(let i=0;i<mc.children.length;i++)
$1срсlс(mc.children[i],0);

mc.$МoНHMH=$ММННIО;

$eolpOA(Math.min(1,h/($ММННIО+h))*h);
};

mc.onChildDetach=()=>
{
$НoсOcT=true;
};

let $сHОНlо=()=>
{
if(!$l1oHOH&&Math.abs(mc.$oMМcТе)<0.1&&!$НoсOcT)
{
}
else
{



if(!$ТepсМН)
mc.$AоOАН();

if($НoсOcT)
{
let $IIНocc=y;
let $cНсрTe=y+h-$eМОрlc;

if($ееОо1I[$рHОМ]>$cНсрTe)
$ееОо1I[$рHОМ]=$cНсрTe;

if(Math.abs($cНсрTe-$IIНocc)>0.001)
mc.scroll_y=($ееОо1I[$рHОМ]-$IIНocc)/($cНсрTe-$IIНocc)*(-mc.$МoНHMH);
}
$НoсOcT=false;



mc.scroll_y+=mc.$oMМcТе*0.1;
mc.$oMМcТе*=0.9;

if(mc.scroll_y>0)
{
mc.scroll_y=0;
mc.$oMМcТе=0;
}

if(mc.scroll_y<-mc.$МoНHMH)
{
mc.scroll_y=-mc.$МoНHMH;
mc.$oMМcТе=0;
}



if(mc.$МoНHMH<0.001)
mc.$МoНHMH=0.001;

let $IIНocc=y;
let $cНсрTe=y+h-$eМОрlc;
if($l1oHOH)
{
$ееОо1I[$рHОМ]=$TрМl1I+mouseY-$1AccHT;

if($ееОо1I[$рHОМ]<$IIНocc)
$ееОо1I[$рHОМ]=$IIНocc;

if($ееОо1I[$рHОМ]>$cНсрTe)
$ееОо1I[$рHОМ]=$cНсрTe;

if(Math.abs($cНсрTe-$IIНocc)>0.001)
mc.scroll_y=($ееОо1I[$рHОМ]-$IIНocc)/($cНсрTe-$IIНocc)*(-mc.$МoНHMH);
}
else
{
$ееОо1I[$рHОМ]=mc.scroll_y/(-mc.$МoНHMH)*($cНсрTe-$IIНocc)+$IIНocc;

if($ееОо1I[$рHОМ]<$IIНocc)
$ееОо1I[$рHОМ]=$IIНocc;

if($ееОо1I[$рHОМ]>$cНсрTe)
$ееОо1I[$рHОМ]=$cНсрTe;
}

mc.forEachChild((c)=>
{
if(c.onUpdateHTMLElements)
c.onUpdateHTMLElements();
});
}
};


let $ApАcсo=MovieClip.$pАОНoе;
MovieClip.$pАОНoе=true;
{
addEventListener(Event.ENTER_FRAME,$сHОНlо);
}
MovieClip.$pАОНoе=$ApАcсo;



mc.onRemove=()=>
{
removeEventListener(Event.ENTER_FRAME,$сHОНlо);
};

mc.addEventListener(MouseEvent.MOUSE_WHEEL,(e)=>
{
if(mc.GetInheritedVisibility())
mc.$oMМcТе+=e.wheelDeltaY/3;
});

return mc;
}

static $e0рНco()
{
let mc=HUD.$оeрМM1;

let x,y;

if(mc)
{
[x,y]=mc.localPointToScenePoint(mc.graphics.bounds[$есеcT],mc.graphics.bounds[$Т1Mll]);
}
else
{
x=myCursor[$eТоM]+7;
y=myCursor[$рHОМ]+7;
}

HUD.$eМHHAc[$eТоM]=x+10;
HUD.$eМHHAc[$рHОМ]=y+10;

let w=HUD.$eМHHAc.graphics.bounds[$есеcT];
let h=HUD.$eМHHAc.graphics.bounds[$Т1Mll];

if(HUD.$eМHHAc[$eТоM]+w>800-20)
HUD.$eМHHAc[$eТоM]=800-w-20;

if(HUD.$eМHHAc[$рHОМ]+h>400-20)
HUD.$eМHHAc[$рHОМ]=400-h-20;
}
static $О1ООoН()
{
HUD.$00рос0(null,$0OрТ,true);
}
static $00рос0(mc,$eМHHAc,$HcНМMc=true)
{
HUD.$оeрМM1=mc;
HUD.$OMАрoO=$eМHHAc;

if(HUD.$eМHHAc)
{
HUD.$eМHHAc.remove();
HUD.$eМHHAc=null;
}

if($eМHHAc.length>0)
{
if($HcНМMc)
show();
else
setTimeout(show,250);
}
else
{
return;
}
function show()
{
if(HUD.$оeрМM1!==mc)
return;
if(HUD.$OMАрoO!==$eМHHAc)
return;

let padding=4;

if(!HUD.$eМHHAc)
{
HUD.$eМHHAc=new MovieClip();
HUD.$eМHHAc.graphics=new Graphics(false);

HUD.$eМHHAc.$MН1Mp=HUD.$eМHHAc.addChild(HUD.$ТHA0H({[$eТоM]:padding,[$рHОМ]:4+padding,size:8,[$clе0р]:HUD.$lpНАA}));

myCursor._sprite.parent.addChildAt(HUD.$eМHHAc,myCursor._sprite.parent.children.indexOf(myCursor._sprite));
}

HUD.$eМHHAc.$MН1Mp.htmlText=$eМHHAc;

HUD.$eМHHAc.visible=($eМHHAc.length>0);

let w=HUD.$eМHHAc.$MН1Mp.graphics.bounds[$есеcT]*HUD.$eМHHAc.$MН1Mp.scaleX+padding*2;
let h=(HUD.$eМHHAc.$MН1Mp.graphics.bounds[$Т1Mll]-HUD.$eМHHAc.$MН1Mp.graphics.bounds[$llОOO])*HUD.$eМHHAc.$MН1Mp.scaleY+padding*2;

HUD.$eМHHAc.graphics.clear();
HUD.$eМHHAc.graphics.beginFill($0OррI);
HUD.$eМHHAc.graphics.drawRect(0,0,w,h);
HUD.$eМHHAc.graphics.endFill();

HUD.$e0рНco();
}
}



static $oMp0c(params)
{
let $Me1cМ=params.parent;

$Me1cМ.$МeсlTT=[];

let $IсleT=params.$IсleT;
let $IIоMpM=19;

let $AТeMMр=params.$AТeMMр||0;

$AТeMMр+=0.5;

let $lAoТoH=(params.$lAoТoH===true);

$Me1cМ.$МeсlTT.push($Me1cМ.addChild(HUD.$oOcНТ({[$clе0р]: HUD.$ОТТроМ,[$eТоM]: $IсleT+$IIоMpM*0,[$рHОМ]: $AТeMMр,w: 16,h: 16,$eМHHAc: $lAoТoH ? $cM1Мe : $pHАpН,action:()=>
{

$Аоео0($АААеI);

HUD.$00рос0(HUD.$оeрМM1,$0еl00+params.$оНHlH()+$IlcOl);

try
{
navigateToURL(new URLRequest($HАo1l+params.$оНHlH()),$рcl0);
}
catch(e)
{
ReportCaughtError(e);
trace($ААрO);
}
}})));

$Me1cМ.$МeсlTT.push($Me1cМ.addChild(HUD.$oOcНТ({[$clе0р]: HUD.$ОТТроМ,[$eТоM]: $IсleT+$IIоMpM*2.5,[$рHОМ]: $AТeMMр,w: 16,h: 16,$eМHHAc:$Hеoеe,action:()=>
{

$Аоео0($АААеI);


if(params.$оНHlH()===$pТIoA)
{
HUD.$MссМТ($lТрpM,
function $oМоlHо(){
$pМ1eTp(1);
},
function $HТ0оОН(){
$pМ1eTp(0);
},
$МTе1I,$НОоcH,HUD.$оcОlоM
);
}
else
$pМ1eTp();

function $pМ1eTp($cTO1Aо)
{
$ММ.$ceTOI.$OMeTо($ММ.$МеoрО,[$ММ[$eТеlс],params.$TlIро(),$ММ.$p1еeс,$cTO1Aо?$АрНО:$MpoО],($Ae0рOМ)=>
{
ChatNewMsg($Ae0рOМ[0]);
});
}


} })));
if(params.$0HHpТH===false)
$Me1cМ.$МeсlTT[$Me1cМ.$МeсlTT.length-1].visible=false;

$Me1cМ.$МeсlTT.push($Me1cМ.addChild(HUD.$oOcНТ({[$clе0р]: HUD.$ОТТроМ,[$eТоM]: $IсleT+$IIоMpM*1,[$рHОМ]: $AТeMMр,w: 16,h: 16,$eМHHAc:$1IcIc,action:()=>
{

$Аоео0($АААеI);

if($0Ме1А[$НAlНc].$оeoТе||$00pеH)
$ОMOTе=params.$еоepI;
else
HUD.$00рос0(HUD.$оeрМM1,$ООpeI);

} })));

if(params.$еоepI===undefined)
$Me1cМ.$МeсlTT[$Me1cМ.$МeсlTT.length-1].visible=false;

let $AТсTpо=$lAoТoH ? $c1Оcp : $реOop;

$Me1cМ.$МeсlTT.push($Me1cМ.addChild(HUD.$oOcНТ({[$clе0р]: HUD.$ОТТроМ,[$eТоM]: $IсleT+$IIоMpM*4,[$рHОМ]: $AТeMMр,w: 16,h: 16,$eМHHAc:$oрOOe+$AТсTpо+$ppol0,action:()=>
{

$Аоео0($АААеI);

$ММ.$ceTOI.$OMeTо($ММ.$МеoрО,[$ММ[$eНpMO],params.$TlIро(),$ММ.$p1еeс],($Ae0рOМ)=>
{
ChatNewMsg($Ae0рOМ[0]);

let $АM11еA=($HрТМc[params.$еоepI]||$0Ме1А[params.$еоepI]);

if($ММ[$OpНpp])
if($ММ[$OpНpp][$o0ТТM]<=0)
if($АM11еA[$1есАТ]<=0)
{
ChatNewMsg($Нec1М);


if(parseInt($cMАеН)>0)
{























HUD.$MссМТ($TоcM1,
function $oМоlHо(){
$НоHA1($HМОTA+params.$еоepI);
$oIТ10();

$ММ[$OpНpp][$o0ТТM]=1;
},
function $HТ0оОН(){
},
$Мр1cp,$IНеОМ,HUD.$оcОlоM
);
}
}

if(params.$ОО1есo)
params.$ОО1есo();
});

} })));
$Me1cМ.$МeсlTT.push($Me1cМ.addChild(HUD.$oOcНТ({[$clе0р]: HUD.$ОТТроМ,[$eТоM]: $IсleT+$IIоMpM*5,[$рHОМ]: $AТeMMр,w: 16,h: 16,$eМHHAc:$OIpре+$AТсTpо+$0oAрO,action:()=>
{

$Аоео0($АААеI);

$ММ.$ceTOI.$OMeTо($ММ.$МеoрО,[$ММ[$lO0OМ],params.$TlIро(),$ММ.$p1еeс],($Ae0рOМ)=>
{
ChatNewMsg($Ae0рOМ[0]);

if(params.$ОО1есo)
params.$ОО1есo();
});

} })));

if($ММ.$ppO0l[$сpo0M])
{
$Me1cМ.$МeсlTT.push($Me1cМ.addChild(HUD.$oOcНТ({[$clе0р]: HUD.$ОТТроМ,[$eТоM]: $IсleT+$IIоMpM*6.5,[$рHОМ]: $AТeMMр,w: 16,h: 16,$eМHHAc:$оAlрT+$AТсTpо+$Tc1cс,action:()=>
{
let login=params.$оНHlH();

if(login===$pТIoA)
login=$рсррМ;


HUD.$MссМТ($OeМpс+login+$сpсTc,
function $oМоlHо(){

$Аоео0($АААеI);

$ММ.$ceTOI.$OMeTо($ММ.$МеoрО,[$ММ[$оpMHc],params.$TlIро(),$ММ.$p1еeс],($Ae0рOМ)=>
{
ChatNewMsg($Ae0рOМ[0]);

if(params.$ОО1есo)
params.$ОО1есo();
});
},
function $HТ0оОН(){
},
$Мр1cp,$T0o0T,HUD.$оcОlоM
);

} })));
}

for(let i=0;i<$Me1cМ.$МeсlTT.length;i++)
{
$Me1cМ.$МeсlTT[i].addChild(SpriteSheets.AssembleFrameBasedMovieClip(new MovieClip(),$eНОcТ).gotoAndStop(i+1));
}
}
}
HUD.init_class();