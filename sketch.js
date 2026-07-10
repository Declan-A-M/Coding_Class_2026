let lampPost; 
let Star;
let Bat

function preload() {
  lampPost = loadImage("Images/lampPost.png");
  Star = loadImage("Images/Star.png");
  Bat = loadImage("Images/Bat.jpg");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  imageMode(CENTER);
}

function draw() {
  if(mouseIsPressed){
background(0,0,0)
  }else{background(83,61,161)

  }
  //background(random(125), random(125), random(125))
  rect(0, 500, 100, 600);
  rect(285, 500, 100, 400)
  circle(250,50,50)
  circle(150, 125, 100)
    rect(175, 500, 100, 300)
  line(150, 175, 150, 350)
 fill(29, 31, 29)
   rect(400, 500, 100, 500)
  circle(500, 200, 100)
  circle(400,100,100)
  
line (400, 100, 300, 50)
  line (370, 150, 260, 100)
  line (580, 200, 370, 25)

  image(lampPost, 200, 400)
  image(Star, 1000, 200)
  image(Bat, 700, 50)

  

}