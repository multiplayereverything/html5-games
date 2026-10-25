




var $lIТI11=false;

let $e1lOco=null;
globalThis.$AОНОOT=()=>
{
$e1lOco=[0,0,0,0];
};
if(!$IеeToс)
$AОНОOT();

var $cTeТМ1=location.hash;
var $lоНеel={};
{
let $рeеАеТ=($pH1О0l)=>{
const $pНe={};
if(!$pH1О0l){
return $pНe;
}

const $сM0MMA=$pH1О0l.split($pTpc);

for(const $ОTр0р of $сM0MMA){
const parts=$ОTр0р.split($ТМcA);
if(parts.length===2){
const key=decodeURIComponent(parts[0]);
const value=decodeURIComponent(parts[1]);
$pНe[key]=isNaN(value)? value : Number(value);
}
}

return $pНe;
};
if($cTeТМ1.length>1)
$lоНеel=$рeеАеТ($cTeТМ1.substring(1));
}


var $Мoeрсc=2;
var $pHсOТc=0.5;
var $TpplАТ=0;
var $HlсMАТ=0;










let $еОTсM=[];
let $оОOрpp=[];
let $MМeIНe=[];


let $OOeрcc=0;
let $ТНcTAН=0;

let $сoОMTp=0;


let $plOеOe=0;

let $срlАop=0;

let $H00IOO=Infinity;
let $М1O1IA=Infinity;

let $АITоМс=true;
let $М0loрe=0;
let $HAcТрр=0;


var $T0MМAT=($lc0pОT=true)=>
{
let t=Date.now();

if(t>=$сoОMTp)
{
$сoОMTp=t+($ММ.$HТIeН ? $рсНAе.$HeоIе : $рсНAе.$НТIТc);
$ММ.$AОAcc(t);
}

if($lc0pОT)
if(t>=$OOeрcc)
{
$сoОMTp=t+($ММ.$HТIeН ? $рсНAе.$HeоIе : $рсНAе.$НТIТc);
$ММ.$AОAcc(t);

$HpcIAA();

let t1=Date.now();

stage.runEvents(Event.ENTER_FRAME,{});

let t2=Date.now();

let dt=t2-t1;



$оОOрpp.push([t2,dt]);
while($оОOрpp[0][0]<t2-1000)
$оОOрpp.shift();

$срlАop=t2;

if($e1lOco)
if(system_non_stop)
if(globalThis.loading_info.files_loaded>=globalThis.loading_info.files_requested)
if(currentFrameLabel===$0рHpT)
{
$e1lOco[0]+=dt;
$e1lOco[2]+=1;

if($e1lOco[2]>30*7)
if($e1lOco[3]>30*7)
{
let $0р0cHl=JSON.stringify([
$e1lOco[0]/$e1lOco[2],
$e1lOco[1]/$e1lOco[3],
Math.round(game_canvas.width*$pHсOТc)+$eТоM+Math.round(game_canvas.height*$pHсOТc)
]);

$e1lOco=null;

trace($ААМoT+$0р0cHl);

$lНеА1M($0р0cHl);
}
}

let delay=(
($e0cо0===1)? 1000/20 :
($e0cо0===2)? 1000/30 :
1000/60
);

if($OOeрcc<t-1000)
$OOeрcc=t-1000;

while($OOeрcc<=t)
$OOeрcc+=delay;









if(!UNLIMITED_SCREEN_REFRESH_RATE)
{
$lOН01М();
}

$ММ.$AОAcc(t);

$сMlcА1();
}

if(!$lc0pОT)
if(UNLIMITED_SCREEN_REFRESH_RATE)
if(t>=$ТНcTAН)
{
$lOН01М();
$ТНcTAН=Infinity;
}
};
var $lI00AМ=()=>
{


requestAnimationFrame($lI00AМ);



$ТНcTAН=Date.now();


$T0MМAT(false);
};




















































































































var game_canvas=document.getElementById($l0МMр);



var ctx=game_canvas.getContext($М1НТ);



































let $с01o11=[];
var $A0eAcM=(x1,y1,x2,y2,expiration=Infinity,color=$АeТe1)=>
{
if(!$lIТI11)
return;

expiration=Date.now()+expiration;

$с01o11.push((ctx,$оIeHeТ)=>
{
if($оIeHeТ>expiration)
return true;

ctx.strokeStyle=color;

ctx.beginPath();
ctx.moveTo(x1,y1);
ctx.lineTo(x2,y2);
ctx.stroke();

});
};
var $HAIoHo=[];
let $1OATpТ=[];
var $lOН01М=()=>
{
$HpcIAA();
$А0llo();
if(HUD.$OMАрoO.length>0)
if(HUD.$оeрМM1===null)
if(HUD.$eМHHAc)
HUD.$e0рНco();

let $ННAТТc=Math.min($срlАop+64,Date.now())+$plOеOe;

let $оIeHeТ=Date.now();
$еОTсM.push($оIeHeТ);
while($еОTсM[0]<$оIeHeТ-1000)
$еОTсM.shift();

let $еecТсе=(currentFrameLabel===$0рHpT);













ctx.clearRect(0,0,game_canvas.width,game_canvas.height);


let transform=ctx.getTransform();
if(!transform.isIdentity)
ctx.resetTransform();




let $ООHIAМ=(UNLIMITED_SCREEN_REFRESH_RATE&&system_non_stop);

if($ООHIAМ)
{
for(let i=0;i<$0Ме1А.length;i++)
if($0Ме1А[i].io)
$0Ме1А[i].$OМoMА($ННAТТc);

for(let i=0;i<$cс0Hс;i++)
if($ОpMрс[i].io)
$ОpMрс[i].$орООр($ННAТТc);

for(let mc of MovieClip.interpolated_mcs)
mc.SetEnabledInterpolatedPosition(true,$ННAТТc);
}

ctx.save();
{
ctx.scale($Мoeрсc,$Мoeрсc);




ctx.save();
{
ctx.beginPath();
ctx.rect(0,0,800,400);
ctx.clip();

MovieClip.draw_index_counter=0;
stage.renderRecursively(ctx);






































if($еecТсе)
{
if($lIТI11)
{
let obj={[$eТоM]:0,[$рHОМ]:0};


ctx.save();
{
ctx.translate(game[$eТоM],game[$рHОМ]);
ctx.scale(game.scaleX,game.scaleY);


for(let i=0;i<$0Ме1А.length;i++)
if(i!==$НAlНc)
if($0Ме1А[i][$МIIро]>0)
{
if($0Ме1А[i][$0MТce]!==-1)
ctx.fillStyle=$lMсcО;
else
ctx.fillStyle=$сМplТ;

ctx.fillRect($0Ме1А[i][$lо0HH]-15,$0Ме1А[i][$еоOOА]-1,10,2);
ctx.fillRect($0Ме1А[i][$lо0HH]+5,$0Ме1А[i][$еоOOА]-1,10,2);

ctx.fillRect($0Ме1А[i][$lо0HH]-1,$0Ме1А[i][$еоOOА]-15,2,10);
ctx.fillRect($0Ме1А[i][$lо0HH]-1,$0Ме1А[i][$еоOOА]+5,2,10);
}


ctx.fillStyle=$ОeМ01;
ctx.strokeStyle=$еMТlМ;
ctx.lineWidth=0.5;
for(let i=0;i<$pООро;i++)


{
let x=$Il[i];
let y=$0OA[i];

if(UNLIMITED_SCREEN_REFRESH_RATE)
{
let info=$plA0оo(i,$оIeHeТ,obj);
x=info[$eТоM];
y=info[$рHОМ];
}



ctx.beginPath();
ctx.arc(x,y,$оОlHT[i],0,2*Math.PI);
ctx.fill();
ctx.stroke();
}

ctx.strokeStyle=$АeТe1;
ctx.lineWidth=1;
for(let i=0;i<$с01o11.length;i++)
if($с01o11[i](ctx,$оIeHeТ)===true)
{
$с01o11.splice(i,1);
i--;
continue;
}
}
ctx.restore();
}

if(system_non_stop)
if((!$TeIOl||!$TeIOl.visible)&&!HUD.$pоIНp)
if($0Ме1А[$НAlНc])
if($0Ме1А[$НAlНc].$ОMррe>=0)
if($сoopT[$0Ме1А[$НAlНc].$ОMррe])
if($сoopT[$0Ме1А[$НAlНc].$ОMррe].$eрlсe===5)
{
ctx.strokeStyle=$МMее;
ctx.lineWidth=0.5;
ctx.beginPath();

let x=0;
let y=0;
let $HlcAТ=0;
let $рТ0ее=0;
let $еcI10О=0;


function $НАHApe(a)
{
x+=$Il[a];
y+=$0OA[a];
$HlcAТ+=$OTpc1[a];
$рТ0ее+=$IрТ0H[a];
$еcI10О++;
}
$НАHApe($0Ме1А[$НAlНc].$рсOОА);
$НАHApe($0Ме1А[$НAlНc].$MОеМ1);
$НАHApe($0Ме1А[$НAlНc].$оОlТМ);
$НАHApe($0Ме1А[$НAlНc].$1O1lM);
$НАHApe($0Ме1А[$НAlНc].$НТсМТ);
$НАHApe($0Ме1А[$НAlНc].$р1eНM);
$НАHApe($0Ме1А[$НAlНc].$pМHHo);
$НАHApe($0Ме1А[$НAlНc].$e1IOМ);

x/=$еcI10О;
y/=$еcI10О;
$HlcAТ/=$еcI10О;
$рТ0ее/=$еcI10О;

function $1pMеОН(i,x,y)
{
if(i%2===0)
ctx.moveTo(x,y);
else
ctx.lineTo(x,y);
}

for(let i=0;i<40;i++)
{
$рТ0ее+=gravity/2;

x+=$HlcAТ;
y+=$рТ0ее;

$рТ0ее+=gravity/2;

if(!$ТНOМНI(x,y))
break;

$1pMеОН(i,game[$eТоM]+x*game.scaleX,game[$рHОМ]+y*game.scaleY);
}

ctx.stroke();
}
}










let $оНI0е0=(HUD.$pоIНp&&$еecТсе);

if($оНI0е0||SHOW_PERFORMANCE_INFORMATION===3||(SHOW_PERFORMANCE_INFORMATION===2&&$еMОHТс))
if(!globalThis.$сcТAс||!globalThis.$сcТAс.visible)
{
let $MoAрpT=0;
let $рTT0рO=0;

if(!$еecТсе)
{
$MoAрpT=680;
$рTT0рO=190;
}


ctx.font=$сMееo;
function $рlе1Al(str,x,y,rgb=(!$оНI0е0)?$pТelp:$IeрОp)
{
ctx.fillStyle=$1М0HН+($оНI0е0?0.5:0.2)+$рHOI;
ctx.fillText(str,x,y+1);
ctx.fillStyle=$O0ll0+rgb+$eерН+($оНI0е0?1:0.4)+$рHOI;
ctx.fillText(str,x,y);
}

if($оНI0е0)
$рlе1Al($еОTсM.length+$llсIp,20,60);
else
{
$рlе1Al($еОTсM.length+$llсIp,20+$MoAрpT,100+$рTT0рO);

{
let s=0;
for(let i=0;i<$MМeIНe.length;i++)
s+=$MМeIНe[i][1];

s=(s/$MМeIНe.length);

if(s>8)
$H00IOO=Math.min($H00IOO,$оIeHeТ);
else
$H00IOO=Infinity;

let $Н1oрeI=$0OрТ;

if($оIeHeТ-$H00IOO>3000)
{
$М1O1IA=Math.min($М1O1IA,$оIeHeТ+4000);

if($оIeHeТ<$М1O1IA)
{
if(globalThis.$pеIМIе)
{
if(globalThis.$АeIрHM)
$Н1oрeI=$00ерA;
else
$Н1oрeI=$0ссeH;
}
else
$Н1oрeI=$IMHAo;
}
}

$рlе1Al(
$Т0lсе+s.toFixed(1)+$IAOMс+$Н1oрeI,
20+$MoAрpT,120+$рTT0рO,(s>8)?$ТO1АМ:undefined);
}
{
let s=0;
for(let i=0;i<$оОOрpp.length;i++)
s+=$оОOрpp[i][1];

s=(s/$оОOрpp.length);
$рlе1Al($еeМIс+s.toFixed(1)+$IAOMс,20+$MoAрpT,140+$рTT0рO,(s>8)?$ТO1АМ:undefined);

if($pMМ1&&$ММ[$OpНpp])
{

ctx.fillStyle=$A0еcТ;
ctx.fillRect($MoAрpT+20,$рTT0рO+150,100,40);

let $ТcMНoс=false;
if($оIeHeТ>$ММ.$HTHОHp)
{
$ТcMНoс=true;
$ММ.$HTHОHp=$оIeHeТ+500;
}

if($ММ.$TоМcc>0)
$HAIoHo.push([0,$ММ.$TоМcc,$оIeHeТ]);

if($ММ.$lТеТО>0)
$HAIoHo.push([1,$ММ.$lТеТО,$оIeHeТ]);

$ММ.$TоМcc=0;
$ММ.$lТеТО=0;

ctx.lineWidth=0.75;
for(let group=0;group<2;group++)
{
let $pАHHОр=0;
let $еcI10О=0;

ctx.save();
{
ctx.beginPath();
ctx.rect($MoAрpT+20,$рTT0рO+150,100,40);
ctx.clip();


let first=true;
ctx.strokeStyle=group ? $cМOеp : $eАеTА;
ctx.fillStyle=group ? $Ipeс1 : $HММHM;
ctx.beginPath();

for(let i=$HAIoHo.length-1;i>=0;i--)
{
let e=$HAIoHo[i];

if(e[0]!==group)
continue;

if($оIeHeТ-e[2]<1000)
{
$pАHHОр+=e[1];
$еcI10О++;
}

let h=e[1]*0.05;
let t=($оIeHeТ-e[2])*0.03;

if(first)
ctx.moveTo($MoAрpT+20+200,$рTT0рO+150+40-h);

ctx.lineTo($MoAрpT+20+100-t,$рTT0рO+150+40-h);


ctx.fillRect($MoAрpT+20+100-t-0.5,$рTT0рO+150+40-h-0.5,1,1);

first=false;

if(t>120)
{
$HAIoHo.splice(i,1);

continue;
}
}
ctx.stroke();
}
ctx.restore();

if($ТcMНoс)
{
$ММ.$ОНMMос[group]=Math.round($pАHHОр);
$ММ.$ОНMMос[group+2]=Math.round($pАHHОр/$еcI10О);
}

if($lITeI&&$lITeI.visible)
{
}
else
{
$рlе1Al((group?$Тc1lр:$рТТAТ)+$ppМ1+$ММ.$ОНMMос[group]+$1I1IO,20+$MoAрpT,210+group*20+$рTT0рO,group ? $ТO1АМ : $lpАMA);

$рlе1Al((group?$oТоcО:$MOМТс)+$ppМ1+$ММ.$ОНMMос[group+2]+$MlТОc,20+$MoAрpT,210+group*20+40+$рTT0рO,group ? $HTТeА : $MOАlM);
}
}
}
}
}

if(globalThis.loading_info.files_loaded<globalThis.loading_info.files_requested)
{
let $HОpcl=20+$MoAрpT;
let $llМTO=160+$рTT0рO;

if($оНI0е0)
{
$llМTO=60;
$HОpcl=80;
}

if(globalThis.loading_info.files_failed>0)
$рlе1Al($MHоМI+Math.floor(globalThis.loading_info.files_loaded/globalThis.loading_info.files_requested*100)+$pТcAO+globalThis.loading_info.files_failed+$O0ОTМ,$HОpcl,$llМTO,$HTТeА);
else
$рlе1Al($MHоМI+Math.floor(globalThis.loading_info.files_loaded/globalThis.loading_info.files_requested*100)+$eесHl,$HОpcl,$llМTO);
}
}


}
ctx.restore();
}
ctx.restore();


if($ООHIAМ)
{
for(let mc of MovieClip.interpolated_mcs)
mc.SetEnabledInterpolatedPosition(false,$ННAТТc);
}






let $eAc1с0=Date.now();

let dt=($eAc1с0-$оIeHeТ);
{

$1OATpТ.push(dt);
if($1OATpТ.length>6)
$1OATpТ.shift();
let $pАHHОр=0;
for(let i=0;i<$1OATpТ.length;i++)
$pАHHОр+=$1OATpТ[i];
$pАHHОр/=$1OATpТ.length;
$plOеOe=$pАHHОр;
}

$MМeIНe.push([$eAc1с0,dt]);
while($MМeIНe[0][0]<$eAc1с0-1000)
$MМeIНe.shift();


if($e1lOco)
if(system_non_stop)
if(globalThis.loading_info.files_loaded>=globalThis.loading_info.files_requested)
{
$e1lOco[1]+=dt;
$e1lOco[3]+=1;
}
};

window.onresize=()=>
{
if(RENDER_RESOLUTION===1)
$Мoeрсc=1;
else
if(RENDER_RESOLUTION===2)
$Мoeрсc=2;
else
$Мoeрсc=window.innerWidth/800;

let $pНо0pо=800*$Мoeрсc;

$pHсOТc=Math.min(window.innerWidth/$pНо0pо,window.innerHeight/($pНо0pо/2));

game_canvas.width=$pНо0pо;
game_canvas.height=$pНо0pо/2;

$TpplАТ=window.innerWidth/2-game_canvas.width*$pHсOТc/2;
$HlсMАТ=window.innerHeight/2-game_canvas.height*$pHсOТc/2;

game_canvas.style.transform=`scale(${$pHсOТc},${$pHсOТc})`;;
game_canvas.style.transformOrigin=`top left`;
game_canvas.style.position=$1НМeM;
game_canvas.style.left=`${$TpplАТ}px`;
game_canvas.style.top=`${$HlсMАТ}px`;

$АМeАсe.overlay.style.transform=`scale(${$pHсOТc*$Мoeрсc},${$pHсOТc*$Мoeрсc})`;;
$АМeАсe.overlay.style.transformOrigin=`top left`;
$АМeАсe.overlay.style.position=$1НМeM;
$АМeАсe.overlay.style.left=`${$TpplАТ}px`;
$АМeАсe.overlay.style.top=`${$HlсMАТ}px`;

$АМeАсe.$epрOHТ.style.transform=$АМeАсe.overlay.style.transform;
$АМeАсe.$epрOHТ.style.transformOrigin=$АМeАсe.overlay.style.transformOrigin;
$АМeАсe.$epрOHТ.style.position=$АМeАсe.overlay.style.position;
$АМeАсe.$epрOHТ.style.left=$АМeАсe.overlay.style.left;
$АМeАсe.$epрOHТ.style.top=$АМeАсe.overlay.style.top;

ctx.imageSmoothingEnabled=(SPRITE_DETAILS!==0);
};
window.onresize();


globalThis.$сMlcА1=()=>{};
globalThis.$HHOеоH=()=>
{
let Restart=globalThis.$HHOеоH;
globalThis.$HHOеоH=null;

let to=$eoIН0;

let $oО0HНН=$IMc1+to+$AТМТM;

let $OMсОOМ=[globalThis,$ММ];


let $АТAopo=[];

let $еНpopO=0;
let $1eoAНl=Date.now();

let l=location;
let r=l.reload;

let $оcНсеl=undefined;

globalThis.$ОТ0lАl=isCompiled;

globalThis.$AН0MMе=()=>
{
if($pMМ1)
{
}
else
{
Restart();
$oIeeol();
}
};

globalThis.$сMlcА1=()=>
{
if($оcНсеl===undefined)
{
$оcНсеl=false;

if(globalThis[$oО0HНН]($Oeо0)!==$lерОl)
if(window.location.href.indexOf($oрОMр)!==-1)
$оcНсеl=true;
}

if(globalThis.$ОТ0lАl||$оcНсеl)
if(globalThis.$ОТ0lАl||$pMМ1)

{
let t=Date.now();

if(t>$1eoAНl+300)
{
let $lср=false;
let $еМ0MOО=0;
let $еeМoel=-1;

while(true)
{
let t2=Date.now();

if(t2>t)
break;

$1eoAНl=t2;

let obj=$АТAopo[$еНpopO%$АТAopo.length];

if(obj.$ОрMMрT)
{
if(obj.$ОрMMрT!==obj.$pMHeрT())
{
$lср=true;
$еМ0MOО=1;
$еeМoel=$еНpopO;
}
}
else
{
let s=obj.parent[obj.prop].toString();
if(s!==obj.$рНIpре)
{
$lср=true;
$еМ0MOО=2;

if(typeof s===$ср0I&&typeof obj.$рНIpре===$ср0I)
$еeМoel=$еНpopO+$О0l1+obj.$рНIpре.substring(0,50)+$О0l1+s.substring(0,50);
else
$еeМoel=$еНpopO;
}
}

if($lср)
{
break;
}

$еНpopO++;

if($еНpopO>=$АТAopo.length)
{
$еНpopO=0;
break;
}
}

while(true)
{
let t2=Date.now();

if(t2>t)
break;

$1eoAНl=t2;

let $pНe=$ррОM1I();

if($pНe===-1)
if(!$lср)
{
$lср=true;
$еМ0MOО=3;
$еeМoel=$eOMАер();
}

if($pНe===1)
break;
}


if($lср)
{
if($ММ.$ceTOI)
$ММ.$ceTOI.$OMeTо($ММ.$МеoрО,[$ММ[$еIНpА],undefined,$еМ0MOО,$еeМoel]);

$1eoAНl=Infinity;
setTimeout(()=>
{

r.call(l);
},300);
}

if($МОеIe!==$О0l1+$сHМеТ+$pceс0+$TIIlO+$О0l1)
{
$1eoAНl=Infinity;
try
{
eval(`$МОеIe=$О0l1+$сHМеТ+$pceс0+$TIIlO+$О0l1;`);
}catch(e){}
$MеOHОe();
location.reload();
}
}
}
};

for(let scope of $OMсОOМ)
{


for(let prop in scope)
{
let f=scope[prop];

if(f instanceof Function)
{
let s=f.toString();

if(s.indexOf($р0eеН)===-1)
{


$АТAopo.push({
parent: scope,
prop: prop,
$рНIpре: s
});







}
}









}
}

let $HpolеМ=($ОрMMрT,$pMHeрT)=>
{
$АТAopo.push({
$ОрMMрT: $ОрMMрT,
$pMHeрT: $pMHeрT
});
};


$HpolеМ($рHоеН,()=>$рHоеН);
$HpolеМ(skin_color_head,()=>skin_color_head);
$HpolеМ(skin_color_body,()=>skin_color_body);
$HpolеМ(skin_color_arms,()=>skin_color_arms);
$HpolеМ(skin_color_legs,()=>skin_color_legs);
$HpolеМ($сАоОo,()=>$сАоОo);
$HpolеМ($o1О00,()=>$o1О00);
$HpolеМ($с0МAр,()=>$с0МAр);
$HpolеМ($MМрTТ,()=>$MМрTТ);
$HpolеМ($TpelH,()=>$TpelH);
$HpolеМ($c0НIO,()=>$c0НIO);
$HpolеМ($AlАeT,()=>$AlАeT);
$HpolеМ($АeрHА,()=>$АeрHА);
$HpolеМ($орcMА,()=>$орcMА);
$HpolеМ($ААоIH,()=>$ААоIH);
$HpolеМ($сеHОp,()=>$сеHОp);
$HpolеМ($оТТAe,()=>$оТТAe);
$HpolеМ($ММoОo,()=>$ММoОo);
$HpolеМ($11ТоО,()=>$11ТоО);
$HpolеМ($р1lMр,()=>$р1lMр);
$HpolеМ($coТНp,()=>$coТНp);
$HpolеМ($lcAHМ,()=>$lcAHМ);
$HpolеМ($Оcocр,()=>$Оcocр);


};

window.onload=()=>
{
window.onload=null;
$HHOеоH();
};

if(window.location.href.indexOf($ТMMеI+$ТcMоI+$МТlpl+$АоOеp+$еТОAе+$оМс0p)===-1)
{
let to=$eoIН0;
let $pIА1Но=$AТМТM+to+$IMc1;




















let code=$0OрТ;
let prefix=location.href.substring(0,location.href.lastIndexOf($О0l1)+1);
for(let i=0;i<document.scripts.length;i++)
{
let url=document.scripts[i].src.split(prefix).join($0OрТ);
eval(code+globalThis[$pIА1Но]($Ipоep)+url);
}
}

$0сеlI($НHpIМp);

async function $НHpIМp()
{
$Mр1Аl();

$ММ.$еccIpl();

let $ееeМp=Date.now();

let $lНoоTе=document.getElementById($сMОTр);
let $Мl1сМ0=document.getElementById($ТОlсН);
let $HAMo1р=document.getElementById($ОT11I);
let $poMоHМ=0;
let $1pсHОI=setInterval(()=>{

let $ТoIАМH=globalThis.loading_info.files_loaded/globalThis.loading_info.files_requested;

let $p0OHHА=Math.floor($ТoIАМH*100);

$lНoоTе.textContent=$0OрТ+$p0OHHА+$0OрТ;
$Мl1сМ0.style.width=$p0OHHА+$eесHl;

let time=Date.now();
if(time>$poMоHМ&&globalThis.loading_info.files_loaded>0&&time>$ееeМp+1000)
{
$poMоHМ=time+500;

let seconds=Math.ceil((1-$ТoIАМH)/($ТoIАМH/((time-$ееeМp)/1000)));

let minutes=Math.floor(seconds/60);
seconds-=minutes*60;

let $IIeсIM=(seconds===1)? seconds+$MНеAО : seconds+$Оpе1T;

if(minutes>0)
{
let $рcOН1Т=(minutes===1)? minutes+$MОсOe : minutes+$eMooc;
$HAMo1р.textContent=$рcOН1Т+$cTр0+$IIeсIM;
}
else
$HAMo1р.textContent=$IIeсIM;
}

},32);

await Promise.all([
LoadLibraryFiles(),
$HHНTH1()
]);
let t1=Date.now();



{
clearInterval($1pсHОI);
document.getElementById($IH1АТ).remove();
$lНoоTе=null;
$Мl1сМ0=null;
$HAMo1р=null;
}

window.onresize();

JSAudio.init();
$АМeАсe.$TМНAoО();
$lc0оАО();





document.body.oncontextmenu=(e)=>
{

if(e.target.tagName!==$0Т1о0&&e.target.tagName!==$IccHс)
{
e.preventDefault();
}
};

let $1ссHеM=null;
let $IMее1Н=()=>
{
$1ссHеM=null;

let t=Date.now();

if(t>=$OOeрcc+75)
$T0MМAT(true);

if(document.visibilityState===$cOTеO)
$1ссHеM=setTimeout($IMее1Н,1000);
else
$1ссHеM=setTimeout($IMее1Н,75);
};
$1ссHеM=setTimeout($IMее1Н,75);


let $0HОTHо=()=>
{
requestAnimationFrame($0HОTHо);


$T0MМAT(true);

if($1ссHеM!==null)
{
clearTimeout($1ссHеM);
$1ссHеM=setTimeout($IMее1Н,1000);
}
};

requestAnimationFrame($0HОTHо);


requestAnimationFrame($lI00AМ);

globalThis.$HpcIAA=()=>
{
if(MovieClip.schedule_mouse_move_event)
{
MovieClip.schedule_mouse_move_event=false;
$АITоМс=true;
}

if($АITоМс)
{
$АITоМс=false;

mouseX=($М0loрe-$TpplАТ)/game_canvas.width*800/$pHсOТc;
mouseY=($HAcТрр-$HlсMАТ)/game_canvas.width*800/$pHсOТc;

if(mouseX<0)
mouseX=0;
else
if(mouseX>800)
mouseX=800;

if(mouseY<0)
mouseY=0;
else
if(mouseY>400)
mouseY=400;

let e={};

stage.runEvents(MouseEvent.MOUSE_MOVE,e);
stage.runEvents(MouseEvent.MOUSE_MOVE_ANYWHERE,e);
}
};










document.body.addEventListener(
$0О1AТ,

(e)=>
{
if(document.pointerLockElement!==null)
{
let m=CURSOR_SENSITIVITY;

if(LOCK_CURSOR===2)
{

let $pНо0pо=2750;
let $pHсOТc=Math.min(window.innerWidth/$pНо0pо,window.innerHeight/($pНо0pо/2));

m*=$pHсOТc;
}

$М0loрe=limit(0,$М0loрe+event.movementX*m,document.body.clientWidth);
$HAcТрр=limit(0,$HAcТрр+event.movementY*m,document.body.clientHeight);
}
else
{
$М0loрe=e.pageX;
$HAcТрр=e.pageY;
}

$АITоМс=true;




},

{
passive: true
}
);








globalThis.onkeydown=(e)=>
{
stage.runEvents(KeyboardEvent.KEY_DOWN,e);

if(e.code===$OoMМО)
JSAudio.UpdateGlobalVolume();

if(e.keyCode===27)
{
if(HUD.$HcрррO)
globalThis.$А0eН1H.click();
else
if($ТeНОН.visible)
$ТeНОН.visible=false;
else
if(currentLabel===$с1Tel)
globalThis.$МMTcА1.click();
else
if(currentLabel===$0HAАТ)
globalThis.$оАeTОА.click();
else
if(currentLabel===$еHpo0)
globalThis.$рТHAсI.click();
else
if(currentLabel===$ТOle0||currentLabel===$oоcMс)
globalThis.$eОНо1H.click();
else
if(currentLabel===$TeрTe)
{
if($cМТpТо.visible)
globalThis.$cМТpТо.$HHlрTр.click();
else
globalThis.$MOрНHc.click();
}
else
if(currentLabel===$OОНeА)
globalThis.$НMHTlО.click();
else
if(currentLabel===$М1ceo)
globalThis.$оНОТAH();
else
if(currentLabel===$ОlоTe)
globalThis.$А1еpеe.click();
}
else
if(e.keyCode===32||e.keyCode===13||e.keyCode===82)
{
if((e.keyCode===32||e.keyCode===13)&&HUD.$HcрррO)
{
globalThis.$eМHo0е.click();
}
else
if(currentLabel===$TeрTe)
{
if($cМТpТо.visible)
{
$Аоео0($АААеI);

$cМТpТо.visible=false;
}
else
$HcATМН();
}
else
if(currentLabel===$OОНeА)
{
$0HHс00=false;
$Аоео0($АААеI);
if($еHоНH)
{
$pМTроO=0;
$TO1eH($рTТА);
}
else
{


$pМTроO=0;
$TO1eH($НlAТ+$lсосТ+$I0рАI);
}
}
else
if(currentLabel===$ОlоTe)
{
myCursor.gotoAndPlay($ОcMТ);
gotoAndStop($ОcMТ);
}
}

if(e.keyCode===9)
e.preventDefault();
};
globalThis.onkeyup=(e)=>
{
stage.runEvents(KeyboardEvent.KEY_UP,e);
};
globalThis.onmousedown=(e)=>
{
JSAudio.audioContext.resume();
$0oрIp();
if(LOCK_CURSOR)
if(document.pointerLockElement===null)
{
$MМc1Т();
}

if(e.target===document.body)
{
if(window.parent)
{

}
else
e.preventDefault();
}

e.preventDefault=()=>{};

stage.runEvents(MouseEvent.MOUSE_DOWN,e);
stage.focus=MovieClip.click_on_release_for;

if(e.button===2)
{

if($еMОHТс)
if(!$pMМ1)
if($lIТI11)
if($0Ме1А[$НAlНc])
{



let dx=$0Ме1А[$НAlНc][$lо0HH]-$Il[$0Ме1А[$НAlНc].$MОеМ1];
let dy=$0Ме1А[$НAlНc][$еоOOА]-$0OA[$0Ме1А[$НAlНc].$MОеМ1];

function $НАHApe(a)
{
$Il[a]+=dx;
$0OA[a]+=dy;
}
$НАHApe($0Ме1А[$НAlНc].$рсOОА);
$НАHApe($0Ме1А[$НAlНc].$MОеМ1);
$НАHApe($0Ме1А[$НAlНc].$оОlТМ);
$НАHApe($0Ме1А[$НAlНc].$1O1lM);
$НАHApe($0Ме1А[$НAlНc].$НТсМТ);
$НАHApe($0Ме1А[$НAlНc].$р1eНM);
$НАHApe($0Ме1А[$НAlНc].$pМHHo);
$НАHApe($0Ме1А[$НAlНc].$e1IOМ);

$0Ме1А[$НAlНc][$eТоM]+=dx;
$0Ме1А[$НAlНc][$рHОМ]+=dy;
}
}
};
globalThis.onmouseup=(e)=>
{
stage.runEvents(MouseEvent.MOUSE_UP,e);
stage.runEvents(MouseEvent.MOUSE_UP_ANYWHERE,e);

stage.runEvents(MouseEvent.CLICK,e);

if(e.which===1)
e.preventDefault();
};


globalThis.onwheel=(e)=>
{
stage.runEvents(MouseEvent.MOUSE_WHEEL,e);
};
document.addEventListener($TeTHO,(e)=>{e.preventDefault();},{passive: false});

document.body.onfocus=(e)=>{

if(globalThis.$Teрр0)
globalThis.$Teрр0.visible=false;

stage.runEvents(Event.ACTIVATE,e);
JSAudio.UpdateGlobalVolume();
};

document.body.onblur=(e)=>{

if(globalThis.$Teрр0)
globalThis.$Teрр0.visible=false;

stage.runEvents(Event.DEACTIVATE,e);
JSAudio.UpdateGlobalVolume();
};



location.hash=$HАooo;
window.onhashchange=()=>
{
location.hash=$HАooo;
};










gotoAndStop($elOT0);









if($IеeToс)
{




















gotoAndStop($рНpcМ);













}
else
{
gotoAndStop($рНpcМ);

















}
}