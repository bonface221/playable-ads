//const { click } = require("wd/lib/commands");

const EndGame = () =>{
	let i, objTemp;
	if(stateGame !=10){
		stateGame = 10;	

		appMc.mcBgFS.visible = true;						
	}			
}	

//Button for the Cells and Skins (Logic)

const btnClick = (e)=>{


	appMc.mcBtnsHand.alpha = 0;
	if(tutorial){
		tutorialItem.interactive = false;
		for(let i = 0;i< gameItems.length; i++){
			if(tutorialItem.name == gameItems[i].name){
				tutorialItem = gameItems[i];
			}
		}
		handShow (tutorialItem);
		tutorial = false;

		
	}
	if(e.target.status){
		SaveObject(e.target.mcCell);
		e.target.status = false;
		appMc.mcFlyAvatarFirst.visible = true;
		

		gsap.to(e.target.mcCell.scale, 0.2,{delay:0.0, overwrite:"none", x:0, y:0, ease:Back.easeIn});
		console.log(e.target.x+appMc.mcSkins.x+appMc.mcGameField.x);
		if(firstItem == null){
			firstItem = e.target;
			appMc.mcFlyAvatarFirst.texture = moduleTexture.pixiTextures[firstItem.name];
			appMc.mcFlyAvatarFirst.x = (firstItem.x+appMc.mcSkins.x+appMc.mcGameField.x)*appMc.mcGameField.scale.x;
			appMc.mcFlyAvatarFirst.y = (firstItem.y+appMc.mcSkins.y+appMc.mcGameField.y+50)*appMc.mcGameField.scale.x;
			appMc.mcFlyAvatarFirst.scale.x = firstItem.scale.x*firstItem.mcSprite.scale.x*appMc.mcGameField.scale.x;
			appMc.mcFlyAvatarFirst.scale.y = appMc.mcFlyAvatarFirst.scale.x;
			gsap.from(appMc.mcFlyAvatarFirst.scale, 0.2,{delay:0.0, overwrite:"none", x:0, y:0, ease:Back.easeOut});
		}
		else{
			appMc.mcBgOverlay.interactive = true;		
			secondItem = e.target;
			appMc.mcFlyAvatarSecond.texture = moduleTexture.pixiTextures[secondItem.name];
			appMc.mcFlyAvatarSecond.x = (secondItem.x+appMc.mcSkins.x+appMc.mcGameField.x)*appMc.mcGameField.scale.x;
			appMc.mcFlyAvatarSecond.y = (secondItem.y+appMc.mcSkins.y+appMc.mcGameField.y+50)*appMc.mcGameField.scale.x;
			appMc.mcFlyAvatarSecond.scale.x = secondItem.scale.x*secondItem.mcSprite.scale.x*appMc.mcGameField.scale.x;
			appMc.mcFlyAvatarSecond.scale.y = appMc.mcFlyAvatarSecond.scale.x;
			gsap.from(appMc.mcFlyAvatarSecond.scale, 0.2,{delay:0.0, overwrite:"none", x:0, y:0, ease:Back.easeOut});

			setTimeout(()=>{
				checkItem();
			},500);		
		}
	}
   
}
const handShow = (item) =>{
	console.log("hand");
	appMc.mcBtnsHand.alpha = 1;
	appMc.mcBtnsHand.scale.set(1);
	item.interactive = true;
	appMc.mcBtnsHand.position.set(item.x+20,item.y+100);
	gsap.from(appMc.mcBtnsHand.scale, 0.5,{delay:0.0, overwrite:"none", x:0, y:0, ease:Back.easeOut});
	gsap.to(appMc.mcBtnsHand.scale, 0.5,{delay:0.5, yoyo:true, repeat:-1, overwrite:"none", x:0.9, y:0.9, ease:Sine.easeInOut});


}
const createInventiryItem = (tex) =>{
	appMc.mcIntent["mcItem"+gameScore] = new createSprite({p:appMc.mcIntent, tex:tex, x:-200+gameScore*57, scale:0.13});
	gsap.from(appMc.mcIntent["mcItem"+gameScore].scale, 0.5,{delay:0.0, overwrite:"none", x:0, y:0, ease:Back.easeOut});
	items.push(appMc.mcIntent["mcItem"+gameScore]);
	AppResize();
	gameScore++;

}
const checkItem = () =>{
	if(firstItem.name == secondItem.name){

 		setTimeout(()=>{
 			firstItem.mcSprite.alpha = 1;
			secondItem.mcSprite.alpha = 1;	
 		},500);

         for(let i = 0; i<16; i++, firstItem.name == secondItem.name){
         
		 appMc['mcSkin_'+i].mcBrownb.visible = false;
		 appMc['mcSkin_'+i].mcGreen.visible = true;
		
		 }	


     	gsap.to(appMc.mcFlyAvatarFirst.scale, 0.5,{delay:0.5, overwrite:"none", x:0.51, y:0.51, ease:Sine.easeInOut});
     	gsap.to(appMc.mcFlyAvatarFirst, 0.5,{delay:0.5, overwrite:"none", x:0, y:0, ease:Sine.easeInOut});

     	gsap.to(appMc.mcFlyAvatarSecond.scale, 0.5,{delay:0.5, overwrite:"none", x:0.51, y:0.51, ease:Sine.easeInOut});
     	gsap.to(appMc.mcFlyAvatarSecond, 0.5,{delay:0.5, overwrite:"none", x:0, y:0, ease:Sine.easeInOut});

     	gsap.set(appMc.mcFlyAvatarFirst, {delay:1.0, overwrite:"none", visible:false});

     	gsap.to(appMc.mcFlyAvatarSecond.scale, 0.5,{delay:1.5, overwrite:"none", x:0.0, y:0.0, ease:Sine.easeInOut});
     	gsap.to(appMc.mcFlyAvatarSecond, 0.5,{delay:1.5, overwrite:"none", x:appMc.mcIntent.x+gameScore*57-200, y:appMc.mcIntent.y, ease:Sine.easeInOut});
     
     	
     	gameItems.forEach((c,i)=>{
     		if(c.status){
     			c.interactive = true;
     		}
     	});


		// do something
		setTimeout(()=>{
			createInventiryItem(firstItem.name);
			firstItem = null;
			secondItem = null;
			appMc.mcBgOverlay.interactive = false;	
		},2000);

		
	}
	
	else{

		RebootObject(firstItem.mcCell);		
		RebootObject(secondItem.mcCell);
	    		
		gsap.from(firstItem.mcCell.scale, 0.2,{delay:0.1, overwrite:"none", x:0, y:0, ease:Back.easeOut});
		gsap.to(appMc.mcFlyAvatarFirst.scale, 0.2,{delay:0.0, overwrite:"none", x:0, y:0, ease:Back.easeIn});

		gsap.from(secondItem.mcCell.scale, 0.2,{delay:0.1, overwrite:"none", x:0, y:0, ease:Back.easeOut});
		gsap.to(appMc.mcFlyAvatarSecond.scale, 0.2,{delay:0.0, overwrite:"none", x:0, y:0, ease:Back.easeIn});
		
		firstItem.status = true;
		secondItem.status = true;
		firstItem = null;
		secondItem = null;
		appMc.mcBgOverlay.interactive = false;		
	}
const winItem = () =>{
	if(firstItem.name == secondItem.name == 8){
		setTimeout(() => {

			appMc.mcWin = new createSprite({p:appMc.mcUI, tex:"win", scale:2, visible:true});
			
		}, 3000);

	}

}
}



const StageDown = (e) =>{			
	if(stateGame == 0){
		stateGame = 1;	
		if(!isGlobalActive){
			isGlobalActive = true;
			isGlobalSound = true;
			Howler.mute(!isGlobalSound);	
		}	
	}
	mouse.isDown = true;				
}
const StageMove = (e) =>{
	if(mouse.isDown){				
		mouse.x = e.data.getLocalPosition(appMc.mcWorldCamera).x;	
		mouse.y = e.data.getLocalPosition(appMc.mcWorldCamera).y;					
	}								
}





const StageUp = (e) =>{
	mouse.isDown = false;				
}


const BtnGlobalSound =(e) =>{
	if(isGlobalSound){
		isGlobalSound = false;
		
		appMc.mcBtnSoundB.texture = moduleTexture.pixiTextures["btn_sound_off"];
		
		Howler.mute(true);
		
	}else{
		isGlobalSound = true;
	
		appMc.mcBtnSoundB.texture = moduleTexture.pixiTextures["btn_sound_on"];
		
		Howler.mute(false);
	}			
}