let nyan
let select
let maul
let nyan2
let maul2
let icebear
let icebear2
let piccolo
let piccolo2
let blanka
let blanka2
let raven
let raven2
let jake
let jake2
let vile
let vile2
let bananajoe
let smashball
let lanterns
let clyde
let myImages = ['Maul.png', 'NyanCat.png', 'IceBear.png', 'Piccolo.png', 'Blanka2.png', 'Raven.png', 'Jake.png', 'Vile.png']

let player2Imgs = []

let player2RandoImage
//player choice booleans

let playerOneNyanBool = false
let playerTwoBool = false
let playerOneMaulBool = false
let playerOneBlanka2Bool = false
let playerOneicebear2Bool = false
let playerOnepiccolo2Bool = false
let playerOneraven2Bool = false
let playerOnejake2Bool = false
let playerOnevile2Bool = false

function preload(){
	maul = loadImage('images/Maul.png')
	nyan = loadImage('images/NyanCat.png')
	select = loadImage('images/FighterSelect.png')
	nyan2 = loadImage('images/NyanCat.png')
	maul2 = loadImage('images/MiniMaul.png')
	icebear = loadImage('images/miniicebear.png')
	icebear2 = loadImage('images/IceBear.png')
	piccolo = loadImage('images/minipiccolo.png')
	piccolo2 = loadImage('images/Piccolo.png')
	blanka = loadImage('images/miniblanka.png')
	blanka2 = loadImage('images/Blanka2.png')
	raven = loadImage('images/miniraven.png')
	raven2 = loadImage('images/Raven.png')
	jake = loadImage('images/minijake.png')
	jake2 = loadImage('images/Jake.png')
	vile = loadImage('images/minivile.png')
	vile2 = loadImage('images/Vile.png')
	bananajoe = loadImage('images/bananajoe.png')
	smashball = loadImage('images/SmashBall.webp')
	lanterns = loadImage('images/Lanterns.png')
	clyde = loadImage('images/Clyde.png')

	for(let i = 0; i < myImages.length; i++){
		player2Imgs[i] = loadImage('images/' + myImages[i])
	}
}


function setup(){
	createCanvas(windowWidth, windowHeight)
	imageMode(CENTER)
	background(5, 21, 120)
	textAlign(CENTER)
}


function draw(){


	if(mouseIsPressed == true){
		background(45,100,32)
	}else{
		background(5,21, 120)
	}

	image(select, 770, 360)

	if(mouseIsPressed == true && dist(mouseX, mouseY, 400, 590) < 90){
		print("nyan!")
		playerOneNyanBool = true
		playerOneMaulBool = false
		playerOneBlanka2Bool = false
		playerOneicebear2Bool = false
		playerOnepiccolo2Bool = false
		playerOneraven2Bool = false
		playerOnejake2Bool = false
		playerOnevile2Bool = false
		playerTwoBool = true

		player2RandoImage = int(random(player2Imgs.length))

	}
	if(mouseIsPressed == true && dist(mouseX, mouseY, 552, 460) < 90){
		print("maul!")
		playerOneNyanBool = false
		playerOneMaulBool = true
		playerOneBlanka2Bool = false
		playerOneicebear2Bool = false
		playerOnepiccolo2Bool = false
		playerOneraven2Bool = false
		playerOnejake2Bool = false
		playerOnevile2Bool = false
		playerTwoBool = true

		player2RandoImage = int(random(player2Imgs.length))
	}
	if(mouseIsPressed == true && dist(mouseX, mouseY, 415, 460) < 90){
		print("blanka")
		playerOneBlanka2Bool = true
		playerOneicebear2Bool = false
		playerOnepiccolo2Bool = false
		playerOneraven2Bool = false
		playerOnejake2Bool = false
		playerOnevile2Bool = false
		playerOneNyanBool = false
		playerOneMaulBool = false
		playerTwoBool = true

		player2RandoImage = int(random(player2Imgs.length))
	}
	if(mouseIsPressed == true && dist(mouseX, mouseY, 700, 595) < 90){
		print("icebear")
		playerOneicebear2Bool = true
		playerOnepiccolo2Bool = false
		playerOneraven2Bool = false
		playerOnejake2Bool = false
		playerOnevile2Bool = false
		playerOneNyanBool = false
		playerOneMaulBool = false
		playerOneBlanka2Bool = false
		playerTwoBool = true

		player2RandoImage = int(random(player2Imgs.length))
	}
	if(mouseIsPressed == true && dist(mouseX, mouseY, 264, 460) < 90){
		print("piccolo")
		playerOnepiccolo2Bool = true
		playerOneraven2Bool = false
		playerOnejake2Bool = false
		playerOnevile2Bool = false
		playerOneNyanBool = false
		playerOneMaulBool = false
		playerOneBlanka2Bool = false
		playerOneicebear2Bool = false
		playerTwoBool = true

		player2RandoImage = int(random(player2Imgs.length))
	}
	if(mouseIsPressed == true && dist(mouseX, mouseY, 700, 460) < 90){
		print("raven")
		playerOneraven2Bool = true
		playerOnejake2Bool = false
		playerOnevile2Bool = false
		playerOneNyanBool = false
		playerOneMaulBool = false
		playerOneBlanka2Bool = false
		playerOneicebear2Bool = false
		playerOnepiccolo2Bool = false
		playerTwoBool = true

		player2RandoImage = int(random(player2Imgs.length))
	}
	if(mouseIsPressed == true && dist(mouseX, mouseY, 245, 595) < 90){
		print("jake")
		playerOnejake2Bool = true
		playerOnevile2Bool = false
		playerOneNyanBool = false
		playerOneMaulBool = false
		playerOneBlanka2Bool = false
		playerOneicebear2Bool = false
		playerOnepiccolo2Bool = false
		playerOneraven2Bool = false
		playerTwoBool = true

		player2RandoImage = int(random(player2Imgs.length))
	}
	if(mouseIsPressed == true && dist(mouseX, mouseY, 552, 590) < 90){
		print("vile")
		playerOnevile2Bool = true
		playerOneNyanBool = false
		playerOneMaulBool = false
		playerOneBlanka2Bool = false
		playerOneicebear2Bool = false
		playerOnepiccolo2Bool = false
		playerOneraven2Bool = false
		playerOnejake2Bool = false
		playerTwoBool = true

		player2RandoImage = int(random(player2Imgs.length))
	}

	image(nyan, 990, 590, 200, 200)
	image(nyan2, 400, 590, 200, 200)
	image(maul2, 1130, 460)
	image(maul2, 552, 460)
	image(icebear, 700, 595)
	image(icebear, 1260, 595)
	image(piccolo, 264, 460)
	image(piccolo, 842, 460)
	image(blanka, 415, 460)
	image(blanka, 985, 460)
	image(raven, 1267, 460)
	image(raven, 700, 460)
	image(jake, 842, 575)
	image(jake, 245, 575)
	image(vile, 1130, 590)
	image(vile, 552, 590)
	image(bananajoe, 88, 618)
	image(bananajoe, 1450, 618)
	image(smashball, 765, 240)
	image(lanterns, 79, 100)
	image(clyde, 1450, 100)

	if(playerOneNyanBool == true){
		image(nyan, 300, 300)

	}
	if(playerOneMaulBool == true){
		image(maul, 325, 250)
	}
	if(playerOneBlanka2Bool == true){
		image(blanka2, 325, 250)
	}
	if(playerOneicebear2Bool == true){
		image(icebear2, 325, 250)
	}
	if(playerOnepiccolo2Bool == true){
		image(piccolo2, 325, 250)
	}
	if(playerOneraven2Bool == true){
		image(raven2, 325, 250)
	}
	if(playerOnejake2Bool == true){
		image(jake2, 325, 250)
	}
	if(playerOnevile2Bool == true){
		image(vile2, 325, 250)
	}



	if(playerTwoBool == true){
		image(player2Imgs[player2RandoImage], 1220, 250)
	}


//if player 2 is maul
	if(player2RandoImage == 0 && playerOneNyanBool == true){
		textSize(20)
		fill(0)
		text('You Win, Maul got blasted by a space laser', windowWidth/2, 200)
		print('Maul Image')
	}
	if(player2RandoImage == 0 && playerOneMaulBool == true){
		textSize(20)
		fill(0)
		text('Mirror match Win, you are just built different', windowWidth/2, 200)
	}
	if(player2RandoImage == 0 && playerOneBlanka2Bool == true){
		textSize(20)
		fill(0)
		text('You lose, Blanka got pierced by a dope lightsaber', windowWidth/2, 200)
	}
	if(player2RandoImage == 0 && playerOneicebear2Bool == true){
		textSize(20)
		fill(0)
		text('You lose, Maul is superior in martial arts', windowWidth/2, 200)
	}
	if(player2RandoImage == 0 && playerOnepiccolo2Bool == true){
		textSize(20)
		fill(0)
		text('You win, Maul got one shot by a Special Beam Cannon', windowWidth/2, 200)
	}
	if(player2RandoImage == 0 && playerOneraven2Bool == true){
		textSize(20)
		fill(0)
		text('You win, demon magic trumps space magic', windowWidth/2, 200)
	}
	if(player2RandoImage == 0 && playerOnejake2Bool == true){
		textSize(20)
		fill(0)
		text('You lose, Maul uses the force to destroy Jake"s video game setup :(', windowWidth/2, 200)
	}
	if(player2RandoImage == 0 && playerOnevile2Bool == true){
		textSize(20)
		fill(0)
		text('You lose, you got mistaken for a Separatist droid', windowWidth/2, 200)
	}

//if player 2 is nyan

	if(player2RandoImage == 1 && playerOnevile2Bool == true){
		textSize(20)
		fill(0)
		text('You win, you cannot feel cuteness as a robot', windowWidth/2, 200)
	}
	if(player2RandoImage == 1 && playerOnejake2Bool == true){
		textSize(20)
		fill(0)
		text('You win, Jake the dog hates cats', windowWidth/2, 200)
	}
	if(player2RandoImage == 1 && playerOneraven2Bool == true){
		textSize(20)
		fill(0)
		text('You win, Raven teleports Nyan to the Shadow Realm', windowWidth/2, 200)
	}
	if(player2RandoImage == 1 && playerOnepiccolo2Bool == true){
		textSize(20)
		fill(0)
		text('You lose, Nyan"s cuteness blast is stronger than Special Beam Cannon', windowWidth/2, 200)
	}
	if(player2RandoImage == 1 && playerOneicebear2Bool == true){
		textSize(20)
		fill(0)
		text('You lose, Ice Bear is immobilized by cuteness', windowWidth/2, 200)
	}
	if(player2RandoImage == 1 && playerOneBlanka2Bool == true){
		textSize(20)
		fill(0)
		text('You win, Nyan gets annoyed with Blanka"s yelling and dips', windowWidth/2, 200)
	}
	if(player2RandoImage == 1 && playerOneMaulBool == true){
		textSize(20)
		fill(0)
		text('You lose, Maul got blasted by a space laser', windowWidth/2, 200)
	}
	if(player2RandoImage == 1 && playerOneNyanBool == true){
		textSize(20)
		fill(0)
		text('Mirror match Win, you are just built different', windowWidth/2, 200)
	}

//icebear
	if(player2RandoImage == 2 && playerOneNyanBool == true){
		textSize(20)
		fill(0)
		text('You win, Ice Bear is overwhelmed by cuteness', windowWidth/2, 200)
		print('Icebear')
	}
	if(player2RandoImage == 2 && playerOneMaulBool == true){
		textSize(20)
		fill(0)
		text('You win, Maul is superior in martial arts', windowWidth/2, 200)
	}
	if(player2RandoImage == 2 && playerOneBlanka2Bool == true){
		textSize(20)
		fill(0)
		text('You lose, Icebear distracts Blanka with his cooking', windowWidth/2, 200)
	}
	if(player2RandoImage == 2 && playerOneicebear2Bool == true){
		textSize(20)
		fill(0)
		text('Mirror match win, you are just built different', windowWidth/2, 200)
	}
	if(player2RandoImage == 2 && playerOnepiccolo2Bool == true){
		textSize(20)
		fill(0)
		text('You win, Piccolo wins via aura farming', windowWidth/2, 200)
	}
	if(player2RandoImage == 2 && playerOneraven2Bool == true){
		textSize(20)
		fill(0)
		text('You lose, Icebear and Raven got bored and go to a Starbucks', windowWidth/2, 200)
	}
	if(player2RandoImage == 2 && playerOnejake2Bool == true){
		textSize(20)
		fill(0)
		text('You win, Jake headshots you in a game of Fortnite', windowWidth/2, 200)
	}
	if(player2RandoImage == 2 && playerOnevile2Bool == true){
		textSize(20)
		fill(0)
		text('You lose, Icebear programs you to turn into a glorified Roomba', windowWidth/2, 200)
	}
//Piccolo
	if(player2RandoImage == 3 && playerOnevile2Bool == true){
		textSize(20)
		fill(0)
		text('You win, Robots are immune to aura farming', windowWidth/2, 200)
	}
	if(player2RandoImage == 3 && playerOnejake2Bool == true){
		textSize(20)
		fill(0)
		text('You lose, Piccolo used the Dragon Balls to wish for no more video games', windowWidth/2, 200)
	}
	if(player2RandoImage == 3 && playerOneraven2Bool == true){
		textSize(20)
		fill(0)
		text('You win, Raven portals the Special Beam Cannon back to Piccolo', windowWidth/2, 200)
	}
	if(player2RandoImage == 3 && playerOnepiccolo2Bool == true){
		textSize(20)
		fill(0)
		text('Mirror match Win, you are just built different', windowWidth/2, 200)
	}
	if(player2RandoImage == 3 && playerOneicebear2Bool == true){
		textSize(20)
		fill(0)
		text('You lose, Piccolo is 10x faster than IceBear (skill issue)', windowWidth/2, 200)
	}
	if(player2RandoImage == 3 && playerOneBlanka2Bool == true){
		textSize(20)
		fill(0)
		text('You lose, Piccolo is literally stronger in every stat (GGs)', windowWidth/2, 200)
	}
	if(player2RandoImage == 3 && playerOneMaulBool == true){
		textSize(20)
		fill(0)
		text('You lose, Piccolo yoinks your lightsaber', windowWidth/2, 200)
	}
	if(player2RandoImage == 3 && playerOneNyanBool == true){
		textSize(20)
		fill(0)
		text('You win, Nyan eats the Special Beam Cannon and Piccolo rage quits', windowWidth/2, 200)
	}
//Blanka
	if(player2RandoImage == 4 && playerOneNyanBool == true){
		textSize(20)
		fill(0)
		text('You lose, Blanka annoyed Nyan so much, he switched space servers', windowWidth/2, 200)
	}
	if(player2RandoImage == 4 && playerOneMaulBool == true){
		textSize(20)
		fill(0)
		text('You win, Maul one shots with his lightsaber', windowWidth/2, 200)
	}
	if(player2RandoImage == 4 && playerOneBlanka2Bool == true){
		textSize(20)
		fill(0)
		text('Mirror Match win, you are just built different', windowWidth/2, 200)
	}
	if(player2RandoImage == 4 && playerOneicebear2Bool == true){
		textSize(20)
		fill(0)
		text('You win, IceBear bribes Blanka with a 5 star meal to surrender', windowWidth/2, 200)
	}
	if(player2RandoImage == 4 && playerOnepiccolo2Bool == true){
		textSize(20)
		fill(0)
		text('You lose, Piccolo confuses Blanka with a Namekian', windowWidth/2, 200)
	}
	if(player2RandoImage == 4 && playerOneraven2Bool == true){
		textSize(20)
		fill(0)
		text('You lose, Raven teleports to a Starbucks out annoyance', windowWidth/2, 200)
	}
	if(player2RandoImage == 4 && playerOnejake2Bool == true){
		textSize(20)
		fill(0)
		text('You lose, Blanka Street Fighter combos Jake into oblivion', windowWidth/2, 200)
	}
	if(player2RandoImage == 4 && playerOnevile2Bool == true){
		textSize(20)
		fill(0)
		text('You win, Vile uses his cannon to oneshot Blanka', windowWidth/2, 200)
	}
//Raven
	if(player2RandoImage == 5 && playerOneNyanBool == true){
		textSize(20)
		fill(0)
		text('You lose, raven teleports Nyan to the Shadow Realm', windowWidth/2, 200)
	}
	if(player2RandoImage == 5 && playerOneMaulBool == true){
		textSize(20)
		fill(0)
		text('You lose, demon magic beats space magic', windowWidth/2, 200)
	}
	if(player2RandoImage == 5 && playerOneBlanka2Bool == true){
		textSize(20)
		fill(0)
		text('You win, Raven teleports to a Starbucks out of annoyance', windowWidth/2, 200)
	}
	if(player2RandoImage == 5 && playerOneicebear2Bool == true){
		textSize(20)
		fill(0)
		text('You win, IceBear offers therapy', windowWidth/2, 200)
	}
	if(player2RandoImage == 5 && playerOnepiccolo2Bool == true){
		textSize(20)
		fill(0)
		text('You lose, Raven reflects the Special Beam Cannon back to Piccolo', windowWidth/2, 200)
	}
	if(player2RandoImage == 5 && playerOneraven2Bool == true){
		textSize(20)
		fill(0)
		text('Mirror match win, you are just built different', windowWidth/2, 200)
	}
	if(player2RandoImage == 5 && playerOnejake2Bool == true){
		textSize(20)
		fill(0)
		text('You win, Raven is more of a dog person', windowWidth/2, 200)
	}
	if(player2RandoImage == 5 && playerOnevile2Bool == true){
		textSize(20)
		fill(0)
		text('You lose, Raven calls tech support to decommission Vile', windowWidth/2, 200)
	}
//Jake
	if(player2RandoImage == 6 && playerOnevile2Bool == true){
		textSize(20)
		fill(0)
		text('You win, Vile uses wall hacks and aimbot', windowWidth/2, 200)
	}
	if(player2RandoImage == 6 && playerOnejake2Bool == true){
		textSize(20)
		fill(0)
		text('Mirror match win, you are just built different', windowWidth/2, 200)
	}
	if(player2RandoImage == 6 && playerOneraven2Bool == true){
		textSize(20)
		fill(0)
		text('You lose, Raven is more of a dog person', windowWidth/2, 200)
	}
	if(player2RandoImage == 6 && playerOnepiccolo2Bool == true){
		textSize(20)
		fill(0)
		text('You win, Piccolo uses the Dragon Balls to wish for no more video games', windowWidth/2, 200)
	}
	if(player2RandoImage == 6 && playerOneicebear2Bool == true){
		textSize(20)
		fill(0)
		text('You lose, Jake one shots IceBear in Fortnite', windowWidth/2, 200)
	}
	if(player2RandoImage == 6 && playerOneBlanka2Bool == true){
		textSize(20)
		fill(0)
		text('You win, Blanka destroys Jake"s gaming setup', windowWidth/2, 200)
	}
	if(player2RandoImage == 6 && playerOneMaulBool == true){
		textSize(20)
		fill(0)
		text('You win, Maul force crushes Jake"s gameing console', windowWidth/2, 200)
	}
	if(player2RandoImage == 6 && playerOneNyanBool == true){
		textSize(20)
		fill(0)
		text('You lose, Jake is not a fan of cats', windowWidth/2, 200)
	}
//Vile
	if(player2RandoImage == 7 && playerOneNyanBool == true){
		textSize(20)
		fill(0)
		text('You lose, Vile is immune to cuteness', windowWidth/2, 200)
	}
	if(player2RandoImage == 7 && playerOneMaulBool == true){
		textSize(20)
		fill(0)
		text('You win, Vile got mistaken for a Seperatist droid', windowWidth/2, 200)
	}
	if(player2RandoImage == 7 && playerOneBlanka2Bool == true){
		textSize(20)
		fill(0)
		text('You lose, Vile headshots Blanka with his cannon', windowWidth/2, 200)
	}
	if(player2RandoImage == 7 && playerOneicebear2Bool == true){
		textSize(20)
		fill(0)
		text('You win, IceBear reprograms Vile into a glorified Roomba', windowWidth/2, 200)
	}
	if(player2RandoImage == 7 && playerOnepiccolo2Bool == true){
		textSize(20)
		fill(0)
		text('You win, Piccolo spams Special Beam Cannon (you are cooked)', windowWidth/2, 200)
	}
	if(player2RandoImage == 7 && playerOneraven2Bool == true){
		textSize(20)
		fill(0)
		text('You win, Raven calls tech support to decommission Vile', windowWidth/2, 200)
	}
	if(player2RandoImage == 7 && playerOnejake2Bool == true){
		textSize(20)
		fill(0)
		text('You lose, Vile uses hacks to beat Jake in Street Fighter', windowWidth/2, 200)
	}
	if(player2RandoImage == 7 && playerOnevile2Bool == true){
		textSize(20)
		fill(0)
		text('Mirror match win, you are just built different', windowWidth/2, 200)
	}

}