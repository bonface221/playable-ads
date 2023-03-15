let i, j, k, n;

let appObj = {
	time_old: 0,
	time_current: 0,
	tm_resize: 0,
	mainWidth: 0,
	mainHeight: 0,
};
let tmDebug = 0;
let appMc = {};
let lvlScore = 0;
const AppCanvas = document.createElement("canvas");
let renderer;
let stage;

let gameScore = 0;
let toRAD = Math.PI / 180;
let stateGame = 0;
let mouse = { x: 0, y: 0 };

let gameStarting = false;

let gemCount = 0;
let gemData = [];

let isGlobalActive = false;
let isGlobalSound = false;
Howler.mute(true);

//---------------------------------------------------------------------------------

window.onload = () => {
	try {
		if (mraid.getState() === "loading") {
			mraid.addEventListener("ready", mraidIsReady);
		} else {
			LoadTextures();
		}
	} catch (e) {
		LoadTextures();
	}
};

const Orientation = (e) => {
	AppResize();

	renderer.render(stage);
};
const mraidIsReady = () => {
	try {
		mraid.addEventListener("orientationchange", Orientation);
		if (mraid.isViewable()) {
		} else {
			mraid.addEventListener("viewableChange", mraidIsViewable);
		}
	} catch (e) {}

	mraid.removeEventListener("ready", mraidIsReady);
	LoadTextures();
};
const mraidIsViewable = (viewable) => {
	if (viewable) {
		mraid.removeEventListener("viewableChange", mraidIsViewable);
	} else {
	}
};

//---------------------------------------------------------------------------------

const LoadTextures = () => {
	try {
		var mraidGetMaxSize = mraid.getMaxSize();
	} catch (e) {}

	moduleTexture.load(CompleteLoadAllMaterials);
};

const CompleteLoadAllMaterials = () => {
	//- InitPixi

	InitPixi();

	//- InitBasicObj

	InitBasicObj();

	//- Resize

	AppResize();

	window.addEventListener("resize", AppResize);

	//- Animation
	InitAnimation();

	//- EF
	StageEF();
};

const createGem = () => {
	let tex = RandomInteger(0, 1);
	appMc["mcMyGem" + gemCount] = new createContainer({ p: appMc.mcUI });
	appMc["mcMyGemSprite" + gemCount] = new createSprite({
		p: appMc["mcMyGem" + gemCount],
		tex: "gem_" + tex,
		scale: 0.3,
	});
	appMc["mcMyGem" + gemCount].y = -640;
	appMc["mcMyGem" + gemCount].x = 640 - 1280 * Math.random();
	appMc["mcMyGem" + gemCount]._dy = 2;
	gemData.push(appMc["mcMyGem" + gemCount]);
	gemCount++;
};

var falling = true;
TweenLite.set("bg", { perspective: 600 });
TweenLite.set("blue_gem", { xPercent: "-50%", yPercent: "-50%" });

var total = 30;
var bg = document.getElementById("main"),
	w = window.innerWidth,
	h = window.innerHeight;

for (i = 0; i < total; i++) {
	var Main = document.createElement("main");
	TweenLite.set(Main, {
		attr: { class: "bg" },
		x: R(0, w),
		y: R(-200, -150),
		z: R(-200, 200),
	});
	bg.appendChild(Main);
	// animm(Main);
}

// function animm(elm) {
// 	TweenMax.to(elm, R(6, 15), {
// 		y: h + 100,
// 		ease: Linear.easeNone,
// 		repeat: -1,
// 		delay: -15,
// 	});
// 	TweenMax.to(elm, R(4, 8), {
// 		x: "+=100",
// 		rotationZ: R(0, 180),
// 		repeat: -1,
// 		yoyo: true,
// 		ease: Sine.easeInOut,
// 	});
// 	TweenMax.to(elm, R(2, 8), {
// 		rotationX: R(0, 360),
// 		rotationY: R(0, 360),
// 		repeat: -1,
// 		yoyo: true,
// 		ease: Sine.easeInOut,
// 		delay: -5,
// 	});
// }

function R(min, max) {
	return min + Math.random() * (max - min);
}

const lvlSet = (_lvl) => {
	//gsap.from(appMc.mcBtnLabel.scale, 0.5,{delay:0.5, overwrite:"none", x:0, y:0, ease:Back.easeOut});

	//stateGame++;
	for (let i = 0; i < 3; i++) {
		TweenLite.killTweensOf(appMc.mcBtnLabel.scale);
		appMc.mcBtnLabel.scale.set(1.5);
		//gets texture for the labels
		appMc.mcBtnLabel.texture =
			moduleTexture.pixiTextures[lvlButtons[stateGame].label];
		//responsible for animating labels
		gsap.from(appMc.mcBtnLabel.scale, 0.5, {
			delay: 0.0,
			overwrite: "none",
			x: 0,
			y: 0,
			ease: Back.easeOut,
		});
		//responsible for getting btn texture
		appMc["btn" + i].icon.texture =
			moduleTexture.pixiTextures[lvlButtons[stateGame].btns[i]];
		appMc["btn" + i].interactive = true;
		appMc["btn" + i].lvl = stateGame;
		appMc["btn" + i].name = lvlButtons[stateGame].btns[i];
		appMc["btn" + i].mcBox.alpha = 1;
		appMc["btn" + i].mcBoxBack.alpha = 0;
		appMc["btn" + i].scale.set(1);
		gsap.from(appMc["btn" + i].scale, 0.5, {
			delay: 0.0 + 0.1 * i,
			overwrite: "none",
			x: 0,
			y: 0,
			ease: Back.easeOut,
		});
	}
};
