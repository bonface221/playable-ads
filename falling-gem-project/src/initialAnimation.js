const InitAnimation = () => {
	let i, objTemp;
	appMc.mcMain.visible = true;
	document.getElementById("main").style.visibility = "visible";
	document.getElementById("progress").style.display = "none";
	appSounds["bg"].play();
	stateGame = 0;

	gsap.from(appMc.mcText.scale, 0.5, {
		delay: 0.5,
		overwrite: "none",
		x: 0,
		y: 0,
		ease: Back.easeOut,
	});

	gsap.from(appMc.mcBtnPlay.scale, 0.5, {
		delay: 0.7,
		overwrite: "none",
		x: 0,
		y: 0,
		ease: Back.easeOut,
	});
	gsap.to(appMc.mcBtnPlay.scale, 0.5, {
		delay: 1.2,
		yoyo: true,
		repeat: -1,
		overwrite: "none",
		x: "-=0.1",
		y: "-=0.1",
		ease: Sine.easeInOut,
	});
};
