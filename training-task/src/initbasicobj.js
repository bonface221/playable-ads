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

	if (physics) {
		appMc.p2world = new p2.World({ gravity: [0, -500] });

		// Add a plane
		planeShape = new p2.Plane();
		planeBody = new p2.Body({ position: [0, -100] });
		planeBody.addShape(planeShape);
		appMc.p2world.addBody(planeBody);
	}

	//Back
	appMc.mcWorldCamera = new createContainer({ p: appMc.mcWorldShake });
	appMc.mcBg = new createSprite({ p: appMc.mcWorldCamera, tex: "bg" });

	//UI
	appMc.mcUI = new createContainer({ p: appMc.mcMain });

	//Logo
	appMc.mcLogo = new createSprite({ p: appMc.mcUI, tex: "logo", scale: 0.4 });
	appMc.glowFilter = new PIXI.filters.GlowFilter({
		distance: 25,
		color: 0xffd700,
		outerStrength: 4,
		innerStrength: 1,
		quality: 0.1,
	});
	gsap.from(appMc.mcLogo.scale, 0.5, {
		overwrite: "none",
		yoyo: true,
		repeat: -1,
		x: 0.45,
		y: 0.45,
		ease: "Sine.easeInOut",
	});
	appMc.mcLogo.filters = [appMc.glowFilter];
	// Creating a Rectangle graphics object
	appMc.mcRect = new createRect({
		p: appMc.mcUI,
		x: -125,
		y: -125,
		width: 250,
		height: 250,
		color: 0xde3249,
		lineColor: 0x000000,
		radius: 5,
	});

	appMc.mcRect.interactive = true;
	appMc.mcRect.on("pointerdown", onDragStart);
	appMc.mcRect.on("pointerup", onDragEnd);
	appMc.mcRect.on("pointerupoutside", onDragEnd);
	appMc.mcRect.on("pointermove", onDragMove);

	appMc.circle = new createCircle({
		x: -300,
		y: 300,
		p: appMc.mcUI,
		color: 0xffffff,
		fill: 1,
		radius: 100,
	});

	appMc.myShadow = new PIXI.filters.DropShadowFilter({
		rotation: 45,
		distance: 25,
		color: 0xffffff,
		blur: 5,
		quality: 5,
	});

	appMc.circle.filters = [appMc.myShadow];

	appMc.BlackCircle = new createCircle({
		x: +300,
		y: -300,
		p: appMc.mcUI,
		color: 0xffff00,
		fill: 1,
		radius: 100,
	});
	appMc.mcUI.setChildIndex(appMc.mcRect, 3);
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

	// appMc.mcBgOverlay.interactive = true;
	// appMc.mcBgOverlay.on("pointerdown", StageDown);
	// appMc.mcBgOverlay.on("pointermove", StageMove);
	// appMc.mcBgOverlay.on("pointerup", StageUp);
	// appMc.mcBgFS.interactive = true;
	// appMc.mcBgFS.on("pointerup", ClickAd);

	//- mcBtnSound
	appMc.mcBtnSound = new createContainer({ p: appMc.mcUI });
	appMc.mcBtnSoundB = new createSprite({
		p: appMc.mcBtnSound,
		tex: "btn_sound_on",
	});

	appMc.mcBtnSound.interactive = true;
	appMc.mcBtnSound.on("pointerup", BtnGlobalSound);
};
