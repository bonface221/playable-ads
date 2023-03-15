const StageDown = (e) => {
	if (stateGame == 0) {
		stateGame = 1;
		if (!isGlobalActive) {
			isGlobalActive = true;
			//isGlobalSound = true;
			//Howler.mute(!isGlobalSound);
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
};

const BtnGlobalSound = (e) => {
	if (isGlobalSound) {
		//isGlobalSound = false;
		//appMc.mcBtnSoundB.texture = moduleTexture.pixiTextures["btn_sound_off"];
		//Howler.mute(true);
	} else {
		//isGlobalSound = true;
		//appMc.mcBtnSoundB.texture = moduleTexture.pixiTextures["btn_sound_on"];
		//Howler.mute(false);
	}
};

const btnDown = (e) => {
	let objTemp = e.target;
	gsap.to(objTemp.scale, 0.2, {
		delay: 0.0,
		overwrite: "none",
		x: 0.9,
		y: 0.9,
		ease: Sine.easeIn,
	});
};
const btnUp = (e) => {
	let objTemp = e.target;
	TweenLite.killTweensOf(objTemp.scale);
	//	console.log(objTemp.name);
	for (let i = 0; i < 3; i++) {
		appMc["btn" + i].interactive = false;
		gsap.to(appMc["btn" + i].scale, 0.5, {
			delay: 1.0 + 0.1 * i,
			overwrite: "none",
			x: 0,
			y: 0,
			ease: Back.easeIn,
		});
	}
	//animate hearder label
	gsap.to(appMc.mcBtnLabel.scale, 0.5, {
		delay: 0.7,
		overwrite: "none",
		x: 0,
		y: 0,
		ease: Back.easeIn,
	});
	//animate selected item from box to a scale of 0.2
	gsap.to(objTemp.scale, 0.2, {
		delay: 0.0,
		overwrite: "none",
		x: 1,
		y: 1,
		ease: Sine.easeOut,
	});
	//animate mcBox white box
	gsap.to(objTemp.mcBox, 0.2, {
		delay: 0.0,
		overwrite: "none",
		alpha: 0,
		ease: "none",
	});
	//animate purple box make visible
	gsap.to(objTemp.mcBoxBack, 0.2, {
		delay: 0.0,
		overwrite: "none",
		alpha: 1,
		ease: "none",
	});
	//animates clothes on the avatar
	gsap.from(appMc[objTemp.name], 0.2, {
		delay: 0.0,
		overwrite: "none",
		alpha: 0,
		ease: "none",
	});
	//selected item from box is made visible on the avatar
	appMc[objTemp.name].visible = true;
	//hides visiblility for default clothes
	appMc["mcDefault+" + stateGame].visible = false;

	//timer which passes the ad to adwords
	if (stateGame < 3) {
		stateGame++;
		setTimeout(() => {
			lvlSet(stateGame);
		}, 1700);
	} else {
		setTimeout(() => {
			EndGame();
		}, 1700);
	}
};

const onDragStart = (e) => {
	// appMc.mcAvatarContainer.data = e.data;
	// console.log(appMc.mcAvatarContainer.data);
	appMc.mcAvatarContainer.dragging = true;
};

const onDragEnd = (e) => {
	// delete appMc.mcAvatarContainer.data;
	appMc.mcAvatarContainer.dragging = false;
};

const onDragMove = (e) => {
	if (appMc.mcAvatarContainer.dragging === true) {
		appMc.mcAvatarContainer.x = e.data.getLocalPosition(appMc.mcWorldCamera).x;
		/* appMc.mcAvatarContainer.y=e.data.getLocalPosition(appMc.mcWorldCamera).y; */
	}
};

const playGame = (e) => {
	if ((mouse.isDown = true)) {
		//	console.log("click active");

		TweenLite.killTweensOf(appMc.mcBtnPlay.scale);
		gsap.to(appMc.mcText.scale, 0.5, {
			delay: 0.0,
			overwrite: "none",
			x: 0,
			y: 0,
			ease: Back.easeIn,
		});
		gsap.to(appMc.mcBtnPlay.scale, 0.5, {
			delay: 0.2,
			overwrite: "none",
			x: 0,
			y: 0,
			ease: Back.easeIn,
		});

		gsap.set(appMc.mcBtnPlay, {
			delay: 0.7,
			overwrite: "none",
			visible: false,
		});

		appMc.mcCreatetxt.visible = true;
		gsap.from(appMc.mcCreatetxt.scale, 0.5, {
			delay: 0.5,
			overwrite: "none",
			x: 0,
			y: 0,
			ease: Back.easeOut,
		});

		appMc.mcCursor.visible = true;
		//appMc["btn"+i].visible= true;

		gameStarting = true;

		if (appObj.mainWidth < appObj.mainHeight) {
			gsap.to(appMc.mcAvatarContainer, 0.5, {
				delay: 0.0,
				overwrite: "none",
				x: "+=100",
				ease: Sine.easeInOut,
			});
		}

		appMc.mcBtnPlayGameContainer.visible = true;
		gsap.from(appMc.mcBtnPlayGame.scale, 0.5, {
			delay: 0.7,
			overwrite: "none",
			x: 0,
			y: 0,
			ease: Back.easeOut,
		});
		gsap.to(appMc.mcBtnPlayGame.scale, 0.5, {
			delay: 1.2,
			yoyo: true,
			repeat: -1,
			overwrite: "none",
			x: "-=0.1",
			y: "-=0.1",
			ease: Sine.easeInOut,
		});

		appMc.mcBtnContainer.visible = true;
		gsap.from(appMc.mcBtnLabel.scale, 0.5, {
			delay: 0.5,
			overwrite: "none",
			x: 0,
			y: 0,
			ease: Back.easeOut,
		});

		for (let i = 0; i < 3; i++) {
			//let stateGame = 2
			appMc["btn" + i].icon.texture =
				moduleTexture.pixiTextures[lvlButtons[stateGame].btns[i]];
			appMc["btn" + i].interactive = true;
			appMc["btn" + i].name = lvlButtons[stateGame].btns[i];
			appMc["btn" + i].lvl = stateGame;
			gsap.from(appMc["btn" + i].scale, 0.5, {
				delay: 0.5 + 0.1 * i,
				overwrite: "none",
				x: 0,
				y: 0,
				ease: Back.easeOut,
			});
		}
	}
};

const btnDownEnd = (e) => {
	let objTemp = e.target;
	gsap.to(appMc.mcDownloadBtn.scale, 0.5, {
		delay: 0.7,
		overwrite: "none",
		x: 0.9,
		y: 0.9,
		ease: Sine.easeIn,
	});
};
