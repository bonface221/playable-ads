const InitBasicObj = () => {
	//- mcMain
	appMc.mcMain = new createContainer({ p: stage, visible: false });
	appMc.mcGame = new createContainer({ p: appMc.mcMain });

	appMc.mcGame.twistFilter = new PIXI.filters.TwistFilter({
		angle: 4,
		offset: { x: 640, y: 640 },
		radius: 800,
		padding: 20,
	});

	appMc.mcWorldShake = new createContainer({ p: appMc.mcGame });
	appMc.mcWorldShake.shakeAX = 0;
	appMc.mcWorldShake.shakeAY = 0;
	appMc.mcWorldShake.shakeD = 0;

	//Back
	appMc.mcWorldCamera = new createContainer({ p: appMc.mcWorldShake });
	appMc.mcBg = new createSprite({ p: appMc.mcWorldCamera, tex: "bg" });

	//UI
	appMc.mcUI = new createContainer({ p: appMc.mcMain });

	// Button container
	appMc.mcBtnContainer = new createContainer({
		p: appMc.mcUI,
	});

	//Logo
	appMc.mcLogo = new createSprite({
		p: appMc.mcUI,
		tex: "logo",
		scale: 0.9,
	});

	// btn background 1
	appMc.mcBtnBackground1 = new createSprite({
		p: appMc.mcBtnContainer,
		x: 0,
		y: 0,
		tex: "btn-bg",
	});

	//  btn background 2
	appMc.mcBtnBackground2 = new createSprite({
		p: appMc.mcBtnContainer,
		x: 0,
		y: 0,
		tex: "btn-bg",
	});

	// Axe
	appMc.mcAxe = new createSprite({
		p: appMc.mcBtnBackground1,
		tex: "axe",
	});

	// wood
	appMc.mcBranch = new createSprite({
		p: appMc.mcBtnBackground2,
		tex: "wood",
	});

	//- mcBgOverlay
	appMc.mcBgOverlay = new createRect({
		p: appMc.mcUI,
		x: -1280 * 0.5,
		y: -1280 * 0.5,
		width: 1280,
		height: 1280,
		color: 0x000000,
		alpha: 0.0,
		fill: 1,
		radius: 0,
	});

	//- mcBgFS
	appMc.mcBgFS = new createRect({
		p: appMc.mcUI,
		x: -1280 * 0.5,
		y: -1280 * 0.5,
		width: 1280,
		height: 1280,
		color: 0x121214,
		alpha: 0,
		visible: false,
	});

	appMc.mcBgOverlay.interactive = true;
	appMc.mcBgOverlay.on("pointerdown", StageDown);
	appMc.mcBgOverlay.on("pointermove", StageMove);
	appMc.mcBgOverlay.on("pointerup", StageUp);
	appMc.mcBgFS.interactive = true;
	appMc.mcBgFS.on("pointerup", ClickAd);
};
