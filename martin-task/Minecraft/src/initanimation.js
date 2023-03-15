const InitAnimation = () =>{
	let i, objTemp;			
	appMc.mcMain.visible=true;			
	document.getElementById('main').style.visibility = "visible";
	document.getElementById('progress').style.display = "none";	
//	appSounds["bg"].play();
	stateGame = 0;

	gameItems.forEach((c,i)=>{
		gsap.from(c.scale, 0.5,{delay:0.5+0.01*i, overwrite:"none", x:0,y:0, ease:Back.easeOut});
	});
	gsap.from(appMc.mcIntent.scale, 0.5,{delay:0.8, overwrite:"none", x:0,y:0, ease:Back.easeOut});	
	
	tutorialItem = appMc['mcSkin_'+0]
	setTimeout(()=>{
		appMc.mcBgOverlay.interactive = false;
		tutorialItem.interactive = true;
		handShow (tutorialItem);	
	},2000);

	
}