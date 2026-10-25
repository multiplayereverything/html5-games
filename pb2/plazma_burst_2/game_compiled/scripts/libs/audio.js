








class CustomStereoPannerNode
{
constructor(context,number_of_channels){



this.leftGain=context.createGain();
this.rightGain=context.createGain();
this.splitter=context.createChannelSplitter(2);
this.merger=context.createChannelMerger(2);


this.splitter.connect(this.leftGain,0);
this.splitter.connect(this.rightGain,1%number_of_channels);

this.leftGain.connect(this.merger,0,0);
this.rightGain.connect(this.merger,0,1);


}

connect(out)
{
this.merger.connect(out);  
}
GetInputPoint()
{
return this.splitter;
}

set leftVolume(value){
this.leftGain.gain.value=value;
}

set rightVolume(value){
this.rightGain.gain.value=value;
}
}

class JSAudio
{
static init_class()
{
const audioContext=new AudioContext();
JSAudio.audioContext=audioContext;

JSAudio.undisposed_sounds=new Set();

JSAudio.debug_doubled_loop_sounds=false;
if(JSAudio.debug_doubled_loop_sounds)
console.warn('JSAudio.debug_doubled_loop_sounds is enabled, expect poor performance');

JSAudio.debug_complain_about_sounds_played_before_preload=false;



const globalGainNode=audioContext.createGain();
globalGainNode.gain.value=0;

JSAudio.isPageVisible=true;

JSAudio.UpdateGlobalVolume=()=>
{
JSAudio.isPageVisible=(document.visibilityState!=='hidden');

let v=1;


if(!JSAudio.isPageVisible)
v*=0.1;


globalGainNode.gain.cancelScheduledValues(audioContext.currentTime);

globalGainNode.gain.linearRampToValueAtTime(v,audioContext.currentTime+2);
};

globalGainNode.connect(audioContext.destination);

JSAudio.CreateFromFile=(url,delay=0,callback=null,fail_back=null)=>
{

let obj={
data: null,
load_promise: null,

bytesLoaded: 0,
bytesTotal: 2,

play:(startTime=0,loops=0,soundTransform=new SoundTransform())=>
{
return JSAudio.StartSoundPlaybackByObj(obj,startTime,loops,soundTransform,url);
},


_play:()=>
{
if(!obj.data)
{
if(JSAudio.debug_complain_about_sounds_played_before_preload)
trace('File is not loaded yet and thus can not be played: '+url+' ( preload_sounds: '+preload_sounds+' )');

return null;
}
const audioBufferSourceNode=audioContext.createBufferSource();
const gainNode=audioContext.createGain();

const pannerNode=new CustomStereoPannerNode(audioContext,obj.data.numberOfChannels);

audioBufferSourceNode.buffer=obj.data;




audioBufferSourceNode.connect(gainNode);
gainNode.connect(pannerNode.GetInputPoint());


pannerNode.connect(globalGainNode);

audioBufferSourceNode.start();

let dispose=()=>
{
audioBufferSourceNode.stop();

pannerNode.leftGain.disconnect();
pannerNode.rightGain.disconnect();

gainNode.disconnect();

audioBufferSourceNode.disconnect();
};

return[audioBufferSourceNode,gainNode,pannerNode,dispose];
}
};

let promise_resolve=null;

obj.load_promise=new Promise((resolve,reject)=>{promise_resolve=resolve;});

if(delay>0)
setTimeout(Start,delay);
else
Start();

function Start()
{
fetch(url)
.then(response=>response.arrayBuffer())
.then(arrayBuffer=>audioContext.decodeAudioData(arrayBuffer))
.then(decodedData=>
{
obj.data=decodedData;

obj.bytesLoaded=obj.bytesTotal;

promise_resolve();

if(callback)
callback();
})
.catch(e=>{

obj.bytesTotal=0;

if(fail_back)
fail_back(e);
});
}

return obj;
};
}
static init()
{
document.addEventListener('visibilitychange',()=>
{
JSAudio.UpdateGlobalVolume();

});
JSAudio.UpdateGlobalVolume();
}

static StartSoundPlayback(var_name,startTime,loops,soundTransform)
{


if(!library_sounds[var_name])
{
if(library_sounds_structure_loaded)
throw new Error('Sound '+var_name+' was not listed in sounds.js');
else
{
console.warn('Attempted to play sound '+var_name+' before sound list was loaded');
return null;
}
}


let sound_obj=library_sounds[var_name];

return JSAudio.StartSoundPlaybackByObj(sound_obj,startTime,loops,soundTransform,var_name);
}
static StartSoundPlaybackByObj(sound_obj,startTime=0,loops=0,soundTransform=new SoundTransform(),var_name='unknown')
{
let play_result=sound_obj._play();

if(play_result)
{
let[audioBufferSourceNode,gainNode,pannerNode,dispose]=play_result;

let events={};

let update_callback=()=>
{
gainNode.gain.value=soundTransform.volume;
pannerNode.leftVolume=soundTransform.leftToLeft;
pannerNode.rightVolume=soundTransform.rightToRight;
};

soundTransform._proxied_update_callback.add(update_callback);

update_callback();

let obj=new SoundChannel();

function onEnded()
{
if(audioBufferSourceNode.loop)
{

return;
}




if(!events[Event.SOUND_COMPLETE]||events[Event.SOUND_COMPLETE].length===0)
{

DisposeFull();
}
}

audioBufferSourceNode.addEventListener('ended',onEnded);









let DisposeFull=()=>
{
if(!dispose)
{
return;
}

obj.isPlaying=false;

JSAudio.undisposed_sounds.delete(obj);
audioBufferSourceNode.removeEventListener('ended',onEnded);
obj.removeEventListenersByEventType(Event.SOUND_COMPLETE);
soundTransform._proxied_update_callback.delete(update_callback);
dispose();
events=null;
obj=null;
update_callback=null;
[audioBufferSourceNode,gainNode,pannerNode,dispose]=[null,null,null,null];
soundTransform=null;
};

obj=Object.assign(obj,{

isPlaying: true,

sound_name: var_name,

callstack: null,

stop:()=>
{




DisposeFull();
},
soundTransform: soundTransform,
addEventListener:(event_id,callback)=>
{
if(event_id===Event.SOUND_COMPLETE)
{
audioBufferSourceNode.addEventListener('ended',callback);
}
else
debugger;

if(events[event_id])
debugger;

events[event_id]=callback;
},
removeEventListener:(event_id,callback)=>
{
if(events[event_id]===callback)
{
if(events[event_id])
if(event_id===Event.SOUND_COMPLETE)
audioBufferSourceNode.removeEventListener('ended',events[event_id]);

events[event_id]=null;
}
},
removeEventListenersByEventType:(event_id)=>
{
if(!events)
{
return;
}

if(events[event_id])
if(event_id===Event.SOUND_COMPLETE)
audioBufferSourceNode.removeEventListener('ended',events[event_id]);

events[event_id]=null;
},
JSMakeLooped:()=>
{
audioBufferSourceNode.loop=true;
}
});

if(loops>0)
obj.JSMakeLooped();


if(JSAudio.debug_doubled_loop_sounds)
if(['am_base','am_wind','gravitator2','gameplay_song','main_song'].indexOf(obj.sound_name)!==-1)
{
obj.callstack=getCallstack();

for(let obj2 of JSAudio.undisposed_sounds)
{
if(obj2.sound_name===obj.sound_name)
{
trace('Attempted to play same ambient/music sound again... First sound was played at this callstack: '+obj2.callstack);
debugger;
}
}
}
JSAudio.undisposed_sounds.add(obj);

return obj;
}
else
{
return null;
}
}
}
JSAudio.init_class();