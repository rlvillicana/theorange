var font;
var clock;
let angle = 0;


function preload(){
  font = loadFont('IMFell.ttf');
  clock = loadImage('img/clock.png');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  textAlign(RIGHT);
  textFont(font);
  textSize(30);
  angleMode(DEGREES);
}

function draw() {
  background(255, 249, 237);
  text('And enjoyed them and had some \ntime over.', width-200, height-650);
  
  push();
  translate( width/2, width/2-200);
  
  rotate(angle);
  
  image(clock, 0, 0, height/2, height/2)
  
  pop();
  
  angle+= radians(50);
}