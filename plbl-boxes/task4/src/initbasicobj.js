const InitBasicObj = () => {
	// appSounds["bg"].play();
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

	//UI
	appMc.mcUI = new createContainer({ p: appMc.mcMain });

	//Logo and continue btn container
	appMc.mcLogoAndBtnContainer = new createContainer({
		p: appMc.mcUI,
		visible: false,
	});

	// Animation function
	function animateTry(name, delay = 0.7) {
		gsap.from(name, 0.5, {
			delay: delay,
			overwrite: "none",
			x: 0,
			y: 0,
			ease: "Bounce.easeOut",
		});
	}

	// Room container
	appMc.mcRoomContainer = new createContainer({
		p: appMc.mcUI,
	});
	let scale = 0.7;

	// back boxes
	appMc.mcBackBox1 = new createSprite({
		p: appMc.mcRoomContainer,
		tex: "box_1",
		x: -500,
		y: -10,
		visible: true,
		scale: scale,
	});
	animateTry(appMc.mcBackBox1.scale);

	appMc.mcBackBox2 = new createSprite({
		p: appMc.mcRoomContainer,
		tex: "box_2",
		x: -270,
		y: -120,
		visible: true,
		scale: scale,
	});
	animateTry(appMc.mcBackBox2.scale);

	appMc.mcBackBox3 = new createSprite({
		p: appMc.mcRoomContainer,
		tex: "box_3",
		visible: true,
		x: -50,
		y: -230,
		scale: scale,
	});
	animateTry(appMc.mcBackBox3.scale);

	// appMc.mcRoomContainer.setChildIndex(appMc.mcBackBox1, 1);

	// boxes Middle

	appMc.mcMiddleBox1 = new createSprite({
		p: appMc.mcRoomContainer,
		tex: "box_1",
		x: -200,
		y: 70,
		visible: true,
		scale: 0.8,
	});
	appMc.mcMiddleBox2 = new createSprite({
		p: appMc.mcRoomContainer,
		tex: "box_2",
		x: 10,
		y: -20,
		visible: true,
		scale: 0.8,
	});
	animateTry(appMc.mcMiddleBox1.scale);
	animateTry(appMc.mcMiddleBox2.scale);

	// Front - boxes containers
	appMc.mcFrontBoxesContainer3 = new createContainer({
		p: appMc.mcRoomContainer,
	});

	// Exploading box1 and 2 containers
	appMc.mcExploadBox1 = new createContainer({
		p: appMc.mcRoomContainer,
		visible: true,
	});
	appMc.mcExploadBox2 = new createContainer({
		p: appMc.mcRoomContainer,
		visible: true,
	});

	animateTry(appMc.mcFrontBoxesContainer3.scale);
	animateTry(appMc.mcExploadBox1.scale, 0.5);
	animateTry(appMc.mcExploadBox2.scale, 0.5);

	// Front boxes.
	appMc.mcFrontBox1 = new createSprite({
		p: appMc.mcExploadBox1,
		tex: "box_1",
		x: -10,
		y: 250,
		visible: true,
		scale: scale,
	});
	appMc.mcFrontBox1C = new createSprite({
		p: appMc.mcExploadBox1,
		tex: "box_1",
		x: 50,
		y: 240,
		visible: true,
		scale: scale,
	});

	// front middle
	appMc.mcFrontBox2 = new createSprite({
		p: appMc.mcExploadBox2,
		tex: "box_1",
		x: 300,
		y: 140,
		visible: true,
		scale: scale,
	});
	appMc.mcFrontBox2C = new createSprite({
		p: appMc.mcExploadBox2,
		tex: "box_1",
		x: 250,
		y: 100,
		visible: true,
		scale: scale,
	});

	// Front - end;
	appMc.mcFrontBox3 = new createSprite({
		p: appMc.mcFrontBoxesContainer3,
		tex: "box_3",
		x: 470,
		y: 10,
		visible: true,
		scale: scale,
	});
	appMc.mcFrontBox3C = new createSprite({
		p: appMc.mcFrontBoxesContainer3,
		tex: "box_3",
		x: 520,
		y: 30,
		visible: true,
		scale: scale,
	});

	// creating decors 1 and 2
	appMc.mcDecor1 = new createSprite({
		p: appMc.mcRoomContainer,
		tex: "decor_1",
		x: 0,
		y: 280,
		scale: 0,
	});

	appMc.mcDecor2 = new createSprite({
		p: appMc.mcRoomContainer,
		tex: "decor_2",
		x: 250,
		y: 140,
		visible: true,
		scale: 0,
	});
	appMc.mcDecor3 = new createSprite({
		p: appMc.mcRoomContainer,
		tex: "decor_3",
		x: 470,
		y: 10,
		visible: true,
		scale: 0,
	});
	appMc.mcDecor4 = new createSprite({
		p: appMc.mcRoomContainer,
		tex: "decor_4",
		x: -250,
		y: 120,
		visible: true,
		scale: 0,
	});
	appMc.mcDecor5 = new createSprite({
		p: appMc.mcRoomContainer,
		tex: "decor_5",
		x: 110,
		y: -60,
		visible: true,
		scale: 0,
	});
	appMc.mcDecor6 = new createSprite({
		p: appMc.mcRoomContainer,
		tex: "decor_1",
		x: -450,
		y: -10,
		visible: true,
		scale: 0,
	});
	appMc.mcDecor7 = new createSprite({
		p: appMc.mcRoomContainer,
		tex: "decor_2",
		x: -250,
		y: -120,
		visible: true,
		scale: 0,
	});
	appMc.mcDecor8 = new createSprite({
		p: appMc.mcRoomContainer,
		tex: "decor_3",
		x: 0,
		y: -230,
		visible: true,
		scale: 0,
	});

	// Logo and continue btn
	appMc.mcLogo = new createSprite({
		p: appMc.mcLogoAndBtnContainer,
		tex: "logo",
		x: 0,
		y: -90,
		scale: 1.2,
	});
	appMc.mcContinue = new createSprite({
		p: appMc.mcLogoAndBtnContainer,
		tex: "continue_btn",
		x: 0,
		y: 90,
		scale: 0.9,
	});

	appMc.mcUI.setChildIndex(appMc.mcLogoAndBtnContainer, 1);

	// Hand and Hand animations
	appMc.mcHand = new createSprite({
		p: appMc.mcRoomContainer,
		tex: "hand",
		x: 90,
		y: 350,
		visible: true,
	});

	// Commented out the animations to add the sequences
	gsap
		.timeline()
		.from(appMc.mcHand, 0.5, {
			delay: 0.6,
			x: 300,
			y: 600,
			ease: Power0.easeIn,
			overwrite: "none",
		})
		.to(appMc.mcHand.scale, 0.5, {
			delay: 0,
			x: 0.8,
			y: 0.9,
			overwrite: "none",
			ease: Sine.easeInOut,
			repeat: 3,
			yoyo: true,
			onComplete: () => removeHandAnimation(),
		});

	function removeHandAnimation() {
		gsap.set(appMc.mcHand, {
			delay: 0.5,
			visible: false,
		});
	}
	userInteracts();

	function userInteracts() {
		appMc.mcExploadBox1.interactive = true;
		appMc.mcExploadBox1.on("pointerdown", () =>
			onClickFunction("mcExploadBox1", "mcFrontBox1", "mcDecor1")
		);

		appMc.mcExploadBox2.interactive = true;
		appMc.mcExploadBox2.on("pointerdown", () =>
			onClickFunction("mcExploadBox2", "mcFrontBox2", "mcDecor2")
		);

		appMc.mcFrontBoxesContainer3.interactive = true;
		appMc.mcFrontBoxesContainer3.on("pointerdown", () =>
			onClickFunction("mcFrontBoxesContainer3", "mcFrontBox3", "mcDecor3", 0.4)
		);

		appMc.mcMiddleBox2.interactive = true;
		appMc.mcMiddleBox2.on("pointerdown", () =>
			onClickFunction("mcMiddleBox2", "mcMiddleBox2", "mcDecor5", 0.3)
		);
		appMc.mcMiddleBox1.interactive = true;
		appMc.mcMiddleBox1.on("pointerdown", () =>
			onClickFunction("mcMiddleBox1", "mcMiddleBox1", "mcDecor4", 0.3)
		);

		appMc.mcBackBox3.interactive = true;
		appMc.mcBackBox3.on("pointerdown", () =>
			onClickFunction("mcBackBox3", "mcBackBox3", "mcDecor8", 0.4)
		);

		appMc.mcBackBox2.interactive = true;
		appMc.mcBackBox2.on("pointerdown", () =>
			onClickFunction("mcBackBox2", "mcBackBox2", "mcDecor7")
		);

		appMc.mcBackBox1.interactive = true;
		appMc.mcBackBox1.on("pointerdown", () =>
			onClickFunction("mcBackBox1", "mcBackBox1", "mcDecor6")
		);
	}
	const onClickFunction = (obj, sprite, decor, scale = 0.5) => {
		if (appObj.functionCallCount < 8) {
			appObj.functionCallCount++;
		}

		gsap
			.timeline()
			.to(appMc[sprite].scale, 0.3, {
				delay: 0,
				overwrite: "none",
				ease: "Power0.easeOut",
				x: 0.75,
				y: 0.75,
				onComplete: () => Expload(sprite),
			})
			.set(
				appMc[obj],
				{
					delay: 0.3,
					overwrite: "none",
					visible: false,
				},
				"together"
			)

			.to(
				appMc[decor].scale,
				0.4,
				{
					delay: 0,
					x: scale,
					y: scale,
					ease: "Sine.easeOut",
					overwrite: "none",
				},
				"together"
			);
		if (appObj.functionCallCount === 8) {
			setTimeout(() => {
				finalStage();
			}, 800);
		}
	};

	function Expload(p) {
		appMc[`cool${p}`] = new itemSparkle({
			p: appMc[p],
			tex: "flare",
			count: 100,
			t: 0.05,
			dx: 15,
			dy: 15,
			s: 0.4,
		});
	}

	function finalStage() {
		appSounds["bg"].pause();
		appSounds["swash"].play();
		appMc.mcConfetti = new Confetti({
			p: appMc.mcUI,
			count: 300,
		});
		appMc.mcRoomContainer.blurFilter = new PIXI.filters.BlurFilter();
		appMc.mcRoomContainer.blurFilter.blur = 10;
		appMc.mcRoomContainer.blurFilter.quality = 5;
		appMc.mcRoomContainer.filters = [appMc.mcRoomContainer.blurFilter];
		appMc.mcBg.filters = [appMc.mcRoomContainer.blurFilter];

		appMc.mcLogoAndBtnContainer.visible = true;

		gsap.from(appMc.mcLogo.scale, 0.7, {
			overwrite: "none",
			delay: 0,
			x: -1.2,
			y: 0.3,
			ease: "Back.easeOut",
		});
		gsap
			.timeline()
			.from(appMc.mcContinue.scale, 1, {
				overwrite: "none",
				delay: 0,
				x: -1.2,
				y: 0.3,
				ease: "Back.easeOut",
			})
			.to(appMc.mcContinue.scale, 0.7, {
				overwrite: "none",
				yoyo: true,
				delay: 0,
				x: 0.8,
				y: 0.8,
				repeat: -1,
				ease: "Sine.easeInOut",
			});
	}
	appMc.mcContinue.interactive = true;
	appMc.mcContinue.on("pointerdown", ClickAd);

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
};
