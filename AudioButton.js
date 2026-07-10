
let canvas

let playButton
let modemSound

let playing = false
let t1000
let videoButton

let airstrike

let modemVolSlider
let modemRateSlider

let level
let amplitude

let ellipseSize

function preload(){
	modemSound = loadSound('Bloop.mp3')
	t1000 = createVideo(['T1000Reforming.mp4'])
	airstrike = loadFont('airstrike.ttf')
}

function setup(){
	canvas = createCanvas(windowWidth, windowHeight)
	canvas.position(0, 0)
	canvas.style('z-index', '-1')

	playButton = createButton('Play Audio')
	playButton.position(100, 100)
	playButton.mousePressed(playModem)

	t1000.position(50, 500)

	videoButton = createButton('Play Video')
	videoButton.position(300, 100)
	videoButton.mousePressed(playVideo)

	modemVolSlider = createSlider(0, 1, 1, 0.01)
	modemRateSlider = createSlider(0.1, 3, 1, 0.1)

	amplitude = new p5.Amplitude()

}


function playVideo(){
	if(playing){
		t1000.pause()
		videoButton.html('Play Video')
	}else{
		t1000.loop()
		videoButton.html('Pause Video')
	}

	playing = !playing
}

function playModem(){
	if(!modemSound.isPlaying()){
		modemSound.loop()
		playButton.html('Pause Audio')
	}else{
		modemSound.pause()
		playButton.html('Play Audio')
	}
}


function draw(){
	background(0)

	textFont(airstrike)
	textSize(60)
	text('T1000!!!', 30, 100)


	level = amplitude.getLevel()

	size = map(level, 0.01, .2, 100, 800)

	modemSound.setVolume(modemVolSlider.value())
	modemSound.rate(modemRateSlider.value())

	ellipse(windowWidth/2, windowHeight/2, size, size)

	print(level)

}


	function windowResized(){
		resizeCanvas(windowWidth, windowHeight);
	}