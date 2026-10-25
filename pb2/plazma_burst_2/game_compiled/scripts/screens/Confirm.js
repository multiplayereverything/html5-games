


{
let mc=null;




HUD.$оcОlоM=0;
HUD.$e0HАМT=1;
HUD.$ТHНорM=2;

HUD.$plАAO=()=>
{
return mc;
};

HUD.CreateAlertScreen=(text=$cОеOе,$oМоlHо=null,ok=$оHсll)=>
{
HUD.$MссМТ(text,$oМоlHо,null,ok,$0OрТ);
};

HUD.$OАMMAe=(text=$0ОАсe,$МcMрА=null,ok=$еоAIT,$1еесМe=HUD.$ТHНорM)=>
{
let $oМоlHо=(str)=>
{
if($МcMрА)
$МcMрА(str);
};
let $HТ0оОН=()=>
{
if($МcMрА)
$МcMрА(null);
};

HUD.$MссМТ(text,$oМоlHо,$HТ0оОН,ok,$T0o0T,$1еесМe);
};

HUD.$MссМТ=(text=$0OАМe,$oМоlHо=null,$HТ0оОН=null,ok=$оHсll,cancel=$T0o0T,$1еесМe=HUD.$оcОlоM)=>
{
text+=$0OрТ;



if(HUD.$HcрррO)
{
8;
return;
}

HUD.$HcрррO=true;



let $AрТc1c=stage.children.indexOf(globalThis.myCursor._sprite);

let w=600;
let h=80;

h+=(text.split($О0Ao0).length-1)*14;

let align=$оceO;

let $OO1HОO=null;
let $HеНOoМ=~~(w/2);

if($1еесМe!==HUD.$оcОlоM)
{

align=$МОIс;
$HеНOoМ=~~(w*0.15);

if(text.length>15)
$HеНOoМ+=50;
}

if(h>360)
h=360;

mc=HUD.$OНАTOI({[$clе0р]:($1еесМe!==HUD.$оcОlоM)? HUD.$HOAAоM : HUD.$рММеIA,w:w,h:h});
stage.addChildAt(mc,$AрТc1c);


if($1еесМe!==HUD.$оcОlоM)
mc.addChild(HUD.$OНАTOI({[$clе0р]: HUD.$HOAAоM,w:800,h:400,[$eТоM]:-mc[$eТоM],[$рHОМ]:-mc[$рHОМ]}));


if($1еесМe!==HUD.$оcОlоM)
{
$OO1HОO=mc.addChild(HUD.$ОeОHlМ({

[$eТоM]: $HеНOoМ+10,
w: w-$HеНOoМ-30,

[$рHОМ]: 12,
h: 18,

[$ТcIH]:($1еесМe===HUD.$ТHНорM)
}));

globalThis.$еМОАе0=$OO1HОO;
}

mc.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
htmlText: text+$0OрТ,
[$eТоM]: $HеНOoМ,
[$рHОМ]: 20,
align: align,
color: $МMее,
size: 12
}));

let $10TO0H=180;
let $H0cMOO=20;

if(cancel===$0OрТ)
{
globalThis.$eМHo0е=
globalThis.$А0eН1H=mc.addChild(HUD.$oOcНТ({caption:ok,color:$АcНрA,[$clе0р]: HUD.$НОlО0А,[$eТоM]:~~(w*0.5-$10TO0H/2),[$рHОМ]:~~(h-$H0cMOO*1.5),w:$10TO0H,h:$H0cMOO,action:()=>{let v=$OO1HОO?$OO1HОO.value:undefined;HUD.$ТTTсH1();if($oМоlHо)$oМоlHо(v);} }));
}
else
{
globalThis.$eМHo0е=mc.addChild(HUD.$oOcНТ({caption:ok,color:$АcНрA,[$clе0р]: HUD.$НОlО0А,[$eТоM]:~~(w*0.5-$10TO0H-6),[$рHОМ]:~~(h-$H0cMOO*1.5),w:$10TO0H,h:$H0cMOO,action:()=>{let v=$OO1HОO?$OO1HОO.value:undefined;HUD.$ТTTсH1();if($oМоlHо)$oМоlHо(v);} }));
globalThis.$А0eН1H=mc.addChild(HUD.$oOcНТ({caption:cancel,color:$АcНрA,[$clе0р]: HUD.$НОlО0А,[$eТоM]:~~(w*0.5+6),[$рHОМ]:~~(h-$H0cMOO*1.5),w:$10TO0H,h:$H0cMOO,action:()=>{HUD.$ТTTсH1();if($HТ0оОН)$HТ0оОН();} }));
}

stage.forEachChild((c)=>{if(c.onUpdateHTMLElements)c.onUpdateHTMLElements();});
};
HUD.$ТTTсH1=()=>
{
globalThis.$еМОАе0=null;


HUD.$HcрррO=false;
MovieClip.RemoveIfPossible(mc);
mc=null;



stage.forEachChild((c)=>{if(c.onUpdateHTMLElements)c.onUpdateHTMLElements();});
};
}