const EndGame = () => {
	let i, objTemp;
	if (stateGame != 10) {
		stateGame = 10;

		appMc.mcBgFS.visible = true;
	}
};
const StageDown = (e) => {
	if (stateGame == 0) {
		stateGame = 1;
		if (!isGlobalActive) {
			isGlobalActive = true;
			isGlobalSound = true;
			Howler.mute(!isGlobalSound);
		}
	}
	mouse.isDown = true;
};
const StageMove = (e) => {
	if (mouse.isDown) {
		mouse.x = e.data.getLocalPosition(appMc.mcWorldCamera).x;
		mouse.y = e.data.getLocalPosition(appMc.mcWorldCamera).y;
	}
};
const StageUp = (e) => {
	mouse.isDown = false;

	//	appMc.mcConfetti = new Confetti({p:appMc.mcUI, count:100});

	// appMc.mcSparkle = new itemSparkle({
	// 	p: appMc.mcUI,
	// 	tex: "flare",
	// 	count: 100,
	// 	t: 10,
	// 	dx: 15,
	// 	dy: 15,
	// 	s: 0.5,
	// });
};
const BtnGlobalSound = (e) => {
	if (isGlobalSound) {
		isGlobalSound = false;

		appMc.mcBtnSoundB.texture = moduleTexture.pixiTextures["btn_sound_off"];

		Howler.mute(true);
	} else {
		isGlobalSound = true;

		appMc.mcBtnSoundB.texture = moduleTexture.pixiTextures["btn_sound_on"];

		Howler.mute(false);
	}
};
