
let canvas

let randoButton

let randoImage
let randoText

let randoBool = false

let textArray = ['Dog', 'Cat', 'Alligator']

let imgs = []

let myImages = ['0.jpg', '1.jpg', '2.jpg', 'tiger.png']

function preload(){
	// for(i = 0; i < 3; i++){
	// 	imgs[i] = loadImage('images/' + i + '.jpg')
	// }
	
	for(let i = 0; i < myImages.length; i++){
		imgs[i] = loadImage('Images/' + myImages[i])
	}

	print(imgs)
}

function setup(){
	canvas = createCanvas(windowWidth, windowHeight)
	canvas.position(0, 0)
	canvas.style('z-index', '-1')

	randoButton = createButton('Random Image and Text')
	randoButton.mousePressed(randImageText)
	randoButton.position(30, 50)

	imageMode(CENTER)
}

function randImageText(){
	randoText = int(random(textArray.length))
	randoImage = int(random(imgs.length))
}

function draw(){
	background(255)
	image(imgs[randImage], windowWidth/2, windowHeight/2, 300, 300)
	textSize(200)
	text(textArray[randoText], 100, 300)
	ellipse(mouseX, mouseY, 50, 50)
}