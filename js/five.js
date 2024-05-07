var font;
var mappedFill;

function preload(){
  font = loadFont('../IMFell.ttf')
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  textAlign(CENTER);
  textFont(font);
  textSize(30);
}

function draw() {
  background(255, 249, 237);
  mappedFill = map(mouseY, 0, height, 50, 150);
  fill(mappedFill, 100, 40);
  text('This is peace and contentment. It’s new.',width/2, height/2-50)
  
}