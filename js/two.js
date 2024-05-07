var font;
var half;
var quarter;

function preload(){
  font = loadFont('IMFell.ttf');
  half = loadImage('img/half.png');
  quarter = loadImage('img/quarter.png');
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  textAlign(CENTER);
  textFont(font);
  textSize(30);
}

function draw() {
  background(255, 249, 237);
  text('I peeled it and shared it with Robert and Dave—\nThey got quarters and I had a half.',width/2, height/2-20);
  if(mouseX > width/2) {
    image(half,width/1.7,height/2.4, width/2.7, width/2.7);
  } 
  if (mouseX < width/2) {
    image(quarter, width/30, height/50,width/3.3,width/3.3);
  }
}