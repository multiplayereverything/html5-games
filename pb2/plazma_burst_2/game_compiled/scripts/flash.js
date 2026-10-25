








this.loaderInfo={
parameters:{
l: Cookies.get('login')||'',
p: Cookies.get('password')||'' 
},
url: location.href
};
var root=globalThis;

var trace=isCompiled ?()=>{} : console.log;
{
let old_warn=console.warn;

console.warn=isCompiled ?()=>{} : old_warn;
}
var traceOnce=(()=>
{
let trace_onces=new Set();

return(s)=>
{
if(isCompiled)
return;

if(trace_onces.has(s))
return;

trace_onces.add(s);
console.warn(s);
};
})();
var throwOnce=(()=>
{
let throw_onces=new Set();

return(message)=>
{
if(isCompiled)
return;

if(throw_onces.has(message))
return;

throw_onces.add(message);
console.warn(message);

throw new Error(message);
};
})();

var MAX_INTERPOLATION_SAMPLES=2;
var MAX_INTERPOLATION_MORPH=2;
const DEG_TO_RAD=Math.PI/180;
const RAD_TO_DEG=180/Math.PI;





class PlaybackInstance
{
constructor(soundTransform)
{
this.soundTransform=soundTransform.clone();

this.events={};
}
addEventListener(event_id,callback)
{
debugger;
this.events[event_id]=callback;
}
stop()
{
}
}

var DefineSoundSource=(resource_name)=>
{

let sound_source={
resource_name: resource_name,

custom_volume: 1,

play:(startTime=0,loops=0,soundTransform=null)=>
{
if(!soundTransform)
{
soundTransform=new SoundTransform();

if(sound_source.custom_volume!==1)
soundTransform.volume*=sound_source.custom_volume;
}
else
{
if(sound_source.custom_volume!==1)
{



soundTransform=soundTransform.clone();
soundTransform.volume*=sound_source.custom_volume;
}
}

return JSAudio.StartSoundPlayback(resource_name,startTime,loops,soundTransform);

}
};



return sound_source;
};
var DefineSpriteSourceClass=(resource_name)=>
{
let c;

eval(`
c=class ${resource_name } extends MovieClip
{
constructor()
{
super();
this.SpawnAssumedChildren();
}
};
`);

c.prototype.SpawnAssumedChildren=function()
{


if(resource_name==='water')
{
this.graphics=new Graphics(false);

this.onFrameChanged=()=>
{
this.graphics.clear();

let c;

switch(this.currentFrame)
{
case 1:

c='#91fa0c';


this.blending=Blending.OVERLAY;

break;
case 2:

c='#CBE6EE';


this.blending=Blending.MULTIPLY;

break;
case 3:

c='#ffffffcc';


this.blending=Blending.OVERLAY;

break;
}

this.graphics.beginFill(c);
this.graphics.drawRect(0,0,100,100);
this.graphics.endFill();
};
}
else
if(resource_name==='texture_front0'||resource_name==='door'||resource_name==='water')
{

let c='#000000';






this.graphics=new Graphics(false);
this.graphics.beginFill(c);
this.graphics.drawRect(0,0,100,100);
this.graphics.endFill();


}
else
if(resource_name.indexOf('bar_')===0)
{

SpriteSheets.AssembleBarrelMovieClip(this,resource_name);
}
else
if(resource_name.indexOf('veh_')===0)
{
this.gui=HUD.CreateGUI(this,true);

SpriteSheets.AssembleVehicleMovieClip(this,resource_name);
}
else
if(resource_name.indexOf('eff_')===0||
resource_name.indexOf('rail')===0||
resource_name.indexOf('explosion_')===0||
resource_name==='altblood')
{
SpriteSheets.AssembleEffectMovieClip(this,resource_name);
}
else
if(resource_name==='lens_flare')
{






for(let i=1;i<=6;i++)
{
let f=new MovieClip();
this.addChild(f);

f.graphics=new Graphics(false);


let img=library_bitmap_datas['flare_'+i];

f.graphics.drawImage(img,-img.width/2,-img.height/2,img.width,img.height);

this['f'+i]=f;
}

this.blending=Blending.ADDITIVE;
}
else
if(resource_name==='player')
{
this.gui=HUD.CreateGUI(this,false);

SpriteSheets.AssembleCharacterMovieClip(this);
}
else
if(resource_name==='decor')
{
SpriteSheets.AssembleDecorMovieClip(this);
}
else
if(resource_name==='flake')
{
this.origin=this.addChild(new MovieClip);
SpriteSheets.InstallFrameChangeLogic(this.origin,SpriteSheets.recognized_parts['flake']);
}
else
if(resource_name.indexOf('switchh')===0)
{
if(resource_name==='switchh')
SpriteSheets.InstallFrameChangeLogic(this,SpriteSheets.recognized_parts['Symbol 40']);
if(resource_name==='switchh_blue')
SpriteSheets.InstallFrameChangeLogic(this,SpriteSheets.recognized_parts['Symbol 40 blue']);
if(resource_name==='switchh_red')
SpriteSheets.InstallFrameChangeLogic(this,SpriteSheets.recognized_parts['Symbol 40 red']);
}
else
if(resource_name==='lazer')
{
SpriteSheets.AssembleProjectileMovieClip(this);
}
else
if(Guns.gun_class_scripts[resource_name])
{
SpriteSheets.AssembleGunMovieClip(this,resource_name);
}
else
if(resource_name==='ag_rays'||resource_name==='ag_rays2')
{
}
else
{
traceOnce('Anything needs to be here?');
}
};

globalThis[resource_name]=c;


};











var svg_filter=document.querySelector('#svg_filter feColorMatrix');
var sprite_sheet_quality_version=0;

class ColorTransform
{
constructor(r=1,g=1,b=1,a=1,ar=0,ag=0,ab=0,aa=0)
{
this.r=r;
this.g=g;
this.b=b;
this.a=a;
this.ar=ar;
this.ag=ag;
this.ab=ab;
this.aa=aa;

this.needsUpdate=true;
this.filter_cache='';

this.sprite_sheet_qualtiy_version=sprite_sheet_quality_version;

this.useSVGFilter=true;

this.extra_filter='';
}
clone()
{
let t=new ColorTransform(this.r,this.g,this.b,this.a,this.ar,this.ag,this.ab,this.aa);
t.filter_cache=this.filter_cache;
t.useSVGFilter=this.useSVGFilter;
t.extra_filter=this.extra_filter;
return t;
}
set color(v)
{
throw new Error('Recreate graphics instead with proper color. Color transforms like this can\'t be cached anyway.');


















}
toSVGFilter()
{
let s=[
this.r,0,0,0,this.ar,
0,this.g,0,0,this.ag,
0,0,this.b,0,this.ab,
0,0,0,this.a,this.aa
];

return s.join(' ');
}
toCSSFilter(useSpriteSheetfilterCache)
{
if(sprite_sheet_quality_version!==this.sprite_sheet_qualtiy_version)
this.needsUpdate=true;

if(this.needsUpdate||useSpriteSheetfilterCache)
{
this.needsUpdate=false;

if(this.useSVGFilter)
{
svg_filter.setAttribute('values',this.toSVGFilter());
this.filter_cache='url(#svg_filter)';
}
else
this.filter_cache='';
}
return(this.filter_cache+this.extra_filter)||'none';
}
}
class Transform
{
constructor()
{
this._colorTransform=new ColorTransform();
this._use_color_transform=false;
}
clone()
{
let c=new Transform();
c._colorTransform=this._colorTransform.clone();
c._use_color_transform=this._use_color_transform;
return c;
}
set colorTransform(v)
{
this._colorTransform=v;
this._use_color_transform=true;
}
get colorTransform()
{
return this._colorTransform;
}
}
class FilterBase
{
constructor()
{
this.isColorMatrixFilter=false;
}
clone()
{
debugger;

globalThis.ReportCaughtError(new Error(),'not implemented','Unable to clone FilterBase object');

return new FilterBase();
}
getBoundsExtension()
{
return 0;
}
}
class AdjustColorFilter extends FilterBase
{
constructor(brightness,contrast,saturation,hue)
{
super();

this.brightness=brightness;
this.contrast=contrast;
this.saturation=saturation;
this.hue=hue;
}
toCSSFilter()
{
let parts=[];

if(this.contrast!==0)
parts.push('contrast('+(1+this.contrast/100)+')');

if(this.brightness!==0)
parts.push('brightness('+(1+this.brightness/110)+')');

if(this.saturation!==0)
parts.push('saturate('+(1+this.saturation/100)+')');

if(this.hue!==0)
parts.push('hue-rotate('+(this.hue)+'deg)');

return parts.join('');
}
}
class BlurFilter extends FilterBase
{
constructor(x,y,q)
{
super();

this.x=x;
this.y=y;
}
toCSSFilter()
{
return `blur(${0.5*this.x}px)`;
}
getBoundsExtension()
{
return this.x;
}
}
class DropShadowFilter extends FilterBase
{
constructor(x,y,r,c)
{
super();

this.x=x;
this.y=y;
this.r=r;
this.c=c;
}
toCSSFilter()
{
return `drop-shadow(${this.x}px ${this.y}px ${this.r}px ${this.c})`;
}
getBoundsExtension()
{
return Math.max(Math.abs(this.x),Math.abs(this.y))+this.r;
}
}
class ColorMatrixFilter extends FilterBase
{
constructor(m=null)
{
super();

this.isColorMatrixFilter=true;

this.matrix=m||[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];
}
clone()
{
return new ColorMatrixFilter(this.matrix.slice());
}











toCSSFilter()
{
svg_filter.setAttribute('values',this.matrix.join(' '));
return 'url(#svg_filter)';
}
}
var Blending=
{
NORMAL: 1,
ADDITIVE: 2,
MULTIPLY: 3,
OVERLAY: 4,
SCREEN: 5
};

class MovieClip
{
static init_class()
{

MovieClip.all_listenening_mcs={};

MovieClip.click_on_release_for=null;

MovieClip.current_hover=null;

MovieClip.one_time_mouse_release_callbacks=[];

MovieClip.interpolated_mcs=new Set();

MovieClip.schedule_mouse_move_event=false;

MovieClip.sorted_global_listener_categories=new Set();
MovieClip.draw_index_counter=0;

MovieClip.debug_find_duplicate_listeners=false;
MovieClip.debug_check_reachability=false;
MovieClip.debug_nan_bounds_graphics=false;








}
onNextMouseRelease(c)
{
MovieClip.one_time_mouse_release_callbacks.push({mc:this,callback:c});
}
static getGlobalListenersByEventType(event_id,create=true)
{
if(event_id===undefined)
throw new Error();

if(!MovieClip.all_listenening_mcs[event_id])
{
if(create)
MovieClip.all_listenening_mcs[event_id]=[];
else
return[];
}

if(!MovieClip.sorted_global_listener_categories.has(event_id))
{
MovieClip.sorted_global_listener_categories.add(event_id);

MovieClip.all_listenening_mcs[event_id].sort((a,b)=>{
return a._last_draw_index-b._last_draw_index;
});
}

return MovieClip.all_listenening_mcs[event_id];
}
static UpdateListenerOrder()
{
MovieClip.sorted_global_listener_categories.clear();
}
static registerMovieClipAsGlobalListener(event_id,mc)
{
let arr=MovieClip.getGlobalListenersByEventType(event_id);
if(arr.lastIndexOf(mc)===-1)
arr.push(mc);
}
get visible()
{
return this._visible;
}
set visible(v)
{
if(v!==this._visible)
{


if(!this.isRemoved)
if(this.listeners[MouseEvent.MOUSE_MOVE]||this.listeners[MouseEvent.MOUSE_OVER])
MovieClip.schedule_mouse_move_event=true;

this._visible=v;


}
}











MoveTo(x,y)
{
this.x=x;
this.y=y;
return this;
}
constructor()
{
this.creation_callstack=MovieClip.debug_check_reachability ? getCallstack(): null;
this.assumed_name=null;




this._visible=true;
this.blending=Blending.NORMAL;

this._last_draw_index=-1;

this.children=[];
this.numChildren=0;

this.parent=null;

this.currentFrame=1;
this.totalFrames=30;

this.graphics=null;
this.context2d_prerender_callback=null;

this.transform=new Transform();

this.listeners={};
this.filters=[];

this.scaleX=1;
this.scaleY=1;
this.x=0;
this.y=0;
this.rotation=0;

this.round_position_on_render=false;

this.alpha=1;

this.debug_on_render=false;
this.hit_test_area_grow=0;

this.label_to_frame=null;
this.frame_to_label=null;

this.interpolation_data=null;
this.interpolation_data_undo_data=null;

this.onUpdateHTMLElements=null;

this._onFrameChanged=null;
this._onEndReached=null;
this.onRemove=null;
this.onFocus=null;
this.onChildDetach=null;

this.onAddedAsChild=null;

this.onOcclusionTest=null;
this.last_occlusion_result=true;

this.userData=null;

this.isScrollContainer=false;

this.isRemoved=false;
}
SetEnabledInterpolatedPosition(enable,t)
{
if(enable)
{
this.interpolation_data_undo_data.x=this.x;
this.interpolation_data_undo_data.y=this.y;
this.interpolation_data_undo_data.rotation=this.rotation;

let data=this.interpolation_data;

if(data===null||data.length<2)
{
}
else
{
let last_state=data[0];
let previous_state=data[1];

if(!system_non_stop)
{
last_state.t=t;
}

let morph=(t-last_state.t)/(last_state.t-previous_state.t);

if(morph>MAX_INTERPOLATION_MORPH)
morph=MAX_INTERPOLATION_MORPH;

let morph_inv=1-morph;

this.x=last_state.x*morph+previous_state.x*morph_inv;
this.y=last_state.y*morph+previous_state.y*morph_inv;



if(this.rotation!==last_state.rot)
{
let rot_sin=last_state.rot_sin*morph+previous_state.rot_sin*morph_inv;
let rot_cos=last_state.rot_cos*morph+previous_state.rot_cos*morph_inv;

this.rotation=Math.atan2(rot_sin,rot_cos)*RAD_TO_DEG;
}
}
}
else
{
this.x=this.interpolation_data_undo_data.x;
this.y=this.interpolation_data_undo_data.y;
this.rotation=this.interpolation_data_undo_data.rotation;
}
}
clearMCInterpolationData()
{
if(this.interpolation_data)
this.interpolation_data.length=0;
}












SetMCInterpolationData(t)
{
if(UNLIMITED_SCREEN_REFRESH_RATE)
{
let data;

if(!this.interpolation_data)
{
if(!this.parent)
throw new Error();

MovieClip.interpolated_mcs.add(this);

this.interpolation_data=[];

this.interpolation_data_undo_data={x:0,y:0,rotation:0};
}

data=this.interpolation_data;

let an=this.rotation*DEG_TO_RAD;

if(data.length>0)
{
if(data[0].t===t)
{
data[0].x=this.x;
data[0].y=this.y;
data[0].rot=an;
data[0].rot_sin=Math.sin(an);
data[0].rot_cos=Math.cos(an);
return;
}
}

if(data.length===MAX_INTERPOLATION_SAMPLES)
{
if(MAX_INTERPOLATION_SAMPLES!==2)
throw new Error();

let added=data[0];
let existing=data[1];


existing.x=added.x;
existing.y=added.y;
existing.rot=added.rot;
existing.rot_sin=added.rot_sin;
existing.rot_cos=added.rot_cos;
existing.t=added.t;

added.x=this.x;
added.y=this.y;
if(added.rot!==an)
{
added.rot=an;
added.rot_sin=Math.sin(an);
added.rot_cos=Math.cos(an);
}
added.t=t;
}
else
{
data.unshift({x:this.x,y:this.y,rot:an,rot_sin:Math.sin(an),rot_cos:Math.cos(an),t:t});

if(data.length>MAX_INTERPOLATION_SAMPLES)
data.length=MAX_INTERPOLATION_SAMPLES;
}
}
}
SetFiltersRecursively(filters)
{
this.filters=filters;

this.forEachChild((mc)=>
{
mc.filters=filters;
},true);
}
forEachChild(action,recursively=true)
{
for(let i=0;i<this.children.length;i++)
{
action(this.children[i]);

if(recursively)
this.children[i].forEachChild(action,recursively);
}
}
SetMCInterpolationDataRecursively(t)
{
if(UNLIMITED_SCREEN_REFRESH_RATE)
{
this.SetMCInterpolationData(t);

for(let i=0;i<this.children.length;i++)
this.children[i].SetMCInterpolationDataRecursively(t);
} 
}
getMergedCSSFilter(with_bounds_extension=false)
{
let bounds_extension=0;
let s=[];

for(let i=0;i<this.filters.length;i++)
{
s.push(this.filters[i].toCSSFilter());

let ext=this.filters[i].getBoundsExtension();

if(isNaN(ext))
debugger;

bounds_extension+=ext;
}

let f=(s.length>0)? s.join(' '): 'none';

if(with_bounds_extension)
return[f,bounds_extension];
else
return f;
}

removeAllChildrenGraphicsAndResetTransform()
{
while(this.numChildren>0)
this.removeChildAt(0);

this.graphics=null;

this.scaleX=1;
this.scaleY=1;
this.x=0;
this.y=0;
}

set onFrameChanged(v)
{

if(v===null)
{
this._onFrameChanged=null;
return;
}

if(this._onFrameChanged)
debugger;

this._onFrameChanged=v;
this._onFrameChanged();
}
set onEndReached(v)
{
if(this._onEndReached)
debugger;

this._onEndReached=v;
}
get currentFrameLabel()
{
if(this.frame_to_label===null)
{
if(this.label_to_frame)
{
this.frame_to_label={};
for(let i in this.label_to_frame)
this.frame_to_label[this.label_to_frame[i]]=i;
}
else
debugger;
}

return this.frame_to_label[this.currentFrame];
}
get currentLabel()
{
return this.currentFrameLabel;
}
nextFrame()
{
this.currentFrame=this.currentFrame+1;

if(this.currentFrame>this.totalFrames)
{
this.currentFrame=1;

if(this._onEndReached)
this._onEndReached();
}

if(this._onFrameChanged)
this._onFrameChanged();
}

gotoAndPlay(f)
{

this.gotoAndStop(f);
}
gotoAndStop(f)
{
if(typeof f==='string')
{
if(this.label_to_frame)
if(typeof this.label_to_frame[f]==='number')
{
this.currentFrame=this.label_to_frame[f];


if(this._onFrameChanged)
this._onFrameChanged();

return this;
}
console.warn('MovieClip "'+this.assumed_name+'" (',this,') does not have frame labeled "'+f+'"');
}
else
this.currentFrame=Math.max(1,Math.min(this.totalFrames,f));


if(this._onFrameChanged)
this._onFrameChanged();

return this;
}

detach()
{
this.parent.detachChildAt(this.parent.children.indexOf(this));
}
detachChildAt(index)
{
let mc=this.children[index];

if(mc===game)
debugger;

mc.parent=null;

this.children.splice(index,1);
this.numChildren--;
}

static RemoveUnlistedMC(mc)
{
if(mc===game)
debugger;

if(MovieClip.current_hover===mc)
if(mc.listeners)
{
let arr=MovieClip.current_hover.listeners[MouseEvent.MOUSE_OUT];
if(arr)
for(let i=0;i<arr.length;i++)
arr[i]({});
}

if(mc.onRemove)
mc.onRemove();

mc.listeners=null;

mc.isRemoved=true;

if(mc.interpolation_data)
{
MovieClip.interpolated_mcs.delete(mc);

mc.interpolation_data=null;
mc.interpolation_data_undo_data=null;
}


while(mc.children.length>0)
mc.removeChildAt(0);
}

removeChildAt(index)
{
let mc=this.children[index];

MovieClip.RemoveUnlistedMC(mc);

if(this.children[index]!==mc)
{
index=this.children.indexOf(mc);

if(index===-1)
throw new Error('MovieClip removed mid-removeChildAt call?');
}

this.detachChildAt(index);

if(this.onChildDetach)
this.onChildDetach();
}

contains(mc)
{
return(this.children.indexOf(mc)!==-1);
}
static RemoveIfPossible(mc)
{
if(mc)
if(mc.parent)
mc.remove();
}
remove()
{
this.parent.removeChild(this);
}
removeChild(mc)
{
let id=this.children.indexOf(mc);
if(id!==-1)
this.removeChildAt(id);
else
debugger;
}

localPointToScenePoint(x,y)
{
return this.scenePointToLocalPoint(x,y,true);
}
GetInheritedVisibility()
{
let ptr=this;
while(ptr)
{
if(!ptr.visible)
return false;

ptr=ptr.parent;
}
return true;
}
scenePointToLocalPoint(x,y,inverse=false)
{
let ptr=this;

if(inverse)
{
x*=this.scaleX;
y*=this.scaleY;
}

while(ptr)
{


if(inverse)
{
x+=ptr.x;
y+=ptr.y;

if(ptr.parent)
if(ptr.parent.isScrollContainer)
{
y+=ptr.parent.scroll_y;
}
}
else
{
x-=ptr.x;
y-=ptr.y;


if(ptr.parent)
if(ptr.parent.isScrollContainer)
{
y-=ptr.parent.scroll_y;
}
}
ptr=ptr.parent;
}

if(inverse)
{





}
else
{
x/=this.scaleX;
y/=this.scaleY;
}

return[x,y];
}
hitTestPoint(x,y,accuracy,check_children=false)
{
let ptr=this;

let x0=x;
let y0=y;



while(ptr)
{
if(!ptr.visible)
return false;
x-=ptr.x;
y-=ptr.y;

if(ptr.parent)
if(ptr.parent.isScrollContainer)
{
y-=ptr.parent.scroll_y;

if(!ptr.parent.hitTestPoint(x0,y0,accuracy,false))
return false;
}

ptr=ptr.parent;
}

x/=this.scaleX;
y/=this.scaleY;


if(this.isScrollContainer)
{
if(x>=0)
if(x<this.scroll_area_width)
if(y>=0)
if(y<this.scroll_area_height)
return true;
}
else
if(this.graphics)
{
if(x>=this.graphics.bounds.x1-this.hit_test_area_grow*SpriteSheets.text_quality_scale/3)
if(x<this.graphics.bounds.x2+this.hit_test_area_grow*SpriteSheets.text_quality_scale/3)
if(y>=this.graphics.bounds.y1-this.hit_test_area_grow*SpriteSheets.text_quality_scale/3)
if(y<this.graphics.bounds.y2+this.hit_test_area_grow*SpriteSheets.text_quality_scale/3)
{




return true;
}
}

if(check_children)
{
let any=false;
for(let i=0;i<this.children.length;i++)
{
any=this.children[i].hitTestPoint(x0,y0,accuracy,check_children);

if(any)
return true;
}
}

return false;
}

addChild(mc)
{
return this.addChildAt(mc,this.numChildren);
}
addChildAt(mc,before)
{
if(before===undefined)
throw new Error();

if(this.isRemoved)
{
MovieClip.RemoveUnlistedMC(mc);
return mc;
}

if(!mc)
{
trace('No mc to add');
return;
}
if(!(mc instanceof MovieClip))
{
throw new Error('Incorrect object type being added as child to MovieClip: ',mc);
}

if(mc.parent)
{
if(mc.parent===this)
{
return;
}
else
{

let id=mc.parent.children.indexOf(mc);
mc.parent.detachChildAt(id);
}
}

this.children.splice(before,0,mc);
this.numChildren++;

mc.parent=this;

if(mc.onAddedAsChild)
mc.onAddedAsChild();

return mc;
}
renderRecursively(ctx)
{
if(this.debug_on_render)
debugger;

if(!this._visible)
return;

this._last_draw_index=MovieClip.draw_index_counter++;

if(this.alpha<=0)
return;

if(this.onOcclusionTest)
if(!this.onOcclusionTest(this))
return;



ctx.save();



{
if(this.round_position_on_render)
{

ctx.translate(Math.round(this.x),Math.round(this.y));
}
else
if(this.x!==0||this.y!==0)
ctx.translate(this.x,this.y);

if(this.rotation!==0)
ctx.rotate(this.rotation/180*Math.PI);

if(this.scaleX!==1||this.scaleY!==1)
ctx.scale(this.scaleX,this.scaleY);

switch(this.blending)
{
case Blending.NORMAL:
break;
case Blending.ADDITIVE:
ctx.globalCompositeOperation="lighter";
break;
case Blending.MULTIPLY:
ctx.globalCompositeOperation="multiply";
break;
case Blending.OVERLAY:
ctx.globalCompositeOperation="overlay";
break;
case Blending.SCREEN:
ctx.globalCompositeOperation="screen";
break;
default:
debugger;
break;
}
if(this.alpha<1)
ctx.globalAlpha=this.alpha;

if(this.context2d_prerender_callback)
{
this.context2d_prerender_callback(ctx);
}
























































{
if(this.graphics)
{

let colorTransform=null;
if(this.transform._use_color_transform)
colorTransform=this.transform._colorTransform;

let colorMatrixFiter=null;
for(let i=0;i<this.filters.length;i++)
if(this.filters[i].isColorMatrixFilter)
{
colorMatrixFiter=this.filters[i];
break;
}

this.graphics.drawOnto(ctx,colorTransform,colorMatrixFiter);












}
else
if(this instanceof Bitmap)
{
if(this.bitmap_data)
{
if(this.transform._use_color_transform)
{

ctx.drawImage(SpriteSheets.GetColorTransformedVersionOf(this.bitmap_data.canvas,this.transform.colorTransform),0,0);
}
else
ctx.drawImage(this.bitmap_data.canvas,0,0);
}
else
if(this.image_data)
ctx.drawImage(this.image_data,0,0);
else
{
traceOnce('Image-less Bitmap found');
}
}
}

for(let i=0;i<this.children.length;i++)
this.children[i].renderRecursively(ctx);


}





ctx.restore();







}
click(event={})
{
this.runOwnEvents(MouseEvent.MOUSE_DOWN,event={});
this.runOwnEvents(MouseEvent.MOUSE_UP,event={});
this.runOwnEvents(MouseEvent.MOUSE_UP_ANYWHERE,event={});
this.runOwnEvents(MouseEvent.CLICK,event={});
}
runOwnEvents(event_id,event={})
{
if(!this.parent)
{
debugger;
return;
}

let arr=this.getListenersByEventType(event_id,false);

for(let i=0;i<arr.length;i++)
arr[i](event);
}
runEvents(event_id,params={})
{


let check_reachability=MovieClip.debug_check_reachability;
if(check_reachability)
traceOnce('check_reachability is enabled at MovieClip.runEvents(). Expect worse performance');

let do_hit_test=(
event_id===MouseEvent.MOUSE_DOWN||
event_id===MouseEvent.MOUSE_UP||
event_id===MouseEvent.CLICK||
event_id===MouseEvent.MOUSE_MOVE

);

if(event_id===MouseEvent.MOUSE_DOWN)
MovieClip.click_on_release_for=null;

if(event_id===MouseEvent.MOUSE_UP)
{
let arr=MovieClip.one_time_mouse_release_callbacks;
for(let i=0;i<arr.length;i++)
{
arr[i].callback(params);
}
MovieClip.one_time_mouse_release_callbacks.length=0;
}

let new_hover=null;

let event_ids_to_check;

if(event_id===MouseEvent.MOUSE_MOVE)
{
event_ids_to_check=[MouseEvent.MOUSE_MOVE,MouseEvent.MOUSE_OVER,MouseEvent.MOUSE_OUT];
}
else
{
event_ids_to_check=[event_id];
}

if(this===stage)
{
for(let t=0;t<event_ids_to_check.length;t++)
{
let lookup_event_id=event_ids_to_check[t];

let arr=MovieClip.getGlobalListenersByEventType(lookup_event_id,false);

let listeners_tot=arr.length;

mcs_loop:
for(let i=0;i<listeners_tot;i++)
{
let mc=arr[i];

if(mc.isRemoved)
{
arr.splice(i,1);
i--;
listeners_tot--;
continue;
}
else
{
if(check_reachability)
{
let ptr=mc;

while(true)
{
if(ptr===stage)
break;

if(ptr===null)
{
if(mc.creation_callstack)
{
if(mc.creation_callstack.lastIndexOf('ui.js')!==-1||mc.creation_callstack.lastIndexOf('screens')!==-1)
{
trace('MovieClip that was made in ui.js or "screens" folder has events but is not a child of stage. Will remove its\' listeners for now until UI is impelmented');

arr.splice(i,1);
i--;
listeners_tot--;
continue mcs_loop;

break;
}
}
else
throw new Error('check_reachability requires mc.creation_callstack. Try enabling both or disabling both?');


throw new Error('MovieClip with events of type '+Event.IDToString(event_id)+' has been detached from stage. Try removing it properly?');
}

ptr=ptr.parent;
}
}

let arr2=mc.listeners[lookup_event_id];
if(arr2.length===0)
{
arr.splice(i,1);
i--;
listeners_tot--;
continue mcs_loop;
}
else
{
if(do_hit_test)
{
if(mc===stage)
{

}
else
if(mc.hitTestPoint(mouseX,mouseY))
{
if(event_id===MouseEvent.MOUSE_MOVE)
{

new_hover=mc;
}

if(event_id===MouseEvent.MOUSE_DOWN)
{

MovieClip.click_on_release_for=mc;
}
else
if(event_id===MouseEvent.CLICK)
{
if(MovieClip.click_on_release_for===mc)
{

}
else
continue mcs_loop;
}
}
else
continue mcs_loop;
}


if(event_id===lookup_event_id)
{
let previous_callback=null;

events_of_mc:
for(let i2=0;i2<arr2.length;i2++)
{
let callback=arr2[i2];

callback(params);

if(callback!==arr2[i2])
{
if(previous_callback)
{
i2=arr2.indexOf(previous_callback);

if(i2===-1)
{
debugger;
}

continue events_of_mc;
}
else
{
i2=0-1;
continue events_of_mc;
}
}
}
}
}
}

if(mc!==arr[i])
{
debugger;
}
}
}

if(event_id===MouseEvent.CLICK)
MovieClip.click_on_release_for=null;


if(event_id===MouseEvent.MOUSE_MOVE)
{
if(MovieClip.current_hover===new_hover)
{
}
else
{
if(MovieClip.current_hover)
if(MovieClip.current_hover.listeners)
{
let arr=MovieClip.current_hover.listeners[MouseEvent.MOUSE_OUT];
if(arr)
for(let i=0;i<arr.length;i++)
arr[i](params);
}

MovieClip.current_hover=new_hover;

if(new_hover)
if(new_hover.listeners)
{
let arr=new_hover.listeners[MouseEvent.MOUSE_OVER];
if(arr)
for(let i=0;i<arr.length;i++)
arr[i](params);
}
}
}

return;
}

throw new Error('Method is no longer used nor allowed to be called by anything other than stage object');

let arr=this.getListenersByEventType(event_id,false);

for(let i=0;i<arr.length;i++)
arr[i](params);

for(let i=0;i<this.children.length;i++)
this.children[i].runEvents(event_id,params);
}
getListenersByEventType(event_id,create=true)
{
if(event_id===undefined)
throw new Error();

if(!this.listeners[event_id])
{
if(create)
this.listeners[event_id]=[];
else
return[];
}

return this.listeners[event_id];
}
setEventListener(event_id,callback)
{
let arr=this.getListenersByEventType(event_id);
arr.length=0;

this.addEventListener(event_id,callback);
}
addEventListener(event_id,callback)
{
let arr=this.getListenersByEventType(event_id);

if(MovieClip.debug_find_duplicate_listeners)
if(arr.length>0)
{
traceOnce('String-based listener search enabled. Expect worse performance.');
let str=callback.toString();

for(let i=0;i<arr.length;i++)
if(str===arr[i].toString())
{
console.error('Exactly same listener already exists');
debugger;
return;
}
}

if(arr.indexOf(callback)===-1)
{
arr.push(callback);
MovieClip.registerMovieClipAsGlobalListener(event_id,this);
}
else
{

}

if(event_id===Event.ENTER_FRAME)
{
if(arr.length>40)
debugger;
}
else
{
if(arr.length>10)
debugger;
}


if(event_id===MouseEvent.MOUSE_MOVE||event_id===MouseEvent.MOUSE_OVER)
MovieClip.schedule_mouse_move_event=true;
}
removeEventListener(event_id,callback)
{
let arr=this.getListenersByEventType(event_id);

let id=arr.indexOf(callback);

if(id!==-1)
{
arr.splice(id,1);
}


}
}
MovieClip.init_class();

class TextField extends MovieClip
{
static init_class()
{
TextField.STICKER_WIDTHS=[
null,
{t:['>:)',':>'],w:96},
{t:[":'(",':('],w:96},
{t:['heal','defibrillator','defib'],w:64},
{t:['hacks','hax'],w:160},
{t:['lags','lag'],w:128},
{t:[':/',':?'],w:160},
{t:['grr','pissed','angry','fuck you'],w:160},
{t:[':!',':O'],w:160},
{t:[':!?','???'],w:96},
{t:['thumbs up','nice'],w:128},
{t:['LOL','lol','xD','xd','XD'],w:160},
{t:['>:O','AAA'],w:160},
{t:['^o^',':D',':3','uwu','owo'],w:128},
{t:['>:(','>:c'],w:160},
{t:['-kill'],w:96},
{t:['8)'],w:96},
{t:['potato-aim'],w:160},
{t:['...'],w:128}
];
}
static AsHexColor(string,fallback_color='#000000')
{
if(TextField.is6DigitHexCode(string))
return string;

debugger;

return fallback_color;
}
static is6DigitHexCode(string)
{
function isHexadecimalDigit(char){
const hexDigits="0123456789abcdefABCDEF";
return hexDigits.indexOf(char)!==-1;
}


if(!string.startsWith("#")){
return false;
}


if(string.length!==7){
return false;
}


for(let i=1;i<string.length;i++){
const char=string[i];
if(!isHexadecimalDigit(char)){
return false;
}
}

return true;
}
static QuickReplaceMyEmojis(v)
{
return v;





















}
constructor()
{
super();

this._text=null;
this._htmlText=null;
this._parts=null;

this._font='8px Times New Roman';
this.align='left';
this.color='#ffffff';
this.letterSpacing=0;

this.line_height_extra_mult=1.2;
this.line_height=8*this.line_height_extra_mult;

this.use_flash_custom_antialias=false;

this.triggerUpdatesOnTextChange=true;


this.stickers=[];
}

set textColor(v)
{
if(typeof v!=='string')
throw new Error('CSS color string expected');

if(this.color!==v)
{
this.color=v;

if(this.triggerUpdatesOnTextChange)
this.UpdateGraphics();
}
}
get textColor()
{
return this.color;
}

set text(v)
{
if(this._text!==v)
{
this._htmlText=null;
this._text=v;
this._parts=null;

if(this.triggerUpdatesOnTextChange)
this.UpdateGraphics();
}
}
get text()
{
return this._text||this._htmlText||'';
}


set htmlText(v)
{
if(typeof v!=='string')
v+='';

if(this._htmlText!==v)
{

for(let i=TextField.STICKER_WIDTHS.length-1;i>0;i--)
{
let sticker_code='/s'+i+'';

v=v.split(sticker_code).join('<s v="'+i+'" />');
}


this._text=null;
this._htmlText=v;
this._parts=[];

let is6DigitHexCode=TextField.is6DigitHexCode;

function InfinityIfNotFound(v)
{
return(v===-1)? Infinity : v;
}

function RestoreSpecialCharacters(s)
{
return s.split('&lt;').join('<').split('&gt;').join('>');
}

let lines=this._htmlText.split('\n');


let colors_stack=[null];

for(let i=0;i<lines.length;i++)
{
let text_html=lines[i];

let pos=0;
while(pos<text_html.length)
{
let next_tag_open=text_html.indexOf('<',pos);

if(next_tag_open===-1)
{
break;
}
else
{
let next_tag_close=text_html.indexOf('>',next_tag_open);

if(next_tag_close===-1)
{
break;
}

let tag_name_end=Math.min(
InfinityIfNotFound(text_html.indexOf(' ',next_tag_open+2)),
InfinityIfNotFound(text_html.indexOf('/',next_tag_open+2)),
InfinityIfNotFound(text_html.indexOf('>',next_tag_open+2))
);

if(tag_name_end===-1)
{
break;
}

let tag_name=text_html.substring(next_tag_open+1,tag_name_end);

if(next_tag_open!==pos)
this._parts.push({line:i,text:RestoreSpecialCharacters(text_html.substring(pos,next_tag_open)),color:colors_stack[colors_stack.length-1]});

if(tag_name==='font')
{
let quote1=Math.min(
InfinityIfNotFound(text_html.indexOf('"',tag_name_end)),
InfinityIfNotFound(text_html.indexOf('\'',tag_name_end))
);

if(quote1!==Infinity)
{
let quote2=Math.min(
InfinityIfNotFound(text_html.indexOf('"',quote1+1)),
InfinityIfNotFound(text_html.indexOf('\'',quote1+1))
);

if(quote2!==Infinity)
{
let color_unsafe=text_html.substring(quote1+1,quote2);
if(is6DigitHexCode(color_unsafe))
{
let safe_color=color_unsafe;

colors_stack.push(safe_color);
}
else
debugger;
}
else
debugger;
}
else
debugger;
}
else
if(tag_name==='/font')
{
if(colors_stack.length>1)
colors_stack.pop();
}
else
if(tag_name==='s')
{
let quote1=Math.min(
InfinityIfNotFound(text_html.indexOf('"',tag_name_end)),
InfinityIfNotFound(text_html.indexOf('\'',tag_name_end))
);

if(quote1!==Infinity)
{
let quote2=Math.min(
InfinityIfNotFound(text_html.indexOf('"',quote1+1)),
InfinityIfNotFound(text_html.indexOf('\'',quote1+1))
);

if(quote2!==Infinity)
{
let frame_id=parseInt(text_html.substring(quote1+1,quote2));

if(frame_id>=1&&frame_id<TextField.STICKER_WIDTHS.length)
{
this._parts.push({sticker: frame_id});
}
}
else
debugger;
}
else
debugger;
}
else
if(tag_name==='b')
{
}
else
if(tag_name==='/b')
{
}
else
{
debugger;
}

pos=next_tag_close+1;
continue;
}
}

this._parts.push({line:i,text:RestoreSpecialCharacters(text_html.substring(pos)),color:colors_stack[colors_stack.length-1]});
}

if(this.triggerUpdatesOnTextChange)
this.UpdateGraphics();
}
}
get htmlText()
{
return this._htmlText||this._text||'';
}

setTextFormat(f)
{
debugger;
}

get font()
{
return this._font;
}
set font(v)
{
this._font=v;

this.line_height=parseFloat(v.split('px')[0].split(' ').pop())*this.line_height_extra_mult;

if(isNaN(this.line_height)||this.line_height<=0)
debugger;



}
UpdateGraphics()
{
if(this.graphics)
this.graphics.clear();
else
this.graphics=new Graphics();

while(this.stickers.length>0)
this.stickers.pop().remove();





if(this._text||(this._parts&&this._parts.length>0))
if(this.filters.length>0)
this.graphics.setFilter(...this.getMergedCSSFilter(true));

if(this._text!==null)
{
let font=this._font;
let align=this.align;
let x=0;
let y=0;
let color=this.color;

this.graphics.writeText(this._text,font,align,x,y,color,this.letterSpacing);

if(this.use_flash_custom_antialias)
this.graphics.applyCustomFlashFontAntialias();
}
else
if(this._parts!==null)
{
let font=this._font;
let align=this.align;
let x=0;
let y=0;
let color=this.color;

let old_line=0;

for(let i=0;i<this._parts.length;i++)
{
if(this._parts[i].sticker!==undefined)
{
if(this.align==='left')
{
let frame=this._parts[i].sticker;

let sticker=this.addChild(SpriteSheets.AssembleFrameBasedMovieClip(new MovieClip(),'stickers'));

this.stickers.push(sticker);
sticker.scaleX=1/this.scaleX;
sticker.scaleY=1/this.scaleY;

sticker.gotoAndStop(frame);


sticker.y=y-this.line_height/2-(sticker.graphics.bounds.y2-sticker.graphics.bounds.y1)/2;

sticker.x=x;
x+=TextField.STICKER_WIDTHS[frame].w/this.scaleX/4;
}
}
else
{
let line_id=this._parts[i].line;

if(line_id>old_line)
{
y+=this.line_height*(line_id-old_line);
x=0;

old_line=line_id;
}

x+=this.graphics.writeText(this._parts[i].text,font,align,x,y,this._parts[i].color||color,this.letterSpacing);
}
}

if(this.use_flash_custom_antialias)
this.graphics.applyCustomFlashFontAntialias();
}
}
}
TextField.init_class();
class Shape extends MovieClip
{
};
class Sprite extends MovieClip
{
constructor()
{
super();

this.graphics=new Graphics();
}
};
class Bitmap extends MovieClip
{
constructor(bitmap_data_or_image=new BitmapData(30,30,true,'#00ff00'))
{
super();

this.bitmap_data=null;
this.image_data=null;

if(bitmap_data_or_image instanceof BitmapData)
this.bitmap_data=bitmap_data_or_image;
else
this.image_data=bitmap_data_or_image;
}
set bitmapData(bitmap_data_or_image)
{
this.bitmap_data=null;
this.image_data=null;

if(bitmap_data_or_image instanceof BitmapData)
this.bitmap_data=bitmap_data_or_image;
else
this.image_data=bitmap_data_or_image;
}
get bitmapData()
{
debugger;
}
};

class Rectangle
{
constructor(x,y,w,h)
{
this.x=x;
this.y=y;
this.w=w;
this.h=h;
}
}

class BitmapData
{
static init_class()
{
BitmapData.reusable_missing_image_one=null;
}
static GetMissingImageBitmapData()
{
let ret=new BitmapData(2,2,true,'#FF000066',BitmapData.reusable_missing_image_one);

if(!BitmapData.reusable_missing_image_one)
BitmapData.reusable_missing_image_one=ret.canvas;

if(BitmapData.reusable_missing_image_one.width!==2||BitmapData.reusable_missing_image_one.height!==2)
throw new Error('Something has changed default reusable missing image canvas. It must be never changed and new canvas should be only assigned');

return ret;
}
constructor(w,h,transparency,fill_color_css='#000000',canvas_to_reuse=null)
{
let canvas=canvas_to_reuse||document.createElement('canvas');
canvas.width=w;
canvas.height=h;

this.canvas=canvas;
let ctx=canvas.getContext("2d");
this.ctx=ctx;

if(typeof fill_color_css!=='string')
throw new Error();

if(!canvas_to_reuse)
{
ctx.fillStyle=fill_color_css;
ctx.fillRect(0,0,w,h);

this.bitmap_pattern_fills=canvas.bitmap_pattern_fills=[];


}
else
this.bitmap_pattern_fills=canvas.bitmap_pattern_fills;
}
ResetBitmapPatternFillCaches()
{

for(let i=0;i<this.bitmap_pattern_fills.length;i++)
{
let ctx=this.bitmap_pattern_fills[i];

if(!ctx._pattern_cache.has(this.canvas))
{

}
else
{
ctx._pattern_cache.delete(this.canvas);


}
}
this.bitmap_pattern_fills.length=0;
}
lock()
{
}
unlock()
{
}
fillRect(rect,fill_color_css)
{
if(typeof fill_color_css!=='string')
throw new Error();

let ctx=this.ctx;

ctx.fillStyle=fill_color_css;
ctx.fillRect(rect.x,rect.y,rect.w,rect.h);
}
dispose()
{
this.canvas=null;
this.ctx=null;
}
clone()
{
let c=new BitmapData(this.canvas.width,this.canvas.height);
c.replaceContentWith(this);
return c;
}
replaceContentWith(other)
{
if(other instanceof BitmapData)
{
this.canvas.width=other.canvas.width;
this.canvas.height=other.canvas.height;
}
else
{
this.canvas.width=other.width;
this.canvas.height=other.height;
}

this.ctx.save();
this.ctx.globalCompositeOperation="copy";


if(other instanceof BitmapData)
this.ctx.drawImage(other.canvas,0,0);
else
this.ctx.drawImage(other,0,0);

this.ctx.restore();
}
get rect()
{
return new Rectangle(0,0,this.canvas.width,this.canvas.height);
}
drawWithQuality(...args){this.draw(...args);}
draw(drawable,matrix=null,colorTransform=null,blendMode=null,clipRect=null,smoothing=false)
{
let ctx=this.ctx;

if(colorTransform)
throw new Error();

if(blendMode)
throw new Error();

if(clipRect)
throw new Error();







ctx.save();
{
if(matrix)
{
ctx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
}









let old_x=drawable.x;
let old_y=drawable.y;
let old_rotation=drawable.rotation;
let old_scaleX=drawable.scaleX;
let old_scaleY=drawable.scaleY;
{
drawable.x=0;
drawable.y=0;
drawable.rotation=0;
drawable.scaleX=1;
drawable.scaleY=1;

drawable.renderRecursively(ctx);
}
drawable.x=old_x;
drawable.y=old_y;
drawable.rotation=old_rotation;
drawable.scaleX=old_scaleX;
drawable.scaleY=old_scaleY;

}
ctx.restore();
}
colorTransform(rect,colorTransform)
{
let ctx=this.ctx;
let canvas=this.canvas;























if(
colorTransform.r!==1||
colorTransform.g!==1||
colorTransform.b!==1||
colorTransform.ar!==0||
colorTransform.ag!==0||
colorTransform.ab!==0
)
debugger;

const imageData=ctx.getImageData(0,0,canvas.width,canvas.height);
const data=imageData.data;

for(let i=0;i<data.length;i+=4)
{
data[i+3]=data[i+3]*colorTransform.a+colorTransform.aa;
}

ctx.putImageData(imageData,0,0);
}
}
BitmapData.init_class();

var UUID_counter=0;
function GetResourceName(ctx)
{
ctx._pb2uid=(ctx._pb2uid===undefined)? UUID_counter++: ctx._pb2uid;

return '[ resource '+ctx._pb2uid+' ]';
}
function GetBitmapPattern(ctx,bitmap)
{
if(bitmap instanceof BitmapData)
{
if(bitmap.bitmap_pattern_fills.indexOf(ctx)===-1)
{
bitmap.bitmap_pattern_fills.push(ctx);

if(bitmap.bitmap_pattern_fills.length>30)
debugger;
}

bitmap=bitmap.canvas;
}

let pattern_cache=ctx._pattern_cache;
if(!pattern_cache)
{
pattern_cache=ctx._pattern_cache=new Map();
}

let pattern=pattern_cache.get(bitmap);
if(!pattern)
{
pattern=ctx.createPattern(bitmap,"repeat");
pattern_cache.set(bitmap,pattern);


}

if(pattern_cache.size>200)
debugger;

return pattern;
}
class Graphics
{
constructor(attemptPrecaching=true,scale=1)
{




this.draw_operations=[];
this.bounds={x1:0,y1:0,x2:0,y2:0,outline:0};
this.scale=scale;

this.has_stroke=false;
this.has_fill=false;

if(MovieClip.debug_nan_bounds_graphics)
{
TrackNaNProperty(this.bounds,'x1');
TrackNaNProperty(this.bounds,'y1');
TrackNaNProperty(this.bounds,'x2');
TrackNaNProperty(this.bounds,'y2');
TrackNaNProperty(this.bounds,'outline');
}

this.pattern_offset_x=0;
this.pattern_offset_y=0;

this._colorTransform=null;
this._colorMatrixFilter=null;

this._temp_canvas=null;
this._temp_ctx=null;

if(attemptPrecaching)
{
let canvas=document.createElement('canvas');
canvas.width=2;
canvas.height=2;
this.canvas=canvas;
this.ctx=canvas.getContext("2d");

canvas.addEventListener("contextlost",(event)=>
{

this.onPrecachingFail();
});
}
else
{
this.canvas=null;
this.ctx=null;
}

this.useSpriteSheetfilterCache=true;

this.attemptPrecaching=attemptPrecaching;
this.isDirty=false;


}
onPrecachingFail()
{
if(this.attemptPrecaching)
{
let canvas=this.canvas;
let pixels_total=canvas.width*canvas.height;
console.warn('Precache has been failed for canvas of size: '+canvas.width+' x '+canvas.height+' ('+pixels_total+' total pixels). Enabling fallback mode of drawing contents directly instead ('+this.draw_operations.length+' draw operations)');

this.attemptPrecaching=false;
this.canvas=null;
this.ctx=null;
}
}
clone()
{
if(this.attemptPrecaching)
throw new Error();

let g=new Graphics(this.attemptPrecaching,this.scale);
g.draw_operations=this.draw_operations.slice();
g.bounds=Object.assign({},this.bounds);
g.pattern_offset_x=this.pattern_offset_x;
g.pattern_offset_y=this.pattern_offset_y;




return g;
}
drawOnto(ctx,colorTransform=null,colorMatrixFilter=null)
{
this._colorTransform=colorTransform;
this._colorMatrixFilter=colorMatrixFilter;

if(this.bounds.x1===this.bounds.x2&&this.bounds.y1===this.bounds.y2)
{

}
else
{
if(this.attemptPrecaching)
{




if(this._colorMatrixFilter)
throw new Error('Not implemented. Done in drawImage instead');


this.UpdateBitmapIfNeeded();

if(this.scale!==1)
ctx.scale(1/this.scale,1/this.scale);

ctx.drawImage(
this.canvas,
(this.bounds.x1-this.bounds.outline)*this.scale,
(this.bounds.y1-this.bounds.outline)*this.scale 
);
}
else
{
this._drawToContext(ctx);
}
}
}
_drawToContext(ctx)
{
let success=true;





for(let i=0;i<this.draw_operations.length;i++)
{
let op=this.draw_operations[i][0];
let args=this.draw_operations[i][1];

let result=this['_'+op](ctx,...args);

if(result===false)
success=false;
}


if(this.has_fill)
{
this._endFill(ctx);
}
if(this.has_stroke)
{
this._stroke(ctx);
}



return success;
}
ScheduleBitmapUpdate()
{
this.isDirty=true;
}
UpdateBitmapIfNeeded()
{
if(this.isDirty)
{
this.isDirty=false;

let canvas=this.canvas;
let ctx=this.ctx;

let success=true;

this.bounds.x1=Math.floor(this.bounds.x1);
this.bounds.y1=Math.floor(this.bounds.y1);
this.bounds.x2=Math.ceil(this.bounds.x2);
this.bounds.y2=Math.ceil(this.bounds.y2);




canvas.width=Math.max(1,(this.bounds.x2-this.bounds.x1+this.bounds.outline*2)*this.scale);
canvas.height=Math.max(1,(this.bounds.y2-this.bounds.y1+this.bounds.outline*2)*this.scale);






































{
ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.save();
{
if(this.scale!==1)
ctx.scale(this.scale,this.scale);

ctx.translate(-this.bounds.x1+this.bounds.outline,
-this.bounds.y1+this.bounds.outline);

success=this._drawToContext(ctx);
}
ctx.restore();

if(!success)
{
this.isDirty=true;
}
}
}
}

clear()
{
this.bounds.x1=0;
this.bounds.y1=0;
this.bounds.x2=0;
this.bounds.y2=0;
this.bounds.outline=0;
this.draw_operations.length=0;

this.has_stroke=false;
this.has_fill=false;

this.ScheduleBitmapUpdate();
}

AddDrawOperationsFrom(graphics2)
{
if(graphics2.draw_operations.length>0)
{

this.draw_operations.push(...graphics2.draw_operations);

this.bounds.x1=Math.min(this.bounds.x1,graphics2.bounds.x1);
this.bounds.y1=Math.min(this.bounds.y1,graphics2.bounds.y1);
this.bounds.x2=Math.max(this.bounds.x2,graphics2.bounds.x2);
this.bounds.y2=Math.max(this.bounds.y2,graphics2.bounds.y2);

this.bounds.outline+=graphics2.bounds.outline;

this.ScheduleBitmapUpdate();
}
}

beginBitmapFill(...args)
{
this.draw_operations.push(['beginBitmapFill',args]);
}
_beginBitmapFill(ctx,bitmap,matrix,t1,t2)
{
if(matrix)
{
this.pattern_offset_x=matrix.tx;
this.pattern_offset_y=matrix.ty;
}
else
{
this.pattern_offset_x=0;
this.pattern_offset_y=0;
}



ctx.translate(this.pattern_offset_x,this.pattern_offset_y);

ctx.fillStyle=GetBitmapPattern(ctx,bitmap);

ctx.beginPath();
}

setStokeStyle(...args)
{
let line_width=args[0];

this.draw_operations.push(['setStokeStyle',args]);

this.bounds.outline+=Math.max(0,line_width);
}
_setStokeStyle(ctx,line_width,fill_color_css)
{
ctx.lineWidth=line_width;
ctx.strokeStyle=fill_color_css;




if(fill_color_css!=='#00000000')
if(fill_color_css!=='rgba(0,0,0,0)')
{
this.has_stroke=true;

}
}
stroke(...args)
{
this.draw_operations.push(['stroke',args]);
}
_stroke(ctx)
{
ctx.stroke();
this.has_stroke=false;
}


beginFill(...args)
{
this.draw_operations.push(['beginFill',args]);
}
_beginFill(ctx,fill_color_css)
{
if(fill_color_css instanceof CanvasGradient)
{
}
else
if(typeof fill_color_css!=='string')
throw new Error();

ctx.fillStyle=fill_color_css;
ctx.beginPath();

this.has_fill=true;
}

moveTo(...args)
{
this.draw_operations.push(['moveTo',args]);

this.bounds.x1=Math.min(this.bounds.x1,args[0]);
this.bounds.y1=Math.min(this.bounds.y1,args[1]);
this.bounds.x2=Math.max(this.bounds.x2,args[0]);
this.bounds.y2=Math.max(this.bounds.y2,args[1]);
}
_moveTo(ctx,x,y)
{
x-=this.pattern_offset_x;
y-=this.pattern_offset_y;

ctx.moveTo(x,y);
}

lineTo(...args)
{
this.draw_operations.push(['lineTo',args]);

this.bounds.x1=Math.min(this.bounds.x1,args[0]);
this.bounds.y1=Math.min(this.bounds.y1,args[1]);
this.bounds.x2=Math.max(this.bounds.x2,args[0]);
this.bounds.y2=Math.max(this.bounds.y2,args[1]);
}
_lineTo(ctx,x,y)
{
x-=this.pattern_offset_x;
y-=this.pattern_offset_y;

ctx.lineTo(x,y);
}

endFill(...args)
{
this.draw_operations.push(['endFill',args]);

this.ScheduleBitmapUpdate();
}
_endFill(ctx)
{
ctx.closePath();
ctx.fill();

ctx.translate(-this.pattern_offset_x,-this.pattern_offset_y);
this.pattern_offset_x=0;
this.has_fill=false;
}

drawRect(...args)
{
this.draw_operations.push(['drawRect',args]);

this.bounds.x1=Math.min(this.bounds.x1,args[0]);
this.bounds.y1=Math.min(this.bounds.y1,args[1]);
this.bounds.x2=Math.max(this.bounds.x2,args[0]+args[2]);
this.bounds.y2=Math.max(this.bounds.y2,args[1]+args[3]);
}
_drawRect(ctx,x,y,width,height)
{

if(this.has_stroke)
if(RENDER_RESOLUTION===1)
{
x+=0.5;
y+=0.5;
}

ctx.rect(x,y,width,height);
}

applyCustomFlashFontAntialias(...args)
{
if(!this.canvas)
throw new Error();

this.draw_operations.push(['applyCustomFlashFontAntialias',args]);
}
_applyCustomFlashFontAntialias(ctx)
{



if(SpriteSheets.text_quality_scale===1)
return;

if(this._temp_canvas===null)
{
this._temp_canvas=document.createElement('canvas');
this._temp_ctx=this._temp_canvas.getContext("2d");
}
this._temp_canvas.width=this.canvas.width;
this._temp_canvas.height=this.canvas.height;
this._temp_ctx.globalCompositeOperation='copy';
this._temp_ctx.drawImage(this.canvas,0,0);

ctx.save();
{
ctx.translate(this.bounds.x1,this.bounds.y1);
ctx.globalCompositeOperation='destination-in';
ctx.drawImage(this._temp_canvas,0.5,0);
ctx.drawImage(this._temp_canvas,-0.5,0);
ctx.drawImage(this._temp_canvas,0,0.5);
ctx.drawImage(this._temp_canvas,0,-0.5);
}
ctx.restore();
}


drawRoundRect(...args)
{
if(args.length!==5)
throw new Error();

this.draw_operations.push(['drawRoundRect',args]);

this.bounds.x1=Math.min(this.bounds.x1,args[0]);
this.bounds.y1=Math.min(this.bounds.y1,args[1]);
this.bounds.x2=Math.max(this.bounds.x2,args[0]+args[2]);
this.bounds.y2=Math.max(this.bounds.y2,args[1]+args[3]);
}
_drawRoundRect(ctx,x,y,width,height,radius)
{
ctx.roundRect(x,y,width,height,radius);
}


drawCircle(...args)
{
if(args.length!==3)
throw new Error();

this.draw_operations.push(['drawCircle',args]);

this.bounds.x1=Math.min(this.bounds.x1,args[0]-args[2]);
this.bounds.y1=Math.min(this.bounds.y1,args[1]-args[2]);
this.bounds.x2=Math.max(this.bounds.x2,args[0]+args[2]);
this.bounds.y2=Math.max(this.bounds.y2,args[1]+args[2]);
}
_drawCircle(ctx,x,y,radius)
{
ctx.arc(x,y,radius,0,2*Math.PI);
}

drawImage(...args)
{
if(args.length!==5)
if(args.length!==9)
{
if(!this.attemptPrecaching&&args.length===3)
{

}
else
throw new Error('Image bounds are unclear. Use differnt drawImage syntax');
}

if(args[0]===undefined)
throw new Error('Image was not provided');

if(args.length===3)
{
let[image,x,y]=[...args];


this.bounds.x1=Math.min(this.bounds.x1,x);
this.bounds.y1=Math.min(this.bounds.y1,y);
this.bounds.x2=Math.max(this.bounds.x2,x+32);
this.bounds.y2=Math.max(this.bounds.y2,y+32);
}
else
if(args.length===5)
{
let[image,dx,dy,dWidth,dHeight]=[...args];

this.bounds.x1=Math.min(this.bounds.x1,args[1]);
this.bounds.y1=Math.min(this.bounds.y1,args[2]);
this.bounds.x2=Math.max(this.bounds.x2,args[1]+args[3]);
this.bounds.y2=Math.max(this.bounds.y2,args[2]+args[4]);
}
else
if(args.length===9)
{
let[image,sx,sy,sWidth,sHeight,dx,dy,dWidth,dHeight]=[...args];

this.bounds.x1=Math.min(this.bounds.x1,args[5]);
this.bounds.y1=Math.min(this.bounds.y1,args[6]);
this.bounds.x2=Math.max(this.bounds.x2,args[5]+args[7]);
this.bounds.y2=Math.max(this.bounds.y2,args[6]+args[8]);
}

this.draw_operations.push(['drawImage',args]);
this.ScheduleBitmapUpdate();
}
_drawImage(ctx,...args)
{
let img=args[0];

if(img.js_loaded===false)
return false;

if(this._colorTransform)
{
if(this.useSpriteSheetfilterCache)
img=SpriteSheets.GetColorTransformedVersionOf(img,this._colorTransform);
else
{
ctx.save();
{
ctx.filter=this._colorTransform.toCSSFilter(this.useSpriteSheetfilterCache);
ctx.drawImage(img,...args.slice(1));
}
ctx.restore();
return;
}
}
if(this._colorMatrixFilter)
{
if(this.useSpriteSheetfilterCache)
img=SpriteSheets.GetColorMatrixFilteredVersionOf(img,this._colorMatrixFilter);
else
{
ctx.save();
{
ctx.filter=this._colorMatrixFilter.toCSSFilter(this.useSpriteSheetfilterCache);
ctx.drawImage(img,...args.slice(1));
}
ctx.restore();
return;
}
}


ctx.drawImage(img,...args.slice(1));
}

writeText(...args)
{
let text=args[0];
let font=args[1];
let align=args[2];
let x=args[3];
let y=args[4];
let color=args[5];
let letterSpacing=args[6];

this.draw_operations.push(['writeText',args]);

let returned_width=0;

let ctx=this.ctx;
if(ctx)
{

ctx.save();
{
ctx.font=font;
ctx.textAlign=align;

if(letterSpacing!==0)
ctx.letterSpacing=letterSpacing+'px';

let textMetrics=ctx.measureText(text);

this.bounds.x1=Math.min(this.bounds.x1,x-textMetrics.actualBoundingBoxLeft);
this.bounds.y1=Math.min(this.bounds.y1,y-textMetrics.actualBoundingBoxAscent);
this.bounds.x2=Math.max(this.bounds.x2,x+textMetrics.actualBoundingBoxRight);
this.bounds.y2=Math.max(this.bounds.y2,y+textMetrics.actualBoundingBoxDescent);











returned_width=textMetrics.width;
}
ctx.restore();

}
else
{

this.bounds.x1=Math.min(this.bounds.x1,x-10);
this.bounds.y1=Math.min(this.bounds.y1,y-10);
this.bounds.x2=Math.max(this.bounds.x2,x+10);
this.bounds.y2=Math.max(this.bounds.y2,y+10);
}

this.ScheduleBitmapUpdate();

return returned_width;
}
_writeText(ctx,...args)
{
let text=args[0];
let font=args[1];
let alignment=args[2];
let x=args[3];
let y=args[4];
let color=args[5];
let letterSpacing=args[6];

ctx.save();
{
ctx.font=font;
ctx.textAlign=alignment;
ctx.fillStyle=color;

if(letterSpacing!==0)
ctx.letterSpacing=letterSpacing+'px';

ctx.fillText(text,x,y);
}
ctx.restore();
}
setFilter(...args)
{
let filter=args[0];
let outline=args[1];

this.draw_operations.push(['setFilter',args]);

if(args.length!==2)
throw new Error();

this.bounds.outline+=outline;

this.ScheduleBitmapUpdate();
}
_setFilter(ctx,...args)
{
let filter=args[0];
let outline=args[1];

ctx.filter=filter;

if(ctx.filter!==filter)
debugger;
}


createRadialGradientAndBeginFill(...args)
{
if(args.length!==8)
throw new Error('createRadialGradientAndBeginFill: Incorrect number of arguments');

this.draw_operations.push(['createRadialGradientAndBeginFill',args]);
}
_createRadialGradientAndBeginFill(ctx,...args)
{
let[x0,y0,r0,x1,y1,r1,poss,css_values]=args;

let grad=ctx.createRadialGradient(x0,y0,r0,x1,y1,r1);

for(let gr=0;gr<poss.length;gr++)
grad.addColorStop(poss[gr],css_values[gr]);

ctx.fillStyle=grad;
ctx.beginPath();
}

startMask(...args)
{
this.draw_operations.push(['startMask',args]);
}
_startMask(ctx,...args)
{
let coordinates=args[0];

ctx.save();

ctx.beginPath();

let i=0;
while(i<coordinates.length)
{
ctx[(i===0)? 'moveTo' : 'lineTo'](coordinates[i++],coordinates[i++]);
}

ctx.clip();
}
stopMask(...args)
{
this.draw_operations.push(['stopMask',args]);
}
_stopMask(ctx,...args)
{
ctx.restore();
}



createLinearGradient(...args)
{
if(args.length!==6)
throw new Error('createLinearGradient: Incorrect number of arguments');

this.draw_operations.push(['createLinearGradient',args]);
}
_createLinearGradient(ctx,...args)
{
let[x0,y0,x1,y1,poss,css_values]=args;

let grad=ctx.createLinearGradient(x0,y0,x1,y1);

for(let gr=0;gr<poss.length;gr++)
grad.addColorStop(poss[gr],css_values[gr]);

ctx.fillStyle=grad;
ctx.beginPath();
this.has_fill=true;
}
}


var stage=new MovieClip();
stage.loaderInfo={bytesTotal: 100,bytesLoaded: 100};
{
let stage_focus=null;
setGetterSetter(stage,'focus',
()=>{
return stage_focus;
},(v)=>{
stage_focus=v;

if(v)
if(v.onFocus)
v.onFocus();
}
);
}

var frame_to_label={};
frame_to_label['startup']=1;
frame_to_label['intro']=2;
frame_to_label['name_prompt']=3;
frame_to_label['menu']=4;
frame_to_label['main']=5;
frame_to_label['campaign']=6;
frame_to_label['eq']=7;
frame_to_label['eq2']=8;
frame_to_label['credits']=9;
frame_to_label['nologinform']=10;
frame_to_label['loginform']=11;
frame_to_label['controls']=12;
frame_to_label['options']=13;
frame_to_label['mp_root']=14;
frame_to_label['channel']=15;
frame_to_label['room']=16;
frame_to_label['loading']=17;
frame_to_label['gaming']=18;
frame_to_label['difch']=20;
frame_to_label['custom']=21;
frame_to_label['achiv']=22;
frame_to_label['ads']=23;
frame_to_label['export_progress']=24;
frame_to_label['MPLobby']=25;
frame_to_label['MPCreateMatch']=26;
frame_to_label['absolutely_nothing']=100;



stage.label_to_frame=frame_to_label;
{

stage.props={};

stage.props.__previousFrame=-1;
stage.props.____previousFrameLabel='?';

let frame_change_locked=false;

stage._onFrameChanged=()=>
{
if(stage.props.__previousFrame!==stage.currentFrame)
{
if(frame_change_locked)
throw new Error('Frame change inception is a bad idea');

frame_change_locked=true;
{
game.visible=graphics_3d.visible=graphics_3d_front.visible=(stage.currentFrameLabel==='gaming');

if(stage.currentFrameLabel==='startup')
onFrame1();

if(stage.currentFrameLabel==='gaming')
StartGame();
if(stage.props.____previousFrameLabel==='gaming')
StopGame();

if(stage.currentFrameLabel==='loading')
{
HUD.CreateLoadingScreen();
StartLoadingScreen();
}
if(stage.props.____previousFrameLabel==='loading')
{
HUD.DisposeLoadingScreen();
}

if(stage.currentFrameLabel==='campaign')
HUD.CreateCampaignScreen();
if(stage.props.____previousFrameLabel==='campaign')
HUD.DisposeCampaignScreen();

if(stage.currentFrameLabel==='difch')
HUD.CreateDifficultyScreen();
if(stage.props.____previousFrameLabel==='difch')
HUD.DisposeDifficultyScreen();

if(stage.currentFrameLabel==='main')
HUD.CreateMissionFailedScreen();
if(stage.props.____previousFrameLabel==='main')
HUD.DisposeMissionFailedScreen();

if(stage.currentFrameLabel==='custom')
HUD.CreateCustomMapScreen();
if(stage.props.____previousFrameLabel==='custom')
HUD.DisposeCustomMapScreen();

if(stage.currentFrameLabel==='eq')
HUD.CreateEquipmentScreen(0);
if(stage.props.____previousFrameLabel==='eq')
HUD.DisposeEquipmentScreen();

if(stage.currentFrameLabel==='eq2')
HUD.CreateEquipmentScreen(1);
if(stage.props.____previousFrameLabel==='eq2')
HUD.DisposeEquipmentScreen();

if(stage.currentFrameLabel==='achiv')
HUD.CreateAchievementsScreen();
if(stage.props.____previousFrameLabel==='achiv')
HUD.DisposeAchievementsScreen();

if(stage.currentFrameLabel==='name_prompt')
HUD.CreateNamePromptScreen();
if(stage.props.____previousFrameLabel==='name_prompt')
HUD.DisposeNamePromptScreen();

if(stage.currentFrameLabel==='menu')
HUD.CreateMenuScreen();
if(stage.props.____previousFrameLabel==='menu')
HUD.DisposeMenuScreen();

if(stage.currentFrameLabel==='options')
HUD.CreateSettings('screen');
if(stage.props.____previousFrameLabel==='options')
HUD.DisposeSettings();

if(stage.currentFrameLabel==='MPLobby')
HUD.CreateMPLobbyScreen();
if(stage.props.____previousFrameLabel==='MPLobby')
HUD.DisposeMPLobbyScreen();

if(stage.currentFrameLabel==='MPCreateMatch')
HUD.CreateMPCreateMatchScreen();
if(stage.props.____previousFrameLabel==='MPCreateMatch')
HUD.DisposeMPCreateMatchScreen();

if(stage.currentFrameLabel==='credits')
HUD.CreateCreditsScreen();
if(stage.props.____previousFrameLabel==='credits')
HUD.DisposeCreditsScreen();



if(stage.currentFrameLabel==='loginform'||
stage.currentFrameLabel==='nologinform'||
stage.currentFrameLabel==='controls')
{
let back_to=stage.props.____previousFrameLabel;
HUD.CreateAlertScreen('Screen "'+stage.currentFrameLabel+'" is not re-implemented yet',()=>{
gotoAndStop(back_to);
});
}

mouseMoveHandler();




















stage.props.__previousFrame=stage.currentFrame;
stage.props.____previousFrameLabel=stage.currentFrameLabel;
}
frame_change_locked=false;
}
else
{
debugger;
}
};
}



setGetterSetter(globalThis,'currentFrame',()=>stage.currentFrame,null);
setGetterSetter(globalThis,'currentFrameLabel',()=>stage.currentFrameLabel,null);
setGetterSetter(globalThis,'currentLabel',()=>stage.currentLabel,null);

var addChild=(...args)=>{stage.addChild(...args);};
var removeChild=(...args)=>{stage.removeChild(...args);};
var gotoAndStop=(...args)=>{stage.gotoAndStop(...args);};
var addEventListener=(...args)=>{stage.addEventListener(...args);};
var removeEventListener=(...args)=>{stage.removeEventListener(...args);};

class Mouse
{
static init_class()
{
Mouse.isHidden=false;
Mouse._debug=0;
}
static set debug(v)
{
Mouse._debug=v;

if(v)
{
Mouse.show();
}
}
static show()
{
if(Mouse.isHidden)
{
Mouse.isHidden=false;
Mouse.SetCSS();
}
}
static hide()
{
if(Mouse._debug)
return;

if(Mouse.isHidden)
return;

Mouse.isHidden=true;
Mouse.SetCSS();
}
static SetCSS()
{
if(!myCursor._sprite.graphics.draw_operations[0][1][0].js_loaded)
{
setTimeout(Mouse.SetCSS,100);
return;
}

if(Mouse.isHidden)
document.body.style.cursor='none';
else
document.body.style.cursor='';
}
}
Mouse.init_class();

var getTimer=()=>Date.now();

var SoundMixer={
stopAll:()=>{

}
};

class SoundTransform
{
constructor(volume=1)
{
this._volume=volume;

this._leftToLeft=1;
this._leftToRight=0;

this._rightToLeft=0;
this._rightToRight=1;

this._proxied_update_callback=new Set();
}

_UpdateProxiedObject()
{
if(this._proxied_update_callback)
for(let cb of this._proxied_update_callback)
cb();
}

get volume(){return this._volume;}
set volume(v){this._volume=v;this._UpdateProxiedObject();}

get leftToLeft(){return this._leftToLeft;}
get leftToRight(){return this._leftToRight;}

get rightToLeft(){return this._rightToLeft;}
get rightToRight(){return this._rightToRight;}

set leftToLeft(v){this._leftToLeft=v;this._UpdateProxiedObject();}
set leftToRight(v){this._leftToRight=v;this._UpdateProxiedObject();}

set rightToLeft(v){this._rightToLeft=v;this._UpdateProxiedObject();}
set rightToRight(v){this._rightToRight=v;this._UpdateProxiedObject();}

clone()
{
let clone=new SoundTransform(this.volume);
clone.leftToLeft=this.leftToLeft;
clone.leftToRight=this.leftToRight;

clone.rightToLeft=this.rightToLeft;
clone.rightToRight=this.rightToRight;

return clone;
}
}

class Socket
{
constructor()
{
}

addEventListener()
{
}
writeUTFBytes()
{

}
flush()
{

}
}
class URLLoader
{
static init_class()
{
URLLoader.active_loads=0;
URLLoader.load_group_counter=0;

URLLoader.session_cache=new Map();
}
static GiveUpOnPreviousLoadGroup()
{
URLLoader.load_group_counter++;
}
constructor()
{
this.listeners={};
this.data=undefined;

this.bytesLoaded=0;
this.bytesTotal=3;
}

AttemptCaching(response,text_or_blob,url_hint=null)
{
if(url_hint)
{
let mimage_cache=(url_hint.indexOf('mimage_cache')!==-1);
let approved_status_only=(url_hint.indexOf('approved_status_only')!==-1);

if(mimage_cache)
if(response.status===200)
{
let will_cache=true;

let length=(typeof text_or_blob==='string')? text_or_blob.length : text_or_blob.size;

if(approved_status_only)
{
if(text_or_blob!=='yes')
will_cache=false;
}
else
{
if(length<'Image not found, was removed or exists but not yet approved for public use.'.length*4)
will_cache=false;
}

if(will_cache)
URLLoader.session_cache.set(url_hint,text_or_blob);
}
}
}

async HandleData(response_or_cached_text,url_hint=null,response_is_cached_text=false)
{
let text=response_is_cached_text ? response_or_cached_text :(await response_or_cached_text.text());

if(!response_is_cached_text)
this.AttemptCaching(response_or_cached_text,text,url_hint);

this.data=text;

let event={target: this};

this.bytesLoaded=this.bytesTotal;
this.runEvents(Event.COMPLETE,event);
}
async load(url_request)
{
let mimage_cache=(url_request.url.indexOf('mimage_cache')!==-1);


if(mimage_cache)
{
let response_text=URLLoader.session_cache.get(url_request.url);
if(response_text!==undefined)
{
this.HandleData(response_text,url_request.url,true);
return;
}
}

let expected_load_group_counter=URLLoader.load_group_counter;

if(URLLoader.active_loads>15)
{
setTimeout(()=>
{
if(expected_load_group_counter!==URLLoader.load_group_counter)
{
this.runEvents(IOErrorEvent.IO_ERROR,new Error('Operation was aborted due to load group counter change'));
return;
}

this.load(url_request);

},200);
return;
}

URLLoader.active_loads++;

try
{
let method=url_request.method.toLowerCase();

let response=await fetch(
url_request.url,
{
method: method,headers:{"Content-Type": "application/x-www-form-urlencoded"},
body:(method==='post')? new URLSearchParams(url_request.data): undefined
}
);

this.HandleData(response,url_request.url);
}
catch(e)
{
this.runEvents(IOErrorEvent.IO_ERROR,e);
}

URLLoader.active_loads--;
}
runEvents(event_id,params)
{
let arr=this.getListenersByEventType(event_id,false);
for(let i=0;i<arr.length;i++)
arr[i](params);
}
getListenersByEventType(event_id,create=true)
{
if(event_id===undefined)
throw new Error();

if(!this.listeners[event_id])
{
if(create)
this.listeners[event_id]=[];
else
return[];
}

return this.listeners[event_id];
}
addEventListener(event_id,callback)
{
let arr=this.getListenersByEventType(event_id);

if(MovieClip.debug_find_duplicate_listeners)
if(arr.length>0)
{
traceOnce('String-based listener search enabled[2]. Expect worse performance.');
let str=callback.toString();

for(let i=0;i<arr.length;i++)
if(str===arr[i].toString())
{
console.error('Exactly same listener already exists');
debugger;
return;
}
}

if(arr.indexOf(callback)===-1)
{
arr.push(callback);
}
else
{

}

if(arr.length>10)
debugger;
}
removeEventListener(event_id,callback)
{
let arr=this.getListenersByEventType(event_id);

let id=arr.indexOf(callback);

if(id!==-1)
arr.splice(id,1);
}
}
URLLoader.init_class();
var mouseX=0;
var mouseY=0;

var Event={
CLOSE: 1,
CONNECT: 2,
SOUND_COMPLETE: 3,
COMPLETE: 4,
ENTER_FRAME: 5,
ACTIVATE: 6,
DEACTIVATE: 7,

IDToString:(id,verification_mode=false)=>
{



let result=null;

let Lookup=(Event)=>
{
for(let prop in Event)
{
if(verification_mode)
{
Event0.IDToString(Event[prop]);
}

if(Event[prop]===id)
{
if(result===null)
result=prop;
else
throw new Error('Collision for events with ID '+id);
}
}
};

Lookup(Event);
Lookup(IOErrorEvent);
Lookup(SecurityErrorEvent);
Lookup(ProgressEvent);
Lookup(MouseEvent);
Lookup(KeyboardEvent);

return(result===null)? 'THIS EVENT_ID DOES NOT EXIST' : result;
}
};
var Event0=Event;
var IOErrorEvent={
IO_ERROR: 8
};
var SecurityErrorEvent={
SECURITY_ERROR: 9
};
var ProgressEvent={
SOCKET_DATA: 10
};
var MouseEvent={
CLICK: 11,
MOUSE_DOWN: 12,
RIGHT_MOUSE_DOWN: 13,
MOUSE_OVER: 14,
MOUSE_MOVE: 15,
MOUSE_UP: 16,
MOUSE_WHEEL: 17,
MOUSE_OUT: 18,
MOUSE_UP_ANYWHERE: 19,
MOUSE_MOVE_ANYWHERE: 20



};
var JSKeyboardEvent=KeyboardEvent;
globalThis.KeyboardEvent={
KEY_DOWN: 23,
KEY_UP: 24
};
Event.IDToString(-42,true);

var StageQuality={
BEST: 1
};
var StageScaleMode={
SHOW_ALL: 1
};
var System={
pauseForGCIfCollectionImminent:()=>{}
};

var Capabilities={
playerType: 'HTML5',
version: 'Win 42,0'
};


var Keyboard={A:65,ALTERNATE:18,AUDIO:16777239,B:66,BACK:16777238,BACKQUOTE:192,BACKSLASH:220,BACKSPACE:8,BLUE:16777219,C:67,CAPS_LOCK:20,CHANNEL_DOWN:16777221,CHANNEL_UP:16777220,COMMA:188,COMMAND:15,CONTROL:17,D:68,DELETE:46,DOWN:40,DVR:16777241,E:69,END:35,ENTER:13,EQUAL:187,ESCAPE:27,EXIT:16777237,F:70,F1:112,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,F2:113,F24:135,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,FAST_FORWARD:16777226,FUNCTION:14,G:71,GREEN:16777217,GUIDE:16777236,H:72,HELP:16777245,HOME:36,I:73,INFO:16777235,INPUT:16777243,INSERT:45,J:74,K:75,L:76,LAST:16777233,LEFT:37,LEFTBRACKET:219,LIVE:16777232,M:77,MASTER_SHELL:16777246,MENU:16777234,MINUS:189,N:78,NEXT:16777230,NUMBER_0:48,NUMBER_1:49,NUMBER_2:50,NUMBER_3:51,NUMBER_4:52,NUMBER_5:53,NUMBER_6:54,NUMBER_7:55,NUMBER_8:56,NUMBER_9:57,NUMPAD:21,NUMPAD_0:96,NUMPAD_1:97,NUMPAD_2:98,NUMPAD_3:99,NUMPAD_4:100,NUMPAD_5:101,NUMPAD_6:102,NUMPAD_7:103,NUMPAD_8:104,NUMPAD_9:105,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,O:79,P:80,PAGE_DOWN:34,PAGE_UP:33,PAUSE:16777224,PERIOD:190,PLAY:16777223,PLAY_PAUSE:16777248,PREVIOUS:16777231,Q:81,QUOTE:222,R:82,RECORD:16777222,RED:16777216,REWIND:16777227,RIGHT:39,RIGHTBRACKET:221,S:83,SEARCH:16777247,SEMICOLON:186,SETUP:16777244,SHIFT:16,SKIP_BACKWARD:16777229,SKIP_FORWARD:16777228,SLASH:191,SPACE:32,STOP:16777225,SUBTITLE:16777240,T:84,TAB:9,U:85,UP:38,V:86,VOD:16777242,W:87,X:88,Y:89,YELLOW:16777218,Z:90};

var navigateToURL=(URLRequest_obj,_target)=>
{

let url=URLRequest_obj.url;


if(url.indexOf('http://')!==-1||url.indexOf('https://')===-1)
if(url.indexOf('http://www.coolbuddy.com')===-1)
{
ChatNewMsg('Incorrect URL: '+URLRequest_obj.url);
return;
}
window.open(URLRequest_obj.url,'_blank');
};


class SoundChannel
{
constructor()
{
this.isPlaying=false;
}
stop()
{
}
addEventListener()
{

}
removeEventListener()
{

}
}
class URLRequest
{
constructor(url)
{
this.url=url;
this.method='GET';
}
}

var flash=
{
system:
{
fscommand:(a,b)=>
{
}
}
};

var Security={
allowDomain:(url)=>
{
},
loadPolicyFile:(url)=>
{
}
};

var SharedObject={
getLocal:(storage_name)=>
{
let s=localStorage.getItem(storage_name);

if(s===null)
s='{}';

let so={
data: JSON.parse(s),
flush:()=>{
localStorage.setItem(storage_name,JSON.stringify(so.data));
},
clear:()=>{
so.data={};


}
};




return so;
}
};

var MouseWheelEnabler={
init:(stage)=>
{

}
};


class CPMStar
{
AdLoader(ID)
{

CPMStar.AdLoader={
cpmstar_loaded_object: null
};
}
}

class URLVariables
{
}
class Matrix
{
constructor(a=1,b=0,c=0,d=1,tx=0,ty=0)
{
this.a=a;
this.b=b;
this.c=c;
this.d=d;
this.tx=tx;
this.ty=ty;
}
translate(tx,ty)
{
this.tx+=tx;
this.ty+=ty;
}
scale(x,y)
{
this.a*=x;
this.d*=y;
}
}

var URLRequestMethod={
POST: 'POST',
GET: 'GET'
};

var ExternalInterface={
addCallback:(js_name,callback)=>
{

}
};

var stop=()=>{};

class Point
{
constructor(x=0,y=0)
{
this.x=x;
this.y=y;
}
}

class Loader extends URLLoader
{
constructor()
{
super();

this.content=null;

this.contentLoaderInfo=
{
addEventListener:(...args)=>
{
this.addEventListener(...args);
},
removeEventListener:(...args)=>
{
this.removeEventListener(...args);
}
};
}

async HandleData(response_or_cached_text,url_hint=null,response_is_cached_text=false)
{
let blob=response_is_cached_text ? response_or_cached_text :(await response_or_cached_text.blob());

if(!response_is_cached_text)
this.AttemptCaching(response_or_cached_text,blob,url_hint);

let event={target: this};

await new Promise((resolve,reject)=>
{
let img=new Image();

img.src=URL.createObjectURL(blob);

img.onload=()=>
{
this.content=img;
resolve();
};

img.onerror=async()=>
{
try
{
trace('Image load/decode error: ',url_hint,response_or_cached_text,await blob.text());
}
catch(e)
{
trace('Image load/decode error: ',url_hint,response_or_cached_text,blob);
}

this.runEvents(IOErrorEvent.IO_ERROR,event);

reject();
};
}).then(()=>
{
this.bytesLoaded=this.bytesTotal;
this.runEvents(Event.COMPLETE,event);
}).catch(()=>
{

});
}
}
class Sound
{
























constructor()
{


this.bytesLoaded=0;
this.bytesTotal=1;
}
load(url_request)
{
console.error('Sound.load should not be called on this object');
debugger;
}
}
class TextFormat
{
constructor()
{
this.size=30;
}
}



















setGetterSetter(Array.prototype,'fixed',()=>false,(v)=>{});