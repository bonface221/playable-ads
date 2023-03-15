const InitBasicObj = () => {
	//- mcMain

	appMc.mcMain = new createContainer({ p: stage, visible: false });
	appMc.mcGame = new createContainer({ p: appMc.mcMain });
	appMc.mcTest = new createContainer({ p: appMc.mcMain });
	appMc.mcPlot = new createContainer({ p: appMc.mcTest });

	appMc.mcWorldShake = new createContainer({ p: appMc.mcGame });
	appMc.mcWorldShake.shakeAX = 0;
	appMc.mcWorldShake.shakeAY = 0;
	appMc.mcWorldShake.shakeD = 0;

	//Back
	appMc.mcWorldCamera = new createContainer({ p: appMc.mcWorldShake });
	appMc.mcBg = new createSprite({ p: appMc.mcWorldCamera, tex: "bg" });
	appMc.mcBg.width = 1280;
	appMc.mcBg.height = 1280;

	//sprite for ground
	appMc.mcGround = new createContainer({
		p: appMc.mcWorldCamera,
		y: 360,
		x: -700,
		scale: 2,
	});
	for (i = 0; i < 5; i++) {
		appMc["mcGround" + i] = new createSprite({
			p: appMc.mcGround,
			tex: "ground",
			x: 373 * i,
		});
	}

	//Gradient
	//	appMc.mcGradient = new createGradient({p:appMc.mcWorldCamera, points:[0,1], colors:["transparent", "rgba(0, 0, 0, 0.5)"], w:1280, h:1280});

	//UI
	//UI stuff goess here
	appMc.mcUI = new createContainer({ p: appMc.mcMain, visible: true });

	// sprite for text
	appMc.mcText = new createContainer({ p: appMc.mcUI });
	appMc.mcTextSprite = new createSprite({
		p: appMc.mcText,
		tex: "texts",
	});

	// sprite for progressbar
	appMc.mcProgress = new createContainer({ p: appMc.mcUI });
	appMc.mcProgressBG = new createSprite({
		p: appMc.mcProgress,
		visible: true,
		tex: "progressbar",
	});

	//sprite for  blue gem
	appMc.mcBgem = new createSprite({
		p: appMc.mcUI,
		visible: true,
		tex: "blue_gem",
		y: -200,
		x: 150,
		scale: 0.25,
	});

	//sprite for green gem
	appMc.mcGgem = new createSprite({
		p: appMc.mcUI,
		visible: true,
		tex: "green_gem",
		anchor: [0.5, 0.5],
		y: 200,
		x: 100,
		scale: 0.25,
	});

	appMc.mcNewUI = new createContainer({ p: appMc.mcUI, visible: true });

	//load avatar
	appMc.mcAvatarContainer = new createContainer({
		p: appMc.mcUI,
		visible: true,
	});
	appMc.mcAvatarBG = new createSprite({
		p: appMc.mcAvatarContainer,
		tex: "avatar",
		scale: 1,
	});

	// loading all boxes for avatar
	appMc["chest"] = new createSprite({
		p: appMc.mcAvatarContainer,
		y: 0,
		x: 0,
		tex: "chest",
	});
	appMc["box2"] = new createSprite({
		p: appMc.mcAvatarContainer,
		y: 80,
		x: 5,
	});
	appMc["box3"] = new createSprite({
		p: appMc.mcAvatarContainer,
		y: 80,
		x: 5,
	});

	appMc.mcAvatarContainer.interactive = true;
	appMc.mcAvatarContainer.on("pointerdown", onDragStart);
	appMc.mcAvatarContainer.on("pointerup", onDragEnd);
	appMc.mcAvatarContainer.on("pointerupoutside", onDragEnd);
	appMc.mcAvatarContainer.on("pointermove", onDragMove);

	//-Avatar

	//EndCard Text
	appMc.mcEndCardText = new createContainer({
		p: appMc.mcUI,
		visible: true,
	});
	appMc.mcEndCardTextTop = new createSprite({
		p: appMc.mcEndCardText,
		tex: "cta_text",
	});

	appMc.mcDownloadBtnContainer = new createContainer({
		p: appMc.mcUI,
		visible: true,
	});
	appMc.mcDownloadBtn = new createSprite({
		p: appMc.mcDownloadBtnContainer,
		tex: "download_btn",
	});
	appMc.mcDownloadBtn.interactive = true;
	appMc.mcDownloadBtn.on("pointerup", btnDownEnd);
	appMc.mcDownloadBtn.on("pointerdown", btnDown);

	//play button
	appMc.mcBtnPlayContainer = new createContainer({
		p: appMc.mcUI,
		visible: false,
	});
	appMc.mcBtnPlay = new createSprite({
		p: appMc.mcBtnPlayContainer,
		tex: "btn_play",
		anchor: [0.5, 0.5],
		scale: 0.8,
	});
	appMc.mcBtnPlay.interactive = true;
	appMc.mcBtnPlay.on("pointerdown", playGame);

	//play ingame button
	appMc.mcBtnPlayGameContainer = new createContainer({
		p: appMc.mcUI,
		visible: false,
	});
	appMc.mcBtnPlayGame = new createSprite({
		p: appMc.mcBtnPlayGameContainer,
		tex: "btn_play",
		anchor: [0.5, 0.5],
		scale: 0.8,
	});
	appMc.mcBtnPlayGame.interactive = true;
	appMc.mcBtnPlayGame.on("pointerdown", ClickAd);

	//create container for clothes options
	appMc.mcDisplay = new createContainer({
		p: appMc.mcUI,
		visible: true,
	});

	appMc.mcCreatetxt = new createSprite({
		p: appMc.mcUI,
		tex: "create_text",
		anchor: [0.5, 0.5],
		alpha: 1,
		visible: true,
	});

	//cursor container
	appMc.mcCursor = new createContainer({ p: appMc.mcUI });

	appMc.mcBtnContainer = new createContainer({
		p: appMc.mcUI,
		visible: true,
	});
	for (let i = 0; i < 3; i++) {
		appMc["btn" + i] = new createContainer({
			p: appMc.mcBtnContainer,
			x: 0,
			y: 200 * i,
			visible: true,
		});
		appMc["btn" + i].mcBoxBack = new createSprite({
			p: appMc["btn" + i],
			tex: "Box2",
			anchor: [0.5, 0.5],
			alpha: 0,
			scale: 2,
		});
		appMc["btn" + i].mcBox = new createSprite({
			p: appMc["btn" + i],
			tex: "Box1",
			anchor: [0.5, 0.5],
			alpha: 1,
			scale: 2,
		});
	}
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

	appMc.mcBgFS.interactive = true;
	appMc.mcWorldCamera.on("pointerdown", StageDown);
	appMc.mcWorldCamera.on("pointermove", StageMove);
	appMc.mcWorldCamera.on("pointerup", StageUp);
	appMc.mcBgFS.on("pointerup", ClickAd);
};
