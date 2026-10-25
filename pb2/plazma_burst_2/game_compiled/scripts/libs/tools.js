

const $рTеТНс={
get(target,property,receiver){
return Reflect.get(target,property,receiver);
},
set(target,property,value,receiver){
if(isNaN(value)||!isFinite(value)){
throw new Error($Hpool);
}
return Reflect.set(target,property,value,receiver);
},
apply(target,$ТoopНр,args){
args.forEach(arg=>{
if(isNaN(arg)||!isFinite(arg)){
throw new Error($Hpool);
}
});
return Reflect.apply(target,$ТoopНр,args);
},
construct(target,args,$MHOeTM){

traceOnce($оcеОc);

args.forEach(arg=>{
if(isNaN(arg)||!isFinite(arg)){
throw new Error($Hpool);
}
});
return Reflect.construct(target,args,$MHOeTM);
}
};


var $oAOАO=(arr)=>{

traceOnce($IоТHс);

return new Proxy(arr,$рTеТНс);
};
{
let $1оМТТТ=(obj)=>
{
if(obj instanceof Array)
{
obj=structuredClone(obj);
}
else
{





{
let obj2={};
for(let prop in obj)
obj2[prop]=obj[prop];

obj=obj2;
}
}

return obj;
};
let $ТoTp1e=($AA1ppT,obj2)=>
{

if($AA1ppT===obj2)
return true;


if($AA1ppT!==$AA1ppT)
if(obj2!==obj2)
return true;


if(typeof $AA1ppT!==$HНТрp||$AA1ppT===null||typeof obj2!==$HНТрp||obj2===null)
return false;








if(Object.getPrototypeOf($AA1ppT)!==Object.getPrototypeOf(obj2))
return false;


const $opHТlН=Object.keys($AA1ppT);
const $МоеOcO=Object.keys(obj2);


if($opHТlН.length!==$МоеOcO.length)
return false;


for(const key of $opHТlН){

if(!Object.prototype.hasOwnProperty.call(obj2,key)||!$ТoTp1e($AA1ppT[key],obj2[key])){
return false;
}
}


return true;
};


let $pAТAMI=[];
let $МH0pАe=new Map();
let $0АсАMM=true;
let $еMоleo=0;

globalThis.$oITOo=()=>
{
if(!$0АсАMM)
{
if(new Error().stack.indexOf($сpcрo)!==-1)
location.reload();

$0АсАMM=true;
}
};

globalThis.$T0OMое=(arr,$MО0оlА)=>
{
let $ToHНHТ=$МH0pАe.get(arr);
if($ToHНHТ!==undefined)
{
if(new Error().stack.indexOf($сpcрo)!==-1)
location.reload();

$ToHНHТ[$MО0оlА]=arr[$MО0оlА];
}
};

globalThis.$oIeeol=()=>
{
if($0АсАMM)
{
if(new Error().stack.indexOf($сpcрo)!==-1)
location.reload();

$0АсАMM=false;
for(let i=0;i<$pAТAMI.length;i++)
{
let arr=$pAТAMI[i];
let clone=$1оМТТТ(arr);
$МH0pАe.set(arr,clone);
}
}
};
globalThis.$eOMАер=()=>
{
return $еMоleo;
};
globalThis.$ррОM1I=()=>
{
globalThis.$oIeeol();











let arr=$pAТAMI[$еMоleo];
let clone=$1оМТТТ(arr);
let $1сОАlр=$МH0pАe.get(arr);
if(!$ТoTp1e($1сОАlр,clone))
{
return-1;
}

$еMоleo++;

if($еMоleo>=$pAТAMI.length)
{
$еMоleo=0;
return 1;
}

return 0;
};

globalThis.$IeTlO=(arr,$рT0pOA,$ATAрАТ=null)=>
{
if($рT0pOA===$eМlee)
{
$pAТAMI.push(arr);
$МH0pАe.set(arr,$1оМТТТ(arr));

return arr;
}
else
{
if($рT0pOA!==$eМlee)
traceOnce($HpcTТ);

let methods={
get(target,property,receiver){

if($ATAрАТ)
$ATAрАТ(property);

return Reflect.get(target,property,receiver);
},
set(target,property,value,receiver){

$рT0pOA(property,value);

return Reflect.set(target,property,value,receiver);
},




construct(target,args,$MHOeTM){



return Reflect.construct(target,args,$MHOeTM);
}
};

if(!$ATAрАТ)
{
delete methods.get;

if(arr instanceof Array)
methods.get=(target,property,receiver)=>target[property];
}

return new Proxy(arr,methods);
}
};
}

function getCallstack(){
traceOnce($eА1oО);

const callstack=new Error().stack;
return callstack;
}

function DisassembleStringTrimAndDo(str,callback)
{
let library_items=str;
let lines=library_items.split($HAoAp).join($0OрТ).split($О0Ao0);

for(let i=0;i<lines.length;i++)
{
let s=lines[i].trim();
if(s.length>0)
if(s.charAt(0)!==$О0l1||s.charAt(1)!==$О0l1)
callback(s);
}
}





















async function fetchTextFile(url){
try{
const response=await fetch(url);
if(!response.ok){
throw new Error(`Error $Аo0MIН text $elрo0o: ${response.statusText}`);
}
const textContent=await response.text();
return textContent;
} catch(error){
throw new Error($оОo1A);
}
}

function $Ор0TОр(object,propertyName)
{
let v=object[propertyName];

traceOnce($cOсМ0);

setGetterSetter(object,propertyName,()=>{return v;},(v2)=>{if(v!==v2){v=v2;console.warn(object,$OНH0+propertyName+$1p0A,v2);} });
}
globalThis.$lT0clT=$Ор0TОр;

function setGetterSetter(object,propertyName,$cTHoоO,$ТАeАIТ){
if(!object||typeof propertyName!==$ср0I){
throw new Error($0cA0M);
}

if($cTHoоO){
Object.defineProperty(object,propertyName,{
get: $cTHoоO,
enumerable: true,
configurable: true,
});
}

if($ТАeАIТ){
Object.defineProperty(object,propertyName,{
set: $ТАeАIТ,
enumerable: true,
configurable: true,
});
}
}
function TrackNaNProperty(obj,prop,$ooеHMТ=true)
{
traceOnce($ОНAHс);

let v=obj[prop];

setGetterSetter(obj,prop,
()=>
{
return v;
},
(b)=>
{
if(isNaN(b)||!isFinite(b))
{
if($ooеHMТ)
{
console.warn($рAсHс+prop+$e1Оl0+b+$lH0Тo+v+$рHOI);
$ooеHMТ=false;
}
throw new Error($рAсHс+prop+$e1Оl0+b+$lH0Тo+v+$рHOI);
}

v=b;
});
}

function $рНМ10A(cb)
{
let $НoсIМp=undefined;
let $AрITсH=38;

try
{
let code=cb($НoсIМp,$AрITсH);

if(code===$НoсIМp)
return;
}
catch(e)
{
}

setTimeout(()=>{$рНМ10A(cb);},2000);
}

{
let old_toString=Object.prototype.toString;

Object.old_toString=old_toString;

let $орcсAе=0;

Object.prototype.toString=function()
{
8;

if($ММ.$T0еcр)
{
let t=Date.now();

if(t>$орcсAе)
{
console.warn($АpеMO+getCallstack());
$орcсAе=t+1000*60*60;
}

throw new Error($0АеHТ);
}

console.warn($0АеHТ);

return old_toString.call(this);
};
}

async function $TlсМсе(url,options={},timeout=60000){
const controller=new AbortController();
const id=setTimeout(()=>controller.abort(),timeout);

try{
const response=await fetch(url,{...options,signal: controller.signal});
clearTimeout(id);
return response;
} catch(error){
clearTimeout(id);
if(error[$оIlО]===$ОeeHO){
console.log($сOАcТ);
throw new Error($сOАcТ);
}
throw error;
}
}

let $ррcоОр=[];
let $HpeоMI=0;
async function $НOpТAp(url,method=$ТclI1,data=null,callback=null)
{
method=method.toLowerCase();

let entry={url: url,[$1еM1]: data,time: Date.now()};

$ррcоОр.push(entry);

if($ррcоОр.length>20)
{
if(Date.now()>$HpeоMI)
{
trace($АТlM1+$ррcоОр.length+$ppМ1,$ррcоОр);
$HpeоMI=Date.now()+5000;
}
}

let response=null;

try
{
response=await $TlсМсе(
url,
{
[$е0Тc]: method,headers:{"Content-Type": $oеоОH},
body:(method===$АеоpI)? new URLSearchParams(data): undefined
},
15000
);







}
catch(error)
{
if(error&&error.$O1НMоА===$АTAНl)
{

}
else
if(error&&error.$O1НMоА===$оeHOН&&$ММ.$T0еcр)
{

}
else
if(error&&error.$O1НMоА===$МсеHо&&$ММ.$T0еcр)
{

}
else
if(error&&error.$O1НMоА===$рАMAМ&&$ММ.$T0еcр)
{

}
else
if(error&&error.message===$сOАcТ&&$ММ.$T0еcр)
{

}
else
trace($МН0MТ+url,data,error);
}

let id=$ррcоОр.indexOf(entry);

if(id===-1)
throw new Error();

$ррcоОр.splice(id,1);

if(callback)
{
let r=$cТoОА;

if(response)
{
try
{
r=await response.text();
}
catch(error)
{
trace($peTeТ+url,data,error);
}
}

callback(r);
}
};

function $l01MНН($OMОA1H)
{
let r={};
try
{
r=JSON.parse($OMОA1H);
}
catch(e)
{
}

return r;
}

function $ееlНoА(array){
for(var i=array.length-1;i>=0;i--){
var j=Math.floor(Math.random()*(i+1));
var $Me1cМ=array[i];
array[i]=array[j];
array[j]=$Me1cМ;
}
}

function $ОOAAM(str)
{
if(typeof str!==$ср0I)
str=str+$0OрТ;

str=str.split($О0Ao0).join($0OрТ);
str=str.split($о00о).join($АeeIТ);
str=str.split($MННe).join($00HIc);
return str;
}
function $оeoce(str)
{
if(typeof str!==$ср0I)
str=str+$0OрТ;

str=str.split($АeeIТ).join($о00о);
str=str.split($00HIc).join($MННe);
str=str.split($Tр0еT).join($Н0Т1);
return str;
}



//'<obfuscation_keep_added_properties_as_is>';'</obfuscation_keep_added_properties_as_is>';.prop=123