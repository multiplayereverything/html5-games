





















var $сOOр1=$oIеo;
var $pA1Iр=$НАp1;



try
{
flash.system.fscommand($оМТo,$ОIlс);
}catch(e){}

SoundMixer.soundTransform=new SoundTransform(0,0);

stop();

stage.$OTlIO=$0ОрАо;
stage.align=$01lHM;

var $IMoеА=null;

var $с0OIО=0;
var $1сTpp=0;

globalThis.$0HНTI=Infinity;

function $рHТpМ()
{
var r={};

var $AMIрA=new URLLoader();

var $OpеоА=null;

function $0еI1H()
{


if($AMIрA.bytesLoaded>0)
{
if($OpеоА.url.indexOf($lроТ)!==-1)
$1сTpp++;
else
$с0OIО++;
}

r[$1еM1]=$AMIрA[$1еM1];
r.bytesLoaded=$AMIрA.bytesLoaded;
r.bytesTotal=$AMIрA.bytesTotal;
r.$МсоАA=$AMIрA.$МсоАA;
}
function $сНoIe(e)
{
trace($TooТ+$OpеоА.url);

trace(e);













}

r.load=async function(url_request)
{
$OpеоА=url_request;



try
{
await $AMIрA.load(url_request);
}catch(e)
{
$сНoIe();
}
};

r.close=function()
{
$AMIрA.close();
};

r.addEventListener=function(a,b)
{

$AMIрA.addEventListener(a,b);
};

r.removeEventListener=function(a,b)
{
$AMIрA.removeEventListener(a,b);
};

r.addEventListener(Event.COMPLETE,$0еI1H);
r.addEventListener(IOErrorEvent.IO_ERROR,$сНoIe);
r.addEventListener(SecurityErrorEvent.SECURITY_ERROR,$сНoIe);


return r;







}


var $leАOс;
var $еAАрH;

var $0plHO;

var $oM1lс;
var $oеНОT;

var $eАОо;
var $OрOoI;
var $TcpеТ=$рHТpМ();
var $oНoОc=$рHТpМ();
var $еcHTI=$рHТpМ();
var $Acol0=$рHТpМ();
var $ATAМl=$рHТpМ();

var $0МеA;
var $IоНеA;
var $ТAТoM=$рHТpМ();


var $ооМсo=$oHоT;
var $АoMlT=$0o1О;
var $МсpН0=$HТoM;
var $HTMHl=$o0о0;
var $О1Mlp=$lоТI;

try
{

Security.allowDomain($рI0А);
}
catch(e)
{

}

try
{
Security.loadPolicyFile($АMpe);
}catch(e){}

if(root.loaderInfo.url.indexOf($О0OН)!=-1)
{
if(root.loaderInfo.url.indexOf($oMOl)!=-1)
{
$ооМсo=$ооМсo.split($eсрс).join($lроТ);
$АoMlT=$АoMlT.split($eсрс).join($lроТ);
}
else
{
}

if(root.loaderInfo.url.indexOf($ТlТН)!=-1)
{
}
else
{
$ооМсo=$ооМсo.split($е0ОI).join($IсcА);
$АoMlT=$АoMlT.split($е0ОI).join($IсcА);
}
}

var $ppоpА=0;
var $оM0Т1=false;
var $Mp1Ip=false;
function $0сеlI(callback=null)
{
if(this.loaderInfo.parameters[$0cрО]!==$0OрТ)
{

$ppоpА=10;
$оM0Т1=false;
$Mp1Ip=false;

$рTcOТ(callback);
}
else
{
$оM0Т1=true;


if(callback)
callback();
}

}
function $рTcOТ(callback=null)
{
if($ppоpА>0)
{
let $lАоOe=$рHТpМ();

$eАОо=new URLRequest($ооМсo);
$0МеA=new URLVariables();

{
$0МеA[$OcMо]=$MМ1c;

$0МеA[$0cрО]=this.loaderInfo.parameters[$0cрО];
$0МеA[$АТIo]=this.loaderInfo.parameters[$АТIo];

$eАОо[$е0Тc]=URLRequestMethod.POST;
}

$eАОо[$1еM1]=$0МеA;

$lАоOe.addEventListener(
Event.COMPLETE,
(e)=>
{



try
{

if(!$оM0Т1)
$ОAITс($lАоOe[$1еM1]);

$оM0Т1=true;

if(callback)
callback();
}
catch(err)
{
$oТTop.text=$еlрA+$ppоpА+$eс1c+err;
8;
}
}
);

$lАоOe.addEventListener(
IOErrorEvent.IO_ERROR,
(e)=>
{
trace($pI00);
$ppоpА-=1;
$Mp1Ip=true;
$рTcOТ(callback);

$oТTop.text=$1MHA+$ppоpА+$eерН+$0МеA[$0cрО]+$eс1c+e;
}
);

$lАоOe.load($eАОо);
}
else
{

if(callback)
callback();
}
}
function $ОAITс($IМOTp,$0Ao1o=true)
{
if($IМOTp!=$eТоM&&$IМOTp.indexOf($сТAо)!=0)
{
if($IМOTp!=$OНH0)
{
var $ННс0e=($0OрТ+$IМOTp).split($10M0);
for(var i=0;i<$ННс0e.length;i++)
{
var $ОTр0р=$ННс0e[i].split($ТМcA);

var n=String($ОTр0р[0]).split($сAсc).join($10M0).split($МоНо).join($ТМcA);
var v=String($ОTр0р[1]).split($сAсc).join($10M0).split($МоНо).join($ТМcA);

if(v===$0OрТ)
{
}
else
if(v===$АMAр||v===$cОeО)
{
if($НeНpО[$1еM1][n]+$0OрТ!=$АMAр)
if($НeНpО[$1еM1][n]+$0OрТ!=$cОeО)
continue;

v=0;
}
else
if(v===$A11l)
v=true;
else
if(v===$МIcо)
v=false;
else
if(Number(v)+$0OрТ!=$cОeО)
v=Number(v);

if(!$0Ao1o&&(n===$cIМА||n===$MMр0||n===$0Hl1))
{

}
else
if(n.indexOf($eTрA)===0)
{

trace($1МТе+n);
}
else
{
$НeНpО[$1еM1][n]=v;
}
}

try
{
$НeНpО.flush();
}
catch(e)
{
$Т1рcН=$lМ0М;
}
}
else
$oТTop.text=$eТТl+$IМOTp;
}
else
$oТTop.text=$eТТl+$IМOTp;
}

function $pНсНl($0Ao1o=true)
{
var str=$0OрТ;
for(var $c0ApT in $НeНpО[$1еM1])
{
var n=$c0ApT.split($10M0).join($сAсc).split($ТМcA).join($МоНо);
var v=String($НeНpО[$1еM1][$c0ApT]).split($10M0).join($сAсc).split($ТМcA).join($МоНо);

if(!$0Ao1o&&(n===$cIМА||n===$MMр0||n===$0Hl1))
{

}
else
if(n.indexOf($eTрA)===0||v===$cОeО||v===$АMAр||n.indexOf($о00о)!==-1||n.indexOf($MННe)!==-1||n.indexOf($ТMНl)!==-1||n.indexOf($MеAТ)!==-1||n.indexOf($HlМl)!==-1||n.indexOf($рHOI)!==-1||n.indexOf($cTр0)!==-1||n.indexOf($OНH0)!==-1||n.indexOf($Н0Т1)!==-1||v.indexOf($еAHT)!==-1||n.indexOf($lМе1)!==-1||v.indexOf($IсеО)!==-1||v.length===0)
{

trace($l0Мl+n+$1p0A+v);
}
else
{
str+=n;
str+=$ТМcA;
str+=v;
str+=$10M0;
}
}

return str;
}

var $ТIНА1=0;
var $МlHо=$0OрТ;
function $МeТоM()
{
if((globalThis.$TeIOl&&globalThis.$TeIOl.visible)||(globalThis.$ААHоp&&globalThis.$ААHоp.visible)||HUD.$pоIНp||currentLabel!==$АОеe)
{

}
else
if(system_non_stop)
return;

if(this.loaderInfo.parameters[$0cрО]!=undefined&&this.loaderInfo.parameters[$0cрО]!=$0OрТ)
{

$ТIНА1=10;

var str=$pНсНl();

$МlHо=str;
$е0OОТ();
}
else
{
trace($Hcрl);
}
}
function $е0OОТ()
{
if($ТIНА1>0)
{
let $lАоOe=$рHТpМ();
$eАОо=new URLRequest($ооМсo);
$0МеA=new URLVariables();

{
$0МеA[$OcMо]=$oссА;
$0МеA[$0cрО]=this.loaderInfo.parameters[$0cрО];
$0МеA[$АТIo]=this.loaderInfo.parameters[$АТIo];
$0МеA[$IеpА]=$МlHо;
}

$eАОо[$е0Тc]=URLRequestMethod.POST;
$eАОо[$1еM1]=$0МеA;

$lАоOe.addEventListener(Event.COMPLETE,(e)=>
{


});
$lАоOe.addEventListener(IOErrorEvent.IO_ERROR,(e)=>
{

$ТIНА1-=1;
$е0OОТ();
});
$lАоOe.load($eАОо);
}
}

var $0ОрАо=StageScaleMode.SHOW_ALL;
var $01lHM=$Аcle;
var $НeНpО;
try
{
$НeНpО=SharedObject.getLocal($Тcel);
}
catch(e)
{
$НeНpО={
[$1еM1]:{},
flush: function(){}
};
$oТTop.text=$1e0А;
}









var $Аlоoe=false;

function onFrame1()
{







































try
{
MouseWheelEnabler.init(stage);
}
catch(error)
{
}








var $IНоAо=404;

try
{


var $О0осM=Capabilities.version;
var $НоМIр=$О0осM.split($cTр0);
var $pHТeе=$НоМIр[1].split($eерН);



var $0IHсc=$pHТeе[0]+$OНH0+$pHТeе[1];

$IНоAо=Number($0IHсc);


}
catch($cMАсT)
{

}





var $o0Нсe=true;


$pMА0О.visible=false;
$1cMОo.visible=false;






stage.$oсорl=30;
{
stage.quality=$I1АA;
$есНАc.text=$есНАc.text.split($H0TТ).join($pA1Iр);


function $рTМMc($НlMеo)
{
var hash=new $еHcОp();
hash.$p1МеА($НlMеo,$c00е);

var bytes=stage.loaderInfo.bytes;
var $Ае0TH=0;

var $МАоO1=bytes.length-2;
for(var $AOAoH=3;$AOAoH<$МАоO1;$AOAoH+=4)
{
hash[$Ае0TH]=(hash[$Ае0TH]+3540+(hash[$Ае0TH]%4+1)*(bytes[$AOAoH]-bytes[$AOAoH-1]+bytes[$AOAoH+2]-bytes[$AOAoH+1]))%256;

$Ае0TH++;

if($Ае0TH>=hash.length)
$Ае0TH=0;
}

var ret=$0OрТ;

for($Ае0TH=0;$Ае0TH<hash.length;$Ае0TH++)
ret+=hash[$Ае0TH]+$OНH0;

return ret;
}

var loaded=0;
var total=100;
var $pleоН=false;

if(stage.loaderInfo.bytesTotal===0)
total=7632588;
else
total=stage.loaderInfo.bytesTotal;


var percent=0;
var $1eMlО=0;
var times=0;
var $ТеITН=0;
var $HHlНс=0;
var pass=false;

var $ОMOTе=-1;


function $1oHМA()
{
if(currentFrame===1)
{

$ТеITН=getTimer()/1000;

if(loaded<1)
loaded=1;


$HHlНс=Math.round($ТеITН/loaded*(total-loaded));

if($HHlНс<0)
$HHlНс=0;

if($HHlНс<60)
$А1IАo.htmlText=$HHlНс+$АMHO;
else
{
if($HHlНс/60<60)
$А1IАo.htmlText=Math.floor($HHlНс/60)+$pоle+($HHlНс-Math.floor($HHlНс/60)*60)+$АMHO;
}
}
else
{
if($1cAIA!==null)
{
clearInterval($1cAIA);
$1cAIA=null;
}
}
}

var $1cAIA=setInterval($1oHМA,1000);


function $М0МoН(event)
{
if(currentFrame===1)
{





loaded=stage.loaderInfo.bytesLoaded;

percent=Math.round(loaded/total*100);
if(percent>100)
percent=100;
if(percent<0)
percent=0;

if($1eMlО!=percent)
times=10;
else
times--;


if(times>0)
$eрlcс.htmlText=$opIc+percent+$НMeр;
else
if(times>-5)
$eрlcс.htmlText=$Hcср+percent+$cMpM;
else
if(times>-40)
$eрlcс.htmlText=$cО1о+percent+$MHpO;
else
$eрlcс.htmlText=$eТрМ+percent+$АAep;

Mouse.show();

if(this.$TМpIо===this.totalFrames)
{
if(pass)
{
if($ТppА1.alpha>0)
{
$ТppА1.alpha-=0.10*30/stage.$oсорl;
$MрTAс.alpha-=0.10*30/stage.$oсорl;
$pMА0О.alpha-=0.10*30/stage.$oсорl;
}
else
{
if(CPMStar.AdLoader.cpmstar_loaded_object!=null)
{
CPMStar.AdLoader.cpmstar_loaded_object.$HеTрН();
}
removeChild($ТppА1);

CPMStar.AdLoader.cpmstar_loaded_object=null;
CPMStar.AdLoader.context=null;

if($1cAIA!==null)
{
clearInterval($1cAIA);
$1cAIA=null;
}


SoundMixer.stopAll();
SoundMixer.soundTransform=new SoundTransform(1,0);

gotoAndStop($ррОс);
}
}
else
{
$eрlcс.visible=false;
$А1IАo.visible=false;

if($оM0Т1)
{
$1cMОo.visible=false;
$pMА0О.visible=true;
}
else
{
$1cMОo.visible=true;
$pMА0О.visible=false;
}


$Hl1AА.visible=false;
$Hl1AА.alpha=0;
}
}
else
{
if($Hl1AА.alpha>0)
$Hl1AА.alpha-=0.05;
else
{
$Hl1AА.visible=false;
}
}

$1eMlО=percent;
}

if(currentFrame<=2)
{
$lHеHo();
}
else
{
removeEventListener(Event.ENTER_FRAME,$М0МoН);
}
}

addEventListener(Event.ENTER_FRAME,$М0МoН);

$М0МoН(null);
$1oHМA();




var $НН1со=($0OрТ+Capabilities.playerType);






















$Acol0.addEventListener(IOErrorEvent.IO_ERROR,function(){});
$ATAМl.addEventListener(IOErrorEvent.IO_ERROR,function(){});













}









{





















try
{
ExternalInterface.addCallback($р0OO,$Mрерp);
}
catch(e)
{
trace($Aе1O);
}
}



$MрTAс.setEventListener(MouseEvent.CLICK,function(){

try
{
navigateToURL(new URLRequest($рТрО),$рcl0);
}
catch(e)
{
trace($ААрO);
}
});



function $lHеHo()
{
if($o0Нсe)
{
$oеНОT=$сОoОM.$сМоо0[$рHОМ];
$o0Нсe=false;
$oM1lс=0;
}
else
{

$сОoОM.$сМоо0.$еНlМM=-0.2+Math.sin($oM1lс)*0.2;
$сОoОM.$сМоо0[$рHОМ]=$oеНОT+0.2+Math.cos($oM1lс)*0.2;
$oM1lс+=0.08*30/stage.$oсорl;

$сОoОM.$сМоо0.$0AIlI.$еНlМM=-$сОoОM.$сМоо0.$еНlМM;

$сОoОM.$сМоо0.$ооТel.$еНlМM=$сОoОM.$сМоо0.$OMeTA.$еНlМM=-$сОoОM.$сМоо0.$еНlМM;

$сОoОM.$сМоо0.$оMОT0.$еНlМM=-$сОoОM.$сМоо0.$еНlМM*0.5;

if($leАOс.length>0)
for(var mc in $leАOс)
{

var $ТlTМO=0.3;

$ТlTМO-=mc[$рHОМ]*0.005;


mc.alpha=(mc.alpha*2+Math.random()*$ТlTМO)*0.33;

if(mc.parent===$сОoОM.$сМоо0)
{
mc.$еНlМM=-$сОoОM.$сМоо0.$еНlМM;
}
else
{
mc.$еНlМM=-$сОoОM.$сМоо0.$еНlМM-mc.parent.$еНlМM;
}
}

if($еAАрH!=null)
{
$еAАрH.alpha=($еAАрH.alpha+Math.pow(Math.sin($oM1lс)*0.3+0.3+Math.random()*0.4,4))*0.5;

$еAАрH.$еНlМM=-$сОoОM.$сМоо0.$еНlМM-$еAАрH.parent.$еНlМM;
}

if($0plHO.length>0)
for(var $eMOАе in $0plHO)
{
$eMOАе.alpha=Math.pow(Math.sin($oM1lс)*0.5+0.5,1);

}
}

}

$сОoОM.mouseEnabled=false;
$сОoОM.mouseChildren=false;

$leАOс=new Array();
function $НeОpс(mc)
{



$leАOс.push(mc);
}

function $рOpср(mc)
{
$еAАрH=mc;
}

$0plHO=new Array();
function $Hlcс0(mc)
{



$0plHO.push(mc);
}





function $Mрерp(str)
{
if(str===$ОIce)
{




















}
else





{
var parts=str.split($lМе1);

if(parts[0]===$pсеТ)
{
if(parts[2]===$Н1pо)
{

if(currentFrameLabel===$НIlр)
removeEventListener(Event.ENTER_FRAME,$еоOTН);

gotoAndStop($OОeр);

$еHоНH=true;
$рTТА=parts[1];
gotoAndStop($1Meo);
}
else
if(parts[2]===$AoHM)
{

}
}

























}
}












$pMА0О.setEventListener(MouseEvent.MOUSE_DOWN,function()
{
if($pMА0О.visible&&!pass)
{
pass=true;
$pMА0О.alpha=0.5;
}
});

$1cMОo.setEventListener(MouseEvent.MOUSE_DOWN,function()
{
$оM0Т1=true;
});



}