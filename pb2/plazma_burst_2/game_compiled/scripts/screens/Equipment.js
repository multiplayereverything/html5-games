

{
let mc=null;
let $HI1еoI=null;

HUD.CreateEquipmentScreen=($НOOIAМ=0)=>
{
let $AрТc1c=stage.children.indexOf(globalThis.$A1Hpe)+1;
mc=stage.addChildAt(HUD.$ОНHОеТ(library_bitmap_datas[$НM0рp]),$AрТc1c);
mc.addChild(HUD.$сO11Tе($Acр1p));

let $Hc00ТT=7;
let $рIo1р1=7;
let $10TO0H=180;
let $H0cMOO=20;

globalThis.$lMAHор=$НOOIAМ;

globalThis.$0oсeрМ=mc.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
htmlText: $peTНp,
[$eТоM]: 18+5,
[$рHОМ]: 43+1+$рIo1р1,
align: $TcpТ,
color: $МMее
}));

globalThis.$сcTТoо=mc.addChild(new MovieClip());
globalThis.$сcTТoо[$eТоM]=18;
globalThis.$сcTТoо[$рHОМ]=43;
globalThis.$сcTТoо.sample=new MovieClip();
globalThis.$сcTТoо.$АМ1TeI=new MovieClip();
globalThis.$сcTТoо.$0MОclс=new MovieClip();
globalThis.$сcTТoо.$ТM1АНе=new MovieClip();

globalThis.$сcTТoо.sample[$рHОМ]=33;
globalThis.$сcTТoо.sample[$eТоM]=203;
globalThis.$сcTТoо.$0MОclс[$eТоM]=175;


globalThis.$сcTТoо.sample.filters=[
new AdjustColorFilter(15,0,17,0),
new DropShadowFilter(0,0,1,$еMТlМ),
new DropShadowFilter(0,0,0,$еMТlМ),
new DropShadowFilter(0,0,0,$еMТlМ),
new DropShadowFilter(0,0,8,$pрpОp)
];
globalThis.$сcTТoо.$АМ1TeI.filters=[
new AdjustColorFilter(-100,-38,-100,0),

new DropShadowFilter(0,0,1,$еMТlМ),
new DropShadowFilter(0,0,0,$еMТlМ),
new DropShadowFilter(0,0,0,$еMТlМ),
new DropShadowFilter(0,0,8,$IсlОc)
];


mc.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
htmlText: $MОoоp,
[$eТоM]: 203+$Hc00ТT,
[$рHОМ]: 366+1+$рIo1р1,
color: $МMее
}));
globalThis.$рITO0с=mc.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
htmlText: $сННТM,
[$eТоM]: 272+102-5,
[$рHОМ]: 366+1+$рIo1р1,
color: $МMее,
align: $МОIс
}));





if(globalThis.$lMAHор===0)
{
HUD.$l0MеА0(mc,168-14+$Hc00ТT,334+1+$рIo1р1,$lTсOТ,[$О1о1р,$HolOе],[false,true],`($рHоеН[0]==49)`,(value)=>{
if(value)
{
if($рHоеН[0]!=49){$oITOo();$рHоеН[0]=49;$IеOАT();}
}
else
{
if($рHоеН[0]==49){$oITOo();$рHоеН[0]=40;$IеOАT();}
}
});


HUD.$l0MеА0(mc,168-14+$Hc00ТT+300,334+1+$рIo1р1,$lАTОI,[$0IO0p,$рMрcM],[1,2],`CAMPAIGN_ABILITY`,(value)=>{
CAMPAIGN_ABILITY=value;
$IеOАT();
});
}



globalThis.$eОНо1H=mc.addChild(HUD.$oOcНТ({caption:$TсТОp,color:$ТА1lН,[$clе0р]: HUD.$НОlО0А,[$eТоM]:17,[$рHОМ]:365,w:$10TO0H,h:$H0cMOO}));


$HI1еoI();
};

HUD.DisposeEquipmentScreen=()=>
{
MovieClip.RemoveIfPossible(mc);
};


$HI1еoI=()=>
{
$Hl1AА.visible=false;
$Hl1AА.alpha=0;

$То0He.visible=false;
$То0He.$OОТTр.gotoAndStop(1);

let $ll11o=(globalThis.$lMAHор===0)? globalThis.$ll11o : globalThis.$AАcco;
let $ооlcl=(globalThis.$lMAHор===0)? globalThis.$ооlcl : globalThis.$рlААН;
let $еpOcОA=(globalThis.$lMAHор===0)? $оlleА : $OОМHН;

$eНеlе();
$рTоОc();
stage.quality=$I1АA;
$срMеl=0;
$eОНо1H.addEventListener(MouseEvent.CLICK,function()
{
$Аоео0($АААеI);
gotoAndStop($OрHAH);
});
$eОНо1H.addEventListener(MouseEvent.MOUSE_OVER,function()
{$Аоео0($1ccМр);});

$eОНо1H.addEventListener(MouseEvent.MOUSE_DOWN,function()
{$Аоео0($pHpсA);});



globalThis.$0oсeрМ.text=((globalThis.$lMAHор===0)? $1еT1Н : $0АIcc)+$МelОp;

var $ОTMpеM=new Array();
var $с0сIАe=new Array();
var $Tрс1Tl=new Array();


globalThis.$сcTТoо.sample.visible=false;
globalThis.$сcTТoо.$АМ1TeI.visible=false;
globalThis.$сcTТoо.$0MОclс.visible=false;
globalThis.$сcTТoо.$ТM1АНе.visible=false;
$TАeр1=true;
function $еIеНОl($IТpAо)
{
if($cррсО>=$IТpAо)
return $ppНеО;
else
return $pМсоH;
}
function $AАeАOА()
{
$рITO0с.text=$еcоеl+$cррсО;
$HОpcl=186;
$llМTO=globalThis.$сcTТoо.sample[$рHОМ];

ok=true;
$0ОoHс=0;
$сI0рp=0;
for(i=0;i<$ооlcl.length;i++)
{
{
ok=false;

for(i2=0;i2<$ll11o.length&&!ok;i2++)
if($ll11o[i2][$IlТое]==$ооlcl[i][$IlТое])
{
ok=true;
$0ОoHс=i2;
}

if($ооlcl[i][$IlТое]==$0lТe)
for(i2=0;i2<$ll11o.length;i2++)
if($ll11o[i2][$IlТое]==$ооlcl[i][$IlТое])
$сI0рp++;



if($ОTMpеM[i])
{
$ОTMpеM[i].remove();
$ОTMpеM[i]=null;
}

{
$ОTMpеM[i]=$еАеО1($ооlcl[i][$IlТое],{});
$ОTMpеM[i].detach();

$ОTMpеM[i].io=false;

if(ok)
globalThis.$сcTТoо.addChild($ОTMpеM[i]);
else
globalThis.$сcTТoо.addChildAt($ОTMpеM[i],0);




}





$ОTMpеM[i].model=$ооlcl[i][$IlТое];

var $1TрIрН=ok ? $ll11o[$0ОoHс].upg : 0;

$ОTMpеM[i].upg=$1TрIрН;

$ОTMpеM[i].gotoAndStop(1);

$ОTMpеM[i][$eТоM]=$HОpcl;
$ОTMpеM[i][$рHОМ]=$llМTO;
$ОTMpеM[i].scaleX=1;
$ОTMpеM[i].scaleY=1;

$ОTMpеM[i].ok=ok;
if(ok)
{
$ОTMpеM[i].filters=globalThis.$сcTТoо.sample.filters;


}
else
{
$ОTMpеM[i].filters=globalThis.$сcTТoо.$АМ1TeI.filters;
}

{
$ОTMpеM[i].gotoAndStop(1);
$ОTMpеM[i].onFrameChanged=null;
let graphics=new Graphics(true,SpriteSheets.$ОMрАAо);
graphics.setFilter(...$ОTMpеM[i].getMergedCSSFilter(true));
graphics.AddDrawOperationsFrom($ОTMpеM[i].graphics);
graphics.UpdateBitmapIfNeeded();
$ОTMpеM[i].graphics=graphics;
}

if($с0сIАe[i]==undefined||$с0сIАe[i]==null)
{
let $есAoOl=new MovieClip();

let $рIo1р1=7;

$есAoOl.$MН1Mp=$есAoOl.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
htmlText: $HAсеI,
size: 9,
[$eТоM]:-193+199,
[$рHОМ]:-9+$рIo1р1,
color: $МMее,
align: $МОIс
}));

$есAoOl.$cТIcТ=$есAoOl.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
htmlText: $OMIpM,
size: 9,
[$eТоM]: 92,
[$рHОМ]:-9+$рIo1р1,
color: $МMее,
align: $TcpТ
}));

$есAoOl.$H11pc=$есAoOl.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
htmlText: $OMIpM,
size: 9,
[$eТоM]: 219,
[$рHОМ]:-9+$рIo1р1,
color: $МMее,
align: $TcpТ
}));

$есAoOl.$OeOeО=$есAoOl.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
htmlText: $pMс0М,
size: 9,
[$eТоM]: 338,
[$рHОМ]:-9+$рIo1р1,
color: $ОеHMМ,
align: $TcpТ
}));

$есAoOl.$ooОpТ=$есAoOl.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$cММIсО,
htmlText: $0pe0H,
size: 9,
[$eТоM]: 465,
[$рHОМ]:-9+$рIo1р1,
color: $ОеHMМ,
align: $TcpТ
}));


$с0сIАe[i]=globalThis.$сcTТoо.addChild($есAoOl);
}

$с0сIАe[i][$eТоM]=$HОpcl+(globalThis.$сcTТoо.$0MОclс[$eТоM]-globalThis.$сcTТoо.sample[$eТоM]);
$с0сIАe[i][$рHОМ]=$llМTO;
$с0сIАe[i].$MН1Mp.text=$еMpll($ОTMpеM[i].model);

$ОTMpеM[i].$ATрIeО();



$ОTMpеM[i].$0ОoHс=$0ОoHс;

if(ok&&$ооlcl[i][$IlТое]!=$0lТe&&$ооlcl[i][$IlТое]!=$оОOA0)
{
if($ОTMpеM[i].$MoOMрo>0)
$с0сIАe[i].$cТIcТ.htmlText=$ОAlро+$1TрIрН+$pрА0p;
else
$с0сIАe[i].$cТIcТ.htmlText=$Аcle;

if($1TрIрН<3&&$ОTMpеM[i].$MoOMрo>0)
$с0сIАe[i].$H11pc.htmlText=$АОeOс+$еIеНОl($ОTMpеM[i].$MoOMрo)+$рoА1о+$ОTMpеM[i].$MoOMрo+$срАc;
else
$с0сIАe[i].$H11pc.htmlText=$Аcle;

}
else
{
if($ОTMpеM[i].$IТpAо!=undefined)
$с0сIАe[i].$H11pc.htmlText=$АОeOс+$еIеНОl($ОTMpеM[i].$IТpAо)+$lоOТe+$ОTMpеM[i].$IТpAо+$срАc;
else
$с0сIАe[i].$H11pc.htmlText=$Аcle;




if($ооlcl[i][$IlТое]==$0lТe)
{
if($сI0рp>0)
{
$с0сIАe[i].$MН1Mp.text=$сI0рp+$AсНеА+$с0сIАe[i].$MН1Mp.text;
if($сI0рp>1)
$с0сIАe[i].$MН1Mp.text=$с0сIАe[i].$MН1Mp.text+$ОMМc0;

$с0сIАe[i].$cТIcТ.htmlText=$с0сIАe[i].$MН1Mp.text;
}
else
$с0сIАe[i].$cТIcТ.htmlText=$Аcle;
}
else
$с0сIАe[i].$cТIcТ.htmlText=$Аcle;
}





if(ok)
$с0сIАe[i].$MН1Mp.alpha=1;
else
$с0сIАe[i].$MН1Mp.alpha=0.6;

if($ОTMpеM[i].$IТpAо>0)
$с0сIАe[i].$OeOeО.text=$elН0О+$ОTMpеM[i].$IТpAо;
else
$с0сIАe[i].$OeOeО.text=$Аcle;

if($ОTMpеM[i].$MoOMрo>0)
$с0сIАe[i].$ooОpТ.text=$МcАo0+$ОTMpеM[i].$MoOMрo;
else
$с0сIАe[i].$ooОpТ.text=$Аcle;

if($Tрс1Tl[i]==undefined||$Tрс1Tl[i]==null)
{
let $1Н10pо=HUD.$oOcНТ({
[$clе0р]: HUD.$НОlО0А,
[$eТоM]: 0,
[$рHОМ]: 0,
w: 760,
h: 17,
$АIеооМ:[$T1e0о,$0cl10,$cMоol],
$TрcоOо:[$T1e0о,$T1e0о,$T1e0о]
});
$Tрс1Tl[i]=globalThis.$сcTТoо.addChild($1Н10pо);
}
$Tрс1Tl[i][$eТоM]=0;
$Tрс1Tl[i][$рHОМ]=$llМTO-9.5;

if((ok&&$1TрIрН>=3)||$сI0рp>=6)
$Tрс1Tl[i].alpha=0;
else
$Tрс1Tl[i].alpha=1;

if($TАeр1)
{
$Tрс1Tl[i].addEventListener(MouseEvent.CLICK,function()
{
for(i=0;i<$ооlcl.length;i++)
{
if($Tрс1Tl[i].hitTestPoint(mouseX,mouseY))
{
trace($е1MpO+i);

if(!$ОTMpеM[i].ok||$ОTMpеM[i].model==$0lТe)
{
if(($ОTMpеM[i].model==$0lТe&&$сI0рp<6)||$ОTMpеM[i].model!=$0lТe)
{
$cеНlН=0;
for(i2=0;i2<$ооlcl.length;i2++)
{
if(i!=i2)
if($ОTMpеM[i2].ok)
if($ОTMpеM[i2].$cppее==$ОTMpеM[i].$cppее)
{
$0ОoHс=i2;
$cеНlН=$ОTMpеM[i2].$IТpAо+$ОTMpеM[i2].$MoOMрo*$ОTMpеM[i2].upg;
}
}
if($cррсО>=$ОTMpеM[i].$IТpAо-$cеНlН)
if($ОTMpеM[i].$IТpAо>0)
{
$cррсО-=$ОTMpеM[i].$IТpAо-$cеНlН;
$еpOcОA($ОTMpеM[i].model,0);

if($cеНlН>0)
{
trace($ТTНрl);
trace($ll11o)
trace($0ОoHс)
trace($ОTMpеM[$0ОoHс])
trace($ОTMpеM[$0ОoHс].$0ОoHс)
$ll11o.splice($ОTMpеM[$0ОoHс].$0ОoHс,1);
}
}
}
}
else
{
if($ОTMpеM[i].upg<3)
if($cррсО>=$ОTMpеM[i].$MoOMрo)
if($ОTMpеM[i].$MoOMрo>0)
{
$cррсО-=$ОTMpеM[i].$MoOMрo;

for(i2=0;i2<$ll11o.length;i2++)
{
if($ll11o[i2][$IlТое]==$ооlcl[i][$IlТое])
{
$ll11o[i2].upg+=1;
trace($МрlTO)
}
}
}
}

}
}
$AАeАOА();
});
$Tрс1Tl[i].addEventListener(MouseEvent.MOUSE_OVER,function()
{$Аоео0($1ccМр);});

$Tрс1Tl[i].addEventListener(MouseEvent.MOUSE_DOWN,function()
{$Аоео0($pHpсA);});
}

$llМTO+=17;
}
}
$TАeр1=false;
}
$AАeАOА();


};
}