const InitBasicObj = () => {
	// Temporary array of objects
	let ballsAndSkins = [
		{
			tex: "skin_1",
			name: "skin_1",
			visible: false,
			bgQuestion: "skin_1_bgQ",
			bgOpen: "skin_1_bgO",
			bgOpenFailed: "skin_1_bgOF",
		},
		{
			tex: "skin_2",
			name: "skin_2",
			visible: false,
			bgQuestion: "skin_2_bgQ",
			bgOpen: "skin_2_bgO",
			bgOpenFailed: "skin_2_bgOF",
		},
		{
			tex: "skin_3",
			name: "skin_3",
			visible: false,
			bgQuestion: "skin_3_bgQ",
			bgOpen: "skin_3_bgO",
			bgOpenFailed: "skin_3_bgOF",
		},
		{
			tex: "skin_4",
			name: "skin_4",
			visible: false,
			bgQuestion: "skin_4_bgQ",
			bgOpen: "skin_4_bgO",
			bgOpenFailed: "skin_4_bgOF",
		},
		{
			tex: "skin_5",
			name: "skin_5",
			visible: false,
			bgQuestion: "skin_5_bgQ",
			bgOpen: "skin_5_bgO",
			bgOpenFailed: "skin_5_bgOF",
		},
		{
			tex: "skin_6",
			name: "skin_6",
			visible: false,
			bgQuestion: "skin_6_bgQ",
			bgOpen: "skin_6_bgO",
			bgOpenFailed: "skin_6_bgOF",
		},
		{
			tex: "skin_7",
			name: "skin_7",
			visible: false,
			bgQuestion: "skin_7_bgQ",
			bgOpen: "skin_7_bgO",
			bgOpenFailed: "skin_7_bgOF",
		},
		{
			tex: "skin_8",
			name: "skin_8",
			visible: false,
			bgQuestion: "skin_8_bgQ",
			bgOpen: "skin_8_bgO",
			bgOpenFailed: "skin_8_bgOF",
		},
		{
			tex: "skin_1",
			name: "skin_1C",
			visible: false,
			bgQuestion: "skin_1_bgQC",
			bgOpen: "skin_1_bgOC",
			bgOpenFailed: "skin_1_bgOFC",
		},
		{
			tex: "skin_2",
			name: "skin_2C",
			visible: false,
			bgQuestion: "skin_2_bgQC",
			bgOpen: "skin_2_bgOC",
			bgOpenFailed: "skin_2_bgOFC",
		},
		{
			tex: "skin_3",
			name: "skin_3C",
			visible: false,
			bgQuestion: "skin_3_bgQC",
			bgOpen: "skin_3_bgOC",
			bgOpenFailed: "skin_3_bgOFC",
		},
		{
			tex: "skin_4",
			name: "skin_4C",
			visible: false,
			bgQuestion: "skin_4_bgQC",
			bgOpen: "skin_4_bgOC",
			bgOpenFailed: "skin_4_bgOFC",
		},
		{
			tex: "skin_5",
			name: "skin_5C",
			visible: false,
			bgQuestion: "skin_5_bgQC",
			bgOpen: "skin_5_bgOC",
			bgOpenFailed: "skin_5_bgOFC",
		},
		{
			tex: "skin_6",
			name: "skin_6C",
			visible: false,
			bgQuestion: "skin_6_bgQC",
			bgOpen: "skin_6_bgOC",
			bgOpenFailed: "skin_6_bgOFC",
		},
		{
			tex: "skin_7",
			name: "skin_7C",
			visible: false,
			bgQuestion: "skin_7_bgQC",
			bgOpen: "skin_7_bgOC",
			bgOpenFailed: "skin_7_bgOFC",
		},
		{
			tex: "skin_8",
			name: "skin_8C",
			visible: false,
			bgQuestion: "skin_8_bgQC",
			bgOpen: "skin_8_bgOC",
			bgOpenFailed: "skin_8_bgOFC",
		},
	];
	appObj.countInInventory = 0;
	appObj.gap = 0;
	appObj.InventoryLength = 0;
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

	//Back
	appMc.mcWorldCamera = new createContainer({ p: appMc.mcWorldShake });
	appMc.mcBg = new createSprite({
		p: appMc.mcWorldCamera,
		tex: "bg",
	});

	// Trying the blur filter
	appMc.mcBg.blurFilter = new PIXI.filters.BlurFilter();
	appMc.mcBg.blurFilter.blur = 10;
	appMc.mcBg.blurFilter.quality = 3;

	appMc.mcBg.filters = [appMc.mcBg.blurFilter];

	//UI
	appMc.mcUI = new createContainer({ p: appMc.mcMain });

	// container for the final card
	appMc.mcFinalcardContainer = new createContainer({
		p: appMc.mcUI,
	});

	// get btn
	appMc.finalCard = new createSprite({
		p: appMc.mcFinalcardContainer,
		tex: "you_win",
		x: 0,
		y: 0,
		scale: 2.3,
		visible: false,
	});
	appMc.getBtn = new createSprite({
		p: appMc.mcFinalcardContainer,
		tex: "get_btn",
		x: 0,
		y: 270,
		scale: 1.5,
		visible: false,
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

	// Skins and background container
	appMc.mcBackground = new createContainer({
		p: appMc.mcUI,
	});

	// container for each bg and hidden skin
	appMc.mcContainerBallWithSkin = new createContainer({
		p: appMc.mcBackground,
	});

	if (appObj.gameLevel === 2) {
		// questionmark ball
		let randomXValue = -300;
		let randomYValue = -350;
		appObj.sequence = 0;

		let shuffledArray = MixArray(ballsAndSkins);
		shuffledArray.forEach((s, i) => {
			appMc[s.bgQuestion] = new createSprite({
				p: appMc.mcContainerBallWithSkin,
				tex: "bg_closed_with_questionMark",
				x: randomXValue,
				y: randomYValue,
				scale: 1.6,
				visible: true,
			});
			appMc[s.bgOpenFailed] = new createSprite({
				p: appMc.mcContainerBallWithSkin,
				tex: "bg_closed",
				x: randomXValue,
				y: randomYValue,
				scale: 1.6,
				visible: false,
			});
			appMc[s.bgOpen] = new createSprite({
				p: appMc.mcContainerBallWithSkin,
				tex: "bg_opened",
				x: randomXValue,
				y: randomYValue,
				scale: 1.6,
				visible: false,
			});
			appMc[s.name] = new createSprite({
				p: appMc.mcContainerBallWithSkin,
				tex: s.tex,
				x: randomXValue,
				y: randomYValue - 7,
				scale: 0.15,
				visible: s.visible,
			});

			appMc[s.bgQuestion].interactive = false;
			appMc[s.bgQuestion].on("pointerdown", () => {
				ShowSkin(s.name, s.bgQuestion, s.bgOpen, s.tex, s.bgOpenFailed);
			});

			randomXValue += 200;
			if (i === 3) {
				randomXValue = -300;
				randomYValue += 200;
			}
			if (i === 7) {
				randomXValue = -300;
				randomYValue += 200;
			}
			if (i === 11) {
				randomXValue = -300;
				randomYValue += 200;
			}
		});

		appObj.checkInventory = () => {
			return shuffledArray.filter((s) => appMc[s.name].visible === true).length;
		};
		appObj.getSkinsInInventory = () => {
			return shuffledArray.filter((s) => {
				if (appMc[s.bgOpen].visible) {
					return true;
				}
				return false;
			});
		};

		appMc.mcInventory = new createSprite({
			p: appMc.mcBackground,
			x: 0,
			y: appObj.canvasHeight / 2,
			tex: "inventory_box",
			scale: 1.5,
		});

		function showSkins() {
			shuffledArray.forEach((s) => {
				appMc[s.name].visible = true;
			});
		}
		function hideSkins() {
			shuffledArray.forEach((s) => {
				appMc[s.name].visible = false;
			});
		}
		function addInteractive() {
			shuffledArray.forEach((s) => {
				appMc[s.bgQuestion].interactive = true;
			});
		}
		showSkins();
		setTimeout(() => {
			hideSkins();
			addInteractive();
		}, 5000);
	}
	if (appObj.gameLevel === 3) {
		finalCard();
	}

	// end of balls and skins

	appMc.mcBgOverlay.interactive = true;
	appMc.mcBgOverlay.on("pointerdown", StageDown);
	appMc.mcBgOverlay.on("pointermove", StageMove);
	appMc.mcBgOverlay.on("pointerup", StageUp);
	appMc.mcBgFS.interactive = true;
	appMc.mcBgFS.on("pointerup", ClickAd);
};

function finalCard() {
	appMc.mcBackground.visible = false;

	appMc.mcConfetti = new Confetti({
		p: appMc.mcUI,
		count: 300,
	});
	gsap.set(appMc.finalCard, {
		delay: 0,
		overwrite: "none",
		visible: true,
		ease: "None",
	});
	gsap.set(appMc.getBtn, {
		delay: 0,
		overwrite: "none",
		visible: true,
		ease: "None",
	});
	appMc.getBtn.interactive = true;
	appMc.getBtn.on("pointerdown", ClickAd);
	gsap.from(appMc.mcFinalcardContainer.scale, 1, {
		delay: 0,
		overwrite: "none",
		x: 0.6,
		y: 0.6,
	});

	// gsap.from(appMc.finalCard.scale, 1, {
	// 	delay: 0,
	// 	overwrite: "none",
	// 	x: 0.6,
	// 	y: 0.6,
	// });
	console.log("im here");
	if (appObj.skinsInInventory.length !== 0) {
		let alignSkinsGap = 50;
		let count = 0;
		let skins = appObj.skinsInInventory.map((s) => s.tex);

		console.log(skins);

		skins
			.filter((item, index) => skins.indexOf(item) === index)
			.forEach((s, i) => {
				appMc[`${s.name}won${i}`] = new createSprite({
					p: appMc.mcFinalcardContainer,
					x: -alignSkinsGap,
					y: -200,
					tex: s,
					scale: 0.2,
				});
				count++;
				alignSkinsGap += 110;
			});
	}
	console.log("I have made it up here");

	appMc.mcUI.setChildIndex(appMc.mcFinalcardContainer, 2);
}
