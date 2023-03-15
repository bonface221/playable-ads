const InitBasicObj = () => {
	// Wheat array
	let wheatArray = [
		{
			name: "mcWheat1",
			x: -115,
			y: -10,
			visible: true,
		},
		{
			name: "mcWheat2",
			x: -40,
			y: 25,
			visible: true,
		},
		{
			name: "mcWheat3",
			x: +30,
			y: -5,
			visible: true,
		},
		{
			name: "mcWheat4",
			x: -40,
			y: -40,
			visible: true,
		},
		{
			name: "mcWheat5",
			x: +115,
			y: -45,
			visible: true,
		},
		{
			name: "mcWheat6",
			x: +40,
			y: -90,
			visible: true,
		},
	];
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
	appMc.mcBg.width = 1280;
	appMc.mcBg.height = 1280;

	//UI
	appMc.mcUI = new createContainer({ p: appMc.mcMain });

	// Main container
	appMc.mcMainContainer = new createContainer({
		p: appMc.mcUI,
		visible: true,
	});
	appMc.mcMainContainer.blurFilter = new PIXI.filters.BlurFilter();
	appMc.mcMainContainer.blurFilter.blur = 15;
	appMc.mcMainContainer.blurFilter.quality = 10;

	//Logo
	appMc.mcLogo = new createSprite({
		p: appMc.mcMainContainer,
		tex: "logo",
		scale: 0.15,
	});

	// Indicator rectangle

	// Field
	appMc.mcFieldContainer = new createContainer({
		p: appMc.mcMainContainer,
		x: -300,
		y: 220,
	});

	// Field
	appMc.mcField = new createSprite({
		p: appMc.mcFieldContainer,
		tex: "field",
		scale: 0.7,
	});

	// Wheat in portions
	wheatArray.forEach((wheat) => {
		appMc[wheat.name] = new createSprite({
			p: appMc.mcFieldContainer,
			tex: "single-wheat",
			scale: 0.65,
			x: wheat.x,
			y: wheat.y,
			visible: wheat.visible,
		});
	});

	// Mixer or Factory
	appMc.mcMixerSeq = new createSequence({
		p: appMc.mcMainContainer,
		tex: "mixer-seq",
		data: mixerJson,
		prefix: "f_mixer_03_0000",
		frame: 0,
		totalFrame: 9,
		scale: 0.9,
		loop: true,
		slow: 2,
		visible: true,
	});

	// Cows container
	appMc.mcCowsContainer = new createContainer({
		p: appMc.mcMainContainer,
		x: +200,
		y: +200,
	});

	// COW SEQUENCES
	// Cow1Sequence;
	appMc.mcCow1Sequence = new createSequence({
		p: appMc.mcCowsContainer,
		tex: "cow-eat-sequence1",
		data: cowEatingJson1,
		prefix: "1_",
		frame: 0,
		totalFrame: 130,
		seq: 1,
		slow: 2,
		loop: true,
		x: -130,
		y: 50,
		scale: 0.5,
	});

	// Cow1
	// appMc.mcCow1 = new createSprite({
	// 	p: appMc.mcCowsContainer,
	// 	tex: "cow1",
	// 	scale: 0.5,
	// 	x: -150,
	// 	y: -60,
	// });

	appMc.mcCow2Sequence = new createSequence({
		p: appMc.mcCowsContainer,
		tex: "cow-eat-sequence1",
		data: cowEatingJson1,
		prefix: "1_",
		frame: 0,
		totalFrame: 130,
		seq: 2,
		slow: 2.5,
		loop: true,
		x: +100,
		y: -20,
		scale: 0.5,
		visible: true,
	});
	appMc.mcCow2Sequence.scale.x = -0.5;

	// cow2
	// appMc.mcCow2 = new createSprite({
	// 	p: appMc.mcCowsContainer,
	// 	tex: "cow2",
	// 	scale: 0.5,
	// 	x: +100,
	// 	y: -100,
	// });

	appMc.mcCow3Sequence = new createSequence({
		p: appMc.mcCowsContainer,
		tex: "cow-eat-sequence1",
		data: cowEatingJson1,
		prefix: "1_",
		frame: 0,
		totalFrame: 130,
		seq: 3,
		slow: 3,
		loop: true,
		x: +50,
		y: +200,
		scale: 0.5,
		visible: true,
	});
	appMc.mcCow3Sequence.scale.x = -0.5;

	// cow3
	// appMc.mcCow3 = new createSprite({
	// 	p: appMc.mcCowsContainer,
	// 	tex: "cow3",
	// 	scale: 0.5,
	// 	x: +50,
	// 	y: +100,
	// });

	// Cow's steppings
	appMc.mcCowSteppingsContainer = new createContainer({
		p: appMc.mcCowsContainer,
	});
	// Cows steppings in cows' containers
	for (let x = 0; x < 3; x++) {
		appMc[`mcCowStepping${x}`] = new createSprite({
			p: appMc.mcCowSteppingsContainer,
			tex: "cow-steppings",
			x: x * 50,
			y: x * 50,
		});
	}

	appMc.mcCowsContainer.setChildIndex(appMc.mcCowSteppingsContainer, 0);

	// Tools container
	appMc.mcToolsContainer = new createContainer({
		p: appMc.mcMainContainer,
		x: 0,
		y: 0,
	});

	// Tools btns bg
	appMc.mcToolsBox = new createSprite({
		p: appMc.mcToolsContainer,
		tex: "bg-btn",
		scale: 0.6,
	});

	// Tool Box 1
	appMc.mcBox1 = new createSprite({
		p: appMc.mcToolsContainer,
		tex: "btn-active-bg",
		scale: 0.6,
		anchor: [1, 0.5],
		x: -60,
	});
	appMc.mcSickle = new createSprite({
		p: appMc.mcMainContainer,
		tex: "sickle",
		anchor: [1, 0.5],
		x: -100,
		scale: 0.6,
		y: ((appObj.canvasHeight * 0.5) / appMc.mcUI.scale.y) * 1.4,
	});
	appMc.mcOkBox1 = new createSprite({
		p: appMc.mcMainContainer,
		tex: "ok",
		scale: 0.7,
		x: -90,
		anchor: [1, 0.5],
		y: ((appObj.canvasHeight * 0.5) / appMc.mcUI.scale.y) * 1.3,
		visible: false,
	});

	appMc.mcHand = new createSprite({
		p: appMc.mcMainContainer,
		tex: "hand",
		x: -30,
		y: ((appObj.canvasHeight * 0.5) / appMc.mcUI.scale.y) * 1.4 + 50,
		scale: 0.4,
		anchor: [1, 0.5],
	});
	gsap.from(appMc.mcHand.scale, 0.5, {
		overwrite: "none",
		x: 0.35,
		y: 0.35,
		ease: Sine.easeInOut,
		yoyo: true,
		repeat: 4,
		onComplete: goToWheat,
	});

	// Tools box 2
	appMc.mcBox2 = new createSprite({
		p: appMc.mcToolsContainer,
		tex: "btn-active-bg",
		scale: 0.6,
		anchor: [1, 0.5],
		x: +45,
		visible: false,
	});

	appMc.mcBox2NotActive = new createSprite({
		p: appMc.mcToolsContainer,
		tex: "btn-not-active",
		scale: 0.6,
		anchor: [1, 0.5],
		x: +45,
		visible: true,
	});

	appMc.mcFeed = new createSprite({
		p: appMc.mcMainContainer,
		tex: "feed",
		scale: 0.6,
		visible: false,
		y: ((appObj.canvasHeight * 0.5) / appMc.mcUI.scale.y) * 1.42,
		x: 0,
	});

	appMc.mcHandFeeds = new createSprite({
		p: appMc.mcMainContainer,
		tex: "hand",
		scale: 0.4,
		x: 0,
		y: ((appObj.canvasHeight * 0.5) / appMc.mcUI.scale.y) * 0.8,
		anchor: [0, 0.5],
		visible: false,
	});
	appMc.mcOkBox2 = new createSprite({
		p: appMc.mcMainContainer,
		tex: "ok",
		scale: 0.7,
		x: +50,
		anchor: [1, 0.5],
		y: ((appObj.canvasHeight * 0.5) / appMc.mcUI.scale.y) * 1.3,
		visible: false,
	});
	// Tools box 3
	appMc.mcBox3 = new createSprite({
		p: appMc.mcToolsContainer,
		tex: "btn-active-bg",
		scale: 0.6,
		anchor: [1, 0.5],
		x: +150,
		visible: false,
	});
	appMc.mcBox3NotActive = new createSprite({
		p: appMc.mcToolsContainer,
		tex: "btn-not-active",
		scale: 0.6,
		anchor: [1, 0.5],
		x: +150,
	});
	appMc.mcMilk = new createSprite({
		p: appMc.mcMainContainer,
		tex: "milk",
		scale: 0.7,
		visible: false,
		y: ((appObj.canvasHeight * 0.5) / appMc.mcUI.scale.y) * 1.42,
		x: +140,
	});
	appMc.mcOkBox3 = new createSprite({
		p: appMc.mcMainContainer,
		tex: "ok",
		scale: 0.7,
		x: +180,
		anchor: [1, 0.5],
		visible: false,
	});
	appMc.mcHandMilk = new createSprite({
		p: appMc.mcMainContainer,
		tex: "hand",
		scale: 0.4,
		visible: false,
	});

	// appMc.mcToolsContainer.setChildIndex(appMc.mcOkBox1, 6);
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

	//- mcBtnSound
	appMc.mcBtnSound = new createContainer({ p: appMc.mcUI });
	appMc.mcBtnSoundB = new createSprite({
		p: appMc.mcBtnSound,
		tex: "btn_sound_off",
	});

	appMc.mcBtnSound.interactive = true;
	appMc.mcBtnSound.on("pointerup", BtnGlobalSound);
};

// Final Card
function FinalCard() {
	appMc.mcLogo.visible = false;
	appObj["cowsSeq"] = false;
	appMc.mcMainContainer.filters = [appMc.mcMainContainer.blurFilter];
	appMc.mcBg.filters = [appMc.mcMainContainer.blurFilter];

	appMc.mcFinalCardContainer = new createContainer({
		p: appMc.mcUI,
	});

	// Final card Bg
	appMc.mcFinalCardBg = new createSprite({
		p: appMc.mcFinalCardContainer,
		tex: "final-bg",
	});

	// Final cheese
	appMc.mcFinalCheese = new createSprite({
		p: appMc.mcFinalCardContainer,
		tex: "cheese",
		scale: 0.8,
		y: +30,
	});

	appMc.mcFinalPlayBtn = new createSprite({
		p: appMc.mcFinalCardContainer,
		tex: "play-now-btn",
		scale: 0.9,
		y: +200,
	});
	gsap
		.timeline()
		.from(appMc.mcFinalCardContainer.scale, 0.6, {
			delay: 0.1,
			x: 0,
			y: 0,
			ease: Back.easeOut,
			overwrite: "all",
		})
		.from(
			appMc.mcFinalCheese.scale,
			0.3,
			{
				delay: 0,
				x: 0,
				y: 0,
				overwrite: "none",
				ease: Back.easeOut,
			},
			"cheese"
		)
		.from(
			appMc.mcFinalPlayBtn.scale,
			0.5,
			{
				delay: 0.3,
				yoyo: true,
				repeat: -1,
				overwrite: "none",
				x: 0.8,
				y: 0.8,
				ease: Sine.easeInOut,
			},
			"cheese"
		);
}

// Function to show the user how to navigate the Wheat field
function goToWheat() {
	console.log("cool");
	let toX = appMc.mcFieldContainer.x + 40;
	let toY = appMc.mcFieldContainer.y - 20;
	// appMc.mcSickle.scale.set(0.8);

	gsap
		.timeline()
		.to(
			appMc.mcHand,
			0.5,
			{
				overwrite: "none",
				x: toX + 100,
				y: toY + 30,
				ease: Power0.easeOut,
			},
			"cool"
		)
		.to(
			appMc.mcSickle,
			0.5,
			{
				overwrite: "none",
				x: toX,
				y: toY - 50,
				ease: Power0.easeOut,
				rotation: -0.9,
				onComplete: resetAnim,
			},
			"cool"
		);
}
// Function to reset the go to wheat animation
function resetAnim() {
	gsap.set(appMc.mcHand, {
		visible: false,
		delay: 0.2,
	});
	gsap.to(appMc.mcSickle, 1, {
		y: appMc.mcToolsContainer.y,
		x: -100,
		delay: 0.2,
		rotation: 0,
		onComplete: addInteraction,
	});
}

// Function to add interactiveness to the Sickle to allow use to click
function addInteraction() {
	console.log("adding interactions");

	appMc.mcSickle.interactive = true;
	appMc.mcSickle.on("pointerdown", () => (appMc.mcSickle.dragging = true));
	appMc.mcSickle.on("pointerup", () => (appMc.mcSickle.dragging = false));
	appMc.mcSickle.on(
		"pointerupoutside",
		() => (appMc.mcSickle.dragging = false)
	);
	appMc.mcSickle.on("pointermove", onPointerMove);
}
// handler for the sickle events
function onPointerMove(e) {
	if (appMc.mcSickle.dragging === true) {
		appMc.mcSickle.x = e.data.getLocalPosition(appMc.mcWorldCamera).x;
		appMc.mcSickle.y = e.data.getLocalPosition(appMc.mcWorldCamera).y;

		if (
			DistancePointToPoint(
				appMc.mcSickle.x,
				appMc.mcSickle.y,
				appMc.mcFieldContainer.x,
				appMc.mcFieldContainer.y
			) < 100
		) {
			if (control % 10 === 0) {
				appMc[`mcFoodWheat${i}`] = new createSprite({
					p: appMc.mcMainContainer,
					x: appMc.mcFieldContainer.x,
					y: appMc.mcFieldContainer.y - 50,
					tex: "food-wheat",
					scale: 0.7,
					anchor: [0, 1],
				});

				gsap
					.timeline()
					.to(appMc[`mcFoodWheat${i}`], 0.5, {
						overwrite: "none",
						ease: Power0.easeOut,
						x: 0,
						y: appMc.mcToolsContainer.y,
						delay: 0.5,
						onComplete: removeWheatPortion,
					})
					.set(appMc[`mcFoodWheat${i}`], {
						visible: false,
					});
			}

			control++;
		}
	}
}
// Function to handle harvesting
function removeWheatPortion() {
	if (wheatPortion === 7) {
		appMc.mcSickle.interactive = false;

		showFeeds();

		AppResize();
		return;
	}
	appMc[`mcWheat${wheatPortion}`].visible = false;
	wheatPortion++;
}
// Function to show feeds in the tool bar
function showFeeds() {
	appMc.mcBox2.visible = true;
	appMc.mcBox2NotActive.visible = false;
	appMc.mcFeed.visible = true;

	appMc.mcOkBox1.visible = true;

	showHowToFeedCows();

	// feedCows();
}
// Function to show user how to give the cows the feeds
function showHowToFeedCows() {
	let toX = appMc.mcCowsContainer.x;
	let toY = appMc.mcCowsContainer.y;

	appMc.mcHandFeeds.visible = true;
	gsap
		.timeline()
		.to(
			appMc.mcHandFeeds,
			1,
			{
				x: toX,
				y: toY,
				delay: 1.5,
				overwrite: "none",
			},
			"nice"
		)
		.to(
			appMc.mcFeed,
			1,
			{
				x: toX,
				y: toY - 30,
				delay: 1.5,
				overwrite: "none",
				onComplete: resetAnimFeed,
			},
			"nice"
		);
}
// Function to reset the show user animation
function resetAnimFeed() {
	gsap.set(appMc.mcHandFeeds, {
		visible: false,
		delay: 0.2,
	});
	gsap.killTweensOf(appMc.mcFeed);
	gsap.to(appMc.mcFeed, 1, {
		delay: 0,
		overwrite: "all",
		y: appMc.mcToolsContainer.y,
		x: 0,
		ease: Power0.easeOut,
		onComplete: feedCows,
	});
}
// Function to handle user event on feeds
function feedCows() {
	appMc.mcFeed.interactive = true;
	appMc.mcFeed.on("pointerdown", () => (appMc.mcFeed.dragging = true));
	appMc.mcFeed.on("pointerup", () => (appMc.mcFeed.dragging = false));
	appMc.mcFeed.on("pointerupoutside", () => (appMc.mcFeed.dragging = false));
	appMc.mcFeed.on("pointermove", onPointerMoveFeed);
}
// Function to handle the user mouse events
function onPointerMoveFeed(e) {
	// console.log("lets go");
	if (appMc.mcFeed.dragging === true) {
		appMc.mcFeed.x = e.data.getLocalPosition(appMc.mcWorldCamera).x;
		appMc.mcFeed.y = e.data.getLocalPosition(appMc.mcWorldCamera).y;

		if (
			DistancePointToPoint(
				appMc.mcFeed.x,
				appMc.mcFeed.y,
				appMc.mcCowsContainer.x,
				appMc.mcCowsContainer.y
			) < 100
		) {
			for (let x = 0; x < 3; x++) {
				appMc[`mcMilk${x}`] = new createSprite({
					p: appMc.mcMainContainer,
					tex: "milk",
					scale: 0.7,
					x: appMc.mcCowsContainer.x,
					y: appMc.mcCowsContainer.y,
				});
			}
			let toY = appMc.mcToolsContainer.y;
			let toX = +140;
			gsap
				.timeline()
				.to(appMc.mcMilk0, 1, {
					overwrite: "none",
					x: toX,
					y: toY,
					ease: Power0.easeOut,
					delay: 0.3,
				})
				.set(appMc.mcMilk0, {
					visible: false,
				})
				.to(appMc.mcMilk1, 1, {
					overwrite: "none",
					x: toX,
					y: toY,
					ease: Power0.easeOut,
				})
				.set(appMc.mcMilk1, {
					visible: false,
				})
				.to(appMc.mcMilk2, 0.5, {
					overwrite: "none",
					x: toX,
					y: toY,
					ease: Power0.easeOut,
				})
				.set(appMc.mcMilk2, {
					delay: 0.1,
					visible: false,
					onComplete: showMilk(),
				});
			appMc.mcFeed.interactive = false;

			AppResize();
			appMc.mcOkBox2.visible = true;

			// showMilk();
		}
	}
}
// Function to reviel the milk
function showMilk() {
	appMc.mcBox3.visible = true;
	appMc.mcBox3NotActive.visible = false;
	appMc.mcMilk.visible = true;

	setTimeout(() => {
		showTakeMilkToMixer();
	}, 1000);
}

// Function to show user how to take milk to mixer
function showTakeMilkToMixer() {
	let toX = appMc.mcMixerSeq.x + 65;
	let toY = appMc.mcMixerSeq.y - 40;

	appMc.mcHandMilk.visible = true;

	gsap
		.timeline()
		.to(
			appMc.mcHandMilk,
			1,
			{
				delay: 2,
				overwrite: "none",
				x: toX,
				y: toY,
			},
			"milk"
		)
		.to(
			appMc.mcMilk,
			1,
			{
				delay: 2,
				overwrite: "none",
				x: toX - 50,
				y: toY - 50,
				onComplete: resetAnimMilk,
			},
			"milk"
		);
}
// function to reset
function resetAnimMilk() {
	gsap.set(appMc.mcHandMilk, {
		visible: false,
		delay: 0.2,
	});
	gsap.killTweensOf(appMc.mcMilk);
	gsap.to(appMc.mcMilk, 1, {
		delay: 0.2,
		overwrite: "all",
		y: appMc.mcToolsContainer.y,
		x: +140,
		ease: Power0.easeOut,
		onComplete: () => {
			AppResize();
			addMilkToMixer();
		},
	});
}

function addMilkToMixer() {
	appMc.mcMilk.interactive = true;
	appMc.mcMilk.on("pointerdown", () => (appMc.mcMilk.dragging = true));
	appMc.mcMilk.on("pointerup", () => (appMc.mcMilk.dragging = false));
	appMc.mcMilk.on("pointerupoutside", () => (appMc.mcMilk.dragging = false));
	appMc.mcMilk.on("pointermove", onPointerMoveMilk);
}
function onPointerMoveMilk(e) {
	if (appMc.mcMilk.dragging === true) {
		appMc.mcMilk.x = e.data.getLocalPosition(appMc.mcWorldCamera).x;
		appMc.mcMilk.y = e.data.getLocalPosition(appMc.mcWorldCamera).y;

		if (
			DistancePointToPoint(
				appMc.mcMilk.x,
				appMc.mcMilk.y,
				appMc.mcMixerSeq.x,
				appMc.mcMixerSeq.y
			) < 60
		) {
			appObj["update"] = true;
			appMc.mcMilk.interactive = false;
			appMc.mcOkBox3.visible = true;

			AppResize();

			setTimeout(() => {
				FinalCard();
			}, 5000);
		}
	}
}
