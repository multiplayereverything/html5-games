


{
let $оеO1сc=true;

let $cI0OIp=null;

let $HHIpНТ=0;

globalThis.$ОcHесl=class $ОcHесl
{
static init_class()
{
$ОcHесl.$0ТOOТА=1;
$ОcHесl.$IMрр0H=2;
$ОcHесl.$Тl1OHc=3;

$ОcHесl.$АlМрОМ=new Set();

$ОcHесl.$сМMoTl=[];

$ОcHесl.$АlМрОМ.add($ОcHесl);
$ОcHесl.$АlМрОМ.add(document);
$ОcHесl.$АlМрОМ.add(window.location);

$ОcHесl.$OАeMcI(globalThis,$ОcHесl.$0ТOOТА);

$ОcHесl.$рMl0IН=false;

$ОcHесl.$оcOТAp=null;
$ОcHесl.$ТНeeсT=null;
}


static $cAН0еO()
{
return[globalThis,MovieClip];
}

static $сА0Мр1(obj,parent=null,prop=null)
{
if(obj instanceof CanvasRenderingContext2D)
return true;

if(parent===window)
if(prop===$МOoНН||prop===$еOIlp)
return true;

if(typeof $oрАТA!==$АMAр)
{
return(
obj===$oрАТA||
obj===$leoHo||
obj instanceof SoundChannel||
obj instanceof Sound||
obj instanceof SoundTransform
);
}
}

static $OАeMcI(obj,$НpII0О,$ppoТрс=new Set(),$M0НМоO=null)
{




if(obj===$ОcHесl.$АlМрОМ)
throw new Error();

if(obj===$ОcHесl.$сМMoTl)
throw new Error();




if($ОcHесl.$оcOТAp)
if($ОcHесl.$оcOТAp===obj)
8;

if(
typeof obj===$HНТрp
||
(typeof obj===$МОTМ&&obj.prototype)
)
if(obj!==null)
{
if($ppoТрс.has(obj))
return;

$ppoТрс.add(obj);

let copy=null;

if($ОcHесl.$АlМрОМ.has(obj))
return;

let $ТHр0Iо=$ОcHесl.$сА0Мр1(obj);

if($НpII0О===$ОcHесl.$0ТOOТА)
{
if(obj!==globalThis)
$ОcHесl.$АlМрОМ.add(obj);
}
else
if($НpII0О===$ОcHесl.$IMрр0H)
{
if($ОcHесl.$АlМрОМ.has(obj))
{
}
else
{
let save=true;

if($ТHр0Iо||
obj===null)
{
save=false;
}
else
if(obj instanceof Set)
copy=new Set(obj);
else
if(obj instanceof Map)
copy=new Map(obj);
else
if(obj instanceof Array)
copy=obj.slice();
else
if(obj instanceof Object||obj===globalThis)
copy=Object.assign({},obj);
else
8;

if(save)
{
$M0НМоO.set(obj,copy);

if($M0НМоO.size>100000)
8;
}
}
}

if($ТHр0Iо)
{

}
else
if(obj instanceof Set)
{
for(let v of obj)
$ОcHесl.$OАeMcI(v,$НpII0О,$ppoТрс,$M0НМоO);
}
else
if(obj instanceof Map)
{
for(let[key,v]of obj)
$ОcHесl.$OАeMcI(v,$НpII0О,$ppoТрс,$M0НМоO);
}
else
if(obj instanceof Array)
{




for(let i=0;i<obj.length;i++)
$ОcHесl.$OАeMcI(obj[i],$НpII0О,$ppoТрс,$M0НМоO);
}
else
for(let prop in obj)
{




function $Oсc1pO(prop,obj)
{
let d=Object.getOwnPropertyDescriptor(obj,prop);

if(d===undefined)
{
if(prop.prototype)
return $Oсc1pO(prop.prototype,obj);

return null;
}

return d;
}
let $cТТ10О=$Oсc1pO(prop,obj);


if($cТТ10О===null)
continue;


if($cТТ10О.get)
continue;

$ОcHесl.$OАeMcI(obj[prop],$НpII0О,$ppoТрс,$M0НМоO);
}
}
}
static $оеeeoН()
{
HUD.DisposeSettings();
HUD.$ТTTсH1();
}
static $ТМрА0H()
{
let $1H0о0о=true;


setTimeout(()=>
{
$pМоcT();
{
if($pMМ1)
{

ChatNewMsg($lIMHp);
}
else
if(!$HHMНe)
{

ChatNewMsg($ppАcТ);
}
else
if(currentFrameLabel!==$0рHpT)
{

ChatNewMsg($1MIТO);
}
else
if($НAlНc===-1||$0Ме1А[$НAlНc][$МIIро]<=0||$AAсAр!==$Аcle)
{

ChatNewMsg($OHHос);
}
else
{
$ОcHесl.$оеeeoН();



let $M0НМоO=new Map();

let $lАAlос=$ОcHесl.$cAН0еO();

for(let i=0;i<$lАAlос.length;i++)
$ОcHесl.$OАeMcI($lАAlос[i],$ОcHесl.$IMрр0H,new Set(),$M0НМоO);

$ОcHесl.$сМMoTl.push($M0НМоO);

if($ОcHесl.$сМMoTl.length>5)
$ОcHесl.$сМMoTl.shift();

if($оеO1сc)
{
$оеO1сc=false;
ChatNewMsg($AIНеH);
}
else
{
ChatNewMsg($рТeMр);
}
}
$Аоео0($AAHoАc);
}
$oеeес();
},0);

return $1H0о0о;
}
static $cMАHеe()
{
if($cI0OIp)
{
$HHIpНТ++;
if($HHIpНТ>$ОcHесl.$сМMoTl.length-1)
$HHIpНТ=$ОcHесl.$сМMoTl.length-1;

clearTimeout($cI0OIp);
$cI0OIp=null;


ChatNewMsg($оcOНс+($HHIpНТ+1)+$oОТIp+$ОcHесl.$сМMoTl.length+$рp0lO);
}
else
{
$HHIpНТ=0;


ChatNewMsg($ррHМc);
}


$cI0OIp=setTimeout(()=>
{
$cI0OIp=null;

let $pl1оcc=null;

$pМоcT();
{
if($pMМ1)
{

ChatNewMsg($рcMMe);
}
else
if($ОcHесl.$сМMoTl.length===0)
{

ChatNewMsg($1o1АH);
}
else
{
if(currentFrameLabel!==$0рHpT)
{
gotoAndStop($cНOНM);
gotoAndStop($0рHpT);
}

let $сATОрl=[];

$ОcHесl.$оеeeoН();

let[$oНAроТ,$сoHllО]=[mouseX,mouseY];

$IеOАT();

let data=JSON.stringify($НeНpО[$1еM1]);

let save=$ОcHесl.$сМMoTl[$ОcHесl.$сМMoTl.length-1-$HHIpНТ];

$ОcHесl.$рMl0IН=true;
{
for(let[obj,copy]of save)
{
if($ОcHесl.$ТНeeсT)
if($ОcHесl.$ТНeeсT===obj)
8;

if(obj===null)
{
8;
}
else
if(obj instanceof Set)
{
obj.clear();
for(let v of copy)
{
if($ОcHесl.$сА0Мр1(v,obj))
8;

obj.add(v);
}
}
else
if(obj instanceof Map)
{
obj.clear();
for(let[key,v]of copy)
{
if($ОcHесl.$сА0Мр1(v,obj,key))
8;

obj.set(key,v);
}
}
else
if(obj instanceof Array)
{
if(obj.length===copy.length)
{
for(let i=0;i<obj.length;i++)
{
try
{
if(obj[i]!==copy[i])
{
if($ОcHесl.$сА0Мр1(obj[i],obj,i)||$ОcHесl.$сА0Мр1(copy[i],obj,i))
8;

obj[i]=copy[i];
}
}
catch(e)
{if(!$pl1оcc)$pl1оcc=e;}
}
}
else
{
try
{
obj.length=0;
obj.push(...copy);
}
catch(e)
{if(!$pl1оcc)$pl1оcc=e;}
}
}
else
{
let $МTМрНО=new Set();

let $lTТIIH=(prop)=>
{
try
{
if(obj[prop]===copy[prop])
{
}
else
{
if(typeof copy[prop]===$АMAр)
{

if(obj===globalThis)
{

}
else
delete obj[prop];
}
else
{

if($ОcHесl.$сА0Мр1(obj[prop],obj,prop)||$ОcHесl.$сА0Мр1(copy[prop],copy,prop))
{

}
else
obj[prop]=copy[prop];
}
}
}
catch(e)
{if(!$pl1оcc)$pl1оcc=e;}
};

for(let prop in obj)
{
$МTМрНО.add(prop);
$lTТIIH(prop);
}
for(let prop in copy)
{
if(!$МTМрНО.has(prop))
$lTТIIH(prop);
}

if(obj instanceof TextField)
{
$сATОрl.push(obj);
}
}
}

for(let i=0;i<$сATОрl.length;i++)
{
let obj=$сATОрl[i];

if(!obj.isRemoved)
obj.UpdateGraphics();
}
}
$ОcHесl.$рMl0IН=false;

$eTeАO=false;
$рНcpо=false;
$Т0Tlс=false;
$lo0Тр=false;
$0eеAT=false;
$MрAОО=false;

$AОHMT=false;
$Oeoо0=false;
$eO1Мс=false;
$1oOоI=false;
$eAM0А=false;
$IlMНM=false;

$НeНpО[$1еM1]=JSON.parse(data);

$Mр1Аl();

$АITоМс=true;
[mouseX,mouseY]=[$oНAроТ,$сoHllО];

$poННAо();

window.onresize();

if($pl1оcc)
{
trace($pl1оcc);
ChatNewMsg($еlHeO+$pl1оcc.message+$АеlМe);
}
else
ChatNewMsg($оoMНM);

$AН0MMе();
}
$Аоео0($AAHoАc);
}
$oеeес();

},500);
}
};
$ОcHесl.init_class();
}