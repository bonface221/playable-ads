const ShowSkin = (item, bg, bg_opened, tex, bg_failed) => {
	appObj.sequence += 1;

	if (appObj.sequence === 1) {
		appObj.sequenceBg = bg;
		appObj.sequenceItemTex = tex;
		appObj.sequenceItem1 = item;
		appObj.sequenceBgOpened = bg_opened;
		appObj.sequenceBgFailed = bg_failed;
	}

	gsap.set(appMc[item], {
		delay: 0.3,
		overwrite: "none",
		visible: true,
		ease: Power4.easeOut,
	});
	gsap.set(appMc[bg], {
		delay: 0.2,
		overwrite: "none",
		visible: false,
		ease: Power4.easeOut,
	});
	gsap.set(appMc[bg_failed], {
		delay: 0.3,
		overwrite: "none",
		visible: true,
		ease: Power4.easeOut,
	});

	// appMc[item].visible = true;
	// appMc[bg].visible = false;
	// appMc[bg_opened].visible = true;

	if (appObj.sequence === 2) {
		appObj.sequence = 0;
		if (compare(appObj.sequenceItemTex, tex)) {
			appMc[appObj.sequenceBgFailed].visible = false;
			appMc[appObj.sequenceBgOpened].visible = true;

			appMc[bg_failed].visible = false;
			appMc[bg_opened].visible = true;

			if (appObj.countInInventory === 0) {
				appObj.gap = 0;
			} else {
			}

			// Animating item to the inventory
			setTimeout(() => {
				appMc[`wonSkin${appObj.countInInventory}`] = new createSprite({
					p: appMc.mcBackground,
					tex: tex,
					x: 0,
					y: 0,
					scale: 1.6,
				});
				gsap.to(appMc[`wonSkin${appObj.countInInventory}`].scale, 1, {
					x: 0.15,
					y: 0.15,
					delay: 1,
					overwrite: "none",
					ease: Power4.easeInOut,
				});
				gsap.to(appMc[`wonSkin${appObj.countInInventory}`], 1, {
					x: -(appMc.mcInventory.width / 2) + 70 + appObj.gap,
					y: appObj.canvasHeight / 2 - appMc.mcInventory.height - 53,
					delay: 1,
					overwrite: "none",
					ease: Power4.easeInOut,
				});
				appObj.gap += 60;
				appObj.countInInventory++;
			}, 1000);
		} else {
			if (appObj.sequenceBg.includes("C")) {
				gsap.set(appMc[appObj.sequenceBg.slice(0, -1)], {
					delay: 0.2,
					overwrite: "none",
					visible: false,
					ease: Power4.easeOut,
				});
				// logic 2
				gsap.set(appMc[appObj.sequenceItem1.slice(0, -1)], {
					delay: 0.3,
					overwrite: "none",
					visible: true,
					ease: Power4.easeOut,
				});
				gsap.set(appMc[appObj.sequenceBgFailed.slice(0, -1)], {
					delay: 0.3,
					overwrite: "none",
					visible: true,
					ease: Power4.easeOut,
				});
			}
			if (bg.includes("C")) {
				gsap.set(appMc[item.slice(0, -1)], {
					delay: 0.3,
					overwrite: "none",
					visible: true,
					ease: Power4.easeOut,
				});
				gsap.set(appMc[bg.slice(0, -1)], {
					delay: 0.2,
					overwrite: "none",
					visible: false,
					ease: Power4.easeOut,
				});
				gsap.set(appMc[bg_failed.slice(0, -1)], {
					delay: 0.2,
					overwrite: "none",
					visible: true,
					ease: Power4.easeOut,
				});
			}
			if (!bg.includes("C")) {
				gsap.set(appMc[item + "C"], {
					delay: 0.3,
					overwrite: "none",
					visible: true,
					ease: Power4.easeOut,
				});
				gsap.set(appMc[bg + "C"], {
					delay: 0.2,
					overwrite: "none",
					visible: false,
					ease: Power4.easeOut,
				});
				gsap.set(appMc[bg_failed + "C"], {
					delay: 0.2,
					overwrite: "none",
					visible: true,
					ease: Power4.easeOut,
				});
			}

			if (!appObj.sequenceBg.includes("C")) {
				gsap.set(appMc[appObj.sequenceItem1 + "C"], {
					delay: 0.3,
					overwrite: "none",
					visible: true,
					ease: Power4.easeOut,
				});

				gsap.set(appMc[appObj.sequenceBg + "C"], {
					delay: 0.2,
					overwrite: "none",
					visible: false,
					ease: Power4.easeOut,
				});
				gsap.set(appMc[appObj.sequenceBgFailed + "C"], {
					delay: 0.2,
					overwrite: "none",
					visible: true,
					ease: Power4.easeOut,
				});
			}
		}
	}
};

function compare(a, b) {
	if (a === b) {
		return true;
	}
	return false;
}

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
