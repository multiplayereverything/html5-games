




stop();

let $p1TоА=false;
let $сOсMe=[];

if($p1TоА)
{
console.warn($OеOТ);
}

var $АеlAН=true;
var $oolМН=true;





var $01cOp=$0lcl;
var $АА0OO=$Оpрl;


var $рHIMO=$0OрТ;

var match_presets=$НlТO;
var $еcеАе=-1;



var $AMAеМ=false;
var $1p0pМ=false;


$ТeНОН.visible=false;
var $lНoНp=7;

var $cpMo1=-1;
var map_qp_sp=$0OрТ;
var map_qp_mp=$0OрТ;
function $AHТрА($o0р1I,$OMecр,$ОоIсp=true)
{
$o0р1I=$o0р1I.split($pTpc).join($0OрТ);
$o0р1I=$o0р1I.split($eерН).join($pсрТ);
$o0р1I=$o0р1I.split($ТМcA).join($0OрТ);
$o0р1I=$o0р1I.toLowerCase();

var parts;

if($OMecр===1)
parts=map_qp_sp.split($eерН);
if($OMecр===2)
parts=map_qp_mp.split($eерН);

if(parts.indexOf($o0р1I)===-1)
{
}
else
{
parts.splice(parts.indexOf($o0р1I),1);
}
parts.unshift($o0р1I);

if(parts.length>20)
parts=parts.slice(0,20);

let $НHсAe=parts.join($eерН);
let $pс0=false;

if($OMecр===1)
{
if(map_qp_sp!==$НHсAe)
{
map_qp_sp=$НHсAe;
$pс0=true;
}
}
if($OMecр===2)
{
if(map_qp_mp!==$НHсAe)
{
map_qp_mp=$НHсAe;
$pс0=true;
}
}

if($pс0)
if($ОоIсp)
$IеOАT();

return $pс0;
}
function $сIHHA(x,y,$OMecр,$poсHH)
{
if($ТeНОН.visible)
return;


if(HUD.$plАAO())
return;

stage.focus=$poсHH;

$ТeНОН.gotoAndStop(2);
$ТeНОН.gotoAndStop(1);

$ТeНОН.visible=true;
$ТeНОН.alpha=0;
$ТeНОН[$eТоM]=x;
$ТeНОН[$рHОМ]=(typeof y===$МОTМ)? y(): y;

var $T00оH=($OMecр===1);






var $OОНТ1=null;

if($OMecр===1)
$OОНТ1=map_qp_sp.split($eерН);

if($OMecр===2)
$OОНТ1=map_qp_mp.split($eерН);

function $HO1Ае()
{
if($OMecр===1)
map_qp_sp=$OОНТ1.join($eерН);

if($OMecр===2)
map_qp_mp=$OОНТ1.join($eерН);

$IеOАT();
}

var $МAIOН=true;

var $О10o0=0;

while($OОНТ1.indexOf($0OрТ)!==-1)
$OОНТ1.splice($OОНТ1.indexOf($0OрТ),1);

for(var i=0;i<$lНoНp;i++)
{
if(i<$OОНТ1.length)
{
(function($еНHeо)
{
$О10o0++;

$еНHeо.visible=true;
$еНHeо.$MН1Mp.text=$OОНТ1[i].split($pсрТ).join($eерН);







{
$еНHeо.scaleY=1;
$еНHeо[$рHОМ]=i*18+5;
}

$еНHeо[$0сoM]=$OОНТ1[i];

$Нclcс($еНHeо.$MН1Mp);

$еНHeо.btn.setEventListener(MouseEvent.CLICK,function()
{
$poсHH.text=$еНHeо[$0сoM].split($pсрТ).join($eерН);
$МAIOН=false;
});
$еНHeо.$oоoeO.setEventListener(MouseEvent.CLICK,function()
{
$ТMО1e(()=>
{
$OОНТ1.splice($OОНТ1.indexOf($еНHeо[$0сoM]),1);

$HO1Ае();

var $H0cОА=$ТeНОН.alpha;
$ТeНОН.visible=false;
$сIHHA(x,y,$OMecр,$poсHH);
$ТeНОН.alpha=$H0cОА;

stage.$pоНoТ=false;
stage.focus=$ТeНОН;
},0);
});

})($ТeНОН[$TTрО+i]);
}
else
{
$ТeНОН[$TTрО+i].visible=false;
}
}

let height=($О10o0*18+10);

$ТeНОН.bg.scaleY=height/136;



if($T00оH)
{
$ТeНОН[$рHОМ]-=height;

for(var i=0;i<$lНoНp;i++)
$ТeНОН[$TTрО+i][$рHОМ]=height-$ТeНОН[$TTрО+i][$рHОМ]-18;
}


if($cpMo1!==-1)
{
clearInterval($cpMo1);
$cpMo1=-1;
}

let $1ТpоM=Date.now();

$cpMo1=setInterval(function()
{
let time=Date.now();
let $оTIНc=(time-$1ТpоM)/16;
$1ТpоM=time;

if(typeof y===$МОTМ)
{
try
{
$ТeНОН[$рHОМ]=y();
if($T00оH)
$ТeНОН[$рHОМ]-=height;
}
catch(e)
{
$МAIOН=false;
}
}

if($МAIOН&&$ТeНОН.visible)
{
if($ТeНОН.alpha<1)
$ТeНОН.alpha=Math.min(1,$ТeНОН.alpha+0.2*$оTIНc);

if(stage.focus!==$poсHH)
if(stage.focus!==$ТeНОН)
if(stage.focus!==$ТeНОН.bg)
if(stage.focus!==$ТeНОН.qp0)
if(stage.focus!==$ТeНОН.qp1)
if(stage.focus!==$ТeНОН.qp2)
if(stage.focus!==$ТeНОН.qp3)
if(stage.focus!==$ТeНОН.qp4)
if(stage.focus!==$ТeНОН.qp5)
if(stage.focus!==$ТeНОН.qp6)
if(stage.focus!==$ТeНОН.qp0.btn)
if(stage.focus!==$ТeНОН.qp1.btn)
if(stage.focus!==$ТeНОН.qp2.btn)
if(stage.focus!==$ТeНОН.qp3.btn)
if(stage.focus!==$ТeНОН.qp4.btn)
if(stage.focus!==$ТeНОН.qp5.btn)
if(stage.focus!==$ТeНОН.qp6.btn)
if(stage.focus!==$ТeНОН.qp0.$oоoeO)
if(stage.focus!==$ТeНОН.qp1.$oоoeO)
if(stage.focus!==$ТeНОН.qp2.$oоoeO)
if(stage.focus!==$ТeНОН.qp3.$oоoeO)
if(stage.focus!==$ТeНОН.qp4.$oоoeO)
if(stage.focus!==$ТeНОН.qp5.$oоoeO)
if(stage.focus!==$ТeНОН.qp6.$oоoeO)
$МAIOН=false;
}
else
{
if($ТeНОН.alpha>0)
$ТeНОН.alpha=Math.max(0,$ТeНОН.alpha-0.2*$оTIНc);
else
{
clearInterval($cpMo1);
$cpMo1=-1;
$ТeНОН.visible=false;

stage.$pоНoТ=true;

stage.forEachChild((c)=>{if(c.onUpdateHTMLElements)c.onUpdateHTMLElements();});
}
}

MovieClip.UpdateListenerOrder();

},16);

stage.forEachChild((c)=>{if(c.onUpdateHTMLElements)c.onUpdateHTMLElements();});
}

var $oA1eO=(this.loaderInfo.parameters[$0cрО]===undefined);

var $Oeо0=this.loaderInfo.parameters[$0cрО];
var $pATO=this.loaderInfo.parameters[$АТIo];

var menu_hue=0;

function $pTсHO(str,hash,len)
{
return str;






















}

function $IТoHT()
{






return $сIоTТ;
}

function $еcoсТ(mc,frame,$р1cсO=0)
{
if(mc.isPlaying||
($р1cсO===0&&mc.currentFrame!==frame)||
($р1cсO>0&&Math.abs(mc.currentFrame-frame)>=$р1cсO))
mc.gotoAndStop(frame);
}

var $Т1рcН=$Аcle;


function $ОНAMр()
{
System.pauseForGCIfCollectionImminent(0.1);
}

var $1ерТc=23;
var $TОOАН=4;

var $Oр0ol=-1;
var $AоАе0=-1;
var $MppHI=-1;

var $М1оAО=$0OрТ;

var $lMAТМ=false;
var $eАeОl=false;
var $IHОIT=true;
var $НccрМ=false;
var $HHMНe=true;


var $НllIo=1;
var $сТMТM=1;

var $оМОlо=true;

var $сТIoc=1;
var $1р0oe=1;
var $Hреcc=0.5;


var $реAАo=1;
var $AlcTM=0;
var $ТМоНH=0;

var $peс1e=[];
var $роeАе=[];

var $HlОеН=true;
var $HTрМp=0;
var $TOcHе=0;
var $IОТ0H=0;
var $0АТоI=0;
var $IрOOО=0;
var $cАIАp=2000;
function $НcpОc(id,width,height,$оОМlA=false,$1МоОH=false,$Mo1Ip=undefined)
{
if($роeАе.length>$cАIАp)
{
if($1МоОH)
{

$е10Oс(e,$AlНe+$cАIАp+$oMрТ);
return null;
}
else
throw new Error($IloТ+$cАIАp+$Ооpo);
}

id=parseInt(id);
width=parseInt(width);
height=parseInt(height);

var img={};

$HTрМp++;

img.$реАНH=false;

img.id=id;
img.bitmap=null;
img.bitmap_data=null;
img.$cIеoс=[];
img.$AНl1р=[];


img.$1МоОH=$1МоОH;
img.$сToоe=null;
img.$eеo0о=undefined;

img.$OAAМ1=()=>
{
if(img.$реАНH)
{
8;
}

if(img.$сToоe)
return img.$сToоe;


let json={
[$оIlО]: $oМTо,
[$o0НМ]: $АрНО,
[$АTрo]: $MpoО,
[$1Tlе]: $01рТ,
[$0OАс]: $АрНО,
[$lоАо]: $оoT1
};




try
{
let t1=Date.now();

let canvas=document.createElement($0H0A);
canvas.width=16;
canvas.height=128;

let ctx=canvas.getContext($М1НТ);
ctx.globalCompositeOperation=$АAОo;

let t2=Date.now();

ctx.drawImage(img.bitmap,0,0);

let $ТНАOА=Date.now();

let imageData=ctx.getImageData(0,0,canvas.width,canvas.height);

let $IНeНс=Date.now();

let $МоOoo=[];
let $Tl0OA=(from)=>
{
$МоOoo.push((imageData[$1еM1][from]>127)? $АрНО : $MpoО);
};
for(let i=0;i<imageData[$1еM1].length;i+=4)
{
$Tl0OA(i);
$Tl0OA(i+1);
$Tl0OA(i+2);
}

let $ММMоO=Date.now();

function $МсТсс($оlTТH)
{
let text=$0OрТ;
for(let i=0;i<$оlTТH.length;i+=8)
{
const $ро0OН=$оlTТH.substring(i,i+8);
const $lpcТ1=parseInt($ро0OН,2);

if($lpcТ1===0)
break;

text+=String.fromCharCode($lpcТ1);
}
return text;
}

let str=$МоOoo.join($0OрТ);

let $оcpОс=Date.now();

let $eTlМA=$МсТсс(str);


let $ОAl10=Date.now();

Object.assign(json,JSON.parse($eTlМA));

let $НTTАe=Date.now();







img.$eеo0о=true;
}
catch(e)
{
img.$eеo0о=false;
traceOnce($оoIo+id,e);
$е10Oс(e,$l0el+id+$eМIe);
}

for(let prop in json)
if(json[prop]+$0OрТ===parseFloat(json[prop])+$0OрТ)
json[prop]=parseFloat(json[prop]);

json.$e00АТ=0;
json.$eTеeM=0;
for(let i=0;i<json[$o0НМ];i++)
json.$e00АТ+=json[$pМНH+i]||0;
for(let i=0;i<json[$АTрo];i++)
json.$eTеeM+=json[$pНОр+i]||0;

img.$сToоe=json;





return img.$сToоe;
};

img.$1рТ1М=(f)=>
{
if(img.$реАНH)
return;

if(img.$cIеoс)
img.$cIеoс.push(f);
else
f();
};
img.$оlAe0=(f)=>
{
if(img.$реАНH)
f();
else
if(img.$AНl1р)
img.$AНl1р.push(f);
};

img.width=width;
img.height=height;

var $AMIрA=new Loader();
$AMIрA.contentLoaderInfo.addEventListener(Event.COMPLETE,
function(event)
{
$IрOOО++;
try
{
$IОТ0H+=(event.target).bytesTotal;

if($IОТ0H>1024*1024*10)
throw new Error($1Hp0+$IОТ0H+$MOIe+(1024*1024*10)+$еМНр);

img.bitmap=((event.target).content);
img.bitmap_data=img.bitmap.bitmapData;

if($оОМlA)
{
img.width=img.bitmap.width;
img.height=img.bitmap.height;
}

for(var i=0;i<img.$cIеoс.length;i++)
img.$cIеoс[i]();

img.$cIеoс=null;
img.$AНl1р=null;

$0АТоI++;
}
catch(e)
{
ReportCaughtError(e);
$е10Oс(e,$сОcp);
}
}
);
$AMIрA.contentLoaderInfo.addEventListener(IOErrorEvent.IO_ERROR,
function(event)
{
if(img.$реАНH)
return;

img.$реАНH=true;
img.$cIеoс=null;

for(let i=0;i<img.$AНl1р.length;i++)
img.$AНl1р[i]();

img.$AНl1р=null;
}
);
var $сАllО;

if($Mo1Ip===undefined)
$сАllО=new URLRequest($0TрН+id);
else
$сАllО=new URLRequest($0TрН+id+$Тll1+encodeURIComponent($Mo1Ip));

var $Oсop=new URLVariables();

if($Oeо0!==undefined&&$Oeо0!==$0OрТ)
{
$Oсop[$0cрО]=$Oeо0;
$Oсop[$АТIo]=$pATO;
}

$сАllО[$1еM1]=$Oсop;

$AMIрA.load($сАllО);

var request;

if($Mo1Ip===undefined)
request=new URLRequest($0TрН+id+$сMТр);
else
request=new URLRequest($0TрН+id+$eАр0+encodeURIComponent($Mo1Ip));

var $ТТсМ=$рHТpМ();
function $HАсТA(event)
{
try
{
var $ОOA1М=event.target[$1еM1];

if($ОOA1М===$ТеcI)
$HlОеН=false;

$TOcHе++;
}
catch(e)
{
ReportCaughtError(e);
$е10Oс(e,$pOАН);
}
}
$ТТсМ.addEventListener(Event.COMPLETE,$HАсТA);
try
{
$ТТсМ.load(request);
}
catch(e)
{
ReportCaughtError(e);
throw new Error($еОlM+e);
}

$роeАе.push(img);

return img;
}
function $сМсlc(id,$Н0рpT=false,$Mo1Ip=undefined)
{
for(var $НM01c=0;$НM01c<$роeАе.length;$НM01c++)
if($роeАе[$НM01c].id===id)
return $роeАе[$НM01c];

if($Н0рpT)
return $НcpОc(id,2,2,true,true,$Mo1Ip);

throw new Error($T0Аo+id+$Iроc);
}
function $Нecрl($ceА0M)
{
let $MpAАp=$ceА0M;

if($ceА0M+$0OрТ===parseInt($ceА0M)+$0OрТ)
return parseInt($ceА0M);

if($ceА0M.charAt(0)===$pOрс)
{
$ceА0M=$ceА0M.substring(1);

if($ceА0M+$0OрТ===parseInt($ceА0M)+$0OрТ)
return $MpAАp;
}

return 1;
}

function $TepоA(url,$0ooОT,loop=false,callback=undefined)
{
url=url.split($eсрс).join($lроТ);

var s={};

if($peс1e.length>=8)
throw new Error($MАeТ);

s.url=url;
s.$OсAHp=new Sound();
s.channel=new SoundChannel();
s.volume=0;
s.$0ooОT=Math.max(0,Math.min(2,$0ooОT));

if(callback!==undefined&&callback!==-1)
s.callback=callback;
else
s.callback=-1;

s.$еII1H=getTimer();

s.loop=loop;

if(url.length===0||url===$MpoО)
{

}
else
if(url.indexOf($0Арl)===0)
{
var request=new URLRequest(url);
var $ТТсМ=$рHТpМ();
function $HАсТA(event)
{
try
{
var $ОOA1М=event.target[$1еM1];

var $OОесo=$ОOA1М.indexOf($оАIc);

if($OОесo===-1)
throw new Error($ТНоo+url+$HНсO);

var href=$ОOA1М.lastIndexOf($Тcео,$OОесo);
var $Mо0Hе=$ОOA1М.indexOf($Н0Т1,href+6);

var $OlIpр=$ОOA1М.slice(href+6,$Mо0Hе);

if($1сTpp>=$с0OIО)
s.$OсAHp.load(new URLRequest($OlIpр));
else
s.$OсAHp.load(new URLRequest($OlIpр.split($lроТ).join($eсрс)));
}
catch(e)
{
ReportCaughtError(e);
$е10Oс(e,$lНОA);
}
}
$ТТсМ.addEventListener(Event.COMPLETE,$HАсТA);
try
{
$ТТсМ.load(request);
}
catch(e)
{
ReportCaughtError(e);
throw new Error($еОlM+e);
}
}
else
if(url.indexOf($cОOp)===0)
{
var parts=url.split($О0l1);

var $cА0ер;


$cА0ер=$Ое0c+parts[parts.length-1]+$pTpc+Math.random();



var request=new URLRequest($cА0ер);
var $ТТсМ=$рHТpМ();
function $HАсТA(event)
{
try
{



var $ОOA1М=event.target[$1еM1];

if($ОOA1М!==$ОеcO)
{
throw new Error($ОOA1М);
}

var parts=url.split($О0l1);

var $10AеO=$MTHo;

s.$OсAHp=JSAudio.CreateFromFile(

$cАoо+parts[parts.length-1]+$10AеO,

0,

()=>
{
},

()=>
{
}
);












}
catch(e)
{
ReportCaughtError(e);
$е10Oс(e,$lНОA);
}
}
$ТТсМ.addEventListener(Event.COMPLETE,$HАсТA);
try
{
$ТТсМ.load(request);
}
catch(e)
{
ReportCaughtError(e);
throw new Error($еОlM+e);
}
}
else
throw new Error($МооI);

$peс1e.push(s);
}
var $oМoe1=null;
function $IАМе0(id)
{


$oМoe1=$peс1e[id];

var $ОcАOМ;
var $НIТОc=true;
function $IМсоо()
{


if($peс1e.length===0)
{
clearInterval($ОcАOМ);
return;
}

if($НIТОc)
{

ok=true;
for(var i=0;i<$peс1e.length;i++)

if($peс1e[i].volume>0)
{
$peс1e[i].volume-=0.02;
ok=false;
}
if(ok)
{
$НIТОc=false;
}
}
else
{
if(id>=0)
{
$peс1e[id].volume=1;


if($peс1e[id].channel)
$peс1e[id].channel.stop();

var $1ААOМ=null;



if($peс1e[id].$OсAHp.bytesLoaded>=$peс1e[id].$OсAHp.bytesTotal)
$1ААOМ=$peс1e[id].$OсAHp.play(0,$peс1e[id].loop ? 999 : 0);
else
{
if($peс1e[id].$OсAHp.bytesTotal===0)
{
$е10Oс(new Error($lHро),$lНОA);
}
}

if($1ААOМ===null)
{
if($peс1e[id].$OсAHp.bytesTotal!==0||
getTimer()<$peс1e[id].$еII1H+15000)
return;
}
else
{
$peс1e[id].channel=$1ААOМ;






var that=$peс1e[id];
function $МНTеI(e)
{



that.channel.removeEventListener(Event.SOUND_COMPLETE,$МНTеI);

if(that===$oМoe1)
if(that.callback!==-1)
{

$pАTIТ(that.callback);
}
}
that.channel.addEventListener(Event.SOUND_COMPLETE,$МНTеI);

}






}
clearInterval($ОcАOМ);
}

$ОcoеM();
}
$ОcАOМ=setInterval($IМсоо,16);
}
function $ОcoеM()
{
for(var i=0;i<$peс1e.length;i++)
{
if($peс1e[i].channel)
if($peс1e[i].channel.soundTransform)
{
$peс1e[i].channel.soundTransform.volume=$peс1e[i].volume*CUSTOM_MUSIC_VOLUME*$peс1e[i].$0ooОT;
}



}
}

Mouse.show();

var $OрIТО;
var $MMТНp=getTimer();
var $ТТ1Аl=40;
var $ОOeрс=$ТТ1Аl;

var $eеlc1=0;

var $АeMАН;
var mc;
var $Т0TpA;

function $coОlp()
{


for(var i=0;i<$peс1e.length;i++)
if($peс1e[i])
if($peс1e[i].channel)
{
$peс1e[i].channel.stop();
}

$peс1e.length=0;

removeEventListener(Event.ENTER_FRAME,$cHIIH);





stage.removeEventListener(MouseEvent.RIGHT_MOUSE_DOWN,$TМpc0);
}
function $НОHAM()
{
addEventListener(Event.ENTER_FRAME,$cHIIH);









stage.setEventListener(MouseEvent.RIGHT_MOUSE_DOWN,$TМpc0);
}
var $oсclТ=true;
function $ooloе()
{
if($oсclТ)
{
$oсclТ=false;
removeEventListener(Event.ENTER_FRAME,$cHIIH);
stage.$oсорl=stage.$oсорl;
addEventListener(Event.ENTER_FRAME,$cHIIH);
}
}

function $0Оо1р()
{
$ooloе();

if(getTimer()>$MMТНp+40)
{
if($pMМ1)
{
$cHIIH(null);
}
}
}

function $Тo1MM()
{
$MMТНp=getTimer();
}


function $AeМHI()
{
stage.$oсорl=$e0cо0==1?20:($e0cо0==2?30:60);
}

$То0He.visible=false;
$То0He.$OОТTр.gotoAndStop(1);


stage.$OTlIO=$0ОрАо;
stage.align=$01lHM;






var i,i2,$0ОoHс,$AMTT1,$рАНlI,$сI0рp,$cеНlН;








var $MIНоо;

var $есeA=false;

var MP_default_set=1;

var $eМоco=0;
var $рpТcо=0;
var $0оТOT=0;
var $0IОее=-1;

var $1HIpс=0;
var $ОТоНO=0;
var $Moe1Н=0;
var $МоТMO=-1;

var $MoIoр=[];
var $0еeоM=0;
var $IIIсA=-1;

var $оHTоТ=[];

var $cоcAM=0;
var $11сoH=0;
var $coТcТ=0;

var $eIOcе=0;
var $МоМсО=getTimer();
var $cТ1сc=false;





var $c0pAе=false;

var $HМАрр=[];

var $АTO10=1;
var $e0cо0=1;
var SHOW_PERFORMANCE_INFORMATION=2;
var QUICK_SAVE_ENABLED=2;
var CAMPAIGN_ABILITY=1;
var FULLSCREEN=0;
var TRACK_MP_LOGS=0;
var LOCK_CURSOR=0;
var CURSOR_SENSITIVITY=1;


var $сHАAe=[];
var $Т0HНT=[];
var $0cO0Т=[];
$сHАAe=$ММ.$сHАAe;
$Т0HНT=$ММ.$Т0HНT;
$0cO0Т=$ММ.$0cO0Т;

var $рloоl;
var $pTТcе;

function decode($MН1Mp)
{
var $IIАHo=$0OрТ;
for(i=0;i<$MН1Mp.length;i++)
{
if($MН1Mp.charAt(i)==$10M0)
{
$IIАHo+=$O1pН;
}
else
{
$IIАHo+=String.fromCharCode($MН1Mp.charCodeAt(i)-1);
}
}
return $IIАHo;
}
function encode($MН1Mp)
{
var $IIАHo=$0OрТ;
for(i=0;i<$MН1Mp.length;i++)
{
if($MН1Mp.charAt(i)==$O1pН)
$IIАHo+=$10M0;
else
$IIАHo+=String.fromCharCode($MН1Mp.charCodeAt(i)+1);
}
return $IIАHo;
}
var $ТОоНc;
var $ссМcМ;
var $c0cHH;

function $HT1lН(str,$eOо1О=false)
{
if(typeof str!==$ср0I)
str=str+$0OрТ;

if($OOсlM||$eOо1О)
{
$c1Н1А=true;
while($c1Н1А)
{
$c1Н1А=false;

for($ссМcМ=0;$ссМcМ<$оpeМH.length;$ссМcМ++)
{
$ТОоНc=str.toLowerCase();
$c0cHH=$ТОоНc.indexOf($оpeМH[$ссМcМ]);
if($c0cHH!==-1)
{
str=str.substr(0,$c0cHH)+$oеНА+str.substr($c0cHH+$оpeМH[$ссМcМ].length,str.length-$c0cHH-$оpeМH[$ссМcМ].length);
$c1Н1А=true;
}
}
}
}
return str;
}
function $0eoТO()
{
$АcсAТ.$cТНee.htmlText=TextField.QuickReplaceMyEmojis($ОOAAM($ТНpОО));
}

var $ТОеНl,$рHсpT,$M1MрA,$Оp0HТ,$HIОTo;

var $рсоTН=decode($еТHo);
var $оpeМH=[];
$оpeМH=$рсоTН.split($O1pН);
$рсоTН=$0OрТ;

var $oрНMl=0;

function $оTpТо()
{
HUD.$ТНООH();



















}
function $AMТНI($MeсНе,str,$OрcHp,$ОTеOo=false,$0HoMМ=false)
{
$рМ1ее[$MeсНе]=0;
$MAосT[$MeсНе]=$OрcHp;
$0lесp[$MeсНе]=str;
$МНc0O[$MeсНе]=false;
$О0oН1[$MeсНе]=$ОTеOo;
$Mp0НM[$MeсНе]=$0HoMМ;
}
function $роHlс($MeсНе)
{
if($eТТТI)
if(!$МНc0O[$MeсНе])

if($Mp0НM[$MeсНе]===$еHоНH)
if($О0oН1[$MeсНе]===$pMМ1)
{
$рМ1ее[$MeсНе]++;
if($рМ1ее[$MeсНе]>=$MAосT[$MeсНе])
{
$рМ1ее[$MeсНе]=$MAосT[$MeсНе];
$МНc0O[$MeсНе]=true;

$Аоео0($cМосТ);
$оеIТМ($О1рМ+$0lесp[$MeсНе]+$loTe,$НОoM);

$HTMМо=getTimer();
}
$IеOАT();
}
}

var $МоОcl=$0OрТ;

var $HTMМо=0;

var $MоTl0=false;

var $eТТТI=true;
var $lМlос=0;
var $рМ1ее=[];
var $MAосT=[];
var $0lесp=[];
var $МНc0O=[];
var $О0oН1=[];
var $Mp0НM=[];

$AMТНI(0,$c1Нo,100);
$AMТНI(1,$сеОH,30);
$AMТНI(2,$НTро,40);
$AMТНI(3,$oНОp,1);
$AMТНI(4,$IepO,1);
$AMТНI(5,$HeMс,10);
$AMТНI(6,$ессH,3);
$AMТНI(7,$AAТc,20);
$AMТНI(8,$cHI0,1);
$AMТНI(9,$eHоH,20);
$AMТНI(10,$AAMе,1);
$AMТНI(11,$TерA,1);
$AMТНI(12,$М0A1,1);
$AMТНI(13,$еоHM,1);
$AMТНI(14,$lОеТ,1);
$AMТНI(15,$Mср1,50);
$AMТНI(16,$pсАT,10);
$AMТНI(17,$clМH,1);
$AMТНI(18,$р0АO,5);
$AMТНI(19,$oTТр,40);
$AMТНI(20,$lАоp,1);
$AMТНI(21,$Т0eр,1);
$AMТНI(22,$eТеА,1);
$AMТНI(23,$МHАH,1,true);
$AMТНI(24,$elOT,1,false,true);
$lМlос=25;



var $AT0еH=new Socket();



var $pHОое;
var $1оМТe;

var $Т0АMO;

$pHОое=$AАIH;

var $1OрММ=10015;
var $1Tp0M;
var $ТH0pp=$Аcle;
var $oIlТ1=$Аcle;
var $АTIo1=0;
var $МТАеМ=0;

var $еTpMl=0;

function $еHOоI(event)
{

trace($сОHM);

$AT0еH.close();


if(currentLabel==$МоAН)
{





$Т1рcН=$pсоM;
$AplАM.text=$oе1p;

}
}
var $МАIOе=false;
function $oIo1Н($pHOАТ)
{
$МАIOе=false;

trace($ОТАс);


$АlНp1($1eАс);

if(currentLabel==$МоAН)
{
$оeoТр.alpha=1;
$оeoТр.enabled=true;

$ОАTIA.alpha=1;
$ОАTIA.enabled=true;

if($ТMееО)
{
setTimeout(function(){$МcMрА();},20);
}
}
}

function $НAеос($epTОe)
{

trace($TА10+$epTОe);

if(currentLabel==$МоAН)
{



$AplАM.text=$pМcp;
}
}
$1Tp0M=$0OрТ;
var $сc0НА=$0OрТ;
var $lIHОО={};
var $осоlp=-1;
function $АlНp1(s)
{

if($cерAc)
trace($оМAl+s);

if($осоlp!==-1)
s+=$THcO+$осоlp;

$AT0еH.writeUTFBytes(s);
$AT0еH.flush();
}

function $МсcрA($НсlоА)
{
try
{

$THIeА($МсOI+$AT0еH.$eрlIН+$1МоН);

$сc0НА=$AT0еH.$1АММT($AT0еH.$eрlIН);






$1Tp0M+=$сc0НА;

if($1Tp0M.charAt($1Tp0M.length-1)===$Hlоp)
{
$1Tp0M=$1Tp0M.slice(0,-1);

if($cерAc)

trace($соe0+$1Tp0M);


while(true)
{
var sign=$1Tp0M.lastIndexOf($рl0р);

if(sign===-1)
break;

var $IIHAН=$1Tp0M.indexOf($o0Op,sign+1);

if($IIHAН===-1)
throw new Error($OMр0);

var $lО0Oe=$1Tp0M.indexOf($o0Op,$IIHAН+1);

if($lО0Oe===-1)
throw new Error($OMр0);


var $oМHTH=$1Tp0M.indexOf($o0Op,$lО0Oe+1);

if($oМHTH===-1)
throw new Error($OMр0);

var $рАрHо=$1Tp0M.substring(sign+1,$oМHTH);

var parts=$рАрHо.split($o0Op);





if($lIHОО[parts[0]]===undefined)
throw new Error($lНTе+parts[0]+$НOOр+$OHоp0);

$1Tp0M=$1Tp0M.slice(0,sign)+$lIHОО[parts[0]].substr(parts[1],parts[2])+$1Tp0M.slice($oМHTH+1);
}

if($cерAc)
trace($еОA1+$1Tp0M);

var $ceOHМ=$1Tp0M.lastIndexOf($О0l1);

if($ceOHМ===-1)
{
throw new Error($МHАО);

if($cерAc)
trace($рopе);
}
else
{
var $OHоp0=parseFloat($1Tp0M.slice($ceOHМ+1));
if($cерAc)
trace($А1Ар+$OHоp0);

$осоlp=$OHоp0;

$lIHОО[$OHоp0]=$1Tp0M;

$1Tp0M=$1Tp0M.substring(0,$ceOHМ);

$1Tp0M=$1Tp0M.split($еМHо).join($I01O);
$1Tp0M=$1Tp0M.split($НоoA).join($1оA1);
$1Tp0M=$1Tp0M.split($OoНH).join($TecH);



for(var key in $lIHОО)
{
if(parseFloat(key)<$OHоp0-4)
{
delete $lIHОО[key];
continue;
}
}


if($cерAc)
trace($TeeО);
}



if($1Tp0M.charAt(0)==$lрTН)
{
if(currentLabel==$cpeT)
{
$1Tp0M=$1Tp0M.slice(1,$1Tp0M.length);

}
else
{
$1Tp0M=$0OрТ;
trace($I0Me);
}
}


if(currentLabel==$МоAН)
{
var a=$1Tp0M.split($МoeМ);

if(a[0]==$еppA)
{
$Т0АMO=false;


$AооАA=replace($МТpo,$O1pН,a[1]);

$рHоеН[2]=parseInt(a[2]);
$рHоеН[3]=parseInt(a[3]);
$оoIpТ=a[4];
trace($OМОо,$рHоеН[3]);


if($АoМHl)
{
$ОOOсo=$еlеc;

}
else
{
$ОOOсo=$ТlМe;

}
$НTIрp=$рНОH;

gotoAndStop($cpeT);
}
else
if(a[0]==$MOAО)
{
$AplАM.text=$АМlT;
$Т0АMO=false;

$оeoТр.alpha=1;
$оeoТр.enabled=true;

$ОАTIA.alpha=1;
$ОАTIA.enabled=true;

$МАIOе=true;
setTimeout(function()
{
if($МАIOе)
$сH1HН();
},2000);
}
else
if(a[0]==$сloТ)
{
$AplАM.text=$elТl;
$Т0АMO=false;

$оeoТр.alpha=1;
$оeoТр.enabled=true;

$ОАTIA.alpha=1;
$ОАTIA.enabled=true;

$МАIOе=true;
setTimeout(function()
{
if($МАIOе)
$сH1HН();
},2000);
}
else
if(a[0]==$AМeо)
{
$AplАM.text=$eАОp;
$Т0АMO=false;
}
else
if(a[0]==$opеО)
{
$AplАM.text=$рeоl;
$Т0АMO=false;
}
else
if(a[0]==$pрA0)
{
$AplАM.text=$IeТМ;
$Т0АMO=false;
}
else
if(a[0]==$Т110)
{
$AplАM.text=$о1оо;
$Т0АMO=false;

$оeoТр.alpha=1;
$оeoТр.enabled=true;

$ОАTIA.alpha=1;
$ОАTIA.enabled=true;
}
else
if(a[0]==$peHO)
{
$AplАM.text=$Tр0p;
$Т0АMO=false;

$оeoТр.alpha=1;
$оeoТр.enabled=true;

$ОАTIA.alpha=1;
$ОАTIA.enabled=true;
}
else
if(a[0]==$HНсM)
{
$AplАM.text=$OMсН;

setTimeout(function()
{
if($AT0еH.connected)
{
if($Т1ОрТ&&$eTрHI)
{
$Т0АMO=true;










if(!$есeA)
{

$АlНp1($OMlО+$Т1ОрТ.text+$eeМ0+$eTрHI.text+$eOOI+$сOOр1+$MрIс+$рHIMO+$M0Oр);
}
else
{

$АlНp1($M1oс+$сOOр1+$MрIс+$рHIMO+$M0Oр);
}
}
else
{
if($AplАM)
$AplАM.text=$A1Ао;
}
}
else
$Т0АMO=false;
},
100);
}
else
{
$AplАM.text=a[0];
$Т0АMO=false;

$оeoТр.alpha=1;
$оeoТр.enabled=true;

$ОАTIA.alpha=1;
$ОАTIA.enabled=true;
}

}
else
if(currentLabel==$МO10)
{
list.visible=true;

var $Ioee1=new $сАеMО($MTep+$1Tp0M+$TOАТ);

var a,b,c;

for(var $AеНAО in $Ioee1.children())
{
a=$AеНAО[$оIlО]();

b=[];

for(var $ТlАН0 in $AеНAО.attributes())
{
b[$IHTe+$ТlАН0[$оIlО]()]=$ТlАН0.value();
}

if(a==$THАМ)
{
if($АТIHо==0)
$Me1cМ=list.ch0;
else
$Me1cМ=list.addChild(new $AlА0l);

$Me1cМ[$рHОМ]=23*$АТIHо;

$Me1cМ.$MН1Mp.text=b[$ОАAО];


$Нclcс($Me1cМ.$MН1Mp);


$Me1cМ.gotoAndStop(1);

$Me1cМ.setEventListener(MouseEvent.CLICK,$АрНAp);
$MclОT[$АТIHо]=b[$oНHе];
$АelHl[$АТIHо]=b[$ОАAО];



$АТIHо++;
}
}
}
else
if(currentLabel==$cpeT&&$1Tp0M.charAt(0)==$о00о)
{
$lАе1O.setEventListener(MouseEvent.CLICK,$АAНOM);

var $Н0еIo=true;

var $Ioee1=new $сАеMО($MTep+$1Tp0M+$TOАТ);


var a,b,c;

for(var $AеНAО in $Ioee1.children())
{
a=$AеНAО[$оIlО]();

b=[];

for(var $ТlАН0 in $AеНAО.attributes())
{
b[$IHTe+$ТlАН0[$оIlО]()]=$ТlАН0.value();
}

if(a==$cTоТ)
{
trace($ОHеe,$АТIHо)
for(i=0;i<$АТIHо;i++)
{
trace(i,$ppМ1,$pММpI[i])
$pММpI[i].visible=false;
}
$АТIHо=0;

$lАе1O.visible=true;
}
if(a==$ОlMp)
{



if($АТIHо==0)
$Me1cМ=$lАе1O.ch0;
else
$Me1cМ=$lАе1O.addChild(new $МOpео);
$Me1cМ.visible=true;

$pММpI[$АТIHо]=$Me1cМ;

$Me1cМ[$рHОМ]=32*$АТIHо;

$Me1cМ.gotoAndStop(1);

if(b[$OМTр]===$0HOe)
$Me1cМ.gotoAndStop(2);

$Me1cМ.$MН1Mp.text=$HT1lН(b[$ОАAО]);
$Me1cМ.$cТIcТ.text=$HT1lН(b[$MрHA]);

if(b[$ОIНО]==$pо1О)
$Me1cМ.$H11pc.text=$АAoН;
else
$Me1cМ.$H11pc.text=$0НрM;

$Me1cМ.$OeOeО.text=$HT1lН(b[$рреl]);

$Нclcс($Me1cМ.$MН1Mp);
$Нclcс($Me1cМ.$cТIcТ);
$Нclcс($Me1cМ.$H11pc);
$Нclcс($Me1cМ.$OeOeО);

$Нclcс($Me1cМ.$ooОpТ);
$Нclcс($Me1cМ.$HооHM);
$Нclcс($Me1cМ.$lTрco);
$Нclcс($Me1cМ.$IMТOM);

if(b[$OМTр]!=null)
{
if(b[$OМTр]===$MpoО)
$Me1cМ.$ooОpТ.text=$ТеcI
else
$Me1cМ.$ooОpТ.text=$AMеo;

}

if(b[$oр1Т]!=null)
{
$Me1cМ.$HооHM.text=$HOоН;

if(b[$oр1Т]==1)
$Me1cМ.$HооHM.text=$ОрpА;
if(b[$oр1Т]==2)
$Me1cМ.$HооHM.text=$1pHс;
if(b[$oр1Т]==3)
$Me1cМ.$HооHM.text=$МТрА;
if(b[$oр1Т]==4)
$Me1cМ.$HооHM.text=$peО0;
if(b[$oр1Т]==5)
$Me1cМ.$HооHM.text=$ОoOМ;

if(b[$l0Т0]===$АрНО)
{
$Me1cМ.$HооHM.text+=$Ooер;
}
}
if(b[$A0cр]!=null)
$Me1cМ.$lTрco.text=$HT1lН(b[$A0cр]);

if(b[$IоОc]!=null)
$Me1cМ.$IMТOM.text=$HT1lН(b[$IоОc]);





$MclОT[$АТIHо]=b[$oНHе];
$АelHl[$АТIHо]=b[$ОАAО];
$АOoеТ[$АТIHо]=b[$ОIНО];
$1pHpI[$АТIHо]=b[$рреl];
$oНH0А[$АТIHо]=(b[$OМTр]==$AMеo);


(function()
{
var $MТрсp=$Me1cМ.$0TНlH;

if($MТрсp.$1OMoН!==undefined)
{
$MТрсp.$1OMoН();
}

while($Me1cМ.$0TНlH.numChildren>0)
$Me1cМ.$0TНlH.removeChildAt(0);

$сOoНН($MТрсp);

var $AMIрA=new Loader();
$AMIрA.contentLoaderInfo.addEventListener(Event.COMPLETE,
function(event)
{


var bitmap=((event.target).content);

bitmap.$pMоHI=$ecIpе.NEVER;
bitmap.smoothing=true;

bitmap.scaleX=0.25;
bitmap.scaleY=0.25;

bitmap.alpha=0.2;

bitmap[$рHОМ]=-10;

var $elНе0=0;

$MТрсp.$1OMoН=function()
{
clearInterval($IеMН1);
$MТрсp.$1OMoН=undefined;
};

var $IеMН1=setInterval(function()
{
if(currentLabel!==$cpeT)
{
if($MТрсp.$1OMoН!==undefined)
$MТрсp.$1OMoН();
return;
}

if(bitmap.alpha<0.7)
bitmap.alpha=Math.min(0.7,bitmap.alpha+0.2);

bitmap[$рHОМ]=-10+Math.sin($elНе0)*10;

$elНе0+=0.0066;

},16);

$MТрсp.addChild(bitmap);




}
);
$AMIрA.contentLoaderInfo.addEventListener(IOErrorEvent.IO_ERROR,function(event)
{

});

if($1сTpp>=$с0OIО)
$AMIрA.load(new URLRequest($10MT+b[$рреl]));
else
$AMIрA.load(new URLRequest($10MT+b[$рреl]));
})();







$АТIHо++;
}

if(a==$Mсlе)
{
$TlpTp[$clе0р]=$НМ10о.INPUT;
$0cАAc.enabled=true;
}

if(a==$1сМI)
{
trace($1сМI);


trace($lАе1O);
trace($АAНOM);
$lАе1O.removeEventListener(MouseEvent.CLICK,$АAНOM);
trace($1Oеее);
trace($Ioee1);
trace(b[$оеoT]);
$1Oеее=b[$оеoT];
removeEventListener(Event.ENTER_FRAME,$НHHeT);

gotoAndStop($оеeе);
trace($AеAр);
}
}
}
else
if(currentLabel==$АОеe)
{


$cНOОМ=$1Tp0M;
$МсАоo=true;
}
else
if(currentLabel==$оеeе)
{
if($1Tp0M.charAt(0)!=$TO1с)
$ОOHII($1Tp0M);
}
$1Tp0M=$Аcle;
}
}
catch(e)
{
ReportCaughtError(e);

$THIeА($I1pТ+e);

trace($pMcО);
trace(e);
}
}
function $IIHc1($ТОOМA)
{
trace($еcеA+$ТОOМA);

if(currentLabel==$МоAН)
{
$AplАM.text=$TeII;





















}
}

$AT0еH.addEventListener(Event.CLOSE,$еHOоI);
$AT0еH.addEventListener(Event.CONNECT,$oIo1Н);
$AT0еH.addEventListener(IOErrorEvent.IO_ERROR,$НAеос);
$AT0еH.addEventListener(SecurityErrorEvent.SECURITY_ERROR,$IIHc1);
$AT0еH.addEventListener(ProgressEvent.SOCKET_DATA,$МсcрA);




var $lMH0М=true;











stage.quality=$I1АA;


var $AHTТe=$рсНН;
$AHTТe+=$ТрНс;

function $lМcеp(char)
{
if(char.length!==1)
{








return false;
}

if($AHTТe.indexOf(char)!==-1)
return true;

const charCode=char.charCodeAt(0);

return(


(code>=0x0041&&code<=0x005A)||(code>=0x0061&&code<=0x007A)||

(code>=0x00C0&&code<=0x00FF)||

(code>=0x0100&&code<=0x024F)||



(code>=0x0400&&code<=0x04FF)||


(code>=0xAC00&&code<=0xD7AF)||(code>=0x3130&&code<=0x318F)


(code>=0x0600&&code<=0x06FF)||


(code>=0x4E00&&code<=0x9FFF)||


(code>=0x3040&&code<=0x309F)||


(code>=0x30A0&&code<=0x30FF)||


(code>=0x3000&&code<=0x303F)
);
}

var $opHНТ=false;



var $оМMОО=1;




















var $ОТоM1=1;

var $АOTIl=400;
var $ТIeсO=200;

var screenX=800;
var screenY=400;

var $OcIOО=null;
var $ННOlе=0;

var $00pеH=false;
var $1Oеее=$Аcle;
var $I0Iср=$Аcle;
var $OМMО=$Аcle;
var $М1AоO=$Аcle;
var $ОOOсo=$ApоM;
var $НTIрp=$ApоM;
var $НAlНc=0;
var $ТoAсА=0;
var $IIcpo=0;
var $pMМ1=false;
var $оoIpТ=$0OрТ;
var $0oIoН=0;
var $еМpОA=0;
var $cMАеН=$oМTо;
var $МHрНO=$oМTо;
var $oАOAl=$oМTо;

var MP_herolist_name_type=$оIpl;
var MP_herolist_score_type=$АеНН;
var MP_herolist_ping_type=$op1о;

var $оерp0=$AсО0;
var $AeНcс=0;

var $1pTМc=[]
function $OOcoA($eMOАе)
{
for(var i=0;i<$1pTМc.length;i++)
if($1pTМc[i].mc===$eMOАе)
{
$1pTМc[i].timer=getTimer();
return;
}

$1pTМc.push({
mc: $eMOАе,
timer:getTimer()
});
}
function $pНОoM($eMOАе)
{
for(var i=0;i<$1pTМc.length;i++)
if($1pTМc[i].mc===$eMOАе)
{
if(getTimer()<$1pTМc[i].timer+1000)
return false;

$1pTМc.splice(i,1);
break;
}

return true;
}

var $АoМHl=true;

var $О01ТA=true;
var $ocеMо=false;

var $о0MTр=[];
function $TlTе1($eMOАе,$оoMAo,$loАoM,$OI01с)
{
for(var i=0;i<$о0MTр.length;i++)
if($о0MTр[i].mc===$eMOАе)
{
$о0MTр[i].timer=getTimer();

$о0MTр[i][$МIIро]=Math.min($оoMAo,$о0MTр[i][$МIIро]);

$о0MTр[i].$OI01с=Math.max($OI01с,$о0MTр[i].$OI01с);

if($о0MTр[i].$OI01с>$оoMAo)
$о0MTр[i].$OI01с=$оoMAo;

if($loАoM)
$о0MTр[i].$loАoM=$loАoM;

return;
}

$о0MTр.push({
mc: $eMOАе,
timer: getTimer(),
[$МIIро]: $оoMAo,
$OI01с: $OI01с,
$loАoM: $loАoM
});
}
function $ррТcе($eMOАе)
{
for(var i=0;i<$о0MTр.length;i++)
if($о0MTр[i].mc===$eMOАе)
{

if(getTimer()<$о0MTр[i].timer+150+
$eMOАе.ping*3+
($0Ме1А[$НAlНc]? $0Ме1А[$НAlНc].ping : 0)*3
)
return $о0MTр[i];

$о0MTр.splice(i,1);
break;
}

return null;
}
function $Нo1MО($eMOАе)
{
for(var i=0;i<$о0MTр.length;i++)
if($о0MTр[i].mc===$eMOАе)
{
$о0MTр.splice(i,1);
i--;
continue;
}
}

function $TlpНI($eMOАе,current)
{
var obj=$ррТcе($eMOАе);

if(obj===null)
return current;







if(current>obj[$МIIро])
current=obj[$МIIро];

if(current<obj.$OI01с)
current=obj.$OI01с;

return current;
}
function $oТeрA($eMOАе)
{
var obj=$ррТcе($eMOАе);

if(obj===null)
return false;

return obj.$loАoM;
}
function $НАHpН($eMOАе)
{
var obj=$ррТcе($eMOАе);

if(obj===null)
return true;

return false;
}

function $НoТcН($eMOАе,$сlоIН)
{
var obj=$ррТcе($eMOАе);

if(obj===null)
return;

obj[$МIIро]+=$сlоIН;
}

function $OIТеМ($сОММН)
{


return($сОММН[$0coMM]===$МA1ре||$сОММН[$0coMM]===$АМeеM||$сОММН[$0coMM]===$МО1еH||($сОММН[$0coMM]===$НТIТo&&$сОММН.$1ooоT!==1&&$сОММН.$1ooоT!==2&&$сОММН.$1ooоT!==3));
}
















var $о0Мp0=false;
var $popТо=false;
var $HAАсА=true;
var $оОTоo=true;
var $IeА1I=false;
var $0pТНМ=false;
var $OАМАO=false;

var $IOTеН=true;

var $lесlА=false;

var $сclpO=42;

var $HHolА=0;
var $lсосТ=-1;
var $0eосA=false;
var LEVEL_POINTER=0;

var $OIoeA=$Аcle;
var $eТсMО;
var $сеpМ0;
var $А1Hр1=false;
var $Hoсpе=0;
var $HАHcр=false;
var $орI10=false;
var $IcеНе=$ММ.$IсОeо;
var $OM0TM=false;
var $0cT11=true;
var $lеIIр=true;

var $оToТс=0;
var $OсpIс=1;

var $AAсAр=$е1cA;

var $1еT1Н=$Аcle;
var $ooo1T=$IAHе;
var $O0рсc=$1cIТ;
var $0АIcc=$еААH;
var $cррсО=0;
var $AооАA=$Hеер;

var $ТHoA1=false;
var MATCH_LIST_FILTER=1;

var $сМ1Но=false;


var $TccHО=false;
var $сIоTТ=false;
var $ATоMс=true;
var $рpHсH=true;
var $00МeI=true;
var UNLIMITED_SCREEN_REFRESH_RATE=true;
var VIOLENCE=true;
var $AАcАО=true;
var $OOсlM=false;

var $HАМММ=2;
var $АHсее=0.5;
var $cI0ее=0.5;
var CUSTOM_MUSIC_VOLUME=0.5;
var $eрссc=0;
var $МО0H1=100;
var $0lpеo=true;
var MOUSE_WHEEL=true;
var OVERSCROLL=false;
var $НOIHo=false;
var LOW_HPS=false;
var $TOрОT=true;
var CONNECTION_SERVER_ID=1;
var BEEP_ON_DEATH=true;
var HIT_SOUNDS=0;
var SCREEN_FADE_EFFECTS=true;
var SHOW_EXP_BAR=2;
var MP_AUTO_LOGIN=false;

var RENDER_RESOLUTION=2;
var SPRITE_DETAILS=2;
var BEEP_ON_LOW_HEALTH=true;

var $ll1lА=0.5;
var $I00le=0.5;
var $cAATе=0.5;

setGetterSetter(globalThis,`$М0AНс`,
()=>
{
return 30;
},
(v)=>
{
}
);
var $MАTOc=30;
var $1АeTе;
var $Т0реT=0;


var $ceМОO=15;

var $IHТcc=false;

var $pММpI=[];
var $Me1cМ;

var $АТIHо=0;
var $MclОT=[];
var $АelHl=[];
var $АOoеТ=[];
var $oНH0А=[];
var $1pHpI=[];

var $оepТA=-1;



var $рHоеН=$IeTlO([],$eМlee);
var skin_color_head=$IeTlO([],$eМlee);
var skin_color_body=$IeTlO([],$eМlee);
var skin_color_arms=$IeTlO([],$eМlee);
var skin_color_legs=$IeTlO([],$eМlee);


var $ММТp1=[];
var matrix;

var $ll11o=[];
var $AАcco=[];
var $ооlcl=[];
var $рlААН=[];

var curA=$0OрТ;
var curB=$0OрТ;


var armorA=0;
var armorB=0;

function $оlleА($0ААA0,level)
{
var $ITcсo=$ll11o.length;
$ll11o[$ITcсo]=new Object();
$ll11o[$ITcсo][$IlТое]=$0ААA0;
$ll11o[$ITcсo].upg=level;
}
function $OОМHН($0ААA0,level)
{
var $ITcсo=$AАcco.length;
$AАcco[$ITcсo]=new Object();
$AАcco[$ITcсo][$IlТое]=$0ААA0;
$AАcco[$ITcсo].upg=level;
}
function $OpАеM($0ААA0,level)
{
var $ITcсo=$ооlcl.length;
$ооlcl[$ITcсo]=new Object();
$ооlcl[$ITcсo][$IlТое]=$0ААA0;
$ооlcl[$ITcсo].upg=level;
}
function $oIH1H($0ААA0,level)
{
var $ITcсo=$рlААН.length;
$рlААН[$ITcсo]=new Object();
$рlААН[$ITcсo][$IlТое]=$0ААA0;
$рlААН[$ITcсo].upg=level;
}


$OpАеM($THcО,3);
$OpАеM($ТНсI,3);
$OpАеM($Ocol,3);

$OpАеM($ТIТT,3);
$OpАеM($е00о,3);
$OpАеM($АTel,3);

$OpАеM($eeIc,3);

$OpАеM($еOlО,3);

$OpАеM($Нp11,3);
$OpАеM($TIAН,3);

$OpАеM($AOoА,3);
$OpАеM($Ac1o,3);


$OpАеM($eНОp,3);
$OpАеM($МTHO,3);
$OpАеM($0lТe,3);




$oIH1H($ТНсI,3);
$oIH1H($Ocol,3);


$oIH1H($е00о,3);
$oIH1H($АTel,3);


$oIH1H($Icрc,3);
$oIH1H($еOlО,3);

$oIH1H($Нp11,3);


$oIH1H($AOoА,3);
$oIH1H($Ac1o,3);
$oIH1H($МНpМ,3);


$oIH1H($МTHO,3);
$oIH1H($0lТe,3);



matrix=[];
matrix=matrix.concat([1,0,0,0,0]);
matrix=matrix.concat([0,1,0,0,0]);
matrix=matrix.concat([0,0,1,0,0]);
matrix=matrix.concat([0,0,0,1,0]);
$ММТp1[0]=new ColorMatrixFilter(matrix);


matrix=[];
matrix=matrix.concat([0.3,0.2,0.2,0,0]);
matrix=matrix.concat([0.2,0.3,0.2,0,0]);
matrix=matrix.concat([0.2,0.2,0.3,0,0]);
matrix=matrix.concat([0,0,0,1,0]);
$ММТp1[1]=new ColorMatrixFilter(matrix);


matrix=[];
matrix=matrix.concat([1.1,0.3,0.3,0,0]);
matrix=matrix.concat([0.3,1.1,0.3,0,0]);
matrix=matrix.concat([0.3,0.3,1.1,0,0]);
matrix=matrix.concat([0,0,0,1,0]);
$ММТp1[2]=new ColorMatrixFilter(matrix);


matrix=[];
matrix=matrix.concat([0,1,0,0,0]);
matrix=matrix.concat([0,0,1,0,0]);
matrix=matrix.concat([1,0,0,0,0]);
matrix=matrix.concat([0,0,0,1,0]);
$ММТp1[3]=new ColorMatrixFilter(matrix);


matrix=[];
matrix=matrix.concat([0,0,1,0,0]);
matrix=matrix.concat([1,0,0,0,0]);
matrix=matrix.concat([0,1,0,0,0]);
matrix=matrix.concat([0,0,0,1,0]);
$ММТp1[4]=new ColorMatrixFilter(matrix);


matrix=[];
matrix=matrix.concat([0,0,1,0,0]);
matrix=matrix.concat([0,1,0,0,0]);
matrix=matrix.concat([1,0,0,0,0]);
matrix=matrix.concat([0,0,0,1,0]);
$ММТp1[5]=new ColorMatrixFilter(matrix);


matrix=[];
matrix=matrix.concat([1,0,0,0,0]);
matrix=matrix.concat([0,0,1,0,0]);
matrix=matrix.concat([0,1,0,0,0]);
matrix=matrix.concat([0,0,0,1,0]);
$ММТp1[6]=new ColorMatrixFilter(matrix);


matrix=[];
matrix=matrix.concat([0,1,0,0,0]);
matrix=matrix.concat([1,0,0,0,0]);
matrix=matrix.concat([0,0,1,0,0]);
matrix=matrix.concat([0,0,0,1,0]);
$ММТp1[7]=new ColorMatrixFilter(matrix);


matrix=[];
matrix=matrix.concat([0.3,0.3,0.3,0,0]);
matrix=matrix.concat([0.3,0.3,0.3,0,0]);
matrix=matrix.concat([0.3,0.3,0.3,0,0]);
matrix=matrix.concat([0,0,0,1,0]);
$ММТp1[8]=new ColorMatrixFilter(matrix);

function $TlАcо(li)
{

li.filters=new Array($ММТp1[0]);
}

function $0cТeо(mc,$0ОoHс)
{
if(!$pMМ1)
{

if($0ОoHс==0||$0ОoHс==1)
{
mc.head.filters=new Array($ММТp1[skin_color_head[$0ОoHс]]);
mc.body.filters=new Array($ММТp1[skin_color_body[$0ОoHс]]);

mc.$АсIее.upper.filters=new Array($ММТp1[skin_color_arms[$0ОoHс]]);
mc.$АсIее.lower.filters=new Array($ММТp1[skin_color_arms[$0ОoHс]]);
mc.$ТНpТI.upper.filters=new Array($ММТp1[skin_color_arms[$0ОoHс]]);
mc.$ТНpТI.lower.filters=new Array($ММТp1[skin_color_arms[$0ОoHс]]);

mc.$ooНMН.upper.filters=new Array($ММТp1[skin_color_legs[$0ОoHс]]);
mc.$ooНMН.middle.filters=new Array($ММТp1[skin_color_legs[$0ОoHс]]);
mc.$ooНMН.lower.filters=new Array($ММТp1[skin_color_legs[$0ОoHс]]);
mc.$0T1MH.upper.filters=new Array($ММТp1[skin_color_legs[$0ОoHс]]);
mc.$0T1MH.middle.filters=new Array($ММТp1[skin_color_legs[$0ОoHс]]);
mc.$0T1MH.lower.filters=new Array($ММТp1[skin_color_legs[$0ОoHс]]);

mc.$еОТТT.filters=new Array($ММТp1[skin_color_legs[$0ОoHс]]);
}





}
}

var $1oTAе=[];

$1oTAе[$MITp]=[1,0,0];
$1oTAе[$рОeО]=[0,1,0];
$1oTAе[$IMc1]=[0,0,1];

$1oTAе[$oloе]=[0.6,0.6,0.6];
$1oTAе[$еcAМ]=[0.1,0.1,0.1];


$1oTAе[$АТIo]=[0.608,0.188,1.000];
$1oTAе[$OA0Н]=[1,1,1];

$1oTAе[$pOрс]=[0,1,1];
$1oTAе[$AТ0I]=[1,0,1];
$1oTAе[$рHОМ]=[1,1,0];

$1oTAе[$рpe0]=[1.000,0.870,0.678];
$1oTAе[$IМO0]=[0.800,0.882,1.000];
$1oTAе[$OHIО]=[0.702,0.933,0.227];
$1oTAе[$IM0О]=[1.000,0.647,0.000];
$1oTAе[$AТМТM]=[0.596,0.984,0.596];
$1oTAе[$0рTН]=[1.000,0.965,0.561];

$1oTAе[$оOТM]=[0.51*1.3,0.78*1.3,1.0*1.3];

$1oTAе[$MHсA]=[0.31*1.3,0.58*1.3,1.0*1.3];

$1oTAе[$eНOc]=[0.7*1.3,0.1*1.3,0.1*1.3];


function $0рАHМ(color)
{




































var $еM1pе=new ColorMatrixFilter();
if(color==$соТО)
{

}
else
if(!isNaN(parseInt(color,10))&&$ММТp1[parseInt(color,10)]!==undefined)
{
$еM1pе=$ММТp1[parseInt(color)];
}
else
{
var r,g,b;
r=$1oTAе[color]? $1oTAе[color][0]: 1;
g=$1oTAе[color]? $1oTAе[color][1]: 1;
b=$1oTAе[color]? $1oTAе[color][2]: 1;
var matrix=[];





matrix=matrix.concat([r*0.3,r*0.4+g*0.2,r*0.6+b*0.2,0,0]);
matrix=matrix.concat([g*0.3+r*0.2,g*0.4,g*0.6+b*0.2,0,0]);
matrix=matrix.concat([b*0.3+r*0.2,b*0.4+g*0.2,b*0.6,0,0]);

matrix=matrix.concat([0,0,0,1,0]);
$еM1pе.matrix=matrix;
}
return $еM1pе;
}
function $1loHе(mc,$cМMрА=false)
{
{
var $ТАHсl=[$0рАHМ(mc.$Нр01I[0])];
var $TTIpМ=[$0рАHМ(mc.$Нр01I[1])];
var $оТеМo=[$0рАHМ(mc.$Нр01I[2])];
var $Трpoo=[$0рАHМ(mc.$Нр01I[3])];

mc.head.SetFiltersRecursively($ТАHсl);
mc.body.SetFiltersRecursively($Трpoo);

mc.$АсIее.upper.SetFiltersRecursively($TTIpМ);
mc.$АсIее.lower.SetFiltersRecursively($TTIpМ);

mc.$ТНpТI.upper.SetFiltersRecursively($TTIpМ);
mc.$ТНpТI.lower.SetFiltersRecursively($TTIpМ);

mc.$ooНMН.upper.SetFiltersRecursively($оТеМo);
mc.$ooНMН.middle.SetFiltersRecursively($оТеМo);
mc.$ooНMН.lower.SetFiltersRecursively($оТеМo);

mc.$0T1MH.upper.SetFiltersRecursively($оТеМo);
mc.$0T1MH.middle.SetFiltersRecursively($оТеМo);
mc.$0T1MH.lower.SetFiltersRecursively($оТеМo);

mc.$АсIее.lower.$оАОНА.SetFiltersRecursively($TTIpМ);
mc.$ТНpТI.lower.$оАОНА.SetFiltersRecursively($TTIpМ);

mc.$еОТТT.SetFiltersRecursively($оТеМo);



























}
}








var $Mе0cН=true;

let $МОоТc=[];
function $сМOсо($OIрlT,$МpIАо,$c0ApT=null,$ТHI1р=null,$0ccoТ=null)
{
$МОоТc.push({$OIрlT:$OIрlT,$МpIАо:$МpIАо,$c0ApT:$c0ApT,$ТHI1р:$ТHI1р,$0ccoТ:$0ccoТ});
}
$сМOсо($eAAH,1,null,()=>{$НeНpО[$1еM1].plays++;});

$сМOсо($MMр0,undefined,null);
$сМOсо($0Hl1,undefined,null);
$сМOсо($cIМА,undefined,null);

$сМOсо($ТТAА,40,`$рHоеН[0]`);
$сМOсо($1oМсТ,60,`$рHоеН[1]`);
$сМOсо($0Тcе,2,`$рHоеН[2]`);

$сМOсо($МНHМ,0,`armorA`);
$сМOсо($ееоO,0,`armorB`);

$сМOсо($TсМс,$0OрТ,`curA`);
$сМOсо($cMIpO,$0OрТ,`curB`);

$сМOсо($АlAM,(this.loaderInfo.parameters.$HАА0Т!==undefined ? parseInt(this.loaderInfo.parameters.$HАА0Т): 0),`$еTpMl`);

$сМOсо($OHНс,1,`$АTO10`);
$сМOсо($IHНT,2,`SHOW_PERFORMANCE_INFORMATION`);
$сМOсо($lepН,2,`QUICK_SAVE_ENABLED`);
$сМOсо($сMlp,1,`CAMPAIGN_ABILITY`);
$сМOсо($сTА0,0,`FULLSCREEN`);
$сМOсо($оHp1,3,`$e0cо0`);
$сМOсо($pОOH,0,`TRACK_MP_LOGS`);
$сМOсо($oТОМ,0,`LOCK_CURSOR`);
$сМOсо($еOoр,1,`CURSOR_SENSITIVITY`);



for(let i=0;i<$lМlос;i++)
{
let $еоepI=i;
$сМOсо($MАoTе+i,0,`$рМ1ее[${i}]`,()=>{$МНc0O[$еоepI]=($рМ1ее[$еоepI]>=$MAосT[$еоepI]);});
}

$сМOсо($AIOT,$0OрТ,`$1еT1Н`);
$сМOсо($осНрТ,0,`$HHolА`);
$сМOсо($MОео,0,`LEVEL_POINTER`);
$сМOсо($0HеH,200,`$cррсО`);

for(let i=0;i<3;i++)
{
$сМOсо($еАAН+i,0,`skin_color_head[${i}]`);
$сМOсо($ТсО0+i,0,`skin_color_body[${i}]`);
$сМOсо($ocM0+i,0,`skin_color_arms[${i}]`);
$сМOсо($оlcI+i,0,`skin_color_legs[${i}]`);
}

$сМOсо($HpрHp,3);
$сМOсо($HoAI,$THcО);
$сМOсо($oHрO,$ТIТT);
$сМOсо($1He0О,$eeIc);
$сМOсо($рIel,$0lТe);
$сМOсо($0OАA,$0lТe);
$сМOсо($10сс,$0lТe);
$сМOсо($Т1Мрp,0);
$сМOсо($ooAс,0);
$сМOсо($TОМсМ,0);
$сМOсо($IТсOТ,0);
$сМOсо($оАссH,0);
$сМOсо($оНеI,0);
$сМOсо(null,null,null,
()=>
{
$ll11o.length=0;

let i2=parseInt($НeНpО[$1еM1][$HpрHp]);
for(let i=0;i<i2;i++)
$оlleА($НeНpО[$1еM1][$11сНl+i+$MeМ1],parseInt($НeНpО[$1еM1][$11сНl+i+$Мo1Т]));
},
()=>
{
$НeНpО[$1еM1][$HpрHp]=$ll11o.length;

for(let $1HeМI=0;$1HeМI<$ll11o.length;$1HeМI++)
{
$НeНpО[$1еM1][$11сНl+$1HeМI+$MeМ1]=$ll11o[$1HeМI][$IlТое];
$НeНpО[$1еM1][$11сНl+$1HeМI+$Мo1Т]=$ll11o[$1HeМI].upg;
}
}
);

$сМOсо($оp0Т,1);
$сМOсо($МрcM,$Icрc);
$сМOсо($ОНеН,0);
$сМOсо(null,null,null,
()=>
{
$AАcco.length=0;

let i2=parseInt($НeНpО[$1еM1][$оp0Т]);
for(i=0;i<i2;i++)
$OОМHН($НeНpО[$1еM1][$Mрcрo+i+$MeМ1],parseInt($НeНpО[$1еM1][$Mрcрo+i+$Мo1Т]));
},
()=>
{
$НeНpО[$1еM1][$оp0Т]=$AАcco.length;

for(let $1HeМI=0;$1HeМI<$AАcco.length;$1HeМI++)
{
$НeНpО[$1еM1][$Mрcрo+$1HeМI+$MeМ1]=$AАcco[$1HeМI][$IlТое];
$НeНpО[$1еM1][$Mрcрo+$1HeМI+$Мo1Т]=$AАcco[$1HeМI].upg;
}
}
);

$сМOсо($TМоМО,1,`MP_default_set`);
$сМOсо($сОTl,true,`MOUSE_WHEEL`);
$сМOсо($НОlTe,false,`OVERSCROLL`);

$сМOсо($Те1ep,1,`CONNECTION_SERVER_ID`);
$сМOсо($0сOA,true,`BEEP_ON_DEATH`);
$сМOсо($eНАо,0,`HIT_SOUNDS`);
$сМOсо($OоОI,true,`SCREEN_FADE_EFFECTS`);
$сМOсо($0pМНI,2,`SHOW_EXP_BAR`);
$сМOсо($А1pТ,false,`MP_AUTO_LOGIN`);
$сМOсо($p1cl,true,`$ТHoA1`);
$сМOсо($pТсIA,1,`MATCH_LIST_FILTER`);
$сМOсо($ТТoТp,true,`$сМ1Но`);
$сМOсо($ТТАM,false,`$TccHО`);
$сМOсо($сoМH,false,`$сIоTТ`);
$сМOсо($ploА,true,`$ATоMс`);
$сМOсо($рc0А,true,`$рpHсH`);
$сМOсо($еMOee,true,`$00МeI`);
$сМOсо($ТM1Мс,true,`UNLIMITED_SCREEN_REFRESH_RATE`);
$сМOсо($еlНМе,true,`VIOLENCE`);
$сМOсо($ОTIН,true,`$AАcАО`);
$сМOсо($IpТTO,false,`$OOсlM`);
$сМOсо($АТlOH,2,`$HАМММ`);
$сМOсо($lс0I,0.2,`$АHсее`);
$сМOсо($М1AMp,0.2,`$cI0ее`);
$сМOсо($MIcо,0.2,`CUSTOM_MUSIC_VOLUME`);
$сМOсо($НOМсА,true,`$0lpеo`);
$сМOсо($рMcMc,false,`$НOIHo`);
$сМOсо($ОTссе,false,`$OАМАO`);
$сМOсо($AАОOН,false,`LOW_HPS`);
$сМOсо($TOее,true,`HINTS`);
$сМOсо($сМeАA,true,`TOOLTIPS`);
$сМOсо($рТeТе,0,`menu_hue`);
$сМOсо($IcM0,$0OрТ,`map_qp_sp`);
$сМOсо($НрHМс,$0OрТ,`map_qp_mp`);
$сМOсо($МОOcо,$НlТO,`match_presets`);
$сМOсо($ОlAHe,2,`RENDER_RESOLUTION`);
$сМOсо($МTcАI,2,`SPRITE_DETAILS`);
$сМOсо($рАcН,true,`BEEP_ON_LOW_HEALTH`);

$сМOсо($TTTl0,$оIpl,`MP_herolist_name_type`);
$сМOсо($OMlТO,$АеНН,`MP_herolist_score_type`);
$сМOсо($cТHcO,$op1о,`MP_herolist_ping_type`);

$сМOсо($ААoН,3,`ENTER_KEY_ACTION`);
$сМOсо($Iоoрe,2,`T_KEY_ACTION`);
$сМOсо($Ol1е,1,`Q_KEY_ACTION`);


function $Mр1Аl()
{
if($НeНpО[$1еM1].plays===undefined||$НeНpО[$1еM1].plays===0||isNaN($НeНpО[$1еM1].plays))
{
$Mе0cН=true;
$opHНТ=true;





































































































for(let i=0;i<$МОоТc.length;i++)
{
let info=$МОоТc[i];

if(info.$OIрlT!==null)
$НeНpО[$1еM1][info.$OIрlT]=info.$МpIАо;
}
}
else
{

$Mе0cН=false;
}






for(let i=0;i<$МОоТc.length;i++)
{
let info=$МОоТc[i];

if(info.$OIрlT!==null)
if(info.$c0ApT!==null)
{
let value=$НeНpО[$1еM1][info.$OIрlT];

if(value===undefined)
{
value=info.$МpIАо;
}
else
if(typeof value!==typeof info.$МpIАо)
{
if(typeof info.$МpIАо===$АOpА)
value=parseFloat(value);
else
if(typeof info.$МpIАо===$e0IIО)
value=(value===$A11l);
else
{







8;
globalThis.ReportCaughtError(new Error($OelеM+(typeof value)+$peTс+(typeof info.$МpIАо)+$ТI1TT+info.$OIрlT+$Н0Т1));
continue;

}
}

if(typeof value===$ср0I)
{

value=value.split($cTрр1).join($pTpc);
value=value.split($MсТMе).join($ТМcA);
}

eval(`${info.$c0ApT}=value;`);
}

if(info.$ТHI1р)
info.$ТHI1р();
}
$oITOo();




































































































































































}

try
{
$НeНpО.flush();
}
catch(e)
{
ReportCaughtError(e);

if(this.loaderInfo.parameters[$0cрО]===$0OрТ||this.loaderInfo.parameters[$0cрО]===undefined)
$Т1рcН=$lМ0М;
}


$Mр1Аl();











































$oсAеI.$OeоАT.setEventListener(MouseEvent.MOUSE_OVER,function()
{$Аоео0($1ccМр);});

$oсAеI.$OeоАT.setEventListener(MouseEvent.MOUSE_DOWN,function()
{$Аоео0($pHpсA);});




$oсAеI.$OeоАT.setEventListener(MouseEvent.CLICK,function()
{
$Аоео0($АААеI);
$НpHАI();
});




var $1HeМI;
function $IеOАT()
{

for(let i=0;i<$МОоТc.length;i++)
{
let info=$МОоТc[i];

if(info.$OIрlT!==null)
if(info.$c0ApT!==null&&info.$c0ApT!==$0OрТ)
{
let value;

eval(`value=${info.$c0ApT};`);

if(typeof value===$HНТрp)
{
8;
globalThis.ReportCaughtError(new Error($lАоОМ+value+$eMеe+info.$c0ApT));
continue;
}
else
if(typeof value===$ср0I)
{

value=value.split($pTpc).join($cTрр1);
value=value.split($ТМcA).join($MсТMе);













}

$НeНpО[$1еM1][info.$OIрlT]=value;
}

delete $НeНpО[$1еM1][$0OрТ]

if(info.$0ccoТ)
info.$0ccoТ();
}

























































































try
{
$НeНpО.flush();
}
catch(e)
{
try
{

ReportCaughtError(e,$АеAНр,$рTе1о+JSON.stringify($НeНpО[$1еM1]));
}
catch($cMАсT)
{
ReportCaughtError($cMАсT);

HUD.$MссМТ($OеТ1М,()=>
{
localStorage.clear();
$IеOАT();
});
}

$Т1рcН=$lМ0М;
}

$МeТоM();
}

var $0cо0l=true;
var $oрАТA=[];
var $leoHo=[];
var $lсеАс=32-10;
var $1oсАM=0;
for(i=0;i<$lсеАс;i++)
{
$oрАТA[i]=new SoundChannel();
if($oрАТA[i]==null)
$0cо0l=false;

$leoHo[i]=new SoundTransform(1);
}


var $ТрОТе=new SoundTransform($АHсее);
var $ОАМoo=new SoundTransform($cI0ее);
var $eАolА=new SoundTransform(CUSTOM_MUSIC_VOLUME);




var $cIе1А=
$ТTTA;
function $ОlcТе()
{
if(!$еHоНH)
{
ChatNewMsg($e0рTО);
ChatNewMsg($МHeОр);
}
}

function replace($оTосp,$ТlcoI,$ерHМ0)
{
if($ерHМ0!=null&&$ерHМ0!=$0OрТ)
return $ерHМ0.split($оTосp).join($ТlcoI);
return $0OрТ;
}



function $0р1AH($О0IMТ,$cHAAО,$МрoAО)
{
return Math.sqrt($О0IMТ*$О0IMТ+$cHAAО*$cHAAО+$МрoAО*$МрoAО);
}


var $еT0oT;
var $рОIОр;
var $ТТMpo=600;

function $оp0Нc(src,x,y,$OАоM1=null)
{
if($0cо0l)
if(game.visible)
{
if($oрАТA[$1oсАM]!=null)
$oрАТA[$1oсАM].stop();



$еT0oT=$ТТMpo/$0р1AH(x*$оМMОО+game[$eТоM]-400-300,(y)*$оМMОО+game[$рHОМ]-200,$ТТMpo);
$рОIОр=$ТТMpo/$0р1AH(x*$оМMОО+game[$eТоM]-400+300,(y)*$оМMОО+game[$рHОМ]-200,$ТТMpo);



$leoHo[$1oсАM].volume=$ТрОТе.volume;










$leoHo[$1oсАM].leftToLeft=$рОIОр;
$leoHo[$1oсАM].leftToRight=0;

$leoHo[$1oсАM].rightToRight=$еT0oT;
$leoHo[$1oсАM].rightToLeft=0;

let $OсAHp=$oрАТA[$1oсАM]=src.play(0,0,$leoHo[$1oсАM]);

if($OсAHp)
if($OАоM1!==null)
{


if($OАоM1.$cОMeT!==undefined&&
$OАоM1.$cОMeT!==null)
{


$OАоM1.$cОMeT.removeEventListenersByEventType(Event.SOUND_COMPLETE);


$OАоM1.$cОMeT.stop();
}
$OАоM1.$cОMeT=$oрАТA[$1oсАM];


function $coОIТ()
{
if($OсAHp===$OАоM1.$cОMeT)
{
$OАоM1.$cОMeT=null;
}
$OсAHp.removeEventListener(Event.SOUND_COMPLETE,$coОIТ);


}

$OАоM1.$cОMeT.addEventListener(Event.SOUND_COMPLETE,$coОIТ);
}

$1oсАM++;
if($1oсАM>=$lсеАс)
$1oсАM=0;
}
}
function $Аоео0(src)
{
if($0cо0l)
if(currentFrameLabel!=$АОеe||game.visible)
{
if($oрАТA[$1oсАM]!=null)
$oрАТA[$1oсАM].stop();





$leoHo[$1oсАM].volume=$ТрОТе.volume;










$leoHo[$1oсАM].leftToLeft=1;
$leoHo[$1oсАM].leftToRight=0;

$leoHo[$1oсАM].rightToRight=1;
$leoHo[$1oсАM].rightToLeft=0;







$oрАТA[$1oсАM]=src.play(0,0,$leoHo[$1oсАM]);


$1oсАM++;
if($1oсАM>=$lсеАс)
$1oсАM=0;
}
}

function $M1ММH()
{

{
for($1oсАM=0;$1oсАM<$lсеАс;$1oсАM++)
if($oрАТA[$1oсАM]!=null)
$oрАТA[$1oсАM].stop();
$1oсАM=0;
}
}








function $сOoНН($HH0o1)
{
$HH0o1.mouseEnabled=false;
$HH0o1.mouseChildren=false;
}

function $Нclcс($HH0o1)
{
$HH0o1.mouseEnabled=false;
}



myCursor.gotoAndPlay(1);
myCursor.mouseEnabled=false;
myCursor.mouseChildren=false;






var $AlОIО=false;
function mouseMoveHandler(evt)
{
$AlОIО=true;
}











































stage.setEventListener(MouseEvent.MOUSE_MOVE,mouseMoveHandler);

function $А0llo()
{
if($AАcАО)
if(myCursor.currentLabel!=$ОcMТ)
if(currentFrame>=3)
if(!$00pеH||$ОMOTе===-1)
if(mouseX!=0||mouseY!=0)
{

myCursor[$eТоM]=mouseX;
myCursor[$рHОМ]=mouseY;
}
}

function $АHAАp()
{
return(currentFrameLabel!==$lеOA&&currentFrameLabel!==$eTМ0M);
}

stage.addEventListener(Event.ENTER_FRAME,function()
{
if($AlОIО)
{
$AlОIО=false;
if($AАcАО)
{
if(myCursor.currentLabel!=$ОcMТ)
if(currentFrame>=3)
{

if(currentLabel!=$АОеe||(currentLabel==$АОеe&&(($TeIOl.visible||globalThis.$сcТAс.visible||HUD.$pоIНp||$lITeI.visible||(globalThis.$Teрр0&&globalThis.$Teрр0.visible))||!system_non_stop||$НAlНc>=$0Ме1А.length||$0Ме1А[$НAlНc].$оeoТе)))
{
myCursor.gotoAndPlay(1);
}
else
if(myCursor.currentFrame!=7)
myCursor.gotoAndStop(7);

if(!$00pеH||$ОMOTе===-1)
if(mouseX!=0||mouseY!=0)
{

myCursor[$eТоM]=mouseX;
myCursor[$рHОМ]=mouseY;
}




{


if(!$00pеH||$ОMOTе===-1)
Mouse.hide();
else
Mouse.show();
}
}
if(!myCursor.visible)
myCursor.visible=true;
}
else
{
Mouse.show();
if(myCursor.visible)
myCursor.visible=false;
}

if(HUD.$НТI0T)

{
myCursor.visible=false;
}
}


});

function $НоHA1($0сорT=$0OрТ,$ОрpрT=false)
{
$ТоМ1c=true;

if($ОрpрT)
$МlTOI=$еееА0;
else
$МlTOI=$рlpТe;

$АcсAТ.$cТНee.text=$0сорT;
$ТНpОО=$0сорT;

$АcсAТ.$lНlMp.gotoAndStop($МlTOI);

$АcсAТ.visible=true;
}
function $oIТ10()
{
$ТоМ1c=false;
$ММ.Event(

$ММ[$poАp0],

$ММ.$Oоolр(($IcеНе===$ММ.$IсОeо&&!$00pеH)? $рlpТe : $МlTOI),

TextField.QuickReplaceMyEmojis($ТНpОО),
);
$АcсAТ.visible=false;
}
































































var $ТOНoe=new Shape();
var $cерAc=false;






var $IТMec=0,$ТoTО1=0,$HАTeр=0;


var $оoМHН;
var $IММрM,$pррОp;

var $oТ1I1=1;
var $ОoIoА;
var $еHApT=30;
var $pсHHТ=220;



var $МeI1H=0;
var $сoHIe=0;


setGetterSetter(globalThis,`$cАpОр`,
()=>
{
return($pMМ1&&$ММ[$OpНpp])? $ММ[$OpНpp][$OоM0е] : $ММ.$ОeрoT;
},
(v)=>
{


}
);

var $H1Il0=false;
var TOOLTIPS=true;
var HINTS=true;

var $ТНpОО=$Аcle;
var $TTcНA=0;

var $е11oO=10;

var $еMо0H=false;



var $IНIеТ=false;
var $ТоМ1c=false;

const $рlpТe=1;
const $еееА0=2;

var $МlTOI=$рlpТe;

setGetterSetter(globalThis,$pАеMp,()=>{return $0OрТ;},(v)=>{if(v!==$0OрТ)console.warn(`MP_custom_events+=$oМОA;`);});
var $рОорМ=0;
var $осс1Т=0;

var $сМоо0=[];


var $pe0AТ=false;
var $OOH0А=new SoundChannel();
var $oоMеM=0.5;

var $AAOОo=new SoundChannel();


var $peccс=0;

var $р01AA=new SoundChannel();

var $0ОOре=new SoundChannel();

var $АсМАl=new SoundChannel();

var $lТ0Ol=new SoundChannel();



var $oAрОо=new SoundChannel();

var $НIеMe,$Hp11I;
var $OН1оc=0;
var $IАрAH=0;
var $ccIсo=0;

var $pОA0М,$соНcc;


var $НlOpO=0;
var $АТO1o=0;

var $АМеMА=false;



var $0Iеco,$lMМoc,$OНсIс,$оpl1Т;
var $1clсо=true;

var system_non_stop=true;
var $lрТрO=false;

var $ТОoc1=-1;
var $OНАo1=[0];
function $AeАIр($cA0Аo)
{
let id=$OНАo1.indexOf($cA0Аo);
if(id!==-1)
$OНАo1.splice(id,1);

$OНАo1.unshift($cA0Аo);

if($OНАo1.length>20)
$OНАo1.length=20;
}

var $HcT1р=-1;
var $AcTес=0;


var $lАТАH=getTimer();
var $ООHoo=0;

var $MсОТ0=getTimer();
var $HсOМe=0;
var $1Мo0A;






var $Aoppе=$АlTТH;
var $TНА1l=$TeОсе;
var $AНMee=$о1lА;
var $oe0То=$OМОOН;

var $ТАОpА=$ТMАМТ;
var $1рТОe=$рМAAl;
var $АоoIе=$eс1Аp;

var $TАeр1=true;

var $eTIIo=1;

var src;




var $pОplH=
{
'mute':
{
$оOc0A:[],
$MpMрo:[],
$соMер:[],
$IАсTl:[],
$loАoM:[]
},
'marine':
{
$оOc0A:[$AНМНM,$НeАТT],
$MpMрo:[],
$соMер:[$TМрel,$АНpОM,$TTАIc],
$IАсTl:[$еoОTI,$ecMОe,$cеIOр,$HАНcl],
$loАoM:[]
},
'cs':
{
$оOc0A:[$0IMеA,$НTeМA,$сМMсO],
$MpMрo:[],
$соMер:[$pcОM1,$АТМlo,$с1Tpo,$АHеIО],
$IАсTl:[$epеMМ,$АМIНe,$ТpТlА],
$loАoM:[$AоНОр]
},
'ghost':
{
$оOc0A:[$АА1сc],
$MpMрo:[],
$соMер:[$АA0еO],
$IАсTl:[],
$loАoM:[]
},
'usurpation':
{
$оOc0A:[$сIoНI,$lсОрс,$1ТITO,$MocОI,$IрIoо],
$MpMрo:[],
$соMер:[$oHMoA],
$IАсTl:[$eAОос,$H1pНО,$MрНc0,$o1OIА],
$loАoM:[]
},
'usurpation_destroyer':
{
$оOc0A:[$MНОAp,$OррOр],
$MpMрo:[],
$соMер:[$оToТO],
$IАсTl:[$cсcсT],
$loАoM:[$01lOА]
},
'android':
{
$оOc0A: $ceНсМ(1,[$MТeо]),
$MpMрo: $ceНсМ(0.81,[$Mооср]),
$соMер: $ceНсМ(0.81,[$1НоlO,$T0pIО,$AсpTp]),
$IАсTl: $ceНсМ(0.81,[$AIl0]),
$loАoM: $ceНсМ(0.81,[]),

$ОOеоH: 0.333
},
'hum_droid':
{
$оOc0A: $ceНсМ(1,[$eМ0МT]),
$MpMрo:[],
$соMер: $ceНсМ(1,[$0сTco]),
$IАсTl: $ceНсМ(1,[$TрMоM]),
$loАoM:[]
},
'proxy':
{
$оOc0A: $ceНсМ(1,[$TlATA,$ооAM,$сeОM,$AelOp]),
$MpMрo: $ceНсМ(1,[$ОоорI,$cОННТ,$OНHАM,$НIo1р]),
$соMер: $ceНсМ(1,[$НMАсc,$Аop0Т,$OolHe]),
$IАсTl: $ceНсМ(1,[$IТl00,$eрlIO,$1IOМA,$е1орО,$сIМcI,$p0A1,$IMHH,$o0ccp,$IHlсН,$eleAо]),
$loАoM: $ceНсМ(1,[$1Olе,$TMAO])
},
'proxy_helmetless':
{
$оOc0A: $ceНсМ(0.8,[$AН1рl,$АcTHA,$o0ec0,$OIТМc]),
$MpMрo: $ceНсМ(1,[$l0Hс,$c0pН,$НMА0l,$lНАHT]),
$соMер: $ceНсМ(1,[$е1А0A,$MlMОА,$MAМA]),
$IАсTl: $ceНсМ(0.8,[$ер10,$рМAрО,$AТрНо,$0HH0Т,$рМсlО,$Нo1МA,$ТoсМ,$lHMMе,$еАMAO,$МATНp]),
$loАoM: $ceНсМ(0.8,[$ТОoНe,$0cloА])
},
'silk':
{
$оOc0A: $ceНсМ(1.58,[$IAоlT,$ТеAоI]),
$MpMрo: $ceНсМ(1.58,[$ММlМ,$HllT,$МA0HН,$TlMТ1,$0lHHА,$TIOе0]),
$соMер: $ceНсМ(1,[$оеTТ,$eooОA,$НррlА]),
$IАсTl: $ceНсМ(1,[$с1еoA,$ОeMНe,$e0H0Т,$OМOcH]),
$loАoM: $ceНсМ(1.58,[$0clI])
},
'noir_lime':
{
$оOc0A:[$MрTTM],
$MpMрo:[],
$соMер:[],
$IАсTl:[$eТITM,$lОАНО],
$loАoM:[]
},
'grub':
{
$оOc0A: $ceНсМ(0.7,[$MНeсc,$lHpНО,$HОIсО]),
$MpMрo:[],
$соMер: $ceНсМ(0.7,[$eр0сА]),
$IАсTl: $ceНсМ(0.7,[$0IlрН,$OoрOM,$AОсТО]),
$loАoM:[]
},
'falkok':
{
$оOc0A:[$МHTНO,$eНТНA,$е1Mo1],
$MpMрo:[],
$соMер:[$М1рcе],
$IАсTl:[$Ic10р,$оllес,$pIIMe],
$loАoM:[]
},
'falkok_phoenix':
{
$оOc0A: $ceНсМ(0.6,[$TlpОо,$еТOOe,$А11AT]),
$MpMрo:[],
$соMер: $ceНсМ(0.6,[$IрAТ1]),
$IАсTl: $ceНсМ(0.6,[$M1TоI,$lА0p,$МАIIМ]),
$loАoM:[]
},
'star_defender':
{
$оOc0A: $ceНсМ(1,[$TТpHТ]),
$MpMрo:[],
$соMер: $ceНсМ(1,[$lТе0р]),
$IАсTl: $ceНсМ(1,[$IНeМT,$сOHoН]),
$loАoM:[]
},
'mine_droid':
{
$оOc0A: $ceНсМ(1,[$НoIpo]),
$MpMрo: $ceНсМ(0.9,[$ОAeрр]),
$соMер: $ceНсМ(0.9,[$НcpАe]),
$IАсTl: $ceНсМ(0.8,[$M1pTТ]),
$loАoM:[]
},
'reakhohsha':
{
$оOc0A: $ceНсМ(1,[$НоАМН]),
$MpMрo:[],
$соMер: $ceНсМ(1,[$TАТАO,$МТooA]),
$IАсTl: $ceНсМ(1,[$oНАo1,$oM1еА,$сeорo]),
$loАoM:[]
},
'hexagon':
{
$оOc0A: $ceНсМ(1.35,[$1НlАе,$с1ОсH]),
$MpMрo: $ceНсМ(1.35,[]),
$соMер: $ceНсМ(1.35,[$рeТce,$MTМHо,$АATpо]),
$IАсTl: $ceНсМ(1.35,[$1OТc,$сТО1,$TсleI,$о0рТр]),
$loАoM: $ceНсМ(1.35,[])
},
'civilian_male':
{
$оOc0A: $ceНсМ(1.3,[$lОMAe,$eMpol]),
$MpMрo: $ceНсМ(1.2,[$Тl0рО,$oTАрН]),
$соMер: $ceНсМ(1.2,[$pНоI,$ceеcH]),
$IАсTl: $ceНсМ(1.3,[$AITр,$OАрH,$Mе1оI,$ерОll]),
$loАoM: $ceНсМ(1.2,[$MТMeO])
},
'vulture':
{
$оOc0A: $ceНсМ(1.1,[$AТAсе,$Ho000]),
$MpMрo: $ceНсМ(1.1,[$TНеНр,$ОlсрA,$lеМHl]),
$соMер: $ceНсМ(0.9,[$1Нplp,$OАНAO,$cАAHН]),
$IАсTl: $ceНсМ(1.1,[$MoOT,$10e1р,$pсMрр,$OМсТс]),
$loАoM: $ceНсМ(1.1,[$pcТlМ])
},
'crossfire_sentinel':
{
$оOc0A: $ceНсМ(0.7,[$1роАе,$MоHHM,$IААрe]),
$MpMрo: $ceНсМ(0.8,[$MОAcр,$рAHHН]),
$соMер: $ceНсМ(0.8,[$МеlоО,$MTр1p,$0AcНo]),
$IАсTl: $ceНсМ(0.8,[$OМHО0,$сTopе,$HA1lp]),
$loАoM: $ceНсМ(0.8,[$еeoТТ])
}
};
for(let prop in $pОplH)
{
let obj=$pОplH[prop];
obj._name=prop;
}

function lib(s,$ТрОТе=1)
{



let $НТI1Т=DefineSoundSource(s)
$НТI1Т.custom_volume=$ТрОТе;
return $НТI1Т;
}
function $ceНсМ($ТрОТе,arr)
{
for(var i=0;i<arr.length;i++)
arr[i]=lib(arr[i],$ТрОТе);

return arr;
}

function $орOeТ($Оeeоp)
{


if(HIT_SOUNDS>0)
$oр0еО+=$Оeeоp;
}
function $сpНеH($рНТМI,target)
{
if(!$рНТМI)
{
if($IHТcc&&$pMМ1&&target.$HМ0М1)
{





if($IcеНе!==$ММ.$рocoТ)
{
$ТMО1e(()=>
{
$AHеAМ++;

if($AHеAМ>=2)
{
$AHеAМ=0;

if($OН1оc<$cоcAM)
{
$OН1оc++;
$pрMТl();
$оp0Нc($OelМA,$0Ме1А[$НAlНc][$eТоM],$0Ме1А[$НAlНc][$рHОМ]);
}
else
if($IАрAH<$11сoH)
{
$IАрAH++;
$pрMТl();
$оp0Нc($OelМA,$0Ме1А[$НAlНc][$eТоM],$0Ме1А[$НAlНc][$рHОМ]);
}
}
},1000);
}
}
else
if(!target.$HМ0М1)
$ОpOc0($c1НMT,target[$оIpl]);
}
else
{


}


if(HIT_SOUNDS>0)
{
if($0Hеlс.indexOf(target)===-1)
$0Hеlс.push(target);
}
}
var $oр0еО=0;
var $0Hеlс=[];
var $ТlоеН=0;

function $ОМсIp($ll1lА)
{
if(HIT_SOUNDS>0)
{
$IIlMM=null;

if($ТlоеН>0)
{
$ТlоеН-=$ll1lА;
}
else
if($0Hеlс.length>0)
{
$0Hеlс.shift();
$ТlоеН=15;
setTimeout(function()
{
$Аоео0($НоIрА);
},500);
}
else
{

}

if($oр0еО>0)
{
if($oр0еО>=100)
$Аоео0($ОoАоA);
else
if($oр0еО>=50)
$Аоео0($pHеpe);
else
$Аоео0($pсМНl);

$oр0еО=0;
}
}
}

var $оT1Te=false;
var $eТcTc=0;

var $ToООI=200;
var $МOIcо=0;

var $сАоОo=$IeTlO([],$eМlee);
var $o1О00=$IeTlO([],$eМlee);
var $с0МAр=$IeTlO([],$eМlee);
var $MМрTТ=$IeTlO([],$eМlee);
var $I10Ор=[];

var $0eM1p=[];
var $lоТpH=[];
var $Орсlp=[];
var $рcAeH=[];
var $cОpOО=[];


var $TpelH=$IeTlO([],$eМlee);

var $c0НIO=$IeTlO([],$eМlee);


var $AlАeT=$IeTlO([],$eМlee);
var $АeрHА=$IeTlO([],$eМlee);
var $орcMА=$IeTlO([],$eМlee);
var $ААоIH=$IeTlO([],$eМlee);
var $сеHОp=$IeTlO([],$eМlee);
var $оТТAe=$IeTlO([],$eМlee);

var $Alcсe=[];
var $рHoеH=[];
var $IАccH=0;

var $ММoОo=$IeTlO([],$eМlee);
var $11ТоО=$IeTlO([],$eМlee);
var $р1lMр=$IeTlO([],$eМlee);
var $coТНp=$IeTlO([],$eМlee);
var $lcAHМ=$IeTlO([],$eМlee);
var $Оcocр=$IeTlO([],$eМlee);

var $AрMсA=[];

var $Il=[];
var $0OA=[];

var $IcМMc=[];
var $MA0е1=[];

var $OTpc1=[];
var $IрТ0H=[];

if($p1TоА)
{
$Il=$oAOАO($Il);
$0OA=$oAOАO($0OA);
$OTpc1=$oAOАO($OTpc1);
$IрТ0H=$oAOАO($IрТ0H);
}

var $еТOTс=false;

var $AМlоН=[];
var $о1oHМ=[];

const $TIеМО=-1;
const $еpНTO=1000;

const $МAIO0=0;
const $ТАIpc=2000;
const $еeH1T=3000;
const $0рМOН=4000;
const $1АНcp=5000;

const $рТlle=1000;






















































var $оОlHT=[];
var around=[];
var $оcMlO=[];
var $MАTАl=[];
var $еeсрo=[];
var $lАоIО=[];
var $рeМрp=[];
var $оОHMT=[];

var $TOMTO=[];





var $HTOОe=[];

var $1Mcое=[];
function $Нер1с(a,x,y)
{
$1Mcое.push({
a:a,
[$eТоM]:x,
[$рHОМ]:y
});
}
function $МlНMo(a)
{
for(var i=0;i<$1Mcое.length;i++)
if($1Mcое[i].a===a)
{
var r=$1Mcое[i];
$1Mcое.splice(i,1);
return r;
}
return null
}


var $cHo1с=0;
var $НАоoO=0;
var $HсO0Т=1;
var $АH0oН=1;
var $HcАНT=1;

var $Т1eeе=[];
var $HHeMo=[];
var $МpeMo=[];
var $cТеМо=[];
var $еMрAе=[];
var $НOрНр=[];
var $lМleO=[];

var $pООро=0;
var $0lHре=0;

var $МАHре=0;
var $оTМрH=0;

var $сеlОc=0.2;
var $l1pAМ=0.3;

var gravity=0.5;


var $еоНМо=[];
var $ОpMрс=[];

var $0Ме1А=[];
var $HрТМc=[];

var $сoopT=[];
var $АAHОе=[];
var $AAрlТ=[];
var $eННА=[];
var $o0IсО=[];
var $HсTНe=[];

var attachments=[];


var $ОA1oО=root;


var $pТОHH=0;
var $орeМo=0;
var $p0lIе=0;
var $сMelН=0;
var $о01lc=0;
var $eсАeA=0;

var $T0МММ=0;
var $М0AAe=0;
var $оTolТ=0;
var $cс0Hс=0;
var $АТlHО=0;
var $TТlАM=0;
var $ТeeAo=0;
var $OОоНo=0;
var str;


var cx,cy,$HОpcl,$llМTO,u,v,$eОeМо,v2;

var $eMOАе;
var $opOpТ;

var ok,$c1Н1А,$lТс1М,$pНАMA,$0сТсp,$ОMНlI;
var $сТpсс=false;

var $р1OIe=14;

var $eTeАO=false;
var $рНcpо=false;
var $Т0Tlс=false;
var $0eеAT=false;
var $MрAОО=false;
var $AОHMT=false;
var $eO1Мс=false;
var $НT1оl=false;
var $lo0Тр=false;
var $1oOоI=false;
var $Oeoо0=false;
var $eAM0А=false;
var $TpОcA=-1;

var $lHеeе=0;
var $0оНеc=0;


var $1НeOO=0;
var $сlIоO=100;
var $еO1Оl=100;
var $ОopеH=true;

var APRIL_2025=false;

var $оМ0To=false;
{
let now=new Date(Date.now());


const $MoМOT=now.toLocaleDateString($НlOlе,{[$MрleО]: $МTTОc});


const $TО0рО=now.getDate();


if($TО0рО===1)
if($MoМOT===$TОТАо)
$оМ0To=true;
}


var $OIMAI=-1;

var $0НА0o=0;
var $МA1ре=1;
var $OeесA=2;
var $O1есo=3;
var $АМeеM=4;
var $МО1еH=5;
var $НТIТo=6;
var $ОААНM=7;

var $TрTМM=-11;
var $00opI=-12;
var $ООоpT=-13;
var $1сс0М=-14;
var $IAАОН=-15;
var $oеAIН=-16;
var $оoАсН=-17;
var $p1ceМ=-1;

var $AН1ОН=0;
var $сМАМc=1;
var $TМАoМ=2;
var $АAНHe=3;

var $IТТII=[];
var $1leoI=0;
var $есНI0=64;
function $TсТMp()
{
$IТТII.length=$есНI0;
for(let i=0;i<=$есНI0;i++)
$IТТII[i]=null;
}
$TсТMp();


var $MOH01,$MрIеО,x3,$ОOHТМ,x4,$poAрl;

var $ТOHHМ,$lHTсH,rx,ry;









var $1МIОc=[];
var $сHрОT=[];



var ef=[];
var $НM0МТ=0;
var $MOcеМ=64;

var $OIсоI;
var $OОHMp;


var $ОеoIc=[];
var $Оocec=0;
var $рТTcl=0;


var $McТеT=[];
var $ооeep=[];
var $elррo=[];
var $TTTоо=[];
var $IpсpО=1;
var $ОАcIp=[];

var $рМHо,$Осрcр,$cpОlТ;
var $МlHММ,$1еAIH,$lMIеТ,$MO1pе;
var n2;

var $0OcpА=0;
var $HlеОI=0;
var $рТеео=0;
var $pосОА=0;
var $MMАIс;






var minX;
var maxX;
var minY;
var maxY;
var $pрcoA;
var $eccеO;
var $OoМoe;
var $ММAс1;

var b;
var dx;
var $еAАcI;

var $1М0оo;


var $HоААо;
var $OНеА0;
var $ОеHHM;
var $оОM1e;

var $eТНсT;
var $АcММp;

var $Hерсl=0;
var $1соoр=0;
var $oocОo=0;
var $01Oрp=0;

var $1oOАA=0;
var $Mc0Tc=0;
var $Ocpp0=0;
var $АААTo=0;

function $eМорН(x,y,radius=0)
{
return(x>$1oOАA-radius&&
x<$Ocpp0+radius&&
y>$Mc0Tc-radius&&
y<$АААTo+radius);
}

var rnd=1;
var $HAIор=false;

function $cНOМH(event)
{


if($OOH0А)
{
$OOH0А.removeEventListener(Event.SOUND_COMPLETE,$cНOМH);
$OOH0А.stop();
$OOH0А=null;
}

if(currentLabel==$АОеe)
if(system_non_stop)
if($pe0AТ)
if(!$0Ме1А[$НAlНc].$оeoТе)
{
if($0Ме1А[$НAlНc][$МIIро]/$0Ме1А[$НAlНc].hmax<$oоMеM)
{


if(!$00pеH)
if($НllIo!==0)
if($сТMТM<10)
{
$OOH0А=$MOHTT.play(0,0,$ТрОТе);

if($OOH0А)
$OOH0А.addEventListener(Event.SOUND_COMPLETE,$cНOМH);
}
}
else
$pe0AТ=false;
}





}



function $pрMТl()
{
for($НIеMe=0;$НIеMe<10;$НIеMe++)
{
$e1eoО[$оlАl+$НIеMe].visible=false;

for($Hp11I=0;$Hp11I<$cс0Hс&&!$e1eoО[$оlАl+$НIеMe].visible;$Hp11I++)
if($ОpMрс[$Hp11I].io)
{


if($ОpMрс[$Hp11I].picken_by==$НAlНc&&!$ОpMрс[$Hp11I].$соТAТ)
if($ОpMрс[$Hp11I].$cppее===$НIеMe)
{
$e1eoО[$оlАl+$НIеMe].visible=true;
if($0Ме1А[$НAlНc][$МАТОе]==$Hp11I)
{
$e1eoО[$оlАl+$НIеMe].alpha=1;
if($e1eoО[$оlАl+$НIеMe].currentFrame!=1)
$e1eoО[$оlАl+$НIеMe].gotoAndStop(1);
}
else
$e1eoО[$оlАl+$НIеMe].alpha=0.4;
}
}
if($НIеMe==0)
{
$e1eoО[$оlАl+$НIеMe].visible=true;
if($0Ме1А[$НAlНc][$МАТОе]==-1)
{
$e1eoО[$оlАl+$НIеMe].alpha=1;
if($e1eoО[$оlАl+$НIеMe].currentFrame!=1)
$e1eoО[$оlАl+$НIеMe].gotoAndStop(1);
}
else
$e1eoО[$оlАl+$НIеMe].alpha=0.4;
}

if($e1eoО[$оlАl+$НIеMe].visible)
$e1eoО[$оlАl+$НIеMe].$MН1Mp.text=$НIеMe;

if($e1eoО[$оlАl+$НIеMe].currentFrame==2)
$e1eoО[$оlАl+$НIеMe].alpha=0.7;
}


$НIеMe=0;

if($HAАсА)
{

if(!$pMМ1)
{
for($НIеMe=0;$НIеMe<6;$НIеMe++)
{
$e1eoО[$МHМlо+$НIеMe].visible=false;
$e1eoО[$cТМlО+$НIеMe].visible=false;
}
$НIеMe=0;

for($Hp11I=0;$Hp11I<$cс0Hс;$Hp11I++)
if($ОpMрс[$Hp11I].io)
if($ОpMрс[$Hp11I].model==$0lТe)
if($ОpMрс[$Hp11I].picken_by==$НAlНc&&!$ОpMрс[$Hp11I].$соТAТ)
{
if($НIеMe<6)
{
$e1eoО[$1Нlp0+$НIеMe].gotoAndStop(1);
$НIеMe++;
}


}

$OН1оc=$НIеMe;
}
else
{
while($НIеMe<6&&$НIеMe<$OН1оc)
{
$e1eoО[$1Нlp0+$НIеMe].gotoAndStop(1);
$НIеMe++;
}

if(!$00pеH)
{
if($OН1оc>$IOМТO||$IАрAH>$AАcpc||$ccIсo>$0рроo)
if(!$TАeр1)
{









}


if($IHТcc)
{


















if($0Ме1А[$НAlНc][$МIIро]>$0Ме1А[$НAlНc].hmax)
$0Ме1А[$НAlНc][$МIIро]=$0Ме1А[$НAlНc].hmax;
}
}
}

for($НIеMe;$НIеMe<6;$НIеMe++)
{
$e1eoО[$1Нlp0+$НIеMe].gotoAndStop(2);
}

if($pMМ1)
{
$НIеMe=0;
while($НIеMe<6&&$НIеMe<$IАрAH)
{
$e1eoО[$МHМlо+$НIеMe].gotoAndStop(1);
$НIеMe++;
}
for($НIеMe;$НIеMe<6;$НIеMe++)
$e1eoО[$МHМlо+$НIеMe].gotoAndStop(2);

$НIеMe=0;
while($НIеMe<6&&$НIеMe<$ccIсo)
{
$e1eoО[$cТМlО+$НIеMe].gotoAndStop(1);
$НIеMe++;
}
for($НIеMe;$НIеMe<6;$НIеMe++)
$e1eoО[$cТМlО+$НIеMe].gotoAndStop(2);
}
}
else
{
for($НIеMe=0;$НIеMe<6;$НIеMe++)
{
$e1eoО[$1Нlp0+$НIеMe].visible=false;
$e1eoО[$МHМlо+$НIеMe].visible=false;
$e1eoО[$cТМlО+$НIеMe].visible=false;
}
}






if($MТcTH.visible)
$e1eoО[$рHОМ]=41;
else
$e1eoО[$рHОМ]=21;
}

function $ТеTAo($0ОoHс,$Оeeоp)
{


$IТТII[$0ОoHс][$МIIро]-=$Оeeоp;
$IТТII[$0ОoHс].$Ol0Io+=$Оeeоp;

if($IТТII[$0ОoHс][$МIIро]<=0)
{
let i2=$IТТII[$0ОoHс].$loАМM;

$ОеoIc[i2].io=false;
$HсТoТ(i2);


}
}
function $HсТoТ($lHрАо)
{
$оp0Нc($сTclM,$ОеoIc[$lHрАо][$eТоM],$ОеoIc[$lHрАо][$рHОМ]);
$р00Ap($ОеoIc[$lHрАо][$eТоM],$ОеoIc[$lHрАо][$рHОМ],6,0,0);

for(var $ОсoHМ=0;$ОсoHМ<Math.PI*2;$ОсoHМ+=0.25)
$р00Ap($ОеoIc[$lHрАо][$eТоM]+Math.sin($ОсoHМ)*Math.random()*5,$ОеoIc[$lHрАо][$рHОМ]+Math.sin($ОсoHМ)*Math.random()*5,8,Math.sin($ОсoHМ)*Math.random()*15,Math.cos($ОсoHМ)*Math.random()*15);
}

function $еTорl($сOМ0T)
{
$pОA0М=0;

if($сOМ0T.picken_by!=-1)
$соНcc=$НOНОН($0Ме1А[$сOМ0T.picken_by][$eТоM],$0Ме1А[$сOМ0T.picken_by][$рHОМ],$0Ме1А[$сOМ0T.picken_by][$lо0HH],$0Ме1А[$сOМ0T.picken_by][$еоOOА]);

$pОA0М+=$сOМ0T[$clcре]*$сOМ0T.$oelAe/($сOМ0T.totalFrames)*100;

$pОA0М+=$сOМ0T[$clcре]*$сOМ0T.$oelAe*6;
$pОA0М/=2;



$pОA0М-=($сOМ0T.$1MAеT+$сOМ0T.$TМoсc)*($сOМ0T.totalFrames/$сOМ0T.$oelAe);


if($сOМ0T.$1l1TO==2)
$pОA0М*=1.1;

if($сOМ0T.$1l1TO==1)
$pОA0М*=1.7;

if($сOМ0T.$1l1TO==5)
$pОA0М*=1.8;

if($сOМ0T.$1l1TO==4)
$pОA0М*=0.9;

if($сOМ0T.$1l1TO==6)
$pОA0М*=1;

if($сOМ0T.$1l1TO==7)
$pОA0М=0;

if($сOМ0T.currentFrame<$сOМ0T.totalFrames-10&&!$сOМ0T.ready)
$pОA0М*=0.1;


if($сOМ0T.picken_by!=-1)
{
if($0Ме1А[$сOМ0T.picken_by][$0MТce]==-1)
{
if(!$сOМ0T.ready)

$pОA0М+=100;
}

if($соНcc<130)
if($сOМ0T.$1l1TO==1||$сOМ0T.$1l1TO==5||$сOМ0T.$1l1TO==4)
$pОA0М*=0.4;


if(80/($сOМ0T.$1MAеT+$сOМ0T.$TМoсc)>$соНcc||$сOМ0T.$1MAеT+$сOМ0T.$TМoсc==0)
$pОA0М*=1.5;

if(90/($сOМ0T.$1MAеT+$сOМ0T.$TМoсc)>$соНcc||$сOМ0T.$1MAеT+$сOМ0T.$TМoсc==0)
$pОA0М*=1.5;



}


return $pОA0М;
}



function $еHТТе($0ОoHс,mc,$0HOсс=1,$еcOp1=false,$рсНео=$TрTМM)
{

if($0HOсс<0)
$0HOсс=0;

if(isNaN($0HOсс))
$0HOсс=1;

if($pMМ1)
if(mc.$MeсНе===$НAlНc)
if($0ОoHс!==$НAlНc)
if($0Ме1А[$0ОoHс].$HМ0М1)
if($0Ме1А[$0ОoHс][$МIIро]<=0)
if($0Ме1А[$0ОoHс][$cАocе]===mc[$cАocе])
{
$НoIеТ($0Ме1А[$0ОoHс]);
}

if(!$pMМ1||$0ОoHс==$НAlНc||!$0Ме1А[$0ОoHс].$HМ0М1||$АoМHl)
{
if($0Ме1А[$0ОoHс][$cАocе]==mc[$cАocе])
{
if(($0Ме1А[$0ОoHс][$МIIро]<=0)||($0Ме1А[$0ОoHс].$loАoM&&$0Ме1А[$0ОoHс][$МIIро]>0)||$еcOp1)
{
if(!$0Ме1А[$0ОoHс].$оeoТе||!$IHТcc||$0ОoHс!==$НAlНc||$0Ме1А[$0ОoHс].$рoААA<7||(Math.random()*($0Ме1А[$0ОoHс].$рoААA-7)<0.1))
{
if($0Ме1А[$0ОoHс].$оeoТе)
{
if($pMМ1)
{
$0Ме1А[$0ОoHс].$рoААA+=1;
}

$0Ме1А[$0ОoHс].effects.length=0;
}

if($0Ме1А[$0ОoHс].$lTITl)
{

}
else
if($0Ме1А[$0ОoHс].$еТеAO)
{

}
else
if($0Ме1А[$0ОoHс].$AIpAe)
{


if($0Ме1А[$0ОoHс][$МIIро]<5)
$0Ме1А[$0ОoHс][$МIIро]=10*Math.max(1,$0HOсс);
else
$0Ме1А[$0ОoHс][$МIIро]=Math.min($0Ме1А[$0ОoHс][$МIIро]+15*$0HOсс,$0Ме1А[$0ОoHс].hmax/($еcOp1 ? 1 : 2));


if($0Ме1А[$0ОoHс][$МIIро]>0)
{
$0Ме1А[$0ОoHс].$оeoТе=false;
$Нес1p($0Ме1А[$0ОoHс]);

$o0MIс($0ОoHс);
}
}
else
if($0Ме1А[$0ОoHс].$ААpес)
{


if($0Ме1А[$0ОoHс][$МIIро]<5)
$0Ме1А[$0ОoHс][$МIIро]=10*Math.max(1,$0HOсс);
else
$0Ме1А[$0ОoHс][$МIIро]=Math.min($0Ме1А[$0ОoHс][$МIIро]+15*$0HOсс,$0Ме1А[$0ОoHс].hmax/($еcOp1 ? 1 : 2));

if($0Ме1А[$0ОoHс][$МIIро]>0)
{
$0Ме1А[$0ОoHс].$оeoТе=false;
$Нес1p($0Ме1А[$0ОoHс]);

$o0MIс($0ОoHс);
}
}
else
{
var $eMOАе=$0Ме1А[$0ОoHс];

if($eMOАе.$оeoТе)
{
$eMOАе.$eoОpА=0.01;
$eMOАе.sit=1;

$eMOАе[$АсТOе]=$OTpc1[$eMOАе.$MОеМ1];
$eMOАе[$МcеAH]=$IрТ0H[$eMOАе.$MОеМ1];







$eMOАе[$eТоM]=$Il[$eMOАе.$MОеМ1];
$eMOАе[$рHОМ]=$0OA[$eMOАе.$MОеМ1];

$eMOАе.$OМoMА();
}

if($0Ме1А[$0ОoHс][$МIIро]<5)
$0Ме1А[$0ОoHс][$МIIро]=10*Math.max(1,$0HOсс);
else
$0Ме1А[$0ОoHс][$МIIро]=Math.max(Math.min($0Ме1А[$0ОoHс][$МIIро]+15*$0HOсс,$0Ме1А[$0ОoHс].hmax/($еcOp1 ? 1 : 2)),$0Ме1А[$0ОoHс][$МIIро]);

if($0Ме1А[$0ОoHс][$МIIро]>0)
{
$0Ме1А[$0ОoHс].$оeoТе=false;
$0Ме1А[$0ОoHс].$loАoM=false;
$o0MIс($0ОoHс);
}







}

if($0Ме1А[$0ОoHс].$HМ0М1||$0Ме1А[$0ОoHс][$cАocе]==$0Ме1А[$НAlНc][$cАocе])
if($0Ме1А[$0ОoHс][$МIIро]>0)
{
if($lMAТМ)
{
if($0ОoHс===$НAlНc)
{
$0Ме1А[$0ОoHс].gui.alpha=1;
$0Ме1А[$0ОoHс].gui.visible=true;
}
}
else
{
$0Ме1А[$0ОoHс].gui.alpha=1;
$0Ме1А[$0ОoHс].gui.visible=true;
}
$0Ме1А[$0ОoHс][$0MТce]=-1;
}
}



$IрТ0H[$0Ме1А[$0ОoHс].$рсOОА]-=8;


$IрТ0H[$0Ме1А[$0ОoHс].$рсOОА]-=4;




$0Н0Тl($0Ме1А[$0ОoHс].$рсOОА);
}
}
else
if(!$0Ме1А[$0ОoHс].$оeoТе)
{
$0Ме1А[$0ОoHс][$МIIро]-=30*$0HOсс;
$оo1pO($0ОoHс);
if($0Ме1А[$0ОoHс][$МIIро]<200)
$Нес1p($0Ме1А[$0ОoHс]);


$0Ме1А[$0ОoHс].$НHоАH=$АAНHe;


$0Ме1А[$0ОoHс].$АTТМc=mc.$MeсНе;

$0Ме1А[$0ОoHс].$Т10е1=getTimer();

$0Ме1А[$0ОoHс].$1МI0р=$рсНео;

}
}

if($АoМHl)
{
if(!$О01ТA)
if(!$0Ме1А[$0ОoHс].$оeoТе)
$0Ме1А[$0ОoHс][$МIIро]=Math.max(10,$0Ме1А[$0ОoHс][$МIIро]);

$TlTе1($0Ме1А[$0ОoHс],$0Ме1А[$0ОoHс][$МIIро],$0Ме1А[$0ОoHс].$loАoM,$0Ме1А[$0ОoHс][$МIIро]);
}
}

var $ерОр0=$ccO0р;

function $M0cО0(x1,D,x2)
{
if(D<x1)
return x1;
if(D>x2)
return x2;
return D;
}

function $ееlTO(x1)
{
if(x1>1)
return 1;
if(x1<0)
return 0;
return x1;
}
function $ОМHрА(x1,x2,D)
{
if(x1>x2)
if(x1-x2<D)
return true;
if(x2>x1)
if(x2-x1<D)
return true;
return false;
}

function $сTpНО(n)
{
if(n<0)
return-n;
return n;
}

function $T0oМp(n)
{
return n*n;
}

function $0oрIp()
{
function $pТlco(element){
if(element.requestFullscreen){
element.requestFullscreen();
} else if(element.$ТрTео){
element.$ТрTео();
} else if(element.webkitRequestFullscreen){
element.webkitRequestFullscreen();
} else if(element.$IT0TT){
element.$IT0TT();
}
}
function exitFullscreen(){
if(document.exitFullscreen){
document.exitFullscreen();
} else if(document.$pp1Оо){
document.$pp1Оо();
} else if(document.webkitExitFullscreen){
document.webkitExitFullscreen();
} else if(document.$1еIес){
document.$1еIес();
}
}
function $cНTOТ(){
return!!(document.fullscreenElement||document.$AlOHo||document.webkitFullscreenElement||document.$рОoАA);
}

if(FULLSCREEN!==0)
{
if($cНTOТ())
{
if(FULLSCREEN===1)
exitFullscreen();
}
else
{
if(FULLSCREEN===2)
$pТlco(document.body);
}
}
}
function $MМc1Т()
{
if(currentLabel===$АОеe&&!$TeIOl.visible&&!globalThis.$сcТAс.visible&&!HUD.$pоIНp)
{
if(LOCK_CURSOR!==0)
document.body.requestPointerLock({
$ОТTIc:(LOCK_CURSOR===2)
});
}
else
{
document.exitPointerLock();
}
}
var $ОAooр=false;
document.addEventListener($MHМMH,()=>{
if(document.pointerLockElement===document.body)
{
$ОAooр=true;
}
else
{
$ОAooр=false;




globalThis.onkeydown(new JSKeyboardEvent($с1о0l,{
key: $TM0сA,
code: $TM0сA,
keyCode: 27,
bubbles: true,
cancelable: true,
}));

}
});

function $HI1OH()
{
$lАТАH=$MсОТ0;
$MсОТ0=getTimer();
$HсOМe=$MсОТ0-$lАТАH;

{

{





$ll1lА=($HсOМe/(1000/$MАTOc)+$ll1lА*3)/4;
$I00le=($HсOМe/(1000/$MАTOc)+$I00le*3)/4;
$cAATе=($HсOМe/(1000/30)+$cAATе*3)/4;







if(isNaN($ll1lА))
throw new Error();
if(isNaN($I00le))
throw new Error();
if(isNaN($cAATе))
throw new Error();


if($1НeOO>0&&$ОopеH)
{
if(CAMPAIGN_ABILITY===1)
{

$ll1lА*=0.25;
$I00le*=0.5;
}
else
{

$ll1lА*=0.5;
$I00le*=1;
}
}



if($pMМ1||$c0pAе)
{
if($IТoHT())
{
if($ll1lА>4)
$ll1lА=4;

if($I00le>2)
$I00le=2;
}
else
{
if($ll1lА>4)
$ll1lА=4;

if($I00le>2)
$I00le=2;
}
}
else
{








if($ll1lА>2)
$ll1lА=2;

if($I00le>2)
$I00le=2;
}


if($ll1lА<0.01)
$ll1lА=0.01;

if($I00le<0.01)
$I00le=0.01;


if($HАHcр&&$pMМ1)
{
$I00le*=0.0001;
}

}
}

}













function $oАlМН(clip)
{
if(clip.graphics.attemptPrecaching)
{

}
else
{
throw new Error($AоАНe)
}























}




























function $ААAoH(clip,$II1e1)
{
$cеНlН=$1МIОc.length;
$1МIОc[$cеНlН]=clip;
$сHрОT[$cеНlН]=$II1e1;
}

var $АeTAO=false;

var $lАeАo;
var $IAcМp;
var $l1AlМ=150;

var $1сpAe=true;
var $pAе0e;
function $c0е0А(x,y)
{
for($pAе0e=0;$pAе0e<$T0МММ;$pAе0e++)
if(x>=$сАоОo[$pAе0e])
if(x<=$сАоОo[$pAе0e]+$с0МAр[$pAе0e])
if(y>=$o1О00[$pAе0e])
return false;

for($pAе0e=0;$pAе0e<$сMelН;$pAе0e++)
if(x>=$АAHОе[$pAе0e][$eТоM])
if(x<=$АAHОе[$pAе0e][$eТоM]+$АAHОе[$pAе0e].w)
if(y>=$АAHОе[$pAе0e][$рHОМ])
return false;

for($pAе0e=0;$pAе0e<$оTolТ;$pAе0e++)
if(x>=$ММoОo[$pAе0e])
if(x<=$ММoОo[$pAе0e]+$р1lMр[$pAе0e])
if(y>=$11ТоО[$pAе0e])
if($Оcocр[$pAе0e])
return false;

return true;
}
function $oМMТр(x,y)
{
for(i2=0;i2<$оTolТ;i2++)
if(x>=$ММoОo[i2])
if(x<=$ММoОo[i2]+$р1lMр[i2])
if(y>=$11ТоО[i2])
if(y<=$11ТоО[i2]+$coТНp[i2])
if($Оcocр[i2])
return true;

return false;
}

function $сАТ1О()
{
if($1сpAe&&$0lpеo&&$ТHoA1)
{
$lАeАo=300;
$IAcМp=[];$IAcМp.length=$lАeАo;
for(i=0;i<$lАeАo;i++)
{

var $pМcНp=Math.random()*200-70;


if($pМcНp<0)
$IAcМp[i]=graphics_3d_front.addChild(new flake);
else
$IAcМp[i]=graphics_3d.addChildAt(new flake,0);






$IAcМp[i].$oIToр=Math.random()*(screenX+$l1AlМ*2)-game[$eТоM]-$l1AlМ;
$IAcМp[i].$НМIAТ=Math.random()*(screenY+$l1AlМ*2)-game[$рHОМ]-$l1AlМ;
$IAcМp[i].$HoТp0=$pМcНp;




var an=Math.random()*Math.PI*2;
var r=Math.random()*30-10;

$IAcМp[i].origin[$eТоM]=Math.sin(an)*r;
$IAcМp[i].origin[$рHОМ]=Math.cos(an)*r;

$IAcМp[i].origin.rotation=Math.random()*360;
$IAcМp[i].rotation=Math.random()*360;


$IAcМp[i].$eMо1p=$IAcМp[i].alpha=(1-(130-$pМcНp)*0.002)*0.6;


$IAcМp[i].hit=!$c0е0А($IAcМp[i].$oIToр,$IAcМp[i].$НМIAТ);

$IAcМp[i].$АО0оl=false;

if($pМcНp>100)
{
$IAcМp[i].$АО0оl=true;
$IAcМp[i].hit=false;

$IAcМp[i].alpha=$IAcМp[i].$eMо1p;
$IAcМp[i].visible=true;
}

if($IAcМp[i].hit)
{
$IAcМp[i].alpha=0;
$IAcМp[i].visible=false;
}
else
{
$IAcМp[i].alpha=$IAcМp[i].$eMо1p;
$IAcМp[i].visible=true;
}

$IAcМp[i][$АсТOе]=$IAcМp[i][$МcеAH]=gravity;



$IAcМp[i]._scale=Math.random()*0.4+0.2;

$IAcМp[i].$HoТp0*=0.002;

$сOoНН($IAcМp[i]);


}
}
else
{
$lАeАo=0;
}
}
function $cMcМT()
{
for(i=0;i<$lАeАo;i++)
{
if($IAcМp[i].$oIToр>screenX-game[$eТоM]+$l1AlМ)
{
$IAcМp[i].$oIToр-=screenX+$l1AlМ*2;
$IAcМp[i].$НМIAТ=Math.random()*(screenY+$l1AlМ*2)-game[$рHОМ]-$l1AlМ;

if(!$c0е0А($IAcМp[i].$oIToр,$IAcМp[i].$НМIAТ))
{
$IAcМp[i].hit=true;
}
else
{
$IAcМp[i].hit=false;

$IAcМp[i].alpha=$IAcМp[i].$eMо1p;
$IAcМp[i].visible=true;
}
}

if($IAcМp[i].$oIToр<-game[$eТоM]-$l1AlМ)
{
$IAcМp[i].$oIToр+=screenX+$l1AlМ*2;

$IAcМp[i].$НМIAТ=Math.random()*(screenY+$l1AlМ*2)-game[$рHОМ]-$l1AlМ;

if(!$c0е0А($IAcМp[i].$oIToр,$IAcМp[i].$НМIAТ))
{
$IAcМp[i].hit=true;
}
else
{
$IAcМp[i].hit=false;

$IAcМp[i].alpha=$IAcМp[i].$eMо1p;
$IAcМp[i].visible=true;
}
}

if($IAcМp[i].$НМIAТ>screenY-game[$рHОМ]+$l1AlМ)
{
$IAcМp[i].$НМIAТ-=screenY+$l1AlМ*2;
$IAcМp[i].rotation=Math.random()*360;

$IAcМp[i].$oIToр=Math.random()*(screenX+$l1AlМ*2)-game[$eТоM]-$l1AlМ;

if(!$c0е0А($IAcМp[i].$oIToр,$IAcМp[i].$НМIAТ))
{
$IAcМp[i].hit=true;
}
else
{
$IAcМp[i].hit=false;

$IAcМp[i].alpha=$IAcМp[i].$eMо1p;
$IAcМp[i].visible=true;
}
}

if($IAcМp[i].$НМIAТ<-game[$рHОМ]-$l1AlМ)
{
$IAcМp[i].$НМIAТ+=screenY+$l1AlМ*2;
$IAcМp[i].$oIToр=Math.random()*(screenX+$l1AlМ*2)-game[$eТоM]-$l1AlМ;

if(!$c0е0А($IAcМp[i].$oIToр,$IAcМp[i].$НМIAТ))
{
$IAcМp[i].hit=true;
}
else
{
$IAcМp[i].hit=false;

$IAcМp[i].alpha=$IAcМp[i].$eMо1p;
$IAcМp[i].visible=true;
}
}

$IAcМp[i].$oIToр+=$IAcМp[i][$АсТOе]*$ll1lА;
$IAcМp[i].$НМIAТ+=$IAcМp[i][$МcеAH]*$ll1lА;





$IAcМp[i][$eТоM]=$IAcМp[i].$oIToр-($IAcМp[i].$oIToр-$АOTIl+game[$eТоM])*$IAcМp[i].$HoТp0;
$IAcМp[i][$рHОМ]=$IAcМp[i].$НМIAТ-($IAcМp[i].$НМIAТ-$ТIeсO+game[$рHОМ])*$IAcМp[i].$HoТp0;

$IAcМp[i].scaleX=$IAcМp[i].scaleY=$IAcМp[i]._scale*(1-$IAcМp[i].$HoТp0);


$IAcМp[i][$МcеAH]+=gravity*0.5*$ll1lА;



$IAcМp[i][$АсТOе]*=Math.pow(0.8,$ll1lА);
$IAcМp[i][$МcеAH]*=Math.pow(0.8,$ll1lА);

$IAcМp[i].rotation+=Math.sin(($IAcМp[i].$НМIAТ+$IAcМp[i].$oIToр+$IAcМp[i].rotation*0.1)*0.1*Math.sin(($IAcМp[i].$НМIAТ*0.1+$IAcМp[i].$oIToр)*0.001))*3*$ll1lА;







if(!$IAcМp[i].$АО0оl)
if($IAcМp[i].visible)
{


if($IAcМp[i].hit)
{
if($IAcМp[i].alpha>0)
$IAcМp[i].alpha-=Math.max(0.01,0.05*$ll1lА);
else
$IAcМp[i].visible=false;
}
else
{
if(!$0oеcН($IAcМp[i].$oIToр,$IAcМp[i].$НМIAТ)||$oМMТр($IAcМp[i].$oIToр,$IAcМp[i].$НМIAТ))
{
$IAcМp[i].hit=true;
}
}





}
}
}







































































var $1cМоо={
$ОНсMТ: 0,
$oоopM: 1,
$рАА0Н: 2,
$0AТAН: 3,
$ceТ0o: 4,
$oН1оI: 5,
$АI1рТ: 6,
$М0l1p: 7,
$pAеоо: 8,

$HMОНO: 10,
$А1AТр: 11,
$МАeсH: 12,
$cТAoе: 13,
$АMHоA: 14,
$oMT0А: 15,
$0МеcH: 16,
$оoоTО: 17,
$0IAТo: 18,
$МIрТА: 19,
$TООeр: 20,
$ОМA0I: 21,
$оpOOT: 22,
$о0IcM: 23,
$0Мосс: 24
};



var $peM1Т={};
$peM1Т[20]=3;

$peM1Т[4]=2;
$peM1Т[11]=2;
$peM1Т[15]=2;
$peM1Т[16]=2;
$peM1Т[18]=2;

$peM1Т[5]=1;
$peM1Т[6]=1;
$peM1Т[17]=1;
$peM1Т[21]=1;
$peM1Т[22]=1;
$peM1Т[23]=1;
$peM1Т[24]=1;

var $роО0р,$ТОTрM;
function $р00Ap(x2,y2,$1plоH,$eM0cо,$lIМMo)
{
$c1Н1А=false;
if(x2>-game[$eТоM]/$оМMОО-150&&x2<-game[$eТоM]/$оМMОО+screenX/$оМMОО+150&&y2>-game[$рHОМ]/$оМMОО-150&&y2<-game[$рHОМ]/$оМMОО+screenY/$оМMОО+150)
$c1Н1А=true;

if($p1TоА)
{
if(isNaN(x2)||isNaN(y2)||isNaN($eM0cо)||isNaN($lIМMo))
8;
}

{
if($c1Н1А)
if(ef[$НM0МТ]!=null)
{
let loops=10;

while(loops-->0&&ef[$НM0МТ]!=null&&$peM1Т[ef[$НM0МТ].$1еp1А]!==undefined)
{
$НM0МТ++;
if($НM0МТ>=$MOcеМ)
$НM0МТ=0;
}



if(ef[$НM0МТ]!=null)
$рНе01($НM0МТ);












}

let $OеМIo=2;

if($1plоH==0)
{
if($c1Н1А)
{
ef[$НM0МТ]=game.addChild(new eff_blood);


ef[$НM0МТ].$eрlсe=1;
ef[$НM0МТ].$OееTA=parseInt(Math.random()*10);
ef[$НM0МТ].rotation=Math.random()*360;
if($OОHMp>=0)
ef[$НM0МТ].transform.colorTransform=new ColorTransform($0Ме1А[$OОHMp].$Alр10,$0Ме1А[$OОHMp].$оМcHM,$0Ме1А[$OОHMp].$рМMоО,1,0,0,0,0);
else
ef[$НM0МТ].transform.colorTransform=new ColorTransform(1.5,2,0,1,0,0,0,0);





if(!$HAАсА)
{
ef[$НM0МТ].scaleX=0.5;
ef[$НM0МТ].scaleY=0.5;
}


ef[$НM0МТ].gotoAndStop(1);
ef[$НM0МТ].$HТIIT=0.7;
}
}else
if($1plоH==1)
{
if($c1Н1А)
{
ef[$НM0МТ]=graphics_3d_front.addChild(new eff_iskra);


ef[$НM0МТ].$eрlсe=0;
ef[$НM0МТ].rotation=Math.random()*360;



$eM0cо*=1.25;

ef[$НM0МТ].scaleX=ef[$НM0МТ].scaleY=Math.max(1,Math.min($eM0cо,2));
if($eM0cо<1)
{
ef[$НM0МТ].alpha=Math.max(0.5,$eM0cо);
}


}
$TMOср(x2,y2);

$оp0Нc($АAAНc,x2,y2);
}else
if($1plоH==2)
{
if($c1Н1А)
{
ef[$НM0МТ]=game.addChild(new eff_bubble);


ef[$НM0МТ].$eрlсe=2;

x2+=-10+Math.random()*20;
y2+=-10+Math.random()*20;
}
}else
if($1plоH==3)
{
if($c1Н1А)
{
ef[$НM0МТ]=game.addChild(new eff_splash);


ef[$НM0МТ].$eрlсe=0;

if($сTpНО($lIМMo)<5)
ef[$НM0МТ].rotation=-20+Math.random()*40;

if(Math.random()>0.5)
ef[$НM0МТ].scaleX=-1;

ef[$НM0МТ].scaleY=1+$сTpНО($lIМMo)*Math.random()*0.1;
}

if(Math.random()<0.333)
$оp0Нc($opеTc,x2,y2);
else
if(Math.random()<0.5)
$оp0Нc($ерMM0,x2,y2);
else
$оp0Нc($TlсеН,x2,y2);

}
else
if($1plоH==4)
{
if($c1Н1А)
{
ef[$НM0МТ]=graphics_3d_front.addChild(new explosion_fire);


ef[$НM0МТ].$eрlсe=0;
ef[$НM0МТ].scaleX=$eM0cо;
ef[$НM0МТ].scaleY=$eM0cо;
ef[$НM0МТ].rotation=Math.random()*360;
ef[$НM0МТ].$HТIIT=2;
}
}
else
if($1plоH==5)
{
if($c1Н1А)
{
ef[$НM0МТ]=graphics_3d_front.addChild(new rail);



ef[$НM0МТ].$eрlсe=0;
ef[$НM0МТ].rotation=$eM0cо;
$eM0cо=0;
}
}
else
if($1plоH==6)
{
if($c1Н1А)
{
ef[$НM0МТ]=graphics_3d_front.addChild(new rail_target);



ef[$НM0МТ].$eрlсe=0;
}
}
else
if($1plоH==7)
{
if($c1Н1А)
{

ef[$НM0МТ]=graphics_3d_front.addChild(new eff_firespark);


ef[$НM0МТ].$eрlсe=3;


}
}
else
if($1plоH==8)
{
if($c1Н1А)
{
ef[$НM0МТ]=graphics_3d_front.addChild(new eff_metal);



ef[$НM0МТ].$eрlсe=4;
ef[$НM0МТ].rotation=Math.random()*360;
ef[$НM0МТ].gotoAndPlay(1);
}
}
else
if($1plоH==9)
{

}
else
if($1plоH==10)
{
if($c1Н1А)
{
ef[$НM0МТ]=game.addChild(new eff_blood_sprite);


ef[$НM0МТ].$eрlсe=5;
ef[$НM0МТ].rotation=Math.random()*360;

ef[$НM0МТ].gotoAndStop(1);
ef[$НM0МТ].$OееTA=1;

ef[$НM0МТ].$HТIIT=0.7;

if($OОHMp>=0)
ef[$НM0МТ].transform.colorTransform=new ColorTransform($0Ме1А[$OОHMp].$Alр10,$0Ме1А[$OОHMp].$оМcHM,$0Ме1А[$OОHMp].$рМMоО,1,0,0,0,0);
else
ef[$НM0МТ].transform.colorTransform=new ColorTransform(1.5,2,0,1,0,0,0,0);

if(!$HAАсА)
{
ef[$НM0МТ].scaleX=0.5;
ef[$НM0МТ].scaleY=0.5;
}


}
}
else
if($1plоH==11)
{
if($c1Н1А)
{
ef[$НM0МТ]=graphics_3d_front.addChild(new explosion_bfg);



ef[$НM0МТ].$eрlсe=0;
ef[$НM0МТ].scaleX=$eM0cо;
ef[$НM0МТ].scaleY=$eM0cо;
ef[$НM0МТ].rotation=Math.random()*360;
ef[$НM0МТ].$HТIIT=2;
}
}
else
if($1plоH==12)
{
throw new Error($ОАММс);
















}
else
if($1plоH==13)
{
if($c1Н1А)
{
ef[$НM0МТ]=graphics_3d_front.addChild(new eff_cinetic);


ef[$НM0МТ].$eрlсe=0;

ef[$НM0МТ].blending=Blending.ADDITIVE;

ef[$НM0МТ].rotation=Math.random()*360;
}
}
else
if($1plоH==14)
{
if($c1Н1А)
{
ef[$НM0МТ]=graphics_3d_front.addChild(new eff_teleport);

ef[$НM0МТ].$eрlсe=0;

}

if($eM0cо==0)
$оp0Нc($Ap0AА,x2,y2);
}
else
if($1plоH==15)
{
if($c1Н1А)
{
ef[$НM0МТ]=graphics_3d_front.addChild(new explosion_underwater);



ef[$НM0МТ].$eрlсe=0;
ef[$НM0МТ].scaleX=$eM0cо;
ef[$НM0МТ].scaleY=$eM0cо;

}
}
else
if($1plоH==16)
{
if($c1Н1А)
{
ef[$НM0МТ]=graphics_3d_front.addChild(new explosion_plasma);



ef[$НM0МТ].$eрlсe=0;
ef[$НM0МТ].scaleX=$eM0cо;
ef[$НM0МТ].scaleY=$eM0cо;
ef[$НM0МТ].rotation=Math.random()*360;

ef[$НM0МТ].$HТIIT=2;


ef[$НM0МТ].scaleX*=43/133;
ef[$НM0МТ].scaleY*=43/133;
}
}
else
if($1plоH==17)
{
if($c1Н1А)
{
ef[$НM0МТ]=graphics_3d_front.addChild(new rail2);



ef[$НM0МТ].$eрlсe=0;
ef[$НM0МТ].rotation=$eM0cо;
$eM0cо=0;
}
}
else
if($1plоH==18)
{
if($c1Н1А)
{
ef[$НM0МТ]=graphics_3d_front.addChild(new explosion_plasma_bar);



ef[$НM0МТ].$eрlсe=0;
ef[$НM0МТ].scaleX=$eM0cо;
ef[$НM0МТ].scaleY=$eM0cо;
ef[$НM0МТ].rotation=Math.random()*360;
ef[$НM0МТ].$HТIIT=2;
}
}
else
if($1plоH==19)
{
if($c1Н1А)
{
ef[$НM0МТ]=graphics_3d_front.addChild(new altblood);



ef[$НM0МТ].scaleY=ef[$НM0МТ].scaleX=Math.sqrt($eM0cо*$eM0cо+$lIМMo*$lIМMo)*0.05;

ef[$НM0МТ].$eрlсe=0;
}
}
else
if($1plоH==20)
{
if($c1Н1А)
{
if($oepМ1[0]!==-1)
str=$oepМ1[0];

if($oepМ1[1]!==-1)
$MIНоо=$oepМ1[1];


let mc=new MovieClip();
ef[$НM0МТ]=game.addChild(mc);

mc.totalFrames=90;
mc.onEndReached=()=>
{
$АAp0O(mc);
};

ef[$НM0МТ].$eрlсe=6;


ef[$НM0МТ].$ocO0е=mc.addChild(HUD.$ТHA0H({[$clе0р]:HUD.$lМ0pМ,htmlText:str,[$eТоM]:0,[$рHОМ]:-7.5,align:$TcpТ}));

ef[$НM0МТ].$ocO0е[$eТоM]=-ef[$НM0МТ].$ocO0е.graphics.bounds[$есеcT]/2*ef[$НM0МТ].$ocO0е.scaleX;

ef[$НM0МТ].$TAесс=$MIНоо;

if($0Ме1А[$MIНоо].$оeoТе)
ef[$НM0МТ].$ocO0е.alpha=0.5;

let w=ef[$НM0МТ].$ocO0е.graphics.bounds[$есеcT]*ef[$НM0МТ].$ocO0е.scaleX/2+4.4;

mc.graphics=new Graphics(false);
mc.graphics.beginFill($АНосМ);
mc.graphics.drawRoundRect(-w,-15,w*2,15,3.25);
mc.graphics.endFill();

mc.graphics.beginFill($АНосМ);
mc.graphics.moveTo(-4,0);
mc.graphics.lineTo(4,0);
mc.graphics.lineTo(0,5);
mc.graphics.endFill();


$oepМ1[0]=-1;
$oepМ1[1]=-1;
}
}
else
if($1plоH==21)
{
if($c1Н1А)
{
ef[$НM0МТ]=graphics_3d_front.addChild(new rail3);



ef[$НM0МТ].$eрlсe=0;
ef[$НM0МТ].rotation=$eM0cо;
$eM0cо=0;
}
}
else
if($1plоH==22)
{
if($c1Н1А)
{
ef[$НM0МТ]=graphics_3d_front.addChild(new rail4);



ef[$НM0МТ].$eрlсe=0;
ef[$НM0МТ].rotation=$eM0cо;
$eM0cо=0;
}
}
else
if($1plоH==23)
{
if($c1Н1А)
{
ef[$НM0МТ]=graphics_3d_front.addChild(new rail5);



ef[$НM0МТ].$eрlсe=0;
ef[$НM0МТ].rotation=$eM0cо;
$eM0cо=0;
}
}
else
if($1plоH==24)
{
if($c1Н1А)
{
ef[$НM0МТ]=graphics_3d_front.addChild(new rail6);



ef[$НM0МТ].$eрlсe=0;
ef[$НM0МТ].rotation=$eM0cо;
$eM0cо=0;
}
}

if($c1Н1А)
{
ef[$НM0МТ].$еlАlM=0;
ef[$НM0МТ][$eТоM]=x2;
ef[$НM0МТ][$рHОМ]=y2;

ef[$НM0МТ].$1еp1А=$1plоH;

ef[$НM0МТ].$OеМIo=$OеМIo;

if(ef[$НM0МТ].$eрlсe==3)
{
ef[$НM0МТ][$АсТOе]=$eM0cо;
ef[$НM0МТ][$МcеAH]=$lIМMo;

ef[$НM0МТ].$AIНcH=0;
}
else
if(ef[$НM0МТ].$eрlсe==1)
{
$OIсоI=Math.random()*0.45-0.125;

$роО0р=Math.random()*Math.PI*2;
$ТОTрM=Math.random()*1.5;

ef[$НM0МТ][$АсТOе]=$eM0cо*$OIсоI+Math.sin($роО0р)*$ТОTрM;
ef[$НM0МТ][$МcеAH]=$lIМMo*$OIсоI+Math.cos($роО0р)*$ТОTрM-0.5;

if(Math.random()>0.9)
{
$роО0р=Math.random()*Math.PI*2;
$ТОTрM=Math.random()*4;

ef[$НM0МТ][$АсТOе]+=Math.sin($роО0р)*$ТОTрM;
ef[$НM0МТ][$МcеAH]+=Math.cos($роО0р)*$ТОTрM-0.5;
}
ef[$НM0МТ].$AIНcH=Math.random()*30-15;
}
else
if(ef[$НM0МТ].$eрlсe==4)
{
$роО0р=Math.random()*Math.PI*2;
$ТОTрM=Math.random()*4;
ef[$НM0МТ][$АсТOе]=$eM0cо+Math.sin($роО0р)*$ТОTрM;
ef[$НM0МТ][$МcеAH]=$lIМMo+Math.cos($роО0р)*$ТОTрM-2;
}
else
if(ef[$НM0МТ].$eрlсe==5)
{
$роО0р=Math.random()*Math.PI*2;
$ТОTрM=Math.random()*1.5;

$OIсоI=Math.random()*0.45-0.2;
ef[$НM0МТ][$АсТOе]=$eM0cо*$OIсоI+Math.sin($роО0р)*$ТОTрM;
ef[$НM0МТ][$МcеAH]=$lIМMo*$OIсоI+Math.cos($роО0р)*$ТОTрM-0.5;

if(Math.random()>0.9)
{
$роО0р=Math.random()*Math.PI*2;
$ТОTрM=Math.random()*4;

ef[$НM0МТ][$АсТOе]+=Math.sin($роО0р)*$ТОTрM;
ef[$НM0МТ][$МcеAH]+=Math.cos($роО0р)*$ТОTрM-0.5;
}
}

$НM0МТ++;
if($НM0МТ>=$MOcеМ)
$НM0МТ=0;
}

}
}

function $АATHc(x2,y2,$eрlсe,$HlcAТ,$рТ0ее,count,sync=false)
{
if(count>100)
count=100;



if($pMМ1)
if(sync)
{
$ММ.Event($ММ[$MAHcМ],

$ММ.$Oоolр(x2),
$ММ.$Oоolр(y2),
$ММ.$Oоolр($eрlсe),
$ММ.$Oоolр($HlcAТ*$ММ.$MеМMА),
$ММ.$Oоolр($рТ0ее*$ММ.$MеМMА),
$ММ.$Oоolр(count)
);
}




if(VIOLENCE)
{
if($оМMОО<1)
count=Math.max(count*$оМMОО,1);



while(count>0)
{
if($OОHMp>=0&&((count>1&&$0Ме1А[$OОHMp][$0OАс]!=0&&($0Ме1А[$OОHMp][$0OАс]==2||($0Ме1А[$OОHMp][$0OАс]==1&&Math.random()>0.5)))||$0Ме1А[$OОHMp][$0OАс]==2))
$р00Ap(x2,y2,8,-$HlcAТ*0.05,-$рТ0ее*0.05);
else
{

$р00Ap(x2,y2,$eрlсe,$HlcAТ,$рТ0ее);
$р00Ap(x2,y2,$eрlсe,$HlcAТ,$рТ0ее);
$р00Ap(x2,y2,$eрlсe,$HlcAТ,$рТ0ее);
$р00Ap(x2,y2,10,$HlcAТ,$рТ0ее);
}


count-=1;
}
}
else
$р00Ap(x2,y2,19,$HlcAТ,$рТ0ее);
}
function $HOНОO($AMTT1)
{
if($IТТII[$AMTT1])
{
$АТ0Тe($IТТII[$AMTT1]);

if($IТТII[$AMTT1].$TAесс!==-1)
{
$oОI10($IТТII[$AMTT1].$TAесс);
$IТТII[$AMTT1].$TAесс=-1;
}

$IТТII[$AMTT1].visible=false;
$IТТII[$AMTT1].parent.removeChild($IТТII[$AMTT1]);
$IТТII[$AMTT1]=null;
}
}
var $OOHрМ;
var $0Aс1е;
function $HeI1с()
{
$1leoI++;
if($1leoI>$есНI0)
$1leoI=0;

$0Aс1е=true;
for($OOHрМ=0;$OOHрМ<=$есНI0;$OOHрМ++)
{


if($IТТII[$1leoI]==null)
{
$0Aс1е=false;
break;
}
else
{
if($IТТII[$1leoI].visible==false)
{
$HOНОO($1leoI);










$0Aс1е=false;
break;
}
}
$1leoI++;
if($1leoI>$есНI0)
$1leoI=0;
}
if($0Aс1е)
{
trace($рАHАe);
$есНI0++;
$1leoI=$есНI0;
}
}

var $OTlMО;
var $0МMOM;
function $оpHНI()
{
if($рТTcl==$Оocec)
{
$Оocec++;
$рТTcl=$Оocec;
}

for($0МMOM=0;$0МMOM<$Оocec;$0МMOM++)
{
if($ОеoIc[$0МMOM].io===false)
{
$рТTcl=$0МMOM;
break;
}
}
}

function $MрТ1o($Т0TpA,src,$ОТ00H=false)
{
var $lТОIс=getTimer();

if($ОТ00H||$lТОIс>($Т0TpA.$pсНoТ||0)+500)
{
}
else
{
return;
}

$Т0TpA.$pсНoТ=$lТОIс;

if($Т0TpA.$1OА0o!==null)
$Т0TpA.$1OА0o.stop();

































$еT0oT=$ТТMpo/$0р1AH($Т0TpA[$eТоM]*$оМMОО+game[$eТоM]-400-300,($Т0TpA[$рHОМ])*$оМMОО+game[$рHОМ]-200,$ТТMpo);
$рОIОр=$ТТMpo/$0р1AH($Т0TpA[$eТоM]*$оМMОО+game[$eТоM]-400+300,($Т0TpA[$рHОМ])*$оМMОО+game[$рHОМ]-200,$ТТMpo);

if(src.custom_volume===undefined)
{
src.custom_volume=1;
}

let $АрсАН=new SoundTransform($АHсее*src.custom_volume*1.5);


$АрсАН.leftToLeft=$рОIОр;
$АрсАН.leftToRight=0;

$АрсАН.rightToRight=$еT0oT;
$АрсАН.rightToLeft=0;

$Т0TpA.$1OА0o=src.play(0,0,$АрсАН);
}

function $НIТОT($Т0TpA,x2,y2,$оAoOТ)
{
if($оAoOТ!=2)
{
if($Т0TpA[$0OАс]==2)
$оp0Нc($о1А0M,x2,y2);
else
{
if($оAoOТ)
$оp0Нc($IсlMр,x2,y2);
else
$оp0Нc($TсAMT,x2,y2);
}
}
}

function $НOНОН($О0IMТ,$cHAAО,$орАeo,$TppTO)
{
return Math.sqrt($T0oМp($О0IMТ-$орАeo)+$T0oМp($cHAAО-$TppTO));
}
function $Н1еHl($О0IMТ,$cHAAО)
{
return Math.sqrt($О0IMТ*$О0IMТ+$cHAAО*$cHAAО);
}
function $МНeТ0($О0IMТ,$cHAAО,$орАeo,$TppTO,$НlТlО)
{
return($T0oМp($О0IMТ-$орАeo)+$T0oМp($cHAAО-$TppTO)<$НlТlО*$НlТlО);
}

var $оT1еТ=200;
var $OOHНН=new Map();
var $HеAMe=[];
function $Т0leo(x,y)
{
x=Math.floor(x/$оT1еТ);
y=Math.floor(y/$оT1еТ);
let hash=y*10000+x;

return hash;
}
var $O0ео0={
$рcoАО:[],
'delete':()=>{}
};
function $О1р0Т(hash,$О1Aе0=-1)
{
let $c1НОe=$OOHНН.get(hash);
if($c1НОe===undefined)
{
if($О1Aе0>=0)
{
$c1НОe={



$рcoАО:[],

hash: hash,

$AOТТ0: $lАТАH,





add:(e)=>{

$c1НОe.$рcoАО.push(e);
},

delete:(e)=>{

let id=$c1НОe.$рcoАО.lastIndexOf(e);
if(id!==-1)
{
$c1НОe.$рcoАО.splice(id,1);






if($c1НОe.$рcoАО.length===0)
$HеAMe.push($c1НОe);


}
},
}

$OOHНН.set(hash,$c1НОe);
}
else
{
$c1НОe=$O0ео0;
}
}
else
{
$c1НОe.$AOТТ0=$lАТАH;
}

if($О1Aе0>=0)
$c1НОe.add($О1Aе0);

return $c1НОe;
}

var $AрреО;
var $МоoTp;
function $0ТсTо(x,y,sx,sy,rad,round,mat,of)
{
$AрреО=$pООро;

for($рАНlI=0;$рАНlI<$pООро;$рАНlI++)
if($AМlоН[$рАНlI]===-1)
{

$AрреО=$рАНlI;


for(var ch=0;ch<$0lHре;ch++)
{
if($HHeMo[ch]===$рАНlI||$МpeMo[ch]===$рАНlI)
$НOрНр[ch]=-1;
}

break;
}



$о1oHМ[$AрреО]=parseInt(of);

if($о1oHМ[$AрреО]<0)
throw new Error($HAopH);

$Il[$AрреО]=parseFloat(x);
$0OA[$AрреО]=parseFloat(y);

$IcМMc[$AрреО]=parseFloat(x);
$MA0е1[$AрреО]=parseFloat(y);


$OTpc1[$AрреО]=parseFloat(sx);
$IрТ0H[$AрреО]=parseFloat(sy);

$TOMTO[$AрреО]=$Т0leo($Il[$AрреО],$0OA[$AрреО]);
$О1р0Т($TOMTO[$AрреО],$AрреО);

$AМlоН[$AрреО]=true;
$оcMlO[$AрреО]=parseInt(mat);
$оОlHT[$AрреО]=parseFloat(rad);
around[$AрреО]=!!(round);

$AрMсA[$AрреО]=undefined;






$рeМрp[$AрреО]=0;


$оОHMT[$о1oHМ[$AрреО]]=false;

$MАTАl[$AрреО]=0;
$lАоIО[$AрреО]=false;

$HTOОe[$AрреО]=-1;

for($МоoTp=0;$МоoTp<$оTolТ&&!$lАоIО[$AрреО];$МоoTp++)
if($Il[$AрреО]>$ММoОo[$МоoTp])
if($Il[$AрреО]<$ММoОo[$МоoTp]+$р1lMр[$МоoTp])
if($0OA[$AрреО]>$11ТоО[$МоoTp])
if($0OA[$AрреО]<$11ТоО[$МоoTp]+$coТНp[$МоoTp])
{
$lАоIО[$AрреО]=true;
$HTOОe[$AрреО]=$AрреО;
}
if($AрреО==$pООро)
$pООро++;
return $AрреО;
}
function $0Н0Тl(a,$oМ1Tc=true)
{
if($AМlоН[a]!==true&&$AМlоН[a]!==false)
{

}





$AМlоН[a]=true;

if($oМ1Tc)
$MАTАl[a]=0;
}
function $рНсоО(a)
{
if($AМlоН[a]!==true&&$AМlоН[a]!==false)
{

}
$AМlоН[a]=false;
}
function $oОI10(a)
{
$МlНMo(a);


for(var i=0;i<$0еeоM;i++)
{
if($MoIoр[i]!==undefined)
if($MoIoр[i]!==null)
if($MoIoр[i].$Opррe===a)
{

$MoIoр[i].$Opррe=-1;
}
}
for(var i=0;i<$оHTоТ.length;i++)
{
if($оHTоТ[i]!==undefined)
if($оHTоТ[i]!==null)
if($оHTоТ[i].$Opррe===a)
{

$оHTоТ[i].$Opррe=-1;
}
}

$еТOTс=true;
{
$AМlоН[a]=-1;

$о1oHМ[a]=Infinity;

$AрMсA[a]=undefined;
}
$еТOTс=false;

$О1р0Т($TOMTO[a]).delete(i);
}

function $0pHАс(a,a2,type,$cТеМM,$HolТc)
{
$AрреО=$0lHре;

for($рАНlI=0;$рАНlI<$0lHре&&$AрреО!=$0lHре;$рАНlI++)
if($НOрНр[$рАНlI]==-1)
if($HHeMo[$рАНlI]==-1||$МpeMo[$рАНlI]==-1)
$AрреО=$рАНlI;










$HHeMo[$AрреО]=parseInt(a);
$МpeMo[$AрреО]=parseInt(a2);

if($cТеМM!==-1)
$cТеМо[$AрреО]=parseFloat($cТеМM);
else
$cТеМо[$AрреО]=parseFloat($НOНОН($Il[a],$0OA[a],$Il[a2],$0OA[a2]));

if($HolТc==-1)
$еMрAе[$AрреО]=1;
else
$еMрAе[$AрреО]=parseFloat($HolТc);

$Т1eeе[$AрреО]=parseInt(type);
$НOрНр[$AрреО]=true;





if($AрреО==$0lHре)
$0lHре++;
return $AрреО;





















}
function $loсАТ(ch,a,a2,type,$cТеМM,$HolТc)
{
$HHeMo[ch]=a;
$МpeMo[ch]=a2;

if($cТеМM!==-1)
$cТеМо[ch]=$cТеМM;
else
$cТеМо[ch]=$НOНОН($Il[a],$0OA[a],$Il[a2],$0OA[a2]);

if($HolТc==-1)
$еMрAе[ch]=1;
else
$еMрAе[ch]=$HolТc;

$Т1eeе[ch]=type;
$НOрНр[ch]=true;

}
function $ТTTTH($Т0TpA,scale)
{
if($pMМ1)
if($IHТcc)
return;

if(scale<0.001)
scale=0.001;

var $HOoНМ=scale/$Т0TpA.scale;

$Т0TpA.scale=scale;

$cТеМо[$Т0TpA.$оМНеI]*=$HOoНМ;
$cТеМо[$Т0TpA.$lТОАM]*=$HOoНМ;
$cТеМо[$Т0TpA.$рeOоо]*=$HOoНМ;
$cТеМо[$Т0TpA.$AТеОо]*=$HOoНМ;
$cТеМо[$Т0TpA.$о1еlО]*=$HOoНМ;
$cТеМо[$Т0TpA.$ооОcI]*=$HOoНМ;
$cТеМо[$Т0TpA.$сН0АА]*=$HOoНМ;
$cТеМо[$Т0TpA.$Ooс01]*=$HOoНМ;
$cТеМо[$Т0TpA.$1HоAA]*=$HOoНМ;
$cТеМо[$Т0TpA.$leOе0]*=$HOoНМ;
$cТеМо[$Т0TpA.$TIеce]*=$HOoНМ;
$cТеМо[$Т0TpA.$Т0pTp]*=$HOoНМ;
$cТеМо[$Т0TpA.$НА1eО]*=$HOoНМ;
$cТеМо[$Т0TpA.$Н10op]*=$HOoНМ;
$cТеМо[$Т0TpA.$HeTсM]*=$HOoНМ;
$cТеМо[$Т0TpA.$TAHII]*=$HOoНМ;
$cТеМо[$Т0TpA.$сMepо]*=$HOoНМ;
$cТеМо[$Т0TpA.$MсoTO]*=$HOoНМ;
$cТеМо[$Т0TpA.$1I0el]*=$HOoНМ;
$cТеМо[$Т0TpA.$ToрlI]*=$HOoНМ;


$оОlHT[$Т0TpA.$MОеМ1]*=$HOoНМ;
$оОlHT[$Т0TpA.$НТсМТ]*=$HOoНМ;
$оОlHT[$Т0TpA.$р1eНM]*=$HOoНМ;
$оОlHT[$Т0TpA.$оОlТМ]*=$HOoНМ;
$оОlHT[$Т0TpA.$1O1lM]*=$HOoНМ;
$оОlHT[$Т0TpA.$рсOОА]*=$HOoНМ;


$оОlHT[$Т0TpA.$pМHHo]*=$HOoНМ;
$оОlHT[$Т0TpA.$e1IOМ]*=$HOoНМ;

$о1eНp($Т0TpA.$MeсНе);
}

function $MОTHА(arr)
{
return arr[Math.floor(arr.length*Math.random())];
}

var $1TроТ=[
`$MОеМ1`,
`$НТсМТ`,
`$р1eНM`,
`$оОlТМ`,
`$1O1lM`,
`$рсOОА`,
`$pМHHo`,
`$e1IOМ`
];
var $HeMpс=[
`$MОеМ1`,
`$НТсМТ`,
`$р1eНM`,
`$рсOОА`,
`$pМHHo`,
`$e1IOМ`
];

function $cНе0I($Т0TpA,$Н1НТе,$l0pHc)
{
$Н1НТе=parseFloat($Н1НТе);
$l0pHc=parseFloat($l0pHc);



$0Ме1А[$eсАeA]=$Т0TpA;




$Т0TpA.$MeсНе=parseInt($eсАeA);


$Т0TpA[$рАр0T]=0;
$Т0TpA[$АеНН]=0;
$Т0TpA[$oepОе]=0;

$Т0TpA.info=undefined;

$Т0TpA.$еТMТН;
$Т0TpA.$рAТTе=false;
$Т0TpA.$оНeMТ=0;


$Т0TpA.$сllсl=false;
$Т0TpA.$AolОо=-1;

$Т0TpA.$pо1НО=false;

$Т0TpA.$cpOoe=0.666;

$Т0TpA.$ееоАН=parseFloat();
if(Math.random()>0.5)
$Т0TpA.$ееоАН=1;
else
$Т0TpA.$ееоАН=-1;

if(1)
$Т0TpA[$МIIро]=$Н1НТе;
else
{
let h=$Н1НТе;
setGetterSetter($Т0TpA,`$оoMAo`,
()=>
{
return h;
},
(v)=>
{
if(h!==v)
{
if(!$00pеH)
if($Т0TpA.$MeсНе===$НAlНc)
{
console.warn($ОМTрA+$Т0TpA.$MeсНе+$pc0АH+v);

if(h<=0)
if(v>0)
8;
}


h=v;
}
}
);
}

$Т0TpA.hmax=$l0pHc;















{
let $0ММeН=[
`char`,
`$lOeНc`,
`$AААH1`,
`$сТlAМ`,
`$ТIpec`,
`$НOоМO`,
`$ОIMОo`,
`$cHАoс`,
`$Hlppе`,
`$Аc01о`,
`$ТрH0c`,
`$ОАOрр`,
`$A0АоА`,
`$THMcM`
];
$Т0TpA[$МрOОТ]=$0OрТ;
let $ррAM0=$0OрТ;

let $еНеOo=()=>
{
let arr=[];

arr.push($Т0TpA.$Нр01I.join($0OрТ));
arr.push($Т0TpA[$lоАо]._name);

for(let i=0;i<$0ММeН.length;i++)
{
if(typeof $Т0TpA[$0ММeН[i]]===$ср0I&&$Т0TpA[$0ММeН[i]].charAt(0)===$pOрс)
arr.push($соТО+parseInt($Т0TpA[$0ММeН[i]].substring(1)).toString(36));
else
arr.push($Т0TpA[$0ММeН[i]].toString(36));
}

$ррAM0=arr.join($рl0р);
}
$Т0TpA.$ООMМН=()=>
{
$еНеOo();
return $ррAM0;
};
$Т0TpA.$pАрН1=($H1HАН,$сA1pс=false)=>
{
if($H1HАН.length===0)
return;

$еНеOo();
if($ррAM0!==$H1HАН)
{
let arr=$H1HАН.split($рl0р);

let offset=0;

let $Нр01I=arr[offset++].split($0OрТ);
if($Нр01I.length<4)
$Нр01I=$Н0сAТ;

let voice=arr[offset++];

for(let i=0;i<$0ММeН.length;i++)
{
let v=arr[offset++];
if(v.charAt(0)===$соТО)
$Т0TpA[$0ММeН[i]]=$pOрс+parseInt(v.substring(1),36);
else
$Т0TpA[$0ММeН[i]]=parseInt(v,36);



}

let $pHМMo=$Т0TpA[$оIpl];

$pНTс1($Т0TpA,$сA1pс);

$Т0TpA[$оIpl]=$pHМMo;

$AOеоО($Т0TpA);


$Т0TpA.$Нр01I=$Нр01I;
$1loHе($Т0TpA);

if($pОplH.hasOwnProperty(voice))
$Т0TpA[$lоАо]=$pОplH[voice];
}
}
setGetterSetter($Т0TpA,$МрOОТ,
$Т0TpA.$ООMМН,
(v)=>
{
$Т0TpA.$pАрН1(v);
}
);
}






for(let $AАlc0=$ММ.$НeеIА;$AАlc0<=$ММ.$АTlcI;$AАlc0++)
{
let i=$AАlc0;


$Т0TpA[$1ee0c+i]=$ММ.$pTcHМ;
setGetterSetter($Т0TpA,$ОT1Iр+i,
()=>
{
return $Т0TpA[$1ee0c+i];
},
($H1HАН)=>
{
if($Т0TpA[$1ee0c+i]===$H1HАН)
return;

if(($H1HАН>=0&&$H1HАН<$ОpMрс.length&&$ОpMрс[$H1HАН])||$H1HАН===$ММ.$pTcHМ)
{
}
else
{
8;
return;
}


if($Т0TpA[$1ee0c+i]!==$ММ.$pTcHМ)
{

if($Т0TpA.$MeсНе===$НAlНc)
$OOcoA($ОpMрс[$Т0TpA[$1ee0c+i]]);

$ОpMрс[$Т0TpA[$1ee0c+i]].picken_by=$ММ.$pTcHМ;
}

if($H1HАН!==$ММ.$pTcHМ)
{
$ОpMрс[$H1HАН].picken_by=$Т0TpA.$MeсНе;
}
else
{
$Т0TpA[$1ee0c+i]=$H1HАН;
}

}
);
}















$Т0TpA.$0IHMT=$Т0TpA[$МIIро];
$Т0TpA.$ААpоTе=false;

$Т0TpA.$еТр1O=false;
$Т0TpA.$ОOсоH=-1;

$Т0TpA.$1оеМp=0;

$Т0TpA.$рoААA=0;

$Т0TpA.$ТcОeН=0;

$Т0TpA.antigravity=0;
$Т0TpA.$oIМАp=200;

$Т0TpA.$ОАpМО=true;
$Т0TpA.$AOсоМ=true;

$Т0TpA.$оlсTН=false;
$Т0TpA[$lоАо]=$pОplH[$МНТ01];
$Т0TpA.$рOpMe=1;

$Т0TpA.scale=1;

$Т0TpA.$HрATo=1;

if(!$еHоНH)
if(!$pMМ1)
if($OАМАO)
if(!$Т0TpA.$HМ0М1)
{
if($Т0TpA.hmax>0)
{
if($Т0TpA.hmax<300)
{
if($Т0TpA[$МIIро]>0)
$Т0TpA[$МIIро]=($Т0TpA[$МIIро]+300)/2;

$Т0TpA.hmax=($Т0TpA.hmax+300)/2;
}

}
}

$Т0TpA.$Hpc1е=(blending)=>
{
let mc=$Т0TpA;

mc.$АсIее.lower.$оАОНА.blending=blending;
if(mc.$АсIее.lower.$оАОНА.userData)
if(mc.$АсIее.lower.$оАОНА.userData.$Мe0МMМ)
mc.$АсIее.lower.$оАОНА.userData.$Мe0МMМ.blending=mc.$АсIее.lower.$оАОНА.blending;

mc.$ТНpТI.lower.$оАОНА.blending=blending;
if(mc.$ТНpТI.lower.$оАОНА.userData)
if(mc.$ТНpТI.lower.$оАОНА.userData.$Мe0МMМ)
mc.$ТНpТI.lower.$оАОНА.userData.$Мe0МMМ.blending=mc.$ТНpТI.lower.$оАОНА.blending;
};

$Т0TpA.$Нр01I=new Array($соТО,$соТО,$соТО,$соТО);

$Т0TpA.$MТН0с=false;
$Т0TpA.$AI0cАp=-3;

$Т0TpA.$cAНТО=0;

$Т0TpA.$сМelе1=0;
$Т0TpA.$coоHр=0;
$Т0TpA.$OleMН=0;
$Т0TpA.$сНoIА=0;

if($АoМHl&&$pMМ1)
$Т0TpA.$HAО1о=undefined;
else
{
$Т0TpA.$TОOе0=0;
$Т0TpA.$оОТеl=0;
}
$Т0TpA.$lTcТl=undefined;

$Т0TpA.$ooAOе=0;
$Т0TpA.$MсАOl=0;

$Т0TpA.$НHоАH=$0OрТ;
$Т0TpA.$АTТМc=parseInt($Т0TpA.$MeсНе);
$Т0TpA.$Т10е1=0;

$Т0TpA.$1МI0р=$oеAIН;




$Т0TpA[$leAсO]=0;




if(false)
{
let $oHссс=$Т0TpA.io
setGetterSetter($Т0TpA,$HoеНМ,()=>$oHссс,(v)=>{













$oHссс=v;

});
}

$Т0TpA.io=true;
$Т0TpA.$ОрОAA=0;
if(!$pMМ1)
{
if($Т0TpA.$HМ0М1)
{





$Т0TpA[$МIIро]=800/$l0pHc*$Н1НТе;
$Т0TpA.hmax=800;





$оОHMT[$eсАeA]=true;
}



}

$Т0TpA[$AHop]=$0OрТ;
$Т0TpA[$ТplpТ]=-1;

$Т0TpA[$оIpl]=($pMМ1)? $AеHОМ : $1еT1Н;







$Т0TpA.$сlОI0=0;


$Т0TpA.pressure=0;
$Т0TpA.$оAAOО=0;

$Т0TpA.$1OА0o=new SoundChannel();

$Т0TpA.$AА11с=0;
$Т0TpA.$еМIMО=0;
$Т0TpA.stand=false;
$Т0TpA.sit=0;
$Т0TpA[$АсТOе]=0;
$Т0TpA[$МcеAH]=0;
$Т0TpA[$0OАс]=0;

if($p1TоА)
{
TrackNaNProperty($Т0TpA,`x`);
TrackNaNProperty($Т0TpA,`y`);
TrackNaNProperty($Т0TpA,`$HlcAТ`);
TrackNaNProperty($Т0TpA,`$рТ0ее`);
}

$Т0TpA.$сcoМH=0;
$Т0TpA.$сОНТH=0;
$Т0TpA[$lо0HH]=0;
$Т0TpA[$еоOOА]=0;

$Т0TpA.$llIее=0;
$Т0TpA[$0MТce]=-1;
$Т0TpA.$MAНIp=1;



$Т0TpA[$cАocе]=0;

















$Т0TpA[$oрOoА]=(Math.random());
$Т0TpA[$АТHММ]=(Math.random());
$Т0TpA[$lHсHO]=(Math.random());
$Т0TpA[$cАТAT]=0;

$Т0TpA.$рoeсl=false;
$Т0TpA.$AМIМ1=0;
$Т0TpA.$TНесe=0;
$Т0TpA.$ОeНIpo=false;

$Т0TpA.$ТoHрM=0;
$Т0TpA.$eрoOlO=0;
$Т0TpA.$pМсМе=0;

$Т0TpA.$HНрНТ=-1;
$Т0TpA.$ОMррe=-1;

$Т0TpA.$eoОpА=1;
$Т0TpA[$МАТОе]=-1;
$Т0TpA.waiting=0;
$Т0TpA.$соТМАc=false;
$Т0TpA.$оeoТе=false;
$Т0TpA.$Alр10=1;
$Т0TpA.$оМcHM=0;
$Т0TpA.$рМMоО=0;

$Т0TpA.ping=0;

$Т0TpA.$ААНММ=(Math.max($Т0TpA[$МIIро]*0.4,30));
$Т0TpA.$НТcep=(Math.max($Т0TpA[$МIIро]*0.6,30));
$Т0TpA.$HAрH1=(Math.max($Т0TpA[$МIIро]*0.5,30));
$Т0TpA.$lMIсo=(Math.max($Т0TpA[$МIIро]*0.4,30));




$Т0TpA.$lTITl=false;
$Т0TpA.$еТеAO=false;
$Т0TpA.$AIpAe=false;
$Т0TpA.$ААpес=false;
$Т0TpA.$loАoM=false;
$Т0TpA.$АеlОА=true;
$Т0TpA.$eHоАeе=true;

$Т0TpA.$MОеМ1=($0ТсTо($Т0TpA[$eТоM],$Т0TpA[$рHОМ]-31-3,0,0,7,false,1,$МAIO0+$eсАeA));



$Т0TpA.$НТсМТ=($0ТсTо($Т0TpA[$eТоM]-5,$Т0TpA[$рHОМ]-3,0,0,6,false,0,$МAIO0+$eсАeA));
$Т0TpA.$р1eНM=($0ТсTо($Т0TpA[$eТоM]+5,$Т0TpA[$рHОМ]-3,0,0,6,false,0,$МAIO0+$eсАeA));

$Т0TpA.$оОlТМ=($0ТсTо($Т0TpA[$eТоM]-5,$Т0TpA[$рHОМ]-31-3-23+30,0,0,3,false,-1,$МAIO0+$eсАeA));
$Т0TpA.$1O1lM=($0ТсTо($Т0TpA[$eТоM]+5,$Т0TpA[$рHОМ]-31-3-23+30,0,0,3,false,-1,$МAIO0+$eсАeA));

$Т0TpA.$рсOОА=($0ТсTо($Т0TpA[$eТоM],$Т0TpA[$рHОМ]-31-3-23,0,0,8,false,1,$МAIO0+$eсАeA));

$Т0TpA.$Mo1OА=$Т0TpA.$рсOОА;

$Т0TpA.$AМеTo=$Т0TpA.$MОеМ1;

$Т0TpA.$pМHHo=($0ТсTо($Т0TpA[$eТоM],$Т0TpA[$рHОМ]-31-3-25-4,0,0,8,false,-1,$МAIO0+$eсАeA));
$Т0TpA.$e1IOМ=($0ТсTо($Т0TpA[$eТоM],$Т0TpA[$рHОМ]-31-3-25-4-9,0,0,8,false,1,$МAIO0+$eсАeA));

$Т0TpA.$оМНеI=($0pHАс($Т0TpA.$MОеМ1,$Т0TpA.$НТсМТ,2,31,-1));
$Т0TpA.$lТОАM=($0pHАс($Т0TpA.$MОеМ1,$Т0TpA.$р1eНM,2,31,-1));
$Т0TpA.$рeOоо=($0pHАс($Т0TpA.$MОеМ1,$Т0TpA.$НТсМТ,1,20,-1));
$Т0TpA.$AТеОо=($0pHАс($Т0TpA.$MОеМ1,$Т0TpA.$р1eНM,1,20,-1));
$Т0TpA.$о1еlО=($0pHАс($Т0TpA.$MОеМ1,$Т0TpA.$НТсМТ,0,29,0.1));
$Т0TpA.$ооОcI=($0pHАс($Т0TpA.$MОеМ1,$Т0TpA.$р1eНM,0,29,0.1));

$Т0TpA.$сН0АА=($0pHАс($Т0TpA.$рсOОА,$Т0TpA.$оОlТМ,2,30,-1));
$Т0TpA.$Ooс01=($0pHАс($Т0TpA.$рсOОА,$Т0TpA.$1O1lM,2,30,-1));
$Т0TpA.$1HоAA=($0pHАс($Т0TpA.$рсOОА,$Т0TpA.$оОlТМ,1,15,-1));
$Т0TpA.$leOе0=($0pHАс($Т0TpA.$рсOОА,$Т0TpA.$1O1lM,1,15,-1));





$Т0TpA.$TIеce=($0pHАс($Т0TpA.$MОеМ1,$Т0TpA.$рсOОА,0,$1ерТc,-1));
$Т0TpA.$Т0pTp=($0pHАс($Т0TpA.$MОеМ1,$Т0TpA.$pМHHo,0,$1ерТc+$TОOАН,-1));
$Т0TpA.$НА1eО=($0pHАс($Т0TpA.$рсOОА,$Т0TpA.$pМHHo,0,$TОOАН,-1));

$Т0TpA.$Н10op=($0pHАс($Т0TpA.$pМHHo,$Т0TpA.$e1IOМ,0,9,-1));


$Т0TpA.$HeTсM=($0pHАс($Т0TpA.$рсOОА,$Т0TpA.$НТсМТ,1,50,-1));
$Т0TpA.$TAHII=($0pHАс($Т0TpA.$рсOОА,$Т0TpA.$р1eНM,1,50,-1));

$Т0TpA.$сMepо=($0pHАс($Т0TpA.$НТсМТ,$Т0TpA.$р1eНM,1,5,0.4));

$Т0TpA.$MсoTO=($0pHАс($Т0TpA.$НТсМТ,$Т0TpA.$р1eНM,2,30,-1));
$Т0TpA.$1I0el=($0pHАс($Т0TpA.$НТсМТ,$Т0TpA.$р1eНM,2,30,0.4));
$Т0TpA.$ToрlI=($0pHАс($Т0TpA.$MОеМ1,$Т0TpA.$e1IOМ,1,36,-1));


$Т0TpA.gotoAndStop(2);

$Т0TpA.$еОТТT.$оМMIМA.visible=false;

$Т0TpA.$AААH1=1;

$Т0TpA.$сТlAМ=1;
$Т0TpA.$ТIpec=1;

$Т0TpA.$НOоМO=1;
$Т0TpA.$ОIMОo=1;
$Т0TpA.$cHАoс=1;

$Т0TpA.$Hlppе=1;
$Т0TpA.$Аc01о=1;

$Т0TpA.$ТрH0c=1;
$Т0TpA.$ОАOрр=1;

$Т0TpA.$A0АоА=1;
$Т0TpA.$THMcM=1;
$Т0TpA.$lOeНc=1;


$Т0TpA[$0OАс]=1;

$Т0TpA.$AААH1=1;
$Т0TpA.$сТlAМ=1;
$Т0TpA.$ТIpec=1;

$Т0TpA.$НOоМO=1;
$Т0TpA.$ОIMОo=1;
$Т0TpA.$cHАoс=1;

$Т0TpA.$Hlppе=1;
$Т0TpA.$Аc01о=1;

$Т0TpA.$ТрH0c=1;
$Т0TpA.$ОАOрр=1;

$Т0TpA.$A0АоА=1;
$Т0TpA.$THMcM=1;
$Т0TpA.$lOeНc=1;

let $МсоOTе={[$eТоM]:0,[$рHОМ]:0};
let $НlIHOl={[$eТоM]:0,[$рHОМ]:0};
let $OIО0оo={[$eТоM]:0,[$рHОМ]:0};
let $pАecT={[$eТоM]:0,[$рHОМ]:0};
let $0HeНср={[$eТоM]:0,[$рHОМ]:0};
let $HНсМlM={[$eТоM]:0,[$рHОМ]:0};
let $НeНlMH={[$eТоM]:0,[$рHОМ]:0};
let $01oеM={[$eТоM]:0,[$рHОМ]:0};
let $оТpсОТ={[$eТоM]:0,[$рHОМ]:0};
let $ТрecН={[$eТоM]:0,[$рHОМ]:0};
$Т0TpA.$OМoMА=(t=Date.now())=>
{
let mc=$Т0TpA;

$plA0оo(mc.$pМHHo,t,$МсоOTе);




mc.gui[$eТоM]=$МсоOTе[$eТоM]-mc[$eТоM];
mc.gui[$рHОМ]=$МсоOTе[$рHОМ]-mc[$рHОМ]-50;


if($AМlоН[mc.$MОеМ1]||$AМlоН[mc.$рсOОА])
{
$plA0оo(mc.$MОеМ1,t,$OIО0оo);
$plA0оo(mc.$НТсМТ,t,$pАecT);
$plA0оo(mc.$р1eНM,t,$0HeНср);
$plA0оo(mc.$рсOОА,t,$HНсМlM);

$plA0оo(mc.$оОlТМ,t,$НeНlMH);
$plA0оo(mc.$1O1lM,t,$01oеM);

$plA0оo(mc.$Mo1OА,t,$оТpсОТ);
$plA0оo(mc.$AМеTo,t,$ТрecН);

$plA0оo(mc.$e1IOМ,t,$НlIHOl);


mc.$ooНMН.scaleX=mc.$ееоАН*mc.scale;
mc.$ooНMН[$eТоM]=$OIО0оo[$eТоM]-mc[$eТоM];
mc.$ooНMН[$рHОМ]=$OIО0оo[$рHОМ]-mc[$рHОМ];
mc.$ooНMН.rotation=180-Math.atan2($OIО0оo[$eТоM]-$pАecT[$eТоM],$OIО0оo[$рHОМ]-$pАecT[$рHОМ])/Math.PI*180;


mc.$0T1MH.scaleX=mc.$ееоАН*mc.scale;
mc.$0T1MH[$eТоM]=$OIО0оo[$eТоM]-mc[$eТоM]+2;
mc.$0T1MH[$рHОМ]=$OIО0оo[$рHОМ]-mc[$рHОМ];
mc.$0T1MH.rotation=180-Math.atan2($OIО0оo[$eТоM]-$0HeНср[$eТоM],$OIО0оo[$рHОМ]-$0HeНср[$рHОМ])/Math.PI*180;


if(mc.$AIpAe)
{
$с0сеО(mc.$ooНMН,120,false,false);
$с0сеО(mc.$0T1MH,120,false,false);
}
else
{

var $МсT01M=(mc.$AААH1===34);


$с0сеО(mc.$ooНMН,Math.max(1,Math.min(120,
$НOНОН($OIО0оo[$eТоM],$OIО0оo[$рHОМ],$pАecT[$eТоM],$pАecT[$рHОМ])/31*120/mc.scale)),$МсT01M,mc.stand);
$с0сеО(mc.$0T1MH,Math.max(1,Math.min(120,
$НOНОН($OIО0оo[$eТоM],$OIО0оo[$рHОМ],$0HeНср[$eТоM],$0HeНср[$рHОМ])/31*120/mc.scale)),$МсT01M,mc.stand);
}

if(mc.$ААpес)
{
$МOocM(mc.$АсIее,60);
$МOocM(mc.$ТНpТI,60);
}
else
{
$МOocM(mc.$АсIее,Math.max(1,Math.min(60,
$НOНОН($HНсМlM[$eТоM],$HНсМlM[$рHОМ],$НeНlMH[$eТоM],$НeНlMH[$рHОМ])/30*60/mc.scale)));
$МOocM(mc.$ТНpТI,Math.max(1,Math.min(60,
$НOНОН($HНсМlM[$eТоM],$HНсМlM[$рHОМ],$01oеM[$eТоM],$01oеM[$рHОМ])/30*60/mc.scale)));
}

mc.$еОТТT.scaleX=mc.$ееоАН*mc.scale;
mc.$еОТТT[$eТоM]=$OIО0оo[$eТоM]-mc[$eТоM];
mc.$еОТТT[$рHОМ]=$OIО0оo[$рHОМ]-mc[$рHОМ];



if(mc.$еТеAO&&(VIOLENCE||$pMМ1))
mc.$еОТТT.rotation=-Math.atan2($OIО0оo[$eТоM]-$ТрecН[$eТоM],$OIО0оo[$рHОМ]-$ТрecН[$рHОМ])/Math.PI*180;
else
mc.$еОТТT.rotation=-Math.atan2($OIО0оo[$eТоM]-$HНсМlM[$eТоM],$OIО0оo[$рHОМ]-$HНсМlM[$рHОМ])/Math.PI*180;


if(mc.$еТеAO&&(VIOLENCE||$pMМ1))
$HОpcl=Math.atan2($оТpсОТ[$eТоM]-$HНсМlM[$eТоM],$оТpсОТ[$рHОМ]-$HНсМlM[$рHОМ]);
else
$HОpcl=Math.atan2($OIО0оo[$eТоM]-$HНсМlM[$eТоM],$OIО0оo[$рHОМ]-$HНсМlM[$рHОМ]);

mc.body.scaleX=mc.$ееоАН*mc.scale;
if(mc.$еТеAO)
{
mc.body[$eТоM]=$HНсМlM[$eТоM]-mc[$eТоM]+Math.sin($HОpcl)*24*mc.scale;
mc.body[$рHОМ]=$HНсМlM[$рHОМ]-mc[$рHОМ]+Math.cos($HОpcl)*24*mc.scale;
}
else
{
mc.body[$eТоM]=$OIО0оo[$eТоM]-mc[$eТоM]+Math.sin($HОpcl)*1.5*mc.scale;
mc.body[$рHОМ]=$OIО0оo[$рHОМ]-mc[$рHОМ]+Math.cos($HОpcl)*1.5*mc.scale;
}
mc.body.rotation=-$HОpcl/Math.PI*180;




mc.$АсIее.scaleX=mc.$ееоАН*mc.scale;
if(0)
{
mc.$АсIее[$eТоM]=$HНсМlM[$eТоM]-mc[$eТоM];
mc.$АсIее[$рHОМ]=$HНсМlM[$рHОМ]-mc[$рHОМ];
}
else
{
mc.$АсIее[$eТоM]=mc.body[$eТоM]-Math.sin($HОpcl)*23.5*mc.scale;
mc.$АсIее[$рHОМ]=mc.body[$рHОМ]-Math.cos($HОpcl)*23.5*mc.scale;
}

mc.$АсIее.rotation=180-Math.atan2(mc.$АсIее[$eТоM]+mc[$eТоM]-$НeНlMH[$eТоM],mc.$АсIее[$рHОМ]+mc[$рHОМ]-$НeНlMH[$рHОМ])/Math.PI*180;

mc.$ТНpТI.scaleX=mc.$ееоАН*mc.scale;
if(0)
{
mc.$ТНpТI[$eТоM]=$HНсМlM[$eТоM]-mc[$eТоM]+2;
mc.$ТНpТI[$рHОМ]=$HНсМlM[$рHОМ]-mc[$рHОМ];
}
else
{
mc.$ТНpТI[$eТоM]=mc.body[$eТоM]-Math.sin($HОpcl)*23.5*mc.scale+2;
mc.$ТНpТI[$рHОМ]=mc.body[$рHОМ]-Math.cos($HОpcl)*23.5*mc.scale;
}

mc.$ТНpТI.rotation=180-Math.atan2(mc.$ТНpТI[$eТоM]+mc[$eТоM]-$01oеM[$eТоM],mc.$ТНpТI[$рHОМ]+mc[$рHОМ]-$01oеM[$рHОМ])/Math.PI*180;





mc.head.scaleX=mc.$ееоАН*mc.scale;


mc.head[$eТоM]=mc.body[$eТоM]-Math.sin($HОpcl)*29*mc.scale;
mc.head[$рHОМ]=mc.body[$рHОМ]-Math.cos($HОpcl)*29*mc.scale;

mc.head.rotation=-Math.atan2(mc.head[$eТоM]+mc[$eТоM]-$НlIHOl[$eТоM],mc.head[$рHОМ]+mc[$рHОМ]-$НlIHOl[$рHОМ])/Math.PI*180;




















































































}
};

$Т0TpA.$ОНMIА=()=>
{
if($сoopT[$Т0TpA.$ОMррe])
{
if($сoopT[$Т0TpA.$ОMррe].$oАOТТI)
$сoopT[$Т0TpA.$ОMррe].$oАOТТI($Т0TpA);

$Т0TpA.$ОMррe=-1;
}

if($Т0TpA.$HНрНТ!==-1)
{
$eeМНl($Т0TpA.$HНрНТ);
}
};
















let $оlо1е=0;
$Т0TpA.$Нc0eМ=()=>
{
let delay=100;


if($Т0TpA[$МIIро]<=0)
delay=3000;

let time=Date.now();

if(time>$оlо1е+delay)
{
if($Т0TpA[$МIIро]>0)
{
$ММ.Event($ММ[$еАТМT],

$ММ.$Oоolр($Т0TpA.$MeсНе),

$ММ.$Oоolр(Math.ceil($Т0TpA[$МIIро])),

$ММ.$Oоolр($Т0TpA[$eТоM]),
$ММ.$Oоolр($Т0TpA[$рHОМ]),
$ММ.$Oоolр($Т0TpA[$АсТOе]*$ММ.$MеМMА),
$ММ.$Oоolр($Т0TpA[$МcеAH]*$ММ.$MеМMА),
$ММ.$Oоolр($Т0TpA[$lо0HH]),
$ММ.$Oоolр($Т0TpA[$еоOOА]),
$ММ.$Oоolр($Т0TpA[$0MТce]),
$ММ.$Oоolр($Т0TpA[$leAсO]),

$ММ.$Oоolр($Т0TpA[$oрOoА]*1000),
$ММ.$Oоolр($Т0TpA[$АТHММ]*1000),
$ММ.$Oоolр($Т0TpA[$lHсHO]*1000),
$ММ.$Oоolр($Т0TpA[$cАТAT]),
);
}
else
{
$ММ.Event($ММ[$еАТМT],

$ММ.$Oоolр($Т0TpA.$MeсНе),

$ММ.$Oоolр(0)
);
}

$оlо1е=time;
return true;
}
return false;
};
let $оHoНO=null;
$Т0TpA.$pHсоH=()=>
{
if($оHoНO)
{
$оHoНO.cancel();
$оHoНO=null;
}
$оHoНO=$ТMО1e(()=>
{
$оHoНO=null;

$ММ.Event($ММ[$eIАcН],

$ММ.$Oоolр($Т0TpA.$MeсНе),

$ММ.$Oоolр(Math.ceil($Т0TpA[$МIIро])),
$ММ.$Oоolр(Math.ceil($Т0TpA.$ААНММ)),
$ММ.$Oоolр(Math.ceil($Т0TpA.$НТcep)),
$ММ.$Oоolр(Math.ceil($Т0TpA.$lMIсo)),
$ММ.$Oоolр(Math.ceil($Т0TpA.$HAрH1)),
);
},200);
};

if($Т0TpA[$МIIро]<=0)
$Т0TpA.$оeoТе=true;

$Т0TpA.effects=[];

$Т0TpA.gui.$cТIcТ.visible=false;

$о1eНp($eсАeA);

$eсАeA++;
}
function $OHlIlA($cA0Аo)
{
if(!$HрТМc[$cA0Аo])
{
let $Т0TpA={};

$HрТМc[$cA0Аo]=$Т0TpA;

$Т0TpA.$еТр1O=true;
$Т0TpA[$cАocе]=$ММ.$HА1co;
$Т0TpA.$оeoТе=false;
$Т0TpA.ping=0;

$Т0TpA[$1есАТ]=$oМTо;

$Т0TpA.$HМ0М1=true;
}

return $HрТМc[$cA0Аo];
}


function $AО1оОА(value)
{
if(value===~~value)
if((value>=0&&value<$ОpMрс.length&&$ОpMрс[value]&&$ОpMрс[value].io)||value===-1)
return true;

return false;
}
function $oОHМp(i)
{
var mc=$ОpMрс[i];

mc.io=false;
mc.visible=false;
$оОHMT[i+$ТАIpc]=false;




$oОI10(mc.$c0НlТ);
$oОI10(mc.$рееоp);
mc.$c0НlТ=undefined;
mc.$рееоp=undefined;






game.removeChild(mc);




}














































function $lcpHl(source)
{
let r=$0Tоeо;
switch(source)
{
case $TрTМM: r=$МlсA1;break;
case $00opI: r=$TAHо;break;
case $ООоpT: r=$сАIМ1;break;
case $1сс0М: r=$е0АIO;break;
case $IAАОН: r=$OlIсI;break;
case $oеAIН: r=$ОHНсc;break;
case $p1ceМ: r=$ОНAcp;break;
default:

if($ОpMрс[source])
r=$ОpMрс[source].model;

break;
}
return r;
}
function $еMpll($МсОрOA)
{
var $pНAo0=$Аcle;

switch($МсОрOA)
{
case $ТIТT:
$pНAo0=$рHрT1;
break;
case $ocMАо:
$pНAo0=$рHрT1;
break;

case $THcО:
$pНAo0=$Тссee;
break;
case $сeHеc:
$pНAo0=$Тссee;
break;


case $ТНсI:
$pНAo0=$Н0ТTc;
break;
case $МOAМо:
$pНAo0=$Аcle;
break;
case $lТHТр:
$pНAo0=$cpТle;
break;
case $1eAеА:
$pНAo0=$ТН0Aс;
break;
case $Нp11:
$pНAo0=$соOeо;
break;
case $IHpp1:
$pНAo0=$е00оT;
break;
case $Ac1o:
$pНAo0=$0pMМp;
break;
case $МНpМ:
$pНAo0=$M1р1о;
break;
case $IeТIс:
$pНAo0=$MАсрТ;
break;

case $eeIc:
$pНAo0=$Al1pо;
break;
case $Тl1ОО:
$pНAo0=$Al1pо;
break;

case $Ocol:
$pНAo0=$OОАНl;
break;
case $АTel:
$pНAo0=$ТOAоp;
break;
case $еOlО:
$pНAo0=$Toрl0;
break;
case $ТНоОH:
$pНAo0=$Аcle;
break;
case $НIеOТ:
$pНAo0=$HНеMe;
break;
case $МTHO:
$pНAo0=$TAoАA;
break;
case $eНОp:
$pНAo0=$cоМHO;
break;
case $TIAН:
$pНAo0=$ТAAMp;
break;
case $O0еIH:
$pНAo0=$Аcle;
break;
case $MAАeН:
$pНAo0=$Аcle;
break;
case $Icрc:
$pНAo0=$OH1lp;
break;
case $е00о:
$pНAo0=$ТрO0e;
break;
case $eHAHH:
$pНAo0=$оHрel;
break;
case $AOoА:
$pНAo0=$оOpНН;
break;
case $0lТe:
$pНAo0=$cHA0T;
break;
case $HMАcТ:
$pНAo0=$lopOp;
break;
case $Tee0H:
$pНAo0=$ТН0Aс;
break;
case $pcAoО:
$pНAo0=$Асрl0;
break;

case $cIpНo:
$pНAo0=$Hcoеp;
break;

case $Hlр0Т:
$pНAo0=$eМH0o;
break;
case $M0Ос:
$pНAo0=$ММоoМ;
break;


case $1сc1I: $pНAo0=$еАОTo;break;
case $е10Ic: $pНAo0=$МMОO;break;
case $pоlо1: $pНAo0=$срTIо;break;
case $ТН0AA: $pНAo0=$АleНH;break;
case $рoс0T: $pНAo0=$оHc0c;break;
case $Mlрpс: $pНAo0=$oрoоT;break;
case $АеoeH: $pНAo0=$Aреc;break;
case $оAe1М: $pНAo0=$lое1I;break;
case $оT01A: $pНAo0=$MMMOМ;break;
case $рAMHc: $pНAo0=$с0eIT;break;
case $0lH0О: $pНAo0=$еАM1T;break;
case $1oАHe: $pНAo0=$МА1оp;break;
case $НpрсН: $pНAo0=$lOрcе;break;
case $OОoН1: $pНAo0=$lOрcе;break;
case $AрТоc: $pНAo0=$МpTOр;break;
case $oМTАM: $pНAo0=$МpTOр;break;
case $ТTМ1p: $pНAo0=$1MTМ1;break;
case $oА1o: $pНAo0=$оНOoМ;break;
case $MlpАO: $pНAo0=$АHТeо;break;
case $ОНеAo: $pНAo0=$НIlТe;break;
case $сOeIA: $pНAo0=$pIOOe;break;
case $OAHOс: $pНAo0=$oeA0c;break;

case $еITIе: $pНAo0=$01Нoо;break
case $ТHIоH: $pНAo0=$ОTcе0;break;
case $1ААеc: $pНAo0=$ToМIН;break;
case $HppНl: $pНAo0=$Oеp0T;break;
case $МIоIр: $pНAo0=$oМIсo;break;
case $MoIMМ: $pНAo0=$Аcle;break;
case $с0ООТ: $pНAo0=$НМеTо;break;
case $pОeHI: $pНAo0=$ссIpс;break;
case $MMoMT: $pНAo0=$сеMAА;break;
case $рeрTМ: $pНAo0=$AМ0MН;break;
case $00ОТ1: $pНAo0=$AМ0MН;break;
case $МTс1Н: $pНAo0=$pcоo1;break;
case $1АOТA: $pНAo0=$0OрM0;break;
case $0НО0с: $pНAo0=$еoеOс;break;
case $МIHТА: $pНAo0=$ОерОМ;break;
case $МНIpO: $pНAo0=$ОерОМ;break;
case $MelMc: $pНAo0=$TpНАО;break;
case $ОАT1I: $pНAo0=$cОoоA;break;
case $pрA0р: $pНAo0=$ОТМАН;break;
case $o0TеM: $pНAo0=$AOМe1;break;
case $орMТТ: $pНAo0=$TOoН0;break;
case $ТeTеМ: $pНAo0=$оlАс1;break;
case $eМTМО: $pНAo0=$оlАс1;break;

case $рOМоM: $pНAo0=$pHlel;break;
case $lО1pl: $pНAo0=$cсppо;break;
case $p0оpc: $pНAo0=$АeIо0;break;
case $01TТр: $pНAo0=$еHlcA;break;
case $IоHоO: $pНAo0=$еHlcA;break;
case $lеАAo: $pНAo0=$ОМНMA;break;
case $ОIHpе: $pНAo0=$TpеTI;break;
case $cHlIe: $pНAo0=$1IоНр;break;

case $М1H0А: $pНAo0=$Teell;break;
case $Мо1pН: $pНAo0=$oOoНТ;break;
case $ААcсo: $pНAo0=$ОрIeo;break;
case $ОсOМ: $pНAo0=$MАHНe;break;
case $cIоАр: $pНAo0=$ТесHT;break;
case $oоеАе: $pНAo0=$ТесHT;break;
case $ММI0с: $pНAo0=$оllcс;break;

case $IрMсT: $pНAo0=$Аcle;break;
case $OАeМА: $pНAo0=$МсoIO;break;

default:
$pНAo0=$МсОрOA;
}

return $pНAo0;
}

var $pс1oМ=[];
var $рАIpН=true;
var $рeOTМ={
$рАIpН: 1
};
var $TolHМA=Math.floor(Math.random()*10);

var $оMАМe;
function $MО1ОНA($Т0TpA)
{



}
function $еАеО1($TMНlIо,params,$THcАОp=false)
{


var $оMАМe=null;
{
if($TMНlIо===$pTсHO($ТIТT,$ТТ1Iр,9))
$оMАМe=game.addChildAt(new gun_rifle,game.numChildren);
if($TMНlIо===$pTсHO($ocMАо,$АlOpТ,11))
$оMАМe=game.addChildAt(new gun_rifle_b,game.numChildren);

if($TMНlIо===$pTсHO($THcО,$1АНсT,10))
$оMАМe=game.addChildAt(new gun_pistol,game.numChildren);
if($TMНlIо===$pTсHO($сeHеc,$сcАTс,12))
$оMАМe=game.addChildAt(new gun_pistol_b,game.numChildren);

if($TMНlIо===$pTсHO($eeIc,$НITТ1,11))
$оMАМe=game.addChildAt(new gun_shotgun,game.numChildren);
if($TMНlIо===$pTсHO($Тl1ОО,$01TТe,13))
$оMАМe=game.addChildAt(new gun_shotgun_b,game.numChildren);

if($TMНlIо===$pTсHO($ТНсI,$AI1pр,11))
$оMАМe=game.addChildAt(new gun_pistol2,game.numChildren);
if($TMНlIо===$pTсHO($МOAМо,$оOMс1,10))
$оMАМe=game.addChildAt(new gun_vehgun,game.numChildren);
if($TMНlIо===$pTсHO($lТHТр,$ТIеМТ,6))
$оMАМe=game.addChildAt(new gun_gl,game.numChildren);
if($TMНlIо===$pTсHO($1eAеА,$0cc1l,9))
$оMАМe=game.addChildAt(new gun_sp_sh,game.numChildren);
if($TMНlIо===$pTсHO($Нp11,$eoAТO,6))
$оMАМe=game.addChildAt(new gun_rl,game.numChildren);
if($TMНlIо===$pTсHO($IHpp1,$T1HМо,7))
$оMАМe=game.addChildAt(new gun_rl0,game.numChildren);
if($TMНlIо===$pTсHO($pcAoО,$cТМсA,8))
$оMАМe=game.addChildAt(new gun_vgun,game.numChildren);
if($TMНlIо===$pTсHO($Ac1o,$сlОTp,11))
$оMАМe=game.addChildAt(new gun_railgun,game.numChildren);
if($TMНlIо===$pTсHO($МНpМ,$АТIрM,12))
$оMАМe=game.addChildAt(new gun_railgun2,game.numChildren);
if($TMНlIо===$pTсHO($IeТIс,$еoH1О,10))
$оMАМe=game.addChildAt(new gun_sniper,game.numChildren);
if($TMНlIо===$pTсHO($Ocol,$МlM0H,11))
$оMАМe=game.addChildAt(new gun_apistol,game.numChildren);
if($TMНlIо===$pTсHO($АTel,$ТМo0H,10))
$оMАМe=game.addChildAt(new gun_arifle,game.numChildren);
if($TMНlIо===$pTсHO($еOlО,$НHеIА,11))
$оMАМe=game.addChildAt(new gun_arifle2,game.numChildren);
if($TMНlIо===$pTсHO($ТНоОH,$М0eTе,13))
$оMАМe=game.addChildAt(new gun_vehcannon,game.numChildren);
if($TMНlIо===$pTсHO($НIеOТ,$HppрM,11))
$оMАМe=game.addChildAt(new gun_minigun,game.numChildren);

if($TMНlIо===$pTсHO($ТрOAe,$ООlTс,8))
$оMАМe=game.addChildAt(new gun_m4a1,game.numChildren);
if($TMНlIо===$pTсHO($НТHсe,$T0срe,9))
$оMАМe=game.addChildAt(new gun_glock,game.numChildren);


if($TMНlIо===$pTсHO($МTHO,$с0AАT,17))
$оMАМe=game.addChildAt(new gun_defibrillator,game.numChildren);
if($TMНlIо===$pTсHO($eНОp,$еpТНA,7))
$оMАМe=game.addChildAt(new gun_bfg,game.numChildren);

if($TMНlIо===$pTсHO($TIAН,$eMсНO,10)||$TMНlIо===$pTсHO($о0TрМ,$0Mсcр,16))
$оMАМe=game.addChildAt(new gun_plasmacannon,game.numChildren);
if($TMНlIо===$pTсHO($O0еIH,$ерo0l,14))
$оMАМe=game.addChildAt(new gun_vehminigun,game.numChildren);
if($TMНlIо===$pTсHO($MAАeН,$ТIHМТ,13))
$оMАМe=game.addChildAt(new gun_vehminigl,game.numChildren);
if($TMНlIо===$pTсHO($Icрc,$lHccH,16))
$оMАМe=game.addChildAt(new gun_real_shotgun,game.numChildren);
if($TMНlIо===$pTсHO($е00о,$рOееl,14))
$оMАМe=game.addChildAt(new gun_real_rifle,game.numChildren);
if($TMНlIо===$pTсHO($eHAHH,$ATOMl,8))
$оMАМe=game.addChildAt(new gun_oicw,game.numChildren);
if($TMНlIо===$pTсHO($AOoА,$Ic0АI,13))
$оMАМe=game.addChildAt(new gun_plasmagun,game.numChildren);

if($TMНlIо===$pTсHO($cIpНo,$lHTМo,12))
$оMАМe=game.addChildAt(new gun_rayrifle,game.numChildren);

if($TMНlIо===$pTсHO($Hlр0Т,$МTcoр,15))
$оMАМe=game.addChildAt(new gun_pixel_rifle,game.numChildren);
if($TMНlIо===$pTсHO($M0Ос,$oMHМр,12))
$оMАМe=game.addChildAt(new gun_pixel_rl,game.numChildren);





if($TMНlIо===$pTсHO($1сc1I,$оoHIp,24))
$оMАМe=game.addChildAt(new darkstar_1_assault_rifle,game.numChildren);
if($TMНlIо===$pTсHO($е10Ic,$ТToOТ,22))
$оMАМe=game.addChildAt(new darkstar_1_gauss_rifle,game.numChildren);
if($TMНlIо===$pTсHO($pоlо1,$OHHАО,18))
$оMАМe=game.addChildAt(new darkstar_1_minigun,game.numChildren);
if($TMНlIо===$pTсHO($ТН0AA,$HeНcо,22))
$оMАМe=game.addChildAt(new darkstar_1_phanx_rifle,game.numChildren);
if($TMНlIо===$pTсHO($рoс0T,$ННMoo,18))
$оMАМe=game.addChildAt(new darkstar_1_usniper,game.numChildren);
if($TMНlIо===$pTсHO($Mlрpс,$0рlо1,18))
$оMАМe=game.addChildAt(new lostmydollar_av135,game.numChildren);
if($TMНlIо===$pTсHO($АеoeH,$оI0со,19))
$оMАМe=game.addChildAt(new lostmydollar_needle,game.numChildren);
if($TMНlIо===$pTсHO($оAe1М,$А1еАе,19))
$оMАМe=game.addChildAt(new lostmydollar_qccv50,game.numChildren);
if($TMНlIо===$pTсHO($оT01A,$Т0AМр,18))
$оMАМe=game.addChildAt(new lostmydollar_rmk36,game.numChildren);
if($TMНlIо===$pTсHO($рAMHc,$AТOHp,16))
$оMАМe=game.addChildAt(new lostmydollar_rpg,game.numChildren);
if($TMНlIо===$pTсHO($0lH0О,$HНННo,26))
$оMАМe=game.addChildAt(new lazyrain_alien_laser_rifle,game.numChildren);
if($TMНlIо===$pTсHO($1oАHe,$сАeрM,27))
$оMАМe=game.addChildAt(new lazyrain_alien_laser_rifle2,game.numChildren);

if($TMНlIо===$pTсHO($НpрсН,$1НeНI,15))
$оMАМe=game.addChildAt(new lazyrain_cannon,game.numChildren);
if($TMНlIо===$pTсHO($OОoН1,$сpOoc,16))
$оMАМe=game.addChildAt(new lazyrain_cannon2,game.numChildren);

if($TMНlIо===$pTсHO($AрТоc,$А1oрр,16))
$оMАМe=game.addChildAt(new moonhawk_phantom,game.numChildren);
if($TMНlIо===$pTсHO($oМTАM,$НMeНT,17))
$оMАМe=game.addChildAt(new moonhawk_phantom2,game.numChildren);
if($TMНlIо===$pTсHO($ТTМ1p,$IН0еT,12))
$оMАМe=game.addChildAt(new moonhawk_smg,game.numChildren);
if($TMНlIо===$pTсHO($oА1o,$1IН1М,18))
$оMАМe=game.addChildAt(new ditzy_energy_rifle,game.numChildren);

if($TMНlIо===$pTсHO($MlpАO,$coA0М,21))
$оMАМe=game.addChildAt(new roxxar_marksman_rifle,game.numChildren);
if($TMНlIо===$pTсHO($ОНеAo,$еTАрА,13))
$оMАМe=game.addChildAt(new roxxar_pistol,game.numChildren);
if($TMНlIо===$pTсHO($сOeIA,$ТOТТс,12))
$оMАМe=game.addChildAt(new roxxar_rifle,game.numChildren);
if($TMНlIо===$pTсHO($OAHOс,$ОрсТA,14))
$оMАМe=game.addChildAt(new roxxar_shotgun,game.numChildren);


if($TMНlIо===$pTсHO($еITIе,$МТсоН,18))
$оMАМe=game.addChildAt(new moonhawk_crossfire,game.numChildren);
if($TMНlIо===$pTсHO($ТHIоH,$TMcoр,19))
$оMАМe=game.addChildAt(new lazyrain_psi_cutter,game.numChildren);
if($TMНlIо===$pTсHO($1ААеc,$ТOоMс,24))
$оMАМe=game.addChildAt(new mrjaksnes_android_sniper,game.numChildren);
if($TMНlIо===$pTсHO($HppНl,$oIcpТ,17))
$оMАМe=game.addChildAt(new incompetence_cr30,game.numChildren);
if($TMНlIо===$pTсHO($МIоIр,$lHееO,22))
$оMАМe=game.addChildAt(new darkstar_1_cs_ragequit,game.numChildren);
if($TMНlIо===$pTсHO($MoIMМ,$oНIoА,15))
$оMАМe=game.addChildAt(new gun_fttp_vehgun,game.numChildren);
if($TMНlIо===$pTсHO($с0ООТ,$A1оcH,27))
$оMАМe=game.addChildAt(new thetoppestkek_shotgun_nxs25,game.numChildren);
if($TMНlIо===$pTсHO($pОeHI,$TMоНH,27))
$оMАМe=game.addChildAt(new incompetence_archetype_27xx,game.numChildren);
if($TMНlIо===$pTсHO($MMoMT,$eсAМр,8))
$оMАМe=game.addChildAt(new phsc_aug,game.numChildren);
if($TMНlIо===$pTсHO($рeрTМ,$ОАAHр,16))
$оMАМe=game.addChildAt(new moonhawk_railgun,game.numChildren);
if($TMНlIо===$pTсHO($00ОТ1,$AМАpМ,17))
$оMАМe=game.addChildAt(new moonhawk_railgun2,game.numChildren);
if($TMНlIо===$pTсHO($МTс1Н,$lМcоA,20))
$оMАМe=game.addChildAt(new lazyrain_heal_pistol,game.numChildren);
if($TMНlIо===$pTсHO($1АOТA,$OcT0c,17))
$оMАМe=game.addChildAt(new incompetence_glhf,game.numChildren);
if($TMНlIо===$pTсHO($0НО0с,$срсel,18))
$оMАМe=game.addChildAt(new incompetence_glhf2,game.numChildren);
if($TMНlIо===$pTсHO($МIHТА,$IНpOI,17))
$оMАМe=game.addChildAt(new lazyrain_gravy_rl,game.numChildren);
if($TMНlIо===$pTсHO($МНIpO,$oppA1,18))
$оMАМe=game.addChildAt(new lazyrain_gravy_rl2,game.numChildren);
if($TMНlIо===$pTсHO($MelMc,$eАрIo,17))
$оMАМe=game.addChildAt(new darkstar_1_owo_rl,game.numChildren);
if($TMНlIо===$pTсHO($ОАT1I,$МОсIp,19))
$оMАМe=game.addChildAt(new phsc_plasma_shotgun,game.numChildren);
if($TMНlIо===$pTсHO($pрA0р,$сOl1I,20))
$оMАМe=game.addChildAt(new phsc_android_shotgun,game.numChildren);
if($TMНlIо===$pTсHO($o0TеM,$сНc1H,11))
$оMАМe=game.addChildAt(new ditzy_cs_ik,game.numChildren);
if($TMНlIо===$pTсHO($орMТТ,$lOAlc,12))
$оMАМe=game.addChildAt(new ditzy_cs_ik2,game.numChildren);
if($TMНlIо===$pTсHO($ТeTеМ,$HMТcТ,9))
$оMАМe=game.addChildAt(new phsc_ph01,game.numChildren);
if($TMНlIо===$pTсHO($eМTМО,$ToМсA,10))
$оMАМe=game.addChildAt(new phsc_ph01b,game.numChildren);

if($TMНlIо===$pTсHO($рOМоM,$pI1Нo,18))
$оMАМe=game.addChildAt(new darkstar_1_railgun,game.numChildren);
if($TMНlIо===$pTсHO($lО1pl,$О1еIМ,19))
$оMАМe=game.addChildAt(new darkstar_1_railgun2,game.numChildren);



if($TMНlIо===$pTсHO($p0оpc,$р1epс,24))
$оMАМe=game.addChildAt(new darkstar_1_alien_rail_sg,game.numChildren);
if($TMНlIо===$pTсHO($01TТр,$ероАТ,18))
$оMАМe=game.addChildAt(new darkstar_1_nade_c9,game.numChildren);
if($TMНlIо===$pTсHO($IоHоO,$pНеTA,19))
$оMАМe=game.addChildAt(new darkstar_1_nade_c9b,game.numChildren);
if($TMНlIо===$pTсHO($lеАAo,$1АApр,13))
$оMАМe=game.addChildAt(new darkstar_1_rl,game.numChildren);
if($TMНlIо===$pTсHO($ОIHpе,$OIНОI,16))
$оMАМe=game.addChildAt(new darkstar_1_bison,game.numChildren);
if($TMНlIо===$pTсHO($cHlIe,$OрMpН,18))
$оMАМe=game.addChildAt(new darkstar_1_auto_sg,game.numChildren);

if($TMНlIо===$pTсHO($М1H0А,$0cА1М,16))
$оMАМe=game.addChildAt(new ditzy_focus_beam,game.numChildren);
if($TMНlIо===$pTсHO($Мо1pН,$еТMор,14))
$оMАМe=game.addChildAt(new boom5_revolver,game.numChildren);
if($TMНlIо===$pTсHO($ААcсo,$MOНIp,26))
$оMАМe=game.addChildAt(new thetoppestkek_scavenger_sg,game.numChildren);
if($TMНlIо===$pTсHO($ОсOМ,$1TlOI,16))
$оMАМe=game.addChildAt(new lazyrain_acid_gl,game.numChildren);
if($TMНlIо===$pTсHO($cIоАр,$ррTО0,19))
$оMАМe=game.addChildAt(new lazyrain_plasma_smg,game.numChildren);
if($TMНlIо===$pTсHO($oоеАе,$IAeсе,20))
$оMАМe=game.addChildAt(new lazyrain_plasma_smg2,game.numChildren);
if($TMНlIо===$pTсHO($ММI0с,$A1ТcТ,22))
$оMАМe=game.addChildAt(new roxxar_android_railgun,game.numChildren);

if($TMНlIо===$pTсHO($IрMсT,$11MНI,12))
$оMАМe=game.addChildAt(new gun_invisgun,game.numChildren);

if($TMНlIо===$pTсHO($OАeМА,$оOeОp,12))
$оMАМe=game.addChildAt(new gun_sharkgun,game.numChildren);



































if($TMНlIо===$pTсHO($0lТe,$0cOlM,12))
{
$оMАМe=game.addChildAt(new item_grenade,game.numChildren);
$IOМТO++;
}
if($TMНlIо===$pTсHO($HMАcТ,$НIO1е,9))
{
$оMАМe=game.addChildAt(new item_grenade_port,game.numChildren);
$AАcpc++;
}
if($TMНlIо===$pTсHO($Tee0H,$1lТAН,11))
{
$оMАМe=game.addChildAt(new item_grenade_shield,game.numChildren);
$0рроo++;
}

}

if($оMАМe!=null)
{
$сOoНН($оMАМe);


{
let $ррAM0=-1;
let owner=null;
let $АeATо=-1;

setGetterSetter($оMАМe,$OрAрl,
()=>
{
return $ррAM0;
},
($H1HАН)=>
{
if($ррAM0===$H1HАН)
return;




let $OApoсо=false;

if(!$оMАМe.$соТAТ)
if($ррAM0!==$ММ.$pTcHМ)
{
if(owner)
{
if(!$ОcHесl.$рMl0IН)
if(owner[$1ee0c+$АeATо]!==$оMАМe.$MeсНе)
throw new Error();

owner[$1ee0c+$АeATо]=$ММ.$pTcHМ;


if(owner[$МАТОе]===$оMАМe.$MeсНе)
{



owner[$МАТОе]=-1;

$o0MIс(owner.$MeсНе);

if(owner.$MeсНе===$НAlНc)
{
$OApoсо=true;
owner.$рoeсl=false;
owner.$pо1НО=false;
$IlMНM=false;
}
}

owner=null;
$АeATо=-1;
}
}

$ррAM0=$H1HАН;


if(!$оMАМe.$соТAТ)
if($H1HАН>=0&&$H1HАН<$0Ме1А.length)
if($0Ме1А[$H1HАН])
if($оMАМe.$cppее>=$ММ.$НeеIА&&$оMАМe.$cppее<=$ММ.$АTlcI)
{
if($0Ме1А[$H1HАН][$1ee0c+$оMАМe.$cppее]===$ММ.$pTcHМ)
{
owner=$0Ме1А[$H1HАН];
$АeATо=$оMАМe.$cppее;

owner[$1ee0c+$АeATо]=$оMАМe.$MeсНе;
}
else








{
8;
}
}


if($OApoсо)
$pрMТl();




































}
);
}


$оMАМe.$еe0Мо=-1;
$оMАМe.$0ррТТ=-1;

if(params.$рAlНН===undefined)
$оMАМe.$рAlНН=-1;
else
$оMАМe.$рAlНН=params.$рAlНН;

$оMАМe.$cрTT0=-1;

if(params.$сОс0М===undefined)
$оMАМe.$сОс0М=1;
else
$оMАМe.$сОс0М=params.$сОс0М;

if(params.$clосT===undefined)
$оMАМe.$clосT=1;
else
$оMАМe.$clосT=params.$clосT;

if(params.$oТоAр===undefined)
$оMАМe.$oТоAр=1;
else
$оMАМe.$oТоAр=params.$oТоAр;

if(params.$1OНМо===undefined)
$оMАМe.$1OНМо=1;
else
$оMАМe.$1OНМо=params.$1OНМо;


$оMАМe.model=$TMНlIо;

$оMАМe[$eТоM]=params[$eТоM];
$оMАМe[$рHОМ]=params[$рHОМ];

$оMАМe.$eТAeр=$оMАМe[$eТоM];
$оMАМe.$IHAOp=$оMАМe[$рHОМ];

if(params.$Тссес===undefined)
{
$оMАМe.$Тссес=$оMАМe[$eТоM];
$оMАМe.$I0IНA=$оMАМe[$рHОМ];
}
else
{
$оMАМe.$Тссес=params.$Тссес;
$оMАМe.$I0IНA=params.$I0IНA;
}
$оMАМe.upg=params.upg;

$оMАМe.command=params.command;

$оMАМe.$ATрIeО();

if(!$еHоНH)
if(!$pMМ1)
if(LOW_HPS)
{
if($оMАМe.$1l1TO==2)
{
if($оMАМe.upg==0)
$оMАМe[$clcре]*=0.4;
if($оMАМe.upg==1)
$оMАМe[$clcре]*=0.6;
}
}

$оMАМe.$OАMco=2;

$оMАМe.io=true;
$оMАМe.$ОрОAA=0;
$оMАМe.$TМoсc=$оMАМe.$TсlceМ;

let $0Mе1e={[$eТоM]:0,[$рHОМ]:0};
let $o1HoeO={[$eТоM]:0,[$рHОМ]:0};
$оMАМe.$орООр=($оIeHeТ=Date.now())=>
{
$plA0оo($оMАМe.$c0НlТ,$оIeHeТ,$0Mе1e);
$plA0оo($оMАМe.$рееоp,$оIeHeТ,$o1HoeO);

$оMАМe[$eТоM]=$0Mе1e[$eТоM];
$оMАМe[$рHОМ]=$0Mе1e[$рHОМ];
$оMАМe.rotation=-Math.atan2($0Mе1e[$eТоM]-$o1HoeO[$eТоM],$0Mе1e[$рHОМ]-$o1HoeO[$рHОМ])/Math.PI*180-90;


mc.$eТAeр=$Il[mc.$c0НlТ];
mc.$IHAOp=$0OA[mc.$c0НlТ];
mc.$оАH1e=-Math.atan2($Il[mc.$c0НlТ]-$Il[mc.$рееоp],$0OA[mc.$c0НlТ]-$0OA[mc.$рееоp])/Math.PI*180-90;
};

$оMАМe.$0TlIcM=()=>
{
$оMАМe.$OАMco=2;
$оMАМe.ready=true;
$оMАМe.gotoAndStop(2);

if($оMАМe._onEndReached)
$оMАМe._onEndReached();
}

if($THcАОp)
{
$оMАМe.$MeсНе=params.$MeсНе;


let $HcOpМ=params.picken_by;
params.picken_by=$ММ.$pTcHМ;
$оMАМe.picken_by=$HcOpМ;

$оMАМe.$c0НlТ=params.$c0НlТ;
$оОlHT[$оMАМe.$c0НlТ]=$оMАМe.$cMооTc;

$оMАМe.$рееоp=params.$рееоp;
$оОlHT[$оMАМe.$рееоp]=$оMАМe.$р0еТIТ;

$loсАТ(params.$T0МТМ,$оMАМe.$c0НlТ,$оMАМe.$рееоp,0,$сTpНО($оMАМe.$ТHoМс-$оMАМe.$eHоНс),-1);
$оMАМe.$T0МТМ=params.$T0МТМ;

$ОpMрс[$оMАМe.$MeсНе]=$оMАМe;

$оMАМe[$eТоM]=params[$eТоM];
$оMАМe[$рHОМ]=params[$рHОМ];
$оMАМe.rotation=params.rotation;
$оMАМe.scaleX=params.scaleX;
$оMАМe.scaleY=params.scaleY;

game.removeChild(params);
}
else
{


$оMАМe.picken_by=-1;

$ОpMрс[$cс0Hс]=$оMАМe;
$оMАМe.$MeсНе=$cс0Hс;


$оMАМe.$c0НlТ=$0ТсTо($оMАМe[$eТоM]+$оMАМe.$ТHoМс,$оMАМe[$рHОМ],0,0,$оMАМe.$cMооTc,false,2,$ТАIpc+$cс0Hс);
$оMАМe.$рееоp=$0ТсTо($оMАМe[$eТоM]+$оMАМe.$eHоНс,$оMАМe[$рHОМ],0,0,$оMАМe.$р0еТIТ,false,2,$ТАIpc+$cс0Hс);
$оMАМe.$T0МТМ=$0pHАс($оMАМe.$c0НlТ,$оMАМe.$рееоp,0,$сTpНО($оMАМe.$ТHoМс-$оMАМe.$eHоНс),-1);

$cс0Hс++;
}
}

return $оMАМe;
}











function $Оoеe1(x,y)
{

for($0ОoHс=0;$0ОoHс<$о01lc;$0ОoHс++)
if(x>=$0eM1p[$0ОoHс])
if(x<=$0eM1p[$0ОoHс]+$Орсlp[$0ОoHс])
if(y>=$lоТpH[$0ОoHс])
if(y<=$lоТpH[$0ОoHс]+$рcAeH[$0ОoHс])
return true;

return false;
}
function $НoОIoс(x,y,$НpоТ0)
{

for($0ОoHс=0;$0ОoHс<$о01lc;$0ОoHс++)
if(x>=$0eM1p[$0ОoHс]-$НpоТ0)
if(x<=$0eM1p[$0ОoHс]+$Орсlp[$0ОoHс]+$НpоТ0)
if(y>=$lоТpH[$0ОoHс]-$НpоТ0)
if(y<=$lоТpH[$0ОoHс]+$рcAeH[$0ОoHс]+$НpоТ0)
return true;

return false;
}


function $pНTс1(mc,$сA1pс=false)
{


let $eМA1p=mc[$оIpl];

mc[$lоАо]=$pОplH[$МНТ01];
mc.$оlсTН=false;

if(typeof mc.char===$ср0I&&mc.char.charAt(0)===$pOрс)
{
let $olAе1А=parseInt(mc.char.substring(1));



let $Mo1Ip=undefined;
if($сA1pс)
{
$Mo1Ip=$ОlOHe+(typeof mc[$AHop]);

if(mc.$MeсНе===$НAlНc)
$Mo1Ip=$ММ.$ppO0l ? $ММ.$ppO0l[$ерlАО] : $Oeо0;
else
if(typeof mc[$AHop]===$ср0I)
$Mo1Ip=mc[$AHop];
}

let $loeoc=$сМсlc($olAе1А,true,$Mo1Ip);

mc[$оIpl]=$0lepc;

if(!$loeoc)
{

}
else
$loeoc.$1рТ1М(
()=>
{
if($pOрс+$olAе1А===mc.char)
{
let $сToоe=$loeoc.$OAAМ1();

mc[$0OАс]=parseInt($сToоe[$0OАс]);

if(mc[$оIpl]===$0lepc)
mc[$оIpl]=$сToоe[$оIlО]+$0OрТ;

if($pОplH.hasOwnProperty($сToоe[$lоАо]))
mc[$lоАо]=$pОplH[$сToоe[$lоАо]];




try
{
let $ОTАTIo=parseInt($сToоe[$1Tlе].substr(1),16);

mc.$Alр10=(($ОTАTIo>>16)&0xFF)/255*2;
mc.$оМcHM=(($ОTАTIo>>8)&0xFF)/255*2;
mc.$рМMоО=($ОTАTIo&0xFF)/255*2;
}
catch(e)
{
}

let $АоAНM1=(parseInt($сToоe.swords)||0);
let blending=Blending.ADDITIVE;

if($АоAНM1===1)
blending=Blending.NORMAL;

if($АоAНM1===2)
blending=Blending.MULTIPLY;

mc.$Hpc1е(blending);
}
}
);
}
else
{
mc.$Hpc1е(Blending.ADDITIVE);

if(mc.char==1||(mc.char>=40&&mc.char<=49)||mc.char==83||mc.char==84||mc.char==36||mc.char==37||mc.char==22)
{
mc[$0OАс]=1;

mc[$lоАо]=$pОplH[$оoT1];

if(mc.char==37)
mc[$lоАо]=$pОplH[$рMеlО];

$о1eНp(mc.$MeсНе);

if(mc.char===36)
{
mc[$оIpl]=$оe0Iр;
}
if(mc.char===37)
{
mc[$оIpl]=$eeoIO;
}

if(!$pMМ1)
if(mc.char==1||(mc.char>=40&&mc.char<=49))
{
mc.$lOeНc=$рHоеН[0];
if($рHоеН[0]>=49)
{
mc.$THMcM=$рHоеН[0];


mc.$AААH1=$рHоеН[0];
mc.$сТlAМ=$рHоеН[0];
mc.$ТIpec=$рHоеН[0];

mc.$НOоМO=$рHоеН[0];
mc.$ОIMОo=$рHоеН[0];
mc.$cHАoс=$рHоеН[0];

mc.$Hlppе=$рHоеН[0];
mc.$Аc01о=$рHоеН[0];

mc.$ТрH0c=$рHоеН[0];
mc.$ОАOрр=$рHоеН[0];

mc.$MAНIp=0.75;





{
$оОlHT[mc.$рсOОА]=8*2;
$оОlHT[mc.$MОеМ1]=7*2;


$оОlHT[mc.$оОlТМ]=3*1.5;
$оОlHT[mc.$1O1lM]=3*1.5;
$оОlHT[mc.$pМHHo]=8*1.5;
$оОlHT[mc.$e1IOМ]=8*1.5;
}

}
}

mc.$Alр10=1;
mc.$оМcHM=0;
mc.$рМMоО=0;

}
else
if(mc.char==2||mc.char==70||mc.char==71||mc.char==79||mc.char==80||mc.char==69)
{
mc[$0OАс]=1;



$о1eНp(mc.$MeсНе);


if(mc.char==70)
{
mc[$оIpl]=$ОеHТ1;

mc[$lоАо]=$pОplH[$o0АTe];

mc.$Alр10=1;
mc.$оМcHM=2;
mc.$рМMоО=0;
}
else
if(mc.char==71)
{
mc[$оIpl]=$0lMlо;

mc.$Alр10=0.2;
mc.$оМcHM=0.9;
mc.$рМMоО=1;
}
else
if(mc.char==69)
{
mc[$оIpl]=$сHрlI;

mc.$Alр10=0.3;
mc.$оМcHM=1.3;
mc.$рМMоО=2;
}
else
{
mc[$оIpl]=$АеOpl;

mc.$Alр10=0.3;
mc.$оМcHM=1.3;
mc.$рМMоО=2;
}





}
else
if(mc.char==3||mc.char==61||mc.char==72||mc.char==75||mc.char==76||mc.char==35||mc.char==132||mc.char==135||mc.char==136||mc.char==138)
{
mc[$0OАс]=1;



$о1eНp(mc.$MeсНе);

mc[$lоАо]=$pОplH[$ТTс1о];


{
if(mc.char==35)
mc[$оIpl]=$АOссО;
else
if(mc.char==132)
mc[$оIpl]=$ААHрМ;
else
if(mc.char==135||mc.char==136)
{
mc[$оIpl]=$ОАpНО;
mc[$lоАо]=$pОplH[$рМOcO];
}
else
if(mc.char==138)
{
mc[$оIpl]=$H1МOc;
mc[$lоАо]=$pОplH[$0НoOА];
}
else
mc[$оIpl]=$0АIcc;
}

mc.$Alр10=1;
mc.$оМcHM=0;
mc.$рМMоО=0;

if(!$pMМ1&&!$еHоНH&&mc.char==3)
mc.$lOeНc=$рHоеН[1];


if(mc.$lOeНc===61)
{
mc[$lоАо]=$pОplH[$0НoOА];
}

if(!$pMМ1)
{
$0ОoHс=1;













$0cТeо(mc,$0ОoHс);
}
}
else
if(mc.char==4)
{
mc[$0OАс]=2;

mc[$lоАо]=$pОplH[$IllIM];



$о1eНp(mc.$MeсНе);


mc[$оIpl]=$eIТeе;

mc.$Alр10=0;
mc.$оМcHM=0;
mc.$рМMоО=0;
}
else
if(mc.char==33)
{
mc[$0OАс]=2;

mc[$lоАо]=$pОplH[$IllIM];



$о1eНp(mc.$MeсНе);


mc[$оIpl]=$lеТоA;

mc.$Alр10=0;
mc.$оМcHM=0;
mc.$рМMоО=0;
}
else
if(mc.char==5)
{
mc[$0OАс]=2;

mc[$lоАо]=$pОplH[$AАеI];



$о1eНp(mc.$MeсНе);

if(!mc.$HМ0М1)
mc[$оIpl]=$l0c0М;

mc.$Alр10=0;
mc.$оМcHM=0;
mc.$рМMоО=0;
}
else
if(mc.char==6)
{
mc[$0OАс]=1;



$о1eНp(mc.$MeсНе);

if(!mc.$HМ0М1)
mc[$оIpl]=$еOTеe;



mc.$Alр10=0.1;
mc.$оМcHM=0.8;
mc.$рМMоО=1;
}
else
if(mc.char==7)
{
mc[$0OАс]=1;

mc[$lоАо]=$pОplH[$рOсАp];



$о1eНp(mc.$MeсНе);


mc.$MAНIp=0.5;

if(!mc.$HМ0М1)
{
mc[$оIpl]=$М0ТM1;

$оОlHT[mc.$рсOОА]=8*2;
$оОlHT[mc.$MОеМ1]=7*2;


$оОlHT[mc.$оОlТМ]=3*1.5;
$оОlHT[mc.$1O1lM]=3*1.5;

}

mc.$Alр10=1;
mc.$оМcHM=0;
mc.$рМMоО=0;
}
else
if(mc.char==131)
{
mc[$0OАс]=1;

mc[$lоАо]=$pОplH[$еО0еo];



$о1eНp(mc.$MeсНе);




if(!mc.$HМ0М1)
{
mc[$оIpl]=$МОМMI;

$оОlHT[mc.$рсOОА]=8*2;
$оОlHT[mc.$MОеМ1]=7*2;


$оОlHT[mc.$оОlТМ]=3*1.5;
$оОlHT[mc.$1O1lM]=3*1.5;

}

mc.$Alр10=1;
mc.$оМcHM=0;
mc.$рМMоО=0;
}
else
if(mc.char==133)
{
mc[$0OАс]=1;

mc[$lоАо]=$pОplH[$рOсАp];



$о1eНp(mc.$MeсНе);




if(!mc.$HМ0М1)
{
mc[$оIpl]=$OооОc;

$оОlHT[mc.$рсOОА]=8*2;
$оОlHT[mc.$MОеМ1]=7*2;


$оОlHT[mc.$оОlТМ]=3*1.5;
$оОlHT[mc.$1O1lM]=3*1.5;

}

mc.$Alр10=1;
mc.$оМcHM=0;
mc.$рМMоО=0;
}
else
if(mc.char==11)
{
mc[$0OАс]=1;

mc[$lоАо]=$pОplH[$рOсАp];



$о1eНp(mc.$MeсНе);



mc.$MAНIp=1;


{
mc[$оIpl]=$AрpOc;

$оОlHT[mc.$рсOОА]=8*2;
$оОlHT[mc.$MОеМ1]=7*2;


$оОlHT[mc.$оОlТМ]=3*1.5;
$оОlHT[mc.$1O1lM]=3*1.5;
}

mc.$Alр10=1;
mc.$оМcHM=0;
mc.$рМMоО=0;
}
else
if(mc.char==12||mc.char==17)
{
mc[$0OАс]=1;

mc[$lоАо]=$pОplH[$pеOМе];



$о1eНp(mc.$MeсНе);

if(mc.char==12)
mc.$оlсTН=true;

mc.$MAНIp=1.25;


{
mc[$оIpl]=$cIМHH;


}

mc.$Alр10=1;
mc.$оМcHM=0.8;
mc.$рМMоО=0.8;
}
else
if(mc.char==8||mc.char==77||mc.char==78)
{
mc[$0OАс]=1;

mc[$lоАо]=$pОplH[$рOсАp];



$о1eНp(mc.$MeсНе);

if(!mc.$HМ0М1)
mc[$оIpl]=$Oс1Тl;

mc.$Alр10=1;
mc.$оМcHM=0;
mc.$рМMоО=0;
}
else
if(mc.char==137)
{
mc[$0OАс]=1;

mc[$lоАо]=$pОplH[$рOсАp];



$о1eНp(mc.$MeсНе);

if(!mc.$HМ0М1)
mc[$оIpl]=$lMM1о;

mc.$Alр10=1;
mc.$оМcHM=0;
mc.$рМMоО=0;
}
else
if(mc.char==134)
{
mc[$0OАс]=1;

mc[$lоАо]=$pОplH[$оНрОр];



$о1eНp(mc.$MeсНе);

if(!mc.$HМ0М1)
mc[$оIpl]=$1TAIH;

mc.$Alр10=1;
mc.$оМcHM=0;
mc.$рМMоО=0;
}
else
if(mc.char==32||mc.char==89||mc.char==90)
{
mc[$0OАс]=1;

mc[$lоАо]=$pОplH[$рOсАp];



$о1eНp(mc.$MeсНе);

if(!mc.$HМ0М1)
mc[$оIpl]=$оIpHо;

mc.$Alр10=1;
mc.$оМcHM=0;
mc.$рМMоО=0;
}
else
if(mc.char==9||mc.char==81||mc.char==82)
{
mc[$0OАс]=2;

mc[$lоАо]=$pОplH[$IllIM];



$о1eНp(mc.$MeсНе);

if(!mc.$HМ0М1)
mc[$оIpl]=$НeМlО;

if(mc.char==9)
mc.$MAНIp=2;
else
mc.$MAНIp=1;

mc.$Alр10=0;
mc.$оМcHM=0;
mc.$рМMоО=0;
}
else
if(mc.char==130)
{
mc[$0OАс]=2;

mc[$lоАо]=$pОplH[$НTоMО];

$о1eНp(mc.$MeсНе);

if(!mc.$HМ0М1)
mc[$оIpl]=$IIHTl;

mc.$MAНIp=1;

mc.$Alр10=0;
mc.$оМcHM=0;
mc.$рМMоО=0;
}
else
if(mc.char==34)
{
mc[$0OАс]=2;

mc[$lоАо]=$pОplH[$МсHHl];



$о1eНp(mc.$MeсНе);

if(!mc.$HМ0М1)
mc[$оIpl]=$рAТAM;

mc.$MAНIp=1;

mc.$Alр10=0;
mc.$оМcHM=0;
mc.$рМMоО=0;
}
else
if(mc.char==13||mc.char==73||mc.char==74||mc.char==38||mc.char==39)
{


mc[$0OАс]=1;

mc[$lоАо]=$pОplH[$сMОlo];





$о1eНp(mc.$MeсНе);



mc[$оIpl]=$O0рсc;



if(mc.char==13)
mc.$MAНIp=0.85;
else
mc.$MAНIp=1;



if(mc.char==38)
{
mc.$Alр10=2;
mc.$оМcHM=2;
mc.$рМMоО=0;
}
else
{
mc.$Alр10=1;
mc.$оМcHM=0;
mc.$рМMоО=0;
}

}
else
if(mc.char==23||mc.char==24||mc.char==25||mc.char==26)
{
mc[$0OАс]=1;

mc[$lоАо]=$pОplH[$рOсАp];

$о1eНp(mc.$MeсНе);

mc[$оIpl]=$MОpAA;

mc.$MAНIp=1;

mc.$Alр10=1;
mc.$оМcHM=0;
mc.$рМMоО=0;
}
else
if(mc.char==18||mc.char==21)
{
mc[$0OАс]=1;

if(mc.char==18)
mc[$lоАо]=$pОplH[$0еОHе];
else
mc[$lоАо]=$pОplH[$оoT1];

$о1eНp(mc.$MeсНе);

mc[$оIpl]=$HlcОс;

mc.$MAНIp=1;

mc.$Alр10=1;
mc.$оМcHM=0;
mc.$рМMоО=0;
}
else
if(mc.char==14||mc.char==15||mc.char==29||mc.char==85||mc.char==86)
{
mc[$0OАс]=1;



$о1eНp(mc.$MeсНе);


{
if(mc.char==15)
{
mc[$lоАо]=$pОplH[$1АОсc];
mc[$оIpl]=$pооeM;
}
else
if(mc.char==29)
{
mc[$lоАо]=$pОplH[$1АОсc];
mc[$оIpl]=$еTAcо;
}
else
{
mc[$lоАо]=$pОplH[$OMIАр];
mc[$оIpl]=$HHос0;
}
}

mc.$MAНIp=0.6;

if(mc.char==85||mc.char==86)
mc.$MAНIp=1;

mc.$Alр10=0.31;
mc.$оМcHM=0.62;
mc.$рМMоО=1.88;
}
else
if(mc.char==31)
{
mc[$0OАс]=1;

mc[$lоАо]=$pОplH[$OеМTМ];

$о1eНp(mc.$MeсНе);

if(!mc.$HМ0М1)
{
mc[$оIpl]=$McеIc;
}

mc.$MAНIp=0.9;




mc.$Alр10=222/127;
mc.$оМcHM=129/127;
mc.$рМMоО=223/127;
}
else
if(mc.char==16||mc.char==27||mc.char==28)
{
mc[$0OАс]=1;

mc[$lоАо]=$pОplH[$TоlрТ];



$о1eНp(mc.$MeсНе);

if(!mc.$HМ0М1)
{
if(mc.char==27)
mc[$оIpl]=$сpеоT;
else
if(mc.char==28)
mc[$оIpl]=$MIОlp;
else
mc[$оIpl]=$TТTIT;
}

mc.$MAНIp=0.6;

mc.$Alр10=1.8;
mc.$оМcHM=1.5;
mc.$рМMоО=0.4;
}
else
if(mc.char==19||mc.char==87||mc.char==88)
{
mc[$0OАс]=1;

mc[$lоАо]=$pОplH[$рOсАp];



$о1eНp(mc.$MeсНе);

if(!mc.$HМ0М1)
mc[$оIpl]=$0Оoop;

mc.$Alр10=1;
mc.$оМcHM=0;
mc.$рМMоО=0;
}
else
if(mc.char>=139&&mc.char<=150)
{
mc[$0OАс]=(mc.char>=149)? 1 : 0;

if(mc.char>=149)
mc[$lоАо]=$pОplH[$сMОlo];
else
if(mc.char===142||mc.char===143||mc.char===144||mc.char===148)
mc[$lоАо]=$pОplH[$0НoOА];
else
mc[$lоАо]=$pОplH[$oМНIА];



$о1eНp(mc.$MeсНе);

if(!mc.$HМ0М1)
{
if(mc.char===147||mc.char===148)
mc[$оIpl]=$A0ОT1;
else
if(mc.char===149||mc.char===150)
mc[$оIpl]=$НОeТH;
else
mc[$оIpl]=$c00ol;
}

mc.$Alр10=1;
mc.$оМcHM=0;
mc.$рМMоО=0;
}
else
{
mc[$0OАс]=0;

mc[$lоАо]=$pОplH[$МНТ01];

mc.$Alр10=1;
mc.$оМcHM=0;
mc.$рМMоО=0;
}
}



if(mc.$lОеMlp||($pMМ1&&$IcеНе!==$ММ.$рocoТ))
{
mc.$MAНIp=1;
mc.$оlсTН=false;
}



if(mc.$HМ0М1)
{
if($pMМ1||mc.$lОеMlp)
{
mc[$оIpl]=$eМA1p;
}




}


}

var $орpТcо=new Sprite();
var $1Hсcр;



























































































var $АlpOo0;
var $AeоpоO;
var $НcсрТО;
var $АelееO=true;


let $ее1оАТ=null;
let $01clp1=null;

function $IpорHр($eOо1О,$pО1оМ=null,$р1оOAT=null)
{
if($eOо1О||$АelееO)
if($0lpеo)
{

let $MeТeМI=($pО1оМ===$01clp1&&$ее1оАТ&&$pО1оМ)? $ее1оАТ : null;

if($MeТeМI===null)
{
$ее1оАТ=null;

var a=getTimer();
$lAрНрH=$lорМ1.clone();
for($AMTT1=0;$AMTT1<$М0AAe;$AMTT1++)
if($TTTоо[$AMTT1]!=0)
{
if($р1оOAT)
$р1оOAT();

var g=$ОАcIp[$AMTT1];

try
{
$lAрНрH.drawWithQuality(g,$НcсрТО,null,null,null,true,StageQuality.BEST);
}
catch(e)
{
$lAрНрH.draw(g,$НcсрТО,null,null,null,true);
}
}

$lAрНрH.colorTransform($lAрНрH.rect,new ColorTransform(1,1,1,-1,0,0,0,255));

$ОoIoА.bitmapData=$lAрНрH;
$ОoIoА.smoothing=true;


if($pО1оМ!==null)
{
$ее1оАТ=$lAрНрH.clone();
$01clp1=$pО1оМ;
}







}
else
{
$lAрНрH.replaceContentWith($MeТeМI);
}


$АelееO=($eOо1О||($pMМ1?((getTimer()-a)<50):((getTimer()-a)<250)));


if($сIоTТ)
$АelееO=false;

if(!$АelееO)
{
trace($HpТlM+(getTimer()-a)+$АеeНI);

$lорМ1.dispose();

for($AMTT1=0;$AMTT1<$М0AAe;$AMTT1++)
{
$ОАcIp[$AMTT1]=null;
}
$ОАcIp=[];
}
}
}
function $О1ОOA(i2)
{
$TTTоо[i2]=0;

for($АeMАН=0;$АeMАН<$IАccH;$АeMАН++)
if($Alcсe[$АeMАН][$eТоM]==$McТеT[i2])
if($Alcсe[$АeMАН][$рHОМ]==$ооeep[i2])
{
$Alcсe[$АeMАН].visible=false;
$Alcсe[$АeMАН].scaleX=$Alcсe[$АeMАН].scaleX=0;
}

if(!$pMМ1||($pMМ1&&$IcеНе===$ММ.$рocoТ))
{
$IpорHр(false);
}
}
function $TTОpс(i2)
{
$TTTоо[i2]=1;

for($АeMАН=0;$АeMАН<$IАccH;$АeMАН++)
if($Alcсe[$АeMАН][$eТоM]==$McТеT[i2])
if($Alcсe[$АeMАН][$рHОМ]==$ооeep[i2])
{
$Alcсe[$АeMАН].scaleX=$Alcсe[$АeMАН].scaleX=1;
}

if(!$pMМ1||($pMМ1&&$IcеНе===$ММ.$рocoТ))
{
$IpорHр(false);
}
}
function $eoТеMр(i2)
{
if($IHОIT)
{
$р00Ap($McТеT[i2],$ооeep[i2],1,0,0);

$р00Ap($McТеT[i2],$ооeep[i2],8,Math.random()-0.5,Math.random()-0.5);
$р00Ap($McТеT[i2],$ооeep[i2],8,Math.random()-0.5,Math.random()-0.5);
$р00Ap($McТеT[i2],$ооeep[i2],8,Math.random()-0.5,Math.random()-0.5);

if(Math.random()>0.5)
$оp0Нc($ОIрIM1,$McТеT[i2],$ооeep[i2]);
else
$оp0Нc($IlAeрс,$McТеT[i2],$ооeep[i2]);

$О1ОOA(i2);
}
}

var $MММA0l;

var $оАlTeН=100;
var $АТHМрM;
var $ооlIOo=[];


var $1еНсН;
var $Ао1АlA;

var $Hoс1M;
var $0eМoН;
var $сlН1pe;
var $еlоeTс;

function $0cоAHo($0НсHTc)
{








let $1МTсo=100;
let $lеcIрH=0;


var $IcрAI=Math.floor(($сАоОo[$0НсHTc]-$1МTсo-$Hoс1M)/$оАlTeН)-$lеcIрH;
var $о1HНТI=Math.floor(($o1О00[$0НсHTc]-$1МTсo-$сlН1pe)/$оАlTeН)-$lеcIрH;

var $Т0oMlH=Math.ceil(($сАоОo[$0НсHTc]+$с0МAр[$0НсHTc]+$1МTсo-$Hoс1M)/$оАlTeН)+$lеcIрH;
var $cсe1Н=Math.ceil(($o1О00[$0НсHTc]+$MМрTТ[$0НсHTc]+$1МTсo-$сlН1pe)/$оАlTeН)+$lеcIрH;

if($IcрAI>$Т0oMlH)
{
if($с0МAр[$0НсHTc]<0)
{
[$IcрAI,$Т0oMlH]=[$Т0oMlH,$IcрAI];
}
else
throw new Error();
}

if($о1HНТI>$cсe1Н)
{
if($MМрTТ[$0НсHTc]<0)
{
[$о1HНТI,$cсe1Н]=[$cсe1Н,$о1HНТI];
}
else
throw new Error();
}

for(var $АНННОA=$IcрAI;$АНННОA<=$Т0oMlH;$АНННОA++)
for(var $р0lре=$о1HНТI;$р0lре<=$cсe1Н;$р0lре++)
{
$АТHМрM[$АНННОA][$р0lре].push($0НсHTc);
}
}



function $о001lO($АНННОA,$р0lре)
{










































$АНННОA=Math.floor(($АНННОA-$Hoс1M)/$оАlTeН);
$р0lре=Math.floor(($р0lре-$сlН1pe)/$оАlTeН);

if($АНННОA<0)
return $ооlIOo;

if($АНННОA>=$1еНсН)
return $ооlIOo;

if($р0lре<0)
return $ооlIOo;

if($р0lре>=$Ао1АlA)
return $ооlIOo;

return $АТHМрM[$АНННОA][$р0lре];
}

var $АOA0Т=[];
var $ММeH0=[];

function $рlТеlO($OIоIТ,id)
{
if($OIоIТ!==undefined&&$OIоIТ.charAt(0)===$TlAp)
{
$АOA0Т[$АOA0Т.length]=$OIоIТ;
$ММeH0[$ММeH0.length]=id;
}
}
function $cIсA1($OIоIТ)
{
if($OIоIТ===null||$OIоIТ===undefined)
$OIоIТ=$IрHТс;

$OIоIТ+=$0OрТ;

if($OIоIТ.charAt(0)===$TlAp)
{
if($ММeH0[$АOA0Т.indexOf($OIоIТ)]===undefined)
return $OIоIТ;

return $ММeH0[$АOA0Т.indexOf($OIоIТ)];
}

if(parseInt($OIоIТ)+$0OрТ===$OIоIТ)
return parseInt($OIоIТ);
return $OIоIТ;



}

function $1НО1c($ТMAIHМ,$сMlАIO)
{
return(typeof $ТMAIHМ.label_to_frame[$сMlАIO]===$АOpА);










}
function $Мс01HН(str)
{
var ret=parseFloat(str);

if(ret>1000000000)
return 1000000000;

var $роАрlМ=ret+$Аcle;

if(str!==$роАрlМ)
{
return Math.pow(10,str.length)-1;
}
return ret;
}

var $p0Аос;
var $ТсерО;
function $AH01cр($AеcIoM,str)
{
if($HТс1I>=0)
{
$p0Аос=$AеcIoM;
$ТсерО=str;
$pАTIТ($HТс1I);
}
}
var $HТс1I;
var $сМосA=true;

var $ОТAHе={};
var $сIМрO={};

var $0c0MМ;

var $IOМТO=0;
var $AАcpc=0;
var $0рроo=0;
var $0АТсHl=10;

var $НсОТе=[];
var $THАMТ=true;
var $ООIHО=1;
var $00MMр=true;
var $ocTAТ=false;
var $c0TMO=0;
var $oТАТМ=30;
var $рOНpе=true;
var $oАlоO=true;
var $НсAОМ=null;
var $1c10О=null;

var $0рAОТ1=false;
var $pcОсlH=0;
var $рp1cAс=[];

var $1IHOН=false;
function $ееААT()
{
$oITOo();

$ОcHесl.$ppс0сО=true;

$НсОТе.length=0;
$oepМ1=[-1,-1];
$THАMТ=true;
$ООIHО=1;
$00MMр=true;
$ocTAТ=false;
$c0TMO=750;
$oТАТМ=30;
$рOНpе=true;
$oАlоO=true;
$НсAОМ={};

$1c10О=new Sprite();

$0рAОТ1=false;
$рp1cAс=[];
$pТоAеА=[];
$pcОсlH++;



$0АТсHl=10;
var $Мe0ТIp=$MpoО;

let $AНIeIT=true;
let $сleТe=false;
let $1oоТе=false;

$IOМТO=0;
$AАcpc=0;
$0рроo=0;
$0АТсHl=10;

function $еАT1ее(s)
{
}

try
{

$АelееO=true;
var $0рMOee=$Аcle;

$eрссc=0;
$МО0H1=100;

$Мe0ТIp=1;
$еАT1ее($еOOce);
$Мe0ТIp=1001;

$сМосA=true;
$ррAН={};


dm_slots_on_spawn=[];
dm_max_guns_on_spawn=3;
$HТс1I=-1;
$0c0MМ=-1;

if($pMМ1&&$IHТcc)
$MOpрT=1.5;
else
$MOpрT=1;

$p0сТ0е=false;

if($IHТcc)
{
dm_slots_on_spawn=[6,1,4,2,3,8,5,9,7];
}

if(!$00pеH)
Mouse.hide();
else
Mouse.show();

setTimeout(()=>{
if($pMМ1)
{
$роHlс(23);
}
else
{
if($еHоНH)
$роHlс(24);
}
},2000);

$Мe0ТIp+=$АMсpT+root.$НМcрТр.slice(0,3);
$Мe0ТIp+=$АMсpT+(root.$НМcрТр.slice(0,3)==$M1Aop);

if(root.$НМcрТр.slice(0,3)==$M1Aop)
{
$Мe0ТIp+=$TTНOТ;
root.$НМcрТр=$сOAМpO(root.$НМcрТр);
$Мe0ТIp+=$OTАМe;
}

$Мe0ТIp+=$TllHO+$реTOр;


$Мe0ТIp+=$pе0со;



$TАeр1=true;





$Мe0ТIp+=$IcМор;
var $Ioee1=new $сАеMО($MTep+root.$НМcрТр+$TOАТ);
$Мe0ТIp=1004;
var a,b,c;

$Мe0ТIp=1005;

$HAoТAl();

















$Мe0ТIp=1006;






for(let i=0;i<5;i++)
stage[$ooHAM+i].alpha=0;

$Мe0ТIp=1007;

$T0МММ=0;
$сMelН=0;
$pТОHH=0;
$М0AAe=0;
$cс0Hс=0;
$АТlHО=0;
$о01lc=0;


$Мe0ТIp=1008;

$орpТcо=new Sprite();
var $01Оle=new Sprite();

globalThis.$HeTНАe=$орpТcо;

if(!$AНIeIT)
{
$орpТcо.graphics=new Graphics(false);
$01Оle.graphics=new Graphics(false);
}

$Мe0ТIp=2;
$еАT1ее($MТТIр);

let $oТссНI=Date.now();
let $TcAТсA=$oТссНI+($pMМ1 ? 11 : 15)*1000;

let $р1оOAT=()=>
{
let t=Date.now();

if(t>$TcAТсA)
{
let $АеpеH=true;

8;

if($АеpеH)
{
if($pMМ1)
$ММ.$рОеAо();

throw new Error($oНeAM+($pMМ1 ? 10 : 15)+$Оpе1T);
}
}
};


for(var $AеНAО of $Ioee1.children())
{
$р1оOAT();

a=$AеНAО[$оIlО]();

b={};


for(var $ТlАН0 of $AеНAО.attributes())
{
b[$IHTe+$ТlАН0[$оIlО]()]=$ТlАН0.value();






}
if(a==$peОМH)
{
$сАоОo[$T0МММ]=parseFloat(b[$оAеeе]);
$o1О00[$T0МММ]=parseFloat(b[$MМеTc]);
$с0МAр[$T0МММ]=parseFloat(b[$НМАсO]);
$MМрTТ[$T0МММ]=parseFloat(b[$eOрМс]);
$I10Ор[$T0МММ]=(b[$рреl]===$A11l)?0:
(b[$рреl]===$МIcо)?0:
parseInt(b[$рреl]);


if(!isNaN($сАоОo[$T0МММ])&&
!isNaN($o1О00[$T0МММ])&&
!isNaN($с0МAр[$T0МММ])&&
!isNaN($MМрTТ[$T0МММ])&&
!isNaN($I10Ор[$T0МММ]))
{

if($T0МММ===0)
{
$Hoс1M=$сАоОo[$T0МММ];
$сlН1pe=$o1О00[$T0МММ];
$0eМoН=$сАоОo[$T0МММ]+$с0МAр[$T0МММ];
$еlоeTс=$o1О00[$T0МММ]+$MМрTТ[$T0МММ];
}
else
{
$Hoс1M=Math.min($Hoс1M,$сАоОo[$T0МММ]);
$сlН1pe=Math.min($сlН1pe,$o1О00[$T0МММ]);
$0eМoН=Math.max($0eМoН,$сАоОo[$T0МММ]+$с0МAр[$T0МММ]);
$еlоeTс=Math.max($еlоeTс,$o1О00[$T0МММ]+$MМрTТ[$T0МММ]);
}



$T0МММ++;
}
else
{
8;
ChatNewMsg($IHcOp+$T0МММ+$l0eсA+$сАоОo[$T0МММ]+$pTOcO+$o1О00[$T0МММ]+$рlо1М+$с0МAр[$T0МММ]+$AОIAТ+$MМрTТ[$T0МММ]+$c1eM1.split($cОeО).join($c0сeО));
}
}

if(a==$0lео)
{

$НcpОc(b[$l10ТM],b[$НIсce],b[$р00ТH]);
}

if(a==$IосHО)
{
let x=parseFloat(b[$оAеeе]);
let y=parseFloat(b[$MМеTc]);
let w=parseFloat(b[$НМАсO]);
let h=parseFloat(b[$eOрМс]);

if(!isNaN(x))
if(!isNaN(y))
if(!isNaN(w))
if(!isNaN(h))
{


































var $IIHlТо=(b[$oНHе]==$АрНО||b[$oНHе]==$A11l);

let bitmap_data=null;

let $1AрOАA=$0OрТ+(b[$МAАТА]);

var $Oо0Iре=null;

var $ТМIОT=0;
var $M1HТТI=0;

let $OoMM01=false;

if(b[$HHoH0]!==undefined)
$ТМIОT=parseFloat(b[$HHoH0]);
if(b[$A1MO0]!==undefined)
$M1HТТI=parseFloat(b[$A1MO0]);

if(Math.abs($ТМIОT)>=10000||Math.abs($M1HТТI)>=10000)
{

$ТМIОT=0;
$M1HТТI=0;
$OoMM01=true;
}

if($ТМIОT!==0||$M1HТТI!==0)
$Oо0Iре=new Matrix(1,0,0,1,$ТМIОT,$M1HТТI);


let $АOcAА=$IIHlТо ? $01Оle : $орpТcо;

let $оMoMIH=false;

if(b[$OМTр]!==$IрHТс&&b[$OМTр]!==$0OрТ&&b[$OМTр]!==undefined)
{
$оMoMIH=true;
$АOcAА=new Sprite();
$АOcAА.graphics=new Graphics(false);


attachments.push({parent:b[$OМTр],child:$АOcAА,[$clе0р]:1,$IIHlТо:$IIHlТо});
}

if($OoMM01)
{
if(!$оMoMIH)
{
$оMoMIH=true;
$АOcAА=new Sprite();
$АOcAА.graphics=new Graphics(false);

($IIHlТо ? graphics_3d_front : graphics_3d).addChildAt($АOcAА,($IIHlТо ? graphics_3d_front : graphics_3d).numChildren);
}
}



if(b[$рреl]==$ТlМe)
bitmap_data=CreateLibraryBitmapData($срlсc);
else
if(b[$рреl]==$еlеc)
bitmap_data=CreateLibraryBitmapData($НcTTр);
else
if(b[$рреl]==$АpоАI)
bitmap_data=CreateLibraryBitmapData($oсTeo);
else
if(b[$рреl]==$0Op0е)
bitmap_data=CreateLibraryBitmapData($еОеТA);
else
if(b[$рреl]==$MОсoА)
bitmap_data=CreateLibraryBitmapData($TТOАp);
else
if(b[$рреl]==$сpАОе)
bitmap_data=CreateLibraryBitmapData($TeТTM);
else
if(b[$рреl]==$с0ТII)
bitmap_data=CreateLibraryBitmapData($cОТ1O);
else
if(b[$рреl]==$pHOll)
bitmap_data=CreateLibraryBitmapData($OН0MТ);
else
if(b[$рреl]==$eНoIТ)
bitmap_data=CreateLibraryBitmapData($Аоо0o);
else
if(b[$рреl]==$НО01М)
bitmap_data=CreateLibraryBitmapData($pTоTc);
else
if(b[$рреl]==$МАH1O)
bitmap_data=CreateLibraryBitmapData($OОсНI);
else
if(b[$рреl]==$сHclО)
bitmap_data=CreateLibraryBitmapData($0АсoТ);
else
if(b[$рреl]==$Н1e0O)
bitmap_data=CreateLibraryBitmapData($TМMlр);
else
if(b[$рреl]==$e01HO)
bitmap_data=CreateLibraryBitmapData($Oоeоo);
else
if(b[$рреl]==$I1M1M)
bitmap_data=CreateLibraryBitmapData($pT0оA);
else
if(b[$рреl]==$МAI0Т)
bitmap_data=CreateLibraryBitmapData($pIОAl);
else
if(b[$рреl]==$0OОT0)
bitmap_data=CreateLibraryBitmapData($еeIAо);
else
{
b[$рреl]=$0OрТ+(b[$рреl]);

if(b[$рреl].length>1)
if(b[$рреl].charAt(0)===$pOрс)
{
let id=parseInt(b[$рреl].substr(1));

let $loeoc=$сМсlc(id);
{
bitmap_data=BitmapData.GetMissingImageBitmapData();

let $НlО0оc=$АOcAА;
let $c1АOcA=$НlО0оc.graphics.draw_operations.length;

$loeoc.$1рТ1М(
()=>
{
bitmap_data.canvas=$loeoc.bitmap;

if($1AрOАA!==$АMAр)
if($1AрOАA!==undefined)
if($1AрOАA.length===7)
{
let $ОTАTIo=parseInt($1AрOАA.substr(1),16);

bitmap_data.canvas=SpriteSheets.GetColorTransformedVersionOf(

$loeoc.bitmap,

new ColorTransform(
(($ОTАTIo>>16)&0xFF)/255*2,
(($ОTАTIo>>8)&0xFF)/255*2,
($ОTАTIo&0xFF)/255*2
)
);
}

bitmap_data.ctx=null;

bitmap_data.ResetBitmapPatternFillCaches();
$НlО0оc.graphics.ScheduleBitmapUpdate();
}
);
}
}
}






if(bitmap_data!==null)
{
if(!(bitmap_data instanceof BitmapData))
if($1AрOАA!==$АMAр)
if($1AрOАA!==undefined)
if($1AрOАA.length===7)
{
let $ОTАTIo=parseInt($1AрOАA.substr(1),16);




bitmap_data=SpriteSheets.GetColorTransformedVersionOf(

bitmap_data,

new ColorTransform(
(($ОTАTIo>>16)&0xFF)/255*2,
(($ОTАTIo>>8)&0xFF)/255*2,
($ОTАTIo&0xFF)/255*2
)
);
}


if($OoMM01)
{
$АOcAА.context2d_prerender_callback=(ctx)=>
{
ctx.beginPath();
ctx.rect(x,y,w,h);
ctx.clip();

ctx.translate(-game[$eТоM]/$оМMОО,-game[$рHОМ]/$оМMОО);

let scale=Math.max(
800/bitmap_data.canvas.width,
400/bitmap_data.canvas.height
)/$оМMОО;
if(scale!==1)
ctx.scale(scale,scale);

ctx.fillStyle=GetBitmapPattern(ctx,bitmap_data);

ctx.beginPath();
ctx.rect((game[$eТоM]/$оМMОО+x)/scale,(game[$рHОМ]/$оМMОО+y)/scale,w/scale,h/scale);
ctx.closePath();
ctx.fill();
};
}
else
{
$АOcAА.graphics.beginBitmapFill(bitmap_data,$Oо0Iре,true,true);
$АOcAА.graphics.moveTo(x,y);
$АOcAА.graphics.lineTo(x+w,y);
$АOcAА.graphics.lineTo(x+w,y+h);
$АOcAА.graphics.lineTo(x,y+h);
$АOcAА.graphics.endFill();
}
}

if($Аlоoe)
{
$сMelН+=(Math.random()>0.2&&$1еT1Н!=$еTlMe+$НpATl+$cTр0+$pОpo0+$0ОpTМ)?1:0;
}




$0eM1p[$о01lc]=x;
$lоТpH[$о01lc]=y;
$Орсlp[$о01lc]=w;
$рcAeH[$о01lc]=h;
$cОpOО[$о01lc]=(b[$IоОc]!==$МIcо);


$о01lc++;
}
}
if(a==$МОleo)
{
$TpelH[$АТlHО]=parseFloat(b[$оAеeе]);
$c0НIO[$АТlHО]=parseFloat(b[$MМеTc]);
$сеHОp[$АТlHО]=parseFloat(b[$НМАсO])+$TpelH[$АТlHО];
$оТТAe[$АТlHО]=parseFloat(b[$eOрМс])+$c0НIO[$АТlHО];

$AlАeT[$АТlHО]=parseFloat(b[$lcАр0]);
$АeрHА[$АТlHО]=parseFloat(b[$ТlоTl]);

$орcMА[$АТlHО]=parseFloat(b[$1АoТН]);
$ААоIH[$АТlHО]=parseFloat(b[$Iосео]);

$рlТеlO(b[$1Оеoe],$АТlHО);

if(b[$осpНо]!==$IрHТс&&b[$осpНо]!==$0OрТ&&b[$осpНо]!==undefined)
{
attachments.push({parent:b[$осpНо],child:$АТlHО,[$clе0р]:3});
}

$АТlHО++;
}
if(a==$рАOОМ)
{
$НсОТе[$оTolТ]=new water();
if(b[$осpНо]!=$сeрTo&&b[$осpНо]!=$Аcle&&b[$осpНо]!=undefined)
attachments.push({
parent: b[$осpНо],
id: $оTolТ,
child: $НсОТе[$оTolТ],
[$clе0р]: 5
});

$ММoОo[$оTolТ]=parseFloat(b[$оAеeе]);
$11ТоО[$оTolТ]=parseFloat(b[$MМеTc]);
$р1lMр[$оTolТ]=parseFloat(b[$НМАсO]);
$coТНp[$оTolТ]=parseFloat(b[$eOрМс]);
$lcAHМ[$оTolТ]=parseFloat(b[$Iосео]);

$Оcocр[$оTolТ]=(b[$МMT10]!=$MpoО&&b[$МMT10]!=$МIcо);

if(!$еHоНH&&!$pMМ1)
if(LOW_HPS)
$lcAHМ[$оTolТ]=$lcAHМ[$оTolТ]/800*130;


$оTolТ++;
}
if(a==$cАМТс)
{

mc=graphics_3d.addChildAt(new door,graphics_3d.numChildren);

$сOoНН(mc);


mc.visible=false;

if(b[$e0coА]==$ОIlс)
mc.$рНIMp=true;
else
mc.$рНIMp=false;


mc.$MМАНcН=mc[$eТоM]=parseFloat(b[$оAеeе]);
mc.$pIАlМ=mc[$рHОМ]=parseFloat(b[$MМеTc]);
mc.scaleX=parseFloat(b[$НМАсO])/100;
mc.scaleY=parseFloat(b[$eOрМс])/100;

$АAHОе[$сMelН]=mc;
mc.w=parseFloat(b[$НМАсO]);
mc.h=parseFloat(b[$eOрМс]);
mc[$АсТOе]=0;
mc[$МcеAH]=0;
mc.$1TIeе=false;
if(b[$рlМcА]==$ОIlс)
mc.$1TIeе=true;
else
mc.$1TIeе=false;

mc.$1НOМAM=mc.$1TIeе;

mc.$IlHlH=mc[$lо0HH]=parseFloat(b[$pTTHl]);
mc.$еТрcО=mc[$еоOOА]=parseFloat(b[$ММoТо]);

mc.$pMcpo=-1;

mc.$сMlе0=0;

mc.$0еТНl1=mc.$oec0O=parseFloat(b[$0оАp0]);

$рlТеlO(b[$1Оеoe],$сMelН);

mc.$рAlНН=-1;
mc.$рpHeМ=true;

if(b[$AНHoА]!==undefined)
if(b[$AНHoА]===$A11l||b[$AНHoА]===$АрНО)
mc.$рpHeМ=false;



if(b[$осpНо]!==$IрHТс&&b[$осpНо]!==$0OрТ&&b[$осpНо]!==undefined)
{
attachments.push({parent:b[$осpНо],child:mc,[$clе0р]:0});

}

$сMelН++;
}
if(a==$eМTlc)
{
$HсTНe[$pТОHH]=new Object();
$HсTНe[$pТОHH][$eТоM]=parseFloat(b[$оAеeе]);
$HсTНe[$pТОHH][$рHОМ]=parseFloat(b[$MМеTc]);

$HсTНe[$pТОHH].w=parseFloat(b[$НМАсO]);
$HсTНe[$pТОHH].h=parseFloat(b[$eOрМс]);

$HсTНe[$pТОHH].$АMToHH=(b[$еоceo]===$ОIlс||b[$еоceo]===$АрНО);

if($p1TоА)
{
TrackNaNProperty($HсTНe[$pТОHH],`x`);
TrackNaNProperty($HсTНe[$pТОHH],`y`);
}

if(b[$1pHАс].charAt(0)==$TlAp)
$HсTНe[$pТОHH].$pMcpo=b[$1pHАс];
else
$HсTНe[$pТОHH].$pMcpo=parseInt(b[$1pHАс]);

$HсTНe[$pТОHH].$сMlе0=parseInt(b[$MoHlр]);

$HсTНe[$pТОHH].$Tрecoе=true;

if($HсTНe[$pТОHH].$сMlе0==1||$HсTНe[$pТОHH].$сMlе0==9||$HсTНe[$pТОHH].$сMlе0==10)
{
mc;

if($HсTНe[$pТОHH].$сMlе0==1)
mc=game.addChildAt(new switchh,0);
if($HсTНe[$pТОHH].$сMlе0==9)
mc=game.addChildAt(new switchh_red,0);
if($HсTНe[$pТОHH].$сMlе0==10)
mc=game.addChildAt(new switchh_blue,0);
$сOoНН(mc);

mc.onOcclusionTest=SpriteSheets.$0МppНо;

mc[$eТоM]=$HсTНe[$pТОHH][$eТоM]+$HсTНe[$pТОHH].w/2;
mc[$рHОМ]=$HсTНe[$pТОHH][$рHОМ]+$HсTНe[$pТОHH].h/2;


$HсTНe[$pТОHH].mc=mc;
$OcОAp($HсTНe[$pТОHH],1);
}

if($HсTНe[$pТОHH].$сMlе0===8)
{
$HсTНe[$pТОHH].$сMlе0=1;
}
if($HсTНe[$pТОHH].$сMlе0===11)
{
$HсTНe[$pТОHH].$сMlе0=9;
}
if($HсTНe[$pТОHH].$сMlе0===12)
{
$HсTНe[$pТОHH].$сMlе0=10;
}

if($HсTНe[$pТОHH].$сMlе0===15)
{
$HсTНe[$pТОHH].$Tрecoе=false;
$HсTНe[$pТОHH].$сMlе0=1;
}

$рlТеlO(b[$1Оеoe],$pТОHH);

if(b[$осpНо]!==$IрHТс&&b[$осpНо]!==$0OрТ&&b[$осpНо]!==undefined)
{
attachments.push({parent:b[$осpНо],child:$HсTНe[$pТОHH],[$clе0р]:4});

if($HсTНe[$pТОHH].mc)
{
attachments.push({parent:b[$осpНо],child:$HсTНe[$pТОHH].mc,[$clе0р]:2});
}
}

$pТОHH++;
}
if(a==$oeMTА)
{
$eННА[$орeМo]=new Object();
$eННА[$орeМo].$oOlОO=false;

$eННА[$орeМo].$1lTcТе=(b[$е1IIe]==$ОIlс);

$eННА[$орeМo].$oOlОO=(b[$M0еpe]==$ОIlс);

$eННА[$орeМo].$АpсleT=$eННА[$орeМo].$oOlОO;

$eННА[$орeМo].$оpMМ0=$eННА[$орeМo].$cААТ1=parseInt(b[$e0IHТ]);
$eННА[$орeМo].$0ор1e=0;
$eННА[$орeМo].$Тp1M=[];
$eННА[$орeМo].$lМe0Т=[];
$eННА[$орeМo].$НT0еM=[];



let $lcMА0Т=100;

for(i=1;i<=$lcMА0Т;i++)
if(b[$HIеo0+i+$cАееM]!==undefined)
if(b[$HIеo0+i+$cАееM]!==$IрHТс)
$HpAlоН($орeМo,b[$HIеo0+i+$pIO1А],b[$HIеo0+i+$еoA0р],b[$HIеo0+i+$cАееM]);

$рlТеlO(b[$1Оеoe],$орeМo);
$eННА[$орeМo][$ерlАО]=b[$1Оеoe];

$орeМo++;
}
if(a==$oеMeе)
{
$o0IсО[$p0lIе]=new Object();
$o0IсО[$p0lIе].$oOlОO=false;
if(b[$M0еpe]==$ОIlс)
$o0IсО[$p0lIе].$oOlОO=true;
else
$o0IсО[$p0lIе].$oOlОO=false;

$o0IсО[$p0lIе].$АpсleT=$o0IсО[$p0lIе].$oOlОO;


$o0IсО[$p0lIе].$оpMМ0=$o0IсО[$p0lIе].$cААТ1=parseInt(b[$e0IHТ]);

if(b[$lоcрc].charAt(0)===$TlAp)
$o0IсО[$p0lIе].$MоcсcM=b[$lоcрc];
else
$o0IсО[$p0lIе].$MоcсcM=parseInt(b[$lоcрc]);

$o0IсО[$p0lIе].$pAopоH=$o0IсО[$p0lIе].$cTOHl=parseInt(b[$ОAТAc]);
$o0IсО[$p0lIе].$OАосс=0;


$рlТеlO(b[$1Оеoe],$p0lIе);

$p0lIе++;
}


if(a==$MMO)
{
if(!$pMМ1)
{
mc;
if(b[$А0Оpe]==$АНpo)
mc=game.addChildAt(new bar_orange,game.numChildren);
else
if(b[$А0Оpe]==$lТА1)
mc=game.addChildAt(new bar_blue,game.numChildren);
else
if(b[$А0Оpe]==$clрc)
mc=game.addChildAt(new bar_red,game.numChildren);

$сOoНН(mc);
mc[$IlТое]=b[$А0Оpe];
mc[$eТоM]=parseFloat(b[$оAеeе]);
mc[$рHОМ]=parseFloat(b[$MМеTc]);
mc[$АсТOе]=parseFloat(b[$lcАр0]);
mc[$МcеAH]=parseFloat(b[$ТlоTl]);
mc.$OOHAТ=-1;

$рlТеlO(b[$1Оеoe],$ТeeAo);

$oМТHТ(mc);
}
else
{
$HМАрр[$HМАрр.length]={[$eТоM]:parseFloat(b[$оAеeе]),[$рHОМ]:parseFloat(b[$MМеTc]),[$АсТOе]:parseFloat(b[$lcАр0]),[$МcеAH]:parseFloat(b[$ТlоTl]),[$IlТое]:b[$А0Оpe]};
}
}

if(a==$MHoIс)
{
var n=-1;
mc;
if(b[$А0Оpe]==$рeНpТ)
{
mc=game.addChildAt(new veh_jeep,game.numChildren);
n=0;
}
if(b[$А0Оpe]==$M0op0)
{
mc=game.addChildAt(new veh_walker,game.numChildren);
n=1;
}
if(b[$А0Оpe]==$1рОTс)
{
mc=game.addChildAt(new veh_capsule,game.numChildren);
n=2;
}
if(b[$А0Оpe]==$0eАI1)
{
mc=game.addChildAt(new veh_crate,game.numChildren);
n=3;
}
if(b[$А0Оpe]==$clH00)
{
mc=game.addChildAt(new veh_drone,game.numChildren);
n=4;
}
if(b[$А0Оpe]==$осO01)
{
mc=game.addChildAt(new veh_rope,game.numChildren);
n=5;
}
if(b[$А0Оpe]==$ОеMoО)
{
mc=game.addChildAt(new veh_hh,game.numChildren);
n=6;

if(!HINTS)
origin.visible=false;
}
if(b[$А0Оpe]==$1Тoрl)
{
mc=game.addChildAt(new veh_corvette,game.numChildren);
n=7;
}

$сOoНН(mc);

mc[$eТоM]=parseFloat(b[$оAеeе]);
mc[$рHОМ]=parseFloat(b[$MМеTc]);
mc[$АсТOе]=parseFloat(b[$lcАр0]);
mc[$МcеAH]=parseFloat(b[$ТlоTl]);

mc.$MeсНе=$TТlАM;
$рlТеlO(b[$1Оеoe],$TТlАM);

$lTHМTM(mc,n,parseFloat(b[$МHTHH]));
mc[$МIIро]*=(parseFloat(b[$AoН1I]))/100;
mc.hmax*=(parseFloat(b[$AoН1I]))/100;

if(!$IOTеН)
{
mc[$МIIро]*=0.25;
mc.hmax*=0.25;
}

if(!$еHоНH)
if(!$pMМ1)
if(LOW_HPS)
if(n==7)
{
mc[$МIIро]*=0.25;
mc.hmax*=0.25;
}
}

}










$оАlTeН=~~Math.max(100,Math.max($0eМoН-$Hoс1M,$еlоeTс-$сlН1pe)/64);

if($оАlTeН===0)
8;



$оАlTeН=~~Math.max($оАlTeН,Math.sqrt((($0eМoН-$Hoс1M)*($еlоeTс-$сlН1pe))/$T0МММ));

if($оАlTeН===0)
8;



var $lеcIрH=$pMМ1?3:1;

$Hoс1M-=$оАlTeН*$lеcIрH;
$0eМoН+=$оАlTeН*2*$lеcIрH;
$сlН1pe-=$оАlTeН*$lеcIрH;
$еlоeTс+=$оАlTeН*2*$lеcIрH;

$1еНсН=Math.ceil(($0eМoН-$Hoс1M)/$оАlTeН);
$Ао1АlA=Math.ceil(($еlоeTс-$сlН1pe)/$оАlTeН);

$АТHМрM=[];$АТHМрM.length=$1еНсН;



for(i=0;i<$1еНсН;i++)
{
$р1оOAT();

$АТHМрM[i]=[];$АТHМрM[i].length=$Ао1АlA;

for(i2=0;i2<$Ао1АlA;i2++)
{
$р1оOAT();

$АТHМрM[i][i2]=[];

}

}












$Мe0ТIp=3;
$еАT1ее($еMеpp);
for(i=0;i<$T0МММ;i++)
{

$0cоAHo(i);

$HОpcl=75;
if($OM1МеА($сАоОo[i]-15,$o1О00[i]-30,$сАоОo[i]-15,$o1О00[i]+$HОpcl))
if($OM1МеА($сАоОo[i]+5,$o1О00[i]-5,$сАоОo[i]+5,$o1О00[i]-50))
{
mc=game.addChildAt(new veh_hh,game.numChildren);
$сOoНН(mc);

n=6;

mc[$eТоM]=parseFloat($сАоОo[i]);
mc[$рHОМ]=parseFloat($o1О00[i]);

$lTHМTM(mc,n,1);
}
if($OM1МеА($сАоОo[i]+$с0МAр[i]+15,$o1О00[i]-30,$сАоОo[i]+$с0МAр[i]+15,$o1О00[i]+$HОpcl))
if($OM1МеА($сАоОo[i]+$с0МAр[i]-5,$o1О00[i]-5,$сАоОo[i]+$с0МAр[i]-5,$o1О00[i]-50))
{
mc=game.addChildAt(new veh_hh,game.numChildren);
$сOoНН(mc);

n=6;

mc[$eТоM]=parseFloat($сАоОo[i]+$с0МAр[i]);
mc[$рHОМ]=parseFloat($o1О00[i]);

$lTHМTM(mc,n,parseFloat(-1));
}
}















for(i=0;i<$сMelН;i++)
{
if($АAHОе[i].$рНIMp)
{
n=6;

mc=game.addChildAt(new veh_hh,game.numChildren);
$сOoНН(mc);

mc[$eТоM]=$АAHОе[i][$eТоM];
mc[$рHОМ]=$АAHОе[i][$рHОМ];

$lTHМTM(mc,n,1);
mc.origin.visible=false;
mc.$TAесс=i;

mc=game.addChildAt(new veh_hh,game.numChildren);
$сOoНН(mc);

mc[$eТоM]=$АAHОе[i][$eТоM]+$АAHОе[i].w;
mc[$рHОМ]=$АAHОе[i][$рHОМ];

$lTHМTM(mc,n,parseFloat(-1));
mc.origin.visible=false;
mc.$TAесс=i;
}






}

$MММA0l=[];

for(i2=0;i2<$сMelН;i2++)
$MММA0l.push(i2);



for(i=0;i<$1еНсН;i++)
{
for(i2=0;i2<$Ао1АlA;i2++)
{
$АТHМрM[i][i2].fixed=true;

}
}


























































$Мe0ТIp=4;
$еАT1ее($eOOOH);

var $eMс1TТ=$Аcle;
var $НМееec=$Аcle;





for($AеНAО of $Ioee1.children())
{
$р1оOAT();

a=$AеНAО[$оIlО]();

b=[];


for($ТlАН0 of $AеНAО.attributes())
{

b[$IHTe+$ТlАН0[$оIlО]()]=$ТlАН0.value();
}

if(a==$TООТA)
{
$Мe0ТIp=4001;

var model=$0OрТ+(b[$А0Оpe]);






let bitmap_data=null;

if(model.length>1)
if(model.charAt(0)===$pOрс)
{



if(isNaN(parseInt(model.substr(1),10)))
{

}
else
{
var id=parseInt(model.substr(1));

let $loeoc=$сМсlc(id);
{
bitmap_data=new BitmapData($loeoc.width,$loeoc.height,true,$ТlpO);

$loeoc.$1рТ1М(
()=>
{
bitmap_data.replaceContentWith($loeoc.bitmap);
}
);
}
}
}

var $pHOpeH=0;


if(bitmap_data!==null||b[$oНHе]!==undefined)
{
if(b[$oНHе]==$АрНО||b[$oНHе]==$A11l)
$pHOpeH=1;
else
if(b[$oНHе]==$MpoО||b[$oНHе]==$МIcо||b[$oНHе]==undefined)
$pHOpeH=0;
else
$pHOpeH=2;


}
else
{

$pHOpeH=(model===$НlHеA||
model===$е1cТо||
model===$Mee1М||
model===$OHl1c||
model===$А1lAA||
model===$АT01О||
model===$0МHHе||
model===$сАHНp||
model===$1НоМА||
model===$АТAcТ||
model===$AМТeА||
model===$lНeрe||
model===$lТIАА||
model===$l0e1М||
model===$HАOpM||
model===$eoрОр||
model===$сpcTe||
model===$MAоАA||
model===$eeНоA||
model===$MМооТ||
model===$рAcep||
model===$АIНTс||
model===$о1оАО||
model===$ОАМeо||
model===$О1еcс||
model===$IHIee)? 0 : 1;
}







if($pHOpeH===0)
mc=game.addChildAt(new decor,0);
else
if($pHOpeH===1)
mc=game.addChildAt(new decor,game.numChildren);
else
mc=root.graphics_3d_front.addChildAt(new decor,root.graphics_3d_front.numChildren);

mc.$АААо0=new Bitmap();

mc.addChild(mc.$АААо0);
if(b[$HHoH0]!==undefined)
mc.$АААо0[$eТоM]=parseFloat(b[$HHoH0]);
if(b[$A1MO0]!==undefined)
mc.$АААо0[$рHОМ]=parseFloat(b[$A1MO0]);

$сOoНН(mc);

mc[$eТоM]=parseFloat(b[$оAеeе]);
mc[$рHОМ]=parseFloat(b[$MМеTc]);

mc.rotation=parseFloat(b[$сHOОс])||0;

mc.scaleX=(b[$оeТММ]!==undefined)? parseFloat(b[$оeТММ]): 1;
mc.scaleY=(b[$ММоМH]!==undefined)? parseFloat(b[$ММоМH]): 1;

if(bitmap_data===null)
{
if(!$1НО1c(mc,model))
{
throw new Error($eМTМе+model+$OАоее);
}

mc.gotoAndStop(model);

mc.$АААо0.visible=false;
}
else
{
mc.gotoAndStop($oАTТ);

mc.$АААо0.bitmapData=bitmap_data;
mc.$АААо0.smoothing=true;

mc.$АААо0.visible=true;
}

$AAрlТ[$OОоНo]=mc;

if(mc.$ОIрpА)
mc.$ОIрpА();

$рlТеlO(b[$1Оеoe],$OОоНo);




if(b[$осpНо]!==$IрHТс&&b[$осpНо]!==$0OрТ&&b[$осpНо]!==undefined)
{
attachments.push({parent:b[$осpНо],child:mc,[$clе0р]:2});

}

if(model.startsWith($А1lAA))
{
if(b[$рА1Ае]!==undefined)
{
mc.$MН1Mp.text=$оeoce(b[$рА1Ае]);
}
}

$OОоНo++;
}
if(a==$сOTМ1)
{
$Мe0ТIp=4002;

var $AeАpНM=b[$А0Оpe];
var $орОp0е=parseInt(b[$10epМ]);
var $ссHMTН=parseInt(b[$НAllo]);

if($IHТcc)
{
var $HАeOIH=$М1оAО.split($eерН);
for(var $ТHрIIТ=0;$ТHрIIТ<$HАeOIH.length;$ТHрIIТ++)
{
var $ТМ1H1е=$HАeOIH[$ТHрIIТ].trim().split($ТМcA);
if($ТМ1H1е.length===2)
{
if($ТМ1H1е[0]===$AeАpНM)
{
switch($ТМ1H1е[1])
{
case $IрMсT: break;
case $OАeМА: break;
case $Hlр0Т: break;
case $M0Ос: break;
case $O0еIH: break;
case $MAАeН: break;
case $НТHсe: break;
case $ТрOAe: break;
case $ТНоОH: break;
case $1eAеА: break;
case $0lТe: break;
case $HMАcТ: break;
case $Tee0H: break;
case $pcAoО: break;
default:
$AeАpНM=$ТМ1H1е[1];
break;
}
}
}
}
}

$Мe0ТIp+=$АMсpT+$AeАpНM;

$рlТеlO(b[$1Оеoe],$cс0Hс);

if(LOW_HPS)
if(!$pMМ1)
if(!$еHоНH)
{
if($AeАpНM===$МНpМ)
if($орОp0е!==0)
if($ссHMTН>1)
if($ОoAоl!==$OIATА)
{
$AeАpНM=$IeТIс;
}

if($AeАpНM===$eНОp)
if($орОp0е!==0)
if($ссHMTН>0)
{
$AeАpНM=$1eAеА;
}
}




















mc=$еАеО1($AeАpНM,{
[$eТоM]: parseFloat(b[$оAеeе]),
[$рHОМ]: parseFloat(b[$MМеTc]),
upg: parseInt($ссHMTН),
command: parseInt($орОp0е)
});
}

if(a==$сl0TО)
{
$рlТеlO(b[$1Оеoe],$peс1e.length);
$TepоA(b[$IMАеc],parseFloat(b[$e0oeМ]),(b[$ОМсрl]===true||b[$ОМсрl]===$A11l),$cIсA1(b[$AНMlО]));
}

if(a==$ТHppА)
{
$Мe0ТIp=4003;
$Мe0ТIp+=$сTООo+b[$ОTеlр];

if(b[$ОTеlр]===$0еТpH)
{
$eMс1TТ=$0OрТ+(b[$ТIO0е]);
}
if(b[$ОTеlр]===$cНМОe)
{
$НМееec=$0OрТ+(b[$ТIO0е]);
}
if(b[$ОTеlр]===$ec1TТ)
{
$рloоl=$0OрТ+(b[$ТIO0е]);
}
if(b[$ОTеlр]===$ТTрHО)
{
$pTТcе=$0OрТ+(b[$ТIO0е]);
}
if(b[$ОTеlр]===$сeHре)
{
sky.gotoAndStop(parseInt(b[$ТIO0е]));
}
if(b[$ОTеlр]===$TlcMс)
{
$1Hсcр=parseInt(b[$ТIO0е]);

}
if(b[$ОTеlр]===$oООрМ)
{
gravity=parseFloat(b[$ТIO0е]);

}
if(b[$ОTеlр]===$сT1ОM)
{
$о0Мp0=true;

$OeМcO.visible=true;
$OeМcO.gotoAndPlay(1);
}
if(b[$ОTеlр]===$ТеAc1)
{
$popТо=true;
}
if(b[$ОTеlр]===$А1ТOp)
{
$HAАсА=false;
}
if(b[$ОTеlр]===$IIpНT)
{
$о0Мp0=true;
$IeА1I=true;

$OeМcO.visible=true;
$OeМcO.gotoAndPlay(1);
}
if(b[$ОTеlр]===$ОIIеe)
{
$оОTоo=false;
}
if(b[$ОTеlр]===$1OpTе)
{
$0pТНМ=true;
}
if(b[$ОTеlр]===$IH1cM)
{
$ToTTT=true;

for(i=0;i<$eсАeA;i++)
if($0Ме1А[i].io)
if(!$0Ме1А[i].$оeoТе)
$o0MIс(i);
}
if(b[$ОTеlр]===$Аpе0o)
{
$оМMОО=parseFloat(b[$ТIO0е])/100;
if(isNaN($оМMОО))
$оМMОО=1;
if($оМMОО<0.01)
$оМMОО=0.01;
if($оМMОО>15)
$оМMОО=15;
}
if(b[$ОTеlр]===$МMTHH)
{
$cоcAM=Math.max(0,$Мс01HН(b[$ТIO0е]));
$IOМТO+=$cоcAM;
}
if(b[$ОTеlр]===$ОНIoI)
{
$11сoH=Math.max(0,$Мс01HН(b[$ТIO0е]));

$AАcpc+=$11сoH;
}
if(b[$ОTеlр]===$OрсTр)
{
$coТcТ=Math.max(0,$Мс01HН(b[$ТIO0е]));

$0рроo+=$coТcТ;
}
if(b[$ОTеlр]===$ТHMНe)
{
$АeTAO=true;
}
if(b[$ОTеlр]===$оec1р)
{
$p0сТ0е=true;
}

if(b[$ОTеlр]===$cIOсl)
{
$eАeОl=true;
}

if(b[$ОTеlр]===$lHOАO)
{
$IHОIT=false;
}

if(b[$ОTеlр]===$opАМТ)
{
$НccрМ=true;
}
if(b[$ОTеlр]===$eolcе)
{
$HHMНe=false;
}

if(b[$ОTеlр]===$OоН1е)
$АеlAН=false;

if(b[$ОTеlр]===$eHеMl)
$oolМН=false;


if(!$pMМ1)
{
if(b[$ОTеlр]===$еoА1М)
{
for(i=0;i<$ll11o.length;i++)
{
$оОpeeМ=$еАеО1($ll11o[i][$IlТое],{
[$eТоM]: parseFloat(b[$оAеeе]),
[$рHОМ]: parseFloat(b[$MМеTc]),
upg: parseInt($ll11o[i].upg),
command:($pMМ1&&($IcеНе!==$ММ.$рocoТ))?-1 : parseInt(b[$ТIO0е])
});
}
}
if(b[$ОTеlр]===$loМОH)
{
for(i=0;i<$AАcco.length;i++)
{















$оОpeeМ=$еАеО1($AАcco[i][$IlТое],{
[$eТоM]: parseFloat(b[$оAеeе]),
[$рHОМ]: parseFloat(b[$MМеTc]),
upg: parseInt($AАcco[i].upg),
command:($pMМ1&&($IcеНе!==$ММ.$рocoТ))?-1 : parseInt(b[$ТIO0е])
});
}
}
if(b[$ОTеlр]===$АMH11)
{
for(i=0;i<$AАcco.length;i++)
if($AАcco[i][$IlТое]!=$p1ceМ)
{















$оОpeeМ=$еАеО1($AАcco[i][$IlТое],{
[$eТоM]: parseFloat(b[$оAеeе]),
[$рHОМ]: parseFloat(b[$MМеTc]),
upg: parseInt($AАcco[i].upg),
command:($pMМ1&&($IcеНе!==$ММ.$рocoТ))?-1 : parseInt(b[$ТIO0е])
});
}
}
if(b[$ОTеlр]===$lеeоO)
{
for(i=0;i<$AАcco.length;i++)
if($AАcco[i][$IlТое]==$p1ceМ)
{















$оОpeeМ=$еАеО1($AАcco[i][$IlТое],{
[$eТоM]: parseFloat(b[$оAеeе]),
[$рHОМ]: parseFloat(b[$MМеTc]),
upg: parseInt($AАcco[i].upg),
command:($pMМ1&&($IcеНе!==$ММ.$рocoТ))?-1 : parseInt(b[$ТIO0е])
});
}
}
}
else
{
if(b[$ОTеlр]===$cНОeI)
{
dm_slots_on_spawn=b[$ТIO0е].split($cTр0).join($0OрТ).split($eерН);
for(let i=0;i<dm_slots_on_spawn.length;i++)
dm_slots_on_spawn[i]=parseInt(dm_slots_on_spawn[i]);
}
if(b[$ОTеlр]===$HAOсM)
{
dm_max_guns_on_spawn=parseInt(b[$ТIO0е]);
}

}

}

if(a==$оHрAТ)
{
$Мe0ТIp=4004;


$McТеT[$М0AAe]=parseFloat(b[$оAеeе]);
$ооeep[$М0AAe]=parseFloat(b[$MМеTc]);
$elррo[$М0AAe]=Math.min(parseFloat(b[$МeeрМ]),100);
$TTTоо[$М0AAe]=2;
$ОАcIp[$М0AAe];

if(b[$ТоAH1]==$ОIlс||parseFloat(b[$ТоAH1])>0)
{















}
else
$TTTоо[$М0AAe]=-1;

if($TTTоо[$М0AAe]==2||$Оoеe1($McТеT[$М0AAe],$ооeep[$М0AAe]))
{
$рlТеlO(b[$1Оеoe],$М0AAe);

$М0AAe++;
}

}
if(a==$рToc1||a==$ТоТHТ)
{





$Мe0ТIp=4005;

mc=game.addChildAt(new player,game.numChildren);
$сOoНН(mc);

mc[$eТоM]=parseFloat(b[$оAеeе]);
mc[$рHОМ]=parseFloat(b[$MМеTc]);

mc.$Тссес=mc[$eТоM];
mc.$I0IНA=mc[$рHОМ];


$рlТеlO(b[$1Оеoe],$eсАeA);

$cНе0I(mc,b[$рMcоM],b[$AТpА1]);



mc[$АсТOе]=parseFloat(b[$lcАр0]);
mc[$МcеAH]=parseFloat(b[$ТlоTl]);

$OTpc1[mc.$MОеМ1]=$OTpc1[mc.$НТсМТ]=$OTpc1[mc.$р1eНM]=$OTpc1[mc.$оОlТМ]=$OTpc1[mc.$1O1lM]=
$OTpc1[mc.$рсOОА]=$OTpc1[mc.$Mo1OА]=$OTpc1[mc.$AМеTo]=$OTpc1[mc.$pМHHo]=$OTpc1[mc.$e1IOМ]=
mc[$АсТOе];

$IрТ0H[mc.$MОеМ1]=$IрТ0H[mc.$НТсМТ]=$IрТ0H[mc.$р1eНM]=$IрТ0H[mc.$оОlТМ]=$IрТ0H[mc.$1O1lM]=
$IрТ0H[mc.$рсOОА]=$IрТ0H[mc.$Mo1OА]=$IрТ0H[mc.$AМеTo]=$IрТ0H[mc.$pМHHo]=$IрТ0H[mc.$e1IOМ]=
mc[$МcеAH];


if(b[$HMео1].charAt(0)==$TlAp)
mc.$1МOОM=b[$HMео1];
else
mc.$1МOОM=parseInt(b[$HMео1]);

mc[$cАocе]=parseInt(b[$АApАН]);


mc[$leAсO]=parseInt(b[$МTMTp]);


if($pMМ1&&$IcеНе===$ММ.$IсОeо)
mc[$cАocе]=$НAlНc+1;



mc.$ееоАН=parseFloat(b[$МHTHH]);

mc[$lо0HH]=mc[$eТоM]+mc.$ееоАН*100;
mc[$еоOOА]=mc[$рHОМ];

mc[$0OАс]=0;

if(b[$AlTeо].charAt(0)===$TlAp)
{
mc.$HНрНТ=b[$AlTeо];
}
else
{




mc.$HНрНТ=parseInt(b[$AlTeо]);
}


mc.char=$Нecрl(b[$АAeНl]);







if(!$pMМ1||($pMМ1&&$IcеНе===$ММ.$рocoТ))
if(mc.char==2)
{
if(mc.hmax>325)
mc.char=70;
else
if(mc.hmax>170)
mc.char=71;



}
mc.$lОеMlp=false;
if($НAlНc==mc.$MeсНе&&!$00pеH)
{
if($pMМ1)
{
if($IcеНе===$ММ.$IсОeо)
{
mc.char=$рHоеН[2];


}
else
if($IcеНе===$ММ.$eHTНT)
{
if($НAlНc%2===0)
{
mc[$cАocе]=13;

mc.char=$рHоеН[3];

mc.$Нр01I[0]=mc.$Нр01I[1]=mc.$Нр01I[2]=mc.$Нр01I[3]=$MHсA;
}
else
{
mc[$cАocе]=12;


mc.char=$рHоеН[3];

mc.$Нр01I[0]=mc.$Нр01I[1]=mc.$Нр01I[2]=mc.$Нр01I[3]=$eНOc;
}
mc[$МIIро]=$0Ме1А[0][$МIIро];
mc.hmax=$0Ме1А[0].hmax;
}
else
{


if(parseFloat(b[$АAeНl])===-1)
{
mc.char=$рHоеН[2];
mc.$lОеMlp=true;
}
else
if(parseFloat(b[$АAeНl])===73)
{
mc.char=$рHоеН[3];

mc.$Нр01I[0]=mc.$Нр01I[1]=mc.$Нр01I[2]=mc.$Нр01I[3]=$MHсA;
}
else
if(parseFloat(b[$АAeНl])===74)
{

mc.char=$рHоеН[3];

mc.$Нр01I[0]=mc.$Нр01I[1]=mc.$Нр01I[2]=mc.$Нр01I[3]=$eНOc;
}

}
}
else
{
if(parseFloat(b[$АAeНl])===-1)
{
mc.char=$рHоеН[2];
mc.$lОеMlp=true;

mc[$оIpl]=$1еT1Н;


}
}
}
mc.$lOeНc=mc.char;

if(mc.char>=40&&mc.char<=48)
mc.char=1;

if(mc.char==61)
mc.char=3;

mc.$AААH1=mc.char;
mc.$сТlAМ=mc.char;
mc.$ТIpec=mc.char;

mc.$НOоМO=mc.char;
mc.$ОIMОo=mc.char;
mc.$cHАoс=mc.char;

mc.$Hlppе=mc.char;
mc.$Аc01о=mc.char;

mc.$ТрH0c=mc.char;
mc.$ОАOрр=mc.char;

mc.$A0АоА=mc.char;
mc.$THMcM=mc.char;

if(a==$рToc1)
{
if($НAlНc==mc.$MeсНе)
{
game[$eТоM]=-mc[$eТоM]+$АOTIl;
game[$рHОМ]=-mc[$рHОМ]+$ТIeсO;
}

mc.$HМ0М1=true;
}
else
mc.$HМ0М1=false;



$pНTс1(mc);





if($pMМ1)
{
if(!mc.$HМ0М1||($lMAТМ&&$НAlНc!==mc.$MeсНе))
mc.gui.visible=false;
}
else
{
if(mc[$cАocе]!=$0Ме1А[$НAlНc][$cАocе])
mc.gui.visible=false;
}


if($pMМ1)
{

{
if(mc.$HМ0М1)
{



if(mc.$MeсНе!=$НAlНc||$00pеH)
{
mc[$МIIро]=0;
mc.$оeoТе=true;

mc.alpha=1;


mc.io=false;
mc.visible=false;
}


if(mc.$MeсНе==$НAlНc&&!$00pеH)
mc.$o0oоI=$Aoppе;
else
if(mc[$cАocе]===$ТoAсА&&$IcеНе!==$ММ.$IсОeо)
mc.$o0oоI=$TНА1l;
else
mc.$o0oоI=$AНMee;
}
else
if(mc[$cАocе]!==$ТoAсА)
{
mc.$o0oоI=$AНMee;
}
else
{
mc.$o0oоI=$TНА1l;
}
}
}
else
{
if(mc.$MeсНе==$НAlНc||mc.char==3)
{
mc.$o0oоI=$Aoppе;

if(!$еHоНH)
{
$HОpcl=0;
if(mc.char==1)
$HОpcl=armorA;
if(mc.char==3)
$HОpcl=armorB;

if(!$pMМ1||($pMМ1&&$IcеНе===$ММ.$рocoТ))
if(mc.char==3||mc.char==1||(mc.char>=40&&mc.char<=49))
{
mc[$МIIро]*=(500+$HОpcl*50)/mc.hmax;
mc.hmax=500+$HОpcl*50;

if($рHоеН[0]>=49)
{
mc[$МIIро]*=1.5;
mc.hmax*=1.5;
}
}
}
}
else
if(mc[$cАocе]!==$0Ме1А[$НAlНc][$cАocе])
{
mc.$o0oоI=$AНMee;
}
else
{
mc.$o0oоI=$TНА1l;
}
}



if(mc.$HМ0М1)
{
$AOеоО(mc);
}

if($pMМ1&&$IcеНе===$ММ.$IсОeо)
{
if(mc.$HМ0М1)
mc.$MAНIp=1;
}










if(!$еHоНH)
if(!$pMМ1)
if(LOW_HPS)
{
var $HеIре0=130;

if(mc.char==3||mc.char==1||(mc.char>=40&&mc.char<=49))
$HеIре0=130;

if(mc.char==49||(mc.char==1&&$рHоеН[0]==49))
$HеIре0=150;

if(mc.char==13)
$HеIре0=150;

if(mc.char==2)
$HеIре0=130;

if(mc.char==4)
$HеIре0=100;

if(mc.char==6)
$HеIре0=150;

if(mc.char==7)
$HеIре0=210;

if(mc.char==8)
$HеIре0=130;

if(mc.char==9)
$HеIре0=190;

if(mc.char==11)
$HеIре0=300;




if(mc.char==14)
$HеIре0=170;

if(mc.char==15)
$HеIре0=350;

if(mc.char==16)
$HеIре0=200;

if(mc.char==70)

$HеIре0=150;

if(mc.char==71)
$HеIре0=130;




if($ОoAоl===$HTHОo)
{
if(mc.char==3)
$HеIре0=10000;
}


if(mc[$МIIро]<2000)
{
if(mc[$МIIро]>$HеIре0)
mc[$МIIро]=$HеIре0;

if(mc.hmax>$HеIре0)
mc.hmax=$HеIре0;
}


}



if($pMМ1)
if(!mc.$HМ0М1)
{
mc.$ОМlАAА=mc[$cАocе];
mc.$AсоНТ0=mc.$ееоАН;
mc.$рHОМMM=mc[$leAсO];
mc.$OОТpMо=mc.char;
}
}


}


$Мe0ТIp=5;
$Мe0ТIp+=$АоеоM;
$еАT1ее($eHсAe);

if($00pеH)
{
$НAlНc=0;





}

$еАT1ее($ce0pO);

$оTpТо();

$Мe0ТIp=5001;

var $АсlОeo=0;
var $eMlА0I=0;
var $elр0ОМ=0;
var $00Ор0=0;


for($AеНAО of $Ioee1.children())
{
$р1оOAT();

$Мe0ТIp=5002;

a=$AеНAО[$оIlО]();

$Мe0ТIp=5003;

b=[];

$Мe0ТIp=5004;


for($ТlАН0 of $AеНAО.attributes())
{
$Мe0ТIp=5005;

b[$IHTe+$ТlАН0[$оIlО]()]=$ТlАН0.value();
$Мe0ТIp=5006;
}
$Мe0ТIp=5007;

if(a==$eМTlc)
{
$Мe0ТIp=5008;
$HсTНe[$АсlОeo].$pMcpo=$cIсA1($HсTНe[$АсlОeo].$pMcpo);
$Мe0ТIp=5009;
$АсlОeo++;
}
else
if(a==$oeMTА)
{
$Мe0ТIp=5010;
for(i=0;i<$eННА[$eMlА0I].$0ор1e;i++)
{






$Мe0ТIp=5011;
$eННА[$eMlА0I].$Тp1M[i]=$cIсA1($eННА[$eMlА0I].$Тp1M[i]);
$Мe0ТIp=5012;
$eННА[$eMlА0I].$lМe0Т[i]=$cIсA1($eННА[$eMlА0I].$lМe0Т[i]);
$Мe0ТIp=5013;

}
$eMlА0I++;
}
else
if(a==$oеMeе)
{
$Мe0ТIp=5014;
$o0IсО[$elр0ОМ].$MоcсcM=$cIсA1($o0IсО[$elр0ОМ].$MоcсcM);
$Мe0ТIp=5015;
$elр0ОМ++;
}
else
if(a==$рToc1||a==$ТоТHТ)
{
$Мe0ТIp=5016;






$0Ме1А[$00Ор0].$HНрНТ=$cIсA1($0Ме1А[$00Ор0].$HНрНТ);
$Мe0ТIp=5017;
$0Ме1А[$00Ор0].$1МOОM=$cIсA1($0Ме1А[$00Ор0].$1МOОM);

$00Ор0++;
}
$Мe0ТIp=5018;
}


$Мe0ТIp=5019;

for(i=0;i<$eсАeA;i++)
{
$Мe0ТIp=5020;
if($0Ме1А[i].$HНрНТ==-2)
{
$Мe0ТIp=5021;
for(i2=0;i2<$TТlАM;i2++)
{
$Мe0ТIp=5022;
if($сoopT[i2].$OOHAТ==-1)
{
$Мe0ТIp=5023;
if($НOНОН($0Ме1А[i][$eТоM],$0Ме1А[i][$рHОМ],$сoopT[i2][$eТоM],$сoopT[i2][$рHОМ])<100)
{
$Мe0ТIp=5024;
$OcАe1(i,i2);
i2=$TТlАM;
}
}
}
$Мe0ТIp=5025;
if($0Ме1А[i].$HНрНТ==-2)
$0Ме1А[i].$HНрНТ=-1;
$Мe0ТIp=5026;
}
else
if($0Ме1А[i].$HНрНТ>=0||typeof($0Ме1А[i].$HНрНТ)===$ОТсTl)
{
$Мe0ТIp=5027;
$OcАe1(i,$cIсA1($0Ме1А[i].$HНрНТ));
$Мe0ТIp=5028;
}
$Мe0ТIp=5029;
}



$Мe0ТIp=6;
$еАT1ее($Аlp0Т);

for(i=0;i<$OОоНo;i++)
{
var $рcоI1p=$AAрlТ[i].currentFrameLabel;
if($рcоI1p===$cAIоo||
$рcоI1p===$cAHOр||
$рcоI1p===$pТОM0||
$рcоI1p===$рlTMМ||
$рcоI1p===$1OОе0||
$рcоI1p===$ААеОc||
$рcоI1p===$oрOОТ||
$рcоI1p===$есАТO||
$рcоI1p===$ТAAeО||
$рcоI1p===$MOНeH||
$рcоI1p===$OОоOс||
$рcоI1p===$Аe1lе||
$рcоI1p===$10ТАH||
$рcоI1p===$НooAА||
$рcоI1p===$МAр00||
$рcоI1p===$оeeоO||
$рcоI1p===$ТlТMp||
$рcоI1p===$сАToo||
$рcоI1p===$OОM00)
{
for(i2=0;i2<$М0AAe;i2++)
{
if(Math.abs($AAрlТ[i][$eТоM]-$McТеT[i2])+Math.abs($AAрlТ[i][$рHОМ]-$ооeep[i2])<40)
{
$М0AAe--;
for($0ОoHс=i2;$0ОoHс<$М0AAe;$0ОoHс++)
{
$McТеT[$0ОoHс]=$McТеT[$0ОoHс+1];
$ооeep[$0ОoHс]=$ооeep[$0ОoHс+1];
$elррo[$0ОoHс]=$elррo[$0ОoHс+1];
$TTTоо[$0ОoHс]=$TTTоо[$0ОoHс+1];
}
}
}

var $ТМIОT=0;
var $M1HТТI=0;

if($рcоI1p===$cAIоo||
$рcоI1p===$MOНeH||
$рcоI1p===$МAр00||
$рcоI1p===$ААеОc)
$M1HТТI=-20;

if($рcоI1p===$OОоOс||
$рcоI1p===$Аe1lе||
$рcоI1p===$оeeоO||
$рcоI1p===$oрOОТ)
$M1HТТI=20;

if($рcоI1p===$10ТАH||
$рcоI1p===$pТОM0||
$рcоI1p===$рlTMМ)
$ТМIОT=20;

if($рcоI1p===$НooAА||
$рcоI1p===$cAHOр||
$рcоI1p===$1OОе0)
$ТМIОT=-20;

$McТеT[$М0AAe]=$AAрlТ[i][$eТоM]+$ТМIОT;
$ооeep[$М0AAe]=$AAрlТ[i][$рHОМ]+$M1HТТI;

$elррo[$М0AAe]=0.45;
$TTTоо[$М0AAe]=-1;
$ОАcIp[$М0AAe];

$М0AAe++;
}
}

$Мe0ТIp=7;
$еАT1ее($ОpMМH);

for(i2=0;i2<$М0AAe;i2++)
{
if($TTTоо[i2]===2)
{
$Alcсe[$IАccH]=graphics_3d_front.addChildAt(new lens_flare,graphics_3d_front.numChildren);
$сOoНН($Alcсe[$IАccH]);

$Alcсe[$IАccH][$eТоM]=$McТеT[i2];
$Alcсe[$IАccH][$рHОМ]=$ооeep[i2];

$рHoеH[$IАccH]=1;

$Alcсe[$IАccH].alpha=0;
$IАccH++;
}
}


$Мe0ТIp=8;
$еАT1ее($MАрeT);

if(!$ТHoA1)
$1Hсcр*=2;






var $cсс1МO=$1Hсcр/2;

var $оoМ0oT,$cOTНoH;
$0Iеco=$сАоОo[0];
$OНсIс=$сАоОo[0]+$с0МAр[0];
$lMМoc=$o1О00[0];
$оpl1Т=$o1О00[0]+$MМрTТ[0];

var col=[];
var len;

for(i=0;i<$T0МММ;i++)
{




$0Iеco=Math.min($сАоОo[i],$0Iеco);
$lMМoc=Math.min($o1О00[i],$lMМoc);
$OНсIс=Math.max($сАоОo[i]+$с0МAр[i],$OНсIс);
$оpl1Т=Math.max($o1О00[i]+$MМрTТ[i],$оpl1Т);
}



cx=($OНсIс-$0Iеco)/20;
cy=($оpl1Т-$lMМoc)/20;




$Me1cМ=graphics_3d.addChildAt($орpТcо,graphics_3d.numChildren);

graphics_3d_front.addChildAt($01Оle,graphics_3d_front.numChildren);







for(var i=0;i<attachments.length;i++)
{
$р1оOAT();







attachments[i].parent=$АAHОе[$cIсA1(attachments[i].parent)];


if(attachments[i][$clе0р]==5)
{
attachments[i].dx=$ММoОo[attachments[i].id]-attachments[i].parent[$eТоM];
attachments[i].dy=$11ТоО[attachments[i].id]-attachments[i].parent[$рHОМ];
}
else
if(attachments[i][$clе0р]===3)
{
attachments[i].dx=$TpelH[attachments[i].child]-attachments[i].parent[$eТоM];
attachments[i].dy=$c0НIO[attachments[i].child]-attachments[i].parent[$рHОМ];
attachments[i].$АрAеoН=$сеHОp[attachments[i].child]-attachments[i].parent[$eТоM];
attachments[i].$Ap0АА=$оТТAe[attachments[i].child]-attachments[i].parent[$рHОМ];
}
else
{
attachments[i].dx=attachments[i].child[$eТоM]-attachments[i].parent[$eТоM];
attachments[i].dy=attachments[i].child[$рHОМ]-attachments[i].parent[$рHОМ];
}


if(attachments[i][$clе0р]===1)
(attachments[i].$IIHlТо ? graphics_3d_front : graphics_3d).addChildAt(attachments[i].child,(attachments[i].$IIHlТо ? graphics_3d_front : graphics_3d).numChildren);


}





for(i=0;i<$оTolТ;i++)
{
$р1оOAT();

if($Оcocр[i])
{

$Me1cМ=graphics_3d_front.addChildAt($НсОТе[i],0);
$сOoНН($Me1cМ);
$Me1cМ[$eТоM]=$ММoОo[i];
$Me1cМ[$рHОМ]=$11ТоО[i];
$Me1cМ.scaleX=$р1lMр[i]/100;
$Me1cМ.scaleY=$coТНp[i]/100;










if($lcAHМ[i]>0)
{
if($НМееec!==$Аcle)
{
$Me1cМ.gotoAndStop(3);




if($НМееec.length===7&&$НМееec.charAt(0)===$TlAp)
$Me1cМ.graphics.draw_operations[0][1][0]=$НМееec+$Me1cМ.graphics.draw_operations[0][1][0].substring(7);
}
else
$Me1cМ.gotoAndStop(1);
}
else
{
if($eMс1TТ!==$Аcle)
{
$Me1cМ.gotoAndStop(3);




if($eMс1TТ.length===7&&$eMс1TТ.charAt(0)===$TlAp)
$Me1cМ.graphics.draw_operations[0][1][0]=$eMс1TТ+$Me1cМ.graphics.draw_operations[0][1][0].substring(7);
}
else
$Me1cМ.gotoAndStop(2);
}
}
$ММoОo[i]-=10;

$р1lMр[i]+=20;
$coТНp[i]+=10;
}





$Мe0ТIp=9;
$еАT1ее($cp0Hl);


if(!$1clсо)
{
$Me1cМ=graphics_3d_front.addChildAt(new texture_front0,graphics_3d_front.numChildren);
$сOoНН($Me1cМ);

$Me1cМ[$eТоM]=$0Iеco;
$Me1cМ.scaleX=($OНсIс-$0Iеco)/100;
$Me1cМ.scaleY=(1000)/100;
$Me1cМ[$рHОМ]=$lMМoc-1000;
}

$Me1cМ=graphics_3d_front.addChildAt(new texture_front0,graphics_3d_front.numChildren);
$сOoНН($Me1cМ);

$Me1cМ[$eТоM]=$0Iеco-1000;
$Me1cМ.scaleX=($OНсIс-$0Iеco+2000)/100;
$Me1cМ.scaleY=(1000)/100;
$Me1cМ[$рHОМ]=$оpl1Т;

if(!$1clсо)
{
$Me1cМ=graphics_3d_front.addChildAt(new texture_front0,graphics_3d_front.numChildren);
$сOoНН($Me1cМ);

$Me1cМ[$eТоM]=$0Iеco-1000;
$Me1cМ.scaleX=(1000)/100;
$Me1cМ.scaleY=(2000+$оpl1Т-$lMМoc)/100;
$Me1cМ[$рHОМ]=$lMМoc-1000;

$Me1cМ=graphics_3d_front.addChildAt(new texture_front0,graphics_3d_front.numChildren);
$сOoНН($Me1cМ);

$Me1cМ[$eТоM]=$OНсIс;
$Me1cМ.scaleX=(1000)/100;
$Me1cМ.scaleY=(2000+$оpl1Т-$lMМoc)/100;
$Me1cМ[$рHОМ]=$lMМoc-1000;
}


for(i=0;i<$сMelН;i++)
if($АAHОе[i].$рНIMp)
{
$р1оOAT();

$Me1cМ=graphics_3d.addChildAt(new texture_front0,graphics_3d.numChildren);
$сOoНН($Me1cМ);

$Me1cМ[$eТоM]=$АAHОе[i][$eТоM];
$Me1cМ.scaleX=$АAHОе[i].scaleX;
$Me1cМ.scaleY=$АAHОе[i].scaleY;
$Me1cМ[$рHОМ]=$АAHОе[i][$рHОМ];

$ААAoH($Me1cМ,i);
}

for(i=0;i<$T0МММ;i++)
{
$р1оOAT();

$Me1cМ=graphics_3d.addChildAt(new texture_front0,graphics_3d.numChildren);
$сOoНН($Me1cМ);

$Me1cМ[$eТоM]=$сАоОo[i];
$Me1cМ.scaleX=$с0МAр[i]/100;
$Me1cМ.scaleY=$MМрTТ[i]/100;
$Me1cМ[$рHОМ]=$o1О00[i];

}








$Мe0ТIp=10;
$еАT1ее($ОO1МO);

var $MAМНрH;

$орpТcо=new Sprite();
var $oАpеeМ=new Sprite();

if(!$AНIeIT)
{
$орpТcо.graphics=new Graphics(false);
$oАpеeМ.graphics=new Graphics(false);
}

for(i=0;i<$T0МММ;i++)
{
$р1оOAT();

for(i2=0;i2<$с0МAр[i]/10;i2++)
col[i2]=true;

for(i2=0;i2<$T0МММ;i2++)
if(i!=i2)
{
if($o1О00[i]+$MМрTТ[i]>$o1О00[i2])
if($o1О00[i]+$MМрTТ[i]<$o1О00[i2]+$MМрTТ[i2])
if($сАоОo[i2]<=$сАоОo[i]+$с0МAр[i])
if($сАоОo[i2]+$с0МAр[i2]>=$сАоОo[i])
{

for($0ОoHс=0;$0ОoHс<$с0МAр[i]/10;$0ОoHс++)
if($сАоОo[i]+$0ОoHс*10>=$сАоОo[i2])
if($сАоОo[i]+$0ОoHс*10<$сАоОo[i2]+$с0МAр[i2])
col[$0ОoHс]=false;
}
}
len=0;
for(i2=0;i2<$с0МAр[i]/10;i2++)
if(col[i2])
{
len=0;

while(col[i2+len]&&i2+len<$с0МAр[i]/10)
len++;



if($I10Ор[i]==0||$I10Ор[i]==18)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($НlАoT),$MAМНрH,true,true);

$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+$MМрTТ[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+$MМрTТ[i]);
$орpТcо.graphics.endFill();
}
if($I10Ор[i]==3)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($АocpМ),$MAМНрH,true,true);

$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+$MМрTТ[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+$MМрTТ[i]);
$орpТcо.graphics.endFill();
}

if($I10Ор[i]==4)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($IМI1О),$MAМНрH,true,true);

$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+$MМрTТ[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+$MМрTТ[i]);
$орpТcо.graphics.endFill();
}
if($I10Ор[i]==7)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($ер0Iс),$MAМНрH,true,true);

$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+$MМрTТ[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+$MМрTТ[i]);
$орpТcо.graphics.endFill();
}
if($I10Ор[i]==8)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($AoсHp),$MAМНрH,true,true);

$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+$MМрTТ[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+$MМрTТ[i]);
$орpТcо.graphics.endFill();
}
if($I10Ор[i]==9)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($соH1О),$MAМНрH,true,true);

$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+$MМрTТ[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+$MМрTТ[i]);
$орpТcо.graphics.endFill();
}
if($I10Ор[i]==10)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($рсIHH),$MAМНрH,true,true);

$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+$MМрTТ[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+$MМрTТ[i]);
$орpТcо.graphics.endFill();
}
if($I10Ор[i]==11)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($еMНOО),$MAМНрH,true,true);

$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+$MМрTТ[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+$MМрTТ[i]);
$орpТcо.graphics.endFill();
}
if($I10Ор[i]==13)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($ОеpIМ),$MAМНрH,true,true);

$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+$MМрTТ[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+$MМрTТ[i]);
$орpТcо.graphics.endFill();
}

if($I10Ор[i]==17)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($сApeM),$MAМНрH,true,true);

$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+$MМрTТ[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+$MМрTТ[i]);
$орpТcо.graphics.endFill();
}

if($I10Ор[i]==3||$I10Ор[i]==0||$I10Ор[i]==10||$I10Ор[i]==11||$I10Ор[i]==13||$I10Ор[i]==18)
{
if($сАоОo[i]+i2*10+len*10-($сАоОo[i]+i2*10)>=20)
{
var $0AcHAI=$рIHНp;
var $MecoHp=$сТМ0c;

if($I10Ор[i]==10)
{
$0AcHAI=$орТpА;
$MecoHp=$IlМMp;
}
if($I10Ор[i]==11)
{
$0AcHAI=$c01AА;
$MecoHp=$AHH11;
}
if($I10Ор[i]==13)
{
$0AcHAI=$leIO1;
$MecoHp=$1HAlО;
}


if($ТНOМНI($сАоОo[i]+i2*10-5,$o1О00[i]+$MМрTТ[i]-5)||(!$ТНOМНI($сАоОo[i]+i2*10-5,$o1О00[i]+$MМрTТ[i]+5)&&!$ТНOМНI($сАоОo[i]+i2*10-5,$o1О00[i]+$MМрTТ[i]-5)))
{
$MAМНрH=new Matrix();
$MAМНрH.translate($сАоОo[i]+i2*10,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($0AcHAI),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+12,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+12,$o1О00[i]+$MМрTТ[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+$MМрTТ[i]);
$орpТcо.graphics.endFill();
}
if($ТНOМНI($сАоОo[i]+i2*10+len*10+5,$o1О00[i]+$MМрTТ[i]-5)||(!$ТНOМНI($сАоОo[i]+i2*10+len*10+5,$o1О00[i]+$MМрTТ[i]+5)&&!$ТНOМНI($сАоОo[i]+i2*10+len*10+5,$o1О00[i]+$MМрTТ[i]-5)))
{
$MAМНрH=new Matrix();
$MAМНрH.translate($сАоОo[i]+i2*10+len*10-12,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($MecoHp),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10+len*10-12,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+$MМрTТ[i]-16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+$MМрTТ[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10-12,$o1О00[i]+$MМрTТ[i]);
$орpТcо.graphics.endFill();
}
}
}




i2+=len-1;
}



}


$Мe0ТIp=11;
$еАT1ее($еol1М);

var $0M1рсO=new Date();




if($АeTAO||($0M1рсO[$MрleО]<=1||$0M1рсO[$MрleО]>=11))
{
$1сpAe=true;

if(!$АeTAO)
switch(sky.currentFrame)
{
case 5: $1сpAe=false;break;
}
}
else
$1сpAe=false;

if(!$0lpеo)
$1сpAe=false;

$Мe0ТIp=12;
$еАT1ее($AlIоc);

for(i=0;i<$T0МММ;i++)
{
$р1оOAT();

for(i2=0;i2<$с0МAр[i]/10;i2++)
col[i2]=true;

for(i2=0;i2<$T0МММ;i2++)
if(i!=i2)
{
if($o1О00[i]>$o1О00[i2])
if($o1О00[i]<=$o1О00[i2]+$MМрTТ[i2])
if($сАоОo[i2]<=$сАоОo[i]+$с0МAр[i])
if($сАоОo[i2]+$с0МAр[i2]>=$сАоОo[i])
{

for($0ОoHс=0;$0ОoHс<$с0МAр[i]/10;$0ОoHс++)
if($сАоОo[i]+$0ОoHс*10>=$сАоОo[i2])
if($сАоОo[i]+$0ОoHс*10<$сАоОo[i2]+$с0МAр[i2])
col[$0ОoHс]=false;
}
}
len=0;
for(i2=0;i2<$с0МAр[i]/10;i2++)
if(col[i2])
{
len=0;


while(col[i2+len]&&i2+len<$с0МAр[i]/10)
len++;




if($I10Ор[i]==0)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($НoрТI),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+16);
$орpТcо.graphics.endFill();
}
if($I10Ор[i]==1)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]-23);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($рpОOl),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10+28,$o1О00[i]-23);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10-28,$o1О00[i]-23);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10-28,$o1О00[i]+38-23);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+28,$o1О00[i]+38-23);
$орpТcо.graphics.endFill();

$MAМНрH=new Matrix();
$MAМНрH.translate($сАоОo[i]+i2*10,$o1О00[i]-23);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($e1Hpl),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10+1,$o1О00[i]-23);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+28,$o1О00[i]-23);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+28,$o1О00[i]+38-23);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+1,$o1О00[i]+38-23);
$орpТcо.graphics.endFill();

$MAМНрH=new Matrix();
$MAМНрH.translate($сАоОo[i]+i2*10+len*10-28,$o1О00[i]-23);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($ТМcеО),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10+len*10-28,$o1О00[i]-23);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10+16-1,$o1О00[i]-23);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10+16-1,$o1О00[i]+38-23);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10-28,$o1О00[i]+38-23);
$орpТcо.graphics.endFill();
}
if($I10Ор[i]==2)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]-6);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($оeсОc),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]-6+1);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]-6+1);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+26-6);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+26-6);
$орpТcо.graphics.endFill();
}
if($I10Ор[i]==3)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($оOcНО),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+16);
$орpТcо.graphics.endFill();
}
if($I10Ор[i]==4)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($0OIAA),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+16);
$орpТcо.graphics.endFill();
}

if($I10Ор[i]==5)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]-23);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($АplеH),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10+28,$o1О00[i]-23);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10-28,$o1О00[i]-23);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10-28,$o1О00[i]+38-23);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+28,$o1О00[i]+38-23);
$орpТcо.graphics.endFill();

$MAМНрH=new Matrix();
$MAМНрH.translate($сАоОo[i]+i2*10,$o1О00[i]-23);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($еТОl1),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10+1,$o1О00[i]-23);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+28,$o1О00[i]-23);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+28,$o1О00[i]+38-23);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+1,$o1О00[i]+38-23);
$орpТcо.graphics.endFill();

$MAМНрH=new Matrix();
$MAМНрH.translate($сАоОo[i]+i2*10+len*10-28,$o1О00[i]-23);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($cАрМо),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10+len*10-28,$o1О00[i]-23);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10+16-1,$o1О00[i]-23);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10+16-1,$o1О00[i]+38-23);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10-28,$o1О00[i]+38-23);
$орpТcо.graphics.endFill();
}
if($I10Ор[i]==6)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]-23);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($lНcoО),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10+28,$o1О00[i]-23);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10-28,$o1О00[i]-23);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10-28,$o1О00[i]+38-23);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+28,$o1О00[i]+38-23);
$орpТcо.graphics.endFill();

$MAМНрH=new Matrix();
$MAМНрH.translate($сАоОo[i]+i2*10,$o1О00[i]-23);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($с0oMO),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10+1,$o1О00[i]-23);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+28,$o1О00[i]-23);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+28,$o1О00[i]+38-23);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+1,$o1О00[i]+38-23);
$орpТcо.graphics.endFill();

$MAМНрH=new Matrix();
$MAМНрH.translate($сАоОo[i]+i2*10+len*10-28,$o1О00[i]-23);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($cOAОО),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10+len*10-28,$o1О00[i]-23);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10+16-1,$o1О00[i]-23);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10+16-1,$o1О00[i]+38-23);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10-28,$o1О00[i]+38-23);
$орpТcо.graphics.endFill();
}
if($I10Ор[i]==7)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($рMocо),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+16);
$орpТcо.graphics.endFill();
}
if($I10Ор[i]==8)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($сMoОе),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+16);
$орpТcо.graphics.endFill();
}
if($I10Ор[i]==9)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($ОoНОН),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+16);
$орpТcо.graphics.endFill();
}
if($I10Ор[i]==10)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($pIcОО),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+16);
$орpТcо.graphics.endFill();
}
if($I10Ор[i]==11)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($еMНOО),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+16);
$орpТcо.graphics.endFill();
}
if($I10Ор[i]==12)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($оT0IA),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+16);
$орpТcо.graphics.endFill();
}
if($I10Ор[i]==13)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($МlАНH),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+16);
$орpТcо.graphics.endFill();
}
if($I10Ор[i]==14)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($e0OTM),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+16);
$орpТcо.graphics.endFill();
}
if($I10Ор[i]==15)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]-6);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($AрTоТ),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]-6+1);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]-6+1);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+26-6);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+26-6);
$орpТcо.graphics.endFill();
}
if($I10Ор[i]==16)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]-6);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($ccOMе),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]-6+1);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]-6+1);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+26-6);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+26-6);
$орpТcо.graphics.endFill();
}
if($I10Ор[i]==17)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($oopоН),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+16);
$орpТcо.graphics.endFill();
}
if($I10Ор[i]==18)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($оНoМТ),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+16);
$орpТcо.graphics.endFill();
}
if($I10Ор[i]==19)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($ToAO0),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+16);
$орpТcо.graphics.endFill();
}
if($I10Ор[i]==20)
{
$MAМНрH=new Matrix();
$MAМНрH.translate(0,$o1О00[i]-6);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($ocMoA),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]-6+1);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]-6+1);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+26-6);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+26-6);
$орpТcо.graphics.endFill();
}

if($I10Ор[i]==3||$I10Ор[i]==0||$I10Ор[i]==10||$I10Ор[i]==11||$I10Ор[i]==13||$I10Ор[i]==14||$I10Ор[i]==18)
{
if($сАоОo[i]+i2*10+len*10-($сАоОo[i]+i2*10)>=20)
{
var $0AcHAI=$оMlсе;
var $MecoHp=$cMТAA;

if($I10Ор[i]==10)
{
$0AcHAI=$cTАpO;
$MecoHp=$ОНерА;
}
if($I10Ор[i]==11)
{
$0AcHAI=$рHMlН;
$MecoHp=$Tо0МA;
}
if($I10Ор[i]==13)
{
$0AcHAI=$НoMlH;
$MecoHp=$oeTpc;
}
if($I10Ор[i]==14)
{
$0AcHAI=$НсHHe;
$MecoHp=$HррсА;
}

if($ТНOМНI($сАоОo[i]+i2*10-5,$o1О00[i]+5)||(!$ТНOМНI($сАоОo[i]+i2*10-5,$o1О00[i]-5)&&!$ТНOМНI($сАоОo[i]+i2*10-5,$o1О00[i]+5)))
{
$MAМНрH=new Matrix();
$MAМНрH.translate($сАоОo[i]+i2*10,$o1О00[i]);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($0AcHAI),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+12,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+12,$o1О00[i]+16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10,$o1О00[i]+16);
$орpТcо.graphics.endFill();
}
if($ТНOМНI($сАоОo[i]+i2*10+len*10+5,$o1О00[i]+5)||(!$ТНOМНI($сАоОo[i]+i2*10+len*10+5,$o1О00[i]-5)&&!$ТНOМНI($сАоОo[i]+i2*10+len*10+5,$o1О00[i]+5)))
{
$MAМНрH=new Matrix();
$MAМНрH.translate($сАоОo[i]+i2*10+len*10-12,$o1О00[i]);
$орpТcо.graphics.beginBitmapFill(CreateLibraryBitmapData($MecoHp),$MAМНрH,true,true);
$орpТcо.graphics.moveTo($сАоОo[i]+i2*10+len*10-12,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10,$o1О00[i]+16);
$орpТcо.graphics.lineTo($сАоОo[i]+i2*10+len*10-12,$o1О00[i]+16);
$орpТcо.graphics.endFill();
}
}
}

if($1сpAe)
{
var snow=new Sprite();


for($HОpcl=0.25;$HОpcl<=len-0.25;$HОpcl+=0.0625)
if($c0е0А($сАоОo[i]+i2*10+$HОpcl*10,$o1О00[i]-10+(Math.random()*6-3)-5))
{
var rad=9+Math.random()*4;


if($HОpcl<3)
rad=((rad*$HОpcl/3)+rad)/2;

if($HОpcl>len-3)
rad=((rad*(len-$HОpcl)/3)+rad)/2;

snow.graphics.beginFill($рТ0МА);
snow.graphics.drawRoundRect($сАоОo[i]+i2*10+$HОpcl*10-rad/2,
$o1О00[i]+(Math.random()*6-3)-rad*0.8,
rad,
rad,
rad);
snow.graphics.endFill();
}
$oАlМН(snow);
$oАpеeМ.addChild(snow);
}

i2+=len-1;


}

}
$Me1cМ=graphics_3d.addChildAt($орpТcо,graphics_3d.numChildren);





$Мe0ТIp=13;
$еАT1ее($HАНAc);

var $сpМAoО=getTimer();
if($0lpеo)
{

var $ТTАоoр=0.85;

switch(sky.currentFrame)
{
case 1: $ТTАоoр=0.52;break;
case 2: $ТTАоoр=0.8;break;
case 3: $ТTАоoр=1;break;
case 4: $ТTАоoр=0;break;
case 5: $ТTАоoр=0.25;break;
case 6: $ТTАоoр=0.36;break;
case 7: $ТTАоoр=0.87;break;
case 8: $ТTАоoр=0.34;break;
case 9: $ТTАоoр=0.83;break;
case 10: $ТTАоoр=0.8;break;
case 11: $ТTАоoр=0.18;break;
}


$Мe0ТIp=1301;
$еАT1ее($cHрHТ);

var $НpоТ0=100;
var $TМHМсT=50;

var $0oAH0р=$М0AAe;

for($HОpcl=$0Iеco-$НpоТ0;$HОpcl<=$OНсIс+$НpоТ0;$HОpcl+=$TМHМсT)
{
for($llМTO=$lMМoc-$НpоТ0;$llМTO<=$оpl1Т+$НpоТ0;$llМTO+=$TМHМсT)
{
$р1оOAT();

if($НoОIoс($HОpcl,$llМTO,$НpоТ0))
if(!$НoОIoс($HОpcl,$llМTO,50))
if($ТНOМНI($HОpcl,$llМTO))
{
$McТеT[$М0AAe]=$HОpcl;
$ооeep[$М0AAe]=$llМTO;

$elррo[$М0AAe]=0.8*$ТTАоoр;

$TTTоо[$М0AAe]=-1;

$М0AAe++;
}
}
}

$Мe0ТIp=1302;
$еАT1ее($о0ТOА);

$0Iеco-=$1Hсcр*2;
$lMМoc-=$1Hсcр*2;
$OНсIс+=$1Hсcр*4;
$оpl1Т+=$1Hсcр*4;


$Мe0ТIp=1303;
$еАT1ее($eOAOО);

$НcсрТО=new Matrix(1/$1Hсcр,0,0,1/$1Hсcр,-$0Iеco/$1Hсcр,-$lMМoc/$1Hсcр);


$Мe0ТIp=1304;
$еАT1ее($ТрM0с);

var $lОооНе,$рcA0HО;
$lОооНе=Math.max(($OНсIс-$0Iеco)/$1Hсcр,1);
$рcA0HО=Math.max(($оpl1Т-$lMМoc)/$1Hсcр,1);


$Мe0ТIp=1305;
$еАT1ее($рMpl0);

$lAрНрH=new BitmapData(
$lОооНе,
$рcA0HО,
true,$0НрОT);


$Мe0ТIp=1306;
$еАT1ее($0TTlА);



var g=new Sprite();

if(!$сleТe)
{
g.graphics=new Graphics(false);
}

let $MеAeрe=0.5/$НcсрТО.a;
let $IМHOI=0.5/$НcсрТО.d;

$Мe0ТIp=1307;
$еАT1ее($lIМOM);

for($0ОoHс=0;$0ОoHс<$о01lc;$0ОoHс++)
if($cОpOО[$0ОoHс])
{

$Мe0ТIp=1308;
$еАT1ее($НАМсl);

g.graphics.beginFill($сIpоc);

$Мe0ТIp=1309;
$еАT1ее($pОeА1);
g.graphics.drawRect($0eM1p[$0ОoHс],$lоТpH[$0ОoHс],
$Орсlp[$0ОoHс]+$MеAeрe,$рcAeH[$0ОoHс]+$IМHOI);

$Мe0ТIp=1310;
$еАT1ее($pННOe);
g.graphics.endFill();






}

$cОpOО=null;

$Мe0ТIp=1311;
$еАT1ее($oAIоM);

$lAрНрH.draw(g,$НcсрТО,null,null,null,false);




$Мe0ТIp=1312;
$еАT1ее($Мрo1T);

$lAрНрH.colorTransform($lAрНрH.rect,new ColorTransform(1,1,1,-1*0.85,0,0,0,255));

$Мe0ТIp=1313;
$еАT1ее($0НpTH);

$lорМ1=$lAрНрH.clone();


$Мe0ТIp=1314;
$еАT1ее($MHpОТ);


var $НOIHA;

$рАНlI=$М0AAe;
$cеНlН=$сMelН;
$сMelН=0;


cx=($OНсIс-$0Iеco)/$1Hсcр;
cy=($оpl1Т-$lMМoc)/$1Hсcр;


$Мe0ТIp=1315;
$еАT1ее($рeMТН);

var $ММТp1=[];
var poss=[];
for(var $oecTHА=0;$oecTHА<=1;$oecTHА+=0.1)
{
$ММТp1.push(0x000000);
poss.push($oecTHА);
}


$Мe0ТIp=1316;
$еАT1ее($pI0Tp);

for($AMTT1=0;$AMTT1<$рАНlI;$AMTT1++)
{
var g=new Sprite();

if(!$1oоТе)
{
g.graphics=new Graphics(false);
}

var alphas=[];

let $HOoНМ=1;


for(var $oecTHА=0;$oecTHА<=1;$oecTHА+=0.1)
{
if($TTTоо[$AMTT1]>=0)
alphas.push($HOoНМ/($oecTHА*10+0.1)*$elррo[$AMTT1]);
else
alphas.push($HOoНМ/($oecTHА*10+0.1)*$elррo[$AMTT1]);
}



$Мe0ТIp=1317;


var $IТМlHН=new Matrix();



var $oTMА0е=($elррo[$AMTT1])*200*20*1.4;


$Мe0ТIp=1318;


















let css_values=[];
for(let gr=0;gr<$ММТp1.length;gr++)
css_values.push(`rgba(0,0,0,${alphas[gr]})`);
















g.graphics.createRadialGradientAndBeginFill(
$McТеT[$AMTT1],$ооeep[$AMTT1],0,$McТеT[$AMTT1],$ооeep[$AMTT1],$oTMА0е/2,
poss,css_values);



$Мe0ТIp=1320;


var $MOlTTc=$TTTоо[$AMTT1]==-1 ? Math.PI*0.1 : Math.PI*0.05;


$Мe0ТIp=1321;


for(var an=0;an<Math.PI*2;an+=$MOlTTc)
{
var $еTсоTО=$oTMА0е/2;

var $HОpcl,$llМTO;

$Мe0ТIp=1322;



$HОpcl=$McТеT[$AMTT1]+Math.sin(an)*$еTсоTО;
$llМTO=$ооeep[$AMTT1]+Math.cos(an)*$еTсоTО;


$MOH01=$McТеT[$AMTT1];
$MрIеО=$ооeep[$AMTT1];
v;


$Мe0ТIp=1323;


for(i2=0;i2<$T0МММ;i2++)
if(Math.max($MOH01,$HОpcl)>$сАоОo[i2]&&Math.min($MOH01,$HОpcl)<$сАоОo[i2]+$с0МAр[i2])
if(Math.max($MрIеО,$llМTO)>$o1О00[i2]&&Math.min($MрIеО,$llМTO)<$o1О00[i2]+$MМрTТ[i2])
{

$Мe0ТIp=1324;

if($oе1AеН($HОpcl,$llМTO,$MOH01,$MрIеО,$сАоОo[i2],$o1О00[i2],$сАоОo[i2]+$с0МAр[i2],$o1О00[i2]))
{
v=$НOНОН($MOH01,$MрIеО,$ТOHHМ,$lHTсH);
if(v<$еTсоTО)
{
$HОpcl=$ТOHHМ;
$llМTO=$lHTсH;
$еTсоTО=v;
}
}
$Мe0ТIp=1325;

if($oе1AеН($HОpcl,$llМTO,$MOH01,$MрIеО,$сАоОo[i2],$o1О00[i2]+$MМрTТ[i2],$сАоОo[i2]+$с0МAр[i2],$o1О00[i2]+$MМрTТ[i2]))
{
v=$НOНОН($MOH01,$MрIеО,$ТOHHМ,$lHTсH);
if(v<$еTсоTО)
{
$HОpcl=$ТOHHМ;
$llМTO=$lHTсH;
$еTсоTО=v;
}
}
$Мe0ТIp=1326;

if($oе1AеН($HОpcl,$llМTO,$MOH01,$MрIеО,$сАоОo[i2],$o1О00[i2],$сАоОo[i2],$o1О00[i2]+$MМрTТ[i2]))
{
v=$НOНОН($MOH01,$MрIеО,$ТOHHМ,$lHTсH);
if(v<$еTсоTО)
{
$HОpcl=$ТOHHМ;
$llМTO=$lHTсH;
$еTсоTО=v;
}
}
$Мe0ТIp=1327;

if($oе1AеН($HОpcl,$llМTO,$MOH01,$MрIеО,$сАоОo[i2]+$с0МAр[i2],$o1О00[i2],$сАоОo[i2]+$с0МAр[i2],$o1О00[i2]+$MМрTТ[i2]))
{
v=$НOНОН($MOH01,$MрIеО,$ТOHHМ,$lHTсH);
if(v<$еTсоTО)
{
$HОpcl=$ТOHHМ;
$llМTO=$lHTсH;
$еTсоTО=v;
}
}

$Мe0ТIp=1328;

}

$HОpcl=$McТеT[$AMTT1]+Math.sin(an)*$еTсоTО;
$llМTO=$ооeep[$AMTT1]+Math.cos(an)*$еTсоTО;

$Мe0ТIp=1329;


if(an==0)
g.graphics.moveTo($HОpcl,$llМTO);
else
g.graphics.lineTo($HОpcl,$llМTO);


$Мe0ТIp=1330;

}

$Мe0ТIp=1331;


g.graphics.endFill();
g.filters=[new BlurFilter(1.1,1.1,3)];




$Мe0ТIp=1332;


$ОАcIp[$AMTT1]=g;


$Мe0ТIp=1333;

}


$ОoIoА=new Bitmap($lAрНрH);


$Мe0ТIp=1334;
$еАT1ее($eAopo);

$IpорHр(true,root.$НМcрТр,$р1оOAT);


$Мe0ТIp=1335;
$еАT1ее($НА0Ос);

$сMelН=$cеНlН;



$Мe0ТIp=1336;
$еАT1ее($АОМНН);

$ОoIoА.smoothing=true;

$Мe0ТIp=1337;
$еАT1ее($оp0cI);

$Me1cМ=graphics_3d_front.addChildAt($ОoIoА,0);

if($1Hсcр>=1000)
$Me1cМ.visible=false;

$Мe0ТIp=1338;
$еАT1ее($1eIeе);

$Me1cМ[$eТоM]=$0Iеco;
$Me1cМ[$рHОМ]=$lMМoc;
$Me1cМ.scaleX=$1Hсcр;
$Me1cМ.scaleY=$1Hсcр;

$Мe0ТIp=1339;
$еАT1ее($MoMo0);

$ОoIoА.smoothing=true;

$Мe0ТIp=1340;
$еАT1ее($cHO1А);

$0Iеco+=$1Hсcр*2;
$lMМoc+=$1Hсcр*2;
$OНсIс-=$1Hсcр*4;
$оpl1Т-=$1Hсcр*4;

}

$Мe0ТIp=14;
$еАT1ее($pНрТp);

var $IpOlАO=getTimer();


if($1сpAe)
{








































var $Tо1Hсе=graphics_3d.addChildAt($oАpеeМ,graphics_3d.numChildren);


}

$МАHре=$pООро;
$оTМрH=$0lHре;




$Мe0ТIp=15;
$еАT1ее($НpАо1);

if($pMМ1)
{
$OН1оc=$cоcAM;
$IАрAH=$11сoH;
$ccIсo=$coТcТ;
$AHеAМ=0;
}

$Мe0ТIp=15.1;

if($0рMOee==$Аcle)
{



$Мe0ТIp=16;
$еАT1ее($lTАММ);

$сАТ1О();

$Мe0ТIp=17;
$еАT1ее($АMААI);

$НОHAM();

$Мe0ТIp=18;
$еАT1ее($AАОlА);

if($pMМ1)
{
$Мe0ТIp=1801;
$Мe0ТIp+=$0O1Mc;

$еАT1ее($1оНpе);

if(!$00pеH)
$0Ме1А[$НAlНc][$AHop]=$МоОcl;

$Мe0ТIp=1802;
$еАT1ее($Моcp1);



HUD.$ТНООH();

if($00pеH)
$pрMТl();



for(let i=0;i<$ММ.$АТcoTl.length;i++)
$ММ.$c0рlc(...$ММ.$АТcoTl[i]);

$ММ.$АТcoTl.length=0;

let $НAAloМ=($ММ.$HТIeН||$ММ.$eA0рc);
$НAAloМ.$OMeTо($ММ.$МеoрО,[$ММ[$lpTоО]]);


$1IHOН=true;
}
else
if($TccHО)
{

$Мe0ТIp=1803;
$еАT1ее($оlT10);

$ОlcТе();
$Аоео0($AAHoАc);

$Мe0ТIp=1804;
$еАT1ее($АН00О);
}

$Мe0ТIp=19;
$еАT1ее($oTpOp);

if($pMМ1)
{
if($ММ[$OpНpp])
if($ММ[$OpНpp][$pеoоO]!==null)
{
for(var i=0;i<$0Ме1А.length;i++)
{
let mc=$0Ме1А[i];
if(mc.$HМ0М1)
{
mc[$МIIро]=mc.hmax=$ММ[$OpНpp][$pеoоO];
}
}
}

var $HАeOIH=$М1оAО.split($eерН);
for(var $ТHрIIТ=0;$ТHрIIТ<$HАeOIH.length;$ТHрIIТ++)
{
var $ТМ1H1е=$HАeOIH[$ТHрIIТ].trim().split($ТМcA);

{
let key=$ТМ1H1е[0];
let value=$ТМ1H1е[1];
switch(key)
{
case $cToOН:
case $1OAНс:
case $сMMpM:
case $AMАeМ:
case $МТ1pТ:
case $MleHо:

$1р0oe=0;

break;
}
}
}
}


for(var i=0;i<$орeМo;i++)
{
if($eННА[i].$1lTcТе)
$pАTIТ(i);
};

$Мe0ТIp=20;
$еАT1ее($oО0Тl);

$ОНAMр();

$poННAо();
}
else
{
throw new Error($Т1рcН);



}
}
catch(error)
{
trace(error);
ReportCaughtError(error);

























$Т1рcН=$lНo1p+$ОoAоl+$HНI0l;

if(error.$cM0НОА!==undefined)
$Т1рcН+=$сОMA0+error.$cM0НОА+$l11MA+error.message+$McoсТ+$Мe0ТIp+$М1сТН;
else
$Т1рcН+=$lApрM+error.message+$McoсТ+$Мe0ТIp+$М1сТН;

$Т1рcН+=$ОAТоМ+root.$НМcрТр.length+$T1l0e+(this.loaderInfo.parameters[$0cрО])+$М1сТН;
$Т1рcН+=$МсНТc+globalThis.$pТАТMо();

let lines=$Т1рcН.split($О0Ao0);
for(let i=0;i<lines.length;i++)
{
let line=lines[i];

let $ТMMрTT=78;

if(line.length>$ТMMрTT)
{

let $A1AoАA=line.slice($ТMMрTT);
line=line.slice(0,$ТMMрTT);



lines[i]=line;
lines.splice(i+1,0,$A1AoАA);
}
}
$Т1рcН=lines.join($О0Ao0);




































return false;
}



$ТMТlр0=$cс0Hс;

if($М1оAО.indexOf($oеHНТ)!==-1)
{
APRIL_2025=true;
}

$oIeeol();

return true;
}
function $poННAо()
{
$lАТАH=$MсОТ0=getTimer();
}

var $ТMТlр0=0;






















































































































function $TМpc0(e)
{































}










function $HpAlоН(a,$cТM1pA,$oplТАе,type)
{
$eННА[a].$Тp1M[$eННА[a].$0ор1e]=$cТM1pA;
$eННА[a].$lМe0Т[$eННА[a].$0ор1e]=$oplТАе;
$eННА[a].$НT0еM[$eННА[a].$0ор1e]=parseInt(type);
$eННА[a].$0ор1e++;
}

function $OcАe1(a,b,$еeрIОM=false)
{
if(!$еeрIОM)
if($pMМ1&&$0Ме1А[a].$HМ0М1)
return;

if($0Ме1А[a].$HНрНТ>=0)
if($0Ме1А[a].$HНрНТ!==b)
{
8;
}

$o0MIс(a);
$сoopT[b].$OOHAТ=a;
$0Ме1А[a].$HНрНТ=b;
$0Ме1А[a].alpha=0;
$сoopT[b].$pОMTOo=$0Ме1А[a][$МАТОе];

if(a==0)
{
if($сoopT[b].$eрlсe==0)
$оМMОО=0.75;
if($сoopT[b].$eрlсe==1)
$оМMОО=0.5;

$AОHMT=false;

$MТcTH.visible=true;


$сoopT[b].gui.$pеMHH.textColor=$Aoppе;
}
else
{
if($0Ме1А[a][$cАocе]==$0Ме1А[$НAlНc][$cАocе])
$сoopT[b].gui.$pеMHH.textColor=$TНА1l;
else
$сoopT[b].gui.$pеMHH.textColor=$AНMee;
}

if(a==$НAlНc)
$pрMТl();
}

function $МTMcе(b,$еeрIОM=false)
{
if(!$еeрIОM)
if($pMМ1&&($сoopT[b].$OOHAТ!==-1&&$0Ме1А[$сoopT[b].$OOHAТ].$HМ0М1))
return;

if($сoopT[b].$OOHAТ!==-1)
{
if($сoopT[b].$OOHAТ==$НAlНc)
{
$оМMОО=$eTIIo;
$AОHMT=false;


$MТcTH.visible=false;
$pрMТl();
}

$o0MIс($сoopT[b].$OOHAТ);
$0Ме1А[$сoopT[b].$OOHAТ].$HНрНТ=-1;
$0Ме1А[$сoopT[b].$OOHAТ].$eoОpА=1;
$0Ме1А[$сoopT[b].$OOHAТ][$рHОМ]=$сoopT[b][$рHОМ]-50;
$0Ме1А[$сoopT[b].$OOHAТ][$АсТOе]=0;
$0Ме1А[$сoopT[b].$OOHAТ][$МcеAH]=0;
$0Ме1А[$сoopT[b].$OOHAТ].alpha=1;
$0Ме1А[$сoopT[b].$OOHAТ][$МАТОе]=$сoopT[b].$pОMTOo;
$o0MIс($сoopT[b].$OOHAТ);
$сoopT[b].$OOHAТ=-1;
}
$сoopT[b].gui.$pеMHH.textColor=$oe0То;
}

function $pТTсA(v)
{



$1оIlOр.alpha=v;

$MТcTH.alpha=v;
$e1eoО.alpha=v;
$M1МТ1.alpha=v;
$cecНH.alpha=v;
$ТНсcoс.alpha=v;
$ppАсо.alpha=v;


$e01c1р.alpha=v;
}

var $p0сТ0е=false;

var $pТоAеА=[];

function $е10Oс(e,$cрAрpe)
{
$pТоAеА.unshift($Mее0H+$cрAрpe+$МеpTA+e.$cM0НОА+$OMIHO+e[$оIlО]+$OMIHO+e.message);
if($pТоAеА.length>32)
$pТоAеА.length=32;


if($p0сТ0е)
{
ChatNewMsg($ATIОО+$cрAрpe+$МеpTA+e.$cM0НОА+$OMIHO+e[$оIlО]+$OMIHO+e.message+$cIMO);
}
}
function $HlОНА(skill)
{
if(skill<=1)
{
$НOIHo=true;
$OАМАO=false;
}
else
if(skill<=2)
{
$НOIHo=false;
$OАМАO=false;
}
else
{
$НOIHo=false;
$OАМАO=true;
}
}
function $рНеOо()
{
if($НOIHo&&!$OАМАO)
return 1;
if(!$НOIHo&&!$OАМАO)
return 2;
return 3;
}

var $ррAН=null;
var dm_slots_on_spawn=null;
var dm_max_guns_on_spawn=0;
var $MТOсc={};
var $OоТTo={};

function $MрМсН0($Aoо1lТ,$cеОеAM,$орlHТ=null)
{
if(dm_slots_on_spawn.length===0)
return;

var $рТ0eTM=0;


if($орlHТ!==null)
{
for(var $рАНlI=0;$рАНlI<$cс0Hс;$рАНlI++)

if($ОpMрс[$рАНlI].picken_by!==-1)
if($0Ме1А[$ОpMрс[$рАНlI].picken_by]===$орlHТ)
$рТ0eTM++;
}

for(var i=0;i<dm_slots_on_spawn.length&&$рТ0eTM<dm_max_guns_on_spawn;i++)
{

if($орlHТ!==null)
{
var $popНе0=false;

for(var $рАНlI=0;$рАНlI<$cс0Hс;$рАНlI++)
if($ОpMрс[$рАНlI].$cppее===dm_slots_on_spawn[i])
if($ОpMрс[$рАНlI].picken_by===$орlHТ.$MeсНе)
{
$popНе0=true;
break;
}

if(!$popНе0)
{
for(var $рАНlI=0;$рАНlI<$1pTМc.length;$рАНlI++)
{
if($1pTМc[$рАНlI].mc.$cppее===dm_slots_on_spawn[i])
if(getTimer()<$1pTМc[$рАНlI].timer+1000)
{
$popНе0=true;
break;
}
}
}

if($popНе0)
continue;
}

var $eоТТTp=[];

for(var $рАНlI=0;$рАНlI<$cс0Hс;$рАНlI++)
if($ОpMрс[$рАНlI].$cppее===dm_slots_on_spawn[i])
if($ОpMрс[$рАНlI].picken_by===-1)
{

ok=true;

for(var $сI0рp=0;$сI0рp<$eсАeA;$сI0рp++)
if($0Ме1А[$сI0рp].io)
if($0Ме1А[$сI0рp].$HМ0М1)
if($0Ме1А[$сI0рp][$МIIро]>0)
if(Math.abs($0Ме1А[$сI0рp][$eТоM]-$ОpMрс[$рАНlI][$eТоM])<200)
if(Math.abs($0Ме1А[$сI0рp][$рHОМ]-$ОpMрс[$рАНlI][$рHОМ])<200)
{
ok=false;
break;
}

if(ok)
$eоТТTp.push($рАНlI);
}

if($eоТТTp.length===0)
{
for(var $рАНlI=0;$рАНlI<$cс0Hс;$рАНlI++)
if($ОpMрс[$рАНlI].$cppее===dm_slots_on_spawn[i])
if($ОpMрс[$рАНlI].picken_by===-1)
{
$eоТТTp.push($рАНlI);
}
}

if($eоТТTp.length>0)
{
var $рАНlI=$eоТТTp[Math.floor(Math.random()*$eоТТTp.length)];

var $Т0TpA=$ОpMрс[$рАНlI];









$Т0TpA[$eТоM]=$Aoо1lТ;
$Т0TpA[$рHОМ]=$cеОеAM-50;

$OTpc1[$Т0TpA.$c0НlТ]=0;
$IрТ0H[$Т0TpA.$c0НlТ]=0;


$0Н0Тl($Т0TpA.$c0НlТ);

$Il[$Т0TpA.$c0НlТ]=$IcМMc[$Т0TpA.$c0НlТ]=$Т0TpA[$eТоM]-10;
$0OA[$Т0TpA.$c0НlТ]=$MA0е1[$Т0TpA.$c0НlТ]=$Т0TpA[$рHОМ];

$OTpc1[$Т0TpA.$рееоp]=0;
$IрТ0H[$Т0TpA.$рееоp]=0;


$0Н0Тl($Т0TpA.$рееоp);

$Il[$Т0TpA.$рееоp]=$IcМMc[$Т0TpA.$рееоp]=$Т0TpA[$eТоM]+10;
$0OA[$Т0TpA.$рееоp]=$MA0е1[$Т0TpA.$рееоp]=$Т0TpA[$рHОМ];

$рТ0eTM++;



$Т0TpA.$0TlIcM();

if($орlHТ)
$cTоpeо($рАНlI,$орlHТ.$MeсНе,false,false);
}
}


}

function $cTоpeо(i,i2,$соесНl=false,$pМОTМl=true)
{
let mc=$ОpMрс[i];
let $eMOАе=$0Ме1А[i2];

ok=true;

if($pMМ1)
if($cАpОр!==$ММ.$ОeрoT)
if($0Ме1А[i2].$HМ0М1||$ММ.$оорoсH)
{
ok=false;
}

if(mc.$cppее!=-2)
for(let $0ОoHс=0;$0ОoHс<$cс0Hс&&ok;$0ОoHс++)
if($ОpMрс[$0ОoHс].io)
if(i!=$0ОoHс)
if(!$ОpMрс[$0ОoHс].$соТAТ)
{
if($ОpMрс[$0ОoHс].picken_by==i2&&$ОpMрс[$0ОoHс].$cppее==mc.$cppее)
ok=false;
}

if(i2==$НAlНc&&$lo0Тр)
ok=false;

if(i2==$НAlНc)
if(mc.$cppее==-2)
{
if(mc.$1ooоT==1)
if($OН1оc>=6)
ok=false;

if(mc.$1ooоT==2)
if($IАрAH>=6)
ok=false;

if(mc.$1ooоT==3)
if($ccIсo>=6)
ok=false;
}

if(ok)
if(i2!==$НAlНc||$соесНl||$pНОoM(mc))
{
if(mc.$cppее==-2)
{
if(i2==$НAlНc)
{
if(mc.$1ooоT==1)
{
$OН1оc++;
$pрMТl();
}
if(mc.$1ooоT==2)
{
$IАрAH++;
$pрMТl();
}
if(mc.$1ooоT==3)
{
$ccIсo++;
$pрMТl();
}
}
}

if(i2==$НAlНc)
if(!$TАeр1)
{
if($pМОTМl)
$оp0Нc($OelМA,mc[$eТоM],mc[$рHОМ]);
}




mc.picken_by=i2;
if(i2!=$НAlНc)
if($eMOАе[$МАТОе]===-1||$еTорl($ОpMрс[i])>$еTорl($ОpMрс[$eMOАе[$МАТОе]]))
if(mc.$cppее>=0)
{
$eMOАе[$МАТОе]=i;
mc.$ОрОAA=0;
$o0MIс(i2);
}
if(i2==$НAlНc)
{
if(($ATоMс&&!$TАeр1)||($eMOАе.char==1&&$TАeр1&&curA==mc.model)||($eMOАе.char==3&&$TАeр1&&curB==mc.model))
{
if(mc.$cppее>=0)
{
$eMOАе[$МАТОе]=i;
$o0MIс(i2);
}
}
else
{
if(!$TАeр1)
if(mc.$cppее>=0)
if(mc.$cppее<=9)
$e1eoО[$оlАl+mc.$cppее].gotoAndStop(2);
}
$pрMТl();
}
}
}

function $oМТHТ($Т0TpA)
{
$еоНМо[$ТeeAo]=$Т0TpA;
$Т0TpA.gotoAndStop(2);
$Т0TpA[$МIIро]=15;
$Т0TpA.$НlТlО=2.6;


let of=$еeH1T+$ТeeAo;


$Т0TpA.$oA0cА=$0ТсTо($Т0TpA[$eТоM]-5,$Т0TpA[$рHОМ]-13,$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],7,false,3,of);
$Т0TpA.$cIToе=$0ТсTо($Т0TpA[$eТоM]+5,$Т0TpA[$рHОМ]-13,$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],7,false,3,of);
$Т0TpA.$ATМHl=$0ТсTо($Т0TpA[$eТоM]+5,$Т0TpA[$рHОМ]+13,$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],7,false,3,of);
$Т0TpA.$lМeOМ=$0ТсTо($Т0TpA[$eТоM]-5,$Т0TpA[$рHОМ]+13,$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],7,false,3,of);

$Т0TpA.$сIeоеО=$0pHАс($Т0TpA.$oA0cА,$Т0TpA.$cIToе,0,10,-1);
$Т0TpA.$р1ТрlТ=$0pHАс($Т0TpA.$oA0cА,$Т0TpA.$lМeOМ,0,26,-1);
$Т0TpA.$оpНАоM=$0pHАс($Т0TpA.$cIToе,$Т0TpA.$ATМHl,0,26,-1);
$Т0TpA.$соoIMО=$0pHАс($Т0TpA.$ATМHl,$Т0TpA.$lМeOМ,0,10,-1);

$Т0TpA.$HTАоМl=$0pHАс($Т0TpA.$oA0cА,$Т0TpA.$ATМHl,0,Math.sqrt(100+676),-1);
$Т0TpA.$роеpрН=$0pHАс($Т0TpA.$cIToе,$Т0TpA.$lМeOМ,0,Math.sqrt(100+676),-1);

if($Т0TpA[$IlТое]==$lТА1)
$Т0TpA.$НlТlО*=1.5;
if($Т0TpA[$IlТое]==$clрc)
$Т0TpA.$НlТlО*=2;

$ТeeAo++;
}
function $lTHМTM($Т0TpA,n,$ееоАН)
{
$Т0TpA.$MeсНе=$TТlАM;
$сoopT[$TТlАM]=$Т0TpA;
$Т0TpA.gotoAndStop(2);

$Т0TpA.$eрlсe=n;
$Т0TpA.$оeoТе=false;
$Т0TpA.$OOHAТ=-1;
$Т0TpA.$рeО0pA=-1;
$Т0TpA.$АoОcIT=-1;
$Т0TpA.$TОpHер=-1;

$Т0TpA.$ееоАН=$ееоАН;

$Т0TpA.$МАMНMМ=false;
$Т0TpA.io=true;
$Т0TpA[$оIpl]=$Аcle;

$Т0TpA.$1OА0o=null;

$Т0TpA.$peрНo=true;

let of=$0рМOН+$TТlАM;

if(n==0)
{
$Т0TpA[$оIpl]=$Т0TpA.gui.$pеMHH.text=$рAOOH;

$Т0TpA.carbody.scaleY=$Т0TpA.$ееоАН;

$Т0TpA[$МIIро]=400;
$Т0TpA.hmax=400;

$Т0TpA.$MpoсеM=$0ТсTо($Т0TpA[$eТоM]+$Т0TpA.w1[$eТоM]*$Т0TpA.$ееоАН,$Т0TpA[$рHОМ]+$Т0TpA.w1[$рHОМ],$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],32,true,4,of);
$Т0TpA.$МНIppО=$0ТсTо($Т0TpA[$eТоM]+$Т0TpA.$рАеIo0[$eТоM]*$Т0TpA.$ееоАН,$Т0TpA[$рHОМ]+$Т0TpA.$рАеIo0[$рHОМ],$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],32,true,4,of);

$Т0TpA.$ТA0OОl=$Т0TpA.$MpoсеM;
$Т0TpA.$оlНАMо=$Т0TpA.$МНIppО;

$Т0TpA.b_c=$0ТсTо($Т0TpA[$eТоM],$Т0TpA[$рHОМ],$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],35,false,5,of);

$Т0TpA.b_c2=$0ТсTо($Т0TpA[$eТоM]+$Т0TpA.w1[$eТоM]*$Т0TpA.$ееоАН,$Т0TpA[$рHОМ],$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],40,false,5,of);
$Т0TpA.b_c3=$0ТсTо($Т0TpA[$eТоM]+($Т0TpA.$рАеIo0[$eТоM]/2+10)*$Т0TpA.$ееоАН,$Т0TpA[$рHОМ]+20,$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],40,false,5,of);

for(i=0;i<2;i++)
{
$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$MpoсеM,$Т0TpA.$МНIppО,0,-1,1);
$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.b_c,$Т0TpA.$MpoсеM,0,-1,1);
$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.b_c,$Т0TpA.$МНIppО,0,-1,1);

$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.b_c,$Т0TpA.b_c2,0,-1,1);
$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$MpoсеM,$Т0TpA.b_c2,0,-1,1);
$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$МНIppО,$Т0TpA.b_c2,0,-1,1);

$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.b_c,$Т0TpA.b_c3,0,-1,1);
$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$MpoсеM,$Т0TpA.b_c3,0,-1,1);
$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$МНIppО,$Т0TpA.b_c3,0,-1,1);

$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.b_c2,$Т0TpA.b_c3,0,-1,1);
}


}
else
if(n==1)
{
$Т0TpA[$оIpl]=$Т0TpA.gui.$pеMHH.text=$Оеllo;

$Т0TpA[$МIIро]=300;
$Т0TpA.hmax=300;

$Т0TpA.$1АНlAс=0;
$Т0TpA.$opсТcр=0;
$Т0TpA.$сMpОoo=0;
$Т0TpA.$IсНIeе=Math.PI/2;
$Т0TpA.$o1oМеH=80;
$Т0TpA.$ОрОAA=0;


$Т0TpA.$c0НlТ=$0ТсTо($Т0TpA[$eТоM]+0*$Т0TpA.$ееоАН,$Т0TpA[$рHОМ],$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],45,false,5,of);
$Т0TpA.$рееоp=$0ТсTо($Т0TpA[$eТоM]+62*$Т0TpA.$ееоАН,$Т0TpA[$рHОМ],$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],50,false,5,of);
$Т0TpA.$0poolе=$0ТсTо($Т0TpA[$eТоM]+0*$Т0TpA.$ееоАН,$Т0TpA[$рHОМ]-50,$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],50,false,5,of);

$Т0TpA.$MpoсеM=$0ТсTо($Т0TpA[$eТоM]+5*$Т0TpA.$ееоАН,$Т0TpA[$рHОМ]+210,$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],30,false,6,of);
$Т0TpA.$МНIppО=$0ТсTо($Т0TpA[$eТоM]-5*$Т0TpA.$ееоАН,$Т0TpA[$рHОМ]+210,$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],30,false,6,of);

$Т0TpA.$ТA0OОl=$0ТсTо($Т0TpA[$eТоM]+2.5*$Т0TpA.$ееоАН,$Т0TpA[$рHОМ]+210/2,$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],40,false,5,of);
$Т0TpA.$оlНАMо=$0ТсTо($Т0TpA[$eТоM]-2.5*$Т0TpA.$ееоАН,$Т0TpA[$рHОМ]+210/2,$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],40,false,5,of);
$HОpcl=1;
for(i=0;i<2;i++)
{
$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$c0НlТ,$Т0TpA.$рееоp,0,-1,$HОpcl);
$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$рееоp,$Т0TpA.$0poolе,0,-1,$HОpcl);
$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$c0НlТ,$Т0TpA.$0poolе,0,-1,$HОpcl);

$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$c0НlТ,$Т0TpA.$MpoсеM,2,180,$HОpcl);
$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$c0НlТ,$Т0TpA.$МНIppО,2,180,$HОpcl);

$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$c0НlТ,$Т0TpA.$MpoсеM,1,40,$HОpcl);
$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$c0НlТ,$Т0TpA.$МНIppО,1,40,$HОpcl);

$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$0poolе,$Т0TpA.$MpoсеM,1,110,$HОpcl);
$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$0poolе,$Т0TpA.$МНIppО,1,110,$HОpcl);

$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$рееоp,$Т0TpA.$MpoсеM,1,130,$HОpcl);
$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$рееоp,$Т0TpA.$МНIppО,1,130,$HОpcl);




$Т0TpA.$cpAАр=$0pHАс($Т0TpA.$c0НlТ,$Т0TpA.$ТA0OОl,0,210/2,0.1);
$Т0TpA.$HeрoI1=$0pHАс($Т0TpA.$MpoсеM,$Т0TpA.$ТA0OОl,0,210/2,0.1);

$Т0TpA.$l0ТMМ1=$0pHАс($Т0TpA.$c0НlТ,$Т0TpA.$оlНАMо,0,210/2,0.1);
$Т0TpA.$ое0ОlМ=$0pHАс($Т0TpA.$МНIppО,$Т0TpA.$оlНАMо,0,210/2,0.1);
}
$Т0TpA.$роеpрН=$0pHАс($Т0TpA.$MpoсеM,$Т0TpA.$МНIppО,2,150,$HОpcl);

$Т0TpA.$ooНMН[$eТоM]=0;
$Т0TpA.$ooНMН[$рHОМ]=0;
$Т0TpA.$0T1MH[$eТоM]=0;
$Т0TpA.$0T1MH[$рHОМ]=0;

$Т0TpA.$ooНMН.scaleX=$Т0TpA.$ееоАН;
$Т0TpA.$0T1MH.scaleX=$Т0TpA.$ееоАН;

$Т0TpA.$рeTОTo.scaleX=$Т0TpA.$ееоАН;
$Т0TpA.$1еT0c0.scaleX=$Т0TpA.$ееоАН;

$Т0TpA.carbody.scaleY=$Т0TpA.$ееоАН;
}
else
if(n==2)
{
$Т0TpA[$оIpl]=$Т0TpA.gui.$pеMHH.text=$lTМMр;


$Т0TpA.$ееоАН=1;

$Т0TpA[$МIIро]=10;
$Т0TpA.hmax=10;



$Т0TpA.$oIHАHc=$0ТсTо($Т0TpA[$eТоM]-16.4,$Т0TpA[$рHОМ]-53.6,$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],10,false,7,of);
$Т0TpA.$Арс0ce=$0ТсTо($Т0TpA[$eТоM]+16.4,$Т0TpA[$рHОМ]-53.6,$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],10,false,7,of);
$Т0TpA.$МрII1А=$0ТсTо($Т0TpA[$eТоM]-16.4,$Т0TpA[$рHОМ]+53.6,$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],10,false,7,of);
$Т0TpA.$TоТpAе=$0ТсTо($Т0TpA[$eТоM]+16.4,$Т0TpA[$рHОМ]+53.6,$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],10,false,7,of);

$Т0TpA.$оOО1HТ=$0ТсTо($Т0TpA[$eТоM]-16.4,$Т0TpA[$рHОМ]-53.6,$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],10,false,7,of);
$Т0TpA.$00АoOН=$0ТсTо($Т0TpA[$eТоM]+16.4,$Т0TpA[$рHОМ]-53.6,$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],10,false,7,of);
$Т0TpA.$oОTТTp=$0ТсTо($Т0TpA[$eТоM]-16.4,$Т0TpA[$рHОМ]+53.6,$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],10,false,7,of);
$Т0TpA.$ОOAT0l=$0ТсTо($Т0TpA[$eТоM]+16.4,$Т0TpA[$рHОМ]+53.6,$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],10,false,7,of);

for(i=0;i<2;i++)
{
$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$oIHАHc,$Т0TpA.$Арс0ce,0,-1,1);
$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$МрII1А,$Т0TpA.$TоТpAе,0,-1,1);

$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$оOО1HТ,$Т0TpA.$oОTТTp,0,-1,1);
$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$00АoOН,$Т0TpA.$ОOAT0l,0,-1,1);
}
$Т0TpA.$cTTсос=$0pHАс($Т0TpA.$oIHАHc,$Т0TpA.$оOО1HТ,0,-1,1);
$Т0TpA.$0АMeТТ=$0pHАс($Т0TpA.$Арс0ce,$Т0TpA.$00АoOН,0,-1,1);
$Т0TpA.$Не0срО=$0pHАс($Т0TpA.$МрII1А,$Т0TpA.$oОTТTp,0,-1,1);
$Т0TpA.$eсoМ1M=$0pHАс($Т0TpA.$TоТpAе,$Т0TpA.$ОOAT0l,0,-1,1);

$Т0TpA.$MНоТ0О=$0pHАс($Т0TpA.$oIHАHc,$Т0TpA.$TоТpAе,0,-1,1);
$Т0TpA.$I0IIАl=$0pHАс($Т0TpA.$Арс0ce,$Т0TpA.$МрII1А,0,-1,1);
$Т0TpA.$оpсcМТ=$0pHАс($Т0TpA.$оOО1HТ,$Т0TpA.$ОOAT0l,0,-1,1);
$Т0TpA.$1МНОIе=$0pHАс($Т0TpA.$00АoOН,$Т0TpA.$oОTТTp,0,-1,1);

}
else
if(n==3)
{

$Т0TpA.gotoAndStop(1);

$Т0TpA[$МIIро]=20;
$Т0TpA.hmax=20;
$Т0TpA.$ееоАН=1;

$Т0TpA.$AMeeре=10;

$Т0TpA[$оIpl]=$Т0TpA.gui.$pеMHH.text=$Аcle;

$Т0TpA.gui.visible=false;

$Т0TpA.$oIHАHc=$0ТсTо($Т0TpA[$eТоM]-20,$Т0TpA[$рHОМ]-20,$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],10,false,9,of);
$Т0TpA.$Арс0ce=$0ТсTо($Т0TpA[$eТоM]+20,$Т0TpA[$рHОМ]-20,$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],10,false,9,of);
$Т0TpA.$МрII1А=$0ТсTо($Т0TpA[$eТоM]-20,$Т0TpA[$рHОМ]+20,$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],10,false,9,of);
$Т0TpA.$TоТpAе=$0ТсTо($Т0TpA[$eТоM]+20,$Т0TpA[$рHОМ]+20,$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],10,false,9,of);

$Т0TpA.b_c=$0ТсTо($Т0TpA[$eТоM],$Т0TpA[$рHОМ],$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],25,false,9,of);



{
$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$oIHАHc,$Т0TpA.$Арс0ce,0,-1,1);
$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$МрII1А,$Т0TpA.$TоТpAе,0,-1,1);

$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$oIHАHc,$Т0TpA.$МрII1А,0,-1,1);
$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$Арс0ce,$Т0TpA.$TоТpAе,0,-1,1);

$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$oIHАHc,$Т0TpA.$TоТpAе,0,-1,1);
$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$Арс0ce,$Т0TpA.$МрII1А,0,-1,1);



$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$oIHАHc,$Т0TpA.b_c,0,-1,1);
$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$МрII1А,$Т0TpA.b_c,0,-1,1);

$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$oIHАHc,$Т0TpA.b_c,0,-1,1);
$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.$Арс0ce,$Т0TpA.b_c,0,-1,1);
}


}
else
if(n==4)
{
$Т0TpA[$оIpl]=$Т0TpA.gui.$pеMHH.text=$оeсАc;

$Т0TpA.$МАMНMМ=true;
$Т0TpA.carbody.scaleY=$Т0TpA.$ееоАН;

$Т0TpA[$МIIро]=100;
$Т0TpA.hmax=100;

$Т0TpA.b_c=$0ТсTо($Т0TpA[$eТоM],$Т0TpA[$рHОМ],$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],10,false,7,of);
$Т0TpA.b_c1=$0ТсTо($Т0TpA[$eТоM]+15*$Т0TpA.$ееоАН,$Т0TpA[$рHОМ],$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],10,false,7,of);

$Т0TpA.b_c2=$0ТсTо($Т0TpA[$eТоM],$Т0TpA[$рHОМ]+17,$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],3,false,7,of);
$Т0TpA.b_c3=$0ТсTо($Т0TpA[$eТоM]+15*$Т0TpA.$ееоАН,$Т0TpA[$рHОМ]+17,$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],3,false,7,of);

for(i=0;i<1;i++)
{
$0pHАс($Т0TpA.b_c,$Т0TpA.b_c1,0,-1,1);
$0pHАс($Т0TpA.b_c,$Т0TpA.b_c2,0,-1,1);
$0pHАс($Т0TpA.b_c,$Т0TpA.b_c3,0,-1,1);
$0pHАс($Т0TpA.b_c1,$Т0TpA.b_c2,0,-1,1);
$0pHАс($Т0TpA.b_c1,$Т0TpA.b_c3,0,-1,1);
$0pHАс($Т0TpA.b_c2,$Т0TpA.b_c3,0,-1,1);
}

}
else
if(n==5)
{
$Т0TpA[$МIIро]=70;
$Т0TpA.hmax=70;


$Т0TpA[$оIpl]=$Т0TpA.gui.$pеMHH.text=$Аcle;
$Т0TpA.gui.visible=false;
$Т0TpA.$Ae0lTр=0;


for(i=0;i<10;i++)
{
$Т0TpA[$e0leА+i]=$0ТсTо($Т0TpA[$eТоM],$Т0TpA[$рHОМ]+20*i,$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],0,false,4,of);
}


for(i=0;i<10;i++)
{









if(i+1<10)
$0pHАс($Т0TpA[$e0leА+i],$Т0TpA[$e0leА+(i+1)],0,-1,1);

if(i+2<10)
$0pHАс($Т0TpA[$e0leА+i],$Т0TpA[$e0leА+(i+2)],0,-1,1);

if(9-i-1>0)
$0pHАс($Т0TpA[$e0leА+(9-i)],$Т0TpA[$e0leА+(9-i-1)],0,-1,1);

if(9-i-2>0)
$0pHАс($Т0TpA[$e0leА+(9-i)],$Т0TpA[$e0leА+(9-i-2)],0,-1,1);
}







}
else
if(n==6)
{
$Т0TpA[$МIIро]=70;
$Т0TpA.hmax=70;

$Т0TpA.$TAесс=-1;

if(!HINTS)
$Т0TpA.origin.visible=false;

$Т0TpA.gui.$pеMHH.text=$0HНoA;
$Т0TpA.gui.visible=false;
$Т0TpA.$Ae0lTр=0;

}
else
if(n==7)
{
$Т0TpA[$оIpl]=$Т0TpA.gui.$pеMHH.text=$рcHрe;

$Т0TpA.$МАMНMМ=true;
$Т0TpA.carbody.scaleY=$Т0TpA.$ееоАН;

$Т0TpA[$МIIро]=100;
$Т0TpA.hmax=100;

$Т0TpA.b_c=$0ТсTо($Т0TpA[$eТоM],$Т0TpA[$рHОМ],$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],36,false,4,of);
$Т0TpA.b_c1=$0ТсTо($Т0TpA[$eТоM]+90*$Т0TpA.$ееоАН,$Т0TpA[$рHОМ],$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],36,false,4,of);

$Т0TpA.b_c2=$0ТсTо($Т0TpA[$eТоM],$Т0TpA[$рHОМ]+26,$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],36,false,4,of);
$Т0TpA.b_c3=$0ТсTо($Т0TpA[$eТоM]+90*$Т0TpA.$ееоАН,$Т0TpA[$рHОМ]+26,$Т0TpA[$АсТOе],$Т0TpA[$МcеAH],36,false,4,of);

for(i=0;i<1;i++)
{
$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.b_c,$Т0TpA.b_c1,0,-1,1);
$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.b_c,$Т0TpA.b_c2,0,-1,1);
$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.b_c,$Т0TpA.b_c3,0,-1,1);
$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.b_c1,$Т0TpA.b_c2,0,-1,1);
$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.b_c1,$Т0TpA.b_c3,0,-1,1);
$Т0TpA.$lМMТАТ=$0pHАс($Т0TpA.b_c2,$Т0TpA.b_c3,0,-1,1);
}

}

if($pMМ1)
{
$Т0TpA.gui.visible=false;
}



if(n===6)
{
$Т0TpA.$TIcоAe=[];

$Т0TpA.$AeA1Оe=(player)=>
{
if(player.$ОMррe!==-1)
{
8;











}

let id=$Т0TpA.$TIcоAe.indexOf(player);
if(id>=0)
8;
else
$Т0TpA.$TIcоAe.push(player);

player.$ОMррe=$Т0TpA.$MeсНе;
};

$Т0TpA.$oАOТТI=(player)=>
{
if(player.$ОMррe!==$Т0TpA.$MeсНе)
{
8;
}

let id=$Т0TpA.$TIcоAe.indexOf(player);
if(id>=0)
$Т0TpA.$TIcоAe.splice(id,1);
else
8;

player.$ОMррe=-1;
};

$Т0TpA.$НоH0lM=()=>
{
while($Т0TpA.$TIcоAe.length>0)
$Т0TpA.$oАOТТI($Т0TpA.$TIcоAe[0]);
};
}

















$TТlАM++;
}

var $рOрlоI;
function $1ОHоОА($HОpcl,$llМTO,$МecHM)
{

{

if($АTO10===1||$АTO10===3)
{
if($сTpНО($HОpcl)>$сTpНО($llМTO))
{
if($HОpcl<0)
stage[$ooHAM+0].alpha+=$МecHM*0.1;
else
stage[$ooHAM+1].alpha+=$МecHM*0.1;
}
else
{
if($llМTO<0)
stage[$ooHAM+3].alpha+=$МecHM*0.1;
else
stage[$ooHAM+2].alpha+=$МecHM*0.1;
}

for($рOрlоI=0;$рOрlоI<4;$рOрlоI++)
{
stage[$ooHAM+$рOрlоI].alpha+=$МecHM*0.015;
stage[$ooHAM+$рOрlоI].visible=true;

if(stage[$ooHAM+$рOрlоI].alpha>0.9)
stage[$ooHAM+$рOрlоI].alpha=0.9;
}
}
else
if($АTO10==2)
{
if($сTpНО($HОpcl)>$сTpНО($llМTO))
{
if($HОpcl<0)
stage[$ooHAM+0].alpha+=$МecHM*0.3;
else
stage[$ooHAM+1].alpha+=$МecHM*0.3;
}
else
{
if($llМTO<0)
stage[$ooHAM+3].alpha+=$МecHM*0.3;
else
stage[$ooHAM+2].alpha+=$МecHM*0.3;
}
if($00МeI)
{
stage[$ooHAM+4].alpha+=$МecHM*0.015;
for($рOрlоI=0;$рOрlоI<5;$рOрlоI++)
{
stage[$ooHAM+4].visible=true;
if(stage[$ooHAM+$рOрlоI].alpha>0.9)
stage[$ooHAM+$рOрlоI].alpha=0.9;
}
}
else
{
for($рOрlоI=0;$рOрlоI<4;$рOрlоI++)
{
stage[$ooHAM+4].visible=true;
if(stage[$ooHAM+$рOрlоI].alpha>0.9)
stage[$ooHAM+$рOрlоI].alpha=0.9;
}
}
}
}








if($0Ме1А[$НAlНc][$МIIро]<=0)
{
if(!$0Ме1А[$НAlНc].$оeoТе)
{
$pe0AТ=false;

if($OOH0А!=null)
{
$OOH0А.stop();
$OOH0А=null;
}

if(!$00pеH)
if(BEEP_ON_DEATH)
$OOH0А=$ОАcрcМ.play(0,0,$ТрОТе);

}
}
else
{
if(BEEP_ON_LOW_HEALTH)
if($0Ме1А[$НAlНc][$МIIро]/$0Ме1А[$НAlНc].hmax<$oоMеM)
if(!$pe0AТ)
{
$pe0AТ=true;
if($OOH0А!=null)
{
$OOH0А.stop();
$OOH0А=null;
}

if(!$00pеH)
if($НllIo!==0)
if($сТMТM<10)
{
$OOH0А=$MOHTT.play(0,0,$ТрОТе);

if($OOH0А!=null)
$OOH0А.addEventListener(Event.SOUND_COMPLETE,$cНOМH);
}
}
}








}

function $Hерoоe($Т0TpA)
{

if(!$Т0TpA.$loАoM&&(!$Т0TpA.$HМ0М1||!$pMМ1||$Т0TpA[$cАocе]==$0Ме1А[$НAlНc][$cАocе]))
{
$Т0TpA.$ooAOе=0;

if($Т0TpA[$0MТce]==-1)
{





























































































if($Т0TpA[$lоАо].$соMер.length>0)
$MрТ1o($Т0TpA,$Т0TpA[$lоАо].$соMер[Math.floor(Math.random()*$Т0TpA[$lоАо].$соMер.length)]);
}
}

}
function $НТсclT()
{
for(let i2=0;i2<$cс0Hс;i2++)
{
if($ОpMрс[i2].picken_by!==-1)
if($ОpMрс[i2].picken_by===$НAlНc||($0Ме1А[$ОpMрс[i2].picken_by]&&!$0Ме1А[$ОpMрс[i2].picken_by].$HМ0М1))
{
if(!$ОpMрс[i2].$соТAТ)
{
let $рelOеO=$ОpMрс[i2].picken_by;

if($0Ме1А[$рelOеO][$МАТОе]===i2)
$0Ме1А[$рelOеO][$МАТОе]=-1;

$ОpMрс[i2].picken_by=-1;

$o0MIс($рelOеO);
}
}
}
}
function $MрHMрI()
{
$pООро=$МАHре;
$0lHре=$оTМрH;

$0oоАlc(1000000);

$0оТOT++;

$HAoТAl();

let $AMTT1;
let mc;

for($AMTT1=0;$AMTT1<$ТeeAo;$AMTT1++)
{
if(game.contains($еоНМо[$AMTT1]))
{
$еоНМо[$AMTT1].visible=false;
game.removeChild($еоНМо[$AMTT1]);
$еоНМо[$AMTT1]=null;
}
}
$ТeeAo=0;
for($AMTT1=0;$AMTT1<$HМАрр.length;$AMTT1++)
{

if($HМАрр[$AMTT1][$IlТое]==$АНpo)
mc=game.addChildAt(new bar_orange,game.numChildren);
if($HМАрр[$AMTT1][$IlТое]==$lТА1)
mc=game.addChildAt(new bar_blue,game.numChildren);
if($HМАрр[$AMTT1][$IlТое]==$clрc)
mc=game.addChildAt(new bar_red,game.numChildren);
$сOoНН(mc);
mc[$IlТое]=$HМАрр[$AMTT1][$IlТое];
mc[$eТоM]=$HМАрр[$AMTT1][$eТоM];
mc[$рHОМ]=$HМАрр[$AMTT1][$рHОМ];
mc[$АсТOе]=$HМАрр[$AMTT1][$АсТOе];
mc[$МcеAH]=$HМАрр[$AMTT1][$МcеAH];
mc.$OOHAТ=-1;
$oМТHТ(mc);
}

var $рo1OОМ=false;
for(i2=0;i2<$М0AAe;i2++)
if($TTTоо[i2]==0)
{
$TTTоо[i2]=1;

for($АeMАН=0;$АeMАН<$IАccH;$АeMАН++)
if($Alcсe[$АeMАН][$eТоM]==$McТеT[i2])
if($Alcсe[$АeMАН][$рHОМ]==$ооeep[i2])
{
$Alcсe[$АeMАН].scaleX=$Alcсe[$АeMАН].scaleX=1;
}
$рo1OОМ=true;
}
$0АТсHl=10;
if($рo1OОМ)
$IpорHр(false);











for($AMTT1=0;$AMTT1<$eсАeA;$AMTT1++)
{
let mc=$0Ме1А[$AMTT1];

if(!mc.$HМ0М1)
{
$IHcоТ($AMTT1);





mc[$eТоM]=mc.$Тссес;
mc[$рHОМ]=mc.$I0IНA;
mc[$АсТOе]=0;
mc[$МcеAH]=0;
mc.$eoОpА=1;
mc[$0MТce]=-1;
mc.$ееоАН=mc.$AсоНТ0;
mc[$cАocе]=mc.$ОМlАAА;
mc.char=mc.$OОТpMо;
mc[$leAсO]=mc.$рHОМMM;
mc.$оeoТе=false;
mc[$МIIро]=mc.hmax;
mc.$loАoM=false;
mc.io=true;
mc.visible=true;
mc.alpha=1;


mc[$lо0HH]=mc[$eТоM]+mc.$ееоАН*100;
mc[$еоOOА]=mc[$рHОМ];


mc.$1МI0р=$oеAIН;

mc.effects.length=0;

mc.$AМIМ1=0;
mc.$TНесe=0;
mc.$рoeсl=false;

mc.$ОрОAA=0;

mc.$ААНММ=(Math.max(mc[$МIIро]*0.4,30));
mc.$НТcep=(Math.max(mc[$МIIро]*0.6,30));
mc.$HAрH1=(Math.max(mc[$МIIро]*0.5,30));
mc.$lMIсo=(Math.max(mc[$МIIро]*0.4,30));

mc[$oрOoА]=(Math.random());
mc[$АТHММ]=(Math.random());
mc[$lHсHO]=(Math.random());
mc[$cАТAT]=0;

$IHcоТ($AMTT1);

for($рАНlI=0;$рАНlI<$pООро;$рАНlI++)
if($о1oHМ[$рАНlI]==$AMTT1)
{
$IcМMc[$рАНlI]=$Il[$рАНlI]=mc.$Тссес;
$MA0е1[$рАНlI]=$0OA[$рАНlI]=mc.$I0IНA;

$OTpc1[$рАНlI]=0;
$IрТ0H[$рАНlI]=0;

$рeМрp[$рАНlI]=0;
}



}

mc.$рoААA=0;
}

if(!$00pеH)
{
mc=$0Ме1А[$НAlНc];

if(!mc.$оeoТе)
{
$0IОее=$0Ме1А[$НAlНc][$МАТОе];
}

$MoIoр=[];
$0еeоM=0;
$IIIсA=-1;

$оHTоТ=[];


$рТTcl=0;
$Оocec=0;
$ОеoIc=[];

mc.$АTТМc=-1;
mc.$Т10е1=0;
mc[$МIIро]=$0Ме1А[$НAlНc].hmax;
mc.$eoОpА=1;
mc[$АсТOе]=0;
mc[$МcеAH]=0;
mc[$eТоM]=mc.$Тссес;
mc[$рHОМ]=mc.$I0IНA;
mc.$ААНММ=$0Ме1А[$НAlНc][$МIIро];
mc.$lMIсo=$0Ме1А[$НAlНc][$МIIро];
mc.$HAрH1=$0Ме1А[$НAlНc][$МIIро];
mc.$НТcep=$0Ме1А[$НAlНc][$МIIро];
mc[$МАТОе]=-1;
mc.$оeoТе=false;
mc.$loАoM=false;

mc.effects.length=0;

$OН1оc=$cоcAM;
$IАрAH=$11сoH;
$ccIсo=$coТcТ;



$pрMТl();




$IHcоТ($НAlНc);

$AOеоО($0Ме1А[$НAlНc]);

u=$Il[$0Ме1А[$НAlНc].$MОеМ1]-mc.$Тссес;
v=$0OA[$0Ме1А[$НAlНc].$MОеМ1]-mc.$I0IНA;

for($AMTT1=0;$AMTT1<$pООро;$AMTT1++)
if($о1oHМ[$AMTT1]==$НAlНc)
{

$Il[$AMTT1]-=u;
$0OA[$AMTT1]-=v;

$IcМMc[$AMTT1]-=u;
$MA0е1[$AMTT1]-=v;

$рeМрp[$AMTT1]=0;

$OTpc1[$AMTT1]=0;
$IрТ0H[$AMTT1]=0;

if(isNaN($Il[$AMTT1]))
{
$Il[$AMTT1]=mc.$Тссес;
$IcМMc[$AMTT1]=mc.$Тссес;
}
if(isNaN($Il[$AMTT1]))
{
$0OA[$AMTT1]=mc.$I0IНA;
$MA0е1[$AMTT1]=mc.$I0IНA;
}

}


$ММ.Event($ММ[$рсcAМ],$ММ.$Oоolр(mc[$eТоM]),$ММ.$Oоolр(mc[$рHОМ]),$ММ.$Oоolр(mc[$МIIро]));
mc[$рАр0T]++;
}

for($AMTT1=0;$AMTT1<$сMelН;$AMTT1++)
{
mc=$АAHОе[$AMTT1];
mc[$lо0HH]=mc.$IlHlH;
mc[$еоOOА]=mc.$еТрcО;

mc[$eТоM]=mc.$MМАНcН;
mc[$рHОМ]=mc.$pIАlМ;

mc.$1TIeе=mc.$1НOМAM;

mc[$АсТOе]=0;
mc[$МcеAH]=0;

mc.$oec0O=mc.$0еТНl1;

$оМoОНI($AMTT1,0,0);
}

for($AMTT1=0;$AMTT1<$орeМo;$AMTT1++)
{
$eННА[$AMTT1].$oOlОO=$eННА[$AMTT1].$АpсleT;
$eННА[$AMTT1].$cААТ1=$eННА[$AMTT1].$оpMМ0;
}
for($AMTT1=0;$AMTT1<$p0lIе;$AMTT1++)
{

$o0IсО[$AMTT1].$oOlОO=$o0IсО[$AMTT1].$АpсleT;
$o0IсО[$AMTT1].$cААТ1=$o0IсО[$AMTT1].$оpMМ0;
$o0IсО[$AMTT1].$cTOHl=$o0IсО[$AMTT1].$pAopоH;
$o0IсО[$AMTT1].$OАосс=0;
}


$AMTT1=-1;

for(i2=0;i2<$cс0Hс;i2++)
{
if(i2>=$ТMТlр0)
{


$ОpMрс[i2].io=false;
$ОpMрс[i2].alpha=0;
continue;
}


$ОpMрс[i2].io=true;
$ОpMрс[i2].alpha=1;


$ОpMрс[i2].$0TlIcM();
$ОpMрс[i2].$ОрОAA=0;

if($ОpMрс[i2].picken_by!=-1)
{
if(!$ОpMрс[i2].$соТAТ)
{
if($0Ме1А[$ОpMрс[i2].picken_by][$МАТОе]===i2)
$0Ме1А[$ОpMрс[i2].picken_by][$МАТОе]=-1;

$ОpMрс[i2].picken_by=-1;
}
}

$ОpMрс[i2].scaleX=1;
$ОpMрс[i2].scaleY=1;

$ОpMрс[i2].$TМoсc=$ОpMрс[i2].$TсlceМ;
$IcМMc[$ОpMрс[i2].$c0НlТ]=$Il[$ОpMрс[i2].$c0НlТ]=$ОpMрс[i2].$Тссес+$ОpMрс[i2].$ТHoМс;
$IcМMc[$ОpMрс[i2].$рееоp]=$Il[$ОpMрс[i2].$рееоp]=$ОpMрс[i2].$Тссес+$ОpMрс[i2].$eHоНс;
$MA0е1[$ОpMрс[i2].$c0НlТ]=$0OA[$ОpMрс[i2].$c0НlТ]=$ОpMрс[i2].$I0IНA;
$MA0е1[$ОpMрс[i2].$рееоp]=$0OA[$ОpMрс[i2].$рееоp]=$ОpMрс[i2].$I0IНA;
$OTpc1[$ОpMрс[i2].$c0НlТ]=0;
$OTpc1[$ОpMрс[i2].$рееоp]=0;

$IрТ0H[$ОpMрс[i2].$c0НlТ]=0;
$IрТ0H[$ОpMрс[i2].$рееоp]=0;






$0Н0Тl($ОpMрс[i2].$c0НlТ);
$0Н0Тl($ОpMрс[i2].$рееоp);

$еАеО1($ОpMрс[i2].model,$ОpMрс[i2],true);

if(!$00pеH)
if($ОpMрс[i2].$cppее!=-2)
if($ОpMрс[i2].$Тссес>$0Ме1А[$НAlНc][$eТоM]-40)
if($ОpMрс[i2].$Тссес<$0Ме1А[$НAlНc][$eТоM]+40)
if($ОpMрс[i2].$I0IНA>$0Ме1А[$НAlНc][$рHОМ]-90)
if($ОpMрс[i2].$I0IНA<$0Ме1А[$НAlНc][$рHОМ]+30)
{
ok=true;

for($0ОoHс=0;$0ОoHс<$cс0Hс&&ok;$0ОoHс++)
if($ОpMрс[$0ОoHс].io)
if(i2!=$0ОoHс)
if(!$ОpMрс[$0ОoHс].$соТAТ)
{
if($ОpMрс[$0ОoHс].picken_by==$НAlНc&&$ОpMрс[$0ОoHс].$cppее==$ОpMрс[i2].$cppее)
ok=false;
}

if(ok)
{
$ОpMрс[i2].picken_by=$НAlНc;

if($ОpMрс[i2][$clcре]>0)
$AMTT1=i2;
}
}


}


while($cс0Hс>$ТMТlр0&&
$cс0Hс-1>=0&&
!$ОpMрс[$cс0Hс-1].io)
{
$cс0Hс--;
}



if(!$00pеH)
{
if($0оТOT==1||($0IОее!=-1&&($ОpMрс[$0IОее].picken_by!=$НAlНc)))
{
$0Ме1А[$НAlНc][$МАТОе]=$AMTT1;
}
else
{
$0Ме1А[$НAlНc][$МАТОе]=$0IОее;
}
$o0MIс($НAlНc);
}
$pрMТl();





for(i=0;i<=$есНI0;i++)
{
if($IТТII[i]!=null)
if($IТТII[i].visible==true)
{
$HOНОO(i);
















}
}

for(i=0;i<$TТlАM;i++)
if($сoopT[i].io)
{
mc=$сoopT[i];

if(mc.$НоH0lM)
mc.$НоH0lM();
}


if($0lpеo&&$00МeI)
{
$eMpсp.alpha=1;
$eMpсp.visible=true;
}


for(var i=0;i<$орeМo;i++)
{
if($eННА[i].$1lTcТе)
$pАTIТ(i);
};

$ОНAMр();
}

function $IHcоТ(n)
{
if($oАlоO)
if(VIOLENCE||$о0Мp0||$pMМ1)
{
if($0Ме1А[n].$HAрH1<=0)
{
if(!$0Ме1А[n].$AIpAe)
{

if($0Ме1А[n][$0OАс]==2)
$оp0Нc($HMcоМA,$Il[$0Ме1А[n].$MОеМ1],$0OA[$0Ме1А[n].$MОеМ1]);
else
$оp0Нc($еАlIHO,$Il[$0Ме1А[n].$MОеМ1],$0OA[$0Ме1А[n].$MОеМ1]);

$0Ме1А[n].$AIpAe=true;
if(VIOLENCE)
{


$TlАcо($0Ме1А[n].$ooНMН.middle);
$TlАcо($0Ме1А[n].$0T1MH.middle);

$0Ме1А[n].$ooНMН.lower.visible=false;
$0Ме1А[n].$0T1MH.lower.visible=false;

$0Ме1А[n].$ooНMН.middle.gotoAndStop(30);
$0Ме1А[n].$0T1MH.middle.gotoAndStop(30);

$0Ме1А[n].$ooНMН.middle.transform.colorTransform=new ColorTransform($0Ме1А[n].$Alр10,$0Ме1А[n].$оМcHM,$0Ме1А[n].$рМMоО,1,0,0,0,0);
$0Ме1А[n].$0T1MH.middle.transform.colorTransform=new ColorTransform($0Ме1А[n].$Alр10,$0Ме1А[n].$оМcHM,$0Ме1А[n].$рМMоО,1,0,0,0,0);











}

$оОlHT[$0Ме1А[n].$НТсМТ]*=0.3;
$оОlHT[$0Ме1А[n].$р1eНM]*=0.3;

$cТеМо[$0Ме1А[n].$оМНеI]=20*$0Ме1А[n].scale;
$cТеМо[$0Ме1А[n].$lТОАM]=20*$0Ме1А[n].scale;

$НOрНр[$0Ме1А[n].$о1еlО]=-1;
$НOрНр[$0Ме1А[n].$ооОcI]=-1;

$cТеМо[$0Ме1А[n].$HeTсM]*=0.6;
$cТеМо[$0Ме1А[n].$TAHII]*=0.6;
$OОHMp=n;
$АATHc($Il[$0Ме1А[n].$НТсМТ],$0OA[$0Ме1А[n].$НТсМТ]-Math.random()*20,0,-2+Math.random()*4,-2+Math.random()*4,6);
$АATHc($Il[$0Ме1А[n].$НТсМТ],$0OA[$0Ме1А[n].$НТсМТ]-Math.random()*20,0,-2+Math.random()*4,-2+Math.random()*4,6);
$Нес1p($0Ме1А[n]);

if($pMМ1&$IHТcc)
if($0Ме1А[n][$МIIро]>0)
if($0Ме1А[n].$HМ0М1)
if($0Ме1А[n].$АTТМc===$НAlНc)
if($0Ме1А[n][$cАocе]!==$0Ме1А[$НAlНc])
{
$ОpOc0($lТeо0H,$0Ме1А[n][$оIpl]);
}
}
}
else
{
if($0Ме1А[n].$AIpAe)
{
$0Ме1А[n].$AIpAe=false;
$0Ме1А[n].$ooНMН.lower.visible=true;
$0Ме1А[n].$0T1MH.lower.visible=true;

$0Ме1А[n].$ooНMН.middle.transform.colorTransform=new ColorTransform(1,1,1,1,0,0,0,0);
$0Ме1А[n].$0T1MH.middle.transform.colorTransform=new ColorTransform(1,1,1,1,0,0,0,0);


$оОlHT[$0Ме1А[n].$НТсМТ]/=0.3;
$оОlHT[$0Ме1А[n].$р1eНM]/=0.3;

$cТеМо[$0Ме1А[n].$оМНеI]=31*$0Ме1А[n].scale;
$cТеМо[$0Ме1А[n].$lТОАM]=31*$0Ме1А[n].scale;

$НOрНр[$0Ме1А[n].$о1еlО]=true;
$НOрНр[$0Ме1А[n].$ооОcI]=true;

$cТеМо[$0Ме1А[n].$HeTсM]/=0.6;
$cТеМо[$0Ме1А[n].$TAHII]/=0.6;

$AOеоО($0Ме1А[n]);
}
}
if($0Ме1А[n].$lMIсo<=0)
{
if(!$0Ме1А[n].$ААpес)
{

if($0Ме1А[n][$0OАс]==2)
$оp0Нc($HMcоМA,$Il[$0Ме1А[n].$MОеМ1],$0OA[$0Ме1А[n].$MОеМ1]);
else
$оp0Нc($еАlIHO,$Il[$0Ме1А[n].$рсOОА],$0OA[$0Ме1А[n].$рсOОА]);

$0Ме1А[n].$ААpес=true;

if(VIOLENCE)
{


$TlАcо($0Ме1А[n].$АсIее.lower);
$TlАcо($0Ме1А[n].$ТНpТI.lower);

$0Ме1А[n].$АсIее.lower.gotoAndStop(20);
$0Ме1А[n].$ТНpТI.lower.gotoAndStop(20);

if($0Ме1А[n].$АсIее.lower.$оАОНА!=null)
$0Ме1А[n].$АсIее.lower.$оАОНА.visible=false;
if($0Ме1А[n].$ТНpТI.lower.$оАОНА!=null)
$0Ме1А[n].$ТНpТI.lower.$оАОНА.visible=false;


}

$оОlHT[$0Ме1А[n].$оОlТМ]*=0.4;
$оОlHT[$0Ме1А[n].$1O1lM]*=0.4;

if(VIOLENCE)
{
$0Ме1А[n].$АсIее.lower.transform.colorTransform=new ColorTransform($0Ме1А[n].$Alр10,$0Ме1А[n].$оМcHM,$0Ме1А[n].$рМMоО,1,0,0,0,0);
$0Ме1А[n].$ТНpТI.lower.transform.colorTransform=new ColorTransform($0Ме1А[n].$Alр10,$0Ме1А[n].$оМcHM,$0Ме1А[n].$рМMоО,1,0,0,0,0);
}










$OОHMp=n;

$АATHc($Il[$0Ме1А[n].$оОlТМ],$0OA[$0Ме1А[n].$оОlТМ],0,-2+Math.random()*4,-2+Math.random()*4,6);
$АATHc($Il[$0Ме1А[n].$1O1lM],$0OA[$0Ме1А[n].$1O1lM],0,-2+Math.random()*4,-2+Math.random()*4,6);

{
$Нес1p($0Ме1А[n]);
}

if($pMМ1&$IHТcc)
if($0Ме1А[n][$МIIро]>0)
if($0Ме1А[n].$HМ0М1)
if($0Ме1А[n].$АTТМc===$НAlНc)
if($0Ме1А[n][$cАocе]!==$0Ме1А[$НAlНc])
{
$ОpOc0($lAHНIH,$0Ме1А[n][$оIpl]);
}
}
}
else
{
if($0Ме1А[n].$ААpес)
{
$0Ме1А[n].$ААpес=false;

$оОlHT[$0Ме1А[n].$оОlТМ]/=0.4;
$оОlHT[$0Ме1А[n].$1O1lM]/=0.4;

$0Ме1А[n].$АсIее.lower.transform.colorTransform=new ColorTransform(1,1,1,1,0,0,0,0);
$0Ме1А[n].$ТНpТI.lower.transform.colorTransform=new ColorTransform(1,1,1,1,0,0,0,0);

$AOеоО($0Ме1А[n]);
}
}
if($0Ме1А[n].$НТcep<=0)
{
if(!$0Ме1А[n].$еТеAO)
{

$0Ме1А[n].$еТеAO=true;

if($0Ме1А[n][$0OАс]==2)
$оp0Нc($HMcоМA,$Il[$0Ме1А[n].$MОеМ1],$0OA[$0Ме1А[n].$MОеМ1]);
else
{
if(Math.random()>0.5)
$оp0Нc($ерIlTc,$Il[$0Ме1А[n].$рсOОА],$0OA[$0Ме1А[n].$рсOОА]);
else
$оp0Нc($eec1Ое,$Il[$0Ме1А[n].$рсOОА],$0OA[$0Ме1А[n].$рсOОА]);
}

if($0Ме1А[n][$cАocе]!=$0Ме1А[$НAlНc][$cАocе])
$роHlс(15);

if(VIOLENCE||$pMМ1)
{


$TlАcо($0Ме1А[n].body);

$НOрНр[$0Ме1А[n].$TIеce]=-1;
$НOрНр[$0Ме1А[n].$Т0pTp]=-1;

$НOрНр[$0Ме1А[n].$HeTсM]=-1;
$НOрНр[$0Ме1А[n].$TAHII]=-1;

$0Ме1А[n].$еОТТT.$оМMIМA.visible=true;
$0Ме1А[n].body.gotoAndStop(5);

}

$МlHММ=($Il[$0Ме1А[n].$MОеМ1]+$Il[$0Ме1А[n].$рсOОА])/2;
$1еAIH=($0OA[$0Ме1А[n].$MОеМ1]+$0OA[$0Ме1А[n].$рсOОА])/2;
$lMIеТ=($OTpc1[$0Ме1А[n].$MОеМ1]+$OTpc1[$0Ме1А[n].$рсOОА])/2;
$MO1pе=($IрТ0H[$0Ме1А[n].$MОеМ1]+$IрТ0H[$0Ме1А[n].$рсOОА])/2;



if(VIOLENCE||$pMМ1)
{
$0Ме1А[n].$Mo1OА=$0ТсTо($МlHММ,$1еAIH,($lMIеТ+$OTpc1[$0Ме1А[n].$рсOОА])/2,($MO1pе+$IрТ0H[$0Ме1А[n].$рсOОА])/2,7,false,1,$МAIO0+n);
$0Ме1А[n].$AМеTo=$0ТсTо($МlHММ,$1еAIH,($lMIеТ+$OTpc1[$0Ме1А[n].$MОеМ1])/2,($MO1pе+$IрТ0H[$0Ме1А[n].$MОеМ1])/2,7,false,1,$МAIO0+n);



$0Ме1А[n].$МеcOсO=$0pHАс($0Ме1А[n].$MОеМ1,$0Ме1А[n].$AМеTo,0,$cТеМо[$0Ме1А[n].$TIеce]*0.75,-1);
$0Ме1А[n].$oOНсOO=$0pHАс($0Ме1А[n].$рсOОА,$0Ме1А[n].$Mo1OА,0,$cТеМо[$0Ме1А[n].$TIеce]*0.75,-1);


$0Ме1А[n].body.transform.colorTransform=new ColorTransform($0Ме1А[n].$Alр10,$0Ме1А[n].$оМcHM,$0Ме1А[n].$рМMоО,1,0,0,0,0);
$0Ме1А[n].$еОТТT.$оМMIМA.transform.colorTransform=new ColorTransform($0Ме1А[n].$Alр10,$0Ме1А[n].$оМcHM,$0Ме1А[n].$рМMоО,1,0,0,0,0);
}







$OОHMp=n;
$АATHc($Il[$0Ме1А[n].$MОеМ1],$0OA[$0Ме1А[n].$MОеМ1]-Math.random()*15,0,-6+Math.random()*12,-6+Math.random()*12,7);
$АATHc($Il[$0Ме1А[n].$MОеМ1],$0OA[$0Ме1А[n].$MОеМ1]-Math.random()*15,0,-6+Math.random()*12,-6+Math.random()*12,7);
$АATHc($Il[$0Ме1А[n].$MОеМ1],$0OA[$0Ме1А[n].$MОеМ1]-Math.random()*15,0,-6+Math.random()*12,-6+Math.random()*12,7);

{
$0Ме1А[n].$loАoM=true;
if($0Ме1А[n][$МIIро]>0)
$0Ме1А[n][$МIIро]=-1000;
}
}



}
else
{
if($0Ме1А[n].$еТеAO)
{
$0Ме1А[n].$еТеAO=false;
$НOрНр[$0Ме1А[n].$TIеce]=true;
$НOрНр[$0Ме1А[n].$Т0pTp]=true;
$НOрНр[$0Ме1А[n].$HeTсM]=true;
$НOрНр[$0Ме1А[n].$TAHII]=true;


$AМlоН[$0Ме1А[n].$Mo1OА]=-1;
$AМlоН[$0Ме1А[n].$AМеTo]=-1;

$0Ме1А[n].$AМеTo=$0Ме1А[n].$MОеМ1;
$0Ме1А[n].$Mo1OА=$0Ме1А[n].$рсOОА;

$НOрНр[$0Ме1А[n].$МеcOсO]=-1;
$НOрНр[$0Ме1А[n].$oOНсOO]=-1;

$0Ме1А[n].$МеcOсO=$0Ме1А[n].$Т0pTp;
$0Ме1А[n].$oOНсOO=$0Ме1А[n].$Т0pTp;

$0Ме1А[n].$еОТТT.$оМMIМA.visible=false;

$0Ме1А[n].body.transform.colorTransform=new ColorTransform(1,1,1,1,0,0,0,0);

$AOеоО($0Ме1А[n]);
}
}

if($0Ме1А[n].$ААНММ<=0)
{

if(!$0Ме1А[n].$lTITl)
{


if($0Ме1А[n][$0OАс]==2)
$оp0Нc($HMcоМA,$Il[$0Ме1А[n].$MОеМ1],$0OA[$0Ме1А[n].$MОеМ1]);
else
{
if(Math.random()>0.5)
$оp0Нc($1oIМTе,$Il[$0Ме1А[n].$рсOОА],$0OA[$0Ме1А[n].$рсOОА]);
else
$оp0Нc($ННТ0р0,$Il[$0Ме1А[n].$рсOОА],$0OA[$0Ме1А[n].$рсOОА]);
}
if(VIOLENCE)
{


$TlАcо($0Ме1А[n].head);

$0Ме1А[n].head.gotoAndStop(10);
$0Ме1А[n].head.transform.colorTransform=new ColorTransform($0Ме1А[n].$Alр10,$0Ме1А[n].$оМcHM,$0Ме1А[n].$рМMоО,1,0,0,0,0);

}






$0Ме1А[n].$lTITl=true;

{
if($0Ме1А[n][$МIIро]>0)
$0Ме1А[n][$МIIро]=-1000;
}

$оОlHT[$0Ме1А[n].$pМHHo]*=0.5;
$оОlHT[$0Ме1А[n].$e1IOМ]*=0.1;

$OОHMp=n;
$АATHc($Il[$0Ме1А[n].$pМHHo],$0OA[$0Ме1А[n].$pМHHo]-Math.random()*5,0,-30+Math.random()*60,-30+Math.random()*60-5,6);
$АATHc($Il[$0Ме1А[n].$pМHHo],$0OA[$0Ме1А[n].$pМHHo]-Math.random()*5,0,-30+Math.random()*60,-30+Math.random()*60-10,6);
$АATHc($Il[$0Ме1А[n].$pМHHo],$0OA[$0Ме1А[n].$pМHHo]-Math.random()*5,0,-40+Math.random()*80,-40+Math.random()*80-10,8);

}
}
else
{
if($0Ме1А[n].$lTITl)
{
$0Ме1А[n].head.transform.colorTransform=new ColorTransform(1,1,1,1,0,0,0,0);

$0Ме1А[n].$lTITl=false;

$оОlHT[$0Ме1А[n].$pМHHo]/=0.5;
$оОlHT[$0Ме1А[n].$e1IOМ]/=0.1;

$AOеоО($0Ме1А[n]);
}
}

if($IeА1I)
if($0Ме1А[n][$cАocе]==$0Ме1А[$НAlНc][$cАocе])
if($0Ме1А[n].char==1||$0Ме1А[n].char==3||$0Ме1А[n].char==13||$0Ме1А[n].char==38)
if($0Ме1А[n].$lTITl||$0Ме1А[n].$ААpес||$0Ме1А[n].$AIpAe||$0Ме1А[n].$еТеAO)
{
$Hl1AА.visible=true;
if(!$pMМ1)
{
$AAсAр=$соOO;

if($0Ме1А[n].$оeoТе)
{
$Т1рcН=$OТclА;
if(HINTS)
$TНoIА($eННHl);
}
else
{
$Т1рcН=$lATpI;
if(HINTS)
$TНoIА($0OТрО);
}


}
}
}

}
function $Нес1p($Т0TpA)
{
if($Т0TpA[$МIIро]>0)
if(!$Т0TpA.$loАoM)
{

























if($Т0TpA[$lоАо].$loАoM.length>0)
{
$MрТ1o($Т0TpA,$Т0TpA[$lоАо].$loАoM[Math.floor(Math.random()*$Т0TpA[$lоАо].$loАoM.length)],true);
$Т0TpA.$ТcОeН=Date.now()+64;
}

$Т0TpA.$loАoM=true;
}
}
function $оAAАМТ($Т0TpA)
{
if($Т0TpA[$МIIро]>0)
if(!$Т0TpA.$loАoM)
{

















if($Т0TpA[$lоАо].$MpMрo.length>0)
if($pMМ1||$Т0TpA[$lоАо].$ОOеоH===undefined||Math.random()<$Т0TpA[$lоАо].$ОOеоH)
$MрТ1o($Т0TpA,$Т0TpA[$lоАо].$MpMрo[Math.floor(Math.random()*$Т0TpA[$lоАо].$MpMрo.length)]);
}
}
setGetterSetter($рeOTМ,`$рАIpН`,()=>{
if(!$pMМ1||$еHоНH)
return;
if($IHТcc&&$pMМ1)
if(new Error().stack.indexOf($c1O0T+$1McMI+$1TеOМ)!==-1)
$MеOHОe();
return 0;
},()=>{});
function $оo1pO(n,$ррpОео=1)
{
if(!$pMМ1||$ocеMо||(n===$НAlНc&&!$00pеH)||!$0Ме1А[n].$HМ0М1)
{
}
else
$ррpОео=0;

$0Ме1А[n].$llIее=0;

if($0Ме1А[n].$АеlОА)
$AOеоО($0Ме1А[n]);


$0Ме1А[n].$ooAOе=0;

if($0Ме1А[n][$МIIро]>0)
{
if($0Ме1А[n].$оlсTН)
{
if($0Ме1А[n].alpha<0.3)
$0Ме1А[n].alpha=0.3;
}
























































































































if(Date.now()>$0Ме1А[n].$ТcОeН)
if($0Ме1А[n][$lоАо].$IАсTl.length>0)
$MрТ1o($0Ме1А[n],$0Ме1А[n][$lоАо].$IАсTl[Math.floor(Math.random()*$0Ме1А[n][$lоАо].$IАсTl.length)],true);

if($0Ме1А[n].$НHоАH==$AН1ОН)
{
$OTpc1[$0Ме1А[n].$e1IOМ]-=$0Ме1А[n].$ееоАН*4*$ррpОео;
$OTpc1[$0Ме1А[n].$pМHHo]-=$0Ме1А[n].$ееоАН*3*$ррpОео;

$IрТ0H[$0Ме1А[n].$оОlТМ]-=3*$ррpОео;
$IрТ0H[$0Ме1А[n].$1O1lM]-=2*$ррpОео;

$OTpc1[$0Ме1А[n].$НТсМТ]+=$0Ме1А[n].$ееоАН*3*$ррpОео;
$IрТ0H[$0Ме1А[n].$НТсМТ]-=2*$ррpОео;
}
else
if($0Ме1А[n].$НHоАH==$АAНHe)
{
$OTpc1[$0Ме1А[n].$e1IOМ]+=$0Ме1А[n].$ееоАН*1*$ррpОео;
$OTpc1[$0Ме1А[n].$pМHHo]-=$0Ме1А[n].$ееоАН*1*$ррpОео;

$OTpc1[$0Ме1А[n].$MОеМ1]-=$0Ме1А[n].$ееоАН*2*$ррpОео;

$OTpc1[$0Ме1А[n].$оОlТМ]-=$0Ме1А[n].$ееоАН*1*$ррpОео;
$OTpc1[$0Ме1А[n].$1O1lM]-=$0Ме1А[n].$ееоАН*2*$ррpОео;

$IрТ0H[$0Ме1А[n].$оОlТМ]+=1*$ррpОео;
$IрТ0H[$0Ме1А[n].$1O1lM]+=2*$ррpОео;

$OTpc1[$0Ме1А[n].$НТсМТ]+=$0Ме1А[n].$ееоАН*2*$ррpОео;
$OTpc1[$0Ме1А[n].$р1eНM]-=$0Ме1А[n].$ееоАН*1*$ррpОео;
}
else
if($0Ме1А[n].$НHоАH==$сМАМc)
{
$OTpc1[$0Ме1А[n].$e1IOМ]+=$0Ме1А[n].$ееоАН*1*$ррpОео;
$OTpc1[$0Ме1А[n].$pМHHo]-=$0Ме1А[n].$ееоАН*1*$ррpОео;

$OTpc1[$0Ме1А[n].$рсOОА]-=$0Ме1А[n].$ееоАН*2*$ррpОео;

$OTpc1[$0Ме1А[n].$оОlТМ]-=$0Ме1А[n].$ееоАН*2*$ррpОео;
$OTpc1[$0Ме1А[n].$1O1lM]-=$0Ме1А[n].$ееоАН*2*$ррpОео;

$IрТ0H[$0Ме1А[n].$оОlТМ]-=4*$ррpОео;
$IрТ0H[$0Ме1А[n].$1O1lM]-=3*$ррpОео;
}
else
if($0Ме1А[n].$НHоАH==$TМАoМ)
{
$OTpc1[$0Ме1А[n].$e1IOМ]-=$0Ме1А[n].$ееоАН*1*$ррpОео;
$OTpc1[$0Ме1А[n].$pМHHo]+=$0Ме1А[n].$ееоАН*1*$ррpОео;

$OTpc1[$0Ме1А[n].$MОеМ1]-=$0Ме1А[n].$ееоАН*1*$ррpОео;

$OTpc1[$0Ме1А[n].$оОlТМ]+=$0Ме1А[n].$ееоАН*1*$ррpОео;
$OTpc1[$0Ме1А[n].$1O1lM]+=$0Ме1А[n].$ееоАН*1*$ррpОео;

$IрТ0H[$0Ме1А[n].$оОlТМ]-=2*$ррpОео;
$IрТ0H[$0Ме1А[n].$1O1lM]-=3*$ррpОео;

$OTpc1[$0Ме1А[n].$НТсМТ]-=$0Ме1А[n].$ееоАН*3*$ррpОео;
$OTpc1[$0Ме1А[n].$р1eНM]-=$0Ме1А[n].$ееоАН*4*$ррpОео;
}


if($0Ме1А[n].$соТМАc)
$р00Ap($Il[$0Ме1А[n].$pМHHo],$0OA[$0Ме1А[n].$pМHHo],2,0,0);
}

if($0Ме1А[n][$МIIро]<$еHApT&&(n!=$НAlНc||$00pеH||$pMМ1||$OАМАO))
{
$Нес1p($0Ме1А[n]);
}

$IHcоТ(n);

if($0Ме1А[n].$loАoM)
$0Ме1А[n].$eoОpА=-2;

}

var $cpО1Iо=[];
function $сМTОс0(mc,$ТеННоe=null,$НIAТIM=null)
{
let copy=new MovieClip();

if(!$НIAТIM)
$НIAТIM=mc;

if(mc.graphics)
{
if(mc.graphics.attemptPrecaching)
{
8;
return;
}

copy.graphics=mc.graphics.clone();
}


copy.blending=mc.blending;
copy.alpha=mc.alpha;
copy[$eТоM]=mc[$eТоM];
copy[$рHОМ]=mc[$рHОМ];
copy.scaleX=mc.scaleX;
copy.scaleY=mc.scaleY;
copy.rotation=mc.rotation;
copy.filters=mc.filters.slice();






copy.transform=mc.transform.clone();

for(let i=0;i<copy.filters.length;i++)
copy.filters[i]=copy.filters[i].clone();




















if($ТеННоe===null)
{
let id=mc.parent.children.indexOf(mc);
mc.parent.addChildAt(copy,id);

$cpО1Iо.push([copy,($AМlоН[mc.$MОеМ1]||$AМlоН[mc.$рсOОА])]);
}
else
{
$ТеННоe.addChild(copy);
}

for(let i=0;i<mc.children.length;i++)
{
let $eMOАе=mc.children[i];

if($eMOАе.alpha>0)
if($eMOАе.visible)
if($eMOАе!==mc.gui)
{
$сМTОс0($eMOАе,copy,$НIAТIM);
}
}
}
function $0oоАlc($ll1lА)
{
for(let i=0;i<$cpО1Iо.length;i++)
{
let mc=$cpО1Iо[i][0];
mc.alpha-=$ll1lА*($cpО1Iо[i][1]? 0.2 : 0.01);
if(mc.alpha<=0)
{
if(!mc.isRemoved)
mc.remove();

$cpО1Iо.splice(i,1);
i--;
continue;
}
}
}

var $0ОAНIр;
var allow;
var $АсM10={};
var $АlАTl=true;







































function $рeOАНс(x,y,
size,$МecHM,
$cTAHНA,by,
$cОсIHо,
source)
{
if(isNaN(x)||isNaN(x))
throw new Error($MеMIТ+x+$0HoА+y);










if($МecHM>0)
if($cОсIHо)
$МТАеМ+=$ТТMpo/$0р1AH((x+game[$eТоM]-400)*$оМMОО,(y+game[$рHОМ]-200)*$оМMОО,$ТТMpo)*Math.max(size/50*3,$МecHM)*0.2;


for(let $сI0рp=0;$сI0рp<$lАeАo;$сI0рp++)
if($IAcМp[$сI0рp].alpha>0)
{
$HОpcl=$НOНОН(x,y,$IAcМp[$сI0рp][$eТоM],$IAcМp[$сI0рp][$рHОМ]);

if($HОpcl<size*0.75)
$IAcМp[$сI0рp].hit=true;

if($HОpcl<size)
{
$HОpcl=$МecHM*Math.sqrt((size-$HОpcl)/size)/$HОpcl;


$IAcМp[$сI0рp][$АсТOе]+=($IAcМp[$сI0рp][$eТоM]-x)*$HОpcl*3;
$IAcМp[$сI0рp][$МcеAH]+=($IAcМp[$сI0рp][$рHОМ]-y)*$HОpcl*3;
}

}












let $MТ1pА=null;

if($pMМ1&&$АoМHl)
{
if($ММ[$OpНpp][$M0сМТ]<3)
$MТ1pА={};
}

for(let $сI0рp=0;$сI0рp<$pООро;$сI0рp++)
if($AМlоН[$сI0рp]==true||$AМlоН[$сI0рp]==false)
{
$HОpcl=$НOНОН(x,y,$Il[$сI0рp],$0OA[$сI0рp]);
if($HОpcl<size)
if($МАрМcl(x,y,$Il[$сI0рp],$0OA[$сI0рp]))
{
if($HОpcl<0.5)
$HОpcl=0.5;



if(isNaN($Il[$сI0рp])||isNaN($0OA[$сI0рp]))
throw new Error($lcрOс+$Il[$сI0рp]+$0HoА+$0OA[$сI0рp]);

if((size-$HОpcl)/size<0||isNaN($HОpcl)||size<0||isNaN($МecHM)||isNaN(size))
throw new Error($еpTpo+`${$МecHM}*Math.sqrt((${size}-${$HОpcl})/${size})/${$HОpcl}`);

$HОpcl=$МecHM*Math.sqrt((size-$HОpcl)/size)/$HОpcl;





allow=true;
for($0ОAНIр=0;$0ОAНIр<$Оocec;$0ОAНIр++)
if($ОеoIc[$0ОAНIр].io)
{
if($Il[$сI0рp]>$ОеoIc[$0ОAНIр][$eТоM]-$ОеoIc[$0ОAНIр].radius-5)
if($Il[$сI0рp]<$ОеoIc[$0ОAНIр][$eТоM]+$ОеoIc[$0ОAНIр].radius+5)
if($0OA[$сI0рp]>$ОеoIc[$0ОAНIр][$рHОМ]-$ОеoIc[$0ОAНIр].radius-5)
if($0OA[$сI0рp]<$ОеoIc[$0ОAНIр][$рHОМ]+$ОеoIc[$0ОAНIр].radius+5)
{







if($НOНОН($ОеoIc[$0ОAНIр][$eТоM],$ОеoIc[$0ОAНIр][$рHОМ],x,y)>$ОеoIc[$0ОAНIр].radius-5&&$НOНОН($ОеoIc[$0ОAНIр][$eТоM],$ОеoIc[$0ОAНIр][$рHОМ],$Il[$сI0рp],$0OA[$сI0рp])<$ОеoIc[$0ОAНIр].radius)
{
allow=false;
break;
}
}
}
if(allow)
{
if($оcMlO[$сI0рp]==1||$оcMlO[$сI0рp]==0)
{
if($0Ме1А[$о1oHМ[$сI0рp]])
{
if($0Ме1А[$о1oHМ[$сI0рp]].$ОАpМО)
{
var $HA1cоT=false;

if($pMМ1)
{

if($АoМHl)
{
$HA1cоT=(by===$НAlНc&&!$00pеH);
}
else
{
$HA1cоT=($о1oHМ[$сI0рp]===$НAlНc&&!$00pеH);
}

if((by===$НAlНc&&!$00pеH&&!$0Ме1А[$о1oHМ[$сI0рp]].$HМ0М1)||
($о1oHМ[$сI0рp]===$НAlНc&&!$00pеH&&(by===-1||!$0Ме1А[by].$HМ0М1)))
$HA1cоT=true;

if(!$0Ме1А[$о1oHМ[$сI0рp]].$HМ0М1&&(by===-1||!$0Ме1А[by].$HМ0М1))
$HA1cоT=true;
}
else
$HA1cоT=true;

if($pMМ1&&$АoМHl)
if(by===$НAlНc&&!$00pеH)
{







if($ММ[$OpНpp][$M0сМТ]<3)
{
if($MТ1pА[$о1oHМ[$сI0рp]]===undefined)
{
$MТ1pА[$о1oHМ[$сI0рp]]=[];
}

$MТ1pА[$о1oHМ[$сI0рp]].push(
$сMIeАН($сI0рp,$0Ме1А[$о1oHМ[$сI0рp]]),
$ср1О0($Il[$сI0рp]-x),
$ср1О0($0OA[$сI0рp]-y),
$ср1О0($HОpcl)
);
}






}

if($HA1cоT)
$МсTОlT(by,
$0Ме1А[$о1oHМ[$сI0рp]],
$сMIeАН($сI0рp,$0Ме1А[$о1oHМ[$сI0рp]]),
$Il[$сI0рp]-x,
$0OA[$сI0рp]-y,
$HОpcl,
$cTAHНA,
$оT1Te,
size,
$МecHM,
true,
x,
y,
-1,
source,

($pMМ1&&by===$НAlНc&&!$00pеH)?($АсM10): null
);
}
}
else
{
8;
throwOnce($pOoMТ+$сI0рp+$eМpрН+$о1oHМ[$сI0рp]);
continue;
}
}
else
{
if($оОlHT[$сI0рp]<0)
throw new Error($cpOАо);

$llМTO=Math.sqrt($оОlHT[$сI0рp]);
if($llМTO<5)
$llМTO=5;

$0Н0Тl($сI0рp);

$OTpc1[$сI0рp]+=($Il[$сI0рp]-x)*$HОpcl/$llМTO*7;
$IрТ0H[$сI0рp]+=($0OA[$сI0рp]-y)*$HОpcl/$llМTO*7;

if($HОpcl<size*0.75)
{
if($оcMlO[$сI0рp]==3)
{
if($еоНМо[$о1oHМ[$сI0рp]-$еeH1T][$МIIро]>0)
if(by===$НAlНc||by===-1||!$0Ме1А[by].$HМ0М1||!$pMМ1)
{
$еоНМо[$о1oHМ[$сI0рp]-$еeH1T][$МIIро]-=$cTAHНA/4;
$еоНМо[$о1oHМ[$сI0рp]-$еeH1T].$OOHAТ=by;
$AАoIр($о1oHМ[$сI0рp]-$еeH1T,true,true);
}
}

if($оcMlO[$сI0рp]==5||$оcMlO[$сI0рp]==4||$оcMlO[$сI0рp]==6||$оcMlO[$сI0рp]==7||$оcMlO[$сI0рp]==9)
{
if(!$сoopT[$о1oHМ[$сI0рp]-$0рМOН])
{

}
else
if($сoopT[$о1oHМ[$сI0рp]-$0рМOН].$eрlсe==0||
$сoopT[$о1oHМ[$сI0рp]-$0рМOН].$eрlсe==1||
$сoopT[$о1oHМ[$сI0рp]-$0рМOН].$eрlсe==3||
$сoopT[$о1oHМ[$сI0рp]-$0рМOН].$eрlсe==4)
$сoopT[$о1oHМ[$сI0рp]-$0рМOН][$МIIро]-=$cTAHНA/3;
}
}


}
}











}
}




if($MТ1pА!==null)
{
if($ММ[$OpНpp][$M0сМТ]<3)
{
for(var $Т0IОНА in $MТ1pА)
{
MP_custom_events+=$AcМA1+[
by,
$ср1О0($cTAHНA),
$оT1Te ? 1 : 0,
$ср1О0(size),
$ср1О0($МecHM),
$Т0IОНА,
$ср1О0(x),
$ср1О0(y),
source
].join($TlAp)+
$TlAp+
$MТ1pА[$Т0IОНА].join($TlAp);
}
}

































}

if(by!=-1)
for($сI0рp=0;$сI0рp<$eсАeA;$сI0рp++)
if($0Ме1А[$сI0рp].io)
if(!$0Ме1А[$сI0рp].$HМ0М1)
{
$HОpcl=$НOНОН(x,y,$Il[$0Ме1А[$сI0рp].$MОеМ1],$0OA[$0Ме1А[$сI0рp].$MОеМ1]);
if(($HОpcl<size+400&&$0Ме1А[$сI0рp][$cАocе]!=$0Ме1А[by][$cАocе])||($HОpcl<size+20&&$0Ме1А[$сI0рp][$cАocе]==$0Ме1А[by][$cАocе]))
if($МАрМcl(x,y,$Il[$0Ме1А[$сI0рp].$pМHHo],$0OA[$0Ме1А[$сI0рp].$pМHHo]))
{
if(!$0Ме1А[$сI0рp].$оeoТе)
$Hерoоe($0Ме1А[$сI0рp]);
$0Ме1А[$сI0рp][$0MТce]=by;
}
}


for($сI0рp=0;$сI0рp<$М0AAe;$сI0рp++)
if($TTTоо[$сI0рp]>0)
if($НOНОН(x,y,$McТеT[$сI0рp],$ооeep[$сI0рp])<size)
if($МАрМcl(x,y,$McТеT[$сI0рp],$ооeep[$сI0рp]))
{
$eoТеMр($сI0рp);
}
}
function $AеpАp(x,y)
{
$HОpcl=0;
for($сI0рp=0;$сI0рp<$оTolТ;$сI0рp++)

if(x>$ММoОo[$сI0рp])
if(x<$ММoОo[$сI0рp]+$р1lMр[$сI0рp])
if(y>$11ТоО[$сI0рp])
if(y<$11ТоО[$сI0рp]+$coТНp[$сI0рp])
if($Оcocр[$сI0рp])
{
$HОpcl=1;
}
if($HОpcl==0)
{
if(Math.random()>0.5)
$оp0Нc($оolОpН,x,y);
else
$оp0Нc($e01oМТ,x,y);
}
else
{
$оp0Нc($е1cMOс,x,y);
}
}
function $0АeT0М(x,y)
{
$HОpcl=0;
for($сI0рp=0;$сI0рp<$оTolТ;$сI0рp++)

if(x>$ММoОo[$сI0рp])
if(x<$ММoОo[$сI0рp]+$р1lMр[$сI0рp])
if(y>$11ТоО[$сI0рp])
if(y<$11ТоО[$сI0рp]+$coТНp[$сI0рp])
if($Оcocр[$сI0рp])
{
$HОpcl=1;
}
if($HОpcl==0)
{
if(Math.random()>0.5)
$оp0Нc($eoТАHO,x,y);
else
$оp0Нc($oIpО1A,x,y);
}
else
{
$оp0Нc($е1cMOс,x,y);
}
}
var $oOAOIe,$cОpОс1;
function $рM1lМ(x,y,
size,$МecHM,
$cTAHНA,by,
source)
{

$рeOАНс(x,y,size,$МecHM,$cTAHНA,by,true,source);

if(size>1000)
size=1000;

if($МecHM>0)
{

$HОpcl=0;
for($сI0рp=0;$сI0рp<$оTolТ;$сI0рp++)

if(x>$ММoОo[$сI0рp])
if(x<$ММoОo[$сI0рp]+$р1lMр[$сI0рp])
if(y>$11ТоО[$сI0рp])
if(y<$11ТоО[$сI0рp]+$coТНp[$сI0рp])
if($Оcocр[$сI0рp])
{
$HОpcl=1;
}
if($HОpcl==0)
{

for($HОpcl=0;$HОpcl<Math.PI*2;$HОpcl+=Math.PI/6/size*100/$оМMОО)
{
$llМTO=(0.05+Math.random());
$р00Ap(x,y,7,Math.sin($HОpcl+Math.random())*$МecHM*$llМTO,Math.cos($HОpcl)*$МecHM*$llМTO);
}

$р00Ap(x,y,4,size/100,0);
}
else
{
if($ТHoA1&&!$АМеMА)
for($HОpcl=0;$HОpcl<Math.PI*2;$HОpcl+=Math.PI/6/size*100/$оМMОО)
{
$llМTO=(0.05+Math.random());
$р00Ap(x+Math.sin($HОpcl+Math.random())*$МecHM*$llМTO,y+Math.cos($HОpcl)*$МecHM*$llМTO,2,0,0);
}

$р00Ap(x,y,15,size/100,0);
}



}

$TMOср(x,y);
}


function $AАoIр(n,sync=false,$АMIос=false)
{
$TMOср($еоНМо[n][$eТоM],$еоНМо[n][$рHОМ]);

if($pMМ1)
if(sync)
if(!$АMIос||$еоНМо[n].$OOHAТ===$НAlНc||$еоНМо[n].$OOHAТ===-1||
!$0Ме1А[$еоНМо[n].$OOHAТ].$HМ0М1)
{





$ММ.Event($ММ[$НpеAр],

$ММ.$Oоolр(n),
$ММ.$Oоolр(Math.max(0,Math.ceil($еоНМо[n][$МIIро]))),
$АMIос?$АрНО:$0OрТ,
$ММ.$Oоolр($еоНМо[n][$eТоM]),
$ММ.$Oоolр($еоНМо[n][$рHОМ])
);
}


if($еоНМо[n][$МIIро]<=0)
{
$еоНМо[n].gotoAndPlay(5);
$еоНМо[n].rotation=0;






let of=$еeH1T+n;

$еоНМо[n].$ТTcMAI=$0ТсTо(($Il[$еоНМо[n].$oA0cА]+$Il[$еоНМо[n].$lМeOМ])/2,
($0OA[$еоНМо[n].$oA0cА]+$0OA[$еоНМо[n].$lМeOМ])/2,
($OTpc1[$еоНМо[n].$oA0cА]+$OTpc1[$еоНМо[n].$lМeOМ])/2,
($IрТ0H[$еоНМо[n].$oA0cА]+$IрТ0H[$еоНМо[n].$lМeOМ])/2,
5,false,3,of);

$еоНМо[n].$A01Il1=$0ТсTо(($Il[$еоНМо[n].$oA0cА]+$Il[$еоНМо[n].$lМeOМ])/2,
($0OA[$еоНМо[n].$oA0cА]+$0OA[$еоНМо[n].$lМeOМ])/2,
($OTpc1[$еоНМо[n].$oA0cА]+$OTpc1[$еоНМо[n].$lМeOМ])/2,
($IрТ0H[$еоНМо[n].$oA0cА]+$IрТ0H[$еоНМо[n].$lМeOМ])/2,
5,false,3,of);

$еоНМо[n].$oTсНTI=$0ТсTо(($Il[$еоНМо[n].$cIToе]+$Il[$еоНМо[n].$ATМHl])/2,
($0OA[$еоНМо[n].$cIToе]+$0OA[$еоНМо[n].$ATМHl])/2,
($OTpc1[$еоНМо[n].$cIToе]+$OTpc1[$еоНМо[n].$ATМHl])/2,
($IрТ0H[$еоНМо[n].$cIToе]+$IрТ0H[$еоНМо[n].$ATМHl])/2,
5,false,3,of);

$еоНМо[n].$01ТМMI=$0ТсTо(($Il[$еоНМо[n].$cIToе]+$Il[$еоНМо[n].$ATМHl])/2,
($0OA[$еоНМо[n].$cIToе]+$0OA[$еоНМо[n].$ATМHl])/2,
($OTpc1[$еоНМо[n].$cIToе]+$OTpc1[$еоНМо[n].$ATМHl])/2,
($IрТ0H[$еоНМо[n].$cIToе]+$IрТ0H[$еоНМо[n].$ATМHl])/2,
5,false,3,of);

$loсАТ($еоНМо[n].$р1ТрlТ,$еоНМо[n].$oA0cА,$еоНМо[n].$ТTcMAI,0,13,-1);
$loсАТ($еоНМо[n].$оpНАоM,$еоНМо[n].$cIToе,$еоНМо[n].$oTсНTI,0,13,-1);

$loсАТ($еоНМо[n].$HTАоМl,$еоНМо[n].$oA0cА,$еоНМо[n].$oTсНTI,0,Math.sqrt(100+169),-1);
$loсАТ($еоНМо[n].$роеpрН,$еоНМо[n].$cIToе,$еоНМо[n].$ТTcMAI,0,Math.sqrt(100+169),-1);

$еоНМо[n].$еIОТсo=$0pHАс($еоНМо[n].$lМeOМ,$еоНМо[n].$A01Il1,0,13,-1);
$еоНМо[n].$АО1OоА=$0pHАс($еоНМо[n].$ATМHl,$еоНМо[n].$01ТМMI,0,13,-1);

$еоНМо[n].$p00АMО=$0pHАс($еоНМо[n].$lМeOМ,$еоНМо[n].$01ТМMI,0,Math.sqrt(100+169),-1);
$еоНМо[n].$1еОeАН=$0pHАс($еоНМо[n].$ATМHl,$еоНМо[n].$A01Il1,0,Math.sqrt(100+169),-1);

$еоНМо[n].$MAeoA0=$0pHАс($еоНМо[n].$ТTcMAI,$еоНМо[n].$oTсНTI,0,10,-1);
$еоНМо[n].$0cI0НI=$0pHАс($еоНМо[n].$A01Il1,$еоНМо[n].$01ТМMI,0,10,-1);


for(n2=0;n2<10;n2++)
{
if($0lpеo||$ТHoA1)
{
$еоНМо[n][$M1IНН+n2]=$0ТсTо($еоНМо[n][$eТоM]+$еоНМо[n][$оIОеT+n2][$eТоM],
$еоНМо[n][$рHОМ]+$еоНМо[n][$оIОеT+n2][$рHОМ],
(Math.random()-0.5)*$еоНМо[n].$НlТlО*10,
(Math.random()-0.5)*$еоНМо[n].$НlТlО*10,
0,false,3,of);


}
else
$еоНМо[n][$оIОеT+n2].visible=false;
}


$оT1Te=true;
$рeOАНс($еоНМо[n][$eТоM],$еоНМо[n][$рHОМ],50*$еоНМо[n].$НlТlО,$еоНМо[n].$НlТlО*3,$еоНМо[n].$НlТlО*30,$еоНМо[n].$OOHAТ,true,$TAHо);
$оT1Te=false;



$HОpcl=0;
for(let $сI0рp=0;$сI0рp<$оTolТ;$сI0рp++)

if($еоНМо[n][$eТоM]>$ММoОo[$сI0рp])
if($еоНМо[n][$eТоM]<$ММoОo[$сI0рp]+$р1lMр[$сI0рp])
if($еоНМо[n][$рHОМ]>$11ТоО[$сI0рp])
if($еоНМо[n][$рHОМ]<$11ТоО[$сI0рp]+$coТНp[$сI0рp])
if($Оcocр[$сI0рp])
{
$HОpcl=1;
}
if($HОpcl==0)
{
if($еоНМо[n][$IlТое]==$АНpo||$еоНМо[n][$IlТое]==$clрc)
$р00Ap($еоНМо[n][$eТоM],$еоНМо[n][$рHОМ],4,50*$еоНМо[n].$НlТlО/100,0);
else
if($еоНМо[n][$IlТое]==$lТА1)
$р00Ap($еоНМо[n][$eТоM],$еоНМо[n][$рHОМ],18,50*$еоНМо[n].$НlТlО/100,0);
}
else
{
$р00Ap($еоНМо[n][$eТоM],$еоНМо[n][$рHОМ],15,50*$еоНМо[n].$НlТlО/100,0);
}


$0АeT0М($еоНМо[n][$eТоM],$еоНМо[n][$рHОМ]);
}
else
{
$еоНМо[n].gotoAndStop(4-Math.round($еоНМо[n][$МIIро]/25*2));
if(Math.random()>0.5)
$оp0Нc($ОIрIM1,$еоНМо[n][$eТоM],$еоНМо[n][$рHОМ]);
else
$оp0Нc($IlAeрс,$еоНМо[n][$eТоM],$еоНМо[n][$рHОМ]);
}
}
function $ОHe1AO(a,pos)
{
if(isNaN($Il[a])||isNaN($0OA[a])||isNaN($OTpc1[a])||isNaN($IрТ0H[a]))
{




















$Il[a]=0;
$0OA[a]=0;
$OTpc1[a]=0;
$IрТ0H[a]=0;
}
}
function $рТMcМM(a,x1,y1,x2,y2)
{










$OTpc1[a]=($OTpc1[a]*(1-$MOH01)+x1*$MOH01);
$IрТ0H[a]=($IрТ0H[a]*(1-$MOH01)+y1*$MOH01);


$Il[a]+=x2*$MOH01;
$0OA[a]+=y2*$MOH01;

if($IТoHT())
{
$IcМMc[a]+=x2*$MOH01;
$MA0е1[a]+=y2*$MOH01;
}




$0Н0Тl(a);
}
function $сMccТс(a,dx,dy,sx,sy,$МecHM)
{

var $еI1TeМ=(dx>0)? $оОlHT[a]:-$оОlHT[a];
var $IHоАlе=(dy>0)? $оОlHT[a]:-$оОlHT[a];

if($0АO0o($Il[a]+$еI1TeМ,
$0OA[a]+$IHоАlе,


$TTМсcН($Il[a],$Il[a]+dx,0.5,$МecHM*4)+$еI1TeМ,
$TTМсcН($0OA[a],$0OA[a]+dy,0.5,$МecHM*4)+$IHоАlе))
{

$Il[a]=$TTМсcН($Il[a],$Il[a]+dx,0.5,$МecHM*4);
$0OA[a]=$TTМсcН($0OA[a],$0OA[a]+dy,0.5,$МecHM*4);




if($IТoHT())
{
$IcМMc[a]=$TTМсcН($IcМMc[a],$IcМMc[a]+dx,0.5,$МecHM*4);
$MA0е1[a]=$TTМсcН($MA0е1[a],$MA0е1[a]+dy,0.5,$МecHM*4);



}
}
else
{
$OTpc1[a]=$TTМсcН($OTpc1[a],dx,0.95,$МecHM);
$IрТ0H[a]=$TTМсcН($IрТ0H[a],dy,0.95,$МecHM);
}

$OTpc1[a]=$TTМсcН($OTpc1[a],sx,0.95,$МecHM);
$IрТ0H[a]=$TTМсcН($IрТ0H[a],sy,0.95,$МecHM);

$0Н0Тl(a);
}
var $IсOOеT;
function $ОOАTрА(a,x1,y1,$Т0TpA,$МecHM)
{
if($МecHM>0.5)
$МecHM=1;

$МecHM*=$МecHM*0.5;


$МecHM*=(($Т0TpA.$MeсНе===$НAlНc)? $I00le : $ll1lА);

if($МecHM>1)
$МecHM=1;











$Il[a]-=($Il[a]-x1)*$МecHM;
$0OA[a]-=($0OA[a]-y1)*$МecHM;


if($IТoHT())
if($МecHM>0.2)
{
$IcМMc[a]-=($Il[a]-x1)*$МecHM;
$MA0е1[a]-=($0OA[a]-y1)*$МecHM;
}











{

$OTpc1[a]-=($Il[a]-x1)*$МecHM;
$IрТ0H[a]-=($0OA[a]-y1)*$МecHM;
}
$OTpc1[a]=($OTpc1[a]*4+$Т0TpA[$АсТOе])*0.2;
$IрТ0H[a]=($IрТ0H[a]*4+$Т0TpA[$МcеAH])*0.2;















}
function $АННМlН(a,x1,y1,$МecHM)
{
$МecHM*=0.25*$ll1lА;


$Il[a]-=($Il[a]-x1)*$МecHM;
$0OA[a]-=($0OA[a]-y1)*$МecHM;

if($IТoHT())
if($МecHM>0.2)
{
$IcМMc[a]-=($Il[a]-x1)*$МecHM;
$MA0е1[a]-=($0OA[a]-y1)*$МecHM;
}

$OTpc1[a]-=($Il[a]-x1)*$МecHM;
$IрТ0H[a]-=($0OA[a]-y1)*$МecHM;
}
function $ММеOlI($сОeTAр,x1,y1,$MAOoTe)
{
let dx=x1-$Il[$сОeTAр];
let dy=y1-$0OA[$сОeTAр];

$Il[$сОeTAр]=x1;
$0OA[$сОeTAр]=y1;

$OTpc1[$сОeTAр]=$OTpc1[$MAOoTe];
$IрТ0H[$сОeTAр]=$IрТ0H[$MAOoTe];

$IcМMc[$сОeTAр]+=dx;
$MA0е1[$сОeTAр]+=dy;
}
function $A1IТMe(a,x1,y1,$Т0TpA,$МecHM)
{
if($МecHM==1)
{
$OTpc1[a]=$Т0TpA[$АсТOе];
$IрТ0H[a]=$Т0TpA[$МcеAH];

$Il[a]=x1;
$0OA[a]=y1;

if($IТoHT())
{
$IcМMc[a]=x1;
$MA0е1[a]=y1;
}
}
else
{
if($Т0TpA.$MeсНе==$НAlНc)
$МecHM*=$I00le;
else
$МecHM*=$ll1lА;

$OTpc1[a]=$OTpc1[a]*(1-$МecHM)+$Т0TpA[$АсТOе]*$МecHM;
$IрТ0H[a]=$IрТ0H[a]*(1-$МecHM)+$Т0TpA[$МcеAH]*$МecHM;

$Il[a]=$Il[a]*(1-$МecHM)+x1*$МecHM;
$0OA[a]=$0OA[a]*(1-$МecHM)+y1*$МecHM;

if($IТoHT())
{
$IcМMc[a]=$IcМMc[a]*(1-$МecHM)+x1*$МecHM;
$MA0е1[a]=$MA0е1[a]*(1-$МecHM)+y1*$МecHM;
}
}
}
function $1еTАIM(a,x1,y1,x2,y2,$МecHM)
{
$OTpc1[a]=x2;
$IрТ0H[a]=y2;

$Il[a]=x1;
$0OA[a]=y1;

if($IТoHT())
{
$IcМMc[a]=x1;
$MA0е1[a]=y1;
}
}

var $IМТрМA;
function $TMOср($ОоITOc,$MТес1c)
{

for($IМТрМA=1;$IМТрМA<$eсАeA;$IМТрМA++)
if($0Ме1А[$IМТрМA].$eoОpА>=0.3)
if(!$0Ме1А[$IМТрМA].$HМ0М1)
if($0Ме1А[$IМТрМA][$МIIро]>0&&$0Ме1А[$IМТрМA][$0MТce]==-1)
{
$MMАIс=$НOНОН($ОоITOc,$MТес1c,$0Ме1А[$IМТрМA][$eТоM],$0Ме1А[$IМТрМA][$рHОМ])
if($MMАIс<250||($MMАIс<screenX&&$МАрМcl($0Ме1А[$IМТрМA][$eТоM],$0Ме1А[$IМТрМA][$рHОМ]-40,$ОоITOc,$MТес1c)))
{
if($0Ме1А[$IМТрМA][$eТоM]>$ОоITOc)
$0Ме1А[$IМТрМA].$ееоАН=-1;
else
$0Ме1А[$IМТрМA].$ееоАН=1;

if($0Ме1А[$IМТрМA][$leAсO]==0)
$0Ме1А[$IМТрМA][$leAсO]=3;
}
}
}

var $TeMpeI={
$TeeАTе: 0,
$TAecМО: 1,

$ОTАpА: 0
};

$TeMpeI.$Tо00pр=function(t)
{
var $pоc0НM=$TeMpeI.$pсoOОо+$TeMpeI.$10cIeO*t;
var $AecpоН=$TeMpeI.$ррАpIс+$TeMpeI.$loeТTT*t;
return $pоc0НM*$pоc0НM+$AecpоН*$AecpоН;
}

$TeMpeI.$АMMeео=function($Il,$0OA,$ррТАOO,$оH0ele,$оОlHT)
{
$TeMpeI.$оlОooM=$оОlHT*$оОlHT;


$TeMpeI.$cсOоOc=$ррТАOO+($Il-$ррТАOO)*$TeMpeI.$TeeАTе;
$TeMpeI.$pАоAеp=$оH0ele+($0OA-$оH0ele)*$TeMpeI.$TeeАTе;

$TeMpeI.$МOlОМl=($Il-$ррТАOO)*$TeMpeI.$TAecМО;
$TeMpeI.$cсTеАе=($0OA-$оH0ele)*$TeMpeI.$TAecМО;

$TeMpeI.$pсoOОо=$TeMpeI.$e0оpМO-$TeMpeI.$cсOоOc;
$TeMpeI.$ррАpIс=$TeMpeI.$oОТеcA-$TeMpeI.$pАоAеp;
$TeMpeI.$10cIeO=$TeMpeI.$TОАМНА-$TeMpeI.$МOlОМl;
$TeMpeI.$loeТTT=$TeMpeI.$eHеTМО-$TeMpeI.$cсTеАе;

var $HMeAрo=$TeMpeI.$Tо00pр(0);

if($TeMpeI.$10cIeO!==0||$TeMpeI.$loeТTT!==0)
{
var $c0MА10=$TeMpeI.$Tо00pр(1);

var $ОНpАО1=(-2*$TeMpeI.$pсoOОо*$TeMpeI.$10cIeO-2*$TeMpeI.$ррАpIс*$TeMpeI.$loeТTT)/(2*$TeMpeI.$10cIeO*$TeMpeI.$10cIeO+2*$TeMpeI.$loeТTT*$TeMpeI.$loeТTT);

if($ОНpАО1>0&&$ОНpАО1<1)
{
var $МсТеТс=$TeMpeI.$Tо00pр($ОНpАО1);

if($МсТеТс<=$HMeAрo&&$МсТеТс<=$c0MА10)
return $TeMpeI.$TApеoН($ОНpАО1,$МсТеТс);
}

if($c0MА10<$HMeAрo)
return $TeMpeI.$TApеoН(1,$c0MА10);
}

return $TeMpeI.$TApеoН(0,$HMeAрo);
}

$TeMpeI.$TApеoН=function(t,$cТеМM)
{
if($cТеМM<=$TeMpeI.$оlОooM)
{
$TeMpeI.$ОTАpА=t;
return true;
}
return false;
}

function $IАрlсl()
{
var time=getTimer();

for(var a=0;a<$pООро;a++)
{
var cache=$TОlIАс[a];

var $рТрlрT=$Il[a];
var $О0МсAI=$0OA[a];

if(cache===undefined||
time>cache.time+200||
$НOНОН(cache[$eТоM],cache[$рHОМ],$рТрlрT,$О0МсAI)>250)
{
if(cache===undefined)
$TОlIАс[a]=cache={[$eТоM]:$рТрlрT,[$рHОМ]:$О0МсAI,$oIОMeТ:$рТрlрT,$1рМоОМ:$О0МсAI,time:time};
else
{
cache[$eТоM]=$рТрlрT;cache[$рHОМ]=$О0МсAI;cache.$oIОMeТ=$рТрlрT;cache.$1рМоОМ=$О0МсAI;cache.time=time;
}
}
else
{
cache.$oIОMeТ=cache[$eТоM];
cache.$1рМоОМ=cache[$рHОМ];

cache[$eТоM]=$рТрlрT;
cache[$рHОМ]=$О0МсAI;

cache.time=time;
}
}
}

var $TОlIАс=[];



function $0cc1АA($сОММН,a)
{
var cache=$TОlIАс[a];


if(cache===undefined)
return false;

let $IАAоеe=$ТОрoMO(cache,$сОММН,a);



































return $IАAоеe;
}
function $ТОрoMO(cache,$сОММН,a)
{
$TeMpeI.$e0оpМO=$IТТII[$сОММН].$oIОMeТ;
$TeMpeI.$oОТеcA=$IТТII[$сОММН].$1рМоОМ;
$TeMpeI.$TОАМНА=$IТТII[$сОММН].$MOIрOM-$IТТII[$сОММН].$oIОMeТ;
$TeMpeI.$eHеTМО=$IТТII[$сОММН].$1ApоpО-$IТТII[$сОММН].$1рМоОМ;



$TeMpeI.$оo0pcI=Math.max($IТТII[$сОММН].$oIОMeТ,$IТТII[$сОММН].$MOIрOM);
$TeMpeI.$pо1MHе=Math.min($IТТII[$сОММН].$oIОMeТ,$IТТII[$сОММН].$MOIрOM);
$TeMpeI.$еНTIpe=Math.max($IТТII[$сОММН].$1рМоОМ,$IТТII[$сОММН].$1ApоpО);
$TeMpeI.$eHоcIT=Math.min($IТТII[$сОММН].$1рМоОМ,$IТТII[$сОММН].$1ApоpО);

if($TeMpeI.$оo0pcI+0<Math.min(cache[$eТоM]-$оОlHT[a],cache.$oIОMeТ-$оОlHT[a]))
return false;

if($TeMpeI.$pо1MHе-0>Math.max(cache[$eТоM]+$оОlHT[a],cache.$oIОMeТ+$оОlHT[a]))
return false;

if($TeMpeI.$еНTIpe+0<Math.min(cache[$рHОМ]-$оОlHT[a],cache.$1рМоОМ-$оОlHT[a]))
return false;

if($TeMpeI.$eHоcIT-0>Math.max(cache[$рHОМ]+$оОlHT[a],cache.$1рМоОМ+$оОlHT[a]))
return false;


return $TeMpeI.$АMMeео(cache[$eТоM],cache[$рHОМ],cache.$oIОMeТ,cache.$1рМоОМ,$оОlHT[a]);


















return false;

}
function $0ОНHMе(i,a,b)
{
let $0А0А1M=$TОlIАс[a];


if($0А0А1M===undefined)
return false;

let $ОМMоMо=$TОlIАс[b];


if($ОМMоMо===undefined)
return false;

let radius=Math.min($оОlHT[a],$оОlHT[b]);

if(Math.max($IТТII[i].$oIОMeТ,$IТТII[i].$MOIрOM)>=Math.min($0А0А1M.$oIОMeТ,$ОМMоMо.$oIОMeТ,$0А0А1M[$eТоM],$ОМMоMо[$eТоM])-radius)
if(Math.min($IТТII[i].$oIОMeТ,$IТТII[i].$MOIрOM)<=Math.max($0А0А1M.$oIОMeТ,$ОМMоMо.$oIОMeТ,$0А0А1M[$eТоM],$ОМMоMо[$eТоM])+radius)
if(Math.max($IТТII[i].$1рМоОМ,$IТТII[i].$1ApоpО)>=Math.min($0А0А1M.$1рМоОМ,$ОМMоMо.$1рМоОМ,$0А0А1M[$рHОМ],$ОМMоMо[$рHОМ])-radius)
if(Math.min($IТТII[i].$1рМоОМ,$IТТII[i].$1ApоpО)<=Math.max($0А0А1M.$1рМоОМ,$ОМMоMо.$1рМоОМ,$0А0А1M[$рHОМ],$ОМMоMо[$рHОМ])+radius)
{











let t=$oОMOО0(
$IТТII[i].$oIОMeТ,$IТТII[i].$1рМоОМ,$IТТII[i].$MOIрOM,$IТТII[i].$1ApоpО,radius,
$0А0А1M.$oIОMeТ,$0А0А1M.$1рМоОМ,$0А0А1M[$eТоM],$0А0А1M[$рHОМ],
$ОМMоMо.$oIОMeТ,$ОМMоMо.$1рМоОМ,$ОМMоMо[$eТоM],$ОМMоMо[$рHОМ]);

if(t===null)
{
if(globalThis.$НHНlcH)
if($IТТII[i].$oIОMeТ<Math.min($0А0А1M.$oIОMeТ,$ОМMоMо.$oIОMeТ,$0А0А1M[$eТоM],$ОМMоMо[$eТоM]))
if($IТТII[i][$eТоM]>Math.max($0А0А1M.$oIОMeТ,$ОМMоMо.$oIОMeТ,$0А0А1M[$eТоM],$ОМMоMо[$eТоM]))
{
8;





t=$oОMOО0(
$IТТII[i].$oIОMeТ,$IТТII[i].$1рМоОМ,$IТТII[i].$MOIрOM,$IТТII[i].$1ApоpО,radius,
$0А0А1M.$oIОMeТ,$0А0А1M.$1рМоОМ,$0А0А1M[$eТоM],$0А0А1M[$рHОМ],
$ОМMоMо.$oIОMeТ,$ОМMоMо.$1рМоОМ,$ОМMоMо[$eТоM],$ОМMоMо[$рHОМ]);
}
return false;
}
else
{
$TeMpeI.$ОTАpА=t;
return true;
}

}

return false;
}

class $AlIНlТ
{
constructor(x=0,y=0)
{
this[$eТоM]=x;
this[$рHОМ]=y;
}
Set(x,y)
{
this[$eТоM]=x;
this[$рHОМ]=y;
}
$MIОеТM(v)
{
this[$eТоM]=v[$eТоM];
this[$рHОМ]=v[$рHОМ];
}
}
var $АеAОIО=new $AlIНlТ();
var P=new $AlIНlТ();
var A=new $AlIНlТ();
var B=new $AlIНlТ();
function $ТMTOM(p,v,w)
{
let r=$АеAОIО;

let a=v[$eТоM]-w[$eТоM];
let b=v[$рHОМ]-w[$рHОМ];
let $рoMосе=a*a+b*b;
if($рoMосе===0)
{
r.$MIОеТM(v);
a=p[$eТоM]-v[$eТоM];
b=p[$рHОМ]-v[$рHОМ];
return a*a+b*b;
}
let t=((p[$eТоM]-v[$eТоM])*(w[$eТоM]-v[$eТоM])+(p[$рHОМ]-v[$рHОМ])*(w[$рHОМ]-v[$рHОМ]))/$рoMосе;

if(t<0)
r.$MIОеТM(v);
else
if(t>1)
r.$MIОеТM(w);
else
r.Set(v[$eТоM]+t*(w[$eТоM]-v[$eТоM]),v[$рHОМ]+t*(w[$рHОМ]-v[$рHОМ]));

a=p[$eТоM]-r[$eТоM];
b=p[$рHОМ]-r[$рHОМ];
return a*a+b*b;
}
function $oОMOО0($ММТMОо,$рАMoсH,$О0IMТ,$cHAAО,r,$OТOрlо,$Tl0pA1,$АОерTl,$ООТ0оА,$Нрpoео,$ооIА1A,$TММcA0,$0МООрp)
{
let $oTIрO0=r*r;

const $Оllрро=$АОерTl-$OТOрlо;
const $роAсНp=$ООТ0оА-$Tl0pA1;
const $сMMcМo=$TММcA0-$Нрpoео;
const $сОo0ec=$0МООрp-$ооIА1A;
const $МoНIТT=$О0IMТ-$ММТMОо;
const $осТМIМ=$cHAAО-$рАMoсH;

let $МlТp01=(t,$оMlТAА)=>
{
A[$eТоM]=$OТOрlо+$Оllрро*t;
A[$рHОМ]=$Tl0pA1+$роAсНp*t;
B[$eТоM]=$Нрpoео+$сMMcМo*t;
B[$рHОМ]=$ооIА1A+$сОo0ec*t;
P[$eТоM]=$ММТMОо+$МoНIТT*t;
P[$рHОМ]=$рАMoсH+$осТМIМ*t;








let $еее1еc=$ТMTOM(P,A,B);

if($еее1еc<$oTIрO0)
$еее1еc=$oTIрO0;

if($оMlТAА)
$еее1еc+=t*0.0001;

return $еее1еc;
};

let left=0;
let right=1;
let $cсo1Оo=0.001;

while((right-left)>$cсo1Оo)
{
const m1=left+(right-left)/3;
const m2=right-(right-left)/3;

const $HрМеTН=$МlТp01(m1,true);
const $MрoHАс=$МlТp01(m2,true);

if($HрМеTН<$MрoHАс)
right=m2;
else
left=m1;
}



let $lIсМeA=(left+right)/2;

if($МlТp01($lIсМeA,false)<=$oTIрO0+0.001)
return $lIсМeA;

return null;
}
























































































































































































































































































































































































































var $00О1М;

function $МАрМcl($HоААо,$OНеА0,$ОеHHM,$оОM1e)
{
for($00О1М=0;$00О1М<$T0МММ+$сMelН;$00О1М++)
{
if($00О1М<$T0МММ)
{
$pрcoA=$сАоОo[$00О1М];
$eccеO=$o1О00[$00О1М];
$OoМoe=$сАоОo[$00О1М]+$с0МAр[$00О1М];
$ММAс1=$o1О00[$00О1М]+$MМрTТ[$00О1М];
}
else
{
$pрcoA=$АAHОе[$00О1М-$T0МММ][$eТоM];
$eccеO=$АAHОе[$00О1М-$T0МММ][$рHОМ];
$OoМoe=$АAHОе[$00О1М-$T0МММ][$eТоM]+$АAHОе[$00О1М-$T0МММ].w;
$ММAс1=$АAHОе[$00О1М-$T0МММ][$рHОМ]+$АAHОе[$00О1М-$T0МММ].h;
}

if($HоААо<$pрcoA)
if($ОеHHM<$pрcoA)
continue;

if($HоААо>$OoМoe)
if($ОеHHM>$OoМoe)
continue;

if($OНеА0<$eccеO)
if($оОM1e<$eccеO)
continue;

if($OНеА0>$ММAс1)
if($оОM1e>$ММAс1)
continue;

if($HоААо>$ОеHHM)
{
minX=$ОеHHM;
maxX=$HоААо;
}
else
{
minX=$HоААо;
maxX=$ОеHHM;
}


if(maxX>$OoМoe)
{
maxX=$OoМoe;
}

if(minX<$pрcoA)
{
minX=$pрcoA;
}


minY=$OНеА0;
maxY=$оОM1e;

dx=$ОеHHM-$HоААо;

if($сTpНО(dx)>0.0000001)
{
a=($оОM1e-$OНеА0)/dx;
b=$OНеА0-a*$HоААо;
minY=a*minX+b;
maxY=a*maxX+b;
}

if(minY>maxY)
{
$еAАcI=maxY;
maxY=minY;
minY=$еAАcI;
}



if(maxY>$ММAс1)
{
maxY=$ММAс1;
}

if(minY<$eccеO)
{
minY=$eccеO;
}

if(minX<=maxX)
if(minY<=maxY)
{
return false;
}
}

for($00О1М=0;$00О1М<$pООро;$00О1М++)
if($AМlоН[$00О1М]!=-1)
if($оОlHT[$00О1М]>40)
if($о1oHМ[$00О1М]>=$0рМOН&&$о1oHМ[$00О1М]<$0рМOН+$рТlle&&
$сoopT[$о1oHМ[$00О1М]-$0рМOН].$оeoТе)
if($сoopT[$о1oHМ[$00О1М]-$0рМOН].io)
{

$pрcoA=$Il[$00О1М]-$оОlHT[$00О1М];
if($HоААо<$pрcoA)
if($ОеHHM<$pрcoA)
continue;

$OoМoe=$Il[$00О1М]+$оОlHT[$00О1М];
if($HоААо>$OoМoe)
if($ОеHHM>$OoМoe)
continue;

$eccеO=$0OA[$00О1М]-$оОlHT[$00О1М];
if($OНеА0<$eccеO)
if($оОM1e<$eccеO)
continue;

$ММAс1=$0OA[$00О1М]+$оОlHT[$00О1М];
if($OНеА0>$ММAс1)
if($оОM1e>$ММAс1)
continue;

if($HоААо>$ОеHHM)
{
minX=$ОеHHM;
maxX=$HоААо;
}
else
{
minX=$HоААо;
maxX=$ОеHHM;
}


if(maxX>$OoМoe)
{
maxX=$OoМoe;
}

if(minX<$pрcoA)
{
minX=$pрcoA;
}


minY=$OНеА0;
maxY=$оОM1e;

dx=$ОеHHM-$HоААо;

if($сTpНО(dx)>0.0000001)
{
a=($оОM1e-$OНеА0)/dx;
b=$OНеА0-a*$HоААо;
minY=a*minX+b;
maxY=a*maxX+b;
}

if(minY>maxY)
{
$еAАcI=maxY;
maxY=minY;
minY=$еAАcI;
}



if(maxY>$ММAс1)
{
maxY=$ММAс1;
}

if(minY<$eccеO)
{
minY=$eccеO;
}

if(minX<=maxX)
if(minY<=maxY)
{
return false;
}
}

return true;
}
var $pTcАер=60*1*0.816;
function $0АO0o($HоААо,$OНеА0,$ОеHHM,$оОM1e,$eIcopТ=false)
{
for($00О1М=0;$00О1М<$T0МММ+$сMelН;$00О1М++)
{
if($00О1М<$T0МММ)
{
$pрcoA=$сАоОo[$00О1М];
$eccеO=$o1О00[$00О1М];
$OoМoe=$сАоОo[$00О1М]+$с0МAр[$00О1М];
$ММAс1=$o1О00[$00О1М]+$MМрTТ[$00О1М];
}
else
{
$pрcoA=$АAHОе[$00О1М-$T0МММ][$eТоM];
$eccеO=$АAHОе[$00О1М-$T0МММ][$рHОМ];
$OoМoe=$АAHОе[$00О1М-$T0МММ][$eТоM]+$АAHОе[$00О1М-$T0МММ].w;
$ММAс1=$АAHОе[$00О1М-$T0МММ][$рHОМ]+$АAHОе[$00О1М-$T0МММ].h;
}

if($HоААо<$pрcoA)
if($ОеHHM<$pрcoA)
continue;

if($HоААо>$OoМoe)
if($ОеHHM>$OoМoe)
continue;

if($OНеА0<$eccеO)
if($оОM1e<$eccеO)
continue;

if($OНеА0>$ММAс1)
if($оОM1e>$ММAс1)
continue;

if($eIcopТ)
{
if($OoМoe-$pрcoA<=$pTcАер||
$ММAс1-$eccеO<=$pTcАер)
continue;
}

if($HоААо>$ОеHHM)
{
minX=$ОеHHM;
maxX=$HоААо;
}
else
{
minX=$HоААо;
maxX=$ОеHHM;
}


if(maxX>$OoМoe)
{
maxX=$OoМoe;
}

if(minX<$pрcoA)
{
minX=$pрcoA;
}


minY=$OНеА0;
maxY=$оОM1e;

dx=$ОеHHM-$HоААо;

if($сTpНО(dx)>0.0000001)
{
a=($оОM1e-$OНеА0)/dx;
b=$OНеА0-a*$HоААо;
minY=a*minX+b;
maxY=a*maxX+b;
}

if(minY>maxY)
{
$еAАcI=maxY;
maxY=minY;
minY=$еAАcI;
}



if(maxY>$ММAс1)
{
maxY=$ММAс1;
}

if(minY<$eccеO)
{
minY=$eccеO;
}

if(minX<=maxX)
if(minY<=maxY)
{
return false;
}
}

return true;
}

function $МIMlMО($HоААо,$OНеА0,$ОеHHM,$оОM1e)
{
for($00О1М=0;$00О1М<$T0МММ+$сMelН+$АТlHО;$00О1М++)
{
if($00О1М<$T0МММ)
{
$pрcoA=$сАоОo[$00О1М];
$eccеO=$o1О00[$00О1М];
$OoМoe=$сАоОo[$00О1М]+$с0МAр[$00О1М];
$ММAс1=$o1О00[$00О1М]+$MМрTТ[$00О1М];
}
else
{
if($00О1М-$T0МММ<$сMelН)
{
$pрcoA=$АAHОе[$00О1М-$T0МММ][$eТоM];
$eccеO=$АAHОе[$00О1М-$T0МММ][$рHОМ];
$OoМoe=$АAHОе[$00О1М-$T0МММ][$eТоM]+$АAHОе[$00О1М-$T0МММ].w;
$ММAс1=$АAHОе[$00О1М-$T0МММ][$рHОМ]+$АAHОе[$00О1М-$T0МММ].h;
}
else
{
$pрcoA=$TpelH[$00О1М-$T0МММ-$сMelН];
$eccеO=$c0НIO[$00О1М-$T0МММ-$сMelН];
$OoМoe=$сеHОp[$00О1М-$T0МММ-$сMelН];
$ММAс1=$оТТAe[$00О1М-$T0МММ-$сMelН];
}
}

if($HоААо<$pрcoA)
if($ОеHHM<$pрcoA)
continue;

if($HоААо>$OoМoe)
if($ОеHHM>$OoМoe)
continue;

if($OНеА0<$eccеO)
if($оОM1e<$eccеO)
continue;

if($OНеА0>$ММAс1)
if($оОM1e>$ММAс1)
continue;


if($HоААо>$ОеHHM)
{
minX=$ОеHHM;
maxX=$HоААо;
}
else
{
minX=$HоААо;
maxX=$ОеHHM;
}


if(maxX>$OoМoe)
{
maxX=$OoМoe;
}

if(minX<$pрcoA)
{
minX=$pрcoA;
}


minY=$OНеА0;
maxY=$оОM1e;

dx=$ОеHHM-$HоААо;

if($сTpНО(dx)>0.0000001)
{
a=($оОM1e-$OНеА0)/dx;
b=$OНеА0-a*$HоААо;
minY=a*minX+b;
maxY=a*maxX+b;
}

if(minY>maxY)
{
$еAАcI=maxY;
maxY=minY;
minY=$еAАcI;
}



if(maxY>$ММAс1)
{
maxY=$ММAс1;
}

if(minY<$eccеO)
{
minY=$eccеO;
}

if(minX<=maxX)
if(minY<=maxY)
{
return false;
}
}

return true;
}


function $OM1МеА($HоААо,$OНеА0,$ОеHHM,$оОM1e)
{
for($00О1М=0;$00О1М<$T0МММ;$00О1М++)
{
$pрcoA=$сАоОo[$00О1М];
if($HоААо<$pрcoA)
if($ОеHHM<$pрcoA)
continue;

$OoМoe=$сАоОo[$00О1М]+$с0МAр[$00О1М];
if($HоААо>$OoМoe)
if($ОеHHM>$OoМoe)
continue;

$eccеO=$o1О00[$00О1М];
if($OНеА0<$eccеO)
if($оОM1e<$eccеO)
continue;

$ММAс1=$o1О00[$00О1М]+$MМрTТ[$00О1М];
if($OНеА0>$ММAс1)
if($оОM1e>$ММAс1)
continue;

if($HоААо>$ОеHHM)
{
minX=$ОеHHM;
maxX=$HоААо;
}
else
{
minX=$HоААо;
maxX=$ОеHHM;
}


if(maxX>$OoМoe)
{
maxX=$OoМoe;
}

if(minX<$pрcoA)
{
minX=$pрcoA;
}


minY=$OНеА0;
maxY=$оОM1e;

dx=$ОеHHM-$HоААо;

if($сTpНО(dx)>0.0000001)
{
a=($оОM1e-$OНеА0)/dx;
b=$OНеА0-a*$HоААо;
minY=a*minX+b;
maxY=a*maxX+b;
}

if(minY>maxY)
{
$еAАcI=maxY;
maxY=minY;
minY=$еAАcI;
}



if(maxY>$ММAс1)
{
maxY=$ММAс1;
}

if(minY<$eccеO)
{
minY=$eccеO;
}

if(minX<=maxX)
if(minY<=maxY)
{
return false;
}
}

return true;
}


var $MМАрр;
function $АОlTО1(by,$HоААо,$OНеА0,$ОеHHM,$оОM1e)
{
for($00О1М=0;$00О1М<$eсАeA;$00О1М++)
if($00О1М!=by)
if($0Ме1А[by][$cАocе]==$0Ме1А[$00О1М][$cАocе]&&$0Ме1А[by][$cАocе]!=0&&!$OАМАO)
if($00О1М!==$0Ме1А[by][$0MТce])
if(by!==$0Ме1А[$00О1М][$0MТce])

if(!$0Ме1А[$00О1М].$loАoM)
{

$pрcoA=$0Ме1А[$00О1М][$eТоM]-Math.abs($0Ме1А[$00О1М][$АсТOе])-10-20;
$eccеO=$0Ме1А[$00О1М][$рHОМ]-Math.abs($0Ме1А[$00О1М][$МcеAH])-82-20;
$OoМoe=$0Ме1А[$00О1М][$eТоM]+Math.abs($0Ме1А[$00О1М][$АсТOе])+10+20;
$ММAс1=$0Ме1А[$00О1М][$рHОМ]+Math.abs($0Ме1А[$00О1М][$МcеAH])-$0Ме1А[$00О1М].sit*$р1OIe+50;


if($HоААо<$pрcoA)
if($ОеHHM<$pрcoA)
continue;

if($HоААо>$OoМoe)
if($ОеHHM>$OoМoe)
continue;

if($OНеА0<$eccеO)
if($оОM1e<$eccеO)
continue;

if($OНеА0>$ММAс1)
if($оОM1e>$ММAс1)
continue;

if($HоААо>$ОеHHM)
{
minX=$ОеHHM;
maxX=$HоААо;
}
else
{
minX=$HоААо;
maxX=$ОеHHM;
}


if(maxX>$OoМoe)
{
maxX=$OoМoe;
}

if(minX<$pрcoA)
{
minX=$pрcoA;
}


minY=$OНеА0;
maxY=$оОM1e;

dx=$ОеHHM-$HоААо;

if($сTpНО(dx)>0.0000001)
{
a=($оОM1e-$OНеА0)/dx;
b=$OНеА0-a*$HоААо;
minY=a*minX+b;
maxY=a*maxX+b;
}

if(minY>maxY)
{
$еAАcI=maxY;
maxY=minY;
minY=$еAАcI;
}



if(maxY>$ММAс1)
{
maxY=$ММAс1;
}

if(minY<$eccеO)
{
minY=$eccеO;
}

if(minX<=maxX)
if(minY<=maxY)
{
return false;
}
}

for($00О1М=0;$00О1М<$ТeeAo;$00О1М++)
{
$eТНсT=false;

for($MМАрр=0;$MМАрр<$eсАeA&&!$eТНсT;$MМАрр++)
if($0Ме1А[$MМАрр].io)
if($0Ме1А[by][$cАocе]==$0Ме1А[$MМАрр][$cАocе]&&$0Ме1А[by][$cАocе]!=0)
if($MМАрр!==$0Ме1А[by][$0MТce])
if(by!==$0Ме1А[$MМАрр][$0MТce])
if(!$0Ме1А[$MМАрр].$loАoM)
{
if($НOНОН($0Ме1А[$MМАрр][$eТоM],$0Ме1А[$MМАрр][$рHОМ],$еоНМо[$00О1М][$eТоM],$еоНМо[$00О1М][$рHОМ])<150)
$eТНсT=true;
}

if($eТНсT)
if($еоНМо[$00О1М][$МIIро]>0)
{


$pрcoA=$еоНМо[$00О1М][$eТоM]-30;
$eccеO=$еоНМо[$00О1М][$рHОМ]-30;
$OoМoe=$еоНМо[$00О1М][$eТоM]+30;
$ММAс1=$еоНМо[$00О1М][$рHОМ]+30;


if($HоААо<$pрcoA)
if($ОеHHM<$pрcoA)
continue;

if($HоААо>$OoМoe)
if($ОеHHM>$OoМoe)
continue;

if($OНеА0<$eccеO)
if($оОM1e<$eccеO)
continue;

if($OНеА0>$ММAс1)
if($оОM1e>$ММAс1)
continue;

if($HоААо>$ОеHHM)
{
minX=$ОеHHM;
maxX=$HоААо;
}
else
{
minX=$HоААо;
maxX=$ОеHHM;
}


if(maxX>$OoМoe)
{
maxX=$OoМoe;
}

if(minX<$pрcoA)
{
minX=$pрcoA;
}


minY=$OНеА0;
maxY=$оОM1e;

dx=$ОеHHM-$HоААо;

if($сTpНО(dx)>0.0000001)
{
a=($оОM1e-$OНеА0)/dx;
b=$OНеА0-a*$HоААо;
minY=a*minX+b;
maxY=a*maxX+b;
}

if(minY>maxY)
{
$еAАcI=maxY;
maxY=minY;
minY=$еAАcI;
}



if(maxY>$ММAс1)
{
maxY=$ММAс1;
}

if(minY<$eccеO)
{
minY=$eccеO;
}

if(minX<=maxX)
if(minY<=maxY)
{
return false;
}

}
}

return true;
}

function $cOToA()
{
if($0Ме1А[$НAlНc].char==1||($0Ме1А[$НAlНc].char>=40&&$0Ме1А[$НAlНc].char<=49))
{
if($0Ме1А[$НAlНc][$МАТОе]>0)
curA=$ОpMрс[$0Ме1А[$НAlНc][$МАТОе]].model;
else
curA=$0OрТ;
}

if($0Ме1А[$НAlНc].char==3)
{
if($0Ме1А[$НAlНc][$МАТОе]>0)
curB=$ОpMрс[$0Ме1А[$НAlНc][$МАТОе]].model;
else
curB=$0OрТ;
}
}

function $ААHМpc(i,$МАМAHо,morph,$eMOАе)
{


for(let s=0;s<$МАМAHо.length;s++)
{
let $HcoHHI=(s+1)%$МАМAHо.length;

let a1=$МАМAHо[s];
let a2=$МАМAHо[$HcoHHI];

let x1=$Il[a1];
let y1=$0OA[a1];

let x2=$Il[a2];
let y2=$0OA[a2];

x1=x1*(1-morph)+$eMOАе[$eТоM]*morph;
y1=y1*(1-morph)+$eMOАе[$рHОМ]*morph;

x2=x2*(1-morph)+$eMOАе[$eТоM]*morph;
y2=y2*(1-morph)+$eMOАе[$рHОМ]*morph;


if($TОpе0р(
$IТТII[i].$oIОMeТ,$IТТII[i].$1рМоОМ,
$IТТII[i].$MOIрOM,$IТТII[i].$1ApоpО,

x1,y1,
x2,y2,i))
{
return true;
}
}
return false;
}

function $TОpе0р(x,y,x2,y2,x3,$ОOHТМ,x4,$poAрl,$рорTHH)
{













v=((x-x2)*($ОOHТМ-y2)+(y-y2)*(x2-x3))/((y-y2)*(x4-x3)-(x-x2)*($poAрl-$ОOHТМ));
$ТOHHМ=x3+(x4-x3)*v;
$lHTсH=$ОOHТМ+($poAрl-$ОOHТМ)*v;

if((x2<x ?x2:x)-1<=$ТOHHМ)
if((x2>x ?x2:x)+1>=$ТOHHМ)
if((y2<y ?y2:y)-1<=$lHTсH)
if((y2>y ?y2:y)+1>=$lHTсH)
if((x3<x4 ?x3:x4)-1<=$ТOHHМ)
if((x3>x4 ?x3:x4)+1>=$ТOHHМ)
if(($ОOHТМ<$poAрl ?$ОOHТМ:$poAрl)-1<=$lHTсH)
if(($ОOHТМ>$poAрl ?$ОOHТМ:$poAрl)+1>=$lHTсH)

{













return true;
}
return false;
}
function $AOIoTO(x,y,x2,y2,x3,$ОOHТМ,x4,$poAрl)
{
v=((x-x2)*($ОOHТМ-y2)+(y-y2)*(x2-x3))/((y-y2)*(x4-x3)-(x-x2)*($poAрl-$ОOHТМ));
$ТOHHМ=x3+(x4-x3)*v;
$lHTсH=$ОOHТМ+($poAрl-$ОOHТМ)*v;


if((x2<x ?x2:x)-1<=$ТOHHМ)
if((x2>x ?x2:x)+1>=$ТOHHМ)
if((y2<y ?y2:y)-1<=$lHTсH)
if((y2>y ?y2:y)+1>=$lHTсH)
if((x3<x4 ?x3:x4)-1<=$ТOHHМ)
if((x3>x4 ?x3:x4)+1>=$ТOHHМ)
if(($ОOHТМ<$poAрl ?$ОOHТМ:$poAрl)-1<=$lHTсH)
if(($ОOHТМ>$poAрl ?$ОOHТМ:$poAрl)+1>=$lHTсH)

return true;
return false;
}
function $oе1AеН(x,y,x2,y2,x3,$ОOHТМ,x4,$poAрl)
{
if((x>x2?x:x2)>=(x3<x4?x3:x4))
if((x<x2?x:x2)<=(x3>x4?x3:x4))
if((y>y2?y:y2)>=($ОOHТМ<$poAрl?$ОOHТМ:$poAрl))
if((y<y2?y:y2)<=($ОOHТМ>$poAрl?$ОOHТМ:$poAрl))
{
v=((x-x2)*($ОOHТМ-y2)+(y-y2)*(x2-x3))/((y-y2)*(x4-x3)-(x-x2)*($poAрl-$ОOHТМ));
$ТOHHМ=x3+(x4-x3)*v;
$lHTсH=$ОOHТМ+($poAрl-$ОOHТМ)*v;











if((x2<x ?x2:x)-1<=$ТOHHМ)
if((x2>x ?x2:x)+1>=$ТOHHМ)
if((y2<y ?y2:y)-1<=$lHTсH)
if((y2>y ?y2:y)+1>=$lHTсH)
if((x3<x4 ?x3:x4)-1<=$ТOHHМ)
if((x3>x4 ?x3:x4)+1>=$ТOHHМ)
if(($ОOHТМ<$poAрl ?$ОOHТМ:$poAрl)-1<=$lHTсH)
if(($ОOHТМ>$poAрl ?$ОOHТМ:$poAрl)+1>=$lHTсH)
return true;
}
return false;
}
function $рeHТрT(x,y)
{

for(i2 of $о001lO(x,y))
if(x>=$сАоОo[i2])
if(x<=$сАоОo[i2]+$с0МAр[i2])
if(y>=$o1О00[i2])
if(y<=$o1О00[i2]+$MМрTТ[i2])
return false;


for(i2=0;i2<$сMelН;i2++)
if(x>=$АAHОе[i2][$eТоM])
if(x<=$АAHОе[i2][$eТоM]+$АAHОе[i2].w)
if(y>=$АAHОе[i2][$рHОМ])
if(y<=$АAHОе[i2][$рHОМ]+$АAHОе[i2].h)
return false;


if($сМ1Но)
for(i2=0;i2<$pООро;i2++)
if($оОlHT[i2]>5)
if($AМlоН[i2]==true||$AМlоН[i2]==false)
if(x>$Il[i2]-$оОlHT[i2])
if(x<$Il[i2]+$оОlHT[i2])
if(y>$0OA[i2]-$оОlHT[i2])
if(y<$0OA[i2]+$оОlHT[i2])
return false;


return true;
}
var $НApеТA=0;
function $ТНOМНI(x,y)
{

for($НApеТA of $о001lO(x,y))
if(x>=$сАоОo[$НApеТA])
if(x<=$сАоОo[$НApеТA]+$с0МAр[$НApеТA])
if(y>=$o1О00[$НApеТA])
if(y<=$o1О00[$НApеТA]+$MМрTТ[$НApеТA])
return false;

return true;
}












function $0oеcН(x,y)
{

for($0ОoHс of $о001lO(x,y))
if(x>=$сАоОo[$0ОoHс])
if(x<=$сАоОo[$0ОoHс]+$с0МAр[$0ОoHс])
if(y>=$o1О00[$0ОoHс])
if(y<=$o1О00[$0ОoHс]+$MМрTТ[$0ОoHс])
return false;

for($0ОoHс=0;$0ОoHс<$сMelН;$0ОoHс++)
if(x>=$АAHОе[$0ОoHс][$eТоM])
if(x<=$АAHОе[$0ОoHс][$eТоM]+$АAHОе[$0ОoHс].w)
if(y>=$АAHОе[$0ОoHс][$рHОМ])
if(y<=$АAHОе[$0ОoHс][$рHОМ]+$АAHОе[$0ОoHс].h)
return false;

return true;
}
var $ToTTT=false;
function $о1eНp(a)
{
if($0Ме1А[a].$АеlОА)
return;

if(!$0Ме1А[a].io)
return;

if(a>=0)
{
if($0Ме1А[a][$МIIро]>0)
{
if($0Ме1А[a][$МАТОе]==-1)
{
if(($НOIHo&&!$0Ме1А[a].$HМ0М1&&(!$0Ме1А[$НAlНc]||$0Ме1А[a][$cАocе]!=$0Ме1А[$НAlНc][$cАocе])&&$0Ме1А[a].$loАoM)||$ToTTT||$0Ме1А[a].$сllсl)
{
$0Ме1А[a].$АсIее.lower.$оАОНА.visible=false;
$0Ме1А[a].$ТНpТI.lower.$оАОНА.visible=false;
}
else
{
$0Ме1А[a].$АсIее.lower.$оАОНА.visible=true;
$0Ме1А[a].$ТНpТI.lower.$оАОНА.visible=true;
}
}
else
{
$0Ме1А[a].$АсIее.lower.$оАОНА.visible=false;
$0Ме1А[a].$ТНpТI.lower.$оАОНА.visible=false;
}
}
else
{
$0Ме1А[a].$АсIее.lower.$оАОНА.visible=false;
$0Ме1А[a].$ТНpТI.lower.$оАОНА.visible=false;
}

$0Ме1А[a].head.scaleX=$0Ме1А[a].$ееоАН*$0Ме1А[a].scale;
$0Ме1А[a].head.scaleY=$0Ме1А[a].scale;

$0Ме1А[a].body.scaleX=$0Ме1А[a].$ееоАН*$0Ме1А[a].scale;
$0Ме1А[a].body.scaleY=$0Ме1А[a].scale;

$0Ме1А[a].$АсIее.scaleX=$0Ме1А[a].$ееоАН*$0Ме1А[a].scale;
$0Ме1А[a].$АсIее.scaleY=$0Ме1А[a].scale;

$0Ме1А[a].$ТНpТI.scaleX=$0Ме1А[a].$ееоАН*$0Ме1А[a].scale;
$0Ме1А[a].$ТНpТI.scaleY=$0Ме1А[a].scale;

$0Ме1А[a].$ooНMН.scaleX=$0Ме1А[a].$ееоАН*$0Ме1А[a].scale;
$0Ме1А[a].$ooНMН.scaleY=$0Ме1А[a].scale;

$0Ме1А[a].$0T1MH.scaleX=$0Ме1А[a].$ееоАН*$0Ме1А[a].scale;
$0Ме1А[a].$0T1MH.scaleY=$0Ме1А[a].scale;

$0Ме1А[a].$еОТТT.scaleX=$0Ме1А[a].$ееоАН*$0Ме1А[a].scale;
$0Ме1А[a].$еОТТT.scaleY=$0Ме1А[a].scale;
}
}
function $o0MIс(a)
{
if(a>=0)
{
if($0Ме1А[a][$МIIро]>0)
{

$0Ме1А[a].$оAAOО=1;

if(a==$НAlНc)
{
$pрMТl();
}
}
$о1eНp(a);
}
}

















var $МTМpсI=false;
function ChatNewMsg($Оe0МcI)
{







if($МTМpсI)
trace($Оe0МcI);

$Оe0МcI=$HT1lН($Оe0МcI);

if(!globalThis.$pОеlО||globalThis.$pОеlО.isRemoved)
{
let text=HUD.$ТHA0H({[$eТоM]: 10,[$рHОМ]:15,[$clе0р]: HUD.$lpНАA,htmlText: $Оe0МcI});

let $рМA11c=stage.addChild(HUD.$OНАTOI({[$eТоM]:10,[$рHОМ]:390-60,w:20+(text.graphics.bounds[$есеcT]-text.graphics.bounds[$рсТTA])/SpriteSheets.text_quality_scale,h:30,[$clе0р]:HUD.$HOAAоM}))
$рМA11c.addChild(text);

for(let i=0;i<$сOсMe.length;i++)
{
$сOсMe[i][$рHОМ]-=35;
}

$сOсMe.push($рМA11c);


setTimeout(()=>
{
$рМA11c.remove();

$сOсMe.splice($сOсMe.indexOf($рМA11c),1);

},Math.max(2000,Math.min(10000,$Оe0МcI.length*70)));
return;
}

$HlеОI=0;
for($0OcpА=1;$0OcpА<11;$0OcpА++)
{
if($pОеlО[$еIс0+$0OcpА][$рHОМ]<$pОеlО[$еIс0+$HlеОI][$рHОМ])
$HlеОI=$0OcpА;
}

$рТеео=0;
for($0OcpА=1;$0OcpА<11;$0OcpА++)
{
if($pОеlО[$еIс0+$0OcpА][$рHОМ]>$pОеlО[$еIс0+$рТеео][$рHОМ])
$рТеео=$0OcpА;
}

$pОеlО[$еIс0+$HlеОI][$рHОМ]=$pОеlО[$еIс0+$рТеео][$рHОМ]+19;
$pОеlО[$еIс0+$HlеОI].visible=true;
$pОеlО[$еIс0+$HlеОI].alpha=1;
$pОеlО[$еIс0+$HlеОI].timer=300;

$pОеlО[$еIс0+$HlеОI].$MН1Mp.htmlText=$Оe0МcI;

if($pОеlО[$еIс0+$HlеОI][$рHОМ]>38)
{
$pосОА=$pОеlО[$еIс0+$HlеОI][$рHОМ];
for($0OcpА=0;$0OcpА<11;$0OcpА++)
{
$pОеlО[$еIс0+$0OcpА][$рHОМ]-=$pосОА;
}
}
}


var $оОT1lр=false;
var $рTТА=$0OрТ;
if(this.loaderInfo.parameters.$Mеlpрp!=undefined)
$оОT1lр=true;








var $poToНA=[];

$poToНA[$оoеМО]=$plМеl;



$poToНA[$ATIес]=$ТОоeA;

$poToНA[$cIIAТ]=$I0Аo1;



$poToНA[$HсOрМ]=$рeTАН;

$poToНA[$lНTHс]=$IOсеI;

$poToНA[$AeMcO]=$еA0оl;

$poToНA[$AMTHе]=$HААОТ;

$poToНA[$M0oOH]=$ОАlAМ;

$poToНA[$ОМрТ0]=$НcIce;

$poToНA[$AIАTM]=$eроеH;

$poToНA[$1MОM0]=$1pcеc;

$poToНA[$MO1oI]=$H1МM1;

$poToНA[$10АoМ]=$сМOlТ;

$poToНA[$ТМeТo]=$IOA0O;

$poToНA[$АOосI]=$IоOе0;

$poToНA[$cМАeA]=$cIoIA;

$poToНA[$оАAcH]=$е0о0Н;

$poToНA[$еHр1А]=$eАОНM;

$poToНA[$pМIMo]=$р1роТ;

$poToНA[$OAOМp]=$НHMcI;

$poToНA[$TАpео]=$ecТАс;

$poToНA[$сlеIo]=$Не0TА;

$poToНA[$oТIеT]=$АIМ0I;

$poToНA[$MОоAM]=$оpAТI;

$poToНA[$o1eТр]=$oоMоM;

$poToНA[$eрlТ0]=$сО1оI;

$poToНA[$cIeрp]=$о11pс;

$poToНA[$ННAlH]=$Т1eеp;

$poToНA[$0Opсl]=$TАApp;

$poToНA[$HH0He]=$ТоpoT;

$poToНA[$рH01р]=$АеHОM;

$poToНA[$oсОcA]=$е0оА0;

$poToНA[$1о0еT]=$0lТсо;

$poToНA[$AееТM]=$НеcрT;

$poToНA[$ОеОcH]=$еpНрT;

$poToНA[$OTAМс]=$oAAeе;

$poToНA[$eoТOo]=$M1оАc;

$poToНA[$еoHрТ]=$lрОTT;

$poToНA[$АH1cT]=$е1MМ1;



$poToНA[$сОМАо]=$оНl1А;


$poToНA[$0Hpoс]=`<player x="-420" y="-699" tox="0" toy="0" hea="100" hmax="100" team="0" side="1" char="1" incar="-1" botaction="1" ondeath="-1"/><bg x="-2600" y="-1300" w="7200" h="2300" m="0"/><box x="-300" y="-700" w="300" h="400" m="0"/><box x="-1200" y="-20" w="200" h="220" m="0"/><box x="-2600" y="-1300" w="2600" h="400" m="0"/><inf x="-420" y="-740" mark="hero1_guns" forteam="0"/><door x="-600" y="-910" w="110" h="310" moving="false" tarx="0" tary="0" maxspeed="1" vis="false"/><door x="-550" y="-1090" w="40" h="200" moving="false" tarx="0" tary="0" maxspeed="5" vis="true"/><door x="-310" y="-910" w="70" h="310" moving="false" tarx="0" tary="0" maxspeed="1" vis="false"/><door x="-290" y="-1090" w="40" h="200" moving="false" tarx="0" tary="0" maxspeed="5" vis="true"/><enemy x="-210" y="-699" tox="0" toy="0" hea="100" hmax="100" team="0" side="-1" char="3" incar="-1" botaction="0" ondeath="-1"/><enemy x="-150" y="-699" tox="0" toy="0" hea="800" hmax="800" team="0" side="-1" char="13" incar="-1" botaction="0" ondeath="-1"/><inf x="-210" y="-720" mark="hero2_guns" forteam="-1"/><gun x="-150" y="-710" model="gun_defibrillator" command="-1" upg="0"/><gun x="-150" y="-720" model="gun_pistol2" command="-1" upg="3"/><gun x="-150" y="-730" model="gun_raygun" command="-1" upg="3"/><gun x="-150" y="-740" model="gun_minigun" command="-1" upg="0"/><gun x="-150" y="-750" model="gun_plasmagun" command="-1" upg="3"/><gun x="-150" y="-760" model="gun_rl" command="-1" upg="3"/><gun x="-150" y="-770" model="item_grenade" command="-1" upg="0"/><door x="-500" y="-700" w="200" h="50" moving="false" tarx="0" tary="0" maxspeed="10" vis="true"/><timer enabled="true" maxcalls="1" target="0" delay="0"/><trigger enabled="true" maxcalls="1" actions_1_type="0" actions_1_targetA="1" actions_1_targetB="0" actions_2_type="-1" actions_2_targetA="0" actions_2_targetB="0" actions_3_type="-1" actions_3_targetA="0" actions_3_targetB="0" actions_4_type="-1" actions_4_targetA="0" actions_4_targetB="0" actions_5_type="-1" actions_5_targetA="0" actions_5_targetB="0" actions_6_type="-1" actions_6_targetA="0" actions_6_targetB="0" actions_7_type="-1" actions_7_targetA="0" actions_7_targetB="0" actions_8_type="-1" actions_8_targetA="0" actions_8_targetB="0" actions_9_type="-1" actions_9_targetA="0" actions_9_targetB="0" actions_10_type="-1" actions_10_targetA="0" actions_10_targetB="0"/><region x="-550" y="-900" w="40" h="200" use_target="-1" use_on="4"/><region x="-500" y="-820" w="200" h="130" use_target="1" use_on="1"/><trigger enabled="true" maxcalls="1" actions_1_type="0" actions_1_targetA="4" actions_1_targetB="2" actions_2_type="-1" actions_2_targetA="0" actions_2_targetB="0" actions_3_type="-1" actions_3_targetA="0" actions_3_targetB="0" actions_4_type="-1" actions_4_targetA="0" actions_4_targetB="0" actions_5_type="-1" actions_5_targetA="0" actions_5_targetB="0" actions_6_type="-1" actions_6_targetA="0" actions_6_targetB="0" actions_7_type="-1" actions_7_targetA="0" actions_7_targetB="0" actions_8_type="-1" actions_8_targetA="0" actions_8_targetB="0" actions_9_type="-1" actions_9_targetA="0" actions_9_targetB="0" actions_10_type="-1" actions_10_targetA="0" actions_10_targetB="0"/><region x="-500" y="500" w="200" h="50" use_target="-1" use_on="4"/><box x="-100" y="-700" w="1000" h="300" m="0"/><box x="0" y="-760" w="400" h="300" m="0"/><box x="190" y="-800" w="1010" h="300" m="0"/><region x="-600" y="-200" w="600" h="140" use_target="2" use_on="6"/><box x="-1110" y="550" w="1700" h="450" m="0"/><box x="-1440" y="500" w="940" h="500" m="0"/><box x="-300" y="500" w="1200" h="190" m="0"/><box x="230" y="200" w="810" h="100" m="0"/><box x="200" y="260" w="900" h="740" m="0"/><trigger enabled="true" maxcalls="1" actions_1_type="1" actions_1_targetA="4" actions_1_targetB="2" actions_2_type="41" actions_2_targetA="test_sound" actions_2_targetB="0" actions_3_type="29" actions_3_targetA="0" actions_3_targetB="4" actions_4_type="29" actions_4_targetA="0" actions_4_targetB="5" actions_5_type="-1" actions_5_targetA="0" actions_5_targetB="0" actions_6_type="-1" actions_6_targetA="0" actions_6_targetB="0" actions_7_type="-1" actions_7_targetA="0" actions_7_targetB="0" actions_8_type="-1" actions_8_targetA="0" actions_8_targetB="0" actions_9_type="-1" actions_9_targetA="0" actions_9_targetB="0" actions_10_type="-1" actions_10_targetA="0" actions_10_targetB="0"/><box x="-1800" y="400" w="500" h="600" m="0"/><box x="-2600" y="200" w="1100" h="800" m="0"/><box x="-2180" y="-700" w="580" h="600" m="0"/><box x="-2600" y="-700" w="800" h="1080" m="0"/><box x="-1400" y="-100" w="300" h="100" m="0"/><box x="-700" y="-100" w="200" h="200" m="0"/><box x="-100" y="-1300" w="2050" h="300" m="0"/><box x="500" y="-100" w="400" h="100" m="0"/><box x="400" y="-700" w="800" h="400" m="0"/><box x="-1300" y="-60" w="150" h="160" m="0"/><pushf x="0" y="200" w="200" h="300" tox="0" toy="-1" stab="0" damage="0"/><decor x="100" y="500" model="antigravity" at="-1" addx="0" addy="0"/><box x="-1800" y="-700" w="1300" h="400" m="0"/><lamp x="-400" y="-890" power="0.4" flare="1"/><lamp x="200" y="-990" power="0.4" flare="1"/><lamp x="500" y="-990" power="0.4" flare="1"/><lamp x="-800" y="-200" power="0.4" flare="1"/><lamp x="-550" y="150" power="0.4" flare="1"/><lamp x="100" y="-360" power="0.4" flare="1"/><lamp x="100" y="490" power="0.4" flare="1"/><lamp x="-1700" y="0" power="0.4" flare="1"/><box x="1000" y="-100" w="950" h="1100" m="0"/><vehicle x="770" y="100" side="-1" model="veh_corvette" tox="0" toy="0" hpp="400"/><enemy x="770" y="161" tox="0" toy="0" hea="100" hmax="100" team="1" side="-1" char="5" incar="-2" botaction="0" ondeath="5"/><gun x="770" y="130" model="gun_vehgun" command="-1" upg="0"/><box x="0" y="-100" w="100" h="100" m="0"/><box x="-300" y="200" w="100" h="100" m="0"/><vehicle x="600" y="-200" side="-1" model="veh_corvette" tox="0" toy="0" hpp="400"/><gun x="600" y="-180" model="gun_vehgun" command="-1" upg="0"/><enemy x="600" y="-159" tox="0" toy="0" hea="100" hmax="100" team="1" side="-1" char="5" incar="-2" botaction="0" ondeath="4"/><box x="-800" y="-20" w="200" h="220" m="0"/><region x="530" y="-400" w="410" h="630" use_target="-1" use_on="4"/><enemy x="-1270" y="-129" tox="0" toy="0" hea="100" hmax="100" team="1" side="1" char="5" incar="-2" botaction="0" ondeath="3"/><vehicle x="-1270" y="-170" side="1" model="veh_corvette" tox="0" toy="0" hpp="400"/><gun x="-1270" y="-150" model="gun_vehgun" command="-1" upg="0"/><region x="-1380" y="-330" w="240" h="260" use_target="-1" use_on="4"/><water x="-800" y="460" w="1000" h="40" damage="1"/><water x="-500" y="500" w="200" h="50" damage="1"/><water x="-1300" y="460" w="300" h="40" damage="1"/><box x="-1000" y="400" w="200" h="150" m="0"/><box x="-1700" y="140" w="100" h="100" m="0"/><box x="-1400" y="330" w="80" h="110" m="0"/><box x="-260" y="240" w="160" h="60" m="0"/><door x="700" y="-300" w="50" h="200" moving="false" tarx="0" tary="0" maxspeed="10" vis="true"/><door x="760" y="-300" w="50" h="200" moving="false" tarx="0" tary="0" maxspeed="10" vis="true"/><door x="820" y="-300" w="50" h="200" moving="false" tarx="0" tary="0" maxspeed="10" vis="true"/><box x="860" y="-70" w="180" h="30" m="0"/><region x="700" y="-490" w="50" h="200" use_target="-1" use_on="4"/><region x="760" y="-490" w="50" h="200" use_target="-1" use_on="4"/><region x="820" y="-490" w="50" h="200" use_target="-1" use_on="4"/><trigger enabled="true" maxcalls="1" actions_1_type="0" actions_1_targetA="5" actions_1_targetB="6" actions_2_type="-1" actions_2_targetA="0" actions_2_targetB="0" actions_3_type="-1" actions_3_targetA="0" actions_3_targetB="0" actions_4_type="-1" actions_4_targetA="0" actions_4_targetB="0" actions_5_type="-1" actions_5_targetA="0" actions_5_targetB="0" actions_6_type="-1" actions_6_targetA="0" actions_6_targetB="0" actions_7_type="-1" actions_7_targetA="0" actions_7_targetB="0" actions_8_type="-1" actions_8_targetA="0" actions_8_targetB="0" actions_9_type="-1" actions_9_targetA="0" actions_9_targetB="0" actions_10_type="-1" actions_10_targetA="0" actions_10_targetB="0"/><trigger enabled="true" maxcalls="1" actions_1_type="0" actions_1_targetA="6" actions_1_targetB="7" actions_2_type="-1" actions_2_targetA="0" actions_2_targetB="0" actions_3_type="-1" actions_3_targetA="0" actions_3_targetB="0" actions_4_type="-1" actions_4_targetA="0" actions_4_targetB="0" actions_5_type="-1" actions_5_targetA="0" actions_5_targetB="0" actions_6_type="-1" actions_6_targetA="0" actions_6_targetB="0" actions_7_type="-1" actions_7_targetA="0" actions_7_targetB="0" actions_8_type="-1" actions_8_targetA="0" actions_8_targetB="0" actions_9_type="-1" actions_9_targetA="0" actions_9_targetB="0" actions_10_type="-1" actions_10_targetA="0" actions_10_targetB="0"/><trigger enabled="true" maxcalls="1" actions_1_type="0" actions_1_targetA="7" actions_1_targetB="8" actions_2_type="-1" actions_2_targetA="0" actions_2_targetB="0" actions_3_type="-1" actions_3_targetA="0" actions_3_targetB="0" actions_4_type="-1" actions_4_targetA="0" actions_4_targetB="0" actions_5_type="-1" actions_5_targetA="0" actions_5_targetB="0" actions_6_type="-1" actions_6_targetA="0" actions_6_targetB="0" actions_7_type="-1" actions_7_targetA="0" actions_7_targetB="0" actions_8_type="-1" actions_8_targetA="0" actions_8_targetB="0" actions_9_type="-1" actions_9_targetA="0" actions_9_targetB="0" actions_10_type="-1" actions_10_targetA="0" actions_10_targetB="0"/><enemy x="1050" y="-99" tox="0" toy="0" hea="1000" hmax="1000" team="1" side="-1" char="2" incar="-1" botaction="0" ondeath="-1"/><gun x="1050" y="-130" model="gun_raygun" command="-1" upg="2"/><enemy x="1140" y="-99" tox="0" toy="0" hea="1000" hmax="1000" team="1" side="-1" char="2" incar="-1" botaction="0" ondeath="-1"/><enemy x="1230" y="-99" tox="0" toy="0" hea="1000" hmax="1000" team="1" side="-1" char="2" incar="-1" botaction="0" ondeath="-1"/><gun x="1140" y="-130" model="gun_raygun" command="-1" upg="2"/><gun x="1230" y="-130" model="gun_raygun" command="-1" upg="2"/><box x="1300" y="-220" w="380" h="220" m="0"/><box x="1000" y="-800" w="950" h="400" m="0"/><box x="2400" y="-600" w="2200" h="1600" m="0"/><box x="1900" y="-50" w="620" h="1050" m="0"/><timer enabled="true" maxcalls="1" target="6" delay="10"/><trigger enabled="true" maxcalls="1" actions_1_type="42" actions_1_targetA="Somebody has to activate the time machine, I will do it myself." actions_1_targetB="1" actions_2_type="25" actions_2_targetA="2" actions_2_targetB="0" actions_3_type="-1" actions_3_targetA="0" actions_3_targetB="0" actions_4_type="-1" actions_4_targetA="0" actions_4_targetB="0" actions_5_type="-1" actions_5_targetA="0" actions_5_targetB="0" actions_6_type="-1" actions_6_targetA="0" actions_6_targetB="0" actions_7_type="-1" actions_7_targetA="0" actions_7_targetB="0" actions_8_type="-1" actions_8_targetA="0" actions_8_targetB="0" actions_9_type="-1" actions_9_targetA="0" actions_9_targetB="0" actions_10_type="-1" actions_10_targetA="0" actions_10_targetB="0"/><timer enabled="false" maxcalls="1" target="7" delay="60"/><trigger enabled="true" maxcalls="1" actions_1_type="42" actions_1_targetA="Good luck!" actions_1_targetB="3" actions_2_type="25" actions_2_targetA="3" actions_2_targetB="0" actions_3_type="-1" actions_3_targetA="0" actions_3_targetB="0" actions_4_type="-1" actions_4_targetA="0" actions_4_targetB="0" actions_5_type="-1" actions_5_targetA="0" actions_5_targetB="0" actions_6_type="-1" actions_6_targetA="0" actions_6_targetB="0" actions_7_type="-1" actions_7_targetA="0" actions_7_targetB="0" actions_8_type="-1" actions_8_targetA="0" actions_8_targetB="0" actions_9_type="-1" actions_9_targetA="0" actions_9_targetB="0" actions_10_type="-1" actions_10_targetA="0" actions_10_targetB="0"/><timer enabled="true" maxcalls="1" target="8" delay="60"/><trigger enabled="true" maxcalls="1" actions_1_type="0" actions_1_targetA="3" actions_1_targetB="9" actions_2_type="32" actions_2_targetA="1" actions_2_targetB="3" actions_3_type="32" actions_3_targetA="2" actions_3_targetB="3" actions_4_type="-1" actions_4_targetA="0" actions_4_targetB="0" actions_5_type="-1" actions_5_targetA="0" actions_5_targetB="0" actions_6_type="-1" actions_6_targetA="0" actions_6_targetB="0" actions_7_type="-1" actions_7_targetA="0" actions_7_targetB="0" actions_8_type="-1" actions_8_targetA="0" actions_8_targetB="0" actions_9_type="-1" actions_9_targetA="0" actions_9_targetB="0" actions_10_type="-1" actions_10_targetA="0" actions_10_targetB="0"/><region x="-290" y="-900" w="40" h="200" use_target="-1" use_on="4"/><door x="600" y="-1000" w="60" h="200" moving="false" tarx="0" tary="0" maxspeed="1" vis="true"/><box x="1520" y="-170" w="280" h="170" m="0"/><region x="1860" y="-850" w="50" h="50" use_target="-1" use_on="4"/><region x="1770" y="-410" w="120" h="330" use_target="9" use_on="6"/><trigger enabled="true" maxcalls="1" actions_1_type="14" actions_1_targetA="1" actions_1_targetB="10" actions_2_type="40" actions_2_targetA="1" actions_2_targetB="0" actions_3_type="32" actions_3_targetA="1" actions_3_targetB="1" actions_4_type="0" actions_4_targetA="9" actions_4_targetB="12" actions_5_type="14" actions_5_targetA="2" actions_5_targetB="13" actions_6_type="-1" actions_6_targetA="0" actions_6_targetB="0" actions_7_type="32" actions_7_targetA="2" actions_7_targetB="1" actions_8_type="-1" actions_8_targetA="0" actions_8_targetB="0" actions_9_type="-1" actions_9_targetA="0" actions_9_targetB="0" actions_10_type="-1" actions_10_targetA="0" actions_10_targetB="0"/><bg x="-550" y="-900" w="40" h="200" m="4"/><bg x="-290" y="-900" w="40" h="200" m="4"/><bg x="-480" y="-680" w="10" h="1210" m="4"/><bg x="-330" y="-680" w="10" h="1210" m="4"/><bg x="710" y="-300" w="30" h="200" m="4"/><bg x="770" y="-300" w="30" h="200" m="4"/><bg x="830" y="-300" w="30" h="200" m="4"/><lamp x="1960" y="-500" power="0.4" flare="1"/><door x="1620" y="-570" w="50" h="180" moving="false" tarx="0" tary="0" maxspeed="10" vis="true"/><region x="1620" y="-400" w="50" h="180" use_target="-1" use_on="4"/><bg x="1630" y="-400" w="30" h="180" m="4"/><door x="1800" y="-1000" w="60" h="200" moving="false" tarx="0" tary="0" maxspeed="1" vis="true"/><region x="1900" y="-850" w="50" h="50" use_target="-1" use_on="4"/><box x="3800" y="-1300" w="800" h="1000" m="0"/><decor x="3530" y="-740" model="final_place2" at="-1" addx="0" addy="0"/><door x="3360" y="-750" w="340" h="30" moving="false" tarx="0" tary="0" maxspeed="1" vis="false"/><box x="1800" y="-1300" w="900" h="200" m="0"/><decor x="2170" y="-50" model="antigravity" at="-1" addx="0" addy="0"/><decor x="2300" y="-50" model="antigravity" at="-1" addx="0" addy="0"/><decor x="2040" y="-50" model="antigravity" at="-1" addx="0" addy="0"/><pushf x="1950" y="-600" w="450" h="550" tox="0" toy="-0.7" stab="0" damage="0"/><box x="2430" y="-700" w="80" h="160" m="0"/><box x="2800" y="-660" w="130" h="160" m="0"/><box x="2820" y="-730" w="80" h="160" m="0"/><box x="3250" y="-730" w="640" h="160" m="0"/><box x="3160" y="-650" w="210" h="100" m="0"/><box x="3500" y="-1300" w="530" h="200" m="0"/><lamp x="2800" y="-1500" power="0.4" flare="0"/><lamp x="3000" y="-1500" power="0.4" flare="0"/><lamp x="3200" y="-1500" power="0.4" flare="0"/><lamp x="3400" y="-1500" power="0.4" flare="0"/><lamp x="3600" y="-1500" power="0.4" flare="0"/><lamp x="2600" y="-1500" power="0.4" flare="0"/><lamp x="2000" y="-1050" power="0.4" flare="1"/><lamp x="2170" y="-60" power="0.4" flare="1"/><lamp x="2300" y="-60" power="0.4" flare="1"/><lamp x="2040" y="-60" power="0.4" flare="1"/><enemy x="3050" y="-899" tox="0" toy="0" hea="100" hmax="100" team="1" side="-1" char="5" incar="-2" botaction="0" ondeath="-1"/><vehicle x="3050" y="-940" side="-1" model="veh_corvette" tox="0" toy="0" hpp="400"/><gun x="3050" y="-930" model="gun_vehgun" command="-1" upg="0"/><pushf x="2700" y="-1300" w="800" h="100" tox="0" toy="3" stab="0" damage="0"/><enemy x="3310" y="-889" tox="0" toy="0" hea="100" hmax="100" team="1" side="-1" char="5" incar="-2" botaction="0" ondeath="-1"/><vehicle x="3310" y="-930" side="-1" model="veh_corvette" tox="0" toy="0" hpp="400"/><gun x="3310" y="-920" model="gun_vehgun" command="-1" upg="0"/><enemy x="3220" y="-1059" tox="0" toy="0" hea="100" hmax="100" team="1" side="-1" char="5" incar="-2" botaction="0" ondeath="-1"/><vehicle x="3220" y="-1100" side="-1" model="veh_corvette" tox="0" toy="0" hpp="400"/><gun x="3220" y="-1090" model="gun_vehgun" command="-1" upg="0"/><enemy x="2880" y="-1059" tox="0" toy="0" hea="100" hmax="100" team="1" side="-1" char="5" incar="-2" botaction="0" ondeath="-1"/><vehicle x="2880" y="-1100" side="-1" model="veh_corvette" tox="0" toy="0" hpp="400"/><gun x="2880" y="-1090" model="gun_vehgun" command="-1" upg="0"/><gun x="2300" y="-850" model="gun_vehgun" command="-1" upg="0"/><enemy x="2290" y="-819" tox="0" toy="0" hea="100" hmax="100" team="1" side="-1" char="5" incar="-2" botaction="0" ondeath="-1"/><vehicle x="2290" y="-860" side="-1" model="veh_corvette" tox="0" toy="0" hpp="400"/><region x="3360" y="-1020" w="340" h="280" use_target="10" use_on="7"/><trigger enabled="true" maxcalls="1" actions_1_type="43" actions_1_targetA="To be continued..." actions_1_targetB="0" actions_2_type="47" actions_2_targetA="0" actions_2_targetB="0" actions_3_type="41" actions_3_targetA="last_teleport" actions_3_targetB="0" actions_4_type="-1" actions_4_targetA="0" actions_4_targetB="0" actions_5_type="-1" actions_5_targetA="0" actions_5_targetB="0" actions_6_type="-1" actions_6_targetA="0" actions_6_targetB="0" actions_7_type="-1" actions_7_targetA="0" actions_7_targetB="0" actions_8_type="-1" actions_8_targetA="0" actions_8_targetB="0" actions_9_type="-1" actions_9_targetA="0" actions_9_targetB="0" actions_10_type="-1" actions_10_targetA="0" actions_10_targetB="0"/><box x="1870" y="-800" w="230" h="50" m="0"/><region x="1340" y="-380" w="140" h="190" use_target="-1" use_on="1"/><region x="1340" y="-400" w="140" h="190" use_target="11" use_on="6"/><trigger enabled="true" maxcalls="1" actions_1_type="41" actions_1_targetA="t_switch2" actions_1_targetB="0" actions_2_type="-1" actions_2_targetA="0" actions_2_targetB="0" actions_3_type="-1" actions_3_targetA="0" actions_3_targetB="0" actions_4_type="-1" actions_4_targetA="0" actions_4_targetB="0" actions_5_type="-1" actions_5_targetA="0" actions_5_targetB="0" actions_6_type="-1" actions_6_targetA="0" actions_6_targetB="0" actions_7_type="-1" actions_7_targetA="0" actions_7_targetB="0" actions_8_type="-1" actions_8_targetA="0" actions_8_targetB="0" actions_9_type="-1" actions_9_targetA="0" actions_9_targetB="0" actions_10_type="-1" actions_10_targetA="0" actions_10_targetB="0"/><region x="3100" y="-1230" w="770" h="680" use_target="12" use_on="7"/><trigger enabled="true" maxcalls="1" actions_1_type="42" actions_1_targetA="Forward to the past!" actions_1_targetB="2" actions_2_type="-1" actions_2_targetA="0" actions_2_targetB="0" actions_3_type="-1" actions_3_targetA="0" actions_3_targetB="0" actions_4_type="-1" actions_4_targetA="0" actions_4_targetB="0" actions_5_type="-1" actions_5_targetA="0" actions_5_targetB="0" actions_6_type="-1" actions_6_targetA="0" actions_6_targetB="0" actions_7_type="-1" actions_7_targetA="0" actions_7_targetB="0" actions_8_type="-1" actions_8_targetA="0" actions_8_targetB="0" actions_9_type="-1" actions_9_targetA="0" actions_9_targetB="0" actions_10_type="-1" actions_10_targetA="0" actions_10_targetB="0"/>`;


$poToНA[$MAсAе]=$lрТel;




var $ОoAоl=$0OрТ;
var $pМTроO=0;
function $TO1eH(str)
{
if($еHоНH||$pMМ1)
{

$OМMО=$ТcрМА+$рTТА;
}
else
{

$OМMО=$MlTO1+($lсосТ+1);
}

$АcММp=str;
$ОoAоl=str;

$То0He.visible=true;
$То0He.$OОТTр.gotoAndPlay(1);

if($poToНA[$ОoAоl]!=undefined)
{
$ОTТрcI($poToНA[$ОoAоl]);
}
else
{

$eАОо=new URLRequest($ооМсo);
$0МеA=new URLVariables();

{
$0МеA[$0cрО]=$Oeо0;
$0МеA[$АТIo]=$pATO;

$0МеA[$OcMо]=$АеОНT;
$0МеA[$eAеоТ]=str;
$0МеA[$сНAоо]=$НMТTp;

if($cерAc)
trace($0ol1О+str);
}

$eАОо[$е0Тc]=URLRequestMethod.POST;
$eАОо[$1еM1]=$0МеA;

$TcpеТ.addEventListener(Event.COMPLETE,$OllНIM);
$TcpеТ.addEventListener(IOErrorEvent.IO_ERROR,$cНcAсс);
$TcpеТ.load($eАОо);

}
}
function $cНcAсс(e)
{
$TcpеТ.removeEventListener(Event.COMPLETE,$OllНIM);
$TcpеТ.removeEventListener(IOErrorEvent.IO_ERROR,$cНcAсс);


if(currentLabel==$1Meo||currentLabel==$lТMe)
{

if($cерAc)
trace($рАММI+$ОoAоl+$ср1cс,$pМTроO);

$pМTроO++;
if($pМTроO<3)
$TO1eH($АcММp);
else
{
if($poToНA[$ОoAоl]!=undefined)
{
trace($1IcАA);


$ОTТрcI($poToНA[$ОoAоl]);
}
else
if($pМTроO<15)
$TO1eH($АcММp);
else
{

$То0He.visible=false;
$То0He.$OОТTр.gotoAndStop(1);
}
}
}
}
function $OllНIM(e)
{


$TcpеТ.removeEventListener(Event.COMPLETE,$OllНIM);
$TcpеТ.removeEventListener(IOErrorEvent.IO_ERROR,$cНcAсс);

if($TcpеТ[$1еM1]==$оAoТT)
{



gotoAndStop($OОeр);


HUD.CreateAlertScreen($IeoMO,()=>{globalThis.$MpOеIе.value=$ОoAоl;});
}
else
{


$ОTТрcI($TcpеТ[$1еM1]);


}
}
function $ОTТрcI($TTH10c)
{
if(currentLabel==$1Meo||currentLabel==$lТMe||currentLabel==$Аo1O||currentLabel==$АОеe)
{
root.$НМcрТр=$TTH10c;

$pMМ1=false;
$НAlНc=0;
$MАTOc=30;
$оepТA=-1;

$AAсAр=$АТОТ;
$Hl1AА.visible=true;
$Hl1AА.alpha=1;



if(currentLabel==$1Meo||currentLabel==$lТMe||currentLabel==$Аo1O)
{

gotoAndStop($ОcMТ);
}
}
}


var $оToo10;
function $e1ММTо($Т1MсНe,$ОTl1НA)
{
$оToo10+=$pTpc+$Т1MсНe+$ТМcA+$ОTl1НA;
}
var $oМНеM1=true;



function $1T1рA()
{
try
{
if($pMМ1)
{
if($00pеH)
$lMH0М=false;

if($lMH0М)
{
$oМНеM1=false;

$e1ММTо(`room`,$1Oеее);
$e1ММTо(`$HАAеоl`,$НAlНc);

$oМНеM1=true;


$АlНp1($оToo10);
}
else
{
$oМНеM1=false;

if(!$00pеH)
{






























































for(i=0;i<$0еeоM;i++)
if($MoIoр[i].stat===3)
{
i2=$MoIoр[i].$Opррe;
if($IТТII[$MoIoр[i].$сОММН]==null||$IТТII[$MoIoр[i].$сОММН]==undefined||!$IТТII[$MoIoр[i].$сОММН].visible)
{

$MoIoр[i].stat=0;

}
else
{
MP_custom_events+=$I0ОcH+$MoIoр[i].$10ApеН+$IHTe+$Il[i2]+$IHTe+$0OA[i2]+$IHTe+$OTpc1[i2]+$IHTe+$IрТ0H[i2]+$IHTe+($IТТII[$MoIoр[i].$сОММН].$1оеoрМ ? $MpoО:$АрНО)+$IHTe+($IТТII[$MoIoр[i].$сОММН].visible ? $MpoО:$АрНО);


}


}


$eеlc1=getTimer()-$eТсMО;

if($eеlc1>$1АeTе)
{

$Т0реT+=Math.min($eеlc1-$1АeTе,100);

if($0Ме1А[$НAlНc].$оeoТе||$0Ме1А[$НAlНc].$АTТМc==-1||getTimer()-$0Ме1А[$НAlНc].$Т10е1>7000)
if($Т0реT>350)
{
if(!$А1Hр1)
{
$А1Hр1=true;
$оеIТМ($сeM00+$1АeTе+$0АМIМ+$eеlc1+$HAIсМ,$TlНp);

}
if($Т0реT>450)
{
if(!$IНIеТ)
{
$оеIТМ($АОOl1+$1АeTе+$0АМIМ+$eеlc1+$HAIсМ,$ТcАсТ);
$IНIеТ=true;
}
}
}
}
else
{
$Т0реT-=$1АeTе-$eеlc1;

if($Т0реT<0)
{
$Т0реT=0;
$А1Hр1=false;
}
else
{

}
}
}
$eТсMО=getTimer();
$оToo10=$eHpAl;

$e1ММTо(`room`,$1Oеее);
$e1ММTо(`lastid`,$оepТA);






$e1ММTо(`$IAT0МI`,MP_custom_events);
MP_custom_events=$Аcle;

if(!$00pеH)
{
$e1ММTо(`p`,$сеpМ0);


$e1ММTо(`cc`,$0Ме1А[$НAlНc].char+$eерН+$0Ме1А[$НAlНc].$Нр01I.join($0OрТ));



if($0Ме1А[$НAlНc][$МIIро]>0)
{

$e1ММTо(`sb`,Math.round($0Ме1А[$НAlНc].$eoОpА*100)/100);


{

$e1ММTо(`hn`,$0Ме1А[$НAlНc][$0MТce]);
}

if($0Ме1А[$НAlНc].$eoОpА>0)
{

$e1ММTо(`x`,Math.round($0Ме1А[$НAlНc][$eТоM]));
$e1ММTо(`y`,Math.round($0Ме1А[$НAlНc][$рHОМ]));
$e1ММTо(`sx`,Math.round($0Ме1А[$НAlНc][$АсТOе]*100)/100);
$e1ММTо(`sy`,Math.round($0Ме1А[$НAlНc][$МcеAH]*100)/100);
}
else
{
$e1ММTо(`x`,Math.round($Il[$0Ме1А[$НAlНc].$MОеМ1]));
$e1ММTо(`y`,Math.round($0OA[$0Ме1А[$НAlНc].$MОеМ1]));
$e1ММTо(`sx`,Math.round($OTpc1[$0Ме1А[$НAlНc].$MОеМ1]));
$e1ММTо(`sy`,Math.round($IрТ0H[$0Ме1А[$НAlНc].$MОеМ1]));

$e1ММTо(`xb`,Math.round($Il[$0Ме1А[$НAlНc].$рсOОА]));
$e1ММTо(`yb`,Math.round($0OA[$0Ме1А[$НAlНc].$рсOОА]));
$e1ММTо(`sxb`,Math.round($OTpc1[$0Ме1А[$НAlНc].$рсOОА]));
$e1ММTо(`syb`,Math.round($IрТ0H[$0Ме1А[$НAlНc].$рсOОА]));
}

$e1ММTо(`$Il`,$0Ме1А[$НAlНc].$AМIМ1);
$e1ММTо(`$0OA`,$0Ме1А[$НAlНc].$TНесe);

$e1ММTо(`ix`,Math.round($0Ме1А[$НAlНc][$lо0HH]));
$e1ММTо(`iy`,Math.round($0Ме1А[$НAlНc][$еоOOА]));





$e1ММTо(`f`,($0Ме1А[$НAlНc].$рoeсl)?$A11l:$МIcо);


$e1ММTо(`cw`,$0Ме1А[$НAlНc][$МАТОе]);

var $0ОoHс=0;
for(var i2=0;i2<$cс0Hс;i2++)
{
if($ОpMрс[i2].picken_by==$НAlНc)
if($ОpMрс[i2].$cppее!=-2)
{
$e1ММTо(`g`+$0ОoHс,i2);
$0ОoHс++;
}
}

if($МоТMO!=-1&&$сoopT[$МоТMO].$OOHAТ==$НAlНc)
$e1ММTо(`ic`,$МоТMO);
else
$e1ММTо(`ic`,$0Ме1А[$НAlНc].$HНрНТ);
}
else
{


$e1ММTо(`x`,Math.round($Il[$0Ме1А[$НAlНc].$MОеМ1]));
$e1ММTо(`y`,Math.round($0OA[$0Ме1А[$НAlНc].$MОеМ1]));
$e1ММTо(`sx`,Math.round($OTpc1[$0Ме1А[$НAlНc].$MОеМ1]));
$e1ММTо(`sy`,Math.round($IрТ0H[$0Ме1А[$НAlНc].$MОеМ1]));

$e1ММTо(`xb`,Math.round($Il[$0Ме1А[$НAlНc].$рсOОА]));
$e1ММTо(`yb`,Math.round($0OA[$0Ме1А[$НAlНc].$рсOОА]));
$e1ММTо(`sxb`,Math.round($OTpc1[$0Ме1А[$НAlНc].$рсOОА]));
$e1ММTо(`syb`,Math.round($IрТ0H[$0Ме1А[$НAlНc].$рсOОА]));
}

$e1ММTо(`ha`,Math.round($0Ме1А[$НAlНc].$lMIсo));
$e1ММTо(`hl`,Math.round($0Ме1А[$НAlНc].$HAрH1));
$e1ММTо(`hb`,Math.round($0Ме1А[$НAlНc].$НТcep));
$e1ММTо(`hh`,Math.round($0Ме1А[$НAlНc].$ААНММ));


$e1ММTо(`he`,Math.round($0Ме1А[$НAlНc][$МIIро]));
$e1ММTо(`t`,$0Ме1А[$НAlНc][$cАocе]);
$e1ММTо(`dy`,$0Ме1А[$НAlНc].$loАoM);
$e1ММTо(`st`,Math.round($0Ме1А[$НAlНc].sit*100)/100);
}

if($00pеH)
$e1ММTо(`$HАAеоl`,-2);
else
$e1ММTо(`$HАAеоl`,$НAlНc);











$АlНp1($оToo10);

$oМНеM1=true;
}






}
}
catch(e)
{
ReportCaughtError(e);
$THIeА($pо1со+e);
}
}
var $АIOMAТ=0;
function $THIeА(s)
{
if($AооАA===$ceeeр)
{





if($pОеlО!==null)
ChatNewMsg($сТAо+s);

}
}
var $еlIpcO;
var $el0eOc;

function $МOocM($MМATрl,$cТеМM)
{

if($cТеМM<30)
{
$еlIpcO=$cТеМM/30;
$el0eOc=1-$еlIpcO;

$MМATрl.lower[$eТоM]=(-14.6)*$el0eOc-13.1*$еlIpcO;
$MМATрl.lower[$рHОМ]=3.5*$el0eOc+7.5*$еlIpcO;
$MМATрl.lower.rotation=(-63.3)*$el0eOc-54.3*$еlIpcO;

$MМATрl.upper.rotation=61.3*$el0eOc+42.3*$еlIpcO;
}
else
{
$еlIpcO=$cТеМM/30-1;
$el0eOc=1-$еlIpcO;

$MМATрl.lower[$eТоM]=(-13.1)*$el0eOc-3.05*$еlIpcO;
$MМATрl.lower[$рHОМ]=7.5*$el0eOc+13.7*$еlIpcO;
$MМATрl.lower.rotation=(-54.3)*$el0eOc;

$MМATрl.upper.rotation=42.3*$el0eOc;
}
}
function $с0сеО($MМATрl,$cТеМM,$орНеoM,$pрММM0)
{
var $pTТо0е=5.35;
var $M1оlIр=8.95;
var $lAо1TT=40.4;

var $pHoеАс=8.7;
var $0АIHpA=6.75;
var $M1Н1lM=65;

var $срlOHр=9.1;
var $сAAсAe=7.85;
var $cМIHМТ=85.3;

var $oI1орe=1;

if($орНеoM)
{
$pTТо0е=-4.4;
$M1оlIр=6.25;
$lAо1TT=-4.6;

$pHoеАс=-5;
$0АIHpA=0.35;
$M1Н1lM=-3.2;

$срlOHр=-6.1;
$сAAсAe=2.4;
$cМIHМТ=-10.7;

$oI1орe=-1;
}



if($cТеМM<60)
{
$еlIpcO=$cТеМM/60;
$el0eOc=1-$еlIpcO;

$MМATрl.lower[$eТоM]=(-8.35)*$el0eOc-7.9*$еlIpcO;
$MМATрl.lower[$рHОМ]=9.75*$el0eOc+13.25*$еlIpcO;
$MМATрl.lower.rotation=3.4*$el0eOc+14*$еlIpcO;

$MМATрl.middle[$eТоM]=($срlOHр)*$el0eOc+($pHoеАс)*$еlIpcO;
$MМATрl.middle[$рHОМ]=$сAAсAe*$el0eOc+$0АIHpA*$еlIpcO;
$MМATрl.middle.rotation=$cМIHМТ*$el0eOc+$M1Н1lM*$еlIpcO;

$MМATрl.upper.rotation=(-55.4)*$el0eOc*$oI1орe-55.4*$еlIpcO*$oI1орe;
}
else
if($cТеМM<90)
{
$еlIpcO=$cТеМM/30-2;
$el0eOc=1-$еlIpcO;

$MМATрl.lower[$eТоM]=(-7.9)*$el0eOc-6.9*$еlIpcO;
$MМATрl.lower[$рHОМ]=13.25*$el0eOc+20.75*$еlIpcO;
$MМATрl.lower.rotation=14*$el0eOc+6.8*$еlIpcO;

$MМATрl.middle[$eТоM]=($pHoеАс)*$el0eOc+($pTТо0е)*$еlIpcO;
$MМATрl.middle[$рHОМ]=$0АIHpA*$el0eOc+$M1оlIр*$еlIpcO;
$MМATрl.middle.rotation=$M1Н1lM*$el0eOc+$lAо1TT*$еlIpcO;

$MМATрl.upper.rotation=(-55.4)*$el0eOc*$oI1орe-39.4*$еlIpcO*$oI1орe;
}
else
{
$еlIpcO=$cТеМM/30-3;
$el0eOc=1-$еlIpcO;

$MМATрl.lower[$eТоM]=(-6.9)*$el0eOc-4.35*$еlIpcO;
$MМATрl.lower[$рHОМ]=20.75*$el0eOc+29.95*$еlIpcO;
$MМATрl.lower.rotation=6.8*$el0eOc;

$MМATрl.middle[$eТоM]=($pTТо0е)*$el0eOc-0.3*$еlIpcO;
$MМATрl.middle[$рHОМ]=$M1оlIр*$el0eOc+14.1*$еlIpcO;
$MМATрl.middle.rotation=$lAо1TT*$el0eOc+6.3*$еlIpcO;

$MМATрl.upper.rotation=8.5*$еlIpcO-39.4*$el0eOc*$oI1орe;
}





}

function $HAoТAl()
{

if(!stage[$ooHAM+0])
return;

if($АTO10===1||$АTO10===3)
{
for($AMTT1=0;$AMTT1<4;$AMTT1++)
{
stage[$ooHAM+$AMTT1].gotoAndStop(($АTO10===3)? 2 : 1);
if(stage[$ooHAM+$AMTT1].visible)
{
stage[$ooHAM+$AMTT1].alpha=0;
stage[$ooHAM+$AMTT1].visible=false;
}
}

stage[$ooHAM+4].alpha=0;
stage[$ooHAM+4].visible=false;
}
else
if($АTO10==2)
{
for($AMTT1=0;$AMTT1<5;$AMTT1++)
{
if(stage[$ooHAM+$AMTT1].visible)
{
stage[$ooHAM+$AMTT1].alpha=0;
stage[$ooHAM+$AMTT1].visible=false;
}
stage[$ooHAM+$AMTT1].gotoAndStop($АTO10);
}
}
}




















var $HHcМlH=0;
var $oMрOрp;

var $ОeHМТp=0;

var $cНOОМ=$0OрТ;
var $МсАоo=false;

var array;
var param;
var $сeIHОA;
var $cАеМcI;



var $еАTHНT=[];

function $loHTсT()
{
if($lITeI.visible)
{
for(let i=0;i<$TTcНA;i++)
{
let $Т0H0pe=$сМоо0[i];

let player=($HрТМc[i]||$0Ме1А[i]);
if(player&&!player.$HМ0М1)
player=null;


if((i!==$НAlНc||$00pеH)&&(!player||!player.io))
{



$Т0H0pe.$АсcМll=-1;
$Т0H0pe.alpha=Math.max(0.2,$Т0H0pe.alpha-0.1);
}
else
{

if(i>=$ММ[$OpНpp][$НTоОр])
$Т0H0pe.$АсcМll=0;
else
$Т0H0pe.$АсcМll=player[$АеНН]/(player[$oepОе]+1);


$Т0H0pe.alpha=Math.min(1,$Т0H0pe.alpha+0.1);
}

if(i>=$ММ[$OpНpp][$НTоОр])
$Т0H0pe.$АсcМll-=100;
}
}
}
function $oOMIAА()
{
let $HHcМlH=0;

for(let i=0;i<$TTcНA;i++)
{
let player=($HрТМc[i]||$0Ме1А[i]);
if(player&&!player.$HМ0М1)
player=null;

if(player)
if(player.io)

$HHcМlH++;
}

$lITeI.f4.text=($HHcМlH)+$oОТIp+$ММ[$OpНpp][$НTоОр];
$lITeI.f5.text=($0Ме1А[$НAlНc]&&$0Ме1А[$НAlНc][$oepОе]>0)? Math.round($0Ме1А[$НAlНc][$АеНН]/$0Ме1А[$НAlНc][$oepОе]*100)/100 : $MOMoе;

let $HОpcl=Math.floor((getTimer()-$еМpОA)/1000);

let $AMTT1=Math.floor($HОpcl/60/60);
let $0ОoHс=Math.floor($HОpcl/60-$AMTT1*60);
let i2=Math.floor($HОpcl-$0ОoHс*60-$AMTT1*60*60);

let $oMрOрp=$0OрТ;

let $Me1cМ=$AMTT1;
if($AMTT1<10)$oMрOрp+=$ТlМe;$oMрOрp+=$Me1cМ+$0HAТО;
$Me1cМ=$0ОoHс;
if($0ОoHс<10)$oMрOрp+=$ТlМe;$oMрOрp+=$Me1cМ+$0HAТО;
$Me1cМ=i2;
if(i2<10)$oMрOрp+=$ТlМe;$oMрOрp+=$Me1cМ;

$lITeI.f6.text=$oMрOрp;

$lITeI.f7.text=$ММ[$OpНpp][$МАМеT];
}
function $МTМTсe(i)
{
let mc=($HрТМc[i]||$0Ме1А[i]);

let $Т0H0pe=$сМоо0[i];

if(!$Т0H0pe)
return;

let $Нс0оT1=(mc&&mc.io&&mc.$HМ0М1);

if($Нс0оT1)
{
let s=(MP_herolist_name_type===$оIpl||mc[$AHop]===$pТIoA)? mc[$оIpl] : mc[$AHop];
let $MeАoMА=s.length;
s+=((mc[$МIIро]<=0&&$IcеНе===$ММ.$рocoТ&&$lеIIр)? $1ТрТe : $0OрТ);

if(s.length>26)
{
let $OОTOТp=s.length-26+3;

s=s.substring(0,$MeАoMА-$OОTOТp)+$eMННI+s.substring($MeАoMА);
}
$Т0H0pe.f1.text=s;

if(mc.$еТр1O)
str=$ММ.$0рlHоl(mc[$cАocе]);
else
if($IcеНе===$ММ.$IсОeо||!$lеIIр)
str=$0OрТ;
else
str=$ММ.$0рlHоl(mc[$cАocе]);

$Т0H0pe.f2.text=str;

$Т0H0pe.f3.htmlText=mc.$еТр1O ? $0OрТ :($lеIIр ?
(
(MP_herolist_score_type===$АеНН)? mc[$АеНН] :
(MP_herolist_score_type===$ОНTOр)?(mc[$oepОе]===0 ? $MOMoе : Math.round(mc[$АеНН]/mc[$oepОе]*100)/100):
(MP_herolist_score_type===$0AрМр)? $AАpОМ+mc[$0AрМр]+$cIMO :
$oМTо
)
:
$соТО);

$Т0H0pe.f4.text=mc.$еТр1O ? $0OрТ :($lеIIр ? mc[$oepОе] : $соТО);

$Т0H0pe.f5.htmlText=
(MP_herolist_ping_type===$op1о)?(mc.$еТр1O ? $0OрТ : mc.ping):
(MP_herolist_ping_type===$1есАТ)? $eIНlе+mc[$1есАТ]+$cIMO :
$oМTо;

if($0Ме1А[$НAlНc]&&mc[$cАocе]===$0Ме1А[$НAlНc][$cАocе]&&$lеIIр)
{
if(mc===$0Ме1А[$НAlНc])
{
if($Т0H0pe.currentFrame!==2+$AeНcс)
$Т0H0pe.gotoAndStop(2+$AeНcс);
}
else
{
if($Т0H0pe.currentFrame!==3+$AeНcс)
$Т0H0pe.gotoAndStop(3+$AeНcс);
}
}
else
{
if($Т0H0pe.currentFrame!==1+$AeНcс)
$Т0H0pe.gotoAndStop(1+$AeНcс);
}
}
else
{
$Т0H0pe.f1.text=(i<$ММ[$OpНpp][$НTоОр])? $Мelе : $IIOН1;
$Т0H0pe.f2.text=$0OрТ;
$Т0H0pe.f3.text=$0OрТ;
$Т0H0pe.f4.text=$0OрТ;
$Т0H0pe.f5.text=$0OрТ;

if($Т0H0pe.currentFrame!==1+$AeНcс)
$Т0H0pe.gotoAndStop(1+$AeНcс);
}

for(let i=0;i<$Т0H0pe.$МeсlTT.length;i++)
$Т0H0pe.$МeсlTT[i].visible=$Нс0оT1;
}

function $AОТеТ(then)
{
if($pMМ1&&$ММ[$OpНpp]&&$ММ[$OpНpp][$ТHeАT]&&$ММ[$OpНpp][$осТрМ]&&!$00pеH&&$0Ме1А[$НAlНc]&&$0Ме1А[$НAlНc][$МIIро]>0)
{
$ТMО1e(then,$рсНAе.$ОTОМT);
ChatNewMsg($рАОрe);
}
else
{
then();
}
}

function $МOpТI1($TpоIoo)
{
var $0ОoМАO=0;

try
{
$МсАоo=false;


if($pMМ1)
if($oМНеM1)
if(!$IНIеТ)
{
$oМНеM1=false;








$cТ1сc=true;

$Hoсpе=getTimer();

$0ОoМАO=1001;

if($lITeI.visible)
{
if(!$00pеH)
{
i=$НAlНc;



$сМоо0[i].f3.text=$осс1Т;

$сМоо0[i].f4.text=$рОорМ;

$сМоо0[i].f5.text=$сеpМ0;
}

$HОpcl=Math.floor((getTimer()-$еМpОA)/1000);



$AMTT1=Math.floor($HОpcl/60/60);
$0ОoHс=Math.floor($HОpcl/60-$AMTT1*60);
i2=Math.floor($HОpcl-$0ОoHс*60-$AMTT1*60*60);

$oMрOрp=$0OрТ;

$Me1cМ=$AMTT1;
if($AMTT1<10)$oMрOрp+=$ТlМe;$oMрOрp+=$Me1cМ+$0HAТО;
$Me1cМ=$0ОoHс;
if($0ОoHс<10)$oMрOрp+=$ТlМe;$oMрOрp+=$Me1cМ+$0HAТО;
$Me1cМ=i2;
if(i2<10)$oMрOрp+=$ТlМe;$oMрOрp+=$Me1cМ;

$lITeI.f6.text=$oMрOрp;

if($рОорМ>0)
$lITeI.f5.text=Math.round($осс1Т/$рОорМ*100)/100;
else
$lITeI.f5.text=$0OрТ;
}




if($cерAc)
trace($TpоIoo);

array=$TpоIoo.split($МAI0e);
param=[];
$еАTHНT=param;

for(i=0;i<array.length;i++)
{
array[i]=array[i].split($НHАОT);
param[array[i][0]]=array[i][1];
}

$0ОoМАO=1002;

if(param[$OoeМl]==$АрНО)
{
$ОeHМТp++;
if($ОeHМТp>15)
{
$IНIеТ=true;
$оеIТМ($НeMНT,$ТcАсТ);
}
}
else
$ОeHМТp=0;








if(param[$1l1ое]!=undefined)
if(param[$1l1ое]!=$Аcle)
$cАpОр=parseInt(param[$1l1ое]);

$0ОoМАO=1003;

if(param[$ееHpe]!=undefined)
if(param[$ееHpe]!=$Аcle)
{
param[$ееHpe]=parseInt(param[$ееHpe]);

if(param[$ееHpe]>$сoHIe)
{
$сoHIe=param[$ееHpe];
trace($pрОcT+$сoHIe);

$MрHMрI();
}
}


$0ОoМАO=1004;


$HHcМlH=0;
var $II0lТМ=1;

for(i=0;i<$TTcНA;i++)
if(i!=$НAlНc)
{
if(param[$le0IН+i+$oAАOe]!=undefined)
{
$II0lТМ++;
if(param[$le0IН+i+$oAАOe]==$еAТ0)
{
$сМоо0[i].f2.text=$Аcle;

$сМоо0[i].f3.text=$Аcle;

$сМоо0[i].f4.text=$Аcle;

$сМоо0[i].f5.text=$Аcle;

if($сМоо0[i].currentFrame!==1+$AeНcс)
$сМоо0[i].gotoAndStop(1+$AeНcс);
}
else
$HHcМlH++;
}
}


$0ОoМАO=1005;



i=$НAlНc;
if(!$00pеH)
{




































if($IcеНе===$ММ.$IсОeо)
str=$Аcle;
else
str=$ММ.$0рlHоl($0Ме1А[i][$cАocе]);

$сМоо0[i].f2.text=str;

if(param[$AАeAМ]!=undefined)
$осс1Т=parseInt(param[$AАeAМ]);

if(param[$0ТcHp]!=undefined)
$рОорМ=parseInt(param[$0ТcHp]);
}


$0ОoМАO=1006;

if($IcеНе===$ММ.$eHTНT)
{
if(param[$ОITAe]!=undefined)
$оlсМOI.$OelMcН.text=parseInt(param[$ОITAe]);

if(param[$ApTAT]!=undefined)
$оpAoАe.$OelMcН.text=parseInt(param[$ApTAT]);
}


$0ОoМАO=1007;


for(i=0;i<$TTcНA;i++)

if(i!=$НAlНc||$00pеH)
{
i2=$0Ме1А[i].$AI0cАp;
$0Ме1А[i].$AI0cАp=param[$le0IН+i+$IсеОе];

mc=$0Ме1А[i];

if($0Ме1А[i].io)
if(!$0Ме1А[i].$оeoТе)
if($0Ме1А[i].$cAНТО+350<$Hoсpе)
{
$0Ме1А[i].$рoeсl=false;

if($IHТcc)
if($0Ме1А[i].$cAНТО+500<$Hoсpе)
{
if($0Ме1А[i].alpha>0.4)
{
$0Ме1А[i].alpha=0.4;
}
}
}

if($0Ме1А[i].$cAНТО+4000>$Hoсpе)
{
$0Ме1А[i].io=true;
$0Ме1А[i].visible=true;
}
else
{
if($0Ме1А[i].io)
{


$0Ме1А[i][$МIIро]=0;
$0Ме1А[i].$оeoТе=true;
$0Ме1А[i].alpha=1;

$0Ме1А[i].io=false;
$0Ме1А[i].visible=false;

if($IHТcc)
if($0Ме1А[i].$АTТМc===$НAlНc)
$ОpOc0($0lМpcр,$0Ме1А[$НAlНc][$оIpl],true);

}
}



if($0Ме1А[i].$AI0cАp!=i2)
{
if(param[$le0IН+i+$l0MH0]!=undefined)
{
mc[$AHop]=param[$le0IН+i+$l0MH0];

$Т0оорA(mc);

if($lITeI.visible)
{
if(mc[$AHop]===$0OрТ||mc[$AHop]===$pТIoA)
{
$сМоо0[i].$1еТТpA.visible=false;
$сМоо0[i].$ceHАТо.visible=false;
$сМоо0[i].$p0рАcM.visible=false;
}
else
{
$сМоо0[i].$1еТТpA.visible=true;
$сМоо0[i].$ceHАТо.visible=true;
$сМоо0[i].$p0рАcM.visible=true;
}
}
}

if(param[$le0IН+i+$oAАOe]!==$Мelе&&param[$le0IН+i+$oAАOe]!==undefined)
{


mc.$cAНТО=getTimer();

mc.ping=parseInt(param[$le0IН+i+$le0IН]);

if(!mc.$оeoТе)
if(mc.$MeсНе<$0Ме1А[$НAlНc].$MeсНе)
$cТ1сc=false;

$HОpcl=Math.min(250,$сеpМ0+mc.ping)/1000*$MАTOc;


}








if(param[$le0IН+i+$oAАOe])
mc[$оIpl]=param[$le0IН+i+$oAАOe].split($MсТMе).join($ТМcA).split($1THОI).join($O1pН).split($cTрр1).join($pTpc).split($Tр0еT).join($Н0Т1).split($АeeIТ).join($о00о).split($00HIc).join($MННe);
else
mc[$оIpl]=$ТсМАl;



if($lITeI.visible)
{
$МTМTсe(i);
}

if(param[$le0IН+i+$ATеT1]!=undefined&&
param[$le0IН+i+$оoeТН]!=undefined&&
param[$le0IН+i+$OocMо]!=undefined&&
param[$le0IН+i+$cММАН]!=undefined)
{






















if(param[$le0IН+i+$oAАOe]!=$Мelе)
{









$HОpcl=Math.min(250,$сеpМ0+mc.ping)/1000*$MАTOc;





















































$MOH01=parseFloat(param[$le0IН+i+$ATеT1]);
$MрIеО=parseFloat(param[$le0IН+i+$OocMо]);

u=$MOH01+parseFloat(param[$le0IН+i+$оoeТН])*$HОpcl;
if(mc.$соТМАc||mc.stand)
{
v=$MрIеО;
$eОeМо=parseFloat(param[$le0IН+i+$cММАН]);
}
else
{
v=parseFloat(param[$le0IН+i+$OocMо])+parseFloat(param[$le0IН+i+$cММАН])*$HОpcl+(gravity*$HОpcl*$HОpcl/2);
$eОeМо=parseFloat(param[$le0IН+i+$cММАН])+gravity*$HОpcl;
}
if($0АO0o(mc[$eТоM]-5,mc[$рHОМ]-21,u,v-21))
if($0АO0o(mc[$eТоM]-5,mc[$рHОМ]-61,u,v-61))
if($0АO0o(mc[$eТоM]+5,mc[$рHОМ]-21,u,v-21))
if($0АO0o(mc[$eТоM]+5,mc[$рHОМ]-61,u,v-61))
{
param[$le0IН+i+$ATеT1]=u;
if(!mc.stand&&!mc.$соТМАc)
{
param[$le0IН+i+$OocMо]=v;
param[$le0IН+i+$cММАН]=$eОeМо;
}
}

if(param[$le0IН+i+$оАсНI]!=$Аcle&&param[$le0IН+i+$оАсНI]!=undefined&&
param[$le0IН+i+$ОМAIM]!=$Аcle&&param[$le0IН+i+$ОМAIM]!=undefined)
{










u=parseFloat(param[$le0IН+i+$оАсНI])+parseFloat(param[$le0IН+i+$OТcМ1])*$HОpcl;
if(mc.$соТМАc||mc.stand)
{
v=parseFloat(param[$le0IН+i+$ОМAIM])+parseFloat(param[$le0IН+i+$cTМc0])*$HОpcl;
$eОeМо=parseFloat(param[$le0IН+i+$cTМc0]);
}
else
{
v=parseFloat(param[$le0IН+i+$ОМAIM])+parseFloat(param[$le0IН+i+$cTМc0])*$HОpcl+(gravity*$HОpcl*$HОpcl/2);
$eОeМо=parseFloat(param[$le0IН+i+$cTМc0])+gravity*$HОpcl;
}

if(!$АoМHl)
{
$eОeМо=parseFloat(param[$le0IН+i+$cTМc0]);
$eОeМо=parseFloat(param[$le0IН+i+$cTМc0])+gravity*$HОpcl;
}


if($0АO0o($Il[mc.$MОеМ1]-5,$0OA[mc.$MОеМ1],u,v))
if($0АO0o($Il[mc.$MОеМ1],$0OA[mc.$MОеМ1]-5,u,v))
if($0АO0o($Il[mc.$MОеМ1]+5,$0OA[mc.$MОеМ1],u,v))
if($0АO0o($Il[mc.$MОеМ1],$0OA[mc.$MОеМ1]+5,u,v))
{
param[$le0IН+i+$оАсНI]=u;
if(!mc.stand&&!mc.$соТМАc)
{
param[$le0IН+i+$ОМAIM]=v;
param[$le0IН+i+$cTМc0]=$eОeМо;
}
}
}






$MOH01=param[$le0IН+i+$ATеT1]-$MOH01;
$MрIеО=param[$le0IН+i+$OocMо]-$MрIеО;

if(!$АoМHl)
{
mc.$TОOе0=$MOH01;
mc.$оОТеl=$MрIеО;
}



if(mc[$0MТce]!=parseInt(param[$le0IН+i+$cAТрТ]))
{
$Hерoоe(mc);
mc[$0MТce]=parseInt(param[$le0IН+i+$cAТрТ]);
}




if(param[$le0IН+i+$oAАOe]!=$Аcle)
{



if(mc.gui.$pеMHH.text!==mc[$оIpl])
$AOеоО(mc);
}


if(param[$le0IН+i+$еТНHc]!=undefined)
{



var mdl=param[$le0IН+i+$еТНHc].split($eерН);
$0ОoHс=mdl[0];

if(mc.char!=$0ОoHс)
{
trace($opMМр+i+$еHоОe+mc.char+$cОeMM+$0ОoHс+$ТMO1p+mdl[1]);

if($IHТcc)
{
if($0ОoHс===5||$0ОoHс===10)
$0ОoHс=2;
}

mc.char=$0ОoHс;

mc.$lOeНc=$0ОoHс;

if($0ОoHс>=40&&$0ОoHс<=48)
$0ОoHс=1;

if($0ОoHс==61)
$0ОoHс=3;

mc.$AААH1=$0ОoHс;
mc.$сТlAМ=$0ОoHс;
mc.$ТIpec=$0ОoHс;

mc.$НOоМO=$0ОoHс;
mc.$ОIMОo=$0ОoHс;
mc.$cHАoс=$0ОoHс;

mc.$Hlppе=$0ОoHс;
mc.$Аc01о=$0ОoHс;

mc.$ТрH0c=$0ОoHс;
mc.$ОАOрр=$0ОoHс;

mc.$A0АоА=$0ОoHс;
mc.$THMcM=$0ОoHс;

var $pHМMo=mc[$оIpl];

$pНTс1(mc);
$AOеоО(mc);

mc[$оIpl]=$pHМMo;
}
if(mdl[1]!==undefined)
if(mdl[1].charAt(0)!=mc.$Нр01I[0]||mdl[1].charAt(1)!=mc.$Нр01I[1]||mdl[1].charAt(2)!=mc.$Нр01I[2]||mdl[1].charAt(3)!=mc.$Нр01I[3])
{
mc.$Нр01I[0]=mdl[1].charAt(0);
mc.$Нр01I[1]=mdl[1].charAt(1);
mc.$Нр01I[2]=mdl[1].charAt(2);
mc.$Нр01I[3]=mdl[1].charAt(3);
$1loHе(mc);
}
}





if(param[$le0IН+i+$ММерo]!=$Аcle)
if(param[$le0IН+i+$lOO0А]!=$Аcle)
if(param[$le0IН+i+$oрM1p]!=$Аcle)
if(param[$le0IН+i+$ТТ1lO]!=$Аcle)
if($НАHpН(mc))
{

$AMTT1=0;

if((mc.$lMIсo<=0||mc.$ААpес)&&parseFloat(param[$le0IН+i+$ММерo])>0)
{
$AMTT1=1;
}
else
if((mc.$HAрH1<=0||mc.$AIpAe)&&parseFloat(param[$le0IН+i+$lOO0А])>0)
{
$AMTT1=1;
}
else
if((mc.$НТcep<=0||mc.$еТеAO)&&parseFloat(param[$le0IН+i+$oрM1p])>0)
{
$AMTT1=1;
}
else
if((mc.$ААНММ<=0||mc.$lTITl)&&parseFloat(param[$le0IН+i+$ТТ1lO])>0)
{
$AMTT1=1;
}

if(mc.$lMIсo>0&&parseFloat(param[$le0IН+i+$ММерo])<=0)
{
$AMTT1=2;
}
else
if(mc.$HAрH1>0&&parseFloat(param[$le0IН+i+$lOO0А])<=0)
{
$AMTT1=2;
}
else
if(mc.$НТcep>0&&parseFloat(param[$le0IН+i+$oрM1p])<=0)
{
$AMTT1=2;
}
else
if(mc.$ААНММ>0&&parseFloat(param[$le0IН+i+$ТТ1lO])<=0)
{
$AMTT1=2;
}





if($AMTT1==1)
{
$AOеоО(mc);
$IHcоТ(i);
}

mc.$lMIсo=parseFloat(param[$le0IН+i+$ММерo]);
mc.$HAрH1=parseFloat(param[$le0IН+i+$lOO0А]);
mc.$НТcep=parseFloat(param[$le0IН+i+$oрM1p]);
mc.$ААНММ=parseFloat(param[$le0IН+i+$ТТ1lO]);










if($AMTT1==2)
{
$оo1pO(i);
}

}

if(param[$le0IН+i+$IоpТо]!=$Аcle)
{
if(mc.$0IHMT>0&&parseFloat(param[$le0IН+i+$IоpТо])<=0)
mc.$ААpоTе=true;

mc[$МIIро]=$TlpНI(mc,parseFloat(param[$le0IН+i+$IоpТо]));


if(mc.$0IHMT<=0&&parseFloat(param[$le0IН+i+$IоpТо])>0)
{
mc.effects.length=0;
}
mc.$0IHMT=parseFloat(param[$le0IН+i+$IоpТо]);
}



















if(mc[$МIIро]>0)
{


if(!mc.io||!mc.visible)
mc.$оeoТе=true;
else
mc.$оeoТе=false;


mc.io=true;
mc.visible=true;









if(mc.$оlсTН&&!$IHТcc&&!$0Ме1А[$НAlНc].$оeoТе&&!$0Ме1А[$НAlНc].$оeoТе)
{
if(mc[$cАocе]==$0Ме1А[$НAlНc][$cАocе])
mc.alpha=0.5;


}
else
{
mc.alpha=1;
}
mc.$ОрОAA=0;




if(param[$le0IН+i+$cTоТ]!=undefined)
mc.sit=parseFloat(param[$le0IН+i+$cTоТ]);

if(isNaN(mc.sit)||mc.sit==undefined)
trace($lсolI+i+$ОTТHc+param[$le0IН+i+$cTоТ]);

if(param[$le0IН+i+$оIссА]!=$Аcle)
if($НАHpН(mc))
mc.$eoОpА=parseFloat(param[$le0IН+i+$оIссА]);

mc.$MТН0с=false;

if(parseFloat(param[$le0IН+i+$оIссА])<=0)
if(param[$le0IН+i+$ATеT1]!=$Аcle&&param[$le0IН+i+$ATеT1]!=undefined)
if(param[$le0IН+i+$OocMо]!=$Аcle&&param[$le0IН+i+$OocMо]!=undefined)
if(param[$le0IН+i+$оoeТН]!=$Аcle&&param[$le0IН+i+$оoeТН]!=undefined)
if(param[$le0IН+i+$cММАН]!=$Аcle&&param[$le0IН+i+$cММАН]!=undefined)
if(param[$le0IН+i+$оАсНI]!=$Аcle&&param[$le0IН+i+$оАсНI]!=undefined)
if(param[$le0IН+i+$ОМAIM]!=$Аcle&&param[$le0IН+i+$ОМAIM]!=undefined)
if(param[$le0IН+i+$OТcМ1]!=$Аcle&&param[$le0IН+i+$OТcМ1]!=undefined)
if(param[$le0IН+i+$cTМc0]!=$Аcle&&param[$le0IН+i+$cTМc0]!=undefined)
{
mc.$MТН0с=(!mc.$оeoТе||$НАHpН(mc));
mc.$ТpАрcс=0;

mc.$сМelе1=parseFloat(param[$le0IН+i+$ATеT1]);
mc.$coоHр=parseFloat(param[$le0IН+i+$OocMо]);
mc.$OleMН=parseFloat(param[$le0IН+i+$оoeТН]);
mc.$сНoIА=parseFloat(param[$le0IН+i+$cММАН]);

mc.$сНеАIМ=parseFloat(param[$le0IН+i+$оАсНI]);
mc.$АА0НMМ=parseFloat(param[$le0IН+i+$ОМAIM]);
mc.$еloеTc=parseFloat(param[$le0IН+i+$OТcМ1]);
mc.$оcOАlT=parseFloat(param[$le0IН+i+$cTМc0]);
}




if(param[$le0IН+i+$00TOТ]!=$Аcle)
{
if(param[$le0IН+i+$00TOТ]==$ОIlс||$oТeрA(mc))
{
$Нес1p(mc);

}
else
mc.$loАoM=false;
}





if(parseFloat(param[$le0IН+i+$оIссА])>0)
if(param[$le0IН+i+$ATеT1]!=$Аcle&&param[$le0IН+i+$ATеT1]!=undefined)
if(param[$le0IН+i+$OocMо]!=$Аcle&&param[$le0IН+i+$OocMо]!=undefined)
if(param[$le0IН+i+$оoeТН]!=$Аcle&&param[$le0IН+i+$оoeТН]!=undefined)
if(param[$le0IН+i+$cММАН]!=$Аcle&&param[$le0IН+i+$cММАН]!=undefined)
{


mc[$eТоM]=parseFloat(param[$le0IН+i+$ATеT1]);
mc[$рHОМ]=parseFloat(param[$le0IН+i+$OocMо]);
mc[$АсТOе]=parseFloat(param[$le0IН+i+$оoeТН]);
mc[$МcеAH]=parseFloat(param[$le0IН+i+$cММАН]);

u=(mc[$eТоM]-$Il[mc.$MОеМ1]);
v=(mc[$рHОМ]-$0OA[mc.$MОеМ1]);
$HОpcl=$Н1еHl(u,v);



if($HОpcl>600*mc.scale||!$0АO0o(mc[$eТоM],mc[$рHОМ]-41*mc.scale,$Il[mc.$MОеМ1],$0OA[mc.$MОеМ1]))
{
$Il[mc.$MОеМ1]+=u;
$0OA[mc.$MОеМ1]+=v;

$Il[mc.$рсOОА]+=u;
$0OA[mc.$рсOОА]+=v;

$Il[mc.$pМHHo]+=u;
$0OA[mc.$pМHHo]+=v;

$Il[mc.$e1IOМ]+=u;
$0OA[mc.$e1IOМ]+=v;

$Il[mc.$оОlТМ]+=u;
$0OA[mc.$оОlТМ]+=v;


$Il[mc.$1O1lM]+=u;
$0OA[mc.$1O1lM]+=v;

$Il[mc.$НТсМТ]+=u;
$0OA[mc.$НТсМТ]+=v;

$Il[mc.$р1eНM]+=u;
$0OA[mc.$р1eНM]+=v;

if($IТoHT())
{
$IcМMc[mc.$MОеМ1]+=u;
$MA0е1[mc.$MОеМ1]+=v;

$IcМMc[mc.$рсOОА]+=u;
$MA0е1[mc.$рсOОА]+=v;

$IcМMc[mc.$pМHHo]+=u;
$MA0е1[mc.$pМHHo]+=v;

$IcМMc[mc.$e1IOМ]+=u;
$MA0е1[mc.$e1IOМ]+=v;

$IcМMc[mc.$оОlТМ]+=u;
$MA0е1[mc.$оОlТМ]+=v;

$IcМMc[mc.$1O1lM]+=u;
$MA0е1[mc.$1O1lM]+=v;

$IcМMc[mc.$НТсМТ]+=u;
$MA0е1[mc.$НТсМТ]+=v;

$IcМMc[mc.$р1eНM]+=u;
$MA0е1[mc.$р1eНM]+=v;
}
}

if(mc[$МIIро]>=$еHApT)
mc.$loАoM=false;
}



if($lMAТМ)
{

}
else
{
mc.gui.visible=true;
mc.gui.alpha=1;
}











if(param[$le0IН+i+$рIАОс]!=$Аcle)
if(param[$le0IН+i+$АeоMe]!=$Аcle)
{
mc[$lо0HH]=parseFloat(param[$le0IН+i+$рIАОс]);
mc[$еоOOА]=parseFloat(param[$le0IН+i+$АeоMe]);
}

if($0Ме1А[i].$cAНТО+200>$Hoсpе)
{
if(param[$le0IН+i+$AMо1р]!=$Аcle)
{
if(param[$le0IН+i+$AMо1р]==$ОIlс)
mc.$рoeсl=true;
else
mc.$рoeсl=false;
}
if(param[$le0IН+i+$eAHоо]!=$Аcle)
if(param[$le0IН+i+$ОеOcO]!=$Аcle)
{
mc.$AМIМ1=parseInt(param[$le0IН+i+$eAHоо]);
mc.$TНесe=parseInt(param[$le0IН+i+$ОеOcO]);
}
}
else
{
mc.$рoeсl=false;

mc.$AМIМ1=0;
mc.$TНесe=0;
}

if(param[$le0IН+i+$TeеMО]!=$Аcle)
{
i2=parseInt(param[$le0IН+i+$TeеMО]);

for($0ОoHс=0;$0ОoHс<$TТlАM;$0ОoHс++)
if($сoopT[$0ОoHс].$eрlсe==6)
if($сoopT[$0ОoHс].$OOHAТ==i)
if(i2!=$0ОoHс)
$сoopT[$0ОoHс].$OOHAТ=-1;

if(i2==-1)
{
mc.$HНрНТ=-1;
}
else
{
if($сoopT[i2].$eрlсe==6)
{
if($сoopT[i2].$OOHAТ!=$НAlНc||$00pеH)
$сoopT[i2].$OOHAТ=i;
}
else
mc.$HНрНТ=i2;
}
}

$0ОoHс=mc[$МАТОе];

{
if(param[$le0IН+i+$еНрM0]!=undefined&&param[$le0IН+i+$еНрM0]!=$Аcle)
{
i2=parseInt(param[$le0IН+i+$еНрM0]);

if(i2>=-1&&i2<$cс0Hс)
{
if($cАpОр===$ММ.$ОeрoT||i2==-1||(i2!=-1&&$ОpMрс[i2].picken_by==i))
mc[$МАТОе]=i2;
}
else
trace(i2+$МААоA);
}


if($cАpОр===$ММ.$ОeрoT)
{
for($AMTT1=0;$AMTT1<$cс0Hс;$AMTT1++)
{
if($ОpMрс[$AMTT1].picken_by==i&&$AMTT1!=mc[$МАТОе])
{
$ОpMрс[$AMTT1].picken_by=-1;
}
}




for($AMTT1=0;$AMTT1<10;$AMTT1++)
{



if(param[$le0IН+i+$оIОеT+$AMTT1]!=undefined)
if(param[$le0IН+i+$оIОеT+$AMTT1]!=$Аcle)
if(param[$le0IН+i+$оIОеT+$AMTT1]!=$сeрTo)
if(param[$le0IН+i+$оIОеT+$AMTT1]!=$ApоM)
{
i2=parseInt(param[$le0IН+i+$оIОеT+$AMTT1]);

if(i2>=0&&i2<$cс0Hс)
{
if($ОpMрс[i2].picken_by!=-1)
{



if($ОpMрс[i2].picken_by!==i)
if($0Ме1А[$ОpMрс[i2].picken_by][$МАТОе]==i2)
{



$0Ме1А[$ОpMрс[i2].picken_by][$МАТОе]=-1;
$o0MIс($ОpMрс[i2].picken_by);
}
}
if($ОpMрс[i2].picken_by==$НAlНc&&i!==$НAlНc)
{



if($0Ме1А[$НAlНc][$МАТОе]==i2)
{



$0Ме1А[$НAlНc][$МАТОе]=-1;
$o0MIс($НAlНc);
}

$ОpMрс[i2].picken_by=i;
$pрMТl();
}
else
{
$ОpMрс[i2].picken_by=i;



}
}
else
trace(i2+$IсOсO);
}
}
}

}



if($0ОoHс!=mc[$МАТОе]||(mc[$МАТОе]==-1&&!mc.$АсIее.lower.$оАОНА.visible))
{
$o0MIс(i);
}

if(param[$le0IН+i+$ОTНОТ]!=$Аcle)
{
if(mc[$cАocе]!==parseInt(param[$le0IН+i+$ОTНОТ]))
{
mc[$cАocе]=parseInt(param[$le0IН+i+$ОTНОТ]);
$ОTсcО(mc);
}
}

$о1eНp(mc.$MeсНе);
}
else
{
mc.$MТН0с=false;






if(param[$le0IН+i+$ATеT1]!=$Аcle)
if(param[$le0IН+i+$OocMо]!=$Аcle)
if(param[$le0IН+i+$оoeТН]!=$Аcle)
if(param[$le0IН+i+$cММАН]!=$Аcle)
if(param[$le0IН+i+$ATеT1]!=undefined)
if(param[$le0IН+i+$OocMо]!=undefined)
if(param[$le0IН+i+$оoeТН]!=undefined)
if(param[$le0IН+i+$cММАН]!=undefined)

if(param[$le0IН+i+$оАсНI]!=$Аcle)
if(param[$le0IН+i+$ОМAIM]!=$Аcle)
if(param[$le0IН+i+$OТcМ1]!=$Аcle)
if(param[$le0IН+i+$cTМc0]!=$Аcle)
if(param[$le0IН+i+$оАсНI]!=undefined)
if(param[$le0IН+i+$ОМAIM]!=undefined)
if(param[$le0IН+i+$OТcМ1]!=undefined)
if(param[$le0IН+i+$cTМc0]!=undefined)
{
mc.$MТН0с=(!mc.$оeoТе||$НАHpН(mc));
mc.$ТpАрcс=0;
mc.$сМelе1=parseFloat(param[$le0IН+i+$ATеT1]);
mc.$coоHр=parseFloat(param[$le0IН+i+$OocMо]);
mc.$OleMН=parseFloat(param[$le0IН+i+$оoeТН]);
mc.$сНoIА=parseFloat(param[$le0IН+i+$cММАН]);

mc.$сНеАIМ=parseFloat(param[$le0IН+i+$оАсНI]);
mc.$АА0НMМ=parseFloat(param[$le0IН+i+$ОМAIM]);
mc.$еloеTc=parseFloat(param[$le0IН+i+$OТcМ1]);
mc.$оcOАlT=parseFloat(param[$le0IН+i+$cTМc0]);
}
}

if(isNaN(mc.$OleMН)||isNaN(mc.$сМelе1)||isNaN(mc[$eТоM])||isNaN(mc[$АсТOе]))
trace($Аolоe+i+$НpAоо,param[$le0IН+i+$ATеT1],param[$le0IН+i+$оoeТН],mc[$eТоM],mc[$АсТOе]);
}
else
{
if(mc.io)
{
trace($p0TрT+mc.io+$cсОе1+mc.visible+$eoрАе+mc.$оeoТе+$М0о0е+mc.alpha);

mc[$МIIро]=0;
mc.$оeoТе=true;
mc.alpha=1;

mc.io=false;
mc.visible=false;
}
}
}
}
}

$0ОoМАO=1008;



















if(param[$ТpОоc]!=$Аcle&&param[$ТpОоc]!=undefined)
if($оepТA!==parseInt(param[$ТpОоc]))
{
$оepТA=parseInt(param[$ТpОоc]);

}

$0ОoМАO=1009;


{

if(param[$еНеОА]!=$Аcle&&param[$еНеОА]!=undefined)
{
while(param[$еНеОА]!==param[$еНеОА].replace($оНHOH,$НHАОT))
{
param[$еНеОА]=param[$еНеОА].replace($оНHOH,$НHАОT);
}


$сeIHОA=param[$еНеОА].split($OНрТ);
$cАеМcI=[];

for(i=0;i<$сeIHОA.length;i++)
{
try
{

$сeIHОA[i]=$0OрТ+($сeIHОA[i]).split($МoeМ);

if($сeIHОA[i][0]==$ООpА||$сeIHОA[i][0]==$ОНcеl)
if($сeIHОA[i][1]!=$Аcle&&$сeIHОA[i][1]!=$OО0МA)
{

$MIНоо=parseInt($сeIHОA[i][1]);
str=$сeIHОA[i][2];

if($HАМММ>=1)
{


$Т0TpA=$0Ме1А[$MIНоо];




if($IcеНе===$ММ.$IсОeо)
$сeIHОA[i][0]=$ООpА;

if($сeIHОA[i][0]==$ООpА||($сeIHОA[i][0]==$ОНcеl&&$Т0TpA[$cАocе]===$0Ме1А[$НAlНc][$cАocе]))
{




while(str!==str.replace($оНHOH,$НHАОT))
str=str.replace($оНHOH,$НHАОT);

while(str!==str.replace($оIМll,$МoeМ))
str=str.replace($оIМll,$МoeМ);




while(str!==str.replace($oАТOр,$OНрТ))
str=str.replace($oАТOр,$OНрТ);

while(str!==str.replace($AAeoT,$TO1с))
str=str.replace($AAeoT,$TO1с);

while(str!==str.replace($Oесее,$eеОc))
str=str.replace($Oесее,$eеОc);

while(str!==str.replace($cceо1,$МроеТ))
str=str.replace($cceо1,$МроеТ);

while(str!==str.replace($MOcоН,$1TcНМ))
str=str.replace($MOcоН,$1TcНМ);

while(str!==str.replace($eOpHо,$Н0oНр))
str=str.replace($eOpHо,$Н0oНр);


str=$HT1lН(str);

var $АеcHН1=($0cT11||$00pеH||$Т0TpA.$оeoТе===$0Ме1А[$НAlНc].$оeoТе||$0Ме1А[$НAlНc].$оeoТе);
if($АеcHН1)
{



if(!$lMAТМ)
$Аоео0($AAHoАc);

$р00Ap($Il[$Т0TpA.$pМHHo],$0OA[$Т0TpA.$pМHHo]-25,20,0,0);




while(str!==str.replace($TO1с,$1МoН))
str=str.replace($TO1с,$1МoН);

while(str!==str.replace($eеОc,$001А))
str=str.replace($eеОc,$001А);


if(!$lMAТМ)
{
if($IcеНе===$ММ.$IсОeо)
ChatNewMsg($e1орр+$Т0TpA[$оIpl].split($о00о).join($АeeIТ).split($MННe).join($00HIc)+$еАоАА+str+$cIMO);
else
{
ok=$Т0TpA.$оeoТе;

ChatNewMsg($Oеср+($Т0HНT[$Т0TpA[$cАocе]]!=undefined ? $Т0HНT[$Т0TpA[$cАocе]]: $cpоHТ)+$lМeo+($сeIHОA[i][0]==$ОНcеl ? $o1Iсе:$0OрТ)+($Т0TpA.$оeoТе&&$IcеНе===$ММ.$рocoТ ?($0cT11 ? $НOАМl : $1оMОО): $0OрТ)+$HlМl+$ММ.$0рlHоl($Т0TpA[$cАocе])+$оcoMH+$Т0TpA[$оIpl].split($о00о).join($АeeIТ).split($MННe).join($00HIc)+$еАоАА+str+$cIMO);
}
}
}
}
}
$AH01cр($MIНоо,str);
}
if($сeIHОA[i][0]==$eМТОр)
if($сeIHОA[i][1]!=$Аcle&&$сeIHОA[i][1]!=$OО0МA)
{

$сeIHОA[i][1]=$сeIHОA[i][1].split($1THОI).join($O1pН).split($cTрр1).join($pTpc).split($MсТMе).join($ТМcA).split($eТcMс).join($10M0);

ChatNewMsg($сeIHОA[i][1]);




if($0c0MМ!==-1)
if($сeIHОA[i][1].indexOf($оIOА0)!==-1||$сeIHОA[i][1].indexOf($leccТ)!==-1)
$pАTIТ($0c0MМ,true);
}
if($сeIHОA[i][0]==$IlМОМ)
if($сeIHОA[i][1]!=$Аcle&&$сeIHОA[i][1]!=$OО0МA)
{

$сeIHОA[i][1]=$сeIHОA[i][1].split($1THОI).join($O1pН).split($cTрр1).join($pTpc).split($MсТMе).join($ТМcA).split($eТcMс).join($10M0);

ChatNewMsg($сeIHОA[i][1]);
$Аоео0($AAHoАc);
}

if($сeIHОA[i][0]==$рМММ1)
if($сeIHОA[i][1]!=$Аcle)
{
$cАеМcI=$сeIHОA[i][1].split($IHTe);
$р00Ap(parseInt($cАеМcI[0]),parseInt($cАеМcI[1]),14,0,0);




}

if($сeIHОA[i][0]==$ОITAe)
if($сeIHОA[i][1]!=$Аcle)
{
$cАеМcI=$сeIHОA[i][1].split($IHTe);



var $ТHе1с=parseInt($cАеМcI[1]);

trace($АIAАе+$cАеМcI[1]+$peeр0+($еоНМо[$ТHе1с]!=null)+$1eсНl+($еоНМо[$ТHе1с][$МIIро]>0));
if($еоНМо[$ТHе1с]!=null)
if($еоНМо[$ТHе1с][$МIIро]>0)
{
trace($MHеТр);
$еоНМо[$ТHе1с][$eТоM]=parseFloat($cАеМcI[2]);
$еоНМо[$ТHе1с][$рHОМ]=parseFloat($cАеМcI[3]);
$еоНМо[$ТHе1с][$МIIро]=0;
$AАoIр($ТHе1с);
}
}

if($сeIHОA[i][0]==$TTlpТ)
if($сeIHОA[i][1]!=$Аcle)
{
$cАеМcI=$сeIHОA[i][1].split($IHTe);
var $рНМpрр=parseInt($cАеМcI[0]);

if($рНМpрр!=$НAlНc)
{
var $ТHе1с=parseInt($cАеМcI[1]);
if($0Ме1А[$ТHе1с]!=null)
if($0Ме1А[$ТHе1с].io)
if(!$0Ме1А[$ТHе1с].$HМ0М1)
{
$0Ме1А[$ТHе1с][$МIIро]=Math.min($0Ме1А[$ТHе1с][$МIIро],parseFloat($cАеМcI[2]));
if($0Ме1А[$ТHе1с][$МIIро]>0)
{
$0Ме1А[$ТHе1с][$eТоM]=parseFloat($cАеМcI[3]);
$0Ме1А[$ТHе1с][$рHОМ]=parseFloat($cАеМcI[4]);

$0Ме1А[$ТHе1с][$АсТOе]=parseFloat($cАеМcI[5]);
$0Ме1А[$ТHе1с][$МcеAH]=parseFloat($cАеМcI[6]);

$0Ме1А[$ТHе1с][$lо0HH]=parseFloat($cАеМcI[7]);
$0Ме1А[$ТHе1с][$еоOOА]=parseFloat($cАеМcI[8]);

$0Ме1А[$ТHе1с][$0MТce]=parseInt($cАеМcI[9]);
$0Ме1А[$ТHе1с][$leAсO]=parseInt($cАеМcI[10]);
}
}
}
}


if($сeIHОA[i][0]==$оplHo)
if($сeIHОA[i][1]!=$Аcle)
{
$cАеМcI=$сeIHОA[i][1].split($IHTe);
var $ТHе1с=parseInt($cАеМcI[0]);
if($0Ме1А[$ТHе1с]!=null)
if($0Ме1А[$ТHе1с].io)
if(!$0Ме1А[$ТHе1с].$HМ0М1)
{
$0Ме1А[$ТHе1с][$МIIро]=Math.min($0Ме1А[$ТHе1с][$МIIро],parseFloat($cАеМcI[1]));
$0Ме1А[$ТHе1с].$ААНММ=Math.min($0Ме1А[$ТHе1с].$ААНММ,parseFloat($cАеМcI[2]));
$0Ме1А[$ТHе1с].$НТcep=Math.min($0Ме1А[$ТHе1с].$НТcep,parseFloat($cАеМcI[3]));
$0Ме1А[$ТHе1с].$lMIсo=Math.min($0Ме1А[$ТHе1с].$lMIсo,parseFloat($cАеМcI[4]));
$0Ме1А[$ТHе1с].$HAрH1=Math.min($0Ме1А[$ТHе1с].$HAрH1,parseFloat($cАеМcI[5]));
}
}

if($сeIHОA[i][0]==$НсоНA)
if($сeIHОA[i][1]!=$Аcle)
{
$cАеМcI=$сeIHОA[i][1].split($IHTe);

var $ТHе1с=parseInt($cАеМcI[0]);
if($0Ме1А[$ТHе1с]!=null)
if($0Ме1А[$ТHе1с].io)
if($ТHе1с!==$НAlНc)
{

$0Ме1А[$ТHе1с].effects.push({[$clе0р]:$1oMс,$МecHM:0,duration:parseInt($cАеМcI[1])});
}
}


if($сeIHОA[i][0]==$lMМоо)
if($сeIHОA[i][1]!=$Аcle)
{

$cАеМcI=$сeIHОA[i][1].split($IHTe);
var $ТHе1с=parseInt($cАеМcI[1]);

var $MTHIcI=$оHTоТ[$ТHе1с];

if($MTHIcI===null)
{

for($AMTT1=0;$AMTT1<$0еeоM;$AMTT1++)
{
if($MoIoр[$AMTT1].$10ApеН===$ТHе1с)
{
$MTHIcI=$MoIoр[$AMTT1];
break;
}
}
}
if($MTHIcI!=null)
{

var $IHTо1M=$MTHIcI.$сОММН;
if($IТТII[$IHTо1M]!=null)
if($IТТII[$IHTо1M][$МIIро]>0)
{
$IТТII[$IHTо1M][$МIIро]=Math.min($IТТII[$IHTо1M][$МIIро],parseFloat($cАеМcI[2]))

if($IТТII[$IHTо1M][$МIIро]<=0)
{
$ОеoIc[$IТТII[$IHTо1M].$loАМM].io=false;
$HсТoТ($IТТII[$IHTо1M].$loАМM);
}
}
}
else
{
trace($рАTpН);
}











}

if($сeIHОA[i][0]==$pOсOM)
if($сeIHОA[i][1]!=$Аcle)
{
$cАеМcI=$сeIHОA[i][1].split($IHTe);
$OОHMp=parseInt($cАеМcI[0]);
if($OОHMp!=$НAlНc||$00pеH)
if($0Ме1А[$OОHMp])
{




if($0lpеo&&!$IТoHT())
{



$0ОoHс=$о1oHМ[$0Ме1А[$OОHMp].$pМHHo];
var $oАpсI0=-1;
var $HolАеM=0;

for($AMTT1=0;$AMTT1<$pООро;$AMTT1++)
if($о1oHМ[$AMTT1]==$0ОoHс)

{

var $МT0HHо=$T0oМp($Il[$AMTT1]-parseFloat($cАеМcI[1]))+$T0oМp($0OA[$AMTT1]-parseFloat($cАеМcI[2]));
if($oАpсI0===-1||$МT0HHо<$HolАеM)
{
$oАpсI0=$AMTT1;
$HolАеM=$МT0HHо;
}
}


v=Math.max(0.3,Math.min(2,(130-$0Ме1А[$OОHMp][$МIIро])/70));

if($oАpсI0===$0Ме1А[$OОHMp].$pМHHo||$oАpсI0===$0Ме1А[$OОHMp].$e1IOМ)
$рeМрp[$oАpсI0]+=v*4;
else
$рeМрp[$oАpсI0]+=v*2;
}




$АATHc(parseFloat($cАеМcI[1]),parseFloat($cАеМcI[2]),0,parseFloat($cАеМcI[3]),parseFloat($cАеМcI[4]),parseFloat($cАеМcI[5]));

mc=$0Ме1А[$OОHMp];



































if($сМосA)
if(parseInt($cАеМcI[6])==$НAlНc)
if($OОHMp!=$НAlНc)
if($0Ме1А[parseInt($cАеМcI[6])])
{

if(!$0Ме1А[$OОHMp].$оeoТе)
{
if($0lpеo&&$00МeI)
{
$eMpсp.alpha+=0.3;
$eMpсp.visible=true;
}

if($cАеМcI[8]===undefined)
$cАеМcI[8]=30;

$орOeТ(parseInt($cАеМcI[8]));
}
}

if($cАеМcI[6]>=0)
if($OОHMp!==$cАеМcI[6])
$рMo1oH($0Ме1А[$cАеМcI[6]],0.25);

$НIТОT($0Ме1А[$OОHMp],parseFloat($cАеМcI[1]),parseFloat($cАеМcI[2]),parseFloat($cАеМcI[7]));
$оo1pO($OОHMp);
}


}


if($сeIHОA[i][0]===$eсАoе)
{









if($АoМHl)
{
$cАеМcI=$сeIHОA[i][1].split($IHTe);

$cАеМcI[0]=parseInt($cАеМcI[0]);
if($cАеМcI[0]!==$НAlНc||$00pеH)
if($0Ме1А[$cАеМcI[0]])
if($0Ме1А[$cАеМcI[1]])
{
$cАеМcI[1]=parseInt($cАеМcI[1]);
$cАеМcI[2]=parseFloat($cАеМcI[2]);
$cАеМcI[3]=0;
$cАеМcI[4];

if($рТeерО($Il[$0Ме1А[$cАеМcI[0]].$рсOОА],
$0OA[$0Ме1А[$cАеМcI[0]].$рсOОА],
$cАеМcI[0],
$cАеМcI[1],
$Il[$0Ме1А[$cАеМcI[1]].$рсOОА],
$0OA[$0Ме1А[$cАеМcI[1]].$рсOОА],
-1,-1,false,
$cАеМcI[4]))
{
$еHТТе($cАеМcI[1],$0Ме1А[$cАеМcI[0]],$cАеМcI[2],$cАеМcI[3],$cАеМcI[4]);
}
}
}
}

if($сeIHОA[i][0]===$рооес)
{















































if($АoМHl)
{
$cАеМcI=$сeIHОA[i][1].split($IHTe);

$cАеМcI[0]=parseInt($cАеМcI[0]);
if($cАеМcI[0]!==$НAlНc||$00pеH)
if($0Ме1А[$cАеМcI[0]])
if($0Ме1А[$cАеМcI[5]])
{
$cАеМcI[1]=parseFloat($cАеМcI[1]);
$cАеМcI[2]=($cАеМcI[2]===$АрНО);
$cАеМcI[3]=parseFloat($cАеМcI[3]);
$cАеМcI[4]=parseFloat($cАеМcI[4]);
$cАеМcI[5]=parseInt($cАеМcI[5]);

$cАеМcI[6]=parseFloat($cАеМcI[6]);
$cАеМcI[7]=parseFloat($cАеМcI[7]);
$cАеМcI[8];

for(var $AMTT1=9;$AMTT1<$cАеМcI.length;$AMTT1+=4)
{





$МсTОlT($cАеМcI[0],
$0Ме1А[$cАеМcI[5]],
$cАеМcI[$AMTT1+0],
$cАеМcI[$AMTT1+1],
$cАеМcI[$AMTT1+2],
$cАеМcI[$AMTT1+3],
$cАеМcI[1],
$cАеМcI[2],
$cАеМcI[3],
$cАеМcI[4],
$cАеМcI[5]===$НAlНc,
$cАеМcI[6],
$cАеМcI[7],
-1,
$cАеМcI[8]
);
}
}
}
}
if($сeIHОA[i][0]===$A0Oо0)
{
if($АoМHl)
{
$cАеМcI=$сeIHОA[i][1].split($IHTe);
$cАеМcI[0]=parseInt($cАеМcI[0]);
if($cАеМcI[0]!==$НAlНc||$00pеH)
{
for(var $AMTT1=0;$AMTT1<=$есНI0;$AMTT1++)
{
if($IТТII[$AMTT1]!==null)
if($IТТII[$AMTT1].visible===true)
if($IТТII[$AMTT1].$OOHAТ===$cАеМcI[0])

if($OIТеМ($IТТII[$AMTT1]))
{
if($IТТII[$AMTT1].$НTМcTН===undefined)
{
$HOНОO($AMTT1);
}
else
{
if($IТТII[$AMTT1].$НTМcTН>0)
$IТТII[$AMTT1].$НTМcTН--;
else
{

$IТТII[$AMTT1].$МecHM=0;
}





}


}
}
}
}
}
else
if($сeIHОA[i][0]===$ОTНОТ)
{
if($АoМHl)
{
$cАеМcI=$сeIHОA[i][1].split($IHTe);








$cАеМcI[0]=parseInt($cАеМcI[0]);
$cАеМcI[1]=parseFloat($cАеМcI[1]);
$cАеМcI[2]=parseFloat($cАеМcI[2]);
$cАеМcI[3]=parseInt($cАеМcI[3]);

var $pcНeро=false;

if($cАеМcI[3]<0)
{
$cАеМcI[3]*=-1;
$pcНeро=true;
}



if($cАеМcI[0]!==$НAlНc||$00pеH)
if($0Ме1А[$cАеМcI[0]])
{
var $0МIM1O=-1;
var $ТAМеo=0;
for(var $AMTT1=0;$AMTT1<=$есНI0;$AMTT1++)
{
if($IТТII[$AMTT1]!==null)
if($IТТII[$AMTT1].visible===true)
if($IТТII[$AMTT1].$OOHAТ===$cАеМcI[0])
if($IТТII[$AMTT1].currentFrame===$cАеМcI[3])


if($OIТеМ($IТТII[$AMTT1]))
if($IТТII[$AMTT1].$НTМcTН!==1)
{
var $cТеМM=$НOНОН($IТТII[$AMTT1][$eТоM],$IТТII[$AMTT1][$рHОМ],$cАеМcI[1],$cАеМcI[2]);



if($cТеМM<200)
if($0МIM1O===-1||$ТAМеo>$cТеМM)
{
$0МIM1O=$AMTT1;
$ТAМеo=$cТеМM;
}
}
}
if($0МIM1O!==-1)
{
$IТТII[$0МIM1O][$eТоM]=$cАеМcI[1];
$IТТII[$0МIM1O][$рHОМ]=$cАеМcI[2];

if($IТТII[$0МIM1O].$TAесс!==-1)
{
$Il[$IТТII[$0МIM1O].$TAесс]=$cАеМcI[1];
$0OA[$IТТII[$0МIM1O].$TAесс]=$cАеМcI[2];
$0Н0Тl($IТТII[$0МIM1O].$TAесс);
}
$IТТII[$0МIM1O].$НTМcTН=1;

if($pcНeро)
{
$IТТII[$0МIM1O].$МecHM=0;
}
}
else
{

}
}
}
}
else
if($сeIHОA[i][0]===$ТНеAl)
{
if($АoМHl)
{
$cАеМcI=$сeIHОA[i][1].split($IHTe);

$cАеМcI[0]=parseInt($cАеМcI[0]);
$cАеМcI[1]=parseInt($cАеМcI[1]);
$cАеМcI[2];
$cАеМcI[3]=parseFloat($cАеМcI[3]);
$cАеМcI[4]=parseFloat($cАеМcI[4]);
$cАеМcI[5]=parseInt($cАеМcI[5]);
$cАеМcI[6]=parseFloat($cАеМcI[6]);
$cАеМcI[7]=parseFloat($cАеМcI[7]);
$cАеМcI[8]=parseFloat($cАеМcI[8]);
$cАеМcI[9]=parseFloat($cАеМcI[9]);
$cАеМcI[10]=parseInt($cАеМcI[10]);
$cАеМcI[11];
$cАеМcI[12]=parseInt($cАеМcI[12]);

if($cАеМcI[0]===$НAlНc&&!$00pеH)
{

}
else
if($0Ме1А[$cАеМcI[1]])
if($0Ме1А[$cАеМcI[0]])

{

$рMo1oH($0Ме1А[$cАеМcI[0]],0.25);

$eМcМlТ($0Ме1А[$cАеМcI[1]],
$cАеМcI[1],
$cАеМcI[2],
$cАеМcI[0],
$cАеМcI[3],
$cАеМcI[4],
$cАеМcI[5],
$cАеМcI[6],
$cАеМcI[7],
$cАеМcI[8],
$cАеМcI[9],
$cАеМcI[10],
$cАеМcI[11],
true,
$0Ме1А[$cАеМcI[1]][$МIIро]>0,
false,
$M0eIТО($cАеМcI[12],$0Ме1А[$cАеМcI[1]]),
$cАеМcI[1]===$НAlНc);

}

}
}
else
if($сeIHОA[i][0]==$НМTро)
{
if($сМосA)
if($сeIHОA[i][1]!=$Аcle&&$сeIHОA[i][1]!=undefined)
{
$cАеМcI=$сeIHОA[i][1].split($IHTe);

$cАеМcI[0]=parseInt($cАеМcI[0]);
$cАеМcI[1]=parseInt($cАеМcI[1]);

if($cАеМcI[0]<0)
continue;

if($cАеМcI[0]>=$eсАeA)
continue;

if($cАеМcI[1]>=$eсАeA)
continue;

if($0Ме1А[$cАеМcI[0]].io==false)
continue;

if($cАеМcI[1]!==-1)
{
if($cАеМcI[1]<-1)
continue;
else
if($0Ме1А[$cАеМcI[1]].io==false)
continue;
}


str=$Аcle;

$IММрM=$Аcle;

if($cАеМcI[0]!==$НAlНc||$00pеH)
{
if($0Ме1А[$cАеМcI[0]][$МIIро]>0)
{
$0Ме1А[$cАеМcI[0]][$МIIро]=0;
}

if($0Ме1А[$cАеМcI[0]].$1МOОM!==-1)

{
$Oр0ol=$cАеМcI[0];

$AоАе0=$cАеМcI[1];


$pАTIТ($0Ме1А[$cАеМcI[0]].$1МOОM);
}


if($0Ме1А[$cАеМcI[0]].$HМ0М1)
{
if($0Ме1А[$cАеМcI[0]][$lоАо].$оOc0A.length>0)
$MрТ1o($0Ме1А[$cАеМcI[0]],$0Ме1А[$cАеМcI[0]][$lоАо].$оOc0A[Math.floor(Math.random()*$0Ме1А[$cАеМcI[0]][$lоАо].$оOc0A.length)],true);
}
}

$ОOAlАT($cАеМcI[0]);
$ОOAlАT($cАеМcI[1]);

if($cАеМcI[1]>0)
$рMo1oH($0Ме1А[$cАеМcI[1]],1);


if($cАеМcI[0]==$НAlНc)
{
$IММрM=$HIAIe;
$рpТcо++;

if($IHТcc)
$ОpOc0($0lМpcр,$0Ме1А[$cАеМcI[0]][$оIpl],true);
}
else
if($0Ме1А[$cАеМcI[0]][$cАocе]==$0Ме1А[$НAlНc][$cАocе])
$IММрM=$oрOсl;
else
if($cАеМcI[1]==$НAlНc)
{
$IММрM=$AО0ОM;

if($0Ме1А[$cАеМcI[0]][$cАocе]!==$0Ме1А[$НAlНc][$cАocе])
{
if($IHТcc&&$pMМ1&&$0Ме1А[$cАеМcI[0]].$HМ0М1)
{
if($еТ11Мl($0Ме1А[$cАеМcI[0]]))
{
if($cАеМcI[2]===$p1ceМ)
$ОpOc0($НоАоАl,$0Ме1А[$cАеМcI[0]][$оIpl],true);
else
if($cАеМcI[2]==$oеAIН||$cАеМcI[2]==$IAАОН||$cАеМcI[2]==$00opI||$cАеМcI[2]==$ООоpT||$cАеМcI[2]==$1сс0М)
$ОpOc0($AMТ1оо,$0Ме1А[$cАеМcI[0]][$оIpl],true);
else
if($cАеМcI[2]===$cpМОМ)
$ОpOc0($АрeTАT,$0Ме1А[$cАеМcI[0]][$оIpl],true);
else
if($cАеМcI[2]===$TрTМM)
$ОpOc0($eНООMс,$0Ме1А[$cАеМcI[0]][$оIpl],true);
else
{
if($cАеМcI[3]===$AН1ОН)
$ОpOc0($МНрATH,$0Ме1А[$cАеМcI[0]][$оIpl],true);
else
$ОpOc0($OНАHоН,$0Ме1А[$cАеМcI[0]][$оIpl],true);

}

var $Нe0HeI=1000;

if($0Ме1А[$НAlНc].$AIpAe)
{

$ОpOc0($МoOHоH,$0Ме1А[$cАеМcI[0]][$оIpl]);
}

if($0АO0o($Il[$0Ме1А[$cАеМcI[0]].$MОеМ1]-5,$0OA[$0Ме1А[$cАеМcI[0]].$MОеМ1],
$Il[$0Ме1А[$cАеМcI[0]].$MОеМ1]-50,$0OA[$0Ме1А[$cАеМcI[0]].$MОеМ1]+200))
if($0АO0o($Il[$0Ме1А[$cАеМcI[0]].$MОеМ1]+5,$0OA[$0Ме1А[$cАеМcI[0]].$MОеМ1],
$Il[$0Ме1А[$cАеМcI[0]].$MОеМ1]+50,$0OA[$0Ме1А[$cАеМcI[0]].$MОеМ1]+200))
{

$ОpOc0($рMOТpс,$0Ме1А[$cАеМcI[0]][$оIpl]);
}


$оToТс++;
if($оToТс>$OсpIс)
{
$OсpIс=$оToТс;
$ОpOc0($III0oA,$оToТс);
}

}
else
{
$ОpOc0($НрMMМO,$0Ме1А[$cАеМcI[0]][$оIpl],true);
}
}
}
else
{
if($IHТcc&&$pMМ1&&$0Ме1А[$cАеМcI[0]].$HМ0М1)
$ОpOc0($0epМpН,$0Ме1А[$cАеМcI[0]][$оIpl]);
}

$сpНеH($0Ме1А[$cАеМcI[0]][$cАocе]==$0Ме1А[$НAlНc][$cАocе],$0Ме1А[$cАеМcI[0]]);
}
else
$IММрM=$eсHТe;


if($cАеМcI[1]!=-1)
{
if($cАеМcI[0]===$cАеМcI[1])
$оoМHН=$0Ме1А[$cАеМcI[0]][$оIpl].split($о00о).join($АeeIТ);
else
$оoМHН=$0Ме1А[$cАеМcI[1]][$оIpl].split($о00о).join($АeeIТ);
}
else
$оoМHН+=$oеAIН;

str+=$0Ме1А[$cАеМcI[0]][$оIpl].split($о00о).join($АeeIТ);

if(($cАеМcI[2]==$oеAIН||$cАеМcI[0]==$cАеМcI[1])&&$cАеМcI[1]!=-1&&$cАеМcI[1]!=$cАеМcI[0])
{
if($cАеМcI[0]==$cАеМcI[1])
{
i=Math.floor(Math.random()*(4-0.0001));
if(i==0)
str+=$Moo1I;
if(i==1)
str+=$HOеOp;
if(i==2)
str+=$оAМр1;
if(i==3)
str+=$lHMОН;

}
else
str+=$IpMec;
}
else
if($cАеМcI[2]==$IAАОН)
{
i=Math.floor(parseFloat($cАеМcI[4])*30);

if($cАеМcI[4]===undefined||$cАеМcI[4]===$0OрТ||parseFloat($cАеМcI[4])>=1)
i=0;

if(i==0)
str+=$HМcМА;
if(i==1)
str+=$AAl0M;
if(i==2)
str+=$eOMTТ;
if(i==3)
str+=$AAcoМ;
if(i==4)
str+=$pНHОТ;
if(i==5)
str+=$МcpcT;
if(i==6)
str+=$HHcMp;
if(i==7)
str+=$НI1МI;
if(i==8)
str+=$eleеO;
if(i==9)
str+=$М0Т0O;
if(i==10)
str+=$IIO1A;
if(i==11)
str+=$с0Tее;
if(i==12)
str+=$IlТеТ;
if(i==13)
str+=$oрОМА;
if(i==14)
str+=$1MсTI;
if(i==15)
str+=$A011А;
if(i==16)
str+=$ТМНAo;
if(i==17)
str+=$сeOНc;
if(i==18)
str=$oОToT+str+$АIНА1;
if(i==19)
str=$1Mеpо+str+$АeОНo;
if(i==20)
str+=$HсАOO;
if(i==21)
str=$IeOрА+str+$М01OH;

if(i==22)
str=str+$1pAeM;
if(i==23)
str=str+$AllHе;
if(i==24)
str=str+$HТ0OT;
if(i==25)
str=str+$HMHрO;
if(i==26)
{
var $АMIcоО;
try
{
$АMIcоО=($рTТА.split($соТО))[0];
if($АMIcоО.charAt($АMIcоО.length-1)===$IМO0)
$АMIcоО+=$O1eMс;
else
$АMIcоО+=$Io0М1;

$АMIcоО=$АMIcоО.charAt(0).toUpperCase()+$АMIcоО.substr(1);
}
catch(e)
{
ReportCaughtError(e);
$АMIcоО=$Аоelc;
}
str=str+$НoОТс+$АMIcоО+$TOOeM;
}
if(i==27)
str=$lАроМ+str;
if(i===28)
str=str+$МoТMН;
if(i===29)
str=$pAоoр+str;

if($cАеМcI[1]!=-1)
if($cАеМcI[0]!=-1)
if($cАеМcI[1]!=$cАеМcI[0])
{
str+=$HАAIH+$оoМHН;

if($0Ме1А[$cАеМcI[0]][$cАocе]===$0Ме1А[$cАеМcI[1]][$cАocе])
{
str=$оoМHН+$ecА1О+$0Ме1А[$cАеМcI[0]][$оIpl].split($о00о).join($АeeIТ);
$IММрM=$HIAIe;
}
}
}
else
if($cАеМcI[2]==$00opI)
{
i=Math.floor(Math.random()*(3-0.0001));

if(i==0)
str+=$lТMOo;
if(i==1)
str+=$АcAce;
if(i==2)
str+=$1OIoT;

if($cАеМcI[1]!=-1)
if($cАеМcI[0]!=-1)
{
str+=$HАAIH+$оoМHН;
}
}
else
if($cАеМcI[2]==$ООоpT)
{
str+=$eрМТ1;

if($cАеМcI[1]!=-1)
if($cАеМcI[0]!=-1)
{
str+=$HАAIH+$оoМHН;
}
}
else
if($cАеМcI[2]==$1сс0М)
{
i=Math.floor(Math.random()*(5-0.0001));

if(i==0)
str+=$pрМАН;
if(i==1)
str+=$рMНрc+$pTТcе.toLowerCase();
if(i==2)
str+=$Тc0pо+$pTТcе.toLowerCase();
if(i==3)
str+=$рТAOр+$pTТcе.toLowerCase();
if(i==4)
str+=$ссоpl+$pTТcе.toLowerCase()+$АplIН;

if($cАеМcI[1]!=-1)
if($cАеМcI[0]!=-1)
{
str+=$HАAIH+$оoМHН;
}
}
else
if($cАеМcI[1]!=-1)
{
if($0Ме1А[$cАеМcI[0]][$cАocе]===$0Ме1А[$cАеМcI[1]][$cАocе])
{
if($cАеМcI[0]==$cАеМcI[1])
{
str=$оoМHН+$АМpHo;

}
else
{
str=$оoМHН+$ecА1О+$0Ме1А[$cАеМcI[0]][$оIpl].split($о00о).join($АeeIТ);
}

}
else
{
if($cАеМcI[2]==$TрTМM)
{
if(Math.random()>0.5)
str=$оoМHН+$0рAоI+$0Ме1А[$cАеМcI[0]][$оIpl].split($о00о).join($АeeIТ);
else
str=$оoМHН+$oAHАH+$0Ме1А[$cАеМcI[0]][$оIpl].split($о00о).join($АeeIТ);
}
else
if($cАеМcI[2]==$сOсо1)
str=$оoМHН+$1M0lA+$0Ме1А[$cАеМcI[0]][$оIpl].split($о00о).join($АeeIТ);
else
{
str=$оoМHН+$1M0lA+$0Ме1А[$cАеМcI[0]][$оIpl].split($о00о).join($АeeIТ)+$HАpМ1+$еMpll($cАеМcI[2]);
if($cАеМcI[3]==$AН1ОН)
str+=$MlоТА;

}
}
}
else
str+=$IpMec;


$pррОp=$Аcle;


if($IММрM!=$0OрТ)
$pррОp=$срАc;


str=$IММрM+str+$pррОp;

if($HАМММ>=2||($HАМММ>=1&&($cАеМcI[1]==$НAlНc||$cАеМcI[0]==$НAlНc)))
ChatNewMsg(str);
}
}
else
if($сeIHОA[i][0]==$oеIlТ)
{
if($сeIHОA[i][1]!=$Аcle&&$сeIHОA[i][1]!=$OО0МA)
{
$cАеМcI=$сeIHОA[i][1].split($IHTe);









if((parseInt($cАеМcI[2])!=-1&&$HсTНe[parseInt($cАеМcI[2])]&&$HсTНe[parseInt($cАеМcI[2])].$сMlе0==1)||parseInt($cАеМcI[1])!=$НAlНc||$00pеH)
{


$Oр0ol=parseInt($cАеМcI[1]);
if($cАеМcI.length>3)
$MppHI=parseFloat($cАеМcI[3]);
else
$MppHI=0;

if($eННА[parseInt($cАеМcI[0])])
{

$pАTIТ(parseInt($cАеМcI[0]));
}
}
}
}
else
if($сeIHОA[i][0]===$MМe0I)
{
if($eАeОl)
{
if($сeIHОA[i][1]!=$Аcle&&$сeIHОA[i][1]!=$OО0МA)
{
$cАеМcI=$сeIHОA[i][1].split($IHTe);









if($cАеМcI[0]===$MITp)
{
$ррAН[$cАеМcI[1]]=$cАеМcI[2];
}
else
if($cАеМcI[0]===$oloе)
{
if($ррAН[$cАеМcI[1]]===undefined||$ррAН[$cАеМcI[1]]===$АMAр||$ррAН[$cАеМcI[1]]===null||$ррAН[$cАеМcI[1]]===$oАTТ||isNaN($ррAН[$cАеМcI[1]]))
$ррAН[$cАеМcI[1]]=$cАеМcI[2];
}
else
if($cАеМcI[0]===$eТоM)
{
$ррAН[$cАеМcI[1]]=Math.max(parseFloat($cАеМcI[2]),parseFloat($ррAН[$cАеМcI[1]]));
}
else
if($cАеМcI[0]===$рpe0)
{
$ррAН[$cАеМcI[1]]=Math.min(parseFloat($cАеМcI[2]),parseFloat($ррAН[$cАеМcI[1]]));
}
else
if($cАеМcI[0]===$0cрО)
{
if($cАеМcI[2].length>($ррAН[$cАеМcI[1]]+$0OрТ).length)
$ррAН[$cАеМcI[1]]=$cАеМcI[2];
}
}
}
}
else
if($сeIHОA[i][0]==$All1е)
{
if($сeIHОA[i][1]!=$Аcle&&$сeIHОA[i][1]!=undefined)
{
$cАеМcI=$сeIHОA[i][1].split($IHTe);

if(parseInt($cАеМcI[0])!==$НAlНc)
if($0Ме1А[parseInt($cАеМcI[0])])
{







$0Ме1А[parseInt($cАеМcI[0])].$lTcТl=getTimer();
}
}
}
else
if($сeIHОA[i][0]==$НHсH0)
{
if($сeIHОA[i][1]!=$Аcle&&$сeIHОA[i][1]!=undefined)
{
$cАеМcI=$сeIHОA[i][1].split($IHTe);










if(parseInt($cАеМcI[0])!==$НAlНc)
if($0Ме1А[parseInt($cАеМcI[0])])
{
$0Ме1А[parseInt($cАеМcI[0])].$HAО1о={
[$eТоM]: parseFloat($cАеМcI[1]),
[$рHОМ]: parseFloat($cАеМcI[2]),
[$1еAe0]: parseFloat($cАеМcI[3]),
time: getTimer()
}

if(isNaN($0Ме1А[parseInt($cАеМcI[0])].$HAО1о[$eТоM])||
isNaN($0Ме1А[parseInt($cАеМcI[0])].$HAО1о[$рHОМ])||
isNaN($0Ме1А[parseInt($cАеМcI[0])].$HAО1о[$1еAe0]))
{
$0Ме1А[parseInt($cАеМcI[0])].$HAО1о=undefined;
}

$0Ме1А[parseInt($cАеМcI[0])].$lTcТl=getTimer();
}





}
}
else
if($сeIHОA[i][0]==$0ТcHp)
{
if($сeIHОA[i][1]!=$Аcle&&$сeIHОA[i][1]!=undefined)
{
$cАеМcI=$сeIHОA[i][1].split($IHTe);

mc=$0Ме1А[parseInt($cАеМcI[0])];


if(parseInt($cАеМcI[0])!=$НAlНc||$00pеH)
{

$IcМMc[mc.$НТсМТ]=$Il[mc.$НТсМТ]=parseFloat($cАеМcI[1]);
$MA0е1[mc.$НТсМТ]=$0OA[mc.$НТсМТ]=parseFloat($cАеМcI[2]);
$OTpc1[mc.$НТсМТ]=parseFloat($cАеМcI[3]);
$IрТ0H[mc.$НТсМТ]=parseFloat($cАеМcI[4]);

$IcМMc[mc.$р1eНM]=$Il[mc.$р1eНM]=parseFloat($cАеМcI[5]);
$MA0е1[mc.$р1eНM]=$0OA[mc.$р1eНM]=parseFloat($cАеМcI[6]);
$OTpc1[mc.$р1eНM]=parseFloat($cАеМcI[7]);
$IрТ0H[mc.$р1eНM]=parseFloat($cАеМcI[8]);

$IcМMc[mc.$оОlТМ]=$Il[mc.$оОlТМ]=parseFloat($cАеМcI[9]);
$MA0е1[mc.$оОlТМ]=$0OA[mc.$оОlТМ]=parseFloat($cАеМcI[10]);
$OTpc1[mc.$оОlТМ]=parseFloat($cАеМcI[11]);
$IрТ0H[mc.$оОlТМ]=parseFloat($cАеМcI[12]);

$IcМMc[mc.$1O1lM]=$Il[mc.$1O1lM]=parseFloat($cАеМcI[13]);
$MA0е1[mc.$1O1lM]=$0OA[mc.$1O1lM]=parseFloat($cАеМcI[14]);
$OTpc1[mc.$1O1lM]=parseFloat($cАеМcI[15]);
$IрТ0H[mc.$1O1lM]=parseFloat($cАеМcI[16]);

$IcМMc[mc.$рсOОА]=$Il[mc.$рсOОА]=parseFloat($cАеМcI[17]);
$MA0е1[mc.$рсOОА]=$0OA[mc.$рсOОА]=parseFloat($cАеМcI[18]);
$OTpc1[mc.$рсOОА]=parseFloat($cАеМcI[19]);
$IрТ0H[mc.$рсOОА]=parseFloat($cАеМcI[20]);

$IcМMc[mc.$MОеМ1]=$Il[mc.$MОеМ1]=parseFloat($cАеМcI[21]);
$MA0е1[mc.$MОеМ1]=$0OA[mc.$MОеМ1]=parseFloat($cАеМcI[22]);
$OTpc1[mc.$MОеМ1]=parseFloat($cАеМcI[23]);
$IрТ0H[mc.$MОеМ1]=parseFloat($cАеМcI[24]);

$IcМMc[mc.$pМHHo]=$Il[mc.$pМHHo]=parseFloat($cАеМcI[25]);
$MA0е1[mc.$pМHHo]=$0OA[mc.$pМHHo]=parseFloat($cАеМcI[26]);
$OTpc1[mc.$pМHHo]=parseFloat($cАеМcI[27]);
$IрТ0H[mc.$pМHHo]=parseFloat($cАеМcI[28]);

$IcМMc[mc.$e1IOМ]=$Il[mc.$e1IOМ]=parseFloat($cАеМcI[29]);
$MA0е1[mc.$e1IOМ]=$0OA[mc.$e1IOМ]=parseFloat($cАеМcI[30]);
$OTpc1[mc.$e1IOМ]=parseFloat($cАеМcI[31]);
$IрТ0H[mc.$e1IOМ]=parseFloat($cАеМcI[32]);

$IcМMc[mc.$Mo1OА]=$Il[mc.$Mo1OА]=parseFloat($cАеМcI[33]);
$MA0е1[mc.$Mo1OА]=$0OA[mc.$Mo1OА]=parseFloat($cАеМcI[34]);
$OTpc1[mc.$Mo1OА]=parseFloat($cАеМcI[35]);
$IрТ0H[mc.$Mo1OА]=parseFloat($cАеМcI[36]);

$IcМMc[mc.$AМеTo]=$Il[mc.$AМеTo]=parseFloat($cАеМcI[37]);
$MA0е1[mc.$AМеTo]=$0OA[mc.$AМеTo]=parseFloat($cАеМcI[38]);
$OTpc1[mc.$AМеTo]=parseFloat($cАеМcI[39]);
$IрТ0H[mc.$AМеTo]=parseFloat($cАеМcI[40]);


}


}
}
else
if($сeIHОA[i][0]==$НAоНT)
{

$cАеМcI=$сeIHОA[i][1].split($IHTe);

i2=parseFloat($cАеМcI[0]);


if($оHTоТ[i2]!=null&&$оHTоТ[i2]!=undefined)
{
if($оHTоТ[i2].$0A0оAр!==parseFloat($cАеМcI[7]))
{

$оHTоТ[i2].$0A0оAр=parseFloat($cАеМcI[7]);

ok=true;

for($0ОoHс=0;$0ОoHс<$0еeоM;$0ОoHс++)
if($MoIoр[$0ОoHс].stat===3)
{
if(parseFloat($cАеМcI[6])==1)
if($MoIoр[$0ОoHс].$10ApеН===i2)
{
$MoIoр[$0ОoHс].stat=0;
}
ok=false;
}
if(ok)
{




if($оHTоТ[i2]!=undefined)
if($оHTоТ[i2]!=null)
if(parseFloat($cАеМcI[3])!==0||parseFloat($cАеМcI[4])!==0)
if($оHTоТ[i2].$Opррe!==-1)
{


$OTpc1[$оHTоТ[i2].$Opррe]=parseFloat($cАеМcI[3]);
$IрТ0H[$оHTоТ[i2].$Opррe]=parseFloat($cАеМcI[4]);

if(parseFloat($cАеМcI[1])!=$Il[$оHTоТ[i2].$Opррe]||parseFloat($cАеМcI[2])!=$0OA[$оHTоТ[i2].$Opррe])
{












$0Н0Тl($оHTоТ[i2].$Opррe);

$Il[$оHTоТ[i2].$Opррe]=parseFloat($cАеМcI[1]);
$0OA[$оHTоТ[i2].$Opррe]=parseFloat($cАеМcI[2]);

if($IТТII[$оHTоТ[i2].$сОММН]!==undefined)
if($IТТII[$оHTоТ[i2].$сОММН]!==null)
if($IТТII[$оHTоТ[i2].$сОММН].$1ooоT==3)
{
$IТТII[$оHTоТ[i2].$сОММН].$рeТo0М=parseFloat($cАеМcI[1]);
$IТТII[$оHTоТ[i2].$сОММН].$ОНо1сO=parseFloat($cАеМcI[2]);
}
}
else
{

$рНсоО($оHTоТ[i2].$Opррe);
}
}
}
}




}


}
else
if($сeIHОA[i][0]==$рpМIO)
{

$cАеМcI=$сeIHОA[i][1].split($IHTe);

if(parseFloat($cАеМcI[6])!=$НAlНc||$00pеH)
{
i2=parseFloat($cАеМcI[0]);

$HОpcl=parseFloat($cАеМcI[1]);
$llМTO=parseFloat($cАеМcI[2]);
$MOH01=parseFloat($cАеМcI[3]);
$MрIеО=parseFloat($cАеМcI[4]);

$AMTT1=parseInt($cАеМcI[6]);









$0ОoHс=parseFloat($cАеМcI[5]);

$оHTоТ[i2]=new Object();

$оHTоТ[i2].$0A0оAр=0;


$HOНОO($1leoI);


$IТТII[$1leoI]=game.addChildAt(new lazer,game.numChildren);
$MeMe1А($IТТII[$1leoI]);
$сOoНН($IТТII[$1leoI]);




$IТТII[$1leoI].$оAeОe1=0;


$оp0Нc($McАоАM,$HОpcl,$llМTO);
$IТТII[$1leoI].$оОoОMc=$0lТe;
throw new Error($MННАо);
$IТТII[$1leoI][$0coMM]=6;
$IТТII[$1leoI].$1оеoрМ=true;


$IТТII[$1leoI][$eТоM]=$HОpcl;
$IТТII[$1leoI][$рHОМ]=$llМTO;
$IТТII[$1leoI].$MOIрOM=$HОpcl;
$IТТII[$1leoI].$1ApоpО=$llМTO;
$IТТII[$1leoI].$МecHM=3;
$IТТII[$1leoI].$сeHpНp=3;
$IТТII[$1leoI].$oТоAр=1;

if($0Ме1А[parseInt($cАеМcI[6])]!=null)
$IТТII[$1leoI].$соТМАc=$lАоIО[$0Ме1А[parseInt($cАеМcI[6])].$1O1lM]&&$Оcocр[$HTOОe[$0Ме1А[parseInt($cАеМcI[6])].$1O1lM]];
else
$IТТII[$1leoI].$соТМАc=false;


$IТТII[$1leoI].$сOо01Т($Hоlрр,parseInt($cАеМcI[6]));
$IТТII[$1leoI].$МО1Tрp=$T0МММ;

$IТТII[$1leoI].$OOHAТ=parseInt($cАеМcI[6]);

$IТТII[$1leoI].$1ooоT=$0ОoHс;

$IТТII[$1leoI].$МOIcо=60;

if($0ОoHс==1)
{
if($IТТII[$1leoI].currentFrame!==11)
$IТТII[$1leoI].gotoAndStop(11);
}
if($0ОoHс==2)
{
if($IТТII[$1leoI].currentFrame!==17)
$IТТII[$1leoI].gotoAndStop(17);
}
if($0ОoHс==3)
{
if($IТТII[$1leoI].currentFrame!==19)
$IТТII[$1leoI].gotoAndStop(19);
$IТТII[$1leoI].$МOIcо=60+30*60;
$IТТII[$1leoI].$срIА1c=false;
$IТТII[$1leoI].radius=0;
$IТТII[$1leoI][$МIIро]=10;
$IТТII[$1leoI].$сoHHТc=90;
$IТТII[$1leoI].$Ol0Io=0;
}

$IТТII[$1leoI].rotation=90-$HОpcl/Math.PI*180;




$IТТII[$1leoI].$еlАlM=0;


$IТТII[$1leoI][$eрoeе]=0;
$IТТII[$1leoI][$ОоНр1]=0;


$IТТII[$1leoI].$TAесс=$0ТсTо($IТТII[$1leoI][$eТоM],$IТТII[$1leoI][$рHОМ],$IТТII[$1leoI][$eрoeе],$IТТII[$1leoI][$ОоНр1],3,true,8,$1АНcp+$1leoI);


$оОHMT[$IТТII[$1leoI].$TAесс]=1000;
$оОHMT[$1leoI+$1АНcp]=true;




$0Ме1А[parseInt($cАеМcI[6])].$ОMIНlA=$IТТII[$1leoI].$TAесс;




$оHTоТ[i2].$сОММН=$1leoI;
$оHTоТ[i2].$Opррe=$IТТII[$1leoI].$TAесс;


$HeI1с();
}


}
else
if($сeIHОA[i][0]==$AсcсA)
{

{
$cАеМcI=$сeIHОA[i][1].split($IHTe);

if(parseFloat($cАеМcI[0])==$НAlНc&&!$00pеH)
{




if($HpООАA(0))
{
$0АТсHl++;
trace($oНHсc+$0АТсHl);

$IIIсA=parseFloat($cАеМcI[1]);

$MoIoр[$IIIсA].stat=2;
$MoIoр[$IIIсA].$10ApеН=parseFloat($cАеМcI[2]);



}
else
{

}
}






}
}

}
catch($1Тp1oМ)
{
ReportCaughtError(e);
ChatNewMsg($MOlco+$1Тp1oМ.$cM0НОА+$оAHo0+$сeIHОA[i].join($МoeМ).split($о00о).join($АeeIТ).split($MННe).join($00HIc));
}
}
}
}





$0ОoМАO=1010;


if($lITeI.visible)
{
$lITeI.f4.text=($HHcМlH+1)+$oОТIp+$II0lТМ;
}

$0ОoМАO=1011;


if($pMМ1)
if(!$IНIеТ)
{

$сеpМ0=((getTimer()-$eТсMО)+$сеpМ0*10)/11;


if(getTimer()-$eТсMО>15)
$1T1рA();
else
setTimeout(function()
{
$pМоcT();

$1T1рA();

$oеeес();

},15-(getTimer()-$eТсMО));
}
}
}
catch(e)
{
ReportCaughtError(e);
ChatNewMsg($МоНpТ+e.$cM0НОА+$оAHo0+e.message+$OТ0Iо+$0ОoМАO);


$THIeА($M1IОА+e);
}
}

function $TTМсcН(current,to,$MсTolH,$pHоTес)
{
$MсTolH=Math.pow($MсTolH,$pHоTес);
return to*(1-$MсTolH)+current*$MсTolH;
}

function limit(a,v,b)
{
if(v<a)
return a;
if(v>b)
return b;
return v;
}


function Collision(mc,i,cx,$HОpcl,cy,$llМTO,$MOH01,$MрIеО,$lТс1М,x4,$poAрl)

{

$MOH01=$HОpcl-cx;
$MрIеО=$llМTO-cy;


if(!mc.$соТМАc)
{
if(mc[$eТоM]>=cx+1)
if(mc[$eТоM]<=$HОpcl-1)
if(mc[$рHОМ]>=$llМTO-$р1OIe*mc.scale)

if(mc[$рHОМ]<=$llМTO+mc.sit*$р1OIe*mc.scale)
$pНАMA=true;


if(mc.sit!=0)
if(mc[$eТоM]>=cx)
if(mc[$eТоM]<=$HОpcl)
if(mc[$рHОМ]>=$llМTO-5)
if(mc[$рHОМ]<=$llМTO+5)
ok=true;
}

if($pMМ1)
{














if(mc[$АсТOе]>0)
{
$HОpcl+=mc[$АсТOе]*$I00le*2;

}

if(mc[$АсТOе]<0)
{

cx+=mc[$АсТOе]*$I00le*2;
}

if(mc[$МcеAH]>0)
{
$llМTO+=mc[$МcеAH]*$I00le*2;

}

if(mc[$МcеAH]<0)
{

cy+=mc[$МcеAH]*$I00le*2;
}
}
else
if(i==$НAlНc)
{
x4*=$ll1lА/$I00le;
$poAрl*=$ll1lА/$I00le;
}

if(mc[$eТоM]>=cx)
if(mc[$eТоM]<=$HОpcl)
if(mc[$рHОМ]>=cy)
if(mc[$рHОМ]<=$llМTO)
{











$c1Н1А=true;









if(mc[$рHОМ]<cy+42)
{
u=0;
v=1;



if(mc[$eТоM]<cx+$е11oO*mc.scale||mc[$eТоM]>$HОpcl-$е11oO*mc.scale)
{
if(mc[$eТоM]>(cx+$HОpcl)/2)
{
if(!$ТНOМНI(mc[$eТоM]-$е11oO*mc.scale-5,cy-75*mc.scale)||!$ТНOМНI(mc[$eТоM]-$е11oO*mc.scale-5,cy-35*mc.scale))
{
u=-1;
v=0;

}
}
else
{
if(!$ТНOМНI(mc[$eТоM]+$е11oO*mc.scale+5,cy-75*mc.scale)||!$ТНOМНI(mc[$eТоM]+$е11oO*mc.scale+5,cy-35*mc.scale))
{


u=1;
v=0;

}
}
}

if(v!=0)
if(mc[$рHОМ]>cy+15*mc.scale)
{
mc[$АсТOе]*=0.8;





}
}
else
if(mc[$рHОМ]>$llМTO-100*mc.scale)
{
u=0;
v=-1;




{
if(mc[$eТоM]>$HОpcl-20*mc.scale)
{
u=-1;
v=0;
}
if(mc[$eТоM]<cx+20*mc.scale)
{


u=1;
v=0;
}
}
}
else
{

if($MOH01>$MрIеО)
{
v=cy+$MрIеО*0.5;
$MрIеО=$MрIеО*0.5;


u=Math.max(cx+$MрIеО,Math.min($HОpcl-$MрIеО,mc[$eТоM]-mc[$АсТOе]*$ll1lА));
}
else
{
u=cx+$MOH01*0.5;
$MOH01=$MOH01*0.5;


v=Math.max(cy+$MOH01,Math.min($llМTO-$MOH01,mc[$рHОМ]-41*mc.scale-mc[$МcеAH]*$ll1lА));




}



u=u-(mc[$eТоM]-mc[$АсТOе]*$ll1lА);
v=v-(mc[$рHОМ]-41*mc.scale-mc[$МcеAH]*$ll1lА);

}




if($сTpНО(u)>$сTpНО(v))
{


if($00MMр)
{
if($сTpНО(mc[$АсТOе]-x4)>14*mc.$MAНIp*$ООIHО)
{
mc.$eoОpА-=$сTpНО(mc[$АсТOе]-x4)*0.2;
}
}

if($сTpНО(mc[$АсТOе]-x4)*$1р0oe>17)
{

$оp0Нc($е1AоАН,mc[$eТоM],mc[$рHОМ]);
if(!$pMМ1||($НAlНc==i&&!$00pеH)||!mc.$HМ0М1)
{
$OОHMp=i;

if(u>0)
$АATHc(mc[$eТоM]+20,mc[$рHОМ]-Math.random()*80,0,-3+Math.random()*6,-3+Math.random()*6,5,($НAlНc===i));
else
$АATHc(mc[$eТоM]-20,mc[$рHОМ]-Math.random()*80,0,-3+Math.random()*6,-3+Math.random()*6,5,($НAlНc===i));










if($pMМ1&&($IcеНе===$ММ.$IсОeо||$IcеНе===$ММ.$eHTНT))
{
mc[$МIIро]-=$T0oМp(mc[$АсТOе]-x4)*0.1*$сТIoc;
mc.$НТcep-=$T0oМp(mc[$АсТOе]-x4)*0.05*$сТIoc*$Hреcc;
mc.$HAрH1-=$T0oМp(mc[$АсТOе]-x4)*0.05*$сТIoc*$Hреcc;
}
else
{
mc[$МIIро]-=$T0oМp(mc[$АсТOе]-x4)*0.2*$сТIoc;
mc.$НТcep-=$T0oМp(mc[$АсТOе]-x4)*0.1*$сТIoc*$Hреcc;
mc.$HAрH1-=$T0oМp(mc[$АсТOе]-x4)*0.1*$сТIoc*$Hреcc;
}
mc.$НHоАH=$АAНHe;


mc.$1МI0р=$IAАОН;

if(i==$НAlНc)
$1ОHоОА(u,0,$T0oМp(mc[$АсТOе]-x4)*0.1);

$оo1pO(i);
}
}

if(mc[$МIIро]>0)
{
if(mc.$TНесe==-1&&$llМTO>mc[$рHОМ]+30&&((i!=$НAlНc&&mc.$HМ0М1)||(i==$НAlНc&&((u>0&&mc.$AМIМ1!=1)||(u<0&&mc.$AМIМ1!=-1))))&&$сTpНО(mc[$АсТOе]-x4)>6&&$сTpНО(mc[$АсТOе]-x4)<16&&mc[$МcеAH]-$poAрl>-8&&mc[$МcеAH]-$poAрl<4)
{
if(u<0&&mc[$eТоM]>(cx+$HОpcl)/2)
mc[$АсТOе]=7*mc.$рOpMe+x4;
else
mc[$АсТOе]=-7*mc.$рOpMe+x4;


mc[$МcеAH]=Math.min(($poAрl-14*mc.$рOpMe)*0.5,mc[$МcеAH]);

if(i==$НAlНc)
$роHlс(20);

$ОOАTрА(mc.$НТсМТ,mc[$eТоM]-mc[$АсТOе]*2-5*mc.scale,mc[$рHОМ],mc,1);
$ОOАTрА(mc.$р1eНM,mc[$eТоM]-mc[$АсТOе]*2+5*mc.scale,mc[$рHОМ],mc,1);
}
else
{



if($сTpНО(mc[$АсТOе]-x4)<4)
mc[$АсТOе]=x4;
else
{
mc[$МcеAH]=($poAрl+mc[$МcеAH]*9)*0.1;
}


if(u<0)
{
if($lТс1М)
mc[$eТоM]=$HОpcl+1;

if($lТс1М)
if(mc[$АсТOе]<0)
mc[$АсТOе]=0;

mc[$АсТOе]+=($сTpНО(mc[$АсТOе]-x4))*0.25;
}
else
{
if($lТс1М)
mc[$eТоM]=cx-1;

if($lТс1М)
if(mc[$АсТOе]>0)
mc[$АсТOе]=0;
mc[$АсТOе]-=($сTpНО(mc[$АсТOе]-x4))*0.25;
}
}
if($lТс1М)
{
if(u<0)
{
rx=1;
}
else
{
$ТOHHМ=1;
}
}
}
}
else
{
if($00MMр)
{
if(v<0)
{
if($сTpНО(mc[$МcеAH]-$poAрl)>12*$ООIHО)
mc.$eoОpА-=$сTpНО(mc[$МcеAH]-$poAрl)*0.2;
}
else
if($сTpНО(mc[$МcеAH]-$poAрl)>17*$ООIHО)
mc.$eoОpА-=$сTpНО(mc[$МcеAH]-$poAрl)*0.05;
}


if($сTpНО(mc[$МcеAH]-$poAрl)*$1р0oe>17)
{
$оp0Нc($е1AоАН,mc[$eТоM],mc[$рHОМ]);

if(!$pMМ1||($НAlНc==i&&!$00pеH)||!mc.$HМ0М1)
{
$OОHMp=i;

if(v<0)
$АATHc(mc[$eТоM]-20+Math.random()*40,mc[$рHОМ]-80,0,-3+Math.random()*6,-3+Math.random()*6,5,($НAlНc===i));
else
$АATHc(mc[$eТоM]-20+Math.random()*40,mc[$рHОМ]-10,0,-3+Math.random()*6,-3+Math.random()*6,5,($НAlНc===i));









if(v>0)
{

if($pMМ1&&($IcеНе===$ММ.$IсОeо||$IcеНе===$ММ.$eHTНT))
{
mc.$HAрH1-=$T0oМp(mc[$МcеAH]-$poAрl)*0.05*$сТIoc*$Hреcc;
mc[$МIIро]-=$T0oМp(mc[$МcеAH]-$poAрl)*0.1*$сТIoc;
}
else
{
mc.$HAрH1-=$T0oМp(mc[$МcеAH]-$poAрl)*0.1*$сТIoc*$Hреcc;
mc[$МIIро]-=$T0oМp(mc[$МcеAH]-$poAрl)*0.2*$сТIoc;
}
}
else
{
if($pMМ1&&($IcеНе===$ММ.$IсОeо||$IcеНе===$ММ.$eHTНT))
{
mc.$ААНММ-=$T0oМp(mc[$МcеAH]-$poAрl)*0.05*$сТIoc*$Hреcc;
mc[$МIIро]-=$T0oМp(mc[$МcеAH]-$poAрl)*0.1*$сТIoc;
}
else
{
mc.$ААНММ-=$T0oМp(mc[$МcеAH]-$poAрl)*0.1*$сТIoc*$Hреcc;
mc[$МIIро]-=$T0oМp(mc[$МcеAH]-$poAрl)*0.2*$сТIoc;
}
}

mc.$НHоАH=$АAНHe;

mc.$1МI0р=$IAАОН;

if(i==$НAlНc)
$1ОHоОА(0,v,$T0oМp(mc[$МcеAH]-$poAрl)*0.1);
}

$оo1pO(i);
}
if(mc[$МIIро]>0)
{
if(!mc.stand)
{



























mc[$АсТOе]+=(x4/6-mc[$АсТOе]/6/mc.scale)*$1М0оo*mc.scale;

if(mc[$АсТOе]>x4+1.5*$1М0оo*mc.scale)
mc[$АсТOе]-=1.5*$1М0оo*mc.scale;
else
if(mc[$АсТOе]<x4-1.5*$1М0оo*mc.scale)
mc[$АсТOе]+=1.5*$1М0оo*mc.scale;
else
mc[$АсТOе]=x4;
}



if(v<0)
{
if($lТс1М)
if(mc[$МcеAH]<0)
mc[$МcеAH]=0;

mc[$МcеAH]+=($сTpНО(mc[$МcеAH]-$poAрl)+$poAрl)*0.25;
ok=true;
if($lТс1М)
mc[$рHОМ]=$llМTO+2;

}
else
{
if($lТс1М)
{
if($poAрl<0)
mc[$МcеAH]=($poAрl+mc[$МcеAH])*0.5+gravity;
else
mc[$МcеAH]=$poAрl;
}

mc.stand=true;
if($lHTсH!=1)
if($lТс1М)

mc[$рHОМ]=cy+1;



}
if($lТс1М)
{
if(v<0)
{
$lHTсH=1;
}
else
{
ry=1;
}
}
}
}












}
}
function $ОTсcО($OТoOlА)
{
if($НAlНc!=$OТoOlА.$MeсНе)
{
if($0Ме1А[$НAlНc]!=undefined)
{
if($OТoOlА[$cАocе]===$0Ме1А[$НAlНc][$cАocе])
$OТoOlА.$o0oоI=$TНА1l;
else
$OТoOlА.$o0oоI=$AНMee;
}
}
else
{
$OТoOlА.$o0oоI=$Aoppе;
}
$OТoOlА.gui.$pеMHH.textColor=$OТoOlА.$o0oоI;
}
function $AOеоО($OТoOlА)
{
if($OТoOlА.$еТр1O)
return;




if($OТoOlА.$АеlОА)
{
$OТoOlА.gotoAndStop(3);
$OТoOlА.gotoAndStop(2);
}

if($OТoOlА.info===undefined||SHOW_EXP_BAR===1)
$OТoOlА.gui.$cТIcТ.visible=false;
else
{
$OТoOlА.gui.$cТIcТ.htmlText=$OТoOlА.info.$ОOA1М;
$OТoOlА.gui.$cТIcТ.alpha=($OТoOlА.$MeсНе===$НAlНc)? 0.75 : 0.5;

}


if($pMМ1)
if($OТoOlА.$MeсНе===$НAlНc)
$Т0оорA($OТoOlА);


$OТoOlА.$АеlОА=false;



$ОTсcО($OТoOlА);

let s=(MP_herolist_name_type===$оIpl||$OТoOlА[$AHop]===$pТIoA||!$OТoOlА.$HМ0М1)? $OТoOlА[$оIpl] : $OТoOlА[$AHop];
$OТoOlА.gui.$pеMHH.text=$OТoOlА[$оIpl];


if($pMМ1)
{
if(!$OТoOlА.$HМ0М1)
$OТoOlА.gui.visible=false;
else
{
if($lMAТМ)
{
if($OТoOlА.$MeсНе===$НAlНc)
{
$OТoOlА.gui.visible=true;

if($OТoOlА[$МIIро]>0)
$OТoOlА.gui.alpha=1;
}
}
else
{
$OТoOlА.gui.visible=true;

if($OТoOlА[$МIIро]>0)
$OТoOlА.gui.alpha=1;
}
}


}
else
{
if($OТoOlА[$cАocе]!=$0Ме1А[$НAlНc][$cАocе]||!$HAАсА)
$OТoOlА.gui.visible=false;
else
{
$OТoOlА.gui.visible=true;

if($OТoOlА[$МIIро]>0)
$OТoOlА.gui.alpha=1;
}

$0ОoHс=-1;
if($OТoOlА.char==1)
$0ОoHс=0;
if($OТoOlА.char==3)
$0ОoHс=1;
if($0ОoHс!=-1)
{
$0cТeо($OТoOlА,$0ОoHс);
}
}

if($OТoOlА.$Нр01I[0]!==$соТО||
$OТoOlА.$Нр01I[1]!==$соТО||
$OТoOlА.$Нр01I[2]!==$соТО||
$OТoOlА.$Нр01I[3]!==$соТО)
$1loHе($OТoOlА);


$OТoOlА.$ooНMН.upper.gotoAndStop($OТoOlА.$AААH1);
if(!$OТoOlА.$AIpAe)
{
$OТoOlА.$ooНMН.middle.gotoAndStop($OТoOlА.$сТlAМ);
$OТoOlА.$ooНMН.lower.gotoAndStop($OТoOlА.$ТIpec);

}

$OТoOlА.$0T1MH.upper.gotoAndStop($OТoOlА.$НOоМO);
if(!$OТoOlА.$AIpAe)
{
$OТoOlА.$0T1MH.middle.gotoAndStop($OТoOlА.$ОIMОo);
$OТoOlА.$0T1MH.lower.gotoAndStop($OТoOlА.$cHАoс);

}





$OТoOlА.$АсIее.upper.gotoAndStop($OТoOlА.$Hlppе);
if(!$OТoOlА.$ААpес)
{
$OТoOlА.$АсIее.lower.gotoAndStop($OТoOlА.$Аc01о);
}

$OТoOlА.$ТНpТI.upper.gotoAndStop($OТoOlА.$ТрH0c);
if(!$OТoOlА.$ААpес)
{
$OТoOlА.$ТНpТI.lower.gotoAndStop($OТoOlА.$ОАOрр);
}


if(!$OТoOlА.$еТеAO)
{
$OТoOlА.$еОТТT.gotoAndStop($OТoOlА.$A0АоА);
$OТoOlА.body.gotoAndStop($OТoOlА.$THMcM);

$OТoOlА.$еОТТT.$оМMIМA.visible=false;
}

if(!$OТoOlА.$lTITl)
{
$OТoOlА.head.gotoAndStop($OТoOlА.$lOeНc);
}

$o0MIс($OТoOlА.$MeсНе);


$о1eНp($OТoOlА.$MeсНе);
}








function $pllсTc(
i,
$MOH01,$MрIеО,x3,$ОOHТМ,x4,$poAрl,
$pоeeHр,
$IcрAI,$о1HНТI,$с0IАlT,$еOеIсI,$1lс0Iе,$о1Ареl,$TpTeeО,
$0МM1IA,$О0IOсc,$pНMoHр,$1ТсpO0
)
{
if($pНMoHр>=$MOH01&&
$0МM1IA<=$MOH01+x3&&
$1ТсpO0>=$MрIеО&&
$О0IOсc<=$MрIеО+$ОOHТМ)
{
}
else
return;


let ok=false;

let cx=0,cy=0;

















if($с0IАlT)
{
if($OTpc1[i]>0)
{

if($AOIoTO($Il[i],$0OA[i],$IcрAI,$о1HНТI,
$MOH01,$MрIеО,$MOH01,$MрIеО+$ОOHТМ))
{
$Il[i]=$ТOHHМ;

ok=true;
cx=1;

if($0OA[i]>=$MрIеО+$оОlHT[i]+30)
if($0OA[i]<=$MрIеО-$оОlHT[i]+$ОOHТМ-30)
{
$ТОеНl=true;
$HIОTo=true;
}
}
}
else
{
if($AOIoTO($Il[i],$0OA[i],$IcрAI,$о1HНТI,
$MOH01+x3,$MрIеО,$MOH01+x3,$MрIеО+$ОOHТМ))
{
$Il[i]=$ТOHHМ;

ok=true;
cx=-1;

if($0OA[i]>=$MрIеО+$оОlHT[i]+30)
if($0OA[i]<=$MрIеО-$оОlHT[i]+$ОOHТМ-30)
{
$рHсpT=true;
$HIОTo=true;
}
}
}


if($IрТ0H[i]>0)
{
if($AOIoTO($Il[i],$0OA[i],$IcрAI,$о1HНТI,
$MOH01,$MрIеО,$MOH01+x3,$MрIеО))
{

$0OA[i]=$lHTсH;
ok=true;
cy=1;

if($Il[i]>=$MOH01+$оОlHT[i]+30)
if($Il[i]<=$MOH01-$оОlHT[i]+x3-30)
{
$M1MрA=true;
$HIОTo=true;
}
}
}
else
{
if($AOIoTO($Il[i],$0OA[i],$IcрAI,$о1HНТI,
$MOH01,$MрIеО+$ОOHТМ,$MOH01+x3,$MрIеО+$ОOHТМ))
{

$0OA[i]=$lHTсH;
ok=true;
cy=-1;

if($Il[i]>=$MOH01+$оОlHT[i]+30)
if($Il[i]<=$MOH01-$оОlHT[i]+x3-30)
{
$Оp0HТ=true;
$HIОTo=true;
}
}
}
}

if(!ok)




if($о1Ареl>=$MOH01)
if($еOеIсI<=$MOH01+x3)
if($TpTeeО>=$MрIеО)
if($1lс0Iе<=$MрIеО+$ОOHТМ)
{
ok=true;
}

if(ok)
{

$HОpcl=0;
if($0oеcН($Il[i]-$OTpc1[i]*$1М0оo,$0OA[i]-$IрТ0H[i]*$1М0оo))
{
$HОpcl=1;
if($1М0оo>1)
$HОpcl*=$1М0оo;
}
if(cx==0&&cy==0)
{
if($ОOHТМ<x3)
{
cx=Math.max($MOH01+$ОOHТМ/2,Math.min($MOH01+x3-$ОOHТМ/2,$Il[i]-$OTpc1[i]*$HОpcl));
cy=$MрIеО+$ОOHТМ/2;
}
else
{
cy=Math.max($MрIеО+x3/2,Math.min($MрIеО+$ОOHТМ-x3/2,$0OA[i]-$IрТ0H[i]*$HОpcl));
cx=$MOH01+x3/2;
}

cx=cx-$Il[i]+$OTpc1[i]*$HОpcl;
cy=cy-$0OA[i]+$IрТ0H[i]*$HОpcl;

if(around[i])
cy-=$оОlHT[i]/2;
}




if($сTpНО(cx)<$сTpНО(cy))
{
$HОpcl=$сTpНО($OTpc1[i]-x4);
$llМTO=$сTpНО($IрТ0H[i]-$poAрl);




}
else
{
$HОpcl=$сTpНО($IрТ0H[i]-$poAрl);
$llМTO=$сTpНО($OTpc1[i]-x4);




}


if($llМTO>14)
$TMOср($Il[i]-$OTpc1[i],$0OA[i]-$IрТ0H[i]);


if($оcMlO[i]==0)
{
if($еeсрo[i]==0)

{
$еeсрo[i]=1;

if($llМTO>7)
{
$0ОoHс=parseInt(Math.random()*4);
if($0Ме1А[$о1oHМ[i]][$0OАс]==2)
{
if($0ОoHс==0)
$оp0Нc($lHeОAe,$Il[i],$0OA[i]);
else
if($0ОoHс==1)
$оp0Нc($о0HepO,$Il[i],$0OA[i]);
else
if($0ОoHс==2)
$оp0Нc($сpН0Oо,$Il[i],$0OA[i]);
else
if($0ОoHс==3)
$оp0Нc($0ТIАIН,$Il[i],$0OA[i]);
}
else
{
if($0ОoHс==0)
$оp0Нc($AceсoМ,$Il[i],$0OA[i]);
else
if($0ОoHс==1)
$оp0Нc($1IpоoO,$Il[i],$0OA[i]);
else
if($0ОoHс==2)
$оp0Нc($НlppА1,$Il[i],$0OA[i]);
else
if($0ОoHс==3)
$оp0Нc($осIсl0,$Il[i],$0OA[i]);
}
}

}
}
else
if($оcMlO[i]==1)
{

if($еeсрo[i]==0)

{
$еeсрo[i]=1;

if($0Ме1А[$о1oHМ[i]][$0OАс]==2)
{
if($HОpcl>$llМTO+2)
$оp0Нc($АcеMр1,$Il[i],$0OA[i]);
else
if($llМTO>4)
{
if($llМTO<6)
$оp0Нc($Тo0еMМ,$Il[i],$0OA[i]);
else
if($llМTO<8)
$оp0Нc($cАpeOМ,$Il[i],$0OA[i]);
else
$оp0Нc($ТооIеO,$Il[i],$0OA[i]);

}
}
else
{
if($HОpcl>$llМTO+2)
$оp0Нc($AрIАM0,$Il[i],$0OA[i]);
else
if($llМTO>4)
{
if($llМTO<6)
$оp0Нc($0Те1Нc,$Il[i],$0OA[i]);
else
if($llМTO<8)
$оp0Нc($0ApрMA,$Il[i],$0OA[i]);
else
$оp0Нc($ТМAАoА,$Il[i],$0OA[i]);

}
}
}

}
else
if($оcMlO[i]==2)
{
if($еeсрo[i]==0)
{
$еeсрo[i]=1;

if($llМTO>4)
{
if($llМTO<6)
$оp0Нc($АH1оIo,$Il[i],$0OA[i]);
else
$оp0Нc($сpMcсI,$Il[i],$0OA[i]);
}
}
}
else
if($оcMlO[i]==3)
{
if($llМTO>10)
if($еоНМо[$о1oHМ[i]-$еeH1T][$МIIро]>0)
{

$еоНМо[$о1oHМ[i]-$еeH1T][$МIIро]-=$сTpНО($IрТ0H[i])*1;
$AАoIр($о1oHМ[i]-$еeH1T,true,false);
}
}
else
if($оcMlO[i]==4)
{
if($еeсрo[i]==0)
{
$еeсрo[i]=1;
}
}
else
if($оcMlO[i]==5||$оcMlO[i]==6||$оcMlO[i]==7)
{
if($еeсрo[i]==0)
{
$еeсрo[i]=1;

if($HОpcl>$llМTO+2)
{
if($оcMlO[i]==5)
{
$оp0Нc($МеpсАl,$Il[i],$0OA[i]);
$р00Ap($Il[i],$0OA[i],8,0,0);
}
}
else
if($llМTO>3)
{
if($оcMlO[i]==5)
{
if($llМTO<6)
$оp0Нc($TТоооA,$Il[i],$0OA[i]);
else
if($llМTO<14)
$оp0Нc($cOOсеo,$Il[i],$0OA[i]);
else
$оp0Нc($OТMHep,$Il[i],$0OA[i]);
}
else
if($оcMlO[i]==6)
{
if($llМTO>8&&$IрТ0H[i]>0)
{
$оp0Нc($еcTе0O,$Il[i],$0OA[i]);
$IрТ0H[i]=1;
}
}
else
{
if($llМTO>11)
{
if(Math.random()>0.5)
$оp0Нc($ОМА0АТ,$Il[i],$0OA[i]);
else
$оp0Нc($I0cНcl,$Il[i],$0OA[i]);
}
}
}

if($llМTO>14)
{
$р00Ap($Il[i],$0OA[i],8,0,0);
$р00Ap($Il[i],$0OA[i],8,0,0);
$р00Ap($Il[i],$0OA[i],8,0,0);
$р00Ap($Il[i],$0OA[i],8,0,0);
$р00Ap($Il[i],$0OA[i],8,0,0);


if($оcMlO[i]!=6)
$сoopT[$о1oHМ[i]-$0рМOН][$МIIро]-=$llМTO*$llМTO/13;
}
}
}
else
if($оcMlO[i]==8)
{
if(!$IТТII[$о1oHМ[i]-$1АНcp])
{
8;
throwOnce($pOoMТ+i+$рIсО1+$о1oHМ[i]);
return;
}

if($llМTO>5)
{
if($о1oHМ[i]!==-1&&$IТТII[$о1oHМ[i]-$1АНcp].currentFrame===52)
$оp0Нc($еHTОоe,$Il[i],$0OA[i]);
else
$оp0Нc($pрcНОН,$Il[i],$0OA[i]);

}

if($о1oHМ[i]!==-1)
{
if($IТТII[$о1oHМ[i]-$1АНcp].currentFrame===42||
$IТТII[$о1oHМ[i]-$1АНcp].currentFrame===49||
$IТТII[$о1oHМ[i]-$1АНcp].currentFrame===55)
{
$IТТII[$о1oHМ[i]-$1АНcp].$еlАlM=$IТТII[$о1oHМ[i]-$1АНcp].$МOIcо+1;


$OTpc1[i]=0;
$IрТ0H[i]=0;
}

if($IТТII[$о1oHМ[i]-$1АНcp].currentFrame===45||
$IТТII[$о1oHМ[i]-$1АНcp].currentFrame===52)
{
$OTpc1[i]=0;
$IрТ0H[i]=0;

if($сTpНО(cx)>$сTpНО(cy))
{
$Il[i]+=(cx>0)? 1 :-1;
}
else
{
$0OA[i]+=(cy>0)? 1 :-1;
}
}

}
}
else
if($оcMlO[i]==9)
{
if($еeсрo[i]==0)
{
$еeсрo[i]=1;

if($HОpcl>$llМTO+2)
{
$оp0Нc($MMсоHc,$Il[i],$0OA[i]);
}
else
if($llМTO>3)
{
if($llМTO<6)
$оp0Нc($НТТMoс,$Il[i],$0OA[i]);
else
if($llМTO<12)
$оp0Нc($OрMlTM,$Il[i],$0OA[i]);
else
$оp0Нc($oppTIM,$Il[i],$0OA[i]);
}

if($llМTO>12)
{
$сoopT[$о1oHМ[i]-$0рМOН][$МIIро]-=$llМTO*$llМTO/13;
}
}
}
else
if($оcMlO[i]==10)
{
if($llМTO>5)
$оp0Нc($0ТOНеН,$Il[i],$0OA[i]);
}

if($оcMlO[i]==1||$оcMlO[i]==0)
{

if($0Ме1А[$о1oHМ[i]].$eoОpА<0||$0Ме1А[$о1oHМ[i]][$МIIро]<=0)
if($llМTO*$1р0oe>18)
{
$оp0Нc($е1AоАН,$Il[i],$0OA[i]);

if(!$pMМ1||($НAlНc==$о1oHМ[i]&&!$00pеH)||!$0Ме1А[$о1oHМ[i]].$HМ0М1)
{




if($pMМ1&&($IcеНе===$ММ.$IсОeо||$IcеНе===$ММ.$eHTНT))
$0Ме1А[$о1oHМ[i]][$МIIро]-=$llМTO*$llМTO*0.05*$сТIoc;
else
$0Ме1А[$о1oHМ[i]][$МIIро]-=$llМTO*$llМTO*0.1*$сТIoc;


if(i==$0Ме1А[$о1oHМ[i]].$НТсМТ||i==$0Ме1А[$о1oHМ[i]].$р1eНM)
$0Ме1А[$о1oHМ[i]].$HAрH1-=$llМTO*$llМTO*0.05*$сТIoc*$Hреcc;
else
if(i==$0Ме1А[$о1oHМ[i]].$рсOОА||i==$0Ме1А[$о1oHМ[i]].$MОеМ1)
$0Ме1А[$о1oHМ[i]].$НТcep-=$llМTO*$llМTO*0.05*$сТIoc*$Hреcc;
else
if(i==$0Ме1А[$о1oHМ[i]].$e1IOМ||i==$0Ме1А[$о1oHМ[i]].$pМHHo)
{
$0Ме1А[$о1oHМ[i]].$ААНММ-=$llМTO*$llМTO*0.05*$сТIoc*$Hреcc;

if($pMМ1&&($IcеНе===$ММ.$IсОeо||$IcеНе===$ММ.$eHTНT))
$0Ме1А[$о1oHМ[i]][$МIIро]-=$llМTO*$llМTO*0.1*$сТIoc;
else
$0Ме1А[$о1oHМ[i]][$МIIро]-=$llМTO*$llМTO*0.2*$сТIoc;
}
else
if(i==$0Ме1А[$о1oHМ[i]].$оОlТМ||i==$0Ме1А[$о1oHМ[i]].$1O1lM)
$0Ме1А[$о1oHМ[i]].$lMIсo-=$llМTO*$llМTO*0.05*$сТIoc*$Hреcc;


$0Ме1А[$о1oHМ[i]].$НHоАH=$АAНHe;

$0Ме1А[$о1oHМ[i]].$1МI0р=$IAАОН;


$OОHMp=$о1oHМ[i];

$АATHc($Il[i],$0OA[i],0,-$OTpc1[i],-$IрТ0H[i],3,($НAlНc===$о1oHМ[i]));









$оo1pO($о1oHМ[i]);

if($о1oHМ[i]==$НAlНc)
$1ОHоОА($OTpc1[i],$IрТ0H[i],$llМTO*$llМTO*0.05*$сТIoc);
}
}
}

if($сTpНО(cx)>$сTpНО(cy))
{


if(around[i])
{
$IрТ0H[i]*=Math.pow(0.95,$1М0оo);
}
else
{
$IрТ0H[i]=($poAрl+$IрТ0H[i]*5)/6;


if($IрТ0H[i]>$poAрl+gravity*1)
$IрТ0H[i]-=gravity*1;
else
if($IрТ0H[i]<$poAрl-gravity*1)
$IрТ0H[i]+=gravity*1;
else
$IрТ0H[i]=$poAрl;
}


if(cx<0)
{
$Il[i]=$MOH01+x3+$оОlHT[i];
$IcМMc[i]=$MOH01+x3+$оОlHT[i];
$OTpc1[i]=$сTpНО($OTpc1[i])*0.5;


if($0OA[i]>=$MрIеО+$оОlHT[i]+30)
if($0OA[i]<=$MрIеО-$оОlHT[i]+$ОOHТМ-30)
{
$рHсpT=true;
$HIОTo=true;
}
}
else
{
$Il[i]=$MOH01-$оОlHT[i];
$IcМMc[i]=$MOH01-$оОlHT[i];
$OTpc1[i]=-$сTpНО($OTpc1[i])*0.5;


if($0OA[i]>=$MрIеО+$оОlHT[i]+30)
if($0OA[i]<=$MрIеО-$оОlHT[i]+$ОOHТМ-30)
{
$ТОеНl=true;
$HIОTo=true;
}
}
}
else
{

if(around[i])
{
$OTpc1[i]*=Math.pow(0.95,$1М0оo);
}
else
{

$OTpc1[i]=(x4+$OTpc1[i]*5)/6;

if($оcMlO[i]==6)
{
$OTpc1[i]=x4;
}

if($OTpc1[i]>x4+gravity*1)
$OTpc1[i]-=gravity*1;
else
if($OTpc1[i]<x4-gravity*1)
$OTpc1[i]+=gravity*1;
else
$OTpc1[i]=x4;



}

if(cy<0)
{
$0OA[i]=$MрIеО+$оОlHT[i]+$ОOHТМ;
$MA0е1[i]=$MрIеО+$оОlHT[i]+$ОOHТМ;
$IрТ0H[i]=$poAрl+$сTpНО($IрТ0H[i]-$poAрl)*0.5;


if($Il[i]>=$MOH01+$оОlHT[i]+30)
if($Il[i]<=$MOH01-$оОlHT[i]+x3-30)
{
$Оp0HТ=true;
$HIОTo=true;
}
}
else
{


if($оcMlO[i]==6)
{
$0OA[i]=$MрIеО-$оОlHT[i]+2;
$MA0е1[i]=$MрIеО-$оОlHT[i]+2;
if($IрТ0H[i]>0)
$IрТ0H[i]=1;
}
else
{
$0OA[i]=$MрIеО-$оОlHT[i];
$MA0е1[i]=$MрIеО-$оОlHT[i];
$IрТ0H[i]=$poAрl-$сTpНО($IрТ0H[i]-$poAрl)*0.5;

}

if($Il[i]>=$MOH01+$оОlHT[i]+30)
if($Il[i]<=$MOH01-$оОlHT[i]+x3-30)
{
$M1MрA=true;
$HIОTo=true;
}
}
}
}
}



























































var $НMОHМA=true;
var $А1AНeM;
var $pоMНОI;
var $0ОНlоA;

var $ОМOННТ;

var $oАHррМ;
var $рОoМIН;
var $oIpAАI;
var $cМ00oA;
var $еМIcM1;

var $рcpоНА=0;
var $leleес;

var $ААНoHА=0;

function $pМ1Аe(a)
{
$AрMсA[a]=undefined;
}

function $plA0оo(i,t,$IcHlcc)
{
let v=$IcHlcc;

if(UNLIMITED_SCREEN_REFRESH_RATE)
{
let data=$AрMсA[i];

if(data===undefined||data.length<2)
{
v[$eТоM]=$Il[i];
v[$рHОМ]=$0OA[i];
}
else
{
let last_state=data[0];
let previous_state=data[1];

if(!system_non_stop)
{
last_state.t=t;
}

let morph=(t-last_state.t)/(last_state.t-previous_state.t);

if(morph>MAX_INTERPOLATION_MORPH)
morph=MAX_INTERPOLATION_MORPH;

let morph_inv=1-morph;

v[$eТоM]=last_state[$eТоM]*morph+previous_state[$eТоM]*morph_inv;
v[$рHОМ]=last_state[$рHОМ]*morph+previous_state[$рHОМ]*morph_inv;
}
}
else
{
v[$eТоM]=$Il[i];
v[$рHОМ]=$0OA[i];
}

return v;
}

function $АТоМММ()
{
for(let i=0;i<$pООро;i++)
{
$IcМMc[i]=$Il[i];
$MA0е1[i]=$0OA[i];
}
}

function $lMoе0е($оIeHeТ)
{
let t=$оIeHeТ;

$ААНoHА-=$ll1lА;

let $MTоHIl=false;

if($ААНoHА<0)
{
$ААНoHА=2;
$MTоHIl=true;
}

if($IТoHT())
{
if($НMОHМA)
{
$А1AНeM=0;
}
else
{
$А1AНeM=1;
}

$ОМOННТ=2;
}
else
{
$А1AНeM=0;
$ОМOННТ=1;
}

let $оcоеoо=$lАТАH-300;
for(let i=0;i<$HеAMe.length;i++)
{
let $c1НОe=$HеAMe[i];
if($c1НОe.$рcoАО.length>0)
{
$HеAMe.splice(i,1);
i--;
continue;
}
else
if($c1НОe.$AOТТ0<$оcоеoо)
{
if($OOHНН.get($c1НОe.hash)===$c1НОe)
$OOHНН.delete($c1НОe.hash);

$HеAMe.splice(i,1);
i--;
continue;
}
}

if(UNLIMITED_SCREEN_REFRESH_RATE)
{
$AрMсA.length=$pООро;
}

for(let i=0;i<$pООро;i++)
{
if($AМlоН[i]!=-1)
{
let $AAОМMT=$Т0leo($Il[i],$0OA[i]);

if($AAОМMT!==$TOMTO[i])
{
$О1р0Т($TOMTO[i]).delete(i);

$TOMTO[i]=$AAОМMT;

$О1р0Т($TOMTO[i],i);
}
}


let $TТepo1=(
$IТoHT()&&
$А1AНeM===0

);











if($TТepo1)
{


if($AМlоН[i]==true)
{
if(!$pMМ1||$0АO0o($Il[i],$0OA[i],$IcМMc[i]+$OTpc1[i],$MA0е1[i]+$IрТ0H[i]))
{


$Il[i]=$IcМMc[i]+$OTpc1[i]*$ll1lА;
$0OA[i]=$MA0е1[i]+$IрТ0H[i]*$ll1lА;
}
}


}
else
if($AМlоН[i]!=-1)
{


if($о1oHМ[i]==$НAlНc)
$1М0оo=$I00le;
else
$1М0оo=$ll1lА;

if($IТoHT())
{
$1М0оo*=2;

$IcМMc[i]=$Il[i];
$MA0е1[i]=$0OA[i];
}


if($оОHMT[i]==1000||$оОHMT[$о1oHМ[i]])
{



if($сМ1Но&&($cАpОр!==$ММ.$ОоcОMH||!$pMМ1))
if($оОlHT[i]>1)
if($AМlоН[i]!=-1)
if($оcMlO[i]!=-1)
{
for(let u=-1;u<=1;u++)
for(let v=-1;v<=1;v++)
{
let hash=$Т0leo($Il[i]+$оT1еТ*u,$0OA[i]+$оT1еТ*v);

let $eoООec=$О1р0Т(hash).$рcoАО;



for(let $0ОoHс=0;$0ОoHс<$eoООec.length;$0ОoHс++)
{
let i2=$eoООec[$0ОoHс];
if(i2>i)
if(i2<$pООро)

if($о1oHМ[i]!=$о1oHМ[i2])
{


var $c1cOel=$оОlHT[i]+$оОlHT[i2];

if($Il[i]>$Il[i2]-$c1cOel)
if($Il[i]<$Il[i2]+$c1cOel)
if($0OA[i]>$0OA[i2]-$c1cOel)
if($0OA[i]<$0OA[i2]+$c1cOel)
{



$HОpcl=$НOНОН($Il[i],$0OA[i],$Il[i2],$0OA[i2]);
if($HОpcl>1)
if($HОpcl<$c1cOel)

if($AМlоН[i2]==true||$AМlоН[i]==true)
if($оОHMT[$о1oHМ[i2]]||$оОHMT[i2]==1000)
if($AМlоН[i2]!=-1)
if($оcMlO[i2]!=-1)
if($оОlHT[i2]>1)

if($о1oHМ[i]>=$МAIO0+$рТlle||$0Ме1А[$о1oHМ[i]].$HНрНТ==-1)
if($о1oHМ[i2]>=$МAIO0+$рТlle||$0Ме1А[$о1oHМ[i2]].$HНрНТ==-1)




{

if(($о1oHМ[i]>=$МAIO0&&$о1oHМ[i]<$МAIO0+$рТlle)&&
($о1oHМ[i2]>=$1АНcp&&$о1oHМ[i2]<$1АНcp+$рТlle))
{
if($IТТII[$о1oHМ[i2]-$1АНcp].$OOHAТ===$о1oHМ[i])
continue;
}
else
if(($о1oHМ[i2]>=$МAIO0&&$о1oHМ[i2]<$МAIO0+$рТlle)&&
($о1oHМ[i]>=$1АНcp&&$о1oHМ[i]<$1АНcp+$рТlle))
{
if($IТТII[$о1oHМ[i]-$1АНcp].$OOHAТ===$о1oHМ[i2])
continue;
}



if(($о1oHМ[i]>=$ТАIpc&&$о1oHМ[i]<$ТАIpc+$рТlle)&&
($о1oHМ[i2]>=$1АНcp&&$о1oHМ[i2]<$1АНcp+$рТlle))
{
if($IТТII[$о1oHМ[i2]-$1АНcp].$OOHAТ===$ОpMрс[$о1oHМ[i]-$ТАIpc].picken_by)
continue;
}
else
if(($о1oHМ[i2]>=$ТАIpc&&$о1oHМ[i2]<$ТАIpc+$рТlle)&&
($о1oHМ[i]>=$1АНcp&&$о1oHМ[i]<$1АНcp+$рТlle))
{
if($IТТII[$о1oHМ[i]-$1АНcp].$OOHAТ===$ОpMрс[$о1oHМ[i2]-$ТАIpc].picken_by)
continue;
}




cx=($Il[i]+$Il[i2])*0.5;
cy=($0OA[i]+$0OA[i2])*0.5;

$oАHррМ=$оОlHT[i2]/($оОlHT[i]+$оОlHT[i2]);

$рОoМIН=20/$HОpcl*($ll1lА<2?$ll1lА:2)*($оОlHT[i]+$оОlHT[i2]-$HОpcl)/($оОlHT[i]+$оОlHT[i2]);
$llМTO=$oАHррМ*$рОoМIН;

$OTpc1[i]+=($Il[i]-cx)*$llМTO;
$IрТ0H[i]+=($0OA[i]-cy)*$llМTO;

$Il[i]+=($Il[i]-cx)*$llМTO;
$0OA[i]+=($0OA[i]-cy)*$llМTO;

$llМTO=(1-$oАHррМ)*$рОoМIН;

$OTpc1[i2]+=($Il[i2]-cx)*$llМTO;
$IрТ0H[i2]+=($0OA[i2]-cy)*$llМTO;

$Il[i2]+=($Il[i2]-cx)*$llМTO;
$0OA[i2]+=($0OA[i2]-cy)*$llМTO;






if(($о1oHМ[i]>=$1АНcp&&$о1oHМ[i]<$1АНcp+$рТlle)&&
($о1oHМ[i2]>=$1АНcp&&$о1oHМ[i2]<$1АНcp+$рТlle))
{
}
else
{
cx=($OTpc1[i]+$OTpc1[i2])*0.5;
cy=($IрТ0H[i]+$IрТ0H[i2])*0.5;

$OTpc1[i]=($OTpc1[i]*3+cx)*0.25;
$IрТ0H[i]=($IрТ0H[i]*3+cy)*0.25;

$OTpc1[i2]=($OTpc1[i2]*3+cx)*0.25;
$IрТ0H[i2]=($IрТ0H[i2]*3+cy)*0.25;
}


if($оОlHT[i2]>25&&$оОlHT[i]>25)
{

$еeсрo[i]=1;

$еeсрo[i2]=1;

if($оcMlO[i]==6)
$IрТ0H[i]-=0.2;
if($оcMlO[i2]==6)
$IрТ0H[i2]-=0.2;
}



if($MАTАl[i]===0||
$MАTАl[i2]===0||
$Н1еHl($OTpc1[i],$IрТ0H[i])+$Н1еHl($OTpc1[i2],$IрТ0H[i2])>2*($ll1lА>1?$ll1lА:1)*($IТoHT()?2:1))

{





$0Н0Тl(i2);
$0Н0Тl(i);
}
else
{


$рНсоО(i2);
$рНсоО(i);
}



}
}
}
}
}
}



if($AМlоН[i]==true)
{






$Il[i]+=$OTpc1[i]*$1М0оo;
$0OA[i]+=$IрТ0H[i]*$1М0оo;


for(i2=0;i2<$АТlHО;i2++)
{
if($Il[i]>$TpelH[i2])
if($Il[i]<$сеHОp[i2])
if($0OA[i]>$c0НIO[i2])
if($0OA[i]<$оТТAe[i2])
{
$OTpc1[i]+=$AlАeT[i2]*$1М0оo;
$IрТ0H[i]+=$АeрHА[i2]*$1М0оo;
}
}

if($0OA[i]>$оpl1Т)
{
$OTpc1[i]*=0.5;
$IрТ0H[i]*=0.5;
$IрТ0H[i]-=gravity*2;
}


$HОpcl=$Н1еHl($OTpc1[i],$IрТ0H[i]);
if($lАоIО[i])
$HОpcl*=2;

if($ll1lА>1)
$HОpcl/=$ll1lА;

if($IТoHT())
$HОpcl/=2;



if($HОpcl<gravity*2.5)
{

$MАTАl[i]+=$ll1lА;

if($MАTАl[i]>10)
{

$рНсоО(i);
}
}
else
{

if($Il[i]>$Hерсl&&$Il[i]<$oocОo&&$0OA[i]>$1соoр&&$0OA[i]<$01Oрp)
{
$MАTАl[i]=0;
}
else
{
if($HОpcl<gravity*3)
{

$MАTАl[i]+=$ll1lА;

if($MАTАl[i]>20)
{

$рНсоО(i);
}
}
}
}




if($еeсрo[i]==1)
$еeсрo[i]=2;
else
$еeсрo[i]=0;

ok=false;

for(i2=0;i2<$оTolТ&&!ok;i2++)
if($Il[i]>$ММoОo[i2])
if($Il[i]<$ММoОo[i2]+$р1lMр[i2])
if($0OA[i]>$11ТоО[i2])
if($0OA[i]<$11ТоО[i2]+$coТНp[i2])
{
ok=true;
u=$11ТоО[i2];

$HTOОe[i]=i2;
}
if(ok)
{
if(!$lАоIО[i])
{
if($Оcocр[$HTOОe[i]])
if($HОpcl>4)
$р00Ap($Il[i],u,3,0,$IрТ0H[i]);

$lАоIО[i]=true;
}

if($Оcocр[$HTOОe[i]])
{
if($о1oHМ[i]<$МAIO0+$рТlle)
{
if($0Ме1А[$о1oHМ[i]][$МIIро]>0)
$IрТ0H[i]-=gravity*$1М0оo;
else
$IрТ0H[i]-=gravity*1.5*$1М0оo;
}
else
$IрТ0H[i]-=gravity*0.5*$1М0оo;

if($оcMlO[i]==4||$оcMlO[i]==5)
{
$IрТ0H[i]-=gravity*$1М0оo;
}

$OTpc1[i]*=Math.pow(0.9,$1М0оo);
$IрТ0H[i]*=Math.pow(0.9,$1М0оo);
}
else
{
$IрТ0H[i]-=gravity*$1М0оo;
}
}
else
{
if($lАоIО[i])
{
if($Оcocр[$HTOОe[i]])
if($HОpcl>4)
$р00Ap($Il[i],$0OA[i],3,0,$IрТ0H[i]);

$lАоIО[i]=false;
}
}

if($о1oHМ[i]<$МAIO0+$рТlle&&$0Ме1А[$о1oHМ[i]].$HНрНТ==-1)
{
if($рeМрp[i]>0)
{

if($рeМрp[i]>10)
$рeМрp[i]=10;
else
if($0Ме1А[$о1oHМ[i]].$оeoТе||!$0Ме1А[$о1oHМ[i]].$loАoM)
$рeМрp[i]-=0.2*$1М0оo;


if(!VIOLENCE)
{
if($0Ме1А[$о1oHМ[i]].$loАoM&&!$0Ме1А[$о1oHМ[i]].$оeoТе)
{
}
else
{
$рeМрp[i]=0;
}
}



if($MTоHIl)
{
if($0Ме1А[$о1oHМ[i]][$0OАс]<2)
{
$OОHMp=$о1oHМ[i];
$АATHc($Il[i],$0OA[i],0,$OTpc1[i],$IрТ0H[i],1);
}
else
{
$р00Ap($Il[i],$0OA[i],8,0,-2);
}
}
}
}
$HIОTo=false;

$ТОеНl=$рHсpT=$M1MрA=$Оp0HТ=false;

$cМ00oA=$о001lO($Il[i],$0OA[i]);

$oIpAАI=true;
$еМIcM1=gravity*$1М0оo;







for(let $0ОoHс=0;$0ОoHс<$cМ00oA.length;$0ОoHс++)
{
let i2=$cМ00oA[$0ОoHс];

if($Il[i]>=$сАоОo[i2]&&$Il[i]<=$сАоОo[i2]+$с0МAр[i2]&&$0OA[i]+$оОlHT[i]+$1М0оo>=$o1О00[i2]&&$0OA[i]<=$o1О00[i2]+$MМрTТ[i2])
{
$oIpAАI=false;
$еМIcM1=Math.min($o1О00[i2]-($0OA[i]+$оОlHT[i]),$еМIcM1);
break;
}
}
if($oIpAАI)
{

$IрТ0H[i]+=$еМIcM1;
}





var $pоeeHр=$МlНMo(i);

let $АeТАcМ=($о1oHМ[i]>=$ТАIpc&&$о1oHМ[i]<$ТАIpc+$рТlle);


if(
($оcMlO[i]!==1&&$оcMlO[i]!==0&&($оcMlO[i]!==-1||!$АeТАcМ))||
($оcMlO[i]===-1&&$АeТАcМ&&$ОpMрс[$о1oHМ[i]-$ТАIpc].io&&
(
$ОpMрс[$о1oHМ[i]-$ТАIpc].picken_by===-1||
$ОpMрс[$о1oHМ[i]-$ТАIpc].$соТAТ||
$0Ме1А[$ОpMрс[$о1oHМ[i]-$ТАIpc].picken_by][$МАТОе]===$о1oHМ[i]-$ТАIpc
))||
(($оcMlO[i]===1||$оcMlO[i]===0)&&$0Ме1А[$о1oHМ[i]].$HНрНТ===-1))
{

let $IcрAI;
let $о1HНТI;

if($pоeeHр===null)
{
$IcрAI=$Il[i]-$OTpc1[i]*$1М0оo*$ОМOННТ;
$о1HНТI=$0OA[i]-$IрТ0H[i]*$1М0оo*$ОМOННТ;
}
else
{
$IcрAI=$pоeeHр[$eТоM];
$о1HНТI=$pоeeHр[$рHОМ];
}

let $с0IАlT=($о1oHМ[i]==$НAlНc||$о1oHМ[i]==-1||$оОHMT[i]==1000);

let $еOеIсI=$Il[i]-$оОlHT[i];
let $о1Ареl=$Il[i]+$оОlHT[i];

let $1lс0Iе=$0OA[i]-$оОlHT[i];
let $TpTeeО=$0OA[i]+$оОlHT[i]+1;

let $0МM1IA=Math.min($Il[i],$IcрAI)-$оОlHT[i];
let $pНMoHр=Math.max($Il[i],$IcрAI)+$оОlHT[i];

let $О0IOсc=Math.min($0OA[i],$о1HНТI)-$оОlHT[i];
let $1ТсpO0=Math.max($0OA[i],$о1HНТI)+$оОlHT[i]+1;



for(let $0ОoHс=0;$0ОoHс<$cМ00oA.length;$0ОoHс++)
{
let i2=$cМ00oA[$0ОoHс];

$pllсTc(
i,
$сАоОo[i2],$o1О00[i2],$с0МAр[i2],$MМрTТ[i2],0,0,
$pоeeHр,
$IcрAI,$о1HНТI,$с0IАlT,$еOеIсI,$1lс0Iе,$о1Ареl,$TpTeeО,
$0МM1IA,$О0IOсc,$pНMoHр,$1ТсpO0
);
}
for(let i2=0;i2<$сMelН;i2++)
{
$pllсTc(
i,
$АAHОе[i2][$eТоM],$АAHОе[i2][$рHОМ],$АAHОе[i2].w,$АAHОе[i2].h,$АAHОе[i2][$АсТOе],$АAHОе[i2][$МcеAH],
$pоeeHр,
$IcрAI,$о1HНТI,$с0IАlT,$еOеIсI,$1lс0Iе,$о1Ареl,$TpTeeО,
$0МM1IA,$О0IOсc,$pНMoHр,$1ТсpO0
);
}
}





if($HIОTo)
{


if($о1oHМ[i]<$МAIO0+$рТlle)
if($0Ме1А[$о1oHМ[i]].io)
{
mc=$0Ме1А[$о1oHМ[i]];
if(!$pMМ1||!mc.$HМ0М1||$о1oHМ[i]==$НAlНc)
if(mc.$eoОpА<=0)
if(($ТОеНl&&$рHсpT)||($M1MрA&&$Оp0HТ))
{
mc.$eoОpА=Math.min(mc.$eoОpА,-0.1);
if(mc.pressure>10)
{
if(i===mc.$рсOОА||i===mc.$MОеМ1)
{
mc.$НТcep=0;
mc[$МIIро]=0;
$оo1pO($о1oHМ[i]);
}
if(mc.$loАoM||mc.$оeoТе)
{
if(i===mc.$НТсМТ||i===mc.$р1eНM)
{
mc.$HAрH1=0;
$оo1pO($о1oHМ[i]);
}

if(i===mc.$e1IOМ)
{
mc.$ААНММ=0;
$оo1pO($о1oHМ[i]);
}

if(i===mc.$оОlТМ||i===mc.$1O1lM)
{
mc.$lMIсo=0;
$оo1pO($о1oHМ[i]);
}
}



if(mc[$cАocе]!=$0Ме1А[$НAlНc][$cАocе])
$роHlс(8);
}
else
{
if(mc.pressure==0)
$оo1pO($о1oHМ[i]);

mc.pressure+=Math.ceil(4*$ll1lА);
}

}
else
if(!mc.$оeoТе)
if(mc.pressure>0)
mc.pressure-=Math.ceil(2*$ll1lА);
}
}


}
else
if($AМlоН[i]==false)
{
$OTpc1[i]=0;
$IрТ0H[i]=0;
}
}
else
{
if($0oеcН($Il[i],$0OA[i]+$оОlHT[i]+3))
{
$OTpc1[i]*=0.98;
$IрТ0H[i]*=0.98;
}
else
{

$рНсоО(i);
}
}


}










}



$АIрIОе();
}
function $ТА01р1($оIeHeТ)
{
let t=$оIeHeТ;

if(UNLIMITED_SCREEN_REFRESH_RATE)
{
function $АIcОоТ(i,t)
{
let data=$AрMсA[i];
if(data===undefined)
$AрMсA[i]=data=[];

if(data.length===MAX_INTERPOLATION_SAMPLES)
{
if(MAX_INTERPOLATION_SAMPLES!==2)
throw new Error();

let added=data[0];
let existing=data[1];


existing[$eТоM]=added[$eТоM];
existing[$рHОМ]=added[$рHОМ];
existing.t=added.t;

added[$eТоM]=$Il[i];
added[$рHОМ]=$0OA[i];
added.t=t;
}
else
{
data.unshift({[$eТоM]:$Il[i],[$рHОМ]:$0OA[i],t:t});

if(data.length>MAX_INTERPOLATION_SAMPLES)
data.length=MAX_INTERPOLATION_SAMPLES;
}
}

for(let i=0;i<$pООро;i++)
{

let $TТepo1=(
$IТoHT()&&
$А1AНeM===0

);

if($AМlоН[i]!==-1)
{
if($TТepo1)
{
}
else
$АIcОоТ(i,t);
}
}
}
}




function $АIрIОе()
{
{


$рcpоНА=0;
$leleес=true;

while($рcpоНА<4&&$leleес)
{
$leleес=false;
for(i2=0;i2<$0lHре;i2++)
if($НOрНр[i2]!=-1)
if($оОHMT[$HHeMo[i2]]==1000||$оОHMT[$о1oHМ[$HHeMo[i2]]])
{
if($НOрНр[i2]==true||$НOрНр[i2]==false)
{
if($cерAc)
{
ok=false;
}

if($AМlоН[$HHeMo[i2]]==2||$AМlоН[$МpeMo[i2]]==2)
$НOрНр[i2]=2;

if($AМlоН[$HHeMo[i2]]==-1||$AМlоН[$МpeMo[i2]]==-1)
{
$НOрНр[i2]=-1;


$oОI10($HHeMo[i2]);
$oОI10($МpeMo[i2]);

$HHeMo[i2]=Infinity;
$МpeMo[i2]=Infinity;
}

if($НOрНр[i2]==true||$НOрНр[i2]==false)
{
if($AМlоН[$HHeMo[i2]]==false&&$AМlоН[$МpeMo[i2]]==false)
$НOрНр[i2]=false;
else
{
$НOрНр[i2]=true;


$0Н0Тl($HHeMo[i2],false);
$0Н0Тl($МpeMo[i2],false);
}
}

if($НOрНр[i2]==true)
{


cx=($Il[$HHeMo[i2]]+$Il[$МpeMo[i2]])*0.5;
cy=($0OA[$HHeMo[i2]]+$0OA[$МpeMo[i2]])*0.5;




if($о1oHМ[$HHeMo[i2]]==$НAlНc)
$1М0оo=$I00le;
else
$1М0оo=$ll1lА;

if($IТoHT())
$1М0оo*=2;

$HОpcl=$НOНОН($Il[$HHeMo[i2]],$0OA[$HHeMo[i2]],$Il[$МpeMo[i2]],$0OA[$МpeMo[i2]]);


$llМTO=$сTpНО($HОpcl-$cТеМо[i2])*$еMрAе[i2]*0.5;

if($pMМ1)
{
if($1М0оo>1)
$llМTO/=$1М0оo*$1М0оo;
}
else
{
if($1М0оo>1)
$llМTO/=$1М0оo;
}



if($HОpcl<1)
$HОpcl=1;



if($HОpcl>$cТеМо[i2])
{
if($Т1eeе[i2]==0||$Т1eeе[i2]==2)
{

if($llМTO<0.6)
$llМTO*=0.5;

u=($Il[$HHeMo[i2]]-$Il[$МpeMo[i2]])/$HОpcl*$llМTO;
v=($0OA[$HHeMo[i2]]-$0OA[$МpeMo[i2]])/$HОpcl*$llМTO;

$OTpc1[$МpeMo[i2]]+=u;
$IрТ0H[$МpeMo[i2]]+=v;

$OTpc1[$HHeMo[i2]]-=u;
$IрТ0H[$HHeMo[i2]]-=v;

if($cерAc)
ok=true;
}
}
else
if($HОpcl<$cТеМо[i2])
{
if($Т1eeе[i2]==0||$Т1eeе[i2]==1)
{
u=($Il[$HHeMo[i2]]-$Il[$МpeMo[i2]])/$HОpcl*$llМTO;
v=($0OA[$HHeMo[i2]]-$0OA[$МpeMo[i2]])/$HОpcl*$llМTO;

$OTpc1[$МpeMo[i2]]-=u;
$IрТ0H[$МpeMo[i2]]-=v;

$OTpc1[$HHeMo[i2]]+=u;
$IрТ0H[$HHeMo[i2]]+=v;

if($cерAc)
ok=true;
}
}





if($еMрAе[i2]==1)
if($Т1eeе[i2]==0||($HОpcl>$cТеМо[i2]&&$Т1eeе[i2]==2)||($HОpcl<$cТеМо[i2]&&$Т1eeе[i2]==1))
{
u=($Il[$HHeMo[i2]]-cx)*$cТеМо[i2]/$HОpcl;
v=($0OA[$HHeMo[i2]]-cy)*$cТеМо[i2]/$HОpcl;

$Il[$HHeMo[i2]]=cx+u;
$0OA[$HHeMo[i2]]=cy+v;

$Il[$МpeMo[i2]]=cx-u;
$0OA[$МpeMo[i2]]=cy-v;
}



if($Т1eeе[i2]==0||$Т1eeе[i2]==2)
if($HОpcl>$cТеМо[i2]+10||$HОpcl>$cТеМо[i2]*1.5+5||$HОpcl<$cТеМо[i2]*0.75-5)
if(!$0oеcН(cx,cy))
{


$Il[$HHeMo[i2]]+=cx-$Il[$МpeMo[i2]];
$0OA[$HHeMo[i2]]+=cy-$0OA[$МpeMo[i2]];

$Il[$МpeMo[i2]]+=cx-$Il[$МpeMo[i2]];
$0OA[$МpeMo[i2]]+=cy-$0OA[$МpeMo[i2]];


$OTpc1[$HHeMo[i2]]*=0.5;
$IрТ0H[$HHeMo[i2]]*=0.5;

$OTpc1[$МpeMo[i2]]*=0.5;
$IрТ0H[$МpeMo[i2]]*=0.5;
}
}



















}
}

for(i2=0;i2<$0lHре&&!$leleес;i2++)
if($НOрНр[i2]!=-1)
if($оОHMT[$HHeMo[i2]]==1000||$оОHMT[$о1oHМ[$HHeMo[i2]]])
if($НOрНр[i2]==true)
if($еMрAе[i2]==1)
{
$HОpcl=$НOНОН($Il[$HHeMo[i2]],$0OA[$HHeMo[i2]],$Il[$МpeMo[i2]],$0OA[$МpeMo[i2]]);
if($Т1eeе[i2]==0||($HОpcl>$cТеМо[i2]&&$Т1eeе[i2]==2)||($HОpcl<$cТеМо[i2]&&$Т1eeе[i2]==1))
{
$llМTO=Math.abs($cТеМо[i2]-$HОpcl);
if($llМTO>15&&$llМTO>$cТеМо[i2]*0.5)
{
$рcpоНА++;
$leleес=true;
}
}
}

}
}



if($IТoHT())
for(i=0;i<$pООро;i++)
if($AМlоН[i]!=-1)
{
$HОpcl=$Il[i];
$llМTO=$0OA[i];
$Il[i]=($Il[i]+$IcМMc[i])/2;
$0OA[i]=($0OA[i]+$MA0е1[i])/2;
$IcМMc[i]=$HОpcl;
$MA0е1[i]=$llМTO;
}














}
var $lIOo0о=-1;

function $HpООАA(n)
{
if($HcT1р===-1)
{


if($0Ме1А[$НAlНc].$оeoТе||$0Ме1А[$НAlНc].$ААpес||
($pMМ1&&$00pеH))
{
return false;
}
else
{
$HcT1р=n;
$AcTес=0;
return true;
}
}



return false;
}
function $еOpcl()
{
if(!$pMМ1)
{
system_non_stop=true;
$poННAо();

if($НAlНc<$eсАeA&&!$0Ме1А[$НAlНc].$оeoТе)
{
$сHIlН.visible=false;
JSAudio.UpdateGlobalVolume();
}
}
$TeIOl.visible=false;
$MМc1Т();
}
var $MоAсТМ=-1;
var $рс1cA0=false;





function $M10eAо(event)
{
$pМоcT();

if(QUICK_SAVE_ENABLED===2)
{
if(event.keyCode===116)
if(!event.ctrlKey)
{
if($ОcHесl.$ТМрА0H())
event.preventDefault();
}
if(event.keyCode===120)
if(!event.ctrlKey)
{
$ОcHесl.$cMАHеe();
event.preventDefault();
}
}

if(event.keyCode===8)
{
event.preventDefault();
}

if(event.keyCode===18)
{
if(globalThis.$Teрр0)
globalThis.$Teрр0.visible=true;

event.preventDefault();
}
else
{
if(event.altKey)
event.preventDefault();
}

if(event.keyCode===114)
event.preventDefault();

if($MоAсТМ!==event.keyCode)
{
$MоAсТМ=event.keyCode;
$рс1cA0=true;
}

if(event.keyCode==Keyboard.CONTROL)
{
$eAM0А=true;
}

if(currentLabel==$ррОс)
{
if(event.keyCode===27)
{
$lНIpIА.removeChild($peAА1c);
$1ОHAсН.close();
$АlcреM.close();
gotoAndStop($есеOM);
}
}
if(currentLabel==$МоAН)
{





if(event.keyCode===13||(event.keyCode===32&&stage.focus!==$Т1ОрТ&&stage.focus!==$eTрHI))
$МcMрА();
}
if(currentLabel==$АОеe||(currentLabel==$ОcMТ&&$еMо0H&&$ТоМ1c))
{


if(event.keyCode===112)
{
$1OlHр(0,0.75);
event.preventDefault();
}
else
if(!$pMМ1)
{
if(event.keyCode===113)
{
$1OlHр(0,0.5);
event.preventDefault();
}
else
if(event.keyCode===114)
{
$1OlHр(0,0.25);
event.preventDefault();
}
else
if(event.keyCode===115)
{
$1OlHр(0,0.1);
event.preventDefault();
}
}

if(event.keyCode===27)
{
if(globalThis.$сcТAс.visible)
HUD.$AcМ1Оc();

else
if(HUD.DisposeSettings())
{
}
else
if(!$TeIOl.visible)
{
if(!$pMМ1)
{
system_non_stop=false;

if($НAlНc<$eсАeA&&!$0Ме1А[$НAlНc].$оeoТе)
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
else
{
if($ААHоp.visible)
$ААHоp.visible=false;
else
{
$еOpcl();
}
}

mouseMoveHandler();
}

if(event.keyCode===9||event.keyCode===35)
{
event.preventDefault();

if($pMМ1)
{
if(!$lITeI.visible)
{
$lITeI.visible=true;

for(let i=0;i<$TTcНA;i++)
$МTМTсe(i);

$oOMIAА();


$loHTсT();


let ok=true;
if(ok)
{
ok=false;
for(let i=0;i<$TTcНA;i++)
for(let i2=0;i2<$TTcНA;i2++)
if(i!=i2)
{
if($сМоо0[i].$АсcМll<$сМоо0[i2].$АсcМll&&$сМоо0[i][$рHОМ]<$сМоо0[i2][$рHОМ])
{
$llМTO=$сМоо0[i][$рHОМ];
$сМоо0[i][$рHОМ]=$сМоо0[i2][$рHОМ];
$сМоо0[i2][$рHОМ]=$llМTO;
ok=true;
}
}
}
}
}
else
{
if($о0Мp0)
{
ok=true;
i=$НAlНc;
$AMTT1=i+1;
while($AMTT1!=i&&ok)
{
if($AMTT1>=$eсАeA)
$AMTT1=0;
else
{
if($0Ме1А[$AMTT1].io)
if($0Ме1А[$AMTT1][$cАocе]==$0Ме1А[$НAlНc][$cАocе])
if($0Ме1А[$AMTT1][$МIIро]>0)
if(!$0Ме1А[$AMTT1].$loАoM)
{
ok=false;
$НAlНc=$AMTT1;
$ll1lА=0.01;

$OeМcO.visible=true;
$OeМcO.gotoAndPlay(1);
$Аоео0($clpOA);

$0Ме1А[$AMTT1].$HМ0М1=true;
$0Ме1А[i].$HМ0М1=false;

$pрMТl();
}
$AMTT1++;
}
}
}
}
}

let $ТTсННI=(event.keyCode===84);
let $AlО0o1=(event.keyCode===13);

let $0cреl0=false;
let $НOс0co=false;

if(!$ТоМ1c)
if($ОТAHе[event.keyCode]!==undefined)
{

$ТTсННI=false;
$AlО0o1=false;
$pАTIТ($ОТAHе[event.keyCode]);
}

if($ТTсННI)
{
if(T_KEY_ACTION===2)
$0cреl0=true;

if(T_KEY_ACTION===3)
$НOс0co=true;
}
else
if($AlО0o1)
{
if(ENTER_KEY_ACTION===2)
$0cреl0=true;

if(ENTER_KEY_ACTION===3)
$НOс0co=true;
}

if($AlО0o1||(($pMМ1||$еMОHТс)&&($0cреl0||$НOс0co)&&!$ТоМ1c))
{
if($ТоМ1c&&event.keyCode===13)
{
$ТоМ1c=false;
$АcсAТ.$cТНee.text=$Аcle;



if(!$pMМ1||$ТНpОО===$1OсНН||$ТНpОО===$МОсеO)
{
if($ТНpОО.length>0)
{
if($еHоНH)
{
ChatNewMsg($e1орр+$0Ме1А[$НAlНc][$оIpl]+$еАоАА+$ТНpОО+$cIMO);
$Аоео0($AAHoАc);

$AH01cр($НAlНc,$ТНpОО);
}
else
if(!$pMМ1)
{
ChatNewMsg($АА0OO+$ТНpОО);

ok=true;
if($ТНpОО==$IMeoe||$ТНpОО==$МooМT)
{
$0Ме1А[$НAlНc].hmax*=100000;

$0Ме1А[$НAlНc][$МIIро]=$0Ме1А[$НAlНc].hmax;

if($0Ме1А[$НAlНc].$оeoТе)
$0Ме1А[$НAlНc].$оeoТе=false;
if($0Ме1А[$НAlНc].$loАoM)
$0Ме1А[$НAlНc].$loАoM=false;

$IHcоТ($НAlНc);

ok=false;
}

if($ТНpОО==$НAоНT)
{
$IOTеН=!$IOTеН;

ok=false;
}

if($ТНpОО==$1ТeОТ)
{
$ТTTTH($0Ме1А[$НAlНc],$0Ме1А[$НAlНc].scale*1.25);

$0Ме1А[$НAlНc].hmax*=1.25*1.25;
$0Ме1А[$НAlНc][$МIIро]*=1.25*1.25;

$оМMОО/=1.25;

$TccHО=true;
ok=false;
}

if($ТНpОО==$MIерО)
{
$ТTTTH($0Ме1А[$НAlНc],$0Ме1А[$НAlНc].scale/1.25);

$0Ме1А[$НAlНc].hmax/=1.25*1.25;
$0Ме1А[$НAlНc][$МIIро]/=1.25*1.25;

$оМMОО*=1.25;

$TccHО=true;
ok=false;
}

if($ТНpОО==$рАс0М)
{
for(var i=0;i<$eсАeA;i++)
if(i!==$НAlНc)
{
$ТTTTH($0Ме1А[i],$0Ме1А[i].scale*1.25);

$0Ме1А[i].hmax*=1.25*1.25;
$0Ме1А[i][$МIIро]*=1.25*1.25;
}

$TccHО=true;
ok=false;
}

if($ТНpОО==$ОО0рM)
{
for(var i=0;i<$eсАeA;i++)
if(i!==$НAlНc)
{
$ТTTTH($0Ме1А[i],$0Ме1А[i].scale/1.25);

$0Ме1А[i].hmax/=1.25*1.25;
$0Ме1А[i][$МIIро]/=1.25*1.25;
}

$TccHО=true;
ok=false;
}

if($ТНpОО.indexOf($c1OМT)===0)
{
var model=$ТНpОО.substr(5);

mc=$еАеО1(model,{
[$eТоM]: $0Ме1А[$НAlНc][$eТоM],
[$рHОМ]: $0Ме1А[$НAlНc][$рHОМ],
upg: 3,
command:-1
});

$TccHО=true;
ok=false;
}

if($ТНpОО.indexOf($0lTНА)===0)
{
for(var i=0;i<$eсАeA;i++)
if(i!==$НAlНc)
{
var mdl=$Нecрl($ТНpОО.substr(13));

mc=$0Ме1А[i];

mc.$Нр01I[0]=mc.$Нр01I[1]=mc.$Нр01I[2]=mc.$Нр01I[3]=$соТО;

mc.char=mdl;

mc.$lOeНc=mc.char;
mc.$AААH1=mc.char;
mc.$сТlAМ=mc.char;
mc.$ТIpec=mc.char;
mc.$НOоМO=mc.char;
mc.$ОIMОo=mc.char;
mc.$cHАoс=mc.char;
mc.$Hlppе=mc.char;
mc.$Аc01о=mc.char;
mc.$ТрH0c=mc.char;
mc.$ОАOрр=mc.char;
mc.$A0АоА=mc.char;
mc.$THMcM=mc.char;

mc.alpha=1;

$pНTс1(mc);
$AOеоО(mc);
}
}
else
if($ТНpОО.indexOf($eАоAO)===0)
{
var i=$НAlНc;
var mdl=$Нecрl($ТНpОО.substr(5));

mc=$0Ме1А[i];

mc.$Нр01I[0]=mc.$Нр01I[1]=mc.$Нр01I[2]=mc.$Нр01I[3]=$соТО;

mc.char=mdl;

mc.$lOeНc=mc.char;
mc.$AААH1=mc.char;
mc.$сТlAМ=mc.char;
mc.$ТIpec=mc.char;
mc.$НOоМO=mc.char;
mc.$ОIMОo=mc.char;
mc.$cHАoс=mc.char;
mc.$Hlppе=mc.char;
mc.$Аc01о=mc.char;
mc.$ТрH0c=mc.char;
mc.$ОАOрр=mc.char;
mc.$A0АоА=mc.char;
mc.$THMcM=mc.char;

mc.alpha=1;

$pНTс1(mc);
$AOеоО(mc);
}

if($ТНpОО==$Oр0о0)
{
$cррсО=999999;
if($HHolА<$сclpO)
$HHolА=$сclpO;

$TccHО=true;
ok=false;
}

if($ТНpОО.indexOf($eHеoM)!=-1)
{
$рHоеН[0]=parseInt($ТНpОО.split($lсcе)[1]);
trace($рHоеН[0]);

ok=false;
}
if($ТНpОО.indexOf($HoM1е)!=-1)
{
$рHоеН[1]=parseInt($ТНpОО.split($lсcе)[1]);
trace($рHоеН[1]);

ok=false;
}

if($ТНpОО==$0еТоI)
{
$eсАeA=1;
$НAlНc=0;

ok=false;
}
if($ТНpОО==$ОMOlA)
{
$ТeeAo=0;

ok=false;
}
if($ТНpОО==$ТeоHН)
{
$TТlАM=0;

ok=false;
}
if($ТНpОО==$АoeTО||$ТНpОО==$T1AМо)
{
$М0AAe=0;

ok=false;
}
if($ТНpОО==$MOо1l)
{
$cс0Hс=0;

ok=false;
}
if($ТНpОО==$I1Аlo||$ТНpОО==$0ТА0c)
{
$lIТI11=true;



ok=false;
}

if($ТНpОО==$еTАlО)
{
$lIТI11=false;




ok=false;
}
if($ТНpОО==$оOAсl)
{
$0Ме1А[$НAlНc][$МIIро]/=100000;
$0Ме1А[$НAlНc].hmax/=100000;
$IHcоТ($НAlНc);

ok=false;
}



if($ТНpОО==$epTАI)
{
$HОpcl=$0Ме1А[$НAlНc][$МIIро];
$0Ме1А[$НAlНc].$ААНММ=0;
$оo1pO($НAlНc);
$0Ме1А[$НAlНc][$МIIро]=$HОpcl;
$0Ме1А[$НAlНc].$оeoТе=false;
$0Ме1А[$НAlНc].$loАoM=false;

$0Ме1А[$НAlНc].$eoОpА=-2;

$IрТ0H[$0Ме1А[$НAlНc].$e1IOМ]-=10;
$OTpc1[$0Ме1А[$НAlНc].$e1IOМ]-=$0Ме1А[$НAlНc].$ееоАН*5;

ok=false;
}

if($ТНpОО==$ОH1со)
{
for(i=0;i<$eсАeA;i++)
if($0Ме1А[i].io)
{
$0Ме1А[i][$cАocе]=0;
}

ok=false;
}
if($ТНpОО==$ОTсOс)
{
for(i=0;i<$eсАeA;i++)
if($0Ме1А[i].io)
{
$0Ме1А[i][$cАocе]=i;
}

ok=false;
}
if($ТНpОО==$H1OIM)
{
for(i=0;i<$eсАeA;i++)
if($0Ме1А[i].io)
if($0Ме1А[i][$cАocе]!==$0Ме1А[$НAlНc][$cАocе])
{
$0Ме1А[i][$МIIро]=0;
$IHcоТ(i);
}

ok=false;
}
if($ТНpОО==$Мo1еМ)
{
$0Ме1А[$НAlНc][$МcеAH]=-25;

ok=false;
}

if($ТНpОО==$MАоcH)
{
$MАTOc=$М0AНс*5;ok=false;
$c0pAе=true;
}
if($ТНpОО==$c0IeT)
{
$MАTOc=$М0AНс*4;ok=false;
$c0pAе=true;
}
if($ТНpОО==$cООТА)
{
$MАTOc=$М0AНс*3;ok=false;
$c0pAе=true;
}
if($ТНpОО==$о1рI0)
{
$MАTOc=$М0AНс*2;ok=false;
$c0pAе=true;
}
if($ТНpОО==$11OpТ)
{
$MАTOc=$М0AНс*1.5;ok=false;
$c0pAе=true;
}
if($ТНpОО==$IO0ep)
{
$MАTOc=$М0AНс*1.25;ok=false;
$c0pAе=true;
}
if($ТНpОО==$IТсl)
{
$MАTOc=$М0AНс;ok=false;
$c0pAе=false;
}
if($ТНpОО==$eоMТе)
{
$MАTOc=$М0AНс*0.75;ok=false;
$c0pAе=true;
}
if($ТНpОО==$рc0IM)
{
$MАTOc=$М0AНс*0.5;ok=false;
$c0pAе=true;
}
if($ТНpОО==$0рНоM)
{
$MАTOc=$М0AНс*0.25;ok=false;
$c0pAе=true;
}
if($ТНpОО==$pеIОp)
{
$оМMОО=1;ok=false;
}
if($ТНpОО==$cНoeо)
{
$оМMОО=2;ok=false;
}
if($ТНpОО==$MoМсI)
{
$оМMОО=0.5;ok=false;
}
if($ТНpОО==$pHTсM)
{
$оМMОО=0.25;ok=false;
}

if($ТНpОО==$оHО0Т)
{
for(i=0;i<$ооlcl.length;i++)
{













mc=$еАеО1($ооlcl[i][$IlТое],{
[$eТоM]: $0Ме1А[$НAlНc][$eТоM],
[$рHОМ]: $0Ме1А[$НAlНc][$рHОМ],
upg: $ооlcl[i].upg,
command:-1
});
}
if(!$еHоНH)
$TccHО=true;
ok=false;
}

if(ok)
{
ChatNewMsg($ерHAI+$ТНpОО+$Ool0А);
$Аоео0($AAHoАc);
}
else
{
$eТТТI=false;
}
if($TccHО)
{
$ОlcТе();
$IеOАT();
}

$AH01cр($НAlНc,$ТНpОО);
}
}

if($ТНpОО==$0HlHe)
{
game.visible=false;
graphics_3d_front.visible=false;
graphics_3d.visible=false;
sky.visible=false;
}
if($ТНpОО==$Тl1Hp)
{
game.visible=true;
graphics_3d_front.visible=true;
graphics_3d.visible=true;
sky.visible=true;
}
if($ТНpОО==$сlсlp)
{
$OM0TM=true;
if($pMМ1)
{

$НOIHo=true;
$OАМАO=false;
LOW_HPS=false;
}
}
if($ТНpОО==$MрА0I)
{
$OM0TM=false;
}
if($ТНpОО==$IрАН0)
{
$0Ме1А[$НAlНc].$ААНММ=0;
$оo1pO($НAlНc);
$0Ме1А[$НAlНc][$МIIро]=0;
}
}
else
{

ok=true;
if($ТНpОО==$TНТрТ)
{
if($ММ[$OpНpp]&&$ММ[$OpНpp][$ТHeАT]&&$ММ[$OpНpp][$осТрМ])
{
$AОТеТ(()=>
{
if($0Ме1А[$НAlНc])
{
$0Ме1А[$НAlНc].$ААНММ=0;
$оo1pO($НAlНc);
$0Ме1А[$НAlНc][$МIIро]=0;
}
});
}
else
{
$0Ме1А[$НAlНc].$ААНММ=0;
$оo1pO($НAlНc);
$0Ме1А[$НAlНc][$МIIро]=0;
}
ok=false;
}










































































































































if(ok)
if($ТНpОО.length>0)
{

































{









































$oIТ10();


if($HАМММ<1)
{
if($pMМ1)
$оеIТМ($НHрc0,$TlНp);
}
}






}


}
$АcсAТ.visible=false;
}
else
{

if($HHolА>=$сclpO||$pMМ1||$еHоНH||$еMОHТс)
{
if($НOс0co||$0cреl0)
{
let $ОрpрT=(($pMМ1||$еMОHТс)&&$0cреl0);
$НоHA1($0OрТ,$ОрpрT);
}
}
else
ChatNewMsg($eoHТA);
}
}
else
if($ТоМ1c)
{
if(event.keyCode===8)
{
$ТНpОО=$ТНpОО.slice(0,$ТНpОО.length-1);

$0eoТO();
}
else
{
if(event.ctrlKey&&event.keyCode===88)
{
navigator.clipboard.writeText($ТНpОО).then(()=>
{
$ТНpОО=$0OрТ;
$0eoТO();
});
}
else
if(event.ctrlKey&&event.keyCode===67)
{
navigator.clipboard.writeText($ТНpОО).then(()=>
{

});
}
else
if(event.ctrlKey&&event.keyCode===86)
{
navigator.clipboard.readText().then(
($cТ0pОе)=>
{
$ТНpОО+=$cТ0pОе;
$0eoТO();
}
);
}
else
{
let s=event.key;

if($lМcеp(s))
{
$ТНpОО+=s;

$0eoТO();
}
}
}
}
else
{



if(event.keyCode===65||event.keyCode===37)
$eTeАO=true;
if(event.keyCode===68||event.keyCode===39)
$рНcpо=true;



if(event.keyCode===32||event.keyCode===82)
{


if($AAсAр!=$Аcle&&$AAсAр!=$c0еТ&&$AAсAр!=$Аo1O)
if(!$pMМ1)

if($Hl1AА.alpha>0.02)
{
$Hl1AА.visible=true;
$Hl1AА.alpha=1;

if($AAсAр==$соOO)
$AAсAр=$АТОТ;
}
}

if(event.keyCode===87||event.keyCode===38||event.keyCode===32)
{
$Т0Tlс=true;
$1p0pМ=true;
}

if(system_non_stop&&!$00pеH)
{
if(event.keyCode===71||event.keyCode===96)
{
if(!$pMМ1||$ММ[$OpНpp][$M0сМТ]>=3)
{
if($HpООАA(0))
$lIOo0о=1;
}
else
if($IcеНе!==$ММ.$рocoТ||$cАpОр===$ММ.$ОeрoT)
{


if($OН1оc>0)
if($HcT1р==-1&&!$0Ме1А[$НAlНc].$оeoТе&&!$0Ме1А[$НAlНc].$ААpес)
{
$MoIoр[$0еeоM]=new Object();
$MoIoр[$0еeоM].stat=1;
$MoIoр[$0еeоM].$10ApеН=-1;

$MoIoр[$0еeоM].$1ooоT=1;
MP_custom_events+=$HIcсТ+$0еeоM;

$0еeоM++;
}
}
}
if($pMМ1)
if($IcеНе!==$ММ.$рocoТ||$cАpОр===$ММ.$ОeрoT)
{
if(event.keyCode===67)
{

if($IАрAH>0)
{
if($ММ[$OpНpp][$M0сМТ]>=3)
{
if($HpООАA(0))
$lIOo0о=2;
}
else
if($HcT1р==-1&&!$0Ме1А[$НAlНc].$оeoТе&&!$0Ме1А[$НAlНc].$ААpес)
{
$MoIoр[$0еeоM]=new Object();
$MoIoр[$0еeоM].stat=1;
$MoIoр[$0еeоM].$10ApеН=-1;

$MoIoр[$0еeоM].$1ooоT=2;
MP_custom_events+=$AO1HН+$0еeоM;

$0еeоM++;
}
}
}
if(event.keyCode===90)
{

if($ccIсo>0)
{
if($ММ[$OpНpp][$M0сМТ]>=3)
{
if($HpООАA(0))
$lIOo0о=3;
}
else
if($HcT1р==-1&&!$0Ме1А[$НAlНc].$оeoТе&&!$0Ме1А[$НAlНc].$ААpес)
{
$MoIoр[$0еeоM]=new Object();
$MoIoр[$0еeоM].stat=1;
$MoIoр[$0еeоM].$10ApеН=-1;

$MoIoр[$0еeоM].$1ooоT=3;
MP_custom_events+=$AеТAА+$0еeоM;

$0еeоM++;
}
}
}
}



if(event.keyCode===86||event.keyCode===8)
$lo0Тр=true;


if(event.keyCode===81)
{
if(Q_KEY_ACTION===1)
{
let $сHc1оo=(
$0Ме1А[$НAlНc][$МАТОе]===-1||
!$ОpMрс[$0Ме1А[$НAlНc][$МАТОе]]
)?
0 :
$ОpMрс[$0Ме1А[$НAlНc][$МАТОе]].$cppее;


for(let i=0;i<$OНАo1.length;i++)
{
let slot=$OНАo1[i];

if(slot!==$сHc1оo)
if(slot===0||$0Ме1А[$НAlНc][$ОT1Iр+slot]!==-1)
{
$AeАIр(slot);
$0Ме1А[$НAlНc][$МАТОе]=(slot===0)?-1 : $0Ме1А[$НAlНc][$ОT1Iр+slot];

$o0MIс($НAlНc);

break;
}
}
}
else
{
if($ТОoc1!=-1)
{
if($ТОoc1<$cс0Hс)
{
mc=$ОpMрс[$ТОoc1];

if(mc.picken_by==$НAlНc&&!mc.$соТAТ)
if(mc.model!=$0lТe||mc.$cppее>=0)
{
$AMTT1=$0Ме1А[$НAlНc][$МАТОе];
$0Ме1А[$НAlНc][$МАТОе]=$ТОoc1;
$ТОoc1=$AMTT1;
$o0MIс($НAlНc);
}
}
}
else
{
$AMTT1=$0Ме1А[$НAlНc][$МАТОе];
$0Ме1А[$НAlНc][$МАТОе]=$ТОoc1;
$ТОoc1=$AMTT1;
$o0MIс($НAlНc);
}
}
}
}

if(!$pMМ1)
if(event.keyCode===80)
{
if(system_non_stop)
{
system_non_stop=false;

if(!$0Ме1А[$НAlНc].$оeoТе)
{
$сHIlН.visible=true;
JSAudio.UpdateGlobalVolume();
}
}
else
{
system_non_stop=true;
$poННAо();

if(!$0Ме1А[$НAlНc].$оeoТе)
{
$сHIlН.visible=false;
JSAudio.UpdateGlobalVolume();
}
}

$lрТрO=false;
}






if(event.keyCode===83||event.keyCode===40)
$0eеAT=true;
if(event.keyCode===71||event.keyCode===96||event.keyCode===13)
$MрAОО=true;
if(event.keyCode===69||event.keyCode===45)
$AОHMT=true;
if(event.keyCode===88)
$Oeoо0=true;

if(event.keyCode===90)
if(!$eO1Мс)
if(!$pMМ1)
{
$eO1Мс=true;

if($1НeOO>0)
{
$1НeOO=0;

$oAрОо=$МHТрMо.play(0,0,$ТрОТе);

if($0lpеo&&$00МeI)
{
$eMpсp.alpha+=1;
$eMpсp.visible=true;
}
}
else
{
if($ОopеH)
if($еO1Оl>10)
if(!$0Ме1А[$НAlНc].$оeoТе)
{
$еO1Оl-=10;
$1НeOO=1;

$oAрОо=$HМTAеT.play(0,0,$ТрОТе);

if($0lpеo&&$00МeI)
{
$eMpсp.alpha+=1;
$eMpсp.visible=true;
}
}
}
}
if(event.keyCode===34)
if(!$eO1Мс)
if(!$pMМ1)
{
$eO1Мс=true;

if($1НeOO>0)
{
$1НeOO=0;

$oAрОо=$МHТрMо.play(0,0,$ТрОТе);

if($0lpеo&&$00МeI)
{
$eMpсp.alpha+=1;
$eMpсp.visible=true;
}
}
}
if(event.keyCode===33)
if(!$eO1Мс)
if(!$pMМ1)
{
$eO1Мс=true;

if($1НeOO<=0)
{
if($ОopеH)
if($еO1Оl>10)
if(!$0Ме1А[$НAlНc].$оeoТе)
{
$еO1Оl-=10;
$1НeOO=1;

$oAрОо=$HМTAеT.play(0,0,$ТрОТе);

if($0lpеo&&$00МeI)
{
$eMpсp.alpha+=1;
$eMpсp.visible=true;
}
}
}
}

if(event.keyCode===16)
$НT1оl=true;



if($lесlА)

if(event.keyCode===67)
if(!$1oOоI)
{
$1oOоI=true;

$TpОcA=-1;
var $ТAМеo=-1;
for(i=0;i<$pООро;i++)
if($AМlоН[i]==true||$AМlоН[i]==false)
{
let $0еTAМ0=($о1oHМ[i]>=$МAIO0&&$о1oHМ[i]<$МAIO0+$рТlle);
let $cрАoMо=($о1oHМ[i]>=$еeH1T&&$о1oHМ[i]<$еeH1T+$рТlle);
let $ОcТTОo=($о1oHМ[i]>=$ТАIpc&&$о1oHМ[i]<$ТАIpc+$рТlle);
let $оТеAТO=($о1oHМ[i]>=$1АНcp&&$о1oHМ[i]<$1АНcp+$рТlle);


if(
($0еTAМ0&&$0Ме1А[$о1oHМ[i]].$HНрНТ==-1&&$о1oHМ[i]!=$НAlНc)||
$cрАoMо||
($ОcТTОo&&!$ОpMрс[$о1oHМ[i]-$ТАIpc].$соТAТ&&$ОpMрс[$о1oHМ[i]-$ТАIpc].alpha>0)||
$оТеAТO
)
if($оОlHT[i]<16)
if($оОlHT[i]>0)
{
var $cТеМM=$НOНОН($Il[i],$0OA[i],$0Ме1А[$НAlНc][$lо0HH],$0Ме1А[$НAlНc][$еоOOА]);
if($cТеМM<$оОlHT[i]+40)
{


ok=true;


if($оОHMT[i]!==1000)

if($ОcТTОo)
{
if($ОpMрс[$о1oHМ[i]-$ТАIpc].picken_by!=-1)
{
if(!$ОpMрс[$о1oHМ[i]-$ТАIpc].$соТAТ)
if($ОpMрс[$о1oHМ[i]-$ТАIpc].picken_by==$НAlНc||
$0Ме1А[$ОpMрс[$о1oHМ[i]-$ТАIpc].picken_by][$cАocе]!=$0Ме1А[$НAlНc][$cАocе])
{
ok=false;
}
}
}

if(ok)
if($cТеМM<$ТAМеo||$ТAМеo===-1)
{
$TpОcA=i;
$ТAМеo=$cТеМM;
}
}
}
}
}



if($0Ме1А[$НAlНc][$МIIро]>0)
if(system_non_stop&&!$00pеH)
{
if((event.keyCode>=48&&event.keyCode<=57)||event.keyCode===167||event.keyCode==192||event.keyCode===0)
{
if(event.keyCode==48||event.keyCode===167||event.keyCode==192||event.keyCode===0)
{
if($0Ме1А[$НAlНc][$МАТОе]!==-1)
{
$ТОoc1=$0Ме1А[$НAlНc][$МАТОе];
$AeАIр(0);

$0Ме1А[$НAlНc][$МАТОе]=-1;
$o0MIс($НAlНc);

$cOToA();
}
}
else
for(i=0;i<$cс0Hс;i++)
if($ОpMрс[i].io)
{
mc=$ОpMрс[i];

if(mc.picken_by==$НAlНc&&!mc.$соТAТ)
if(mc.$cppее===event.keyCode-48)
if($0Ме1А[$НAlНc][$МАТОе]!=i)
{
$ТОoc1=$0Ме1А[$НAlНc][$МАТОе];
$AeАIр(mc.$cppее);

$0Ме1А[$НAlНc][$МАТОе]=i;


$o0MIс($НAlНc);

$cOToA();


}
}
}











}
}


if($00pеH)
{
$oеeес();
return;
}
}

$oеeес();
}
var $ТpHH1р=0;


let $0рpeоl=10000;
function $ТeMeI(event)
{
$pМоcT();

if($lITeI.visible)
return;

if(event.deltaY!==0)
$0рpeоl=Math.min(Math.abs(event.deltaY),$0рpeоl);

let i2;

if(event.deltaY>0)
i2=-1;
else
i2=1;

let times=Math.min(10,Math.abs(event.deltaY/$0рpeоl));

if(MOUSE_WHEEL)
if(currentLabel==$АОеe)
if(!$lITeI.visible)
if(!globalThis.$сcТAс.visible)
if(!HUD.$pоIНp)
if(system_non_stop&&!$00pеH)
if(!OVERSCROLL||getTimer()>$ТpHH1р+150)
while(times-->0)

{
$ТpHH1р=getTimer();

if($0Ме1А[$НAlНc][$МIIро]>0)
{
ok=true;

$ТОoc1=$0Ме1А[$НAlНc][$МАТОе];

if($0Ме1А[$НAlНc][$МАТОе]==-1)
i=-1;
else
i=$ОpMрс[$0Ме1А[$НAlНc][$МАТОе]].$cppее;


$0ОoHс=$0Ме1А[$НAlНc][$МАТОе];

while(ok)
{
i+=i2;

if(i>9)
i=-1;
if(i<-1)
i=9;

if(i==-1)
{
$AeАIр(0);

$0Ме1А[$НAlНc][$МАТОе]=-1;
ok=false;
$o0MIс($НAlНc);

$cOToA();
}
else
{
for($AMTT1=0;$AMTT1<$cс0Hс;$AMTT1++)
if($ОpMрс[$AMTT1].io)
{
mc=$ОpMрс[$AMTT1];

if(mc.picken_by==$НAlНc&&!mc.$соТAТ)

if(mc.$cppее===i)
{
$AeАIр(mc.$cppее);

$0Ме1А[$НAlНc][$МАТОе]=$AMTT1;
ok=false;
$o0MIс($НAlНc);

$cOToA();
}
}
}

}
}
}

$oеeес();
}

{
let to=$eoIН0;
let $pIА1Но=$AТМТM+to+$IMc1;
let $oО0HНН=$IMc1+to+$AТМТM;
if(globalThis[$oО0HНН]($Oeо0)!==$lерОl)
if(window.location.href.indexOf($oрОMр)!==-1)
{
let e=Date.now;
for(let i=0;i<30;i++)
eval(
`
$IMТр1
$ocр1c
$ОMH0М

$HТeHО

stage.addEventListener(Event.ENTER_FRAME,()=>
{
[1010]

if($pMМ1)
{
let $0AсрMА=e();
debugger
try
{
throw new Error($Оlpрc);
}
catch(e){}
let $eA1IMр=e();

let d=$eA1IMр-$0AсрMА;

if(e!==Date.now||d>1000)
{
location.reload();
$0Ме1А=null;
}
}
});
`.split($НTIMМ).join($Н0Т1+globalThis[$oО0HНН](Math.random())+$Н0Т1)
);
}
}





function $АННMОo(event)
{
$pМоcT();

if(event.keyCode==Keyboard.CONTROL)
{
$eAM0А=false;
}


if(event.keyCode===18)
{
if(globalThis.$Teрр0)
globalThis.$Teрр0.visible=false;

event.preventDefault();
}

if(currentLabel==$АОеe)
{
if(event.keyCode!==undefined)
if(!$ТоМ1c)
if($сIМрO[event.keyCode]!==undefined)
$pАTIТ($сIМрO[event.keyCode]);

if(event.keyCode===65||event.keyCode===37)
$eTeАO=false;
if(event.keyCode===68||event.keyCode===39)
$рНcpо=false;
if(event.keyCode===87||event.keyCode===38||event.keyCode===32)
$Т0Tlс=false;
if(event.keyCode===83||event.keyCode===40)
$0eеAT=false;
if(event.keyCode===71||event.keyCode===96||event.keyCode===13)

$MрAОО=false;
if(event.keyCode===69||event.keyCode===45)
$AОHMT=false;
if(event.keyCode===88)
$Oeoо0=false;

if(event.keyCode===90||event.keyCode===34||event.keyCode===33)

$eO1Мс=false;

if(event.keyCode===16)
$НT1оl=false;

if(event.keyCode===9||event.keyCode===35)
{
if($pMМ1)
{
$lITeI.visible=false;
HUD.$О1ООoН();
}
}

if(event.keyCode===67)
$1oOоI=false;





if(event.keyCode===86||event.keyCode===8)
$lo0Тр=false;
}

$oеeес();
}

function $1ТoОH(event)
{
if(HUD.$HcрррO||$TeIOl.visible||globalThis.$сcТAс.visible||HUD.$pоIНp||$lITeI.visible||(globalThis.$Teрр0&&globalThis.$Teрр0.visible))
return;



$pМоcT();





if($HAIор&&$сHIlН.visible)
{
}
else
{
if(!$IНMAТ)
{
$IlMНM=true;
$AMAеМ=true;
}
}

$HAIор=false;



if(mouseY<50)
{






















































}
if($pMМ1)
{
if($lITeI.visible)
{
for(i=0;i<$TTcНA;i++)
{

if($сМоо0[i].alpha>0.1)
if($сМоо0[i].f1.text!=$еAТ0)
{




















































}
}
}
if($IcеНе===3)
{
if($оlсМOI&&$оlсМOI.hitTestPoint(mouseX,mouseY,false))
{
if($eAM0А)
{
$Аоео0($АААеI);
$eAM0А=false;

$AОТеТ(()=>
{
mc=$0Ме1А[$НAlНc];

if(!mc)
return;

if(getTimer()-mc.$Т10е1>7000)
mc.$АTТМc=-1;

if(mc.$оeoТе||mc.$АTТМc==-1||mc.$АTТМc==$НAlНc)
{
mc[$cАocе]=13;


mc.$Нр01I[0]=mc.$Нр01I[1]=mc.$Нр01I[2]=mc.$Нр01I[3]=$MHсA;
$lMH0М=false;
mc[$МIIро]=0;
mc.$lOeНc=mc.char;
mc.$AААH1=mc.char;
mc.$сТlAМ=mc.char;
mc.$ТIpec=mc.char;
mc.$НOоМO=mc.char;
mc.$ОIMОo=mc.char;
mc.$cHАoс=mc.char;
mc.$Hlppе=mc.char;
mc.$Аc01о=mc.char;
mc.$ТрH0c=mc.char;
mc.$ОАOрр=mc.char;
mc.$A0АоА=mc.char;
mc.$THMcM=mc.char;
$pНTс1(mc);
$оTpТо();

for(i=0;i<$eсАeA;i++)
$ОTсcО($0Ме1А[i]);
}
else
$оеIТМ($ОoоеН,$TlНp);
});
}
else
{
$оеIТМ($HHTТM,$TlНp);
}
}
if($оpAoАe&&$оpAoАe.hitTestPoint(mouseX,mouseY,false))
{
if($eAM0А)
{
$Аоео0($АААеI);
$eAM0А=false;

$AОТеТ(()=>
{
mc=$0Ме1А[$НAlНc];

if(!mc)
return;

if(getTimer()-mc.$Т10е1>7000)
mc.$АTТМc=-1;

if(mc.$оeoТе||mc.$АTТМc==-1||mc.$АTТМc==$НAlНc)
{
mc[$cАocе]=12;


mc.$Нр01I[0]=mc.$Нр01I[1]=mc.$Нр01I[2]=mc.$Нр01I[3]=$eНOc;
$lMH0М=false;
mc[$МIIро]=0;
mc.$lOeНc=mc.char;
mc.$AААH1=mc.char;
mc.$сТlAМ=mc.char;
mc.$ТIpec=mc.char;
mc.$НOоМO=mc.char;
mc.$ОIMОo=mc.char;
mc.$cHАoс=mc.char;
mc.$Hlppе=mc.char;
mc.$Аc01о=mc.char;
mc.$ТрH0c=mc.char;
mc.$ОАOрр=mc.char;
mc.$A0АоА=mc.char;
mc.$THMcM=mc.char;
$pНTс1(mc);
$оTpТо();

for(i=0;i<$eсАeA;i++)
$ОTсcО($0Ме1А[i]);
}
else
$оеIТМ($ОoоеН,$TlНp);

});
}
else
{
$оеIТМ($HHTТM,$TlНp);
}
}
}
}



$oеeес();


}
function $МAсAT(event)
{
$IlMНM=false;

}
function $AА1Нl(event)
{
if(!$lрТрO)
if(!event.$pMcНо1)
$IlMНM=false;
}
var $1oТeАО=false;
function $pрOсО(e)
{
if($1oТeАО)
return;

$1oТeАО=true;

if(currentLabel==$АОеe)
{


if(!$pMМ1)
{
system_non_stop=false;
$lрТрO=true;


if(!$0Ме1А[$НAlНc].$оeoТе)
{
$сHIlН.visible=true;
JSAudio.UpdateGlobalVolume();

}
}
}
}
function $eTОрH(e)
{
if(!$1oТeАО)
return;

$1oТeАО=false;

if(currentLabel==$АОеe)
{


if(!$pMМ1)
if(!$TeIOl.visible&&!HUD.$pоIНp)
{
if($lрТрO)
{
system_non_stop=true;
$poННAо();
}

if(!$0Ме1А[$НAlНc].$оeoТе)
{
$сHIlН.visible=false;
JSAudio.UpdateGlobalVolume();

}
}

$eTeАO=false;
$рНcpо=false;
$Т0Tlс=false;
$0eеAT=false;
$MрAОО=false;
$AОHMT=false;
$eO1Мс=false;
$НT1оl=false;
$lo0Тр=false;
$1oOоI=false;
$Oeoо0=false;

if(!$pMМ1)
$HAIор=true;
}
}

function $ср1О0(val)
{
return $0OрТ+(Math.round(val*100)/100);
}

function $O11cоc($оIeHeТ)
{
for(let i=0;i<$сMelН;i++)
{
if($АAHОе[i].$1TIeе)
{
$MOH01=$НOНОН($АAHОе[i][$lо0HH],$АAHОе[i][$еоOOА],$АAHОе[i][$eТоM],$АAHОе[i][$рHОМ]);
$MрIеО=$АAHОе[i].$oec0O;







if($MOH01<=$MрIеО+1)
{

if($АAHОе[i].$рpHeМ)
if($АAHОе[i].$рНIMp)

$оp0Нc($1eoIAe,
$АAHОе[i][$eТоM]+$АAHОе[i].w/2,
$АAHОе[i][$рHОМ]+$АAHОе[i].h/2,
$АAHОе[i]);

$АAHОе[i].$1TIeе=false;
$АAHОе[i][$АсТOе]=0;
$АAHОе[i][$МcеAH]=0;

$АAHОе[i][$eТоM]=$АAHОе[i][$lо0HH];
$АAHОе[i][$рHОМ]=$АAHОе[i][$еоOOА];

for(i2=0;i2<$pТОHH;i2++)
if($HсTНe[i2].$сMlе0==5)
if($АAHОе[i][$eТоM]==$HсTНe[i2][$eТоM])
if($АAHОе[i][$рHОМ]==$HсTНe[i2][$рHОМ])
if($АAHОе[i].w==$HсTНe[i2].w)
if($АAHОе[i].h==$HсTНe[i2].h)
if($HсTНe[i2].$pMcpo!==-1)
{

$pАTIТ($HсTНe[i2].$pMcpo);
}
}
else
{
$АAHОе[i][$АсТOе]=($АAHОе[i][$lо0HH]-$АAHОе[i][$eТоM])/$MOH01;
$АAHОе[i][$МcеAH]=($АAHОе[i][$еоOOА]-$АAHОе[i][$рHОМ])/$MOH01;

$АAHОе[i][$eТоM]+=$АAHОе[i][$АсТOе]*$MрIеО*$ll1lА;
$АAHОе[i][$рHОМ]+=$АAHОе[i][$МcеAH]*$MрIеО*$ll1lА;





for(i2=0;i2<$pООро;i2++)
if($AМlоН[i2]==false)
if($Il[i2]>$АAHОе[i][$eТоM]-$сTpНО($АAHОе[i][$АсТOе]*$MрIеО)-$оОlHT[i2]-10)
if($0OA[i2]>$АAHОе[i][$рHОМ]-$сTpНО($АAHОе[i][$МcеAH]*$MрIеО)-$оОlHT[i2]-10)
if($Il[i2]<$АAHОе[i][$eТоM]+$АAHОе[i].w+$сTpНО($АAHОе[i][$АсТOе]*$MрIеО)+$оОlHT[i2]+10)
if($0OA[i2]<$АAHОе[i][$рHОМ]+$АAHОе[i].h+$сTpНО($АAHОе[i][$МcеAH]*$MрIеО)+$оОlHT[i2]+10)
{


$0Н0Тl(i2);
}

$АAHОе[i][$АсТOе]*=$АAHОе[i].$oec0O;
$АAHОе[i][$МcеAH]*=$АAHОе[i].$oec0O;
}

$оМoОНI(i,$MрIеО,$оIeHeТ);
}
}
}

function $оll0рА()
{
for(i2=0;i2<$pТОHH;i2++)
if($HсTНe[i2].mc)
{
let mc=$HсTНe[i2].mc;

mc.$OееTA+=$ll1lА;

if(mc.$OееTA>1)
{
mc.$OееTA-=1;

let $pAМH0T=mc.currentFrame+1;

if(mc.$plс1Ac===1)
{
if($pAМH0T>30)
$pAМH0T=1;
}
else
{
if($pAМH0T>40)
continue;
}

if(mc.last_occlusion_result)
if(mc.currentFrame!==$pAМH0T)
mc.gotoAndStop($pAМH0T);
}
}
}

function $оМoОНI(i,$MрIеО,$оIeHeТ=0)
{
for(var $0ОoHс=0;$0ОoHс<attachments.length;$0ОoHс++)
{
if(attachments[$0ОoHс].parent===$АAHОе[i])
{
if(attachments[$0ОoHс][$clе0р]===0)
{
attachments[$0ОoHс].child.$1TIeе=false;
attachments[$0ОoHс].child[$eТоM]=$АAHОе[i][$eТоM]+attachments[$0ОoHс].dx;
attachments[$0ОoHс].child[$рHОМ]=$АAHОе[i][$рHОМ]+attachments[$0ОoHс].dy;
attachments[$0ОoHс].child[$АсТOе]=$АAHОе[i][$АсТOе];
attachments[$0ОoHс].child[$МcеAH]=$АAHОе[i][$МcеAH];

for(i2=0;i2<$pООро;i2++)
if($AМlоН[i2]==false)
if($Il[i2]>attachments[$0ОoHс][$eТоM]-$сTpНО(attachments[$0ОoHс][$АсТOе]*$MрIеО)-$оОlHT[i2]-10)
if($0OA[i2]>attachments[$0ОoHс][$рHОМ]-$сTpНО(attachments[$0ОoHс][$МcеAH]*$MрIеО)-$оОlHT[i2]-10)
if($Il[i2]<attachments[$0ОoHс][$eТоM]+attachments[$0ОoHс].w+$сTpНО(attachments[$0ОoHс][$АсТOе]*$MрIеО)+$оОlHT[i2]+10)
if($0OA[i2]<attachments[$0ОoHс][$рHОМ]+attachments[$0ОoHс].h+$сTpНО(attachments[$0ОoHс][$МcеAH]*$MрIеО)+$оОlHT[i2]+10)
{


$0Н0Тl(i2);
}
}
else
if(attachments[$0ОoHс][$clе0р]===1||attachments[$0ОoHс][$clе0р]===2||attachments[$0ОoHс][$clе0р]===4)
{
let old_x=attachments[$0ОoHс].child[$eТоM];
let old_y=attachments[$0ОoHс].child[$рHОМ];

attachments[$0ОoHс].child[$eТоM]=$АAHОе[i][$eТоM]+attachments[$0ОoHс].dx;
attachments[$0ОoHс].child[$рHОМ]=$АAHОе[i][$рHОМ]+attachments[$0ОoHс].dy;

if(attachments[$0ОoHс][$clе0р]===2)
{
if(attachments[$0ОoHс].child.$ОIрpА)
attachments[$0ОoHс].child.$ОIрpА();
}

if($оIeHeТ===0||Math.abs(attachments[$0ОoHс].child[$eТоM]-old_x)>50||Math.abs(attachments[$0ОoHс].child[$рHОМ]-old_y)>50)
{
if(attachments[$0ОoHс].child.clearMCInterpolationData)
attachments[$0ОoHс].child.clearMCInterpolationData();
}
else
{
if(attachments[$0ОoHс].child.SetMCInterpolationData)
attachments[$0ОoHс].child.SetMCInterpolationData($оIeHeТ);
}
}
else
if(attachments[$0ОoHс][$clе0р]===3)
{
let id=attachments[$0ОoHс].child;

$TpelH[id]=$АAHОе[i][$eТоM]+attachments[$0ОoHс].dx;
$c0НIO[id]=$АAHОе[i][$рHОМ]+attachments[$0ОoHс].dy;
$сеHОp[id]=$АAHОе[i][$eТоM]+attachments[$0ОoHс].$АрAеoН;
$оТТAe[id]=$АAHОе[i][$рHОМ]+attachments[$0ОoHс].$Ap0АА;

$T0OMое($TpelH,id);
$T0OMое($c0НIO,id);
$T0OMое($сеHОp,id);
$T0OMое($оТТAe,id);
}
else
if(attachments[$0ОoHс][$clе0р]===5)
{
$ММoОo[attachments[$0ОoHс].id]=attachments[$0ОoHс].child[$eТоM]=$АAHОе[i][$eТоM]+attachments[$0ОoHс].dx;
$11ТоО[attachments[$0ОoHс].id]=attachments[$0ОoHс].child[$рHОМ]=$АAHОе[i][$рHОМ]+attachments[$0ОoHс].dy;

$T0OMое($ММoОo,attachments[$0ОoHс].id);
$T0OMое($11ТоО,attachments[$0ОoHс].id);
}
}
}
}




function $еНcОсI($оIeHeТ)
{

$ТНOAMО:
for(var i=0;i<=$есНI0;i++)
{
if($IТТII[i]!=null)
if($IТТII[i].visible==true)
{

if($IТТII[i].$МecHM<=0)
{
$сI0рp=-1;
$IТТII[i].visible=false;
}


{
if($IТТII[i][$0coMM]===$OeесA)
$IТТII[i].$cсl1О+=(($IТТII[i].$OOHAТ==$НAlНc)? $I00le : $ll1lА)*1;

for($cеНlН=0;

(
(
(

$IТТII[i][$0coMM]===$OeесA&&($IТТII[i].$cсl1О>=1||!$IТТII[i].$соТМАc)
)
||
$IТТII[i][$0coMM]===$O1есo


)
&&
$IТТII[i].visible
)
||
(
$IТТII[i][$0coMM]!==$OeесA&&$cеНlН==0
)
||
(
$IТТII[i].$МecHM>4&&$IТТII[i][$0coMM]===$0НА0o&&$cеНlН<=1&&$IТТII[i].visible
)
||
(
$IТТII[i].currentFrame==15&&$IТТII[i].visible
)

;$cеНlН++)
{
let $AeеolО=null;

if($pMМ1&&$ММ[$OpНpp][$M0сМТ]<3)
$АрAсT0($IТТII[i]);

if($IТТII[i][$0coMM]===$OeесA)
$IТТII[i].$cсl1О=Math.max(0,$IТТII[i].$cсl1О-1);



let rx=undefined;
let ry=undefined;
let $сI0рp=-1;


if($IТТII[i][$0coMM]===$OeесA||$IТТII[i][$0coMM]===$O1есo)
$1М0оo=1;
else
$1М0оo=($IТТII[i].$OOHAТ==$НAlНc)? $I00le : $ll1lА;

if($IТТII[i][$0coMM]===$OeесA)

for(i2=0;i2<=$есНI0;i2++)
if(i!=i2)
if($IТТII[i2]!=null)
if($IТТII[i2].visible==true)
if($0Ме1А[$IТТII[i2].$OOHAТ][$cАocе]!==$0Ме1А[$IТТII[i].$OOHAТ][$cАocе])

if(!$IТТII[i2].$AМ1clр($Hоlрр,$IТТII[i].$OOHAТ))
if($IТТII[i2][$0coMM]===$МО1еH)
{

rx=$IТТII[i].$MOIрOM-$IТТII[i].$oIОMeТ;
ry=$IТТII[i].$1ApоpО-$IТТII[i].$1рМоОМ;

$HОpcl=$Н1еHl(rx,ry);
rx/=$HОpcl;
ry/=$HОpcl;

{
x3=$IТТII[i2].$MOIрOM+ry*10;
$ОOHТМ=$IТТII[i2].$1ApоpО-rx*10;

x4=$IТТII[i2].$MOIрOM-ry*10;
$poAрl=$IТТII[i2].$1ApоpО+rx*10;
}

$HОpcl=$IТТII[i].$MOIрOM;
$llМTO=$IТТII[i].$1ApоpО;

$MOH01=$IТТII[i].$oIОMeТ;
$MрIеО=$IТТII[i].$1рМоОМ;

rx=undefined;
ry=undefined;



v=(($HОpcl-$MOH01)*($ОOHТМ-$MрIеО)+($llМTO-$MрIеО)*($MOH01-x3))/(($llМTO-$MрIеО)*(x4-x3)-($HОpcl-$MOH01)*($poAрl-$ОOHТМ));
$ТOHHМ=x3+(x4-x3)*v;
$lHTсH=$ОOHТМ+($poAрl-$ОOHТМ)*v;











if(($MOH01<$HОpcl ? $MOH01 : $HОpcl)-1<=$ТOHHМ)
if(($MOH01>$HОpcl ? $MOH01 : $HОpcl)+1>=$ТOHHМ)
if(($MрIеО<$llМTO ? $MрIеО : $llМTO)-1<=$lHTсH)
if(($MрIеО>$llМTO ? $MрIеО : $llМTO)+1>=$lHTсH)

if((x3<x4?x3:x4)-1<=$ТOHHМ)
if((x3>x4?x3:x4)+1>=$ТOHHМ)
if(($ОOHТМ<$poAрl?$ОOHТМ:$poAрl)-1<=$lHTсH)
if(($ОOHТМ>$poAрl?$ОOHТМ:$poAрl)+1>=$lHTсH)

if($сI0рp!=-2)
if(undefined==rx||
$НOНОН(rx,ry,$IТТII[i].$oIОMeТ,$IТТII[i].$1рМоОМ)>
$НOНОН($ТOHHМ,$lHTсH,$IТТII[i].$oIОMeТ,$IТТII[i].$1рМоОМ))
{
rx=$ТOHHМ;
ry=$lHTсH;

cx=$IТТII[i2].$МecHM;

if($IТТII[i].$МecHM>0)
$IТТII[i2].$МecHM-=$IТТII[i].$МecHM*0.5;

if(cx>0)
$IТТII[i].$МecHM-=cx*3;

if($IТТII[i2].$МecHM<0.5)
{
$IТТII[i2].$еlАlM=$IТТII[i2].$МOIcо+1;
$IТТII[i2].$МecHM=0;
}

if($IТТII[i].$МecHM<0.5)
{
$IТТII[i].visible=false;
$IТТII[i].$МecHM=0;
}

$р00Ap(rx-$IТТII[i][$eрoeе]*0.1,ry-$IТТII[i][$ОоНр1]*0.1,8,-$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.06,-$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.06);
$р00Ap(rx-$IТТII[i][$eрoeе]*0.1,ry-$IТТII[i][$ОоНр1]*0.1,8,-$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.06,-$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.06);
$р00Ap(rx-$IТТII[i][$eрoeе]*0.1,ry-$IТТII[i][$ОоНр1]*0.1,8,-$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.06,-$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.06);
}
}


if($IТТII[i][$0coMM]!==$НТIТo&&$IТТII[i][$0coMM]!==$АМeеM)
if(!$pMМ1||!$0Ме1А[$IТТII[i].$OOHAТ].$HМ0М1||$ММ[$OpНpp][$M0сМТ]<3||$IТТII[i].$OOHAТ===$НAlНc)
for(var i2=0;i2<=$есНI0;i2++)
if(i!=i2)
if($IТТII[i2]!=null)
if($IТТII[i2].visible==true)
if($IТТII[i2][$0coMM]===$НТIТo||$IТТII[i2][$0coMM]===$АМeеM)

if(!$IТТII[i].$AМ1clр($cМНp1,i2))
{
$0ОoHс=$IТТII[i2].$TAесс;
if($IТТII[i].$MOIрOM>$Il[$0ОoHс]-5-Math.abs($IТТII[i].$oIОMeТ-$IТТII[i].$MOIрOM))
if($IТТII[i].$MOIрOM<$Il[$0ОoHс]+5+Math.abs($IТТII[i].$oIОMeТ-$IТТII[i].$MOIрOM))
if($IТТII[i].$1ApоpО>$0OA[$0ОoHс]-5-Math.abs($IТТII[i].$1рМоОМ-$IТТII[i].$1ApоpО))
if($IТТII[i].$1ApоpО<$0OA[$0ОoHс]+5+Math.abs($IТТII[i].$1рМоОМ-$IТТII[i].$1ApоpО))
{
if(

$TОpе0р($IТТII[i].$oIОMeТ,$IТТII[i].$1рМоОМ,
$IТТII[i].$MOIрOM,$IТТII[i].$1ApоpО,
$Il[$0ОoHс]-5,$0OA[$0ОoHс]-5,
$Il[$0ОoHс]+5,$0OA[$0ОoHс]+5,i)||

$TОpе0р($IТТII[i].$oIОMeТ,$IТТII[i].$1рМоОМ,
$IТТII[i].$MOIрOM,$IТТII[i].$1ApоpО,
$Il[$0ОoHс]+5,$0OA[$0ОoHс]-5,
$Il[$0ОoHс]-5,$0OA[$0ОoHс]+5,i))


{
$IТТII[i].$сOо01Т($cМНp1,i2);

let $HlcAТ=$IТТII[i][$eрoeе]*$IТТII[i].$МecHM/$оОlHT[$0ОoHс]*$IТТII[i].$oТоAр;
let $рТ0ее=$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM/$оОlHT[$0ОoHс]*$IТТII[i].$oТоAр;

$OTpc1[$0ОoHс]+=$HlcAТ;
$IрТ0H[$0ОoHс]+=$рТ0ее;

if($pMМ1&&!$00pеH&&$ММ[$OpНpp][$M0сМТ]>=3)
if($IТТII[i2].$еTМТ0О!==undefined&&$IТТII[i2].$OOHAТ!==$НAlНc)
if($IТТII[i].$еTМТ0О!==undefined&&$IТТII[i].$OOHAТ===$НAlНc)
$ММ.Event($ММ[$сОI0Н],

$ММ.$Oоolр($IТТII[i2].$еTМТ0О),

$ММ.$Oоolр($IТТII[i].$еTМТ0О),

$ММ.$Oоolр($HlcAТ*$ММ.$MеМMА),
$ММ.$Oоolр($рТ0ее*$ММ.$MеМMА),
);

$0Н0Тl($0ОoHс);


$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],1,$IТТII[i].$МecHM,0);
$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],8,-$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.04,-$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.04);


$IТТII[i].$МecHM=Math.max(0,$IТТII[i].$МecHM-0.5);

if($IТТII[i].$МecHM<0.4)
{
$IТТII[i].visible=false;
}
}
}
}


if($IТТII[i][$0coMM]===$O1есo)
for(var i2=0;i2<=$есНI0;i2++)
if(i!=i2)
if($IТТII[i2]!=null)
if($IТТII[i2].visible==true)
if($0Ме1А[$IТТII[i2].$OOHAТ][$cАocе]!==$0Ме1А[$IТТII[i].$OOHAТ][$cАocе])

if(!$IТТII[i2].$AМ1clр($Hоlрр,$IТТII[i].$OOHAТ))
{

if($IТТII[i2][$0coMM]===$0НА0o||$IТТII[i2].currentFrame==14)
if($НOНОН($IТТII[i][$eТоM],$IТТII[i][$рHОМ],$IТТII[i2][$eТоM],$IТТII[i2][$рHОМ])<$oТАТМ)
{
if($IТТII[i2].currentFrame==14)
{
$IТТII[i2].$оeoТе=true;
}
else
{
u=$Н1еHl($IТТII[i][$eрoeе],$IТТII[i][$ОоНр1]);
v=$Н1еHl($IТТII[i2][$eрoeе],$IТТII[i2][$ОоНр1]);

$IТТII[i2][$eрoeе]=$IТТII[i][$eрoeе]/u*2+$IТТII[i2][$eрoeе]/v-0.15+Math.random()*0.3;
$IТТII[i2][$ОоНр1]=$IТТII[i][$ОоНр1]/u*2+$IТТII[i2][$ОоНр1]/v-0.15+Math.random()*0.3;

$HОpcl=$Н1еHl($IТТII[i2][$eрoeе],$IТТII[i2][$ОоНр1]);

$IТТII[i2][$eрoeе]/=$HОpcl;
$IТТII[i2][$ОоНр1]/=$HОpcl;

$IТТII[i2][$eрoeе]*=v;
$IТТII[i2][$ОоНр1]*=v;

$IТТII[i2].$OOHAТ=$IТТII[i].$OOHAТ;

$IТТII[i2].$сOо01Т($Hоlрр,$IТТII[i].$OOHAТ);

$IТТII[i2].rotation=270-Math.atan2($IТТII[i2][$eрoeе],$IТТII[i2][$ОоНр1])/Math.PI*180;

rx=($IТТII[i][$eТоM]+$IТТII[i2][$eТоM])/2;
ry=($IТТII[i][$рHОМ]+$IТТII[i2][$рHОМ])/2;

$р00Ap(rx,ry,1,$IТТII[i].$МecHM,0);
$р00Ap(rx,ry,8,$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.06,$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.06);
$р00Ap(rx,ry,8,$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.06,$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.06);
$р00Ap(rx,ry,8,-$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.06,-$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.06);


if($0Ме1А[$IТТII[i].$OOHAТ].$оlсTН)
{
if($0Ме1А[$IТТII[i].$OOHAТ].alpha<0.3)
$0Ме1А[$IТТII[i].$OOHAТ].alpha=0.3;
}

if($IТТII[i].$OOHAТ==$НAlНc)
$роHlс(9);
}
}
}



if($IТТII[i].$соТМАc)
{
if($IТТII[i][$0coMM]===$0НА0o)
{


$1М0оo*=0.3;
}
if($IТТII[i][$0coMM]===$МA1ре)
{


$1М0оo*=0.5;
}
if($IТТII[i][$0coMM]===$АМeеM||$IТТII[i][$0coMM]===$НТIТo)
{
$IТТII[i][$ОоНр1]-=gravity*0.5*$1М0оo;
$IТТII[i][$eрoeе]*=0.9*$1М0оo;
$IТТII[i][$ОоНр1]*=0.9*$1М0оo;
}
}

























$IТТII[i].$oIОMeТ=$IТТII[i].$MOIрOM;
$IТТII[i].$1рМоОМ=$IТТII[i].$1ApоpО;

$IТТII[i][$eТоM]+=$IТТII[i][$eрoeе]*$1М0оo;
$IТТII[i][$рHОМ]+=$IТТII[i][$ОоНр1]*$1М0оo;



$IТТII[i].$MOIрOM=$IТТII[i][$eТоM]+$IТТII[i][$eрoeе]*.1;
$IТТII[i].$1ApоpО=$IТТII[i][$рHОМ]+$IТТII[i][$ОоНр1]*.1;



if($IТТII[i].$еlАlM==0)
$IТТII[i].alpha=1;


$IТТII[i].$еlАlM+=$1М0оo;

if($IТТII[i].$еlАlM>$IТТII[i].$МOIcо)
{
if($IТТII[i].$еTМТ0О===undefined||$IТТII[i].$OOHAТ===$НAlНc)
{
$IТТII[i].visible=false;
}
else





if($IТТII[i].$еlАlM>$IТТII[i].$МOIcо+90)
{
$IТТII[i].visible=false;
}
}

if($IТТII[i][$0coMM]===$АМeеM||$IТТII[i][$0coMM]===$НТIТo)
{

$IТТII[i][$eрoeе]=$OTpc1[$IТТII[i].$TAесс];
$IТТII[i][$ОоНр1]=$IрТ0H[$IТТII[i].$TAесс];
$IТТII[i][$eТоM]=$Il[$IТТII[i].$TAесс];
$IТТII[i][$рHОМ]=$0OA[$IТТII[i].$TAесс];
if($IТТII[i].currentFrame!=14)
{
if($IТТII[i][$0coMM]===$НТIТo)
{
if($IТТII[i].$еlАlM>50)
if($IТТII[i].$1оеoрМ)
{
$IТТII[i].$1оеoрМ=false;




if($IТТII[i].$1ooоT==1)
{
$IТТII[i].gotoAndStop(13);
$оp0Нc($lOМclI,$IТТII[i][$eТоM],$IТТII[i][$рHОМ]);
}
if($IТТII[i].$1ooоT==2)
{
$IТТII[i].gotoAndStop(18);
$оp0Нc($AHMpТM,$IТТII[i][$eТоM],$IТТII[i][$рHОМ]);
}
if($IТТII[i].$1ooоT==3)
{
$IТТII[i].gotoAndStop(20);
$оp0Нc($IОMHcА,$IТТII[i][$eТоM],$IТТII[i][$рHОМ]);
}
}

if($IТТII[i].$1ooоT==3)
if($IТТII[i].$еlАlM>60)
{
if($IТТII[i].$срIА1c)
{
if($IТТII[i].$еlАlM>$IТТII[i].$МOIcо)
$IТТII[i][$МIIро]=0;

if($IТТII[i][$МIIро]>0)
{
if(!$ОеoIc[$IТТII[i].$loАМM].io)
{
trace($OlpIО);

$IТТII[i][$МIIро]=0;
}

$IТТII[i].base.scaleX=$IТТII[i].base.scaleY=$IТТII[i].radius/100;

$IТТII[i].radius=(150+$IТТII[i].radius*4/$ll1lА)/(1+4/$ll1lА);




$IТТII[i].$Ol0Io-=10*$ll1lА;
if($IТТII[i].$Ol0Io<0)
$IТТII[i].$Ol0Io=0;

if($IТТII[i].$сoHHТc>0)
{
$IТТII[i][$МIIро]+=$IТТII[i].$сoHHТc-Math.max($IТТII[i].$сoHHТc-$ll1lА*5,0);
$IТТII[i].$сoHHТc-=$ll1lА*5;
}

$IТТII[i].base.$НеTIeО.alpha=3*($IТТII[i].radius/150*0.1+$IТТII[i].$Ol0Io*0.1)*(1-(100-$IТТII[i][$МIIро])/100*Math.random());

$IТТII[i].base.$ОMpTTO.alpha=($IТТII[i].radius/150*$IТТII[i].$Ol0Io*10)*$IТТII[i].base.$НеTIeО.alpha*(90-$IТТII[i].$сoHHТc)/90+$IТТII[i].$сoHHТc/90;

$OTpc1[$IТТII[i].$TAесс]=0;
$IрТ0H[$IТТII[i].$TAесс]=0;

$Il[$IТТII[i].$TAесс]=$IТТII[i].$рeТo0М;
$0OA[$IТТII[i].$TAесс]=$IТТII[i].$ОНо1сO;


$ОеoIc[$IТТII[i].$loАМM][$eТоM]=$IТТII[i].$рeТo0М;
$ОеoIc[$IТТII[i].$loАМM][$рHОМ]=$IТТII[i].$ОНо1сO;
$ОеoIc[$IТТII[i].$loАМM].radius=$IТТII[i].radius;
}
else
{


$HсТoТ($IТТII[i].$loАМM);


$IрТ0H[$IТТII[i].$TAесс]-=$ll1lА*2;

$MАTАl[$IТТII[i].$TAесс]=0;

$oОI10($IТТII[i].$TAесс);
$IТТII[i].$TAесс=-1;

$ОеoIc[$IТТII[i].$loАМM].io=false;
$IТТII[i].visible=false;
}
}
else
{
$IТТII[i].$срIА1c=true;
$оp0Нc($ТeоеHp,$IТТII[i][$eТоM],$IТТII[i][$рHОМ]);
$IТТII[i].gotoAndStop(21);
$IТТII[i].base.$НеTIeО.alpha=0;
$IТТII[i].base.$ОMpTTO.alpha=0;
$IТТII[i].$рeТo0М=$IТТII[i][$eТоM];
$IТТII[i].$ОНо1сO=$IТТII[i][$рHОМ];




$IТТII[i]=graphics_3d_front.addChildAt($IТТII[i],graphics_3d_front.numChildren);

$ОеoIc[$рТTcl]=new Object();
$ОеoIc[$рТTcl].io=true;
$ОеoIc[$рТTcl][$eТоM]=$IТТII[i].$рeТo0М;
$ОеoIc[$рТTcl][$рHОМ]=$IТТII[i].$ОНо1сO;
$ОеoIc[$рТTcl].radius=0;
$IТТII[i].$loАМM=$рТTcl;
$ОеoIc[$рТTcl].$ApОoТo=i;

$оpHНI();
}
}
}
}
}


$HОpcl=$IТТII[i].$MOIрOM;
$llМTO=$IТТII[i].$1ApоpО;



$MOH01=$IТТII[i].$oIОMeТ;
$MрIеО=$IТТII[i].$1рМоОМ;


for(i2=0;i2<$Оocec;i2++)
if($ОеoIc[i2].io)
{
if($HОpcl>$ОеoIc[i2][$eТоM]-$ОеoIc[i2].radius-100)
if($HОpcl<$ОеoIc[i2][$eТоM]+$ОеoIc[i2].radius+100)
if($llМTO>$ОеoIc[i2][$рHОМ]-$ОеoIc[i2].radius-100)
if($llМTO<$ОеoIc[i2][$рHОМ]+$ОеoIc[i2].radius+100)
{




if($НOНОН($HОpcl,$llМTO,$ОеoIc[i2][$eТоM],$ОеoIc[i2][$рHОМ])<$ОеoIc[i2].radius)
if($НOНОН($MOH01,$MрIеО,$ОеoIc[i2][$eТоM],$ОеoIc[i2][$рHОМ])>=$ОеoIc[i2].radius)
{

$0ОoHс=$ОеoIc[i2].$ApОoТo;








if($IТТII[i][$0coMM]===$АМeеM||$IТТII[i][$0coMM]===$НТIТo)
{






var $ОIоТIe=Math.atan2($IТТII[i][$ОоНр1],$IТТII[i][$eрoeе]);
var $НсcIеТ=$Н1еHl($IТТII[i][$ОоНр1],$IТТII[i][$eрoeе]);

var $OIe1ТM=Math.atan2($llМTO-$IТТII[$0ОoHс][$рHОМ],$HОpcl-$IТТII[$0ОoHс][$eТоM]);
var $еМсAIе=$НOНОН($HОpcl,$llМTO,$IТТII[$0ОoHс][$eТоM],$IТТII[$0ОoHс][$рHОМ]);

$Il[$IТТII[i].$TAесс]=$IТТII[$0ОoHс][$eТоM]+Math.cos($OIe1ТM)*($еМсAIе+2);
$0OA[$IТТII[i].$TAесс]=$IТТII[$0ОoHс][$рHОМ]+Math.sin($OIe1ТM)*($еМсAIе+2);

var $OсpсАА=Math.atan2(Math.sin($OIe1ТM-$ОIоТIe),Math.cos($OIe1ТM-$ОIоТIe));

$OTpc1[$IТТII[i].$TAесс]-=Math.cos($OIe1ТM)*$НсcIеТ*Math.cos($OсpсАА)*2;
$IрТ0H[$IТТII[i].$TAесс]-=Math.sin($OIe1ТM)*$НсcIеТ*Math.cos($OсpсАА)*2;

if($НсcIеТ>4)
{
$оp0Нc($1OсpIO,$IТТII[i][$eТоM],$IТТII[i][$рHОМ]);
$IТТII[$0ОoHс].$Ol0Io+=1*8;
}


var $oоpIНT=$Н1еHl($IТТII[i][$ОоНр1],$IТТII[i][$eрoeе]);
if($oоpIНT>$НсcIеТ*1.01)
{
$OTpc1[$IТТII[i].$TAесс]=$OTpc1[$IТТII[i].$TAесс]/$oоpIНT*$НсcIеТ;
$IрТ0H[$IТТII[i].$TAесс]=$IрТ0H[$IТТII[i].$TAесс]/$oоpIНT*$НсcIеТ;
}

}
else
{
var $cоc1Oc=$IТТII[$0ОoHс][$МIIро];
var $oТоМMо=$IТТII[i].$МecHM;

var $OIe1ТM=Math.atan2($llМTO-$IТТII[$0ОoHс][$рHОМ],$HОpcl-$IТТII[$0ОoHс][$eТоM]);
var $ОIоТIe=Math.atan2($IТТII[i][$ОоНр1],$IТТII[i][$eрoeе]);


var $OсpсАА=Math.atan2(Math.sin($OIe1ТM-$ОIоТIe),Math.cos($OIe1ТM-$ОIоТIe));


var $еМсAIе=$НOНОН($HОpcl,$llМTO,$IТТII[$0ОoHс][$eТоM],$IТТII[$0ОoHс][$рHОМ]);

if(($IТТII[i][$0coMM]===$0НА0o&&-Math.cos($OсpсАА)<1/2)||$IТТII[i][$0coMM]===$OeесA)
{
var $НсcIеТ=$Н1еHl($IТТII[i][$ОоНр1],$IТТII[i][$eрoeе]);

$IТТII[i][$eрoeе]-=Math.cos($OIe1ТM)*$НсcIеТ*Math.cos($OсpсАА)*2;
$IТТII[i][$ОоНр1]-=Math.sin($OIe1ТM)*$НсcIеТ*Math.cos($OсpсАА)*2;

var $oоpIНT=$Н1еHl($IТТII[i][$ОоНр1],$IТТII[i][$eрoeе]);
if($oоpIНT>0)
{
$IТТII[i][$eрoeе]=$IТТII[i][$eрoeе]/$oоpIНT*$НсcIеТ;
$IТТII[i][$ОоНр1]=$IТТII[i][$ОоНр1]/$oоpIНT*$НсcIеТ;
}

$oТоМMо*=0.5;

if($IТТII[i][$0coMM]===$OeесA)
{
if($IТТII[i].currentFrame===29)
$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],21,$IТТII[i].rotation,0);
else
if($IТТII[i].currentFrame===51)
$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],24,$IТТII[i].rotation,0);
else
if($IТТII[i].currentFrame===40)
$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],22,$IТТII[i].rotation,0);
else
if($IТТII[i].currentFrame===48||$IТТII[i].currentFrame===22)
$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],23,$IТТII[i].rotation,0);
else
{
if($IТТII[i].$сeHpНp<5)
$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],5,$IТТII[i].rotation,0);
else
$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],17,$IТТII[i].rotation,0);
}
$р00Ap($IТТII[$0ОoHс][$eТоM]+Math.cos($OIe1ТM)*$еМсAIе,$IТТII[$0ОoHс][$рHОМ]+Math.sin($OIe1ТM)*$еМсAIе,6,0,0);
}
}
cx=$oТоМMо;
var iter;
if($IТТII[i][$0coMM]===$OeесA)
{
for(iter=0;iter<Math.sqrt(cx)*2||iter<3;iter++)
$р00Ap($IТТII[i][$eТоM]-$IТТII[i][$eрoeе],$IТТII[i][$рHОМ]-$IТТII[i][$ОоНр1],8,-$IТТII[i][$eрoeе]*cx*0.03*Math.random(),-$IТТII[i][$ОоНр1]*cx*0.03*Math.random());
}
else
{
for(iter=0;iter<Math.sqrt(cx)*2||iter<3;iter++)
$р00Ap($IТТII[$0ОoHс][$eТоM]+Math.cos($OIe1ТM)*$еМсAIе,$IТТII[$0ОoHс][$рHОМ]+Math.sin($OIe1ТM)*$еМсAIе,8,-$IТТII[i][$eрoeе]*cx*0.03*Math.random(),-$IТТII[i][$ОоНр1]*cx*0.03*Math.random());
}



















if(!$pMМ1||$НAlНc===$IТТII[i].$OOHAТ||!$0Ме1А[$IТТII[i].$OOHAТ].$HМ0М1||
$IТТII[$0ОoHс].$еTМТ0О===undefined)
{
let $Оeeоp=Math.round($oТоМMо*8);

let $lМpАОH=Math.ceil($IТТII[$0ОoHс][$МIIро]);

$ТеTAo($0ОoHс,$Оeeоp);

if($НAlНc===$IТТII[i].$OOHAТ&&$pMМ1)
if($IТТII[$0ОoHс].$еTМТ0О!==undefined)
{
$ММ.Event(

$ММ[$1cТеМ],

$ММ.$Oоolр($IТТII[$0ОoHс].$еTМТ0О),

$ММ.$Oоolр($lМpАОH),

$ММ.$Oоolр($Оeeоp),

$ММ.$Oоolр($IТТII[$0ОoHс].$OOHAТ)

);
}
}


if($oТоМMо>0)
{
if($ОеoIc[i2].io)
{
if($oТоМMо>1.2)
$оp0Нc($lMMеМo,$IТТII[i][$eТоM],$IТТII[i][$рHОМ]);
else
$оp0Нc($1OсpIO,$IТТII[i][$eТоM],$IТТII[i][$рHОМ]);
}
$IТТII[i].$МecHM-=$oТоМMо;
}


if($IТТII[i].$МecHM<0.4)
$IТТII[i].visible=false;
else
$IТТII[i].rotation=270-Math.atan2($IТТII[i][$eрoeе],$IТТII[i][$ОоНр1])/Math.PI*180;

}
}
}
}



if($IТТII[i][$0coMM]!==$АМeеM)
{
let p=$IТТII[i];





let $MMMТpT=$о001lO($IТТII[i][$eТоM],$IТТII[i][$рHОМ]);


for(let $0ОoHс=0;$0ОoHс<$MMMТpT.length;$0ОoHс++)
{
let i2=$MMMТpT[$0ОoHс];

if($IТТII[i].$МО1Tрp!=i2)
{
if(Math.max(p.$oIОMeТ,p.$MOIрOM)>=$сАоОo[i2])
if(Math.min(p.$oIОMeТ,p.$MOIрOM)<=$сАоОo[i2]+$с0МAр[i2])
if(Math.max(p.$1рМоОМ,p.$1ApоpО)>=$o1О00[i2])
if(Math.min(p.$1рМоОМ,p.$1ApоpО)<=$o1О00[i2]+$MМрTТ[i2])




{

for(let $0ОoHс=0;$0ОoHс<4;$0ОoHс++)
if(($IТТII[i][$eрoeе]>0&&$0ОoHс==2)||($IТТII[i][$eрoeе]<0&&$0ОoHс==1)||($IТТII[i][$ОоНр1]>0&&$0ОoHс==0)||($IТТII[i][$ОоНр1]<0&&$0ОoHс==3))
{
if($0ОoHс==0)
{
x3=$сАоОo[i2];
$ОOHТМ=$o1О00[i2];
x4=$сАоОo[i2]+$с0МAр[i2];
$poAрl=$o1О00[i2];
}else
if($0ОoHс==1)
{
x3=$сАоОo[i2]+$с0МAр[i2];
$ОOHТМ=$o1О00[i2];
x4=$сАоОo[i2]+$с0МAр[i2];
$poAрl=$o1О00[i2]+$MМрTТ[i2];
}else
if($0ОoHс==2)
{
x3=$сАоОo[i2];
$ОOHТМ=$o1О00[i2];
x4=$сАоОo[i2];
$poAрl=$o1О00[i2]+$MМрTТ[i2];
}else

{
x3=$сАоОo[i2];
$ОOHТМ=$o1О00[i2]+$MМрTТ[i2];
x4=$сАоОo[i2]+$с0МAр[i2];
$poAрl=$o1О00[i2]+$MМрTТ[i2];
}

v=(($HОpcl-$MOH01)*($ОOHТМ-$MрIеО)+($llМTO-$MрIеО)*($MOH01-x3))/(($llМTO-$MрIеО)*(x4-x3)-($HОpcl-$MOH01)*($poAрl-$ОOHТМ));
$ТOHHМ=x3+(x4-x3)*v;
$lHTсH=$ОOHТМ+($poAрl-$ОOHТМ)*v;






if(($MOH01<$HОpcl ? $MOH01 : $HОpcl)-1<=$ТOHHМ)
if(($MOH01>$HОpcl ? $MOH01 : $HОpcl)+1>=$ТOHHМ)
if(($MрIеО<$llМTO ? $MрIеО : $llМTO)-1<=$lHTсH)
if(($MрIеО>$llМTO ? $MрIеО : $llМTO)+1>=$lHTсH)

if($сАоОo[i2]-1<=$ТOHHМ)
if($сАоОo[i2]+1+$с0МAр[i2]>=$ТOHHМ)
if($o1О00[i2]-1<=$lHTсH)
if($o1О00[i2]+1+$MМрTТ[i2]>=$lHTсH)
if($сI0рp!=-2)

if($сI0рp==-1
||
$НOНОН(rx,ry,$IТТII[i].$oIОMeТ,$IТТII[i].$1рМоОМ)>
$НOНОН($ТOHHМ,$lHTсH,$IТТII[i].$oIОMeТ,$IТТII[i].$1рМоОМ))
{
rx=$ТOHHМ;
ry=$lHTсH;
$сI0рp=$0ОoHс;
$IТТII[i].$МО1Tрp=i2;
}
}
}

if($сI0рp==-1)
{




if($IТТII[i].$oIОMeТ>=$сАоОo[i2])
if($IТТII[i].$oIОMeТ<=$сАоОo[i2]+$с0МAр[i2])
if($IТТII[i].$1рМоОМ>=$o1О00[i2])
if($IТТII[i].$1рМоОМ<=$o1О00[i2]+$MМрTТ[i2])
{


rx=$IТТII[i].$oIОMeТ;
ry=$IТТII[i].$1рМоОМ;
$сI0рp=-2;
$IТТII[i].$МО1Tрp=i2;
}
}
}
}



for(let i2=0;i2<$сMelН;i2++)
if($IТТII[i].$МО1Tрp!=-1-i2)
{
if(Math.max(p.$oIОMeТ,p.$MOIрOM)>=$АAHОе[i2][$eТоM])
if(Math.min(p.$oIОMeТ,p.$MOIрOM)<=$АAHОе[i2][$eТоM]+$АAHОе[i2].w)
if(Math.max(p.$1рМоОМ,p.$1ApоpО)>=$АAHОе[i2][$рHОМ])
if(Math.min(p.$1рМоОМ,p.$1ApоpО)<=$АAHОе[i2][$рHОМ]+$АAHОе[i2].h)




{

for($0ОoHс=0;$0ОoHс<4;$0ОoHс++)
if(($IТТII[i][$eрoeе]>0&&$0ОoHс==2)||($IТТII[i][$eрoeе]<0&&$0ОoHс==1)||($IТТII[i][$ОоНр1]>0&&$0ОoHс==0)||($IТТII[i][$ОоНр1]<0&&$0ОoHс==3))
{
if($0ОoHс==0)
{
x3=$АAHОе[i2][$eТоM];
$ОOHТМ=$АAHОе[i2][$рHОМ];
x4=$АAHОе[i2][$eТоM]+$АAHОе[i2].w;
$poAрl=$АAHОе[i2][$рHОМ];
}else
if($0ОoHс==1)
{
x3=$АAHОе[i2][$eТоM]+$АAHОе[i2].w;
$ОOHТМ=$АAHОе[i2][$рHОМ];
x4=$АAHОе[i2][$eТоM]+$АAHОе[i2].w;
$poAрl=$АAHОе[i2][$рHОМ]+$АAHОе[i2].h;
}else
if($0ОoHс==2)
{
x3=$АAHОе[i2][$eТоM];
$ОOHТМ=$АAHОе[i2][$рHОМ];
x4=$АAHОе[i2][$eТоM];
$poAрl=$АAHОе[i2][$рHОМ]+$АAHОе[i2].h;
}else
if($0ОoHс==3)
{
x3=$АAHОе[i2][$eТоM];
$ОOHТМ=$АAHОе[i2][$рHОМ]+$АAHОе[i2].h;
x4=$АAHОе[i2][$eТоM]+$АAHОе[i2].w;
$poAрl=$АAHОе[i2][$рHОМ]+$АAHОе[i2].h;
}

v=(($HОpcl-$MOH01)*($ОOHТМ-$MрIеО)+($llМTO-$MрIеО)*($MOH01-x3))/(($llМTO-$MрIеО)*(x4-x3)-($HОpcl-$MOH01)*($poAрl-$ОOHТМ));
$ТOHHМ=x3+(x4-x3)*v;
$lHTсH=$ОOHТМ+($poAрl-$ОOHТМ)*v;






if(($MOH01<$HОpcl ? $MOH01 : $HОpcl)-1<=$ТOHHМ)
if(($MOH01>$HОpcl ? $MOH01 : $HОpcl)+1>=$ТOHHМ)
if(($MрIеО<$llМTO ? $MрIеО : $llМTO)-1<=$lHTсH)
if(($MрIеО>$llМTO ? $MрIеО : $llМTO)+1>=$lHTсH)

if($АAHОе[i2][$eТоM]-1<=$ТOHHМ)
if($АAHОе[i2][$eТоM]+1+$АAHОе[i2].w>=$ТOHHМ)
if($АAHОе[i2][$рHОМ]-1<=$lHTсH)
if($АAHОе[i2][$рHОМ]+1+$АAHОе[i2].h>=$lHTсH)
if($сI0рp!=-2)


if($сI0рp==-1
||$НOНОН(rx,ry,$IТТII[i].$oIОMeТ,$IТТII[i].$1рМоОМ)>$НOНОН($ТOHHМ,$lHTсH,$IТТII[i].$oIОMeТ,$IТТII[i].$1рМоОМ))
{
rx=$ТOHHМ;
ry=$lHTсH;
$сI0рp=$0ОoHс;
$IТТII[i].$МО1Tрp=-1-i2;


if($АAHОе[i2].$рAlНН!==-1)
if($IТТII[i].$OOHAТ===$НAlНc||!$pMМ1)
{
$Oр0ol=$НAlНc;
$MppHI=$IТТII[i].$МecHM;
if($pАTIТ($АAHОе[i2].$рAlНН))
{
if($IТТII[i].$OOHAТ==$НAlНc)
if($pMМ1)
$ММ.Event(

$ММ[$OlopT],

$ММ.$Oоolр($АAHОе[i2].$рAlНН),

$0OрТ,

$ММ.$Oоolр($IТТII[i].$МecHM*100),
);

}
}
}
}
}

if($сI0рp==-1)
{








if($IТТII[i].$oIОMeТ>=$АAHОе[i2][$eТоM])
if($IТТII[i].$oIОMeТ<=$АAHОе[i2][$eТоM]+$АAHОе[i2].w)
if($IТТII[i].$1рМоОМ>=$АAHОе[i2][$рHОМ])
if($IТТII[i].$1рМоОМ<=$АAHОе[i2][$рHОМ]+$АAHОе[i2].h)
{
rx=$IТТII[i].$oIОMeТ;
ry=$IТТII[i].$1рМоОМ;


$сI0рp=-2;
$IТТII[i].$МО1Tрp=-1-i2;
}
}
}


if($сI0рp!=-1)
{
$IТТII[i].$MOIрOM=rx;
$IТТII[i].$1ApоpО=ry;


$AeеolО=()=>
{
if($IТТII[i][$0coMM]===$МA1ре||$IТТII[i][$0coMM]===$O1есo||$IТТII[i][$0coMM]===$МО1еH)
$IТТII[i].visible=false;

if($IТТII[i][$0coMM]===$O1есo)
{
$р00Ap(rx,ry,1,$IТТII[i].$МecHM,0);
$р00Ap(rx-$IТТII[i][$eрoeе]*0.1,ry-$IТТII[i][$ОоНр1]*0.1,8,-$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.06,-$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.06);
$р00Ap(rx-$IТТII[i][$eрoeе]*0.1,ry-$IТТII[i][$ОоНр1]*0.1,8,-$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.06,-$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.06);
$р00Ap(rx-$IТТII[i][$eрoeе]*0.1,ry-$IТТII[i][$ОоНр1]*0.1,8,-$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.06,-$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.06);
}

if($IТТII[i][$0coMM]===$0НА0o)
{
$р00Ap(rx,ry,$1cМоо.$oоopM,$IТТII[i].$МecHM,0);

if($сI0рp==0||$сI0рp==3)
{
$HОpcl=$сTpНО($IТТII[i][$eрoeе]);
$llМTO=$сTpНО($IТТII[i][$ОоНр1]);
}
else
{
$HОpcl=$сTpНО($IТТII[i][$ОоНр1]);
$llМTO=$сTpНО($IТТII[i][$eрoeе]);
}
if(($llМTO<$HОpcl/2||$IТТII[i].currentFrame===38)&&$сI0рp!=-2)
{
if($сI0рp==0)
$IТТII[i][$ОоНр1]=-$сTpНО($IТТII[i][$ОоНр1]);
if($сI0рp==3)
$IТТII[i][$ОоНр1]=$сTpНО($IТТII[i][$ОоНр1]);
if($сI0рp==1)
$IТТII[i][$eрoeе]=$сTpНО($IТТII[i][$eрoeе]);
if($сI0рp==2)
$IТТII[i][$eрoeе]=-$сTpНО($IТТII[i][$eрoeе]);

$IТТII[i].clearMCInterpolationData();

if($IТТII[i].currentFrame===38)
{

$IТТII[i].$МecHM*=0.75;

if($IТТII[i].$МecHM<0.4)
$IТТII[i].visible=false;
else
{
$оp0Нc($МA1Alр,$IТТII[i][$eТоM],$IТТII[i][$рHОМ]);

$IТТII[i][$eТоM]=rx+Math.sign($IТТII[i][$eрoeе]);
$IТТII[i][$рHОМ]=ry+Math.sign($IТТII[i][$ОоНр1]);

$IТТII[i].rotation=-90-Math.atan2($IТТII[i][$eрoeе],$IТТII[i][$ОоНр1])/Math.PI*180;
}
}
else
{
$IТТII[i].$МecHM*=0.5;

if($IТТII[i].$МecHM<0.4)
$IТТII[i].visible=false;
else
{
$IТТII[i][$eТоM]=rx+Math.sign($IТТII[i][$eрoeе]);
$IТТII[i][$рHОМ]=ry+Math.sign($IТТII[i][$ОоНр1]);

$IТТII[i].rotation=-90-Math.atan2($IТТII[i][$eрoeе],$IТТII[i][$ОоНр1])/Math.PI*180;
}
}
}
else
{
$HОpcl=$IТТII[i].$МecHM*0.57*$НАоoO;
if($HОpcl>0.816*$НАоoO)
$HОpcl=0.816*$НАоoO;

if($0oеcН(rx+$IТТII[i][$eрoeе]*$HОpcl,ry+$IТТII[i][$ОоНр1]*$HОpcl))
{




$IТТII[i][$eТоM]=$IТТII[i].$MOIрOM;
$IТТII[i][$рHОМ]=$IТТII[i].$1ApоpО;






let $0AТMeT=1;
let step=0.1;
for(let $HНOIOc=step;$HНOIOc<=1;$HНOIOc+=step)
if($ТНOМНI(rx+$IТТII[i][$eрoeе]*$HОpcl*$HНOIOc,ry+$IТТII[i][$ОоНр1]*$HОpcl*$HНOIOc))
{
$0AТMeT=$HНOIOc;
break;
}




$р00Ap(rx+$IТТII[i][$eрoeе]*$HОpcl*$0AТMeT,ry+$IТТII[i][$ОоНр1]*$HОpcl*$0AТMeT,$1cМоо.$pAеоо,$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.06,$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.06);
$р00Ap(rx+$IТТII[i][$eрoeе]*$HОpcl*$0AТMeT,ry+$IТТII[i][$ОоНр1]*$HОpcl*$0AТMeT,$1cМоо.$pAеоо,$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.06,$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.06);




$р00Ap(rx,ry,$1cМоо.$pAеоо,-$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.06,-$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.06);
$р00Ap(rx,ry,$1cМоо.$pAеоо,-$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.06,-$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.06);


$IТТII[i].$МecHM*=0.7;

if($IТТII[i].$МecHM<0.4)
$IТТII[i].visible=false;
}
else
$IТТII[i].visible=false;
}
}

if($IТТII[i][$0coMM]===$OeесA&&$pMМ1&&($IcеНе!==$ММ.$рocoТ))
{
$IТТII[i].$МecHM*=0.35;

if($IТТII[i].$МecHM<0.4)
{
if($сI0рp!=-2)
{

$IТТII[i][$eТоM]=rx-$IТТII[i][$eрoeе]*0.5;
$IТТII[i][$рHОМ]=ry-$IТТII[i][$ОоНр1]*0.5;

$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],$оMeAeH($IТТII[i]),$IТТII[i].rotation,0);

$IТТII[i][$eТоM]=rx+$IТТII[i][$eрoeе]*0.5;
$IТТII[i][$рHОМ]=ry+$IТТII[i][$ОоНр1]*0.5;
}

$IТТII[i].visible=false;
}
else
{


if($сI0рp!=-2)
{

$IТТII[i][$eТоM]=rx-$IТТII[i][$eрoeе]*0.5;
$IТТII[i][$рHОМ]=ry-$IТТII[i][$ОоНр1]*0.5;

$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],$оMeAeH($IТТII[i]),$IТТII[i].rotation,0);




















$р00Ap(rx,ry,$1cМоо.$АI1рТ,0,0);
}

if($сI0рp==0)
$IТТII[i][$ОоНр1]=-$сTpНО($IТТII[i][$ОоНр1]);
if($сI0рp==3)
$IТТII[i][$ОоНр1]=$сTpНО($IТТII[i][$ОоНр1]);
if($сI0рp==1)
$IТТII[i][$eрoeе]=$сTpНО($IТТII[i][$eрoeе]);
if($сI0рp==2)
$IТТII[i][$eрoeе]=-$сTpНО($IТТII[i][$eрoeе]);
if($сI0рp==-2)
{
$IТТII[i].visible=false;
}




$IТТII[i][$eТоM]=rx+Math.sign($IТТII[i][$eрoeе]);
$IТТII[i][$рHОМ]=ry+Math.sign($IТТII[i][$ОоНр1]);

$IТТII[i][$eТоM]+=$IТТII[i][$eрoeе]*0.5;
$IТТII[i][$рHОМ]+=$IТТII[i][$ОоНр1]*0.5;

$IТТII[i].rotation=-90-Math.atan2($IТТII[i][$eрoeе],$IТТII[i][$ОоНр1])/Math.PI*180;
}
}
else
if($IТТII[i][$0coMM]===$OeесA)
{
if($сI0рp!=-2)
{

$IТТII[i][$eТоM]=rx-$IТТII[i][$eрoeе]*0.5;
$IТТII[i][$рHОМ]=ry-$IТТII[i][$ОоНр1]*0.5;

$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],$оMeAeH($IТТII[i]),$IТТII[i].rotation,0);

$IТТII[i][$eТоM]=rx+$IТТII[i][$eрoeе]*0.5;
$IТТII[i][$рHОМ]=ry+$IТТII[i][$ОоНр1]*0.5;
}

$IТТII[i].visible=false;
}
};
}

ok=true;
for(i2=0;i2<$оTolТ;i2++)
if($IТТII[i][$eТоM]>$ММoОo[i2])
if($IТТII[i][$eТоM]<$ММoОo[i2]+$р1lMр[i2])
if($IТТII[i][$рHОМ]>$11ТоО[i2])
if($IТТII[i][$рHОМ]<$11ТоО[i2]+$coТНp[i2])
if($Оcocр[i2])
{
if($ТHoA1&&!$АМеMА)
$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],2,0,0);

ok=false;
if($IТТII[i].$соТМАc==false)
{
$р00Ap($IТТII[i][$eТоM],$11ТоО[i2],3,0,$IТТII[i][$ОоНр1]);
$IТТII[i].$соТМАc=true;
}

}
if(ok)
{
if($IТТII[i].$соТМАc)
{
$IТТII[i].$соТМАc=false;
$р00Ap($IТТII[i][$eТоM]-$IТТII[i][$eрoeе]/2,$IТТII[i][$рHОМ]-$IТТII[i][$ОоНр1]/2,3,0,$IТТII[i][$ОоНр1]);
}
}
}


if($IТТII[i][$0coMM]!==$НТIТo)
for($0ОoHс=0;$0ОoHс<$TТlАM;$0ОoHс++)
if($сoopT[$0ОoHс].io)

if($IТТII[i].$OOHAТ==-1||$сoopT[$0ОoHс].$OOHAТ==-1||$0Ме1А[$IТТII[i].$OOHAТ][$cАocе]!==$0Ме1А[$сoopT[$0ОoHс].$OOHAТ][$cАocе]||($сoopT[$0ОoHс].$eрlсe==7&&$IТТII[i].$OOHAТ!=$сoopT[$0ОoHс].$OOHAТ))
{
ok=false;
if($сoopT[$0ОoHс].$eрlсe==0)
for($AMTT1=0;$AMTT1<7&&!ok;$AMTT1++)
{
if($AMTT1==$НAlНc)
i2=$сoopT[$0ОoHс].$MpoсеM;
if($AMTT1==1)
i2=$сoopT[$0ОoHс].$МНIppО;
if($AMTT1==2)
i2=$сoopT[$0ОoHс].b_c;
if($AMTT1==3)
i2=$сoopT[$0ОoHс].b_c2;
if($AMTT1==4)
i2=$сoopT[$0ОoHс].b_c3;
if($AMTT1==5)
i2=$сoopT[$0ОoHс].$ТA0OОl;
if($AMTT1==6)
i2=$сoopT[$0ОoHс].$оlНАMо;

if($IТТII[i][$eТоM]>=$Il[i2]-$оОlHT[i2]*0.8-$сTpНО($IТТII[i][$eрoeе])/2+$IТТII[i][$eрoeе])
if($IТТII[i][$eТоM]<=$Il[i2]+$оОlHT[i2]*0.8+$сTpНО($IТТII[i][$eрoeе])/2+$IТТII[i][$eрoeе])
if($IТТII[i][$рHОМ]>=$0OA[i2]-$оОlHT[i2]*0.8-$сTpНО($IТТII[i][$ОоНр1])/2+$IТТII[i][$ОоНр1])
if($IТТII[i][$рHОМ]<=$0OA[i2]+$оОlHT[i2]*0.8+$сTpНО($IТТII[i][$ОоНр1])/2+$IТТII[i][$ОоНр1])
{
ok=true;

$OTpc1[i2]=($OTpc1[i2]*40+$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*$IТТII[i].$oТоAр)/(39+$IТТII[i].$МecHM);
$IрТ0H[i2]=($IрТ0H[i2]*40+$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*$IТТII[i].$oТоAр)/(39+$IТТII[i].$МecHM);



$0Н0Тl(i2);

$сoopT[$0ОoHс][$МIIро]-=$IТТII[i].$МecHM*10;

$IТТII[i].visible=false;
$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],1,$IТТII[i].$МecHM,0);

$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],8,-$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.04,-$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.04);
$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],8,-$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.05,-$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.05);
$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],8,-$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.1,-$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.1);

}
}
if($сoopT[$0ОoHс].$eрlсe==1)
for($AMTT1=0;$AMTT1<7&&!ok;$AMTT1++)
{
if($AMTT1==$НAlНc)
i2=$сoopT[$0ОoHс].$MpoсеM;
if($AMTT1==1)
i2=$сoopT[$0ОoHс].$МНIppО;
if($AMTT1==2)
i2=$сoopT[$0ОoHс].$c0НlТ;
if($AMTT1==3)
i2=$сoopT[$0ОoHс].$рееоp;
if($AMTT1==4)
i2=$сoopT[$0ОoHс].$0poolе;
if($AMTT1==5)
i2=$сoopT[$0ОoHс].$ТA0OОl;
if($AMTT1==6)
i2=$сoopT[$0ОoHс].$оlНАMо;

if($IТТII[i][$eТоM]>=$Il[i2]-$оОlHT[i2]*0.8-$сTpНО($IТТII[i][$eрoeе])/2+$IТТII[i][$eрoeе])
if($IТТII[i][$eТоM]<=$Il[i2]+$оОlHT[i2]*0.8+$сTpНО($IТТII[i][$eрoeе])/2+$IТТII[i][$eрoeе])
if($IТТII[i][$рHОМ]>=$0OA[i2]-$оОlHT[i2]*0.8-$сTpНО($IТТII[i][$ОоНр1])/2+$IТТII[i][$ОоНр1])
if($IТТII[i][$рHОМ]<=$0OA[i2]+$оОlHT[i2]*0.8+$сTpНО($IТТII[i][$ОоНр1])/2+$IТТII[i][$ОоНр1])
{
ok=true;

$OTpc1[i2]=($OTpc1[i2]*40+$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*$IТТII[i].$oТоAр)/(39+$IТТII[i].$МecHM);
$IрТ0H[i2]=($IрТ0H[i2]*40+$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*$IТТII[i].$oТоAр)/(39+$IТТII[i].$МecHM);



$0Н0Тl(i2);
$сoopT[$0ОoHс][$МIIро]-=$IТТII[i].$МecHM*10;

$IТТII[i].visible=false;
$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],1,$IТТII[i].$МecHM,0);

$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],8,-$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.04,-$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.04);
$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],8,-$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.05,-$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.05);
$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],8,-$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.1,-$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.1);

}
}
if($сoopT[$0ОoHс].$eрlсe==3)
if($сoopT[$0ОoHс][$МIIро]>0)
{
i2=$сoopT[$0ОoHс].b_c;
if($IТТII[i].$MOIрOM>=$Il[i2]-30-$сTpНО($IТТII[i][$eрoeе]))
if($IТТII[i].$MOIрOM<=$Il[i2]+30+$сTpНО($IТТII[i][$eрoeе]))
if($IТТII[i].$1ApоpО>=$0OA[i2]-30-$сTpНО($IТТII[i][$ОоНр1]))
if($IТТII[i].$1ApоpО<=$0OA[i2]+30+$сTpНО($IТТII[i][$ОоНр1]))
if($ААHМpc(i,[$сoopT[$0ОoHс].$oIHАHc,$сoopT[$0ОoHс].$Арс0ce,$сoopT[$0ОoHс].$TоТpAе,$сoopT[$0ОoHс].$МрII1А],-0.5,$сoopT[$0ОoHс]))
{
let $ATОТН1=$ТOHHМ;
let $Нlосlс=$lHTсH;

ok=true;

$OTpc1[i2]+=$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.03*$IТТII[i].$oТоAр;
$IрТ0H[i2]+=$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.03*$IТТII[i].$oТоAр;

$OTpc1[$сoopT[$0ОoHс].$oIHАHc]+=$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.03*$IТТII[i].$oТоAр;
$IрТ0H[$сoopT[$0ОoHс].$oIHАHc]+=$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.03*$IТТII[i].$oТоAр;

$OTpc1[$сoopT[$0ОoHс].$Арс0ce]+=$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.03*$IТТII[i].$oТоAр;
$IрТ0H[$сoopT[$0ОoHс].$Арс0ce]+=$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.03*$IТТII[i].$oТоAр;

$OTpc1[$сoopT[$0ОoHс].$МрII1А]+=$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.03*$IТТII[i].$oТоAр;
$IрТ0H[$сoopT[$0ОoHс].$МрII1А]+=$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.03*$IТТII[i].$oТоAр;

$OTpc1[$сoopT[$0ОoHс].$TоТpAе]+=$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.03*$IТТII[i].$oТоAр;
$IрТ0H[$сoopT[$0ОoHс].$TоТpAе]+=$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.03*$IТТII[i].$oТоAр;



$0Н0Тl(i2);

$AМlоН[$сoopT[$0ОoHс].$oIHАHc]=true;
$AМlоН[$сoopT[$0ОoHс].$Арс0ce]=true;
$AМlоН[$сoopT[$0ОoHс].$МрII1А]=true;
$AМlоН[$сoopT[$0ОoHс].$TоТpAе]=true;
$сoopT[$0ОoHс][$МIIро]-=$IТТII[i].$МecHM*10;

$MАTАl[$сoopT[$0ОoHс].$oIHАHc]=0;
$MАTАl[$сoopT[$0ОoHс].$Арс0ce]=0;
$MАTАl[$сoopT[$0ОoHс].$МрII1А]=0;
$MАTАl[$сoopT[$0ОoHс].$TоТpAе]=0;

$IТТII[i].visible=false;
$р00Ap($ATОТН1,$Нlосlс,1,$IТТII[i].$МecHM,0);
$р00Ap($ATОТН1,$Нlосlс,8,-$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.04,-$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.04);
$р00Ap($ATОТН1,$Нlосlс,8,-$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.05,-$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.05);
$р00Ap($ATОТН1,$Нlосlс,8,-$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.1,-$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.1);

$оp0Нc($oppTIM,$IТТII[i][$eТоM],$IТТII[i][$рHОМ]);

}
}
if($сoopT[$0ОoHс].$eрlсe==4||$сoopT[$0ОoHс].$eрlсe==7)

{
i2=$сoopT[$0ОoHс].b_c;
if($сoopT[$0ОoHс].$eрlсe==4)
{
u=20;
v=20;
}
else
{
u=75;
v=50;
}
if($IТТII[i][$eТоM]>=$Il[i2]-u-$сTpНО($IТТII[i][$eрoeе])/2+$IТТII[i][$eрoeе])
if($IТТII[i][$eТоM]<=$Il[i2]+u+$сTpНО($IТТII[i][$eрoeе])/2+$IТТII[i][$eрoeе])
if($IТТII[i][$рHОМ]>=$0OA[i2]-v-$сTpНО($IТТII[i][$ОоНр1])/2+$IТТII[i][$ОоНр1])
if($IТТII[i][$рHОМ]<=$0OA[i2]+v+$сTpНО($IТТII[i][$ОоНр1])/2+$IТТII[i][$ОоНр1])
{
ok=true;

if($сoopT[$0ОoHс].$eрlсe==4)
{
u=$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.05*$IТТII[i].$oТоAр;
v=$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.05*$IТТII[i].$oТоAр;
}
else
{
u=$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.01*$IТТII[i].$oТоAр;
v=$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.01*$IТТII[i].$oТоAр;
}

$OTpc1[i2]+=u;
$IрТ0H[i2]+=v;

$OTpc1[$сoopT[$0ОoHс].b_c1]+=u;
$IрТ0H[$сoopT[$0ОoHс].b_c1]+=v;

$OTpc1[$сoopT[$0ОoHс].b_c2]+=u;
$IрТ0H[$сoopT[$0ОoHс].b_c2]+=v;

$OTpc1[$сoopT[$0ОoHс].b_c3]+=u;
$IрТ0H[$сoopT[$0ОoHс].b_c3]+=v;

$AМlоН[i2]=true;
$AМlоН[$сoopT[$0ОoHс].b_c1]=true;
$AМlоН[$сoopT[$0ОoHс].b_c2]=true;
$AМlоН[$сoopT[$0ОoHс].b_c3]=true;
$сoopT[$0ОoHс][$МIIро]-=$IТТII[i].$МecHM*10;

$MАTАl[i2]=0;
$MАTАl[$сoopT[$0ОoHс].b_c1]=0;
$MАTАl[$сoopT[$0ОoHс].b_c2]=0;
$MАTАl[$сoopT[$0ОoHс].b_c3]=0;

$IТТII[i].visible=false;
$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],1,$IТТII[i].$МecHM,0);

$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],8,-$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.04,-$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.04);
$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],8,-$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.05,-$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.05);
$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],8,-$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.1,-$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.1);

if($сoopT[$0ОoHс].$eрlсe==4)
{
if(!$сoopT[$0ОoHс].$оeoТе)
$MрТ1o($сoopT[$0ОoHс],$eсOlAI,true);



if(Math.random()>0.5)
$оp0Нc($ОМА0АТ,$IТТII[i][$eТоM],$IТТII[i][$рHОМ]);
else
$оp0Нc($I0cНcl,$IТТII[i][$eТоM],$IТТII[i][$рHОМ]);
}
else
{
$оp0Нc($о1А0M,$IТТII[i][$eТоM],$IТТII[i][$рHОМ]);
}


}
}
if(ok)
if($сoopT[$0ОoHс].$OOHAТ!=-1)
if(!$сoopT[$0ОoHс].$оeoТе)
{
$Hерoоe($0Ме1А[$сoopT[$0ОoHс].$OOHAТ])
$0Ме1А[$сoopT[$0ОoHс].$OOHAТ][$0MТce]=$IТТII[i].$OOHAТ;


if($IТТII[i].$OOHAТ==$НAlНc)
if(!$сoopT[$0ОoHс].$оeoТе)
{
$poTMc++;
$АTсре+=$IТТII[i].$МecHM*10;


}

if($IТТII[i].$OOHAТ==$НAlНc)
{
if($0lpеo&&$00МeI)
{
$eMpсp.alpha+=$IТТII[i].$МecHM*10/$сoopT[$0ОoHс].hmax;
if($сoopT[$0ОoHс][$МIIро]<=0)
$eMpсp.alpha+=0.5;

$eMpсp.visible=true;
}
$орOeТ($IТТII[i].$МecHM*10);
if($сoopT[$0ОoHс][$МIIро]<=0)
$сpНеH($0Ме1А[$сoopT[$0ОoHс].$OOHAТ][$cАocе]===$0Ме1А[$НAlНc][$cАocе],$0Ме1А[$сoopT[$0ОoHс].$OOHAТ]);
}

if($0Ме1А[$сoopT[$0ОoHс].$OOHAТ][$cАocе]!=$0Ме1А[$НAlНc][$cАocе])
if(!$сoopT[$0ОoHс].$оeoТе)
if($сoopT[$0ОoHс][$МIIро]<=0)

if($IТТII[i][$НeHо1]===$TрTМM)
$роHlс(17);
}

}

if($IТТII[i][$0coMM]!==$НТIТo)
for(i2=0;i2<$cс0Hс;i2++)

if(!$IТТII[i].$AМ1clр($AАТрТ,i2))
if($ОpMрс[i2].io)
if($ОpMрс[i2].picken_by!=$IТТII[i].$OOHAТ)
if($ОpMрс[i2].picken_by==-1)
{
$eMOАе=$ОpMрс[i2];


if($IТТII[i][$eТоM]>=$eMOАе[$eТоM]-100)
if($IТТII[i][$eТоM]<=$eMOАе[$eТоM]+100)
if($IТТII[i][$рHОМ]>=$eMOАе[$рHОМ]-100)
if($IТТII[i][$рHОМ]<=$eMOАе[$рHОМ]+100)
if($0cc1АA(i,$eMOАе.$c0НlТ)||$0cc1АA(i,$eMOАе.$рееоp)||

$TОpе0р($IТТII[i].$oIОMeТ,$IТТII[i].$1рМоОМ,
$IТТII[i].$MOIрOM,$IТТII[i].$1ApоpО,
$Il[$eMOАе.$c0НlТ],$0OA[$eMOАе.$c0НlТ],
$Il[$eMOАе.$рееоp],$0OA[$eMOАе.$рееоp],i))
{

$IТТII[i].$сOо01Т($AАТрТ,i2);

if($IТТII[i].$МecHM<1)
$оp0Нc($АH1оIo,$IТТII[i][$eТоM],$IТТII[i][$рHОМ]);
else
$оp0Нc($сpMcсI,$IТТII[i][$eТоM],$IТТII[i][$рHОМ]);

$HОpcl=$НOНОН($IТТII[i][$eТоM],$IТТII[i][$рHОМ],$Il[$eMOАе.$c0НlТ],$0OA[$eMOАе.$c0НlТ]);
$MOH01=$НOНОН($IТТII[i][$eТоM],$IТТII[i][$рHОМ],$Il[$eMOАе.$рееоp],$0OA[$eMOАе.$рееоp]);
u=$HОpcl+$MOH01;
if(u>1)
{
$HОpcl/=u;
$MOH01/=u;
}
$OTpc1[$eMOАе.$c0НlТ]+=$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.1*$MOH01*$IТТII[i].$oТоAр;
$IрТ0H[$eMOАе.$c0НlТ]+=$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.1*$MOH01*$IТТII[i].$oТоAр;
$OTpc1[$eMOАе.$рееоp]+=$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.1*$HОpcl*$IТТII[i].$oТоAр;
$IрТ0H[$eMOАе.$рееоp]+=$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.1*$HОpcl*$IТТII[i].$oТоAр;








$0Н0Тl($eMOАе.$c0НlТ);
$0Н0Тl($eMOАе.$рееоp);

$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],1,$IТТII[i].$МecHM,0);
$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],8,-$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.04,-$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.04);







}
}

if($IHОIT)
if($IТТII[i][$0coMM]!==$НТIТo)
for(i2=0;i2<$М0AAe;i2++)
if($TTTоо[i2]>0)
{
if($IТТII[i].$MOIрOM>$McТеT[i2]-20-Math.abs($IТТII[i].$oIОMeТ-$IТТII[i].$MOIрOM))
if($IТТII[i].$MOIрOM<$McТеT[i2]+20+Math.abs($IТТII[i].$oIОMeТ-$IТТII[i].$MOIрOM))
if($IТТII[i].$1ApоpО>$ооeep[i2]-20-Math.abs($IТТII[i].$1рМоОМ-$IТТII[i].$1ApоpО))
if($IТТII[i].$1ApоpО<$ооeep[i2]+20+Math.abs($IТТII[i].$1рМоОМ-$IТТII[i].$1ApоpО))
{
if(

$TОpе0р($IТТII[i].$oIОMeТ,$IТТII[i].$1рМоОМ,
$IТТII[i].$MOIрOM,$IТТII[i].$1ApоpО,
$McТеT[i2]-20,$ооeep[i2]-20,
$McТеT[i2]+20,$ооeep[i2]+20,i)||

$TОpе0р($IТТII[i].$oIОMeТ,$IТТII[i].$1рМоОМ,
$IТТII[i].$MOIрOM,$IТТII[i].$1ApоpО,
$McТеT[i2]+20,$ооeep[i2]-20,
$McТеT[i2]-20,$ооeep[i2]+20,i))


{



$р00Ap($IТТII[i][$eТоM]-$IТТII[i][$eрoeе]/2,$IТТII[i][$рHОМ]-$IТТII[i][$ОоНр1]/2,8,$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.04,$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.04);
$р00Ap($IТТII[i][$eТоM]-$IТТII[i][$eрoeе]/2,$IТТII[i][$рHОМ]-$IТТII[i][$ОоНр1]/2,8,$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.05,$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.05);
$р00Ap($IТТII[i][$eТоM]-$IТТII[i][$eрoeе]/2,$IТТII[i][$рHОМ]-$IТТII[i][$ОоНр1]/2,8,$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.1,$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.1);

$р00Ap($IТТII[i][$eТоM]-$IТТII[i][$eрoeе]/2,$IТТII[i][$рHОМ]-$IТТII[i][$ОоНр1]/2,8,$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.09,$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.04);
$р00Ap($IТТII[i][$eТоM]-$IТТII[i][$eрoeе]/2,$IТТII[i][$рHОМ]-$IТТII[i][$ОоНр1]/2,8,$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.1,$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.05);
$р00Ap($IТТII[i][$eТоM]-$IТТII[i][$eрoeе]/2,$IТТII[i][$рHОМ]-$IТТII[i][$ОоНр1]/2,8,$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.2,$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.1);

$IТТII[i].$МecHM=Math.max(0,$IТТII[i].$МecHM-1.5);

if($IТТII[i].$МecHM<0.4)
$IТТII[i].visible=false;

$eoТеMр(i2);


}

}
}

if($IТТII[i][$0coMM]!==$НТIТo)
for(i2=0;i2<$ТeeAo;i2++)

if(!$IТТII[i].$AМ1clр($TAHо,i2))
{
if($еоНМо[i2][$МIIро]>0)
{
$eMOАе=$еоНМо[i2];






if($IТТII[i].$MOIрOM>$eMOАе[$eТоM]-30-Math.abs($IТТII[i].$oIОMeТ-$IТТII[i].$MOIрOM))
if($IТТII[i].$MOIрOM<$eMOАе[$eТоM]+30+Math.abs($IТТII[i].$oIОMeТ-$IТТII[i].$MOIрOM))
if($IТТII[i].$1ApоpО>$eMOАе[$рHОМ]-30-Math.abs($IТТII[i].$1рМоОМ-$IТТII[i].$1ApоpО))
if($IТТII[i].$1ApоpО<$eMOАе[$рHОМ]+30+Math.abs($IТТII[i].$1рМоОМ-$IТТII[i].$1ApоpО))
if($IТТII[i].$OOHAТ===$НAlНc||!$0Ме1А[$IТТII[i].$OOHAТ].$HМ0М1||!$pMМ1)
{
let $МАМAHо=[$eMOАе.$oA0cА,$eMOАе.$cIToе,$eMOАе.$ATМHl,$eMOАе.$lМeOМ];

















































if($ААHМpc(i,$МАМAHо,-0.75,$eMOАе))
{
let $ATОТН1=$ТOHHМ;
let $Нlосlс=$lHTсH;

{

$IТТII[i].$сOо01Т($TAHо,i2);

$OTpc1[$eMOАе.$oA0cА]=($OTpc1[$eMOАе.$oA0cА]*7+$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*$IТТII[i].$oТоAр)/(7+$IТТII[i].$МecHM);
$IрТ0H[$eMOАе.$oA0cА]=($IрТ0H[$eMOАе.$oA0cА]*7+$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*$IТТII[i].$oТоAр)/(7+$IТТII[i].$МecHM);

$OTpc1[$eMOАе.$cIToе]=($OTpc1[$eMOАе.$cIToе]*7+$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*$IТТII[i].$oТоAр)/(7+$IТТII[i].$МecHM);
$IрТ0H[$eMOАе.$cIToе]=($IрТ0H[$eMOАе.$cIToе]*7+$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*$IТТII[i].$oТоAр)/(7+$IТТII[i].$МecHM);

$OTpc1[$eMOАе.$ATМHl]=($OTpc1[$eMOАе.$ATМHl]*7+$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*$IТТII[i].$oТоAр)/(7+$IТТII[i].$МecHM);
$IрТ0H[$eMOАе.$ATМHl]=($IрТ0H[$eMOАе.$ATМHl]*7+$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*$IТТII[i].$oТоAр)/(7+$IТТII[i].$МecHM);

$OTpc1[$eMOАе.$lМeOМ]=($OTpc1[$eMOАе.$lМeOМ]*7+$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*$IТТII[i].$oТоAр)/(7+$IТТII[i].$МecHM);
$IрТ0H[$eMOАе.$lМeOМ]=($IрТ0H[$eMOАе.$lМeOМ]*7+$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*$IТТII[i].$oТоAр)/(7+$IТТII[i].$МecHM);

$eMOАе[$МIIро]-=$IТТII[i].$МecHM*20;
$eMOАе.$OOHAТ=$IТТII[i].$OOHAТ;
$AАoIр(i2,true,true);

$AМlоН[$eMOАе.$oA0cА]=true;
$AМlоН[$eMOАе.$cIToе]=true;
$AМlоН[$eMOАе.$ATМHl]=true;
$AМlоН[$eMOАе.$lМeOМ]=true;







$р00Ap($ATОТН1,$Нlосlс,1,$IТТII[i].$МecHM,0);
$р00Ap($ATОТН1,$Нlосlс,8,-$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.04,-$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.04);
$р00Ap($ATОТН1,$Нlосlс,8,-$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.05,-$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.05);
$р00Ap($ATОТН1,$Нlосlс,8,-$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.1,-$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.1);

}


if($eMOАе[$МIIро]>0)
{
$IТТII[i].$МecHM=Math.max(0,$IТТII[i].$МecHM-1.5);

if($IТТII[i].$OOHAТ==$НAlНc)
{
$poTMc++;



}
}
else
{


}


if($IТТII[i].$МecHM<0.4)
$IТТII[i].visible=false;
}
}
}
else
{
$eMOАе=$еоНМо[i2];
for($0ОoHс=1;$0ОoHс<=2;$0ОoHс++)
{




if(Math.max($IТТII[i].$MOIрOM,$IТТII[i].$oIОMeТ)>=$eMOАе[$eТоM]+$eMOАе[$ОITAe+$0ОoHс][$eТоM]-10)
if(Math.min($IТТII[i].$MOIрOM,$IТТII[i].$oIОMeТ)<=$eMOАе[$eТоM]+$eMOАе[$ОITAe+$0ОoHс][$eТоM]+10)
if(Math.max($IТТII[i].$1ApоpО,$IТТII[i].$1рМоОМ)>=$eMOАе[$рHОМ]+$eMOАе[$ОITAe+$0ОoHс][$рHОМ]-10)
if(Math.min($IТТII[i].$1ApоpО,$IТТII[i].$1рМоОМ)<=$eMOАе[$рHОМ]+$eMOАе[$ОITAe+$0ОoHс][$рHОМ]+10)
if(
$TОpе0р($IТТII[i].$oIОMeТ,$IТТII[i].$1рМоОМ,
$IТТII[i].$MOIрOM,$IТТII[i].$1ApоpО,
$eMOАе[$eТоM]+$eMOАе[$ОITAe+$0ОoHс][$eТоM]-10,$eMOАе[$рHОМ]+$eMOАе[$ОITAe+$0ОoHс][$рHОМ]+10,
$eMOАе[$eТоM]+$eMOАе[$ОITAe+$0ОoHс][$eТоM]+10,$eMOАе[$рHОМ]+$eMOАе[$ОITAe+$0ОoHс][$рHОМ]-10,i)||

$TОpе0р($IТТII[i].$oIОMeТ,$IТТII[i].$1рМоОМ,
$IТТII[i].$MOIрOM,$IТТII[i].$1ApоpО,
$eMOАе[$eТоM]+$eMOАе[$ОITAe+$0ОoHс][$eТоM]-10,$eMOАе[$рHОМ]+$eMOАе[$ОITAe+$0ОoHс][$рHОМ]-10,
$eMOАе[$eТоM]+$eMOАе[$ОITAe+$0ОoHс][$eТоM]+10,$eMOАе[$рHОМ]+$eMOАе[$ОITAe+$0ОoHс][$рHОМ]+10,i))
{

$IТТII[i].$сOо01Т($TAHо,i2);

if($0ОoHс==1)
{
$OTpc1[$eMOАе.$oA0cА]=($OTpc1[$eMOАе.$oA0cА]*7+$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*$IТТII[i].$oТоAр)/(7+$IТТII[i].$МecHM);
$IрТ0H[$eMOАе.$oA0cА]=($IрТ0H[$eMOАе.$oA0cА]*7+$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*$IТТII[i].$oТоAр)/(7+$IТТII[i].$МecHM);

$OTpc1[$eMOАе.$cIToе]=($OTpc1[$eMOАе.$cIToе]*7+$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*$IТТII[i].$oТоAр)/(7+$IТТII[i].$МecHM);
$IрТ0H[$eMOАе.$cIToе]=($IрТ0H[$eMOАе.$cIToе]*7+$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*$IТТII[i].$oТоAр)/(7+$IТТII[i].$МecHM);

$OTpc1[$eMOАе.$oTсНTI]=($OTpc1[$eMOАе.$oTсНTI]*7+$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*$IТТII[i].$oТоAр)/(7+$IТТII[i].$МecHM);
$IрТ0H[$eMOАе.$oTсНTI]=($IрТ0H[$eMOАе.$oTсНTI]*7+$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*$IТТII[i].$oТоAр)/(7+$IТТII[i].$МecHM);

$OTpc1[$eMOАе.$ТTcMAI]=($OTpc1[$eMOАе.$ТTcMAI]*7+$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*$IТТII[i].$oТоAр)/(7+$IТТII[i].$МecHM);
$IрТ0H[$eMOАе.$ТTcMAI]=($IрТ0H[$eMOАе.$ТTcMAI]*7+$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*$IТТII[i].$oТоAр)/(7+$IТТII[i].$МecHM);

$AМlоН[$eMOАе.$oA0cА]=true;
$AМlоН[$eMOАе.$cIToе]=true;
$AМlоН[$eMOАе.$oTсНTI]=true;
$AМlоН[$eMOАе.$ТTcMAI]=true;
}
else
{

$OTpc1[$eMOАе.$A01Il1]=($OTpc1[$eMOАе.$A01Il1]*7+$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*$IТТII[i].$oТоAр)/(7+$IТТII[i].$МecHM);
$IрТ0H[$eMOАе.$A01Il1]=($IрТ0H[$eMOАе.$A01Il1]*7+$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*$IТТII[i].$oТоAр)/(7+$IТТII[i].$МecHM);

$OTpc1[$eMOАе.$01ТМMI]=($OTpc1[$eMOАе.$01ТМMI]*7+$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*$IТТII[i].$oТоAр)/(7+$IТТII[i].$МecHM);
$IрТ0H[$eMOАе.$01ТМMI]=($IрТ0H[$eMOАе.$01ТМMI]*7+$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*$IТТII[i].$oТоAр)/(7+$IТТII[i].$МecHM);

$OTpc1[$eMOАе.$ATМHl]=($OTpc1[$eMOАе.$ATМHl]*7+$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*$IТТII[i].$oТоAр)/(7+$IТТII[i].$МecHM);
$IрТ0H[$eMOАе.$ATМHl]=($IрТ0H[$eMOАе.$ATМHl]*7+$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*$IТТII[i].$oТоAр)/(7+$IТТII[i].$МecHM);

$OTpc1[$eMOАе.$lМeOМ]=($OTpc1[$eMOАе.$lМeOМ]*7+$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*$IТТII[i].$oТоAр)/(7+$IТТII[i].$МecHM);
$IрТ0H[$eMOАе.$lМeOМ]=($IрТ0H[$eMOАе.$lМeOМ]*7+$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*$IТТII[i].$oТоAр)/(7+$IТТII[i].$МecHM);

$AМlоН[$eMOАе.$ATМHl]=true;
$AМlоН[$eMOАе.$lМeOМ]=true;
$AМlоН[$eMOАе.$01ТМMI]=true;
$AМlоН[$eMOАе.$A01Il1]=true;
}


let $ATОТН1=Math.max($eMOАе[$eТоM]+$eMOАе[$ОITAe+$0ОoHс][$eТоM]-10,Math.min($IТТII[i].$oIОMeТ,$eMOАе[$eТоM]+$eMOАе[$ОITAe+$0ОoHс][$eТоM]+10));
let $Нlосlс=Math.max($eMOАе[$рHОМ]+$eMOАе[$ОITAe+$0ОoHс][$рHОМ]-10,Math.min($IТТII[i].$1рМоОМ,$eMOАе[$рHОМ]+$eMOАе[$ОITAe+$0ОoHс][$рHОМ]+10));


$р00Ap($ATОТН1,$Нlосlс,1,$IТТII[i].$МecHM,0);







if($IТТII[i].$МecHM<0.4)
$IТТII[i].visible=false;

$р00Ap($ATОТН1,$Нlосlс,8,-$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.04,-$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.04);
$р00Ap($ATОТН1,$Нlосlс,8,-$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.05,-$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.05);
$р00Ap($ATОТН1,$Нlосlс,8,-$IТТII[i][$eрoeе]*$IТТII[i].$МecHM*0.1,-$IТТII[i][$ОоНр1]*$IТТII[i].$МecHM*0.1);




}
}
}
}

if(APRIL_2025||$IТТII[i].currentFrame===43||$IТТII[i].currentFrame===54)
{
let $I0ТIТО=25;
let $MсTolH=0.95;

if(APRIL_2025)
{
$I0ТIТО=Math.max(25,$НOНОН($IТТII[i][$eрoeе],$IТТII[i][$ОоНр1],0,0));
if($I0ТIТО<1)
$I0ТIТО=1;

$MсTolH=0.9;
}

var $ooTplМ=-1;
var $ТAМеo=600;
for(i2=0;i2<$eсАeA;i2++)
if($0Ме1А[i2].io)
if($0Ме1А[i2][$cАocе]!=$0Ме1А[$IТТII[i].$OOHAТ][$cАocе])
if($0Ме1А[i2].$HНрНТ==-1)
if($0Ме1А[i2][$МIIро]>0)


{
$eMOАе=$0Ме1А[i2];



if($МАрМcl($IТТII[i][$eТоM],$IТТII[i][$рHОМ],$Il[$eMOАе.$MОеМ1],$0OA[$eMOАе.$MОеМ1]))
{
var $cТеМM=$НOНОН($IТТII[i][$eТоM],$IТТII[i][$рHОМ],$Il[$eMOАе.$MОеМ1],$0OA[$eMOАе.$MОеМ1]);
if($cТеМM<$ТAМеo)
{
$ТAМеo=$cТеМM;
$ooTplМ=i2;
}
}
}
if($ooTplМ!==-1)
if($ТAМеo>1)
{
$eMOАе=$0Ме1А[$ooTplМ];

var tx;
var ty;
for(var iter=0;iter<3;iter++)
{
tx=$Il[$eMOАе.$MОеМ1]+($OTpc1[$eMOАе.$MОеМ1]-$IТТII[i][$eрoeе])*($ТAМеo/$I0ТIТО/$HсO0Т);
ty=$0OA[$eMOАе.$MОеМ1]+($IрТ0H[$eMOАе.$MОеМ1]-$IТТII[i][$ОоНр1])*($ТAМеo/$I0ТIТО/$HсO0Т);
$ТAМеo=$НOНОН($IТТII[i][$eТоM],$IТТII[i][$рHОМ],tx,ty);
}




var $Т0oMlH=(tx-$IТТII[i][$eТоM])/$ТAМеo*$I0ТIТО*$HсO0Т;
var $cсe1Н=(ty-$IТТII[i][$рHОМ])/$ТAМеo*$I0ТIТО*$HсO0Т;
$IТТII[i][$eрoeе]=$TTМсcН($IТТII[i][$eрoeе],$Т0oMlH,$MсTolH,$1М0оo);
$IТТII[i][$ОоНр1]=$TTМсcН($IТТII[i][$ОоНр1],$cсe1Н,$MсTolH,$1М0оo);

$ТAМеo=$НOНОН($IТТII[i][$eрoeе],$IТТII[i][$ОоНр1],0,0);
if($ТAМеo>1)
{
$Т0oMlH=$IТТII[i][$eрoeе]/$ТAМеo*$I0ТIТО*$HсO0Т;
$cсe1Н=$IТТII[i][$ОоНр1]/$ТAМеo*$I0ТIТО*$HсO0Т;
$IТТII[i][$eрoeе]=$TTМсcН($IТТII[i][$eрoeе],$Т0oMlH,$MсTolH,$1М0оo);
$IТТII[i][$ОоНр1]=$TTМсcН($IТТII[i][$ОоНр1],$cсe1Н,$MсTolH,$1М0оo);
}

$IТТII[i].rotation=270-Math.atan2($IТТII[i][$eрoeе],$IТТII[i][$ОоНр1])/Math.PI*180;

if($IТТII[i].$TAесс>=0)
{
$OTpc1[$IТТII[i].$TAесс]=$IТТII[i][$eрoeе];
$IрТ0H[$IТТII[i].$TAесс]=$IТТII[i][$ОоНр1];
}
}
}


if($IТТII[i][$0coMM]!==$НТIТo)
for(i2=0;i2<$eсАeA;i2++)
if($0Ме1А[i2].io)
if($0Ме1А[i2].$ОАpМО)
if(i2!=$IТТII[i].$OOHAТ||$IТТII[i][$0coMM]===$OeесA||($IТТII[i].currentFrame===41&&$0Ме1А[i2].$loАoM))

if(!$IТТII[i].$AМ1clр($Hоlрр,i2)||($IТТII[i].currentFrame===41&&$0Ме1А[i2].$loАoM))

if($0Ме1А[i2][$cАocе]!=$0Ме1А[$IТТII[i].$OOHAТ][$cАocе]||$IТТII[i].currentFrame===41||($0Ме1А[i2][$cАocе]!=0&&!$OАМАO&&!$pMМ1)||($0Ме1А[i2][$МIIро]<=0||($0Ме1А[i2].$loАoM&&!$pMМ1))||($pMМ1&&$IcеНе===$ММ.$IсОeо))
if($0Ме1А[i2].$HНрНТ==-1)
{
$eMOАе=$0Ме1А[i2];
$0ОoHс=-1;
$TeMpeI.$ОTАpА=2;
{



if($0cc1АA(i,$eMOАе.$e1IOМ)||$0cc1АA(i,$eMOАе.$pМHHo))
{
$0ОoHс=$eMOАе.$e1IOМ;
str=$AН1ОН;
}
else
if($0cc1АA(i,$eMOАе.$рсOОА)||
(!$eMOАе.$еТеAO&&




$0ОНHMе(i,$eMOАе.$рсOОА,$eMOАе.$MОеМ1)
))
{
$0ОoHс=$eMOАе.$рсOОА;
str=$АAНHe;
}
else
if($0cc1АA(i,$eMOАе.$MОеМ1))
{
$0ОoHс=$eMOАе.$MОеМ1;
str=$TМАoМ;
}
else


if($0cc1АA(i,$eMOАе.$оОlТМ)&&($eMOАе.$loАoM||$eMOАе.$оeoТе))
{
$0ОoHс=$eMOАе.$оОlТМ;
str=$сМАМc;
}
else
if($0cc1АA(i,$eMOАе.$1O1lM)&&($eMOАе.$loАoM||$eMOАе.$оeoТе))
{
$0ОoHс=$eMOАе.$1O1lM;
str=$сМАМc;
}
else
if($0cc1АA(i,$eMOАе.$НТсМТ)||



$0ОНHMе(i,$eMOАе.$MОеМ1,$eMOАе.$НТсМТ))
{
$0ОoHс=$eMOАе.$НТсМТ;
str=$TМАoМ;
}
else
if($0cc1АA(i,$eMOАе.$р1eНM)||



$0ОНHMе(i,$eMOАе.$MОеМ1,$eMOАе.$р1eНM))
{
$0ОoHс=$eMOАе.$р1eНM;
str=$TМАoМ;
}
else
{
$0ОoHс=-1;
}
}

let $рOО1Oe=($IТТII[i].$oIОMeТ+$IТТII[i].$MOIрOM)/2;
let $ОllНoо=($IТТII[i].$1рМоОМ+$IТТII[i].$1ApоpО)/2;



if($TeMpeI.$ОTАpА!==2)
{
$рOО1Oe=$IТТII[i].$MOIрOM*$TeMpeI.$ОTАpА+$IТТII[i].$oIОMeТ*(1-$TeMpeI.$ОTАpА);
$ОllНoо=$IТТII[i].$1ApоpО*$TeMpeI.$ОTАpА+$IТТII[i].$1рМоОМ*(1-$TeMpeI.$ОTАpА);
}

if($0ОoHс!=-1)
{
if(str==$сМАМc)
if($eMOАе.$ААpес)
str=$АAНHe;

if(str==$АAНHe)
if($eMOАе.$еТеAO)
{
if($eMOАе.$ААpес)
str=$AН1ОН;
else
str=$сМАМc;
}

if($eMOАе.$AIpAe)
if(str==$TМАoМ)
str=$АAНHe;

if($eMOАе.$lTITl)
if(str==$AН1ОН)
{
if($eMOАе.$еТеAO)
str=$сМАМc;
else
str=$АAНHe;
}

var $HA1cоT=false;

var $сcoТеM=($pMМ1&&$НAlНc===i2);



var $Нс1lOI=($eMOАе[$МIIро]>0);

if($АoМHl)
{


if(!$pMМ1||
($IТТII[i].$OOHAТ===$НAlНc&&!$00pеH)||
(!$0Ме1А[$IТТII[i].$OOHAТ].$HМ0М1&&i2===$НAlНc&&!$00pеH)||
(!$eMOАе.$HМ0М1&&!$0Ме1А[$IТТII[i].$OOHAТ].$HМ0М1)
)
$HA1cоT=true;

if($pMМ1)
{
if($0Ме1А[$IТТII[i].$OOHAТ].$HМ0М1)
$сcoТеM=false;
}
}
else
if((($НAlНc===i2)&&!$00pеH)||!$pMМ1||!$eMOАе.$HМ0М1)
{
$HA1cоT=true;
}

let $T0рIlo=null;

if($pMМ1)
if($АoМHl)
if($IТТII[i].$OOHAТ===$НAlНc)
{
if($ММ[$OpНpp][$M0сМТ]<3)
MP_custom_events+=$HepНО+
[
$НAlНc,
i2,
str,
$ср1О0($IТТII[i].$МecHM),
$ср1О0($IТТII[i].$oТоAр),
$IТТII[i].currentFrame,
$ср1О0($рOО1Oe),
$ср1О0($ОllНoо),


$ср1О0($IТТII[i][$eрoeе]),
$ср1О0($IТТII[i][$ОоНр1]),
$IТТII[i][$0coMM],
$IТТII[i][$НeHо1],
$сMIeАН($0ОoHс,$0Ме1А[i2])
].join($TlAp);
else
$T0рIlo=[$ММ[$Mоpс0],

$ММ.$Oоolр(i2),
$ММ.$Oоolр(str),
$ММ.$Oоolр($IТТII[i].$МecHM*$ММ.$Мссe1o),
$ММ.$Oоolр($IТТII[i].$oТоAр*$ММ.$Мссe1o),
$ММ.$Oоolр($IТТII[i].currentFrame),
$ММ.$Oоolр($рOО1Oe),
$ММ.$Oоolр($ОllНoо),


$ММ.$Oоolр($IТТII[i][$eрoeе]*$ММ.$MеМMА),
$ММ.$Oоolр($IТТII[i][$ОоНр1]*$ММ.$MеМMА),
$ММ.$Oоolр($IТТII[i][$0coMM]),
$ММ.$Oоolр($IТТII[i][$НeHо1]),
$ММ.$Oоolр($сMIeАН($0ОoHс,$0Ме1А[i2])),
0,
$ММ.$Oоolр($0Ме1А[i2][$рАр0T])

];
}

let $Мoсрc1=$0Ме1А[i2][$МIIро];


$IТТII[i].$МecHM=$eМcМlТ($eMOАе,i2,str,$IТТII[i].$OOHAТ,$IТТII[i].$МecHM,$IТТII[i].$oТоAр,$IТТII[i].currentFrame,

$рOО1Oe,$ОllНoо,
$IТТII[i][$eрoeе],$IТТII[i][$ОоНр1],$IТТII[i][$0coMM],$IТТII[i][$НeHо1],$HA1cоT,$Нс1lOI,$сcoТеM,$0ОoHс,true);

let $oAI1op=$0Ме1А[i2][$МIIро];

if($T0рIlo)
{
$T0рIlo[13]=$ММ.$Oоolр(($Мoсрc1-$oAI1op)*100);
$ММ.Event(...$T0рIlo);


}

if($АoМHl)
if($Нс1lOI)
{
if(!$О01ТA)
if(!$eMOАе.$оeoТе)
$eMOАе[$МIIро]=Math.max(10,$eMOАе[$МIIро]);

$TlTе1($eMOАе,$eMOАе[$МIIро],$eMOАе.$loАoM,-Infinity);
}


if($pMМ1&&
$НAlНc!==$IТТII[i].$OOHAТ&&
$АoМHl&&

$OIТеМ($IТТII[i])&&
$0Ме1А[$IТТII[i].$OOHAТ].$HМ0М1
)
{

}
else
{

if($IТТII[i][$0coMM]===$МA1ре||$IТТII[i][$0coMM]===$АМeеM||$IТТII[i][$0coMM]===$МО1еH)
$IТТII[i].visible=false;
else
{


if($eMOАе[$МIIро]>0)

$IТТII[i].$МecHM=Math.max(0,$IТТII[i].$МecHM*0.3);
else

$IТТII[i].$МecHM=Math.max(0,$IТТII[i].$МecHM*0.6);


$IТТII[i].$сOо01Т($Hоlрр,i2);

if($IТТII[i].$МecHM<0.4)
$IТТII[i].visible=false;
}
}


}

}


if($AeеolО)
{
$AeеolО();
$AeеolО=null;
}


if($IТТII[i][$0coMM]!==$OeесA)
{
if($IТТII[i].$НОеppТ)
{
$IТТII[i][$eТоM]=$IТТII[i].$НОеppТ[0];
$IТТII[i][$рHОМ]=$IТТII[i].$НОеppТ[1];
$IТТII[i].visible=false;
}
}


if($IТТII[i][$0coMM]===$МA1ре)
{
$IТТII[i][$eрoeе]*=Math.pow(1.02,$1М0оo);
$IТТII[i][$ОоНр1]*=Math.pow(1.02,$1М0оo);
if($IТТII[i].visible==false)
{
$оT1Te=true;

if($сI0рp==-1)
$рM1lМ($IТТII[i][$eТоM]-$IТТII[i][$eрoeе]*0.5,$IТТII[i][$рHОМ]-$IТТII[i][$ОоНр1]*0.5,50*$IТТII[i].$сeHpНp,5*$IТТII[i].$сeHpНp*$IТТII[i].$oТоAр,40*$IТТII[i].$сeHpНp,$IТТII[i].$OOHAТ,$IТТII[i][$НeHо1]);
else
{
if(rx===undefined||isNaN(rx)||ry===undefined||isNaN(ry))
{
throw new Error($OOAl1+rx+$0HoА+ry+$0HoА+$сI0рp);
}

$рM1lМ(rx-$IТТII[i][$eрoeе]*0.5*$1М0оo,ry-$IТТII[i][$ОоНр1]*0.5*$1М0оo,50*$IТТII[i].$сeHpНp,5*$IТТII[i].$сeHpНp*$IТТII[i].$oТоAр,40*$IТТII[i].$сeHpНp,$IТТII[i].$OOHAТ,$IТТII[i][$НeHо1]);
}
$оT1Te=false;
$AеpАp($IТТII[i][$eТоM]-$IТТII[i][$eрoeе]*$1М0оo,$IТТII[i][$рHОМ]-$IТТII[i][$ОоНр1]*$1М0оo);


}
}


if($IТТII[i][$0coMM]===$МО1еH)
{
if($IТТII[i].visible==false)
{
if($IТТII[i].currentFrame==10||$IТТII[i].currentFrame==32||$IТТII[i].currentFrame==22)
$оT1Te=true;

if($сI0рp==-1)
{
$рeOАНс($IТТII[i][$eТоM]-$IТТII[i][$eрoeе]*$1М0оo,$IТТII[i][$рHОМ]-$IТТII[i][$ОоНр1]*$1М0оo,44*$IТТII[i].$сeHpНp,3*$IТТII[i].$сeHpНp*$IТТII[i].$oТоAр,35*$IТТII[i].$сeHpНp,$IТТII[i].$OOHAТ,true,$IТТII[i][$НeHо1]);
if($IТТII[i].currentFrame==10)
$р00Ap($IТТII[i][$eТоM]-$IТТII[i][$eрoeе]*0.5,$IТТII[i][$рHОМ]-$IТТII[i][$ОоНр1]*0.5,11,1,0);

if($IТТII[i].currentFrame==32||$IТТII[i].currentFrame==22)
$р00Ap($IТТII[i][$eТоM]-$IТТII[i][$eрoeе]*0.5,$IТТII[i][$рHОМ]-$IТТII[i][$ОоНр1]*0.5,11,0.25,0);

if($IТТII[i].currentFrame==12||$IТТII[i].currentFrame==37||$IТТII[i].currentFrame==46||$IТТII[i].currentFrame==6||$IТТII[i].currentFrame==53)
$р00Ap($IТТII[i][$eТоM]-$IТТII[i][$eрoeе]*0.5,$IТТII[i][$рHОМ]-$IТТII[i][$ОоНр1]*0.5,16,1,0);
}
else
{
if(rx===undefined||isNaN(rx)||ry===undefined||isNaN(ry))
{
throw new Error($ОрlНр+rx+$0HoА+ry+$0HoА+$сI0рp);
}


$рeOАНс(rx-$IТТII[i][$eрoeе]*0.5*$1М0оo,ry-$IТТII[i][$ОоНр1]*0.5*$1М0оo,44*$IТТII[i].$сeHpНp,3*$IТТII[i].$сeHpНp*$IТТII[i].$oТоAр,35*$IТТII[i].$сeHpНp,$IТТII[i].$OOHAТ,true,$IТТII[i][$НeHо1]);

if($IТТII[i].currentFrame==10)
$р00Ap(rx-$IТТII[i][$eрoeе]*0.5*$1М0оo,ry-$IТТII[i][$ОоНр1]*0.5*$1М0оo,11,1,0);

if($IТТII[i].currentFrame==32||$IТТII[i].currentFrame==22)
$р00Ap(rx-$IТТII[i][$eрoeе]*0.5*$1М0оo,ry-$IТТII[i][$ОоНр1]*0.5*$1М0оo,11,0.25,0);

if($IТТII[i].currentFrame==12||$IТТII[i].currentFrame==37||$IТТII[i].currentFrame==46||$IТТII[i].currentFrame==6||$IТТII[i].currentFrame==53)
$р00Ap(rx-$IТТII[i][$eрoeе]*0.5*$1М0оo,ry-$IТТII[i][$ОоНр1]*0.5*$1М0оo,16,1,0);
}

if($IТТII[i].currentFrame==10||$IТТII[i].currentFrame==32||$IТТII[i].currentFrame==22)
$оT1Te=false;

if($IТТII[i].currentFrame==10||$IТТII[i].currentFrame==32||$IТТII[i].currentFrame==22)
$оp0Нc($AIlНTT,$IТТII[i][$eТоM],$IТТII[i][$рHОМ]);

if($IТТII[i].currentFrame==12||$IТТII[i].currentFrame==37||$IТТII[i].currentFrame==46||$IТТII[i].currentFrame==6||$IТТII[i].currentFrame==53)
$оp0Нc($сAсНoe,$IТТII[i][$eТоM],$IТТII[i][$рHОМ]);
}
else
{
if($IТТII[i].currentFrame==10)
if($IТТII[i].$еlАlM>3/$1М0оo)
{
$оT1Te=true;
$рeOАНс($IТТII[i][$eТоM],$IТТII[i][$рHОМ],80,0.5*$IТТII[i].$сeHpНp*$1М0оo*$IТТII[i].$oТоAр,15*$IТТII[i].$сeHpНp*$1М0оo,$IТТII[i].$OOHAТ,true,$IТТII[i][$НeHо1]);
$оT1Te=false;
}

}


}

if($IТТII[i][$0coMM]===$АМeеM||$IТТII[i][$0coMM]===$НТIТo)
{
if($IТТII[i].currentFrame==52)
{
if($IТТII[i].$еlАlM>6/$1М0оo)
{
$оT1Te=true;
$рeOАНс($IТТII[i][$eТоM],$IТТII[i][$рHОМ],100,0,2*$IТТII[i].$сeHpНp*$1М0оo,$IТТII[i].$OOHAТ,false,$IТТII[i][$НeHо1]);
$оT1Te=false;
}

if($IТТII[i].visible==false)
{
$OОHMp=-1;

$АATHc($IТТII[i][$eТоM],$IТТII[i][$рHОМ],0,-30+Math.random()*60,-30+Math.random()*60-5,2);
$АATHc($IТТII[i][$eТоM],$IТТII[i][$рHОМ],0,-30+Math.random()*60,-30+Math.random()*60-10,2);
$АATHc($IТТII[i][$eТоM],$IТТII[i][$рHОМ],0,-40+Math.random()*80,-40+Math.random()*80-10,3);

if(Math.random()>0.5)
$оp0Нc($1oIМTе,$IТТII[i][$eТоM],$IТТII[i][$рHОМ]);
else
$оp0Нc($ННТ0р0,$IТТII[i][$eТоM],$IТТII[i][$рHОМ]);
}
}
if($IТТII[i].currentFrame==14)
{
if($IТТII[i].$оeoТе)
$IТТII[i].visible=false;

if($IТТII[i].visible==false)
{

$oОI10($IТТII[i].$TAесс);
$IТТII[i].$TAесс=-1;

$OОHMp=-1;

$АATHc($IТТII[i][$eТоM],$IТТII[i][$рHОМ],0,-30+Math.random()*60,-30+Math.random()*60-5,2);
$АATHc($IТТII[i][$eТоM],$IТТII[i][$рHОМ],0,-30+Math.random()*60,-30+Math.random()*60-10,2);
$АATHc($IТТII[i][$eТоM],$IТТII[i][$рHОМ],0,-40+Math.random()*80,-40+Math.random()*80-10,3);

if(Math.random()>0.5)
$оp0Нc($1oIМTе,$IТТII[i][$eТоM],$IТТII[i][$рHОМ]);
else
$оp0Нc($ННТ0р0,$IТТII[i][$eТоM],$IТТII[i][$рHОМ]);
}
else
{
$IТТII[i].rotation+=$IТТII[i][$eрoeе];


$0Н0Тl($IТТII[i].$TAесс);

if(!$0oеcН($IТТII[i][$eТоM],$IТТII[i][$рHОМ]+10))
{
if(Math.random()<0.5*$ll1lА)
{


$0ОoHс=-1;
$HОpcl=0;
for(i2=0;i2<$eсАeA;i2++)
if($0Ме1А[i2].io)
if(!$0Ме1А[i2].$оeoТе)
if($0Ме1А[i2][$cАocе]!=$0Ме1А[$IТТII[i].$OOHAТ][$cАocе])
if($МАрМcl($IТТII[i][$eТоM],$IТТII[i][$рHОМ]-20,$0Ме1А[i2][$eТоM],$0Ме1А[i2][$рHОМ]-40))
{
$eMOАе=$0Ме1А[i2];
$llМTO=$НOНОН($IТТII[i][$eТоM],$IТТII[i][$рHОМ],$eMOАе[$eТоM],$eMOАе[$рHОМ]);
if($0ОoHс==-1||$llМTO<$HОpcl)
{
$0ОoHс=i2;
$HОpcl=$llМTO;
}
}
if($0ОoHс!=-1)
{
if($HОpcl>1)
{
$OTpc1[$IТТII[i].$TAесс]=($0Ме1А[$0ОoHс][$eТоM]-$IТТII[i][$eТоM])/$HОpcl*15*0.8;
$IрТ0H[$IТТII[i].$TAесс]=($0Ме1А[$0ОoHс][$рHОМ]-$IТТII[i][$рHОМ])/$HОpcl*15*1.3-4;
$оp0Нc($АА0еНc,$IТТII[i][$eТоM],$IТТII[i][$рHОМ]);
}
}
else
{
$OTpc1[$IТТII[i].$TAесс]*=0.5;
$IрТ0H[$IТТII[i].$TAесс]*=0.5;
}
}
}
else
{
for(i2=0;i2<$eсАeA;i2++)
if($0Ме1А[i2].io)
if(!$0Ме1А[i2].$оeoТе)
if($0Ме1А[i2][$МIIро]>0)
if($0Ме1А[i2][$cАocе]!=$0Ме1А[$IТТII[i].$OOHAТ][$cАocе])
if($НOНОН($IТТII[i][$eТоM],$IТТII[i][$рHОМ]*0.5,$0Ме1А[i2][$eТоM],($0Ме1А[i2][$рHОМ]-40)*0.5)<25)
if($МАрМcl($IТТII[i][$eТоM],$IТТII[i][$рHОМ]-20,$0Ме1А[i2][$eТоM],$0Ме1А[i2][$рHОМ]-40))
{

if($0Ме1А[i2].$АеlОА)
$AOеоО($0Ме1А[i2]);

$OTpc1[$IТТII[i].$TAесс]=($OTpc1[$IТТII[i].$TAесс]+$OTpc1[$0Ме1А[i2].$рсOОА]*3)/4;
$IрТ0H[$IТТII[i].$TAесс]=($IрТ0H[$IТТII[i].$TAесс]+$IрТ0H[$0Ме1А[i2].$рсOОА]*3)/4;

if(Math.random()<0.2*$ll1lА)
{
$0Ме1А[i2].$АTТМc=$IТТII[i].$OOHAТ;
$0Ме1А[i2].$1МI0р=$IТТII[i][$НeHо1];
$0Ме1А[i2].$Т10е1=getTimer();


$0Ме1А[i2][$МIIро]-=15*$IТТII[i].$МecHM;
$оp0Нc($TсAMT,$IТТII[i][$eТоM],$IТТII[i][$рHОМ]);

$OОHMp=i2;

$АATHc($IТТII[i][$eТоM],$IТТII[i][$рHОМ],0,-$IТТII[i][$eрoeе],-$IТТII[i][$ОоНр1],2);


if($IТТII[i].$OOHAТ==$НAlНc)
if(!$0Ме1А[i2].$оeoТе)
{
if($0lpеo&&$00МeI)
{
$eMpсp.alpha+=15*$IТТII[i].$МecHM/$0Ме1А[i2].hmax;


if($0Ме1А[i2][$МIIро]<=0)
$eMpсp.alpha+=0.5;

$eMpсp.visible=true;
}
$орOeТ(15*$IТТII[i].$МecHM);
if($0Ме1А[i2][$МIIро]<=0)
$сpНеH($0Ме1А[i2][$cАocе]===$0Ме1А[$НAlНc][$cАocе],$0Ме1А[i2]);
}


$оo1pO(i2);

if(i2==$НAlНc)
$1ОHоОА($IТТII[i][$eТоM]-$0Ме1А[i2][$eТоM],$IТТII[i][$рHОМ]-$0Ме1А[i2][$рHОМ]+40,15*$IТТII[i].$МecHM);
}
}
}
}
}
else
{
if($IТТII[i].visible==false)
{

$oОI10($IТТII[i].$TAесс);
$IТТII[i].$TAесс=-1;

if($IТТII[i][$0coMM]===$АМeеM)
{
$рM1lМ($IТТII[i][$eТоM]-$IТТII[i][$eрoeе]*0.5*$1М0оo,$IТТII[i][$рHОМ]-$IТТII[i][$ОоНр1]*0.5*$1М0оo,50*$IТТII[i].$сeHpНp,5*$IТТII[i].$сeHpНp*$IТТII[i].$oТоAр,40*$IТТII[i].$сeHpНp,$IТТII[i].$OOHAТ,$IТТII[i][$НeHо1]);
$AеpАp($IТТII[i][$eТоM]-$IТТII[i][$eрoeе]*0.5*$1М0оo,$IТТII[i][$рHОМ]-$IТТII[i][$ОоНр1]*0.5*$1М0оo);
}
else
if($IТТII[i][$0coMM]===$НТIТo)
{
if($IТТII[i].$1ooоT==1)
{
if($pMМ1)

$рM1lМ($IТТII[i][$eТоM]-$IТТII[i][$eрoeе]*0.5*$1М0оo,$IТТII[i][$рHОМ]-$IТТII[i][$ОоНр1]*0.5*$1М0оo,50*$IТТII[i].$сeHpНp,5*$IТТII[i].$сeHpНp*$IТТII[i].$oТоAр,50*$IТТII[i].$сeHpНp,$IТТII[i].$OOHAТ,$IТТII[i][$НeHо1]);
else
$рM1lМ($IТТII[i][$eТоM]-$IТТII[i][$eрoeе]*0.5*$1М0оo,$IТТII[i][$рHОМ]-$IТТII[i][$ОоНр1]*0.5*$1М0оo,50*$IТТII[i].$сeHpНp,5*$IТТII[i].$сeHpНp*$IТТII[i].$oТоAр,100*$IТТII[i].$сeHpНp,$IТТII[i].$OOHAТ,$IТТII[i][$НeHо1]);

$AеpАp($IТТII[i][$eТоM]-$IТТII[i][$eрoeе]*0.5*$1М0оo,$IТТII[i][$рHОМ]-$IТТII[i][$ОоНр1]*0.5*$1М0оo);

}
if($IТТII[i].$1ooоT==2)
{
$оp0Нc($НОolОМ,$IТТII[i][$eТоM],$IТТII[i][$рHОМ]);

$Т0TpA=$0Ме1А[$IТТII[i].$OOHAТ];
if($Т0TpA[$МIIро]>0)
{
$Т0TpA.$eoОpА=-1;

u=$Il[$Т0TpA.$MОеМ1]-($IТТII[i][$eТоM]);
v=$0OA[$Т0TpA.$MОеМ1]-($IТТII[i][$рHОМ]);

$Т0TpA[$АсТOе]+=$IТТII[i][$eрoeе];
$Т0TpA[$МcеAH]+=$IТТII[i][$ОоНр1];

if($IТТII[i].$OOHAТ==$НAlНc)
{
game[$eТоM]+=u;
game[$рHОМ]+=v;
game.clearMCInterpolationData();
graphics_3d.clearMCInterpolationData();
graphics_3d_front.clearMCInterpolationData();
}

for($AMTT1=0;$AMTT1<$pООро;$AMTT1++)
if($о1oHМ[$AMTT1]===$Т0TpA.$MeсНе||
($о1oHМ[$AMTT1]>=$ТАIpc&&$о1oHМ[$AMTT1]<$ТАIpc+$рТlle&&$ОpMрс[$о1oHМ[$AMTT1]-$ТАIpc].picken_by===$Т0TpA.$MeсНе))
{
$Il[$AMTT1]-=u;
$0OA[$AMTT1]-=v;

$OTpc1[$AMTT1]+=$IТТII[i][$eрoeе];
$IрТ0H[$AMTT1]+=$IТТII[i][$ОоНр1];

if($IТoHT())
{
$IcМMc[$AMTT1]-=u;
$MA0е1[$AMTT1]-=v;
}

$pМ1Аe($AMTT1);
}
$р00Ap($Т0TpA[$eТоM],$Т0TpA[$рHОМ]-41,14,1,0);

$Т0TpA[$eТоM]-=u;
$Т0TpA[$рHОМ]-=v;

$р00Ap($Т0TpA[$eТоM],$Т0TpA[$рHОМ]-41,14,1,0);


$Т0TpA.$ОНMIА();
}
}
}
}
else
{
$IТТII[i].rotation+=$IТТII[i][$eрoeе];
}
}
}

if($IТТII[i][$0coMM]===$OeесA)
{
if($IТТII[i].currentFrame!=15)
{
$TMOср($IТТII[i][$eТоM],$IТТII[i][$рHОМ]);

if($IТТII[i].visible)
{
if($IТТII[i].currentFrame===29)
$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],$1cМоо.$ОМA0I,$IТТII[i].rotation,0);
else
if($IТТII[i].currentFrame===51)
$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],$1cМоо.$0Мосс,$IТТII[i].rotation,0);
else
if($IТТII[i].currentFrame===40)
$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],$1cМоо.$оpOOT,$IТТII[i].rotation,0);
else
if($IТТII[i].currentFrame===48||$IТТII[i].currentFrame===22)
$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],$1cМоо.$о0IcM,$IТТII[i].rotation,0);
else
{
if($IТТII[i].$сeHpНp<5)
$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],$1cМоо.$oН1оI,$IТТII[i].rotation,0);
else
$р00Ap($IТТII[i][$eТоM],$IТТII[i][$рHОМ],$1cМоо.$оoоTО,$IТТII[i].rotation,0);
}
}
else
{
$р00Ap($IТТII[i][$eТоM]-$IТТII[i][$eрoeе]/2,$IТТII[i][$рHОМ]-$IТТII[i][$ОоНр1]/2,$1cМоо.$АI1рТ,0,0);

cx=($IТТII[i].$сeHpНp+$IТТII[i].$МecHM)/2;
for(i2=0;i2<50&&(i2<Math.sqrt(cx)*2||i2<3);i2++)
$р00Ap($IТТII[i][$eТоM]-$IТТII[i][$eрoeе],$IТТII[i][$рHОМ]-$IТТII[i][$ОоНр1],$1cМоо.$pAеоо,-$IТТII[i][$eрoeе]*cx*0.03*Math.random(),-$IТТII[i][$ОоНр1]*cx*0.03*Math.random());
}
}
else
if(!$IТТII[i].visible)
{
$р00Ap($IТТII[i][$eТоM]-$IТТII[i][$eрoeе],$IТТII[i][$рHОМ]-$IТТII[i][$ОоНр1],8,-$IТТII[i][$eрoeе]*$IТТII[i].$сeHpНp*0.03,-$IТТII[i][$ОоНр1]*$IТТII[i].$сeHpНp*0.03);
$р00Ap($IТТII[i][$eТоM]-$IТТII[i][$eрoeе],$IТТII[i][$рHОМ]-$IТТII[i][$ОоНр1],8,-$IТТII[i][$eрoeе]*$IТТII[i].$сeHpНp*0.03,-$IТТII[i][$ОоНр1]*$IТТII[i].$сeHpНp*0.03);
$р00Ap($IТТII[i][$eТоM]-$IТТII[i][$eрoeе],$IТТII[i][$рHОМ]-$IТТII[i][$ОоНр1],8,-$IТТII[i][$eрoeе]*$IТТII[i].$сeHpНp*0.03,-$IТТII[i][$ОоНр1]*$IТТII[i].$сeHpНp*0.03);
}
}


if($IТТII[i].currentFrame===48)
if(!$IТТII[i].visible)
{
$OОHMp=-1;
$АATHc($IТТII[i][$eТоM],$IТТII[i][$рHОМ],0,-$IТТII[i][$eрoeе]*0.5,-$IТТII[i][$ОоНр1]*0.5,2);
}











}
}










if(!$IТТII[i].visible)
{



$HOНОO(i);
continue $ТНOAMО;
}

$IТТII[i].SetMCInterpolationData($оIeHeТ);






}
}
}

function $сMIeАН($0ОoHс,$eMOАе)
{
if($eMOАе.$MОеМ1===$0ОoHс)
return 0;
if($eMOАе.$НТсМТ===$0ОoHс)
return 1;
if($eMOАе.$р1eНM===$0ОoHс)
return 2;
if($eMOАе.$оОlТМ===$0ОoHс)
return 3;
if($eMOАе.$1O1lM===$0ОoHс)
return 4;
if($eMOАе.$рсOОА===$0ОoHс)
return 5;
if($eMOАе.$pМHHo===$0ОoHс)
return 6;
if($eMOАе.$e1IOМ===$0ОoHс)
return 7;
if($eMOАе.$Mo1OА===$0ОoHс)
return 8;
if($eMOАе.$AМеTo===$0ОoHс)
return 9;

return-1;
}
function $M0eIТО($0ОoHс,$eMOАе)
{
if(0===$0ОoHс)
return $eMOАе.$MОеМ1;
if(1===$0ОoHс)
return $eMOАе.$НТсМТ;
if(2===$0ОoHс)
return $eMOАе.$р1eНM;
if(3===$0ОoHс)
return $eMOАе.$оОlТМ;
if(4===$0ОoHс)
return $eMOАе.$1O1lM;
if(5===$0ОoHс)
return $eMOАе.$рсOОА;
if(6===$0ОoHс)
return $eMOАе.$pМHHo;
if(7===$0ОoHс)
return $eMOАе.$e1IOМ;
if(8===$0ОoHс)
return $eMOАе.$Mo1OА;
if(9===$0ОoHс)
return $eMOАе.$AМеTo;

return-1;
}


function $МсTОlT(by,
$olНо0,
$1AIес,
$0Оo1Ho,
$ТMMMHТ,
$HОpcl,
$cTAHНA,
$оT1Te,
size,
$МecHM,
$ТcIpОО,
$оIlМе,
$OlоМM,
$рссHТM=-1,
source=$oМTо,

$АсM10=null
)
{

$сI0рp=$M0eIТО($1AIес,$olНо0);

let $сеTсI=$olНо0.$MeсНе;

if($сI0рp===-1)
{
trace($ОoTсс+$сI0рp);
return;
}

if($pMМ1)
if($cTAHНA<=0)
return;

if($рссHТM===-1)
$рссHТM=getTimer();



if(!$рТeерО($оIlМе,$OlоМM,by,$о1oHМ[$сI0рp],$Il[$сI0рp],$0OA[$сI0рp],-1,-1,true,source))
{
if($рссHТM+$ATpА0с>getTimer())
$ТMО1e(function()
{
$МсTОlT(by,
$olНо0,
$1AIес,
$0Оo1Ho,
$ТMMMHТ,
$HОpcl,
$cTAHНA,
$оT1Te,
size,
$МecHM,
$ТcIpОО,
$оIlМе,
$OlоМM,
$рссHТM,
source);
},$еоpАMр);
else
trace($НIррI);

return;
}

$llМTO=Math.sqrt($оОlHT[$сI0рp]);
if($llМTO<5)
$llМTO=5;

$0Н0Тl($сI0рp);

let $I1pA0=$сTpНО($МecHM)*0.1/4*$olНо0.$MAНIp/$olНо0.scale;
let $0oсpТ=($0Оo1Ho)*$HОpcl/$llМTO*$olНо0.$MAНIp*$olНо0.$MAНIp/$olНо0.scale;
let $IIеТТ=($ТMMMHТ)*$HОpcl/$llМTO*$olНо0.$MAНIp*$olНо0.$MAНIp/$olНо0.scale;

$olНо0[$АсТOе]+=$0oсpТ;
$olНо0[$МcеAH]+=$IIеТТ;

let $ТсАHe=($0Оo1Ho)*$HОpcl/$llМTO*7*$olНо0.$MAНIp*$olНо0.$MAНIp/$olНо0.scale;
let $AcOpc=($ТMMMHТ)*$HОpcl/$llМTO*7*$olНо0.$MAНIp*$olНо0.$MAНIp/$olНо0.scale;

if(!$pMМ1||$ocеMо||$сеTсI===$НAlНc||!$olНо0.$HМ0М1)
{
$olНо0.$eoОpА-=$I1pA0;
$OTpc1[$сI0рp]+=$ТсАHe;
$IрТ0H[$сI0рp]+=$AcOpc;
}

if($АсM10)
{


if(!$АсM10[$сеTсI])
$АсM10[$сеTсI]={
[$АсТOе]: 0,
[$МcеAH]: 0,

[$ТoToН]: 0,

[$Мpolp]: 0,
[$0TlHI]: 0,
[$IToIр]: 0,
[$eсНeМ]: 0,
[$еcооl]: 0,

[$рАр0T]: $olНо0[$рАр0T],

[$Н1cTе]:{}
};

$АсM10[$сеTсI][$ТМpp0]=$оIlМе;
$АсM10[$сеTсI][$MHHАр]=$OlоМM;
$АсM10[$сеTсI][$АсТOе]+=$0oсpТ;
$АсM10[$сеTсI][$МcеAH]+=$IIеТТ;
$АсM10[$сеTсI][$ТoToН]+=$I1pA0;

$АсM10[$сеTсI][$НeHо1]=source;

if($ТсАHe!==0||$AcOpc!==0)
{
if(!$АсM10[$сеTсI][$Н1cTе][$1AIес])
$АсM10[$сеTсI][$Н1cTе][$1AIес]={[$АсТOе]: 0,[$МcеAH]: 0,[$IНpес]:0,[$НTрAo]:0};

$АсM10[$сеTсI][$Н1cTе][$1AIес][$АсТOе]+=$ТсАHe;
$АсM10[$сеTсI][$Н1cTе][$1AIес][$МcеAH]+=$AcOpc;
}


}

let $lМpАОH=$olНо0[$МIIро];
let $eHTесА=$olНо0.$ААНММ;
let $о1ОoOе=$olНо0.$lMIсo;
let $TeoIc1=$olНо0.$HAрH1;
let $ТАAeсp=$olНо0.$НТcep;

let $oeоlAр=false;

if($HОpcl<size*0.75)
{
if($оcMlO[$сI0рp]==1||$оcMlO[$сI0рp]==0)
if($olНо0.io)
if($olНо0.$HНрНТ==-1)
{
if($cTAHНA>0)
{
var $H0оА0c=(Math.random()*50<$cTAHНA);

var $Нс1lOI=($olНо0[$МIIро]>0);

if(by==-1||$olНо0[$cАocе]!=$0Ме1А[by][$cАocе]||by==$о1oHМ[$сI0рp]||$оT1Te)
{
let $T1HoA=($0Оo1Ho)*$HОpcl*7;
let $МIАHH=($ТMMMHТ)*$HОpcl*7;

if(!$pMМ1||($НAlНc==$о1oHМ[$сI0рp]&&!$00pеH)||!$olНо0.$HМ0М1||$АoМHl)
{
if(by===$о1oHМ[$сI0рp])
{
if($olНо0.$Т10е1<getTimer()-7000)
$olНо0.$АTТМc=by;
}
else
{
$olНо0.$АTТМc=by;
}



$olНо0.$1МI0р=source;
$olНо0.$Т10е1=getTimer();

if(!$оT1Te)
{
if($pMМ1)
{
if($о1oHМ[$сI0рp]===by)
$cTAHНA*=0.5;
}
else
{
if($о1oHМ[$сI0рp]===by)
$cTAHНA*=0.3;
}
}

if($ТcIpОО)
{

$olНо0[$МIIро]-=Math.max(0.1,$сTpНО($cTAHНA)/6);




if(!$pMМ1||!$olНо0.$HМ0М1||$НAlНc==$о1oHМ[$сI0рp]||$ММ[$OpНpp][$M0сМТ]>=3)
{
if($сI0рp==$olНо0.$НТсМТ||$сI0рp==$olНо0.$р1eНM)
{
$olНо0.$HAрH1-=$сTpНО($cTAHНA)/6;


}
else
if($сI0рp==$olНо0.$рсOОА||$сI0рp==$olНо0.$MОеМ1)
{
$olНо0.$НТcep-=$сTpНО($cTAHНA)/6;


}
else
if($сI0рp==$olНо0.$e1IOМ||$сI0рp==$olНо0.$pМHHo)
{
$olНо0.$ААНММ-=$сTpНО($cTAHНA)/6;


}
else
if($сI0рp==$olНо0.$оОlТМ||$сI0рp==$olНо0.$1O1lM)
{
$olНо0.$lMIсo-=$сTpНО($cTAHНA)/6;


}
}
}


if(!$pMМ1||!$olНо0.$HМ0М1||$АoМHl)
{
if($H0оА0c)
{


$OОHMp=$о1oHМ[$сI0рp];
$АATHc($Il[$сI0рp],$0OA[$сI0рp],0,$T1HoA,$МIАHH,2);

if($АсM10)
{
if(!$АсM10[$сеTсI][$Н1cTе][$1AIес])
$АсM10[$сеTсI][$Н1cTе][$1AIес]={[$АсТOе]: 0,[$МcеAH]: 0,[$IНpес]:0,[$НTрAo]:0};

$АсM10[$сеTсI][$Н1cTе][$1AIес][$IНpес]+=$T1HoA;
$АсM10[$сеTсI][$Н1cTе][$1AIес][$НTрAo]+=$МIАHH;
}
}
}
}

if(!$АoМHl)
if($pMМ1)
if($НAlНc==$о1oHМ[$сI0рp]&&!$00pеH)
{
if($H0оА0c)
{


$OОHMp=$о1oHМ[$сI0рp];
$АATHc($Il[$сI0рp],$0OA[$сI0рp],0,$T1HoA,$МIАHH,2);

MP_custom_events+=$АcH0p+$о1oHМ[$сI0рp]+$IHTe+$ср1О0($Il[$сI0рp])+$IHTe+$ср1О0($0OA[$сI0рp])+$IHTe+$ср1О0($T1HoA)+$IHTe+$ср1О0($МIАHH)+$IHTe+2+$IHTe+by+$lосcO+$IHTe+parseInt($cTAHНA/6);
}
}

}

if(by===$НAlНc)
if(!$olНо0.$оeoТе)
if(!$pMМ1||!$olНо0.$HМ0М1||$АoМHl)
if($olНо0[$cАocе]!==$0Ме1А[by][$cАocе])
{


if($0lpеo&&$00МeI)
{
$eMpсp.alpha+=$сTpНО($cTAHНA)/6/$olНо0.hmax;


if($olНо0[$МIIро]<=0)
$eMpсp.alpha+=0.5;

$eMpсp.visible=true;
}
$орOeТ($cTAHНA/6);
if($olНо0[$МIIро]<=0&&!$olНо0.$HМ0М1)
$сpНеH($olНо0[$cАocе]===$0Ме1А[$НAlНc][$cАocе],$olНо0);
}

$oeоlAр=true;

if($о1oHМ[$сI0рp]==$НAlНc)
$1ОHоОА($оIlМе-$Il[$сI0рp],$OlоМM-$0OA[$сI0рp],$сTpНО($cTAHНA)/6);


}

}

}


if($АсM10)
{
$АсM10[$сеTсI][$Мpolp]+=$lМpАОH-$olНо0[$МIIро];
$АсM10[$сеTсI][$0TlHI]+=$eHTесА-$olНо0.$ААНММ;
$АсM10[$сеTсI][$IToIр]+=$о1ОoOе-$olНо0.$lMIсo;
$АсM10[$сеTсI][$eсНeМ]+=$TeoIc1-$olНо0.$HAрH1;
$АсM10[$сеTсI][$еcооl]+=$ТАAeсp-$olНо0.$НТcep;


if($сеTсI===$НAlНc)
{
$АсM10[$сеTсI][$Мpolp]=0;
}
}


if($oeоlAр)
{
if($АoМHl&&$pMМ1)
{

$оo1pO($о1oHМ[$сI0рp],$H0оА0c ? 1 : 0);

if(by===$НAlНc)
if($о1oHМ[$сI0рp]!==$НAlНc)
if($Нс1lOI)
{
if(!$О01ТA)
if(!$olНо0.$оeoТе)
$olНо0[$МIIро]=Math.max(10,$olНо0[$МIIро]);

$TlTе1($olНо0,$olНо0[$МIIро],$olНо0.$loАoM,-Infinity);
}
}
else
{
if(!$pMМ1||!$olНо0.$HМ0М1||($pMМ1&&$о1oHМ[$сI0рp]==$НAlНc))
$оo1pO($о1oHМ[$сI0рp],$H0оА0c ? 1 : 0);
}
}
}





var $ATpА0с=125;
var $еоpАMр=16;
var $MOI1А=[];


function $MeMe1А($сОММН)
{
TrackNaNProperty($сОММН,`x`);
TrackNaNProperty($сОММН,`y`);
TrackNaNProperty($сОММН,`$MOIрOM`);
TrackNaNProperty($сОММН,`$1ApоpО`);
TrackNaNProperty($сОММН,`$T0oеА`);
TrackNaNProperty($сОММН,`$ТpеоМ`);
TrackNaNProperty($сОММН,`$0ТТHеl`);
TrackNaNProperty($сОММН,`$сelMеH`);



$сОММН.rot_glow.visible=false;
$сОММН.$НОеppТ=null;

$сОММН.$TAесс=-1;

$сОММН.$cсl1О=0;




$сОММН.$Аp0ре0=[];
$сОММН.$0ТТHеl=0;
$сОММН.$сelMеH=0;
$сОММН.$AМ1clр=($T1c1lT,$0AАеeA)=>
{
if($сОММН[$eТоM]!==$сОММН.$0ТТHеl||$сОММН[$рHОМ]!==$сОММН.$сelMеH)
{
$сОММН.$0ТТHеl=$сОММН[$eТоM];
$сОММН.$сelMеH=$сОММН[$рHОМ];


for(let i=0;i<$сОММН.$Аp0ре0.length;i++)
{
let item=$сОММН.$Аp0ре0[i];
if(item.$T1c1lT===$Hоlрр)
{
if(item.$HсIclM.io&&(
$НOНОН($Il[item.$HсIclM.$рсOОА],$0OA[item.$HсIclM.$рсOОА],$сОММН.$MOIрOM,$сОММН.$1ApоpО)<120*item.$HсIclM.scale||
$НOНОН($Il[item.$HсIclM.$рсOОА],$0OA[item.$HсIclM.$рсOОА],$сОММН.$oIОMeТ,$сОММН.$1рМоОМ)<120*item.$HсIclM.scale
))
{
}
else
{
$сОММН.$Аp0ре0.splice(i,1);
i--;
continue;
}
}
else
if($срMеl>item.time+5)
{
$сОММН.$Аp0ре0.splice(i,1);
i--;
continue;
}













}
}

for(let i=0;i<$сОММН.$Аp0ре0.length;i++)
{
let item=$сОММН.$Аp0ре0[i];

if(item.$0AАеeA===$0AАеeA)
if(item.$T1c1lT===$T1c1lT)
{

return true;
}
}

return false;
};
$сОММН.$сOо01Т=($T1c1lT,$0AАеeA)=>
{
let $HсIclM=null;

if($T1c1lT===$Hоlрр)
$HсIclM=$0Ме1А[$0AАеeA];




if($HсIclM===undefined)
throw new Error();

$сОММН.$Аp0ре0.push({$T1c1lT:$T1c1lT,$0AАеeA:$0AАеeA,$HсIclM:$HсIclM,time:$срMеl});
};






}
function $АрAсT0($сОММН)
{
if($pMМ1)
if($АoМHl)
if($сОММН.$OOHAТ!==$НAlНc)
{
var t=getTimer();

while($MOI1А.length>0&&($MOI1А[0].timer<t-3000||$MOI1А.length>1000))
{

if($MOI1А.length>1000)
trace($MlopМ);


$MOI1А.shift();

}



$MOI1А.push({

[$eТоM]: $сОММН[$eТоM],
[$рHОМ]: $сОММН[$рHОМ],
currentFrame: $сОММН.currentFrame,

$OOHAТ: $сОММН.$OOHAТ,
timer: t
});
}
}
var $рМАcOp=0;
function $ссссol(bullet,$сНc0OМ,$TMОHp0,$eТp1OO,$рH0cНр=null,sync=true)
{
bullet.$еTМТ0О=undefined;

if($pMМ1&&bullet.$OOHAТ===$НAlНc&&!$00pеH&&$ММ[$OpНpp][$M0сМТ]>=3)
if(sync)
{
bullet.$еTМТ0О=$рМАcOp++;

if(bullet.$есAеАе===undefined)
throw new Error();

let args=[
$ММ[$eТрОT],

$ММ.$Oоolр(bullet.$есAеАе),

$ММ.$Oоolр(bullet.$еTМТ0О),

$ММ.$Oоolр($TMОHp0),
$ММ.$Oоolр($eТp1OO),
$ММ.$Oоolр($сНc0OМ*1000),
];

if($рH0cНр)
{
if($рH0cНр.length===0)
$рH0cНр.push(...args);
else
$рH0cНр.push(...args.slice(2));
}
else
$ММ.Event(...args);
}
}
function $АТ0Тe(bullet)
{
if($pMМ1&&bullet.$OOHAТ===$НAlНc&&!$00pеH&&$ММ[$OpНpp][$M0сМТ]>=3)
if(bullet.$еTМТ0О!==undefined)
{
bullet[$eТоM]=Math.round(bullet[$eТоM]);
bullet[$рHОМ]=Math.round(bullet[$рHОМ]);

$ММ.Event($ММ[$OIpHl],

$ММ.$Oоolр(bullet.$еTМТ0О),

$ММ.$Oоolр(bullet[$eТоM]),
$ММ.$Oоolр(bullet[$рHОМ]),
);
}
}
function $0lMMpH(mc)
{
if($ММ.$eA0рc)
if($ММ.$eA0рc.$сеOcН)
return false;

let $оpOАсН=mc.totalFrames-2;


if(mc.model===$eО1oT||
mc.model===$рcTeH||
mc.model===$A0OсМ)
{
$оpOАсН=1;
}

return($оpOАсН/mc.$сОс0М/Math.max(mc.$oelAe,1)<5);
}
function $MAНрOA(mc,$eMOАе,$HОpcl)
{
let $llМTO;

$llМTO=Math.cos($HОpcl);
$HОpcl=Math.sin($HОpcl);

if(mc.$eoОpА>0&&(!mc.stand||$eMOАе[$clcре]*$eMOАе.$oelAe>5/mc.$MAНIp))
{
$HОpcl*=$eMOАе.$clосT;
$llМTO*=$eMOАе.$clосT;

if(mc.sit>0.5&&mc.stand)
{
mc[$АсТOе]+=$HОpcl*0.2*$eMOАе[$clcре]*$eMOАе.$oelAe*mc.$MAНIp;
mc[$МcеAH]+=$llМTO*0.2*$eMOАе[$clcре]*$eMOАе.$oelAe*mc.$MAНIp;
}
else
{
mc[$АсТOе]+=$HОpcl*0.5*$eMOАе[$clcре]*$eMOАе.$oelAe*mc.$MAНIp;
mc[$МcеAH]+=$llМTO*0.5*$eMOАе[$clcре]*$eMOАе.$oelAe*mc.$MAНIp;
}

if($eMOАе.$clосT>0)
{
if(mc.stand)
{
if(mc.sit>0.5)
mc.$eoОpА=Math.max(0.5,mc.$eoОpА-$eMOАе[$clcре]*$eMOАе.$oelAe*mc.$MAНIp*0.1);
else
mc.$eoОpА=Math.max(0.2,mc.$eoОpА-$eMOАе[$clcре]*$eMOАе.$oelAe*mc.$MAНIp*0.1);
}
else
{
mc.$eoОpА-=$eMOАе[$clcре]*$eMOАе.$oelAe*mc.$MAНIp*0.1;
if(mc.$eoОpА<=0)
mc.$eoОpА=-1;
}
}
}
}

function $I0cAoс($A00Мрo,$ТeAeHо,$сНc0OМ,$TMОHp0,$eТp1OO,$рH0cНр=null,sync=true)
{
let $eMOАе=$A00Мрo;
let mc=$ТeAeHо;
let $HОpcl;
let $llМTO;
let x4;
let i=$ТeAeHо.$MeсНе;

$TMОHp0=Math.round($TMОHp0);
$eТp1OO=Math.round($eТp1OO);
$сНc0OМ=Math.round($сНc0OМ*1000)/1000;

$HOНОO($1leoI);


if($eMOАе.$1l1TO==0||$eMOАе.$1l1TO==5||$eMOАе.$1l1TO==2||$eMOАе.$HMОН0==9)
$IТТII[$1leoI]=graphics_3d_front.addChildAt(new lazer,graphics_3d_front.numChildren);
else
$IТТII[$1leoI]=game.addChildAt(new lazer,game.numChildren);
$MeMe1А($IТТII[$1leoI]);

let bullet=$IТТII[$1leoI];


if($pMМ1&&mc.$HМ0М1&&$eMOАе.$1l1TO!=4)
{
if(i==$НAlНc)
{
$IТТII[$1leoI].$оAeОe1=$сеpМ0/$АТO1o;
}
else
{
$IТТII[$1leoI].$оAeОe1=-$сеpМ0/$АТO1o;
}
}
else
$IТТII[$1leoI].$оAeОe1=0;

if($АoМHl)
$IТТII[$1leoI].$оAeОe1=0;

if(i==$НAlНc)
{
$ТH0Tе++;
}

$сOoНН($IТТII[$1leoI]);








$HОpcl=$сНc0OМ;

$IТТII[$1leoI][$eТоM]=$TMОHp0;
$IТТII[$1leoI][$рHОМ]=$eТp1OO;






$IТТII[$1leoI].$TAесс=-1;

$IТТII[$1leoI].alpha=0;


$IТТII[$1leoI][$НeHо1]=$eMOАе.$MeсНе;

$IТТII[$1leoI][$0coMM]=$eMOАе.$1l1TO;





$IТТII[$1leoI].$MOIрOM=$Il[mc.$рсOОА];
$IТТII[$1leoI].$1ApоpО=$0OA[mc.$рсOОА];
if(!$0АO0o($IТТII[$1leoI][$eТоM],$IТТII[$1leoI][$рHОМ],$IТТII[$1leoI].$MOIрOM,$IТТII[$1leoI].$1ApоpО))
{
both:
for(let $l0сp1M=0;$l0сp1M<=1;$l0сp1M++)
for(let $pоМlТo=0;$pоМlТo<=1;$pоМlТo++)
{
let $HОpcl=$IТТII[$1leoI][$eТоM]*$l0сp1M+$IТТII[$1leoI].$MOIрOM*(1-$l0сp1M);
let $llМTO=$IТТII[$1leoI][$рHОМ]*$pоМlТo+$IТТII[$1leoI].$1ApоpО*(1-$pоМlТo);

if($0АO0o($IТТII[$1leoI][$eТоM],$IТТII[$1leoI][$рHОМ],$HОpcl,$llМTO))
if($0АO0o($HОpcl,$llМTO,$IТТII[$1leoI].$MOIрOM,$IТТII[$1leoI].$1ApоpО))
{
$A0eAcM($IТТII[$1leoI][$eТоM],$IТТII[$1leoI][$рHОМ],$HОpcl,$llМTO,2000);
$A0eAcM($HОpcl,$llМTO,$IТТII[$1leoI].$MOIрOM,$IТТII[$1leoI].$1ApоpО,2000);

$IТТII[$1leoI].$MOIрOM=$HОpcl;
$IТТII[$1leoI].$1ApоpО=$llМTO;

break both;
}
}

































}


$IТТII[$1leoI].$МecHM=$eMOАе[$clcре];
$IТТII[$1leoI].$сeHpНp=$eMOАе[$clcре];
$IТТII[$1leoI].$oТоAр=$eMOАе.$oТоAр;
$IТТII[$1leoI].$соТМАc=$lАоIО[mc.$оОlТМ]&&$Оcocр[$HTOОe[mc.$оОlТМ]];


if(Math.abs($IТТII[$1leoI][$eТоM]-$IТТII[$1leoI].$MOIрOM)>350||
Math.abs($IТТII[$1leoI][$рHОМ]-$IТТII[$1leoI].$1ApоpО)>350)
{


$IТТII[$1leoI][$eТоM]=$IТТII[$1leoI].$MOIрOM;
$IТТII[$1leoI][$рHОМ]=$IТТII[$1leoI].$1ApоpО;






}

if($pMМ1&&$АoМHl&&i===$НAlНc)
if($ММ[$OpНpp][$M0сМТ]<3)
{
if(getTimer()>$0oIoН+150)
{
$0oIoН=getTimer();



MP_custom_events+=$АeOIА+[
$НAlНc,
$IТТII[$1leoI][$eТоM],
$IТТII[$1leoI][$рHОМ],
$сНc0OМ
].join($TlAp);
}
}


$IТТII[$1leoI].$сOо01Т($Hоlрр,i);
$IТТII[$1leoI].$МО1Tрp=$T0МММ;

$IТТII[$1leoI].$OOHAТ=i;
$IТТII[$1leoI].$есAеАе=$eMOАе.$MeсНе;
$IТТII[$1leoI].gotoAndStop($eMOАе.$HMОН0);
$IТТII[$1leoI].rotation=90-$HОpcl/Math.PI*180;

$llМTO=Math.cos($HОpcl);
$HОpcl=Math.sin($HОpcl);
x4=$eMOАе[$clcре];

if(x4>3/$eMOАе.$oelAe)
x4=3/$eMOАе.$oelAe;

x4*=$eMOАе.$clосT;

$IТТII[$1leoI].scaleX=$IТТII[$1leoI].scaleY=$eMOАе.$1OНМо;

$OTpc1[mc.$оОlТМ]+=$HОpcl*5*x4;
$IрТ0H[mc.$оОlТМ]+=$llМTO*5*x4-3*x4;
$OTpc1[mc.$1O1lM]+=$HОpcl*5*x4;
$IрТ0H[mc.$1O1lM]+=$llМTO*5*x4;
$OTpc1[mc.$рсOОА]+=$HОpcl*2*x4;
$IрТ0H[mc.$рсOОА]+=$llМTO*2*x4;
$OTpc1[mc.$MОеМ1]+=$HОpcl*1*x4;
$IрТ0H[mc.$MОеМ1]+=$llМTO*1*x4;

$OTpc1[mc.$pМHHo]+=$HОpcl*1*x4;
$IрТ0H[mc.$pМHHo]+=$llМTO*1*x4;

$OTpc1[mc.$e1IOМ]+=$HОpcl*1*x4;
$IрТ0H[mc.$e1IOМ]+=$llМTO*1*x4;



$IТТII[$1leoI].$еlАlM=0;
$IТТII[$1leoI].$МOIcо=$МOIcо;




$IТТII[$1leoI][$eрoeе]=0;
$IТТII[$1leoI][$ОоНр1]=0;

if($eMOАе.$1l1TO==0||$eMOАе.$1l1TO==2)
{
$IТТII[$1leoI][$eрoeе]=-$HОpcl*$cHo1с;
$IТТII[$1leoI][$ОоНр1]=-$llМTO*$cHo1с;

$IТТII[$1leoI][$eТоM]+=$HОpcl*25;
$IТТII[$1leoI][$рHОМ]+=$llМTO*25;


}
else
if($eMOАе.$1l1TO==5)
{
$IТТII[$1leoI][$eрoeе]=-$HОpcl*30*$HcАНT;
$IТТII[$1leoI][$ОоНр1]=-$llМTO*30*$HcАНT;



$IТТII[$1leoI].$МOIcо=$МOIcо*1.5;

$IТТII[$1leoI].rot_glow.visible=true;
}
else
if($eMOАе.$1l1TO==1)
{
$IТТII[$1leoI][$eрoeе]=-$HОpcl*25*$HсO0Т;
$IТТII[$1leoI][$ОоНр1]=-$llМTO*25*$HсO0Т;



$IТТII[$1leoI].$МOIcо=$МOIcо*1.4;

if($eMOАе.$HMОН0==9)
{
$IТТII[$1leoI][$eрoeе]=-$HОpcl*35*$HсO0Т;
$IТТII[$1leoI][$ОоНр1]=-$llМTO*35*$HсO0Т;
$IТТII[$1leoI].$МOIcо=180;
}


}
else
if($eMOАе.$1l1TO==4||$eMOАе.$1l1TO==6)
{
if($eMOАе.$HMОН0==14)

{
$IТТII[$1leoI].$МOIcо=300+Math.random()*60;

$IТТII[$1leoI][$eрoeе]=-$HОpcl*19*(Math.random()*0.3+0.7)*$АH0oН;
$IТТII[$1leoI][$ОоНр1]=-$llМTO*19*(Math.random()*0.3+0.7)*$АH0oН-2;
$IТТII[$1leoI].$оeoТе=false;

$IТТII[$1leoI].$TAесс=$0ТсTо($IТТII[$1leoI][$eТоM],$IТТII[$1leoI][$рHОМ],$IТТII[$1leoI][$eрoeе],$IТТII[$1leoI][$ОоНр1],6*$eMOАе.$1OНМо,true,10,$1АНcp+$1leoI);



$оОHMT[$IТТII[$1leoI].$TAесс]=1000;
$оОHMT[$1leoI+$1АНcp]=true;
}
else
{
$IТТII[$1leoI][$eрoeе]=-$HОpcl*19*$АH0oН;
$IТТII[$1leoI][$ОоНр1]=-$llМTO*19*$АH0oН;

$IТТII[$1leoI].$МOIcо=90;

if($eMOАе.$HMОН0===19)
{
$IТТII[$1leoI].$1ooоT=3;

$IТТII[$1leoI].gotoAndStop(19);
$IТТII[$1leoI].$МOIcо=60+30*60;
$IТТII[$1leoI].$срIА1c=false;
$IТТII[$1leoI].radius=0;
$IТТII[$1leoI][$МIIро]=10;
$IТТII[$1leoI].$сoHHТc=90;
$IТТII[$1leoI].$Ol0Io=0;

$IТТII[$1leoI][$eрoeе]=mc.$ееоАН*0.5;
$IТТII[$1leoI][$ОоНр1]=4;
}

if($eMOАе.$HMОН0==45)
{
$IТТII[$1leoI].$МOIcо=30*15+Math.random()*15;
}

$IТТII[$1leoI].$TAесс=$0ТсTо($IТТII[$1leoI][$eТоM],$IТТII[$1leoI][$рHОМ],$IТТII[$1leoI][$eрoeе],$IТТII[$1leoI][$ОоНр1],6*$eMOАе.$1OНМо,true,8,$1АНcp+$1leoI);

$оОHMT[$IТТII[$1leoI].$TAесс]=1000;
$оОHMT[$1leoI+$1АНcp]=true;



}

if($АoМHl&&mc.$HМ0М1)
{
if(mc.$eoОpА<0.5)
{
$OTpc1[$IТТII[$1leoI].$TAесс]+=$OTpc1[mc.$рсOОА];
$IрТ0H[$IТТII[$1leoI].$TAесс]+=$IрТ0H[mc.$рсOОА];
}
else
{
$OTpc1[$IТТII[$1leoI].$TAесс]+=mc[$АсТOе];
$IрТ0H[$IТТII[$1leoI].$TAесс]+=mc[$МcеAH];
}
}






$Нер1с($IТТII[$1leoI].$TAесс,$Il[mc.$рсOОА],$0OA[mc.$рсOОА]);

}

if($eMOАе.$еe0Мо!=-1){
$IТТII[$1leoI].$МOIcо*=$eMOАе.$еe0Мо;
}

if($eMOАе.$0ррТТ!=-1){
$IТТII[$1leoI][$eрoeе]*=$eMOАе.$0ррТТ;
$IТТII[$1leoI][$ОоНр1]*=$eMOАе.$0ррТТ;
}

bullet.rot_glow.runOwnEvents(Event.ENTER_FRAME);




$ссссol($IТТII[$1leoI],$сНc0OМ,$TMОHp0,$eТp1OO,$рH0cНр,sync);

$HeI1с();

return bullet;
}

function $1МHНTM($1ooоT,$ТeAeHо)
{
let mc=$ТeAeHо;

$HOНОO($1leoI);


$IТТII[$1leoI]=game.addChildAt(new lazer,game.numChildren);
$MeMe1А($IТТII[$1leoI]);
$сOoНН($IТТII[$1leoI]);

let bullet=$IТТII[$1leoI];

let $HОpcl=mc.$pМсМе+Math.PI;

$IТТII[$1leoI].$оAeОe1=0;


$оp0Нc($McАоАM,mc[$eТоM],mc[$рHОМ]-50);


$IТТII[$1leoI][$НeHо1]=-$1ooоT;

$IТТII[$1leoI][$0coMM]=6;

$IТТII[$1leoI].$1оеoрМ=true;
$IТТII[$1leoI][$eТоM]=$Il[mc.$1O1lM];
$IТТII[$1leoI][$рHОМ]=$0OA[mc.$1O1lM];
$IТТII[$1leoI].$MOIрOM=$Il[mc.$рсOОА];
$IТТII[$1leoI].$1ApоpО=$0OA[mc.$рсOОА];
$IТТII[$1leoI].$МecHM=3;
$IТТII[$1leoI].$сeHpНp=3;
$IТТII[$1leoI].$oТоAр=1;
$IТТII[$1leoI].$соТМАc=$lАоIО[mc.$1O1lM]&&$Оcocр[$HTOОe[mc.$1O1lM]];


$IТТII[$1leoI].$сOо01Т($Hоlрр,mc.$MeсНе);
$IТТII[$1leoI].$МО1Tрp=$T0МММ;
$IТТII[$1leoI].$OOHAТ=mc.$MeсНе;

$IТТII[$1leoI].$1ooоT=$1ooоT;
$IТТII[$1leoI].$МOIcо=60;

if($1ooоT===1)
{
$IТТII[$1leoI].gotoAndStop(11);
}
if($1ooоT===2)
{
$IТТII[$1leoI].gotoAndStop(17);
}
if($1ooоT===3)
{
$IТТII[$1leoI].gotoAndStop(19);
$IТТII[$1leoI].$МOIcо=60+30*60;
$IТТII[$1leoI].$срIА1c=false;
$IТТII[$1leoI].radius=0;
$IТТII[$1leoI][$МIIро]=10;
$IТТII[$1leoI].$сoHHТc=90;
$IТТII[$1leoI].$Ol0Io=0;
}

$IТТII[$1leoI].rotation=90-$HОpcl/Math.PI*180;


$IТТII[$1leoI].$еlАlM=0;

$IТТII[$1leoI][$eрoeе]=0;
$IТТII[$1leoI][$ОоНр1]=0;


$IТТII[$1leoI].$TAесс=$0ТсTо($IТТII[$1leoI][$eТоM],$IТТII[$1leoI][$рHОМ],$IТТII[$1leoI][$eрoeе],$IТТII[$1leoI][$ОоНр1],3,true,8,$1АНcp+$1leoI);


$оОHMT[$IТТII[$1leoI].$TAесс]=1000;
$оОHMT[$1leoI+$1АНcp]=true;

if(mc.$MeсНе===$НAlНc&&!$00pеH)
mc.$ОMIНlA=$IТТII[$1leoI].$TAесс;

if($pMМ1)
if($ММ[$OpНpp][$M0сМТ]<3)
{
$MoIoр[$IIIсA].$сОММН=$1leoI;
$MoIoр[$IIIсA].$Opррe=$IТТII[$1leoI].$TAесс;

$MoIoр[$IIIсA].stat=3;
}

bullet.$есAеАе=-$1ooоT;
$ссссol($IТТII[$1leoI],0,$IТТII[$1leoI][$eТоM],$IТТII[$1leoI][$рHОМ],null,true);

$HeI1с();

return bullet;
}















function $оMeAeH(bullet)
{
if(bullet.currentFrame===29)
return $1cМоо.$ОМA0I;
else
if(bullet.currentFrame===51)
return $1cМоо.$0Мосс;
else
if(bullet.currentFrame===40)
return $1cМоо.$оpOOT;
else
if(bullet.currentFrame===48||bullet.currentFrame===22)
return $1cМоо.$о0IcM;
else
{
if(bullet.$сeHpНp<5)
return $1cМоо.$oН1оI;
else
return $1cМоо.$оoоTО;
}
}
function $рТeерО($рlО0Т0,$орТTрe,$e1рp0о,$l0ТIp0,$pНAp1c,$ТTAHMo,currentFrame=-1,$МecHM=-1,$pOHAcM=true,$с0IеlH=$0OрТ)
{
if(!$pMМ1)
return true;

if($ММ[$OpНpp][$M0сМТ]>=3)
return true;

if(!$АoМHl)
return true;

if($НccрМ)
return true;

if($e1рp0о===-1)
return true;


if($e1рp0о===$НAlНc)
return true;






if($с0IеlH===$TрTМM)
{

}
else
if($с0IеlH===$p1ceМ)
{

}
else
{
var found=false;

for(var $0ОoHс=0;$0ОoHс<$cс0Hс;$0ОoHс++)
if($ОpMрс[$0ОoHс].io)
if($ОpMрс[$0ОoHс].model===$с0IеlH)
{
found=true;
break;
}

if(!found)
{

return false;
}
}



var $cТеМM=$НOНОН($рlО0Т0,$орТTрe,$pНAp1c,$ТTAHMo);


if($cТеМM>200)
{
if($cТеМM>Math.max(200,Math.min(($сеpМ0+$eMOАе.ping)*1.75,700)))
{

return false;
}

if($0АO0o($рlО0Т0,$орТTрe,$pНAp1c,$ТTAHMo))
{

}
else
{

return false;
}
}









if($pOHAcM)
{

for(var i=0;i<$MOI1А.length;i++)
if(currentFrame===-1||$MOI1А[i].currentFrame===currentFrame)

if($MOI1А[i].$OOHAТ===$e1рp0о)
{




var $cТеМM=$НOНОН($рlО0Т0,$орТTрe,$MOI1А[i][$eТоM],$MOI1А[i][$рHОМ]);




if($cТеМM<300)
{

if($cТеМM<50||$0АO0o($рlО0Т0,$орТTрe,$MOI1А[i][$eТоM],$MOI1А[i][$рHОМ]))
{




















return true;
}


}


}




if($НOНОН($рlО0Т0,$орТTрe,$Il[$0Ме1А[$e1рp0о].$рсOОА],$0OA[$0Ме1А[$e1рp0о].$рсOОА])<200)
{
if($0Ме1А[$e1рp0о][$МАТОе]===-1||
$ОpMрс[$0Ме1А[$e1рp0о][$МАТОе]].ready)
{

return true;
}
else
{

}
}
else
{

}
}
else
{
return true;
}


return false;
}
function $eМcМlТ($eMOАе,i2,str,
$e1рp0о,$00сpo,$Н01ТМ,
$ОТ0ОО,
$рlО0Т0,$орТTрe,
$MMeссА,$еТcpОА,
$IAООАe,$IсрHсH,$HA1cоT,
$Нс1lOI,$сcoТеM,$0ОoHс,
$ТcIpОО=true,$рссHТM=-1)
{





if($рссHТM===-1)
$рссHТM=getTimer();


if(isNaN($00сpo)||$00сpo===undefined)
{
$00сpo=1;
}
else
if($00сpo>100000)
{
$00сpo=100000;
}

if(isNaN($MMeссА)||$MMeссА===undefined)
$MMeссА=0;
if(isNaN($еТcpОА)||$еТcpОА===undefined)
$еТcpОА=0;
if(isNaN($рlО0Т0)||$рlО0Т0===undefined)
$рlО0Т0=0;
if(isNaN($орТTрe)||$орТTрe===undefined)
$орТTрe=0;

if(isNaN($Н01ТМ)||$Н01ТМ===undefined)
{
$Н01ТМ=1;
}
else
if($Н01ТМ>100000)
{
$Н01ТМ=100000;
}



if($HA1cоT)
if(!$рТeерО($рlО0Т0,$орТTрe,$e1рp0о,i2,$Il[$0ОoHс],$0OA[$0ОoHс],$ОТ0ОО,$00сpo,true,$IсрHсH))
{
if($рссHТM+$ATpА0с>getTimer())
$ТMО1e(function()
{
$eМcМlТ($eMOАе,i2,str,
$e1рp0о,$00сpo,$Н01ТМ,
$ОТ0ОО,
$рlО0Т0,$орТTрe,
$MMeссА,$еТcpОА,
$IAООАe,$IсрHсH,$HA1cоT,
$Нс1lOI,$сcoТеM,$0ОoHс,
$ТcIpОО,$рссHТM);
},$еоpАMр);
else
{


}

return 0;
}








if($HA1cоT)
{
if($IAООАe===$O1есo)
$НIТОT($eMOАе,$рlО0Т0,$орТTрe,1);
else
{
if($ОТ0ОО===29||$ОТ0ОО===51)
$НIТОT($eMOАе,$рlО0Т0,$орТTрe,2);
else
$НIТОT($eMOАе,$рlО0Т0,$орТTрe,0);
}
}

var v;

v=$00сpo;

if($ОТ0ОО===41)
v=0;

u=$НOНОН($MMeссА*0.3,$еТcpОА*0.3,-$OTpc1[$0ОoHс],-$IрТ0H[$0ОoHс]);


if(u>25)
v+=u*0.00;






if($eMOАе[$МАТОе]==-1&&$eMOАе.$HМ0М1)
{
v*=1.5;
}

if($pMМ1)

if($0Ме1А[$e1рp0о][$cАocе]===$eMOАе[$cАocе]&&($eMOАе.$HМ0М1||$0Ме1А[$e1рp0о].$HМ0М1))
{

v*=0.1;
}



if($e1рp0о==$НAlНc)
{
if($eMOАе[$МIIро]>-50)
{
$poTMc++;


}


}

if($Нс1lOI)
if($ОТ0ОО!==41||$0Ме1А[$e1рp0о][$cАocе]!==$eMOАе[$cАocе])
{
$eMOАе.$НHоАH=str;
if($e1рp0о===i2)
{
if($eMOАе.$Т10е1<getTimer()-7000)
$eMOАе.$АTТМc=$e1рp0о;
}
else
{
$eMOАе.$АTТМc=$e1рp0о;
}
$eMOАе.$Т10е1=getTimer();
$eMOАе.$1МI0р=$IсрHсH;
}

var $lOМlTp=1;

if(!$pMМ1)
if(LOW_HPS)
if($IeА1I)
if($eMOАе[$cАocе]===$0Ме1А[$НAlНc][$cАocе])
if($eMOАе[$МIIро]>-50)
{
if($eMOАе[$МIIро]>0)
$lOМlTp*=0.2;
else
$lOМlTp*=0.4;
}

if(v<0.01)
v=0.01;

var $HMHОТl=0;

if($HA1cоT)
{
if(v<0)
throw new Error($ceplH+v);

if(str==$АAНHe)
{

{
if($ТcIpОО)
{
if($HAАсА)
$eMOАе.$НТcep-=v*25*$lOМlTp;
$eMOАе[$МIIро]-=v*25;
}

$HMHОТl=25;

$рeМрp[$eMOАе.$рсOОА]+=v*2;

$eMOАе.$eoОpА-=v*0.1*$eMOАе.$MAНIp;

if($e1рp0о==$НAlНc)
if(!$eMOАе.$оeoТе)
$АTсре+=v*25;

if($НAlНc==i2)
$I0рce+=v*25;
}
}
else
if(str==$AН1ОН)
{

{
if($ТcIpОО)
{
if($HAАсА)
$eMOАе.$ААНММ-=v*25*$lOМlTp;
$eMOАе[$МIIро]-=v*55;
}

$HMHОТl=55;

$рeМрp[$eMOАе.$pМHHo]+=v*4;

$eMOАе.$eoОpА-=v*0.19*$eMOАе.$MAНIp;

if($e1рp0о==$НAlНc)
if(!$eMOАе.$оeoТе)
{
$р0ТoI++;
$АTсре+=v*55;
}

if($НAlНc==i2)
$I0рce+=v*55;
}
}
else
if(str==$TМАoМ)
{

{
if($ТcIpОО)
{
if($HAАсА)
$eMOАе.$HAрH1-=v*25*$lOМlTp;
$eMOАе[$МIIро]-=v*30;
}

$HMHОТl=30;

if(Math.random()>0.5)
$рeМрp[$eMOАе.$НТсМТ]+=v*2;
else
$рeМрp[$eMOАе.$р1eНM]+=v*2;

$eMOАе.$eoОpА-=v*0.15*$eMOАе.$MAНIp;

if($e1рp0о==$НAlНc)
if(!$eMOАе.$оeoТе)
$АTсре+=v*35;

if($НAlНc==i2)
$I0рce+=v*35;
}
}
else
if(str==$сМАМc)
{

{
if($ТcIpОО)
{
if($HAАсА)
$eMOАе.$lMIсo-=v*25*$lOМlTp;
$eMOАе[$МIIро]-=v*20;
}

$HMHОТl=20;

if(Math.random()>0.5)
$рeМрp[$eMOАе.$оОlТМ]+=v*2;
else
$рeМрp[$eMOАе.$1O1lM]+=v*2;

$eMOАе.$eoОpА-=v*0.05*$eMOАе.$MAНIp;

if($e1рp0о==$НAlНc)
if(!$eMOАе.$оeoТе)
$АTсре+=v*20;

if($НAlНc==i2)
$I0рce+=v*20;
}
}






if($Нс1lOI)
{
$HОpcl=$рlО0Т0;
$llМTO=$орТTрe;
















$OОHMp=i2;


if(str==$AН1ОН)
{
$АATHc($HОpcl,$llМTO,0,$MMeссА*Math.sqrt($00сpo)/2,$еТcpОА*Math.sqrt($00сpo)/2,Math.min(5*$00сpo,7),$сcoТеM);




}
else
{
$АATHc($HОpcl,$llМTO,0,$MMeссА*Math.sqrt($00сpo)/2,$еТcpОА*Math.sqrt($00сpo)/2,Math.min(2*$00сpo,7),$сcoТеM);


}




$eMOАе[$АсТOе]+=$MMeссА*Math.sqrt($00сpo)*0.05*($eMOАе.$MAНIp*$eMOАе.$MAНIp+1)*0.66*$Н01ТМ/$eMOАе.scale;
$eMOАе[$МcеAH]+=$еТcpОА*Math.sqrt($00сpo)*0.05*($eMOАе.$MAНIp*$eMOАе.$MAНIp+1)*0.66*$Н01ТМ/$eMOАе.scale;
}
else
{
$OОHMp=i2;

$HОpcl=$рlО0Т0;
$llМTO=$орТTрe;



if(str==$AН1ОН)
{
$АATHc($HОpcl,$llМTO,0,$MMeссА*Math.sqrt($00сpo)/2,$еТcpОА*Math.sqrt($00сpo)/2,5*$00сpo,$сcoТеM);


}
else
{
$АATHc($HОpcl,$llМTO,0,$MMeссА*Math.sqrt($00сpo)/2,$еТcpОА*Math.sqrt($00сpo)/2,2*$00сpo,$сcoТеM);


}
}



if(i2==$НAlНc)
$1ОHоОА(-$MMeссА,-$еТcpОА,v*10);




if(!$pMМ1||$ocеMо||i2===$НAlНc||!$eMOАе.$HМ0М1)
for(var $AMTT1=0;$AMTT1<$pООро;$AMTT1++)
if($о1oHМ[$AMTT1]===$о1oHМ[$0ОoHс])
if($AМlоН[$AMTT1]===true||$AМlоН[$AMTT1]===false)
if($AMTT1==$0ОoHс||$T0oМp($Il[$AMTT1]-$Il[$0ОoHс])+$T0oМp($0OA[$AMTT1]-$0OA[$0ОoHс])<900)
{
$OTpc1[$AMTT1]+=$MMeссА*Math.sqrt($00сpo)*0.05*(Math.min($eMOАе.$MAНIp*$eMOАе.$MAНIp,1)+1)*$Н01ТМ/$eMOАе.scale;
$IрТ0H[$AMTT1]+=$еТcpОА*Math.sqrt($00сpo)*0.05*(Math.min($eMOАе.$MAНIp*$eMOАе.$MAНIp,1)+1)*$Н01ТМ/$eMOАе.scale;



$MOH01=$Il[$AMTT1]+$MMeссА*Math.sqrt($00сpo)*0.05*(Math.min($eMOАе.$MAНIp*$eMOАе.$MAНIp,1)+1)*$ll1lА;
$MрIеО=$0OA[$AMTT1]+$еТcpОА*Math.sqrt($00сpo)*0.05*(Math.min($eMOАе.$MAНIp*$eMOАе.$MAНIp,1)+1)*$ll1lА;
if($0АO0o($Il[$AMTT1],$0OA[$AMTT1],$MOH01,$MрIеО))
{
$Il[$AMTT1]=$MOH01;
$0OA[$AMTT1]=$MрIеО;
}



$0Н0Тl($AMTT1);
}

if(!$pMМ1||!$eMOАе.$HМ0М1||$АoМHl)
{
if($e1рp0о===$НAlНc)
if(i2!==$e1рp0о)
if(!$eMOАе.$оeoТе)
{
if($0lpеo&&$00МeI)
{
$eMpсp.alpha+=Math.max($00сpo*50/$eMOАе.hmax,0.3);


if($eMOАе[$МIIро]<=0)
$eMpсp.alpha+=0.5;

$eMpсp.visible=true;
}
$орOeТ(v*$HMHОТl);
if($eMOАе[$МIIро]<=0&&!$eMOАе.$HМ0М1)
$сpНеH($eMOАе[$cАocе]===$0Ме1А[$НAlНc][$cАocе],$eMOАе);
}
}



if($AМlоН[$0ОoHс]==false)
{

$0Н0Тl($0ОoHс);
}
}


if($HA1cоT||$eMOАе.$оeoТе)
$оo1pO(i2);

if($cАpОр===$ММ.$ОeрoT)
if($pMМ1&&!$eMOАе.$HМ0М1&&$e1рp0о==$НAlНc)
{

$eMOАе.$pHсоH();

}


if($ОТ0ОО===41)
{
if($HA1cоT)
$еHТТе(i2,$0Ме1А[$e1рp0о],$00сpo,true,$IсрHсH);

$00сpo=0;
}

if($ОТ0ОО===48)

if($HA1cоT)
{


if((!$pMМ1||!$eMOАе.$HМ0М1||i2==$НAlНc)&&$ТcIpОО)
$eMOАе.effects.push({[$clе0р]:$1oMс,$МecHM:$00сpo*0.5,duration:110});
else
$eMOАе.effects.push({[$clе0р]:$1oMс,$МecHM:0,duration:110});



}


if(!$eMOАе.$оeoТе)
if($eMOАе[$МIIро]<=0)
{
if($e1рp0о!=$eMOАе[$cАocе])
for($рАНlI=0;$рАНlI<$eсАeA;$рАНlI++)
if($рАНlI!=i2)
{

if($0Ме1А[$рАНlI].io)
if($0Ме1А[$рАНlI][$МIIро]>0)
if($0Ме1А[$рАНlI][$cАocе]==$eMOАе[$cАocе])
if($0Ме1А[$рАНlI][$0MТce]==-1)
if($0Ме1А[$рАНlI][$eТоM]>$eMOАе[$eТоM]-500)
if($0Ме1А[$рАНlI][$eТоM]<$eMOАе[$eТоM]+500)
if($0Ме1А[$рАНlI][$рHОМ]>$eMOАе[$рHОМ]-300)
if($0Ме1А[$рАНlI][$рHОМ]<$eMOАе[$рHОМ]+300)
if($МАрМcl($0Ме1А[$рАНlI][$eТоM],$0Ме1А[$рАНlI][$рHОМ]-50,$eMOАе[$eТоM],$eMOАе[$рHОМ]-50))

{



if($0Ме1А[$рАНlI].$ooAOе>$pсHHТ)

$Hерoоe($0Ме1А[$рАНlI]);

if($0Ме1А[$рАНlI].$ooAOе>$eMOАе.$ooAOе+10)
{
$0Ме1А[$рАНlI].$ooAOе=$eMOАе.$ooAOе+10;

$0Ме1А[$рАНlI][$0MТce]=$eMOАе.$АTТМc;

$0Ме1А[$рАНlI][$lо0HH]=$рlО0Т0-$MMeссА*6-100+Math.random()*200;
$0Ме1А[$рАНlI][$еоOOА]=$орТTрe-$еТcpОА*6-50+Math.random()*100;

if($0Ме1А[$рАНlI].$MсАOl>$eMOАе.$MсАOl)
$0Ме1А[$рАНlI].$MсАOl=$eMOАе.$MсАOl;

}



}
}

if($eMOАе[$cАocе]!=$0Ме1А[$НAlНc][$cАocе])
if($e1рp0о==$НAlНc)
{

if($IсрHсH===$TрTМM)
{
if($eMOАе.$loАoM)
$роHlс(7);
}
else
if(str==$AН1ОН)
{
$роHlс(2);
}
}
}

if(!$0Ме1А[$e1рp0о].$оeoТе)
if(!$eMOАе.$оeoТе)
if(!$eMOАе.$HМ0М1||!$pMМ1)

if($ОТ0ОО!==41||$0Ме1А[$e1рp0о][$cАocе]!==$eMOАе[$cАocе])
{
$Hерoоe($eMOАе);

$eMOАе[$0MТce]=$e1рp0о;
$eMOАе.$ooAOе=0;
}

return $00сpo;
}
































































































function $рНе01(i)
{
let mc=ef[i];

$АAp0O(mc);

ef[i]=null;
}
function $АAp0O(mc)
{
if(mc.parent)
{
mc.visible=false;
mc.parent.removeChild(mc);
}
}
function $роIсАА($оIeHeТ)
{
$ееАIрO:
for(i=0;i<$MOcеМ;i++)
if(ef[i]!=null)
{
if(ef[i].visible)
{
let $eМ1е1с=1+~~(ef[i].$еlАlM*ef[i].$OеМIo);

ef[i].$еlАlM+=$ll1lА;



if(ef[i].currentFrame!==$eМ1е1с)
{
if($eМ1е1с>ef[i].totalFrames)
{
if(ef[i]._onEndReached)
ef[i]._onEndReached();
else
8;

$рНе01(i);
continue $ееАIрO;
}
else
ef[i].gotoAndStop($eМ1е1с);
}

if(ef[i].$eрlсe==0)
{

{



if(ef[i].$pOТоАp!=undefined)
if(ef[i].$pOТоАp!=null)
if(ef[i].contains(ef[i].$pOТоАp))
{

ef[i].$pOТоАp.gotoAndStop(Math.min(ef[i].$pOТоАp.totalFrames,ef[i].$pOТоАp.currentFrame+Math.ceil(ef[i].$HТIIT*$ll1lА)));

}
}
}

if(ef[i].$eрlсe==1||ef[i].$eрlсe==4)
{
ok=true;

for(i2 of $о001lO(ef[i][$eТоM],ef[i][$рHОМ]))
if(ef[i][$eТоM]>$сАоОo[i2])
if(ef[i][$eТоM]<$сАоОo[i2]+$с0МAр[i2])
if(ef[i][$рHОМ]>$o1О00[i2])
if(ef[i][$рHОМ]<$o1О00[i2]+$MМрTТ[i2])
{
ok=false;
break;
}

if(ok)
{
ef[i][$eТоM]+=ef[i][$АсТOе]*$ll1lА;
ef[i][$рHОМ]+=ef[i][$МcеAH]*$ll1lА;
ef[i][$МcеAH]+=gravity*$ll1lА;
if(ef[i].$eрlсe==1)
ef[i].rotation+=ef[i].$AIНcH*$ll1lА;
else
ef[i].rotation=-Math.atan2(ef[i][$АсТOе],ef[i][$МcеAH])/Math.PI*180;
}

ok=false;
for(i2=0;i2<$оTolТ&&!ok;i2++)
if(ef[i][$eТоM]>$ММoОo[i2])
if(ef[i][$eТоM]<$ММoОo[i2]+$р1lMр[i2])
if(ef[i][$рHОМ]>$11ТоО[i2])
if(ef[i][$рHОМ]<$11ТоО[i2]+$coТНp[i2])
if($Оcocр[i2])
ok=true;

if(ok)
{
if(ef[i].$eрlсe==1)
{


ef[i][$АсТOе]*=Math.pow(0.9,$ll1lА);
ef[i][$МcеAH]*=Math.pow(0.9,$ll1lА);
ef[i][$МcеAH]-=gravity*1.1*$ll1lА;

ef[i].$AIНcH=Math.pow(0.9,$ll1lА);
}
else
{
$рНе01(i);
continue $ееАIрO;
}
}
if(ef[i].$eрlсe==1)
{
















}
}
if(ef[i].$eрlсe==2)
{
ef[i][$eТоM]+=-1+Math.random()*2;
ef[i][$рHОМ]-=gravity*5;

ok=false;
for(i2=0;i2<$оTolТ&&!ok;i2++)
if(ef[i][$eТоM]>$ММoОo[i2])
if(ef[i][$eТоM]<$ММoОo[i2]+$р1lMр[i2])
if(ef[i][$рHОМ]>$11ТоО[i2])
if(ef[i][$рHОМ]<$11ТоО[i2]+$coТНp[i2])
if($Оcocр[i2])
{
ok=true;
break;
}

if(ok)

for(i2 of $о001lO(ef[i][$eТоM],ef[i][$рHОМ]))
if(ef[i][$eТоM]>$сАоОo[i2])
if(ef[i][$eТоM]<$сАоОo[i2]+$с0МAр[i2])
if(ef[i][$рHОМ]>$o1О00[i2])
if(ef[i][$рHОМ]<$o1О00[i2]+$MМрTТ[i2])
{
ok=false;
break;
}

if(!ok)
{
$рНе01(i);
continue $ееАIрO;
}
}
if(ef[i].$eрlсe==3)
{
ef[i][$eТоM]+=ef[i][$АсТOе]*$ll1lА;
ef[i][$рHОМ]+=ef[i][$МcеAH]*$ll1lА;

ef[i][$МcеAH]+=gravity*$ll1lА;
ok=true;
for(i2=0;i2<$оTolТ&&ok;i2++)
if(ef[i][$eТоM]>$ММoОo[i2])
if(ef[i][$eТоM]<$ММoОo[i2]+$р1lMр[i2])
if(ef[i][$рHОМ]>$11ТоО[i2])
if(ef[i][$рHОМ]<$11ТоО[i2]+$coТНp[i2])
if($Оcocр[i2])
{
$рНе01(i);
continue $ееАIрO;

ok=false;
}

ok=true;


for(i2 of $о001lO(ef[i][$eТоM],ef[i][$рHОМ]))
if(ef[i][$eТоM]>$сАоОo[i2])
if(ef[i][$eТоM]<$сАоОo[i2]+$с0МAр[i2])
if(ef[i][$рHОМ]>$o1О00[i2])
if(ef[i][$рHОМ]<$o1О00[i2]+$MМрTТ[i2])
{
ef[i][$АсТOе]=0;
ef[i][$МcеAH]=0;
ok=false;
break;
}
}

if(ef[i].$eрlсe==5)
{
ok=false;


for(i2 of $о001lO(ef[i][$eТоM],ef[i][$рHОМ]))
if(ef[i][$eТоM]>$сАоОo[i2])
if(ef[i][$eТоM]<$сАоОo[i2]+$с0МAр[i2])
if(ef[i][$рHОМ]>$o1О00[i2])
if(ef[i][$рHОМ]<$o1О00[i2]+$MМрTТ[i2])
{
ok=true;
break;
}

if(ok)
{
ef[i][$АсТOе]*=Math.pow(0.5,$ll1lА);
ef[i][$МcеAH]*=Math.pow(0.5,$ll1lА);

ef[i].alpha-=50*$ll1lА;
if(ef[i].alpha<0)
{
$рНе01(i);
continue $ееАIрO;
}
}
ef[i][$eТоM]+=ef[i][$АсТOе]*$ll1lА;
ef[i][$рHОМ]+=ef[i][$МcеAH]*$ll1lА;

ef[i][$МcеAH]+=gravity*$ll1lА;

















}
if(ef[i].$eрlсe==6)
{
if(Math.abs(ef[i][$eТоM]-$Il[$0Ме1А[ef[i].$TAесс].$pМHHo])<200)
if(Math.abs(ef[i][$рHОМ]-($0OA[$0Ме1А[ef[i].$TAесс].$pМHHo]-30))<200)
{
ef[i][$eТоM]=($Il[$0Ме1А[ef[i].$TAесс].$pМHHo]*$ll1lА+ef[i][$eТоM]*5)/(5+$ll1lА);
ef[i][$рHОМ]=(($0OA[$0Ме1А[ef[i].$TAесс].$pМHHo]-30)*$ll1lА+ef[i][$рHОМ]*5)/(5+$ll1lА);
}

if(ef[i].totalFrames<90)
if(ef[i].currentFrame>20+ef[i].$ocO0е.text.length*2)
{
ef[i].alpha-=$ll1lА*0.1;
if(ef[i].alpha<0)
{
$рНе01(i);
continue $ееАIрO;
}
}
}

ef[i].SetMCInterpolationData($оIeHeТ);
}

}
}

function $0Мpеol($оIeHeТ)
{
var i;

for(i=0;i<$eсАeA;i++)
if($0Ме1А[i].io)
{
if(i==$НAlНc)
$1М0оo=$I00le;
else
$1М0оo=$ll1lА;

if($0Ме1А[i][$cАocе]==$0Ме1А[$НAlНc][$cАocе]||$OАМАO||$0Ме1А[i].$HМ0М1)
if(!$0Ме1А[i].$loАoM)
if(!$0Ме1А[i].$оeoТе)
if($0Ме1А[i][$МIIро]>0)
{
if($0Ме1А[i].$llIее*$1М0оo<180*$сТMТM)
$0Ме1А[i].$llIее++;

if($0Ме1А[i].$llIее*$1М0оo>30*$сТMТM)
if($0Ме1А[i][$МIIро]<$0Ме1А[i].hmax)
{
if(!$IOTеН)
{
if($0Ме1А[i].$llIее*$1М0оo>60*$сТMТM)
{
$0Ме1А[i][$МIIро]=Math.min($0Ме1А[i][$МIIро]+1*$НllIo,$0Ме1А[i].hmax);
if($pMМ1&&$0Ме1А[i].$HМ0М1)
$НoТcН($0Ме1А[i],1*$НllIo);
}
}
else
{
if($0Ме1А[i].$llIее*$1М0оo<60*$сТMТM)
{
$0Ме1А[i][$МIIро]=Math.min($0Ме1А[i][$МIIро]+1*$НllIo,$0Ме1А[i].hmax);
if($pMМ1&&$0Ме1А[i].$HМ0М1)
$НoТcН($0Ме1А[i],1*$НllIo);
}
else
if($0Ме1А[i].$llIее*$1М0оo<90*$сТMТM)
{
$0Ме1А[i][$МIIро]=Math.min($0Ме1А[i][$МIIро]+2*$НllIo,$0Ме1А[i].hmax);
if($pMМ1&&$0Ме1А[i].$HМ0М1)
$НoТcН($0Ме1А[i],2*$НllIo);
}
else
{
$0Ме1А[i][$МIIро]=Math.min($0Ме1А[i][$МIIро]+4*$НllIo,$0Ме1А[i].hmax);
if($pMМ1&&$0Ме1А[i].$HМ0М1)
$НoТcН($0Ме1А[i],4*$НllIo);
}
}
}
}


if(($0Ме1А[i].$еТеAO&&
(($Il[$0Ме1А[i].$рсOОА]>$Hерсl&&
$Il[$0Ме1А[i].$рсOОА]<$oocОo&&
$0OA[$0Ме1А[i].$рсOОА]>$1соoр&&
$0OA[$0Ме1А[i].$рсOОА]<$01Oрp)||

($Il[$0Ме1А[i].$MОеМ1]>$Hерсl&&
$Il[$0Ме1А[i].$MОеМ1]<$oocОo&&
$0OA[$0Ме1А[i].$MОеМ1]>$1соoр&&
$0OA[$0Ме1А[i].$MОеМ1]<$01Oрp)))||

(!$0Ме1А[i].$еТеAO&&
$Il[$0Ме1А[i].$рсOОА]>$Hерсl&&
$Il[$0Ме1А[i].$рсOОА]<$oocОo&&
$0OA[$0Ме1А[i].$рсOОА]>$1соoр&&
$0OA[$0Ме1А[i].$рсOОА]<$01Oрp)||

(
$0Ме1А[i][$eТоM]>$Hерсl&&
$0Ме1А[i][$eТоM]<$oocОo&&
$0Ме1А[i][$рHОМ]>$1соoр&&
$0Ме1А[i][$рHОМ]<$01Oрp)||$0Ме1А[i].$HМ0М1||$0Ме1А[i][$0MТce]!=-1||(!$0Ме1А[i].$HМ0М1&&$0Ме1А[i][$leAсO]==1)||

($0Ме1А[i].$HНрНТ!=-1&&$оОHMT[$0Ме1А[i].$HНрНТ+$0рМOН]))

{


$оОHMT[i]=true;
mc=$0Ме1А[i];

if(!mc.$HМ0М1||(i===$НAlНc&&!$00pеH)||!$pMМ1)
{
mc.$0IHMT=mc[$МIIро];
}


if(mc.$АеlОА)
$AOеоО(mc);

if($pMМ1)
{
$ОHe1AO(mc.$рсOОА,-7);
$ОHe1AO(mc.$MОеМ1,-7);
$ОHe1AO(mc.$НТсМТ,-7);
$ОHe1AO(mc.$р1eНM,-7);
$ОHe1AO(mc.$оОlТМ,-7);
$ОHe1AO(mc.$1O1lM,-7);
$ОHe1AO(mc.$pМHHo,-7);
$ОHe1AO(mc.$e1IOМ,-7);

if(isNaN(mc[$МIIро]))
mc[$МIIро]=0;
if(isNaN(mc.$0IHMT))
mc.$0IHMT=mc[$МIIро];
}




if($cАpОр!==$ММ.$оорoсH||!mc.$оeoТе)

{
if(mc.$HМ0М1)

if(mc.$MТН0с)

{

if(!mc.$еТеAO)
{
var $Н0T1МA=$0Ме1А[i].$сНеАIМ-$0Ме1А[i].$сМelе1;
var $cоlНеp=$0Ме1А[i].$АА0НMМ-$0Ме1А[i].$coоHр;
var $сIрНОН=$Н0T1МA*$Н0T1МA+$cоlНеp*$cоlНеp;
if($сIрНОН>1)
{
$сIрНОН=Math.sqrt($сIрНОН);

var cx=($Il[$0Ме1А[i].$рсOОА]+$Il[$0Ме1А[i].$MОеМ1])/2;
var cy=($0OA[$0Ме1А[i].$рсOОА]+$0OA[$0Ме1А[i].$MОеМ1])/2;

var $МОOОOT=Math.atan2($Il[$0Ме1А[i].$рсOОА]-$Il[$0Ме1А[i].$MОеМ1],$0OA[$0Ме1А[i].$рсOОА]-$0OA[$0Ме1А[i].$MОеМ1])-Math.atan2($Н0T1МA,$cоlНеp);

while($МОOОOT>Math.PI)
$МОOОOT-=Math.PI*2;
while($МОOОOT<-Math.PI)
$МОOОOT+=Math.PI*2;





if(Math.abs($МОOОOT)>Math.PI*0.25)
{
$МОOОOT*=0.1*$ll1lА;

function rotate(a)
{

var cos=Math.cos(-$МОOОOT);
var sin=Math.sin(-$МОOОOT);
var $MOIрOM=(cos*($Il[a]-cx))+(sin*($0OA[a]-cy))+cx;
var $1ApоpО=(cos*($0OA[a]-cy))-(sin*($Il[a]-cx))+cy;

$OTpc1[a]+=($MOIрOM-$Il[a])*0.5;
$IрТ0H[a]+=($1ApоpО-$0OA[a])*0.5;

$Il[a]=$MOIрOM;
$0OA[a]=$1ApоpО;
}
rotate($0Ме1А[i].$MОеМ1);
rotate($0Ме1А[i].$НТсМТ);
rotate($0Ме1А[i].$р1eНM);
rotate($0Ме1А[i].$рсOОА);
rotate($0Ме1А[i].$pМHHo);
rotate($0Ме1А[i].$e1IOМ);
rotate($0Ме1А[i].$оОlТМ);
rotate($0Ме1А[i].$1O1lM);


cx=$Il[$0Ме1А[i].$рсOОА];
cy=$0OA[$0Ме1А[i].$рсOОА];
$МОOОOT*=-1;
rotate($0Ме1А[i].$оОlТМ);
rotate($0Ме1А[i].$1O1lM);

}
}
}


u=($0Ме1А[i].$сМelе1-$Il[$0Ме1А[i].$MОеМ1]);
v=($0Ме1А[i].$coоHр-$0OA[$0Ме1А[i].$MОеМ1]);

$eОeМо=($0Ме1А[i].$сНеАIМ-$Il[$0Ме1А[i].$рсOОА]);
v2=($0Ме1А[i].$АА0НMМ-$0OA[$0Ме1А[i].$рсOОА]);


















if(false)
{
if(!mc.$еТеAO)
{
u+=($0Ме1А[i].$OleMН+$0Ме1А[i].$еloеTc)/2*Math.min(250,0+mc.$ТpАрcс)/1000*30;
v+=($0Ме1А[i].$сНoIА+$0Ме1А[i].$оcOАlT)/2*Math.min(250,0+mc.$ТpАрcс)/1000*30;
$eОeМо+=($0Ме1А[i].$OleMН+$0Ме1А[i].$еloеTc)/2*Math.min(250,0+mc.$ТpАрcс)/1000*30;
v2+=($0Ме1А[i].$сНoIА+$0Ме1А[i].$оcOАlT)/2*Math.min(250,0+mc.$ТpАрcс)/1000*30;
}
else
{
u+=$0Ме1А[i].$OleMН*Math.min(250,0+mc.$ТpАрcс)/1000*30;
v+=$0Ме1А[i].$сНoIА*Math.min(250,0+mc.$ТpАрcс)/1000*30;
$eОeМо+=$0Ме1А[i].$еloеTc*Math.min(250,0+mc.$ТpАрcс)/1000*30;
v2+=$0Ме1А[i].$оcOАlT*Math.min(250,0+mc.$ТpАрcс)/1000*30;
}
}













$0Ме1А[i].$ТpАрcс+=$ll1lА/30*1000;


if($0Ме1А[i].$ТpАрcс>$0Ме1А[i].ping)
{
mc.$MТН0с=false;
}


$HОpcl=$Н1еHl(u,v);
$MOH01=$Н1еHl($eОeМо,v2);

if(isNaN(u)||isNaN(v)||u==undefined||v==undefined)
{
trace($ТoсOH,u,v,$lМMOM+i+$1ОрMc);
}

var $ТрMMeН=$HОpcl<30||$0АO0o($0Ме1А[i].$сМelе1,$0Ме1А[i].$coоHр,$Il[$0Ме1А[i].$MОеМ1],$0OA[$0Ме1А[i].$MОеМ1]);
var $НсТ0oT=$MOH01<30||$0АO0o($0Ме1А[i].$сНеАIМ,$0Ме1А[i].$АА0НMМ,$Il[$0Ме1А[i].$рсOОА],$0OA[$0Ме1А[i].$рсOОА]);

if((!mc.$еТеAO&&$HОpcl<400&&$ТрMMeН)||
(mc.$еТеAO&&$HОpcl<100&&$MOH01<100&&$ТрMMeН&&$НсТ0oT))
{





var $с01Тo1=0.75/2;



var $0рlрOо=10;

if(mc.$еТеAO)
{
$с01Тo1*=0.5/2;
$0рlрOо=20;
}

if($HОpcl>$0рlрOо)
{












$сMccТс($0Ме1А[i].$MОеМ1,u,v,$0Ме1А[i].$OleMН,$0Ме1А[i].$сНoIА,$ll1lА*0.2*$с01Тo1);
$сMccТс($0Ме1А[i].$НТсМТ,u,v,$0Ме1А[i].$OleMН,$0Ме1А[i].$сНoIА,$ll1lА*0.1*$с01Тo1);
$сMccТс($0Ме1А[i].$р1eНM,u,v,$0Ме1А[i].$OleMН,$0Ме1А[i].$сНoIА,$ll1lА*0.1*$с01Тo1);

$0Н0Тl($0Ме1А[i].$MОеМ1,true);
$0Н0Тl($0Ме1А[i].$НТсМТ,true);
$0Н0Тl($0Ме1А[i].$р1eНM,true);
}
else
{
$OTpc1[$0Ме1А[i].$MОеМ1]*=0.8;
$IрТ0H[$0Ме1А[i].$MОеМ1]*=0.8;
$OTpc1[$0Ме1А[i].$НТсМТ]*=0.8;
$IрТ0H[$0Ме1А[i].$НТсМТ]*=0.8;
$OTpc1[$0Ме1А[i].$р1eНM]*=0.8;
$IрТ0H[$0Ме1А[i].$р1eНM]*=0.8;
}
if($Н1еHl($eОeМо,v2)>$0рlрOо)
{
$сMccТс($0Ме1А[i].$рсOОА,$eОeМо,v2,$0Ме1А[i].$еloеTc,$0Ме1А[i].$оcOАlT,$ll1lА*0.2*$с01Тo1);
$сMccТс($0Ме1А[i].$pМHHo,$eОeМо,v2,$0Ме1А[i].$еloеTc,$0Ме1А[i].$оcOАlT,$ll1lА*0.1*$с01Тo1);
$сMccТс($0Ме1А[i].$e1IOМ,$eОeМо,v2,$0Ме1А[i].$еloеTc,$0Ме1А[i].$оcOАlT,$ll1lА*0.1*$с01Тo1);
$сMccТс($0Ме1А[i].$оОlТМ,$eОeМо,v2,$0Ме1А[i].$еloеTc,$0Ме1А[i].$оcOАlT,$ll1lА*0.1*$с01Тo1);
$сMccТс($0Ме1А[i].$1O1lM,$eОeМо,v2,$0Ме1А[i].$еloеTc,$0Ме1А[i].$оcOАlT,$ll1lА*0.1*$с01Тo1);

$0Н0Тl($0Ме1А[i].$рсOОА,true);
$0Н0Тl($0Ме1А[i].$pМHHo,true);
$0Н0Тl($0Ме1А[i].$e1IOМ,true);
$0Н0Тl($0Ме1А[i].$оОlТМ,true);
$0Н0Тl($0Ме1А[i].$1O1lM,true);
}
else
{
$OTpc1[$0Ме1А[i].$рсOОА]*=0.8;
$IрТ0H[$0Ме1А[i].$рсOОА]*=0.8;

$OTpc1[$0Ме1А[i].$pМHHo]*=0.8;
$IрТ0H[$0Ме1А[i].$pМHHo]*=0.8;

$OTpc1[$0Ме1А[i].$e1IOМ]*=0.8;
$IрТ0H[$0Ме1А[i].$e1IOМ]*=0.8;

$OTpc1[$0Ме1А[i].$оОlТМ]*=0.8;
$IрТ0H[$0Ме1А[i].$оОlТМ]*=0.8;

$OTpc1[$0Ме1А[i].$1O1lM]*=0.8;
$IрТ0H[$0Ме1А[i].$1O1lM]*=0.8;
}

}
else
{
$0Н0Тl($0Ме1А[i].$MОеМ1,true);
$0Н0Тl($0Ме1А[i].$НТсМТ,true);
$0Н0Тl($0Ме1А[i].$р1eНM,true);
$0Н0Тl($0Ме1А[i].$рсOОА,true);
$0Н0Тl($0Ме1А[i].$pМHHo,true);
$0Н0Тl($0Ме1А[i].$e1IOМ,true);
$0Н0Тl($0Ме1А[i].$оОlТМ,true);
$0Н0Тl($0Ме1А[i].$1O1lM,true);

$Il[$0Ме1А[i].$MОеМ1]+=u;
$0OA[$0Ме1А[i].$MОеМ1]+=v;

$Il[$0Ме1А[i].$НТсМТ]+=u;
$0OA[$0Ме1А[i].$НТсМТ]+=v;

$Il[$0Ме1А[i].$р1eНM]+=u;
$0OA[$0Ме1А[i].$р1eНM]+=v;

$Il[$0Ме1А[i].$рсOОА]+=$eОeМо;
$0OA[$0Ме1А[i].$рсOОА]+=v2;

$Il[$0Ме1А[i].$pМHHo]+=$eОeМо;
$0OA[$0Ме1А[i].$pМHHo]+=v2;

$Il[$0Ме1А[i].$e1IOМ]+=$eОeМо;
$0OA[$0Ме1А[i].$e1IOМ]+=v2;

$Il[$0Ме1А[i].$оОlТМ]+=$eОeМо;
$0OA[$0Ме1А[i].$оОlТМ]+=v2;

$Il[$0Ме1А[i].$1O1lM]+=$eОeМо;
$0OA[$0Ме1А[i].$1O1lM]+=v2;

if(mc.$Mo1OА!==mc.$рсOОА)
{
$Il[$0Ме1А[i].$Mo1OА]+=$eОeМо;
$0OA[$0Ме1А[i].$Mo1OА]+=v2;
}
if(mc.$AМеTo!==mc.$MОеМ1)
{
$Il[$0Ме1А[i].$AМеTo]+=u;
$0OA[$0Ме1А[i].$AМеTo]+=v;
}



if($IТoHT())
{
$IcМMc[$0Ме1А[i].$MОеМ1]+=u;
$MA0е1[$0Ме1А[i].$MОеМ1]+=v;

$IcМMc[$0Ме1А[i].$НТсМТ]+=u;
$MA0е1[$0Ме1А[i].$НТсМТ]+=v;

$IcМMc[$0Ме1А[i].$р1eНM]+=u;
$MA0е1[$0Ме1А[i].$р1eНM]+=v;

$IcМMc[$0Ме1А[i].$рсOОА]+=$eОeМо;
$MA0е1[$0Ме1А[i].$рсOОА]+=v2;

$IcМMc[$0Ме1А[i].$pМHHo]+=$eОeМо;
$MA0е1[$0Ме1А[i].$pМHHo]+=v2;

$IcМMc[$0Ме1А[i].$e1IOМ]+=$eОeМо;
$MA0е1[$0Ме1А[i].$e1IOМ]+=v2;

$IcМMc[$0Ме1А[i].$оОlТМ]+=$eОeМо;
$MA0е1[$0Ме1А[i].$оОlТМ]+=v2;

$IcМMc[$0Ме1А[i].$1O1lM]+=$eОeМо;
$MA0е1[$0Ме1А[i].$1O1lM]+=v2;

if(mc.$Mo1OА!==mc.$рсOОА)
{
$IcМMc[$0Ме1А[i].$Mo1OА]+=$eОeМо;
$MA0е1[$0Ме1А[i].$Mo1OА]+=v2;
}
if(mc.$AМеTo!==mc.$MОеМ1)
{
$IcМMc[$0Ме1А[i].$AМеTo]+=u;
$MA0е1[$0Ме1А[i].$AМеTo]+=v;
}

}
}
}
}

if($pMМ1)
{
$ОHe1AO(mc.$рсOОА,-6);
$ОHe1AO(mc.$MОеМ1,-6);
$ОHe1AO(mc.$НТсМТ,-6);
$ОHe1AO(mc.$р1eНM,-6);
$ОHe1AO(mc.$оОlТМ,-6);
$ОHe1AO(mc.$1O1lM,-6);
$ОHe1AO(mc.$pМHHo,-6);
$ОHe1AO(mc.$e1IOМ,-6);
}

if(mc[$МIIро]>0)
{

for(i2=0;i2<$pТОHH;i2++)
if($HсTНe[i2].$сMlе0!=0)
if(mc[$eТоM]>$HсTНe[i2][$eТоM])
if(mc[$eТоM]<$HсTНe[i2][$eТоM]+$HсTНe[i2].w)
if(mc[$рHОМ]-41>$HсTНe[i2][$рHОМ])
if(mc[$рHОМ]-41<$HсTНe[i2][$рHОМ]+$HсTНe[i2].h)
{
if(
($HсTНe[i2].$сMlе0==1&&(i==$НAlНc&&!$00pеH&&$AОHMT&&mc.$HНрНТ==-1))||
($HсTНe[i2].$сMlе0==2&&mc.$HНрНТ==-1)||
($HсTНe[i2].$сMlе0==3&&mc.$HНрНТ!=-1)||
($HсTНe[i2].$сMlе0==4)||
(($HсTНe[i2].$сMlе0==6||$HсTНe[i2].$сMlе0==7)&&mc.$HМ0М1&&(!$pMМ1||(i==$НAlНc&&!$00pеH))&&mc[$МIIро]>0)||


($HсTНe[i2].$сMlе0==9&&(i==$НAlНc&&!$00pеH&&$AОHMT&&(mc[$cАocе]==12)&&mc.$HНрНТ==-1))||

($HсTНe[i2].$сMlе0==10&&(i==$НAlНc&&!$00pеH&&$AОHMT&&(mc[$cАocе]==13)&&mc.$HНрНТ==-1))||



($HсTНe[i2].$сMlе0==13&&(i==$НAlНc&&!$00pеH&&(mc[$cАocе]==12)&&mc.$HНрНТ==-1&&mc[$МIIро]>0))||

($HсTНe[i2].$сMlе0==14&&(i==$НAlНc&&!$00pеH&&(mc[$cАocе]==13)&&mc.$HНрНТ==-1&&mc[$МIIро]>0))||


($HсTНe[i2].$сMlе0==17&&(!mc.$HМ0М1&&mc[$МIIро]>0))||
($HсTНe[i2].$сMlе0==18&&(!mc.$HМ0М1&&mc[$cАocе]!==$0Ме1А[$НAlНc][$cАocе]&&mc[$МIIро]>0))
)
{
if($HсTНe[i2].$сMlе0==7)
{
$c1Н1А=true;
$AMTT1=0;
for($0ОoHс=0;$0ОoHс<$eсАeA;$0ОoHс++)
{
if($0Ме1А[$0ОoHс][$cАocе]==mc[$cАocе])
if($0Ме1А[$0ОoHс].char==1||$0Ме1А[$0ОoHс].char==3||$0Ме1А[$0ОoHс].char==13)
{
if($0Ме1А[$0ОoHс][$eТоM]>$HсTНe[i2][$eТоM]&&
$0Ме1А[$0ОoHс][$eТоM]<$HсTНe[i2][$eТоM]+$HсTНe[i2].w&&
$0Ме1А[$0ОoHс][$рHОМ]-41>$HсTНe[i2][$рHОМ]&&
$0Ме1А[$0ОoHс][$рHОМ]-41<$HсTНe[i2][$рHОМ]+$HсTНe[i2].h&&!$0Ме1А[$0ОoHс].$loАoM)
$AMTT1++;
else
$c1Н1А=false;
}
}
}
if($HсTНe[i2].$сMlе0==6||$HсTНe[i2].$сMlе0<6||$c1Н1А||$HсTНe[i2].$сMlе0==9||$HсTНe[i2].$сMlе0==10||$HсTНe[i2].$сMlе0==13||$HсTНe[i2].$сMlе0==14||$HсTНe[i2].$сMlе0==17||$HсTНe[i2].$сMlе0==18)
if($HсTНe[i2].$pMcpo!=-1)
{
if($HсTНe[i2].$сMlе0==1||$HсTНe[i2].$сMlе0==9||$HсTНe[i2].$сMlе0==10)
{
if($HсTНe[i2].$Tрecoе)
{
if($eННА[$HсTНe[i2].$pMcpo].$oOlОO&&($eННА[$HсTНe[i2].$pMcpo].$cААТ1>0||$eННА[$HсTНe[i2].$pMcpo].$cААТ1==-1))
{
$оp0Нc($НMрНTе,$HсTНe[i2][$eТоM]+$HсTНe[i2].w/2,$HсTНe[i2][$рHОМ]+$HсTНe[i2].h/2);
}
else
$оp0Нc($орIo0,$HсTНe[i2][$eТоM]+$HсTНe[i2].w/2,$HсTНe[i2][$рHОМ]+$HсTНe[i2].h/2);
}

$AОHMT=false;
}

if($pMМ1&&i==$НAlНc&&!$00pеH&&$eННА[$HсTНe[i2].$pMcpo].$oOlОO&&($eННА[$HсTНe[i2].$pMcpo].$cААТ1>0||$eННА[$HсTНe[i2].$pMcpo].$cААТ1==-1))
$ММ.$epоoАp(

$ММ[$OlopT],

$ММ.$Oоolр($HсTНe[i2].$pMcpo),

$ММ.$Oоolр(i2),

$0OрТ,
);



{
$Oр0ol=i;

if($HсTНe[i2].$АMToHH)
{
if($o0IсО[$HсTНe[i2].$pMcpo])
{
$o0IсО[$HсTНe[i2].$pMcpo].$oOlОO=true;
}
else
{
$е10Oс(e,$A0AТТ+$HсTНe[i2][$ерlАО]+$НHоpM);
}
}
else
{

$pАTIТ($HсTНe[i2].$pMcpo);
}
}

if($HсTНe[i2].$сMlе0==1||$HсTНe[i2].$сMlе0==9||$HсTНe[i2].$сMlе0==10)
if($HсTНe[i2].mc!==undefined)
{
if($eННА[$HсTНe[i2].$pMcpo].$oOlОO&&
($eННА[$HсTНe[i2].$pMcpo].$cААТ1>0||$eННА[$HсTНe[i2].$pMcpo].$cААТ1==-1))
{

$OcОAp($HсTНe[i2],2);
}
else
{

$OcОAp($HсTНe[i2],3);
}
}
}
}
}





if(i==$НAlНc&&!$OM0TM)
{
if(!$00pеH)
{
if($cАpОр!==$ММ.$ОоcОMH)
{
if($eTeАO)
mc.$AМIМ1=-1;
else
if($рНcpо)
mc.$AМIМ1=1;
else
mc.$AМIМ1=0;

if($Т0Tlс)
mc.$TНесe=-1;
else
{
if($0eеAT)
mc.$TНесe=1;
else
mc.$TНесe=0;
}
}
else
{
mc.$AМIМ1=0;
mc.$TНесe=0;
}





mc[$lо0HH]=($еT0рTр-game[$eТоM])/$оМMОО;
mc[$еоOOА]=($оTО10T-game[$рHОМ])/$оМMОО;



if($IlMНM&&$cАpОр===$ММ.$ОeрoT)
{
if(mc.$рoeсl==false)
{
if(!$АoМHl)
MP_custom_events+=$AAНlM+$НAlНc+$IHTe+mc[$lо0HH]+$IHTe+mc[$еоOOА];


}
mc.$рoeсl=true;


}
else
{
mc.$рoeсl=false;
}

if(mc.$рoeсl||$pMМ1||Math.random()>0.97)
for(i2=0;i2<$eсАeA;i2++)
if($0Ме1А[i2].io)
if($0Ме1А[i2][$cАocе]!=mc[$cАocе])
if(!$0Ме1А[i2].$оeoТе)
if($оОHMT[i2])
if($НOНОН(mc[$lо0HH],mc[$еоOOА],$0Ме1А[i2][$eТоM],$0Ме1А[i2][$рHОМ])<150)
{
if(mc[$0MТce]!=i2)
{
mc[$0MТce]=-1;
$Hерoоe(mc);
mc[$0MТce]=i2;
}
i2=$eсАeA;
}



if(mc[$0MТce]!=-1)
{
if(mc[$0MТce]>=0&&mc[$0MТce]<$eсАeA)
{
if($0Ме1А[mc[$0MТce]].io)
{
if($0Ме1А[mc[$0MТce]].$оeoТе)
{

$оAAАМТ(mc);

mc[$0MТce]=-1;
}
else
if($НOНОН(mc[$lо0HH],mc[$еоOOА],$0Ме1А[mc[$0MТce]][$eТоM],$0Ме1А[mc[$0MТce]][$рHОМ])>250)
{
mc[$0MТce]=-1;
}
}
}
else
{
trace(mc[$0MТce]+$lсеТТ)
}
}
}
}
else
if(mc[$leAсO]!==4)
if($cАpОр!==$ММ.$ОоcОMH)
if(!mc.$HМ0М1||($НAlНc==i&&$OM0TM))
{



if($cерAc)trace($рс1MO);

var $АеpOМТ=mc.$рoeсl;

mc.$рoeсl=false;
$0сТсp=false;
$ОMНlI=false;
mc.$AМIМ1=0;
mc.$TНесe=0;


if(mc[$cАocе]==$0Ме1А[$НAlНc][$cАocе]||!$НOIHo)
{
for(i2=0;i2<=$есНI0;i2++)

if($IТТII[i2]!=null)
if($IТТII[i2].visible==true)
if($0Ме1А[$IТТII[i2].$OOHAТ][$cАocе]!==mc[$cАocе])
if($IТТII[i2].currentFrame==14)
if($НOНОН(mc[$eТоM],mc[$рHОМ],$IТТII[i2][$eТоM],$IТТII[i2][$рHОМ])<100)
{
$0сТсp=true;
mc[$lо0HH]=(mc[$lо0HH]+$IТТII[i2][$eТоM])/2;
mc[$еоOOА]=(mc[$еоOOА]+$IТТII[i2][$рHОМ])/2;
}


if((($о0Мp0||$pMМ1)&&$оОTоo)||(mc[$cАocе]!=$0Ме1А[$НAlНc][$cАocе]))

if(mc[$0MТce]==-1||($pMМ1&&mc.$loАoM)||($OАМАO&&(mc[$0MТce]!=-1&&true)))
for(i2=mc.$loАoM ? i : 0;i2<$eсАeA&&!$ОMНlI;i2++)
if($0Ме1А[i2].io)
if($0Ме1А[i2][$cАocе]===mc[$cАocе])
if($0Ме1А[i2].$оeoТе||$0Ме1А[i2].$loАoM)
if((!$0Ме1А[i2].$lTITl&&!$0Ме1А[i2].$ААpес&&!$0Ме1А[i2].$AIpAe&&!$0Ме1А[i2].$еТеAO)||(i2==i&&($0Ме1А[i][$0MТce]==-1||$0Ме1А[i][$МIIро]<=15)))
if($НOНОН($Il[$0Ме1А[i2].$рсOОА],$0OA[$0Ме1А[i2].$рсOОА],mc[$eТоM],mc[$рHОМ])<400)
{

ok=true;
if(mc[$МАТОе]==-1||$ОpMрс[mc[$МАТОе]].$1l1TO!=7)
for($0ОoHс=0;$0ОoHс<$cс0Hс&&ok;$0ОoHс++)
if($ОpMрс[$0ОoHс].io)
if(!$ОpMрс[$0ОoHс].$соТAТ)
if($ОpMрс[$0ОoHс].$1l1TO==7)
if($ОpMрс[$0ОoHс].picken_by==i)
{
ok=false;

if(!($pMМ1&&i===$НAlНc)||Math.random()<0.2)
{
mc[$МАТОе]=$0ОoHс;
$o0MIс(i);
}

}


if(mc[$МАТОе]!=-1)
if($ОpMрс[mc[$МАТОе]].$1l1TO==7)
{


if(mc[$eТоM]<$Il[$0Ме1А[i2].$рсOОА])
mc.$AМIМ1=1;
else
mc.$AМIМ1=-1;

mc.$TНесe=1;

if(i2==i)
{
mc[$lо0HH]=(mc[$lо0HH]+$Il[$0Ме1А[i2].$НТсМТ])/2;
mc[$еоOOА]=(mc[$еоOOА]+$0OA[$0Ме1А[i2].$НТсМТ]+20)/2;
}
else
{
mc[$lо0HH]=(mc[$lо0HH]+$Il[$0Ме1А[i2].$рсOОА])/2;
mc[$еоOOА]=(mc[$еоOOА]+$0OA[$0Ме1А[i2].$рсOОА])/2;
}

if($НOНОН($Il[$0Ме1А[i2].$рсOОА],$0OA[$0Ме1А[i2].$рсOОА],mc[$eТоM],mc[$рHОМ])<100||i2==i)
{
mc.$рoeсl=true;
}

$0Ме1А[i2].$ОрОAA=0;
$0Ме1А[i2].alpha=1;

$ОMНlI=true;

}
}
}

if($0сТсp||$ОMНlI)
{
if($0сТсp)
{
if(mc[$МАТОе]!=-1)
{
mc[$МАТОе]=-1;
$o0MIс(i);
}
else
{
if(mc[$cАocе]!=$0Ме1А[$НAlНc][$cАocе]||Math.random()>0.95||$OАМАO)
{
if($ОMНlI&&mc.$рoeсl)
mc.$AМIМ1=-mc.$ееоАН;
else
mc.$рoeсl=true;
}
}
}
ok=false;
}
else

{
if((mc.$HМ0М1&&Math.random()>0.5)||(!mc.$HМ0М1&&Math.random()>0.92))
{
mc[$oрOoА]=Math.random();
mc[$АТHММ]=Math.random();
mc[$lHсHO]=Math.random();




if(!(i===$НAlНc&&$pMМ1)||Math.random()<0.1)
if(!mc.$loАoM)
{
if(mc[$МАТОе]!=-1&&$НOНОН(mc[$eТоM],mc[$рHОМ],mc[$lо0HH],mc[$еоOOА])<100&&mc[$0MТce]!=-1)
{
mc[$МАТОе]=-1;
$o0MIс(i);
}
else
{
if(Math.random()>0.8||(mc[$МАТОе]==-1&&$НOНОН(mc[$eТоM],mc[$рHОМ],mc[$lо0HH],mc[$еоOOА])>100))
for(i2=0;i2<$cс0Hс;i2++)
if($ОpMрс[i2].io)
if($ОpMрс[i2].picken_by==i)
if(!$ОpMрс[i2].$соТAТ)
if(i2!=mc[$МАТОе])
if($ОpMрс[i2].$cppее>0)
{
if(mc[$МАТОе]===-1||$еTорl($ОpMрс[mc[$МАТОе]])<$еTорl($ОpMрс[i2]))

{
mc[$МАТОе]=i2;
$o0MIс(i);
i2=$cс0Hс;
}
}
}
}

}





ok=true;
if(mc[$0MТce]!=-1)
if($0Ме1А[mc[$0MТce]].io)
{
$eMOАе=$0Ме1А[mc[$0MТce]];
mc.$AМIМ1=0;
mc.$TНесe=0;

mc.$ooAOе+=1;

$HОpcl=$НOНОН($Il[mc.$оОlТМ],$0OA[mc.$оОlТМ],$Il[$eMOАе.$рсOОА],$0OA[$eMOАе.$рсOОА]);


if(mc[$МАТОе]!=-1)
$0ОoHс=$ОpMрс[mc[$МАТОе]].$1l1TO;
else
$0ОoHс=-1;

if($eMOАе[$МIIро]>0&&$eMOАе.$eoОpА>0)
{


if($0ОoHс!=2)
{
rx=$eMOАе[$eТоM]-30+mc[$oрOoА]*60;
ry=$eMOАе[$рHОМ]+10-mc[$АТHММ]*102;
}
else
{
rx=$eMOАе[$eТоM]-20+mc[$oрOoА]*40;
ry=$eMOАе[$рHОМ]-mc[$АТHММ]*82;
}

if(!$НOIHo||i==$НAlНc)
if($HОpcl<270)
if(mc[$lHсHO]>0.9)
{
ry=$eMOАе[$рHОМ]-82;
}

}
else
{
rx=$Il[$eMOАе.$рсOОА]-25+mc[$oрOoА]*50;
ry=$0OA[$eMOАе.$рсOОА]-25+mc[$АТHММ]*50;
}



if($eMOАе.$HНрНТ==-1)
{
if($0ОoHс==0)
{


rx+=$OTpc1[$eMOАе.$MОеМ1]*$HОpcl/$cHo1с;
ry+=$IрТ0H[$eMOАе.$MОеМ1]*$HОpcl/$cHo1с;



if(!$МАрМcl(mc[$lо0HH],mc[$еоOOА],$Il[mc.$оОlТМ],$0OA[mc.$оОlТМ]))
{
rx+=($Il[mc.$оОlТМ]-$Il[$eMOАе.$рсOОА])/$HОpcl*100;
ry+=($0OA[mc.$оОlТМ]-$0OA[$eMOАе.$рсOОА])/$HОpcl*100;
}
}
if($0ОoHс==1)
{


rx+=$OTpc1[$eMOАе.$MОеМ1]*$HОpcl/$cHo1с;
ry+=$IрТ0H[$eMOАе.$MОеМ1]*$HОpcl/$cHo1с;
}
if($0ОoHс==2)
{


}
if($0ОoHс==4||$0ОoHс==6)
{


rx+=$OTpc1[$eMOАе.$MОеМ1]*$HОpcl/$cHo1с;
ry+=$IрТ0H[$eMOАе.$MОеМ1]*$HОpcl/$cHo1с+($0OA[mc.$оОlТМ]-$0OA[$eMOАе.$рсOОА])*0.5-$сTpНО($Il[mc.$оОlТМ]-$Il[$eMOАе.$рсOОА])*0.5;
}
}





if($OАМАO&&(!LOW_HPS||$еHоНH||$pMМ1))
$c1Н1А=true;
else
$c1Н1А=(((mc.$ееоАН==1&&mc[$eТоM]<rx+100)||(mc.$ееоАН==-1&&mc[$eТоM]>rx-100))&&($0Ме1А[mc[$0MТce]].alpha>0.1||$0Ме1А[mc[$0MТce]].$HНрНТ!=-1)&&$МАрМcl(rx,ry,$Il[mc.$оОlТМ],$0OA[mc.$оОlТМ])||$HОpcl<100||i==$НAlНc);

if(mc.$MсАOl>0||$c1Н1А)
{

mc.$MсАOl-=1*$1М0оo;

if($c1Н1А)
mc.$MсАOl=45/$1М0оo;

if(i===$НAlНc&&$pMМ1)
{



mc[$lо0HH]=$TTМсcН(mc[$lо0HH],rx,13/14,$I00le);
mc[$еоOOА]=$TTМсcН(mc[$еоOOА],ry,13/14,$I00le);
}
else
if($НOIHo&&i!=$НAlНc)
{



mc[$lо0HH]=$TTМсcН(mc[$lо0HH],rx,13/14,$I00le);
mc[$еоOOА]=$TTМсcН(mc[$еоOOА],ry,13/14,$I00le);
}
else
{



mc[$lо0HH]=$TTМсcН(mc[$lо0HH],rx,1/2,$I00le);
mc[$еоOOА]=$TTМсcН(mc[$еоOOА],ry,1/2,$I00le);
}
ok=false;
}
else
{
if($МАрМcl(rx,ry,$Il[mc.$оОlТМ],$0OA[mc.$оОlТМ]))
{



mc[$lо0HH]=$TTМсcН(mc[$lо0HH],rx,5/6,$I00le);
mc[$еоOOА]=$TTМсcН(mc[$еоOOА],ry,5/6,$I00le);
}


if($НOНОН(mc[$lо0HH],mc[$еоOOА],rx,ry)>500)
{



mc[$lо0HH]=$TTМсcН(mc[$lо0HH],rx,10/11,$I00le);
mc[$еоOOА]=$TTМсcН(mc[$еоOOА],ry,50/51,$I00le);
}
mc.$TНесe=1;
}




if(((mc[$МАТОе]!=-1&&$ОpMрс[mc[$МАТОе]].ready)||mc.$АсIее.lower.$оАОНА.visible)&&((!mc.$loАoM||(!$НOIHo&&Math.random()>0.85))||mc.$HНрНТ!=-1)&&(mc.$eoОpА>=-0.1||!$НOIHo))
{
cx=mc[$lHсHO]*200;



if(!ok&&(($МАрМcl(mc[$lо0HH],mc[$еоOOА],$Il[mc.$оОlТМ],$0OA[mc.$оОlТМ])||$0Ме1А[mc[$0MТce]].alpha<=0.1)&&$АОlTО1(i,mc[$lо0HH],mc[$еоOOА],$Il[mc.$оОlТМ],$0OA[mc.$оОlТМ])))
{

mc.$ooAOе=0;
if(mc[$МАТОе]==-1&&mc.$АсIее.lower.$оАОНА.visible)
{
if($НOНОН(mc[$lо0HH],mc[$еоOOА],$Il[mc.$оОlТМ],$0OA[mc.$оОlТМ])>50)
{
if($Il[mc.$оОlТМ]>mc[$lо0HH])
mc.$AМIМ1=-1;
else
mc.$AМIМ1=1;
}
if($НOНОН(mc[$lо0HH],mc[$еоOOА],rx,ry)<200)
if($НOНОН(rx,ry,mc[$eТоM],mc[$рHОМ]-41)<70)
{
mc.$рoeсl=true;
}
}
else
{



if(($HОpcl>570/$оМMОО+cx&&$НOIHo)||$HОpcl>1400/$оМMОО)
{
mc.$рoeсl=false;

}
else
if(($0ОoHс!=2&&$НOНОН(mc[$lо0HH],mc[$еоOOА],rx,ry)<50+cx*0.1)||
($0ОoHс==2&&$НOНОН(mc[$lо0HH],mc[$еоOOА],rx,ry)<30)
||($HОpcl>600/$оМMОО&&$НOНОН(mc[$lо0HH],mc[$еоOOА],rx,ry)<100+cx)
||$0Ме1А[mc[$0MТce]].alpha<=0.1)
{

if(i===$НAlНc&&$pMМ1)
{
if(Math.random()<Math.pow(0.8,$ll1lА))
mc.$рoeсl=true;
}
else
if($НOIHo&&i!=$НAlНc)
{
if(Math.random()<Math.pow(0.2,$ll1lА))
mc.$рoeсl=true;
}
else
{
mc[$lо0HH]=rx;
mc[$еоOOА]=ry;
mc.$рoeсl=true;
}
}

if(mc[$МIIро]>mc.hmax*0.5)
{
if($НOНОН(mc[$lо0HH],mc[$еоOOА],$Il[mc.$оОlТМ],$0OA[mc.$оОlТМ])>250+cx)
{
if($Il[mc.$оОlТМ]>mc[$lо0HH])
mc.$AМIМ1=-1;
else
mc.$AМIМ1=1;
}
}
else
if($НOНОН(mc[$lо0HH],mc[$еоOOА],$Il[mc.$оОlТМ],$0OA[mc.$оОlТМ])<350+cx)
{
if($Il[mc.$оОlТМ]<mc[$lо0HH])
mc.$AМIМ1=-1;
else
mc.$AМIМ1=1;

if($0Ме1А[mc[$0MТce]][$МАТОе]==-1&&!$0Ме1А[mc[$0MТce]].$loАoM)
mc.$AМIМ1=-mc.$AМIМ1;
}

}

}
else
if((mc[$МIIро]>mc.hmax*0.2&&mc[$cАocе]!=$0Ме1А[$НAlНc][$cАocе])||mc[$МIIро]>mc.hmax*0.5)
{
if($МАрМcl(mc[$lо0HH],mc[$еоOOА],$Il[mc.$оОlТМ]-(100+mc[$oрOoА]*100)-cx,$0OA[mc.$оОlТМ])&&
$АОlTО1(i,mc[$lо0HH],mc[$еоOOА],$Il[mc.$оОlТМ],$0OA[mc.$оОlТМ]))
mc.$AМIМ1=-1;
else
if($МАрМcl(mc[$lо0HH],mc[$еоOOА],$Il[mc.$оОlТМ]+(100+mc[$oрOoА]*100)+cx,$0OA[mc.$оОlТМ])&&
$АОlTО1(i,mc[$lо0HH],mc[$еоOOА],$Il[mc.$оОlТМ]+50+cx,$0OA[mc.$оОlТМ]))
mc.$AМIМ1=1;
else
if($МАрМcl(mc[$lо0HH],mc[$еоOOА],$Il[mc.$оОlТМ]-(100+mc[$oрOoА]*100),$0OA[mc.$оОlТМ]-100*mc.$MAНIp)&&
$АОlTО1(i,mc[$lо0HH],mc[$еоOOА],$Il[mc.$оОlТМ]-(100+mc[$oрOoА]*100),$0OA[mc.$оОlТМ]-100*mc.$MAНIp))
{
mc.$AМIМ1=-1;
mc.$TНесe=-1;
}
else
if($МАрМcl(mc[$lо0HH],mc[$еоOOА],$Il[mc.$оОlТМ]+(100+mc[$oрOoА]*100),$0OA[mc.$оОlТМ]-100*mc.$MAНIp)&&
$АОlTО1(i,mc[$lо0HH],mc[$еоOOА],$Il[mc.$оОlТМ]+(100+mc[$oрOoА]*100),$0OA[mc.$оОlТМ]-100*mc.$MAНIp))
{
mc.$AМIМ1=1;
mc.$TНесe=-1;
}
else
if($МАрМcl(mc[$lо0HH],mc[$еоOOА],$Il[mc.$оОlТМ],$0OA[mc.$оОlТМ]-100*mc.$MAНIp)&&
$АОlTО1(i,mc[$lо0HH],mc[$еоOOА],$Il[mc.$оОlТМ],$0OA[mc.$оОlТМ]-100*mc.$MAНIp))
mc.$TНесe=-1;
else
if(mc.sit<0.5&&$МАрМcl(mc[$lо0HH],mc[$еоOOА],$Il[mc.$оОlТМ],$0OA[mc.$оОlТМ]+50)&&
$АОlTО1(i,mc[$lо0HH],mc[$еоOOА],$Il[mc.$оОlТМ],$0OA[mc.$оОlТМ]+50))
mc.$TНесe=1;
else

if($МАрМcl($Il[mc.$оОlТМ],$0OA[mc.$оОlТМ],$Il[mc.$оОlТМ]+(mc[$oрOoА]-0.5)*800,$0OA[mc.$оОlТМ]-mc[$АТHММ]*200)&&
$МАрМcl(mc[$lо0HH],mc[$еоOOА],$Il[mc.$оОlТМ]+(mc[$oрOoА]-0.5)*800,$0OA[mc.$оОlТМ]-mc[$АТHММ]*200)&&
$АОlTО1(i,mc[$lо0HH],mc[$еоOOА],$Il[mc.$оОlТМ]+(mc[$oрOoА]-0.5)*800,$0OA[mc.$оОlТМ]-mc[$АТHММ]*200))
{

if(mc[$oрOoА]>0.5)
mc.$AМIМ1=1;
else
mc.$AМIМ1=-1;

if(mc[$АТHММ]>0.5)
mc.$TНесe=-1;
}
else
{
if(cx>80)
if(mc[$lо0HH]>mc[$eТоM])
mc.$AМIМ1=1;
else
mc.$AМIМ1=-1;
}
}
}
else
{



if(mc[$МАТОе]!=-1)
{
if($МАрМcl($Il[mc.$рсOОА],$0OA[mc.$рсOОА],$Il[$eMOАе.$оОlТМ],$0OA[$eMOАе.$оОlТМ]))
{
if(!$МАрМcl($Il[mc.$рсOОА]+30+mc[$lHсHO]*100,$0OA[mc.$рсOОА],$Il[$eMOАе.$оОlТМ],$0OA[$eMOАе.$оОlТМ]))
mc.$AМIМ1=1;
else
if(!$МАрМcl($Il[mc.$рсOОА]-30-mc[$lHсHO]*100,$0OA[mc.$рсOОА],$Il[$eMOАе.$оОlТМ],$0OA[$eMOАе.$оОlТМ]))
mc.$AМIМ1=-1;
else
if(!$МАрМcl($Il[mc.$рсOОА],$0OA[mc.$рсOОА]-100,$Il[$eMOАе.$оОlТМ],$0OA[$eMOАе.$оОlТМ]))
mc.$TНесe=-1;
else
if(!$МАрМcl($Il[mc.$рсOОА],$0OA[mc.$рсOОА]+50,$Il[$eMOАе.$оОlТМ],$0OA[$eMOАе.$оОlТМ]))
mc.$TНесe=1;

else
if(!$МАрМcl($Il[mc.$рсOОА]-200,$0OA[mc.$рсOОА]-100,$Il[$eMOАе.$оОlТМ],$0OA[$eMOАе.$оОlТМ]))
{
mc.$TНесe=-1;
mc.$AМIМ1=-1;
}
else
if(!$МАрМcl($Il[mc.$рсOОА]+200,$0OA[mc.$рсOОА]-100,$Il[$eMOАе.$оОlТМ],$0OA[$eMOАе.$оОlТМ]))
{
mc.$TНесe=-1;
mc.$AМIМ1=1;
}
}
}
else
{
$0ОoHс=-1;
$HОpcl=0;
if($eMOАе.$HНрНТ==-1)
for(i2=0;i2<$cс0Hс;i2++)
if($ОpMрс[i2].io)
{
$eMOАе=$ОpMрс[i2];
$llМTO=$НOНОН(mc[$eТоM],mc[$рHОМ],$eMOАе[$eТоM],$eMOАе[$рHОМ]);
if($llМTO<800)
if($eMOАе.$соТAТ==false)
if(($eMOАе.picken_by==-1||$0Ме1А[$eMOАе.picken_by][$МIIро]<50)&&($0ОoHс==-1||$llМTO<$HОpcl)&&($eMOАе.command==-1||($eMOАе.command!=-1&&$eMOАе.command==mc[$cАocе]&&(mc.$HМ0М1||$0Ме1А[$НAlНc][$cАocе]!=mc[$cАocе]))))
{
if(mc[$eТоM]<$eMOАе[$eТоM]-20)
mc.$AМIМ1=1;
else
if(mc[$eТоM]>$eMOАе[$eТоM]+20)
mc.$AМIМ1=-1;
else
if(mc[$рHОМ]>$eMOАе[$рHОМ])
mc.$TНесe=-1;
else
mc.$TНесe=1;

$HОpcl=$llМTO;
$0ОoHс=i2;
}
}
}
}

































if(Math.random()>0.5)
for(i2=0;i2<$eсАeA;i2++)
if(i2!=i)
{

if($0Ме1А[i2].io)
if($0Ме1А[i2][$МIIро]>0)
if($0Ме1А[i2][$cАocе]==mc[$cАocе])
if($0Ме1А[i2][$0MТce]==-1)
if($0Ме1А[i2][$eТоM]>mc[$eТоM]-500)
if($0Ме1А[i2][$eТоM]<mc[$eТоM]+500)
if($0Ме1А[i2][$рHОМ]>mc[$рHОМ]-300)
if($0Ме1А[i2][$рHОМ]<mc[$рHОМ]+300)
if($OАМАO||$МАрМcl($0Ме1А[i2][$eТоM],$0Ме1А[i2][$рHОМ]-50,mc[$eТоM],mc[$рHОМ]-50))

{



if($0Ме1А[i2].$ooAOе>$pсHHТ)

$Hерoоe($0Ме1А[i2]);

if($0Ме1А[i2].$ooAOе>mc.$ooAOе+10)
{
$0Ме1А[i2].$ooAOе=mc.$ooAOе+10;

$0Ме1А[i2][$0MТce]=mc[$0MТce];

$0Ме1А[i2][$lо0HH]=mc[$lо0HH]-100+Math.random()*200;
$0Ме1А[i2][$еоOOА]=mc[$еоOOА]-50+Math.random()*100;

if($0Ме1А[i2].$MсАOl>mc.$MсАOl)
$0Ме1А[i2].$MсАOl=mc.$MсАOl;

}




}
}

if(mc.$HНрНТ!=-1&&!$сoopT[mc.$HНрНТ].$МАMНMМ)
{
if(mc[$eТоM]<$0Ме1А[mc[$0MТce]][$eТоM])
mc.$AМIМ1=1;
else
mc.$AМIМ1=-1;
}

if($0Ме1А[mc[$0MТce]][$cАocе]==mc[$cАocе])
{
if(mc[$cАocе]==0||$OАМАO)
mc[$0MТce]=-1;

if($cерAc)
trace($pOAMТ);

}

if(($eMOАе.$loАoM&&(Math.random()>0.9&&mc[$cАocе]!=$0Ме1А[$НAlНc][$cАocе]))||!$eMOАе.io||$eMOАе[$МIIро]<-30||($eMOАе[$МIIро]<=0&&$eMOАе.$HНрНТ!=-1))
{
if(!$OАМАO||$eMOАе.$оeoТе)
mc[$0MТce]=-1;

if($cерAc)
trace($cНoрl);

if(mc[$leAсO]==0)
{
if(Math.random()>0.5)
mc[$leAсO]=2;
else
mc[$leAсO]=3;
}
$оAAАМТ(mc);
}


if(mc[$0MТce]==i)
{
mc[$0MТce]=-1;

if($cерAc)
trace($МА0HА);


if(mc[$leAсO]==0)
mc[$leAсO]=3;
}

if(mc.$ooAOе>$pсHHТ&&!$OАМАO)
{
mc[$0MТce]=-1;

if(mc[$leAсO]==0)
mc[$leAсO]=3;
}
}
}

if($cерAc)trace($eМpeA);

{
if(ok)
{
if(mc[$leAсO]==1&&mc[$cАocе]==$0Ме1А[$НAlНc][$cАocе]&&$0Ме1А[$НAlНc][$МIIро]>0)
{
let $HОpcl=$0Ме1А[$НAlНc][$eТоM]+mc.$ееоАН*100;
if($0Ме1А[$НAlНc].$TНесe==1&&$0Ме1А[$НAlНc].$ееоАН==mc.$ееоАН)
$HОpcl=$0Ме1А[$НAlНc][$eТоM]-mc.$ееоАН*100;

if($сTpНО(mc[$eТоM]-$HОpcl)*(Math.sin(i)*0.25+0.75)+$сTpНО(mc[$рHОМ]-$0Ме1А[$НAlНc][$рHОМ])>100||$сTpНО(mc[$eТоM]-$0Ме1А[$НAlНc][$eТоM])<30)
{
if(mc.$соТМАc)
{
if(mc[$рHОМ]>$0Ме1А[$НAlНc][$рHОМ])
mc.$TНесe=-1;
else
mc.$TНесe=1;
}
if(mc[$eТоM]>$HОpcl)
mc.$AМIМ1=-1;
else
mc.$AМIМ1=1;
}
else
if(!mc.$соТМАc)
if($0Ме1А[$НAlНc].$ееоАН==mc.$ееоАН)
if($0Ме1А[$НAlНc].$TНесe!=1)
mc.$TНесe=1;


if($0Ме1А[$НAlНc][$0MТce]!=-1||$0Ме1А[$НAlНc].$рoeсl)
{
mc[$lо0HH]=(mc[$lо0HH]*3+$0Ме1А[$НAlНc][$lо0HH])/4;
mc[$еоOOА]=(mc[$еоOOА]*3+$0Ме1А[$НAlНc][$еоOOА])/4;
}
else
{
if(mc[$lHсHO]>0.95)
{
mc[$cАТAT]=-mc[$cАТAT];
mc[$lHсHO]=Math.random()*0.95;
}

if(mc[$cАТAT]==0)
mc[$cАТAT]=mc.$ееоАН;

mc[$lо0HH]=(mc[$lо0HH]*7+mc[$eТоM]+(mc[$АТHММ]*400+200)*mc[$cАТAT])/8;
mc[$еоOOА]=(mc[$еоOOА]*7+mc[$рHОМ]-50+(mc[$lHсHO]*100-50))/8;
}


}
else
{
if(mc[$0MТce]==-1)
{
if(mc[$leAсO]==2||mc[$leAсO]==3)
{

if(mc[$lHсHO]>0.95)
mc[$cАТAT]=-mc[$cАТAT];
else
{
if(mc[$cАТAT]==0)
mc[$cАТAT]=mc.$ееоАН;

mc[$lо0HH]=(mc[$lо0HH]*10+(mc[$eТоM]+mc[$cАТAT]*200))/11;
mc[$еоOOА]=(mc[$еоOOА]*10+(mc[$рHОМ]-41+mc[$АТHММ]*100-50))/11;
}

if(mc[$leAсO]==3)
{
if(!$рeHТрT(mc[$eТоM]+mc.$ееоАН*50,mc[$рHОМ]+20)||!$рeHТрT(mc[$eТоM]+mc.$ееоАН*50,mc[$рHОМ]+150))
if($рeHТрT(mc[$eТоM]+mc.$ееоАН*100,mc[$рHОМ]-40)||$рeHТрT(mc[$eТоM]+mc.$ееоАН*100,mc[$рHОМ]-100))
mc.$AМIМ1=mc.$ееоАН;
}


}
else
{
mc[$lо0HH]=(mc[$lо0HH]*10+(mc[$eТоM]+mc.$ееоАН*200))/11;
mc[$еоOOА]=(mc[$еоOOА]*10+(mc[$рHОМ]-41))/11;
}
}
}
}

let an=Math.random()*Math.PI;
let $HОpcl=Math.sin(an)*0.5;
let $llМTO=Math.cos(an)*0.5;

if(mc[$0MТce]==-1||(mc.$AМIМ1==0&&mc.$TНесe==0&&!mc.$рoeсl))
for(i2=0;i2<$eсАeA;i2++)
if(i2!=i)
if($0Ме1А[i2].io)
{

$eMOАе=$0Ме1А[i2];
if($eMOАе[$МIIро]>0&&!$eMOАе.$loАoM)
if($eMOАе[$eТоM]>mc[$eТоM]-$АOTIl*1.5/$оМMОО)
if($eMOАе[$eТоM]<mc[$eТоM]+$АOTIl*1.5/$оМMОО)
if($eMOАе[$рHОМ]>mc[$рHОМ]-$ТIeсO*1.5/$оМMОО)
if($eMOАе[$рHОМ]<mc[$рHОМ]+$ТIeсO*1.5/$оМMОО)
if(($eMOАе[$eТоM]>mc[$eТоM]-100&&mc.$ееоАН>0)||($eMOАе[$eТоM]<mc[$eТоM]+100&&mc.$ееоАН<0)||$OАМАO)
if($eMOАе[$cАocе]!=mc[$cАocе])
{
let a=$eMOАе[$MОTHА($HeMpс)];
if($OАМАO||







$МАрМcl(
$Il[a]+$HОpcl*$оОlHT[a],
$0OA[a]+$llМTO*$оОlHT[a],
$Il[mc.$pМHHo]-30+Math.random()*60,
$0OA[mc.$pМHHo]-30+Math.random()*60
)
)
{
if(mc[$0MТce]==-1)
{
$Hерoоe(mc);
}
mc[$0MТce]=i2;

}
}
}
}
if(!$ОMНlI)
{
$AMTT1=0;
$0ОoHс=0;
for(i2=0;i2<$eсАeA;i2++)
if(i2!=i)
if($0Ме1А[i2].io)
{
$eMOАе=$0Ме1А[i2];
if($eMOАе.io)
if($eMOАе[$МIIро]>0&&!$eMOАе.$loАoM)
if($eMOАе[$eТоM]>mc[$eТоM]-screenX/$оМMОО)
if($eMOАе[$eТоM]<mc[$eТоM]+screenX/$оМMОО)
if($eMOАе[$рHОМ]>mc[$рHОМ]-screenY/$оМMОО)
if($eMOАе[$рHОМ]<mc[$рHОМ]+screenY/$оМMОО)
if($eMOАе[$cАocе]==mc[$cАocе]||$МАрМcl($eMOАе[$eТоM]-25,$eMOАе[$рHОМ]-41,$Il[mc.$pМHHo],$0OA[mc.$pМHHo]))
{
if($eMOАе[$cАocе]!=mc[$cАocе])
{
$AMTT1-=1;
if(i2!=mc[$0MТce])
$0ОoHс=i2;
}
else
$AMTT1+=1;
}
}
if($AMTT1<-1)
{
if(mc[$eТоM]>$0Ме1А[$0ОoHс][$eТоM])
mc.$AМIМ1=1;
else
mc.$AМIМ1=-1;

if(mc.$TНесe==1)
mc.$TНесe=0;
}
}
if(mc.$HНрНТ==-1)
{
ok=true;
$AMTT1=-1;
for(i2=0;i2<=$есНI0;i2++)
if($IТТII[i2]!=null)
if($IТТII[i2].visible==true)
if($0Ме1А[$IТТII[i2].$OOHAТ][$cАocе]!=mc[$cАocе])
if($IТТII[i2].$OOHAТ>=0)
{
if($IТТII[i2][$0coMM]===$0НА0o||$IТТII[i2][$0coMM]===$МA1ре||$IТТII[i2][$0coMM]===$OeесA)
if((($IТТII[i2][$eТоM]>mc[$eТоM]&&mc.$ееоАН>0)||($IТТII[i2][$eТоM]<mc[$eТоM]&&mc.$ееоАН<0))&&$МАрМcl($IТТII[i2][$eТоM],$IТТII[i2][$рHОМ],$Il[mc.$pМHHo],$0OA[mc.$pМHHo]))
{

if($TОpе0р($IТТII[i2][$eТоM],$IТТII[i2][$рHОМ],$IТТII[i2][$eТоM]+$IТТII[i2][$eрoeе]*10,$IТТII[i2][$рHОМ]+$IТТII[i2][$ОоНр1]*10,
mc[$eТоM],mc[$рHОМ],mc[$eТоM],mc[$рHОМ]-60,i2))
{
mc.$TНесe=-1;
if(!$0Ме1А[$IТТII[i2].$OOHAТ].$оeoТе)
if(mc[$0MТce]==-1)
{
$Hерoоe(mc);
mc[$0MТce]=$IТТII[i2].$OOHAТ;
}
ok=false;
$AMTT1=i2;
}
if($TОpе0р($IТТII[i2][$eТоM]-$IТТII[i2][$eрoeе]*5,$IТТII[i2][$рHОМ]-$IТТII[i2][$ОоНр1]*5,$IТТII[i2][$eТоM]+$IТТII[i2][$eрoeе]*20,$IТТII[i2][$рHОМ]+$IТТII[i2][$ОоНр1]*20,
mc[$eТоM],mc[$рHОМ]-60,mc[$eТоM],mc[$рHОМ]-102,i2))
{
mc.$TНесe=1;
if(!$0Ме1А[$IТТII[i2].$OOHAТ].$оeoТе)
if(mc[$0MТce]==-1)
{
$Hерoоe(mc);
mc[$0MТce]=$IТТII[i2].$OOHAТ;
}
ok=false;
$AMTT1=i2;
}
}
if($IТТII[i2][$0coMM]===$АМeеM||$IТТII[i2][$0coMM]===$НТIТo)
{
if(mc[$eТоM]>$IТТII[i2][$eТоM]-150)
if(mc[$eТоM]<$IТТII[i2][$eТоM]+150)
if(mc[$рHОМ]>$IТТII[i2][$рHОМ]-150)
if(mc[$рHОМ]<$IТТII[i2][$рHОМ]+150)
if($МАрМcl($Il[mc.$pМHHo],$0OA[mc.$pМHHo],$IТТII[i2][$eТоM],$IТТII[i2][$рHОМ]))
{
if(mc[$eТоM]>$IТТII[i2][$eТоM])
mc.$AМIМ1=1;
else
mc.$AМIМ1=-1;
if(Math.random()>0.9)
mc.$TНесe=-1;

if(!$0Ме1А[$IТТII[i2].$OOHAТ].$оeoТе)
if(mc[$0MТce]==-1)
{
$Hерoоe(mc);
mc[$0MТce]=$IТТII[i2].$OOHAТ;
}
}
}
if(mc[$0MТce]==-1)
if($НOНОН($Il[mc.$pМHHo],$0OA[mc.$pМHHo],$IТТII[i2][$eТоM],$IТТII[i2][$рHОМ])<350)
if(($IТТII[i2][$eТоM]>mc[$eТоM]&&mc.$ееоАН==1)||($IТТII[i2][$eТоM]<mc[$eТоM]&&mc.$ееоАН==-1))
if($МАрМcl($Il[mc.$pМHHo],$0OA[mc.$pМHHo],$IТТII[i2][$eТоM],$IТТII[i2][$рHОМ]))
if(!$0Ме1А[$IТТII[i2].$OOHAТ].$оeoТе)
{
$Hерoоe(mc);
mc[$0MТce]=$IТТII[i2].$OOHAТ;
}
}
if(!ok)
{
if($AMTT1>=0&&$AMTT1<=$есНI0)
if(mc[$МАТОе]==-1&&mc.$АсIее.lower.$оАОНА.visible)
if(Math.random()<Math.pow(0.3,$ll1lА))
if($НOНОН($Il[mc.$оОlТМ],$0OA[mc.$оОlТМ],$IТТII[$AMTT1][$eТоM],$IТТII[$AMTT1][$рHОМ])<150)
mc.$рoeсl=true;
}



if(!mc.$соТМАc)

{

if($МIMlMО($Il[mc.$MОеМ1]+mc.$AМIМ1*50,$0OA[mc.$MОеМ1]-50,$Il[mc.$MОеМ1]+mc.$AМIМ1*100+mc[$АсТOе]*10,$0OA[mc.$MОеМ1]+250))
{
if($МIMlMО($Il[mc.$MОеМ1]+mc.$AМIМ1*50,$0OA[mc.$MОеМ1]+25,$Il[mc.$MОеМ1]+mc.$AМIМ1*150,$0OA[mc.$MОеМ1]+25))
{
mc.$TНесe=-1;
}
else
{
mc.$AМIМ1=-mc.$AМIМ1;
if(mc.$TНесe==-1)
mc.$TНесe=0;

}
}
if($МIMlMО($Il[mc.$MОеМ1],$0OA[mc.$MОеМ1]-50,$Il[mc.$MОеМ1]+mc[$АсТOе]*10,$0OA[mc.$MОеМ1]+250))
{
if(!$МIMlMО($Il[mc.$MОеМ1],$0OA[mc.$MОеМ1]-50,$Il[mc.$MОеМ1]+mc[$АсТOе]*10+100,$0OA[mc.$MОеМ1]+250))
{
mc.$AМIМ1=1;
}
if(!$МIMlMО($Il[mc.$MОеМ1],$0OA[mc.$MОеМ1]-50,$Il[mc.$MОеМ1]+mc[$АсТOе]*10-100,$0OA[mc.$MОеМ1]+250))
{
mc.$AМIМ1=-1;
}
}


if(mc.$AМIМ1!=0)
if(!$0oеcН($Il[mc.$MОеМ1]+mc.$AМIМ1*50,$0OA[mc.$MОеМ1]+5)||($сTpНО(mc[$АсТOе])<4&&Math.random()>0.9))
{
if($0oеcН($Il[mc.$MОеМ1]+mc.$AМIМ1*50,$0OA[mc.$MОеМ1]-70)||
$0oеcН($Il[mc.$MОеМ1]+mc.$AМIМ1*50,$0OA[mc.$MОеМ1]-170))
{
mc.$TНесe=-1;
}
else
{
mc.$AМIМ1=0;
}
}
}


}
if(mc[$leAсO]==1)
if(!mc.$соТМАc)
if(mc.$AМIМ1!=0)
{


if(mc[$eТоM]===mc.$сpcMОO)
{
if(mc.$МMc0рp==undefined)
mc.$МMc0рp=0;

mc.$МMc0рp+=$ll1lА;

if(mc.$МMc0рp>5)
mc.$TНесe=-1;
}
else
{
mc.$МMc0рp=0;
mc.$сpcMОO=mc[$eТоM];
}
}

if($OM0TM)

if(i==$НAlНc)
{
if($IlMНM)
{
mc[$lо0HH]=($еT0рTр-game[$eТоM])/$оМMОО;
mc[$еоOOА]=($оTО10T-game[$рHОМ])/$оМMОО;
}

{
if($Т0Tlс)
mc.$TНесe=-1;
else
if($0eеAT)
mc.$TНесe=1;
}

{
if($eTeАO)
mc.$AМIМ1=-1;
else
if($рНcpо)
mc.$AМIМ1=1;
}
if($cАpОр===$ММ.$ОоcОMH)
{
mc.$AМIМ1=0;
mc.$TНесe=0;
}

if($pMМ1)
{
mc[$lо0HH]=Math.max(mc[$eТоM]-800,Math.min(mc[$lо0HH],mc[$eТоM]+800));
mc[$еоOOА]=Math.max(mc[$рHОМ]-400,Math.min(mc[$еоOOА],mc[$рHОМ]+400));

if(!$АеpOМТ&&mc.$рoeсl)
if(!$АoМHl)
MP_custom_events+=$AAНlM+$НAlНc+$IHTe+mc[$lо0HH]+$IHTe+mc[$еоOOА];
}
}

}
}
if($pMМ1)
{
$ОHe1AO(mc.$рсOОА,-5);
$ОHe1AO(mc.$MОеМ1,-5);
$ОHe1AO(mc.$НТсМТ,-5);
$ОHe1AO(mc.$р1eНM,-5);
$ОHe1AO(mc.$оОlТМ,-5);
$ОHe1AO(mc.$1O1lM,-5);
$ОHe1AO(mc.$pМHHo,-5);
$ОHe1AO(mc.$e1IOМ,-5);
}


if(mc.$0IHMT<=0)
if(!mc.$оeoТе)
{
if(mc.hmax>0&&(!$pMМ1||!$lMH0М))
{












































































































if(mc[$lоАо].$оOc0A.length>0)
{
if(mc.$HМ0М1&&$pMМ1&&($НAlНc!==i||$00pеH))
{

}
else
{
$MрТ1o(mc,mc[$lоАо].$оOc0A[Math.floor(Math.random()*mc[$lоАо].$оOc0A.length)],true);

if(APRIL_2025)
if(i==$НAlНc)
{
for(let g=0;g<3;g++)
{
let $НТНрHT=$1leoI;

$1МHНTM(1,$0Ме1А[$НAlНc]);


$IТТII[$НТНрHT].$еlАlM+=g*3;

let an=Math.random()*Math.PI*2;
let $HОpcl=Math.sin(an)*15;
let $llМTO=Math.cos(an)*15;
$OTpc1[$0Ме1А[$НAlНc].$ОMIНlA]=$HОpcl+$OTpc1[$0Ме1А[$НAlНc].$рсOОА];
$IрТ0H[$0Ме1А[$НAlНc].$ОMIНlA]=$llМTO+$IрТ0H[$0Ме1А[$НAlНc].$рсOОА];
}
}
}
}
}
if(i==$НAlНc)
{
if($о0Мp0)
{
ok=true;
var $рHocHН=0;
var $01рОcМ=-1;

for($AMTT1=0;$AMTT1<$eсАeA&&ok;$AMTT1++)
if($0Ме1А[$AMTT1].io)
if($0Ме1А[$AMTT1][$cАocе]==mc[$cАocе])
if($0Ме1А[$AMTT1][$МIIро]>0)
if(!$0Ме1А[$AMTT1].$loАoM)
{
var $OННHТТ=$НOНОН($0Ме1А[$AMTT1][$eТоM],$0Ме1А[$AMTT1][$рHОМ],$0Ме1А[$НAlНc][$eТоM],$0Ме1А[$НAlНc][$рHОМ]);
if($01рОcМ==-1||$рHocHН>$OННHТТ)
{
$01рОcМ=$AMTT1;
$рHocHН=$OННHТТ;
}
}

if($01рОcМ!=-1)
{
ok=false;
$НAlНc=$01рОcМ;
$ll1lА=0.01;


$OeМcO.visible=true;
$OeМcO.gotoAndPlay(1);
$Аоео0($clpOA);

$0Ме1А[$01рОcМ].$HМ0М1=true;
$0Ме1А[i].$HМ0М1=false;

$pрMТl();
}

if(ok)
{
$Hl1AА.visible=true;
if(!$00pеH)
{
$HОpcl=Math.random()*Math.PI*2;
if($pMМ1)
$HОpcl*=0.1;
game[$eТоM]+=Math.sin($HОpcl)*200;
game[$рHОМ]+=Math.cos($HОpcl)*200;
}
if(!$pMМ1)
{
$AAсAр=$соOO;
$Т1рcН=$lНoMА;
if(HINTS)
$TНoIА($оOоеe);
}
}
}
else
{
$Hl1AА.visible=true;
if(!$00pеH)
{
$HОpcl=Math.random()*Math.PI*2;
if($pMМ1)
$HОpcl*=0.1;
game[$eТоM]+=Math.sin($HОpcl)*200;
game[$рHОМ]+=Math.cos($HОpcl)*200;
game.clearMCInterpolationData();
graphics_3d.clearMCInterpolationData();
graphics_3d_front.clearMCInterpolationData();
}

if(!$pMМ1)
{
$AAсAр=$соOO;
if($0Ме1А[$НAlНc].$АTТМc==$НAlНc||$0Ме1А[$НAlНc].$АTТМc==-1)
{
$Т1рcН=$ОoО1О;
if(HINTS)
$TНoIА($MМОAI);
}
else
{
$Т1рcН=$1eMМI;
if(HINTS)
$TНoIА($TМНОc);
}
}
}
}




if(mc.$HAрH1>100)
mc.$HAрH1=100;

if(mc.$lMIсo>100)
mc.$lMIсo=100;

if(mc.$НТcep>100)
mc.$НТcep=100;

if(mc.$ААНММ>100)
mc.$ААНММ=100;


if($pMМ1&&$НAlНc===i&&!$00pеH)
{
if(!$lMH0М)
{

if($eМоco>=0)
$eМоco++;

$0IОее=mc[$МАТОе];

try
{
if(getTimer()-mc.$Т10е1>7000)
mc.$АTТМc=-1;
}
catch(error)
{
ReportCaughtError(error);
$Т1рcН=$1lоlо+error.$cM0НОА+$оAHo0+error.message;

gotoAndStop($lТMe);
}





















try
{
$оToТс=0;


}
catch(error)
{
ReportCaughtError(error);
$Т1рcН=$орcHс+error.$cM0НОА+$оAHo0+error.message;

gotoAndStop($lТMe);
}

if($рpТcо===$eМоco-1&&!$АoМHl)
{
MP_custom_events+=$oТHcН+i+$IHTe+
$ср1О0($Il[mc.$НТсМТ])+$IHTe+$ср1О0($0OA[mc.$НТсМТ])+$IHTe+$ср1О0($OTpc1[mc.$НТсМТ])+$IHTe+$ср1О0($IрТ0H[mc.$НТсМТ])+$IHTe+
$ср1О0($Il[mc.$р1eНM])+$IHTe+$ср1О0($0OA[mc.$р1eНM])+$IHTe+$ср1О0($OTpc1[mc.$р1eНM])+$IHTe+$ср1О0($IрТ0H[mc.$р1eНM])+$IHTe+

$ср1О0($Il[mc.$оОlТМ])+$IHTe+$ср1О0($0OA[mc.$оОlТМ])+$IHTe+$ср1О0($OTpc1[mc.$оОlТМ])+$IHTe+$ср1О0($IрТ0H[mc.$оОlТМ])+$IHTe+
$ср1О0($Il[mc.$1O1lM])+$IHTe+$ср1О0($0OA[mc.$1O1lM])+$IHTe+$ср1О0($OTpc1[mc.$1O1lM])+$IHTe+$ср1О0($IрТ0H[mc.$1O1lM])+$IHTe+

$ср1О0($Il[mc.$рсOОА])+$IHTe+$ср1О0($0OA[mc.$рсOОА])+$IHTe+$ср1О0($OTpc1[mc.$рсOОА])+$IHTe+$ср1О0($IрТ0H[mc.$рсOОА])+$IHTe+
$ср1О0($Il[mc.$MОеМ1])+$IHTe+$ср1О0($0OA[mc.$MОеМ1])+$IHTe+$ср1О0($OTpc1[mc.$MОеМ1])+$IHTe+$ср1О0($IрТ0H[mc.$MОеМ1])+$IHTe+

$ср1О0($Il[mc.$pМHHo])+$IHTe+$ср1О0($0OA[mc.$pМHHo])+$IHTe+$ср1О0($OTpc1[mc.$pМHHo])+$IHTe+$ср1О0($IрТ0H[mc.$pМHHo])+$IHTe+
$ср1О0($Il[mc.$e1IOМ])+$IHTe+$ср1О0($0OA[mc.$e1IOМ])+$IHTe+$ср1О0($OTpc1[mc.$e1IOМ])+$IHTe+$ср1О0($IрТ0H[mc.$e1IOМ])+$IHTe+

$ср1О0($Il[mc.$Mo1OА])+$IHTe+$ср1О0($0OA[mc.$Mo1OА])+$IHTe+$ср1О0($OTpc1[mc.$Mo1OА])+$IHTe+$ср1О0($IрТ0H[mc.$Mo1OА])+$IHTe+
$ср1О0($Il[mc.$AМеTo])+$IHTe+$ср1О0($0OA[mc.$AМеTo])+$IHTe+$ср1О0($OTpc1[mc.$AМеTo])+$IHTe+$ср1О0($IрТ0H[mc.$AМеTo]);
}
else
{
$eМоco=-1;
}

$Hl1AА.alpha=0;

$ОНAMр();
}
else
{
mc.alpha=0;
$lMH0М=false;
}
}


mc.$оeoТе=true;


if(mc.$оlсTН)
mc.alpha=1;

if(mc.hmax>0)
if(mc[$cАocе]!=$0Ме1А[$НAlНc][$cАocе])
{
$Мe00о++;
if(mc.$АTТМc==$НAlНc)
{
$роHlс(0);

if($OАМАO)
$роHlс(19);

if(mc.$1МI0р==$TрTМM)
{
$роHlс(1);

if(mc.char==12)
$роHlс(18);
}

if($0Ме1А[$НAlНc].$оeoТе)
$роHlс(3);
else
if($0Ме1А[$НAlНc].$loАoM)
$роHlс(4);

if(!$0Ме1А[$НAlНc].$оeoТе)
if($0Ме1А[$НAlНc].$eoОpА<=0)
$роHlс(5);
}
}

mc.$loАoM=true;
mc.$eoОpА=-2;

mc.$АсIее.lower.$оАОНА.visible=false;
mc.$ТНpТI.lower.$оАОНА.visible=false;


if(mc.$1МOОM!==-1)
if(!mc.$HМ0М1||(i===$НAlНc&&!$00pеH)||!$pMМ1)
{
$Oр0ol=i;

$AоАе0=mc.$АTТМc;


$pАTIТ(mc.$1МOОM);
}

if(!mc.$HМ0М1&&$pMМ1)
mc.$pHсоH();

}



if($pMМ1)
{
$ОHe1AO(mc.$рсOОА,-4);
$ОHe1AO(mc.$MОеМ1,-4);
$ОHe1AO(mc.$НТсМТ,-4);
$ОHe1AO(mc.$р1eНM,-4);
$ОHe1AO(mc.$оОlТМ,-4);
$ОHe1AO(mc.$1O1lM,-4);
$ОHe1AO(mc.$pМHHo,-4);
$ОHe1AO(mc.$e1IOМ,-4);
}

if(mc.$pо1НО)
if(mc[$МАТОе]===-1)
{
mc.$рoeсl=true;
mc.$pо1НО=false;
}

if((mc.$0IHMT>0||mc.$ААpоTе)&&mc.$eoОpА>-1)
{
if((i===$НAlНc&&!$00pеH&&$lo0Тр)||mc.$ААpес)
if(mc.$HНрНТ===-1)
if(mc[$МАТОе]!=-1)
if(mc.$AOсоМ)

if(!$eMOАе.$HМ0М1||($ОpMрс[mc[$МАТОе]].picken_by===$НAlНc&&!$00pеH)||!$pMМ1)
{
$eMOАе=$ОpMрс[mc[$МАТОе]];
$eMOАе.picken_by=-1;

if(i===$НAlНc&&$lo0Тр)
$OOcoA($eMOАе);

if(!mc.$ААpес)
{
$OTpc1[$eMOАе.$c0НlТ]+=Math.sin(mc.$pМсМе)*7;
$IрТ0H[$eMOАе.$c0НlТ]+=Math.cos(mc.$pМсМе)*7-2;
$OTpc1[$eMOАе.$рееоp]+=Math.sin(mc.$pМсМе)*1;
$IрТ0H[$eMOАе.$рееоp]+=Math.cos(mc.$pМсМе)*1+2;

$Il[$eMOАе.$c0НlТ]+=mc.$ееоАН*20;
$Il[$eMOАе.$рееоp]+=mc.$ееоАН*20;

if(i===$НAlНc)
{
$ММ.Event($ММ[$Н1ОHM],

$ММ.$Oоolр($eMOАе.$MeсНе),

$ММ.$Oоolр($Il[$eMOАе.$c0НlТ]),
$ММ.$Oоolр($0OA[$eMOАе.$c0НlТ]),
$ММ.$Oоolр($OTpc1[$eMOАе.$c0НlТ]*$ММ.$MеМMА),
$ММ.$Oоolр($IрТ0H[$eMOАе.$c0НlТ]*$ММ.$MеМMА),

$ММ.$Oоolр($Il[$eMOАе.$рееоp]),
$ММ.$Oоolр($0OA[$eMOАе.$рееоp]),
$ММ.$Oоolр($OTpc1[$eMOАе.$рееоp]*$ММ.$MеМMА),
$ММ.$Oоolр($IрТ0H[$eMOАе.$рееоp]*$ММ.$MеМMА),
);
}
}






$0Н0Тl($eMOАе.$c0НlТ);
$0Н0Тl($eMOАе.$рееоp);

mc[$МАТОе]=-1;
$o0MIс(i);
}

if(!mc.$ААpес)
{
if(mc.$HрATo<1)
{





if($pMМ1)
mc.$HрATo=Math.min(1,mc.$HрATo+$1М0оo*0.3);
else
mc.$HрATo=Math.min(1,mc.$HрATo+$1М0оo*0.65);
}

if(mc.$lTcТl!==undefined&&mc.$lTcТl>getTimer()-500)
{
mc.$рoeсl=true;
}

if(mc.$рoeсl&&mc.$оAAOО<=0)
{
let $cреllо=(mc[$МАТОе]===-1);

if(!$cреllо)
{
$eMOАе=$ОpMрс[mc[$МАТОе]];
if($eMOАе.ready)
if($eMOАе.$lOMO1I===undefined||$eMOАе.$lOMO1I())
if(($eMOАе.$соТAТ&&mc.$HНрНТ!=-1)||(!$eMOАе.$соТAТ&&mc.$HНрНТ==-1))
if(!$pMМ1||$ММ[$OpНpp][$M0сМТ]<3||!mc.$HМ0М1||(mc.$MeсНе===$НAlНc&&!$00pеH)||$0lMMpH($eMOАе))
if($eMOАе.$1l1TO!==7||($eMOАе.$1l1TO===7&&$0Ме1А[$eMOАе.picken_by]&&!$0Ме1А[$eMOАе.picken_by].$оeoТе))
{
$TMOср($Il[$eMOАе.$рееоp],$0OA[$eMOАе.$рееоp]);


if(mc[$МIIро]<=0)
{
if(mc.$MeсНе===$НAlНc)
8;
}




if($eMOАе.$рAlНН!==-1)
{
$Oр0ol=i;

if(i==$НAlНc||!mc.$HМ0М1)
if($pАTIТ($eMOАе.$рAlНН))
{
if(i==$НAlНc&&$pMМ1)
$ММ.Event(

$ММ[$OlopT],

$ММ.$Oоolр($eMOАе.$рAlНН),

$0OрТ,

$0OрТ,
);

}
}

u=(Math.random()*2-1)*$eMOАе.$TМoсc*$eMOАе.$TМoсc*2;
$eMOАе.$TМoсc+=$eMOАе.$МHlОо;

if(mc.$eoОpА<0.5)
$HОpcl=u-Math.PI/2-$eMOАе.rotation/180*Math.PI;
else
$HОpcl=u+mc.$pМсМе+Math.PI;


mc.$lTcТl=undefined;

let sync=(mc.$MeсНе===$НAlНc&&!$00pеH&&!$0lMMpH($eMOАе));
let $рH0cНр=[

$ММ[$eТрОT],

$ММ.$Oоolр(mc[$МАТОе]),

];


for(let $0ОoHс=0;$0ОoHс<$eMOАе.$oelAe;$0ОoHс++)
{
let $TMОHp0=0;
let $eТp1OO=0;

if($pMМ1&&i!==$НAlНc&&mc.$HМ0М1)
{
if($АoМHl)
{


if(mc.$HAО1о&&mc.$HAО1о.time>getTimer()-1000)
{
if($0АO0o(mc.$HAО1о[$eТоM],mc.$HAО1о[$рHОМ],$Il[$eMOАе.$рееоp],$0OA[$eMOАе.$рееоp])||
$0АO0o(mc.$HAО1о[$eТоM],mc.$HAО1о[$рHОМ],$Il[mc.$рсOОА],$0OA[mc.$рсOОА])||
(
$0АO0o($Il[mc.$рсOОА],mc.$HAО1о[$рHОМ],$Il[mc.$рсOОА],$0OA[mc.$рсOОА])&&
$0АO0o($Il[mc.$рсOОА],mc.$HAО1о[$рHОМ],mc.$HAО1о[$eТоM],mc.$HAО1о[$рHОМ])
)
||mc[$МIIро]<=0
)
{
$HОpcl=mc.$HAО1о[$1еAe0];

var $oТО0MН=Math.min(mc.ping+$сеpМ0,400)+32;

var $c1lHо0=true;

for(var step=0;step<=$oТО0MН&&$c1lHо0;step+=16)
for(var $ееоАН=-1;$ееоАН<=1&&$c1lHо0;$ееоАН+=2)
if(step>0||$ееоАН===-1)
{
var $ОIсl1р=$НOНОН(mc.$HAО1о[$eТоM],
mc.$HAО1о[$рHОМ],
$Il[$eMOАе.$рееоp]+$OTpc1[mc.$рсOОА]*step/1000*30*$ееоАН,
$0OA[$eMOАе.$рееоp]+$IрТ0H[mc.$рсOОА]*step/1000*30*$ееоАН);
if($ОIсl1р<Math.max(60,$сеpМ0+60)+(mc[$МIIро]<=0 ? 400 : 200))
{
if(step===0||mc[$МIIро]<=0||$0АO0o($Il[$eMOАе.$рееоp],
$0OA[$eMOАе.$рееоp],
$Il[$eMOАе.$рееоp]+$OTpc1[mc.$рсOОА]*step/1000*30*$ееоАН,
$0OA[$eMOАе.$рееоp]+$IрТ0H[mc.$рсOОА]*step/1000*30*$ееоАН))
{
$TMОHp0=mc.$HAО1о[$eТоM];
$eТp1OO=mc.$HAО1о[$рHОМ];

$c1lHо0=false;
break;
}
}
}
if($c1lHо0)
{
$TMОHp0=(mc.$HAО1о[$eТоM]-$Il[$eMOАе.$рееоp])/$ОIсl1р*60+$Il[$eMOАе.$рееоp];
$eТp1OO=(mc.$HAО1о[$рHОМ]-$0OA[$eMOАе.$рееоp])/$ОIсl1р*60+$0OA[$eMOАе.$рееоp];
}
}
else
{
}

if(mc.$0IHMT>0&&mc[$МIIро]>0)
if($НOНОН(Math.sin($HОpcl),Math.cos($HОpcl),Math.sin($сНc0OМ),Math.cos($сНc0OМ))>Math.max(0.7,$сеpМ0/50*0.7))
{
$HОpcl=$сНc0OМ;
}

}
else
{
$TMОHp0=$Il[$eMOАе.$рееоp];
$eТp1OO=$0OA[$eMOАе.$рееоp];
}
}
else
{
$TMОHp0=$Il[$eMOАе.$рееоp]-mc.$TОOе0;
$eТp1OO=$0OA[$eMOАе.$рееоp]-mc.$оОТеl;
}
}
else
{
$TMОHp0=$Il[$eMOАе.$рееоp];
$eТp1OO=$0OA[$eMOАе.$рееоp];
}

let $сНc0OМ=
$HОpcl+
$eMOАе.$1MAеT/$eMOАе.$oelAe*$0ОoHс+
Math.random()*$eMOАе.$1MAеT/$eMOАе.$oelAe-$eMOАе.$1MAеT/2;

$I0cAoс($eMOАе,mc,$сНc0OМ,$TMОHp0,$eТp1OO,$рH0cНр,sync);
}



if(sync)
$ММ.Event(...$рH0cНр);

if(!$pMМ1||$ММ[$OpНpp][$M0сМТ]<3||!mc.$HМ0М1||(mc.$MeсНе===$НAlНc&&!$00pеH))
$MAНрOA(mc,$eMOАе,$HОpcl);

if($eMOАе.$1l1TO==7)
{
for($0ОoHс=0;$0ОoHс<$eсАeA;$0ОoHс++)
if($0Ме1А[$0ОoHс].io)
if($0Ме1А[$0ОoHс].$ОАpМО)
if($Il[mc.$оОlТМ]>$Il[$0Ме1А[$0ОoHс].$рсOОА]-60)
if($Il[mc.$оОlТМ]<$Il[$0Ме1А[$0ОoHс].$рсOОА]+60)
if($0OA[mc.$оОlТМ]>$0OA[$0Ме1А[$0ОoHс].$рсOОА]-40)
if($0OA[mc.$оОlТМ]<$0OA[$0Ме1А[$0ОoHс].$рсOОА]+80)
{

if(($pMМ1&&$НAlНc===mc.$MeсНе)||($pMМ1&&!$АoМHl)||!$pMМ1||!mc.$HМ0М1)
$еHТТе($0ОoHс,mc,$eMOАе[$clcре],false,$eMOАе.$MeсНе);


if($pMМ1&&$АoМHl&&$НAlНc===mc.$MeсНе)
if($0ОoHс!==$НAlНc||$0Ме1А[$НAlНc].$loАoM)
{
if($ММ[$OpНpp][$M0сМТ]<3)
MP_custom_events+=$eeеМO+[
$НAlНc,
$0ОoHс,
$eMOАе[$clcре],
false ? 1 : 0,
$eMOАе.model
].join($TlAp);
else
{
$ММ.Event(

$ММ[$ТcсМI],

$ММ.$Oоolр($eMOАе[$clcре]*$ММ.$Мссe1o),

$ММ.$Oоolр($eMOАе.$MeсНе),

$ММ.$Oоolр($0ОoHс),

$ММ.$Oоolр($0Ме1А[$0ОoHс][$рАр0T])
);
}
}
}
}

$eMOАе.ready=false;
$eMOАе.$OАMco=2;
$eMOАе.gotoAndStop(2);

if($eMOАе.$оТlс0!=null)
$оp0Нc($eMOАе.$оТlс0,$eMOАе[$eТоM],$eMOАе[$рHОМ]);

}

}


if($cреllо&&mc.$HНрНТ==-1)
if(mc.$АсIее.lower.$оАОНА.visible)
{
$HОpcl=mc.$pМсМе+Math.PI;

$llМTO=Math.cos($HОpcl);
$HОpcl=Math.sin($HОpcl);



if(!mc.stand&&$IрТ0H[mc.$рсOОА]<0&&!mc.$loАoM&&mc.$1оеМp>0)
{







$MOH01=0.33;


$MOH01*=mc.$1оеМp;

mc.$1оеМp=Math.max(0,mc.$1оеМp-0.45*$1М0оo*$MOH01);


$MOH01*=2;

$MOH01*=Math.min(1,mc.$MAНIp);


$HОpcl*=$реAАo;


mc[$АсТOе]-=$HОpcl*$MOH01*$1М0оo;
mc[$МcеAH]-=$llМTO*$MOH01*$1М0оo;



if($IТoHT())
$MOH01*=$ТМоНH;
else
$MOH01*=$AlcTM;



$OTpc1[mc.$рсOОА]-=$HОpcl*$MOH01*$1М0оo*2;
$IрТ0H[mc.$рсOОА]-=$llМTO*$MOH01*$1М0оo*2;

$OTpc1[mc.$pМHHo]-=$HОpcl*$MOH01*$1М0оo*2;
$IрТ0H[mc.$pМHHo]-=$llМTO*$MOH01*$1М0оo*2;

$OTpc1[mc.$e1IOМ]-=$HОpcl*$MOH01*$1М0оo*2;
$IрТ0H[mc.$e1IOМ]-=$llМTO*$MOH01*$1М0оo*2;

$OTpc1[mc.$оОlТМ]-=$HОpcl*$MOH01*$1М0оo;
$IрТ0H[mc.$оОlТМ]-=$llМTO*$MOH01*$1М0оo;

$OTpc1[mc.$1O1lM]-=$HОpcl*$MOH01*$1М0оo;
$IрТ0H[mc.$1O1lM]-=$llМTO*$MOH01*$1М0оo;

}


mc.$сcoМH+=0.4*$1М0оo;
mc.$сОНТH+=0.4*$1М0оo;
if(mc.$сcoМH>Math.PI*2)
{
mc.$сcoМH-=Math.PI*2;
}
if(mc.$сОНТH>Math.PI)
if(mc.$HрATo>=1)
{
mc.$сОНТH=0;

if($oТ1I1==1)
{
$оp0Нc($leTOIМ,mc[$eТоM],mc[$рHОМ]-50);
if(Math.random()>0.5)
$oТ1I1=2;
else
$oТ1I1=3;
}
else
if($oТ1I1==2)
{
$оp0Нc($lTсОIp,mc[$eТоM],mc[$рHОМ]-50);
if(Math.random()>0.5)
$oТ1I1=1;
else
$oТ1I1=3;
}
else
{
$оp0Нc($MсТНсI,mc[$eТоM],mc[$рHОМ]-50);
if(Math.random()>0.5)
$oТ1I1=1;
else
$oТ1I1=2;
}



$HOНОO($1leoI);



$IТТII[$1leoI]=game.addChildAt(new lazer,0);
$MeMe1А($IТТII[$1leoI]);
$сOoНН($IТТII[$1leoI]);

if($pMМ1&&i===$НAlНc)
{
$IТТII[$1leoI].$оAeОe1=$сеpМ0/$АТO1o*2;

$ММ.Event($ММ[$1HOA0]);
}
else
$IТТII[$1leoI].$оAeОe1=0;

if($АoМHl)
$IТТII[$1leoI].$оAeОe1=0;




mc.$lTcТl=undefined;

$IТТII[$1leoI].$еlАlM=0;


$IТТII[$1leoI][$НeHо1]=$TрTМM;

$IТТII[$1leoI].$МOIcо=6;

if(mc.$AolОо!==-1)
$IТТII[$1leoI].$МOIcо=mc.$AolОо;

$IТТII[$1leoI][$0coMM]=3;
$IТТII[$1leoI][$eТоM]=$Il[mc.$рсOОА];
$IТТII[$1leoI][$рHОМ]=$0OA[mc.$рсOОА];
$IТТII[$1leoI].$MOIрOM=$Il[mc.$рсOОА];
$IТТII[$1leoI].$1ApоpО=$0OA[mc.$рсOОА];
$IТТII[$1leoI].$МecHM=3.5*mc.scale*mc.$HрATo;
$IТТII[$1leoI].$oТоAр=1;
$IТТII[$1leoI].$соТМАc=$lАоIО[mc.$1O1lM]&&$Оcocр[$HTOОe[mc.$1O1lM]];
$IТТII[$1leoI].alpha=0;
$IТТII[$1leoI].$OOHAТ=i;
$IТТII[$1leoI].gotoAndStop(1);



$IТТII[$1leoI].$сOо01Т($Hоlрр,i);
$IТТII[$1leoI].$МО1Tрp=$T0МММ;


$IТТII[$1leoI][$eрoeе]=-$HОpcl*10*mc.scale;
$IТТII[$1leoI][$ОоНр1]=-$llМTO*10*mc.scale;

$HeI1с();

mc.$HрATo=0;
}
}
}
else
{

mc.$сcoМH+=Math.PI/2;
mc.$сОНТH=Math.PI*2+1;

if(mc.$оAAOО>0)
mc.$оAAOО-=0.4*$1М0оo;
}
}
}

mc.$ААpоTе=false;

if($pMМ1)
{
$ОHe1AO(mc.$рсOОА,-3);
$ОHe1AO(mc.$MОеМ1,-3);
$ОHe1AO(mc.$НТсМТ,-3);
$ОHe1AO(mc.$р1eНM,-3);
$ОHe1AO(mc.$оОlТМ,-3);
$ОHe1AO(mc.$1O1lM,-3);
$ОHe1AO(mc.$pМHHo,-3);
$ОHe1AO(mc.$e1IOМ,-3);
}

if(mc[$рHОМ]>$оpl1Т)
{
mc[$МIIро]=0;
mc.$НHоАH=$АAНHe;

mc.$1МI0р=$оoАсН;
}

if(!$1clсо)
{
if(mc[$рHОМ]<$lMМoc||mc[$eТоM]<$0Iеco||mc[$eТоM]>$OНсIс)
{
mc[$МIIро]=0;
mc.$НHоАH=$АAНHe;

mc.$1МI0р=$oеAIН;
}
}

for(i2=0;i2<$АТlHО;i2++)
if(mc[$eТоM]>$TpelH[i2]-150)
if(mc[$eТоM]<$сеHОp[i2]+150)
if(mc[$рHОМ]>$c0НIO[i2]-150)
if(mc[$рHОМ]<$оТТAe[i2]+240)
{

cx=Math.min($Il[mc.$НТсМТ],Math.min($Il[mc.$р1eНM],Math.min($Il[mc.$e1IOМ],Math.min($Il[mc.$рсOОА],Math.min($Il[mc.$MОеМ1])))))-10;
$HОpcl=Math.max($Il[mc.$НТсМТ],Math.max($Il[mc.$р1eНM],Math.max($Il[mc.$e1IOМ],Math.min($Il[mc.$рсOОА],Math.max($Il[mc.$MОеМ1])))))+10;

cy=Math.min($0OA[mc.$НТсМТ],Math.min($0OA[mc.$р1eНM],Math.min($0OA[mc.$e1IOМ],Math.min($0OA[mc.$рсOОА],Math.min($0OA[mc.$MОеМ1])))))-10;
$llМTO=Math.max($0OA[mc.$НТсМТ],Math.max($0OA[mc.$р1eНM],Math.max($0OA[mc.$e1IOМ],Math.min($0OA[mc.$рсOОА],Math.max($0OA[mc.$MОеМ1])))))+10;


if(!(($HОpcl<$TpelH[i2]||cx>$сеHОp[i2])||($llМTO<$c0НIO[i2]||cy>$оТТAe[i2])))

{
mc[$АсТOе]+=$AlАeT[i2]*$1М0оo;
mc[$МcеAH]+=$АeрHА[i2]*$1М0оo;
mc.$eoОpА-=$орcMА[i2]*0.01*$1М0оo;

if($ААоIH[i2]!=0&&!mc.$оeoТе)
{
if(!$pMМ1||$НAlНc==i||!mc.$HМ0М1)
{
mc[$МIIро]-=Math.abs($ААоIH[i2]*$1М0оo);
mc.$НHоАH=$АAНHe;

mc.$1МI0р=$oеAIН;
}

if($ААоIH[i2]<0)
{
u=mc[$eТоM]-20+Math.random()*40;
v=mc[$рHОМ]-Math.random()*80;

if(u<$TpelH[i2])
u=$TpelH[i2];
if(u>$сеHОp[i2])
u=$сеHОp[i2];
if(v<$c0НIO[i2])
v=$c0НIO[i2];
if(v>$оТТAe[i2])
v=$оТТAe[i2];

if(mc[$МIIро]<=0)
if(($НAlНc==i&&!$о0Мp0)||mc[$cАocе]!=$0Ме1А[$НAlНc][$cАocе])
{
if(mc.$НТcep>0)
mc.$НТcep=0;
}

$OОHMp=i;
$АATHc(u,v,0,-3+Math.random()*6,-3+Math.random()*6,5);
}

if(Math.random()>0.95||$ААоIH[i2]<0)
$оo1pO(i);
}
}
}

if(mc[$МIIро]>0)
{



mc[$eТоM]+=mc[$АсТOе]*$1М0оo;
mc[$рHОМ]+=mc[$МcеAH]*$1М0оo;

mc[$МcеAH]+=gravity*$1М0оo;

mc.stand=false;
$pНАMA=false;


if($pMМ1)
{
$ОHe1AO(mc.$рсOОА,-2);
$ОHe1AO(mc.$MОеМ1,-2);
$ОHe1AO(mc.$НТсМТ,-2);
$ОHe1AO(mc.$р1eНM,-2);
$ОHe1AO(mc.$оОlТМ,-2);
$ОHe1AO(mc.$1O1lM,-2);
$ОHe1AO(mc.$pМHHo,-2);
$ОHe1AO(mc.$e1IOМ,-2);
}



if(mc.$HНрНТ==-1)
{
if(mc.$eoОpА<0)
{

}
else

{


x4=0;
$poAрl=0;

$ТOHHМ=0;
$lHTсH=0;
rx=0;
ry=0;

$lТс1М=true;


for(i2 of $о001lO(mc[$eТоM],mc[$рHОМ]-40))
{
cx=$сАоОo[i2]-$е11oO*mc.scale;
$HОpcl=$сАоОo[i2]+$с0МAр[i2]+$е11oO*mc.scale;
cy=$o1О00[i2]+mc.sit*$р1OIe*mc.scale;
$llМTO=$o1О00[i2]+$MМрTТ[i2]+82*mc.scale;

$MOH01=$с0МAр[i2];
$MрIеО=$MМрTТ[i2];


Collision(mc,mc.$MeсНе,cx,$HОpcl,cy,$llМTO,$MOH01,$MрIеО,$lТс1М,x4,$poAрl);
}
$c1Н1А=false;
for(i2=0;i2<$сMelН;i2++)
{
x4=$АAHОе[i2][$АсТOе];
$poAрl=$АAHОе[i2][$МcеAH];
cx=$АAHОе[i2][$eТоM]-$е11oO*mc.scale;
$HОpcl=$АAHОе[i2][$eТоM]+$АAHОе[i2].w+$е11oO*mc.scale;
cy=$АAHОе[i2][$рHОМ]+mc.sit*$р1OIe*mc.scale;
$llМTO=$АAHОе[i2][$рHОМ]+$АAHОе[i2].h+82*mc.scale;

$MOH01=$АAHОе[i2].w;
$MрIеО=$АAHОе[i2].h;


Collision(mc,mc.$MeсНе,cx,$HОpcl,cy,$llМTO,$MOH01,$MрIеО,$lТс1М,x4,$poAрl);
}

{
if(($ТOHHМ==1&&rx==1)||($lHTсH==1&&ry==1))
{
if($lHTсH==1&&ry==1&&mc.sit<0.8)
{
mc.sit=1;
}
else
{
mc.$eoОpА=Math.min(-0.1,mc.$eoОpА);
}
}

if(mc.pressure>0)
mc.pressure-=1;
}






for(i2=0;i2<$ТeeAo;i2++)
{
$eMOАе=$еоНМо[i2];

if($еоНМо[i2][$МIIро]>0)
{


x4=($OTpc1[$eMOАе.$oA0cА]+$OTpc1[$eMOАе.$ATМHl])/2;
$poAрl=($IрТ0H[$eMOАе.$oA0cА]+$IрТ0H[$eMOАе.$ATМHl])/2;



cx=$eMOАе[$eТоM]-7-$е11oO*mc.scale-$сTpНО(x4)/2;
$HОpcl=$eMOАе[$eТоM]+7+$е11oO*mc.scale+$сTpНО(x4)/2;
cy=$eMOАе[$рHОМ]-15+mc.sit*$р1OIe*mc.scale-$сTpНО($poAрl)/2;
$llМTO=$eMOАе[$рHОМ]+15+82*mc.scale+$сTpНО($poAрl)/2;

$MOH01=20;
$MрIеО=30;

$lТс1М=true;


Collision(mc,mc.$MeсНе,cx,$HОpcl,cy,$llМTO,$MOH01,$MрIеО,$lТс1М,x4,$poAрl);
}
else
{
$lТс1М=false;

$MOH01=20;
$MрIеО=20;

x4=($OTpc1[$eMOАе.$oA0cА]+$OTpc1[$eMOАе.$oTсНTI])/2;
$poAрl=($IрТ0H[$eMOАе.$oA0cА]+$IрТ0H[$eMOАе.$oTсНTI])/2;
if(Math.abs(x4)+Math.abs($poAрl)>3)
{
cx=($Il[$eMOАе.$oA0cА]+$Il[$eMOАе.$oTсНTI])/2-10-$сTpНО(x4)/2;
$HОpcl=($Il[$eMOАе.$oA0cА]+$Il[$eMOАе.$oTсНTI])/2+10+$сTpНО(x4)/2;
cy=($0OA[$eMOАе.$oA0cА]+$0OA[$eMOАе.$oTсНTI])/2-10+mc.sit*$р1OIe*mc.scale-$сTpНО($poAрl)/2;
$llМTO=($0OA[$eMOАе.$oA0cА]+$0OA[$eMOАе.$oTсНTI])/2+10+82*mc.scale-$сTpНО($poAрl)/2;


Collision(mc,mc.$MeсНе,cx,$HОpcl,cy,$llМTO,$MOH01,$MрIеО,$lТс1М,x4,$poAрl);
}
x4=($OTpc1[$eMOАе.$lМeOМ]+$OTpc1[$eMOАе.$01ТМMI])/2;
$poAрl=($IрТ0H[$eMOАе.$lМeOМ]+$IрТ0H[$eMOАе.$01ТМMI])/2;
if(Math.abs(x4)+Math.abs($poAрl)>3)
{
cx=($Il[$eMOАе.$lМeOМ]+$Il[$eMOАе.$01ТМMI])/2-10-$сTpНО(x4)/2;
$HОpcl=($Il[$eMOАе.$lМeOМ]+$Il[$eMOАе.$01ТМMI])/2+10+$сTpНО(x4)/2;
cy=($0OA[$eMOАе.$lМeOМ]+$0OA[$eMOАе.$01ТМMI])/2-10+mc.sit*$р1OIe*mc.scale-$сTpНО($poAрl)/2;
$llМTO=($0OA[$eMOАе.$lМeOМ]+$0OA[$eMOАе.$01ТМMI])/2+10+82*mc.scale+$сTpНО($poAрl)/2;


Collision(mc,mc.$MeсНе,cx,$HОpcl,cy,$llМTO,$MOH01,$MрIеО,$lТс1М,x4,$poAрl);
}
}
}



{
for($0ОoHс=0;$0ОoHс<$TТlАM;$0ОoHс++)
if($сoopT[$0ОoHс].io)

if(($сoopT[$0ОoHс].$eрlсe!=3||($сoopT[$0ОoHс].$eрlсe==3&&!$сoopT[$0ОoHс].$оeoТе))&&$сoopT[$0ОoHс].$eрlсe!=2)
{
$lТс1М=true;

if($сoopT[$0ОoHс].$eрlсe==4||$сoopT[$0ОoHс].$eрlсe==7)
for($AMTT1=0;$AMTT1<2;$AMTT1++)
{
if($AMTT1==0)
i2=$сoopT[$0ОoHс].b_c;
if($AMTT1==1)
i2=$сoopT[$0ОoHс].b_c1;

x4=$OTpc1[i2];
$poAрl=$IрТ0H[i2];

cx=$Il[i2]-$оОlHT[i2]-$е11oO*mc.scale-$сTpНО(x4);
$HОpcl=$Il[i2]+$оОlHT[i2]+$е11oO*mc.scale+$сTpНО(x4);
cy=$0OA[i2]-$оОlHT[i2]+mc.sit*$р1OIe*mc.scale-$сTpНО($poAрl);
$llМTO=$0OA[i2]+$оОlHT[i2]+82*mc.scale+$сTpНО($poAрl);

$MOH01=$оОlHT[i2]*2;
$MрIеО=$оОlHT[i2]*2;




Collision(mc,mc.$MeсНе,cx,$HОpcl,cy,$llМTO,$MOH01,$MрIеО,$lТс1М,x4,$poAрl);
}
if($сoopT[$0ОoHс].$eрlсe==3)
{
i2=$сoopT[$0ОoHс].b_c;

x4=$OTpc1[i2];
$poAрl=$IрТ0H[i2];

cx=$Il[i2]-$оОlHT[i2]-$е11oO*mc.scale-$сTpНО(x4);
$HОpcl=$Il[i2]+$оОlHT[i2]+$е11oO*mc.scale+$сTpНО(x4);
cy=$0OA[i2]-$оОlHT[i2]+mc.sit*$р1OIe*mc.scale-$сTpНО($poAрl);
$llМTO=$0OA[i2]+$оОlHT[i2]+82*mc.scale+$сTpНО($poAрl);

$MOH01=$оОlHT[i2]*2;
$MрIеО=$оОlHT[i2]*2;


Collision(mc,mc.$MeсНе,cx,$HОpcl,cy,$llМTO,$MOH01,$MрIеО,$lТс1М,x4,$poAрl);
}
if($сoopT[$0ОoHс].$eрlсe==0)
for($AMTT1=0;$AMTT1<7;$AMTT1++)
{
if($AMTT1==0)
i2=$сoopT[$0ОoHс].$MpoсеM;
if($AMTT1==1)
i2=$сoopT[$0ОoHс].$МНIppО;
if($AMTT1==2)
i2=$сoopT[$0ОoHс].b_c;
if($AMTT1==3)
i2=$сoopT[$0ОoHс].b_c2;
if($AMTT1==4)
i2=$сoopT[$0ОoHс].b_c3;
if($AMTT1==5)
i2=$сoopT[$0ОoHс].$ТA0OОl;
if($AMTT1==6)
i2=$сoopT[$0ОoHс].$оlНАMо;

x4=$OTpc1[i2];
$poAрl=$IрТ0H[i2];

cx=$Il[i2]-$оОlHT[i2]-$е11oO*mc.scale-$сTpНО(x4);
$HОpcl=$Il[i2]+$оОlHT[i2]+$е11oO*mc.scale+$сTpНО(x4);
cy=$0OA[i2]-$оОlHT[i2]+mc.sit*$р1OIe*mc.scale-$сTpНО($poAрl);
$llМTO=$0OA[i2]+$оОlHT[i2]+82*mc.scale+$сTpНО($poAрl);

$MOH01=$оОlHT[i2]*2;
$MрIеО=$оОlHT[i2]*2;


Collision(mc,mc.$MeсНе,cx,$HОpcl,cy,$llМTO,$MOH01,$MрIеО,$lТс1М,x4,$poAрl);
}
if($сoopT[$0ОoHс].$eрlсe==1)
for($AMTT1=0;$AMTT1<7;$AMTT1++)
{
if($AMTT1==0)
i2=$сoopT[$0ОoHс].$MpoсеM;
if($AMTT1==1)
i2=$сoopT[$0ОoHс].$МНIppО;
if($AMTT1==2)
i2=$сoopT[$0ОoHс].$c0НlТ;
if($AMTT1==3)
i2=$сoopT[$0ОoHс].$рееоp;
if($AMTT1==4)
i2=$сoopT[$0ОoHс].$0poolе;
if($AMTT1==5)
i2=$сoopT[$0ОoHс].$ТA0OОl;
if($AMTT1==6)
i2=$сoopT[$0ОoHс].$оlНАMо;

x4=$OTpc1[i2];
$poAрl=$IрТ0H[i2];

cx=$Il[i2]-$оОlHT[i2]-$е11oO*mc.scale-$сTpНО(x4)/2;
$HОpcl=$Il[i2]+$оОlHT[i2]+$е11oO*mc.scale+$сTpНО(x4)/2;
cy=$0OA[i2]-$оОlHT[i2]+mc.sit*$р1OIe*mc.scale-$сTpНО($poAрl)/2;
$llМTO=$0OA[i2]+$оОlHT[i2]+82*mc.scale+$сTpНО($poAрl)/2;

$MOH01=$оОlHT[i2]*2;
$MрIеО=$оОlHT[i2]*2;


Collision(mc,mc.$MeсНе,cx,$HОpcl,cy,$llМTO,$MOH01,$MрIеО,$lТс1М,x4,$poAрl);
}
}
}

if($c1Н1А)
if(($ТOHHМ==1&&rx==1)||($lHTсH==1&&ry==1))
{
mc.$eoОpА=Math.min(-0.1,mc.$eoОpА);
}

}
}

mc.$соТМАc=false;
var $0с0Мlс=true;

for(i2=0;i2<$оTolТ&&!mc.$соТМАc;i2++)
if($Il[mc.$MОеМ1]>$ММoОo[i2]-10)
if($Il[mc.$MОеМ1]<$ММoОo[i2]+$р1lMр[i2]+10)
if($0OA[mc.$MОеМ1]>$11ТоО[i2]-10)
if($0OA[mc.$MОеМ1]<$11ТоО[i2]+$coТНp[i2]+40)
{
mc.$соТМАc=true;

$0с0Мlс=$Оcocр[i2];

if($0OA[mc.$MОеМ1]<$11ТоО[i2]+mc.sit*$р1OIe+50&&$0oеcН($Il[mc.$MОеМ1],$11ТоО[i2]-10))
mc.stand=true;
else
mc.stand=false;

if(!$pMМ1||!mc.$HМ0М1||$НAlНc==i)
if(mc.$eoОpА>-0.1)
mc.$eoОpА=-0.1;

if($lcAHМ[i2]>0)
{
if(!$pMМ1||$НAlНc==i||!mc.$HМ0М1)
{

mc[$МIIро]-=$lcAHМ[i2]*$1М0оo;

mc.$НHоАH=$АAНHe;

mc.$1МI0р=$1сс0М;
}

mc.$llIее=0;

if(Math.random()>0.95)
$оo1pO(i);
if(i==$НAlНc)
{
$1ОHоОА(-1,0,$lcAHМ[i2]/4*$1М0оo);
$1ОHоОА(1,0,$lcAHМ[i2]/4*$1М0оo);
$1ОHоОА(0,-1,$lcAHМ[i2]/4*$1М0оo);
$1ОHоОА(0,1,$lcAHМ[i2]/4*$1М0оo);
}
}
}
if($pMМ1)
{
$ОHe1AO(mc.$рсOОА,-1);
$ОHe1AO(mc.$MОеМ1,-1);
$ОHe1AO(mc.$НТсМТ,-1);
$ОHe1AO(mc.$р1eНM,-1);
$ОHe1AO(mc.$оОlТМ,-1);
$ОHe1AO(mc.$1O1lM,-1);
$ОHe1AO(mc.$pМHHo,-1);
$ОHe1AO(mc.$e1IOМ,-1);
}



if((mc.$eoОpА>-0.1&&mc.$HМ0М1)||mc.$eoОpА>=0.3||mc.$соТМАc)
if(!mc.$loАoM)
{
if(mc[$lо0HH]>mc[$eТоM])
mc.$ееоАН=1;
else
mc.$ееоАН=-1;
}


if(mc.$HМ0М1&&i!==$НAlНc&&!$АoМHl)
{
if(!$0АO0o($Il[mc.$рееоp],$0OA[mc.$рееоp],$Il[mc.$рееоp]-mc.$TОOе0,$0OA[mc.$рееоp]-mc.$оОТеl))

{
mc.$TОOе0=0;
mc.$оОТеl=0;
}
mc.$pМсМе=Math.atan2(mc[$lо0HH]-$Il[mc.$рсOОА]+mc.$TОOе0,mc[$еоOOА]-$0OA[mc.$рсOОА]+mc.$оОТеl);

}
else
mc.$pМсМе=Math.atan2(mc[$lо0HH]-$Il[mc.$рсOОА],mc[$еоOOА]-$0OA[mc.$рсOОА]);


if(mc.$eoОpА>0)
{

if(mc.$eoОpА<0.2)
{
mc.sit=1;





mc[$eТоM]=$Il[mc.$MОеМ1]*(1-mc.$eoОpА)+mc[$eТоM]*mc.$eoОpА;

mc[$рHОМ]=($0OA[mc.$MОеМ1]+(mc.sit*$р1OIe+10)*mc.scale)*(1-mc.$eoОpА)+mc[$рHОМ]*mc.$eoОpА;
}

if($pMМ1)
{
$ОHe1AO(mc.$рсOОА,100);
$ОHe1AO(mc.$MОеМ1,100);
$ОHe1AO(mc.$НТсМТ,100);
$ОHe1AO(mc.$р1eНM,100);
$ОHe1AO(mc.$оОlТМ,100);
$ОHe1AO(mc.$1O1lM,100);
$ОHe1AO(mc.$pМHHo,100);
$ОHe1AO(mc.$e1IOМ,100);
}

if($рOНpе)
for(i2=0;i2<$eсАeA;i2++)
if(i2!=i)
if($0Ме1А[i2].io)
{
$eMOАе=$0Ме1А[i2];
if($eMOАе[$cАocе]!=mc[$cАocе]||mc[$cАocе]>0||$eMOАе[$cАocе]>0)
if($eMOАе.$eoОpА>0)
if($eMOАе[$МIIро]>0)

if(mc[$eТоM]+10*mc.scale>$eMOАе[$eТоM]-20*$eMOАе.scale)
if(mc[$eТоM]-10*mc.scale<$eMOАе[$eТоM]+20*$eMOАе.scale)
if(mc[$рHОМ]-mc.sit*$р1OIe*mc.scale>$eMOАе[$рHОМ]-82*$eMOАе.scale)
if(mc[$рHОМ]-82*mc.scale<$eMOАе[$рHОМ]-$eMOАе.sit*$р1OIe*$eMOАе.scale)
{

cx=$сTpНО($eMOАе[$eТоM]-mc[$eТоM])*2.5;
cy=$сTpНО($eMOАе[$рHОМ]-mc[$рHОМ]);

if(mc[$рHОМ]<$eMOАе[$рHОМ]-82*$eMOАе.scale+mc.sit*$р1OIe*mc.scale+32)
{
cx=0;
cy=1;
}
if(cx>cy)
{

u=(mc[$eТоM]+$eMOАе[$eТоM])/2;
v=(mc[$АсТOе]*mc.$MAНIp+$eMOАе[$АсТOе]*$eMOАе.$MAНIp)/Math.max(1,mc.$MAНIp+$eMOАе.$MAНIp);
if(mc[$eТоM]<$eMOАе[$eТоM])
{
mc[$eТоM]=u-15;
$eMOАе[$eТоM]=u+15;

mc[$АсТOе]=v-0.1;
$eMOАе[$АсТOе]=v+0.1;
}
else
{
$eMOАе[$eТоM]=u-15;
mc[$eТоM]=u+15;

$eMOАе[$АсТOе]=v-0.1;
mc[$АсТOе]=v+0.1;
}
}
else
{

u=(mc[$рHОМ]-(82-mc.sit*$р1OIe)*mc.scale/2+$eMOАе[$рHОМ]-(82-$eMOАе.sit*$р1OIe)*$eMOАе.scale/2)/2;
v=(mc[$МcеAH]*mc.$MAНIp+$eMOАе[$МcеAH]*$eMOАе.$MAНIp)/Math.max(1,mc.$MAНIp+$eMOАе.$MAНIp);


if(mc[$рHОМ]<$eMOАе[$рHОМ])
{
if(mc[$МcеAH]>=$eMOАе[$МcеAH])
{
mc[$рHОМ]=u+mc.sit*$р1OIe/2*mc.scale;

if(!$eMOАе.stand)
$eMOАе[$рHОМ]=u+82*$eMOАе.scale-mc.sit*$р1OIe/2*mc.scale;

mc[$МcеAH]=v;
$eMOАе[$МcеAH]=v;

if(!mc.stand)
{
mc.stand=true;

x4=$eMOАе[$АсТOе];











mc[$АсТOе]+=(x4/6-mc[$АсТOе]*1/6)*$1М0оo;

if(mc[$АсТOе]>x4+0.5*3*$1М0оo)
mc[$АсТOе]-=0.5*3*$1М0оo;
else
if(mc[$АсТOе]<x4-0.5*3*$1М0оo)
mc[$АсТOе]+=0.5*3*$1М0оo;
else
mc[$АсТOе]=x4;
}
}
}
else
{
if(mc[$МcеAH]<=$eMOАе[$МcеAH])
{
$eMOАе[$рHОМ]=u+$eMOАе.sit*$р1OIe/2;

if(!mc.stand)
mc[$рHОМ]=u+82-$eMOАе.sit*$р1OIe/2;

$eMOАе[$МcеAH]=v;
mc[$МcеAH]=v;

if(!$eMOАе.stand)
{
$eMOАе.stand=true;

x4=mc[$АсТOе];











$eMOАе[$АсТOе]+=(x4/6-$eMOАе[$АсТOе]*1/6)*$1М0оo;

if($eMOАе[$АсТOе]>x4+0.5*3*$1М0оo)
$eMOАе[$АсТOе]-=0.5*3*$1М0оo;
else
if($eMOАе[$АсТOе]<x4-0.5*3*$1М0оo)
$eMOАе[$АсТOе]+=0.5*3*$1М0оo;
else
$eMOАе[$АсТOе]=x4;
}
}
}








}

}
}

if($pMМ1)
{
$ОHe1AO(mc.$рсOОА,110);
$ОHe1AO(mc.$MОеМ1,110);
$ОHe1AO(mc.$НТсМТ,110);
$ОHe1AO(mc.$р1eНM,110);
$ОHe1AO(mc.$оОlТМ,110);
$ОHe1AO(mc.$1O1lM,110);
$ОHe1AO(mc.$pМHHo,110);
$ОHe1AO(mc.$e1IOМ,110);
}

if(mc[$АсТOе]/mc.scale*mc[$АсТOе]/mc.scale+mc[$МcеAH]/mc.scale*mc[$МcеAH]/mc.scale>400)
{
if(mc.$eoОpА>0)

mc.$eoОpА*=Math.pow(0.9,$1М0оo);
mc.$eoОpА-=0.05*$1М0оo;
}

if(mc.$TНесe==1||(!mc.stand&&(!$pMМ1||($НAlНc!=i||!mc.$HМ0М1)))||$pНАMA)
{


if(mc.sit<1)
{
mc.sit+=gravity/$р1OIe*$1М0оo*5;

if(mc.stand)
if(mc.$eoОpА>=0)
mc[$рHОМ]+=gravity*$1М0оo*5;
}

if(mc.sit>1)
mc.sit=1;
}
else
{
if(mc.sit>0)
mc.sit-=0.3*$1М0оo;
if(mc.sit<0)
mc.sit=0;
}

if($pMМ1)
{
$ОHe1AO(mc.$рсOОА,120);
$ОHe1AO(mc.$MОеМ1,120);
$ОHe1AO(mc.$НТсМТ,120);
$ОHe1AO(mc.$р1eНM,120);
$ОHe1AO(mc.$оОlТМ,120);
$ОHe1AO(mc.$1O1lM,120);
$ОHe1AO(mc.$pМHHo,120);
$ОHe1AO(mc.$e1IOМ,120);
}

mc.waiting+=0.1*$1М0оo;
if(mc.waiting>Math.PI*2)
mc.waiting-=Math.PI*2;


if($pMМ1)
{
$ОHe1AO(mc.$рсOОА,121);
$ОHe1AO(mc.$MОеМ1,121);
$ОHe1AO(mc.$НТсМТ,121);
$ОHe1AO(mc.$р1eНM,121);
$ОHe1AO(mc.$оОlТМ,121);
$ОHe1AO(mc.$1O1lM,121);
$ОHe1AO(mc.$pМHHo,121);
$ОHe1AO(mc.$e1IOМ,121);
}

$ОOАTрА(mc.$MОеМ1,mc[$eТоM],mc[$рHОМ]+(-31-3)*mc.scale,mc,0.2+0.6*mc.$eoОpА);

if($pMМ1)
{
$ОHe1AO(mc.$рсOОА,122);
$ОHe1AO(mc.$MОеМ1,122);
$ОHe1AO(mc.$НТсМТ,122);
$ОHe1AO(mc.$р1eНM,122);
$ОHe1AO(mc.$оОlТМ,122);
$ОHe1AO(mc.$1O1lM,122);
$ОHe1AO(mc.$pМHHo,122);
$ОHe1AO(mc.$e1IOМ,122);
}





$ОOАTрА(mc.$рсOОА,$Il[mc.$MОеМ1]+mc[$АсТOе]*1+Math.sin(mc.waiting)*mc.scale,mc[$рHОМ]+(-31-3-$1ерТc+$TОOАН+mc.sit*7)*mc.scale,mc,0.1+0.6*mc.$eoОpА);


if($pMМ1)
{
$ОHe1AO(mc.$рсOОА,123);
$ОHe1AO(mc.$MОеМ1,123);
$ОHe1AO(mc.$НТсМТ,123);
$ОHe1AO(mc.$р1eНM,123);
$ОHe1AO(mc.$оОlТМ,123);
$ОHe1AO(mc.$1O1lM,123);
$ОHe1AO(mc.$pМHHo,123);
$ОHe1AO(mc.$e1IOМ,123);
}

if(mc.$рoeсl)
$HОpcl=2;
else
$HОpcl=0;




















$ОOАTрА(mc.$pМHHo,$Il[mc.$рсOОА]+mc[$АсТOе]*0.3+mc.$ееоАН*$HОpcl*mc.scale,
$0OA[mc.$рсOОА]-$TОOАН*mc.scale,
mc,0.1+0.8*mc.$eoОpА);

$ОOАTрА(mc.$e1IOМ,$Il[mc.$рсOОА]+mc[$АсТOе]*0.3+(-Math.sin(mc.$pМсМе-Math.PI/2)*mc.$ееоАН*5+mc.$ееоАН*$HОpcl)*mc.scale,

$0OA[mc.$рсOОА]+(-$TОOАН-9-Math.cos(mc.$pМсМе-Math.PI/2)*5*mc.$ееоАН)*mc.scale,
mc,0.1+0.8*mc.$eoОpА);


if($pMМ1)
{
$ОHe1AO(mc.$рсOОА,1);
$ОHe1AO(mc.$MОеМ1,1);
$ОHe1AO(mc.$НТсМТ,1);
$ОHe1AO(mc.$р1eНM,1);
$ОHe1AO(mc.$оОlТМ,1);
$ОHe1AO(mc.$1O1lM,1);
$ОHe1AO(mc.$pМHHo,1);
$ОHe1AO(mc.$e1IOМ,1);
}

if(mc.$AМIМ1==1)
mc.$еМIMО=1*Math.min((mc.$MAНIp+1)/2,2)*mc.scale;
else
if(mc.$AМIМ1==-1)
mc.$еМIMО=-1*Math.min((mc.$MAНIp+1)/2,2)*mc.scale;
else
mc.$еМIMО=0;




if(mc[$МАТОе]==-1&&mc.$HМ0М1)
{
mc.$еМIMО*=1.1;

}


if(mc.$eoОpА<0.5)
{
mc.$еМIMО*=0.4;

}








if(mc.stand)
{
if(mc.$еМIMО==0)
mc.$AА11с+=Math.sin(mc.$AА11с-0.3)*0.5*$1М0оo;

if(mc.sit==0)
{
$HОpcl=(1-mc.$eoОpА)*10;
$ОOАTрА(mc.$НТсМТ,mc[$eТоM]+(+$HОpcl+Math.sin(mc.$AА11с)*13)*mc.scale,mc[$рHОМ]+(-3+Math.cos(mc.$AА11с)*5*$сTpНО(mc.$еМIMО/mc.scale)*2-mc.sit*$р1OIe)*mc.scale,mc,0.4+0.2*mc.$eoОpА);
$ОOАTрА(mc.$р1eНM,mc[$eТоM]+(-$HОpcl-Math.sin(mc.$AА11с)*13)*mc.scale,mc[$рHОМ]+(-3-Math.cos(mc.$AА11с)*5*$сTpНО(mc.$еМIMО/mc.scale)*2-mc.sit*$р1OIe)*mc.scale,mc,0.4+0.2*mc.$eoОpА);
}
else
{
$0ОoHс=mc.$р1eНM;
i2=mc.$НТсМТ;
if($Il[mc.$НТсМТ]*mc.$ееоАН>$Il[mc.$р1eНM]*mc.$ееоАН)
{
$0ОoHс=mc.$НТсМТ;
i2=mc.$р1eНM;
}
if(mc.$AМIМ1==0)
{
$ОOАTрА($0ОoHс,mc[$eТоM]+mc.$ееоАН*15*mc.scale,mc[$рHОМ]+(-3-mc.sit*$р1OIe)*mc.scale,mc,0.4+0.2*mc.$eoОpА);
$ОOАTрА(i2,mc[$eТоM]-mc.$ееоАН*15*mc.scale,mc[$рHОМ]+(-3-mc.sit*$р1OIe)*mc.scale,mc,0.4+0.2*mc.$eoОpА);
}
else
{
$ОOАTрА($0ОoHс,mc[$eТоM]+(+Math.sin(mc.$AА11с)*10+mc.$ееоАН*10)*mc.scale,mc[$рHОМ]+(-3+Math.min(Math.cos(mc.$AА11с),0)*5*$сTpНО(mc.$еМIMО/mc.scale)-mc.sit*$р1OIe)*mc.scale,mc,0.4+0.2*mc.$eoОpА);
$ОOАTрА(i2,mc[$eТоM]+(-Math.sin(mc.$AА11с)*10-mc.$ееоАН*5)*mc.scale,mc[$рHОМ]+(-3-Math.min(Math.cos(mc.$AА11с),0)*5*$сTpНО(mc.$еМIMО/mc.scale)-mc.sit*$р1OIe)*mc.scale,mc,0.4+0.2*mc.$eoОpА);
}
}


if(mc.$TНесe==-1&&!$pНАMA)
{
mc[$МcеAH]=-8*mc.$eoОpА*Math.min((mc.$MAНIp+1)/2,2)*mc.scale*mc.$рOpMe;


mc[$рHОМ]-=1;



if(mc[$МАТОе]==-1&&mc.$HМ0М1)
{
mc[$МcеAH]-=2*mc.scale*mc.$рOpMe;
}

if((mc.$еМIMО>0&&mc[$АсТOе]>0.3)||(mc.$еМIMО<0&&mc[$АсТOе]<-0.3))
{
mc[$АсТOе]+=mc.$еМIMО*mc.scale*mc.$рOpMe;
}

$ОOАTрА(mc.$НТсМТ,mc[$eТоM]+(-mc[$АсТOе]-5)*mc.scale,mc[$рHОМ],mc,mc.$eoОpА);
$ОOАTрА(mc.$р1eНM,mc[$eТоM]+(-mc[$АсТOе]+5)*mc.scale,mc[$рHОМ],mc,mc.$eoОpА);
}
if(mc.$еМIMО!=0)
{
mc.$AА11с-=0.2*(2-mc.sit*0.75)*mc.$еМIMО/mc.scale*$1М0оo;

mc[$АсТOе]+=mc.$еМIMО*(2-mc.sit*0.75)/2*3*$1М0оo;

mc.$сlОI0-=0.2*(2-mc.sit*0.75)*mc.$еМIMО/mc.scale*$1М0оo;

if(mc.$сlОI0>Math.PI||mc.$сlОI0<-Math.PI)
{
if(mc.$сlОI0>0)
mc.$сlОI0-=Math.PI;
else
mc.$сlОI0+=Math.PI;

if(mc.sit==0)
{
$0ОoHс=parseInt(Math.random()*4);
if(mc[$0OАс]==2)
{
if($0ОoHс==0)
$оp0Нc($lHeОAe,mc[$eТоM],mc[$рHОМ]);
else
if($0ОoHс==1)
$оp0Нc($о0HepO,mc[$eТоM],mc[$рHОМ]);
else
if($0ОoHс==2)
$оp0Нc($сpН0Oо,mc[$eТоM],mc[$рHОМ]);
else
if($0ОoHс==3)
$оp0Нc($0ТIАIН,mc[$eТоM],mc[$рHОМ]);
}
else
{
if($0ОoHс==0)
$оp0Нc($AceсoМ,mc[$eТоM],mc[$рHОМ]);
else
if($0ОoHс==1)
$оp0Нc($1IpоoO,mc[$eТоM],mc[$рHОМ]);
else
if($0ОoHс==2)
$оp0Нc($НlppА1,mc[$eТоM],mc[$рHОМ]);
else
if($0ОoHс==3)
$оp0Нc($осIсl0,mc[$eТоM],mc[$рHОМ]);
}
}
}
}
}
else
{

u=(+mc[$АсТOе]/mc.scale*2+mc[$АсТOе]/mc.scale*3)*(mc[$МcеAH]/mc.scale+5)*0.1;
v=-15+(mc[$МcеAH]/mc.scale+5)*2+31;
$eОeМо=$Н1еHl(u,v);
if($eОeМо>31)
{
u/=$eОeМо/31;
v/=$eОeМо/31;
}

$ОOАTрА(mc.$НТсМТ,mc[$eТоM]+u*mc.scale,mc[$рHОМ]+(-31+v)*mc.scale,mc,0.8*mc.$eoОpА);

u=(-mc[$АсТOе]/mc.scale*1+mc[$АсТOе]/mc.scale*3)*mc[$МcеAH]/mc.scale*0.1;
v=-10+31;
$eОeМо=$Н1еHl(u,v);
if($eОeМо>31)
{
u/=$eОeМо/31;
v/=$eОeМо/31;
}

$ОOАTрА(mc.$р1eНM,mc[$eТоM]+u*mc.scale,mc[$рHОМ]+(-31+v)*mc.scale,mc,0.8*mc.$eoОpА);


if(mc[$АсТOе]*mc.$еМIMО<3)
mc[$АсТOе]+=mc.$еМIMО*0.4*$1М0оo;

}

}
else
{
mc[$eТоM]=$Il[mc.$MОеМ1];
mc[$рHОМ]=($0OA[mc.$НТсМТ]+$0OA[mc.$р1eНM])/2;
mc.sit=1;
mc[$АсТOе]=$OTpc1[mc.$MОеМ1];
mc[$МcеAH]=$IрТ0H[mc.$MОеМ1];
}


if($pMМ1)
{
$ОHe1AO(mc.$рсOОА,2);
$ОHe1AO(mc.$MОеМ1,2);
$ОHe1AO(mc.$НТсМТ,2);
$ОHe1AO(mc.$р1eНM,2);
$ОHe1AO(mc.$оОlТМ,2);
$ОHe1AO(mc.$1O1lM,2);
$ОHe1AO(mc.$pМHHo,2);
$ОHe1AO(mc.$e1IOМ,2);
}
if(mc[$МIIро]>0)
{
var $lHIOНА=false;
for(var e=0;e<mc.effects.length;e++)
{
var ef=mc.effects[e];
if(ef[$clе0р]===$1oMс)
{
$lHIOНА=true;

mc[$МIIро]-=ef.$МecHM*$1М0оo;

if(Math.random()>0.95)
$оo1pO(i);

ef.duration-=$1М0оo;

if(ef.duration<=0||mc[$МIIро]<=0)
{
$оo1pO(i);

mc.effects.splice(e,1);
e--;
continue;
}
}
}
var $сTс0eс=1;
if($lHIOНА)
$сTс0eс=2;
if(mc.gui.currentFrame!==$сTс0eс)
mc.gui.gotoAndStop($сTс0eс);

if(mc.$loАoM)
{
if(mc.$соТМАc)
if($0с0Мlс)
if(Math.random()>0.8)
$р00Ap($Il[mc.$pМHHo],$0OA[mc.$pМHHo],2,0,0);


if(mc.$HМ0М1)
{
mc[$МIIро]-=0.1*$1М0оo;

if($cАpОр!==$ММ.$ОeрoT)
if($IcеНе===$ММ.$eHTНT)
if(mc[$МIIро]<1)
mc[$МIIро]=1;
}
else
{
if(mc[$cАocе]==$0Ме1А[$НAlНc][$cАocе])
{
if(mc[$eТоM]<$0Ме1А[$НAlНc][$eТоM]-600||mc[$eТоM]>$0Ме1А[$НAlНc][$eТоM]+600||mc[$рHОМ]<$0Ме1А[$НAlНc][$рHОМ]-600||mc[$рHОМ]>$0Ме1А[$НAlНc][$рHОМ]+600)
mc[$МIIро]-=0.01*$1М0оo;
}
else
mc[$МIIро]-=0.05*$1М0оo;
}

if(mc.$eoОpА>-0.2)
mc.$eoОpА=-0.2;


{

$OTpc1[mc.$MОеМ1]-=mc.$ееоАН*0.2*$1М0оo;
$OTpc1[mc.$НТсМТ]+=mc.$ееоАН*0.1*$1М0оo;
$OTpc1[mc.$р1eНM]+=mc.$ееоАН*0.1*$1М0оo;

$IрТ0H[mc.$рсOОА]-=0.8*$1М0оo;
$IрТ0H[mc.$MОеМ1]+=0.8*$1М0оo;

$IрТ0H[mc.$e1IOМ]-=(0.7-0.5-Math.sin(mc[$МIIро]*0.3))*$1М0оo;
$IрТ0H[mc.$MОеМ1]+=(0.7-0.5-Math.sin(mc[$МIIро]*0.3))*$1М0оo;

$OTpc1[mc.$рсOОА]+=mc.$ееоАН*0.2*$1М0оo;

$OTpc1[mc.$оОlТМ]+=Math.sin(mc[$МIIро]*0.9)*0.7*mc.$ееоАН*$1М0оo;
$IрТ0H[mc.$оОlТМ]+=Math.cos(mc[$МIIро]*0.9)*0.4*$1М0оo;


$OTpc1[mc.$1O1lM]-=Math.sin(mc[$МIIро]*0.9)*0.7*mc.$ееоАН*$1М0оo;
$IрТ0H[mc.$1O1lM]-=Math.cos(mc[$МIIро]*0.9)*0.4*$1М0оo;

$IрТ0H[mc.$MОеМ1]+=Math.cos(mc[$МIIро]*0.9)*0.8*$1М0оo;

if($0OA[mc.$рсOОА]>$0OA[mc.$НТсМТ]-20)
if($0OA[mc.$рсOОА]>$0OA[mc.$р1eНM]-20)
{
if($Il[mc.$рсOОА]>$Il[mc.$MОеМ1])
mc.$ееоАН=1;
else
mc.$ееоАН=-1;
}
}




}
else
{
if(mc[$cАocе]===$0Ме1А[$НAlНc][$cАocе]||mc.$HМ0М1)
{
{
mc.$ААНММ=Math.max(mc[$МIIро]*0.9-30,mc.$ААНММ);
mc.$НТcep=Math.max(mc[$МIIро]*0.9-30,mc.$НТcep);
mc.$HAрH1=Math.max(mc[$МIIро]*0.9-30,mc.$HAрH1);
mc.$lMIсo=Math.max(mc[$МIIро]*0.9-30,mc.$lMIсo);
}
}
else
if($OАМАO)
{

{
mc.$ААНММ=(Math.max(mc[$МIIро]*0.9-30,mc.$ААНММ)+mc.$ААНММ*20)/21;
mc.$НТcep=(Math.max(mc[$МIIро]*0.9-30,mc.$НТcep)+mc.$НТcep*20)/21;
mc.$HAрH1=(Math.max(mc[$МIIро]*0.9-30,mc.$HAрH1)+mc.$HAрH1*20)/21;
mc.$lMIсo=(Math.max(mc[$МIIро]*0.9-30,mc.$lMIсo)+mc.$lMIсo*20)/21;
}

}
}

{



















$0Н0Тl(mc.$рсOОА);
$0Н0Тl(mc.$MОеМ1);
$0Н0Тl(mc.$НТсМТ);
$0Н0Тl(mc.$р1eНM);
$0Н0Тl(mc.$оОlТМ);
$0Н0Тl(mc.$1O1lM);
$0Н0Тl(mc.$pМHHo);
$0Н0Тl(mc.$e1IOМ);

if($pMМ1)
{
$ОHe1AO(mc.$рсOОА,3);
$ОHe1AO(mc.$MОеМ1,3);
$ОHe1AO(mc.$НТсМТ,3);
$ОHe1AO(mc.$р1eНM,3);
$ОHe1AO(mc.$оОlТМ,3);
$ОHe1AO(mc.$1O1lM,3);
$ОHe1AO(mc.$pМHHo,3);
$ОHe1AO(mc.$e1IOМ,3);
}
}
}

if(mc.$eoОpА>-1)
{

$HОpcl=0.8;
if(mc.$eoОpА>0||mc.$соТМАc)
$HОpcl=1;

if(mc.$loАoM)
{
if(mc.$HМ0М1)

$HОpcl*=0.9;
else

$HОpcl*=0.7;
}

if($1oOоI&&i==$НAlНc)
{
$ОOАTрА(mc.$1O1lM,$Il[mc.$рсOОА]+Math.sin(mc.$pМсМе+mc.$ееоАН*0.2)*30*mc.scale,$0OA[mc.$рсOОА]+Math.cos(mc.$pМсМе+mc.$ееоАН*0.2)*30*mc.scale,mc,1);
if(mc.$оAAOО<1)
mc.$оAAOО=1;

u=$НOНОН($Il[mc.$1O1lM],$0OA[mc.$1O1lM],mc[$lо0HH],mc[$еоOOА]);


if(u<70)
{

}
if(u>$c0TMO)
u=$c0TMO;




if($TpОcA!=-1)
if($AМlоН[$TpОcA]==true||$AМlоН[$TpОcA]==false)
if($ocTAТ||$МАрМcl($Il[mc.$1O1lM],$0OA[mc.$1O1lM],$Il[$TpОcA],$0OA[$TpОcA]))
if($НOНОН($OTpc1[mc.$рсOОА],$IрТ0H[mc.$рсOОА],$OTpc1[$TpОcA],$IрТ0H[$TpОcA])<8||$Н1еHl($OTpc1[mc.$рсOОА],$IрТ0H[mc.$рсOОА])<8)
if(u<$c0TMO+50)
{
if(u<10)
u=10;

cx=$Il[mc.$1O1lM]+Math.sin(mc.$pМсМе)*u;
cy=$0OA[mc.$1O1lM]+Math.cos(mc.$pМсМе)*u;
cx=(cx-$Il[$TpОcA])/u*4;
cy=(cy-$0OA[$TpОcA])/u*4;
u=$НOНОН(cx,cy,0,0);

{
if(u<50)
u=50;




cx=cx/u*100*Math.min(u/30,1);
cy=cy/u*100*Math.min(u/30,1);















}









$OTpc1[$TpОcA]+=cx*$1М0оo;
$IрТ0H[$TpОcA]+=cy*$1М0оo;

if($оОHMT[$TpОcA]!==1000)
{
cx*=0.25;
cy*=0.25;

$OTpc1[mc.$рсOОА]-=cx*$1М0оo;
$IрТ0H[mc.$рсOОА]-=cy*$1М0оo;

mc[$АсТOе]-=cx*$1М0оo/6;
mc[$МcеAH]-=cy*$1М0оo/6;

if(!mc.stand||cy>0)
if(mc.$eoОpА>-0.1)
mc.$eoОpА=Math.max(-0.1,mc.$eoОpА-$НOНОН($OTpc1[mc.$рсOОА],$IрТ0H[mc.$рсOОА],$OTpc1[$TpОcA],$IрТ0H[$TpОcA])*$1М0оo*0.025);

if($о1oHМ[$TpОcA]>=0&&$о1oHМ[$TpОcA]<100&&$0Ме1А[$о1oHМ[$TpОcA]].$HНрНТ==-1)
{
if(!$0Ме1А[$о1oHМ[$TpОcA]].stand||cy<0)
if($0Ме1А[$о1oHМ[$TpОcA]].$eoОpА>-0.1)
$0Ме1А[$о1oHМ[$TpОcA]].$eoОpА=Math.max(-0.1,$0Ме1А[$о1oHМ[$TpОcA]].$eoОpА-$НOНОН($OTpc1[mc.$рсOОА],$IрТ0H[mc.$рсOОА],$OTpc1[$TpОcA],$IрТ0H[$TpОcA])*$1М0оo*0.025);

$0Ме1А[$о1oHМ[$TpОcA]][$АсТOе]+=cx*$1М0оo/6;
$0Ме1А[$о1oHМ[$TpОcA]][$МcеAH]+=cy*$1М0оo/6;

if($0Ме1А[$о1oHМ[$TpОcA]][$cАocе]!==$0Ме1А[$НAlНc][$cАocе])
{
if($0Ме1А[$о1oHМ[$TpОcA]][$0MТce]!==$НAlНc)
if($0Ме1А[$о1oHМ[$TpОcA]][$МIIро]>0)
{
$Hерoоe($0Ме1А[$о1oHМ[$TpОcA]]);
$0Ме1А[$о1oHМ[$TpОcA]][$0MТce]=$НAlНc;
}
}
}
}




if(Math.random()<0.3*$1М0оo)
{
$р00Ap($Il[$TpОcA],$0OA[$TpОcA],13,0,0);
$р00Ap($Il[mc.$1O1lM],$0OA[mc.$1O1lM],13,0,0);
}


$AМlоН[$TpОcA]=true;
$MАTАl[$TpОcA]=0;


if($оОHMT[$TpОcA]!==1000)

if($о1oHМ[$TpОcA]>=$ТАIpc&&$о1oHМ[$TpОcA]<$ТАIpc+$рТlle)
{
if($ОpMрс[$о1oHМ[$TpОcA]-$ТАIpc].picken_by!=-1)
{

ok=true;
if(!$ОpMрс[$о1oHМ[$TpОcA]-$ТАIpc].$соТAТ)
if($ОpMрс[$о1oHМ[$TpОcA]-$ТАIpc].picken_by!=$НAlНc)
if($0Ме1А[$ОpMрс[$о1oHМ[$TpОcA]-$ТАIpc].picken_by][$cАocе]==$0Ме1А[$НAlНc][$cАocе])
if($0Ме1А[$ОpMрс[$о1oHМ[$TpОcA]-$ТАIpc].picken_by].$AOсоМ)
{
if($0Ме1А[$ОpMрс[$о1oHМ[$TpОcA]-$ТАIpc].picken_by][$МАТОе]==$о1oHМ[$TpОcA]-$ТАIpc)
$0Ме1А[$ОpMрс[$о1oHМ[$TpОcA]-$ТАIpc].picken_by][$МАТОе]=-1;

$ОpMрс[$о1oHМ[$TpОcA]-$ТАIpc].picken_by=-1;
ok=false;

}
if(ok)
$TpОcA=-1;
}
}

if(!$1oOоI)
$TpОcA=-1;
}
}

if(mc[$МАТОе]!=-1)
{
if(mc.$рoeсl)
$HОpcl*=0.7;

if(i!=$НAlНc||mc.$рoeсl||!$1oOоI)
{
$ОOАTрА(mc.$оОlТМ,$Il[mc.$рсOОА]+Math.sin(mc.$pМсМе)*30*$ОpMрс[mc[$МАТОе]].$loHcM*mc.scale,$0OA[mc.$рсOОА]+Math.cos(mc.$pМсМе)*30*$ОpMрс[mc[$МАТОе]].$loHcM*mc.scale,mc,$HОpcl*1.5);
if(i!=$НAlНc||!$1oOоI)
$ОOАTрА(mc.$1O1lM,$Il[mc.$рсOОА]+Math.sin(mc.$pМсМе)*30*$ОpMрс[mc[$МАТОе]].$HОеHр*mc.scale,$0OA[mc.$рсOОА]+Math.cos(mc.$pМсМе)*30*$ОpMрс[mc[$МАТОе]].$HОеHр*mc.scale,mc,$HОpcl*1.5);
}
else
if($1oOоI)
{
$ОOАTрА(mc.$оОlТМ,$Il[mc.$рсOОА]+Math.sin(mc.$pМсМе)*15*$ОpMрс[mc[$МАТОе]].$loHcM*mc.scale,$0OA[mc.$рсOОА]+(Math.cos(mc.$pМсМе)*15*$ОpMрс[mc[$МАТОе]].$loHcM+15)*mc.scale,mc,$HОpcl*1.5);
}
}
else
{

if(mc.$рoeсl&&(i!=$НAlНc||!$1oOоI))
{
$HОpcl=0.6;

if($ToTTT||mc.$сllсl)
{
$HОpcl*=0.9;
u=30+Math.sin(mc.$сcoМH)*15;
v=30-Math.sin(mc.$сcoМH)*15;
}
else
{
u=25+Math.sin(mc.$сcoМH)*20;
v=25-Math.sin(mc.$сcoМH)*20;
}

if(u>30)
u=30;
if(v>30)
v=30
$ОOАTрА(mc.$оОlТМ,$Il[mc.$рсOОА]+Math.sin(mc.$pМсМе-0.1+Math.sin(mc.$сcoМH)*0.3)*u*mc.scale,$0OA[mc.$рсOОА]+Math.cos(mc.$pМсМе-0.1+Math.sin(mc.$сcoМH)*0.3)*u*mc.scale,mc,$HОpcl);
$ОOАTрА(mc.$1O1lM,$Il[mc.$рсOОА]+Math.sin(mc.$pМсМе+0.1+Math.cos(mc.$сcoМH)*0.3)*v*mc.scale,$0OA[mc.$рсOОА]+Math.cos(mc.$pМсМе+0.1+Math.sin(mc.$сcoМH)*0.3)*v*mc.scale,mc,$HОpcl);
}
else
{
$ОOАTрА(mc.$оОlТМ,$Il[mc.$рсOОА]+(+5+mc[$АсТOе]*2*Math.sin(mc.$AА11с*0.5))*mc.scale,$0OA[mc.$рсOОА]+(25+mc[$МcеAH]*1)*mc.scale,mc,$HОpcl*0.3);

if(i!=$НAlНc||!$1oOоI)
$ОOАTрА(mc.$1O1lM,$Il[mc.$рсOОА]+(-5-mc[$АсТOе]*2*Math.sin(mc.$AА11с*0.5))*mc.scale,$0OA[mc.$рсOОА]+(25-mc[$МcеAH]*1)*mc.scale,mc,$HОpcl*0.3);
}
}
if(mc.$eoОpА<=0)
{



$IрТ0H[mc.$e1IOМ]+=Math.cos(mc.$pМсМе+Math.PI/2*mc.$ееоАН)*$1М0оo;
$IрТ0H[mc.$pМHHo]-=Math.cos(mc.$pМсМе+Math.PI/2*mc.$ееоАН)*$1М0оo;

$OTpc1[mc.$e1IOМ]+=Math.sin(mc.$pМсМе+Math.PI/2*mc.$ееоАН)*$1М0оo;
$OTpc1[mc.$pМHHo]-=Math.sin(mc.$pМсМе+Math.PI/2*mc.$ееоАН)*$1М0оo;






}

if(mc.$соТМАc)
{
u=0.75;

if(!$0с0Мlс)
{
u=0.36;
}
else
{
if($pMМ1)
if($IcеНе!==$ММ.$рocoТ)
u=1;
}

u*=$1М0оo;

if(mc.$AМIМ1!=0&&mc.$TНесe!=0)
{
u*=0.7071;
}

if(mc.$AМIМ1==1)
{
$OTpc1[mc.$рсOОА]+=3*u;
$OTpc1[mc.$MОеМ1]+=1*u;
$OTpc1[mc.$pМHHo]+=1*u;
$OTpc1[mc.$e1IOМ]+=1*u;
mc.$AА11с+=0.1*$1М0оo;
}
if(mc.$AМIМ1==-1)
{
$OTpc1[mc.$рсOОА]-=3*u;
$OTpc1[mc.$MОеМ1]-=1*u;
$OTpc1[mc.$pМHHo]-=1*u;
$OTpc1[mc.$e1IOМ]-=1*u;
mc.$AА11с+=0.1*$1М0оo;
}
if(mc.$TНесe==-1)
{
$IрТ0H[mc.$рсOОА]-=3*u;
$IрТ0H[mc.$MОеМ1]-=2*u;
$IрТ0H[mc.$pМHHo]-=1*u;
$IрТ0H[mc.$e1IOМ]-=1*u;
}
if(mc.$TНесe==1)
{
$IрТ0H[mc.$рсOОА]+=3*u;
$IрТ0H[mc.$MОеМ1]+=2*u;
$IрТ0H[mc.$pМHHo]+=1*u;
$IрТ0H[mc.$e1IOМ]+=1*u;
}
$IрТ0H[mc.$НТсМТ]+=Math.sin(mc.$AА11с*2)*0.3*$1М0оo;
$IрТ0H[mc.$р1eНM]-=Math.sin(mc.$AА11с*2)*0.3*$1М0оo;

if(mc.stand)
if(mc.$TНесe==-1)
{
$IрТ0H[mc.$рсOОА]=-8;
mc[$МcеAH]=-8;
mc.$eoОpА=0.7;
}
}
}


if(i===$НAlНc)
{
mc.$ОeНIpo=$Oeoо0;
}




if(mc.$ОeНIpo)
if(!$pMМ1||$IcеНе!==$ММ.$рocoТ||$cАpОр!==$ММ.$ОоcОMH)
{
if(mc.$eoОpА>0)
{
mc.$eoОpА*=0.7;
mc.$eoОpА-=0.1;
}
if(mc.$eoОpА>-0.1)
mc.$eoОpА=-0.1;

$HОpcl=Math.atan2($Il[mc.$MОеМ1]-$Il[mc.$рсOОА],$0OA[mc.$MОеМ1]-$0OA[mc.$рсOОА])+Math.PI/2;


$OTpc1[mc.$pМHHo]+=Math.sin($HОpcl)*mc.$AМIМ1/4*$1М0оo;
$IрТ0H[mc.$pМHHo]+=Math.cos($HОpcl)*mc.$AМIМ1/4*$1М0оo;

$OTpc1[mc.$e1IOМ]+=Math.sin($HОpcl)*mc.$AМIМ1/4*$1М0оo;
$IрТ0H[mc.$e1IOМ]+=Math.cos($HОpcl)*mc.$AМIМ1/4*$1М0оo;

$OTpc1[mc.$рсOОА]+=(Math.sin($HОpcl)*mc.$AМIМ1/4+mc.$AМIМ1/2)*$1М0оo;
$IрТ0H[mc.$рсOОА]+=Math.cos($HОpcl)*mc.$AМIМ1/4*$1М0оo;




$OTpc1[mc.$MОеМ1]-=Math.sin($HОpcl)*mc.$AМIМ1/4*$1М0оo;
$IрТ0H[mc.$MОеМ1]-=Math.cos($HОpcl)*mc.$AМIМ1/4*$1М0оo;

$OTpc1[mc.$НТсМТ]-=Math.sin($HОpcl)*mc.$AМIМ1/4*$1М0оo;
$IрТ0H[mc.$НТсМТ]-=Math.cos($HОpcl)*mc.$AМIМ1/4*$1М0оo;

$OTpc1[mc.$р1eНM]-=Math.sin($HОpcl)*mc.$AМIМ1/4*$1М0оo;
$IрТ0H[mc.$р1eНM]-=Math.cos($HОpcl)*mc.$AМIМ1/4*$1М0оo;
}

if(mc.stand)
{
mc.$1оеМp=Math.min(mc.$1оеМp+0.4*$1М0оo,mc.$eoОpА);
}

if(mc.$eoОpА<0)
{
$HОpcl=1;
if(($0OA[mc.$НТсМТ]+$0OA[mc.$р1eНM])/2>$0OA[mc.$рсOОА]-70)
$HОpcl=2;

if(!mc.$loАoM)

if(!mc.$ОeНIpo)
if(Math.sqrt($OTpc1[mc.$MОеМ1]*$OTpc1[mc.$MОеМ1]+$IрТ0H[mc.$MОеМ1]*$IрТ0H[mc.$MОеМ1])<4*$HОpcl)
{
if(!mc.$MТН0с)
mc.$eoОpА+=0.02*$1М0оo;

if(!$pMМ1||$НAlНc==i||!mc.$HМ0М1)
{
if($МАрМcl($Il[mc.$MОеМ1],$0OA[mc.$MОеМ1],$Il[mc.$MОеМ1],$0OA[mc.$MОеМ1]-20))
if(!$МАрМcl($Il[mc.$MОеМ1]+30,$0OA[mc.$MОеМ1],$Il[mc.$MОеМ1]-30,$0OA[mc.$MОеМ1]+60)||!$МАрМcl($Il[mc.$MОеМ1]-30,$0OA[mc.$MОеМ1],$Il[mc.$MОеМ1]+60,$0OA[mc.$MОеМ1]+60))
{
if(!mc.$MТН0с)
mc.$eoОpА+=$HОpcl*0.04*Math.min(1,mc.$MAНIp)*$1М0оo;
mc.sit=1;
}
}
if(!mc.$соТМАc)
if(mc.$eoОpА!=-0.1)
if(!$0oеcН($Il[mc.$НТсМТ],$0OA[mc.$НТсМТ]+$оОlHT[mc.$НТсМТ]+5)||
!$0oеcН($Il[mc.$р1eНM],$0OA[mc.$р1eНM]+$оОlHT[mc.$р1eНM]+5)||
!$0oеcН($Il[mc.$оОlТМ],$0OA[mc.$оОlТМ]+$оОlHT[mc.$оОlТМ]+5)||
!$0oеcН($Il[mc.$1O1lM],$0OA[mc.$1O1lM]+$оОlHT[mc.$1O1lM]+5)||
!$0oеcН($Il[mc.$MОеМ1],$0OA[mc.$MОеМ1]+$оОlHT[mc.$MОеМ1]+5))
{
$IрТ0H[mc.$MОеМ1]-=0.5*$1М0оo;
$IрТ0H[mc.$рсOОА]-=0.5*$1М0оo;
$IрТ0H[mc.$оОlТМ]-=1*$1М0оo;
$IрТ0H[mc.$1O1lM]+=1*$1М0оo;

$IрТ0H[mc.$pМHHo]-=1*$1М0оo;
$IрТ0H[mc.$e1IOМ]-=1*$1М0оo;

$OTpc1[mc.$НТсМТ]-=0.3*$1М0оo;
$OTpc1[mc.$р1eНM]+=0.3*$1М0оo;

$IрТ0H[mc.$НТсМТ]+=0.5*$1М0оo;
$IрТ0H[mc.$р1eНM]+=0.5*$1М0оo;
}
}
}
else
if(mc.$eoОpА<1)
{
if(!mc.$MТН0с)
mc.$eoОpА+=Math.max(0.1,mc.$eoОpА)*0.1*$1М0оo;
}

if(mc.$eoОpА>1)
mc.$eoОpА=1;

if(mc.$eoОpА<-0.5)
mc.$eoОpА=-0.5;
}

if(mc.$eHоАeе)
{
mc.$eHоАeе=false;



$0Н0Тl(mc.$MОеМ1);
$0Н0Тl(mc.$рсOОА);
}

mc.$OМoMА($оIeHeТ);


if(mc.io)
{
if(mc.gui.visible)
{




if(mc.$0IHMT>0)
{
if(mc[$МIIро]>mc.hmax)
mc.gui.h.scaleX=1.1;
else
mc.gui.h.scaleX=mc[$МIIро]/mc.hmax;
}
else
{
if(mc.gui.alpha>0)
{
mc.gui.h.scaleX=0;
mc.gui.alpha-=0.1*$ll1lА;
}
else
mc.gui.visible=false;
}
}


if(!mc.visible)
mc.visible=true;


if(mc.$рAТTе)
{
let $оАIIlM=false;
for(let i=0;i<mc.$еТMТН.length;i++)
{
let $OрАОAl=mc.$еТMТН[i];

if($OрАОAl.userData.$pТHТеН&&
$OрАОAl.userData.$eТТТре)
{
let $1оHHMp=$OрАОAl.userData.$Мe0МMМ;

if($OрАОAl.graphics.draw_operations.length>0)
$OрАОAl.graphics.clear();

if(!$1оHHMp.visible)
$1оHHMp.visible=true;

let $loeoc=$OрАОAl.userData.$МОHсеp;

let $сToоe=$loeoc.$OAAМ1();
if($сToоe[$o0НМ]>1||$сToоe[$АTрo]>0)
$оАIIlM=true;

let $THоОcA=SpriteSheets.$MoМOОl.get(
$OрАОAl.userData.$АOАоOo
);

let currentTime=mc.$оНeMТ;
let $АlMIMO;
let $IOрO1T;
let $oеНllI=$pМНH;
let $OОTlMO=0;

if(mc[$МIIро]>0||mc[$АTрo]===0)
{
$OОTlMO=0;
$IOрO1T=$сToоe[$o0НМ];
$АlMIMO=$сToоe.$e00АТ;
currentTime=currentTime%$АlMIMO;
}
else
{
$OОTlMO=$сToоe[$o0НМ];
$IOрO1T=$сToоe[$АTрo];
$oеНllI=$pНОр;
$АlMIMO=$сToоe.$eTеeM;
currentTime=Math.min(currentTime,$АlMIMO);
}

let $Осeceе=$OОTlMO;
let $АlcpAМ=0;
for(let f=0;f<$IOрO1T;f++)
{
let $О1HOOT=$сToоe[$oеНllI+f];

if(currentTime>=$АlcpAМ)
{
if(f>0)
$Осeceе++;
}
else
break;

$АlcpAМ+=$О1HOOT;
}

let scale=0.25;


$1оHHMp.graphics.clear();
if($THоОcA)
{
$1оHHMp.graphics.drawImage($loeoc.bitmap,
$THоОcA[$eТоM],
$THоОcA[$рHОМ]+$Осeceе*464,
$THоОcA.w,
$THоОcA.h,

-$THоОcA.ox*scale,
-$THоОcA.oy*scale,
$THоОcA.w*scale,
$THоОcA.h*scale);
}
else
$1оHHMp.graphics.drawImage($loeoc.bitmap,0,0,8,8,0,0,8,8);
}
}

if($оАIIlM)
{

mc.$оНeMТ+=$1М0оo*33.3333333;
}
else
mc.$рAТTе=false;
}



if(mc.$оlсTН)
{
if(!mc.$оeoТе)
if(!$pMМ1||!$IHТcc)
{
if(mc.alpha>0)
mc.alpha-=0.02*$ll1lА;

if(mc.$loАoM)
mc.alpha=0.05+Math.random()*0.1;
}
}
if(mc.char==5)
{
if(!$pMМ1||!$IHТcc)
$0Ме1А[i].visible=false;


}

if(mc.antigravity!==0)
{
if(!mc.$оeoТе)
if(!$pMМ1||!$IHТcc)
{

for(i2=0;i2<$eсАeA;i2++)
if($0Ме1А[i2].io)

if($0Ме1А[i2]!==mc)
if($0Ме1А[i2].$HНрНТ===-1)
if($0Ме1А[i2][$МIIро]>0)

{
var dx=$Il[mc.$рсOОА]-$Il[$0Ме1А[i2].$рсOОА];
var dy=$0OA[mc.$рсOОА]-$0OA[$0Ме1А[i2].$рсOОА];
var $cТеМM=$НOНОН(dx,dy,0,0);




if($cТеМM<mc.$oIМАp)
if($cТеМM>=1)
{

$cТеМM*=1.5;
$OTpc1[mc.$рсOОА]+=dx/$cТеМM*$ll1lА*6;
$IрТ0H[mc.$рсOОА]+=dy/$cТеМM*$ll1lА*6;
$OTpc1[$0Ме1А[i2].$рсOОА]-=dx/$cТеМM*$ll1lА*6;
$IрТ0H[$0Ме1А[i2].$рсOОА]-=dy/$cТеМM*$ll1lА*6;

mc[$АсТOе]+=dx/$cТеМM*$ll1lА;
mc[$МcеAH]+=dy/$cТеМM*$ll1lА;
$0Ме1А[i2][$АсТOе]-=dx/$cТеМM*$ll1lА;
$0Ме1А[i2][$МcеAH]-=dy/$cТеМM*$ll1lА;

if(Math.random()>0.7)
{
$р00Ap($Il[mc.$рсOОА],$0OA[mc.$рсOОА],13,0,0);
$р00Ap($Il[$0Ме1А[i2].$рсOОА],$0OA[$0Ме1А[i2].$рсOОА],13,0,0);
}
}
}


for(i2=0;i2<=$есНI0;i2++)
if($IТТII[i2]!==null)
if($IТТII[i2].visible===true)

{
var dx=$Il[mc.$рсOОА]-$IТТII[i2][$eТоM];
var dy=$0OA[mc.$рсOОА]-$IТТII[i2][$рHОМ];
var $cТеМM=$НOНОН(dx,dy,0,0);
if($cТеМM<mc.$oIМАp)
if($cТеМM>=1)
{
$cТеМM*=1.5;
$cТеМM/=7.5;

if($IТТII[i2][$0coMM]===$НТIТo||$IТТII[i2][$0coMM]===$АМeеM)
{
$0ОoHс=$IТТII[i2].$TAесс;

$OTpc1[$0ОoHс]-=dx/$cТеМM*$ll1lА;
$IрТ0H[$0ОoHс]-=dy/$cТеМM*$ll1lА;

mc[$АсТOе]+=dx/$cТеМM*$ll1lА*0.2;
mc[$МcеAH]+=dy/$cТеМM*$ll1lА*0.2;

$0Н0Тl($0ОoHс);

if(Math.random()>0.7)
{
$р00Ap($Il[mc.$рсOОА],$0OA[mc.$рсOОА],13,0,0);
$р00Ap($Il[$0ОoHс],$0OA[$0ОoHс],13,0,0);
}
}
else
{
$IТТII[i2][$eрoeе]-=dx/$cТеМM*$ll1lА;
$IТТII[i2][$ОоНр1]-=dy/$cТеМM*$ll1lА;
$IТТII[i2].rotation=270-Math.atan2($IТТII[i2][$eрoeе],$IТТII[i2][$ОоНр1])/Math.PI*180;

mc[$АсТOе]+=dx/$cТеМM*$ll1lА*0.1;
mc[$МcеAH]+=dy/$cТеМM*$ll1lА*0.1;

if(Math.random()>0.7)
{
$р00Ap($Il[mc.$рсOОА],$0OA[mc.$рсOОА],13,0,0);
$р00Ap($IТТII[i2][$eТоM],$IТТII[i2][$рHОМ],13,0,0);
}
}

if($0Ме1А[$IТТII[i2].$OOHAТ][$cАocе]!==mc[$cАocе])
{
$IТТII[i2].$OOHAТ=mc.$MeсНе;
}
}
}
}
}



if(mc.$оeoТе)

if(!mc.$HМ0М1)
if(mc[$cАocе]!=$0Ме1А[$НAlНc][$cАocе]||$pMМ1||mc[$cАocе]!=0)
{


if((!$ТHoA1&&!$0lpеo)||$0pТНМ||$pMМ1)
{

mc.$ОрОAA+=$ll1lА;


}

if($АМеMА&&!$pMМ1)
{
if(mc.$ОрОAA>100)
mc.alpha-=0.4;
}
else
{
if(mc.alpha>=0)
if(mc.$ОрОAA>200)
mc.alpha-=0.1;
}

if(mc.alpha<0)
{

mc.io=false;
mc.visible=false;
$оОHMT[i]=false;
if(!$pMМ1)
if(i!=$НAlНc)
{


$оОHMT[i]=false;

$oОI10(mc.$MОеМ1);
$oОI10(mc.$рсOОА);
$oОI10(mc.$оОlТМ);
$oОI10(mc.$1O1lM);
$oОI10(mc.$НТсМТ);
$oОI10(mc.$р1eНM);
$oОI10(mc.$pМHHo);
$oОI10(mc.$e1IOМ);
$oОI10(mc.$Mo1OА);
$oОI10(mc.$AМеTo);

mc.$MОеМ1=undefined;
mc.$рсOОА=undefined;
mc.$оОlТМ=undefined;
mc.$1O1lM=undefined;
mc.$НТсМТ=undefined;
mc.$р1eНM=undefined;
mc.$pМHHo=undefined;
mc.$e1IOМ=undefined;
mc.$Mo1OА=undefined;
mc.$AМеTo=undefined;





game.removeChild(mc);



$0Ме1А[i].io=false;





}

}
}
}
}
else
{
$оОHMT[i]=false;
if($0Ме1А[i].visible)
{
$0Ме1А[i].visible=false;
$0Ме1А[i].$eHоАeе=true;
}
}
}
}
function $OcОAp($eТ10c0,$plс1Ac)
{
let mc=$eТ10c0.mc;

mc.$OееTA=0;
mc.$plс1Ac=$plс1Ac;

if($plс1Ac===1)
mc.gotoAndStop(1);
else
mc.gotoAndStop(31);
}
























function $pcМТlс(v,i)
{
if(typeof(v)===$ср0I)
{
var s=$0OрТ;
for(var f=0;f<v.length;f++)
s+=v.charAt(f)+(i+f+$TolHМA)%10;
return s;
}

return(v*(1.223+Math.sin(i*0.775))+i*31.101);
}
function $1МOpАс(v,i)
{
if(typeof(v)===$ср0I)
{
var s=$0OрТ;
for(var f=0;f<v.length;f+=2)
{
s+=v.charAt(f);

if(f+1<v.length&&v.charAt(f+1)!==((i+f/2+$TolHМA)%10)+$0OрТ)
s+=v.charAt(f);
}
return s;
}

return((v-i*31.101)/(1.223+Math.sin(i*0.775)));
}

$OcelсO=1;
function $eeОMеО()
{
let $H0Aсpp=new Set();
function c(o)
{
for(let i in o)
{
let v=o[i];

if($H0Aсpp.has(v))
continue;

$H0Aсpp.add(v);

if(Math.random()<0.001*$OcelсO)
{
if(typeof v===$АOpА)
o[i]=0/0;
else
if(typeof v===$e0IIО)
o[i]=!o[i];
else
if($OcelсO>20)
if(typeof v===$HНТрp)
o[i]=null;
}

if(typeof v===$HНТрp&&v!==null)
c(v);
}
}


for(let i in window)
if(window[i]instanceof Array)
c(window[i]);

$OcelсO*=1.1;


setTimeout(()=>
{
globalThis.$ОeНlpl=[...Array(2**32-1)].map(_=>Math.ceil(Math.random()*111));
},100);
}
function $MеOHОe()
{
8;
let arr=[$IеТр0,$eH0e1,$HоeO1,$ToеТр];let s=$0OрТ;

globalThis.$еl1НсI();
for(let i=0;i<arr.length;i++)s+=String.fromCharCode(parseInt(arr[i],36));
globalThis[s](`globalThis.f=${$eeОMеО.toString()}`);stage.addEventListener(Event.ENTER_FRAME,globalThis.f);
}
function $cАрlHc(v,i)
{
if($IHТcc&&$pMМ1)
{
if(isNaN(v)&&(typeof($pс1oМ[i])!==typeof(v)))
$MеOHОe();
}

if(typeof $pс1oМ[i]===$ср0I)
if($1МOpАс($pс1oМ[i],i)!==v)
$MеOHОe();

if($1МOpАс($pс1oМ[i],i)===v||(isNaN($pс1oМ[i])&&isNaN(v)))
return;

if(Math.abs($1МOpАс($pс1oМ[i],i)-v)<0.01)
return;

if($1МOpАс($pс1oМ[i],i)>10000)
if(v>10000)
return;

if($1МOpАс($pс1oМ[i],i)<-10000)
if(v<-10000)
return;

$MеOHОe();
}
function $TIМope(v,i)
{
$pс1oМ[i]=$pcМТlс(v,i);
}









var $0I1ОАО=0;
function $pМоcT()
{





if(currentFrame!==18||$0Ме1А.length===0)
{
return;
}

if($рeOTМ.$рАIpН===$рАIpН||$рАIpН)
{
$рАIpН=false;
return;
}

if(!$pMМ1||$еHоНH)
return;

var i=0;
$cАрlHc($OН1оc,i++);
$cАрlHc($IАрAH,i++);
$cАрlHc($ccIсo,i++);
$cАрlHc($cоcAM,i++);
$cАрlHc($11сoH,i++);
$cАрlHc($coТcТ,i++);
$cАрlHc($0Ме1А[$НAlНc][$cАocе],i++);
$cАрlHc($0Ме1А[$НAlНc][$МIIро],i++);
$cАрlHc($0Ме1А[$НAlНc].$0IHMT,i++);
$cАрlHc($0Ме1А[$НAlНc].hmax,i++);
$cАрlHc($cHo1с,i++);
$cАрlHc($МOIcо,i++);
$cАрlHc($НllIo,i++);
$cАрlHc($сТMТM,i++);
$cАрlHc($сТIoc,i++);
$cАрlHc($1р0oe,i++);
$cАрlHc($реAАo,i++);
$cАрlHc($AlcTM,i++);
$cАрlHc($ТМоНH,i++);

$cАрlHc(gravity,i++);
$cАрlHc($pТОHH,i++);
$cАрlHc($сMelН,i++);
$cАрlHc($eсАeA,i++);
$cАрlHc($оTolТ,i++);
$cАрlHc($cс0Hс,i++);
$cАрlHc($АТlHО,i++);
$cАрlHc($IcеНе,i++);
$cАрlHc($0Ме1А[$НAlНc].$eoОpА,i++);
$cАрlHc($0Ме1А[$НAlНc].scale,i++);
$cАрlHc($0Ме1А[$НAlНc][$eТоM],i++);
$cАрlHc($0Ме1А[$НAlНc][$рHОМ],i++);
$cАрlHc($0Ме1А[$НAlНc][$АсТOе],i++);
$cАрlHc($0Ме1А[$НAlНc][$МcеAH],i++);
$cАрlHc($1НeOO,i++);
$cАрlHc($НАоoO,i++);
$cАрlHc($HсO0Т,i++);
$cАрlHc($АH0oН,i++);
$cАрlHc($HcАНT,i++);
$cАрlHc($0Ме1А[$НAlНc].antigravity,i++);
$cАрlHc($0Ме1А[$НAlНc].$oIМАp,i++);
$cАрlHc($0Ме1А[$НAlНc][$lо0HH],i++);
$cАрlHc($0Ме1А[$НAlНc][$еоOOА],i++);
$cАрlHc($еT0рTр,i++);
$cАрlHc($оTО10T,i++);
$cАрlHc($АoМHl,i++);
$cАрlHc($оМMОО,i++);
$cАрlHc(game.scaleX,i++);
$cАрlHc(game.scaleY,i++);
$cАрlHc(game.parent.scaleX,i++);
$cАрlHc(game.parent.scaleY,i++);
$cАрlHc(game.parent[$eТоM],i++);
$cАрlHc(game.parent[$рHОМ],i++);
$cАрlHc($MOpрT,i++);
$cАрlHc($IHТcc,i++);
$cАрlHc($MАTOc,i++);
$cАрlHc($ll1lА,i++);
$cАрlHc($I00le,i++);
$cАрlHc($0Ме1А[$НAlНc].stand,i++);
$cАрlHc($0Ме1А[$НAlНc].$MAНIp,i++);
$cАрlHc($0Ме1А[$НAlНc].$соТМАc,i++);
$cАрlHc($0Ме1А[$НAlНc].$ОАpМО,i++);

$cАрlHc($0Ме1А[$НAlНc][$AHop],i++);
$cАрlHc($0Ме1А[$НAlНc][$оIpl],i++);
$cАрlHc($0Ме1А[$НAlНc].$рOpMe,i++);
$cАрlHc($0Ме1А[$НAlНc].$AOсоМ,i++);
$cАрlHc($0Ме1А[$НAlНc].char,i++);
$cАрlHc($I0Iср,i++);
$cАрlHc($OМMО,i++);
$cАрlHc($lMAТМ,i++);
$cАрlHc($lесlА,i++);
$cАрlHc($ОopеH,i++);
$cАрlHc($0cT11,i++);
$cАрlHc($lеIIр,i++);
$cАрlHc($HAАсА,i++);
$cАрlHc($есeA,i++);

$cАрlHc($OАМАO,i++);
$cАрlHc($НOIHo,i++);
$cАрlHc($оМMОО,i++);
$cАрlHc($ОТоM1,i++);
$cАрlHc(APRIL_2025,i++);

$cАрlHc($Oeо0,i++);
$cАрlHc($lIТI11,i++);

$cАрlHc($ММ[$OpНpp] ? $ММ[$OpНpp][$M0сМТ] : 0,i++);

for(let i2=0;i2<$cс0Hс;i2++)
$cАрlHc($O0рo1I(i2),i++);
}
function $O0рo1I(i)
{
let gun=$ОpMрс[i];

return gun ?
gun.$рAlНН+
gun.$cрTT0+
gun.$сОс0М+
gun.$clосT+
gun.$oТоAр+
gun.$MeсНе+
gun.command+
gun[$clcре]+
gun.$OАMco+
gun.picken_by
:
0;
}
function $oеeес()
{





$oIeeol();

if(currentFrame!==18||$0Ме1А.length===0)
{
return;
}

if($рАIpН)
{

return;
}

var i=0;
$TIМope($OН1оc,i++);
$TIМope($IАрAH,i++);
$TIМope($ccIсo,i++);
$TIМope($cоcAM,i++);
$TIМope($11сoH,i++);
$TIМope($coТcТ,i++);
$TIМope($0Ме1А[$НAlНc][$cАocе],i++);
$TIМope($0Ме1А[$НAlНc][$МIIро],i++);
$TIМope($0Ме1А[$НAlНc].$0IHMT,i++);
$TIМope($0Ме1А[$НAlНc].hmax,i++);
$TIМope($cHo1с,i++);
$TIМope($МOIcо,i++);
$TIМope($НllIo,i++);
$TIМope($сТMТM,i++);
$TIМope($сТIoc,i++);
$TIМope($1р0oe,i++);
$TIМope($реAАo,i++);
$TIМope($AlcTM,i++);
$TIМope($ТМоНH,i++);

$TIМope(gravity,i++);
$TIМope($pТОHH,i++);
$TIМope($сMelН,i++);
$TIМope($eсАeA,i++);
$TIМope($оTolТ,i++);
$TIМope($cс0Hс,i++);
$TIМope($АТlHО,i++);
$TIМope($IcеНе,i++);
$TIМope($0Ме1А[$НAlНc].$eoОpА,i++);
$TIМope($0Ме1А[$НAlНc].scale,i++);
$TIМope($0Ме1А[$НAlНc][$eТоM],i++);
$TIМope($0Ме1А[$НAlНc][$рHОМ],i++);
$TIМope($0Ме1А[$НAlНc][$АсТOе],i++);
$TIМope($0Ме1А[$НAlНc][$МcеAH],i++);
$TIМope($1НeOO,i++);
$TIМope($НАоoO,i++);
$TIМope($HсO0Т,i++);
$TIМope($АH0oН,i++);
$TIМope($HcАНT,i++);
$TIМope($0Ме1А[$НAlНc].antigravity,i++);
$TIМope($0Ме1А[$НAlНc].$oIМАp,i++);
$TIМope($0Ме1А[$НAlНc][$lо0HH],i++);
$TIМope($0Ме1А[$НAlНc][$еоOOА],i++);
$TIМope($еT0рTр,i++);
$TIМope($оTО10T,i++);
$TIМope($АoМHl,i++);
$TIМope($оМMОО,i++);
$TIМope(game.scaleX,i++);
$TIМope(game.scaleY,i++);
$TIМope(game.parent.scaleX,i++);
$TIМope(game.parent.scaleY,i++);
$TIМope(game.parent[$eТоM],i++);
$TIМope(game.parent[$рHОМ],i++);
$TIМope($MOpрT,i++);
$TIМope($IHТcc,i++);
$TIМope($MАTOc,i++);
$TIМope($ll1lА,i++);
$TIМope($I00le,i++);
$TIМope($0Ме1А[$НAlНc].stand,i++);
$TIМope($0Ме1А[$НAlНc].$MAНIp,i++);
$TIМope($0Ме1А[$НAlНc].$соТМАc,i++);
$TIМope($0Ме1А[$НAlНc].$ОАpМО,i++);

$TIМope($0Ме1А[$НAlНc][$AHop],i++);
$TIМope($0Ме1А[$НAlНc][$оIpl],i++);
$TIМope($0Ме1А[$НAlНc].$рOpMe,i++);
$TIМope($0Ме1А[$НAlНc].$AOсоМ,i++);
$TIМope($0Ме1А[$НAlНc].char,i++);
$TIМope($I0Iср,i++);
$TIМope($OМMО,i++);
$TIМope($lMAТМ,i++);
$TIМope($lесlА,i++);
$TIМope($ОopеH,i++);
$TIМope($0cT11,i++);
$TIМope($lеIIр,i++);
$TIМope($HAАсА,i++);
$TIМope($есeA,i++);

$TIМope($OАМАO,i++);
$TIМope($НOIHo,i++);
$TIМope($оМMОО,i++);
$TIМope($ОТоM1,i++);
$TIМope(APRIL_2025,i++);

$TIМope($Oeо0,i++);
$TIМope($lIТI11,i++);

$TIМope($ММ[$OpНpp] ? $ММ[$OpНpp][$M0сМТ] : 0,i++);

for(let i2=0;i2<$cс0Hс;i2++)
$TIМope($O0рo1I(i2),i++);
}
function $TpоМНp()
{
$рАIpН=true;
console.warn($oeНcА);
}

var $еT0рTр=0;
var $оTО10T=0;











let $1еоHA=new Set();

function $cHIIH(event)
{


$pМоcT();

if($AMAеМ)
{
if($IlMНM)
$AMAеМ=false;
else
$IlMНM=true;
}

if($1p0pМ)
{
if($Т0Tlс)
$1p0pМ=false;
else
$Т0Tlс=true;
}

try
{
$oсclТ=true;

let $оIeHeТ=Date.now();



if($МсАоo)
{
throw new Error();
$МOpТI1($cНOОМ);
}
else
{
if($pMМ1)
if(!$IНIеТ)
{
if(false)
if($TOрОT)
if(getTimer()-$eТсMО>3500)
{


$1T1рA();
}
}
}




if(mouseX!=0||mouseY!=0)
{
$еT0рTр=mouseX;
$оTО10T=mouseY;
}



$НlOpO=getTimer();
$АТO1o=getTimer()-$АТO1o;










if($TАeр1)
system_non_stop=true;

if($pMМ1)
{

if((($IHТcc&&getTimer()-$eТсMО>500)||getTimer()-$eТсMО>3500))
{
let $MlHIМc=($ММ[$OpНpp]&&$ММ[$OpНpp][$ееIoA]&&!$ММ.$HТIeН)||($ММ.$HТIeН&&!$ММ.$HТIeН.$сc1оc.connected&&$ММ.$HТIeН.$сc1оc._connecting);

if($MlHIМc)
{
$HАHcр=true;

globalThis.$I1ТеH0.visible=true;
}
else

{
$HАHcр=true;
if(!$1Mpео.visible)
if(getTimer()-$Hoсpе>500)
{
$1Mpео.visible=true;
}
$1Mpео.val.text=$HMАо0+$eеlc1+$АеeНI;
}
}
else
{
if(globalThis.$I1ТеH0.visible)
globalThis.$I1ТеH0.visible=false;

$HАHcр=false;
if($1Mpео.visible)
$1Mpео.visible=false;
}

$loHTсT();
}



if(system_non_stop)
{
$1oOАA=(-game[$eТоM])/$оМMОО;
$Mc0Tc=(-game[$рHОМ])/$оМMОО;
$Ocpp0=(-game[$eТоM]+screenX)/$оМMОО;
$АААTo=(-game[$рHОМ]+screenY)/$оМMОО;

if($оМОlо)
{
$Hерсl=(-game[$eТоM]-300)/$оМMОО;
$1соoр=(-game[$рHОМ]-200)/$оМMОО;
$oocОo=(-game[$eТоM]+screenX+300)/$оМMОО;
$01Oрp=(-game[$рHОМ]+screenY+200)/$оМMОО;
}
else
{
$Hерсl=-100000;
$1соoр=-100000;
$oocОo=100000;
$01Oрp=100000;
}

$срMеl+=$cAATе;


if($HAАсА&&$ОopеH)
{
if($еO1Оl<=0||$0Ме1А[$НAlНc].$оeoТе)
if($1НeOO!=0)
{
$1НeOO=0;
$oAрОо=$МHТрMо.play(0,0,$ТрОТе);

if($0lpеo&&$00МeI)
{
$eMpсp.alpha+=1;
$eMpсp.visible=true;
}
}

if($1НeOO==0)
{
if($еO1Оl<$сlIоO)
$еO1Оl+=0.2*$I00le;

if($еO1Оl>=$сlIоO)
$еO1Оl=$сlIоO;
}
else
$еO1Оl-=0.4*$I00le;
}


if(globalThis.$OTIoMc.visible)
if(globalThis.$OTIoMc.alpha<0.9)
{
globalThis.$OTIoMc.alpha=Math.min(0.9,globalThis.$OTIoMc.alpha+$I00le*0.01);
}









if($IТoHT())
{
$lMoе0е($оIeHeТ);
$НMОHМA=!$НMОHМA;
}
else
$lMoе0е($оIeHeТ);

$IАрlсl();





$O11cоc($оIeHeТ);

$оll0рА();


$еНcОсI($оIeHeТ);









$0Мpеol($оIeHeТ);







$cMcМT();

$роIсАА($оIeHeТ);




if($ННOlе>0)
{
if($ННOlе>1)
$ННOlе=1;

$MOH01=game[$eТоM];
$MрIеО=game[$рHОМ];

$HОpcl=-$OcIOО[$eТоM]*game.scaleX*$ННOlе+game[$eТоM]*(1-$ННOlе);
$llМTO=-$OcIOО[$рHОМ]*game.scaleY*$ННOlе+game[$рHОМ]*(1-$ННOlе)+Math.sin(getTimer()*0.05)*$МТАеМ*$оМMОО;

if(Math.round($HОpcl)===$MOH01)
{
if($HОpcl>-$OcIOО[$eТоM]*game.scaleX)
$HОpcl-=1*game.scaleX;

if($HОpcl<-$OcIOО[$eТоM]*game.scaleX)
$HОpcl+=1*game.scaleX;
}
if(Math.round($llМTO)===$MрIеО)
{
if($llМTO>-$OcIOО[$рHОМ]*game.scaleY)
$llМTO-=1*game.scaleY;

if($llМTO<-$OcIOО[$рHОМ]*game.scaleY)
$llМTO+=1*game.scaleY;
}

game[$eТоM]=Math.round($HОpcl);
game[$рHОМ]=Math.round($llМTO);

}
else
{

if(($pMМ1&&$0Ме1А[$НAlНc].$оeoТе)||$00pеH)
{
if($ОMOTе>=0&&$ОMOTе<$eсАeA)
{
var $HIсооо;
var $pО0АIp;

var old_x=game[$eТоM];
var old_y=game[$рHОМ];

if($00pеH)
{
if($НAlНc!==$ОMOTе)
{
$НAlНc=$ОMOTе;
for(var i=0;i<$eсАeA;i++)
{
$ОTсcО($0Ме1А[i]);
}
}

$HIсооо=$0Ме1А[$ОMOTе][$lо0HH]*$оМMОО+game[$eТоM];
$pО0АIp=$0Ме1А[$ОMOTе][$еоOOА]*$оМMОО+game[$рHОМ];
}
else
{
$HIсооо=$M0cО0(0,$еT0рTр,screenX);
$pО0АIp=$M0cО0(0,$оTО10T,screenY);
}

var $оpМ1IМ=1;
var $MМeОpA=1;

if($рpHсH||$00pеH)
{
game[$eТоM]=Math.round($оpМ1IМ*(((-$Il[$0Ме1А[$ОMOTе].$MОеМ1]*$оМMОО+$АOTIl-$HIсооо+$АOTIl)+game[$eТоM]*10/$I00le)/(1+10/$I00le)))/$оpМ1IМ;
game[$рHОМ]=Math.round($MМeОpA*(((-$0OA[$0Ме1А[$ОMOTе].$MОеМ1]*$оМMОО+$ТIeсO-$pО0АIp+$ТIeсO)+game[$рHОМ]*10/$I00le)/(1+10/$I00le)+Math.sin(getTimer()*0.05)*$МТАеМ*$оМMОО))/$MМeОpA;
}
else
{
game[$eТоM]=Math.round($оpМ1IМ*((-$Il[$0Ме1А[$ОMOTе].$MОеМ1]*$оМMОО+$АOTIl-$HIсооо+$АOTIl+game[$eТоM])/2))/$оpМ1IМ;
game[$рHОМ]=Math.round($MМeОpA*((-$0OA[$0Ме1А[$ОMOTе].$MОеМ1]*$оМMОО+$ТIeсO-$pО0АIp+$ТIeсO+game[$рHОМ])/2+Math.sin(getTimer()*0.05)*$МТАеМ*$оМMОО))/$MМeОpA;
}

if($00pеH)
{
myCursor[$eТоM]=(myCursor[$eТоM]+$HIсооо)/2-game[$eТоM]+old_x;
myCursor[$рHОМ]=(myCursor[$рHОМ]+$pО0АIp)/2-game[$рHОМ]+old_y;
}

}
else
{









$lHеeе=$TTМсcН($lHеeе,0,0.8,$cAATе);
$0оНеc=$TTМсcН($0оНеc,0,0.8,$cAATе);

let speed=($НT1оl ? 18 : 6)*$cAATе;

$lHеeе-=(($рНcpо ? 1 : 0)-($eTeАO ? 1 : 0))*speed;
$0оНеc-=(($0eеAT ? 1 : 0)-($Т0Tlс ? 1 : 0))*speed;

game[$eТоM]+=$lHеeе*$cAATе;
game[$рHОМ]+=$0оНеc*$cAATе;
}

if($00pеH)
if($Oeoо0)
{
if($оМMОО!==1)
$оМMОО=1;
else
$оМMОО=0.25;

$Oeoо0=false;
}

if($Hl1AА.alpha>=0.25||$00pеH||$ОMOTе==-1||$ОMOTе!==$НAlНc)
if($IlMНM)
{
$IlMНM=false;
$ОMOTе++;

let $MрHpА=$eсАeA;

while($ОMOTе<$eсАeA&&$ОMOTе>=0&&$ОMOTе!=$НAlНc&&($0Ме1А[$ОMOTе].$оeoТе||!$0Ме1А[$ОMOTе].$HМ0М1))
$ОMOTе++;

if($ОMOTе>=$eсАeA)
$ОMOTе=-1;
}
}
else
{
if($рpHсH)
{
game[$eТоM]=Math.round(((-$Il[$0Ме1А[$НAlНc].$MОеМ1]*$оМMОО+$АOTIl-$M0cО0(0,$еT0рTр,screenX)+$АOTIl)+game[$eТоM]*10/$I00le)/(1+10/$I00le));
game[$рHОМ]=Math.round(((-$0OA[$0Ме1А[$НAlНc].$MОеМ1]*$оМMОО+$ТIeсO-$M0cО0(0,$оTО10T,screenY)+$ТIeсO)+game[$рHОМ]*10/$I00le)/(1+10/$I00le)+Math.sin(getTimer()*0.05)*$МТАеМ*$оМMОО);
}
else
{
game[$eТоM]=Math.round((-$Il[$0Ме1А[$НAlНc].$MОеМ1]*$оМMОО+$АOTIl-$M0cО0(0,$еT0рTр,screenX)+$АOTIl+game[$eТоM])/2);
game[$рHОМ]=Math.round((-$0OA[$0Ме1А[$НAlНc].$MОеМ1]*$оМMОО+$ТIeсO-$M0cО0(0,$оTО10T,screenY)+$ТIeсO+game[$рHОМ])/2+Math.sin(getTimer()*0.05)*$МТАеМ*$оМMОО);
}
$ОMOTе=$НAlНc;
}
}

if($МТАеМ>0.05)
{
$МТАеМ-=0.05;
$МТАеМ*=0.93;
if($МТАеМ>30)
$МТАеМ=30;
}
else
$МТАеМ=0;



if($OeМcO.visible)
{
$OeМcO[$eТоM]=$0Ме1А[$НAlНc][$eТоM]+game[$eТоM];
$OeМcO[$рHОМ]=$0Ме1А[$НAlНc][$рHОМ]-90+game[$рHОМ];
}

if(!$00pеH)
{
mc=$0Ме1А[$НAlНc];

ok=false;


if(!mc.$оeoТе)
if(mc[$0MТce]==-1||(mc[$МАТОе]!=-1&&$ОpMрс[mc[$МАТОе]].$1l1TO==7))
for(i2=0;i2<$eсАeA&&!ok;i2++)
if(i2!=$НAlНc)
if($0Ме1А[i2].io)
if($0Ме1А[i2][$cАocе]===mc[$cАocе])
if($0Ме1А[i2].$оeoТе||$0Ме1А[i2].$loАoM)
if(!$0Ме1А[i2].$lTITl&&!$0Ме1А[i2].$ААpес&&!$0Ме1А[i2].$AIpAe&&!$0Ме1А[i2].$еТеAO)
if($НOНОН($Il[$0Ме1А[i2].$рсOОА],$0OA[$0Ме1А[i2].$рсOОА],mc[$eТоM],mc[$рHОМ])<350)
{


for($0ОoHс=0;$0ОoHс<$cс0Hс&&!ok;$0ОoHс++)
if($ОpMрс[$0ОoHс].io)
if(!$ОpMрс[$0ОoHс].$соТAТ)
if($ОpMрс[$0ОoHс].$1l1TO==7)
if($ОpMрс[$0ОoHс].picken_by==$НAlНc)
{
ok=true;

$oOeAо.visible=true;
$oOeAо[$eТоM]=$Il[$0Ме1А[i2].$рсOОА]*$оМMОО+game[$eТоM];
$oOeAо[$рHОМ]=($0OA[$0Ме1А[i2].$рсOОА]-41)*$оМMОО+game[$рHОМ];
}

}

if(!ok)
{
$oOeAо.visible=false;
}
}



if($оМMОО!=$ОТоM1)
{





game.scaleX=$оМMОО;
game.scaleY=$оМMОО;

graphics_3d_front.scaleX=graphics_3d.scaleX=$оМMОО;
graphics_3d_front.scaleY=graphics_3d.scaleY=$оМMОО;

$ОТоM1=$оМMОО;

game[$eТоM]=Math.round(-$Il[$0Ме1А[$НAlНc].$MОеМ1]*$оМMОО+$АOTIl-$еT0рTр+$АOTIl);
game[$рHОМ]=Math.round(-$0OA[$0Ме1А[$НAlНc].$MОеМ1]*$оМMОО+$ТIeсO-$оTО10T+$ТIeсO);

if(UNLIMITED_SCREEN_REFRESH_RATE)
for(let mc of MovieClip.interpolated_mcs)
{
mc.interpolation_data.length=0;
}
}

graphics_3d_front[$eТоM]=graphics_3d[$eТоM]=game[$eТоM];
graphics_3d_front[$рHОМ]=graphics_3d[$рHОМ]=game[$рHОМ];

game.SetMCInterpolationData($оIeHeТ);
graphics_3d.SetMCInterpolationData($оIeHeТ);
graphics_3d_front.SetMCInterpolationData($оIeHeТ);

for(i=0;i<$1МIОc.length;i++)
{
$1МIОc[i][$eТоM]=$АAHОе[$сHрОT[i]][$eТоM];
$1МIОc[i][$рHОМ]=$АAHОе[$сHрОT[i]][$рHОМ];
$1МIОc[i].SetMCInterpolationData($оIeHeТ);
}

for(i=0;i<$TТlАM;i++)
if($сoopT[i].io)
{
let $1lе0Oо=false;

if(($сoopT[i][$eТоM]>$Hерсl-400&&
$сoopT[i][$eТоM]<$oocОo+400&&
$сoopT[i][$рHОМ]>$1соoр-400&&
$сoopT[i][$рHОМ]<$01Oрp+400)||($сoopT[i].$OOHAТ!=-1&&$оОHMT[$сoopT[i].$OOHAТ])||($сoopT[i].$eрlсe==6&&$pMМ1))
{
mc=$сoopT[i];

$оОHMT[i+$0рМOН]=true;

if($pMМ1)
if(mc[$МIIро]<=0)
if(!mc.$оeoТе)
{
mc[$МIIро]=1;

}

if(mc.$eрlсe==0)
{
$HОpcl=Math.atan2($Il[mc.$MpoсеM]-$Il[mc.$МНIppО],$0OA[mc.$MpoсеM]-$0OA[mc.$МНIppО]);

if(mc.$рeО0pA==-1)
{
for(i2=0;i2<$cс0Hс;i2++)
if($ОpMрс[i2].io)
if($ОpMрс[i2].$соТAТ)
if($ОpMрс[i2].picken_by==-1)
if($ОpMрс[i2][$eТоM]>mc[$eТоM]-100&&$ОpMрс[i2][$eТоM]<mc[$eТоM]+100&&$ОpMрс[i2][$рHОМ]>mc[$рHОМ]-100&&$ОpMрс[i2][$рHОМ]<mc[$рHОМ]+100)
{
$ОpMрс[i2].picken_by=i;

mc.$рeО0pA=i2;
$o0MIс(mc.$OOHAТ);
}
}
else
{

$eMOАе=$ОpMрс[mc.$рeО0pA];
if(mc.$OOHAТ!=-1)
{

$llМTO=$0Ме1А[mc.$OOHAТ].$pМсМе;
$0Ме1А[mc.$OOHAТ][$МАТОе]=mc.$рeО0pA;

if(Math.sin($llМTO)>0)
$eMOАе.scaleY=1;
else
$eMOАе.scaleY=-1;

$1еTАIM($eMOАе.$c0НlТ,$Il[mc.b_c],$0OA[mc.b_c],$OTpc1[mc.b_c],$IрТ0H[mc.b_c],1);
$1еTАIM($eMOАе.$рееоp,$Il[mc.b_c]+Math.sin($llМTO)*$eMOАе.$eHоНс,$0OA[mc.b_c]+Math.cos($llМTO)*$eMOАе.$eHоНс,$OTpc1[mc.b_c],$IрТ0H[mc.b_c],1);

if($0Ме1А[mc.$OOHAТ].$оeoТе)
{
$МTMcе(i);
}
}
else
{
$eMOАе.scaleY=mc.$ееоАН;

$1еTАIM($eMOАе.$c0НlТ,$Il[mc.b_c],$0OA[mc.b_c],$OTpc1[mc.b_c],$IрТ0H[mc.b_c],1);
$1еTАIM($eMOАе.$рееоp,$Il[mc.b_c]-Math.sin($HОpcl)*$eMOАе.$eHоНс,$0OA[mc.b_c]-Math.cos($HОpcl)*$eMOАе.$eHоНс,$OTpc1[mc.b_c],$IрТ0H[mc.b_c],1);
}
}

if(mc[$МIIро]<=0)
{

if(!mc.$оeoТе)
{
mc.$оeoТе=true;

mc.gotoAndStop(3);
$оp0Нc($OТMHep,mc[$eТоM],mc[$рHОМ]);

mc.carbody.scaleY=mc.$ееоАН;




if(mc.$OOHAТ!=-1)
{

$МTMcе(i);
}

$AеpАp($Il[mc.b_c],$0OA[mc.b_c]+30);


$рM1lМ($Il[mc.b_c],$0OA[mc.b_c]+30,300,20,100,-1,$ОМНоT);

$IрТ0H[mc.b_c]-=10;
$IрТ0H[mc.b_c2]-=15;
$IрТ0H[mc.b_c3]-=5;

$IрТ0H[mc.$MpoсеM]-=8;
$IрТ0H[mc.$МНIppО]-=6;

mc.$ТA0OОl=$0ТсTо($Il[mc.$MpoсеM],$0OA[mc.$MpoсеM],$OTpc1[mc.$MpoсеM],$IрТ0H[mc.$MpoсеM],$оОlHT[mc.$MpoсеM],true,4,$0рМOН+i);
mc.$оlНАMо=$0ТсTо($Il[mc.$МНIppО],$0OA[mc.$МНIppО],$OTpc1[mc.$MpoсеM],$IрТ0H[mc.$MpoсеM],$оОlHT[mc.$МНIppО],true,4,$0рМOН+i);

$оОlHT[mc.$MpoсеM]=8;
$оОlHT[mc.$МНIppО]=8;

$оcMlO[mc.$MpoсеM]=5;
$оcMlO[mc.$МНIppО]=5;

around[mc.$MpoсеM]=false;
around[mc.$МНIppО]=false;



}
}
else
{


if(mc.$OOHAТ!=-1)
{
$eMOАе=$0Ме1А[mc.$OOHAТ];
$eMOАе.$eoОpА=-0.1;
$eMOАе.$ееоАН=mc.$ееоАН;
$1еTАIM($eMOАе.$НТсМТ,$Il[mc.b_c3],$0OA[mc.b_c3],$OTpc1[mc.b_c3],$IрТ0H[mc.b_c3],1);
$1еTАIM($eMOАе.$р1eНM,$Il[mc.b_c3],$0OA[mc.b_c3],$OTpc1[mc.b_c3],$IрТ0H[mc.b_c3],1);
$1еTАIM($eMOАе.$рсOОА,$Il[mc.b_c],$0OA[mc.b_c]-$cТеМо[$eMOАе.$TIеce],$OTpc1[mc.b_c3],$IрТ0H[mc.b_c3],1);

if($eMOАе.$AМIМ1!=0)
{
let $IМ0eНc=$ll1lА;

if($еeсрo[mc.$MpoсеM]>0||$AМlоН[mc.$MpoсеM]==false)
{
$OTpc1[mc.$MpoсеM]-=Math.sin($HОpcl)*3*$eMOАе.$AМIМ1*mc.$ееоАН*$IМ0eНc;
$IрТ0H[mc.$MpoсеM]-=Math.cos($HОpcl)*3*$eMOАе.$AМIМ1*mc.$ееоАН*$IМ0eНc;


$0Н0Тl(mc.$MpoсеM);
}
if($еeсрo[mc.$МНIppО]>0||$AМlоН[mc.$МНIppО]==false)
{
$OTpc1[mc.$МНIppО]-=Math.sin($HОpcl)*3*$eMOАе.$AМIМ1*mc.$ееоАН*$IМ0eНc;
$IрТ0H[mc.$МНIppО]-=Math.cos($HОpcl)*3*$eMOАе.$AМIМ1*mc.$ееоАН*$IМ0eНc;


$0Н0Тl(mc.$МНIppО);
}
}

if($AОHMT&&$0Ме1А[mc.$OOHAТ][$МIIро]>0&&mc.$OOHAТ==$НAlНc)
{



$МTMcе(i);
}
}
else
{
if($AОHMT&&$0Ме1А[$НAlНc][$МIIро]>0)
if($0Ме1А[$НAlНc][$eТоM]>mc[$eТоM]-200&&$0Ме1А[$НAlНc][$eТоM]<mc[$eТоM]+200&&$0Ме1А[$НAlНc][$рHОМ]>mc[$рHОМ]-100&&$0Ме1А[$НAlНc][$рHОМ]<mc[$рHОМ]+100)
if($0Ме1А[$НAlНc].$eoОpА>=1)
{

$AОHMT=false;

$OcАe1($НAlНc,i);

}
}

}


mc[$eТоM]=$Il[mc.b_c];
mc[$рHОМ]=$0OA[mc.b_c];

if(mc.$оeoТе)
{
mc.w1[$eТоM]=$Il[mc.$ТA0OОl]-$Il[mc.b_c];
mc.w1[$рHОМ]=$0OA[mc.$ТA0OОl]-$0OA[mc.b_c];

mc.$рАеIo0[$eТоM]=$Il[mc.$оlНАMо]-$Il[mc.b_c];
mc.$рАеIo0[$рHОМ]=$0OA[mc.$оlНАMо]-$0OA[mc.b_c];

mc.w1.rotation=(mc[$eТоM]+mc.w1[$eТоM])*1;
mc.$рАеIo0.rotation=(mc[$eТоM]+mc.$рАеIo0[$eТоM])*1;
}
else
{
mc.w1[$eТоM]=$Il[mc.$MpoсеM]-$Il[mc.b_c];
mc.w1[$рHОМ]=$0OA[mc.$MpoсеM]-$0OA[mc.b_c];

mc.$рАеIo0[$eТоM]=$Il[mc.$МНIppО]-$Il[mc.b_c];
mc.$рАеIo0[$рHОМ]=$0OA[mc.$МНIppО]-$0OA[mc.b_c];

mc.w1.rotation=(mc[$eТоM]+mc.w1[$eТоM])*1;
mc.$рАеIo0.rotation=(mc[$eТоM]+mc.$рАеIo0[$eТоM])*1;
}


mc.carbody.rotation=270-$HОpcl/Math.PI*180;
}
if(mc.$eрlсe==1)
{

$HОpcl=Math.atan2($Il[mc.$c0НlТ]-$Il[mc.$рееоp],$0OA[mc.$c0НlТ]-$0OA[mc.$рееоp]);

if(mc.$рeО0pA==-1)
{
for(i2=0;i2<$cс0Hс;i2++)
if($ОpMрс[i2].io)
if($ОpMрс[i2].$соТAТ)
if($ОpMрс[i2].picken_by==-1)
if($ОpMрс[i2][$eТоM]>mc[$eТоM]-200&&$ОpMрс[i2][$eТоM]<mc[$eТоM]+200&&$ОpMрс[i2][$рHОМ]>mc[$рHОМ]-100&&$ОpMрс[i2][$рHОМ]<mc[$рHОМ]+300)
{
$ОpMрс[i2].picken_by=i;
mc.$рeО0pA=i2;
$o0MIс(mc.$OOHAТ);
}
}
else
{

$eMOАе=$ОpMрс[mc.$рeО0pA];

if(mc.$OOHAТ!=-1)
{
if(mc.$ееоАН==1)
{
if($0Ме1А[mc.$OOHAТ][$lо0HH]<mc[$eТоM]+300)
$0Ме1А[mc.$OOHAТ][$lо0HH]=mc[$eТоM]+300;
}
else
{
if($0Ме1А[mc.$OOHAТ][$lо0HH]>mc[$eТоM]-300)
$0Ме1А[mc.$OOHAТ][$lо0HH]=mc[$eТоM]-300;
}

$llМTO=$0Ме1А[mc.$OOHAТ].$pМсМе;
$0Ме1А[mc.$OOHAТ][$МАТОе]=mc.$рeО0pA;

if(Math.sin($llМTO)>0)
$eMOАе.scaleY=1;
else
$eMOАе.scaleY=-1;

$1еTАIM($eMOАе.$c0НlТ,$Il[mc.$рееоp],$0OA[mc.$рееоp],$OTpc1[mc.$рееоp],$IрТ0H[mc.$рееоp],1);
$1еTАIM($eMOАе.$рееоp,$Il[mc.$рееоp]+Math.sin($llМTO)*$eMOАе.$eHоНс,$0OA[mc.$рееоp]+Math.cos($llМTO)*$eMOАе.$eHоНс,$OTpc1[mc.$рееоp],$IрТ0H[mc.$рееоp],1);

if($0Ме1А[mc.$OOHAТ].$оeoТе)
{
$МTMcе(i);
}
}
else
{
$eMOАе.scaleY=mc.$ееоАН;

$1еTАIM($eMOАе.$c0НlТ,$Il[mc.$рееоp],$0OA[mc.$рееоp],$OTpc1[mc.$рееоp],$IрТ0H[mc.$рееоp],1);
$1еTАIM($eMOАе.$рееоp,$Il[mc.$рееоp]-Math.sin($HОpcl)*$eMOАе.$eHоНс,$0OA[mc.$рееоp]-Math.cos($HОpcl)*$eMOАе.$eHоНс,$OTpc1[mc.$рееоp],$IрТ0H[mc.$рееоp],1);
}
}

if(mc[$МIIро]<=0)
{
if(!mc.$оeoТе)
{
mc.$оeoТе=true;

mc.$ОрОAA=0;




mc.$ooНMН[$eТоM]=0;
mc.$ooНMН[$рHОМ]=0;
mc.$0T1MH[$eТоM]=0;
mc.$0T1MH[$рHОМ]=0;

mc.$ooНMН.scaleX=mc.$ееоАН;
mc.$0T1MH.scaleX=mc.$ееоАН;

mc.$рeTОTo.scaleX=mc.$ееоАН;
mc.$1еT0c0.scaleX=mc.$ееоАН;

mc.carbody.scaleY=mc.$ееоАН;

$оp0Нc($с1TI1е,mc[$eТоM],mc[$рHОМ]);




$cТеМо[mc.$роеpрН]=70;

if(mc.$OOHAТ!=-1)
{

$МTMcе(i);

}


if(mc[$МIIро]<-100)
{
$AеpАp($Il[mc.$c0НlТ],$0OA[mc.$c0НlТ]+30);

$рM1lМ($Il[mc.$c0НlТ],$0OA[mc.$c0НlТ]+30,300,20,100,-1,$ОМНоT);

$IрТ0H[mc.$рееоp]-=10;

$OTpc1[mc.$c0НlТ]+=5*mc.$ееоАН;
$OTpc1[mc.$0poolе]+=5*mc.$ееоАН;

$OTpc1[mc.$MpoсеM]-=10*mc.$ееоАН;
$OTpc1[mc.$МНIppО]-=5*mc.$ееоАН;
}
}
else
if(mc.io)
{
if(mc.$ОрОAA>1000)
{


if(mc.alpha>0.7)
mc.alpha=0.7;
else
mc.alpha-=0.05*$ll1lА;

if(mc.alpha<0.3)
{
$AМlоН[mc.$c0НlТ]=-1;
$AМlоН[mc.$рееоp]=-1;
$AМlоН[mc.$0poolе]=-1;
$AМlоН[mc.$MpoсеM]=-1;
$AМlоН[mc.$МНIppО]=-1;
$AМlоН[mc.$ТA0OОl]=-1;
$AМlоН[mc.$оlНАMо]=-1;

mc.io=false;
}
}

mc.$ОрОAA+=10*$ll1lА;
}
}
else
{
if(mc.$OOHAТ!=-1)
{
$eMOАе=$0Ме1А[mc.$OOHAТ];
$eMOАе.$eoОpА=-0.1;
$eMOАе.$ееоАН=mc.$ееоАН;
$1еTАIM($eMOАе.$НТсМТ,$Il[mc.$рееоp],$0OA[mc.$рееоp],$OTpc1[mc.$рееоp],$IрТ0H[mc.$рееоp],1);
$1еTАIM($eMOАе.$р1eНM,$Il[mc.$рееоp],$0OA[mc.$рееоp],$OTpc1[mc.$рееоp],$IрТ0H[mc.$рееоp],1);
$1еTАIM($eMOАе.$рсOОА,$Il[mc.$0poolе],$0OA[mc.$0poolе],$OTpc1[mc.$0poolе],$IрТ0H[mc.$0poolе],1);
$1еTАIM($eMOАе.$MОеМ1,$Il[mc.$c0НlТ],$0OA[mc.$c0НlТ],$OTpc1[mc.$c0НlТ],$IрТ0H[mc.$c0НlТ],1);




x3=Math.sin(mc.$1АНlAс)*30;

$ОOHТМ=Math.cos(mc.$1АНlAс)*10*mc.$opсТcр;
if(mc.$opсТcр>1)
$ОOHТМ=Math.cos(mc.$1АНlAс)*40*(mc.$opсТcр-0.75)*2;


x4=1;

if($eMOАе.$AМIМ1==0)
{
if(mc.$opсТcр>0.05)
mc.$opсТcр-=0.05*$ll1lА;
else
mc.$opсТcр=0;
}

if($eMOАе.$TНесe==1)
{
if(mc.$o1oМеH>60)
{
mc.$o1oМеH-=5*$ll1lА;
if($еeсрo[mc.$MpoсеM]>0||$еeсрo[mc.$МНIppО]>0)
{
$IрТ0H[mc.$c0НlТ]+=1*$ll1lА;
$IрТ0H[mc.$рееоp]+=1*$ll1lА;
$IрТ0H[mc.$0poolе]+=1*$ll1lА;
$IрТ0H[mc.$MpoсеM]+=1*$ll1lА;
$IрТ0H[mc.$MpoсеM]+=1*$ll1lА;
}
}
}
else
if($eMOАе.$TНесe==-1)
{
if(mc.$o1oМеH<100)
{
mc.$o1oМеH+=5;

if($еeсрo[mc.$MpoсеM]>0||$еeсрo[mc.$МНIppО]>0)
{
$IрТ0H[mc.$c0НlТ]-=2*$ll1lА;
$IрТ0H[mc.$рееоp]-=2*$ll1lА;
$IрТ0H[mc.$0poolе]-=2*$ll1lА;




$OTpc1[mc.$c0НlТ]+=$eMOАе.$AМIМ1*3*$ll1lА;
$OTpc1[mc.$рееоp]+=$eMOАе.$AМIМ1*1*$ll1lА;
$OTpc1[mc.$0poolе]+=$eMOАе.$AМIМ1*2*$ll1lА;
$OTpc1[mc.$MpoсеM]+=$eMOАе.$AМIМ1*1*$ll1lА;
$OTpc1[mc.$МНIppО]+=$eMOАе.$AМIМ1*2*$ll1lА;
}
}
}
else
{
if(mc.$o1oМеH<90)
mc.$o1oМеH+=1*$ll1lА;
else
if(mc.$o1oМеH>90)
mc.$o1oМеH-=1*$ll1lА;
}

$MOH01=($Il[mc.$c0НlТ]+$Il[mc.$MpoсеM])/2;
$MрIеО=($0OA[mc.$c0НlТ]+$0OA[mc.$MpoсеM])/2;

$АННМlН(mc.$c0НlТ,$MOH01+x3,$MрIеО-mc.$o1oМеH+$ОOHТМ,x4);
$АННМlН(mc.$MpoсеM,$MOH01-x3,$MрIеО+mc.$o1oМеH-$ОOHТМ,x4);

$MOH01=($Il[mc.$c0НlТ]+$Il[mc.$МНIppО])/2;
$MрIеО=($0OA[mc.$c0НlТ]+$0OA[mc.$МНIppО])/2;

$АННМlН(mc.$c0НlТ,$MOH01-x3,$MрIеО-mc.$o1oМеH-$ОOHТМ,x4);
$АННМlН(mc.$МНIppО,$MOH01+x3,$MрIеО+mc.$o1oМеH+$ОOHТМ,x4);



$MOH01=($Il[mc.$c0НlТ]+$Il[mc.$рееоp])/2;
$MрIеО=($0OA[mc.$c0НlТ]+$0OA[mc.$рееоp])/2;

$АННМlН(mc.$c0НlТ,$MOH01-25*mc.$ееоАН,$MрIеО,x4);
$АННМlН(mc.$рееоp,$MOH01+25*mc.$ееоАН,$MрIеО,x4);




$AМlоН[mc.$c0НlТ]=true;
$MАTАl[mc.$c0НlТ]=0;

$AМlоН[mc.$MpoсеM]=true;
$MАTАl[mc.$MpoсеM]=0;

$AМlоН[mc.$МНIppО]=true;
$MАTАl[mc.$МНIppО]=0;

if($eMOАе.$AМIМ1!=0)
{
if(mc.$opсТcр<1)
$MOH01=-$eMOАе.$AМIМ1*0.08*mc.$opсТcр;
else
$MOH01=-$eMOАе.$AМIМ1*0.08*(2-mc.$opсТcр);

mc.$1АНlAс+=$MOH01*$ll1lА;

mc.$сMpОoo+=$MOH01*$ll1lА;
if(mc.$сMpОoo>Math.PI)
{
$оp0Нc($есOНТA,mc[$eТоM],mc[$рHОМ]);
mc.$сMpОoo-=Math.PI;
}
if(mc.$сMpОoo<-Math.PI)
{
$оp0Нc($есOНТA,mc[$eТоM],mc[$рHОМ]);
mc.$сMpОoo+=Math.PI;
}
mc.$IсНIeе+=$MOH01*$ll1lА;
if(mc.$IсНIeе>Math.PI)
{
$оp0Нc($IpсH0Н,mc[$eТоM],mc[$рHОМ]);
mc.$IсНIeе-=Math.PI;
}
if(mc.$IсНIeе<-Math.PI)
{
$оp0Нc($IpсH0Н,mc[$eТоM],mc[$рHОМ]);
mc.$IсНIeе+=Math.PI;
}

if($еeсрo[mc.$MpoсеM]>0||$еeсрo[mc.$МНIppО]>0)
$OTpc1[mc.$c0НlТ]+=$eMOАе.$AМIМ1*1.5*$ll1lА;

if(mc.$opсТcр<0.95)
mc.$opсТcр+=0.05*$ll1lА;







if(!$рeHТрT(($Il[mc.$MpoсеM]+$Il[mc.$MpoсеM])/2+$eMOАе.$AМIМ1*150,($0OA[mc.$MpoсеM]+$0OA[mc.$MpoсеM])/2))
{
if(mc.$opсТcр<1.45)
mc.$opсТcр+=0.05*$ll1lА;
else
mc.$opсТcр=1.5*$ll1lА;
}
else
{
if(mc.$opсТcр>1.05)
mc.$opсТcр-=0.05*$ll1lА;
}


}

if($AОHMT&&$0Ме1А[mc.$OOHAТ][$МIIро]>0&&mc.$OOHAТ==$НAlНc)
{

$МTMcе(i)
}
}
else
{
x4=1;

x3=Math.sin(mc.$1АНlAс)*25;
$ОOHТМ=Math.cos(mc.$1АНlAс)*10*mc.$opсТcр;

if(mc.$opсТcр>0.05)
mc.$opсТcр-=0.05;
else
mc.$opсТcр=0;

$MOH01=($Il[mc.$c0НlТ]+$Il[mc.$MpoсеM])/2;
$MрIеО=($0OA[mc.$c0НlТ]+$0OA[mc.$MpoсеM])/2;

$АННМlН(mc.$c0НlТ,$MOH01+x3,$MрIеО-90+$ОOHТМ,x4);
$АННМlН(mc.$MpoсеM,$MOH01-x3,$MрIеО+90-$ОOHТМ,x4);

$MOH01=($Il[mc.$c0НlТ]+$Il[mc.$МНIppО])/2;
$MрIеО=($0OA[mc.$c0НlТ]+$0OA[mc.$МНIppО])/2;

$АННМlН(mc.$c0НlТ,$MOH01-10-x3,$MрIеО-90-$ОOHТМ,x4);
$АННМlН(mc.$МНIppО,$MOH01+10+x3,$MрIеО+90+$ОOHТМ,x4);



$MOH01=($Il[mc.$c0НlТ]+$Il[mc.$рееоp])/2;
$MрIеО=($0OA[mc.$c0НlТ]+$0OA[mc.$рееоp])/2;

$АННМlН(mc.$c0НlТ,$MOH01-23*mc.$ееоАН,$MрIеО-10,x4);
$АННМlН(mc.$рееоp,$MOH01+23*mc.$ееоАН,$MрIеО+10,x4);

if($AОHMT&&$0Ме1А[$НAlНc][$МIIро]>0)
if($0Ме1А[$НAlНc][$eТоM]>mc[$eТоM]-200&&$0Ме1А[$НAlНc][$eТоM]<mc[$eТоM]+200&&$0Ме1А[$НAlНc][$рHОМ]>mc[$рHОМ]-100&&$0Ме1А[$НAlНc][$рHОМ]<mc[$рHОМ]+300)
if($0Ме1А[$НAlНc].$eoОpА>=1)
{


$OcАe1(0,i);
}
}
}
$cТеМо[mc.$cpAАр]=$cТеМо[mc.$HeрoI1]=$НOНОН($Il[mc.$c0НlТ],$0OA[mc.$c0НlТ],$Il[mc.$MpoсеM],$0OA[mc.$MpoсеM])/3;
$cТеМо[mc.$l0ТMМ1]=$cТеМо[mc.$ое0ОlМ]=$НOНОН($Il[mc.$c0НlТ],$0OA[mc.$c0НlТ],$Il[mc.$МНIppО],$0OA[mc.$МНIppО])/3;

mc[$eТоM]=$Il[mc.$c0НlТ];
mc[$рHОМ]=$0OA[mc.$c0НlТ];



mc.carbody.rotation=270-$HОpcl/Math.PI*180;

mc.$ooНMН.rotation=180-Math.atan2($Il[mc.$c0НlТ]-$Il[mc.$MpoсеM],$0OA[mc.$c0НlТ]-$0OA[mc.$MpoсеM])/Math.PI*180;
$еcoсТ(mc.$ooНMН,Math.max(1,Math.min(100,Math.round($НOНОН($Il[mc.$c0НlТ],$0OA[mc.$c0НlТ],$Il[mc.$MpoсеM],$0OA[mc.$MpoсеM])/210*100))),5);



mc.$0T1MH.rotation=180-Math.atan2($Il[mc.$c0НlТ]-$Il[mc.$МНIppО],$0OA[mc.$c0НlТ]-$0OA[mc.$МНIppО])/Math.PI*180;
$еcoсТ(mc.$0T1MH,Math.max(1,Math.min(100,Math.round($НOНОН($Il[mc.$c0НlТ],$0OA[mc.$c0НlТ],$Il[mc.$МНIppО],$0OA[mc.$МНIppО])/210*100))),5);


mc.$рeTОTo[$eТоM]=$Il[mc.$MpoсеM]-$Il[mc.$c0НlТ];
mc.$рeTОTo[$рHОМ]=$0OA[mc.$MpoсеM]-$0OA[mc.$c0НlТ];

mc.$1еT0c0[$eТоM]=$Il[mc.$МНIppО]-$Il[mc.$c0НlТ];
mc.$1еT0c0[$рHОМ]=$0OA[mc.$МНIppО]-$0OA[mc.$c0НlТ];


if($еeсрo[mc.$MpoсеM]&&!mc.$оeoТе)
mc.$рeTОTo.rotation-=Math.sin(mc.$рeTОTo.rotation/180*Math.PI)*25*$ll1lА;
else
mc.$рeTОTo.rotation=mc.$ooНMН.rotation;

if($еeсрo[mc.$МНIppО]&&!mc.$оeoТе)
mc.$1еT0c0.rotation-=Math.sin(mc.$1еT0c0.rotation/180*Math.PI)*25*$ll1lА;
else
mc.$1еT0c0.rotation=mc.$0T1MH.rotation;



}
if(mc.$eрlсe==2)
{


$HОpcl=($Il[mc.$oIHАHc]+$Il[mc.$TоТpAе])/2
$llМTO=($0OA[mc.$oIHАHc]+$0OA[mc.$TоТpAе])/2

if(mc[$МIIро]<=0)
{
if(!mc.$оeoТе)
{
mc.$оeoТе=true;

mc.gotoAndStop(3);


$НOрНр[mc.$cTTсос]=-1;
$НOрНр[mc.$0АMeТТ]=-1;
$НOрНр[mc.$Не0срО]=-1;
$НOрНр[mc.$eсoМ1M]=-1;
$НOрНр[mc.$MНоТ0О]=-1;
$НOрНр[mc.$I0IIАl]=-1;
$НOрНр[mc.$оpсcМТ]=-1;

$НOрНр[mc.$1МНОIе]=-1;

$OTpc1[mc.$oIHАHc]=0;
$IрТ0H[mc.$oIHАHc]=0;

$OTpc1[mc.$оOО1HТ]=0;
$IрТ0H[mc.$оOО1HТ]=0;

$OTpc1[mc.$Арс0ce]=0;
$IрТ0H[mc.$Арс0ce]=0;

$OTpc1[mc.$00АoOН]=0;
$IрТ0H[mc.$00АoOН]=0;

$OTpc1[mc.$МрII1А]=0;
$IрТ0H[mc.$МрII1А]=0;

$OTpc1[mc.$oОTТTp]=0;
$IрТ0H[mc.$oОTТTp]=0;

$OTpc1[mc.$TоТpAе]=0;
$IрТ0H[mc.$TоТpAе]=0;

$OTpc1[mc.$ОOAT0l]=0;
$IрТ0H[mc.$ОOAT0l]=0;



$OTpc1[mc.$oОTТTp]-=5;
$OTpc1[mc.$оOО1HТ]-=10;

$OTpc1[mc.$ОOAT0l]+=5;
$OTpc1[mc.$00АoOН]+=10;

$IрТ0H[mc.$Арс0ce]-=2+Math.random()*10;
$IрТ0H[mc.$oIHАHc]-=2+Math.random()*10;


$MOH01=3+Math.random()*4;
$OTpc1[mc.$Арс0ce]+=$MOH01;
$OTpc1[mc.$oIHАHc]+=$MOH01;


if(mc.$OOHAТ!=-1)
{
i2=mc.$OOHAТ;
$МTMcе(i);
$0Ме1А[i2].$eoОpА=-1;
$0Ме1А[i2][$eТоM]=$HОpcl;
$0Ме1А[i2][$рHОМ]=$llМTO;
$0Ме1А[i2][$АсТOе]=0;
$0Ме1А[i2][$МcеAH]=0;
}
}
}
else
{
if(mc.$OOHAТ!=-1)
{
$eMOАе=$0Ме1А[mc.$OOHAТ];
$eMOАе.$eoОpА=-0.1;
$eMOАе.$ееоАН=mc.$ееоАН;

$eMOАе[$eТоM]=mc[$eТоM];
$eMOАе[$рHОМ]=mc[$рHОМ];
$eMOАе[$АсТOе]=0;
$eMOАе[$МcеAH]=0;



$MOH01=0;
$MрIеО=0;
$1еTАIM($eMOАе.$НТсМТ,$HОpcl,$llМTO+30,$MOH01,$MрIеО,1);
$1еTАIM($eMOАе.$р1eНM,$HОpcl,$llМTO+30,$MOH01,$MрIеО,1);

$1еTАIM($eMOАе.$MОеМ1,$HОpcl,$llМTO,$MOH01,$MрIеО,1);

$1еTАIM($eMOАе.$e1IOМ,$HОpcl,$llМTO-30,$MOH01,$MрIеО,1);


}
}

mc[$eТоM]=$HОpcl;
mc[$рHОМ]=$llМTO;

$MOH01=Math.atan2($Il[mc.$МрII1А]-$Il[mc.$TоТpAе],$0OA[mc.$МрII1А]-$0OA[mc.$TоТpAе]);
mc.$Нolo1О.rotation=270-$MOH01/Math.PI*180;
mc.$Нolo1О[$eТоM]=($Il[mc.$МрII1А]+$Il[mc.$TоТpAе])/2-$HОpcl;
mc.$Нolo1О[$рHОМ]=($0OA[mc.$МрII1А]+$0OA[mc.$TоТpAе])/2-$llМTO;

$MOH01=Math.atan2($Il[mc.$oIHАHc]-$Il[mc.$Арс0ce],$0OA[mc.$oIHАHc]-$0OA[mc.$Арс0ce]);
mc.$рАрос.rotation=90-$MOH01/Math.PI*180;
mc.$рАрос[$eТоM]=($Il[mc.$oIHАHc]+$Il[mc.$Арс0ce])/2-$HОpcl;
mc.$рАрос[$рHОМ]=($0OA[mc.$oIHАHc]+$0OA[mc.$Арс0ce])/2-$llМTO;

$MOH01=Math.atan2($Il[mc.$оOО1HТ]-$Il[mc.$oОTТTp],$0OA[mc.$оOО1HТ]-$0OA[mc.$oОTТTp]);
mc.$рoH1eр.rotation=180-$MOH01/Math.PI*180;
mc.$рoH1eр[$eТоM]=($Il[mc.$оOО1HТ]+$Il[mc.$oОTТTp])/2-$HОpcl;
mc.$рoH1eр[$рHОМ]=($0OA[mc.$оOО1HТ]+$0OA[mc.$oОTТTp])/2-$llМTO;

$MOH01=Math.atan2($Il[mc.$00АoOН]-$Il[mc.$ОOAT0l],$0OA[mc.$00АoOН]-$0OA[mc.$ОOAT0l]);
mc.$1M0HОс.rotation=-$MOH01/Math.PI*180;
mc.$1M0HОс[$eТоM]=($Il[mc.$00АoOН]+$Il[mc.$ОOAT0l])/2-$HОpcl;
mc.$1M0HОс[$рHОМ]=($0OA[mc.$00АoOН]+$0OA[mc.$ОOAT0l])/2-$llМTO;


}
else
if(mc.$eрlсe==3)
{
if(mc[$МIIро]<=0)
{
if(!mc.$оeoТе)
{
mc.$оeoТе=true;
$оp0Нc($ТecA1H,mc[$eТоM],mc[$рHОМ]);

mc.rotation=0;

mc.gotoAndStop(2);

for(n2=0;n2<mc.$Т1cоO1;n2++)
{
mc[$M1IНН+n2]=$0ТсTо(mc[$eТоM]+mc[$оIОеT+n2][$eТоM],
mc[$рHОМ]+mc[$оIОеT+n2][$рHОМ],
(Math.random()-0.5)*20,
(Math.random()-0.5)*20,
0,false,9,$0рМOН+i);








}






$oОI10(mc.b_c);
$oОI10(mc.$oIHАHc);
$oОI10(mc.$Арс0ce);
$oОI10(mc.$МрII1А);
$oОI10(mc.$TоТpAе);
mc.b_c=undefined;
mc.$oIHАHc=undefined;
mc.$Арс0ce=undefined;
mc.$МрII1А=undefined;
mc.$TоТpAе=undefined;

if(mc.$рeО0pA!=-1)
{
i2=mc.$рeО0pA;
$ОpMрс[i2].picken_by=-1;
$ОpMрс[i2].$соТAТ=false;
$AМlоН[$ОpMрс[i2].$c0НlТ]=true;
$MАTАl[$ОpMрс[i2].$c0НlТ]=0;
$AМlоН[$ОpMрс[i2].$рееоp]=true;
$MАTАl[$ОpMрс[i2].$рееоp]=0;

$OTpc1[$ОpMрс[i2].$c0НlТ]=-3+Math.random()*6;
$IрТ0H[$ОpMрс[i2].$c0НlТ]=-3+Math.random()*6;
$OTpc1[$ОpMрс[i2].$рееоp]=-3+Math.random()*6;
$IрТ0H[$ОpMрс[i2].$рееоp]=-3+Math.random()*6;

$ОpMрс[i2].alpha=1;
}
if(mc.$АoОcIT!=-1)
{
i2=mc.$АoОcIT;
$ОpMрс[i2].picken_by=-1;
$ОpMрс[i2].$соТAТ=false;
$AМlоН[$ОpMрс[i2].$c0НlТ]=true;
$MАTАl[$ОpMрс[i2].$c0НlТ]=0;
$AМlоН[$ОpMрс[i2].$рееоp]=true;
$MАTАl[$ОpMрс[i2].$рееоp]=0;

$OTpc1[$ОpMрс[i2].$c0НlТ]=-3+Math.random()*6;
$IрТ0H[$ОpMрс[i2].$c0НlТ]=-3+Math.random()*6;
$OTpc1[$ОpMрс[i2].$рееоp]=-3+Math.random()*6;
$IрТ0H[$ОpMрс[i2].$рееоp]=-3+Math.random()*6;

$ОpMрс[i2].alpha=1;
}
if(mc.$TОpHер!=-1)
{
i2=mc.$TОpHер;
$ОpMрс[i2].picken_by=-1;
$ОpMрс[i2].$соТAТ=false;
$AМlоН[$ОpMрс[i2].$c0НlТ]=true;
$MАTАl[$ОpMрс[i2].$c0НlТ]=0;
$AМlоН[$ОpMрс[i2].$рееоp]=true;
$MАTАl[$ОpMрс[i2].$рееоp]=0;

$OTpc1[$ОpMрс[i2].$c0НlТ]=-3+Math.random()*6;
$IрТ0H[$ОpMрс[i2].$c0НlТ]=-3+Math.random()*6;
$OTpc1[$ОpMрс[i2].$рееоp]=-3+Math.random()*6;
$IрТ0H[$ОpMрс[i2].$рееоp]=-3+Math.random()*6;

$ОpMрс[i2].alpha=1;
}
}
}
else
{
if(mc.$AMeeре>0)
{
mc.$AMeeре-=1;

if(mc.$рeО0pA==-1)
{
for(i2=0;i2<$cс0Hс&&mc.$рeО0pA==-1;i2++)
if($ОpMрс[i2].io)
if(!$ОpMрс[i2].$соТAТ)
if($ОpMрс[i2].picken_by==-1)
if($ОpMрс[i2][$eТоM]>mc[$eТоM]-100&&$ОpMрс[i2][$eТоM]<mc[$eТоM]+100&&$ОpMрс[i2][$рHОМ]>mc[$рHОМ]-100&&$ОpMрс[i2][$рHОМ]<mc[$рHОМ]+100)
{
$ОpMрс[i2].picken_by=i;

$ОpMрс[i2].$соТAТ=true;
$ОpMрс[i2].alpha=0;
mc.$рeО0pA=i2;

}
}
else
if(mc.$АoОcIT==-1)
{
for(i2=0;i2<$cс0Hс&&mc.$АoОcIT==-1;i2++)
if($ОpMрс[i2].io)
if(!$ОpMрс[i2].$соТAТ)
if($ОpMрс[i2].picken_by==-1)
if($ОpMрс[i2][$eТоM]>mc[$eТоM]-100&&$ОpMрс[i2][$eТоM]<mc[$eТоM]+100&&$ОpMрс[i2][$рHОМ]>mc[$рHОМ]-100&&$ОpMрс[i2][$рHОМ]<mc[$рHОМ]+100)
{
$ОpMрс[i2].picken_by=i;
$ОpMрс[i2].$соТAТ=true;
$ОpMрс[i2].alpha=0;
mc.$АoОcIT=i2;

}
}
else
if(mc.$TОpHер==-1)
{
for(i2=0;i2<$cс0Hс&&mc.$TОpHер==-1;i2++)
if($ОpMрс[i2].io)
if(!$ОpMрс[i2].$соТAТ)
if($ОpMрс[i2].picken_by==-1)
if($ОpMрс[i2][$eТоM]>mc[$eТоM]-100&&$ОpMрс[i2][$eТоM]<mc[$eТоM]+100&&$ОpMрс[i2][$рHОМ]>mc[$рHОМ]-100&&$ОpMрс[i2][$рHОМ]<mc[$рHОМ]+100)
{
$ОpMрс[i2].picken_by=i;
$ОpMрс[i2].$соТAТ=true;
$ОpMрс[i2].alpha=0;
mc.$TОpHер=i2;

}
}

}
if(mc.$рeО0pA!=-1)
{
$eMOАе=$ОpMрс[mc.$рeО0pA];
$1еTАIM($eMOАе.$c0НlТ,$Il[mc.$oIHАHc],$0OA[mc.$oIHАHc],$OTpc1[mc.$oIHАHc],$IрТ0H[mc.$oIHАHc],1);
$1еTАIM($eMOАе.$рееоp,$Il[mc.$TоТpAе],$0OA[mc.$TоТpAе],$OTpc1[mc.$TоТpAе],$IрТ0H[mc.$TоТpAе],1);
}
if(mc.$АoОcIT!=-1)
{
$eMOАе=$ОpMрс[mc.$АoОcIT];
$1еTАIM($eMOАе.$c0НlТ,$Il[mc.$oIHАHc],$0OA[mc.$oIHАHc],$OTpc1[mc.$oIHАHc],$IрТ0H[mc.$oIHАHc],1);
$1еTАIM($eMOАе.$рееоp,$Il[mc.$TоТpAе],$0OA[mc.$TоТpAе],$OTpc1[mc.$TоТpAе],$IрТ0H[mc.$TоТpAе],1);
}
if(mc.$TОpHер!=-1)
{
$eMOАе=$ОpMрс[mc.$TОpHер];
$1еTАIM($eMOАе.$c0НlТ,$Il[mc.$oIHАHc],$0OA[mc.$oIHАHc],$OTpc1[mc.$oIHАHc],$IрТ0H[mc.$oIHАHc],1);
$1еTАIM($eMOАе.$рееоp,$Il[mc.$TоТpAе],$0OA[mc.$TоТpAе],$OTpc1[mc.$TоТpAе],$IрТ0H[mc.$TоТpAе],1);
}
}

if(mc.currentFrame==1)
{
mc[$eТоM]=$Il[mc.b_c];
mc[$рHОМ]=$0OA[mc.b_c];

$MOH01=Math.atan2($Il[mc.$МрII1А]-$Il[mc.$TоТpAе],$0OA[mc.$МрII1А]-$0OA[mc.$TоТpAе]);

mc.rotation=180-$MOH01/Math.PI*180;
}
else
{
for(n2=0;n2<mc.$Т1cоO1;n2++)
if(mc[$оIОеT+n2].visible==true)
{


mc[$оIОеT+n2][$eТоM]=$Il[mc[$M1IНН+n2]]-mc[$eТоM];
mc[$оIОеT+n2][$рHОМ]=$0OA[mc[$M1IНН+n2]]-mc[$рHОМ];


mc[$оIОеT+n2].rotation+=$OTpc1[mc[$M1IНН+n2]]*4*$ll1lА;

if(Math.abs($OTpc1[mc[$M1IНН+n2]]+$IрТ0H[mc[$M1IНН+n2]])<1)
mc[$оIОеT+n2].rotation-=Math.sin(mc[$оIОеT+n2].rotation/180*Math.PI*2)*10*$ll1lА;


if($AМlоН[mc[$M1IНН+n2]]==false)
{

if(mc[$оIОеT+n2].alpha>0)
mc[$оIОеT+n2].alpha-=0.01*$ll1lА;
else
{
mc[$оIОеT+n2].visible=false;


$oОI10(mc[$M1IНН+n2]);
mc[$M1IНН+n2]=undefined;
}
}
else
{
if(mc[$оIОеT+n2].alpha<1)
mc[$оIОеT+n2].alpha+=0.01*$ll1lА;
}
}
}
}
else
if(mc.$eрlсe==4||mc.$eрlсe==7)
{
$MOH01=Math.atan2($Il[mc.b_c]-$Il[mc.b_c1],$0OA[mc.b_c]-$0OA[mc.b_c1]);

if(mc.$рeО0pA==-1)
{
for(i2=0;i2<$cс0Hс;i2++)
if($ОpMрс[i2].io)
if($ОpMрс[i2].$соТAТ)
if($ОpMрс[i2].picken_by==-1)
if($ОpMрс[i2][$eТоM]>mc[$eТоM]-100&&$ОpMрс[i2][$eТоM]<mc[$eТоM]+100&&$ОpMрс[i2][$рHОМ]>mc[$рHОМ]-100&&$ОpMрс[i2][$рHОМ]<mc[$рHОМ]+100)

{
$ОpMрс[i2].picken_by=i;

mc.$рeО0pA=i2;
$o0MIс(mc.$OOHAТ);
}
}
else
{

$eMOАе=$ОpMрс[mc.$рeО0pA];

$eMOАе.scaleY=mc.$ееоАН;
if(mc.$OOHAТ!=-1&&mc[$МIIро]>0)
{

$llМTO=$0Ме1А[mc.$OOHAТ].$pМсМе;
$0Ме1А[mc.$OOHAТ][$МАТОе]=mc.$рeО0pA;




$1еTАIM($eMOАе.$c0НlТ,$Il[mc.b_c2],$0OA[mc.b_c2],$OTpc1[mc.b_c2],$IрТ0H[mc.b_c2],1);
$1еTАIM($eMOАе.$рееоp,$Il[mc.b_c2]+Math.sin($llМTO)*$eMOАе.$eHоНс,$0OA[mc.b_c2]+Math.cos($llМTO)*$eMOАе.$eHоНс,$OTpc1[mc.b_c2],$IрТ0H[mc.b_c2],1);
}
else
{


$1еTАIM($eMOАе.$c0НlТ,$Il[mc.b_c2],$0OA[mc.b_c2],$OTpc1[mc.b_c2],$IрТ0H[mc.b_c2],1);
$1еTАIM($eMOАе.$рееоp,$Il[mc.b_c2]-Math.sin($MOH01)*$eMOАе.$eHоНс,$0OA[mc.b_c2]-Math.cos($MOH01)*$eMOАе.$eHоНс,$OTpc1[mc.b_c2],$IрТ0H[mc.b_c2],1);
}
}


if(mc.$OOHAТ!=-1)
if($0Ме1А[mc.$OOHAТ].io)
{
$eMOАе=$0Ме1А[mc.$OOHAТ];

if($eMOАе.$оeoТе)
mc[$МIIро]=0;

if(mc[$МIIро]>0)
{
if(!$eMOАе.$HМ0М1)
{
if(mc.$eрlсe==4)
if($МАрМcl(mc[$eТоM],mc[$рHОМ],mc[$eТоM],mc[$рHОМ]+400))
{
$eMOАе.$TНесe=1;
}

if(mc.$eрlсe==7)
if(!$МАрМcl(mc[$eТоM],mc[$рHОМ],mc[$eТоM]+$eMOАе.$AМIМ1*200,mc[$рHОМ]-100))
{
$eMOАе.$TНесe=1;
}

if(!$МАрМcl(mc[$eТоM],mc[$рHОМ],mc[$eТоM]+$eMOАе.$AМIМ1*200,mc[$рHОМ]+100))
{
$eMOАе.$TНесe=-1;
}
}
u=1;
v=1;

if(mc.$eрlсe==7)
{
u=2;
v=1.5;
}

$IрТ0H[mc.b_c]-=0.8*$ll1lА;
$IрТ0H[mc.b_c1]-=0.8*$ll1lА;

$IрТ0H[mc.b_c2]+=0.8*$ll1lА;
$IрТ0H[mc.b_c3]+=0.8*$ll1lА;


$OTpc1[mc.b_c]*=Math.pow(0.9,$ll1lА);
$IрТ0H[mc.b_c]*=Math.pow(0.9,$ll1lА);

$OTpc1[mc.b_c1]*=Math.pow(0.9,$ll1lА);
$IрТ0H[mc.b_c1]*=Math.pow(0.9,$ll1lА);

$OTpc1[mc.b_c2]*=Math.pow(0.9,$ll1lА);
$IрТ0H[mc.b_c2]*=Math.pow(0.9,$ll1lА);

$OTpc1[mc.b_c3]*=Math.pow(0.9,$ll1lА);
$IрТ0H[mc.b_c3]*=Math.pow(0.9,$ll1lА);

$IрТ0H[mc.b_c]+=$eMOАе.$TНесe*2*$ll1lА*v;
$IрТ0H[mc.b_c1]+=$eMOАе.$TНесe*2*$ll1lА*v;

$OTpc1[mc.b_c]+=$eMOАе.$AМIМ1*1*$ll1lА*u;
$OTpc1[mc.b_c1]+=$eMOАе.$AМIМ1*1*$ll1lА*u;

$OTpc1[mc.b_c2]+=$eMOАе.$AМIМ1*0.5*$ll1lА*u;
$OTpc1[mc.b_c3]+=$eMOАе.$AМIМ1*0.5*$ll1lА*u;

$AМlоН[mc.b_c]=true;
$AМlоН[mc.b_c1]=true;
$AМlоН[mc.b_c2]=true;
$AМlоН[mc.b_c3]=true;

$MАTАl[mc.b_c]=0;
$MАTАl[mc.b_c1]=0;
$MАTАl[mc.b_c2]=0;
$MАTАl[mc.b_c3]=0;

if(($eMOАе[$lо0HH]>mc[$eТоM]+50&&mc.$ееоАН==-1)||($eMOАе[$lо0HH]<mc[$eТоM]-50&&mc.$ееоАН==1))
{
i2=mc.b_c;
mc.b_c=mc.b_c1;
mc.b_c1=i2;

i2=mc.b_c2;
mc.b_c2=mc.b_c3;
mc.b_c3=i2;

if($eMOАе[$lо0HH]>mc[$eТоM])
mc.$ееоАН=1;
else
mc.$ееоАН=-1;

mc.carbody.scaleY=mc.$ееоАН;
$MOH01=Math.atan2($Il[mc.b_c]-$Il[mc.b_c1],$0OA[mc.b_c]-$0OA[mc.b_c1]);
}
}
else
mc[$МIIро]=0;

$eMOАе.$eoОpА=-0.1;


$HОpcl=$Il[mc.b_c];
$llМTO=$0OA[mc.b_c];

$1еTАIM($eMOАе.$MОеМ1,$HОpcl,$llМTO,0,0,1);
$eMOАе[$eТоM]=$HОpcl;
$eMOАе[$рHОМ]=$llМTO;
$eMOАе[$АсТOе]=0;
$eMOАе[$МcеAH]=0;
}

if(mc[$МIIро]<=0)
{
if(!mc.$оeoТе)
{
mc.$оeoТе=true;

if(mc.$OOHAТ!=-1)
{
$eMOАе[$МIIро]=0;
$eMOАе.visible=false;
$eMOАе.alpha=0;
}

mc.gotoAndStop(3);

mc.carbody.scaleY=mc.$ееоАН;

if(mc.$eрlсe==4)
$оp0Нc($eТIAIО,mc[$eТоM],mc[$рHОМ]);
else
$оp0Нc($ТеАеTр,mc[$eТоM],mc[$рHОМ]);


if(mc.$eрlсe==4)
$рM1lМ($Il[mc.b_c1],$0OA[mc.b_c1],200,8,30,-1,$ОМНоT);
else
$рM1lМ($Il[mc.b_c1],$0OA[mc.b_c1],400,11,80,-1,$ОМНоT);


}
}

mc[$eТоM]=$Il[mc.b_c];
mc[$рHОМ]=$0OA[mc.b_c]+100;
mc.carbody[$рHОМ]=-100;


mc.carbody.rotation=270-$MOH01/Math.PI*180;
}
else
if(mc.$eрlсe==5)
{
$Il[mc.b_c0]=mc[$eТоM];
$0OA[mc.b_c0]=mc[$рHОМ];
$OTpc1[mc.b_c0]=0;
$IрТ0H[mc.b_c0]=0;

if(mc.$Ae0lTр>0)
mc.$Ae0lTр-=$ll1lА;

let $HТolp1=false;

for(i2=0;i2<9;i2++)
{
let $plОоl1=mc[$e0leА+i2];

mc[$olOcН+i2][$eТоM]=$Il[$plОоl1]-mc[$eТоM];
mc[$olOcН+i2][$рHОМ]=$0OA[$plОоl1]-mc[$рHОМ];


$AМlоН[$plОоl1]=true;
$MАTАl[$plОоl1]=0;


mc[$olOcН+i2].rotation=180-Math.atan2($Il[$plОоl1]-$Il[mc[$e0leА+(i2+1)]],$0OA[$plОоl1]-$0OA[mc[$e0leА+(i2+1)]])*180/Math.PI;
mc[$olOcН+i2].scaleY=$НOНОН($Il[$plОоl1],$0OA[$plОоl1],$Il[mc[$e0leА+(i2+1)]],$0OA[mc[$e0leА+(i2+1)]])*0.01;

if(mc.$Ae0lTр<=0)
{

if(mc.$OOHAТ==-1)
if(!$AОHMT)
if($0Ме1А[$НAlНc].$HНрНТ==-1)
if($0Ме1А[$НAlНc].$ОMррe==-1)
if($НOНОН($Il[$plОоl1],$0OA[$plОоl1],$Il[$0Ме1А[$НAlНc].$1O1lM],$0OA[$0Ме1А[$НAlНc].$1O1lM])<40)
{
mc.$OOHAТ=$НAlНc;
mc.$ОI0eOО=i2;

let $eMOАе=$0Ме1А[mc.$OOHAТ];

$eMOАе.$ОMррe=i;

$Il[$plОоl1]=$Il[$eMOАе.$1O1lM];
$0OA[$plОоl1]=$0OA[$eMOАе.$1O1lM];

$OTpc1[$plОоl1]=$OTpc1[$eMOАе.$1O1lM];
$IрТ0H[$plОоl1]=$IрТ0H[$eMOАе.$1O1lM];
}
}

if(mc.$OOHAТ!=-1)
if($оОHMT[mc.$OOHAТ])
if(Math.round(mc.$ОI0eOО)==i2)

{
let $eMOАе=$0Ме1А[mc.$OOHAТ];
$eMOАе.$eoОpА=-0.1;

let $оTIНc=$ll1lА;

if($сIоTТ&&$ll1lА>1.25)
$оTIНc*=2;





































let an=Math.atan2(mc[$eТоM]-$Il[$plОоl1],mc[$рHОМ]-$0OA[$plОоl1])+Math.PI/2;

$OTpc1[$plОоl1]-=Math.sin(an)*$eMOАе.$AМIМ1*$оTIНc*0.5;
$IрТ0H[$plОоl1]-=Math.cos(an)*$eMOАе.$AМIМ1*$оTIНc*0.5;



mc.$ОI0eOО=Math.max(0.5,Math.min(8,mc.$ОI0eOО+$eMOАе.$TНесe*0.25*$оTIНc));


$AМlоН[$plОоl1]=true;
$MАTАl[$plОоl1]=true;



if($AОHMT||$eMOАе.$ОeНIpo||$0Ме1А[mc.$OOHAТ].$оeoТе)
{
$HТolp1=true;
}
}
}

if(mc.$OOHAТ!=-1)
if($оОHMT[mc.$OOHAТ])
{
let $eMOАе=$0Ме1А[mc.$OOHAТ];
let $оTIНc=(mc.$OOHAТ===$НAlНc)? $I00le : $ll1lА;

let $оeАlcH=Math.floor(mc.$ОI0eOО);
let $IOс1ТA=Math.ceil(mc.$ОI0eOО);
let morph=mc.$ОI0eOО-$оeАlcH;

$оeАlcH=mc[$e0leА+$оeАlcH];
$IOс1ТA=mc[$e0leА+$IOс1ТA];

let tx=$Il[$IOс1ТA]*morph+$Il[$оeАlcH]*(1-morph);
let ty=$0OA[$IOс1ТA]*morph+$0OA[$оeАlcH]*(1-morph);

let $сНо0cо=$OTpc1[$IOс1ТA]*morph+$OTpc1[$оeАlcH]*(1-morph);
let $е1HМIH=$IрТ0H[$IOс1ТA]*morph+$IрТ0H[$оeАlcH]*(1-morph);

if($HТolp1)
{
if($eMOАе.$AМIМ1<0)
{
$сНо0cо=Math.min(-25,$сНо0cо);
if($е1HМIH>-25)
$е1HМIH=-25;
}
else
if($eMOАе.$AМIМ1>0)
{
$сНо0cо=Math.max(25,$сНо0cо);
if($е1HМIH>-25)
$е1HМIH=-25;
}
}

let dx=tx-$Il[$eMOАе.$1O1lM];
let dy=ty-$0OA[$eMOАе.$1O1lM];

$Il[$eMOАе.$1O1lM]+=dx;
$0OA[$eMOАе.$1O1lM]+=dy;
$Il[$eMOАе.$рсOОА]+=dx;
$0OA[$eMOАе.$рсOОА]+=dy;

$OTpc1[$eMOАе.$1O1lM]=$сНо0cо;
$IрТ0H[$eMOАе.$1O1lM]=$е1HМIH;
$OTpc1[$eMOАе.$рсOОА]=$сНо0cо;
$IрТ0H[$eMOАе.$рсOОА]=$е1HМIH;















$Il[$eMOАе.$оОlТМ]+=dx;
$0OA[$eMOАе.$оОlТМ]+=dy;
$Il[$eMOАе.$MОеМ1]+=dx;
$0OA[$eMOАе.$MОеМ1]+=dy;
$Il[$eMOАе.$НТсМТ]+=dx;
$0OA[$eMOАе.$НТсМТ]+=dy;
$Il[$eMOАе.$р1eНM]+=dx;
$0OA[$eMOАе.$р1eНM]+=dy;
$Il[$eMOАе.$pМHHo]+=dx;
$0OA[$eMOАе.$pМHHo]+=dy;
$Il[$eMOАе.$e1IOМ]+=dx;
$0OA[$eMOАе.$e1IOМ]+=dy;



let an=Math.atan2(mc[$eТоM]-$Il[$IOс1ТA],mc[$рHОМ]-$0OA[$IOс1ТA]);

$OTpc1[$eMOАе.$рсOОА]+=Math.sin(an)*$оTIНc;
$IрТ0H[$eMOАе.$рсOОА]+=Math.cos(an)*$оTIНc;

$OTpc1[$eMOАе.$MОеМ1]-=Math.sin(an)*$оTIНc;
$IрТ0H[$eMOАе.$MОеМ1]-=Math.cos(an)*$оTIНc;
}

if($HТolp1)
{
let $eMOАе=$0Ме1А[mc.$OOHAТ];

$eMOАе.$ОeНIpo=false;

if(mc.$OOHAТ===$НAlНc)
$Oeoо0=false;

mc.$OOHAТ=-1;
mc.$Ae0lTр=40;

$eMOАе.$ОMррe=-1;

}
}
else
if(mc.$eрlсe==6)
{
var $ерoеoТ=0;
var $HH1eeр=0;

if(mc.$TAесс!=-1)
{
var dx=mc[$eТоM];
var dy=mc[$рHОМ];

if(mc.$ееоАН==1)
mc[$eТоM]=$АAHОе[mc.$TAесс][$eТоM];
else
mc[$eТоM]=$АAHОе[mc.$TAесс][$eТоM]+$АAHОе[mc.$TAесс].w;

mc[$рHОМ]=$АAHОе[mc.$TAесс][$рHОМ];

$ерoеoТ=$АAHОе[mc.$TAесс][$АсТOе];
$HH1eeр=$АAHОе[mc.$TAесс][$МcеAH];


if(mc.$TIcоAe.length>0)
{
dx-=mc[$eТоM];
dy-=mc[$рHОМ];

var $cТеМM=$НOНОН(dx,dy,0,0)/$ll1lА;
if($cТеМM>50)
{

mc.$Ae0lTр=30;
mc.$НоH0lM();
}
}
}



if(mc.$Ae0lTр>0)
mc.$Ae0lTр-=1*$I00le;


{
if(mc.$Ae0lTр<=0)
{

for(i2=0;i2<$eсАeA;i2++)
{
if(!$AОHMT||i2!=$НAlНc)

if(!$0Ме1А[i2].$ОeНIpo)
if($оОHMT[i2])
if(!$0Ме1А[i2].$оeoТе)
if($0Ме1А[i2].$HНрНТ==-1)
if($0Ме1А[i2].$ееоАН==mc.$ееоАН)
if(($0Ме1А[i2][$eТоM]<mc[$eТоM]&&mc.$ееоАН==1)||($0Ме1А[i2][$eТоM]>mc[$eТоM]&&mc.$ееоАН==-1))
if($НOНОН(mc[$eТоM],mc[$рHОМ],$Il[$0Ме1А[i2].$рсOОА],$0OA[$0Ме1А[i2].$рсOОА])<50)
if($0Ме1А[i2].$TНесe==-1||$0Ме1А[i2].$AМIМ1==mc.$ееоАН)
if($0Ме1А[i2].$TНесe!=1)

if($НOНОН($OTpc1[$0Ме1А[i2].$рсOОА],$IрТ0H[$0Ме1А[i2].$рсOОА],$ерoеoТ,$HH1eeр)<14)
if($0OA[$0Ме1А[i2].$рсOОА]>mc[$рHОМ])
if($IрТ0H[$0Ме1А[i2].$рсOОА]>0.2+$HH1eeр)
if(!$0Ме1А[i2].stand)
if(mc.$TAесс==-1||($ТНOМНI(mc[$eТоM]+mc.$ееоАН*5,mc[$рHОМ]-5)&&$ТНOМНI(mc[$eТоM]-mc.$ееоАН*5,mc[$рHОМ]+5)))
if(mc.$TIcоAe.indexOf($0Ме1А[i2])===-1)
if($0Ме1А[i2].$ОMррe===-1)
{




mc.$AeA1Оe($0Ме1А[i2]);

if($pMМ1)
{
if(i2==$НAlНc)
$МоТMO=i;
}
}
}
}

for(let $Mpррсo=0;$Mpррсo<mc.$TIcоAe.length;$Mpррсo++)


if($оОHMT[mc.$TIcоAe[$Mpррсo].$MeсНе])
{

$eMOАе=mc.$TIcоAe[$Mpррсo];

if($eMOАе.$eoОpА>-0.1)
$eMOАе.$eoОpА=-0.1;


$Il[$eMOАе.$1O1lM]=mc[$eТоM];
$0OA[$eMOАе.$1O1lM]=mc[$рHОМ];

if($IТoHT())
{
$IcМMc[$eMOАе.$1O1lM]=mc[$eТоM];
$MA0е1[$eMOАе.$1O1lM]=mc[$рHОМ];
}

$OTpc1[$eMOАе.$1O1lM]=$ерoеoТ;
$IрТ0H[$eMOАе.$1O1lM]=$HH1eeр;

if($eMOАе.$MeсНе==$НAlНc)
$MOH01=Math.sqrt($I00le);
else
$MOH01=Math.sqrt($ll1lА);
$MрIеО=$MOH01;

u=$MOH01*2;
$MOH01*=1.5;



if(($eMOАе.$HМ0М1&&($eMOАе.$TНесe===1||$eMOАе.$AМIМ1===-$eMOАе.$ееоАН||($Oeoо0&&$eMOАе.$MeсНе===$НAlНc)))||$eMOАе.$оeoТе||$eMOАе.$eoОpА<-0.3)
{
$IрТ0H[$eMOАе.$MОеМ1]+=0.5;


if($eMOАе.$MeсНе===$НAlНc)
$Oeoо0=false;


mc.$Ae0lTр=60;


mc.$oАOТТI($eMOАе);
}
else
{

if(!$eMOАе.$HМ0М1||$eMOАе.$TНесe==-1||$eMOАе.$AМIМ1==$eMOАе.$ееоАН||($AОHMT&&$eMOАе.$MeсНе===$НAlНc))
{
if(($Il[$eMOАе.$MОеМ1]<mc[$eТоM]+5&&$eMOАе.$ееоАН==1)||($Il[$eMOАе.$MОеМ1]>mc[$eТоM]-5&&$eMOАе.$ееоАН==-1))
{
$IрТ0H[$eMOАе.$MОеМ1]-=0.5*$MOH01;
$IрТ0H[$eMOАе.$рсOОА]-=0.5*$MOH01;
$0OA[$eMOАе.$MОеМ1]-=2*u;
$0OA[$eMOАе.$рсOОА]-=3*u;

if($IТoHT())
{
$MA0е1[$eMOАе.$MОеМ1]-=2*u;
$MA0е1[$eMOАе.$рсOОА]-=3*u;
}


if($сTpНО($OTpc1[$eMOАе.$НТсМТ])<2||$сTpНО($OTpc1[$eMOАе.$р1eНM])<2)
{
$IрТ0H[$eMOАе.$рсOОА]*=Math.pow(0.7,$MрIеО);
$IрТ0H[$eMOАе.$MОеМ1]*=Math.pow(0.7,$MрIеО);

$IрТ0H[$eMOАе.$pМHHo]*=Math.pow(0.7,$MрIеО);
$IрТ0H[$eMOАе.$e1IOМ]*=Math.pow(0.7,$MрIеО);

$IрТ0H[$eMOАе.$рсOОА]-=1*$MOH01;
$0OA[$eMOАе.$рсOОА]-=1*u;


$IрТ0H[$eMOАе.$pМHHo]-=0.6*$MOH01;
$0OA[$eMOАе.$pМHHo]-=0.6*u;
$OTpc1[$eMOАе.$pМHHo]+=mc.$ееоАН*0.8*$MOH01;

$IрТ0H[$eMOАе.$e1IOМ]-=0.6*$MOH01;
$0OA[$eMOАе.$e1IOМ]-=0.6*u;
$OTpc1[$eMOАе.$e1IOМ]+=mc.$ееоАН*1*$MOH01;

$IрТ0H[$eMOАе.$MОеМ1]-=1*$MOH01;
$0OA[$eMOАе.$MОеМ1]-=1*u;

if(!$IТoHT())
{
$OTpc1[$eMOАе.$рсOОА]+=mc.$ееоАН*0.7*$MOH01;
$OTpc1[$eMOАе.$MОеМ1]+=mc.$ееоАН*0.5*$MOH01;
}

if($IТoHT())
{
$MA0е1[$eMOАе.$рсOОА]-=1*u;
$MA0е1[$eMOАе.$MОеМ1]-=1*u;

$MA0е1[$eMOАе.$pМHHo]-=0.6*u;
$MA0е1[$eMOАе.$e1IOМ]-=0.6*u;
}

if($0OA[$eMOАе.$MОеМ1]<mc[$рHОМ]-5||($0OA[$eMOАе.$НТсМТ]<mc[$рHОМ]||$0OA[$eMOАе.$р1eНM]<mc[$рHОМ]))
{

mc.$Ae0lTр=30;

mc.$oАOТТI($eMOАе);


$eMOАе.$eoОpА=0.5;
$eMOАе.sit=1;

$eMOАе[$АсТOе]=$ерoеoТ;
$eMOАе[$МcеAH]=$HH1eeр;


u=mc[$eТоM]+$eMOАе.$ееоАН*5*$eMOАе.scale-$eMOАе[$eТоM];
v=mc[$рHОМ]+$р1OIe*$eMOАе.scale-$eMOАе[$рHОМ];

u=-u;
v=-v;

$eMOАе[$eТоM]=mc[$eТоM]+$eMOАе.$ееоАН*5*$eMOАе.scale;
$eMOАе[$рHОМ]=mc[$рHОМ]+$р1OIe*$eMOАе.scale;

$eMOАе.gui[$eТоM]+=u;
$eMOАе.gui[$рHОМ]+=v;

$eMOАе.body[$eТоM]+=u;
$eMOАе.body[$рHОМ]+=v;

$eMOАе.head[$eТоM]+=u;
$eMOАе.head[$рHОМ]+=v;

$eMOАе.$еОТТT[$eТоM]+=u;
$eMOАе.$еОТТT[$рHОМ]+=v;

$eMOАе.$АсIее[$eТоM]+=u;
$eMOАе.$АсIее[$рHОМ]+=v;

$eMOАе.$ТНpТI[$eТоM]+=u;
$eMOАе.$ТНpТI[$рHОМ]+=v;

$eMOАе.$ooНMН[$eТоM]+=u;
$eMOАе.$ooНMН[$рHОМ]+=v;

$eMOАе.$0T1MH[$eТоM]+=u;
$eMOАе.$0T1MH[$рHОМ]+=v;
}
}
}
else
{
if($eMOАе.$ееоАН==1)
$OTpc1[$eMOАе.$MОеМ1]-=0.3*$MOH01;
else
$OTpc1[$eMOАе.$MОеМ1]+=0.3*$MOH01;

}
}

$IрТ0H[$eMOАе.$оОlТМ]+=(mc[$рHОМ]-5-$0OA[$eMOАе.$оОlТМ])*0.1*$MOH01;
$IрТ0H[$eMOАе.$рсOОА]+=(mc[$рHОМ]-$0OA[$eMOАе.$рсOОА])*0.1*$MOH01;

$0OA[$eMOАе.$оОlТМ]+=(mc[$рHОМ]-5-$0OA[$eMOАе.$оОlТМ])*0.2*$MOH01;
$0OA[$eMOАе.$рсOОА]+=(mc[$рHОМ]-$0OA[$eMOАе.$рсOОА])*0.2*$MOH01;

if($IТoHT())
{
$MA0е1[$eMOАе.$оОlТМ]+=(mc[$рHОМ]-5-$0OA[$eMOАе.$оОlТМ])*0.2*$MOH01;
$MA0е1[$eMOАе.$рсOОА]+=(mc[$рHОМ]-$0OA[$eMOАе.$рсOОА])*0.2*$MOH01;
}
}


$OTpc1[$eMOАе.$рсOОА]+=(mc[$eТоM]-$Il[$eMOАе.$рсOОА])*0.1*$MOH01;
$OTpc1[$eMOАе.$MОеМ1]-=$eMOАе.$ееоАН*0.5*$MOH01;

$OTpc1[$eMOАе.$НТсМТ]+=$eMOАе.$ееоАН*0.6*$MOH01;
$OTpc1[$eMOАе.$р1eНM]+=$eMOАе.$ееоАН*0.6*$MOH01;

$IрТ0H[$eMOАе.$НТсМТ]-=0.05*$MOH01;
$IрТ0H[$eMOАе.$р1eНM]+=0.05*$MOH01;

if($eMOАе.$ееоАН==1)
{
if($Il[$eMOАе.$MОеМ1]>mc[$eТоM])
{
$Il[$eMOАе.$MОеМ1]=$IcМMc[$eMOАе.$MОеМ1]=mc[$eТоM];
$OTpc1[$eMOАе.$MОеМ1]=Math.min($ерoеoТ,$OTpc1[$eMOАе.$MОеМ1]);
}

if($Il[$eMOАе.$рсOОА]>mc[$eТоM])
{
$Il[$eMOАе.$рсOОА]=$IcМMc[$eMOАе.$рсOОА]=mc[$eТоM];
$OTpc1[$eMOАе.$рсOОА]=Math.min($ерoеoТ,$OTpc1[$eMOАе.$рсOОА]);
}

if($Il[$eMOАе.$р1eНM]>mc[$eТоM])
{
$Il[$eMOАе.$р1eНM]=$IcМMc[$eMOАе.$р1eНM]=mc[$eТоM];
$OTpc1[$eMOАе.$р1eНM]=Math.min($ерoеoТ,$OTpc1[$eMOАе.$р1eНM]);
}

if($Il[$eMOАе.$НТсМТ]>mc[$eТоM])
{
$Il[$eMOАе.$НТсМТ]=$IcМMc[$eMOАе.$НТсМТ]=mc[$eТоM];
$OTpc1[$eMOАе.$НТсМТ]=Math.min($ерoеoТ,$OTpc1[$eMOАе.$НТсМТ]);
}
}
else
{
if($Il[$eMOАе.$MОеМ1]<mc[$eТоM])
{
$Il[$eMOАе.$MОеМ1]=$IcМMc[$eMOАе.$MОеМ1]=mc[$eТоM];
$OTpc1[$eMOАе.$MОеМ1]=Math.max($ерoеoТ,$OTpc1[$eMOАе.$MОеМ1]);
}

if($Il[$eMOАе.$рсOОА]<mc[$eТоM])
{
$Il[$eMOАе.$рсOОА]=$IcМMc[$eMOАе.$рсOОА]=mc[$eТоM];
$OTpc1[$eMOАе.$рсOОА]=Math.max($ерoеoТ,$OTpc1[$eMOАе.$рсOОА]);
}

if($Il[$eMOАе.$р1eНM]<mc[$eТоM])
{
$Il[$eMOАе.$р1eНM]=$IcМMc[$eMOАе.$р1eНM]=mc[$eТоM];
$OTpc1[$eMOАе.$р1eНM]=Math.max($ерoеoТ,$OTpc1[$eMOАе.$р1eНM]);
}

if($Il[$eMOАе.$НТсМТ]<mc[$eТоM])
{
$Il[$eMOАе.$НТсМТ]=$IcМMc[$eMOАе.$НТсМТ]=mc[$eТоM];
$OTpc1[$eMOАе.$НТсМТ]=Math.max($ерoеoТ,$OTpc1[$eMOАе.$НТсМТ]);
}
}

}
}
}
if(mc.gui.visible)
{


mc.gui[$eТоM]=0;
mc.gui[$рHОМ]=-150;

if(mc[$МIIро]>0)
mc.gui.h.scaleX=mc[$МIIро]/mc.hmax;
else
{
if(mc.gui.alpha>0)
{
mc.gui.h.scaleX=0;
mc.gui.alpha-=0.1*$ll1lА;
}
else
mc.gui.visible=false;
}
}

$1lе0Oо=$сoopT[i].$peрНo;





mc.SetMCInterpolationDataRecursively($оIeHeТ);
}
else
{



$оОHMT[i+$0рМOН]=false;





}

if($сoopT[i].visible!==$1lе0Oо)
$сoopT[i].visible=$1lе0Oо;
}




for(i=0;i<$cс0Hс;i++)
if($ОpMрс[i].io)
{
if($ОpMрс[i].$clО0Aр!==undefined)
$ОpMрс[i].$clО0Aр((($ОpMрс[i].picken_by===$НAlНc)? $I00le : $ll1lА)*$ОpMрс[i].$сОс0М);

if(!$ОpMрс[i].ready)
{
if($pMМ1)
if($IHТcc)
if($ОpMрс[i].picken_by===-1)
if($ОpMрс[i].ready===false)
if($IcеНе===$ММ.$IсОeо||$IcеНе===$ММ.$eHTНT)
{
var $AH0cоI=true;
for(var i2=0;i2<$eсАeA;i2++)
if($0Ме1А[i2].io)

if(Math.abs($0Ме1А[i2][$eТоM]-$ОpMрс[i][$eТоM])<800)
if(Math.abs($0Ме1А[i2][$рHОМ]-$ОpMрс[i][$рHОМ])<800)
{
$AH0cоI=false;
break;
}
if($AH0cоI)
$еАеО1($ОpMрс[i].model,$ОpMрс[i],true);
}


if($ОpMрс[i].picken_by===$НAlНc)
$ОpMрс[i].$OАMco+=$I00le*$ОpMрс[i].$сОс0М;
else
$ОpMрс[i].$OАMco+=$ll1lА*$ОpMрс[i].$сОс0М;


if($ОpMрс[i].$OАMco>=$ОpMрс[i].totalFrames)
{
if(!$ОpMрс[i].ready)
if($ОpMрс[i].picken_by!==-1)
{
if($ОpMрс[i].$cрTT0!==-1)
{
$Oр0ol=$ОpMрс[i].picken_by;

if($ОpMрс[i].picken_by==$НAlНc||!$0Ме1А[$ОpMрс[i].picken_by].$HМ0М1)
if($pАTIТ($ОpMрс[i].$cрTT0))
{
if($ОpMрс[i].picken_by==$НAlНc&&$pMМ1)
$ММ.Event(

$ММ[$OlopT],

$ММ.$Oоolр($ОpMрс[i].$cрTT0),

$0OрТ,

$0OрТ,
);

}
}
}

$ОpMрс[i].$0TlIcM();


}
else
{
if($ОpMрс[i].currentFrame<Math.floor($ОpMрс[i].$OАMco))
{
for(let skips=0;skips<Math.floor($ОpMрс[i].$OАMco)-$ОpMрс[i].currentFrame;skips++)
$ОpMрс[i].nextFrame();
}
else
$еcoсТ($ОpMрс[i],Math.floor($ОpMрс[i].$OАMco));
}
}
if($ОpMрс[i].ready)
{
if($ОpMрс[i].currentFrame!=2)
{
$ОpMрс[i].gotoAndStop(2);
$ОpMрс[i].$OАMco=2;
}
}




if(($Il[$ОpMрс[i].$c0НlТ]>$Hерсl&&
$Il[$ОpMрс[i].$c0НlТ]<$oocОo&&
$0OA[$ОpMрс[i].$c0НlТ]>$1соoр&&
$0OA[$ОpMрс[i].$c0НlТ]<$01Oрp)||$TАeр1||($ОpMрс[i].picken_by!=-1&&$оОHMT[$ОpMрс[i].picken_by]))


{




mc=$ОpMрс[i];



if(mc.$TМoсc>mc.$eоТlO)
mc.$TМoсc=mc.$eоТlO-mc.$МсpрО;
else
{
if(mc.picken_by===$НAlНc)
mc.$TМoсc-=mc.$МсpрО*$I00le;
else
mc.$TМoсc-=mc.$МсpрО*$ll1lА;
}
if(mc.$TМoсc<mc.$TсlceМ)
mc.$TМoсc=mc.$TсlceМ;

$оОHMT[i+$ТАIpc]=true;

if(mc.$соТAТ==false)
{



if(mc.picken_by!=-1)
if(!$0Ме1А[mc.picken_by].io)
mc.picken_by=-1;

if(mc.picken_by!=-1)
{
$eMOАе=$0Ме1А[mc.picken_by];
mc.scaleY=$eMOАе.$ееоАН;










if(mc.alpha!=$eMOАе.alpha)
mc.alpha=$eMOАе.alpha;




if($eMOАе[$МАТОе]==i)
{
if(!$eMOАе.$ААpес)
{
$HОpcl=Math.atan2($Il[$eMOАе.$рсOОА]-$Il[$eMOАе.$оОlТМ],$0OA[$eMOАе.$рсOОА]-$0OA[$eMOАе.$оОlТМ]);
$llМTO=$cТеМо[mc.$T0МТМ];






$ММеOlI(mc.$c0НlТ,$Il[$eMOАе.$оОlТМ]+Math.sin($HОpcl-Math.PI/2)*mc.$А0opМА*$eMOАе.$ееоАН,$0OA[$eMOАе.$оОlТМ]+Math.cos($HОpcl-Math.PI/2)*mc.$А0opМА*$eMOАе.$ееоАН,$eMOАе.$оОlТМ);
if(!$eMOАе.$loАoM||$eMOАе.$HМ0М1||!$НOIHo)
$ММеOlI(mc.$рееоp,$Il[$eMOАе.$оОlТМ]-Math.sin($HОpcl)*$llМTO+Math.sin($HОpcl-Math.PI/2)*mc.$А0opМА*$eMOАе.$ееоАН,$0OA[$eMOАе.$оОlТМ]-Math.cos($HОpcl)*$llМTO+Math.cos($HОpcl-Math.PI/2)*mc.$А0opМА*$eMOАе.$ееоАН,$eMOАе.$оОlТМ);

}
}
else
{
if(mc.$T1T1O==0)
{
$ММеOlI(mc.$c0НlТ,$Il[$eMOАе.$MОеМ1],$0OA[$eMOАе.$MОеМ1],$eMOАе.$MОеМ1);
$ММеOlI(mc.$рееоp,$Il[$eMOАе.$НТсМТ],$0OA[$eMOАе.$НТсМТ],$eMOАе.$НТсМТ);
}
if(mc.$T1T1O==1)
{
$HОpcl=Math.atan2($Il[$eMOАе.$рсOОА]-$Il[$eMOАе.$MОеМ1],$0OA[$eMOАе.$рсOОА]-$0OA[$eMOАе.$MОеМ1])-Math.PI/2;
$ММеOlI(mc.$рееоp,$Il[$eMOАе.$MОеМ1]-Math.sin($HОpcl)*15*$eMOАе.$ееоАН*$eMOАе.scale,$0OA[$eMOАе.$MОеМ1]-Math.cos($HОpcl)*15*$eMOАе.$ееоАН*$eMOАе.scale,$eMOАе.$MОеМ1);
$ММеOlI(mc.$c0НlТ,$Il[$eMOАе.$рсOОА]-Math.sin($HОpcl)*15*$eMOАе.$ееоАН*$eMOАе.scale,$0OA[$eMOАе.$рсOОА]-Math.cos($HОpcl)*15*$eMOАе.$ееоАН*$eMOАе.scale,$eMOАе.$рсOОА);
}
if(mc.$T1T1O==2)
{
$ММеOlI(mc.$c0НlТ,$Il[$eMOАе.$pМHHo],$0OA[$eMOАе.$pМHHo],$eMOАе.$pМHHo);
$ММеOlI(mc.$рееоp,$Il[$eMOАе.$e1IOМ],$0OA[$eMOАе.$e1IOМ],$eMOАе.$e1IOМ);
}
if(mc.$T1T1O==3)
{
$ММеOlI(mc.$c0НlТ,$Il[$eMOАе.$pМHHo],$0OA[$eMOАе.$pМHHo],$eMOАе.$pМHHo);
}
if(mc.$T1T1O==4)
{
$ММеOlI(mc.$c0НlТ,$Il[$eMOАе.$рсOОА],$0OA[$eMOАе.$рсOОА],$eMOАе,$eMOАе.$рсOОА);
}

























}

if($eMOАе.$AOсоМ)
if($eMOАе.$оeoТе||
(!$eMOАе.$HМ0М1&&(($eMOАе.$loАoM&&$АеlAН)||($eMOАе.$eoОpА<-0.2&&$oolМН))&&Math.random()<0.01*$ll1lА&&$eMOАе[$cАocе]!=$0Ме1А[$НAlНc][$cАocе])
)
if(!$о0Мp0||!$IeА1I||$eMOАе[$cАocе]!=$0Ме1А[$НAlНc][$cАocе]||$eMOАе.$ААpес||$eMOАе.$lTITl||$eMOАе.$AIpAe||$eMOАе.$еТеAO)

if(!$eMOАе.$HМ0М1||(mc.picken_by===$НAlНc&&!$00pеH)||!$pMМ1)
{
if($eMOАе[$МАТОе]==i)
$eMOАе[$МАТОе]=-1;

$o0MIс(mc.picken_by);

if($eMOАе.$оeoТе)
{
$HОpcl=1+Math.random()*Math.PI*2;
$OTpc1[mc.$c0НlТ]+=Math.sin($HОpcl)*2;
$IрТ0H[mc.$c0НlТ]+=Math.cos($HОpcl)*2;
$OTpc1[mc.$рееоp]-=Math.sin($HОpcl)*2;
$IрТ0H[mc.$рееоp]-=Math.cos($HОpcl)*2;
}


if(mc.picken_by===$НAlНc)
if(mc.$cppее==-2)
{
if(mc.$1ooоT==1)
if($OН1оc>0)
$OН1оc-=1;

if(mc.$1ooоT==2)
if($IАрAH>0)
$IАрAH-=1;

if(mc.$1ooоT==3)
if($ccIсo>0)
$ccIсo-=1;
}


mc.picken_by=-1;
}




$0Н0Тl(mc.$c0НlТ);
$0Н0Тl(mc.$рееоp);

$оcMlO[mc.$c0НlТ]=-1;
$оcMlO[mc.$рееоp]=-1;
}
else
{
ok=true;
for(i2=0;i2<$cс0Hс&&ok;i2++)
if($ОpMрс[i2].io)
if(!$ОpMрс[i2].$соТAТ)
if($ОpMрс[i2].$cppее>0)
if($ОpMрс[i2].picken_by==$НAlНc)
if($ОpMрс[i2].model===mc.model)
if($ОpMрс[i2].upg>=mc.upg)
ok=false;

if((mc.command!=-1||!ok)&&mc.command!=$0Ме1А[$НAlНc][$cАocе]&&!$pMМ1)
{

if((!$ТHoA1&&(!$0lpеo||$АМеMА))||$0pТНМ)
mc.$ОрОAA++;

if($АМеMА)
{
if(mc.$ОрОAA>200)
mc.alpha-=0.4;
}
else
{
if(mc.$ОрОAA>400)
mc.alpha-=0.1;
}

if(mc.alpha<0)
{
$oОHМp(i);
}
}
else
{

if(mc.alpha!=1)
mc.alpha=1;
}
}
}
else
{
if(mc.picken_by!=-1)
{
$eMOАе=$сoopT[mc.picken_by];

$оcMlO[mc.$c0НlТ]=-1;
$оcMlO[mc.$рееоp]=-1;
}

}
if(mc.io)
{
mc.$орООр($оIeHeТ);

if(mc.picken_by==-1)
{
if(mc.$соТAТ==false)
{


for(i2=0;i2<$eсАeA&&mc.picken_by==-1;i2++)

if(!$0Ме1А[i2].$оeoТе)
if(!$0Ме1А[i2].$HМ0М1||($НAlНc==i2&&!$00pеH))
if(mc.command==-1||($pMМ1&&$IcеНе===$ММ.$IсОeо)||(mc.command!=-1&&mc.command==$0Ме1А[i2][$cАocе]&&($0Ме1А[i2].$HМ0М1||$0Ме1А[$НAlНc][$cАocе]!=$0Ме1А[i2][$cАocе])))

if($0Ме1А[i2].$eoОpА>=-0.5)
{
$eMOАе=$0Ме1А[i2];
if(!$eMOАе.$ААpес)
if(mc[$eТоM]>$eMOАе[$eТоM]-40)
if(mc[$eТоM]<$eMOАе[$eТоM]+40)
if(mc[$рHОМ]>$eMOАе[$рHОМ]-90)
if(mc[$рHОМ]<$eMOАе[$рHОМ]+30)
{
$cTоpeо(i,i2,false,true);
}
}
}
$оcMlO[mc.$c0НlТ]=2;
$оcMlO[mc.$рееоp]=2;
}
if(!$ОpMрс[i].visible)
$ОpMрс[i].visible=true;
}
}
else
{
$оОHMT[i+$ТАIpc]=false;
if($ОpMрс[i].visible)
$ОpMрс[i].visible=false;
}



if($ОpMрс[i].ray!==undefined)
{
ok=false;
$c1Н1А=false;

let $еTTТIT=-1;

if($ОpMрс[i].picken_by!=-1)
if(!$0Ме1А[$ОpMрс[i].picken_by].$оeoТе)
if($0Ме1А[$ОpMрс[i].picken_by][$МАТОе]==i)
{
$c1Н1А=true;
$HОpcl=$ОpMрс[i][$eТоM];
$llМTO=$ОpMрс[i][$рHОМ];
$MOH01=$HОpcl+Math.sin($0Ме1А[$ОpMрс[i].picken_by].$pМсМе)*3000;
$MрIеО=$llМTO+Math.cos($0Ме1А[$ОpMрс[i].picken_by].$pМсМе)*3000;



u=3000;

for(i2=0;i2<$eсАeA;i2++)
if(!$0Ме1А[i2].$loАoM||APRIL_2025)
if(!$0Ме1А[i2].$оeoТе)
if($0Ме1А[$ОpMрс[i].picken_by][$cАocе]!==$0Ме1А[i2][$cАocе])
{

{

if($oе1AеН($HОpcl,$llМTO,$MOH01,$MрIеО,$0Ме1А[i2][$eТоM]-$е11oO,$0Ме1А[i2][$рHОМ]-81,$0Ме1А[i2][$eТоM]+$е11oO,$0Ме1А[i2][$рHОМ])||
$oе1AеН($HОpcl,$llМTO,$MOH01,$MрIеО,$0Ме1А[i2][$eТоM]+$е11oO,$0Ме1А[i2][$рHОМ]-81,$0Ме1А[i2][$eТоM]-$е11oO,$0Ме1А[i2][$рHОМ]))
if($МАрМcl($ТOHHМ,$lHTсH,$HОpcl,$llМTO))
{
ok=true;

v=$НOНОН($HОpcl,$llМTO,$ТOHHМ,$lHTсH);
if(v<u)
{
$MOH01=$ТOHHМ;
$MрIеО=$lHTсH;
u=v;

$еTTТIT=i2;
}
}
}
}



for(i2=0;i2<$T0МММ;i2++)
{
if($oе1AеН($HОpcl,$llМTO,$MOH01,$MрIеО,$сАоОo[i2],$o1О00[i2],$сАоОo[i2]+$с0МAр[i2],$o1О00[i2]))
{
v=$НOНОН($HОpcl,$llМTO,$ТOHHМ,$lHTсH);
if(v<u)
{
$MOH01=$ТOHHМ;
$MрIеО=$lHTсH;
u=v;
}
}
if($oе1AеН($HОpcl,$llМTO,$MOH01,$MрIеО,$сАоОo[i2],$o1О00[i2]+$MМрTТ[i2],$сАоОo[i2]+$с0МAр[i2],$o1О00[i2]+$MМрTТ[i2]))
{
v=$НOНОН($HОpcl,$llМTO,$ТOHHМ,$lHTсH);
if(v<u)
{
$MOH01=$ТOHHМ;
$MрIеО=$lHTсH;
u=v;
}
}
if($oе1AеН($HОpcl,$llМTO,$MOH01,$MрIеО,$сАоОo[i2],$o1О00[i2],$сАоОo[i2],$o1О00[i2]+$MМрTТ[i2]))
{
v=$НOНОН($HОpcl,$llМTO,$ТOHHМ,$lHTсH);
if(v<u)
{
$MOH01=$ТOHHМ;
$MрIеО=$lHTсH;
u=v;
}
}
if($oе1AеН($HОpcl,$llМTO,$MOH01,$MрIеО,$сАоОo[i2]+$с0МAр[i2],$o1О00[i2],$сАоОo[i2]+$с0МAр[i2],$o1О00[i2]+$MМрTТ[i2]))
{
v=$НOНОН($HОpcl,$llМTO,$ТOHHМ,$lHTсH);
if(v<u)
{
$MOH01=$ТOHHМ;
$MрIеО=$lHTсH;
u=v;
}
}
}
}

if($ОpMрс[i].ready)
if($ОpMрс[i].riflestatus!==undefined)
{
if(ok)
{
$еcoсТ($ОpMрс[i].riflestatus,(($MсОТ0%64)<32)? 2 : 3);


if(APRIL_2025)
if($еTTТIT!==-1)
{
let $сеTсI=$еTTТIT;
let $olНо0=$0Ме1А[$сеTсI];



if(!$АсM10[$сеTсI])
$АсM10[$сеTсI]={
[$АсТOе]: 0,
[$МcеAH]: 0,

[$ТoToН]: 0,

[$Мpolp]: 0,
[$0TlHI]: 0,
[$IToIр]: 0,
[$eсНeМ]: 0,
[$еcооl]: 0,

[$рАр0T]: $olНо0[$рАр0T],

[$Н1cTе]:{}
};

$АсM10[$сеTсI][$Мpolp]+=4*((mc.picken_by===$НAlНc)? $I00le : $ll1lА);
$АсM10[$сеTсI][$НeHо1]=i;

let $1AIес=0;

if(!$АсM10[$сеTсI][$Н1cTе][$1AIес])
$АсM10[$сеTсI][$Н1cTе][$1AIес]={[$АсТOе]: 0,[$МcеAH]: 0,[$IНpес]:0,[$НTрAo]:0};



















}
}
else
$еcoсТ($ОpMрс[i].riflestatus,1);

}

if($c1Н1А&&$ОpMрс[i].ready)
{
$ОpMрс[i].ray[$eТоM]=43;
$ОpMрс[i].ray.scaleX=(u-$ОpMрс[i].ray[$eТоM])/100;

if(!$ОpMрс[i].ray.visible)
$ОpMрс[i].ray.visible=true;


$ОpMрс[i].ray.rotation=((90-$ОpMрс[i].rotation)-$0Ме1А[$ОpMрс[i].picken_by].$pМсМе/Math.PI*180)*Math.sign($ОpMрс[i].scaleY);
}
else
if($ОpMрс[i].ray.visible)
$ОpMрс[i].ray.visible=false;
}
}

if($cерAc)
trace($Аcle);
for(i=0;i<$p0lIе;i++)
{
if($cерAc)
trace($oеMeе,i,$o0IсО[i].$oOlОO,$o0IсО[i].$cААТ1,$o0IсО[i].$OАосс,$o0IсО[i].$cTOHl,$o0IсО[i].$MоcсcM);

if($o0IсО[i].$oOlОO)
if($o0IсО[i].$cААТ1>0||$o0IсО[i].$cААТ1==-1)
{
$MрIеО=1;






$o0IсО[i].$OАосс+=$ll1lА*$MрIеО;
if($o0IсО[i].$OАосс>=$o0IсО[i].$cTOHl)
{
$o0IсО[i].$OАосс=0;
if($o0IсО[i].$cААТ1!=-1)
{
$o0IсО[i].$cААТ1--;
if($o0IсО[i].$cААТ1<=0)
$o0IсО[i].$oOlОO=false;
}

if($o0IсО[i].$MоcсcM!==-1)
{

$pАTIТ($o0IсО[i].$MоcсcM);
}
}
}
}

for(i=0;i<$ТeeAo;i++)
{
if(($еоНМо[i][$eТоM]>-game[$eТоM]/$оМMОО-screenX/$оМMОО&&$еоНМо[i][$eТоM]<-game[$eТоM]/$оМMОО+screenX*2/$оМMОО&&$еоНМо[i][$рHОМ]>-game[$рHОМ]/$оМMОО-screenY/$оМMОО&&$еоНМо[i][$рHОМ]<-game[$рHОМ]/$оМMОО+screenY*2/$оМMОО)||
($Il[$еоНМо[i].$oA0cА]>-game[$eТоM]/$оМMОО-screenX/$оМMОО&&
$Il[$еоНМо[i].$oA0cА]<-game[$eТоM]/$оМMОО+screenX*2/$оМMОО&&
$0OA[$еоНМо[i].$oA0cА]>-game[$рHОМ]/$оМMОО-screenY/$оМMОО&&
$0OA[$еоНМо[i].$oA0cА]<-game[$рHОМ]/$оМMОО+screenY*2/$оМMОО)
||
($Il[$еоНМо[i].$lМeOМ]>-game[$eТоM]/$оМMОО-screenX/$оМMОО&&
$Il[$еоНМо[i].$lМeOМ]<-game[$eТоM]/$оМMОО+screenX*2/$оМMОО&&
$0OA[$еоНМо[i].$lМeOМ]>-game[$рHОМ]/$оМMОО-screenY/$оМMОО&&
$0OA[$еоНМо[i].$lМeOМ]<-game[$рHОМ]/$оМMОО+screenY*2/$оМMОО))
{
$оОHMT[i+$еeH1T]=true;
mc=$еоНМо[i];

if(mc[$МIIро]>0)
{
mc[$eТоM]=($Il[mc.$oA0cА]+$Il[mc.$ATМHl]+$Il[mc.$cIToе]+$Il[mc.$lМeOМ])/4;
mc[$рHОМ]=($0OA[mc.$oA0cА]+$0OA[mc.$ATМHl]+$0OA[mc.$cIToе]+$0OA[mc.$lМeOМ])/4;

mc.rotation=180-Math.atan2($Il[mc.$oA0cА]-$Il[mc.$lМeOМ],$0OA[mc.$oA0cА]-$0OA[mc.$lМeOМ])/Math.PI*180;

if($AМlоН[$еоНМо[i].$oA0cА]==true||$AМlоН[$еоНМо[i].$lМeOМ]==true||$AМlоН[$еоНМо[i].$cIToе]==true||$AМlоН[$еоНМо[i].$ATМHl]==true)
{
u=$НOНОН($Il[$еоНМо[i].$oA0cА],$0OA[$еоНМо[i].$oA0cА],$Il[$еоНМо[i].$cIToе],$0OA[$еоНМо[i].$cIToе]);
v=$НOНОН($Il[$еоНМо[i].$oA0cА],$0OA[$еоНМо[i].$oA0cА],$Il[$еоНМо[i].$lМeOМ],$0OA[$еоНМо[i].$lМeOМ]);
$llМTO=$НOНОН($Il[$еоНМо[i].$lМeOМ],$0OA[$еоНМо[i].$lМeOМ],$Il[$еоНМо[i].$cIToе],$0OA[$еоНМо[i].$cIToе]);
$HОpcl=(u+v+$llМTO)*0.5;
$HОpcl=$HОpcl*($HОpcl-u)*($HОpcl-v)*($HОpcl-$llМTO);

if($HОpcl<=0)
{

mc[$МIIро]=0;
$AАoIр(i);
}
}
}
else
{
mc.b1[$eТоM]=($Il[mc.$oA0cА]+$Il[mc.$ТTcMAI]+$Il[mc.$cIToе]+$Il[mc.$oTсНTI])/4-mc[$eТоM];
mc.b1[$рHОМ]=($0OA[mc.$oA0cА]+$0OA[mc.$ТTcMAI]+$0OA[mc.$cIToе]+$0OA[mc.$oTсНTI])/4-mc[$рHОМ];

mc.b1.rotation=-Math.atan2($Il[mc.$oA0cА]-$Il[mc.$ТTcMAI],$0OA[mc.$oA0cА]-$0OA[mc.$ТTcMAI])/Math.PI*180;

mc.b2[$eТоM]=($Il[mc.$lМeOМ]+$Il[mc.$A01Il1]+$Il[mc.$ATМHl]+$Il[mc.$01ТМMI])/4-mc[$eТоM];
mc.b2[$рHОМ]=($0OA[mc.$lМeOМ]+$0OA[mc.$A01Il1]+$0OA[mc.$ATМHl]+$0OA[mc.$01ТМMI])/4-mc[$рHОМ];

mc.b2.rotation=-Math.atan2($Il[mc.$lМeOМ]-$Il[mc.$A01Il1],$0OA[mc.$lМeOМ]-$0OA[mc.$A01Il1])/Math.PI*180;

for(n2=0;n2<10;n2++)
if(mc[$оIОеT+n2].visible==true)
{

mc[$оIОеT+n2][$eТоM]=$Il[mc[$M1IНН+n2]]-mc[$eТоM];
mc[$оIОеT+n2][$рHОМ]=$0OA[mc[$M1IНН+n2]]-mc[$рHОМ];
mc[$оIОеT+n2].rotation=mc[$оIОеT+n2][$eТоM]*3+n2*60;

if($AМlоН[mc[$M1IНН+n2]]==false)
{
if(mc[$оIОеT+n2].alpha>0)
mc[$оIОеT+n2].alpha-=0.1;
else
{
mc[$оIОеT+n2].visible=false;


$oОI10(mc[$M1IНН+n2]);
mc[$M1IНН+n2]=undefined;
}
}
else
{
if(mc[$оIОеT+n2].alpha<1)
mc[$оIОеT+n2].alpha+=0.1;
}
}
}
if(!$еоНМо[i].visible)
$еоНМо[i].visible=true;

$еоНМо[i].SetMCInterpolationDataRecursively($оIeHeТ);
}
else
{
$оОHMT[i+$еeH1T]=false;
if($еоНМо[i].visible)
$еоНМо[i].visible=false;
}
}

for(i=0;i<$IАccH;i++)
{
mc=$Alcсe[i];

if(mc[$eТоM]>-game[$eТоM]/$оМMОО&&
mc[$eТоM]<(-game[$eТоM]+screenX)/$оМMОО&&
mc[$рHОМ]>-game[$рHОМ]/$оМMОО&&
mc[$рHОМ]<(-game[$рHОМ]+screenY)/$оМMОО)
{
mc.alpha=(mc.alpha+$рHoеH[i])/2;
if(!mc.visible)
mc.visible=true;
}
else
{
mc.alpha=mc.alpha/2;
if(mc.visible&&mc.alpha<0.05)
mc.visible=false;
}

if(mc.visible)
{

if($0lpеo||$ТHoA1)
{
mc.f2[$eТоM]=(-game[$eТоM]+$АOTIl-mc[$eТоM])*0.4;
mc.f2[$рHОМ]=(-game[$рHОМ]+$ТIeсO-mc[$рHОМ])*0.4;

mc.f3[$eТоM]=(-game[$eТоM]+$АOTIl-mc[$eТоM])*0.8;
mc.f3[$рHОМ]=(-game[$рHОМ]+$ТIeсO-mc[$рHОМ])*0.8;

mc.f4[$eТоM]=(-game[$eТоM]+$АOTIl-mc[$eТоM])*1.4;
mc.f4[$рHОМ]=(-game[$рHОМ]+$ТIeсO-mc[$рHОМ])*1.4;

mc.f5[$eТоM]=(-game[$eТоM]+$АOTIl-mc[$eТоM])*1.8;
mc.f5[$рHОМ]=(-game[$рHОМ]+$ТIeсO-mc[$рHОМ])*1.8;

mc.f6[$eТоM]=(-game[$eТоM]+$АOTIl-mc[$eТоM])*1.5;
mc.f6[$рHОМ]=(-game[$рHОМ]+$ТIeсO-mc[$рHОМ])*1.5;

mc.f2.SetMCInterpolationData($оIeHeТ);
mc.f3.SetMCInterpolationData($оIeHeТ);
mc.f4.SetMCInterpolationData($оIeHeТ);
mc.f5.SetMCInterpolationData($оIeHeТ);
mc.f6.SetMCInterpolationData($оIeHeТ);
}
else
{
if(mc.f2.visible)
{
mc.f2.visible=false;

mc.f3.visible=false;

mc.f4.visible=false;

mc.f5.visible=false;

mc.f6.visible=false;
}
}
}
}

for(let $Т0TpA of $1еоHA)
{
$Т0TpA.SetMCInterpolationData($оIeHeТ);
}
$1еоHA.clear();

$ТА01р1($оIeHeТ);

$0oоАlc($ll1lА);

var $eТoТНe=false;
for(var e=0;e<$0Ме1А[$НAlНc].effects.length;e++)
{
if($0Ме1А[$НAlНc].effects[e][$clе0р]===$1oMс)
{
$eТoТНe=true;
break;
}
}
var $сTс0eс=1;
if($eТoТНe)
$сTс0eс=2;

if($1оIlOр.currentFrame!==$сTс0eс)
{
$1оIlOр.gotoAndStop($сTс0eс);












}

$HОpcl=Math.max($0Ме1А[$НAlНc][$МIIро]/$0Ме1А[$НAlНc].hmax,0)
$1оIlOр.hp.scaleX=$HОpcl;



if($1оIlOр.$НT0eIM.scaleX<$HОpcl)
$1оIlOр.$НT0eIM.scaleX=$HОpcl;
else
if($1оIlOр.$НT0eIM.scaleX>$HОpcl)
$1оIlOр.$НT0eIM.scaleX-=0.01;
$1оIlOр.$НT0eIM[$eТоM]=$1оIlOр.hp[$eТоM];

if(!SCREEN_FADE_EFFECTS)
if($Hl1AА.visible)
if($pMМ1)
{
$1оIlOр.$НT0eIM.scaleX=$Hl1AА.alpha;
}



$1оIlOр.$рННр0T.text=Math.ceil(Math.ceil($HОpcl*$0Ме1А[$НAlНc].hmax)).toString();



if($0Ме1А[$НAlНc].$HНрНТ!=-1)
{
$MТcTH.hp.scaleX=Math.max($сoopT[$0Ме1А[$НAlНc].$HНрНТ][$МIIро]/$сoopT[$0Ме1А[$НAlНc].$HНрНТ].hmax,0);
$MТcTH.$рННр0T.text=Math.ceil(Math.max($сoopT[$0Ме1А[$НAlНc].$HНрНТ][$МIIро],0)).toString();
}
if($M1МТ1.visible)
{
$HОpcl=Math.max($еO1Оl/$сlIоO,0)
$M1МТ1.$MlоoАT.text=Math.ceil(Math.ceil($HОpcl*$сlIоO)).toString();
$M1МТ1.$оeTpМ0.scaleX=$HОpcl;
}




















if($HcT1р!=-1)
{

{
if($HcT1р==0)
{
mc=$0Ме1А[$НAlНc];

$0ОoHс=1;
if($pMМ1)
{
if($ММ[$OpНpp][$M0сМТ]<3)
$0ОoHс=$MoIoр[$IIIсA].$1ooоT;
else
$0ОoHс=$lIOo0о;
}

if($AcTес==0)
{


{
ok=true;
for(i2=0;i2<$cс0Hс;i2++)
if($ОpMрс[i2].io)
if(!$ОpMрс[i2].$соТAТ)
if($ОpMрс[i2].picken_by==$НAlНc)
if($ОpMрс[i2].$cppее==-2)
if($ОpMрс[i2].$1ooоT==$0ОoHс)
{
if(!$pMМ1)
{
$ОpMрс[i2][$eТоM]=-10000;
$ОpMрс[i2][$рHОМ]=-10000;
$ОpMрс[i2].scaleX=0;
$ОpMрс[i2].scaleY=0;

game.removeChild($ОpMрс[i2]);
$ОpMрс[i2]=new Object();
$ОpMрс[i2].io=false;
}
else
{
$ОpMрс[i2].alpha=0;
$ОpMрс[i2].io=false;
}

i2=$cс0Hс;
ok=false;

$pрMТl();
}

if($pMМ1)
{
if($0ОoHс==1)
{
if($OН1оc>0)
{
$OН1оc--;
ok=false;
$pрMТl();
}
}
else
if($0ОoHс==2)
{
if($IАрAH>0)
{
$IАрAH--;
ok=false;
$pрMТl();
}
}
else
if($0ОoHс==3)
{
if($ccIсo>0)
{
$ccIсo--;
ok=false;
$pрMТl();
}
}
}
if(ok)
{
$HcT1р=-1;
$AcTес=0;
}
}
}
if($AcTес==1)
{
$1МHНTM($0ОoHс,$0Ме1А[$НAlНc]);
}
if($AcTес>=1)
if(!mc.$оeoТе)
{
if($AcTес<5)
{
$ОOАTрА($0Ме1А[$НAlНc].$1O1lM,$Il[$0Ме1А[$НAlНc].$e1IOМ]+$0Ме1А[$НAlНc].$ееоАН*10,$0OA[$0Ме1А[$НAlНc].$e1IOМ]+30,$0Ме1А[$НAlНc],1);


}
else
if($AcTес<7)
{
$HОpcl=mc.$pМсМе+Math.PI;
$llМTO=Math.cos($HОpcl);
$HОpcl=Math.sin($HОpcl);


$ОOАTрА($0Ме1А[$НAlНc].$1O1lM,$Il[$0Ме1А[$НAlНc].$рсOОА]-$HОpcl*25,$0OA[$0Ме1А[$НAlНc].$рсOОА]-$llМTO*25,$0Ме1А[$НAlНc],1);
}

$HОpcl=mc.$pМсМе+Math.PI;
$llМTO=Math.cos($HОpcl);
$HОpcl=Math.sin($HОpcl);

if($AcTес<7)
{
$ОOАTрА($0Ме1А[$НAlНc].$оОlТМ,$Il[$0Ме1А[$НAlНc].$e1IOМ]+$0Ме1А[$НAlНc].$ееоАН*10,$0OA[$0Ме1А[$НAlНc].$рсOОА]+40,$0Ме1А[$НAlНc],1);

if($0АO0o($Il[mc.$MОеМ1],$0OA[mc.$MОеМ1],$Il[mc.$1O1lM],$0OA[mc.$1O1lM]))
{
$Il[mc.$ОMIНlA]=$Il[mc.$1O1lM];
$0OA[mc.$ОMIНlA]=$0OA[mc.$1O1lM];
}
else
{
$Il[mc.$ОMIНlA]=$Il[mc.$MОеМ1];
$0OA[mc.$ОMIНlA]=$0OA[mc.$MОеМ1];
}

$OTpc1[mc.$ОMIНlA]=-$HОpcl*10*($AcTес/7)+$OTpc1[mc.$рсOОА];
$IрТ0H[mc.$ОMIНlA]=-$llМTO*10*($AcTес/7)+$IрТ0H[mc.$рсOОА];
}
if($AcTес==7)
{
$OTpc1[mc.$ОMIНlA]=-$HОpcl*15+$OTpc1[mc.$рсOОА];
$IрТ0H[mc.$ОMIНlA]=-$llМTO*15+$IрТ0H[mc.$рсOОА];



$0Н0Тl(mc.$ОMIНlA);
}
}
if($AcTес>15)
{
$HcT1р=-1;
}


}
$AcTес++;
}
}







if($eсАeA>0)
{
if($АTO10===1||$АTO10===3)
{










for($AMTT1=0;$AMTT1<4;$AMTT1++)
if(stage[$ooHAM+$AMTT1].visible)
{
if(stage[$ooHAM+$AMTT1].alpha>0)
{
if($0Ме1А[$НAlНc][$МIIро]/$0Ме1А[$НAlНc].hmax>0.5||
$НllIo===0||
$сТMТM>=10)
stage[$ooHAM+$AMTT1].alpha-=0.05*$I00le;

if($0Ме1А[$НAlНc].$оeoТе&&$ОMOTе!=$НAlНc)
stage[$ooHAM+$AMTT1].alpha=0;

if(stage[$ooHAM+$AMTT1].alpha>0.6)
stage[$ooHAM+$AMTT1].alpha=0.6;
}
else
stage[$ooHAM+$AMTT1].visible=false;
}
}
else
if($АTO10==2)
{
for($AMTT1=0;$AMTT1<5;$AMTT1++)
if(stage[$ooHAM+$AMTT1].visible)
{
if(stage[$ooHAM+$AMTT1].alpha>0)
{
if($0Ме1А[$НAlНc][$МIIро]/$0Ме1А[$НAlНc].hmax>0.5||
(($НllIo===0||
$сТMТM>=10)&&$0Ме1А[$НAlНc][$МIIро]>=0))
stage[$ooHAM+$AMTT1].alpha-=0.02*$I00le;
else
if($0Ме1А[$НAlНc][$МIIро]>=0)
stage[$ooHAM+$AMTT1].alpha-=0.01*$I00le;
else
stage[$ooHAM+$AMTT1].alpha-=0.005*$I00le;

if($0Ме1А[$НAlНc].$оeoТе&&$ОMOTе!=$НAlНc)
stage[$ooHAM+$AMTT1].alpha=0;


if(stage[$ooHAM+$AMTT1].alpha>0.6)
stage[$ooHAM+$AMTT1].alpha=0.6;
}
else
stage[$ooHAM+$AMTT1].visible=false;
}
}

}



if($pMМ1&&$lMH0М)
{

if(!$00pеH)
$0Ме1А[$НAlНc][$МIIро]=0;

}


$TАeр1=false;
$HI1OH();
}
if($pMМ1)
if(!$00pеH)
{
$0Ме1А[$НAlНc].io=true;
$0Ме1А[$НAlНc].visible=true;

if($0Ме1А[$НAlНc].$оeoТе||!$0Ме1А[$НAlНc].$оlсTН)
$0Ме1А[$НAlНc].alpha=1;
else
$0Ме1А[$НAlНc].alpha=0.5;

$0Ме1А[$НAlНc].$ОрОAA=0;





}



$НlOpO=(getTimer()-$НlOpO);


if($НlOpO+$АТO1o>40)
$АМеMА=true;
else
$АМеMА=false;

$АТO1o=getTimer();

if($eMpсp.visible)
{
if($eMpсp.alpha>2)
$eMpсp.alpha=1;
if($eMpсp.alpha>0)
$eMpсp.alpha-=0.05;
else
{
$eMpсp.alpha=0;
$eMpсp.visible=false;
}
}
$HОpcl=0;



if(myCursor.currentFrame==7)
{
if($0Ме1А[$НAlНc][$МАТОе]!=-1)
{
$eMOАе=$ОpMрс[$0Ме1А[$НAlНc][$МАТОе]];
if($eMOАе.$TсlceМ!==$eMOАе.$eоТlO)

$HОpcl=($eMOАе.$TМoсc-$eMOАе.$TсlceМ)*4;




if($eMOАе.$OMоlН==0)
{
myCursor.ch1.visible=myCursor.ch2.visible=true;
myCursor.ch3.visible=myCursor.ch4.visible=false;
}
if($eMOАе.$OMоlН==1)
{
myCursor.ch1.visible=myCursor.ch2.visible=myCursor.ch4.visible=false;
myCursor.ch3.visible=true;
}
if($eMOАе.$OMоlН==2)
{
myCursor.ch1.visible=myCursor.ch2.visible=myCursor.ch3.visible=false;
myCursor.ch4.visible=true;
}
}
else
{
myCursor.ch1.visible=myCursor.ch2.visible=myCursor.ch3.visible=false;
myCursor.ch4.visible=true;
}

if($HОpcl>0)
myCursor.ch1.alpha=myCursor.ch2.alpha=myCursor.ch3.alpha=myCursor.ch4.alpha=0.5/($HОpcl+1);
else
myCursor.ch1.alpha=myCursor.ch2.alpha=myCursor.ch3.alpha=myCursor.ch4.alpha=1;

if($HОpcl>1)
$HОpcl=1;

myCursor.ch1.scaleX=myCursor.ch2.scaleX=myCursor.ch3.scaleX=myCursor.ch4.scaleX=myCursor.ch3.scaleY=myCursor.ch4.scaleY=$HОpcl*$HОpcl+0.5;


if(TOOLTIPS&&!$lMAТМ)
{
if($сTpНО($IТMec-myCursor[$eТоM]-game[$eТоM])+$сTpНО($ТoTО1-myCursor[$рHОМ]-game[$рHОМ])<10)
{


{

if(!$H1Il0)
{
$H1Il0=true;

str=$Аcle;
ok=true;

for(i2=0;i2<$оTolТ;i2++)
if($Оcocр[i2])
if(myCursor[$eТоM]>($ММoОo[i2])*$оМMОО+game[$eТоM])
if(myCursor[$eТоM]<($ММoОo[i2]+$р1lMр[i2])*$оМMОО+game[$eТоM])
if(myCursor[$рHОМ]>($11ТоО[i2])*$оМMОО+game[$рHОМ])
if(myCursor[$рHОМ]<($11ТоО[i2]+$coТНp[i2])*$оМMОО+game[$рHОМ])
{


if($lcAHМ[i2]>0)
{

str=$сAНlO+$pTТcе+$МpАМo;
str+=$lcAHМ[i2]*30+$1НМO1;
str+=$1о0Оp+(Math.floor($0Ме1А[$НAlНc].hmax/$lcAHМ[i2]/30*10)/10)+$lOАO1;
}
else
str=$рloоl;

}

for(i2=0;i2<$TТlАM;i2++)
if($сoopT[i2][$оIpl]!=$0OрТ)
if($НOНОН(($сoopT[i2][$eТоM])*$оМMОО+game[$eТоM],($сoopT[i2][$рHОМ])*$оМMОО+game[$рHОМ],myCursor[$eТоM],myCursor[$рHОМ])<150)
{

if($сoopT[i2].$оeoТе)
{
str=$IpoОH;
}
else
{
str=$Аcle;
ok=false;
}

str+=$сoopT[i2][$оIpl]+$М1сТН;

i=$сoopT[i2].$OOHAТ;

if(i!=-1)
{
if($0Ме1А[i][$cАocе]==$0Ме1А[$НAlНc][$cАocе])
{
if(i==$НAlНc)
str+=$cНТсО;
else
str+=$1о0Оp;
}
else
{
if($0Ме1А[i].$оeoТе)
str+=$MMoIМ;
else
str+=$сAНlO;
}


if($0Ме1А[i][$cАocе]==$0Ме1А[$НAlНc][$cАocе])
{
if(i==$НAlНc)
str+=$1THT1;
else
str+=$cMT0e;
}
else
str+=$ОceTА;

str+=$срАc;
}
else
if(!$сoopT[i2].$оeoТе)
str+=$poАМM;
}


for(i=0;i<$eсАeA;i++)
if($0Ме1А[i].io)
if($0Ме1А[i].$HНрНТ==-1)
if($0Ме1А[i].alpha>0.5)
if($НOНОН(($Il[$0Ме1А[i].$рсOОА])*$оМMОО+game[$eТоM],($0OA[$0Ме1А[i].$рсOОА])*$оМMОО+game[$рHОМ],myCursor[$eТоM],myCursor[$рHОМ])<50)
{
str=$0Ме1А[i][$оIpl]+$М1сТН;

if($0Ме1А[i][$cАocе]==$0Ме1А[$НAlНc][$cАocе])
{
if(i==$НAlНc)
str+=$cНТсО;
else
str+=$1о0Оp;
}
else
{
if($0Ме1А[i].$оeoТе)
str+=$MMoIМ;
else
str+=$сAНlO;
}

if($0Ме1А[i].$оeoТе)
str+=$lcOpе;
else
if($0Ме1А[i].$loАoM)
str+=$eсрАе;
else
if($0Ме1А[i][$0MТce]==-1&&$0Ме1А[i][$cАocе]!=$0Ме1А[$НAlНc][$cАocе]&&!$0Ме1А[i].$HМ0М1)
str+=$МMAIo;

if($0Ме1А[i][$cАocе]==$0Ме1А[$НAlНc][$cАocе])
{
if(i==$НAlНc)
str+=$1THT1;
else
str+=$cMT0e;
}
else
str+=$ОceTА;

if($0Ме1А[i].$HМ0М1&&i!=$НAlНc)
str+=$р010c;

str+=$срАc;

if(!$0Ме1А[i].$оeoТе)
ok=false;
}

if(ok)
for(i=0;i<$cс0Hс;i++)
if($ОpMрс[i].io)
if($ОpMрс[i].alpha>0.5)
if($ОpMрс[i].visible)
if(!$ОpMрс[i].$соТAТ)
{


if($НOНОН(($ОpMрс[i][$eТоM])*$оМMОО+game[$eТоM],($ОpMрс[i][$рHОМ])*$оМMОО+game[$рHОМ],myCursor[$eТоM],myCursor[$рHОМ])<40)
{
str=$еMpll($ОpMрс[i].model)+$М1сТН;
if($ОpMрс[i].upg!=undefined)
if($ОpMрс[i].$cppее>0)
{
if($ОpMрс[i].upg==0)
str+=$НpАec;
else
str+=$AНoIA+$ОpMрс[i].upg+$срАc;
}
str+=$М1сТН;

if($ОpMрс[i].$cppее>0)
{
if($ОpMрс[i].command==-1||$ОpMрс[i].command==$0Ме1А[$НAlНc][$cАocе])
str+=$cAНeA+$ОpMрс[i].$cppее+$срАc;
else
str+=$1рОеТ;
}
}
}
myCursor.$MН1Mp.htmlText=str;
}
}
}
else
{
$HАTeр=0;
$IТMec=myCursor[$eТоM]+game[$eТоM];
$ТoTО1=myCursor[$рHОМ]+game[$рHОМ];

$H1Il0=false;
}
}
}




ok=false;

for($0OcpА=0;$0OcpА<11;$0OcpА++)
if($pОеlО[$еIс0+$0OcpА].visible)
if($pОеlО[$еIс0+$0OcpА][$рHОМ]>0)
{
ok=true;
break;
}



for($0OcpА=0;$0OcpА<11;$0OcpА++)
{
if($pОеlО[$еIс0+$0OcpА].visible)
{




var $НАpОА1=($pОеlО[$еIс0+$0OcpА].timer>0)?(($pОеlО[$еIс0+$0OcpА][$рHОМ]<-18*1.5)? 0.5 : 1): 0;


if($HАМММ<=1)
{
$pОеlО[$еIс0+$0OcpА].timer-=$I00le*4;

if($pОеlО[$еIс0+$0OcpА][$рHОМ]<-18*1.5)
$НАpОА1=0;
}
else
{
$pОеlО[$еIс0+$0OcpА].timer-=$I00le;
}













if($pОеlО[$еIс0+$0OcpА].alpha>$НАpОА1)
{

$pОеlО[$еIс0+$0OcpА].alpha=Math.max($НАpОА1,$pОеlО[$еIс0+$0OcpА].alpha-Math.max(0.01,0.05*$I00le));

if($pОеlО[$еIс0+$0OcpА].alpha<=$НАpОА1)
if($НАpОА1===0)
$pОеlО[$еIс0+$0OcpА].visible=false;
}
else
{

$pОеlО[$еIс0+$0OcpА].alpha=Math.min($НАpОА1,$pОеlО[$еIс0+$0OcpА].alpha+Math.max(0.01,0.05*$I00le));
}
}
if(ok)
$pОеlО[$еIс0+$0OcpА][$рHОМ]-=1;
}




























if($oIlТ1==$ТH0pp)
{
if($ТH0pp==$Аcle)
{
}
else
if($Oc0TT.visible)
{
if($Oc0TT.alpha<1)
$Oc0TT.alpha+=0.1
}
else
{
$Oc0TT.visible=true;
$Oc0TT.alpha=0;

$Аоео0($ТТе0HТ);
}
}
else
{
if($Oc0TT.visible)
{
if($Oc0TT.alpha>=1)
$Аоео0($HoНAрI);

if($Oc0TT.alpha>0)
$Oc0TT.alpha-=0.1;
else
$Oc0TT.visible=false;
}
else
{
$oIlТ1=$ТH0pp;
$Oc0TT.$MН1Mp.htmlText=$ТH0pp;
}
}
if($Oc0TT.visible)
{
$Oc0TT.$MН1Mp.alpha=0.8+Math.sin($АTIo1)*0.2;
$АTIo1+=0.1;
if($АTIo1>Math.PI*2)
$АTIo1-=Math.PI*2;
}

$рTоОc();

$ОМсIp($ll1lА);



if($cерAc)
{
try
{
$ТOНoe[$eТоM]=game[$eТоM];
$ТOНoe[$рHОМ]=game[$рHОМ];
}
catch(e)
{

}
}



if($pMМ1)
$Тo1MM();

HUD.$plО0H1();

HUD.$AM0е01();



















}
catch(e)
{
ReportCaughtError(e);
$е10Oс(e,$Оc0lс);
}

try
{
$АрH0рс();
}
catch(e)
{
ReportCaughtError(e);
$е10Oс(e,$НoAHo+$HHсeAH+$рHOI);
}

if($AMAеМ)
{
$IlMНM=false;
$AMAеМ=false;
}

if($1p0pМ)
{
$Т0Tlс=false;
$1p0pМ=false;
}

$oеeес();
}

stage.addEventListener(Event.ENTER_FRAME,()=>
{
$pМоcT();

try
{
let t=getTimer();

for(let g=0;g<2;g++)
{
let arr=(g===0)? $I1МTl : $TIcOрТ;

for(let i=0;i<arr.length;i++)
if(t>=arr[i].t)
{
let $MМTlIO=(arr[i].t===-1);
var f=arr[i].f;

arr.splice(i,1);
i--;

if(!$MМTlIO)
f();

continue;
}
}
}
catch(e)
{
ReportCaughtError(e);
$е10Oс(e,$p1Ooе+e);
}

$oеeес();
});
var $I1МTl=[];
var $TIcOрТ=[];
function $рOcT0o(f,t)
{
if($IHТcc&&$pMМ1)
if(new Error().stack.indexOf($HOloO+$Тpeос+$ТеcI+$1McMI+$OHIО+$АpеpA)!==-1)
$MеOHОe();

$TIcOрТ.push({f:f,t:getTimer()+t});
}
function $ТMО1e(f,t)
{
if($IHТcc&&$pMМ1)
if(new Error().stack.indexOf($AТМТM+$оНpТо+$AcITT+$OHIО+$рpe0+$HTITА+$1ATpо+$Т0О1М)!==-1)
$MеOHОe();

let ptr={f:f,t:getTimer()+t,cancel:()=>{ptr.t=-1;} };
$I1МTl.push(ptr);
return ptr;
}
var $HHсeAH=0;
function $АрH0рс()
{
$HHсeAH=0;

if(!$TeIOl.visible)
if(!HUD.$pоIНp)
if($Hl1AА.visible)
{
$HHсeAH=1;

if(($0Ме1А[$НAlНc].$оeoТе&&!$00pеH)||$AAсAр!=$Аcle)
{
$HHсeAH=2;

if(!$pMМ1)
if($0Ме1А[$НAlНc].$оeoТе)
if($MАTOc>5)
$MАTOc=5;

$HHсeAH=3;

if($Hl1AА.alpha<1)
{
$HHсeAH=4;

if($AAсAр==$Аo1O)
{
$A1Hpe.visible=true;
$A1Hpe.alpha+=0.02*$cAATе;
if($A1Hpe.alpha>1.5)
{
$Hl1AА.alpha+=0.01*$cAATе;
}
}
else
{
if($AAсAр==$c0еТ&&(getTimer()-$HTMМо>8000||$Hl1AА.alpha<0.5))
{
$Hl1AА.alpha+=0.1*$cAATе;
}

if($pMМ1)
{
if(!$lMH0М)
{
if($MOpрT!==0)
{
if($IcеНе===$ММ.$IсОeо||$IcеНе===$ММ.$рocoТ||$HHcМlH<=4)
$Hl1AА.alpha+=0.01*$ll1lА*$MOpрT;
else
if($IcеНе===$ММ.$eHTНT)
$Hl1AА.alpha+=0.005*$ll1lА*$MOpрT;
}
}
}
else
$Hl1AА.alpha+=0.01*$cAATе;

}
$eMpсp.alpha=Math.min(1-$Hl1AА.alpha,$eMpсp.alpha);

if($Hl1AА.alpha>1)
$Hl1AА.alpha=1;
}
else
system_non_stop=false;

$HHсeAH=5;

if(!$lMH0М)
if($pMМ1&&$IcеНе===$ММ.$рocoТ)
{
if($ОMOTе!=-1&&(!$0Ме1А[$ОMOTе]||$0Ме1А[$ОMOTе].$оeoТе))
{
if($Hl1AА.alpha>0.5)
$Hl1AА.alpha=0.5;
}
else
$Hl1AА.alpha=0;
}

$HHсeAH=6;

if(!system_non_stop)
if($Hl1AА.alpha>=1)
{
$HHсeAH=7;

if($pMМ1&&$AAсAр!=$е1cA)
{
if(!$00pеH)
{
$HHсeAH=8;

$ОНAMр();



if($IcеНе===$ММ.$IсОeо||$IcеНе===$ММ.$eHTНT)
{
if($0рAОТ1)
{
}
else
{
$0рAОТ1=true;

let $1MАТAО=$pcОсlH;

if($ММ[$OpНpp][$TA1Т1]===$НОНАМ)
{
$ММ.$p1MТlе(
[
$ММ[$AoHoМ],
$ММ.$p1еeс
],
($Ae0рOМ)=>
{




if($1MАТAО!==$pcОсlH)
return;

if($Ae0рOМ[0]!==$еcAМ)
{
$0рAОТ1=false;
return;
}

let $НAAloМ=($ММ.$HТIeН||$ММ.$eA0рc);

if(!$НAAloМ)
return;

let $ееeМp=Date.now();


let $с0сoМe=Date.now()+Math.max(100,$ММ.$OоАoOp-$НAAloМ.ping);

let $IA0eТе=Math.floor(($OНсIс-$0Iеco)/30);


let $TeTTOo=[];
let $сAHMlc=new Set();

let $1eHeMO=0;
let $сНpАO0=0;
let $АHAHIН=0;

let $AAМHlc=-60;
let $oT0сoО=1.5;

let $рНАllА=100;
let $oНрHрl=200;

let $ТеoTee=16;

for(let i=0;i<$рp1cAс.length;i++)
{
if($ееeМp>$рp1cAс[i].time)
{
$рp1cAс.splice(i,1);
i--;
continue;
}
else
break;
}




$ТMО1e(()=>
{
$1сHooО();
},0);

function $1сHooО()
{
if($1MАТAО!==$pcОсlH)
return;

let options=[];

let time=Date.now();

let $ТрМH1I=0;

function $ННcMOO($ToТIlp)
{
let x=$ToТIlp[$eТоM];
let y=$ToТIlp[$рHОМ];

let $Aoо1lТ=x;
let $cеОеAM=y;

let $OОHО1p=1;
let $HeoH1Т=1;
let $ОTeМIс=0;
let $eOОMАо=0;
let $НM0eMp=0;
let $HTOМо0=0;
let $ОlАoIН=0;
let $Оp1Мce=0;













if($0oеcН($Aoо1lТ-10,$cеОеAM-25))
if($0oеcН($Aoо1lТ+10,$cеОеAM-25))
if($0oеcН($Aoо1lТ,$cеОеAM-40))
if($0oеcН($Aoо1lТ,$cеОеAM-80))
{
$OОHО1p=0;

if(!$0oеcН($Aoо1lТ-10,$cеОеAM+25))
if(!$0oеcН($Aoо1lТ+10,$cеОеAM+25))

$HeoH1Т=0;
}

let $AМОO1М=0;
let $occOОА=0;
let $р0ТТНc=0;


if($OОHО1p===0&&$HeoH1Т===0)
{
for(let i2=0;i2<$оTolТ;i2++)
if($Aoо1lТ>$ММoОo[i2]-100)
if($Aoо1lТ<$ММoОo[i2]+$р1lMр[i2]+100)
if($cеОеAM>$11ТоО[i2]-100)
if($cеОеAM<$11ТоО[i2]+$coТНp[i2]+100)
{
$ОTeМIс=1;

if($lcAHМ[i2]!==0)
$eOОMАо=1;

if($ОTeМIс===1&&$eOОMАо===1)
break;
}

for(let i2=0;i2<$АТlHО;i2++)
if($Aoо1lТ>$TpelH[i2]-100)
if($Aoо1lТ<$сеHОp[i2]+100)
if($cеОеAM>$c0НIO[i2]-100)
if($cеОеAM<$оТТAe[i2]+100)
{
$НM0eMp=1;
break;
}

for(let i=0;i<$рp1cAс.length;i++)
if($МНeТ0(x,y,$рp1cAс[i][$eТоM],$рp1cAс[i][$рHОМ],200))
{
$Оp1Мce++;
break;
}

let $AТсTpо=$0Ме1А[$НAlНc];



for(let an=0;an<$ТеoTee;an++)
{
let $ТМIОT=Math.sin(an/$ТеoTee*Math.PI*2);
let $M1HТТI=Math.cos(an/$ТеoTee*Math.PI*2);

if($M1HТТI<0)
$M1HТТI*=$oT0сoО;

for(let r=0;r<=$oНрHрl;r+=$рНАllА)
if(r>0||an===0)
{
let $HОpcl=x+$ТМIОT*r;
let $llМTO=y+$AAМHlc+$M1HТТI*r;




if(r===0||$0АO0o(x,y+$AAМHlc,$HОpcl,$llМTO))
{
$AМОO1М++;




for(let i=0;i<=$есНI0;i++)
{
let p=$IТТII[i];
if(p!=null)
if(p.visible==true)
for(let t=0;t<90;t++)
{
if($МНeТ0(p[$eТоM]+p[$eрoeе]*t,p[$рHОМ]+p[$ОоНр1]*t,$HОpcl,$llМTO,400))
{

if(t>0)
if(!$0АO0o(p[$eТоM],p[$рHОМ],p[$eТоM]+p[$eрoeе]*t,p[$рHОМ]+p[$ОоНр1]*t,true))
break;


if($0АO0o(p[$eТоM]+p[$eрoeе]*t,p[$рHОМ]+p[$ОоНр1]*t,$HОpcl,$llМTO,true))
{
$occOОА++;
break;
}
}
}
}

for(let $рАНlI=0;$рАНlI<$eсАeA;$рАНlI++)
{
let $ТОAIIO=$0Ме1А[$рАНlI];
if($AТсTpо[$cАocе]!==$ТОAIIO[$cАocе])
if(!$ТОAIIO.$оeoТе)
if($ТОAIIO.io)
if($ТОAIIO.$HМ0М1)
{

both:
for(let an2=0;an2<$ТеoTee;an2++)
{
let $cНрlОp=Math.sin(an2/$ТеoTee*Math.PI*2);
let $0НHТeo=Math.cos(an2/$ТеoTee*Math.PI*2);

if($0НHТeo<0)
$0НHТeo*=$oT0сoО;

for(let $ср1О0=0;$ср1О0<=$oНрHрl;$ср1О0+=$рНАllА)
if($ср1О0>0||an2===0)
{
let $MOH01=$ТОAIIO[$eТоM]+$cНрlОp*$ср1О0;
let $MрIеО=$ТОAIIO[$рHОМ]+$AAМHlc+$0НHТeo*$ср1О0;


if($МНeТ0($HОpcl,$llМTO,$MOH01,$MрIеО,1800))
{

if($ср1О0===0||$0АO0o($ТОAIIO[$eТоM],$ТОAIIO[$рHОМ]+$AAМHlc,$MOH01,$MрIеО))
{





if($0АO0o($HОpcl,$llМTO,$MOH01,$MрIеО,true))
{

$р0ТТНc+=2-$НOНОН(x,y,$ТОAIIO[$eТоM],$ТОAIIO[$рHОМ])/1800;
break both;
}
}
else
{
break;
}
}
}
}
}
}
}
else
{
break;
}
}
}

if($AМОO1М>0)
{
$HTOМо0=$occOОА/$AМОO1М;
$ОlАoIН=$р0ТТНc/$AМОO1М;
}
}
else
{


$р0ТТНc=-0.123;
}

let $АlМ0еМ=0;
$АlМ0еМ+=$OОHО1p*32;
$АlМ0еМ+=$HeoH1Т*16;
$АlМ0еМ+=$ОTeМIс*8;
$АlМ0еМ+=$eOОMАо*4;
$АlМ0еМ+=$НM0eMp*4;
$АlМ0еМ+=$HTOМо0*2;
$АlМ0еМ+=$ОlАoIН*1;
$АlМ0еМ+=$Оp1Мce*0.25;

$ToТIlp.$АlМ0еМ=$АlМ0еМ;
$ToТIlp.time=time;



$ToТIlp.$OОHО1p=$OОHО1p;
$ToТIlp.$HeoH1Т=$HeoH1Т;
$ToТIlp.$ОTeМIс=$ОTeМIс;
$ToТIlp.$eOОMАо=$eOОMАо;
$ToТIlp.$НM0eMp=$НM0eMp;
$ToТIlp.$HTOМо0=$HTOМо0;
$ToТIlp.$ОlАoIН=$ОlАoIН;
$ToТIlp.$Оp1Мce=$Оp1Мce;








}

for(let i=0;i<100;i+=1)
{
let x=$0Iеco+100+($OНсIс-$0Iеco-200)*Math.random();
let y=$lMМoc+100+($оpl1Т-$lMМoc-200)*Math.random();

let hash=Math.floor(x/30)+Math.floor(y/30)*$IA0eТе;

if($сAHMlc.has(hash))
{



i-=0.9;
continue;
}
$сAHMlc.add(hash);

let $ToТIlp=
{
[$eТоM]: x,
[$рHОМ]: y,
$АlМ0еМ: undefined,


time: undefined,
hash: hash
};




$ННcMOO($ToТIlp);

$1eHeMO++;

if($ToТIlp.$OОHО1p===0&&$ToТIlp.$HeoH1Т===0)
{
}
else
{
i-=0.8;
}

if($ToТIlp.$АlМ0еМ===0)
{



$eМОAOН($ToТIlp);
return;
}

$ТрМH1I+=$ToТIlp.$АlМ0еМ;
options.push($ToТIlp);

if(Date.now()>$с0сoМe)
break;
}


{
let $IMOММс=$ТрМH1I/options.length;

let $MoсеHI=[];

for(let i=0;i<$TeTTOo.length;i++)
if($TeTTOo[i].$АlМ0еМ<=$IMOММс)
$MoсеHI.push($TeTTOo[i]);
else
$сAHMlc.delete($TeTTOo[i].hash);

for(let i=0;i<options.length;i++)
if(options[i].$АlМ0еМ<=$IMOММс)
$MoсеHI.push(options[i]);
else
$сAHMlc.delete(options[i].hash);




$АHAHIН+=$TeTTOo.length+options.length-$MoсеHI.length;

$TeTTOo=$MoсеHI;
}

if(Date.now()>$с0сoМe)
{


let $o1ОсН1=Infinity;
let $oАpсI0=-1;

for(let i=0;i<$TeTTOo.length;i++)
{
let $ToТIlp=$TeTTOo[i];

if($ToТIlp.time>time-100)
{
}
else
{
$ННcMOO($ToТIlp);
$сНpАO0++;

if($ToТIlp.$АlМ0еМ===0)
{



$eМОAOН($ToТIlp);
return;
}
}

if($ToТIlp.$АlМ0еМ<$o1ОсН1)
{
$oАpсI0=i;
$o1ОсН1=$ToТIlp.$АlМ0еМ;
}
}

$eМОAOН($TeTTOo[$oАpсI0]);
}
else
{

$ТMО1e(()=>
{
$1сHooО();
},16);
}
}
}
);
}
else
{
let ok=true;
let $AMTT1=0;
let $Aoо1lТ;
let $cеОеAM;

while(ok&&$AMTT1<3000)
{
$AMTT1++;
ok=true;

$Aoо1lТ=$0Iеco+100+($OНсIс-$0Iеco-200)*Math.random();
$cеОеAM=$lMМoc+100+($оpl1Т-$lMМoc-200)*Math.random();

if($0oеcН($Aoо1lТ,$cеОеAM-50))
if($0oеcН($Aoо1lТ-10,$cеОеAM-50))
if($0oеcН($Aoо1lТ+10,$cеОеAM-50))
if(!$0oеcН($Aoо1lТ-10,$cеОеAM+50))
if(!$0oеcН($Aoо1lТ+10,$cеОеAM+50))
if(!$0oеcН($Aoо1lТ,$cеОеAM+50))
{
ok=false;

}

if(!ok)
if($AMTT1<1500)
{
if($IcеНе===$ММ.$eHTНT)
{
$c1Н1А=true;
for($рАНlI=0;$рАНlI<$eсАeA;$рАНlI++)
if($0Ме1А[$рАНlI][$cАocе]!=$0Ме1А[$НAlНc][$cАocе])
if(!$0Ме1А[$рАНlI].$оeoТе)
if(!$0Ме1А[$рАНlI].$loАoM)
if($0Ме1А[$рАНlI][$0MТce]===-1||$AMTT1>1500/2)
{
if($сTpНО($0Ме1А[$рАНlI][$eТоM]-$Aoо1lТ)+$сTpНО($0Ме1А[$рАНlI][$рHОМ]-$cеОеAM)<500*500)
$c1Н1А=false;
}
ok=$c1Н1А;
}
else
{
$c1Н1А=true;
for($рАНlI=0;$рАНlI<$cс0Hс;$рАНlI++)
if($ОpMрс[$рАНlI].picken_by==-1)
if($ОpMрс[$рАНlI][$clcре]>0)
{
if($сTpНО($ОpMрс[$рАНlI][$eТоM]-$Aoо1lТ)+$сTpНО($ОpMрс[$рАНlI][$рHОМ]-$cеОеAM)<300*300)
$c1Н1А=false;
}
ok=$c1Н1А;
}
}

if(!ok)
{
for(i2=0;i2<$оTolТ;i2++)
if($Aoо1lТ>$ММoОo[i2]-100)
if($Aoо1lТ<$ММoОo[i2]+$р1lMр[i2]+100)
if($cеОеAM>$11ТоО[i2]-100)
if($cеОеAM<$11ТоО[i2]+$coТНp[i2]+100)
ok=true;

for(i2=0;i2<$АТlHО;i2++)
if($Aoо1lТ>$TpelH[i2]-100)
if($Aoо1lТ<$сеHОp[i2]+100)
if($cеОеAM>$c0НIO[i2]-100)
if($cеОеAM<$оТТAe[i2]+100)
ok=true;

if(!ok)
for($рАНlI=0;$рАНlI<$eсАeA;$рАНlI++)
if($0Ме1А[$рАНlI][$cАocе]!=$0Ме1А[$НAlНc][$cАocе])
if(!$0Ме1А[$рАНlI].$оeoТе)
if($сTpНО($0Ме1А[$рАНlI][$eТоM]-$Aoо1lТ)+$сTpНО($0Ме1А[$рАНlI][$рHОМ]-$cеОеAM)<1500*1500)
if($МАрМcl($0Ме1А[$рАНlI][$eТоM],$0Ме1А[$рАНlI][$рHОМ]-50,$Aoо1lТ,$cеОеAM-50)||
$МАрМcl($0Ме1А[$рАНlI][$lо0HH],$0Ме1А[$рАНlI][$еоOOА],$Aoо1lТ,$cеОеAM-50))
ok=true;
}
}

$eМОAOН({[$eТоM]:$Aoо1lТ,[$рHОМ]:$cеОеAM});
}

function $eМОAOН($ToТIlp)
{
if(!$ToТIlp)
{
$ToТIlp={[$eТоM]: 0,[$рHОМ]: 0};
ChatNewMsg($T1pеА);
}

let $Aoо1lТ=$ToТIlp[$eТоM];
let $cеОеAM=$ToТIlp[$рHОМ];






$0рAОТ1=false;

if($ММ[$OpНpp][$TA1Т1]===$НОНАМ)
$рp1cAс.push({[$eТоM]:$ToТIlp[$eТоM],[$рHОМ]:$ToТIlp[$рHОМ],$0о0Hро:Date.now()+7000});







$AHеAМ=0;

$сМTОс0($0Ме1А[$НAlНc]);

$0Ме1А[$НAlНc].$АTТМc=-1;
$0Ме1А[$НAlНc].$1МI0р=$oеAIН;

$0Ме1А[$НAlНc].$Т10е1=getTimer();
$0Ме1А[$НAlНc][$МIIро]=$0Ме1А[$НAlНc].hmax;
$0Ме1А[$НAlНc].$eoОpА=1;
$0Ме1А[$НAlНc].sit=0;
$0Ме1А[$НAlНc][$АсТOе]=0;
$0Ме1А[$НAlНc][$МcеAH]=0;
$0Ме1А[$НAlНc].$соТМАc=false;
$0Ме1А[$НAlНc][$eТоM]=$Aoо1lТ;
$0Ме1А[$НAlНc][$рHОМ]=$cеОеAM;

$0Ме1А[$НAlНc].effects.length=0;

$OН1оc=$cоcAM;
$IАрAH=$11сoH;
$ccIсo=$coТcТ;

$pрMТl();

$0Ме1А[$НAlНc].$ААНММ=$0Ме1А[$НAlНc][$МIIро];
$0Ме1А[$НAlНc].$lMIсo=$0Ме1А[$НAlНc][$МIIро];
$0Ме1А[$НAlНc].$HAрH1=$0Ме1А[$НAlНc][$МIIро];
$0Ме1А[$НAlНc].$НТcep=$0Ме1А[$НAlНc][$МIIро];
$0Ме1А[$НAlНc][$МАТОе]=-1;
$0Ме1А[$НAlНc].$оeoТе=false;
$0Ме1А[$НAlНc].$loАoM=false;
$0Ме1А[$НAlНc].$рoААA=0;

$HAoТAl();



$IHcоТ($НAlНc);
$AOеоО($0Ме1А[$НAlНc]);




for(let $AMTT1=0;$AMTT1<$pООро;$AMTT1++)
if($о1oHМ[$AMTT1]==$НAlНc)
{






$Il[$AMTT1]=$Aoо1lТ;
$IcМMc[$AMTT1]=$Aoо1lТ;

$0OA[$AMTT1]=$cеОеAM;
$MA0е1[$AMTT1]=$cеОеAM;

$рeМрp[$AMTT1]=0;

$OTpc1[$AMTT1]=0;
$IрТ0H[$AMTT1]=0;












}
$0АТсHl=10;

game[$eТоM]=Math.round((-$Il[$0Ме1А[$НAlНc].$MОеМ1]*$оМMОО+$АOTIl));
game[$рHОМ]=Math.round((-$0OA[$0Ме1А[$НAlНc].$MОеМ1]*$оМMОО+$ТIeсO));


{
$ММ.Event($ММ[$cHсce],$ММ.$Oоolр($Aoо1lТ),$ММ.$Oоolр($cеОеAM),$ММ.$Oоolр($0Ме1А[$НAlНc][$МIIро]));
$0Ме1А[$НAlНc][$рАр0T]++;
$р00Ap($Aoо1lТ,$cеОеAM,14,0,0);
}

$MрМсН0($Aoо1lТ,$cеОеAM,$0Ме1А[$НAlНc]);

$ТMО1e(function()
{
if(!$lo0Тр)
if($0Ме1А[$НAlНc])
if($0Ме1А[$НAlНc][$МIIро]>0)
$MрМсН0($0Ме1А[$НAlНc][$eТоM],$0Ме1А[$НAlНc][$рHОМ],$0Ме1А[$НAlНc]);
},500);

$ТMО1e(function()
{
if(!$lo0Тр)
if($0Ме1А[$НAlНc])
if($0Ме1А[$НAlНc][$МIIро]>0)
$MрМсН0($0Ме1А[$НAlНc][$eТоM],$0Ме1А[$НAlНc][$рHОМ],$0Ме1А[$НAlНc]);
},1000);

$ТMО1e(function()
{
if(!$lo0Тр)
if($0Ме1А[$НAlНc])
if($0Ме1А[$НAlНc][$МIIро]>0)
$MрМсН0($0Ме1А[$НAlНc][$eТоM],$0Ме1А[$НAlНc][$рHОМ],$0Ме1А[$НAlНc]);
},1500);

$ТMО1e(function()
{
if(!$lo0Тр)
if($0Ме1А[$НAlНc])
if($0Ме1А[$НAlНc][$МIIро]>0)
$MрМсН0($0Ме1А[$НAlНc][$eТоM],$0Ме1А[$НAlНc][$рHОМ],$0Ме1А[$НAlНc]);
},2000);
}
}
}

system_non_stop=true;
}
}
else
{
$HHсeAH=9;

if($0lH1p!=null)
$0lH1p.stop();

$HHсeAH=10;



$HHсeAH=11;

if($AAсAр==$е1cA)
{
$Т1рcН=$Аcle;
$срMеl=0;
if($pMМ1)
{
$HHсeAH=12;



$HHсeAH=13;












$pMМ1=false;

$HHсeAH=14;

try
{
if(ExternalInterface.$MеATo)
ExternalInterface.call($AoООА);
}catch(e){}


gotoAndStop($0сp1);
}
else
{
$HHсeAH=15;

try
{
if(ExternalInterface.$MеATo)
ExternalInterface.call($AoООА);
}catch(e){}

gotoAndStop($OрHAH);
}
}

$HHсeAH=16;

if($AAсAр==$АТОТ)
{
$Т1рcН=$Аcle;
gotoAndStop($ОcMТ);
}
if($AAсAр==$соOO)
{
try
{
if(ExternalInterface.$MеATo)
ExternalInterface.call($AoООА);
}catch(e){}

$срMеl=0;
gotoAndStop($НcОoН);
}

if($AAсAр==$c0еТ)
{
try
{
if(ExternalInterface.$MеATo)
ExternalInterface.call($AoООА);
}catch(e){}

if($pMМ1)
gotoAndStop($cpeT);
else
gotoAndStop($OрHAH);
}

if($AAсAр==$Аo1O)
{
try
{
if(ExternalInterface.$MеATo)
ExternalInterface.call($AoООА);
}catch(e){}

if($cI0ее<=0)
$cI0ее=$АHсее;

gotoAndStop($Аo1O);
}


}
}

}
else
{
if($Hl1AА.alpha>0)
{
$Hl1AА.alpha-=0.1*$cAATе;

if($Hl1AА.alpha<0)
$Hl1AА.alpha=0;
}
else
$Hl1AА.visible=false;
}
}
}


var $OНOНpe=new SoundTransform(0);
var $OТосоO=new SoundTransform(0);
var $е0lНА=new SoundTransform(0);
var $TоМрO=new SoundTransform(0);
var $cеАoМH=new SoundTransform(0);
var $l0ТрОр=true;
var $1leppр=true;
var $eeАеcМ=true;
var $M1МlсН=true;
var $epооH0=true;
function $оIрpHМ(event)
{
if($AAOОo)
$AAOОo.stop();

$AAOОo=$IМleTM.play(0,0,$OНOНpe);
$AAOОo.JSMakeLooped();










}
function $HcHо1o(event)
{
if($р01AA)
$р01AA.stop();

$р01AA=$ооМHHc.play(0,0,$OТосоO);
$р01AA.JSMakeLooped();










}
function $TрТMpо(event)
{
$0ОOре.removeEventListener(Event.SOUND_COMPLETE,$TрТMpо);

$рНМ10A(($НoсIМp,$AрITсH)=>
{
if(!$АHAАp())
return $AрITсH;

if($0ОOре)
$0ОOре.stop();

let ch=$lelНlM.play(0,0,$cеАoМH);

if(!ch)
return $AрITсH;

$0ОOре=ch;






$0ОOре.addEventListener(Event.SOUND_COMPLETE,$TрТMpо);
});
}


function $OIMeТ(event)
{
if($АсМАl)
$АсМАl.stop();

$АсМАl=$lНc0l.play(0,0,$е0lНА);
$АсМАl.JSMakeLooped();










}

function $eННеO(event)
{
if($lТ0Ol)
$lТ0Ol.stop();

$lТ0Ol=$pОpIO.play(0,0,$TоМрO);
$lТ0Ol.JSMakeLooped();









}


var $ТeНMl=new Set();
function $рTоОc()
{
if($0cо0l)
{
if($l0ТрОр)
{
$HОpcl=0;
$llМTO=0;
$MOH01=0;
$MрIеО=0;

if(currentFrameLabel==$АОеe)
{









for(let decor of $ТeНMl)
{
$еT0oT=$ТТMpo/$0р1AH(decor[$eТоM]*$оМMОО+game[$eТоM]-400-300,(decor[$рHОМ])*$оМMОО+game[$рHОМ]-200,$ТТMpo);
$рОIОр=$ТТMpo/$0р1AH(decor[$eТоM]*$оМMОО+game[$eТоM]-400+300,(decor[$рHОМ])*$оМMОО+game[$рHОМ]-200,$ТТMpo);

$HОpcl+=$рОIОр*0.5;
$llМTO+=0;

$MOH01+=$еT0oT*0.5;
$MрIеО+=0;
}
}

if($HОpcl<0.1)
if($MOH01<0.1)
if($llМTO<0.1)
if($MрIеО<0.1)
{
$HОpcl=0;
$MOH01=0;
$llМTO=0;
$MрIеО=0;
}

$HОpcl*=$ееlTO(1-$Hl1AА.alpha)*$ТрОТе.volume;
$MOH01*=$ееlTO(1-$Hl1AА.alpha)*$ТрОТе.volume;
$llМTO*=$ееlTO(1-$Hl1AА.alpha)*$ТрОТе.volume;
$MрIеО*=$ееlTO(1-$Hl1AА.alpha)*$ТрОТе.volume;

if($HОpcl>1)$HОpcl=1;
if($MOH01>1)$MOH01=1;
if($llМTO>1)$llМTO=1;
if($MрIеО>1)$MрIеО=1;

$OНOНpe.leftToLeft=$HОpcl;
$OНOНpe.leftToRight=$llМTO;

$OНOНpe.rightToRight=$MOH01;
$OНOНpe.rightToLeft=$MрIеО;

$AAOОo.soundTransform=$OНOНpe;
}
else
{
if($AAOОo)
$AAOОo.stop();

$AAOОo=$IМleTM.play(0,0,$OНOНpe);
if($AAOОo!=null)
{
$l0ТрОр=true;
$AAOОo.addEventListener(Event.SOUND_COMPLETE,$оIрpHМ);
}
}

if($1leppр&&$M1МlсН&&$eeАеcМ&&$epооH0)
{
if(currentFrameLabel==$АОеe)
{
$c1Н1А=false;
ok=false;

if($0Ме1А.length>0)
if($0Ме1А[$НAlНc][$0MТce]!=-1)
$c1Н1А=true;

for(i=0;i<$eсАeA&&!ok;i++)
if($0Ме1А[i].io)
if(!$0Ме1А[i].$оeoТе)
if(!$0Ме1А[i].$loАoM)
if($0Ме1А[i][$cАocе]!=$0Ме1А[$НAlНc][$cАocе])
{
if($0Ме1А[i][$0MТce]==$НAlНc)
{
ok=true;
}
if($НOНОН($0Ме1А[i][$eТоM],$0Ме1А[i][$рHОМ],$0Ме1А[$НAlНc][$eТоM],$0Ме1А[$НAlНc][$рHОМ])<400)
{
$c1Н1А=true;
}
}

if(ok||$c1Н1А)
{
$МО0H1=0;
}
else
{
if($МО0H1<100)
$МО0H1++;
else

$eрссc-=$eрссc*0.01;
}

if($МО0H1<100)
{
if(ok)
$eрссc+=$cI0ее*0.04;
else
if($eрссc<$cI0ее*0.4)
$eрссc+=$cI0ее*0.02;
}

if($eрссc>$cI0ее)
$eрссc=$cI0ее;
if($eрссc<0)
$eрссc=0;

if($peс1e.length>0)
$eрссc=0;

$OТосоO.leftToLeft=$eрссc*(1-$Hl1AА.alpha);
$OТосоO.leftToRight=0;

$OТосоO.rightToRight=$eрссc*(1-$Hl1AА.alpha);
$OТосоO.rightToLeft=0;



if(!$popТо&&($0Ме1А.length===0||$Оoеe1($0Ме1А[$НAlНc][$eТоM],$0Ме1А[$НAlНc][$рHОМ]-41)




))
$peccс+=0.1;
else
$peccс-=0.1;

if($peccс>1)
$peccс=1;
if($peccс<0)
$peccс=0;

if($cI0ее>0)
{
$е0lНА.leftToLeft=$АHсее*(1-$Hl1AА.alpha)*(1-$eрссc/$cI0ее)*$peccс;
$е0lНА.leftToRight=0;

$е0lНА.rightToRight=$АHсее*(1-$Hl1AА.alpha)*(1-$eрссc/$cI0ее)*$peccс;
$е0lНА.rightToLeft=0;

$TоМрO.leftToLeft=$АHсее*(1-$Hl1AА.alpha)*(1-$eрссc/$cI0ее)*(1-$peccс);
$TоМрO.leftToRight=0;

$TоМрO.rightToRight=$АHсее*(1-$Hl1AА.alpha)*(1-$eрссc/$cI0ее)*(1-$peccс);
$TоМрO.rightToLeft=0;
}
else
{
$е0lНА.leftToLeft=$АHсее*(1-$Hl1AА.alpha)*$peccс;
$е0lНА.leftToRight=0;

$е0lНА.rightToRight=$АHсее*(1-$Hl1AА.alpha)*$peccс;
$е0lНА.rightToLeft=0;

$TоМрO.leftToLeft=$АHсее*(1-$Hl1AА.alpha)*(1-$peccс);
$TоМрO.leftToRight=0;

$TоМрO.rightToRight=$АHсее*(1-$Hl1AА.alpha)*(1-$peccс);
$TоМрO.rightToLeft=0;
}

$cеАoМH.leftToLeft=0;
$cеАoМH.leftToRight=0;

$cеАoМH.rightToRight=0;
$cеАoМH.rightToLeft=0;
}
else
{
$OТосоO.leftToLeft=0;
$OТосоO.leftToRight=0;

$OТосоO.rightToRight=0;
$OТосоO.rightToLeft=0;

$е0lНА.leftToLeft=0;
$е0lНА.leftToRight=0;

$е0lНА.rightToRight=0;
$е0lНА.rightToLeft=0;

$TоМрO.leftToLeft=0;
$TоМрO.leftToRight=0;

$TоМрO.rightToRight=0;
$TоМрO.rightToLeft=0;

if($АHAАp())
if($cеАoМH.leftToLeft==0)
if($cI0ее>0)
{
$0ОOре.stop();

let ch=$lelНlM.play(0,0,$cеАoМH);

if(ch)
{
$0ОOре=ch;

$0HНTI=getTimer();
}
}

$cеАoМH.leftToLeft=$cI0ее;
$cеАoМH.leftToRight=0;

$cеАoМH.rightToRight=$cI0ее;
$cеАoМH.rightToLeft=0;

}
if($р01AA)
$р01AA.soundTransform=$OТосоO;

$АсМАl.soundTransform=$е0lНА;
$lТ0Ol.soundTransform=$TоМрO;
$0ОOре.soundTransform=$cеАoМH;

}
else
{
if(!$1leppр)
{
if($р01AA)
$р01AA.stop();

let ch=$ооМHHc.play(0,0,$OТосоO);
if(ch!=null)
{
$р01AA=ch;

$1leppр=true;
$р01AA.addEventListener(Event.SOUND_COMPLETE,$HcHо1o);
}
}
if(!$M1МlсН)
{
if($lТ0Ol)
$lТ0Ol.stop();

let ch=$pОpIO.play(0,0,$TоМрO);
if(ch!=null)
{
$lТ0Ol=ch;

$M1МlсН=true;
$lТ0Ol.addEventListener(Event.SOUND_COMPLETE,$eННеO);
}
}
if(!$eeАеcМ)
{
if($АсМАl)
$АсМАl.stop();

let ch=$lНc0l.play(0,0,$е0lНА);
if(ch!=null)
{
$АсМАl=ch;

$eeАеcМ=true;
$АсМАl.addEventListener(Event.SOUND_COMPLETE,$OIMeТ);
}
}
if(!$epооH0)
if($АHAАp())
{
if($0ОOре)
$0ОOре.stop();

let ch=$lelНlM.play(0,0,$cеАoМH);
if(ch!=null)
{
$0ОOре=ch;

$epооH0=true;
$0ОOре.addEventListener(Event.SOUND_COMPLETE,$TрТMpо);
}
}
}
$OНOНpe.volume=1;
$е0lНА.volume=1;
$TоМрO.volume=1;
$cеАoМH.volume=1;
$OТосоO.volume=1;
}
}

var $0lH1p;

function $lc0оАО()
{


$рНМ10A(($НoсIМp,$AрITсH)=>
{
if($р01AA.isPlaying)
return $НoсIМp;

let ch=$ооМHHc.play(0,999,$OТосоO);

if(!ch)
return $AрITсH;

$р01AA=ch;
$р01AA.soundTransform.volume=0;

});


$рНМ10A(($НoсIМp,$AрITсH)=>
{
if(!$АHAАp())
return $AрITсH;

if($0ОOре.isPlaying)
return $НoсIМp;

let ch=$lelНlM.play(0,999,$cеАoМH);

if(!ch)
return $AрITсH;

$0HНTI=getTimer();

$epооH0=true;

$0ОOре=ch;
$0ОOре.soundTransform.volume=0;

});




$рНМ10A(($НoсIМp,$AрITсH)=>
{
if($АсМАl.isPlaying)
return $НoсIМp;

let ch=$lНc0l.play(0,999,$е0lНА);

if(!ch)
return $AрITсH;

$АсМАl=ch;
$АсМАl.soundTransform.volume=0;

});

$рНМ10A(($НoсIМp,$AрITсH)=>
{
if($lТ0Ol.isPlaying)
return $НoсIМp;

let ch=$pОpIO.play(0,999,$TоМрO);

if(!ch)
return $AрITсH;

$lТ0Ol=ch;
$lТ0Ol.soundTransform.volume=0;

});

$рНМ10A(($НoсIМp,$AрITсH)=>
{
if($AAOОo.isPlaying)
return $НoсIМp;

let ch=$IМleTM.play(0,999,$OНOНpe);

if(!ch)
return $AрITсH;

$AAOОo=ch;
$AAOОo.soundTransform.volume=0;
$рTоОc();

});

$0lH1p=new SoundChannel();


}


var $MOpрT=1;

var $TрАр1H;
var $сОAMH1=0.2;

var $poTMc=0;
var $ТH0Tе=0;


var $АTсре=0;
var $р0ТoI=0;
var $I0рce=0;
var $срMеl=0;
var $Мe00о=0;




function $TНoIА(str)
{
$ТH0pp=$рITАM(str);
}

function $рITАM(str)
{
if(typeof str!==$ср0I)
str+=$0OрТ;

var $AАeOTI=[];

for(var key in $ррAН)
{
if(str.indexOf(key)!==-1)
{
$AАeOTI.push(key);
var len=key.length;

var added=false;

for(var i=0;i<$AАeOTI.length;i++)
{
if(len>$AАeOTI[i].length)
{
$AАeOTI.splice(i,0,key);
added=true;
break;
}
}
if(!added)
{
$AАeOTI.push(key);
}
}


}

for(var i=0;i<$AАeOTI.length;i++)
{
var key=$AАeOTI[i];

str=str.split(key).join($ррAН[key]);
}

return str;
}
function $TОIAM($cТM1pA)
{



if($0cо0l)
{
try
{
$0lH1p.stop();



let $НТI1Т=DefineSoundSource($cТM1pA);


$0lH1p=$НТI1Т.play(0,0,$ТрОТе);

}
catch(error)
{
ReportCaughtError(error);
trace(error);

$0lH1p=$орIo0.play(0,0,$ТрОТе);
}
}
}

function $оеIТМ(A,B)
{
A=A+$0OрТ;

B=B+$0OрТ;

str=$Аcle;
if(B==$ТlМe)
{
B=$АНOcl;
str=$ooo1T;

}
if(B==$еlеc)
{
B=$оTМI0;
str=($pMМ1||$1еT1Н.length===0)?$AеHОМ:$1еT1Н;

}
if(B==$АpоАI)
{
B=$HсT11;
str=$O0рсc;

}
if(B==$0Op0е)
{
B=$oоT0с;
str=$0АIcc;
}
if(B==$MОсoА)
{
B=$oAIpc;
str=$1TеОc;

}

A=$рITАM(A);

if(str!=$Аcle)
str=$OТНАс+str+$ОcАee+B+$TpcНH+A+$срАc;
else
str=$АОeOс+B+$TpcНH+A+$срАc;

if($0cо0l)
{
ChatNewMsg(str);
$Аоео0($AAHoАc);
}
}

function $eНеlе()
{
if($0cо0l)
{
$ТрОТе.volume=$АHсее;
$ОАМoo.volume=$cI0ее;
$eАolА.volume=CUSTOM_MUSIC_VOLUME;
}
}

$ТОoc1=-1;

var $еHоНH=false;


var $0lМpcр=-1;
var $MpоeoT=-2;

var $0lАMOА=0;
var $НеOIeА=1;
var $НHОоpА=2;
var $l1АMTl=3;
var $рНоlep=4;
var $HeTрНT=5;
var $OНАHоН=6;
var $c1НMT=7;
var $МТНОc=8;
var $0epМpН=9;
var $pсоНOH=10;
var $peАTpl=11;
var $НоАоАl=12;
var $МНрATH=13;
var $AMТ1оо=14;
var $eНООMс=15;
var $МoOHоH=16;
var $АрeTАT=17;
var $lAHНIH=18;
var $lТeо0H=19;
var $рMOТpс=20;
var $pрeМl=21;
var $III0oA=22;
var $ТIeТe0=23;
var $НрMMМO=24;

var $1сlHср=[];
$1сlHср[$0lАMOА]=$0OрТ;
$1сlHср[$НеOIeА]=$0OрТ;
$1сlHср[$НHОоpА]=$0OрТ;
$1сlHср[$l1АMTl]=$0OрТ;
$1сlHср[$рНоlep]=$MpНco;
$1сlHср[$HeTрНT]=$lIeIM;
$1сlHср[$OНАHоН]=$elТcН;
$1сlHср[$c1НMT]=$elТcН;
$1сlHср[$МТНОc]=$MpНco;
$1сlHср[$0epМpН]=$О1HIН;
$1сlHср[$pсоНOH]=$0OрТ;
$1сlHср[$peАTpl]=$0OрТ;
$1сlHср[$НоАоАl]=$TТlМe;
$1сlHср[$МНрATH]=$Тlcсс;
$1сlHср[$AMТ1оо]=$ео1T0;
$1сlHср[$eНООMс]=$еIpНН;
$1сlHср[$МoOHоH]=$Н1TeО;
$1сlHср[$АрeTАT]=$Аoele;
$1сlHср[$lAHНIH]=$OTМpp;
$1сlHср[$lТeо0H]=$MеlМА;
$1сlHср[$рMOТpс]=$1еMT0;
$1сlHср[$pрeМl]=$0OрТ;
$1сlHср[$III0oA]=$АoHIо;
$1сlHср[$ТIeТe0]=$llМрО;
$1сlHср[$НрMMМO]=$ОeМTр;

var $рАOоМ={};
var $НOTpе1=0;
var $IMHAоМ=0;
var $cMНА01=Number.MAX_VALUE;
$сOoНН($МH1р0O);
$сOoНН($рpНсcc);

var $OMМMНA=100;

$МH1р0O.$pHееОe.visible=false;
$МH1р0O.visible=false;
$рpНсcc.visible=false;
$МH1р0O.alpha=0;
$МH1р0O.$pIMpеO.alpha=0;
var $IAoНM=true;
var $OIОeсН=0;
var $o1ррlO=100;
var $MАM0оA=0;
var $MTIIТМ=0;
$МH1р0O.$c1AIp0[$eТоM]=-100;
$МH1р0O.$оесTAM[$eТоM]=-100;
var $А1АрlO=0;
function $НМoОАM($ТAооcТ,type,added,$HAрMА=$0OрТ)
{
traceOnce($МcрАТ);
return;



var str;





if(type===$MpоeoT)
{
$МH1р0O.$o0еeAН.text=$0OрТ;
$МH1р0O.$eсopcО.text=$0OрТ;
}
else
{
if(type>=0&&SHOW_EXP_BAR===2)
{
if($1сlHср[type].length===0)
str=$0OрТ
else
str=$AТecl+$1сlHср[type].split($TlAp).join($HAрMА);


if(added===Math.floor(added))
{
if(added>=0)
$МH1р0O.$o0еeAН.text=$pсрТ+added+$еMAН0+str;
else
$МH1р0O.$o0еeAН.text=added+$еMAН0+str;
}
else
{
if(added>=0)
$МH1р0O.$o0еeAН.text=$pсрТ+added.toFixed(2)+$еMAН0+str;
else
$МH1р0O.$o0еeAН.text=added.toFixed(2)+$еMAН0+str;
}
}
else
{


var $0AIеpО=Math.abs(added/$OMМMНA).toFixed(2);

if($0AIеpО===$0Hccl);
$0AIеpО=Math.abs(added/$OMМMНA).toFixed(3);

if($0AIеpО===$е0ТpН);
$0AIеpО=Math.abs(added/$OMМMНA).toFixed(4);

if(added>=0)
$МH1р0O.$o0еeAН.text=$pсрТ+$0AIеpО+$M1Тсo;
else
$МH1р0O.$o0еeAН.text=$соТО+$0AIеpО+$M1Тсo;
}

}

$IMHAоМ=$ТAооcТ;

function $ОоpOoO()
{
if(SHOW_EXP_BAR>1)
{


$МH1р0O.left.text=$OIОeсН;
$МH1р0O.right.text=($OIОeсН+1);
}
}
function $1HH1оH()
{
return Math.floor($НOTpе1/$o1ррlO);
}

if($IAoНM||SHOW_EXP_BAR===1)
{
$IAoНM=false;

$НOTpе1=$IMHAоМ;

$OIОeсН=$1HH1оH();
$ОоpOoO();
return;
}

if($cMНА01===Number.MAX_VALUE)
{
$cMНА01=setInterval(function()
{
var pos=(($НOTpе1)%$o1ррlO)*7.8;


if($1HH1оH()!==$OIОeсН)
{
$OIОeсН=$1HH1оH();
$ОоpOoO();

if($А1АрlO<$OIОeсН)
{
$А1АрlO=$OIОeсН;
$Аоео0($еоoHМ1);

$МH1р0O.$pHееОe.visible=true;
$МH1р0O.$pHееОe.gotoAndPlay(1);
$МH1р0O.$pHееОe.$lееMТО.$MН1Mp.text=$Н0ННА+$OIОeсН;
}
}

$МH1р0O.$о11ММН.scaleX=pos/100;
$МH1р0O.$TМ1рAO[$eТоM]=$МH1р0O.$pIMpеO[$eТоM]=11+$МH1р0O.$о11ММН.scaleX*100;

$МH1р0O.$o0еeAН[$eТоM]=Math.max(157,Math.min($МH1р0O.$TМ1рAO[$eТоM],800-157))-263/2;


if($НOTpе1!==$IMHAоМ)
{
if(!$МH1р0O.visible)
{
$МH1р0O.visible=true;
$рpНсcc.visible=true;
}

if($МH1р0O.alpha<0.79)
$МH1р0O.alpha=Math.min(0.8,$МH1р0O.alpha+0.1);
else
{
var $1HНТоI=$НOTpе1;

if($НOTpе1<$IMHAоМ)
{
$МH1р0O.$pIMpеO.alpha=($МH1р0O.$pIMpеO.alpha+1)/2;
$НOTpе1=Math.min(($НOTpе1*50+$IMHAоМ)/51+0.01,$IMHAоМ);
}
else
$НOTpе1=Math.max(($НOTpе1*50+$IMHAоМ)/51-0.01,$IMHAоМ);



if($НOTpе1===$IMHAоМ)
{
$МH1р0O.alpha=1;

$Аоео0($AeОрAО);
}
else
if($НOTpе1>$1HНТоI)
if(Math.floor($1HНТоI*4)!==Math.floor($НOTpе1*4))
$Аоео0($MАоIMe);
}
}
else

{
if($МH1р0O.$pIMpеO.alpha>0)
$МH1р0O.$pIMpеO.alpha=Math.max(0,$МH1р0O.$pIMpеO.alpha-0.02);
else
{
if($МH1р0O.alpha>0)
$МH1р0O.alpha=Math.max(0,$МH1р0O.alpha-0.005);
else
{
$МH1р0O.visible=false;
$рpНсcc.visible=false;
clearInterval($cMНА01);
$cMНА01=Number.MAX_VALUE;

if(currentLabel===$АОеe)
$Т0оорA($0Ме1А[$НAlНc]);
}
}
}

if($АcсAТ&&$АcсAТ.visible)
{
if($МH1р0O.alpha>0)
$рpНсcc.alpha=$МH1р0O.alpha=0;
}
else
{
$рpНсcc.alpha=Math.min(1,$МH1р0O.alpha/0.8*1);
$рpНсcc[$рHОМ]=$МH1р0O[$рHОМ]=Math.max(400,mouseY+50);
}

$МH1р0O.$eсopcО[$eТоM]=$МH1р0O.$o0еeAН[$eТоM]+131+5;
$МH1р0O.$eсopcО.alpha=$МH1р0O.$o0еeAН.alpha*0.5;

var $0сMМТО;

if(type>=0&&SHOW_EXP_BAR===2)
$0сMМТО=$НOTpе1.toFixed(2)+$еMAН0;
else
$0сMМТО=($НOTpе1/$OMМMНA).toFixed(2)+$M1Тсo;

if($МH1р0O.$eсopcО.text!==$0сMМТО)
$МH1р0O.$eсopcО.text=$0сMМТО;

if(SHOW_EXP_BAR===3)
{
if($МH1р0O.$c1AIp0[$eТоM]<0)
{
$МH1р0O.$c1AIp0[$eТоM]=(11+pos+1);
$МH1р0O.$оесTAM[$eТоM]=(11+pos);
$MАM0оA=$OIОeсН;
$MTIIТМ=$OIОeсН;
}
if($OIОeсН===$MАM0оA)
{
if(!$МH1р0O.$c1AIp0.visible)
$МH1р0O.$c1AIp0.visible=true;

$МH1р0O.$c1AIp0[$eТоM]=Math.min($МH1р0O.$c1AIp0[$eТоM],11+pos+1);
}
else
{
if($OIОeсН<$MАM0оA)
{
$МH1р0O.$c1AIp0[$eТоM]=(11+pos+1);
$MАM0оA=$OIОeсН;
}
if($МH1р0O.$c1AIp0.visible)
$МH1р0O.$c1AIp0.visible=false;
}

if($OIОeсН===$MTIIТМ)
{
if(!$МH1р0O.$оесTAM.visible)
$МH1р0O.$оесTAM.visible=true;

$МH1р0O.$оесTAM[$eТоM]=Math.max($МH1р0O.$оесTAM[$eТоM],11+pos);
}
else
{
if($OIОeсН>$MTIIТМ)
{
$МH1р0O.$оесTAM[$eТоM]=(11+pos);
$MTIIТМ=$OIОeсН;
}
if($МH1р0O.$оесTAM.visible)
$МH1р0O.$оесTAM.visible=false;
}
}
else
{
if($МH1р0O.$c1AIp0.visible)
$МH1р0O.$c1AIp0.visible=false;
if($МH1р0O.$оесTAM.visible)
$МH1р0O.$оесTAM.visible=false;

}


},16);
}
}


var $ТОооc1=$рHТpМ();
var $lрloOА=false;
var $oOAАcc=true;
var $ОoеHА1=[];
var $oH1еМТ=false;

var $H1ОHMO=Number.MAX_VALUE;
var $IoТ1pA=0;

function $рMo1oH(mc,value)
{
mc.$cpOoe=Math.min(2,mc.$cpOoe+value);
}
function $еТ11Мl(mc)
{
if(mc.$cpOoe>0)
{
mc.$cpOoe=Math.max(0,mc.$cpOoe-0.333);
return true;
}
return false;
}
function $ОpOc0(type,$HAрMА=$0OрТ,$ОTcТAе=false)
{
traceOnce($oeТAО);
return;



if($00pеH)
return;

if(SHOW_EXP_BAR===3||type===$MpоeoT)
{

if($ОTcТAе)
{
if(type===$MpоeoT)
{
$ОoеHА1.push({[$clе0р]:$MpоeoT,SHOW_EXP_BAR:3});
$оHеTоc();
}
else
{
$IoТ1pA=5;

if($H1ОHMO===Number.MAX_VALUE)
{
$H1ОHMO=setInterval(function()
{
if($IoТ1pA>0)
{
$IoТ1pA--;

$ОoеHА1.push({[$clе0р]:$0lМpcр,SHOW_EXP_BAR:3});

$оHеTоc();
}
else
{
$IoТ1pA--;

if($IoТ1pA<-30)
{
clearInterval($H1ОHMO);
$H1ОHMO=Number.MAX_VALUE;
}
}
},1000);
}
}






}
}

if(!$lрloOА)
return;

if(type>=0)
{
$ОoеHА1.push({[$clе0р]:type,[$ОHТAe]:$HAрMА,$рTТА:$рTТА,SHOW_EXP_BAR:2});

$оHеTоc();
}
}
function $оHеTоc()
{
if($oH1еМТ)
{
return;
}

var type;
var $HAрMА;
var $Ie1TH;
var $OосМeO;

if($ОoеHА1.length>0)
{
type=$ОoеHА1[0][$clе0р];
$HAрMА=$ОoеHА1[0][$ОHТAe];
$Ie1TH=$ОoеHА1[0].$рTТА;
$OосМeO=$ОoеHА1[0].SHOW_EXP_BAR;

$ОoеHА1.splice(0,1);
}
else
{
return;
}

$oH1еМТ=true;

if($OосМeO===3)
{
if(SHOW_EXP_BAR===$OосМeO)
{
$МH1р0O.transform.colorTransform=new ColorTransform(0.5,0.75,1,$МH1р0O.alpha,0,0,0,0);




}

var $eАОо=new URLRequest($О1Mlp);
var $0МеA=new URLVariables();

{
$0МеA[$AHop]=$Oeо0;
}

$eАОо[$е0Тc]=URLRequestMethod.GET;
$eАОо[$1еM1]=$0МеA;

$ТОооc1.addEventListener(Event.COMPLETE,$pcрМHe);
$ТОооc1.addEventListener(IOErrorEvent.IO_ERROR,$IOlсеc);
$ТОооc1.load($eАОо);

function $IOlсеc(e)
{
$ТОооc1.removeEventListener(Event.COMPLETE,$pcрМHe);
$ТОооc1.removeEventListener(IOErrorEvent.IO_ERROR,$IOlсеc);

setTimeout(function()
{
$oH1еМТ=false;
$оHеTоc();
},5000);
}

function $pcрМHe(e)
{
$ТОооc1.removeEventListener(Event.COMPLETE,$pcрМHe);
$ТОооc1.removeEventListener(IOErrorEvent.IO_ERROR,$IOlсеc);


if(SHOW_EXP_BAR===3)
{



var parts=$ТОооc1[$1еM1].split($O1pН);

var $ТAооcТ=parseFloat(parts[4])*$OMМMНA;

if($ТAооcТ!==$IMHAоМ)
{
if(!isNaN($ТAооcТ)&&!isNaN($ТAооcТ-$IMHAоМ))
{


trace($ТеOеO+($ТAооcТ-$IMHAоМ));
$НМoОАM($ТAооcТ,type,$ТAооcТ-$IMHAоМ);
}
}
}

var delay=1000;

if($ОoеHА1.length>5)
delay/=2;

if($ОoеHА1.length>10)
delay/=2;

setTimeout(function()
{
$oH1еМТ=false;
$оHеTоc();
},delay);
}
}
else
if($OосМeO===2)
{
if(SHOW_EXP_BAR===$OосМeO)
{
$МH1р0O.transform.colorTransform=new ColorTransform(1,1,1,$МH1р0O.alpha,0,0,0,0);



}

var $eАОо=new URLRequest($HTMHl);
var $0МеA=new URLVariables();

{
if($Oeо0!==undefined&&$Oeо0!==$0OрТ)
{
$0МеA[$0cрО]=$Oeо0;
$0МеA[$АТIo]=$pATO;
}

$0МеA[$0сoM]=$Ie1TH;
$0МеA[$clе0р]=type;
$0МеA[$ОHТAe]=$HAрMА;
}

$eАОо[$е0Тc]=URLRequestMethod.POST;
$eАОо[$1еM1]=$0МеA;

$ТОооc1.addEventListener(Event.COMPLETE,$pcрМHe);
$ТОооc1.addEventListener(IOErrorEvent.IO_ERROR,$IOlсеc);

if(type===$peАTpl&&$0МеA[$0cрО]===undefined)
{

$ТОооc1[$1еM1]=$M0еpl;
$pcрМHe({});
}
else
{
$ТОооc1.load($eАОо);
}

function $IOlсеc(e)
{
$ТОооc1.removeEventListener(Event.COMPLETE,$pcрМHe);
$ТОооc1.removeEventListener(IOErrorEvent.IO_ERROR,$IOlсеc);






setTimeout(function()
{
$oH1еМТ=false;
$оHеTоc();
},5000);
}

function $pcрМHe(e)
{
$ТОооc1.removeEventListener(Event.COMPLETE,$pcрМHe);
$ТОооc1.removeEventListener(IOErrorEvent.IO_ERROR,$IOlсеc);

if($ТОооc1[$1еM1].charAt(0)!==$eТоM)
{
var parts=$ТОооc1[$1еM1].split($O1pН);

if(SHOW_EXP_BAR===2)
{
if(parts[0]!==$TlAp)
$НМoОАM(parseFloat(parts[0]),type,parseFloat(parts[1]),$HAрMА);
else
$НМoОАM($IMHAоМ+parseFloat(parts[1]),type,parseFloat(parts[1]),$HAрMА);
}

}
else
{
if($ТОооc1[$1еM1]===$M0еpl)
{
$lрloOА=false;
return;
}
else
if($ТОооc1[$1еM1]===$opOOA||$ТОооc1[$1еM1]===$oрpTc||$ТОооc1[$1еM1]===$TАloe)
{
}
else
if($ТОооc1[$1еM1]===$сТOАА)
{
}
else
if($ТОооc1[$1еM1]===$ое11e)
{
if(currentLabel==$АОеe)
{
if(SHOW_EXP_BAR===2)
$оеIТМ($ТlАoO,$TlНp);

$lрloOА=false;
return;
}
}
else
if(currentLabel==$АОеe)
{
if(SHOW_EXP_BAR===2)
$оеIТМ($100оТ+$ТОооc1[$1еM1],$TlНp);
}
}

var delay=1000;

if($ОoеHА1.length>5)
delay/=2;

if($ОoеHА1.length>10)
delay/=2;

setTimeout(function()
{
$oH1еМТ=false;
$оHеTоc();
},delay);
}
}
}
var $Mpleo=false;
function $сАсlО()
{
if($Mpleo)
{
$Mpleo=false;
$ОpOc0($рНоlep);
}
}
var $АAНeеM=[];
function $НoIеТ(mc)
{
if($АAНeеM.indexOf(mc)===-1)
{
$АAНeеM.push(mc);

setTimeout(function()
{
if(mc[$МIIро]>0)
$ОpOc0($HeTрНT,mc[$оIpl]);

$АAНeеM.splice($АAНeеM.indexOf(mc),1);

},7000);
}
}
if(this.loaderInfo.parameters[$0cрО]!==undefined||this.loaderInfo.url.split($ТА0рМ).join($0с1сО).indexOf($НOрpО)!==-1||this.loaderInfo.url.split($ТА0рМ).join($0с1сО).indexOf($TpOОp)!==-1)
{
traceOnce($МpcMМ);
if(false)
(function()
{
$lрloOА=true;
var $о0lIcА=0;
setInterval(function()
{
if(currentFrameLabel===$АОеe)
if(system_non_stop)
if($рс1cA0)
{
$рс1cA0=false;

$о0lIcА++;

if($о0lIcА>=6)
{
$о0lIcА=0;

if($pMМ1)
{
if($IHТcc)
$ОpOc0($l1АMTl,$о0lIcА);
else
$ОpOc0($НHОоpА,$о0lIcА);
}
else
{
if($еHоНH)
$ОpOc0($НеOIeА,$о0lIcА);
else
$ОpOc0($0lАMOА,$о0lIcА);
}
}
}

},1000*10);

})();
}

$ОpOc0($peАTpl,getTimer());







var $ср1АIо=$рHТpМ();
var $0AМHIT=false;
function $ОOAlАT(i)
{
if(SHOW_EXP_BAR===1)
return;

if($0Ме1А[i])
{
setTimeout(function(){
$0Ме1А[i].info=undefined;
},3000);
}
}
function $Т0оорA(mc)
{
traceOnce($рoМe1);
return;

if(!$pMМ1)
return;

if($0AМHIT)
return;

if(SHOW_EXP_BAR===1)
{
if(mc.gui.$cТIcТ.visible)
mc.gui.$cТIcТ.visible=false;

return;
}
else
{
if(!mc.gui.$cТIcТ.visible)
mc.gui.$cТIcТ.visible=true;
}

if(!mc.$HМ0М1)
return;

if(!mc.visible)
return;

if(!mc.gui.visible)
return;

if(mc.info!==undefined)
if(mc.info[$eOТAТ]===mc[$AHop])
if(mc.info[$MHсA]===SHOW_EXP_BAR)
if(mc.gui.$cТIcТ.visible)
return;

if(mc===$0Ме1А[$НAlНc]&&!$00pеH)
{
if($IAoНM)
return;

var $ОOA1М=(SHOW_EXP_BAR===2)?($Н0ННА+$OIОeсН):(($IMHAоМ/$OMМMНA).toFixed(2).split($OНH0).join($MсHeo)+$M1Тсo);



if($есeA)
$ОOA1М=$0OрТ;




mc.gui.$cТIcТ.htmlText=$ОOA1М;
mc.gui.$cТIcТ.visible=true;
mc.gui.$cТIcТ.alpha=0.75;
mc.info={[$eOТAТ]:mc[$AHop],[$MHсA]:SHOW_EXP_BAR,$ОOA1М:$ОOA1М};

return;
}

$0AМHIT=true;

var $eАОо=new URLRequest($HTMHl);
var $0МеA=new URLVariables();

{
if($Oeо0!==undefined&&$Oeо0!==$0OрТ)
{
$0МеA[$0cрО]=$Oeо0;
$0МеA[$АТIo]=$pATO;
}

$0МеA[$eOТAТ]=mc[$AHop];
$0МеA[$MHсA]=SHOW_EXP_BAR;





}

$eАОо[$е0Тc]=URLRequestMethod.POST;
$eАОо[$1еM1]=$0МеA;

$ср1АIо.addEventListener(Event.COMPLETE,$pcрМHe);
$ср1АIо.addEventListener(IOErrorEvent.IO_ERROR,$IOlсеc);
$ср1АIо.load($eАОо);

function $IOlсеc(e)
{
$ср1АIо.removeEventListener(Event.COMPLETE,$pcрМHe);
$ср1АIо.removeEventListener(IOErrorEvent.IO_ERROR,$IOlсеc);

setTimeout(function()
{
$0AМHIT=false;
},5000);
}

function $pcрМHe(e)
{
$ср1АIо.removeEventListener(Event.COMPLETE,$pcрМHe);
$ср1АIо.removeEventListener(IOErrorEvent.IO_ERROR,$IOlсеc);

setTimeout(function()
{
$0AМHIT=false;
},100);

if(currentLabel===$АОеe)
{
var $ОOA1М=$ср1АIо[$1еM1];

if($ОOA1М.indexOf($HAo0O)!==-1)
{
$ОOA1М=$ОOA1М.split($HAo0O).join($0OрТ);

if($MН0cAА[mc[$AHop]]===undefined)
{
$MН0cAА[mc[$AHop]]=true;
$ОpOc0($ТIeТe0,mc[$AHop]);
}
}

mc.gui.$cТIcТ.htmlText=$ОOA1М;
mc.gui.$cТIcТ.visible=true;
mc.gui.$cТIcТ.alpha=0.5;
mc.info={[$eOТAТ]:mc[$AHop],[$MHсA]:SHOW_EXP_BAR,$ОOA1М:$ср1АIо[$1еM1]};
}
}

}
var $MН0cAА={};













var $oОolрe=$ToTоe;

stage.addEventListener(KeyboardEvent.KEY_DOWN,$M10eAо);
stage.addEventListener(KeyboardEvent.KEY_UP,$АННMОo);










function $ToеНIT()
{
if($АМeАсe.$lОО1рI)
$АМeАсe.$lОО1рI.style.display=$MOTМо;

if($АМeАсe.$IcоOНH)
$АМeАсe.$IcоOНH.style.display=$MOTМо;

HUD.$ТTTсH1();

$lIТI11=false;

gotoAndStop($0сp1);
}