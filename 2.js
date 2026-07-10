//furby variable
let furby



function preload(){
furby = loadImage('images/FighterSelect.png')

}


function setup(){
	createCanvas(windowWidth, windowHeight)
imageMode(CENTER)
background(95, 21, 5)
}


function draw(){
textSize(60)
text('Lol, A Furby!', 200, 200)

 if(mouseIsPressed == true){
 	background(45,23,84)
 }else{
 	background(95,21,5)
 }
// if(keyIsPressed == true){
// 	background(0,98,40)
// }else{
// 	background(95,21,5)
// }
image(furby, windowWidth/2, windowHeight/2)

}