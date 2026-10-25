


{
let mc=null;

HUD.CreateLoadingScreen=()=>
{
let $AрТc1c=stage.children.indexOf(globalThis.$A1Hpe)+1;

mc=HUD.$OоОT1е($еMТlМ,0,0,800,400);
stage.addChildAt(mc,$AрТc1c);

let logo=mc.addChild(new MovieClip());
logo[$eТоM]=400;
logo[$рHОМ]=200;

let $0oАM1O=1-0.66;
logo.transform.colorTransform=new ColorTransform($0oАM1O,$0oАM1O,$0oАM1O,1);

SpriteSheets.InstallFrameChangeLogic(logo,SpriteSheets.recognized_parts[$ppеoО],[]);


mc.addChild(HUD.$ТHA0H({
[$clе0р]: HUD.$lpНАA,
htmlText: $0lepc,
[$eТоM]: 400,
[$рHОМ]: 274,
align: $оceO,
color: $рОоTТ,
size: 12
}));


};
HUD.DisposeLoadingScreen=()=>
{
MovieClip.RemoveIfPossible(mc);
};
}