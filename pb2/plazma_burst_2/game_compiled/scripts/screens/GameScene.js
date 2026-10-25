

{
let $рМOlр1=()=>$pMМ1 ? 90 : 143;

let $ee0оMе=0;
let $еo010О=62;

let $e1lоcM=()=>
{
let $НОННсА=113;

if($НОННсА<$ee0оMе+55)
$НОННсА=$ee0оMе+55;

return $НОННсА;
};

HUD.$АAорI=()=>
{
graphics_3d.removeAllChildrenGraphicsAndResetTransform();
game.removeAllChildrenGraphicsAndResetTransform();
graphics_3d_front.removeAllChildrenGraphicsAndResetTransform();

let $AрТc1c=stage.children.indexOf(globalThis.$A1Hpe)+1;



globalThis.$1оIlOр=stage.addChildAt(HUD.$1TTeсМ({
caption: $ТOMAс,
[$eТоM]: 0,
[$рHОМ]: 0,
hp:[$ТcАсТ,$ocр0o],
$НT0eIM:[$O0lHo,$Hp1МM],
$рННр0T: $ТcАсТ



}),$AрТc1c);

globalThis.$MТcTH=stage.addChildAt(HUD.$1TTeсМ({
caption: $IОоАT,
[$eТоM]: 0,
[$рHОМ]: 20,
hp:[$рO1AА,$coH1O],
$рННр0T: $OМОOН
}),$AрТc1c);

globalThis.$M1МТ1=stage.addChildAt(HUD.$1TTeсМ({
caption: $TTAIА,
[$eТоM]: 297,
[$рHОМ]: 0,
hp:[$IоHTО,$ecоlM],
$рННр0T: $OсMТМ
}),$AрТc1c);

globalThis.$e1eoО=stage.addChildAt(new MovieClip(),$AрТc1c);
globalThis.$e1eoО[$eТоM]=3;
globalThis.$e1eoО[$рHОМ]=41;
for(let i=0;i<10;i++)
{
globalThis.$e1eoО[$оlАl+i]=globalThis.$e1eoО.addChild(HUD.$НoccHТ(i));
globalThis.$e1eoО[$оlАl+i][$eТоM]=29*((10+i-1)%10);
}

for(let i=0;i<6;i++)
{
globalThis.$e1eoО[$1Нlp0+i]=globalThis.$e1eoО.addChild(new MovieClip());
globalThis.$e1eoО[$МHМlо+i]=globalThis.$e1eoО.addChild(new MovieClip());
globalThis.$e1eoО[$cТМlО+i]=globalThis.$e1eoО.addChild(new MovieClip());

SpriteSheets.InstallFrameChangeLogic(globalThis.$e1eoО[$1Нlp0+i],SpriteSheets.recognized_parts[$0оAIT]);
SpriteSheets.InstallFrameChangeLogic(globalThis.$e1eoО[$МHМlо+i],SpriteSheets.recognized_parts[$0рТeA]);
SpriteSheets.InstallFrameChangeLogic(globalThis.$e1eoО[$cТМlО+i],SpriteSheets.recognized_parts[$0oТАl]);

globalThis.$e1eoО[$1Нlp0+i][$рHОМ]=
globalThis.$e1eoО[$МHМlо+i][$рHОМ]=
globalThis.$e1eoО[$cТМlО+i][$рHОМ]=23;

globalThis.$e1eoО[$1Нlp0+i][$eТоM]=4+i*Math.round(13.35-4.5);
globalThis.$e1eoО[$МHМlо+i][$eТоM]=65+i*Math.round(13.35-4.5);
globalThis.$e1eoО[$cТМlО+i][$eТоM]=126+i*Math.round(13.35-4.5);
}

let $рcpeоT=$рМOlр1();


globalThis.$cecНH=stage.addChildAt(HUD.$oOcНТ({
[$clе0р]: HUD.$OOМoAe,
caption: $pMМ1 ?($00pеH ? $еApM1 : $eТоOО): $cTpОe,
letterSpacing: $pMМ1 ? 1 : 0,
color: $АА0сМ,
[$eТоM]: 594+143-$рcpeоT,
[$рHОМ]: 0,
w: $рcpeоT,
h: 20,

action:()=>
{
if($eAM0А||!system_non_stop||$НAlНc!==$ОMOTе||$00pеH||globalThis.$сcТAс.visible||globalThis.$TeIOl.visible)
{
if($pMМ1)
{
let slot=$00pеH ?-1 : $ММ.$оОсOс;
let $MНAoM=false;

if($ММ.$ceTOI)
if($ММ[$OpНpp])
$ММ.$ceTOI.$OMeTо($ММ.$МеoрО,[$ММ[$сООНO],$ММ[$OpНpp][$ерlАО],$ММ.$p1еeс,slot,$MНAoM?$АрНО:$0OрТ,$М1AоO],($Ae0рOМ)=>
{
if($Ae0рOМ[0]===$ОеcO)
{
$ММ.$O0МHOо($Ae0рOМ[1],$Ae0рOМ[2]);
}
else
{
ChatNewMsg($Ae0рOМ[1]);
}
});
}
else
{
$IlMНM=false;
$Аоео0($АААеI);
$eAM0А=false;
try
{
navigateToURL(new URLRequest($рТрО),$рcl0);
}
catch(e)
{
ReportCaughtError(e);
trace($ААрO);
}
}
}
else
{
$оеIТМ($HHTТM,$TlНp);
}
}
}),$AрТc1c);

if($pMМ1)
{
globalThis.$ТНсcoс=stage.addChildAt(HUD.$oOcНТ({
[$clе0р]: HUD.$OOМoAe,
caption: $IpсНА,
letterSpacing: 1,
color: $АА0сМ,
[$eТоM]: 594+143-$рcpeоT-1-$рcpeоT,
[$рHОМ]: 0,
w: $рcpeоT,
h: 20,

action:()=>
{
if($eAM0А||!system_non_stop||$НAlНc!==$ОMOTе||$00pеH||globalThis.$сcТAс.visible||globalThis.$TeIOl.visible)
{
$еOpcl();

$IlMНM=false;
globalThis.$сcТAс.visible=true;
HUD.$1с1МТА();
}
else
{
$оеIТМ($HHTТM,$TlНp);
}
}
}),$AрТc1c);
globalThis.$ТНсcoс.visible=(TRACK_MP_LOGS)? true : false;
}
else
{
globalThis.$ТНсcoс=new MovieClip();
}

globalThis.$ppАсо=stage.addChildAt(HUD.$oOcНТ({
[$clе0р]: HUD.$OOМoAe,
caption: $1MеОO,
color: $АА0сМ,
letterSpacing: 1,
[$eТоM]: 738,
[$рHОМ]: 0,
w: 62,
h: 20,
action:()=>{

if($eAM0А||$НAlНc!==$ОMOTе||!system_non_stop||$00pеH||globalThis.$TeIOl.visible)
{
$IlMНM=false;
$Аоео0($АААеI);
$eAM0А=false;

if(!$TeIOl.visible)
{
if(!$pMМ1)
{
system_non_stop=false;

if(!$0Ме1А[$НAlНc].$оeoТе)
{
$сHIlН.visible=true;
JSAudio.UpdateGlobalVolume();
}

$lрТрO=false;
}
$TeIOl.visible=true;
$TeIOl.$oAcTсе();
myCursor.alpha=1;
}
}
else
{
$оеIТМ($HHTТM,$TlНp);
}

}
}),$AрТc1c);

let $e01c1р=stage.addChildAt(new MovieClip(),$AрТc1c);
$e01c1р[$eТоM]=800-113;
$e01c1р[$рHОМ]=21;

globalThis.$e01c1р=$e01c1р;




















HUD.$ТНООH();




globalThis.$TeIOl=stage.addChildAt(HUD.$IAI0Mр(),$AрТc1c);


globalThis.$Teрр0=stage.addChildAt(new MovieClip(),$AрТc1c);
globalThis.$Teрр0.visible=false;
globalThis.$Teрр0[$eТоM]=12;
globalThis.$Teрр0[$рHОМ]=368;
{
let $ТМIОT=0;
let $M1HТТI=0;
let spacing=5;
for(let i=1;i<TextField.STICKER_WIDTHS.length;i++)
{
let w=TextField.STICKER_WIDTHS[i].w/4+10;

if($ТМIОT+w+5>790)
{
$M1HТТI-=32;
$ТМIОT=0;
}

globalThis.$Teрр0.addChild(HUD.$oOcНТ({
[$clе0р]: HUD.$ocсAМе,[$eТоM]: $ТМIОT,[$рHОМ]:-40+$M1HТТI,w:w,h:30,
$eМHHAc: $сTcIo+i+$рoeeI,
action:(event)=>
{
if(globalThis.$АcсAТ.visible)
{
$ТНpОО+=$lОoeТ+i;
$0eoТO();
}
else
{
if($pMМ1)
$ММ.Event(

$ММ[$poАp0],

$ММ.$Oоolр($рlpТe),

TextField.QuickReplaceMyEmojis($lОoeТ+i),
);
else
{
ChatNewMsg($cMроl);
}
}
}
}));

let sticker=globalThis.$Teрр0.addChild(SpriteSheets.AssembleFrameBasedMovieClip(new MovieClip(),$lрelp));
sticker.gotoAndStop(i);

sticker[$eТоM]=$ТМIОT+5;
sticker[$рHОМ]=-32+$M1HТТI;

$ТМIОT+=w+spacing;
}
}


globalThis.$Oc0TT=stage.addChildAt(HUD.$OНАTOI({[$clе0р]: HUD.$HOAAоM,w:778,h:28,[$eТоM]:12,[$рHОМ]:339}),$AрТc1c);
{
let $MpIсОl;

$MpIсОl=globalThis.$Oc0TT.addChild(new TextField());
$MpIсОl[$eТоM]=Math.round(778/2);
$MpIсОl[$рHОМ]=14+4;
$MpIсОl.align=$оceO;
$MpIсОl.font=(12*SpriteSheets.text_quality_scale)+$H0рHl;
$MpIсОl.scaleX=
$MpIсОl.scaleY=1/SpriteSheets.text_quality_scale;
$MpIсОl.text=$TOl0е;

globalThis.$Oc0TT.$MН1Mp=$MpIсОl;
}




{

let $HОpcl=-2;
let $llМTO=6;
let w=580;

globalThis.$lITeI=stage.addChildAt(HUD.$OоОT1е($ТНelp,0,-9,w,270),$AрТc1c);
globalThis.$lITeI[$eТоM]=~~(400-w/2);
globalThis.$lITeI[$рHОМ]=80;
let $TTeMMA=globalThis.$lITeI.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
htmlText:(MP_herolist_name_type===$оIpl)? $oA0H1 : $Mc1оA,
[$eТоM]: $HОpcl+23,
[$рHОМ]: $llМTO+-2,
align: $TcpТ,
color: $МMее,
size: 10,

hit_test_area_grow: 30,

action:()=>
{
MP_herolist_name_type=(MP_herolist_name_type===$оIpl)? $AHop : $оIpl;

$TTeMMA.text=(MP_herolist_name_type===$оIpl)? $oA0H1 : $Mc1оA;
}
}));
globalThis.$lITeI.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
htmlText: $рMOpe,
[$eТоM]: $HОpcl+233+106/2-HUD.$1pel0,
[$рHОМ]: $llМTO+-2,
align: $оceO,
color: $МMее,
size: 10
}));
let $TессTс=globalThis.$lITeI.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
htmlText:(MP_herolist_score_type===$АеНН)? $еAcАT :
(MP_herolist_score_type===$ОНTOр)? $ОoМTp :
(MP_herolist_score_type===$0AрМр)? $НIlpО :
$oМTо,
[$eТоM]: $HОpcl+333+36-HUD.$1pel0,
[$рHОМ]: $llМTO+-2,
align: $МОIс,
color: $МMее,
size: 10,

hit_test_area_grow: 30,

action:()=>
{
if(MP_herolist_score_type===$АеНН)
MP_herolist_score_type=$ОНTOр;
else
if(MP_herolist_score_type===$ОНTOр)
MP_herolist_score_type=$0AрМр;
else
if(MP_herolist_score_type===$0AрМр)
MP_herolist_score_type=$АеНН;

$TессTс.text=
(MP_herolist_score_type===$АеНН)? $еAcАT :
(MP_herolist_score_type===$ОНTOр)? $ОoМTp :
(MP_herolist_score_type===$0AрМр)? $НIlpО :
$oМTо;
}
}));
globalThis.$lITeI.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
htmlText: $сАА10,
[$eТоM]: $HОpcl+386+42-HUD.$1pel0,
[$рHОМ]: $llМTO+-2,
align: $МОIс,
color: $МMее,
size: 10
}));
let $I0HеOl=globalThis.$lITeI.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
htmlText:(MP_herolist_ping_type===$op1о)? $O0eIT :
(MP_herolist_ping_type===$1есАТ)? $oApoс :
$oМTо,
[$eТоM]: $HОpcl+427+43-HUD.$1pel0,
[$рHОМ]: $llМTO+-2,
align: $МОIс,
color: $МMее,
size: 10,

hit_test_area_grow: 30,

action:()=>
{
if(MP_herolist_ping_type===$op1о)
MP_herolist_ping_type=$1есАТ;
else
if(MP_herolist_ping_type===$1есАТ)
MP_herolist_ping_type=$op1о;

$I0HеOl.text=
(MP_herolist_ping_type===$op1о)? $O0eIT :
(MP_herolist_ping_type===$1есАТ)? $oApoс :
$oМTо;
}
}));

$HОpcl+=10;

let $TрНТlо=70;
let $HАecАe=-20;
let $IHНММТ=-5;

globalThis.$lITeI.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
htmlText: $1рOMМ,
[$eТоM]: $HОpcl+8+$TрНТlо,
[$рHОМ]: $llМTO+197,
align: $МОIс,
color: $0ММеО,
size: 10
}));
globalThis.$lITeI.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
htmlText: $1оAеА,
[$eТоM]: $HОpcl+8+$TрНТlо,
[$рHОМ]: $llМTO+217,
align: $МОIс,
color: $0ММеО,
size: 10
}));
globalThis.$lITeI.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
htmlText: $оеpoН,
[$eТоM]: $HОpcl+8+$TрНТlо,
[$рHОМ]: $llМTO+237,
align: $МОIс,
color: $0ММеО,
size: 10
}));

globalThis.$lITeI.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
htmlText: $АMMeе,
[$eТоM]: $HОpcl+284+$HАecАe+53,
[$рHОМ]: $llМTO+197,
align: $МОIс,
color: $0ММеО,
size: 10
}));
globalThis.$lITeI.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
htmlText: $pОАIp,
[$eТоM]: $HОpcl+284+$HАecАe+53,
[$рHОМ]: $llМTO+217,
align: $МОIс,
color: $0ММеО,
size: 10
}));
globalThis.$lITeI.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
htmlText: $М0e0О,
[$eТоM]: $HОpcl+284+$HАecАe+53,
[$рHОМ]: $llМTO+237,
align: $МОIс,
color: $0ММеО,
size: 10
}));

globalThis.$lITeI.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
htmlText: $ОOААA,
[$eТоM]: $HОpcl+284+$HАecАe+53+150+$IHНММТ,
[$рHОМ]: $llМTO+197,
align: $МОIс,
color: $0ММеО,
size: 10
}));

$HОpcl+=5;


globalThis.$lITeI.f1=globalThis.$lITeI.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
htmlText: $oМTо,
[$eТоM]: $HОpcl+$TрНТlо+10,
[$рHОМ]: $llМTO+197,
align: $TcpТ,
color: $МMее,
size: 10
}));
globalThis.$lITeI.f2=globalThis.$lITeI.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
htmlText: $oМTо,
[$eТоM]: $HОpcl+$TрНТlо+10,
[$рHОМ]: $llМTO+217,
align: $TcpТ,
color: $МMее,
size: 10
}));
globalThis.$lITeI.f3=globalThis.$lITeI.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
htmlText: $oМTо,
[$eТоM]: $HОpcl+$TрНТlо+10,
[$рHОМ]: $llМTO+237,
align: $TcpТ,
color: $МMее,
size: 10
}));

globalThis.$lITeI.f4=globalThis.$lITeI.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
htmlText: $oМTо,
[$eТоM]: $HОpcl+$HАecАe+339,
[$рHОМ]: $llМTO+197,
align: $TcpТ,
color: $МMее,
size: 10
}));
globalThis.$lITeI.f5=globalThis.$lITeI.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
htmlText: $oМTо,
[$eТоM]: $HОpcl+$HАecАe+339,
[$рHОМ]: $llМTO+217,
align: $TcpТ,
color: $МMее,
size: 10
}));
globalThis.$lITeI.f6=globalThis.$lITeI.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
htmlText: $oМTо,
[$eТоM]: $HОpcl+$HАecАe+339,
[$рHОМ]: $llМTO+237,
align: $TcpТ,
color: $МMее,
size: 10
}));

globalThis.$lITeI.f7=globalThis.$lITeI.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
htmlText: $oМTо,
[$eТоM]: $HОpcl+$HАecАe+339+150+$IHНММТ,
[$рHОМ]: $llМTO+197,
align: $TcpТ,
color: $МMее,
size: 10
}));

globalThis.$lITeI.addChild(HUD.$OоОT1е($HAlIе,14,14,w-28,175));
globalThis.$lITeI.$O1Нр0=HUD.$сНМTpI(globalThis.$lITeI,{
[$eТоM]: 14+3,
[$рHОМ]: 14+3,
w: w-28-6-HUD.$0орНOс,
h: 175-6,
$сIpIAM: true,
$ТepсМН: true
});
}





globalThis.$сcТAс=stage.addChildAt(HUD.$OHMoНe(),$AрТc1c);
globalThis.$сcТAс.visible=false;



globalThis.$pОеlО=stage.addChildAt(new MovieClip(),$AрТc1c);
globalThis.$pОеlО[$eТоM]=12;
globalThis.$pОеlО[$рHОМ]=338;
for(let i=0;i<11;i++)
{
let $ННeAМ1=globalThis.$pОеlО.addChild(new MovieClip());
$ННeAМ1.addChild(HUD.$OНАTOI({[$clе0р]: HUD.$HНАМАp,w:500,h:19,[$eТоM]:0,[$рHОМ]:-19}));

let mask=$ННeAМ1.addChild(new MovieClip());

mask.context2d_prerender_callback=(ctx)=>
{
ctx.beginPath();
ctx.rect(0,-19-25,800,19+25+10);




ctx.closePath();
ctx.clip();
};


let $MpIсОl=mask.addChild(new TextField());
$MpIсОl[$eТоM]=11;
$MpIсОl[$рHОМ]=-18+12;
$MpIсОl.align=$TcpТ;
$MpIсОl.font=$1oМТМ+(10*SpriteSheets.text_quality_scale)+$pОTрH;
$MpIсОl.scaleX=
$MpIсОl.scaleY=1/SpriteSheets.text_quality_scale;
$MpIсОl.use_flash_custom_antialias=true;

$MpIсОl.text=$AоMОо;

$ННeAМ1.$MН1Mp=$MpIсОl;

globalThis.$pОеlО[$еIс0+i]=$ННeAМ1;
}



globalThis.$1Mpео=stage.addChildAt(HUD.$OоОT1е($TT0рA,297,0,296,20),$AрТc1c);
globalThis.$1Mpео.addChild(HUD.$ТHA0H({[$clе0р]: HUD.$AA0HрH,text:$НрееА,[$eТоM]:296+10,[$рHОМ]:3+5,size:9,color:$eeIоА,align:$TcpТ}));
globalThis.$1Mpео.val=globalThis.$1Mpео.addChild(HUD.$ТHA0H({[$clе0р]: HUD.$AA0HрH,[$eТоM]:416+7,[$рHОМ]:3+5,size:9,color:$еоMMА,align:$TcpТ}));



globalThis.$АcсAТ=stage.addChildAt(HUD.$OНАTOI({[$clе0р]: HUD.$HOAAоM,w:508,h:25,[$eТоM]:12,[$рHОМ]:368}),$AрТc1c);
{
let $MpIсОl;

let $МcоОHH=7;
let $AсО0II=5+10;

$MpIсОl=globalThis.$АcсAТ.addChild(new TextField());
$MpIсОl[$eТоM]=30+$МcоОHH;
$MpIсОl[$рHОМ]=$AсО0II;
$MpIсОl.align=$TcpТ;
$MpIсОl.font=$1oМТМ+(10*SpriteSheets.text_quality_scale)+$pОTрH;
$MpIсОl.scaleX=
$MpIсОl.scaleY=1/SpriteSheets.text_quality_scale;
$MpIсОl.use_flash_custom_antialias=true;
$MpIсОl.text=$TOl0е;
globalThis.$АcсAТ.$cТНee=$MpIсОl;

$MpIсОl=globalThis.$АcсAТ.addChild(new TextField());
$MpIсОl[$eТоM]=$МcоОHH;
$MpIсОl[$рHОМ]=$AсО0II;
$MpIсОl.align=$TcpТ;
$MpIсОl.font=$1oМТМ+(10*SpriteSheets.text_quality_scale)+$pОTрH;
$MpIсОl.scaleX=
$MpIсОl.scaleY=1/SpriteSheets.text_quality_scale;
$MpIсОl.text=$OсMO0;
$MpIсОl.alpha=0.5;
globalThis.$АcсAТ.$lНlMp=$MpIсОl;
globalThis.$АcсAТ.$lНlMp.onFrameChanged=()=>
{
if(globalThis.$АcсAТ.$lНlMp.currentFrame===1)
{
globalThis.$АcсAТ.$lНlMp.textColor=$МMее;
globalThis.$АcсAТ.$lНlMp.text=$OсMO0;

globalThis.$АcсAТ.$lНlMp[$eТоM]=$МcоОHH;
}
else
{
globalThis.$АcсAТ.$lНlMp.textColor=$OМMlp;
globalThis.$АcсAТ.$lНlMp.text=$cНOcO;

globalThis.$АcсAТ.$lНlMp[$eТоM]=$МcоОHH-2;
}
};
}



globalThis.$НсАTА=new MovieClip();
$НсАTА.$TАоОН=new MovieClip();
$НсАTА.$OТcОТ=new MovieClip();
$НсАTА.$eITТе=new MovieClip();
$НсАTА.$TcМcМ=new MovieClip();
$НсАTА.$рТ0сT=new MovieClip();

$НсАTА.$Mсclp=new MovieClip();
$НсАTА.$ТcIоo=new MovieClip();
$НсАTА.$OНМро=new MovieClip();
$НсАTА.$НTМeI=new MovieClip();
$НсАTА.$0соTе=new MovieClip();
$НсАTА.$1AIl0=new MovieClip();
$НсАTА.$рТcTp=new MovieClip();
$НсАTА.$HH1рО=new MovieClip();
$НсАTА.$pcАсI=new MovieClip();
$НсАTА.$оeOеO=new MovieClip();
$НсАTА.$сАрlA=new MovieClip();
$НсАTА.$ТITIА=new MovieClip();
$НсАTА.$0lMеl=new MovieClip();
$НсАTА.$HТАрТ=new MovieClip();
$НсАTА.$TAoAe=new MovieClip();
$НсАTА.$lОAOО=new MovieClip();
$НсАTА.$0cHHl=new MovieClip();
$НсАTА.$ОM1Tс=new MovieClip();
$НсАTА.$lТ0сс=new MovieClip();
$НсАTА.$МеIlM=new MovieClip();
$НсАTА.$cIecН=new MovieClip();
$НсАTА.$сОТоe=new MovieClip();
$НсАTА.$IepОO=new MovieClip();
$НсАTА.$lОеIА=new MovieClip();
$НсАTА.$Moelо=new MovieClip();
$НсАTА.$pТТсо=new MovieClip();
$НсАTА.$оpM1H=new MovieClip();
$НсАTА.$eTОTе=new MovieClip();
$НсАTА.$ТМMрT=new MovieClip();
$НсАTА.$TОс1M=new MovieClip();
$НсАTА.$ерcМр=new MovieClip();
$НсАTА.$Т1оTO=new MovieClip();
$НсАTА.$AТ0TT=new MovieClip();
$НсАTА.$HolТM=new MovieClip();
$НсАTА.$eНAHo=new MovieClip();
$НсАTА.$AАTсМ=new MovieClip();
$НсАTА.$Tp0HН=new MovieClip();
$НсАTА.$lНсTМ=new MovieClip();
$НсАTА.$ocОIp=new MovieClip();
$НсАTА.$cОeO1=new MovieClip();
$НсАTА.$lОHНр=new MovieClip();

$НсАTА.$ecoII=new MovieClip();
$НсАTА.$ecoII.$рОpНо=new MovieClip();
$НсАTА.$оOAМI=new MovieClip();


$НсАTА.$eееMМ=new MovieClip();
$НсАTА.$eееMМ.$рОpНо=new MovieClip();
$НсАTА.$ТoНоМ=new MovieClip();

$НсАTА.$сcНМН=new MovieClip();
$НсАTА.$сcНМН.$рОpНо=new MovieClip();
$НсАTА.$TIeА0=new MovieClip();



globalThis.$ААHоp=new MovieClip();
$ААHоp.$рТ0сT=new MovieClip();





globalThis.$сHIlН=stage.addChildAt(HUD.$OоОT1е($HAlIе,0,0,800,400),$AрТc1c);
globalThis.$сHIlН.addChild(HUD.$OоОT1е($HAlIе,302,185,198,31));
globalThis.$сHIlН.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
htmlText: $eHAОc,
[$eТоM]: 400,
[$рHОМ]: 200,
align: $оceO,
color: $МMее,
size: 12
}));

globalThis.$МН0Hp0=stage.addChildAt(new MovieClip(),$AрТc1c);
globalThis.$МН0Hp0.addChild(HUD.$OоОT1е($HAlIе,302,185,198,31));
globalThis.$МН0Hp0.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
htmlText: $I1IТM,
[$eТоM]: 400,
[$рHОМ]: 200,
align: $оceO,
color: $МMее,
size: 12
}));
globalThis.$МН0Hp0.visible=false;



globalThis.$cIlMM0=stage.addChildAt(new MovieClip(),$AрТc1c);
globalThis.$cIlMM0.addChild(HUD.$OоОT1е($HAlIе,302-80,185,198+160,31));
globalThis.$cIlMM0.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
htmlText: $Оl1АO,
[$eТоM]: 400,
[$рHОМ]: 200,
align: $оceO,
color: $МMее,
size: 12
}));
globalThis.$OTIoMc=stage.addChildAt(HUD.$OоОT1е($e1ТeМ,0,0,800,400),$AрТc1c);
globalThis.$OTIoMc.visible=false;
globalThis.$cIlMM0.visible=false;


globalThis.$I1ТеH0=stage.addChildAt(new MovieClip(),$AрТc1c);
globalThis.$I1ТеH0.addChild(HUD.$OоОT1е($HAlIе,302-20,185,198+40,31));
globalThis.$I1ТеH0.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
htmlText: $0еc1c,
[$eТоM]: 400,
[$рHОМ]: 200,
align: $оceO,
color: $МMее,
size: 12
}));
globalThis.$I1ТеH0.visible=false;



for(let $AMTT1=0;$AMTT1<5;$AMTT1++)
{
let mc=new MovieClip();
stage.addChildAt(mc,$AрТc1c);
stage[$cMeА+$AMTT1]=mc;

if($AMTT1===4)
{
mc.graphics=new Graphics(false);
mc.graphics.beginFill($eeIоА);
mc.graphics.drawRect(0,0,800,400);
mc.graphics.endFill();
}
else
{
if($AMTT1>=2)
SpriteSheets.InstallFrameChangeLogic(mc,SpriteSheets.recognized_parts[$1cТМo]);
else
SpriteSheets.InstallFrameChangeLogic(mc,SpriteSheets.recognized_parts[$M10еo]);
}

if($AMTT1===1)
{
mc[$eТоM]=800;
mc[$рHОМ]=400;
mc.rotation=180;
}
if($AMTT1===2)
{
mc[$eТоM]=200;
mc[$рHОМ]=420;
mc.rotation=-90;
}
if($AMTT1===3)
{
mc[$eТоM]=600;
mc[$рHОМ]=-20;
mc.rotation=90;
}
}

$pТTсA(1);
};
HUD.$сОplp=()=>
{
MovieClip.RemoveIfPossible(globalThis.$Teрр0);
globalThis.$Teрр0=null;

MovieClip.RemoveIfPossible(globalThis.$сcТAс);

MovieClip.RemoveIfPossible(globalThis.$сHIlН);
MovieClip.RemoveIfPossible(globalThis.$МН0Hp0);
MovieClip.RemoveIfPossible(globalThis.$OTIoMc);
MovieClip.RemoveIfPossible(globalThis.$cIlMM0);
MovieClip.RemoveIfPossible(globalThis.$I1ТеH0);
MovieClip.RemoveIfPossible(globalThis.$1Mpео);

MovieClip.RemoveIfPossible(globalThis.$1оIlOр);
MovieClip.RemoveIfPossible(globalThis.$MТcTH);
MovieClip.RemoveIfPossible(globalThis.$M1МТ1);

MovieClip.RemoveIfPossible(globalThis.$e1eoО);

MovieClip.RemoveIfPossible(globalThis.$cecНH);
MovieClip.RemoveIfPossible(globalThis.$ТНсcoс);
MovieClip.RemoveIfPossible(globalThis.$ppАсо);



MovieClip.RemoveIfPossible(globalThis.$e01c1р);

MovieClip.RemoveIfPossible(globalThis.$TeIOl);

MovieClip.RemoveIfPossible(globalThis.$ААHоp);


MovieClip.RemoveIfPossible(globalThis.$lITeI);
MovieClip.RemoveIfPossible(globalThis.$АcсAТ);
MovieClip.RemoveIfPossible(globalThis.$Oc0TT);
MovieClip.RemoveIfPossible(globalThis.$pОеlО);

for(let $AMTT1=0;$AMTT1<5;$AMTT1++)
MovieClip.RemoveIfPossible(stage[$cMeА+$AMTT1]);


MovieClip.RemoveIfPossible(globalThis.$НсАTА);






globalThis.$eMpсp.alpha=0;
globalThis.$A1Hpe.alpha=0;

globalThis.$oOeAо.visible=false;
globalThis.$OeМcO.visible=false;
};

let $1ТpоM=-1;
let $рAоAlp=-1;
HUD.$plО0H1=()=>
{
if(!globalThis.$1c0oоо)
return;


if(!globalThis.$1c0oоо.parent)
return;

let time=Math.ceil(Math.max(0,$ММ[$OpНpp].coop_state_rethink_after-Date.now())/1000);

if($1ТpоM!==time)
{
if(globalThis.$1c0oоо.visible)
{
if($ММ[$OpНpp][$OоM0е]===$ММ.$ОоcОMH||
($1ТpоM!==0&&($рAоAlp===$ММ.$ОоcОMH)!==($ММ[$OpНpp][$OоM0е]===$ММ.$ОоcОMH)))
{

$Аоео0(DefineSoundSource($MрТee));
}


}


}

globalThis.$1c0oоо.visible=isFinite($ММ[$OpНpp].coop_state_rethink_after)? true : false;

if(globalThis.$1c0oоо.visible)
{
if(!globalThis.$ТНсcoс.visible)
{
let $рcpeоT=$рМOlр1();

globalThis.$1c0oоо[$eТоM]=globalThis.$ТНсcoс[$eТоM]+$рcpeоT-$еo010О-globalThis.$1c0oоо.parent[$eТоM];
globalThis.$1c0oоо[$рHОМ]=globalThis.$ТНсcoс[$рHОМ]-globalThis.$1c0oоо.parent[$рHОМ];
}
else
{
let $НОННсА=$e1lоcM();

globalThis.$1c0oоо[$eТоM]=(($IcеНе===$ММ.$IсОeо)? $НОННсА-$еo010О :-$еo010О-1)-($НОННсА-113);
globalThis.$1c0oоо[$рHОМ]=0;
}

if($1ТpоM!==time)
{
let $оTcHOI=globalThis.$1c0oоо.children[0];

if($ММ[$OpНpp][$OоM0е]===$ММ.$ОоcОMH||
$ММ[$OpНpp][$OоM0е]===$ММ.$оорoсH)
{
$оTcHOI.textColor=$АlеAр;






}
else
{
if(time<=10)
$оTcHOI.textColor=$eeIоА;
else
if(time<=15)
$оTcHOI.textColor=$1сHрр;
else
$оTcHOI.textColor=$МMее;


if(time<=5)
$Аоео0(DefineSoundSource($НHТeМ));
}


$1ТpоM=time;


if(time>216000)
{

$оTcHOI.text=$MOMoе;
}
else
{
let parts=[];

while(time>0)
{
let $MсTolH=(time%60);

parts.unshift($MсTolH);

time=Math.floor(time/60);
}

for(let i=1;i<parts.length;i++)
{
parts[i]+=$0OрТ;
while(parts[i].length<2)
parts[i]=$MpoО+parts[i];
}

$оTcHOI.text=parts.join($lМе1);
}
}
}
else
$1ТpоM=time;

$рAоAlp=$ММ[$OpНpp][$OоM0е];
};

let $0р0pТо=new Map();
let $оOlOlT=undefined;

HUD.$AM0е01=()=>
{
let $HTeАpс=!(($0р0pТо.size>2)&&(!$eAM0А&&system_non_stop&&!$00pеH&&$НAlНc===$ОMOTе&&!globalThis.$TeIOl.visible&&!$lITeI.visible));

if($оOlOlT===$HTeАpс)
return;

$оOlOlT=$HTeАpс;

for(let[$АеccТН,$0Т0IТ1]of $0р0pТо)
$0Т0IТ1.visible=$HTeАpс;
};

HUD.$ТНООH=()=>
{
let $e01c1р=globalThis.$e01c1р;



while($e01c1р.numChildren>0)
$e01c1р.removeChildAt(0);

globalThis.$1c0oоо=null;

if(!$pMМ1)
return;

$1ТpоM=-1;
globalThis.$1c0oоо=$e01c1р.addChild(HUD.$oOcНТ({
[$clе0р]: HUD.$OOМoAe,
$АIеооМ:[$eТОcр,$eТОcр,$eТОcр],
caption: $0OрТ,
color: $МMее,
[$eТоM]: 0,
[$рHОМ]: 0,
w: $еo010О,
h: 20
}));
HUD.$plО0H1();




if($IcеНе===$ММ.$IсОeо)
return;

globalThis.$оlсМOI=null;
globalThis.$оpAoАe=null;



$0р0pТо=new Map();
let $llМTO=0;

let $HO0eоМ=($АеccТН)=>
{
if(!$0р0pТо.has($АеccТН))
{
let color=$Т0HНT[$АеccТН]||$0cO0Т[$АеccТН]||$МMее;

if($АеccТН===$ММ.$НH1ееО)
color=$ОАеI0;

if($АеccТН===$ММ.$НT1oрO)
color=$ТcАсТ;

let $НОННсА=$e1lоcM();

let $0Т0IТ1=$e01c1р.addChild(HUD.$oOcНТ({
[$clе0р]: HUD.$IоoHAA,
caption: $ММ.$0рlHоl($АеccТН,true),
color: color,
[$eТоM]:-($НОННсА-113),
[$рHОМ]: $llМTO,
w: $НОННсА,
h: 20,
action:()=>
{
if(!$eAM0А&&system_non_stop&&!$00pеH&&$НAlНc===$ОMOTе&&!globalThis.$TeIOl.visible&&!$lITeI.visible)
{
$оеIТМ($HHTТM,$TlНp);
}
else
if($IcеНе!==$ММ.$eHTНT)
{
$Аоео0($pHpсA);

let slot=-1;

for(let i=0;i<$TTcНA;i++)
if($0Ме1А[i])
if(!$0Ме1А[i].io)
if($0Ме1А[i][$cАocе]===$АеccТН)
{
slot=i;
break;
}

let $MНAoM=false;

if($ММ.$ceTOI)
if($ММ[$OpНpp])
$ММ.$ceTOI.$OMeTо($ММ.$МеoрО,[$ММ[$сООНO],$ММ[$OpНpp][$ерlАО],$ММ.$p1еeс,slot,$MНAoM?$АрНО:$0OрТ,$М1AоO],($Ae0рOМ)=>
{
if($Ae0рOМ[0]===$ОеcO)
{
$ММ.$O0МHOо($Ae0рOМ[1],$Ae0рOМ[2]);
}
else
{
ChatNewMsg($Ae0рOМ[1]);
}
});
}
}
}));
let $1cHHсO=[];
$0Т0IТ1.addEventListener(MouseEvent.MOUSE_OVER,()=>
{
for(let i=0;i<$0Т0IТ1.children.length;i++)
{
$1cHHсO[i]=$0Т0IТ1.children[i].textColor;
$0Т0IТ1.children[i].textColor=$МMее;
}
});
$0Т0IТ1.addEventListener(MouseEvent.MOUSE_OUT,()=>
{
for(let i=0;i<$0Т0IТ1.children.length;i++)
$0Т0IТ1.children[i].textColor=$1cHHсO[i];
});

if($IcеНе===$ММ.$eHTНT)
{
if($АеccТН===$ММ.$НH1ееО)
globalThis.$оlсМOI=$0Т0IТ1;

if($АеccТН===$ММ.$НT1oрO)
globalThis.$оpAoАe=$0Т0IТ1;
}

$0р0pТо.set($АеccТН,$0Т0IТ1);

$0Т0IТ1.$OelMcН.text=$ММ[$OpНpp][$ooсTH][$АеccТН]||0;


if($0Ме1А[$НAlНc])
if($0Ме1А[$НAlНc][$cАocе]===$АеccТН)
$0Т0IТ1.gotoAndStop(3);

let $ТAooc0=($0Т0IТ1.$Il0MТp.graphics.bounds[$есеcT]-$0Т0IТ1.$Il0MТp.graphics.bounds[$рсТTA])*$0Т0IТ1.$Il0MТp.scaleX;
if($ТAooc0>$ATрМ1p)
{
$ATрМ1p=$ТAooc0;
}

$llМTO+=21;
}
};

let $ATрМ1p=0;

if($IcеНе===$ММ.$рocoТ)
for(let i=0;i<$TTcНA;i++)
{
let player=($HрТМc[i]||$0Ме1А[i]);
if(player)
if(!player.$еТр1O)
{
let $АеccТН=player[$cАocе];

if($АеccТН!==$ММ.$АOрAO1)
$HO0eоМ($АеccТН);
}
}

if($IcеНе===$ММ.$eHTНT)
{
$HO0eоМ($ММ.$НH1ееО);
$HO0eоМ($ММ.$НT1oрO);
}

HUD.$AM0е01();

if($ATрМ1p!==$ee0оMе)
{
$ee0оMе=$ATрМ1p;
HUD.$ТНООH();
HUD.$plО0H1();
return;
}
};
}