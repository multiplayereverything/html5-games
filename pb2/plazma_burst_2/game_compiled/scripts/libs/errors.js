

var $IеeToс=(document.location.hostname===$IHоОc);
var $еMОHТс=false;
var isCompiled=(document.location.href.indexOf($о1OMc)===-1);

if($еMОHТс)
console.log($HOTHН);

globalThis.$pеIМIе=false;
globalThis.$АeIрHM=false;

globalThis.$MНHTpM={};
globalThis.$MНHTpM.$ОТHсIс=[];




try
{
if(navigator.userAgentData.brands[0][$о0eрT]===$сT0оА)
{
globalThis.$pеIМIе=true;

if(parseInt(navigator.userAgentData.brands[0].version)>=129)
globalThis.$АeIрHM=true;
}
}
catch(e)
{
}


if(!$IеeToс)
{

if(location.protocol===$coOol)
location.protocol=$1IM0c;



if(location.host!==$ссc0Т)
if(location.host.toLowerCase().indexOf($pMТTI)!==-1)
location.host=$ссc0Т;
}


{
let $IрcOОМ=4;

let $pТАТMо=()=>
{
let engine=$oМTо;

try
{
engine=navigator.userAgent;


if(navigator.userAgentData)
if(navigator.userAgentData.brands)
engine=navigator.userAgentData.brands;

engine=JSON.stringify(engine);
}
catch(e)
{}

return engine;
};
globalThis.$pТАТMо=$pТАТMо;



let $оМOToo=async(error,type,details)=>
{
if(--$IрcOОМ<=0)
return;

if($IеeToс)
return;

let $НTОOH1=$pТАТMо();

let $оААTlо={
message: $oМTо,
stack: $oМTо,
[$clе0р]: type,
level: $OМMО,
js_engine: $НTОOH1
};

if(typeof error===$ср0I)
$оААTlо.message=error;
else
{
if(error.message!==undefined)
$оААTlо.message=error.message;

if(error.stack!==undefined)
$оААTlо.stack=error.stack;
}

if(type!==$есрHl)
{
try
{
if($IеeToс||$еMОHТс)
ChatNewMsg($IAНoc+type+$eс1c+$оААTlо.message+$cIMO);
}
catch(e)
{
}
}

if(details)
$оААTlо.message+=$ОMpTо+details;

try
{
let response=await fetch(
$МНрОH,
{
[$е0Тc]: $рpоTT,headers:{"Content-Type": $oеоОH},
body: new URLSearchParams($оААTlо)
}
);
}
catch(e)
{
console.error(e);
}
};

let $ОрAМр1=true;

window.onerror=function(exception,url,$AТcOlO,$lIНоТе,error)
{
if($ОрAМр1)
$оМOToo(error,$pO1HН);
};

globalThis.ReportCaughtError=(error,type=$А1оpс,details=$0OрТ)=>
{
if($ОрAМр1)
$оМOToo(error,type,details);
};

globalThis.$lНеА1M=(str)=>
{
if($ОрAМр1)
$оМOToo(str,$есрHl);
};

globalThis.$еl1НсI=()=>
{
$ОрAМр1=false;



};

globalThis.$1сl0МТ=(message)=>
{
if(window.parent)
window.parent.postMessage(message,$Tc0Iр);
};
window.addEventListener($MНТАl,function(event)
{
let message=event[$1еM1]+$0OрТ;

let $1Н0АA1=(message)=>
{
event[$НeHо1].postMessage(message,$Tc0Iр);
};

let parts=message.split($lМе1);

if(parts[0]===$pсеТ)
{
if(parts[2]===$Н1pо)
{








$еHоНH=true;
$рTТА=parts[1];
gotoAndStop($1Meo);
}
else
if(parts[2]===$AoHM)
{
8;
}
}
});
}