


{
let padding=10;

let w=800-padding*2;
let h=320;

HUD.$lАcТeТ=null;

HUD.$OHMoНe=()=>
{
let mc=HUD.$OНАTOI({[$clе0р]: HUD.$рММеIA,w:w,[$eТоM]:800-w-padding,h:h});

let $MpIсОl=mc.addChild(new TextField());
$MpIсОl[$eТоM]=Math.round(w/2);
$MpIсОl[$рHОМ]=Math.round(6+10);
$MpIсОl.align=$оceO;
$MpIсОl.font=(10*SpriteSheets.text_quality_scale)+$IОIОO;

$MpIсОl.scaleX=
$MpIсОl.scaleY=1/SpriteSheets.text_quality_scale;
$MpIсОl.textColor=$АAТA1;
$MpIсОl.text=$oМTо;

mc.$o1OоMО=$MpIсОl;
















let $10TO0H=180;
let $H0cMOO=20;



mc.$НIAHHo=HUD.$сНМTpI(mc,{
[$eТоM]: padding,
[$рHОМ]: 20,
w: w-padding*2-HUD.$0орНOс,
h: h-20-padding-$H0cMOO-padding,
$сIpIAM: true,

});


mc.addChild(HUD.$oOcНТ({caption:$Mе0pО,color:$АcНрA,[$clе0р]: HUD.$НОlО0А,[$eТоM]:padding,[$рHОМ]:h-$H0cMOO-padding,w:$10TO0H,h:$H0cMOO,action:()=>
{
HUD.$AcМ1Оc();


}}));
mc.addChild(HUD.$oOcНТ({caption:$o0pIO,color:$АcНрA,[$clе0р]: HUD.$НОlО0А,[$eТоM]:padding+$10TO0H+padding,[$рHОМ]:h-$H0cMOO-padding,w:$10TO0H,h:$H0cMOO,action:()=>
{
$ММ.$НеAAO.length=0;
HUD.$1с1МТА();

}}));
mc.addChild(HUD.$oOcНТ({caption:$Mo0cI,color:$АcНрA,[$clе0р]: HUD.$НОlО0А,[$eТоM]:padding+($10TO0H+padding)*2,[$рHОМ]:h-$H0cMOO-padding,w:$10TO0H,h:$H0cMOO,action:()=>
{
HUD.$1с1МТА(true);

}}));
mc.addChild(HUD.$oOcНТ({caption:$AMAрH,color:$АcНрA,[$clе0р]: HUD.$НОlО0А,[$eТоM]:padding+($10TO0H+padding)*3,[$рHОМ]:h-$H0cMOO-padding,w:$10TO0H,h:$H0cMOO,action:()=>
{
HUD.$1с1МТА();

}}));

return mc;
};
HUD.$AcМ1Оc=()=>
{
let mc=globalThis.$сcТAс;


while(mc.$НIAHHo.children.length>0)
mc.$НIAHHo.children[0].remove();

if(HUD.$lАcТeТ)
{
MovieClip.RemoveIfPossible(HUD.$lАcТeТ);
HUD.$lАcТeТ=null;
}

mc.visible=false;
};

HUD.$epрlIo=(ts=Date.now(),$сlМcОo=true)=>
{
let now=new Date(ts);

const hours=now.getHours().toString().padStart(2,$MpoО);
const minutes=now.getMinutes().toString().padStart(2,$MpoО);
const seconds=now.getSeconds().toString().padStart(2,$MpoО);




const $MoМOT=now.toLocaleDateString($НlOlе,{[$MрleО]: $МTTОc});



const $TО0рО=now.getDate();
const $pНАоМO=now.getFullYear();

const $MTHоTl=`${hours}:${minutes}:${seconds}`;
const $IHо1Al=`${$TО0рО} ${$MoМOT} ${$pНАоМO}`;

let $ОрсeAр=$IHо1Al+($сlМcОo ? $0HoА+$MTHоTl : $0OрТ);

return $ОрсeAр;
};

HUD.$1с1МТА=($ТееоТр=false)=>
{
let mc=globalThis.$сcТAс;

while(mc.$НIAHHo.children.length>0)
mc.$НIAHHo.children[0].remove();

mc.$o1OоMО.text=$НсMТc+HUD.$epрlIo()+$eA1O;

let offset=4;
let $MTpсHo=177;

let $oIAI10=false;

function $оTAAIH(obj)
{
let isArray=(obj instanceof Array);
let $pНe=isArray ? $ОеОO1 : $ТMНl;
for(const key in obj)
{
if(obj.hasOwnProperty(key))
{
let v=obj[key];



if((key.startsWith($ОT1Iр)&&!isNaN(parseInt(key.slice($ОT1Iр.length))))||key===$МАТОе)
{
if(v===-1)
v=$соТО;
else
{
if($ОpMрс[v])
v=$ОpMрс[v].model;
else
{
v=$ОoООH+v+$cIАНА;
$oIAI10=true;
}
}
}

if(typeof v===$ср0I||v===null||typeof v===$АOpА||typeof v===$e0IIО)
{
v=JSON.stringify(v);


}
else
if(typeof v===$HНТрp||typeof v===$МОTМ)
{
v=$оTAAIH(v);
}

if(isArray)
$pНe+=`${v},`;
else
$pНe+=`${key}:${v},`;
}
}

if(Object.keys(obj).length>0)
{
$pНe=$pНe.slice(0,-1);
}
$pНe+=isArray ? $MТIОH : $MеAТ;
return $pНe;
}

let time=Date.now();

let $ОНОМТН=$0OрТ;

let $pMАH0A=$0OрТ;
let $рAO1А0=false;
let $сoOIcр=0;
let $lOpоlO=()=>
{
if($рAO1А0)
{
$рAO1А0=false;

if($ТееоТр)
$ОНОМТН+=$MpOеT+$сoOIcр+$1Аоoр+$eocpp;

let t=HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
text: $MpOеT+$сoOIcр+$1Аоoр,
[$eТоM]: 0,
[$рHОМ]: offset,
align: $TcpТ,
color: $сeHIo,
size: 7
});
globalThis.$сcТAс.$НIAHHo.addChild(t);

offset+=20;
}
};

for(let i=0;i<$ММ.$НеAAO.length;i++)
{
let e=$ММ.$НеAAO[i];
$oIAI10=false;

if(e[$clе0р]===$ММ[$еIНpА]||e[$clе0р]===$ММ[$pОIТе])
{
continue;
}

let text=$ММ.$lНАMН[e[$clе0р]].split($OlTеo).join($0OрТ)+$lМе1;

let color=$МMее;

if(!e.$lрHНО)
{
color=$АТcOO;
text=$lМTMc+text;
}

text+=$МeМАT+e[$clе0р];
if(Object.keys(e.$МНМТс).length>0)
text+=$MОТрO+$оTAAIH(e.$МНМТс);


if(text===$pMАH0A)
{
if(!$рAO1А0)
{
$рAO1А0=true;
$сoOIcр=0;
}

$сoOIcр++;

continue;
}
else
{
$lOpоlO();
}
$pMАH0A=text;



if(e.$еApMAО)
text=$АOсTI+Math.floor((time-e.time)/1000)+$с1Оcc+text;
else
text=Math.floor((time-e.time)/1000)+$с1Оcc+text;

if(text.length>2000)
{
$oIAI10=true;
text=text.substring(0,2000)+$ooсoо;
}

if($oIAI10)
color=$eeIоА;

if($ТееоТр)
$ОНОМТН+=text.split($О0Ao0).join($еТMpM)+$О0Ao0;

let $eМHHAc=undefined;
let action=undefined;


if(e.$МНМТс[$eoelp]!==undefined)
{
$eМHHAc=$МеoМA+$ОOAAM(e.$МНМТс[$MTМOO])+$TНAТT+e.$МНМТс[$eoelp]+$еHНОр+e.$МНМТс[$I1Нро]+$eA1O;
action=()=>
{
if(HUD.$lАcТeТ)
{
return;
}
else
HUD.$pре0ll({
[$AHop]: e.$МНМТс[$eoelp],
[$ТplpТ]: e.$МНМТс[$I1Нро]
});
};
}

while(text.length>0)
{
let $МА1eAO=text.substring(0,$MTpсHo);
text=text.substring($MTpсHo);

let t=HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,

text: $МА1eAO,
[$eТоM]: 0,
[$рHОМ]: offset,
align: $TcpТ,
color: color,
size: 7,

action: action,
$eМHHAc: $eМHHAc,
hit_test_area_grow: 2,
$р0ОAАс: $HMO1Т
});
globalThis.$сcТAс.$НIAHHo.addChild(t);

offset+=8;
}

offset+=2;
}
$lOpоlO();

if($ТееоТр)
{
const $ОpоpТО=window.open($0OрТ,$рcl0);

if(!$ОpоpТО){
alert($оТеop);
return;
}

function $HlАТАI($ОOA1М){
const $еНеНpT=document.createElement($llToр);
$еНеНpT.textContent=$ОOA1М;
return $еНеНpT.innerHTML;
}


$ОpоpТО.document.open();
$ОpоpТО.document.write($TММeO+mc.$o1OоMО.text+$e1lOO+
$еlАcc+mc.$o1OоMО.text+$eocpp+$HlАТАI($ОНОМТН)+$ТМоOО);
}
};

HUD.$pре0ll=(params)=>
{

let $AрТc1c=stage.children.indexOf(myCursor._sprite);

let padding=4;
let $1lеOAo=16;

let w=padding*2+$1lеOAo*7;

if($ММ.$ppO0l[$сpo0M])
w+=$1lеOAo*1.5+padding;

let mc=stage.addChildAt(HUD.$OНАTOI({[$clе0р]: HUD.$HOAAоM,w:w,h:$1lеOAo+padding*2,[$eТоM]:mouseX,[$рHОМ]:mouseY}),$AрТc1c);

if(mc[$eТоM]+w>800-10)
mc[$eТоM]=800-10-w;

HUD.$oMp0c({parent: mc,$оНHlH:()=>params[$AHop],$TlIро:()=>params[$ТplpТ],
$IсleT:padding,$AТeMMр:padding,$0HHpТH:params.$0HHpТH,$lAoТoH:params.$lAoТoH,
$ОО1есo: params.$ОО1есo
});

HUD.$lАcТeТ=mc;

let $МНТ0ОH=()=>
{
if(HUD.$lАcТeТ)
{
if(!HUD.$lАcТeТ.hitTestPoint($еT0рTр,$оTО10T))
{
MovieClip.RemoveIfPossible(HUD.$lАcТeТ);
HUD.$lАcТeТ=null;

removeEventListener(MouseEvent.MOUSE_DOWN,$МНТ0ОH);
}
}
else
removeEventListener(MouseEvent.MOUSE_DOWN,$МНТ0ОH);
};

addEventListener(MouseEvent.MOUSE_DOWN,$МНТ0ОH);
};
}