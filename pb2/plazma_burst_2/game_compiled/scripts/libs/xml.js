






class $сАеMО
{
constructor(str)
{
this.outerText=str;

let children=[];
let $ceНIНО=null;

let $eроTHо=true;

let $сcМoOp=$0OрТ;
let $ТMOMel=$0OрТ;

let pos=0;

while(pos<str.length)
{
let char=str.charAt(pos);

if($ceНIНО)
{
if($eроTHо&&char===$cTр0)
{
}
else
if($eроTHо&&char===$О0l1)
{
$ceНIНО=null;
pos++;
}
else
if($eроTHо&&char===$MННe)
{
$ceНIНО=null;
}
else
if($eроTHо&&char===$ТМcA)
{
pos++;
$eроTHо=false;
$ТMOMel=$0OрТ;
}
else
if(char===$Н0Т1)
{
if($eроTHо)
{
8;
}
else
{
$ceНIНО[$сcМoOp]=$ТMOMel;

$eроTHо=true;
$сcМoOp=$0OрТ;
}
}
else
{
if($eроTHо)
$сcМoOp+=char;
else
$ТMOMel+=char;
}
}
else
if(char===$о00о)
{
let tag_name_end=str.indexOf($cTр0,pos);
let $cpTHpТ=str.indexOf($MННe,pos);
let $А0eоOA=str.indexOf($О0l1,pos);

let min=Infinity;
if(tag_name_end!==-1)
min=Math.min(min,tag_name_end);
if($cpTHpТ!==-1)
min=Math.min(min,$cpTHpТ);
if($А0eоOA!==-1)
min=Math.min(min,$А0eоOA);

tag_name_end=min;

if(tag_name_end===-1)
throw new Error();

let tag_name=str.substring(pos+1,tag_name_end);


if(tag_name.length===0)
{
pos=$cpTHpТ+1;
continue;
}

let $сO0Tpl={
$1leНАo: tag_name,
[$оIlО]:()=>tag_name,
attributes:()=>
{
let attributes=[];

for(let key in $сO0Tpl)
{
attributes.push({
[$оIlО]:()=>key,
value:()=>$сO0Tpl[key]
});
}

return attributes;
}
};

$ceНIНО=$сO0Tpl;
children.push($ceНIНО);

$eроTHо=true;

pos=tag_name_end;
continue;
}
else
{
8;
}
pos++;
}

children.shift();

this.$Нoeеc1=children;
}
children()
{
return this.$Нoeеc1;
}
}

var $OIIТTo=[];
var $реTOр=0;
var $OеOAО1=0;
var $H0A0cО=$Арlо1;
function $HМ1OТТ($МсОрOA)
{
$OIIТTo[$реTOр]=[];
$OIIТTo[$реTOр][0]=$МсОрOA;

$OIIТTo[$реTOр][1]=$oсМс+$H0A0cО.charAt($OеOAО1)+$0OрТ;
$OеOAО1++;

$реTOр++;
}
function $oНоeH1($МсОрOA,$pНAo0)
{
$OIIТTo[$реTOр]=[];
$OIIТTo[$реTOр][0]=$МсОрOA;

$OIIТTo[$реTOр][1]=$pНAo0;

$реTOр++;
}

function $сOAМpO(str)
{
for(i=$реTOр-1;i>=0;i--)
{
str=str.split($OIIТTo[i][1]).join($OIIТTo[i][0]);
}
return str;
}

$oНоeH1($oсМс,$AAоpс);
$HМ1OТТ($Н1OHo);
$HМ1OТТ($IIAIp);
$HМ1OТТ($0ОАco);
$HМ1OТТ($eНOeM);
$HМ1OТТ($MTIр1);
$HМ1OТТ($o00оо);
$HМ1OТТ($IOApT);
$HМ1OТТ($IAeрс);
$HМ1OТТ($ITНIl);
$HМ1OТТ($НpАеA);
$HМ1OТТ($Iо1еp);
$HМ1OТТ($oeоТT);
$HМ1OТТ($оOpМ0);
$HМ1OТТ($ТНТHo);
$HМ1OТТ($olAOA);
$HМ1OТТ($HAIll);
$HМ1OТТ($Носсp);
$HМ1OТТ($ТppАe);
$HМ1OТТ($HT1HH);
$HМ1OТТ($рH1Т0);
$HМ1OТТ($рcрHo);
$HМ1OТТ($ОМAо0);
$HМ1OТТ($AAHMс);
$HМ1OТТ($ОAlMН);
$HМ1OТТ($рeООI);
$HМ1OТТ($орОep);
$HМ1OТТ($АОIO0);
$HМ1OТТ($MоAHо);
$HМ1OТТ($pАоAp);
$HМ1OТТ($0рMeр);
$HМ1OТТ($срМIp);
$HМ1OТТ($Ap1cМ);
$HМ1OТТ($Oессe);
$HМ1OТТ($O1Hlo);
$HМ1OТТ($cTH1l);
$HМ1OТТ($ТOIIp);
$HМ1OТТ($pOMcH);
$HМ1OТТ($IMoOН);
$HМ1OТТ($есоТM);
$HМ1OТТ($рсMeI);
$HМ1OТТ($оcAМO);
$HМ1OТТ($Mеp1c);
$HМ1OТТ($рIp0О);
$HМ1OТТ($ccссО);
$HМ1OТТ($OcpсН);
$HМ1OТТ($OТооp);
$HМ1OТТ($AHсеА);
$HМ1OТТ($MT01c);
$HМ1OТТ($еoМlН);
$HМ1OТТ($НlМII);
$HМ1OТТ($oeITH);
$HМ1OТТ($оo1рр);
$HМ1OТТ($А11МI);
$HМ1OТТ($OTМоI);
$HМ1OТТ($IсHеН);
$HМ1OТТ($cМОрH);
$HМ1OТТ($lOеоо);
$HМ1OТТ($сссс0);
$HМ1OТТ($1рО0е);
$HМ1OТТ($1ТMAр);
$HМ1OТТ($pоeОe);
$HМ1OТТ($IHcoI);
$HМ1OТТ($cOМ1М);
$HМ1OТТ($еeо1р);
$HМ1OТТ($MoоOо);
$HМ1OТТ($оОl0T);
$HМ1OТТ($oAH0М);
$HМ1OТТ($рAeАН);
$HМ1OТТ($1НIрc);
$HМ1OТТ($OМocc);
$HМ1OТТ($оН0рI);
$HМ1OТТ($МТсAе);
$HМ1OТТ($OHОec);
$HМ1OТТ($еIМро);
$HМ1OТТ($A11l);
$HМ1OТТ($МIcо);
$HМ1OТТ($МTооТ);
$HМ1OТТ($Т1МHА);
$HМ1OТТ($МIoOН);
$HМ1OТТ($сТAce);
$HМ1OТТ($cH1oo);
$oНоeH1($0OрТ,$M1Aop);