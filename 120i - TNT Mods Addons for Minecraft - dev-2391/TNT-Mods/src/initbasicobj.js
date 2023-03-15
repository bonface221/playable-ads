const InitBasicObj = () => {
	appSounds["bg"].play();
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
		tex: "horizontal-bg",
	});

	//UI
	appMc.mcUI = new createContainer({ p: appMc.mcMain });

	// Main container
	appMc.mcMainContainer = new createContainer({ p: appMc.mcUI });

	// Top hearts
	appMc.mcTopHearts = new createSprite({
		p: appMc.mcMainContainer,
		tex: "top-hearts",
	});

	// TNTS container
	appMc.mcTntContainers = new createContainer({
		p: appMc.mcMainContainer,
	});

	// gun sprite
	appMc.mcGun = new createSprite({
		p: appMc.mcTntContainers,
		tex: "gun",
		x: 350,
		y: -150,
		visible: true,
	});

	// Selected sprite placeholder
	appMc.mcTry = new createSprite({
		p: appMc.mcMainContainer,
		tex: "tnt-3",
		x: 0,
		y: -50,
		scale: 0.6,
		visible: false,
	});
	// Sprite Sequences
	appMc.mcSequence0 = new createSequence({
		p: appMc.mcMainContainer,
		tex: "sprite0",
		data: spriteData0,
		prefix: "tnt_",
		frame: 0,
		totalFrame: 11,
		x: 0,
		y: +200,
		scale: 1.5,
		slow: 2,
		visible: false,
	});
	// Sequence 2
	appMc.mcSequence1 = new createSequence({
		p: appMc.mcMainContainer,
		tex: "sprite1",
		data: spriteData1,
		prefix: "tnt_2",
		frame: 0,
		totalFrame: 9,
		x: 0,
		y: +150,
		scale: 1.7,
		slow: 2,
		visible: false,
	});
	// Sequence 3
	appMc.mcSequence2 = new createSequence({
		p: appMc.mcMainContainer,
		tex: "sprite2",
		data: spriteData2,
		prefix: "tnt_3",
		frame: 0,
		totalFrame: 12,
		x: 0,
		y: +430,
		scale: 1.8,
		slow: 2,
		visible: false,
	});

	// Blow tnt button
	appMc.mcBlowTntBtn = new createSprite({
		p: appMc.mcTntContainers,
		tex: "blow-tnt-btn",
		visible: false,
	});

	// tnt array for different x-positions
	let arr2 = [-450, -350, -250, -150, -50, 50, 150, 250, 350, 450];

	// Loop to generate all the sprites for the tnts
	arr2.forEach((p, x) => {
		appMc[`mcBoxContainer${x}`] = new createContainer({
			p: appMc.mcTntContainers,
			x: p,
		});
		appMc[`mcBox${x}`] = new createSprite({
			p: appMc[`mcBoxContainer${x}`],
			tex: "box-bg",
			scale: 1.3,
			visible: x === 0 ? false : true,
		});
		appMc[`mcBoxActive${x}`] = new createSprite({
			p: appMc[`mcBoxContainer${x}`],
			tex: "box-bg-active",
			scale: 1.2,
			visible: x === 0 ? true : false,
		});

		appMc[`mcTnt${x}`] = new createSprite({
			p: appMc[`mcBoxContainer${x}`],
			tex: `tnt-${x}`,
			scale: x === 9 ? 2 : 0.26,
		});
	});

	// Function to stagger all the tnts from left to right
	function animateCells() {
		let tl = gsap.timeline();
		for (let x = 0; x < 10; x++) {
			if (x === 0) {
				tl.from(appMc[`mcTnt${x}`].scale, 0.15, {
					delay: 0.25,
					x: 0,
					y: 0,
					overwrite: "none",
					ease: Sine.easeOut,
					onComplete: () => animateCell(0),
				});
			} else {
				tl.from(appMc[`mcTnt${x}`].scale, 0.1, {
					delay: 0.0,
					x: 0,
					y: 0,
					overwrite: "none",
					ease: Sine.easeOut,
				});
			}
		}
	}
	animateCells();

	// function to animate the cell that is active
	function animateCell(cell) {
		if (cell === 0) {
			gsap.to(appMc[`mcTnt${cell}`].scale, 0.5, {
				delay: 0.1,
				overwrite: "none",
				x: 0.2,
				y: 0.2,
				yoyo: true,
				repeat: -1,
				ease: Sine.easeInOut,
			});
		} else {
			gsap.to(appMc[`mcTnt${cell}`].scale, 0.5, {
				delay: 0.1,
				overwrite: "none",
				x: 0.2,
				y: 0.2,
				yoyo: true,
				repeat: -1,
				ease: Sine.easeInOut,
			});
		}

		appMc[`mcTnt${cell}`].interactive = true;
		appMc[`mcTnt${cell}`].on("pointerdown", () => onClickCell(cell));
	}

	// Handler for tnt click
	function onClickCell(cell) {
		appObj.cell = cell;
		appMc[`mcTnt${cell}`].interactive = false;
		gsap.killTweensOf(appMc.mcPickTnt.scale);
		gsap.to(appMc.mcPickTnt.scale, 0.4, {
			overwrite: "none",
			delay: 0.3,
			x: 0,
			y: 0,
			ease: Back.easeIn,
			onComplete: () => showTnt(cell),
		});
	}

	// fucntion to show tnt
	function showTnt(cell) {
		gsap.killTweensOf(appMc[`mcTnt${cell}`].scale);
		gsap.to(appMc[`mcTnt${cell}`].scale, 0.2, {
			overwrite: "none",
			delay: 0.0,
			x: 0.26,
			y: 0.26,
			ease: Power0.easeIn,
		});
		if (cell === 3) {
			gsap
				.timeline()
				.set(appMc.mcTry, {
					visible: true,
					alpha: 1,
				})
				.from(appMc.mcTry, 1, {
					overwrite: "none",
					delay: 0.0,
					x: 0,
					y: -500,
					alpha: 0,
					ease: Bounce.easeOut,
					onComplete: () => blowTnt(cell),
				});
		} else {
			sequenceAnimation(cell);
		}
	}

	// function to handle blowing tnt logic
	function blowTnt(cell) {
		console.log("blowTnt called");
		if (cell === 3) {
			appMc.mcBlowTntBtn.texture =
				moduleTexture.pixiTextures["get-more-tnts-btn"];

			blowBtnAnimation();

			appMc.mcBlowTntBtn.interactive = true;
			appMc.mcBlowTntBtn.on("pointerdown", () => ClickAd());
		} else {
			blowBtnAnimation();
			appMc.mcBlowTntBtn.interactive = true;
			appMc.mcBlowTntBtn.on("pointerdown", () => {
				if (cell === appObj.cell) {
					showNextTnt(cell);
				} else {
					return;
				}
			});
		}
	}

	// Show nextTnt function =>handler for the tnt click event
	function showNextTnt(cell) {
		console.log("showTnt called");
		appObj[`updateSeq${cell}`] = true;
		appSounds[`sound-${cell}`].play();

		setTimeout(() => {
			gsap
				.timeline()
				.to(appMc.mcBlowTntBtn, 0.3, {
					delay: 0.2,
					overwrite: "none",
					alpha: 0,
					ease: Sine.easeOut,
					onComplete: () => changeBg(cell),
				})
				.to(appMc.mcPickTnt.scale, 0.5, {
					overwrite: "none",
					delay: 0.2,
					x: 1,
					y: 1,
					ease: Back.easeOut,
				});
		}, 800);
	}

	// function to change active item
	function changeBg(current) {
		const next = current + 1;
		appMc[`mcBox${current}`].visible = true;
		appMc[`mcBoxActive${current}`].visible = false;

		appMc[`mcBox${next}`].visible = false;
		appMc[`mcBoxActive${next}`].visible = true;

		animateCell(next);
		console.log(next);
	}

	// Blow btn animation
	function blowBtnAnimation() {
		gsap
			.timeline()
			.set(appMc.mcBlowTntBtn, {
				visible: true,
				alpha: 1,
			})
			.from(appMc.mcBlowTntBtn.scale, 0.5, {
				overwrite: "none",
				x: 0,
				y: 0,
				ease: Back.easeOut,
			});
		// .to(appMc.mcBlowTntBtn.scale, 0.5, {
		// 	overwrite: "none",
		// 	x: "-=.07",
		// 	y: "-=.07",
		// 	yoyo: true,
		// 	repeat: -1,
		// 	ease: Sine.easeInOut,
		// });
	}

	// Sequences animations
	function sequenceAnimation(seq) {
		gsap
			.timeline()
			.set(appMc[`mcSequence${seq}`], {
				visible: true,
			})
			.from(appMc[`mcSequence${seq}`], 0.9, {
				overwrite: "none",
				delay: 0.1,
				x: 0,
				y: -500,
				alpha: 0,
				ease: Bounce.easeOut,
				onComplete: blowTnt(seq),
			});
	}

	// Pick tnt sprite
	appMc.mcPickTnt = new createSprite({
		p: appMc.mcMainContainer,
		tex: "pick-tnt-text",
	});

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
		tex: "btn_sound_off",
	});

	appMc.mcBtnSound.interactive = true;
	appMc.mcBtnSound.on("pointerup", BtnGlobalSound);
};
