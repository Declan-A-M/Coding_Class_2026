let furby 



function preload(){
furby = loadImage('Images/furby.png')

}


function setup (){
	createCanvas(windowWidth, windowHeight)

for(let i = 0; i < 100; i++){
	image(furby, random(windowWidth), random(windowHeight), 20, 20)
	}
	
}


function draw(){
	//background(255)

// for(let i = 0; i < windowWidth; i = i+10){
// 	line(i, 0, i, windowHeight)
// 	}

// for(let i = 0; i < windowHeight; i = i+10){
// 	line(0, i, windowWidth, i)
// }
	fill(40, 200, 50, 100)
	ellipse(mouseX, mouseY, 100, 100)
}
