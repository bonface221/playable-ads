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

	// Blur Filter
	appMc.mcWorldCamera.blurFilter = new PIXI.filters.BlurFilter();
	appMc.mcWorldCamera.blurFilter.blur = 20;
	appMc.mcWorldCamera.blurFilter.quality = 5;

	// Applying blur to background in the start of the game
	appMc.mcWorldCamera.filters = [appMc.mcWorldCamera.blurFilter];

	//UI
	appMc.mcUI = new createContainer({ p: appMc.mcMain });

	// Avatar and texts container
	appMc.mcAvatarAndtextContainer = new createContainer({
		p: appMc.mcUI,
	});
	// AVatar
	appMc.mcAvatar = new createSprite({
		p: appMc.mcAvatarAndtextContainer,
		tex: "avatar",
		x: 0,
		y: 0,
	});
	appMc.mcPointer = new createSprite({
		p: appMc.mcAvatarAndtextContainer,
		tex: "pointer",
		x: -appMc.mcAvatar.width / 3,
		y: appMc.mcAvatar.height / 4,
	});

	// collect gem text
	appMc.mcCollectGem = new createSprite({
		p: appMc.mcAvatarAndtextContainer,
		tex: "collect-gems-text",
		x: 0,
		y: appMc.mcAvatar.y - appMc.mcAvatar.height,
	});

	// Stage2 Containers
	appMc.mcStage2Container = new createContainer({
		p: appMc.mcUI,
	});

	appMc.mcPushButton = new createSprite({
		p: appMc.mcStage2Container,
		tex: "push-the-button",
		x: 0,
		y: -200,
		scale: 1.5,
	});
	appMc.mcEarnButton = new createSprite({
		p: appMc.mcStage2Container,
		tex: "earn-btn",
		x: 0,
		y: 0,
		scale: 1.4,
	});
	appMc.mcPointer2 = new createSprite({
		p: appMc.mcStage2Container,
		tex: "pointer",
		x: -80,
		y: 200,
	});

	// End of stage2 container
	setTimeout(() => {
		gameStage2();
	}, 3000);

	function gameStage2() {
		gsap

			.to(appMc.mcAvatarAndtextContainer.scale, 0.5, {
				delay: 0.2,
				x: 0,
				y: 0,
				ease: "Back.easeOut",
				overwrite: "none",
			})
			.to(appMc.mcStage2Container.scale, 0.5, {
				delay: 0.2,
				x: 1,
				y: 1,
				ease: "Sine.easeIn",
				overwrite: "none",
			});
	}

	if (gameStage === 0) {
	} else if (gameStage === 1) {
	} else if (gameStage === 2) {
		appMc.mcWorldCamera.blurFilter.blur = 0;
		appMc.mcGamePlayAvatar = new createSprite({
			p: appMc.mcUI,
			tex: "avatar",
			x: 0,
			y: 0.25 * (appObj.canvasHeight / 2),
		});
		appMc.mcProgressTopBar1 = new createSprite({
			p: appMc.mcUI,
			tex: "progress-bar-top-1",
			x: 0,
			y: -appObj.canvasHeight / 2,
		});
		appMc.mcProgressTopBar2 = new createSprite({
			p: appMc.mcUI,
			tex: "progress-bar-top-2",
			x: 0,
			y: -appObj.canvasHeight / 2,
			visible: false,
		});
		appMc.mcProgressTopBar3 = new createSprite({
			p: appMc.mcUI,
			tex: "progress-bar-top-3",
			x: 0,
			y: -appObj.canvasHeight / 2,
			visible: false,
		});
		for (let x = 0; x < 13; x++) {
			appMc[`mcGround${x}`] = new createSprite({
				p: appMc.mcUI,
				tex: "ground",
				x: -appObj.canvasWidth / 2 + x * 100,
				y: appMc.mcGamePlayAvatar.y + appMc.mcGamePlayAvatar.height / 2,
				anchor: [0.5, 0],
				scale: 3,
			});
		}

		appMc.mcEarnBtn = new createSprite({
			p: appMc.mcUI,
			tex: "earn-btn",
			x: 0,
			y: appObj.canvasHeight * 0.5,
			scale: 1.2,
		});
		appMc.mcGamePlayAvatar.interactive = true;
		appMc.mcGamePlayAvatar.on("pointerdown", onDragStart);
		appMc.mcGamePlayAvatar.on("pointerup", onDragEnd);
		appMc.mcGamePlayAvatar.on("pointerupoutside", onDragEnd);
		appMc.mcGamePlayAvatar.on("pointermove", onDragMove);

		myInterval = setInterval(progress, 5000);
		let calledCount = 1;
		function progress() {
			if (calledCount === 2) {
				appMc.mcProgressTopBar1.visible = false;
				appMc.mcProgressTopBar2.visible = true;
			}
			if (calledCount === 3) {
				appMc.mcProgressTopBar2.visible = false;
				appMc.mcProgressTopBar3.visible = true;

				clearInterval(myInterval);
				gameStage = gamestage + 1;
			}
			calledCount++;
		}
	} else if (gameStage === 3) {
		appMc.mcBoxAndYouWinContainer = new createContainer({
			p: appMc.mcUI,
		});
		appMc.mcYouWin = new createSprite({
			p: appMc.mcBoxAndYouWinContainer,
			tex: "you-win",
			y: -300,
			x: 0,
			scale: 1.4,
		});
		appMc.mcBoxWithGems = new createSprite({
			p: appMc.mcBoxAndYouWinContainer,
			tex: "box-with-gems",
			y: 0,
			x: 0,
			scale: 1.2,
		});
	} else if (gameStage === 4) {
	}

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
