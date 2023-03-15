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

	// Text, arm and hand container
	appMc.mcTextContainer = new createContainer({
		p: appMc.mcUI,
	});

	//Logo
	appMc.mcLogo = new createSprite({
		p: appMc.mcUI,
		tex: "logo",
		scale: 0.9,
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
		visible: true,
	});

	appMc.mcSand = new createSprite({
		p: appMc.mcTextContainer,
		x: 0,
		y: 150,
		tex: "sand",
	});

	// hand
	appMc.mcHand = new createSprite({
		p: appMc.mcTextContainer,
		x: 50,
		y: 280,
		tex: "hand",
	});

	appMc.mcText = new createSprite({
		p: appMc.mcTextContainer,
		x: 0,
		y: -70,
		tex: "text",
		scale: 0.7,
	});

	appMc.mcBgOverlay.interactive = true;
	appMc.mcBgOverlay.on("pointerdown", StageDown);
	appMc.mcBgOverlay.on("pointermove", StageMove);
	appMc.mcBgOverlay.on("pointerup", StageUp);
	appMc.mcBgFS.interactive = true;
	appMc.mcBgFS.on("pointerup", ClickAd);
};
