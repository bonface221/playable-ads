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

		appMc.mcLogo.x = 0;
		appMc.mcLogo.y = 130 - (appObj.canvasHeight * 0.5) / appMc.mcUI.scale.y;

		// appMc.mcTextContainer.scale.y =
		// 	0.1 + appObj.canvasHeight / 1280 / appMc.mcUI.scale.y;
		// appMc.mcTextContainer.scale.x =
		// 	0.1 + appObj.canvasWidth / 1280 / appMc.mcUI.scale.y;

		appMc.mcSand.x = 0;
		appMc.mcHand.x = 50;
	} else {
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

		// appMc.mcBg.scale.y = appMc.mcUI.scale.y;

		appMc.mcLogo.x = 160 - appObj.canvasWidth / (2 * appMc.mcUI.scale.y);
		appMc.mcLogo.y = 220 - appObj.canvasHeight / (2 * appMc.mcUI.scale.y);

		// appMc.mcBg.scale.y = 0.1 + appObj.canvasHeight / 1280 / appMc.mcUI.scale.x;
	}
};
// Resize
