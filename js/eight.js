var font;
var oranges;

function preload(){
  font = loadFont('IMFell.ttf');
  oranges = loadImage('img/oranges.png');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  textFont(font);
  textSize(25);
  textAlign(CENTER);
}

function draw() {
  background(220);
    background(255, 249, 237);
  image(oranges, 0,0,width, height-100)
  text('I love you.', width/2, height/2-60);
  if (keyIsPressed) {
  text("I'm glad I exist.", width/2, height/2-10)
  }
}