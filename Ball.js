let xPos
let yPos


let xSpeed = 2
let ySpeed = 2



function setup(){
	createCanvas(windowWidth, windowHeight)
	xPos = windowWidth/2
	yPos = windowHeight/2
}

function draw(){
	background(27, 194, 227)

	//ball styling
	fill(30, 95, 20)
	ellipse(xPos, yPos, 100, 100)

	//move the ball
	xPos = xPos + xSpeed
	yPos = yPos + ySpeed

	if(xPos >= windowWidth || xPos <= 0){
		xSpeed = xSpeed * -1
	}

	if(yPos >= windowHeight || yPos <= 0){
		ySpeed = ySpeed * -1
	}

}
