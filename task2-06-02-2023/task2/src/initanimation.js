const InitAnimation = () => {
	let i, objTemp;
	appMc.mcMain.visible = true;
	document.getElementById("main").style.visibility = "visible";
	document.getElementById("progress").style.display = "none";
	// appSounds["bg"].play();
	stateGame = 0;

	gsap.from(appMc.mcText.scale, 0.5, {
		delay: 1,
		overwrite: "none",
		x: 0,
		y: 0,
		ease: Back.easeOut,
	});

	gsap.from(appMc.mcSand.scale, 0.5, {
		delay: 0.5,
		overwrite: "none",
		x: 0,
		y: 0,
		ease: Power3.ease,
	});
	gsap.from(appMc.mcHand.scale, 0.5, {
		delay: 1,
		overwrite: "none",
		x: 0,
		y: 0,
		ease: Sine.easeOut,
	});

	gsap.from(appMc.mcHand, 0.5, {
		delay: 1,
		overwrite: "none",
		repeat: -1,
		yoyo: true,
		x: 50,
		y: 250,
		ease: Power0.easeOut,
	});
};
