var font;
var orange;

function preload(){
  font = loadFont('../IMFell.ttf');
  orange = loadImage('../img/orange.png');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  textAlign(CENTER);
  textFont(font);
  textSize(30);
  background(255, 249, 237);
}

function draw() {
  text('And that orange, it made me so happy,\nAs ordinary things often do', width/2, height/2-50)
  if (mouseIsPressed){
  image(orange, mouseX, mouseY, 100, 100);
  }
}