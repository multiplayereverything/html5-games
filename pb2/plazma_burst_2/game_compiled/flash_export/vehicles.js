(function(window) {
cap_cap = function() {
	this.initialize();
}
cap_cap._SpriteSheet = new SpriteSheet({images: ["vehicles.png"], frames: [[1,1,245,64,0,122,32]]});
var cap_cap_p = cap_cap.prototype = new BitmapAnimation();
cap_cap_p.BitmapAnimation_initialize = cap_cap_p.initialize;
cap_cap_p.initialize = function() {
	this.BitmapAnimation_initialize(cap_cap._SpriteSheet);
	this.paused = false;
}
window.cap_cap = cap_cap;
cap_side = function() {
	this.initialize();
}
cap_side._SpriteSheet = new SpriteSheet({images: ["vehicles.png"], frames: [[248,1,125,364,0,59,182]]});
var cap_side_p = cap_side.prototype = new BitmapAnimation();
cap_side_p.BitmapAnimation_initialize = cap_side_p.initialize;
cap_side_p.initialize = function() {
	this.BitmapAnimation_initialize(cap_side._SpriteSheet);
	this.paused = false;
}
window.cap_side = cap_side;
carbody = function() {
	this.initialize();
}
carbody._SpriteSheet = new SpriteSheet({images: ["vehicles.png"], frames: [[375,1,949,395,0,482.8,181.85]]});
var carbody_p = carbody.prototype = new BitmapAnimation();
carbody_p.BitmapAnimation_initialize = carbody_p.initialize;
carbody_p.initialize = function() {
	this.BitmapAnimation_initialize(carbody._SpriteSheet);
	this.paused = false;
}
window.carbody = carbody;
carbody_brk = function() {
	this.initialize();
}
carbody_brk._SpriteSheet = new SpriteSheet({images: ["vehicles.png"], frames: [[1326,1,880,371,0,412.75,158.2]]});
var carbody_brk_p = carbody_brk.prototype = new BitmapAnimation();
carbody_brk_p.BitmapAnimation_initialize = carbody_brk_p.initialize;
carbody_brk_p.initialize = function() {
	this.BitmapAnimation_initialize(carbody_brk._SpriteSheet);
	this.paused = false;
}
window.carbody_brk = carbody_brk;
corvette_instance_1 = function() {
	this.initialize();
}
corvette_instance_1._SpriteSheet = new SpriteSheet({images: ["vehicles.png"], frames: [[2208,1,723,516,0,192.6,187.55],[2208,1,723,516,0,192.6,187.55],[2933,1,721,448,0,192.6,171.55]]});
var corvette_instance_1_p = corvette_instance_1.prototype = new BitmapAnimation();
corvette_instance_1_p.BitmapAnimation_initialize = corvette_instance_1_p.initialize;
corvette_instance_1_p.initialize = function() {
	this.BitmapAnimation_initialize(corvette_instance_1._SpriteSheet);
	this.paused = false;
}
window.corvette_instance_1 = corvette_instance_1;
crate = function() {
	this.initialize();
}
crate._SpriteSheet = new SpriteSheet({images: ["vehicles.png"], frames: [[3656,1,245,245,0,122,122],[3903,1,0,0,0,462,123]]});
var crate_p = crate.prototype = new BitmapAnimation();
crate_p.BitmapAnimation_initialize = crate_p.initialize;
crate_p.initialize = function() {
	this.BitmapAnimation_initialize(crate._SpriteSheet);
	this.paused = false;
}
window.crate = crate;
drone = function() {
	this.initialize();
}
drone._SpriteSheet = new SpriteSheet({images: ["vehicles.png"], frames: [[3905,1,180,134,0,50.8,42.8],[3905,1,180,134,0,50.8,42.8],[4087,1,180,134,0,51.8,42.8]]});
var drone_p = drone.prototype = new BitmapAnimation();
drone_p.BitmapAnimation_initialize = drone_p.initialize;
drone_p.initialize = function() {
	this.BitmapAnimation_initialize(drone._SpriteSheet);
	this.paused = false;
}
window.drone = drone;
hand_holder_instance_1 = function() {
	this.initialize();
}
hand_holder_instance_1._SpriteSheet = new SpriteSheet({images: ["vehicles.png"], frames: [[4269,1,154,153,0,76.4,76.4]]});
var hand_holder_instance_1_p = hand_holder_instance_1.prototype = new BitmapAnimation();
hand_holder_instance_1_p.BitmapAnimation_initialize = hand_holder_instance_1_p.initialize;
hand_holder_instance_1_p.initialize = function() {
	this.BitmapAnimation_initialize(hand_holder_instance_1._SpriteSheet);
	this.paused = false;
}
window.hand_holder_instance_1 = hand_holder_instance_1;
rope = function() {
	this.initialize();
}
rope._SpriteSheet = new SpriteSheet({images: ["vehicles.png"], frames: [[4425,1,86,47,0,42.2,3.4]]});
var rope_p = rope.prototype = new BitmapAnimation();
rope_p.BitmapAnimation_initialize = rope_p.initialize;
rope_p.initialize = function() {
	this.BitmapAnimation_initialize(rope._SpriteSheet);
	this.paused = false;
}
window.rope = rope;
rope_chain = function() {
	this.initialize();
}
rope_chain._SpriteSheet = new SpriteSheet({images: ["vehicles.png"], frames: [[4513,1,25,423,0,12,18.2]]});
var rope_chain_p = rope_chain.prototype = new BitmapAnimation();
rope_chain_p.BitmapAnimation_initialize = rope_chain_p.initialize;
rope_chain_p.initialize = function() {
	this.BitmapAnimation_initialize(rope_chain._SpriteSheet);
	this.paused = false;
}
window.rope_chain = rope_chain;
w1 = function() {
	this.initialize();
}
w1._SpriteSheet = new SpriteSheet({images: ["vehicles.png"], frames: [[4540,1,269,269,0,134,134]]});
var w1_p = w1.prototype = new BitmapAnimation();
w1_p.BitmapAnimation_initialize = w1_p.initialize;
w1_p.initialize = function() {
	this.BitmapAnimation_initialize(w1._SpriteSheet);
	this.paused = false;
}
window.w1 = w1;
w1_brk = function() {
	this.initialize();
}
w1_brk._SpriteSheet = new SpriteSheet({images: ["vehicles.png"], frames: [[4811,1,243,234,0,121.8,118.4]]});
var w1_brk_p = w1_brk.prototype = new BitmapAnimation();
w1_brk_p.BitmapAnimation_initialize = w1_brk_p.initialize;
w1_brk_p.initialize = function() {
	this.BitmapAnimation_initialize(w1_brk._SpriteSheet);
	this.paused = false;
}
window.w1_brk = w1_brk;
walker_leg = function() {
	this.initialize();
}
walker_leg._SpriteSheet = new SpriteSheet({images: ["vehicles.png"], frames: [[5056,1,747,504,0,582.7,209.35],[5805,1,746,505,0,581.7,209.35],[6553,1,746,507,0,581.7,209.35],[7301,1,745,509,0,580.7,208.35],[1,519,744,510,0,579.7,208.35],[747,519,744,511,0,579.7,207.35],[1493,519,743,513,0,578.7,207.35],[2238,519,743,514,0,578.7,207.35],[2983,519,743,515,0,577.7,206.35],[3728,519,743,518,0,577.7,206.35],[4473,519,742,517,0,576.7,205.35],[5217,519,742,520,0,576.7,205.35],[5961,519,741,521,0,575.7,204.35],[6704,519,740,522,0,574.7,204.35],[7446,519,740,524,0,574.7,204.35],[1,1045,739,526,0,573.7,203.35],[742,1045,740,526,0,573.7,203.35],[1484,1045,739,527,0,572.7,202.35],[2225,1045,738,530,0,571.7,202.35],[2965,1045,738,529,0,571.7,201.35],[3705,1045,737,532,0,570.7,201.35],[4444,1045,737,533,0,570.7,200.35],[5183,1045,736,534,0,569.7,200.35],[5921,1045,736,536,0,569.7,200.35],[6659,1045,735,538,0,568.7,199.35],[7396,1045,734,539,0,567.7,199.35],[1,1586,734,540,0,567.7,198.35],[737,1586,733,542,0,566.7,198.35],[1472,1586,733,543,0,566.7,197.35],[2207,1586,732,544,0,565.7,197.35],[2941,1586,731,546,0,564.7,197.35],[3674,1586,731,548,0,564.7,196.35],[4407,1586,731,548,0,563.7,196.35],[5140,1586,729,549,0,562.7,195.35],[5871,1586,729,552,0,562.7,195.35],[6602,1586,729,552,0,561.7,194.35],[7333,1586,728,554,0,561.7,194.35],[1,2142,728,556,0,560.7,193.35],[731,2142,722,564,0,557.7,193.35],[1455,2142,717,573,0,555.7,193.35],[2174,2142,712,582,0,553.7,193.35],[2888,2142,705,590,0,550.7,193.35],[3595,2142,700,599,0,548.7,193.35],[4297,2142,693,607,0,545.7,193.35],[4992,2142,686,615,0,542.7,193.35],[5680,2142,679,623,0,539.7,193.35],[6361,2142,671,631,0,536.7,193.35],[7034,2142,664,639,0,533.7,193.35],[1,2783,656,647,0,530.7,193.35],[659,2783,648,655,0,527.7,193.35],[1309,2783,644,659,0,522.7,189.35],[1955,2783,640,663,0,517.7,184.35],[2597,2783,637,667,0,512.7,179.35],[3236,2783,631,673,0,506.70000000000005,175.35],[3869,2783,627,676,0,501.70000000000005,169.35],[4498,2783,624,681,0,496.70000000000005,165.35],[5124,2783,620,683,0,491.70000000000005,159.35],[5746,2783,616,688,0,486.70000000000005,155.35],[6364,2783,611,692,0,480.70000000000005,149.35],[6977,2783,607,699,0,475.70000000000005,148.35],[7586,2783,603,706,0,470.70000000000005,146.35],[1,3491,599,713,0,465.70000000000005,145.35],[602,3491,593,722,0,459.70000000000005,144.35],[1197,3491,589,729,0,454.70000000000005,143.35],[1788,3491,585,736,0,449.70000000000005,141.35],[2375,3491,579,743,0,443.70000000000005,140.35],[2956,3491,575,750,0,438.70000000000005,138.35],[3533,3491,569,758,0,432.70000000000005,137.35],[4104,3491,565,764,0,427.70000000000005,135.35],[4671,3491,562,771,0,423.70000000000005,134.35],[5235,3491,558,778,0,419.70000000000005,132.35],[5795,3491,554,785,0,415.70000000000005,130.35],[6351,3491,551,792,0,411.70000000000005,129.35],[6904,3491,547,798,0,407.70000000000005,127.35],[7453,3491,544,804,0,403.70000000000005,125.35],[1,4297,540,810,0,399.70000000000005,123.35],[543,4297,536,817,0,395.70000000000005,121.35],[1081,4297,532,823,0,391.70000000000005,119.35],[1615,4297,529,829,0,387.70000000000005,117.35],[2146,4297,525,835,0,383.70000000000005,115.35],[2673,4297,511,841,0,367.70000000000005,110.35],[3186,4297,497,848,0,351.70000000000005,106.35],[3685,4297,484,852,0,336.70000000000005,100.35],[4171,4297,470,858,0,320.70000000000005,96.35],[4643,4297,455,862,0,304.70000000000005,90.35],[5100,4297,449,866,0,299.70000000000005,85.35],[5551,4297,448,869,0,297.70000000000005,80.35],[6001,4297,447,872,0,295.70000000000005,74.35],[6450,4297,444,873,0,292.70000000000005,68.35],[6896,4297,440,876,0,288.70000000000005,64.35],[7338,4297,434,888,0,284.70000000000005,66.35],[1,5187,429,898,0,280.70000000000005,67.35],[432,5187,424,909,0,275.70000000000005,68.35],[858,5187,417,918,0,269.70000000000005,69.35],[1277,5187,409,928,0,263.70000000000005,70.35],[1688,5187,407,936,0,257.70000000000005,71.35],[2097,5187,405,945,0,250.70000000000005,72.35],[2504,5187,404,951,0,243.70000000000005,72.35],[2910,5187,401,959,0,235.70000000000005,73.35],[3313,5187,398,965,0,228.70000000000005,73.35]]});
var walker_leg_p = walker_leg.prototype = new BitmapAnimation();
walker_leg_p.BitmapAnimation_initialize = walker_leg_p.initialize;
walker_leg_p.initialize = function() {
	this.BitmapAnimation_initialize(walker_leg._SpriteSheet);
	this.paused = false;
}
window.walker_leg = walker_leg;
walker_leg_lower = function() {
	this.initialize();
}
walker_leg_lower._SpriteSheet = new SpriteSheet({images: ["vehicles.png"], frames: [[3713,5187,368,176,0,166.2,51.2]]});
var walker_leg_lower_p = walker_leg_lower.prototype = new BitmapAnimation();
walker_leg_lower_p.BitmapAnimation_initialize = walker_leg_lower_p.initialize;
walker_leg_lower_p.initialize = function() {
	this.BitmapAnimation_initialize(walker_leg_lower._SpriteSheet);
	this.paused = false;
}
window.walker_leg_lower = walker_leg_lower;
walkerbody = function() {
	this.initialize();
}
walkerbody._SpriteSheet = new SpriteSheet({images: ["vehicles.png"], frames: [[4083,5187,859,507,0,289,336.2]]});
var walkerbody_p = walkerbody.prototype = new BitmapAnimation();
walkerbody_p.BitmapAnimation_initialize = walkerbody_p.initialize;
walkerbody_p.initialize = function() {
	this.BitmapAnimation_initialize(walkerbody._SpriteSheet);
	this.paused = false;
}
window.walkerbody = walkerbody;
}(window));

