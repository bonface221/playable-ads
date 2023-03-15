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

		//responsible for arranging elements in vertical orientation

		appMc.mcBgFS.scale.x = 0.1 + appObj.canvasWidth / 1280 / appMc.mcUI.scale.x;
		appMc.mcBgFS.scale.y =
			0.1 + appObj.canvasHeight / 1280 / appMc.mcUI.scale.x;

		appMc.mcText.y = 200 - (appObj.canvasHeight * 0.5) / appMc.mcGame.scale.y;

		appMc.mcProgress.y =
			-130 + (appObj.canvasHeight * 0.5) / appMc.mcGame.scale.y;

		appMc.mcGround.y =
			-130 + (appObj.canvasHeight * 0.5) / appMc.mcGame.scale.y;
		appMc.mcGround.scale.set(2);

		appMc.mcAvatarContainer.scale.set(1.1);
		appMc.mcBtnContainer.x =
			160 - (appObj.canvasWidth * 0.5) / appMc.mcUI.scale.y;
		appMc.mcBtnContainer.y = -150;
		appMc.mcBtnContainer.scale.set(1);

		appMc.mcBtnPlayContainer.scale.set(2.5);
		appMc.mcBtnPlayContainer.y =
			-160 + (appObj.canvasHeight * 0.5) / appMc.mcUI.scale.y;
		appMc.mcBtnPlayContainer.x = 0;

		appMc.mcBtnPlayGameContainer.scale.set(2);
		appMc.mcBtnPlayGameContainer.y =
			-160 + (appObj.canvasHeight * 0.5) / appMc.mcUI.scale.y;
		appMc.mcBtnPlayGameContainer.x =
			160 - (appObj.canvasWidth * 0.5) / appMc.mcUI.scale.y;

		appMc.mcDownloadBtnContainer.x = 0;
		appMc.mcDownloadBtnContainer.y =
			-160 + (appObj.canvasHeight * 0.5) / appMc.mcUI.scale.y;
		appMc.mcDownloadBtnContainer.scale.set(2);

		appMc.mcEndCardText.y =
			160 - (appObj.canvasHeight * 0.5) / appMc.mcUI.scale.y;
		appMc.mcEndCardText.x = 0;
		appMc.mcEndCardText.scale.set(1.5);

		appMc.mcCreatetxt.y =
			160 - (appObj.canvasHeight * 0.5) / appMc.mcUI.scale.y;
		appMc.mcCreatetxt.x = 0;
		appMc.mcCreatetxt.scale.set(1.5);
		//appMc.mcBtnPlay.x = -660+appObj.canvasWidth*0.5/appMc.mcUI.scale.y;

		if (gameStarting) {
			appMc.mcAvatarContainer.x = 100;
		}

		if (stateGame == 10) {
			appMc.mcAvatarContainer.x = 0;
		}
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

		//responsible  for landscape orientation  and displaying to objects with same width and height

		appMc.mcBgFS.scale.x = 0.1 + appObj.canvasWidth / 1280 / appMc.mcUI.scale.x;
		appMc.mcBgFS.scale.y =
			0.1 + appObj.canvasHeight / 1280 / appMc.mcUI.scale.x;

		appMc.mcText.y = 100 - (appObj.canvasHeight * 0.5) / appMc.mcGame.scale.y;

		appMc.mcGround.y = -60 + (appObj.canvasHeight * 0.5) / appMc.mcGame.scale.y;
		appMc.mcGround.scale.set(1);

		appMc.mcProgress.y =
			-70 + (appObj.canvasHeight * 0.5) / appMc.mcGame.scale.y;

		appMc.mcAvatarContainer.scale.set(1.1);
		appMc.mcBtnContainer.x =
			150 - (appObj.canvasWidth * 0.5) / appMc.mcUI.scale.y;
		appMc.mcBtnContainer.y = -120;
		appMc.mcBtnContainer.scale.set(0.85);

		//appMc.mcEndCardText.scale.set(1.1);
		appMc.mcEndCardText.x =
			150 - (appObj.canvasWidth * 0.5) / appMc.mcUI.scale.y;
		appMc.mcEndCardText.y = -120;
		appMc.mcEndCardText.scale.set(0.85);

		appMc.mcCreatetxt.y =
			100 - (appObj.canvasHeight * 0.5) / appMc.mcUI.scale.y;
		appMc.mcCreatetxt.x =
			-250 + (appObj.canvasWidth * 0.5) / appMc.mcUI.scale.y;
		appMc.mcCreatetxt.scale.set(1);

		appMc.mcEndCardText.y = 0;
		appMc.mcEndCardText.x =
			300 - (appObj.canvasWidth * 0.5) / appMc.mcUI.scale.y;
		appMc.mcEndCardText.scale.set(1.5);

		appMc.mcBtnPlayContainer.y = 200;
		appMc.mcBtnPlayContainer.x =
			-250 + (appObj.canvasWidth * 0.5) / appMc.mcUI.scale.y;
		appMc.mcBtnPlayContainer.scale.set(2);

		appMc.mcBtnPlayGameContainer.scale.set(1.5);
		appMc.mcBtnPlayGameContainer.y = 200;
		appMc.mcBtnPlayGameContainer.x =
			-250 + (appObj.canvasWidth * 0.5) / appMc.mcUI.scale.y;

		appMc.mcDownloadBtnContainer.x =
			-300 + (appObj.canvasWidth * 0.5) / appMc.mcUI.scale.y;
		appMc.mcDownloadBtnContainer.y = 0;
		appMc.mcDownloadBtnContainer.scale.set(2);

		appMc.mcAvatarContainer.x = 0;
	}
};
// Resize
