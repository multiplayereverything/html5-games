

{
let mc=null;
let $0Ie1pр=null;
let $HI1еoI=null;

let $еоOTН=null;
let $AHO1O1=null;
let $оНoсАO=null;

HUD.CreateMenuScreen=()=>
{


if(mc)
8;

$lc0оАО();


sky.visible=false;

let $AрТc1c=stage.children.indexOf(globalThis.$A1Hpe)+1;
mc=stage.addChildAt(new MovieClip(),$AрТc1c);

let logo=mc.addChild(HUD.$ОНHОеТ(library_bitmap_datas[$pрМTр]));
logo[$eТоM]=434;
logo[$рHОМ]=45;
logo.scaleX=logo.scaleY=288/611;

mc.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
[$eТоM]: 790,
[$рHОМ]: 373,
htmlText: $HTТОо+
$TТH0Т+
$HHТНA,
size: 6,
color: $eоТер,
align: $МОIс,
$HTОо0о: true,
action:()=>
{
}
}));




{
globalThis.$HOHOIТ=mc.addChild(HUD.$ТАoAOр({$НОНеAО: false}));
globalThis.$HOHOIТ[$eТоM]=400;
globalThis.$HOHOIТ[$рHОМ]=200;

let img=new Image();
img.src=library_bitmap_datas[$еcеlе].src;
img.style.cssText=`
left:-581px;
top:-296px;
position: absolute;
$l1рo0A-events: none;
width: 1162px;
height: 591px;
`;
globalThis.$HOHOIТ.element.append(img);
}

let $oТМOНО=(type)=>
{
let $о1НеНp=$АМeАсe.$ocееТ0();
$о1НеНp.style.transformOrigin=$НсlоA;
$о1НеНp.style.display=$MOTМо;
globalThis.$HOHOIТ.element.append($о1НеНp);

let $Т0oсАT=10;

let $TсcосA=$АМeАсe.$ocееТ0();
$TсcосA.style.backgroundImage=$М0O0O;
$TсcосA.style.width=$IAppе;
$TсcосA.style.height=$0cOeo;

if(type===0)
$TсcосA.style.backgroundPosition=$p00lТ;
else
$TсcосA.style.backgroundPosition=$сTo0А;

$TсcосA.style.transformOrigin=$НсlоA;

if(type===0)
{
$TсcосA.style.animation=$MрНТM+$Т0oсАT+$НеМoH;
$TсcосA.style.animationDelay=Math.random()*$Т0oсАT+$IМO0;
}
else
$TсcосA.style.animation=$MрНТM+$Т0oсАT+$НTМpl;

$о1НеНp.append($TсcосA);

let x=0;
let y=0;
let r=(type===0)? 45 : 106;
let sx=1;
let sy=1;

let $cе1Mec=()=>
{
$о1НеНp.style.transform=$HOАIl+x+$lcеHН+y+$0pсo1+r+$TоHр0+sx+$0HoА+sy+$0сеTl;
};

return{
set x(v){x=100+v*2;$cе1Mec();},
set y(v){y=-200+v*2;$cе1Mec();},
set scaleX(v){sx=sy=v;$cе1Mec();},
set scaleY(v){},
gotoAndPlay(v)
{
$TсcосA.style.transform=$HIpAp;
$о1НеНp.style.display=$0OрТ;
},
gotoAndStop(v)
{
}
};
};

for(let i=0;i<30;i++)
{

globalThis.$HOHOIТ[$0c1cI+i]=$oТМOНО(0);
}
let $eeIТсТ=$oТМOНО(1);
$eeIТсТ[$eТоM]=30;
$eeIТсТ[$рHОМ]=140;
$eeIТсТ.gotoAndPlay(1);


globalThis.$oAMcео=mc.addChild(new MovieClip());
globalThis.$АlАеAH=mc.addChild(new MovieClip());

for(let i=0;i<8;i++)
{



globalThis.$oAMcео[$eIo0о+i]=globalThis.$oAMcео.addChild(new MovieClip());
globalThis.$oAMcео[$eIo0о+i].$MН1Mp=globalThis.$oAMcео[$eIo0о+i].addChild(new TextField());

globalThis.$oAMcео[$eIo0о+i].z=0;

globalThis.$oAMcео[$eIo0о+i].ghost=globalThis.$oAMcео[$eIo0о+i].addChild(new MovieClip());
globalThis.$oAMcео[$eIo0о+i].ghost.$MН1Mp=globalThis.$oAMcео[$eIo0о+i].ghost.addChild(new TextField());

globalThis.$oAMcео[$eIo0о+i].ghost.z=117;


globalThis.$oAMcео[$eIo0о+i].$AoOApc=globalThis.$oAMcео[$eIo0о+i].addChild(new MovieClip());

globalThis.$oAMcео[$eIo0о+i][$рHОМ]=i*20;
}










$0Ie1pр=document.createElement($MeIМl);
$0Ie1pр.style.zIndex=2;
$АМeАсe.$epрOHТ.append($0Ie1pр);
let p=document.createElement($lIМр1);
$0Ie1pр.append(p);
p.style.pointerEvents=$ТОMеТ;

p.style.height=$с1cpc;

p.onpointermove=($сОOТМH)=>
{
let $OеoeсT=(e)=>
{
$АlАеAH.mouseX=e.offsetX;
$АlАеAH.mouseY=e.offsetY;



if($АlАеAH.mouseX>200||$АlАеAH.mouseY>globalThis.$еHеHс1*20)
{
p.onmouseout(e);
return;
}

$АlАеAH.runOwnEvents(MouseEvent.MOUSE_MOVE,e);
};

if($сОOТМH.getCoalescedEvents)
{
for(let e of $сОOТМH.getCoalescedEvents())
$OеoeсT(e);
}
else
$OеoeсT($сОOТМH);
};

p.onmouseout=(e)=>
{
$АlАеAH.runOwnEvents(MouseEvent.MOUSE_OUT,e);
};
p.onmousedown=(e)=>
{
$АlАеAH.runOwnEvents(MouseEvent.MOUSE_DOWN,e);

addEventListener(MouseEvent.MOUSE_UP_ANYWHERE,function cb()
{
removeEventListener(MouseEvent.MOUSE_UP_ANYWHERE,cb);


setTimeout(()=>
{
if($pllН1с!==-1)
{
$oAMcео[$TIT0е+$pllН1с].z=0;
$pllН1с=-1;
}
},1);
});
};
p.onclick=(e)=>
{
$АlАеAH.runOwnEvents(MouseEvent.CLICK,e);
};

{
let $lOlТOT=document.createElement($llToр);
$lOlТOT.style.cssText=$TMApс+
$pрcIс+
$HрAep+
$рIсоO+
$TopIО;

p.append($lOlТOT);

globalThis.$oAMcео.$lpMopН={
set htmlText(v)
{
$lOlТOT.textContent=v;
},
set text(v)
{
$lOlТOT.textContent=v;
},
set alpha(v)
{
$lOlТOT.style.opacity=v;
}
};
}
{
let $lOlТOT=document.createElement($llToр);
$lOlТOT.style.cssText=$TMApс+
$lМеAМ+
$HрAep+
$рIсоO+
$TopIО;

p.append($lOlТOT);

globalThis.$oAMcео.$НI1AMМ={
set htmlText(v)
{
$lOlТOT.textContent=v;
},
set text(v)
{
$lOlТOT.textContent=v;
},
set alpha(v)
{
$lOlТOT.style.opacity=v;
}
};
}

let $TlорАM=[];
for(let i=0;i<8;i++)
{
let b=document.createElement($МIcA0);
p.append(b);

$TlорАM[i]=b;
b.$OеoеpA=[];

b.textContent=$eооI1;

b.$Ме1MсA=$еep1o;


{
let $АpMI1p=document.createElement($H0ОТp);
$АpMI1p.$Ме1MсA=$еep1o;
p.append($АpMI1p);
b.$OеoеpA.push($АpMI1p);
}


{
let $АpMI1p=document.createElement($ТОТeН);
$АpMI1p.$Ме1MсA=$TеоАМ;
p.append($АpMI1p);
b.$OеoеpA.push($АpMI1p);
}

{
let $АpMI1p=document.createElement($ТОТeН);
$АpMI1p.$Ме1MсA=$lpМ1O;
p.append($АpMI1p);
b.$OеoеpA.push($АpMI1p);
}

{
let $АpMI1p=document.createElement($е1TМo);
$АpMI1p.$Ме1MсA=$AНс0e;
p.append($АpMI1p);
b.$OеoеpA.push($АpMI1p);
}

{
let $АpMI1p=document.createElement($е1TМo);
$АpMI1p.$Ме1MсA=$lсА1Н;
p.append($АpMI1p);
b.$OеoеpA.push($АpMI1p);
}


{
let ghost=document.createElement($МессO);
p.append(ghost);

ghost.textContent=$eооI1;

ghost.$Ме1MсA=$1рOoA;
b.$OoOс11=ghost;
}
}
let $IAОАoА=true;
$оНoсАO=()=>
{



function $cАОcНН($OMOIeO,$оОcМHp,value,$eecMсМ=0,$MНoМcp=0)
{
if($оОcМHp===$lMOАA)
{
$MНoМcp*=-1;
$OMOIeO.style[$оОcМHp]=$OMOIeO.$Ме1MсA.split($cТMOl).join(value).split($оАeIA).join($eecMсМ).split($оНl1l).join($MНoМcp);
}
else
if($оОcМHp===$1ТIсО)
{
value=Math.max(0,value)*Math.max(0,$oAMcео.alpha);
$OMOIeO.style[$оОcМHp]=value;
}
else
$OMOIeO.style[$оОcМHp]=value;
}
function $рAATОH(btn,$оОcМHp,value,$eecMсМ=0,$MНoМcp=0)
{
$cАОcНН(btn,$оОcМHp,value,$eecMсМ,$MНoМcp);
$cАОcНН(btn.$OoOс11,$оОcМHp,value,$eecMсМ,$MНoМcp);

for(let i2=0;i2<btn.$OеoеpA.length;i2++)
$cАОcНН(btn.$OеoеpA[i2],$оОcМHp,value,$eecMсМ,$MНoМcp);
}

for(let i=0;i<8;i++)
{
let element=$TlорАM[i];
let mc=globalThis.$oAMcео[$eIo0о+i];

if($IAОАoА)
{
if(!mc.visible)
$рAATОH(element,$ОоМAе,$Iсo1e);
else
{
element.textContent=mc.$MН1Mp.text;
element.$OoOс11.textContent=mc.ghost.$MН1Mp.text;
}
}

if(mc.visible)
{
$cАОcНН(element,$1ТIсО,mc.$MН1Mp.alpha);
$cАОcНН(element.$OoOс11,$1ТIсО,mc.ghost.alpha);

for(let i2=0;i2<element.$OеoеpA.length;i2++)
$cАОcНН(element.$OеoеpA[i2],$1ТIсО,mc.$AoOApc.alpha);

$cАОcНН(element,$lMOАA,mc[$eТоM],mc[$рHОМ],mc.z);
if(mc.ghost.visible&&mc.ghost.alpha>0)
$cАОcНН(element.$OoOс11,$lMOАA,mc[$eТоM]+mc.ghost[$eТоM],mc[$рHОМ]+mc.ghost[$рHОМ],mc.z+mc.ghost.z);

for(let i2=0;i2<element.$OеoеpA.length;i2++)
$cАОcНН(element.$OеoеpA[i2],$lMOАA,mc[$eТоM],mc[$рHОМ],mc.z);
}
}

$IAОАoА=false;
};



$HI1еoI();


globalThis.$oAMcео.visible=false;
globalThis.$АlАеAH.visible=false;

$1сl0МТ($ТО1Ho);
if($lоНеel.map)
{
setTimeout(()=>
{
$еHоНH=true;
$рTТА=$lоНеel.map;

delete $lоНеel.map;

gotoAndStop($1Meo);
},0);
}
};

HUD.DisposeMenuScreen=()=>
{


MovieClip.RemoveIfPossible(mc);

$0Ie1pр.remove();

sky.visible=true;

removeEventListener(Event.ENTER_FRAME,$еоOTН);
stage.removeEventListener(MouseEvent.MOUSE_WHEEL,$AHO1O1);

$оНoсАO=null;
$еоOTН=null;
$AHO1O1=null;

mc=null;
};


$HI1еoI=()=>
{
stop();

stage.$OTlIO=$0ОрАо;
stage.align=$01lHM;

$Hl1AА.visible=true;
$Hl1AА.alpha=1;

$То0He.visible=false;
$То0He.$OОТTр.gotoAndStop(1);

$MоTl0=false;


globalThis.$MсM1ТA=8;
globalThis.$еHеHс1=globalThis.$MсM1ТA;

try
{
$eНеlе();
$рTоОc();
}
catch(e)
{
$0cо0l=false;
}
stage.quality=$I1АA;

$срMеl=0;

if($AАcАО)
Mouse.hide();




if($Mp1Ip&&!$оM0Т1)
{
$Mp1Ip=false;
$ppоpА=0;

$Т1рcН=$Нo1О0;
}



























































$АlАеAH.scaleX=$АlАеAH.scaleY=$АlАеAH.$НO1еAA=$oAMcео.scaleX=$oAMcео.scaleY=$oAMcео.$НO1еAA=1.5;

$oAMcео.alpha=0.5;

$АlАеAH.addEventListener(MouseEvent.MOUSE_OUT,function()
{
$o0ppH1=-1;
});
$АlАеAH.addEventListener(MouseEvent.MOUSE_DOWN,function()
{
for(m=0;m<$MсM1ТA;m++)
if($oAMcео[$TIT0е+m].visible)
{
if($АlАеAH.mouseX>$oAMcео[$TIT0е+m][$eТоM]&&$АlАеAH.mouseX<$oAMcео[$TIT0е+m][$eТоM]+200&&$АlАеAH.mouseY>$oAMcео[$TIT0е+m][$рHОМ]&&$АlАеAH.mouseY<$oAMcео[$TIT0е+m][$рHОМ]+20)
{
$o0ppH1=m;
$pllН1с=m;
$oAMcео[$TIT0е+m].$AoOApc.alpha=0;
$oAMcео[$TIT0е+m].ghost.alpha=1;
$oAMcео[$TIT0е+m].z=5;
$Аоео0($pHpсA);
}
else
$oAMcео[$TIT0е+m].z=0;
}
});

function $ТMAТ0р()
{






}

function $OOMOHA()
{
var $ТAeМОp=$еeрА0;
try
{
$ТAeМОp=String(ExternalInterface.call($МIНеH));
}
catch(e)
{
$ТAeМОp=$еeрА0;
}

if($ТAeМОp==$TIТoр||$ТAeМОp==$oАTТ)
{
if(MovieClip(root).loaderInfo.url.toLowerCase().indexOf($О0OН)==-1&&MovieClip(root).loaderInfo.url.indexOf($pМcH0)==-1&&MovieClip(root).loaderInfo.url.indexOf($pМcH0)==-1
&&MovieClip(root).loaderInfo.url.indexOf($рOМеА)==-1
&&MovieClip(root).loaderInfo.url.indexOf($НМ11А)==-1
)
return false;
else
return true;
}
else
return false;
}


$АlАеAH.addEventListener(MouseEvent.CLICK,function()
{
for(m=0;m<$MсM1ТA;m++)
if($oAMcео[$TIT0е+m].visible)
{
$oAMcео[$TIT0е+m].z=0;
if($pllН1с==m)
if($АlАеAH.mouseX>$oAMcео[$TIT0е+m][$eТоM]&&$АlАеAH.mouseX<$oAMcео[$TIT0е+m][$eТоM]+200&&$АlАеAH.mouseY>$oAMcео[$TIT0е+m][$рHОМ]&&$АlАеAH.mouseY<$oAMcео[$TIT0е+m][$рHОМ]+20)
{
$oAMcео[$TIT0е+$pllН1с].z=0;
$pllН1с=-1;

$o0ppH1=m;

if(m==0)
{
$ТMAТ0р();

gotoAndStop($OрHAH);
}
if(m==1)
{
try
{
navigateToURL(new URLRequest($IoHеe),$рcl0);
}
catch(e)
{
trace($ААрO);
}
}

if(m==2)
{
$ТMAТ0р();

gotoAndStop($сTррс);
}
if(m==3)
{
$АoМHl=true;
$ТMAТ0р();

$ToеНIT();

}
if(m==4)
{
$АoМHl=false;
$ТMAТ0р();

$ToеНIT();

}
if(m==5)
{
$ТMAТ0р();

gotoAndStop($Аo1O);
}
if(m==6)
{
try
{
navigateToURL(new URLRequest($рI0А),$рcl0);
}
catch(e)
{
trace($ААрO);
}
}
if(m==7)
{
try
{
navigateToURL(new URLRequest($рТрО),$рcl0);
}
catch(e)
{
trace($ААрO);
}
}


$Аоео0($АААеI);

break;
}
}


});
var m;
var $1ooIcl=-1;
var $o0ppH1=-1;
var $cAНеHH=0;

globalThis.$pllН1с=-1;
$АlАеAH.addEventListener(MouseEvent.MOUSE_MOVE,$ОТeреA);
function $ОТeреA(event)
{



for(m=0;m<$MсM1ТA;m++)
if($oAMcео[$TIT0е+m].visible)
{

if($АlАеAH.mouseX>$oAMcео[$TIT0е+m][$eТоM]&&$АlАеAH.mouseX<$oAMcео[$TIT0е+m][$eТоM]+200&&$АlАеAH.mouseY>$oAMcео[$TIT0е+m][$рHОМ]&&$АlАеAH.mouseY<$oAMcео[$TIT0е+m][$рHОМ]+20)
{
$o0ppH1=m;
$oAMcео[$TIT0е+m].$AoOApc.alpha=Math.min($oAMcео[$TIT0е+m].$AoOApc.alpha+0.5,1)
}
}
};



$oAMcео[$TIT0е+0].$MН1Mp.text=$HореM;
$oAMcео[$TIT0е+1].$MН1Mp.text=$0рМIo;
$oAMcео[$TIT0е+2].$MН1Mp.text=$pНерp;

$oAMcео[$TIT0е+3].$MН1Mp.text=$cpНOH;
$oAMcео[$TIT0е+4].$MН1Mp.text=$АОсHТ;

$oAMcео[$TIT0е+5].$MН1Mp.text=$О1ММр;
$oAMcео[$TIT0е+6].$MН1Mp.text=$MeOA1;
$oAMcео[$TIT0е+7].$MН1Mp.text=$poНHр;

let $OpI00е=(id)=>
{
let i=id;
$oAMcео[$TIT0е+i].visible=false;
$еHеHс1--;
while(i<$MсM1ТA)
{
$oAMcео[$TIT0е+i][$рHОМ]-=20;
i++;
}
};





if(true)
$OpI00е(4);

if(this.loaderInfo.url.indexOf($Н0l1o)===-1&&!$IеeToс)
$OpI00е(6);

$OpI00е(7);

for(m=0;m<$MсM1ТA;m++)
{
$oAMcео[$TIT0е+m].ghost.alpha=0;
$oAMcео[$TIT0е+m].ghost.$MН1Mp.text=$oAMcео[$TIT0е+m].$MН1Mp.text;
}
var $НIТ100=0;
$HOHOIТ.rotation=(Math.random()-0.5)*0.3;

var $01cOp,$АА0OO;
$01cOp=$1еT1Н.toLowerCase();


var $oplHTo=$Аcle;
var $TеоеоH=$HМОAе;
$TеоеоH+=$Н0Т1;
for(i=0;i<$01cOp.length;i++)
{
if($TеоеоH.indexOf($01cOp.charAt(i))==-1)
{
if($01cOp.charAt(i)==$lсcе)
$oplHTo+=$IсеОе;
else
$oplHTo+=$01cOp.charAt(i);
}
}
$01cOp=$oplHTo;

$oAMcео.$lpMopН.htmlText=$OAlоМ+$1еT1Н+$OНTНО;
$oAMcео.$НI1AMМ.htmlText=$Аcle;

$АА0OO=$01cOp+$1eMНA;
$01cOp+=$ОTHАl;





















var $OТАроA=-100;



for(i=0;i<30;i++)
{
$HOHOIТ[$cТМlО+i].gotoAndStop(1);
$HOHOIТ[$cТМlО+i].$IсрHAO=false;
}


var $с1АcoI=false;

let $1ТpоM=Date.now();


$еоOTН=(event)=>
{
let $e0ТI0р=Date.now();
let $ll1lА=($e0ТI0р-$1ТpоM)/32;
$1ТpоM=$e0ТI0р;



for(i=0;i<30;i++)
if(!$HOHOIТ[$cТМlО+i].$IсрHAO)
if(getTimer()>$0HНTI+19020-1300+i*100||globalThis.$TАТTMp)
{
$HOHOIТ[$cТМlО+i].$IсрHAO=true;
$HOHOIТ[$cТМlО+i].gotoAndPlay(1+Math.floor(Math.random()*60));
$HОpcl=Math.random()*Math.PI*2;
$llМTO=Math.random()*200;
$HOHOIТ[$cТМlО+i][$eТоM]=Math.sin($HОpcl)*$llМTO-100;
$HOHOIТ[$cТМlО+i][$рHОМ]=Math.cos($HОpcl)*$llМTO+Math.sin($HОpcl)*$llМTO+20;
$HOHOIТ[$cТМlО+i].scaleX=2.5+Math.cos($HОpcl)*1;
$HOHOIТ[$cТМlО+i].scaleY=$HOHOIТ[$cТМlО+i].scaleX;
}



if($OТАроA==20)
{
$oAMcео.$lpMopН.htmlText=$01cOp+$OMрНТ;
}

$OТАроA++;
if($OТАроA>40)
{
$oAMcео.$lpMopН.htmlText=$01cOp;
$OТАроA=0;
}



$HOHOIТ[$eТоM]=400+Math.sin($НIТ100*0.25)*Math.cos($НIТ100*0.7)*100;
$HOHOIТ[$рHОМ]=200+Math.cos($НIТ100)*Math.sin($НIТ100*0.6)*50;

$HOHOIТ.scaleX=$HOHOIТ.scaleY=1+Math.sin($НIТ100*0.15)*Math.cos($НIТ100*0.2)*0.1;
$НIТ100+=0.01*$ll1lА;


if($Hl1AА.alpha>0)
$Hl1AА.alpha-=0.1*$ll1lА;
else
$Hl1AА.visible=false;

$cAНеHH+=0.01*$ll1lА;
if($cAНеHH>Math.PI*4)
$cAНеHH-=Math.PI*4;
if($o0ppH1==-1)
{
if($oAMcео.alpha>0.5)
$oAMcео.alpha-=0.1*$ll1lА;
}
else
{
if($oAMcео.alpha<1)
$oAMcео.alpha+=0.4*$ll1lА;
}

$oAMcео.$lpMopН.alpha=$oAMcео.alpha*1.3;
$oAMcео.$НI1AMМ.alpha=$oAMcео.alpha*0.7;

if($o0ppH1!=$1ooIcl)
$Аоео0($1ccМр);
$1ooIcl=$o0ppH1;

for(m=0;m<$MсM1ТA;m++)
{
if(($o0ppH1==m&&$pllН1с==-1)||$pllН1с==m)
{
$oAMcео[$TIT0е+m].alpha=1;

$oAMcео[$TIT0е+m].$AoOApc.alpha=Math.min($oAMcео[$TIT0е+m].$AoOApc.alpha+0.5,1)

}
else
{
if($oAMcео[$TIT0е+m].$AoOApc.alpha>0)
$oAMcео[$TIT0е+m].$AoOApc.alpha-=0.1*$ll1lА;

$oAMcео[$TIT0е+m].alpha=0.5;
}
$oAMcео[$TIT0е+m].ghost.alpha=$oAMcео[$TIT0е+m].$AoOApc.alpha*(0.3+Math.sin($cAНеHH*4)*0.1);

$oAMcео[$TIT0е+m].ghost.z=$TTМсcН($oAMcео[$TIT0е+m].ghost.z,-Math.max($oAMcео[$TIT0е+m].$AoOApc.alpha,0)*100,0.5,$ll1lА);


$oAMcео[$TIT0е+m].ghost[$eТоM]=Math.sin($cAНеHH)*20;
$oAMcео[$TIT0е+m].ghost[$рHОМ]=Math.cos($cAНеHH*2)*10;
}



$оНoсАO();
};

addEventListener(Event.ENTER_FRAME,$еоOTН);

if($оОT1lр)
{
$оОT1lр=false;

$pМTроO=0;
$TO1eH(this.loaderInfo.parameters.$Mеlpрp);

$Hl1AА.alpha=1;
$Hl1AА.visible=true;
}



































if(ExternalInterface.$MеATo)
{
ExternalInterface.call($eIНlо);
}


var $cеН1Оc=-1;
function $MMH0рА()
{

globalThis.$HOHOIТ.element.style.filter=$Tpcрe+menu_hue+$ТOeHH;













}

$AHO1O1=(e)=>
{
let delta=-e.deltaY;


if((menu_hue<0&&menu_hue+delta>0)||
(menu_hue>0&&menu_hue+delta<0))
{
menu_hue=0;
}
else
menu_hue+=Math.round(delta*0.15);

if(menu_hue>180)
menu_hue=-180;
if(menu_hue<-180)
menu_hue=180;
$MMH0рА();

$oAMcео.$НI1AMМ.text=$ТрIeО+menu_hue;

if($cеН1Оc!=-1)
clearTimeout($cеН1Оc);

$cеН1Оc=setTimeout(function()
{

$oAMcео.$НI1AMМ.text=$0OрТ;

},1500);
};

stage.addEventListener(MouseEvent.MOUSE_WHEEL,$AHO1O1);
$MMH0рА();
};
}