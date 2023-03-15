const InitAnimation = () => {
	let i, objTemp;
	appMc.mcMain.visible = true;
	document.getElementById("main").style.visibility = "visible";
	document.getElementById("progress").style.display = "none";
	//	appSounds["bg"].play();
	stateGame = 0;

	gsap.from(appMc.mcBtnBackground1.scale, 0.5, {
		delay: 1,
		overwrite: "none",
		x: 0,
		y: 0,
		ease: Back.easeOut,
	});

	gsap.from(appMc.mcAxe.scale, 0.5, {
		overwrite: "none",
		delay: 1.2,
		x: 0,
		y: 0,
		ease: Back.easeOut,
	});

	gsap.from(appMc.mcBtnBackground2.scale, 0.5, {
		delay: 1.5,
		overwrite: "none",
		x: 0,
		y: 0,
		ease: Back.easeOut,
	});

	gsap.from(appMc.mcBranch.scale, 0.5, {
		overwrite: "none",
		delay: 1.7,
		x: 0,
		y: 0,
		ease: Back.easeOut,
	});

	gsap.to(appMc.mcBtnBackground1.scale, 0.5, {
		delay: 1.8,
		yoyo: true,
		repeat: -1,
		x: 0.8,
		y: 0.8,
		ease: Sine.easeInOut,
	});

	gsap.to(appMc.mcBtnBackground2.scale, 0.5, {
		delay: 1.8,
		yoyo: true,
		repeat: -1,
		x: 0.8,
		y: 0.8,
		ease: Sine.easeInOut,
	});
};
