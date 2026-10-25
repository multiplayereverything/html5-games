

var preload_sounds=false;

let library_bitmap_datas={};
let library_sounds={};
let library_sounds_structure_loaded=false;


globalThis.loading_info={
files_requested: 0,
files_loaded: 0,
files_failed: 0
};


let library_files_info={};

let sound_ogg_override=new Set();
sound_ogg_override.add('am_base');
sound_ogg_override.add('am_wind');
sound_ogg_override.add('gravitator2');

async function LoadLibraryFiles()
{
let info=await fetchTextFile('flash_export/just_sounds_and_bitmaps.html');

info+='\n'+JSON.stringify({src:"../bitmap_overrides/mmenu.jpg",id:"mmenu"});
info+='\n'+JSON.stringify({src:"../bitmap_overrides/logo.png",id:"logo"});

let promises=[];

DisassembleStringTrimAndDo(info,(line)=>
{
if(line.charAt(0)==='{')
{
if(line.charAt(line.length-1)===',')
line=line.substring(0,line.length-1);

let json;

try
{

eval(`json=${line};`);

}
catch(e)
{
console.warn('Eval failed: '+`json=${line};`);
throw e;
}

let src='flash_export/'+json.src;

if(sound_ogg_override.has(json.id))
{
src='audio_overrides/'+json.src.split('sounds/').join('').split('.mp3').join('.ogg');
}

library_files_info[json.id]=src;

if(json.src.indexOf('.jpg')!==-1||json.src.indexOf('.png')!==-1)
{
let attempts=3;

let img=new Image();

globalThis.loading_info.files_requested++;

let src_copy=src;

let p=new Promise((resolve,reject)=>{

img.onload=()=>{


resolve();
globalThis.loading_info.files_loaded++;
};

img.onerror=()=>{





if(attempts-->0)
{
debugger;

setTimeout(()=>
{
img.src=src_copy;
},5000);
}
else
{
console.error(json.id+' was not loaded');
globalThis.loading_info.files_failed++;

resolve();
}
};

img.src=src_copy;
});

promises.push(p);

library_bitmap_datas[json.id]=img;
}
else
if(json.src.indexOf('.mp3')!==-1||json.src.indexOf('.ogg')!==-1)
{
globalThis.loading_info.files_requested++;

let thing=JSAudio.CreateFromFile(

src,

preload_sounds ? 0 :(2000+Math.random()*2000),

()=>
{
globalThis.loading_info.files_loaded++;
},

()=>
{
globalThis.loading_info.files_failed++;
}
);

if(preload_sounds)
promises.push(thing.load_promise);

library_sounds[json.id]=thing;
}


src=null;
}

line=null;
});

library_sounds_structure_loaded=true;

await Promise.all(promises);

info=null;
}

var CreateLibraryBitmapData=(resource_name)=>
{
let bitmap=library_bitmap_datas[resource_name];

return bitmap;
};

{
let library_items=`
veh_hh
veh_drone
veh_capsule
veh_walker
veh_jeep
veh_rope
veh_corvette
veh_crate
bar_orange
bar_blue
bar_red
door
player
decor
eff_metal
eff_blood
eff_iskra
eff_bubble
eff_splash
explosion_fire
rail
rail_target
eff_firespark
eff_metal
eff_blood_sprite
explosion_bfg
eff_wood_debris
eff_cinetic
eff_teleport
explosion_underwater
explosion_plasma
rail2
explosion_plasma_bar
altblood
eff_text_message
rail3
rail4
rail5
rail6
lens_flare
water

flake
lazer

switchh
switchh_red
switchh_blue

ag_rays
ag_rays2



item_grenade
item_grenade_port
item_grenade_shield

gun_rifle
gun_rifle_b

gun_pistol
gun_pistol_b

gun_shotgun
gun_shotgun_b

gun_pistol2
gun_vehgun
gun_gl
gun_sp_sh
gun_rl
gun_rl0
gun_vgun
gun_railgun
gun_railgun2
gun_sniper
gun_apistol
gun_arifle
gun_arifle2
gun_vehcannon
gun_m4a1

gun_minigun
gun_glock

gun_defibrillator
gun_bfg

gun_plasmacannon
gun_vehminigun
gun_vehminigl
gun_real_shotgun
gun_real_rifle
gun_oicw
gun_plasmagun

gun_rayrifle

gun_pixel_rifle
gun_pixel_rl





darkstar_1_assault_rifle
darkstar_1_gauss_rifle
darkstar_1_minigun
darkstar_1_phanx_rifle
darkstar_1_usniper
lostmydollar_av135
lostmydollar_needle
lostmydollar_qccv50
lostmydollar_rmk36
lostmydollar_rpg
lazyrain_alien_laser_rifle
lazyrain_alien_laser_rifle2

lazyrain_cannon
lazyrain_cannon2

moonhawk_phantom
moonhawk_phantom2
moonhawk_smg
ditzy_energy_rifle

roxxar_marksman_rifle
roxxar_pistol
roxxar_rifle
roxxar_shotgun


moonhawk_crossfire
lazyrain_psi_cutter
mrjaksnes_android_sniper
incompetence_cr30
darkstar_1_cs_ragequit
gun_fttp_vehgun
thetoppestkek_shotgun_nxs25
incompetence_archetype_27xx
phsc_aug
moonhawk_railgun
moonhawk_railgun2
lazyrain_heal_pistol
incompetence_glhf
incompetence_glhf2
lazyrain_gravy_rl
lazyrain_gravy_rl2
darkstar_1_owo_rl
phsc_plasma_shotgun
phsc_android_shotgun
ditzy_cs_ik
ditzy_cs_ik2
phsc_ph01
phsc_ph01b

darkstar_1_railgun
darkstar_1_railgun2



darkstar_1_alien_rail_sg
darkstar_1_nade_c9
darkstar_1_nade_c9b
darkstar_1_rl
darkstar_1_bison
darkstar_1_auto_sg

ditzy_focus_beam
boom5_revolver
thetoppestkek_scavenger_sg
lazyrain_acid_gl
lazyrain_plasma_smg
lazyrain_plasma_smg2
roxxar_android_railgun

gun_invisgun

gun_sharkgun



texture_front0

`;









DisassembleStringTrimAndDo(library_items,DefineSpriteSourceClass);
}