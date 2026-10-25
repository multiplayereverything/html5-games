

var $АТII1=null;
$АТII1=[];

var $pOMol=0;
var $НOoАO=new Set();

var $oepМ1=[-1,-1];

{
const $НpНoс=(v)=>
{
return Math.floor(v);
};
const $о1cрI=(v)=>
{
return Math.max(0,Math.floor(v));
};
const Number=(v)=>
{
return parseFloat(v);
};

const $eАеА0=(v,$0сlТp=10)=>
{
if(typeof v===$ср0I)
{
v=parseInt(v,$0сlТp);

if(isNaN(v))
v=0;
}
return v;
};

const $lcAОТ=()=>
{
if($pMМ1)
if($ММ[$OpНpp])
if($ММ[$OpНpp][$pеoоO]!==null)
return false;

return true;
};

function $pАTIТ(a,$e1o1А=false)
{

















if(currentLabel===$АОеe)
{
let $оoTсO=[[a,0]];

{
let a=-48;
let $рМHо=-55;

let $pАTIТ=($0ApTо)=>
{
$оoTсO.push([$0ApTо,0]);
};

while($оoTсO.length>0)
{
try
{
if($оoTсO.length>2048)

{
throw new Error($рo0c);
}

let ptr=$оoTсO[$оoTсO.length-1];

a=ptr[0];
$рМHо=ptr[1];






if($eННА[a]===undefined||$eННА[a]===null)
{
$е10Oс(new Error(),$cAoр+$pOMol);
$оoTсO.pop();
continue;
}
else
{
if($рМHо===0)
{
if($cерAc)
trace($H1oo+a+$еТHM);

if($eННА[a].$oOlОO&&($eННА[a].$cААТ1==-1||$eННА[a].$cААТ1>0))
{

}
else
{
$оoTсO.pop();
continue;
}
}


if($рМHо<$eННА[a].$0ор1e)
{
let $ОIo1o=$eННА[a].$Тp1M[$рМHо];
let $сp0pН=$eННА[a].$lМe0Т[$рМHо];

if($cерAc)
trace($HHНl+$рМHо+$TМсA+$eННА[a].$НT0еM[$рМHо],$eННА[a].$Тp1M[$рМHо],$eННА[a].$lМe0Т[$рМHо]);


let $ееeМp=$АТII1 ? performance.now(): 0;

let $IOoHА=$eННА[a].$НT0еM[$рМHо];

switch($IOoHА)
{
case 0:


$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);







$АAHОе[$eННА[a].$Тp1M[$рМHо]][$lо0HH]=$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM];
$АAHОе[$eННА[a].$Тp1M[$рМHо]][$еоOOА]=$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ];
$АAHОе[$eННА[a].$Тp1M[$рМHо]].$1TIeе=true;

if($АAHОе[$eННА[a].$Тp1M[$рМHо]].$рpHeМ)
if($АAHОе[$eННА[a].$Тp1M[$рМHо]].$рНIMp)

$оp0Нc($1OоАO,
$АAHОе[$eННА[a].$Тp1M[$рМHо]][$eТоM]+$АAHОе[$eННА[a].$Тp1M[$рМHо]].w/2,
$АAHОе[$eННА[a].$Тp1M[$рМHо]][$рHОМ]+$АAHОе[$eННА[a].$Тp1M[$рМHо]].h/2,
$АAHОе[$eННА[a].$Тp1M[$рМHо]]);

break;
case 1:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=parseFloat($eННА[a].$lМe0Т[$рМHо]);

$АAHОе[$eННА[a].$Тp1M[$рМHо]].$oec0O=$eННА[a].$lМe0Т[$рМHо];
break;
case 2:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$HсTНe[$eННА[a].$Тp1M[$рМHо]][$eТоM]=$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM];
$HсTНe[$eННА[a].$Тp1M[$рМHо]][$рHОМ]=$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ];
break;
case 3:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$сoopT[$eННА[a].$Тp1M[$рМHо]][$МIIро]=$сoopT[$eННА[a].$Тp1M[$рМHо]][$МIIро]/$сoopT[$eННА[a].$Тp1M[$рМHо]].hmax*100*$eННА[a].$lМe0Т[$рМHо];
break;
case 4:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

if(!$lcAОТ())
break;

if(!$0Ме1А[$eННА[a].$Тp1M[$рМHо]].$оeoТе)
$0Ме1А[$eННА[a].$Тp1M[$рМHо]][$МIIро]=$0Ме1А[$eННА[a].$Тp1M[$рМHо]].hmax/100*$eННА[a].$lМe0Т[$рМHо];
break;
case 5:
$eННА[a].$Тp1M[$рМHо]=parseFloat($eННА[a].$Тp1M[$рМHо]);


gravity=$eННА[a].$Тp1M[$рМHо];
break;
case 6:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

for($Осрcр=0;$Осрcр<$eсАeA;$Осрcр++)
if($0Ме1А[$Осрcр].io)
{
if($0Ме1А[$Осрcр].$eoОpА>0&&$0Ме1А[$Осрcр][$МIIро]>0)
{
if($0Ме1А[$Осрcр][$eТоM]>$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM])
if($0Ме1А[$Осрcр][$eТоM]<$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w)
if($0Ме1А[$Осрcр][$рHОМ]>$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ])
if($0Ме1А[$Осрcр][$рHОМ]<$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h)
{
if(!$pMМ1||$НAlНc==$Осрcр||!$0Ме1А[$Осрcр].$HМ0М1)
{

$0Ме1А[$Осрcр][$МIIро]-=$eННА[a].$Тp1M[$рМHо];

$0Ме1А[$Осрcр].$НHоАH=$АAНHe;

$0Ме1А[$Осрcр].$1МI0р=$oеAIН;
}
}
}
else
{
if($Il[$0Ме1А[$Осрcр].$MОеМ1]>$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM])
if($Il[$0Ме1А[$Осрcр].$MОеМ1]<$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w)
if($0OA[$0Ме1А[$Осрcр].$MОеМ1]>$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ])
if($0OA[$0Ме1А[$Осрcр].$MОеМ1]<$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h)
{
if(!$pMМ1||$НAlНc==$Осрcр||!$0Ме1А[$Осрcр].$HМ0М1)
{

$0Ме1А[$Осрcр][$МIIро]-=$eННА[a].$Тp1M[$рМHо];

$0Ме1А[$Осрcр].$НHоАH=$АAНHe;


}
}
}
}
break;
case 7:

$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);

if(!$еHоНH)
if($AAсAр==$Аcle)
if(!$pMМ1)
{
for($cpОlТ=0;$cpОlТ<$eсАeA;$cpОlТ++)
if($0Ме1А[$cpОlТ].io)
{
ok=false;

$cOToA();


if($0Ме1А[$cpОlТ].char==1&&($НAlНc==$cpОlТ||$0Ме1А[$НAlНc].char!=1))
{
$ll11o=[];
ok=true;
}

if($0Ме1А[$cpОlТ].char==3&&($НAlНc==$cpОlТ||$0Ме1А[$НAlНc].char!=3))
{
$AАcco=[];
ok=true;
}
if(ok)
{
for($Осрcр=0;$Осрcр<$cс0Hс;$Осрcр++)
if($ОpMрс[$Осрcр].io)
if($ОpMрс[$Осрcр].picken_by===$cpОlТ)
if(!$ОpMрс[$Осрcр].$соТAТ)
{
if($0Ме1А[$cpОlТ].char==1)
{

$оlleА($ОpMрс[$Осрcр].model,$ОpMрс[$Осрcр].upg);
}
if($0Ме1А[$cpОlТ].char==3)
{

$OОМHН($ОpMрс[$Осрcр].model,$ОpMрс[$Осрcр].upg);
}
}
}
}









if($lсосТ==$HHolА)
{
$HHolА++;
}
LEVEL_POINTER++;

if($ТeeAo>=5)
{
ok=true;
for($AMTT1=0;$AMTT1<$ТeeAo;$AMTT1++)
if($еоНМо[$AMTT1][$МIIро]>0)
{
ok=false;
}
if(ok)
$роHlс(6);
}

$AMTT1=0;

if($lсосТ==41)
{
if(!$НOIHo)
{
$роHlс(12);

$AMTT1+=10000;
}
}

if($OАМАO)
$роHlс(16);

if($ТH0Tе<1||$I0рce<1||$Мe00о<1)
$AMTT1+=300;

if($ТH0Tе==0)
if(!$НOIHo)
$роHlс(21);

if($Мe00о==0)
$роHlс(10);




if($I0рce<1)
$I0рce=1;

$AMTT1+=Math.ceil(($Мe00о*8+$р0ТoI)+($АTсре/$I0рce)*80);


if($АTсре>=100)
if($АTсре>$I0рce*5)
$роHlс(22);


if($lсосТ!=41)
if($AMTT1>500)
$AMTT1=500;

if(!$0eосA)
$AMTT1=0;
else
$ОpOc0($МТНОc,$lсосТ);

$cррсО+=$AMTT1;


$IеOАT();

$lсосТ++;

$AAсAр=$c0еТ;

$MАTOc=1;

$Hl1AА.alpha=0;
$Hl1AА.visible=true;

$Аоео0($eIрoс);
}


break;
case 8:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);
break;
case 9:



$Hl1AА.visible=true;



$Т1рcН=$рITАM($eННА[a].$Тp1M[$рМHо]);
$AAсAр=$соOO;

if($pMМ1)
{
$ММ.$рОеAо();
$pMМ1=false;
}
break;
case 10:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

for($Осрcр=0;$Осрcр<$eсАeA;$Осрcр++)
if($0Ме1А[$Осрcр].io)
{
if($0Ме1А[$Осрcр].$eoОpА>0&&$0Ме1А[$Осрcр][$МIIро]>0)
{
if($0Ме1А[$Осрcр][$eТоM]>$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM])
if($0Ме1А[$Осрcр][$eТоM]<$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w)
if($0Ме1А[$Осрcр][$рHОМ]>$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ])
if($0Ме1А[$Осрcр][$рHОМ]<$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h)
{
$0Ме1А[$Осрcр].$eoОpА-=$eННА[a].$Тp1M[$рМHо]*0.1;
}
}
else
{
if($Il[$0Ме1А[$Осрcр].$MОеМ1]>$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM])
if($Il[$0Ме1А[$Осрcр].$MОеМ1]<$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w)
if($0OA[$0Ме1А[$Осрcр].$MОеМ1]>$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ])
if($0OA[$0Ме1А[$Осрcр].$MОеМ1]<$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h)
{
$0Ме1А[$Осрcр].$eoОpА-=$eННА[a].$Тp1M[$рМHо]*0.1;
}
}
}
break;
case 11:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

for($Осрcр=0;$Осрcр<$eсАeA;$Осрcр++)
if($0Ме1А[$Осрcр].io)
if($0Ме1А[$Осрcр][$cАocе]!=$0Ме1А[$eННА[a].$Тp1M[$рМHо]][$cАocе])
{
if($0Ме1А[$Осрcр].$eoОpА>0&&$0Ме1А[$Осрcр][$МIIро]>0)
{
if($0Ме1А[$Осрcр][$eТоM]>$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM])
if($0Ме1А[$Осрcр][$eТоM]<$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w)
if($0Ме1А[$Осрcр][$рHОМ]>$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ])
if($0Ме1А[$Осрcр][$рHОМ]<$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h)
{
$0Ме1А[$Осрcр][$МIIро]=0;
}
}
else
{
if($Il[$0Ме1А[$Осрcр].$MОеМ1]>$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM])
if($Il[$0Ме1А[$Осрcр].$MОеМ1]<$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w)
if($0OA[$0Ме1А[$Осрcр].$MОеМ1]>$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ])
if($0OA[$0Ме1А[$Осрcр].$MОеМ1]<$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h)
{
$0Ме1А[$Осрcр][$МIIро]=0;
}
}
}
break;
case 12:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

for($Осрcр=0;$Осрcр<$TТlАM;$Осрcр++)
if($сoopT[$Осрcр][$МIIро]>0)
{
if($сoopT[$Осрcр][$eТоM]>$HсTНe[$eННА[a].$Тp1M[$рМHо]][$eТоM])
if($сoopT[$Осрcр][$eТоM]<$HсTНe[$eННА[a].$Тp1M[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$Тp1M[$рМHо]].w)
if($сoopT[$Осрcр][$рHОМ]>$HсTНe[$eННА[a].$Тp1M[$рМHо]][$рHОМ])
if($сoopT[$Осрcр][$рHОМ]<$HсTНe[$eННА[a].$Тp1M[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$Тp1M[$рМHо]].h)
{
$сoopT[$Осрcр][$МIIро]=0;
}
}

break;
case 13:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);



if($0Ме1А[$eННА[a].$Тp1M[$рМHо]][$МIIро]>0)
{
if($0Ме1А[$eННА[a].$Тp1M[$рМHо]].$HНрНТ!=-1)
$МTMcе($0Ме1А[$eННА[a].$Тp1M[$рМHо]].$HНрНТ,true);

if($сoopT[$eННА[a].$lМe0Т[$рМHо]].$OOHAТ!=-1)
$МTMcе($eННА[a].$lМe0Т[$рМHо],true);
$OcАe1($eННА[a].$Тp1M[$рМHо],$eННА[a].$lМe0Т[$рМHо],true);
}

break;
case 14:
{

let $еHеАA=(!$pMМ1&&!$еHоНH);

$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);


if(!$0Ме1А[$eННА[a].$Тp1M[$рМHо]].io)
break;

$Т0TpA=$0Ме1А[$eННА[a].$Тp1M[$рМHо]];
if($Т0TpA[$МIIро]>0)
{
let tx=$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w/2;
let ty=$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h/2;

if($еHеАA)
{
ty+=0+$Т0TpA.sit*$р1OIe*$Т0TpA.scale;
}

if($Т0TpA.$eoОpА>0)
{
u=tx-$Т0TpA[$eТоM];
v=ty-$Т0TpA[$рHОМ];
}
else
{
u=tx-$Il[$Т0TpA.$MОеМ1];
v=ty-40*$Т0TpA.scale-$0OA[$Т0TpA.$MОеМ1];
}

$Т0TpA[$eТоM]=tx;
$Т0TpA[$рHОМ]=ty;


if($eННА[a].$Тp1M[$рМHо]==$НAlНc)
if($ОMOTе!==-1||!$00pеH)
{
game[$eТоM]+=u;
game[$рHОМ]+=v;
game.clearMCInterpolationData();
graphics_3d.clearMCInterpolationData();
graphics_3d_front.clearMCInterpolationData();
}


for($AMTT1=0;$AMTT1<$pООро;$AMTT1++)
if($о1oHМ[$AMTT1]==$eННА[a].$Тp1M[$рМHо])
{
$Il[$AMTT1]+=u;
$0OA[$AMTT1]+=v;

$IcМMc[$AMTT1]+=u;
$MA0е1[$AMTT1]+=v;

if($еHеАA)
{
$OTpc1[$AMTT1]*=0.9;
$IрТ0H[$AMTT1]*=0.9;
}
}

if($еHеАA)
{
$Т0TpA[$АсТOе]=$Т0TpA[$АсТOе]*0.9+1*0.1;
$Т0TpA[$МcеAH]=$Т0TpA[$МcеAH]*0.9+1*0.1;
$Т0TpA.$eoОpА=$Т0TpA.$eoОpА*0.9+1*0.1;
}
}
}
break;
case 15:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$Т0TpA=$ОpMрс[$eННА[a].$Тp1M[$рМHо]];
if($Т0TpA.picken_by!=-1)
{
if($0Ме1А[$Т0TpA.picken_by][$МАТОе]==$eННА[a].$Тp1M[$рМHо])
$0Ме1А[$Т0TpA.picken_by][$МАТОе]=-1;

$Т0TpA.picken_by=-1;
}
$Т0TpA[$eТоM]=$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w/2;
$Т0TpA[$рHОМ]=$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h/2;

$OTpc1[$Т0TpA.$c0НlТ]=0;
$IрТ0H[$Т0TpA.$c0НlТ]=0;


$0Н0Тl($Т0TpA.$c0НlТ);

$Il[$Т0TpA.$c0НlТ]=$Т0TpA[$eТоM]-10;
$0OA[$Т0TpA.$c0НlТ]=$Т0TpA[$рHОМ];

$IcМMc[$Т0TpA.$c0НlТ]=$Il[$Т0TpA.$c0НlТ];
$MA0е1[$Т0TpA.$c0НlТ]=$0OA[$Т0TpA.$c0НlТ];

$OTpc1[$Т0TpA.$рееоp]=0;
$IрТ0H[$Т0TpA.$рееоp]=0;


$0Н0Тl($Т0TpA.$рееоp);

$Il[$Т0TpA.$рееоp]=$Т0TpA[$eТоM]+10;
$0OA[$Т0TpA.$рееоp]=$Т0TpA[$рHОМ];

$IcМMc[$Т0TpA.$рееоp]=$Il[$Т0TpA.$рееоp];
$MA0е1[$Т0TpA.$рееоp]=$0OA[$Т0TpA.$рееоp];
break;
case 16:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$Т0TpA=$еоНМо[$eННА[a].$Тp1M[$рМHо]];
if($Т0TpA[$МIIро]>0)
{
$Т0TpA[$eТоM]=$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w/2;
$Т0TpA[$рHОМ]=$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h/2;


$IcМMc[$Т0TpA.$oA0cА]=$Т0TpA[$eТоM]-5;
$IcМMc[$Т0TpA.$cIToе]=$Т0TpA[$eТоM]+5;
$IcМMc[$Т0TpA.$ATМHl]=$Т0TpA[$eТоM]+5;
$IcМMc[$Т0TpA.$lМeOМ]=$Т0TpA[$eТоM]-5;

$MA0е1[$Т0TpA.$oA0cА]=$Т0TpA[$рHОМ]-13;
$MA0е1[$Т0TpA.$cIToе]=$Т0TpA[$рHОМ]-13;
$MA0е1[$Т0TpA.$ATМHl]=$Т0TpA[$рHОМ]+13;
$MA0е1[$Т0TpA.$lМeOМ]=$Т0TpA[$рHОМ]+13;

$Il[$Т0TpA.$oA0cА]=$Т0TpA[$eТоM]-5;
$Il[$Т0TpA.$cIToе]=$Т0TpA[$eТоM]+5;
$Il[$Т0TpA.$ATМHl]=$Т0TpA[$eТоM]+5;
$Il[$Т0TpA.$lМeOМ]=$Т0TpA[$eТоM]-5;

$0OA[$Т0TpA.$oA0cА]=$Т0TpA[$рHОМ]-13;
$0OA[$Т0TpA.$cIToе]=$Т0TpA[$рHОМ]-13;
$0OA[$Т0TpA.$ATМHl]=$Т0TpA[$рHОМ]+13;
$0OA[$Т0TpA.$lМeOМ]=$Т0TpA[$рHОМ]+13;

$OTpc1[$Т0TpA.$oA0cА]=0;
$OTpc1[$Т0TpA.$cIToе]=0;
$OTpc1[$Т0TpA.$ATМHl]=0;
$OTpc1[$Т0TpA.$lМeOМ]=0;

$IрТ0H[$Т0TpA.$oA0cА]=0;
$IрТ0H[$Т0TpA.$cIToе]=0;
$IрТ0H[$Т0TpA.$ATМHl]=0;
$IрТ0H[$Т0TpA.$lМeOМ]=0;
}
break;
case 17:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);


break;
case 18:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$HсTНe[$eННА[a].$Тp1M[$рМHо]][$eТоM]=$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w/2+$HсTНe[$eННА[a].$Тp1M[$рМHо]].w/2;
$HсTНe[$eННА[a].$Тp1M[$рМHо]][$рHОМ]=$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h/2+$HсTНe[$eННА[a].$Тp1M[$рМHо]].h/2;
break;
case 19:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$eННА[$eННА[a].$Тp1M[$рМHо]].$oOlОO=false;
break;
case 20:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$eННА[$eННА[a].$Тp1M[$рМHо]].$oOlОO=true;
break;
case 21:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$eННА[$eННА[a].$Тp1M[$рМHо]].$cААТ1=0;
break;
case 22:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$eННА[$eННА[a].$Тp1M[$рМHо]].$cААТ1=$eННА[a].$lМe0Т[$рМHо];
break;
case 23:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$0Ме1А[$eННА[a].$Тp1M[$рМHо]][$МIIро]=$eННА[a].$lМe0Т[$рМHо];
break;
case 24:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);


$рM1lМ($HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w/2,
$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h/2,
Math.abs($eННА[a].$Тp1M[$рМHо]*5),
$eННА[a].$Тp1M[$рМHо]*0.6,
Math.max(0,$eННА[a].$Тp1M[$рМHо]*10),-1,
$AMec);


if($eННА[a].$Тp1M[$рМHо]>=0)
$AеpАp($HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w/2,
$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h/2);

break;
case 25:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);



$o0IсО[$eННА[a].$Тp1M[$рМHо]].$oOlОO=true;

break;
case 26:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$o0IсО[$eННА[a].$Тp1M[$рМHо]].$oOlОO=false;

break;
case 27:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$o0IсО[$eННА[a].$Тp1M[$рМHо]].$cTOHl=$eННА[a].$lМe0Т[$рМHо];




break;
case 28:
case 53:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

if(!$0Ме1А[$eННА[a].$Тp1M[$рМHо]].io)
break;

let $eMOАе=$0Ме1А[$eННА[a].$Тp1M[$рМHо]];

let $opOpТ=game.addChildAt(new player,game.numChildren);
$сOoНН($opOpТ);

let $0ОoHс=0;
let ok;
let u,v;

if($eННА[a].$lМe0Т[$рМHо]<0)
{
ok=true;
$AMTT1=-$eННА[a].$lМe0Т[$рМHо];
}
else
{
ok=false;
u=$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w/2;
v=$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h/2;
}

if($eННА[a].$НT0еM[$рМHо]==53)
{
ok=true;
$AMTT1=$eННА[a].$lМe0Т[$рМHо];
}

let $MрHpА=0;
while(ok)
{
$MрHpА+=1;
if($MрHpА>10000)
{
break;
}
ok=true;

u=$HсTНe[$AMTT1][$eТоM]+Math.random()*$HсTНe[$AMTT1].w;
v=$lMМoc+($оpl1Т-$lMМoc)*Math.random();



if($0oеcН(u,v))
if(!$0oеcН(u,v+100))
{

ok=false;
}

for(i2=0;i2<$оTolТ;i2++)
if(u>$ММoОo[i2]-100)
if(u<$ММoОo[i2]+$р1lMр[i2]+100)
if(v>$11ТоО[i2]-100)
if(v<$11ТоО[i2]+$coТНp[i2]+100)
{
trace($AHрc);
ok=true;
}
if($0Ме1А[$НAlНc][$cАocе]!==$eMOАе[$cАocе])
if($НOНОН(u,v,$0Ме1А[$НAlНc][$eТоM],$0Ме1А[$НAlНc][$рHОМ])<400)
{
if($0ОoHс<10)
{
trace($A01О);
ok=true;
$0ОoHс++;
}
}
}



$opOpТ[$eТоM]=parseFloat(u);
$opOpТ[$рHОМ]=parseFloat(v);

$cНе0I($opOpТ,$eMOАе[$МIIро],$eMOАе.hmax);
$ТTTTH($opOpТ,$eMOАе.scale);

$opOpТ[$АсТOе]=0;
$opOpТ[$МcеAH]=0;
$opOpТ.$MAНIp=$eMOАе.$MAНIp;

$opOpТ.antigravity=$eMOАе.antigravity;
$opOpТ.$oIМАp=$eMOАе.$oIМАp;
$opOpТ.$ОАpМО=$eMOАе.$ОАpМО;
$opOpТ.$AOсоМ=$eMOАе.$AOсоМ;
$opOpТ[$lоАо]=$eMOАе[$lоАо];
$opOpТ.$оlсTН=$eMOАе.$оlсTН;

$opOpТ.gui.$pеMHH.text=$eMOАе.gui.$pеMHH.text;
$opOpТ[$оIpl]=$eMOАе[$оIpl];

$opOpТ[$cАocе]=parseFloat($eMOАе[$cАocе]);

if($opOpТ[$cАocе]!=$0Ме1А[$НAlНc][$cАocе])
$opOpТ.gui.visible=false;

$ОTсcО($opOpТ);

$opOpТ.$Нр01I=$eMOАе.$Нр01I;

$opOpТ.$ееоАН=parseFloat($eMOАе.$ееоАН);

$opOpТ[$lо0HH]=$opOpТ[$eТоM]+$opOpТ.$ееоАН*100;
$opOpТ[$еоOOА]=$opOpТ[$рHОМ];


$opOpТ[$0OАс]=parseFloat($eMOАе[$0OАс]);


$opOpТ.$HНрНТ=parseFloat(-1);

$opOpТ.char=($eMOАе.char);

$opOpТ.$AААH1=($eMOАе.$AААH1);
$opOpТ.$сТlAМ=($eMOАе.$сТlAМ);
$opOpТ.$ТIpec=($eMOАе.$ТIpec);

$opOpТ.$НOоМO=($eMOАе.$НOоМO);
$opOpТ.$ОIMОo=($eMOАе.$ОIMОo);
$opOpТ.$cHАoс=($eMOАе.$cHАoс);

$opOpТ.$Hlppе=($eMOАе.$Hlppе);
$opOpТ.$Аc01о=($eMOАе.$Аc01о);

$opOpТ.$ТрH0c=($eMOАе.$ТрH0c);
$opOpТ.$ОАOрр=($eMOАе.$ОАOрр);

$opOpТ.$A0АоА=($eMOАе.$A0АоА);
$opOpТ.$THMcM=($eMOАе.$THMcM);
$opOpТ.$lOeНc=($eMOАе.$lOeНc);



if($eMOАе.$АсIее.lower.$оАОНА!=null)
$opOpТ.$АсIее.lower.$оАОНА.visible=$eMOАе.$АсIее.lower.$оАОНА.visible;
if($eMOАе.$ТНpТI.lower.$оАОНА!=null)
$opOpТ.$ТНpТI.lower.$оАОНА.visible=$eMOАе.$ТНpТI.lower.$оАОНА.visible;


$opOpТ.$Alр10=$eMOАе.$Alр10;
$opOpТ.$оМcHM=$eMOАе.$оМcHM;
$opOpТ.$рМMоО=$eMOАе.$рМMоО;


$opOpТ[$leAсO]=$eMOАе[$leAсO];

$opOpТ.$1МOОM=$eMOАе.$1МOОM;

$р00Ap($opOpТ[$eТоM],$opOpТ[$рHОМ]-41,$1cМоо.$АMHоA,0,0);

$AOеоО($opOpТ);
$cеНlН=$opOpТ.$MeсНе;
if($eMOАе[$МАТОе]!=-1)
{
$HОpcl=$opOpТ[$eТоM];
$llМTO=$opOpТ[$рHОМ];
$eMOАе=$ОpMрс[$eMOАе[$МАТОе]];











$opOpТ=$еАеО1($eMOАе.model,$eMOАе);



$0Ме1А[$cеНlН][$МАТОе]=$opOpТ.$MeсНе;
$opOpТ.picken_by=$cеНlН;
$0Ме1А[$cеНlН].$АсIее.lower.$оАОНА.visible=false;
$0Ме1А[$cеНlН].$ТНpТI.lower.$оАОНА.visible=false;

$opOpТ.$HMОН0=$eMOАе.$HMОН0;
$opOpТ.$clосT=$eMOАе.$clосT;
$opOpТ.$сОс0М=$eMOАе.$сОс0М;
$opOpТ.$1OНМо=$eMOАе.$1OНМо;
$opOpТ.$oТоAр=$eMOАе.$oТоAр;
$opOpТ[$clcре]=$eMOАе[$clcре];
$opOpТ.$1MAеT=$eMOАе.$1MAеT;
$opOpТ.$oelAe=$eMOАе.$oelAe;
$opOpТ.$соТAТ=$eMOАе.$соТAТ;
$opOpТ.$1l1TO=$eMOАе.$1l1TO;
}

}
break;
case 29:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);


for($Осрcр=0;$Осрcр<$eсАeA;$Осрcр++)
if($0Ме1А[$Осрcр].io)
if($0Ме1А[$Осрcр][$cАocе]!=$0Ме1А[$eННА[a].$Тp1M[$рМHо]][$cАocе])
{
if($0Ме1А[$Осрcр].$eoОpА>0&&$0Ме1А[$Осрcр][$МIIро]>0)
{
if($0Ме1А[$Осрcр][$eТоM]>$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM])
if($0Ме1А[$Осрcр][$eТоM]<$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w)
if($0Ме1А[$Осрcр][$рHОМ]>$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ])
if($0Ме1А[$Осрcр][$рHОМ]<$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h)
{
if($0Ме1А[$Осрcр][$0MТce]==-1)
$0Ме1А[$Осрcр][$0MТce]=$eННА[a].$Тp1M[$рМHо];
}
}
else
{
if($Il[$0Ме1А[$Осрcр].$MОеМ1]>$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM])
if($Il[$0Ме1А[$Осрcр].$MОеМ1]<$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w)
if($0OA[$0Ме1А[$Осрcр].$MОеМ1]>$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ])
if($0OA[$0Ме1А[$Осрcр].$MОеМ1]<$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h)
{
if($0Ме1А[$Осрcр][$0MТce]==-1)
$0Ме1А[$Осрcр][$0MТce]=$eННА[a].$Тp1M[$рМHо];
}
}
}
break;
case 30:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

for($Осрcр=0;$Осрcр<$eсАeA;$Осрcр++)
if($0Ме1А[$Осрcр].io)
if($0Ме1А[$Осрcр][$eТоM]>$HсTНe[$eННА[a].$Тp1M[$рМHо]][$eТоM])
if($0Ме1А[$Осрcр][$eТоM]<$HсTНe[$eННА[a].$Тp1M[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$Тp1M[$рМHо]].w)
if($0Ме1А[$Осрcр][$рHОМ]>$HсTНe[$eННА[a].$Тp1M[$рМHо]][$рHОМ])
if($0Ме1А[$Осрcр][$рHОМ]<$HсTНe[$eННА[a].$Тp1M[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$Тp1M[$рМHо]].h)
{
let $Т0TpA=$0Ме1А[$Осрcр];
if($Т0TpA[$МIIро]>0)
{






u=$Il[$Т0TpA.$MОеМ1]-($HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w/2);
v=$0OA[$Т0TpA.$MОеМ1]-($HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h/2);

if($HсTНe[$eННА[a].$Тp1M[$рМHо]].w===$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w)
if($HсTНe[$eННА[a].$Тp1M[$рМHо]].h===$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h)
{
u=$HсTНe[$eННА[a].$Тp1M[$рМHо]][$eТоM]-$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM];
v=$HсTНe[$eННА[a].$Тp1M[$рМHо]][$рHОМ]-$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ];
}

if($Осрcр==$НAlНc)
if($ОMOTе!==-1||!$00pеH)
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

if($IТoHT())
{
$IcМMc[$AMTT1]-=u;
$MA0е1[$AMTT1]-=v;
}

$pМ1Аe($AMTT1);
}
$р00Ap($Т0TpA[$eТоM],$Т0TpA[$рHОМ]-41,$1cМоо.$АMHоA,0,0);

$Т0TpA[$eТоM]-=u;
$Т0TpA[$рHОМ]-=v;

$р00Ap($Т0TpA[$eТоM],$Т0TpA[$рHОМ]-41,$1cМоо.$АMHоA,0,0);

$Т0TpA.$ОНMIА();
}
}
}
break;
case 31:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

for($Осрcр=0;$Осрcр<$eсАeA;$Осрcр++)
if($0Ме1А[$Осрcр].io)
if($0Ме1А[$Осрcр][$eТоM]>$HсTНe[$eННА[a].$Тp1M[$рМHо]][$eТоM])
if($0Ме1А[$Осрcр][$eТоM]<$HсTНe[$eННА[a].$Тp1M[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$Тp1M[$рМHо]].w)
if($0Ме1А[$Осрcр][$рHОМ]>$HсTНe[$eННА[a].$Тp1M[$рМHо]][$рHОМ])
if($0Ме1А[$Осрcр][$рHОМ]<$HсTНe[$eННА[a].$Тp1M[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$Тp1M[$рМHо]].h)
{
let $Т0TpA=$0Ме1А[$Осрcр];
if($Т0TpA[$МIIро]>0)
{






u=$Il[$Т0TpA.$MОеМ1]-($HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w/2);
v=$0OA[$Т0TpA.$MОеМ1]-($HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h/2);

if($Осрcр==$НAlНc)
if($ОMOTе!==-1||!$00pеH)
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

if($IТoHT())
{
$IcМMc[$AMTT1]-=u;
$MA0е1[$AMTT1]-=v;
}

$OTpc1[$AMTT1]=-$OTpc1[$AMTT1];

$pМ1Аe($AMTT1);
}
$р00Ap($Т0TpA[$eТоM],$Т0TpA[$рHОМ]-41,$1cМоо.$АMHоA,0,0);

$Т0TpA[$eТоM]-=u;
$Т0TpA[$рHОМ]-=v;

$Т0TpA[$АсТOе]=-$Т0TpA[$АсТOе];
$Т0TpA.$ееоАН=-$Т0TpA.$ееоАН;

$р00Ap($Т0TpA[$eТоM],$Т0TpA[$рHОМ]-41,$1cМоо.$АMHоA,0,0);

$Т0TpA.$ОНMIА();
}
}
}
break;
case 32:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);


$0Ме1А[$eННА[a].$Тp1M[$рМHо]][$leAсO]=$eННА[a].$lМe0Т[$рМHо];




break;
case 33:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);


if($0Ме1А[$eННА[a].$Тp1M[$рМHо]].io)
{
$0Ме1А[$eННА[a].$Тp1M[$рМHо]][$cАocе]=$eННА[a].$lМe0Т[$рМHо];

$pНTс1($0Ме1А[$eННА[a].$Тp1M[$рМHо]]);

$AOеоО($0Ме1А[$eННА[a].$Тp1M[$рМHо]]);

for(let $AMTT1=0;$AMTT1<$eсАeA;$AMTT1++)
if($0Ме1А[$AMTT1].io)
$ОTсcО($0Ме1А[$AMTT1]);
}
}
break;
case 34:
{

let $Т0TpA=$AAрlТ[$eАеА0($eННА[a].$Тp1M[$рМHо])];
if(
$Т0TpA.currentFrameLabel!==$eННА[a].$lМe0Т[$рМHо]
||
(
$1НО1c($Т0TpA,$eННА[a].$lМe0Т[$рМHо])
&&
$Т0TpA.$АААо0.visible
)
)
{
if($Т0TpA.$ОApеl)
$Т0TpA.$ОApеl();

if($1НО1c($Т0TpA,$eННА[a].$lМe0Т[$рМHо]))
{
$Т0TpA.gotoAndStop($eННА[a].$lМe0Т[$рМHо]);
$Т0TpA.$АААо0.visible=false;
}
else
{
$Т0TpA.$АААо0.visible=true;

var model=$eННА[a].$lМe0Т[$рМHо];
let bitmap_data=null;

if(model.length>1)
if(model.charAt(0)===$pOрс)
{
var id=$eАеА0(model.substr(1));

if($Т0TpA.$АААо0.userData&&$Т0TpA.$АААо0.userData.$MHIАl===id)
{

}
else
if(isNaN(id))
{
throw new Error($TреH+id+$ееНA);
}
else
{
let $loeoc=$сМсlc(id);
{
bitmap_data=new BitmapData($loeoc.width,$loeoc.height,true,$ТlpO);

$Т0TpA.$АААо0.bitmapData=bitmap_data;
$Т0TpA.$АААо0.smoothing=true;

if($Т0TpA.$АААо0.userData===null)
$Т0TpA.$АААо0.userData={};

$Т0TpA.$АААо0.userData.$MHIАl=id;

$loeoc.$1рТ1М(
()=>
{
bitmap_data.replaceContentWith($loeoc.bitmap);


}
);
}
}
}
}

SpriteSheets.$сOАMe($Т0TpA);
}

}
break;
case 35:
{

let $cеНlН=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$AlАeT[$cеНlН]=parseFloat($eННА[a].$lМe0Т[$рМHо]);

for(let $сI0рp=0;$сI0рp<$pООро;$сI0рp++)
if($AМlоН[$сI0рp]==false||$AМlоН[$сI0рp]==true)
{
if($Il[$сI0рp]>$TpelH[$cеНlН])
if($Il[$сI0рp]<$сеHОp[$cеНlН])
if($0OA[$сI0рp]>$c0НIO[$cеНlН])
if($0OA[$сI0рp]<$оТТAe[$cеНlН])
{


$0Н0Тl($сI0рp);
}
}
}
break;
case 36:
{
let $cеНlН=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$АeрHА[$cеНlН]=parseFloat($eННА[a].$lМe0Т[$рМHо]);

for(let $сI0рp=0;$сI0рp<$pООро;$сI0рp++)
if($AМlоН[$сI0рp]==false||$AМlоН[$сI0рp]==true)
{
if($Il[$сI0рp]>$TpelH[$cеНlН])
if($Il[$сI0рp]<$сеHОp[$cеНlН])
if($0OA[$сI0рp]>$c0НIO[$cеНlН])
if($0OA[$сI0рp]<$оТТAe[$cеНlН])
{


$0Н0Тl($сI0рp);
}
}
}
break;
case 37:
{
let $cеНlН=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$орcMА[$cеНlН]=parseFloat($eННА[a].$lМe0Т[$рМHо]);
}
break;
case 38:
{
let $cеНlН=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$ААоIH[$cеНlН]=parseFloat($eННА[a].$lМe0Т[$рМHо]);
}
break;
case 39:



if(parseFloat($eННА[a].$Тp1M[$рМHо])!=0)
$MАTOc=parseFloat($eННА[a].$Тp1M[$рМHо]);
else
$MАTOc=$М0AНс;

break;
case 40:
{
let $cеНlН=$eАеА0($eННА[a].$Тp1M[$рМHо]);
if($cеНlН==1)
{
$о0Мp0=true;
$IeА1I=true;
}
else
{
$о0Мp0=false;
$IeА1I=false;
}
}
break;
case 41:
$TОIAM($eННА[a].$Тp1M[$рМHо]);

if(!$еHоНH)
if($lсосТ===40)
if($eННА[a].$Тp1M[$рМHо]===$lMMA)
{
let $ОНMIH=-1;
let $ТAМеo=Infinity;
for(let i=0;i<$HсTНe.length;i++)
if($HсTНe[i].$сMlе0===1)
{
let $cТеМM=$НOНОН($HсTНe[i][$eТоM],$HсTНe[i][$рHОМ],$0Ме1А[$НAlНc][$eТоM],$0Ме1А[$НAlНc][$рHОМ]);
if($cТеМM<$ТAМеo)
{
$ТAМеo=$cТеМM;
$ОНMIH=i;
}
}

$OcОAp($HсTНe[$ОНMIH],3);
}

break;
case 42:
$оеIТМ($оeoce($eННА[a].$Тp1M[$рМHо]),$eННА[a].$lМe0Т[$рМHо]);

break;
case 43:

if($eННА[a].$Тp1M[$рМHо]==$ТlМe)
$TНoIА($Аcle);
else
if(HINTS||$еHоНH)
$TНoIА($eННА[a].$Тp1M[$рМHо]);
break;
case 44:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$o0IсО[$eННА[a].$Тp1M[$рМHо]].$OАосс=0;



break;
case 45:
if($eННА[a].$Тp1M[$рМHо]==$ОIlс||$eННА[a].$Тp1M[$рМHо]==$еlеc)
$оОTоo=true;
else
$оОTоo=false;
break;
case 46:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$o0IсО[$eННА[a].$Тp1M[$рМHо]].$cААТ1=$eННА[a].$lМe0Т[$рМHо];




break;
case 47:
if(!$еHоНH)
if(!$pMМ1)
{
$AAсAр=$Аo1O;
$MоTl0=true;

if($OАМАO)
$роHlс(14);

if(!$НOIHo)
$роHlс(13);

$роHlс(11);

$MАTOc=1;

$Hl1AА.alpha=0;
$Hl1AА.visible=true;

if($lсосТ==$HHolА)
{
$HHolА++;
}
LEVEL_POINTER++;

$cррсО+=10000;

$IеOАT();

$lсосТ++;
}

break;
case 48:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

if(!$lcAОТ())
break;

if(!$0Ме1А[$eННА[a].$Тp1M[$рМHо]].$оeoТе)
{
$0Ме1А[$eННА[a].$Тp1M[$рМHо]][$МIIро]*=$eННА[a].$lМe0Т[$рМHо]/100;
$0Ме1А[$eННА[a].$Тp1M[$рМHо]].hmax*=$eННА[a].$lМe0Т[$рМHо]/100;
}
break;
case 49:
if($eННА[a].$Тp1M[$рМHо]==$ОIlс||$eННА[a].$Тp1M[$рМHо]==$еlеc||$eННА[a].$Тp1M[$рМHо]==$pо1О)
$ToTTT=true;
else
$ToTTT=false;

for($cеНlН=0;$cеНlН<$eсАeA;$cеНlН++)
if($0Ме1А[$cеНlН].io)
if(!$0Ме1А[$cеНlН].$оeoТе)
$o0MIс($cеНlН);

break;
case 50:

$еHоНH=true;


if($pMМ1)
{
$ММ.$рОеAо();
$pMМ1=false;
}

$MАTOc=1;




$Аоео0($eIрoс);

$TO1eH($eННА[a].$Тp1M[$рМHо]);
break;
case 51:
$оМMОО=parseFloat($eННА[a].$Тp1M[$рМHо])/100;
if(isNaN($оМMОО))
$оМMОО=1;
if($оМMОО<0.01)
$оМMОО=0.01;
if($оМMОО>15)
$оМMОО=15;
break;
case 52:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$0OрТ+($eННА[a].$lМe0Т[$рМHо]);

if(!$pMМ1||!$0Ме1А[$eННА[a].$Тp1M[$рМHо]].$HМ0М1)
$0Ме1А[$eННА[a].$Тp1M[$рМHо]][$оIpl]=$eННА[a].$lМe0Т[$рМHо];

$0Ме1А[$eННА[a].$Тp1M[$рМHо]].gui.$pеMHH.text=$0Ме1А[$eННА[a].$Тp1M[$рМHо]][$оIpl];
break;





case 54:
$TTОpс($eАеА0($eННА[a].$Тp1M[$рМHо]));
break;
case 55:
$О1ОOA($eАеА0($eННА[a].$Тp1M[$рМHо]));
break;
case 56:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

for($Осрcр=0;$Осрcр<$eсАeA;$Осрcр++)
if($0Ме1А[$Осрcр].io)
{
if($0Ме1А[$Осрcр].$eoОpА>0&&$0Ме1А[$Осрcр][$МIIро]>0)
{
if($0Ме1А[$Осрcр][$eТоM]>$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM])
if($0Ме1А[$Осрcр][$eТоM]<$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w)
if($0Ме1А[$Осрcр][$рHОМ]>$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ])
if($0Ме1А[$Осрcр][$рHОМ]<$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h)
{
$0Ме1А[$Осрcр][$АсТOе]*=-2;
}
}
else
{
if($Il[$0Ме1А[$Осрcр].$MОеМ1]>$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM])
if($Il[$0Ме1А[$Осрcр].$MОеМ1]<$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w)
if($0OA[$0Ме1А[$Осрcр].$MОеМ1]>$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ])
if($0OA[$0Ме1А[$Осрcр].$MОеМ1]<$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h)
{
$0Ме1А[$Осрcр][$АсТOе]*=-2;
}
}
}
break;
case 57:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

for($Осрcр=0;$Осрcр<$eсАeA;$Осрcр++)
if($0Ме1А[$Осрcр].io)
{
if($0Ме1А[$Осрcр].$eoОpА>0&&$0Ме1А[$Осрcр][$МIIро]>0)
{
if($0Ме1А[$Осрcр][$eТоM]>$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM])
if($0Ме1А[$Осрcр][$eТоM]<$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w)
if($0Ме1А[$Осрcр][$рHОМ]>$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ])
if($0Ме1А[$Осрcр][$рHОМ]<$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h)
{
$0Ме1А[$Осрcр][$МcеAH]*=-2;
}
}
else
{
if($Il[$0Ме1А[$Осрcр].$MОеМ1]>$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM])
if($Il[$0Ме1А[$Осрcр].$MОеМ1]<$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w)
if($0OA[$0Ме1А[$Осрcр].$MОеМ1]>$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ])
if($0OA[$0Ме1А[$Осрcр].$MОеМ1]<$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h)
{
$0Ме1А[$Осрcр][$МcеAH]*=-2;
}
}
}
break;
case 58:

{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
let B=$Нecрl($eННА[a].$lМe0Т[$рМHо]);

let mc=$0Ме1А[$eННА[a].$Тp1M[$рМHо]];

mc.$Нр01I[0]=mc.$Нр01I[1]=mc.$Нр01I[2]=mc.$Нр01I[3]=$соТО;

mc.char=B;

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

let $рАlpO=mc.$оAAOО;

$pНTс1(mc);
$AOеоО(mc);

mc.$оAAOО=$рАlpO;
}
break;
case 59:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=parseFloat($eННА[a].$lМe0Т[$рМHо]);

if(!$lcAОТ())
break;

let $0ОoHс=$eННА[a].$Тp1M[$рМHо];

if($0ОoHс>=0)
{
let $eeТОН=$0Ме1А[$0ОoHс].$оeoТе;

$0Ме1А[$0ОoHс][$МIIро]=$0Ме1А[$0ОoHс].hmax=$eННА[a].$lМe0Т[$рМHо];

if($0Ме1А[$0ОoHс][$МIIро]>0)
{
$0Ме1А[$0ОoHс].$оeoТе=false;
$0Ме1А[$0ОoHс].$loАoM=false;
$o0MIс($0ОoHс);

if($0Ме1А[$0ОoHс].$HМ0М1||$0Ме1А[$0ОoHс][$cАocе]==$0Ме1А[$НAlНc][$cАocе])
{
$0Ме1А[$0ОoHс].gui.alpha=1;
$0Ме1А[$0ОoHс].gui.visible=true;
$0Ме1А[$0ОoHс][$0MТce]=-1;
}

$0Ме1А[$0ОoHс].$ОрОAA=0;

$0Ме1А[$0ОoHс].$ААНММ=(Math.max($0Ме1А[$0ОoHс][$МIIро]*0.4,30));
$0Ме1А[$0ОoHс].$НТcep=(Math.max($0Ме1А[$0ОoHс][$МIIро]*0.6,30));
$0Ме1А[$0ОoHс].$HAрH1=(Math.max($0Ме1А[$0ОoHс][$МIIро]*0.5,30));
$0Ме1А[$0ОoHс].$lMIсo=(Math.max($0Ме1А[$0ОoHс][$МIIро]*0.4,30));


$IHcоТ($0ОoHс);

$AOеоО($0Ме1А[$0ОoHс]);




if($0ОoHс===$НAlНc)
if($eeТОН)
{
$ММ.Event($ММ[$рсcAМ],$ММ.$Oоolр($0Ме1А[$0ОoHс][$eТоM]),$ММ.$Oоolр($0Ме1А[$0ОoHс][$рHОМ]),$ММ.$Oоolр($0Ме1А[$НAlНc][$МIIро]));
$0Ме1А[$НAlНc][$рАр0T]++;
}
}
}
else
{
$е10Oс(e,$1НOc+$eННА[a][$ерlАО]+$АTIА+($рМHо+1)+$ТоlI+$eННА[a].$Тp1M[$рМHо]+$еoOM);
}

}
break;
case 60:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);


let $0ОoHс=$eННА[a].$Тp1M[$рМHо];


{
$0Ме1А[$0ОoHс][$МАТОе]=-1;
$o0MIс($0ОoHс);

for(i2=0;i2<$cс0Hс;i2++)
{
if($ОpMрс[i2].picken_by===$0ОoHс)
{


if($ОpMрс[i2].picken_by===$НAlНc)
if($ОpMрс[i2].$cppее==-2)
{
if($ОpMрс[i2].$1ooоT==1)
if($OН1оc>0)
$OН1оc-=1;

if($ОpMрс[i2].$1ooоT==2)
if($IАрAH>0)
$IАрAH-=1;

if($ОpMрс[i2].$1ooоT==3)
if($ccIсo>0)
$ccIсo-=1;
}


$ОpMрс[i2].picken_by=-1;
}
}
}
}
break;
case 61:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=parseFloat($eННА[a].$lМe0Т[$рМHо]);


if(!$0Ме1А[$eННА[a].$Тp1M[$рМHо]].io)
break;

let $Т0TpA=$0Ме1А[$eННА[a].$Тp1M[$рМHо]];

{








$Т0TpA[$АсТOе]*=$eННА[a].$lМe0Т[$рМHо];
$Т0TpA[$МcеAH]*=$eННА[a].$lМe0Т[$рМHо];


for($AMTT1=0;$AMTT1<$pООро;$AMTT1++)
if($о1oHМ[$AMTT1]==$eННА[a].$Тp1M[$рМHо])
{
$OTpc1[$AMTT1]*=$eННА[a].$lМe0Т[$рМHо];
$IрТ0H[$AMTT1]*=$eННА[a].$lМe0Т[$рМHо];

}
}
}
break;













case 62:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

let $Т0TpA=$ОpMрс[$eННА[a].$Тp1M[$рМHо]];

$Т0TpA.$oelAe=$eННА[a].$lМe0Т[$рМHо];
}
break;
case 63:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=parseFloat($eННА[a].$lМe0Т[$рМHо]);

let $Т0TpA=$ОpMрс[$eННА[a].$Тp1M[$рМHо]];

$Т0TpA.$1MAеT=$eННА[a].$lМe0Т[$рМHо]/180*Math.PI;
}
break;
case 64:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=parseFloat($eННА[a].$lМe0Т[$рМHо]);

let $Т0TpA=$ОpMрс[$eННА[a].$Тp1M[$рМHо]];

$Т0TpA[$clcре]=$eННА[a].$lМe0Т[$рМHо];
}
break;
case 65:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=parseFloat($eННА[a].$lМe0Т[$рМHо]);

let $Т0TpA=$ОpMрс[$eННА[a].$Тp1M[$рМHо]];


$Т0TpA.$HMОН0=1;
$Т0TpA.$1l1TO=0;

}
break;
case 66:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=parseFloat($eННА[a].$lМe0Т[$рМHо]);

let $Т0TpA=$ОpMрс[$eННА[a].$Тp1M[$рМHо]];


$Т0TpA.$HMОН0=1;
$Т0TpA.$1l1TO=2;

}
break;
case 67:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=parseFloat($eННА[a].$lМe0Т[$рМHо]);

let $Т0TpA=$ОpMрс[$eННА[a].$Тp1M[$рМHо]];


$Т0TpA.$HMОН0=8;
$Т0TpA.$1l1TO=4;

}
break;
case 68:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=parseFloat($eННА[a].$lМe0Т[$рМHо]);

let $Т0TpA=$ОpMрс[$eННА[a].$Тp1M[$рМHо]];


$Т0TpA.$HMОН0=10;
$Т0TpA.$1l1TO=5;

}
break;
case 69:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=parseFloat($eННА[a].$lМe0Т[$рМHо]);

let $Т0TpA=$ОpMрс[$eННА[a].$Тp1M[$рМHо]];


$Т0TpA.$HMОН0=7;
$Т0TpA.$1l1TO=1;

}
break;
case 70:
case 279:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$Осрcр=$Oр0ol;

if($0Ме1А[$Осрcр].io)






{
let $Т0TpA=$0Ме1А[$Осрcр];
if($Т0TpA[$МIIро]>0)
{






u=$Il[$Т0TpA.$MОеМ1]-($HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w/2);
v=$0OA[$Т0TpA.$MОеМ1]-($HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h/2);

if($HсTНe[$eННА[a].$Тp1M[$рМHо]].w===$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w)
if($HсTНe[$eННА[a].$Тp1M[$рМHо]].h===$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h)
{
u=$HсTНe[$eННА[a].$Тp1M[$рМHо]][$eТоM]-$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM];
v=$HсTНe[$eННА[a].$Тp1M[$рМHо]][$рHОМ]-$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ];
}

if($Осрcр==$НAlНc)
if($ОMOTе!==-1||!$00pеH)
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

if($IТoHT())
{
$IcМMc[$AMTT1]-=u;
$MA0е1[$AMTT1]-=v;
}

$pМ1Аe($AMTT1);
}

if($eННА[a].$НT0еM[$рМHо]===70)
$р00Ap($Т0TpA[$eТоM],$Т0TpA[$рHОМ]-41,$1cМоо.$АMHоA,0,0);

$Т0TpA[$eТоM]-=u;
$Т0TpA[$рHОМ]-=v;

if($eННА[a].$НT0еM[$рМHо]===70)
$р00Ap($Т0TpA[$eТоM],$Т0TpA[$рHОМ]-41,$1cМоо.$АMHоA,0,0);

$Т0TpA.$ОНMIА();
}
}
}
break;
case 71:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$0OрТ+($eННА[a].$lМe0Т[$рМHо]);

let $MеpНl=null;

for(let $AсоoН=0;$AсоoН<$1МIОc.length;$AсоoН++)
if($сHрОT[$AсоoН]===$eННА[a].$Тp1M[$рМHо])
{
$MеpНl=$1МIОc[$AсоoН];
break;
}

if($MеpНl!==null)
{

















if(TextField.is6DigitHexCode($eННА[a].$lМe0Т[$рМHо]))
{
let safe_color=$eННА[a].$lМe0Т[$рМHо];

$MеpНl.graphics.draw_operations[0][1][0]=safe_color;
}
}
}
break;
case 72:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=parseFloat($eННА[a].$lМe0Т[$рМHо]);

let u=$eННА[a].$lМe0Т[$рМHо];

for($Осрcр=0;$Осрcр<$eсАeA;$Осрcр++)
if($0Ме1А[$Осрcр].io)
if($0Ме1А[$Осрcр][$eТоM]>$HсTНe[$eННА[a].$Тp1M[$рМHо]][$eТоM])
if($0Ме1А[$Осрcр][$eТоM]<$HсTНe[$eННА[a].$Тp1M[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$Тp1M[$рМHо]].w)
if($0Ме1А[$Осрcр][$рHОМ]>$HсTНe[$eННА[a].$Тp1M[$рМHо]][$рHОМ])
if($0Ме1А[$Осрcр][$рHОМ]<$HсTНe[$eННА[a].$Тp1M[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$Тp1M[$рМHо]].h)
{
$Т0TpA=$0Ме1А[$Осрcр];

{





















for($AMTT1=0;$AMTT1<$pООро;$AMTT1++)
if($о1oHМ[$AMTT1]==$Т0TpA.$MeсНе)
{
$OTpc1[$AMTT1]*=u;
$IрТ0H[$AMTT1]*=u;






}


$Т0TpA[$АсТOе]*=u;
$Т0TpA[$МcеAH]*=u;



}
}
}
break;
case 73:
$eННА[a].$Тp1M[$рМHо]=parseFloat($eННА[a].$Тp1M[$рМHо]);
$cHo1с=$eННА[a].$Тp1M[$рМHо];
break;
case 74:
$eННА[a].$Тp1M[$рМHо]=parseFloat($eННА[a].$Тp1M[$рМHо]);
$НАоoO=$eННА[a].$Тp1M[$рМHо];
break;
case 75:
$eННА[a].$Тp1M[$рМHо]=parseFloat($eННА[a].$Тp1M[$рМHо]);
$МOIcо=$eННА[a].$Тp1M[$рМHо];
break;
case 76:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);

let $Т0TpA=$ОpMрс[$eННА[a].$Тp1M[$рМHо]];


if($Т0TpA.$соТAТ)
{
$Т0TpA.picken_by=-1;
}

$Т0TpA.$соТAТ=false;
}
break;
case 77:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);

let $Т0TpA=$ОpMрс[$eННА[a].$Тp1M[$рМHо]];


if(!$Т0TpA.$соТAТ)
{
$Т0TpA.picken_by=-1;
}

$Т0TpA.$соТAТ=true;
}
break;
case 78:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$Т0TpA=$ОpMрс[$eННА[a].$Тp1M[$рМHо]];

if($Т0TpA.$cppее!==$eННА[a].$lМe0Т[$рМHо])
{
let $IМIHА=-1;
let $HcOpМ=-1;

if(!$Т0TpA.$соТAТ)
if($Т0TpA.picken_by!==-1)
{
$IМIHА=$0Ме1А[$Т0TpA.picken_by][$МАТОе];
$HcOpМ=$Т0TpA.picken_by;

$Т0TpA.picken_by=-1;
}

$Т0TpA.$cppее=$eННА[a].$lМe0Т[$рМHо];

if($HcOpМ!==-1)
{
$Т0TpA.picken_by=$HcOpМ;

$0Ме1А[$HcOpМ][$МАТОе]=$IМIHА;

if($HcOpМ===$НAlНc)
$pрMТl();
}
}
break;
case 79:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$Осрcр=$Oр0ol;

$HсTНe[$eННА[a].$Тp1M[$рМHо]][$eТоM]=$0Ме1А[$Осрcр][$eТоM]-$HсTНe[$eННА[a].$Тp1M[$рМHо]].w/2;
$HсTНe[$eННА[a].$Тp1M[$рМHо]][$рHОМ]=$0Ме1А[$Осрcр][$рHОМ]-$HсTНe[$eННА[a].$Тp1M[$рМHо]].h/2;

break;
case 80:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$Осрcр=$eННА[a].$lМe0Т[$рМHо];

$HсTНe[$eННА[a].$Тp1M[$рМHо]][$eТоM]=$0Ме1А[$Осрcр][$eТоM]-$HсTНe[$eННА[a].$Тp1M[$рМHо]].w/2;
$HсTНe[$eННА[a].$Тp1M[$рМHо]][$рHОМ]=$0Ме1А[$Осрcр][$рHОМ]-$HсTНe[$eННА[a].$Тp1M[$рМHо]].h/2;

break;
case 81:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$ОpMрс[$eННА[a].$Тp1M[$рМHо]].$рAlНН=$eННА[a].$lМe0Т[$рМHо];
break;
case 82:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$АAHОе[$eННА[a].$Тp1M[$рМHо]].$рAlНН=$eННА[a].$lМe0Т[$рМHо];
break;
case 83:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=parseFloat($eННА[a].$lМe0Т[$рМHо]);

$HсTНe[$eННА[a].$Тp1M[$рМHо]][$eТоM]+=$eННА[a].$lМe0Т[$рМHо];
break;
case 84:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=parseFloat($eННА[a].$lМe0Т[$рМHо]);

$HсTНe[$eННА[a].$Тp1M[$рМHо]][$рHОМ]+=$eННА[a].$lМe0Т[$рМHо];
break;
case 85:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$АAHОе[$eННА[a].$Тp1M[$рМHо]].$рpHeМ=false;
break;
case 86:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$АAHОе[$eННА[a].$Тp1M[$рМHо]].$рpHeМ=true;
break;
case 87:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$Осрcр=$Oр0ol;

$HсTНe[$eННА[a].$Тp1M[$рМHо]][$eТоM]=$0Ме1А[$Осрcр][$lо0HH]-$HсTНe[$eННА[a].$Тp1M[$рМHо]].w/2;
$HсTНe[$eННА[a].$Тp1M[$рМHо]][$рHОМ]=$0Ме1А[$Осрcр][$еоOOА]-$HсTНe[$eННА[a].$Тp1M[$рМHо]].h/2;

break;
case 88:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=parseFloat($eННА[a].$lМe0Т[$рМHо]);


$0Ме1А[$eННА[a].$Тp1M[$рМHо]].$MAНIp=$eННА[a].$lМe0Т[$рМHо];

break;
case 89:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);


$0Ме1А[$eННА[a].$Тp1M[$рМHо]][$0OАс]=$eННА[a].$lМe0Т[$рМHо];

break;
case 90:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$0OрТ+($eННА[a].$lМe0Т[$рМHо]);

var $HAАOН=$eАеА0($eННА[a].$lМe0Т[$рМHо].replace($TlAp,$pе1M));

var red=(($HAАOН&0xFF0000)>>16);
var green=(($HAАOН&0x00FF00)>>8);
var blue=(($HAАOН&0x0000FF));












$0Ме1А[$eННА[a].$Тp1M[$рМHо]].$Alр10=red/255*2;
$0Ме1А[$eННА[a].$Тp1M[$рМHо]].$оМcHM=green/255*2;
$0Ме1А[$eННА[a].$Тp1M[$рМHо]].$рМMоО=blue/255*2;

break;

case 91:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);









$0Ме1А[$eННА[a].$Тp1M[$рМHо]].$AМIМ1=(
$eННА[a].$lМe0Т[$рМHо]>0 ? 1 :
$eННА[a].$lМe0Т[$рМHо]<0 ?-1 :
0);
break;
case 92:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);









$0Ме1А[$eННА[a].$Тp1M[$рМHо]].$TНесe=(
$eННА[a].$lМe0Т[$рМHо]>0 ? 1 :
$eННА[a].$lМe0Т[$рМHо]<0 ?-1 :
0);
break;
case 93:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);






$0Ме1А[$eННА[a].$Тp1M[$рМHо]].$рoeсl=($eННА[a].$lМe0Т[$рМHо]===1);
break;
case 94:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);


$0Ме1А[$eННА[a].$Тp1M[$рМHо]][$lо0HH]=$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w*Math.random();
$0Ме1А[$eННА[a].$Тp1M[$рМHо]][$еоOOА]=$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h*Math.random();
break;

case 95:
case 96:

var $MеОрc;

if($eННА[a].$НT0еM[$рМHо]===95)
$MеОрc=false;
else
$MеОрc=true;

$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

var $MММ1е=$0АO0o($HсTНe[$eННА[a].$Тp1M[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$Тp1M[$рМHо]].w/2,
$HсTНe[$eННА[a].$Тp1M[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$Тp1M[$рМHо]].h/2,
$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w/2,
$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h/2);

if($MММ1е)
{
$MММ1е=$0oеcН($HсTНe[$eННА[a].$Тp1M[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$Тp1M[$рМHо]].w/2,
$HсTНe[$eННА[a].$Тp1M[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$Тp1M[$рМHо]].h/2);
}

if($MММ1е)
{
$MММ1е=$0oеcН($HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w/2,
$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h/2);
}

if($MММ1е===$MеОрc)
$рМHо=$eННА[a].$0ор1e;

break;


case 97:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

if($eННА[a].$lМe0Т[$рМHо]>=0)
if($eННА[a].$lМe0Т[$рМHо]<$eсАeA)
$0Ме1А[$eННА[a].$Тp1M[$рМHо]][$0MТce]=$0Ме1А[$eННА[a].$lМe0Т[$рМHо]].$MeсНе;
break;

case 98:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$HсTНe[$eННА[a].$Тp1M[$рМHо]][$eТоM]=$АAHОе[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$АAHОе[$eННА[a].$lМe0Т[$рМHо]].w/2-$HсTНe[$eННА[a].$Тp1M[$рМHо]].w/2;
$HсTНe[$eННА[a].$Тp1M[$рМHо]][$рHОМ]=$АAHОе[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$АAHОе[$eННА[a].$lМe0Т[$рМHо]].h/2-$HсTНe[$eННА[a].$Тp1M[$рМHо]].h/2;

break;

case 99:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$pАTIТ($eННА[a].$Тp1M[$рМHо],true);
break;

case 100:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=$eННА[a].$lМe0Т[$рМHо];
break;

case 101:
if($ррAН[$eННА[a].$Тp1M[$рМHо]]===undefined)
$ррAН[$eННА[a].$Тp1M[$рМHо]]=$eННА[a].$lМe0Т[$рМHо];
break;

case 102:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=parseFloat($ррAН[$eННА[a].$Тp1M[$рМHо]])+parseFloat($eННА[a].$lМe0Т[$рМHо]);
break;

case 103:
$ррAН[$eННА[a].$Тp1M[$рМHо]]*=parseFloat($eННА[a].$lМe0Т[$рМHо]);
break;

case 104:
$ррAН[$eННА[a].$Тp1M[$рМHо]]+=parseFloat($ррAН[$eННА[a].$lМe0Т[$рМHо]]);
break;

case 105:
$ррAН[$eННА[a].$Тp1M[$рМHо]]*=parseFloat($ррAН[$eННА[a].$lМe0Т[$рМHо]]);
break;

case 106:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=Math.random()*parseFloat($eННА[a].$lМe0Т[$рМHо]);
break;

case 107:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=Math.floor(Math.random()*parseFloat($eННА[a].$lМe0Т[$рМHо]));
break;

case 108:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=Math.round($ррAН[$eННА[a].$Тp1M[$рМHо]]);
break;

case 109:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=Math.floor($ррAН[$eННА[a].$Тp1M[$рМHо]]);
break;

case 110:
if(parseFloat($ррAН[$eННА[a].$Тp1M[$рМHо]])>parseFloat($ррAН[$eННА[a].$lМe0Т[$рМHо]]))
{

}
else
$рМHо=$eННА[a].$0ор1e;
break;

case 111:
if(parseFloat($ррAН[$eННА[a].$Тp1M[$рМHо]])<parseFloat($ррAН[$eННА[a].$lМe0Т[$рМHо]]))
{

}
else
$рМHо=$eННА[a].$0ор1e;
break;

case 112:
if($ррAН[$eННА[a].$Тp1M[$рМHо]]===$ррAН[$eННА[a].$lМe0Т[$рМHо]])
{

}
else
$рМHо=$eННА[a].$0ор1e;
break;

case 113:
if($ррAН[$eННА[a].$Тp1M[$рМHо]]!==$ррAН[$eННА[a].$lМe0Т[$рМHо]])
{

}
else
$рМHо=$eННА[a].$0ор1e;
break;

case 114:
if(parseFloat($ррAН[$eННА[a].$Тp1M[$рМHо]])>parseFloat($eННА[a].$lМe0Т[$рМHо]))
{

}
else
$рМHо=$eННА[a].$0ор1e;
break;

case 115:
if(parseFloat($ррAН[$eННА[a].$Тp1M[$рМHо]])<parseFloat($eННА[a].$lМe0Т[$рМHо]))
{

}
else
$рМHо=$eННА[a].$0ор1e;
break;

case 116:
if($ррAН[$eННА[a].$Тp1M[$рМHо]]===$eННА[a].$lМe0Т[$рМHо])
{

}
else
$рМHо=$eННА[a].$0ор1e;
break;

case 117:
if($ррAН[$eННА[a].$Тp1M[$рМHо]]!==$eННА[a].$lМe0Т[$рМHо])
{

}
else
$рМHо=$eННА[a].$0ор1e;
break;

case 118:
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);
$ррAН[$eННА[a].$Тp1M[$рМHо]]=$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM];
break;

case 119:
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);
$ррAН[$eННА[a].$Тp1M[$рМHо]]=$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ];
break;

case 120:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$HсTНe[$eННА[a].$Тp1M[$рМHо]][$eТоM]=parseFloat($ррAН[$eННА[a].$lМe0Т[$рМHо]]);
break;

case 121:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$HсTНe[$eННА[a].$Тp1M[$рМHо]][$рHОМ]=parseFloat($ррAН[$eННА[a].$lМe0Т[$рМHо]]);
break;

case 122:
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);
$ррAН[$eННА[a].$Тp1M[$рМHо]]=$0Ме1А[$eННА[a].$lМe0Т[$рМHо]][$МIIро];
break;

case 123:



if($0OрТ+($ррAН[$eННА[a].$Тp1M[$рМHо]])===$0OрТ+($eННА[a].$lМe0Т[$рМHо]))
{

}
else
$рМHо++;
break;

case 124:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=parseFloat($ррAН[$eННА[a].$Тp1M[$рМHо]])%parseFloat($eННА[a].$lМe0Т[$рМHо]);
break;

case 125:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=$ррAН[$eННА[a].$lМe0Т[$рМHо]];
break;

case 126:
var $МecHM=parseFloat($ррAН[$eННА[a].$Тp1M[$рМHо]]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);


$рM1lМ($HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w/2,
$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h/2,
Math.abs($МecHM*5),
$МecHM*0.6,
Math.max(0,$МecHM*10),-1,
$AMec);


if($МecHM>=0)
$AеpАp($HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w/2,
$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h/2);

break;

case 127:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=parseFloat($ррAН[$eННА[a].$Тp1M[$рМHо]])%parseFloat($ррAН[$eННА[a].$lМe0Т[$рМHо]]);
break;

case 128:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
let count=parseFloat($ррAН[$eННА[a].$lМe0Т[$рМHо]]);

$Т0TpA=$ОpMрс[$eННА[a].$Тp1M[$рМHо]];

$Т0TpA.$oelAe=count;
}
break;
case 129:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
var accuracy=parseFloat($ррAН[$eННА[a].$lМe0Т[$рМHо]]);

$Т0TpA=$ОpMрс[$eННА[a].$Тp1M[$рМHо]];

$Т0TpA.$1MAеT=accuracy/180*Math.PI;
break;
case 130:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
var $МecHM=parseFloat($ррAН[$eННА[a].$lМe0Т[$рМHо]]);

$Т0TpA=$ОpMрс[$eННА[a].$Тp1M[$рМHо]];

$Т0TpA[$clcре]=$МecHM;
break;

case 131:
$ррAН[$eННА[a].$Тp1M[$рМHо]]/=parseFloat($eННА[a].$lМe0Т[$рМHо]);
break;
case 132:
$ррAН[$eННА[a].$Тp1M[$рМHо]]/=parseFloat($ррAН[$eННА[a].$lМe0Т[$рМHо]]);
break;
case 133:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=Math.pow(parseFloat($ррAН[$eННА[a].$Тp1M[$рМHо]]),parseFloat($ррAН[$eННА[a].$lМe0Т[$рМHо]]));
break;
case 134:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=Math.pow(parseFloat($ррAН[$eННА[a].$Тp1M[$рМHо]]),parseFloat($eННА[a].$lМe0Т[$рМHо]));
break;
case 135:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=Math.sin(parseFloat($ррAН[$eННА[a].$lМe0Т[$рМHо]]));
break;
case 136:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=Math.cos(parseFloat($ррAН[$eННА[a].$lМe0Т[$рМHо]]));
break;
case 137:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=$НAlНc;
break;
case 138:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=$pMМ1 ? 1 : 0;
break;
case 139:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=$00pеH ? 1 : 0;
break;
case 140:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=$IТoHT()? 1 : 0;
break;
case 141:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=parseFloat($eННА[a].$lМe0Т[$рМHо]);

$0Ме1А[$eННА[a].$Тp1M[$рМHо]].$ААНММ-=$eННА[a].$lМe0Т[$рМHо];

$оo1pO($eННА[a].$Тp1M[$рМHо]);
break;
case 142:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=parseFloat($eННА[a].$lМe0Т[$рМHо]);

$0Ме1А[$eННА[a].$Тp1M[$рМHо]].$lMIсo-=$eННА[a].$lМe0Т[$рМHо];

$оo1pO($eННА[a].$Тp1M[$рМHо]);
break;
case 143:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=parseFloat($eННА[a].$lМe0Т[$рМHо]);

$0Ме1А[$eННА[a].$Тp1M[$рМHо]].$НТcep-=$eННА[a].$lМe0Т[$рМHо];

$оo1pO($eННА[a].$Тp1M[$рМHо]);
break;
case 144:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=parseFloat($eННА[a].$lМe0Т[$рМHо]);

$0Ме1А[$eННА[a].$Тp1M[$рМHо]].$HAрH1-=$eННА[a].$lМe0Т[$рМHо];

$оo1pO($eННА[a].$Тp1M[$рМHо]);
break;
case 145:

$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

var c=0;

for($Осрcр=0;$Осрcр<$eсАeA;$Осрcр++)
if($0Ме1А[$Осрcр].io)
if($0Ме1А[$Осрcр][$МIIро]>0)
if($Il[$0Ме1А[$Осрcр].$MОеМ1]>$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM])
if($Il[$0Ме1А[$Осрcр].$MОеМ1]<$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w)
if($0OA[$0Ме1А[$Осрcр].$MОеМ1]>$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ])
if($0OA[$0Ме1А[$Осрcр].$MОеМ1]<$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h)
c++;

$ррAН[$eННА[a].$Тp1M[$рМHо]]=c;

break;
case 146:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=$0Ме1А[$Oр0ol][$AHop];
break;
case 147:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=$0Ме1А[$Oр0ol][$оIpl];
break;
case 148:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=$I0Iср;
break;
case 149:
var key=$eННА[a].$Тp1M[$рМHо];
var $рpТlе=$eННА[a].$lМe0Т[$рМHо];
if($ррAН[key].indexOf($рpТlе)!==-1)
$ррAН[key]=1;
else
$ррAН[key]=0;
break;
case 150:
var key=$eННА[a].$Тp1M[$рМHо];
var $HMТTТ=$eННА[a].$lМe0Т[$рМHо];
if($ррAН[key].indexOf($ррAН[$HMТTТ])!==-1)
$ррAН[key]=1;
else
$ррAН[key]=0;
break;
case 151:
var key=$eННА[a].$Тp1M[$рМHо];
var $HMТTТ=$eННА[a].$lМe0Т[$рМHо];

$ррAН[key]=$ррAН[$HMТTТ].length;
break;
case 152:
var key=$eННА[a].$Тp1M[$рМHо];
var $HMТTТ=$eННА[a].$lМe0Т[$рМHо];

$ррAН[key]+=$0OрТ+($ррAН[$HMТTТ]);
break;

case 153:

$ррAН[$eННА[a].$Тp1M[$рМHо]]=1-$ррAН[$eННА[a].$Тp1M[$рМHо]];
break;

case 154:

$ррAН[$eННА[a].$Тp1M[$рМHо]]=-$ррAН[$eННА[a].$Тp1M[$рМHо]];
break;

case 155:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=$ll1lА;
break;

case 156:

$HТс1I=$eАеА0($eННА[a].$Тp1M[$рМHо]);
break;

case 157:
{
let player=($HрТМc[$p0Аос]||$0Ме1А[$p0Аос]);

$ррAН[$eННА[a].$Тp1M[$рМHо]]=player ? player[$AHop] : $оТTp;
}
break;
case 158:
{
let player=($HрТМc[$p0Аос]||$0Ме1А[$p0Аос]);

$ррAН[$eННА[a].$Тp1M[$рМHо]]=player ? player[$оIpl] : $Мelе;
}
break;
case 159:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=$p0Аос;
break;
case 160:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=$ТсерО;
break;

case 161:
$MТOсc={};
$OоТTo={};
break;
case 162:
$OоТTo[$eННА[a].$Тp1M[$рМHо]]=$рTТА;
$MТOсc[$eННА[a].$Тp1M[$рМHо]]=$ррAН[$eННА[a].$lМe0Т[$рМHо]];
break;
case 163:
$ррAН[$eННА[a].$lМe0Т[$рМHо]]=$MТOсc[$eННА[a].$Тp1M[$рМHо]];
break;
case 164:
{
$eННА[a].$Тp1M[$рМHо]=Math.floor($eННА[a].$Тp1M[$рМHо]);
var mc=$0Ме1А[$eННА[a].$Тp1M[$рМHо]];
mc.$lOeНc=$Нecрl($eННА[a].$lМe0Т[$рМHо]);
$AOеоО(mc);
}
break;
case 165:
{
$eННА[a].$Тp1M[$рМHо]=Math.floor($eННА[a].$Тp1M[$рМHо]);
var mc=$0Ме1А[$eННА[a].$Тp1M[$рМHо]];
mc.$THMcM=$Нecрl($eННА[a].$lМe0Т[$рМHо]);
$AOеоО(mc);
}
break;
case 166:
{
$eННА[a].$Тp1M[$рМHо]=Math.floor($eННА[a].$Тp1M[$рМHо]);
let B=$Нecрl($eННА[a].$lМe0Т[$рМHо]);
var mc=$0Ме1А[$eННА[a].$Тp1M[$рМHо]];
mc.$Hlppе=B;
mc.$Аc01о=B;
mc.$ТрH0c=B;
mc.$ОАOрр=B;
$AOеоО(mc);
}
break;
case 167:
{
$eННА[a].$Тp1M[$рМHо]=Math.floor($eННА[a].$Тp1M[$рМHо]);
let B=$Нecрl($eННА[a].$lМe0Т[$рМHо]);
var mc=$0Ме1А[$eННА[a].$Тp1M[$рМHо]];
mc.$AААH1=B;
mc.$сТlAМ=B;
mc.$ТIpec=B;
mc.$НOоМO=B;
mc.$ОIMОo=B;
mc.$cHАoс=B;
mc.$A0АоА=B;
$AOеоО(mc);
}
break;
case 168:
{
$eННА[a].$Тp1M[$рМHо]=Math.floor($eННА[a].$Тp1M[$рМHо]);
var mc=$0Ме1А[$eННА[a].$Тp1M[$рМHо]];
var $Нр01I=($eННА[a].$lМe0Т[$рМHо]+$0OрТ);
mc.$Нр01I[0]=$Нр01I.charAt(0);
mc.$Нр01I[1]=$Нр01I.charAt(1);
mc.$Нр01I[2]=$Нр01I.charAt(2);
mc.$Нр01I[3]=$Нр01I.charAt(3);
$1loHе(mc,true);
}
break;
case 169:

var $сОHl1=$eННА[a].$lМe0Т[$рМHо];

if(!$00pеH)
{
var $AMIрA=$рHТpМ();


$AMIрA.addEventListener(Event.COMPLETE,function(event)
{



$ррAН[$сОHl1]=event.target[$1еM1];
}
);
$AMIрA.addEventListener(SecurityErrorEvent.SECURITY_ERROR,function(event)
{
$ррAН[$сОHl1]=$0АТо;
}
);





$AMIрA.addEventListener(IOErrorEvent.IO_ERROR,function $ОАlоA(event)
{
$ррAН[$сОHl1]=$ТOeо;
}
);

$ррAН[$сОHl1]=$c1Оl;



var request=new URLRequest($clНО);

var $ТТсМ=new URLVariables();

{
$ТТсМ[$H0l0]=$ррAН[$eННА[a].$Тp1M[$рМHо]];
$ТТсМ[$0сoM]=$OМMО;

$ТТсМ[$AHop]=$Oeо0;
$ТТсМ[$ТcIH]=$pATO;

if($pMМ1&&$есeA)
$ТТсМ[$A0ос]=$АрНО;
else
$ТТсМ[$A0ос]=$0OрТ;

request[$1еM1]=$ТТсМ;
request[$е0Тc]=URLRequestMethod.POST;
}


try{
$AMIрA.load(request);
} catch(error){
$ррAН[$сОHl1]=$pMcТ;
}

}
else
{
$ррAН[$сОHl1]=$lОТН;
}

break;

case 170:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=parseFloat($eННА[a].$lМe0Т[$рМHо]);

let $Т0TpA=$ОpMрс[$eННА[a].$Тp1M[$рМHо]];

$Т0TpA.$сОс0М=$eННА[a].$lМe0Т[$рМHо];
}
break;
case 171:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
var $HOoНМ=$ррAН[$eННА[a].$lМe0Т[$рМHо]];

$Т0TpA=$ОpMрс[$eННА[a].$Тp1M[$рМHо]];

$Т0TpA.$сОс0М=$HOoНМ;
break;
case 172:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=parseFloat($eННА[a].$lМe0Т[$рМHо]);

let $Т0TpA=$ОpMрс[$eННА[a].$Тp1M[$рМHо]];

$Т0TpA.$clосT=$eННА[a].$lМe0Т[$рМHо];
}
break;
case 173:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
let $HOoНМ=$ррAН[$eННА[a].$lМe0Т[$рМHо]];

let $Т0TpA=$ОpMрс[$eННА[a].$Тp1M[$рМHо]];

$Т0TpA.$clосT=$HOoНМ;
}
break;
case 174:
var diff=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$HlОНА(diff);
break;

case 175:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$Т0TpA=$ОpMрс[$eННА[a].$Тp1M[$рМHо]];
$Т0TpA.$HMОН0=$eННА[a].$lМe0Т[$рМHо];
break;

case 176:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
var $оАepp=$ррAН[$eННА[a].$lМe0Т[$рМHо]];

$Т0TpA=$ОpMрс[$eННА[a].$Тp1M[$рМHо]];
$Т0TpA.$HMОН0=$оАepp;
break;

case 177:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=$pMМ1 ?($IcеНе): 0;
break;

case 178:
$cpОlТ=$eАеА0($eННА[a].$lМe0Т[$рМHо]);
var $1oОTМ=$0OрТ;
for($Осрcр=0;$Осрcр<$cс0Hс;$Осрcр++)
if($ОpMрс[$Осрcр].io)
if($ОpMрс[$Осрcр].picken_by===$cpОlТ)
if(!$ОpMрс[$Осрcр].$соТAТ)
{
if($1oОTМ!==$0OрТ)
$1oОTМ+=$10M0;

$1oОTМ+=$ОpMрс[$Осрcр].model+$oсМс+$ОpMрс[$Осрcр].upg+$oсМс+$ОpMрс[$Осрcр].command;
}
$ррAН[$eННА[a].$Тp1M[$рМHо]]=$1oОTМ;
break;

case 179:

(function()
{
var $1oОTМ=$ррAН[$eННА[a].$Тp1M[$рМHо]];
var $OcOрc=$eАеА0($eННА[a].$lМe0Т[$рМHо]);
if($1oОTМ!==$0OрТ)
{
var $e1eoО=$1oОTМ.split($10M0);
var $HОpcl=$0Ме1А[$OcOрc][$eТоM];
var $llМTO=$0Ме1А[$OcOрc][$рHОМ];
for(var i=0;i<$e1eoО.length;i++)
{
var parts=$e1eoО[i].split($oсМс);

var model=parts[0];
var upgrade=$eАеА0(parts[1]);
var command=$eАеА0(parts[2]);

$opOpТ=$еАеО1(model,{
[$eТоM]: $HОpcl,
[$рHОМ]: $llМTO,
upg: upgrade,
command: command
});
}
}
})();
break;

case 180:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=$Oр0ol;
break;

case 181:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=$AоАе0;
break;

case 182:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=($AоАе0>=0)? $0Ме1А[$AоАе0][$AHop] : $оТTp;
break;
case 183:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=($AоАе0>=0)? $0Ме1А[$AоАе0][$оIpl] : $Мelе;
break;

case 184:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=$0Ме1А[$eАеА0($eННА[a].$lМe0Т[$рМHо])].io ? $0Ме1А[$eАеА0($eННА[a].$lМe0Т[$рМHо])][$AHop] : $Мelе;
break;
case 185:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=$0Ме1А[$eАеА0($eННА[a].$lМe0Т[$рМHо])].io ? $0Ме1А[$eАеА0($eННА[a].$lМe0Т[$рМHо])][$оIpl] : $Мelе;
break;
case 186:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=$0Ме1А[$eАеА0($eННА[a].$lМe0Т[$рМHо])][$cАocе];
break;

case 187:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=$0Ме1А[$ррAН[$eННА[a].$lМe0Т[$рМHо]]][$AHop];
break;
case 188:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=$0Ме1А[$ррAН[$eННА[a].$lМe0Т[$рМHо]]][$оIpl];
break;
case 189:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=$0Ме1А[$ррAН[$eННА[a].$lМe0Т[$рМHо]]][$cАocе];
break;
case 190:
$сМосA=true;
break;
case 191:
$сМосA=false;
break;
case 192:
sky.gotoAndStop($eАеА0($eННА[a].$Тp1M[$рМHо]));
break;
case 193:
var $OcНAM=$eННА[a].$Тp1M[$рМHо];
if($OcНAM.length===7)
{
var $HОТOo=$eАеА0($OcНAM.substr(1),16);
var r=(($HОТOo&0xFF0000)>>16);
var g=(($HОТOo&0x00FF00)>>8);
var b=(($HОТOo&0x0000FF));

sky.transform.colorTransform=new ColorTransform(r/255*2,g/255*2,b/255*2);
}
break;
case 194:
$MOpрT=parseFloat($eННА[a].$Тp1M[$рМHо]);
break;
case 195:
var r=$ррAН[$eННА[a].$Тp1M[$рМHо]];

if(sky.transform.colorTransform===null)
sky.transform.colorTransform=new ColorTransform(1,1,1);

sky.transform.colorTransform=new ColorTransform(r,
sky.transform.colorTransform.greenMultiplier,
sky.transform.colorTransform.blueMultiplier);
break;
case 196:
var r=$ррAН[$eННА[a].$Тp1M[$рМHо]];

if(sky.transform.colorTransform===null)
sky.transform.colorTransform=new ColorTransform(1,1,1);

sky.transform.colorTransform=new ColorTransform(sky.transform.colorTransform.redMultiplier,
r,
sky.transform.colorTransform.blueMultiplier);
break;
case 197:
var r=$ррAН[$eННА[a].$Тp1M[$рМHо]];

if(sky.transform.colorTransform===null)
sky.transform.colorTransform=new ColorTransform(1,1,1);

sky.transform.colorTransform=new ColorTransform(sky.transform.colorTransform.redMultiplier,
sky.transform.colorTransform.greenMultiplier,
r);
break;
case 198:
$ррAН[$eННА[a].$Тp1M[$рМHо]]={pitch:1,volume:1,[$lоАо]:$Нopc,rate:1};

try
{
if(ExternalInterface.$MеATo)
ExternalInterface.call($eООO);
}catch(e){}

break;
case 199:
$ррAН[$eННА[a].$Тp1M[$рМHо]].volume=Math.max(Math.min($eННА[a].$lМe0Т[$рМHо],1.5),0);
break;
case 200:
$ррAН[$eННА[a].$Тp1M[$рМHо]].pitch=Math.max(Math.min($eННА[a].$lМe0Т[$рМHо],1.5),0);
break;
case 201:
$ррAН[$eННА[a].$Тp1M[$рМHо]][$lоАо]=$eННА[a].$lМe0Т[$рМHо];
break;
case 202:
trace($еоес+$eННА[a].$lМe0Т[$рМHо].split($HMpТ).join($0Мeо).split($Н0Т1).join($1еTl)+$cA0А+$ррAН[$eННА[a].$Тp1M[$рМHо]][$lоАо].split($HMpТ).join($0Мeо).split($Н0Т1).join($1еTl)+$сoМT+$ррAН[$eННА[a].$Тp1M[$рМHо]].pitch+$0HoА+($ррAН[$eННА[a].$Тp1M[$рМHо]].volume*$АHсее)+$0HoА+($ррAН[$eННА[a].$Тp1M[$рМHо]].rate)+$eA1O);
try
{
if(ExternalInterface.$MеATo)
ExternalInterface.call($еоес+$eННА[a].$lМe0Т[$рМHо].split($HMpТ).join($0Мeо).split($Н0Т1).join($1еTl)+$cA0А+$ррAН[$eННА[a].$Тp1M[$рМHо]][$lоАо].split($HMpТ).join($0Мeо).split($Н0Т1).join($1еTl)+$сoМT+$ррAН[$eННА[a].$Тp1M[$рМHо]].pitch+$0HoА+($ррAН[$eННА[a].$Тp1M[$рМHо]].volume*$АHсее)+$0HoА+($ррAН[$eННА[a].$Тp1M[$рМHо]].rate)+$eA1O);
}catch(e){}
break;
case 203:
trace($еоес+$ррAН[$eННА[a].$lМe0Т[$рМHо]].split($HMpТ).join($0Мeо).split($Н0Т1).join($1еTl)+$cA0А+$ррAН[$eННА[a].$Тp1M[$рМHо]][$lоАо].split($HMpТ).join($0Мeо).split($Н0Т1).join($1еTl)+$сoМT+$ррAН[$eННА[a].$Тp1M[$рМHо]].pitch+$0HoА+($ррAН[$eННА[a].$Тp1M[$рМHо]].volume*$АHсее)+$0HoА+($ррAН[$eННА[a].$Тp1M[$рМHо]].rate)+$eA1O);
try
{
if(ExternalInterface.$MеATo)
ExternalInterface.call($еоес+$ррAН[$eННА[a].$lМe0Т[$рМHо]].split($HMpТ).join($0Мeо).split($Н0Т1).join($1еTl)+$cA0А+$ррAН[$eННА[a].$Тp1M[$рМHо]][$lоАо].split($HMpТ).join($0Мeо).split($Н0Т1).join($1еTl)+$сoМT+$ррAН[$eННА[a].$Тp1M[$рМHо]].pitch+$0HoА+($ррAН[$eННА[a].$Тp1M[$рМHо]].volume*$АHсее)+$0HoА+($ррAН[$eННА[a].$Тp1M[$рМHо]].rate)+$eA1O);
}catch(e){}
break;
case 204:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=Math.asin(parseFloat($ррAН[$eННА[a].$lМe0Т[$рМHо]]));
break;
case 205:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=Math.acos(parseFloat($ррAН[$eННА[a].$lМe0Т[$рМHо]]));
break;
case 206:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=Math.atan2(parseFloat($ррAН[$eННА[a].$Тp1M[$рМHо]]),parseFloat($ррAН[$eННА[a].$lМe0Т[$рМHо]]));
break;
case 207:
$lMAТМ=true;
break;
case 208:
$lMAТМ=false;
break;
case 209:
$НllIo=parseFloat($eННА[a].$Тp1M[$рМHо]);

break;
case 210:
$НllIo=parseFloat($ррAН[$eННА[a].$Тp1M[$рМHо]]);

break;
case 211:
$сТMТM=parseFloat($eННА[a].$Тp1M[$рМHо]);

break;
case 212:
$сТMТM=parseFloat($ррAН[$eННА[a].$Тp1M[$рМHо]]);

break;
case 213:
$сТIoc=parseFloat($eННА[a].$Тp1M[$рМHо]);

break;
case 214:
$1р0oe=parseFloat($eННА[a].$Тp1M[$рМHо]);

break;
case 215:
$реAАo=parseFloat($eННА[a].$Тp1M[$рМHо]);
break;
case 216:
$AlcTM=parseFloat($eННА[a].$Тp1M[$рМHо]);
break;
case 217:
$ТМоНH=parseFloat($eННА[a].$Тp1M[$рМHо]);
break;

case 218:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=parseFloat($eННА[a].$lМe0Т[$рМHо]);

$Т0TpA=$ОpMрс[$eННА[a].$Тp1M[$рМHо]];

$Т0TpA.$oТоAр=$eННА[a].$lМe0Т[$рМHо];
break;
case 219:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
var $HOoНМ=$ррAН[$eННА[a].$lМe0Т[$рМHо]];

$Т0TpA=$ОpMрс[$eННА[a].$Тp1M[$рМHо]];

$Т0TpA.$oТоAр=$HOoНМ;
break;
case 220:

$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=parseFloat($eННА[a].$lМe0Т[$рМHо]);

$ТTTTH($0Ме1А[$eННА[a].$Тp1M[$рМHо]],$eННА[a].$lМe0Т[$рМHо]);

break;
case 221:

$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
var $HOoНМ=$ррAН[$eННА[a].$lМe0Т[$рМHо]];

$ТTTTH($0Ме1А[$eННА[a].$Тp1M[$рМHо]],$HOoНМ);

break;
case 222:

$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=parseFloat($eННА[a].$lМe0Т[$рМHо]);

if($eННА[a].$Тp1M[$рМHо]===$НAlНc)
{
$оМMОО=parseFloat($eННА[a].$lМe0Т[$рМHо])/100;
if(isNaN($оМMОО))
$оМMОО=1;
if($оМMОО<0.01)
$оМMОО=0.01;
if($оМMОО>15)
$оМMОО=15;
}

break;
case 223:

if(($eННА[a].$Тp1M[$рМHо]+$0OрТ).length>2048)
throw new Error($ОlcТ);
if(($ррAН[$eННА[a].$Тp1M[$рМHо]]+$0OрТ).length>2048)
throw new Error($ооОo);

if($eАeОl)
{
if($pMМ1)
$ММ.Event($ММ[$pHHрA],$MITp,$eННА[a].$Тp1M[$рМHо],$ррAН[$eННА[a].$Тp1M[$рМHо]]);

}
else
throw new Error($ОTНe);

break;
case 224:

if(($eННА[a].$Тp1M[$рМHо]+$0OрТ).length>2048)
throw new Error($ОlcТ);
if(($ррAН[$eННА[a].$Тp1M[$рМHо]]+$0OрТ).length>2048)
throw new Error($ооОo);

if($eАeОl)
{
if($pMМ1)
$ММ.Event($ММ[$pHHрA],$oloе,$eННА[a].$Тp1M[$рМHо],$ррAН[$eННА[a].$Тp1M[$рМHо]]);

}
else
throw new Error($ОTНe);

break;
case 225:

if(($eННА[a].$Тp1M[$рМHо]+$0OрТ).length>2048)
throw new Error($ОlcТ);
if(($ррAН[$eННА[a].$Тp1M[$рМHо]]+$0OрТ).length>2048)
throw new Error($ооОo);

if($eАeОl)
{
if($pMМ1)
$ММ.Event($ММ[$pHHрA],$eТоM,$eННА[a].$Тp1M[$рМHо],$ррAН[$eННА[a].$Тp1M[$рМHо]]);

}
else
throw new Error($ОTНe);

break;
case 226:

if(($eННА[a].$Тp1M[$рМHо]+$0OрТ).length>2048)
throw new Error($ОlcТ);
if(($ррAН[$eННА[a].$Тp1M[$рМHо]]+$0OрТ).length>2048)
throw new Error($ооОo);

if($eАeОl)
{
if($pMМ1)
$ММ.Event($ММ[$pHHрA],$рpe0,$eННА[a].$Тp1M[$рМHо],$ррAН[$eННА[a].$Тp1M[$рМHо]]);

}
else
throw new Error($ОTНe);

break;
case 227:

if(($eННА[a].$Тp1M[$рМHо]+$0OрТ).length>2048)
throw new Error($ОlcТ);
if(($ррAН[$eННА[a].$Тp1M[$рМHо]]+$0OрТ).length>2048)
throw new Error($ооОo);

if($eАeОl)
{
if($pMМ1)
$ММ.Event($ММ[$pHHрA],$0cрО,$eННА[a].$Тp1M[$рМHо],$ррAН[$eННА[a].$Тp1M[$рМHо]]);

}
else
throw new Error($ОTНe);

break;
case 228:
$0c0MМ=$eАеА0($eННА[a].$Тp1M[$рМHо]);
break;

case 229:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$IАМе0($eННА[a].$Тp1M[$рМHо]);
break;

case 230:




var str=$eерН+$eННА[a].$lМe0Т[$рМHо].toLowerCase()+$eерН;

if(str.indexOf($eерН+$OоТTo[$eННА[a].$Тp1M[$рМHо]]+$eерН)===-1)
$рМHо=$eННА[a].$0ор1e;

break;

case 231:
{
let $Т0TpA=$AAрlТ[$eАеА0($eННА[a].$Тp1M[$рМHо])];

$Т0TpA.$MН1Mp.text=$оeoce($рITАM($eННА[a].$lМe0Т[$рМHо]));
}
break;

case 232:
{
let $Т0TpA=$AAрlТ[$eАеА0($eННА[a].$Тp1M[$рМHо])];

var $OcНAM=$eННА[a].$lМe0Т[$рМHо];
if($OcНAM.length===7)
{
var $HОТOo=$eАеА0($OcНAM.substr(1),16);
var r=(($HОТOo&0xFF0000)>>16);
var g=(($HОТOo&0x00FF00)>>8);
var b=(($HОТOo&0x0000FF));

let $0eIНc=new ColorTransform(r/255*2,g/255*2,b/255*2);

$Т0TpA.transform.colorTransform=$0eIНc;
$Т0TpA.transform._use_color_transform=($0eIНc.r!==1||$0eIНc.g!==1||$0eIНc.b!==1);


$Т0TpA.forEachChild((mc)=>
{
mc.transform.colorTransform=$0eIНc;
mc.transform._use_color_transform=($0eIНc.r!==1||$0eIНc.g!==1||$0eIНc.b!==1);
});

if($Т0TpA.$MН1Mp)
{
let $eеоA1=(n)=>
{
n=Math.min(255,Math.max(0,n)).toString(16);
if(n.length<2)
n=$MpoО+n;

return n;
};

$Т0TpA.$MН1Mp.textColor=$TlAp+$eеоA1(r*2)+$eеоA1(g*2)+$eеоA1(b*2);
}
}
}
break;

case 233:
{
let $Т0TpA=$AAрlТ[$eАеА0($eННА[a].$Тp1M[$рМHо])];

$Т0TpA.scaleX=$Т0TpA.scaleY=parseFloat($eННА[a].$lМe0Т[$рМHо]);

if($Т0TpA.$ОIрpА)
$Т0TpA.$ОIрpА();
}
break;

case 234:
{
let $Т0TpA=$AAрlТ[$eАеА0($eННА[a].$Тp1M[$рМHо])];

$Т0TpA.scaleX=$Т0TpA.scaleY=$ррAН[$eННА[a].$lМe0Т[$рМHо]];

if($Т0TpA.$ОIрpА)
$Т0TpA.$ОIрpА();
}
break;
case 235:

$ррAН[$eННА[a].$Тp1M[$рМHо]]=$MppHI;

break;
case 236:



$ррAН[$eННА[a].$Тp1M[$рМHо]]-=$MppHI;

break;


case 237:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
var accuracy=parseFloat($eННА[a].$lМe0Т[$рМHо]);

let $Т0TpA=$ОpMрс[$eННА[a].$Тp1M[$рМHо]];

$Т0TpA.$eоТlO=accuracy;
}
break;
case 238:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
var accuracy=parseFloat($eННА[a].$lМe0Т[$рМHо]);

let $Т0TpA=$ОpMрс[$eННА[a].$Тp1M[$рМHо]];

$Т0TpA.$МHlОо=accuracy;
}
break;
case 239:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
var accuracy=parseFloat($eННА[a].$lМe0Т[$рМHо]);

let $Т0TpA=$ОpMрс[$eННА[a].$Тp1M[$рМHо]];

$Т0TpA.$МсpрО=accuracy;
}
break;
case 240:
$eННА[a].$Тp1M[$рМHо]=parseFloat($eННА[a].$Тp1M[$рМHо]);
$HсO0Т=$eННА[a].$Тp1M[$рМHо];
break;
case 241:
$eННА[a].$Тp1M[$рМHо]=parseFloat($eННА[a].$Тp1M[$рМHо]);
$АH0oН=$eННА[a].$Тp1M[$рМHо];
break;
case 242:
$eННА[a].$Тp1M[$рМHо]=parseFloat($eННА[a].$Тp1M[$рМHо]);
$HcАНT=$eННА[a].$Тp1M[$рМHо];
break;
case 243:

$1OlHр(1,1,$HсTНe[parseFloat($eННА[a].$Тp1M[$рМHо])]);

break;
case 244:
$ррAН[$eННА[a].$Тp1M[$рМHо]].rate=Math.max(Math.min($eННА[a].$lМe0Т[$рМHо],3),0.1);
break;
case 245:

$OcIOО=$HсTНe[parseFloat($eННА[a].$Тp1M[$рМHо])];
$ННOlе=parseFloat($eННА[a].$lМe0Т[$рМHо]);

break;
case 246:

$OcIOО=null;
$ННOlе=0;

break;

case 247:

$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$ррAН[$eННА[a].$Тp1M[$рМHо]]=$0Ме1А[$eННА[a].$lМe0Т[$рМHо]].$AМIМ1;


break;
case 248:
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$ррAН[$eННА[a].$Тp1M[$рМHо]]=$0Ме1А[$eННА[a].$lМe0Т[$рМHо]].$TНесe;
break;
case 249:

$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$ррAН[$eННА[a].$Тp1M[$рМHо]]=$0Ме1А[$eННА[a].$lМe0Т[$рМHо]].$рoeсl ? 1 : 0;
break;
case 250:

$lесlА=true;

break;
case 251:

$lесlА=false;

break;
case 252:
{
let $Т0TpA=$AAрlТ[$eАеА0($eННА[a].$Тp1M[$рМHо])];

$Т0TpA.rotation=$ррAН[$eННА[a].$lМe0Т[$рМHо]];

if($Т0TpA.$ОIрpА)
$Т0TpA.$ОIрpА();
}
break;
case 253:
{
let $Т0TpA=$AAрlТ[$eАеА0($eННА[a].$Тp1M[$рМHо])];

$Т0TpA.rotation=parseFloat($eННА[a].$lМe0Т[$рМHо]);

if($Т0TpA.$ОIрpА)
$Т0TpA.$ОIрpА();
}
break;
case 254:
{
let $Т0TpA=$0Ме1А[$Oр0ol];
if($Т0TpA.io&&$Т0TpA[$МIIро]>0&&$Т0TpA[$МIIро]<$Т0TpA.hmax)
{
var $lMeОТ=parseFloat($eННА[a].$Тp1M[$рМHо]);
$Т0TpA[$МIIро]=Math.min($Т0TpA[$МIIро]+$lMeОТ,$Т0TpA.hmax);

if($lMeОТ>0)
if($Т0TpA[$МIIро]>=$еHApT)
$Т0TpA.$loАoM=false;
}
else
$рМHо=$eННА[a].$0ор1e;
}
break;
case 255:
{
let $Т0TpA=$0Ме1А[$eАеА0($eННА[a].$Тp1M[$рМHо])];
if($Т0TpA.io&&$Т0TpA[$МIIро]>0&&$Т0TpA[$МIIро]<$Т0TpA.hmax)
{
var $lMeОТ=parseFloat($eННА[a].$lМe0Т[$рМHо]);
$Т0TpA[$МIIро]=Math.min($Т0TpA[$МIIро]+$lMeОТ,$Т0TpA.hmax);

if($lMeОТ>0)
if($Т0TpA[$МIIро]>=$еHApT)
$Т0TpA.$loАoM=false;
}


}
break;
case 256:
{
let $Т0TpA=$0Ме1А[$eАеА0($eННА[a].$Тp1M[$рМHо])];
if($Т0TpA.io&&$Т0TpA[$МIIро]>0&&$Т0TpA[$МIIро]<$Т0TpA.hmax)
{
var $lMeОТ=$ррAН[$eННА[a].$lМe0Т[$рМHо]];
$Т0TpA[$МIIро]=Math.min($Т0TpA[$МIIро]+$lMeОТ,$Т0TpA.hmax);

if($lMeОТ>0)
if($Т0TpA[$МIIро]>=$еHApT)
$Т0TpA.$loАoM=false;
}


}
break;

case 257:
{
let $Т0TpA=$AAрlТ[$eАеА0($eННА[a].$Тp1M[$рМHо])];

$Т0TpA.rotation=$ррAН[$eННА[a].$lМe0Т[$рМHо]]/Math.PI*180;

if($Т0TpA.$ОIрpА)
$Т0TpA.$ОIрpА();
}
break;
case 258:
{
let $Т0TpA=$AAрlТ[$eАеА0($eННА[a].$Тp1M[$рМHо])];

$Т0TpA.rotation=parseFloat($eННА[a].$lМe0Т[$рМHо])/Math.PI*180;

if($Т0TpA.$ОIрpА)
$Т0TpA.$ОIрpА();
}
break;

case 259:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$Осрcр=$eННА[a].$lМe0Т[$рМHо];

$HсTНe[$eННА[a].$Тp1M[$рМHо]][$eТоM]=$0Ме1А[$Осрcр][$lо0HH]-$HсTНe[$eННА[a].$Тp1M[$рМHо]].w/2;
$HсTНe[$eННА[a].$Тp1M[$рМHо]][$рHОМ]=$0Ме1А[$Осрcр][$еоOOА]-$HсTНe[$eННА[a].$Тp1M[$рМHо]].h/2;

break;

case 260:

if($eННА[a].$lМe0Т[$рМHо]===$oАTТ)
{
$ОpMрс[$eАеА0($eННА[a].$Тp1M[$рМHо])].$оТlс0=null;
}
else
{






$ОpMрс[$eАеА0($eННА[a].$Тp1M[$рМHо])].$оТlс0=DefineSoundSource($eННА[a].$lМe0Т[$рМHо]);
}

break;
case 261:

$ОopеH=true;
$M1МТ1.visible=true;

break;
case 262:

$ОopеH=false;
$M1МТ1.visible=false;

break;
case 263:

$ррAН[$eННА[a].$Тp1M[$рМHо]]=$еO1Оl;

break;
case 264:

$еO1Оl=parseFloat($ррAН[$eННА[a].$Тp1M[$рМHо]]);

break;
case 265:

$сlIоO=parseFloat($ррAН[$eННА[a].$Тp1M[$рМHо]]);

break;
case 266:

$ррAН[$eННА[a].$Тp1M[$рМHо]]=$рНеOо();

break;

case 267:
{
let $Т0TpA=$AAрlТ[$eАеА0($eННА[a].$Тp1M[$рМHо])];

$Т0TpA.scaleX=parseFloat($eННА[a].$lМe0Т[$рМHо]);

if($Т0TpA.$ОIрpА)
$Т0TpA.$ОIрpА();
}
break;
case 268:
{
let $Т0TpA=$AAрlТ[$eАеА0($eННА[a].$Тp1M[$рМHо])];

$Т0TpA.scaleY=parseFloat($eННА[a].$lМe0Т[$рМHо]);

if($Т0TpA.$ОIрpА)
$Т0TpA.$ОIрpА();
}
break;

case 269:














break;

case 270:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=parseFloat($eННА[a].$lМe0Т[$рМHо]);

let mc=$0Ме1А[$eННА[a].$Тp1M[$рМHо]];

mc.antigravity=$eННА[a].$lМe0Т[$рМHо];
}
break;

case 271:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=parseFloat($eННА[a].$lМe0Т[$рМHо]);

let mc=$0Ме1А[$eННА[a].$Тp1M[$рМHо]];

mc.$oIМАp=$eННА[a].$lМe0Т[$рМHо];
}
break;

case 272:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=($eННА[a].$lМe0Т[$рМHо]);

let mc=$0Ме1А[$eННА[a].$Тp1M[$рМHо]];

if($pОplH.hasOwnProperty($eННА[a].$lМe0Т[$рМHо]))
mc[$lоАо]=$pОplH[$eННА[a].$lМe0Т[$рМHо]];
else
mc[$lоАо]=$pОplH[$AАеI];









}
break;
case 273:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);


let mc=$0Ме1А[$eННА[a].$Тp1M[$рМHо]];

mc.$оlсTН=true;









}
break;
case 274:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);


let mc=$0Ме1А[$eННА[a].$Тp1M[$рМHо]];

mc.$оlсTН=false;
mc.alpha=1;









}
break;
case 275:




if($IрOOО<$HTрМp)
$рМHо=$eННА[a].$0ор1e;

break;
case 276:




if($0АТоI<$HTрМp)
$рМHо=$eННА[a].$0ор1e;

break;
case 277:

$ррAН[$eННА[a].$Тp1M[$рМHо]]=$0АТоI;

break;
case 278:

$ррAН[$eННА[a].$Тp1M[$рМHо]]=$HTрМp;

break;





case 280:
{
let $c1Н1А=false;
let ok=false;

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
if(!$c1Н1А)
if($НOНОН($0Ме1А[i][$eТоM],$0Ме1А[i][$рHОМ],$0Ме1А[$НAlНc][$eТоM],$0Ме1А[$НAlНc][$рHОМ])<400)
{
$c1Н1А=true;
}
}

if(ok||$c1Н1А)
$ррAН[$eННА[a].$Тp1M[$рМHо]]=ok ? 1 : 0.5;
else
$ррAН[$eННА[a].$Тp1M[$рМHо]]=0;
}
break;
case 281:







$0Ме1А[$Oр0ol].effects.push({[$clе0р]:$1oMс,$МecHM:($eННА[a].$Тp1M[$рМHо]),duration:($eННА[a].$lМe0Т[$рМHо])});

break;
case 282:







$0Ме1А[$Oр0ol].effects.length=0;

break;
case 283:

$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$OОHMp=$eННА[a].$Тp1M[$рМHо];

$АATHc($HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w/2,
$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h/2,
0,
0,0,
2
);

break;
case 284:


$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

var $НТI1Т=$орIo0;

try
{



$НТI1Т=DefineSoundSource($eННА[a].$Тp1M[$рМHо]);
}
catch(error)
{
}


$оp0Нc($НТI1Т,
$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$eТоM]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].w/2,
$HсTНe[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]+$HсTНe[$eННА[a].$lМe0Т[$рМHо]].h/2);



break;
case 285:

$сАсlО();

break;
case 286:

if($Oр0ol===$НAlНc)
{
$сАсlО();
}

break;
case 287:

$еАеО1($eННА[a].$lМe0Т[$рМHо],$ОpMрс[$eАеА0($eННА[a].$Тp1M[$рМHо])],true);

break;
case 288:

if(Keyboard[$eННА[a].$lМe0Т[$рМHо]]===undefined)
8;

$ОТAHе[Keyboard[$eННА[a].$lМe0Т[$рМHо]]]=$eАеА0($eННА[a].$Тp1M[$рМHо]);

break;
case 289:

if(Keyboard[$eННА[a].$lМe0Т[$рМHо]]===undefined)
8;

$сIМрO[Keyboard[$eННА[a].$lМe0Т[$рМHо]]]=$eАеА0($eННА[a].$Тp1M[$рМHо]);

break;

case 290:
{
$eННА[a].$Тp1M[$рМHо]=Math.floor($eННА[a].$Тp1M[$рМHо]);
let mc=$0Ме1А[$eННА[a].$Тp1M[$рМHо]];
var $Нр01I=$ррAН[$eННА[a].$lМe0Т[$рМHо]]+$0OрТ;
mc.$Нр01I[0]=$Нр01I.charAt(0);
mc.$Нр01I[1]=$Нр01I.charAt(1);
mc.$Нр01I[2]=$Нр01I.charAt(2);
mc.$Нр01I[3]=$Нр01I.charAt(3);
$1loHе(mc,true);
}
break;
case 291:

$оМОlо=false;

break;
case 292:

$оМОlо=true;

break;

case 293:
{
let $Т0TpA=$AAрlТ[$eАеА0($eННА[a].$Тp1M[$рМHо])];

$Т0TpA.mask=$AAрlТ[$eАеА0($eННА[a].$lМe0Т[$рМHо])];
}
break;
case 294:

$ррAН[$eННА[a].$Тp1M[$рМHо]]=$ррAН[$ррAН[$eННА[a].$lМe0Т[$рМHо]]];

break;
case 295:

$ррAН[$eННА[a].$Тp1M[$рМHо]]=$рITАM($eННА[a].$lМe0Т[$рМHо]);

break;
case 296:

$еАеО1($ррAН[$eННА[a].$lМe0Т[$рМHо]],$ОpMрс[$eАеА0($eННА[a].$Тp1M[$рМHо])],true);

break;
case 297:
{
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=parseFloat($eННА[a].$lМe0Т[$рМHо]);

let mc=$0Ме1А[$eННА[a].$Тp1M[$рМHо]];

mc.$рOpMe=$eННА[a].$lМe0Т[$рМHо];
}
break;

case 298:
{






let $Т0TpA=$AAрlТ[$НpНoс($ОIo1o)];
$Т0TpA.alpha=Number($сp0pН);
$Т0TpA.visible=($Т0TpA.alpha<=0)? false : true;
if($Т0TpA.$ОIрpА)
{
$Т0TpA.$ОIрpА();
}
}
break;
case 299:
{






let $Т0TpA=$AAрlТ[$НpНoс($ОIo1o)];
$Т0TpA.alpha=Number($ррAН[$сp0pН]);
$Т0TpA.visible=($Т0TpA.alpha<=0)? false : true;
if($Т0TpA.$ОIрpА)
{
$Т0TpA.$ОIрpА();
}
break;
}
break;
case 300:
{
let $Т0TpA=$AAрlТ[$eАеА0($eННА[a].$Тp1M[$рМHо])];
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);





$Т0TpA[$eТоM]=$ОpMрс[$eННА[a].$lМe0Т[$рМHо]].$eТAeр;
$Т0TpA[$рHОМ]=$ОpMрс[$eННА[a].$lМe0Т[$рМHо]].$IHAOp;
$Т0TpA.rotation=$ОpMрс[$eННА[a].$lМe0Т[$рМHо]].$оАH1e;

if($ОpMрс[$eННА[a].$lМe0Т[$рМHо]].scaleX>0)
$Т0TpA.scaleX=Math.abs($Т0TpA.scaleX);
else
$Т0TpA.scaleX=-Math.abs($Т0TpA.scaleX);

if($ОpMрс[$eННА[a].$lМe0Т[$рМHо]].scaleY>0)
$Т0TpA.scaleY=Math.abs($Т0TpA.scaleY);
else
$Т0TpA.scaleY=-Math.abs($Т0TpA.scaleY);

if($Т0TpA.$ОIрpА)
$Т0TpA.$ОIрpА();

$1еоHA.add($Т0TpA);
}
break;
case 301:

$ОpMрс[$eАеА0($eННА[a].$Тp1M[$рМHо])].$1OНМо=parseFloat($eННА[a].$lМe0Т[$рМHо]);

break;
case 302:

$ОpMрс[$eАеА0($eННА[a].$Тp1M[$рМHо])].$1OНМо=parseFloat($ррAН[$eННА[a].$lМe0Т[$рМHо]]);

break;
case 303:

$ОpMрс[$eАеА0($eННА[a].$Тp1M[$рМHо])].$loHcM=parseFloat($eННА[a].$lМe0Т[$рМHо]);

break;
case 304:

$ОpMрс[$eАеА0($eННА[a].$Тp1M[$рМHо])].$HОеHр=parseFloat($eННА[a].$lМe0Т[$рМHо]);

break;
case 305:

$ОpMрс[$eАеА0($eННА[a].$Тp1M[$рМHо])].$T1T1O=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

break;
case 306:

$ОpMрс[$eАеА0($eННА[a].$Тp1M[$рМHо])].$eHоНс=parseFloat($eННА[a].$lМe0Т[$рМHо]);

$loсАТ($ОpMрс[$eАеА0($eННА[a].$Тp1M[$рМHо])].$T0МТМ,$ОpMрс[$eАеА0($eННА[a].$Тp1M[$рМHо])].$c0НlТ,$ОpMрс[$eАеА0($eННА[a].$Тp1M[$рМHо])].$рееоp,0,$сTpНО($ОpMрс[$eАеА0($eННА[a].$Тp1M[$рМHо])].$ТHoМс-$ОpMрс[$eАеА0($eННА[a].$Тp1M[$рМHо])].$eHоНс),-1);

break;
case 307:

$Hl1AА.visible=true;
$Hl1AА.alpha=1;
$AAсAр=$АТОТ;

break;
case 308:

$Hl1AА.visible=false;
$Hl1AА.alpha=0;
$AAсAр=$Аcle;

break;
case 309:

$Hl1AА.visible=true;
$Hl1AА.alpha=1;
$AAсAр=$е1cA;

if($pMМ1)
{
$ММ.$рОеAо();
$pMМ1=false;
}

break;
case 310:

if($Oр0ol===$НAlНc)
{
$Hl1AА.visible=true;
$Hl1AА.alpha=1;
$AAсAр=$е1cA;

if($pMМ1)
{
$ММ.$рОеAо();
$pMМ1=false;
}
}

break;
case 311:

if($AоАе0===$НAlНc)
{
$Hl1AА.visible=true;
$Hl1AА.alpha=1;
$AAсAр=$е1cA;

if($pMМ1)
{
$ММ.$рОеAо();
$pMМ1=false;
}
}

break;
case 312:

$0Ме1А[$eАеА0($eННА[a].$Тp1M[$рМHо])][$МАТОе]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$о1eНp($eАеА0($eННА[a].$Тp1M[$рМHо]));

break;
case 313:

if($0Ме1А[$eАеА0($eННА[a].$Тp1M[$рМHо])][$МАТОе]!==-1)
{
$ОpMрс[$0Ме1А[$eАеА0($eННА[a].$Тp1M[$рМHо])][$МАТОе]].picken_by=-1;

$0Ме1А[$eАеА0($eННА[a].$Тp1M[$рМHо])][$МАТОе]=-1;
}

break;
case 314:

$ррAН[$eННА[a].$Тp1M[$рМHо]]=$0Ме1А[$eАеА0($eННА[a].$lМe0Т[$рМHо])].$loАoM ? 1 : 0;

break;
case 315:

if($Oр0ol===-1)
$ррAН[$eННА[a].$Тp1M[$рМHо]]=0;
else
$ррAН[$eННА[a].$Тp1M[$рМHо]]=$0Ме1А[$Oр0ol].$loАoM ? 1 : 0;

break;
case 316:

if($AоАе0===-1)
$ррAН[$eННА[a].$Тp1M[$рМHо]]=0;
else
$ррAН[$eННА[a].$Тp1M[$рМHо]]=$0Ме1А[$AоАе0].$loАoM ? 1 : 0;

break;
case 317:

$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$0Ме1А[$Oр0ol][$cАocе]=$eННА[a].$lМe0Т[$рМHо];

$pНTс1($0Ме1А[$Oр0ol]);

$AOеоО($0Ме1А[$Oр0ol]);

for($AMTT1=0;$AMTT1<$eсАeA;$AMTT1++)
if($0Ме1А[$AMTT1].io)
$ОTсcО($0Ме1А[$AMTT1]);

break;


case 318:

$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);

mc=$0Ме1А[$eННА[a].$Тp1M[$рМHо]];

mc.$ОАpМО=false;

break;
case 319:

$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);

mc=$0Ме1А[$eННА[a].$Тp1M[$рМHо]];

mc.$ОАpМО=true;

break;
case 320:
{
let i=$НAlНc;
let $AMTT1=$eАеА0($eННА[a].$Тp1M[$рМHо]);

if($0Ме1А[$AMTT1].io)
{
$НAlНc=$AMTT1;

if($eАеА0($eННА[a].$lМe0Т[$рМHо])===1)
{
$ll1lА=0.01;

$OeМcO.visible=true;
$OeМcO.gotoAndPlay(1);
$Аоео0($clpOA);
}

$0Ме1А[$AMTT1].$HМ0М1=true;
$0Ме1А[i].$HМ0М1=false;

$pрMТl();
}
}
break;
case 321:

$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);

mc=$0Ме1А[$eННА[a].$Тp1M[$рМHо]];

mc.$AOсоМ=false;

break;
case 322:

$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);

mc=$0Ме1А[$eННА[a].$Тp1M[$рМHо]];

mc.$AOсоМ=true;

break;
case 323:

$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$HсTНe[$eННА[a].$Тp1M[$рМHо]][$eТоM]=$ОpMрс[$eННА[a].$lМe0Т[$рМHо]][$eТоM]-$HсTНe[$eННА[a].$Тp1M[$рМHо]].w/2;
$HсTНe[$eННА[a].$Тp1M[$рМHо]][$рHОМ]=$ОpMрс[$eННА[a].$lМe0Т[$рМHо]][$рHОМ]-$HсTНe[$eННА[a].$Тp1M[$рМHо]].h/2;

break;
case 324:
$eННА[a].$Тp1M[$рМHо]=$eАеА0($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$ОpMрс[$eННА[a].$Тp1M[$рМHо]].$cрTT0=$eННА[a].$lМe0Т[$рМHо];
break;
case 325:

$ррAН[$eННА[a].$Тp1M[$рМHо]]=$рITАM($ррAН[$eННА[a].$lМe0Т[$рМHо]]);

break;
case 326:

$ррAН[$eННА[a].$Тp1M[$рМHо]]=$рITАM($eННА[a].$lМe0Т[$рМHо]);

break;
case 327:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=Math.random()*parseFloat($ррAН[$eННА[a].$lМe0Т[$рМHо]]);
break;
case 328:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=Math.floor(Math.random()*(parseFloat($ррAН[$eННА[a].$lМe0Т[$рМHо]])-1));
break;
case 329:

$eННА[a].$Тp1M[$рМHо]=parseFloat($ррAН[$eННА[a].$Тp1M[$рМHо]]);
$eННА[a].$lМe0Т[$рМHо]=parseFloat($ррAН[$eННА[a].$lМe0Т[$рМHо]]);

$pТTсA($eННА[a].$Тp1M[$рМHо]);

if(!$TeIOl.visible)
myCursor.alpha=$eННА[a].$lМe0Т[$рМHо];

break;
case 330:




$pТTсA(parseFloat($ррAН[$eННА[a].$Тp1M[$рМHо]]));












if(!$TeIOl.visible)
myCursor.alpha=parseFloat($ррAН[$eННА[a].$lМe0Т[$рМHо]]);


break;
case 331:
$ррAН[$eННА[a].$Тp1M[$рМHо]]=$М1оAО;
break;
case 332:

$eННА[a].$Тp1M[$рМHо]=($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

if($ОpMрс[$eННА[a].$lМe0Т[$рМHо]].picken_by===-1||$0Ме1А[$ОpMрс[$eННА[a].$lМe0Т[$рМHо]].picken_by][$МАТОе]!==$ОpMрс[$eННА[a].$lМe0Т[$рМHо]].$MeсНе)
$ррAН[$eННА[a].$Тp1M[$рМHо]]=0;
else
$ррAН[$eННА[a].$Тp1M[$рМHо]]=1;

break;
case 333:

$eННА[a].$Тp1M[$рМHо]=($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

if($ОpMрс[$eННА[a].$lМe0Т[$рМHо]].picken_by===-1)
$ррAН[$eННА[a].$Тp1M[$рМHо]]=0;
else
$ррAН[$eННА[a].$Тp1M[$рМHо]]=1;

break;
case 334:

$eННА[a].$Тp1M[$рМHо]=($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$ррAН[$eННА[a].$Тp1M[$рМHо]]=$ОpMрс[$eННА[a].$lМe0Т[$рМHо]].ready ? $ОpMрс[$eННА[a].$lМe0Т[$рМHо]].totalFrames : Math.max(0,$ОpMрс[$eННА[a].$lМe0Т[$рМHо]].$OАMco-2);

break;
case 335:

$eННА[a].$Тp1M[$рМHо]=($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$ррAН[$eННА[a].$Тp1M[$рМHо]]=$ОpMрс[$eННА[a].$lМe0Т[$рМHо]].ready ? 1 : 0;

break;
case 336:

$eННА[a].$Тp1M[$рМHо]=($eННА[a].$Тp1M[$рМHо]);
$eННА[a].$lМe0Т[$рМHо]=$eАеА0($eННА[a].$lМe0Т[$рМHо]);

$ррAН[$eННА[a].$Тp1M[$рМHо]]=($ОpMрс[$eННА[a].$lМe0Т[$рМHо]].scaleY>0)? 1 :-1;

break;
case 337:






$ррAН[$ОIo1o]=$0Ме1А[$НpНoс($сp0pН)].$ееоАН;

break;
case 338:

$0cT11=false;

break;
case 339:

$0cT11=true;

break;
case 340:

$lеIIр=false;

break;
case 341:

$lеIIр=true;

break;

case 341:
$lеIIр=true;
break;
case 342:
$ррAН[$ррAН[$ОIo1o]]=$ррAН[$сp0pН];
break;
case 343:







var $AОp1М=screenX/$оМMОО;
var $00оТе=screenY/$оМMОО;

var $р0ОIl=$НpНoс($ОIo1o);
switch($НpНoс($сp0pН)){
case 0:
$AAрlТ[$р0ОIl][$eТоM]=-(game[$eТоM]-$AОp1М/2);
$AAрlТ[$р0ОIl][$рHОМ]=-(game[$рHОМ]-$00оТе/2);
break;
case 1:
$AAрlТ[$р0ОIl][$eТоM]=-game[$eТоM];
$AAрlТ[$р0ОIl][$рHОМ]=-game[$рHОМ];
break;
case 2:
$AAрlТ[$р0ОIl][$eТоM]=-(game[$eТоM]-$AОp1М);
$AAрlТ[$р0ОIl][$рHОМ]=-game[$рHОМ];
break;
case 3:
$AAрlТ[$р0ОIl][$eТоM]=-(game[$eТоM]-$AОp1М);
$AAрlТ[$р0ОIl][$рHОМ]=-(game[$рHОМ]-$00оТе);
break;
case 4:
$AAрlТ[$р0ОIl][$eТоM]=-game[$eТоM];
$AAрlТ[$р0ОIl][$рHОМ]=-(game[$рHОМ]-$00оТе);
break;
default:
break;
}
break;
case 344:
$ррAН[$ОIo1o]=$AAрlТ[$НpНoс($сp0pН)].rotation;
break;
case 345:
$AAрlТ[$НpНoс($ОIo1o)][$eТоM]=$HсTНe[$НpНoс($сp0pН)][$eТоM];
$AAрlТ[$НpНoс($ОIo1o)][$рHОМ]=$HсTНe[$НpНoс($сp0pН)][$рHОМ];
break;
case 346:
$0Ме1А[$НpНoс($ОIo1o)].gui.$pеMHH.visible=$сp0pН==$ОIlс;
break;
case 347:
mc=$0Ме1А[$НpНoс($ррAН[$ОIo1o])];
mc.$Нр01I[0]=mc.$Нр01I[1]=mc.$Нр01I[2]=mc.$Нр01I[3]=$ApоM;
mc.char=$НpНoс($ррAН[$сp0pН]);
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
break;
case 348:
$ррAН[$ОIo1o]=getTimer();
break;
case 349:
$ррAН[$ОIo1o]=$ррAН[$ОIo1o].split($сp0pН);
break;
case 350:
$ррAН[$ОIo1o]=$ррAН[$ОIo1o][$НpНoс($рITАM($сp0pН))];
break;
case 351:
if($0Ме1А[$НpНoс($ррAН[$ОIo1o])].io){
$Т0TpA=$0Ме1А[$НpНoс($ррAН[$ОIo1o])];
if($Т0TpA[$МIIро]>0){
u=$HсTНe[$НpНoс($сp0pН)][$eТоM]+Number($HсTНe[$НpНoс($сp0pН)].w)/2-$Т0TpA[$eТоM];
v=$HсTНe[$НpНoс($сp0pН)][$рHОМ]+Number($HсTНe[$НpНoс($сp0pН)].h)/2-$Т0TpA[$рHОМ];
$Т0TpA[$eТоM]=$HсTНe[$НpНoс($сp0pН)][$eТоM]+Number($HсTНe[$НpНoс($сp0pН)].w)/2;
$Т0TpA[$рHОМ]=$HсTНe[$НpНoс($сp0pН)][$рHОМ]+Number($HсTНe[$НpНoс($сp0pН)].h)/2;
if($НpНoс($ррAН[$ОIo1o])==$НAlНc){
game[$eТоM]+=u;
game[$рHОМ]+=v;
}
for($AMTT1=0;$AMTT1<$pООро;$AMTT1++){
if($о1oHМ[$AMTT1]!=$НpНoс($ррAН[$ОIo1o]))continue;
$Il[$AMTT1]+=u;
$0OA[$AMTT1]+=v;
$IcМMc[$AMTT1]+=u;
$MA0е1[$AMTT1]+=v;
}
}
}
break;
case 352:
$ррAН[$ОIo1o].push($рITАM($сp0pН));
break;
case 353:
$HсTНe[$ОIo1o][$eТоM]=Number($Il[$0Ме1А[$сp0pН].$MОеМ1])-Number($HсTНe[$ОIo1o].w)/2;
$HсTНe[$ОIo1o][$рHОМ]=Number($0OA[$0Ме1А[$сp0pН].$MОеМ1])-Number($HсTНe[$ОIo1o].h)/2;
break;
case 354:
$ррAН[$ОIo1o]=new Array();
break;
case 355:
mc=$ОpMрс[$НpНoс($ОIo1o)];
mc.$OMоlН=$НpНoс($рITАM($сp0pН));
break;
case 356:
mc=$0Ме1А[$НpНoс($ррAН[$ОIo1o])];
mc.$lOeНc=$НpНoс($ррAН[$сp0pН]);
$AOеоО(mc);
break;
case 357:
mc=$0Ме1А[$НpНoс($ррAН[$ОIo1o])];
mc.$THMcM=$НpНoс($ррAН[$сp0pН]);
$AOеоО(mc);
break;
case 358:
mc=$0Ме1А[$НpНoс($ррAН[$ОIo1o])];
mc.$Hlppе=$НpНoс($ррAН[$сp0pН]);
mc.$Аc01о=$НpНoс($ррAН[$сp0pН]);
mc.$ТрH0c=$НpНoс($ррAН[$сp0pН]);
mc.$ОАOрр=$НpНoс($ррAН[$сp0pН]);
$AOеоО(mc);
break;
case 359:
mc=$0Ме1А[$НpНoс($ррAН[$ОIo1o])];
$Нр01I=$ррAН[$сp0pН]+$Аcle;
mc.$Нр01I[0]=$Нр01I.charAt(0);
mc.$Нр01I[1]=$Нр01I.charAt(1);
mc.$Нр01I[2]=$Нр01I.charAt(2);
mc.$Нр01I[3]=$Нр01I.charAt(3);
$1loHе(mc,true);
break;
case 360:
mc=$0Ме1А[$НpНoс($ррAН[$ОIo1o])];
mc.$AААH1=$НpНoс($ррAН[$сp0pН]);
mc.$сТlAМ=$НpНoс($ррAН[$сp0pН]);
mc.$ТIpec=$НpНoс($ррAН[$сp0pН]);
mc.$НOоМO=$НpНoс($ррAН[$сp0pН]);
mc.$ОIMОo=$НpНoс($ррAН[$сp0pН]);
mc.$cHАoс=$НpНoс($ррAН[$сp0pН]);
mc.$A0АоА=$НpНoс($ррAН[$сp0pН]);
$AOеоО(mc);
break;
case 361:
if(String($ррAН[$ОIo1o])==String($ррAН[$сp0pН]))
$рМHо++;
break;
case 362:
a=$НpНoс($ррAН[$ОIo1o]);
$рМHо=-1;
break;
case 363:
a=$НpНoс($ОIo1o);
$рМHо=-1;
break;
case 364:
if(Number($ррAН[$ОIo1o])>Number($ррAН[$сp0pН]))
$рМHо++;
break;
case 365:
if(Number($ррAН[$ОIo1o])<Number($ррAН[$сp0pН]))
$рМHо++;
break;
case 366:
$АAHОе[$НpНoс($ОIo1o)].$oec0O=Number($ррAН[$сp0pН]);
break;
case 367:
$o0IсО[$НpНoс($ОIo1o)].$cTOHl=$НpНoс($ррAН[$сp0pН]);
break;
case 368:
if($НpНoс($ОIo1o)==$НAlНc)
$оМMОО=$НpНoс($ррAН[$сp0pН])/100;
break;
case 369:
$ррAН[$ОIo1o]=$оМMОО*100;
break;
case 370:
if($НpНoс($ррAН[$ОIo1o])==$НAlНc)
$оМMОО=$НpНoс($ррAН[$сp0pН])/100;
break;
case 371:
ok=true;
$MрHpА=0;
while(ok)
{
$MрHpА+=1;
if($MрHpА>10000)
{
break;
}
ok=true;
u=$HсTНe[$НpНoс($сp0pН)][$eТоM]+Math.random()*Number($HсTНe[$НpНoс($сp0pН)].w);
v=$lMМoc+($оpl1Т-$lMМoc)*Math.random();
if($0oеcН(u,v))
{
if(!$0oеcН(u,v+100))
{
ok=false;
}
}
i2=0;
while(i2<$оTolТ)
{
if(u>Number($ММoОo[i2])-100)
{
if(u<$ММoОo[i2]+$р1lMр[i2]+100)
{
if(v>Number($11ТоО[i2])-100)
{
if(v<$11ТоО[i2]+$coТНp[i2]+100)
{
ok=true;
}
}
}
}
++i2;
}
if($0Ме1А[$НAlНc][$cАocе]!=$0Ме1А[$НpНoс($ОIo1o)][$cАocе])
{
if($НOНОН(u,v,$0Ме1А[$НAlНc][$eТоM],$0Ме1А[$НAlНc][$рHОМ])<400)
{
if($0ОoHс<10)
{
ok=true;
++$0ОoHс;
}
}
}
}
$0Ме1А[$НpНoс($ОIo1o)][$eТоM]=u;
$0Ме1А[$НpНoс($ОIo1o)][$рHОМ]=v;
break;
case 372:
if($НpНoс($ОIo1o)>0){
$ррAН[$сp0pН]=$ррAН[$сp0pН].slice($НpНoс($ОIo1o));
} else{
$ррAН[$сp0pН]=$ррAН[$сp0pН].slice(0,$ррAН[$сp0pН].length-(-$НpНoс($ОIo1o)));
}
break;
case 373:
$ррAН[$ОIo1o]=(Math.atan2($HсTНe[$cIсA1($сp0pН.split($HcеА)[0])][$рHОМ]-$HсTНe[$cIсA1($сp0pН.split($HcеА)[1])][$рHОМ],$HсTНe[$cIсA1($сp0pН.split($HcеА)[0])][$eТоM]-$HсTНe[$cIсA1($сp0pН.split($HcеА)[1])][$eТоM])/Math.PI)*180+180;
break;
case 374:
$0Ме1А[$ОIo1o].$eoОpА=Number($сp0pН);
break;
case 375:
$0Ме1А[$ОIo1o].$eoОpА=Number($ррAН[$сp0pН]);
break;
case 376:
$ррAН[$ОIo1o]=$0Ме1А[$сp0pН].$eoОpА;
break;
case 377:
$ОpMрс[$НpНoс($ОIo1o)].upg=$НpНoс($рITАM($сp0pН));
break;
case 378:
$сp0pН=$рITАM($сp0pН);
if($сp0pН.length===7){
$HAАOН=$eАеА0($сp0pН.split($TlAp).join($pе1M));

red=($HAАOН&16711680)>>16;
green=($HAАOН&65280)>>8;
blue=$HAАOН&255;
$lI1ol=new ColorMatrixFilter();
matrix=new Array();
matrix=matrix.concat([1,0,0,0,red]);
matrix=matrix.concat([0,1,0,0,green]);
matrix=matrix.concat([0,0,1,0,blue]);
matrix=matrix.concat([0,0,0,1,0]);
$lI1ol.matrix=matrix;
$ОpMрс[$НpНoс($ОIo1o)].filters=new Array($lI1ol);
}
break;
case 379:
$ОIo1o=$НpНoс($ОIo1o);
$сp0pН=$рITАM($сp0pН);
if($Alcсe[$ОIo1o])
if($сp0pН.length===7)
{
$HОТOo=$НpНoс($eАеА0($сp0pН.substr(1),16));
r=($HОТOo&16711680)>>16;
g=($HОТOo&65280)>>8;
b=$HОТOo&255;

let $0eIНc=new ColorTransform(r/255*2,g/255*2,b/255*2);

$Alcсe[$ОIo1o].forEachChild((c)=>{c.transform.colorTransform=$0eIНc;},false);
}
break;
case 380:
dm_slots_on_spawn=$ррAН[$ОIo1o].split($lсcе).join($Аcle).split($ТОlе);
break;
case 381:
dm_max_guns_on_spawn=$НpНoс($ррAН[$ОIo1o]);
break;
case 382:
$1c10О.graphics.moveTo($HсTНe[$ОIo1o][$eТоM],$HсTНe[$ОIo1o][$рHОМ]);
$1c10О.graphics.lineTo($HсTНe[$сp0pН][$eТоM],$HсTНe[$сp0pН][$рHОМ]);
break;
case 383:

if(!$НсAОМ.hasOwnProperty($ОIo1o))
{
$НсAОМ[$рITАM($ОIo1o)]=new Sprite();
if($НpНoс($сp0pН)<=1){
graphics_3d.addChild($НсAОМ[$рITАM($ОIo1o)]);
} else if($НpНoс($сp0pН)==2){
game.addChild($НсAОМ[$рITАM($ОIo1o)]);
} else{
graphics_3d_front.addChild($НсAОМ[$рITАM($ОIo1o)]);
}
}
break;
case 384:
$1c10О=$НсAОМ[$рITАM($ОIo1o)];
break;
case 385:

$НсAОМ[$рITАM($ОIo1o)].graphics.beginFill(TextField.AsHexColor($сp0pН));
break;
case 386:
$НсAОМ[$рITАM($ОIo1o)].graphics.endFill();
break;
case 387:
$1c10О.graphics.drawCircle($HсTНe[$ОIo1o][$eТоM],$HсTНe[$ОIo1o][$рHОМ],Number($сp0pН));
break;
case 388:
$НсAОМ[$рITАM($ОIo1o)].graphics.clear();
break;
case 389:

$1c10О.graphics.setStokeStyle(Number($ОIo1o),TextField.AsHexColor($сp0pН));
break;
case 390:
$НсAОМ[$рITАM($ОIo1o)].graphics.moveTo($HсTНe[$сp0pН][$eТоM],$HсTНe[$сp0pН][$рHОМ]);
break;
case 391:
$НсAОМ[$рITАM($ОIo1o)].graphics.lineTo($HсTНe[$сp0pН][$eТоM],$HсTНe[$сp0pН][$рHОМ]);
break;
case 392:
$ОIo1o=$НpНoс($ОIo1o);
$сp0pН=$НpНoс($сp0pН);
$ММoОo[$ОIo1o]=$HсTНe[$сp0pН][$eТоM];
$11ТоО[$ОIo1o]=$HсTНe[$сp0pН][$рHОМ];
$НсОТе[$ОIo1o][$eТоM]=$HсTНe[$сp0pН][$eТоM];
$НсОТе[$ОIo1o][$рHОМ]=$HсTНe[$сp0pН][$рHОМ];
break;
case 393:
$ррAН[$ОIo1o]=new Date().getTime();
break;
case 394:
$ррAН[$ОIo1o]=new Date($ррAН[$сp0pН].split($lсcе).join($Аcle).split($ТОlе)[0],$ррAН[$сp0pН].split($lсcе).join($Аcle).split($ТОlе)[1],$ррAН[$сp0pН].split($lсcе).join($Аcle).split($ТОlе)[2]).getTime();
break;
case 395:
$lcAHМ[$НpНoс($ОIo1o)]=$НpНoс($рITАM($сp0pН));
break;
case 396:
$HсTНe[$ОIo1o][$eТоM]=-game[$eТоM]/$оМMОО;
$HсTНe[$ОIo1o][$рHОМ]=-game[$рHОМ]/$оМMОО;
break;
case 397:
$ррAН[$ОIo1o]=$IlMНM ? $еlеc : $ТlМe;
break;
case 398:
if(typeof $сp0pН===$ср0I){
$сp0pН=$сp0pН.replace($lсcе,$Аcle).split($ТОlе);
$сp0pН=[$HсTНe[$cIсA1($сp0pН[0])],$HсTНe[$cIсA1($сp0pН[1])]];

}
$ррAН[$ОIo1o]=
Math.sqrt(Math.pow($сp0pН[0][$eТоM]-$сp0pН[1][$eТоM],2)+Math.pow($сp0pН[0][$рHОМ]-$сp0pН[1][$рHОМ],2));
break;
case 399:
$ррAН[$ОIo1o]=$ррAН[$ОIo1o].split($ррAН[$сp0pН]);
break;
case 400:
$0Ме1А[$НpНoс($ррAН[$ОIo1o])].$оlсTН=true;
break;
case 401:
mc=$0Ме1А[$НpНoс($ррAН[$ОIo1o])];
mc.$оlсTН=false;
mc.alpha=1;
break;
case 402:
$0Ме1А[$НpНoс($ррAН[$ОIo1o])][$eТоM]=$0Ме1А[$НpНoс($ррAН[$ОIo1o])].$Тссес;
$0Ме1А[$НpНoс($ррAН[$ОIo1o])][$рHОМ]=$0Ме1А[$НpНoс($ррAН[$ОIo1o])].$I0IНA;
break;
case 403:






$lI1ol=new ColorMatrixFilter($ррAН[$сp0pН]);
$ОpMрс[$НpНoс($ОIo1o)].filters=new Array($lI1ol);
break;
case 404:
$opOpТ=$0Ме1А[$НpНoс($ррAН[$ОIo1o])];
$eMOАе=$0Ме1А[$НpНoс($ррAН[$сp0pН])];
$opOpТ[$МIIро]=$opOpТ.hmax=$eMOАе.hmax;
if($opOpТ[$МIIро]>0)
{
$opOpТ.$оeoТе=false;
$opOpТ.$loАoM=false;
$o0MIс($НpНoс($ррAН[$ОIo1o]));
if(Boolean($opOpТ.$HМ0М1)||$opOpТ[$cАocе]==$0Ме1А[$НAlНc][$cАocе])
{
$opOpТ.gui.alpha=1;
$opOpТ.gui.visible=true;
$opOpТ[$0MТce]=-1;
}
$opOpТ.$ОрОAA=0;
$opOpТ.$ААНММ=Math.max(Number($opOpТ)*0.4,30);
$opOpТ.$НТcep=Math.max(Number($opOpТ)*0.6,30);
$opOpТ.$HAрH1=Math.max(Number($opOpТ)*0.5,30);
$opOpТ.$lMIсo=Math.max(Number($opOpТ[$МIIро])*0.4,30);
$IHcоТ($НpНoс($ррAН[$ОIo1o]));
}
$ТTTTH($opOpТ,$eMOАе.scale);
$opOpТ.$MAНIp=$eMOАе.$MAНIp;
$opOpТ.antigravity=$eMOАе.antigravity;
$opOpТ.$oIМАp=$eMOАе.$oIМАp;
$opOpТ.$ОАpМО=$eMOАе.$ОАpМО;
$opOpТ.$AOсоМ=$eMOАе.$AOсоМ;
$opOpТ[$lоАо]=$eMOАе[$lоАо];
$opOpТ.$оlсTН=$eMOАе.$оlсTН;
$opOpТ.gui.$pеMHH.text=$eMOАе.gui.$pеMHH.text;
$opOpТ.$eHМAT=$eMOАе.$eHМAT;
$opOpТ[$cАocе]=new Number($eMOАе[$cАocе]);
if($opOpТ[$cАocе]!=$0Ме1А[$НAlНc][$cАocе])
{
$opOpТ.gui.visible=false;
}
$ОTсcО($opOpТ);
$opOpТ.$Нр01I=$eMOАе.$Нр01I;
$opOpТ[$0OАс]=new Number($eMOАе[$0OАс]);
$opOpТ.char=new Number($eMOАе.char);
$opOpТ.$AААH1=new Number($eMOАе.$AААH1);
$opOpТ.$сТlAМ=new Number($eMOАе.$сТlAМ);
$opOpТ.$ТIpec=new Number($eMOАе.$ТIpec);
$opOpТ.$НOоМO=new Number($eMOАе.$НOоМO);
$opOpТ.$ОIMОo=new Number($eMOАе.$ОIMОo);
$opOpТ.$cHАoс=new Number($eMOАе.$cHАoс);
$opOpТ.$Hlppе=new Number($eMOАе.$Hlppе);
$opOpТ.$Аc01о=new Number($eMOАе.$Аc01о);
$opOpТ.$ТрH0c=new Number($eMOАе.$ТрH0c);
$opOpТ.$ОАOрр=new Number($eMOАе.$ОАOрр);
$opOpТ.$A0АоА=new Number($eMOАе.$A0АоА);
$opOpТ.$THMcM=new Number($eMOАе.$THMcM);
$opOpТ.$lOeНc=new Number($eMOАе.$lOeНc);
$opOpТ.$HpO0О=new Number($eMOАе.$HpO0О);
$opOpТ.$НIHрl=new Number($eMOАе.$НIHрl);
if($eMOАе.$АсIее.lower.$оАОНА!=null)
{
$opOpТ.$АсIее.lower.$оАОНА.visible=$eMOАе.$АсIее.lower.$оАОНА.visible;
}
if($eMOАе.$ТНpТI.lower.$оАОНА!=null)
{
$opOpТ.$ТНpТI.lower.$оАОНА.visible=$eMOАе.$ТНpТI.lower.$оАОНА.visible;
}
$opOpТ.$Alр10=$eMOАе.$Alр10;
$opOpТ.$оМcHM=$eMOАе.$оМcHM;
$opOpТ.$рМMоО=$eMOАе.$рМMоО;
$pНTс1($opOpТ);
$AOеоО($opOpТ);
break;
case 405:
$ррAН[$ОIo1o]=$ррAН[$ОIo1o].join($ррAН[$сp0pН]);
break;
case 406:
case 407:
var r1=$HсTНe[$НpНoс($ОIo1o)];
var $ср1О0=$HсTНe[$НpНoс($сp0pН)];
$MММ1е=$cТНIc(r1[$eТоM]+Number(r1.w)/2,r1[$рHОМ]+Number(r1.h)/2,
$ср1О0[$eТоM]+Number($ср1О0.w)/2,$ср1О0[$рHОМ]+Number($ср1О0.h)/2);
if($MММ1е==($eННА[a].$НT0еM[$рМHо]==407))
$рМHо=$НpНoс(this.$eННА[a].$0ор1e);
break;
case 408:






$lI1ol=new ColorMatrixFilter($ррAН[$сp0pН]);
$AAрlТ[$НpНoс($ОIo1o)].filters=new Array($lI1ol);
break;
case 409:

8;

var $еMТTТ=new ColorTransform();
$еMТTТ.color=$о1cрI($elce+$рITАM($сp0pН.substr(1)));
$НсОТе[$НpНoс($ОIo1o)].transform.colorTransform=$еMТTТ;
break;
case 410:
if($0Ме1А[$НpНoс($сp0pН)][$МАТОе]!=-1)
$ррAН[$ОIo1o]=$ОpMрс[$0Ме1А[$НpНoс($сp0pН)][$МАТОе]].model;
break;
case 411:
if($ОpMрс[$НpНoс($сp0pН)].picken_by==$НpНoс($ОIo1o)){
$ОpMрс[$НpНoс($сp0pН)].picken_by=-1;
if($0Ме1А[$НpНoс($ОIo1o)][$МАТОе]==$НpНoс($сp0pН))
$0Ме1А[$НpНoс($ОIo1o)][$МАТОе]=-1;
}
break;











case 413:
$НсAОМ[$рITАM($ОIo1o)][$eТоM]=Number($ррAН[$сp0pН]);
break;
case 414:
$НсAОМ[$рITАM($ОIo1o)][$рHОМ]=Number($ррAН[$сp0pН]);
break;
case 415:
$НсAОМ[$рITАM($ОIo1o)].rotation=Number($ррAН[$сp0pН]);
break;
case 416:
$HсTНe[$НpНoс($ОIo1o)][$eТоM]=Number($0Ме1А[$НpНoс($ррAН[$сp0pН])][$eТоM])-Number($HсTНe[$НpНoс($ОIo1o)].w)/2;
$HсTНe[$НpНoс($ОIo1o)][$рHОМ]=Number($0Ме1А[$НpНoс($ррAН[$сp0pН])][$рHОМ])-Number($HсTНe[$НpНoс($ОIo1o)].h)/2;
break;
case 417:
$HсTНe[$НpНoс($ОIo1o)][$eТоM]=Number($0Ме1А[$НpНoс($ррAН[$сp0pН])][$lо0HH])-Number($HсTНe[$НpНoс($ОIo1o)].w)/2;
$HсTНe[$НpНoс($ОIo1o)][$рHОМ]=Number($0Ме1А[$НpНoс($ррAН[$сp0pН])][$еоOOА])-Number($HсTНe[$НpНoс($ОIo1o)].h)/2;
break;
case 418:
$1c10О.graphics.drawRect(
$HсTНe[$НpНoс($ОIo1o)][$eТоM],
$HсTНe[$НpНoс($ОIo1o)][$рHОМ],
Math.abs($HсTНe[$НpНoс($ОIo1o)][$eТоM]-$HсTНe[$НpНoс($сp0pН)][$eТоM]),
Math.abs($HсTНe[$НpНoс($ОIo1o)][$рHОМ]-$HсTНe[$НpНoс($сp0pН)][$рHОМ])
);
break;
case 419:
$НсAОМ[$рITАM($ОIo1o)].scaleX=$НсAОМ[$рITАM($ОIo1o)].scaleY=Number($ррAН[$сp0pН]);
break;
case 420:
$НсAОМ[$рITАM($сp0pН)].graphics.$МTM0O($НсAОМ[$рITАM($ОIo1o)]);
break;



case 422:
ChatNewMsg($TAо1+($Т0HНT[$0Ме1А[$НpНoс($сp0pН)][$cАocе]]!=undefined ? $Т0HНT[$0Ме1А[$НpНoс($сp0pН)][$cАocе]]: $10Aо)+$Apce+$0Ме1А[$НpНoс($сp0pН)].$eHМAT.split($TO1с).join($1МoН).split($eеОc).join($001А)+$OНо0+$рITАM($ОIo1o)+$срАc);
break;
case 423:



if(this.$AAрlТ[$НpНoс($ОIo1o)].model.charAt(0)==$НlAТ){
var $рTIep=$сМсlc(this.$AAрlТ[$НpНoс($ОIo1o)].model.substr(1));
var $O1ОlН=new Matrix(1,0,0,1,$HсTНe[$НpНoс($сp0pН)][$eТоM],$HсTНe[$НpНoс($сp0pН)][$рHОМ]);
$1c10О.graphics.beginBitmapFill($рTIep.bitmap_data,$O1ОlН,false);
$1c10О.graphics.drawRect($HсTНe[$НpНoс($сp0pН)][$eТоM],$HсTНe[$НpНoс($сp0pН)][$рHОМ],$рTIep.width,$рTIep.height);
$1c10О.graphics.endFill();
}
break;
case 424:
$HсTНe[$ОIo1o][$eТоM]=Number($Il[$0Ме1А[$НpНoс($ррAН[$сp0pН])].$MОеМ1])-Number($HсTНe[$ОIo1o].w)/2;
$HсTНe[$ОIo1o][$рHОМ]=Number($0OA[$0Ме1А[$НpНoс($ррAН[$сp0pН])].$MОеМ1])-Number($HсTНe[$ОIo1o].h)/2;
break;
case 425:
$ррAН[$ОIo1o]=$0Ме1А[$НpНoс($сp0pН)][$АсТOе];
break;
case 426:
$ррAН[$ОIo1o]=$0Ме1А[$НpНoс($сp0pН)][$МcеAH];
break;
case 427:
$ррAН[$ОIo1o]=$0Ме1А[$НpНoс($ррAН[$сp0pН])][$АсТOе];
break;
case 428:
$ррAН[$ОIo1o]=$0Ме1А[$НpНoс($ррAН[$сp0pН])][$МcеAH];
break;
case 429:
$ОIo1o=$НpНoс($ОIo1o);
for($еТМ0O=0;$еТМ0O<$pООро;$еТМ0O++){
if($о1oHМ[$еТМ0O]!=$ОIo1o)continue;
$OTpc1[$еТМ0O]=Number($ррAН[$сp0pН]);
}
$0Ме1А[$НpНoс($ОIo1o)][$АсТOе]=Number($ррAН[$сp0pН]);
break;
case 430:
$ОIo1o=$НpНoс($ОIo1o);
for($еТМ0O=0;$еТМ0O<$pООро;$еТМ0O++){
if($о1oHМ[$еТМ0O]!=$ОIo1o)continue;
$IрТ0H[$еТМ0O]=Number($ррAН[$сp0pН]);
}
$0Ме1А[$НpНoс($ОIo1o)][$МcеAH]=Number($ррAН[$сp0pН]);
break;
case 431:
for($еТМ0O=0;$еТМ0O<$pООро;$еТМ0O++){
if($о1oHМ[$еТМ0O]!=$НpНoс($ррAН[$ОIo1o]))continue;
$OTpc1[$еТМ0O]=Number($ррAН[$сp0pН]);
}
$0Ме1А[$НpНoс($ррAН[$ОIo1o])][$АсТOе]=Number($ррAН[$сp0pН]);
break;
case 432:
for($еТМ0O=0;$еТМ0O<$pООро;$еТМ0O++){
if($о1oHМ[$еТМ0O]!=$НpНoс($ррAН[$ОIo1o]))continue;
$IрТ0H[$еТМ0O]=Number($ррAН[$сp0pН]);
}
$0Ме1А[$НpНoс($ррAН[$ОIo1o])][$МcеAH]=Number($ррAН[$сp0pН]);
break;
case 433:
$НсAОМ[$рITАM($ОIo1o)].alpha=Number($ррAН[$сp0pН])/100;
break;
case 434:
$ррAН[$ОIo1o]=Math.sqrt(Math.pow($0Ме1А[$НpНoс($сp0pН)][$АсТOе],2)+Math.pow($0Ме1А[$НpНoс($сp0pН)][$МcеAH],2));
break;
case 435:
$ррAН[$ОIo1o]=Math.sqrt(Math.pow($0Ме1А[$НpНoс($ррAН[$сp0pН])][$АсТOе],2)+Math.pow($0Ме1А[$НpНoс($ррAН[$сp0pН])][$МcеAH],2));
break;
case 436:
$ррAН[$ОIo1o]=$рTТА;
break;
case 437:
$AAрlТ[$НpНoс($ОIo1o)][$eТоM]=$сoopT[$НpНoс($сp0pН)][$eТоM];
$AAрlТ[$НpНoс($ОIo1o)][$рHОМ]=$сoopT[$НpНoс($сp0pН)][$рHОМ];
if($сoopT[$НpНoс($сp0pН)].$eрlсe==0||$сoopT[$НpНoс($сp0pН)].$eрlсe==1||$сoopT[$НpНoс($сp0pН)].$eрlсe==4||$сoopT[$НpНoс($сp0pН)].$eрlсe==7){
$AAрlТ[$НpНoс($ОIo1o)].rotation=$сoopT[$НpНoс($сp0pН)].carbody.rotation;
} else if($сoopT[$НpНoс($сp0pН)].$eрlсe==3){
$AAрlТ[$НpНoс($ОIo1o)].rotation=$сoopT[$НpНoс($сp0pН)].rotation+90;
} else if($сoopT[$НpНoс($сp0pН)].$eрlсe==2){
$AAрlТ[$НpНoс($ОIo1o)].rotation=$сoopT[$НpНoс($сp0pН)].$рАрос.rotation+180;
}
if($сoopT[$сp0pН].$ееоАН>0)
{
$AAрlТ[$НpНoс($ОIo1o)].scaleY=Math.abs($AAрlТ[$НpНoс($ОIo1o)].scaleY);
}
else
{

$AAрlТ[$НpНoс($ОIo1o)].scaleY=-Math.abs($AAрlТ[$НpНoс($ОIo1o)].scaleY);
}
break;
case 438:
$сoopT[$НpНoс($ОIo1o)].$peрНo=($сp0pН===$ОIlс);



break;
case 439:
$сoopT[$НpНoс($ОIo1o)].$ОМрO0=$сp0pН;
break;
case 440:
$Oр0ol=$НpНoс($сp0pН);
$eННА[$HсTНe[$ОIo1o].$pMcpo].$АeOАT=false;
$pАTIТ($HсTНe[$ОIo1o].$pMcpo);
break;
case 441:
$ocTAТ=($ОIo1o==$ОIlс);
break;



case 443:
$1c10О.graphics.$ОрOMl(Number($ррAН[$ОIo1o]),$о1cрI($elce+$ррAН[$сp0pН].substr(1)));
break;
case 444:
this.$ОpMрс[$ОIo1o].$еe0Мо=Number($ррAН[$сp0pН]);
break;







case 446:
$0Ме1А[$НpНoс($ОIo1o)].gui.alpha=Number($сp0pН);
break;
case 447:
$0Ме1А[$НpНoс($ОIo1o)].gui.alpha=Number($ррAН[$сp0pН]);
break;
case 448:
$0Ме1А[$НpНoс($ррAН[$ОIo1o])].gui.alpha=Number($сp0pН);
break;
case 449:
$0Ме1А[$НpНoс($ррAН[$ОIo1o])].gui.alpha=Number($ррAН[$сp0pН]);
break;
case 450:
$oТАТМ=Number($ОIo1o);
break;
case 451:
$0Ме1А[$ОIo1o].$AolОо=Number($ррAН[$сp0pН]);
break;
case 452:
$0Ме1А[$ррAН[$ОIo1o]].$AolОо=Number($ррAН[$сp0pН]);
break;
case 453:
$рOНpе=$сp0pН==$ОIlс;
break;
case 454:
$ррAН[$ОIo1o]=$o0IсО[$сp0pН].$OАосс;
break;
case 455:
$0Ме1А[$НpНoс($ОIo1o)].$eHМAT=$0Ме1А[$НpНoс($ОIo1o)].gui.$pеMHH.text=$ррAН[$сp0pН];
break;
case 456:
$0Ме1А[$НpНoс($ОIo1o)].gui.$pеMHH.text=$ррAН[$сp0pН];
break;







case 458:
$cеНlН=$НpНoс($ОIo1o);
$0Ме1А[$cеНlН].$сllсl=($сp0pН===$ОIlс);
if($0Ме1А[$cеНlН].io)
if(!$0Ме1А[$cеНlН].$оeoТе)
$o0MIс($cеНlН);













break;
case 459:
case 549:
$cеНlН=$НpНoс($ррAН[$ОIo1o]);
$0Ме1А[$cеНlН].$сllсl=($сp0pН===$ОIlс);
if($0Ме1А[$cеНlН].io)
if(!$0Ме1А[$cеНlН].$оeoТе)
$o0MIс($cеНlН);












break;
case 460:
$еоНМо[$ОIo1o][$МIIро]=$НpНoс($ррAН[$сp0pН]);
$AАoIр($сp0pН);
break;
case 461:
if($еоНМо[$ОIo1o][$IlТое]==$АНpo)
{
mc=game.addChildAt(new bar_orange(),game.numChildren);
}
if($еоНМо[$ОIo1o][$IlТое]==$lТА1)
{
mc=game.addChildAt(new bar_blue(),game.numChildren);
}
if($еоНМо[$ОIo1o][$IlТое]==$clрc)
{
mc=game.addChildAt(new bar_red(),game.numChildren);
}
$сOoНН(mc);
mc[$IlТое]=$еоНМо[$ОIo1o][$IlТое];
mc[$eТоM]=$HсTНe[$сp0pН][$eТоM]+Number($HсTНe[$сp0pН].w)/2;
mc[$рHОМ]=$HсTНe[$сp0pН][$рHОМ]+Number($HсTНe[$сp0pН].h)/2;
mc[$АсТOе]=0;
mc[$МcеAH]=0;
mc.$OOHAТ=-1;
$oМТHТ(mc);
break;
case 462:
$Т0TpA=$AAрlТ[$НpНoс($ОIo1o)];
$сp0pН=$НpНoс($сp0pН);
$Т0TpA[$eТоM]=$еоНМо[$сp0pН][$eТоM];
$Т0TpA[$рHОМ]=$еоНМо[$сp0pН][$рHОМ];
$Т0TpA.rotation=$еоНМо[$сp0pН].rotation;
if($Т0TpA.$ОIрpА)
$Т0TpA.$ОIрpА();
break;
case 463:
if(!$АcсAТ.visible)
{
$ррAН[$ОIo1o]=0;
}
else if($АcсAТ.$lНlMp.currentFrame==1)
{
$ррAН[$ОIo1o]=1;
}
else
{
$ррAН[$ОIo1o]=2;
}
break;
case 464:
$ОIo1o=$НpНoс($ОIo1o);

if(!$lcAОТ())
break;

$0ОoHс=$ОIo1o;
if($0ОoHс>=0)
{
$0Ме1А[$0ОoHс][$МIIро]=$0Ме1А[$0ОoHс].hmax=Number($ррAН[$сp0pН]);
if($0Ме1А[$0ОoHс][$МIIро]>0)
{
$0Ме1А[$0ОoHс].$оeoТе=false;
$0Ме1А[$0ОoHс].$loАoM=false;
$o0MIс($0ОoHс);
if(Boolean($0Ме1А[$0ОoHс].$HМ0М1)||$0Ме1А[$0ОoHс][$cАocе]==$0Ме1А[$НAlНc][$cАocе])
{
$0Ме1А[$0ОoHс].gui.alpha=1;
$0Ме1А[$0ОoHс].gui.visible=true;
$0Ме1А[$0ОoHс][$0MТce]=-1;
}
$0Ме1А[$0ОoHс].$ОрОAA=0;
$0Ме1А[$0ОoHс].$ААНММ=Math.max($0Ме1А[$0ОoHс][$МIIро]*0.4,30);
$0Ме1А[$0ОoHс].$НТcep=Math.max($0Ме1А[$0ОoHс][$МIIро]*0.6,30);
$0Ме1А[$0ОoHс].$HAрH1=Math.max($0Ме1А[$0ОoHс][$МIIро]*0.5,30);
$0Ме1А[$0ОoHс].$lMIсo=Math.max($0Ме1А[$0ОoHс][$МIIро]*0.4,30);
$IHcоТ($0ОoHс);
$AOеоО($0Ме1А[$0ОoHс]);
}
}
else
{
$е10Oс(new Error(),$H1oo+$eННА[a][$ерlАО]+$еО1p+($рМHо+1)+$оOOс+$ОIo1o+$11TO);
}
break;
case 465:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);

if(!$lcAОТ())
break;

$0ОoHс=$ОIo1o;
if($0ОoHс>=0)
{
$0Ме1А[$0ОoHс][$МIIро]=$0Ме1А[$0ОoHс].hmax=Number($ррAН[$сp0pН]);
if($0Ме1А[$0ОoHс][$МIIро]>0)
{
$0Ме1А[$0ОoHс].$оeoТе=false;
$0Ме1А[$0ОoHс].$loАoM=false;
$o0MIс($0ОoHс);
if(Boolean($0Ме1А[$0ОoHс].$HМ0М1)||$0Ме1А[$0ОoHс][$cАocе]==$0Ме1А[$НAlНc][$cАocе])
{
$0Ме1А[$0ОoHс].gui.alpha=1;
$0Ме1А[$0ОoHс].gui.visible=true;
$0Ме1А[$0ОoHс][$0MТce]=-1;
}
$0Ме1А[$0ОoHс].$ОрОAA=0;
$0Ме1А[$0ОoHс].$ААНММ=Math.max($0Ме1А[$0ОoHс][$МIIро]*0.4,30);
$0Ме1А[$0ОoHс].$НТcep=Math.max($0Ме1А[$0ОoHс][$МIIро]*0.6,30);
$0Ме1А[$0ОoHс].$HAрH1=Math.max($0Ме1А[$0ОoHс][$МIIро]*0.5,30);
$0Ме1А[$0ОoHс].$lMIсo=Math.max($0Ме1А[$0ОoHс][$МIIро]*0.4,30);
$IHcоТ($0ОoHс);
$AOеоО($0Ме1А[$0ОoHс]);
}
}
else
{
$е10Oс(new Error(),$H1oo+$eННА[a][$ерlАО]+$еО1p+($рМHо+1)+$оOOс+$ОIo1o+$11TO);
}
break;
case 466:
$Т0TpA=$AAрlТ[$НpНoс($ОIo1o)];
$Т0TpA.scaleX=Number($ррAН[$сp0pН]);
if($Т0TpA.$ОIрpА)
{
$Т0TpA.$ОIрpА();
}
break;
case 467:
$Т0TpA=$AAрlТ[$НpНoс($ОIo1o)];
$Т0TpA.scaleY=Number($ррAН[$сp0pН]);
if($Т0TpA.$ОIрpА)
{
$Т0TpA.$ОIрpА();
}
break;
case 468:
$oАlоO=($ОIo1o==$oрIA);
break;
case 469:
$ОpMрс[$ОIo1o].rotation=$ррAН[$сp0pН];
break;
case 470:
$ОpMрс[$ОIo1o].scaleX=$ррAН[$сp0pН];
break;
case 471:
$ррAН[$ОIo1o]=$ОpMрс[$сp0pН].rotation;
break;
case 472:
$ррAН[$ОIo1o]=$ОpMрс[$сp0pН].scaleX;
break;
case 473:
$ОpMрс[$ОIo1o].scaleY=$ррAН[$сp0pН];
break;
case 474:
$ррAН[$ОIo1o]=$ОpMрс[$сp0pН].scaleY;
break;







case 476:
$сoopT[$НpНoс($ОIo1o)].$eHМAT=$сoopT[$НpНoс($ОIo1o)].gui.$pеMHH.text=$ррAН[$сp0pН];
break;
case 477:

$00MMр=($ОIo1o!=$ОIlс);
break;
case 478:
$Т0TpA=$AAрlТ[$НpНoс($ОIo1o)];
const blendMode=$рITАM($сp0pН);
switch(blendMode)
{
case $IТсl:
case $оH1с:
case $pITО:
case $сAAO:
case $oplТ:
case $oHес:
case $Аopo:
case $Нc0H:
case $IAM0:
case $HАсM:
case $Мcрp:
case $pTО0:
case $0МеI:
case $АM1H:




$Т0TpA.blendMode=blendMode;
break;
default:
$оеIТМ($сН1О,$1ОIН);
break;
}
break;
case 479:
$ООIHО=Number($ОIo1o);
break;
case 480:
$HсTНe[$НpНoс($ОIo1o)][$eТоM]+=Number($ррAН[$сp0pН]);
break;
case 481:
$HсTНe[$НpНoс($ОIo1o)][$рHОМ]+=Number($ррAН[$сp0pН]);
break;
case 482:
$oepМ1[0]=String($рITАM($ОIo1o));
$oepМ1[1]=$НpНoс($сp0pН);
$р00Ap($Il[$0Ме1А[$сp0pН].$pМHHo],$0OA[$0Ме1А[$сp0pН].$pМHHo]-25,$1cМоо.$TООeр,0,0);
break;
case 483:
$THАMТ=($ОIo1o==$oрIA);
try
{
if($THАMТ)
{
$АсМАl=$lНc0l.play(0,0,$е0lНА);
$АсМАl.soundTransform.volume=0;
$АсМАl.addEventListener(Event.SOUND_COMPLETE,$OIMeТ);
$lТ0Ol=$pОpIO.play(0,0,$TоМрO);
$lТ0Ol.soundTransform.volume=0;
$lТ0Ol.addEventListener(Event.SOUND_COMPLETE,$eННеO);
}
else
{
$АсМАl.stop();
$lТ0Ol.stop();
}
}
catch(e){

}
break;
case 484:
$ррAН[$ОIo1o]=$0Ме1А[$НpНoс($ОIo1o)][$МАТОе];
break;
case 485:
var $cHHНT=0;
while($cHHНT<$cс0Hс){
if($ОpMрс[$cHHНT].io){
var $еTAAс=$ОpMрс[$cHHНT];
if($еTAAс.picken_by==$ОIo1o&&!$еTAAс.$соТAТ){
if($еTAAс.$cppее==$НpНoс($сp0pН)){
if($0Ме1А[$ОIo1o][$МАТОе]!=$cHHНT){
$0Ме1А[$ОIo1o][$МАТОе]=$cHHНT;
$o0MIс($НAlНc);
}
}
}
}
$cHHНT++;
}
if($НpНoс($сp0pН)==-1){
$0Ме1А[$НpНoс($ОIo1o)][$МАТОе]=$НpНoс($сp0pН);
$о1eНp($НpНoс($ОIo1o));
}
break;
case 312:

if($НpНoс($сp0pН)==-1){
$0Ме1А[$НpНoс($ОIo1o)][$МАТОе]=$НpНoс($сp0pН);
$о1eНp($НpНoс($ОIo1o));
} else if($ОpMрс[$НpНoс($сp0pН)].picken_by==$НpНoс($ОIo1o)){
$0Ме1А[$НpНoс($ОIo1o)][$МАТОе]=$НpНoс($сp0pН);
$о1eНp($НpНoс($ОIo1o));
}
break;
case 486:
$ОpMрс[$ОIo1o].$0ррТТ=Number($ррAН[$сp0pН]);
break;
case 487:
var $АеTcc=0;
while($АеTcc<$1leoI){
if($IТТII[$АеTcc]!=null&&$IТТII[$АеTcc].visible){
if($IТТII[$АеTcc][$eТоM]>$HсTНe[$ОIo1o][$eТоM]){
if($IТТII[$АеTcc][$eТоM]<$HсTНe[$ОIo1o][$eТоM]+$HсTНe[$ОIo1o].w){
if($IТТII[$АеTcc][$рHОМ]>$HсTНe[$ОIo1o][$рHОМ]){
if($IТТII[$АеTcc][$рHОМ]<$HсTНe[$ОIo1o][$рHОМ]+$HсTНe[$ОIo1o].h){
$IТТII[$АеTcc].visible=false;
$IТТII[$АеTcc].$МecHM=0;
}
}
}
}
}
$АеTcc++;
}
break;
case 488:
var $р11еA=0;
while($р11еA<$1leoI){
if($IТТII[$р11еA]!=null&&$IТТII[$р11еA].visible){
if($IТТII[$р11еA][$eТоM]>$HсTНe[$ОIo1o][$eТоM]){
if($IТТII[$р11еA][$eТоM]<$HсTНe[$ОIo1o][$eТоM]+$HсTНe[$ОIo1o].w){
if($IТТII[$р11еA][$рHОМ]>$HсTНe[$ОIo1o][$рHОМ]){
if($IТТII[$р11еA][$рHОМ]<$HсTНe[$ОIo1o][$рHОМ]+$HсTНe[$ОIo1o].h){
$IТТII[$р11еA][$eТоM]=($HсTНe[$сp0pН][$eТоM]+($HсTНe[$сp0pН][$eТоM]+$HсTНe[$сp0pН].w))/2;
$IТТII[$р11еA][$рHОМ]=($HсTНe[$сp0pН][$рHОМ]+($HсTНe[$сp0pН][$рHОМ]+$HсTНe[$сp0pН].h))/2;
}
}
}
}
}
$р11еA++;
}
break;




case 491:
var $HоHpМ=0;
while($HоHpМ<$1leoI){
if($IТТII[$HоHpМ]!=null&&$IТТII[$HоHpМ].visible){
if($IТТII[$HоHpМ][$eТоM]>$HсTНe[$ОIo1o][$eТоM]){
if($IТТII[$HоHpМ][$eТоM]<$HсTНe[$ОIo1o][$eТоM]+$HсTНe[$ОIo1o].w){
if($IТТII[$HоHpМ][$рHОМ]>$HсTНe[$ОIo1o][$рHОМ]){
if($IТТII[$HоHpМ][$рHОМ]<$HсTНe[$ОIo1o][$рHОМ]+$HсTНe[$ОIo1o].h){
$IТТII[$HоHpМ][$eрoeе]*=Number($сp0pН);
$IТТII[$HоHpМ][$ОоНр1]*=Number($сp0pН);
}
}
}
}
}
$HоHpМ++;
}
break;
case 492:
case 493:
if($eННА[a].$НT0еM[$рМHо]==492){
$MеОрc=false;
}
else{
$MеОрc=true;
}
var $THоH0=0;
var $МHО0с=false;
while($THоH0<$1leoI){
if($IТТII[$THоH0]!=null&&$IТТII[$THоH0].visible){
if($IТТII[$THоH0][$eТоM]>$HсTНe[$ОIo1o][$eТоM]){
if($IТТII[$THоH0][$eТоM]<$HсTНe[$ОIo1o][$eТоM]+$HсTНe[$ОIo1o].w){
if($IТТII[$THоH0][$рHОМ]>$HсTНe[$ОIo1o][$рHОМ]){
if($IТТII[$THоH0][$рHОМ]<$HсTНe[$ОIo1o][$рHОМ]+$HсTНe[$ОIo1o].h){
$МHО0с=true;
if($МHО0с==$MеОрc){
$рМHо=$НpНoс($eННА[a].$0ор1e);
}
break;
}
}
}
}
}
$THоH0++;
}
if($МHО0с==$MеОрc){
$рМHо=$НpНoс($eННА[a].$0ор1e);
}
break;
case 494:
mc=this.$еАеО1($ОpMрс[$ОIo1o].model,{
[$eТоM]: Number(($HсTНe[$сp0pН][$eТоM]+($HсTНe[$сp0pН][$eТоM]+$HсTНe[$сp0pН].w))/2),
[$рHОМ]: Number(($HсTНe[$сp0pН][$рHОМ]+($HсTНe[$сp0pН][$рHОМ]+$HсTНe[$сp0pН].h))/2),
upg: $НpНoс($ОpMрс[$ОIo1o].upg),
command: $НpНoс($ОpMрс[$ОIo1o].command)
});
break;
case 495:
$ррAН[$ОIo1o]=!!$0Ме1А[$ррAН[$сp0pН]].$рoeсl ? 1 : 0;
break;
case 496:
$ррAН[$ОIo1o]=$0Ме1А[$ррAН[$сp0pН]].$AМIМ1;
break;
case 497:
$ррAН[$ОIo1o]=$0Ме1А[$ррAН[$сp0pН]].$TНесe;
break;
case 498:
$сp0pН=Number($сp0pН);

if(!$lcAОТ())
break;

$0ОoHс=$НpНoс($ррAН[$ОIo1o]);
if($0ОoHс>=0)
{
$0Ме1А[$0ОoHс][$МIIро]=$0Ме1А[$0ОoHс].hmax=$сp0pН;
if($0Ме1А[$0ОoHс][$МIIро]>0)
{
$0Ме1А[$0ОoHс].$оeoТе=false;
$0Ме1А[$0ОoHс].$loАoM=false;
$o0MIс($0ОoHс);
if(Boolean($0Ме1А[$0ОoHс].$HМ0М1)||$0Ме1А[$0ОoHс][$cАocе]==$0Ме1А[$НAlНc][$cАocе])
{
$0Ме1А[$0ОoHс].gui.alpha=1;
$0Ме1А[$0ОoHс].gui.visible=true;
$0Ме1А[$0ОoHс][$0MТce]=-1;
}
$0Ме1А[$0ОoHс].$ОрОAA=0;
$0Ме1А[$0ОoHс].$ААНММ=Math.max(Number($0Ме1А[$0ОoHс][$МIIро])*0.4,30);
$0Ме1А[$0ОoHс].$НТcep=Math.max(Number($0Ме1А[$0ОoHс][$МIIро])*0.6,30);
$0Ме1А[$0ОoHс].$HAрH1=Math.max(Number($0Ме1А[$0ОoHс][$МIIро])*0.5,30);
$0Ме1А[$0ОoHс].$lMIсo=Math.max(Number($0Ме1А[$0ОoHс][$МIIро])*0.4,30);
$IHcоТ($0ОoHс);
$AOеоО($0Ме1А[$0ОoHс]);
}
}
else
{
$е10Oс(new Error(),$H1oo+$eННА[a][$ерlАО]+$еО1p+($рМHо+1)+$оOOс+$ОIo1o+$11TO);
}
break;
case 499:
$Oр0ol=$НpНoс($ррAН[$сp0pН]);
$eННА[$HсTНe[$ОIo1o].$pMcpo].$АeOАT=false;
$pАTIТ($HсTНe[$ОIo1o].$pMcpo);
break;
case 500:
if(Number($ррAН[$ОIo1o])!=0)
$MАTOc=Number($ррAН[$ОIo1o]);
else
$MАTOc=$М0AНс;
break;





case 502:
$0Ме1А[$НpНoс($ррAН[$ОIo1o])].$сIAТp=$ррAН[$сp0pН]==$ОIlс;
break;
case 503:
$0Ме1А[$НpНoс($ррAН[$ОIo1o])].$сIAТp=$сp0pН==$ОIlс;
break;
case 504:
$0Ме1А[$НpНoс($ррAН[$ОIo1o])].$сIAТp=$ррAН[$сp0pН]==$ОIlс;
break;
case 505:
$ОIo1o=$НpНoс($ОIo1o);
$сp0pН=$НpНoс($ррAН[$сp0pН]);
$0Ме1А[$ОIo1o][$cАocе]=$сp0pН;
$pНTс1($0Ме1А[$ОIo1o]);
$AOеоО($0Ме1А[$ОIo1o]);
$AMTT1=0;
while($AMTT1<$eсАeA)
{
if($0Ме1А[$AMTT1].io)
{
$ОTсcО($0Ме1А[$AMTT1]);
}
++$AMTT1;
}
break;
case 506:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$сp0pН=$НpНoс($ррAН[$сp0pН]);
$0Ме1А[$ОIo1o][$cАocе]=$сp0pН;
$pНTс1($0Ме1А[$ОIo1o]);
$AOеоО($0Ме1А[$ОIo1o]);
$AMTT1=0;
while($AMTT1<$eсАeA)
{
if($0Ме1А[$AMTT1].io)
{
$ОTсcО($0Ме1А[$AMTT1]);
}
++$AMTT1;
}
break;
case 507:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$сp0pН=$НpНoс($сp0pН);
$0Ме1А[$ОIo1o][$cАocе]=$сp0pН;
$pНTс1($0Ме1А[$ОIo1o]);
$AOеоО($0Ме1А[$ОIo1o]);
$AMTT1=0;
while($AMTT1<$eсАeA)
{
if($0Ме1А[$AMTT1].io)
{
$ОTсcО($0Ме1А[$AMTT1]);
}
++$AMTT1;
}
break;
case 508:
$ррAН[$ОIo1o]=[];
$AMTT1=0;
while($AMTT1<$TTcНA)
{
if($0Ме1А[$AMTT1].$eHМAT!=$еAТ0&&$0Ме1А[$AMTT1].$eHМAT!=$ТAНO)
{
$ррAН[$ОIo1o]+=$AMTT1;
}
++$AMTT1;
}
break;
case 509:
$ррAН[$ОIo1o]=$ОpMрс[$НpНoс($ОIo1o)].$eHоНс;
break;
case 510:
{
$ррAН[$ОIo1o]=$НpНoс($еОTсM.length);
}
break;
case 511:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$сp0pН=$НpНoс($ррAН[$сp0pН]);


if(!$lcAОТ())
break;

if(!$0Ме1А[$ОIo1o].$оeoТе)
{
$0Ме1А[$ОIo1o][$МIIро]=$0Ме1А[$ОIo1o].hmax/100*$сp0pН;
}
break;
case 512:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$сp0pН=$НpНoс($сp0pН);
$Осрcр=0;
while($Осрcр<$eсАeA)
{
if($0Ме1А[$Осрcр].io)
{
if($0Ме1А[$Осрcр][$cАocе]!=$0Ме1А[$ОIo1o][$cАocе])
{
if($0Ме1А[$Осрcр].$eoОpА>0&&$0Ме1А[$Осрcр][$МIIро]>0)
{
if($0Ме1А[$Осрcр][$eТоM]>$HсTНe[$сp0pН][$eТоM])
{
if($0Ме1А[$Осрcр][$eТоM]<$HсTНe[$сp0pН][$eТоM]+$HсTНe[$сp0pН].w)
{
if($0Ме1А[$Осрcр][$рHОМ]>$HсTНe[$сp0pН][$рHОМ])
{
if($0Ме1А[$Осрcр][$рHОМ]<$HсTНe[$сp0pН][$рHОМ]+$HсTНe[$сp0pН].h)
{
$0Ме1А[$Осрcр][$МIIро]=0;
}
}
}
}
}
else if($Il[$0Ме1А[$Осрcр].$MОеМ1]>$HсTНe[$сp0pН][$eТоM])
{
if($Il[$0Ме1А[$Осрcр].$MОеМ1]<$HсTНe[$сp0pН][$eТоM]+$HсTНe[$сp0pН].w)
{
if($0OA[$0Ме1А[$Осрcр].$MОеМ1]>$HсTНe[$сp0pН][$рHОМ])
{
if($0OA[$0Ме1А[$Осрcр].$MОеМ1]<$HсTНe[$сp0pН][$рHОМ]+$HсTНe[$сp0pН].h)
{
$0Ме1А[$Осрcр][$МIIро]=0;
}
}
}
}
}
}
++$Осрcр;
}
break;
case 513:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$сp0pН=$НpНoс($ррAН[$сp0pН]);
$0Ме1А[$ОIo1o][$МIIро]=$сp0pН;
break;
case 514:
case 515:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$сp0pН=$НpНoс($сp0pН);
if($0Ме1А[$ОIo1o].io)
{
$eMOАе=$0Ме1А[$ОIo1o];
$opOpТ=game.addChildAt(new player(),game.numChildren);
$сOoНН($opOpТ);
$0ОoHс=0;
if($сp0pН<0)
{
ok=true;
$AMTT1=-$сp0pН;
}
else
{
ok=false;
u=$HсTНe[$сp0pН][$eТоM]+$HсTНe[$сp0pН].w/2;
v=$HсTНe[$сp0pН][$рHОМ]+$HсTНe[$сp0pН].h/2;
}
if($eННА[a].$НT0еM[$рМHо]==515)
{
ok=true;
$AMTT1=$сp0pН;
}
$MрHpА=0;
while(ok)
{
$MрHpА+=1;
if($MрHpА>10000)
{
break;
}
ok=true;
u=$HсTНe[$AMTT1][$eТоM]+Math.random()*$HсTНe[$AMTT1].w;
v=$lMМoc+($оpl1Т-$lMМoc)*Math.random();
if($0oеcН(u,v))
{
if(!$0oеcН(u,v+100))
{
ok=false;
}
}
i2=0;
while(i2<$оTolТ)
{
if(u>$ММoОo[i2]-100)
{
if(u<$ММoОo[i2]+$р1lMр[i2]+100)
{
if(v>$11ТоО[i2]-100)
{
if(v<$11ТоО[i2]+$coТНp[i2]+100)
{
ok=true;
}
}
}
}
++i2;
}
if($0Ме1А[$НAlНc][$cАocе]!=$eMOАе[$cАocе])
{
if($НOНОН(u,v,$0Ме1А[$НAlНc][$eТоM],$0Ме1А[$НAlНc][$рHОМ])<400)
{
if($0ОoHс<10)
{
ok=true;
++$0ОoHс;
}
}
}
}
$opOpТ[$eТоM]=new Number(u);
$opOpТ[$рHОМ]=new Number(v);
$cНе0I($opOpТ,$eMOАе[$МIIро],$eMOАе.hmax);
$ТTTTH($opOpТ,$eMOАе.scale);
$opOpТ[$АсТOе]=new Number(0);
$opOpТ[$МcеAH]=new Number(0);
$opOpТ.$MAНIp=$eMOАе.$MAНIp;
$opOpТ.antigravity=$eMOАе.antigravity;
$opOpТ.$oIМАp=$eMOАе.$oIМАp;
$opOpТ.$ОАpМО=$eMOАе.$ОАpМО;
$opOpТ.$AOсоМ=$eMOАе.$AOсоМ;
$opOpТ[$lоАо]=$eMOАе[$lоАо];
$opOpТ.$оlсTН=$eMOАе.$оlсTН;
$opOpТ.gui.$pеMHH.text=$eMOАе.gui.$pеMHH.text;
$opOpТ.$eHМAT=$eMOАе.$eHМAT;
$opOpТ[$cАocе]=new Number($eMOАе[$cАocе]);
if($opOpТ[$cАocе]!=$0Ме1А[$НAlНc][$cАocе])
{
$opOpТ.gui.visible=false;
}
$ОTсcО($opOpТ);
$opOpТ.$Нр01I=$eMOАе.$Нр01I;
$opOpТ.$ееоАН=new Number($eMOАе.$ееоАН);
$opOpТ[$lо0HH]=$opOpТ[$eТоM]+$opOpТ.$ееоАН*100;
$opOpТ[$еоOOА]=$opOpТ[$рHОМ];
$opOpТ[$0OАс]=new Number($eMOАе[$0OАс]);
$opOpТ.$HНрНТ=new Number(-1);
$opOpТ.char=new Number($eMOАе.char);
$opOpТ.$AААH1=new Number($eMOАе.$AААH1);
$opOpТ.$сТlAМ=new Number($eMOАе.$сТlAМ);
$opOpТ.$ТIpec=new Number($eMOАе.$ТIpec);
$opOpТ.$НOоМO=new Number($eMOАе.$НOоМO);
$opOpТ.$ОIMОo=new Number($eMOАе.$ОIMОo);
$opOpТ.$cHАoс=new Number($eMOАе.$cHАoс);
$opOpТ.$Hlppе=new Number($eMOАе.$Hlppе);
$opOpТ.$Аc01о=new Number($eMOАе.$Аc01о);
$opOpТ.$ТрH0c=new Number($eMOАе.$ТрH0c);
$opOpТ.$ОАOрр=new Number($eMOАе.$ОАOрр);
$opOpТ.$A0АоА=new Number($eMOАе.$A0АоА);
$opOpТ.$THMcM=new Number($eMOАе.$THMcM);
$opOpТ.$lOeНc=new Number($eMOАе.$lOeНc);
if($eMOАе.$АсIее.lower.$оАОНА!=null)
{
$opOpТ.$АсIее.lower.$оАОНА.visible=$eMOАе.$АсIее.lower.$оАОНА.visible;
}
if($eMOАе.$ТНpТI.lower.$оАОНА!=null)
{
$opOpТ.$ТНpТI.lower.$оАОНА.visible=$eMOАе.$ТНpТI.lower.$оАОНА.visible;
}
$opOpТ.$Alр10=$eMOАе.$Alр10;
$opOpТ.$оМcHM=$eMOАе.$оМcHM;
$opOpТ.$рМMоО=$eMOАе.$рМMоО;
$opOpТ[$leAсO]=$eMOАе[$leAсO];
$opOpТ.$1МOОM=$eMOАе.$1МOОM;
$р00Ap($opOpТ[$eТоM],$opOpТ[$рHОМ]-41,$1cМоо.$АMHоA,0,0);
$AOеоО($opOpТ);
$cеНlН=$opOpТ.$MeсНе;
if($eMOАе[$МАТОе]!=-1)
{
$HОpcl=$opOpТ[$eТоM];
$llМTO=$opOpТ[$рHОМ];
$eMOАе=$ОpMрс[$eMOАе[$МАТОе]];
$opOpТ=$еАеО1($eMOАе.model,$eMOАе);
$0Ме1А[$cеНlН][$МАТОе]=$opOpТ.$MeсНе;
$opOpТ.picken_by=$cеНlН;
$0Ме1А[$cеНlН].$АсIее.lower.$оАОНА.visible=false;
$0Ме1А[$cеНlН].$ТНpТI.lower.$оАОНА.visible=false;
$opOpТ.$HMОН0=$eMOАе.$HMОН0;
$opOpТ.$clосT=$eMOАе.$clосT;
$opOpТ.$сОс0М=$eMOАе.$сОс0М;
$opOpТ.$1OНМо=$eMOАе.$1OНМо;
$opOpТ.$oТоAр=$eMOАе.$oТоAр;
$opOpТ[$clcре]=$eMOАе[$clcре];
$opOpТ.$1MAеT=$eMOАе.$1MAеT;
$opOpТ.$oelAe=$eMOАе.$oelAe;
$opOpТ.$соТAТ=$eMOАе.$соТAТ;
$opOpТ.$1l1TO=$eMOАе.$1l1TO;
}
}
break;
case 516:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$сp0pН=$НpНoс($сp0pН);
$Осрcр=0;
while($Осрcр<$eсАeA)
{
if($0Ме1А[$Осрcр].io)
{
if($0Ме1А[$Осрcр][$cАocе]!=$0Ме1А[$ОIo1o][$cАocе])
{
if($0Ме1А[$Осрcр].$eoОpА>0&&$0Ме1А[$Осрcр][$МIIро]>0)
{
if($0Ме1А[$Осрcр][$eТоM]>$HсTНe[$сp0pН][$eТоM])
{
if($0Ме1А[$Осрcр][$eТоM]<$HсTНe[$сp0pН][$eТоM]+$HсTНe[$сp0pН].w)
{
if($0Ме1А[$Осрcр][$рHОМ]>$HсTНe[$сp0pН][$рHОМ])
{
if($0Ме1А[$Осрcр][$рHОМ]<$HсTНe[$сp0pН][$рHОМ]+$HсTНe[$сp0pН].h)
{
if($0Ме1А[$Осрcр][$0MТce]==-1)
{
$0Ме1А[$Осрcр][$0MТce]=$ОIo1o;
}
}
}
}
}
}
else if($Il[$0Ме1А[$Осрcр].$MОеМ1]>$HсTНe[$сp0pН][$eТоM])
{
if($Il[$0Ме1А[$Осрcр].$MОеМ1]<$HсTНe[$сp0pН][$eТоM]+$HсTНe[$сp0pН].w)
{
if($0OA[$0Ме1А[$Осрcр].$MОеМ1]>$HсTНe[$сp0pН][$рHОМ])
{
if($0OA[$0Ме1А[$Осрcр].$MОеМ1]<$HсTНe[$сp0pН][$рHОМ]+$HсTНe[$сp0pН].h)
{
if($0Ме1А[$Осрcр][$0MТce]==-1)
{
$0Ме1А[$Осрcр][$0MТce]=$ОIo1o;
}
}
}
}
}
}
}
++$Осрcр;
}
break;
case 517:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$сp0pН=$НpНoс($сp0pН);
$0Ме1А[$ОIo1o][$leAсO]=$сp0pН;
break;
case 518:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$сp0pН=String($ррAН[$сp0pН]);
$0Ме1А[$ОIo1o].$eHМAT=$сp0pН;
$0Ме1А[$ОIo1o].gui.$pеMHH.text=$0Ме1А[$ОIo1o].$eHМAT;
break;
case 519:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$0ОoHс=$ОIo1o;
$0Ме1А[$0ОoHс][$МАТОе]=-1;
$o0MIс($0ОoHс);
i2=0;
while(i2<$cс0Hс)
{
if($ОpMрс[i2].picken_by==$0ОoHс)
{
if($ОpMрс[i2].picken_by==$НAlНc)
{
if($ОpMрс[i2].$cppее==-2)
{
if($ОpMрс[i2].$1ooоT==1)
{
if($OН1оc>0)
{
--$OН1оc;
}
}
if($ОpMрс[i2].$1ooоT==2)
{
if($IАрAH>0)
{
--$IАрAH;
}
}
if($ОpMрс[i2].$1ooоT==3)
{
if($ccIсo>0)
{
--$ccIсo;
}
}
}
}
$ОpMрс[i2].picken_by=-1;
}
++i2;
}
break;
case 520:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$сp0pН=Number($ррAН[$сp0pН]);
if($0Ме1А[$ОIo1o].io)
{
$Т0TpA=$0Ме1А[$ОIo1o];
$Т0TpA[$АсТOе]*=$сp0pН;
$Т0TpA[$МcеAH]*=$сp0pН;
$AMTT1=0;
while($AMTT1<$pООро)
{
if($о1oHМ[$AMTT1]==$ОIo1o)
{
$OTpc1[$AMTT1]*=$сp0pН;
$IрТ0H[$AMTT1]*=$сp0pН;
}
++$AMTT1;
}
}
break;
case 521:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$сp0pН=Number($ррAН[$сp0pН]);
$0Ме1А[$ОIo1o].$MAНIp=$сp0pН;
break;
case 522:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$сp0pН=$НpНoс($сp0pН);
$0Ме1А[$ОIo1o][$0OАс]=$сp0pН;
break;
case 523:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$сp0pН=String($сp0pН);
$HAАOН=$eАеА0($сp0pН.split($TlAp).join($pе1M));
red=($HAАOН&16711680)>>16;
green=($HAАOН&65280)>>8;
blue=$HAАOН&255;
$0Ме1А[$ОIo1o].$Alр10=red/255*2;
$0Ме1А[$ОIo1o].$оМcHM=green/255*2;
$0Ме1А[$ОIo1o].$рМMоО=blue/255*2;
break;
case 525:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$сp0pН=$НpНoс($сp0pН);
$0Ме1А[$ОIo1o][$lо0HH]=$HсTНe[$сp0pН][$eТоM]+$HсTНe[$сp0pН].w*Math.random();
$0Ме1А[$ОIo1o][$еоOOА]=$HсTНe[$сp0pН][$рHОМ]+$HсTНe[$сp0pН].h*Math.random();
break;
case 526:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$сp0pН=$НpНoс($ррAН[$сp0pН]);
if($сp0pН>=0)
{
if($сp0pН<$eсАeA)
{
$0Ме1А[$ОIo1o][$0MТce]=$0Ме1А[$сp0pН].$MeсНе;
}
}
break;
case 527:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$сp0pН=$НpНoс($ррAН[$сp0pН]);
$0Ме1А[$ОIo1o].$ААНММ-=$сp0pН;
$оo1pO($ОIo1o);
break;
case 528:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$сp0pН=$НpНoс($ррAН[$сp0pН]);
$0Ме1А[$ОIo1o].$lMIсo-=$сp0pН;
$оo1pO($ОIo1o);
break;
case 529:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$сp0pН=$НpНoс($ррAН[$сp0pН]);
$0Ме1А[$ОIo1o].$НТcep-=$сp0pН;
$оo1pO($ОIo1o);
break;
case 530:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$сp0pН=$НpНoс($ррAН[$сp0pН]);
$0Ме1А[$ОIo1o].$HAрH1-=$сp0pН;
$оo1pO($ОIo1o);
break;
case 531:
$cpОlТ=$НpНoс($ррAН[$сp0pН]);
$1oОTМ=$Аcle;
$Осрcр=0;
while($Осрcр<$cс0Hс)
{
if($ОpMрс[$Осрcр].io)
{
if($ОpMрс[$Осрcр].picken_by==$cpОlТ)
{
if(!$ОpMрс[$Осрcр].$соТAТ)
{
if($1oОTМ!=$Аcle)
{
$1oОTМ+=$OНрТ;
}
$1oОTМ+=$ОpMрс[$Осрcр].model+$ОТр1+$ОpMрс[$Осрcр].upg+$ОТр1+$ОpMрс[$Осрcр].command;
}
}
}
++$Осрcр;
}
$ррAН[$ОIo1o]=$1oОTМ;
break;
case 532:
(function()
{
var $IАНоO=undefined;
var $Аc0c1=undefined;
var $ТllMА=undefined;
var $cOHее=undefined;
var $оoОlе=undefined;
var $AоeIс=undefined;
var $рОосе=undefined;
var $1ccсT=undefined;
var $oAH0р=undefined;
var $НМAМT=undefined;
$IАНоO=$ррAН[$ОIo1o];
$Аc0c1=$НpНoс($ррAН[$сp0pН]);
if($IАНоO!=$Аcle)
{
$ТllMА=$IАНоO.split($OНрТ);
$cOHее=$0Ме1А[$Аc0c1][$eТоM];
$оoОlе=$0Ме1А[$Аc0c1][$рHОМ];
$AоeIс=0;
while($AоeIс<$ТllMА.length)
{
$1ccсT=($рОосе=$ТllMА[$AоeIс].split($ОТр1))[0];
$oAH0р=$НpНoс($рОосе[1]);
$НМAМT=$НpНoс($рОосе[2]);
$opOpТ=$еАеО1($1ccсT,{
[$eТоM]:$cOHее,
[$рHОМ]:$оoОlе,
upg:$oAH0р,
command:$НМAМT
});
$AоeIс++;
}
}
})();
break;
case 533:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$сp0pН=Number($ррAН[$сp0pН]);
$ТTTTH($0Ме1А[$ОIo1o],$сp0pН);
break;
case 534:
$Т0TpA=$0Ме1А[$НpНoс($ррAН[$ОIo1o])];
if($Т0TpA.io&&$Т0TpA[$МIIро]>0&&$Т0TpA[$МIIро]<$Т0TpA.hmax)
{
$lMeОТ=Number($ррAН[$сp0pН]);
$Т0TpA[$МIIро]=Math.min($Т0TpA[$МIIро]+$lMeОТ,$Т0TpA.hmax);
if($lMeОТ>0)
{
if($Т0TpA[$МIIро]>=$еHApT)
{
$Т0TpA.$loАoM=false;
}
}
}
break;
case 535:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$сp0pН=Number($ррAН[$сp0pН]);
mc=$0Ме1А[$ОIo1o];
mc.antigravity=$сp0pН;
break;
case 536:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$сp0pН=Number($ррAН[$сp0pН]);
mc=$0Ме1А[$ОIo1o];
mc.$oIМАp=$сp0pН;
break;
case 537:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$сp0pН=String($сp0pН);
mc=$0Ме1А[$ОIo1o];
mc[$lоАо]=$pОplH[$сp0pН];
break;
case 538:
$0Ме1А[$НpНoс($ррAН[$ОIo1o])].effects.push({
[$clе0р]: $рlT0,
$МecHM: Number($сp0pН.replace($lсcе,$Аcle).split($ТОlе)[0]),
duration: Number($сp0pН.replace($lсcе,$Аcle).split($ТОlе)[1])
});
break;
case 539:
$0Ме1А[$НpНoс($ррAН[$ОIo1o])].effects.length=0;
break;
case 540:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$сp0pН=$НpНoс($сp0pН);
$OОHMp=$ОIo1o;
$АATHc($HсTНe[$сp0pН][$eТоM]+$HсTНe[$сp0pН].w/2,$HсTНe[$сp0pН][$рHОМ]+$HсTНe[$сp0pН].h/2,0,0,0,2);
break;
case 541:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$сp0pН=Number($ррAН[$сp0pН]);
mc=$0Ме1А[$ОIo1o];
mc.$рOpMe=$сp0pН;
break;
case 542:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
if($НpНoс($сp0pН)==-1)
{
$0Ме1А[$НpНoс($ОIo1o)][$МАТОе]=$НpНoс($сp0pН);
$о1eНp($НpНoс($ОIo1o));
}
else if($ОpMрс[$НpНoс($сp0pН)].picken_by==$НpНoс($ОIo1o))
{
$0Ме1А[$НpНoс($ОIo1o)][$МАТОе]=$НpНoс($сp0pН);
$о1eНp($НpНoс($ОIo1o));
}
break;
case 543:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
if($0Ме1А[$НpНoс($ОIo1o)][$МАТОе]!=-1)
{
$ОpMрс[$0Ме1А[$НpНoс($ОIo1o)][$МАТОе]].picken_by=-1;
$0Ме1А[$НpНoс($ОIo1o)][$МАТОе]=-1;
}
break;
case 544:
$сp0pН=$НpНoс($ррAН[$сp0pН]);
$ррAН[$ОIo1o]=!!$0Ме1А[$НpНoс($сp0pН)].$loАoM ? 1 : 0;
break;
case 545:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
mc=$0Ме1А[$ОIo1o];
mc.$ОАpМО=false;
break;
case 546:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
mc=$0Ме1А[$ОIo1o];
mc.$ОАpМО=true;
break;
case 547:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
mc=$0Ме1А[$ОIo1o];
mc.$AOсоМ=false;
break;
case 548:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
mc=$0Ме1А[$ОIo1o];
mc.$AOсоМ=true;
break;















case 550:
$oepМ1[0]=String($рITАM($ОIo1o));
$oepМ1[1]=$НpНoс($ррAН[$сp0pН]);
$р00Ap($Il[$0Ме1А[$ррAН[$сp0pН]].$pМHHo],$0OA[$0Ме1А[$ррAН[$сp0pН]].$pМHHo]-25,$1cМоо.$TООeр,0,0);
break;
case 551:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$cHHНT=0;
while($cHHНT<$cс0Hс)
{
if($ОpMрс[$cHHНT].io)
{
$еTAAс=$ОpMрс[$cHHНT];
if($еTAAс.picken_by==$ОIo1o&&!$еTAAс.$соТAТ)
{
if($еTAAс.$cppее==$НpНoс($сp0pН))
{
if($0Ме1А[$ОIo1o][$МАТОе]!=$cHHНT)
{
$0Ме1А[$ОIo1o][$МАТОе]=$cHHНT;
$o0MIс($НAlНc);
}
}
}
}
$cHHНT++;
}
if($НpНoс($сp0pН)==-1)
{
$0Ме1А[$НpНoс($ОIo1o)][$МАТОе]=$НpНoс($сp0pН);
$о1eНp($НpНoс($ОIo1o));
}
break;
case 552:
$сp0pН=$НpНoс($ррAН[$сp0pН]);
$ррAН[$ОIo1o]=$0Ме1А[$НpНoс($сp0pН)][$МАТОе];
break;
case 553:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
if($ОpMрс[$НpНoс($сp0pН)].picken_by==$НpНoс($ОIo1o))
{
$ОpMрс[$НpНoс($сp0pН)].picken_by=-1;
if($0Ме1А[$НpНoс($ОIo1o)][$МАТОе]==$НpНoс($сp0pН))
{
$0Ме1А[$НpНoс($ОIo1o)][$МАТОе]=-1;
}
}
break;
case 554:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$0Ме1А[$ОIo1o].$AolОо=Number($ррAН[$сp0pН]);
break;
case 555:
$сp0pН=$НpНoс($ррAН[$сp0pН]);
if($0Ме1А[$НpНoс($сp0pН)][$МАТОе]!=-1)
{
$ррAН[$ОIo1o]=$ОpMрс[$0Ме1А[$НpНoс($сp0pН)][$МАТОе]].model;
}
break;
case 556:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
ok=true;
$MрHpА=0;
while(ok)
{
$MрHpА+=1;
if($MрHpА>10000)
{
break;
}
ok=true;
u=$HсTНe[$НpНoс($сp0pН)][$eТоM]+Math.random()*Number($HсTНe[$НpНoс($сp0pН)].w);
v=$lMМoc+($оpl1Т-$lMМoc)*Math.random();
if($0oеcН(u,v))
{
if(!$0oеcН(u,v+100))
{
ok=false;
}
}
i2=0;
while(i2<$оTolТ)
{
if(u>Number($ММoОo[i2])-100)
{
if(u<$ММoОo[i2]+$р1lMр[i2]+100)
{
if(v>Number($11ТоО[i2])-100)
{
if(v<$11ТоО[i2]+$coТНp[i2]+100)
{
ok=true;
}
}
}
}
++i2;
}
if($0Ме1А[$НAlНc][$cАocе]!=$0Ме1А[$НpНoс($ОIo1o)][$cАocе])
{
if($НOНОН(u,v,$0Ме1А[$НAlНc][$eТоM],$0Ме1А[$НAlНc][$рHОМ])<400)
{
if($0ОoHс<10)
{
ok=true;
++$0ОoHс;
}
}
}
}
$0Ме1А[$НpНoс($ОIo1o)][$eТоM]=u;
$0Ме1А[$НpНoс($ОIo1o)][$рHОМ]=v;
break;
case 557:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$сp0pН=$НpНoс($сp0pН);
if($0Ме1А[$ОIo1o].io)
{
$Т0TpA=$0Ме1А[$ОIo1o];
if($Т0TpA[$МIIро]>0)
{
u=$Il[$Т0TpA.$MОеМ1]-($HсTНe[$сp0pН][$eТоM]+$HсTНe[$сp0pН].w/2);
v=$0OA[$Т0TpA.$MОеМ1]-($HсTНe[$сp0pН][$рHОМ]+$HсTНe[$сp0pН].h/2);
if($ОIo1o==$НAlНc&&!$00pеH||$00pеH&&$ОMOTе>=0&&$ОIo1o==$НAlНc)
{
game[$eТоM]+=u;
game[$рHОМ]+=v;
}
$AMTT1=0;
while($AMTT1<$pООро)
{
if($о1oHМ[$AMTT1]==$Т0TpA.$MeсНе)
{
$Il[$AMTT1]-=u;
$0OA[$AMTT1]-=v;
if($IТoHT())
{
$IcМMc[$AMTT1]-=u;
$MA0е1[$AMTT1]-=v;
}
$OTpc1[$AMTT1]=-$OTpc1[$AMTT1];
}
++$AMTT1;
}
$р00Ap($Т0TpA[$eТоM],$Т0TpA[$рHОМ]-41,$1cМоо.$АMHоA,0,0);
$Т0TpA[$eТоM]-=u;
$Т0TpA[$рHОМ]-=v;
$Т0TpA[$АсТOе]=-$Т0TpA[$АсТOе];
$Т0TpA.$ееоАН=-$Т0TpA.$ееоАН;
$р00Ap($Т0TpA[$eТоM],$Т0TpA[$рHОМ]-41,$1cМоо.$АMHоA,0,0);
$AMTT1=0;
while($AMTT1<$TТlАM)
{
if($сoopT[$AMTT1].io)
{
if($сoopT[$AMTT1].$OOHAТ==$Т0TpA.$MeсНе)
{
if($сoopT[$AMTT1].$eрlсe==5||$сoopT[$AMTT1].$eрlсe==6)
{
$сoopT[$AMTT1].$OOHAТ=-1;
}
}
}
++$AMTT1;
}
if($Т0TpA.$HНрНТ!=-1)
{
$eeМНl($Т0TpA.$HНрНТ);
}
}
}
break;
case 558:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$сp0pН=$НpНoс($сp0pН);
if($0Ме1А[$ОIo1o].io)
{
$Т0TpA=$0Ме1А[$ОIo1o];
if($Т0TpA[$МIIро]>0)
{
u=$Il[$Т0TpA.$MОеМ1]-($HсTНe[$сp0pН][$eТоM]+$HсTНe[$сp0pН].w/2);
v=$0OA[$Т0TpA.$MОеМ1]-($HсTНe[$сp0pН][$рHОМ]+$HсTНe[$сp0pН].h/2);
if($ОIo1o==$НAlНc&&!$00pеH||$00pеH&&$ОMOTе>=0&&$ОIo1o==$НAlНc)
{
game[$eТоM]+=u;
game[$рHОМ]+=v;
}
$AMTT1=0;
while($AMTT1<$pООро)
{
if($о1oHМ[$AMTT1]==$Т0TpA.$MeсНе)
{
$Il[$AMTT1]-=u;
$0OA[$AMTT1]-=v;
if($IТoHT())
{
$IcМMc[$AMTT1]-=u;
$MA0е1[$AMTT1]-=v;
}
$OTpc1[$AMTT1]=-$OTpc1[$AMTT1];
}
++$AMTT1;
}
$р00Ap($Т0TpA[$eТоM],$Т0TpA[$рHОМ]-41,$1cМоо.$АMHоA,0,0);
$Т0TpA[$eТоM]-=u;
$Т0TpA[$рHОМ]-=v;
$р00Ap($Т0TpA[$eТоM],$Т0TpA[$рHОМ]-41,$1cМоо.$АMHоA,0,0);
$AMTT1=0;
while($AMTT1<$TТlАM)
{
if($сoopT[$AMTT1].io)
{
if($сoopT[$AMTT1].$OOHAТ==$Т0TpA.$MeсНе)
{
if($сoopT[$AMTT1].$eрlсe==5||$сoopT[$AMTT1].$eрlсe==6)
{
$сoopT[$AMTT1].$OOHAТ=-1;
}
}
}
++$AMTT1;
}
if($Т0TpA.$HНрНТ!=-1)
{
$eeМНl($Т0TpA.$HНрНТ);
}
}
}
break;
case 559:
$ОIo1o=$НpНoс($ррAН[$ОIo1o]);
$сp0pН=$НpНoс($сp0pН);
$Осрcр=$ОIo1o;
if($0Ме1А[$Осрcр].io)
{
$Т0TpA=$0Ме1А[$Осрcр];
if($Т0TpA[$МIIро]>0)
{
u=$Il[$Т0TpA.$MОеМ1]-($HсTНe[$сp0pН][$eТоM]+$HсTНe[$сp0pН].w/2);
v=$0OA[$Т0TpA.$MОеМ1]-($HсTНe[$сp0pН][$рHОМ]+$HсTНe[$сp0pН].h/2);
if($Осрcр==$НAlНc&&!$00pеH||$00pеH&&$ОMOTе>=0&&$Осрcр==$НAlНc)
{
game[$eТоM]+=u;
game[$рHОМ]+=v;
}
$AMTT1=0;
while($AMTT1<$pООро)
{
if($о1oHМ[$AMTT1]==$Т0TpA.$MeсНе)
{
$Il[$AMTT1]-=u;
$0OA[$AMTT1]-=v;
if($IТoHT())
{
$IcМMc[$AMTT1]-=u;
$MA0е1[$AMTT1]-=v;
}
}
++$AMTT1;
}
$Т0TpA[$eТоM]-=u;
$Т0TpA[$рHОМ]-=v;
$AMTT1=0;
while($AMTT1<$TТlАM)
{
if($сoopT[$AMTT1].io)
{
if($сoopT[$AMTT1].$OOHAТ==$Т0TpA.$MeсНе)
{
if($сoopT[$AMTT1].$eрlсe==5||$сoopT[$AMTT1].$eрlсe==6)
{
$сoopT[$AMTT1].$OOHAТ=-1;
}
}
}
++$AMTT1;
}
if($Т0TpA.$HНрНТ!=-1)
{
$eeМНl($Т0TpA.$HНрНТ);
}
}
}
break;






default:
if(!$НOoАO.has($eННА[a].$НT0еM[$рМHо]))
{
$НOoАO.add($eННА[a].$НT0еM[$рМHо]);
trace($Аocl+$eННА[a].$НT0еM[$рМHо]);
}
}


ptr[0]=a;
ptr[1]=$рМHо;

if($АТII1)
{
let t1=$АТII1 ? performance.now(): 0;
if(t1>$ееeМp)
{
$АТII1[$IOoHА]=($АТII1[$IOoHА]||0)+t1-$ееeМp;
}
}


$рМHо++;
ptr[1]=$рМHо;
}
else
{
if($eННА[a].$cААТ1!=-1)
$eННА[a].$cААТ1-=1;

$оoTсO.pop();


}
}
}
catch(e)
{
ReportCaughtError(e);
$е10Oс(e,$1НOc+$eННА[a][$ерlАО]+$АTIА+($рМHо+1));

$оoTсO.pop();

}
}

}
}
else
return false;

$oITOo();

return true;
}
globalThis.$pАTIТ=$pАTIТ;
}