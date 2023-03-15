//- Resize

const AppResize = (e) => {
	appObj.mainWidth = Math.ceil(window.innerWidth);
	appObj.mainHeight = Math.ceil(window.innerHeight);
	appObj.canvasWidth = Math.ceil(1.4 * window.innerWidth);
	appObj.canvasHeight = Math.ceil(1.4 * window.innerHeight);

	renderer.view.style.width = appObj.mainWidth + "px";
	renderer.view.style.height = appObj.mainHeight + "px";
	renderer.view.width = appObj.canvasWidth;
	renderer.view.height = appObj.canvasHeight;

	renderer.resize(appObj.canvasWidth, appObj.canvasHeight);

	stage.position.set(
		Math.ceil(appObj.canvasWidth * 0.5),
		Math.ceil(appObj.canvasHeight * 0.5)
	);

	//- POSITION OBJ

	appMc.mcGame.scale.set(1, 1);
	appMc.mcUI.scale.set(1, 1);

	if (appObj.mainWidth < appObj.mainHeight) {
		appMc.mcBg.texture = moduleTexture.pixiTextures["bg-vertical"];

		appMc.mcGame.scale.x = appObj.canvasWidth / 1280;
		appMc.mcGame.scale.y = appMc.mcGame.scale.x;
		if (appMc.mcGame.scale.y * 1280 < appObj.canvasHeight) {
			appMc.mcGame.scale.y = appObj.canvasHeight / 1280;
			appMc.mcGame.scale.x = appMc.mcGame.scale.y;
		}

		appMc.mcUI.scale.x = appObj.canvasWidth / 720;
		appMc.mcUI.scale.y = appMc.mcUI.scale.x;
		if (appMc.mcUI.scale.y * 1280 > appObj.canvasHeight) {
			appMc.mcUI.scale.y = appObj.canvasHeight / 1280;
			appMc.mcUI.scale.x = appMc.mcUI.scale.y;
		}

		appMc.mcBgFS.scale.x = 0.1 + appObj.canvasWidth / 1280 / appMc.mcUI.scale.x;
		appMc.mcBgFS.scale.y =
			0.1 + appObj.canvasHeight / 1280 / appMc.mcUI.scale.x;

		appMc.mcBgOverlay.scale.x =
			0.1 + appObj.canvasWidth / 1280 / appMc.mcUI.scale.x;
		appMc.mcBgOverlay.scale.y =
			0.1 + appObj.canvasHeight / 1280 / appMc.mcUI.scale.x;

		appMc.mcBtnSound.x = -60 + (appObj.canvasWidth * 0.5) / appMc.mcUI.scale.y;
		appMc.mcBtnSound.y = -70 + (appObj.canvasHeight * 0.5) / appMc.mcUI.scale.y;
		appMc.mcBtnSound.scale.set(0.65);

		appMc.mcPlayBtn.y = (appObj.canvasHeight * 0.5 * 0.84) / appMc.mcUI.scale.y;
		appMc.mcTapToChoose.y =
			(-appObj.canvasHeight * 0.5 * 0.8) / appMc.mcUI.scale.y;

		appMc.mcAvatarContainer.scale.set(1);
		appMc.mcAvatarContainer.y = 80;

		appMc.mcTapToChoose.scale.set(1);
		appMc.mcPlayBtn.scale.set(1);

		gsap.from(appMc.mcPlayBtn.scale, 0.5, {
			x: 0.93,
			y: 0.93,
			overwrite: "none",
			ease: Sine.easeInOut,
			delay: 0,
			yoyo: true,
			repeat: -1,
		});
	} else {
		appMc.mcBg.texture = moduleTexture.pixiTextures["bg-horizontal"];

		appMc.mcGame.scale.x = appObj.canvasWidth / 1280;
		appMc.mcGame.scale.y = appMc.mcGame.scale.x;
		if (appMc.mcGame.scale.y * 1280 < appObj.canvasHeight) {
			appMc.mcGame.scale.y = appObj.canvasHeight / 1280;
			appMc.mcGame.scale.x = appMc.mcGame.scale.y;
		}

		appMc.mcUI.scale.x = appObj.canvasWidth / 1280;
		appMc.mcUI.scale.y = appMc.mcUI.scale.x;
		if (appMc.mcUI.scale.y * 720 > appObj.canvasHeight) {
			appMc.mcUI.scale.y = appObj.canvasHeight / 720;
			appMc.mcUI.scale.x = appMc.mcUI.scale.y;
		}

		appMc.mcBgFS.scale.x = 0.1 + appObj.canvasWidth / 1280 / appMc.mcUI.scale.x;
		appMc.mcBgFS.scale.y =
			0.1 + appObj.canvasHeight / 1280 / appMc.mcUI.scale.x;

		appMc.mcBgOverlay.scale.x =
			0.1 + appObj.canvasWidth / 1280 / appMc.mcUI.scale.x;
		appMc.mcBgOverlay.scale.y =
			0.1 + appObj.canvasHeight / 1280 / appMc.mcUI.scale.x;

		appMc.mcBtnSound.x = -60 + (appObj.canvasWidth * 0.5) / appMc.mcUI.scale.y;
		appMc.mcBtnSound.y = -60 + (appObj.canvasHeight * 0.5) / appMc.mcUI.scale.y;
		appMc.mcBtnSound.scale.set(0.65);

		// appMc.mcBg;

		appMc.mcPlayBtn.y = (appObj.canvasHeight * 0.5 * 0.8) / appMc.mcUI.scale.y;
		appMc.mcTapToChoose.y =
			(-appObj.canvasHeight * 0.5 * 0.8) / appMc.mcUI.scale.y;

		appMc.mcTapToChoose.scale.set(0.8);
		appMc.mcPlayBtn.scale.set(0.8);

		gsap.from(appMc.mcPlayBtn.scale, 0.5, {
			x: 0.73,
			y: 0.73,
			overwrite: "none",
			ease: Sine.easeInOut,
			delay: 0,
			yoyo: true,
			repeat: -1,
		});

		appMc.mcAvatarContainer.scale.set(0.55);
		appMc.mcAvatarContainer.y = 20;
	}
};
// Resize
