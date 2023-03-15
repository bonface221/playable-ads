const InitBasicObj = () => {
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
	appMc.mcBg.width = 1280;
	appMc.mcBg.height = 1280;

	//UI
	appMc.mcUI = new createContainer({
		p: appMc.mcMain,
	});

	//Logo
	appMc.mcLogo = new createSprite({
		p: appMc.mcUI,
		tex: "logo",
		scale: 0.4,
	});

	// character and text and background container
	appMc.mcCharText = new createContainer({
		p: appMc.mcUI,
	});

	// Person
	appMc.person = new createSprite({
		p: appMc.mcCharText,
		tex: "person",
		scale: 0.4,
	});

	// Text bg container
	appMc.mcbgTextContainer = new createContainer({
		p: appMc.mcCharText,
		x: 100,
	});
	// Text background
	appMc.bgText = new createRect({
		p: appMc.mcbgTextContainer,
		width: 550,
		height: 150,
		// x: -100,
		// y: 60,
		color: 0xffffff,
		fill: 1,
		lineWeigth: 2,
		lineColor: 0xffffff,
		radius: 10,
	});

	// text
	appMc.text = new createSprite({
		p: appMc.mcbgTextContainer,
		tex: "text",
		// x: 170,
		// y: 140,
		scale: 0.8,
		x: 25,
		y: 20,
		anchor: [0, 0],
	});
};
