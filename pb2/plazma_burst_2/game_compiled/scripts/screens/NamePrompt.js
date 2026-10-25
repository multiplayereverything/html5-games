


{
let mc=null;

HUD.CreateNamePromptScreen=()=>
{
let $AрТc1c=stage.children.indexOf(globalThis.$A1Hpe)+1;

mc=HUD.$OоОT1е($еMТlМ,0,0,800,400);
stage.addChildAt(mc,$AрТc1c);























let $pМ1eTp=()=>
{
setTimeout(()=>
{
$pМоcT();

gotoAndStop($НIlр);

$oеeес();

},0);
};


if(this.loaderInfo.parameters[$0cрО]!==undefined&&this.loaderInfo.parameters[$0cрО]!==$0OрТ)
{
$1еT1Н=this.loaderInfo.parameters[$0cрО];
}



if($1еT1Н===$0OрТ)
{
let $AМellc=$0OрТ;

let $НpHАI=()=>
{
if($AМellc===$Аcle)
$AМellc=$1оAT1;
else
if($AМellc===$1оAT1)
$AМellc=$AeHТр;
else
if($AМellc===$AeHТр)
$AМellc=$еIIо1;
else
if($AМellc===$еIIо1)
$AМellc=$ерсT1;
else
if($AМellc===$ерсT1)
{






















let options=[
$AcpeО,
$cеIol,
$среMA,
$IМ1OА,
$lI1e1,
$ll0Мo,
$eIeAM,
$oАTOО,
$oMе1T,
$HМeel,
$OМlTc,
$ТОсee,
$HHеAI,
$ТсерА,
$АlАрp,
$HcТlе,
$М0cА1,
$сOOсо,
$cТpОl,
$АНMcM,
$АHMce,
$II1Ol,
$0AоOI
];
$AМellc=options[Math.floor(Math.random()*options.length)];
}
else
{
return false;























}
return true;
};

let $pсНoco=()=>
{
HUD.$OАMMAe($HНTA1,(response)=>{

if(response===null)
{
$pМ1eTp();
}
else
{
$AМellc=response;

if($НpHАI())
{
$pсНoco();
}
else
{
$AооАA=$AМellc;
if($1еT1Н!==$AМellc)
{
$1еT1Н=$AМellc;
$IеOАT();
}

$pМ1eTp();
}
}

},$eТеТc,HUD.$e0HАМT);
globalThis.$еМОАе0.value=$AМellc;
};

$pсНoco();
}
else
$pМ1eTp();
};
HUD.DisposeNamePromptScreen=()=>
{
MovieClip.RemoveIfPossible(mc);
};
}