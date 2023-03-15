const StageEF = () => {
	appObj.time_current = performance.now();
	if (appObj.time_current - appObj.time_old > 25) {
		appObj.time_old = appObj.time_current;
		// 33 - 30 fps
		// 16 - 60 fps

		let i, j, k;
		let objTemp;
		let objTempExtra;

		//Gem
		if (gameStage === 2) {
			gemData.forEach((c, i) => {
				c.y += c._dy;
				c._dy *= 1.05;
				let _d = DistancePointToPoint(
					c.x,
					c.y,
					appMc.mcGamePlayAvatar.x,
					appMc.mcGamePlayAvatar.y
				);

				// console.log(_d);
				if (_d < 50) {
					c.visible = false;
					appMc.mcUI.removeChild(c);
					gemData = gemData.filter((item) => item != c);
					wonGems++;
					console.log(wonGems);
				}
				if (c.y > 1280) {
					appMc.mcUI.removeChild(c);
					gemData = gemData.filter((item) => item != c);
				}
			});
		}
		if (gameStage === 3) {
			gemData.forEach((c, i) => {
				c.y += c._dy;
				c._dy *= 1.25;
			});
		}

		//- Camera

		if (appMc.mcWorldShake.shakeD != 0) {
			appMc.mcWorldShake.shakeAX += 70;
			appMc.mcWorldShake.shakeAY += 90;
			if (appMc.mcWorldShake.shakeAX >= 360) {
				appMc.mcWorldShake.shakeAX -= 360;
			}
			if (appMc.mcWorldShake.shakeAY >= 360) {
				appMc.mcWorldShake.shakeAY -= 360;
			}
			appMc.mcWorldShake.x =
				appMc.mcWorldShake.shakeD *
				Math.cos(appMc.mcWorldShake.shakeAX * toRAD);
			appMc.mcWorldShake.y =
				appMc.mcWorldShake.shakeD *
				Math.cos(appMc.mcWorldShake.shakeAY * toRAD);
			appMc.mcWorldShake.shakeD *= 0.85;
			if (appMc.mcWorldShake.shakeD < 0.5) {
				appMc.mcWorldShake.shakeD = 0;
				appMc.mcWorldShake.x = 0;
				appMc.mcWorldShake.y = 0;
			}
		}
		if (gameStage === 2) {
			tmDebug++;

			if (tmDebug == 20) {
				tmDebug = 0;
				createGem();
			}
		}
		if (gameStage === 3) {
			tmDebug2++;
			if (tmDebug2 == 2) {
				tmDebug2 = 0;
				createGem();
			}
			setTimeout(() => {
				gameStage = gameStage + 1;
			}, 5000);
		}
		//- PIXI RENDER

		renderer.render(stage);

		//- P2 World
		if (physics) {
			appMc.p2world.step(1 / 60);
		}

		//- P2 World

		//- RESIZE

		objTemp = appObj;
		objTemp.tm_resize++;
		if (objTemp.tm_resize == 10) {
			objTemp.tm_resize = 0;

			if (
				objTemp.mainWidth != Math.ceil(window.innerWidth) ||
				objTemp.mainHeight != Math.ceil(window.innerHeight)
			) {
				AppResize();
			}
		}
	}

	//- RAF
	window.requestAnimationFrame(StageEF);
};
