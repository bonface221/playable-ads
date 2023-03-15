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
	appMc.mcBg = new createSprite({
		p: appMc.mcWorldCamera,
		tex: "bg-vertical",
	});
	appMc.mcBg.width = 1380;
	appMc.mcBg.height = 1280;

	//UI
	appMc.mcUI = new createContainer({ p: appMc.mcMain });

	appMc.mcTapToChoose = new createSprite({
		p: appMc.mcUI,
		tex: "choose-btn",
		x: 0,
		y: 0,
	});

	appMc.mcPlayBtn = new createSprite({
		p: appMc.mcUI,
		tex: "play-now-btn",
		x: 0,
		y: 0,
	});

	appMc.mcPlayBtn.interactive = true;
	appMc.mcPlayBtn.on("pointerdown", onPressPlay);

	function onPressPlay() {
		console.log("Play pressed");
	}
	// Avatar Container
	appMc.mcAvatarContainer = new createContainer({
		p: appMc.mcUI,
		y: 80,
	});

	// Avatar-face
	appMc.mcFace = new createSprite({
		p: appMc.mcAvatarContainer,
		tex: "face",
		x: -5,
		y: -360,
		anchor: [0.5, 0],
	});

	appMc.mcTop1 = new createSprite({
		p: appMc.mcAvatarContainer,
		tex: "top-1",
		x: 0,
		y: -280,
		anchor: [0.5, 0],
		visible: true,
	});
	appMc.mcPant1 = new createSprite({
		p: appMc.mcAvatarContainer,
		tex: "pant-1",
		x: 0,
		y: -120,
		anchor: [0.5, 0],
		visible: true,
	});

	appMc.mcShoe1 = new createSprite({
		p: appMc.mcAvatarContainer,
		tex: "shoe-1",
		x: -40,
		y: 200,
		anchor: [0.5, 0],
		visible: true,
	});
	appMc.mcHair1 = new createSprite({
		p: appMc.mcAvatarContainer,
		tex: "hair-1",
		anchor: [0.5, 0],
		x: 0,
		y: -480,
	});
	appMc.mcRightHand = new createSprite({
		p: appMc.mcAvatarContainer,
		tex: "right-hand",
		anchor: [1, 0.5],
		x: -appMc.mcTop1.width / 2 + 30,
		y: -65,
		scale: 0.8,
	});
	appMc.mcLeftHand = new createSprite({
		p: appMc.mcAvatarContainer,
		tex: "left-hand",
		anchor: [0, 0.5],
		x: appMc.mcTop1.width / 2 - 43,
		y: 15,
		scale: 0.8,
	});

	appMc.mcAvatarContainer.setChildIndex(appMc.mcFace, 2);
	appMc.mcAvatarContainer.setChildIndex(appMc.mcTop1, 1);
	appMc.mcAvatarContainer.setChildIndex(appMc.mcShoe1, 0);
	appMc.mcAvatarContainer.setChildIndex(appMc.mcLeftHand, 0);

	// Items container
	appMc.mcSideContainer = new createContainer({ p: appMc.mcUI });

	// Top btn with text
	// appMc.mcCategoryText = new createSprite({});
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

	//- mcBtnSound
	appMc.mcBtnSound = new createContainer({ p: appMc.mcUI });
	appMc.mcBtnSoundB = new createSprite({
		p: appMc.mcBtnSound,
		tex: "btn_sound_off",
	});

	appMc.mcBtnSound.interactive = true;
	appMc.mcBtnSound.on("pointerup", BtnGlobalSound);
};
