var font;
var bag;
var bagg;
var park;

function preload(){
  font = loadFont('../IMFell.ttf');
  park = loadImage('../img/park.png');
  bag = loadImage('../img/bag1.png');
  bagg = loadImage('../img/bag2.png');
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  textAlign(CENTER);
  textFont(font);
  textSize(30);
}

function draw() {
  background(255, 249, 237);
  if (keyIsPressed) {
  text('Just lately. A walk in the park.',width/2, height/2-50);
    image(park,width-700,0,height-200,height-100);
  } else {
  text('Just lately. The shopping.',width/2, height/2-50);
  image(bag, height,height/2.5,height/2,height/2);
  image(bagg, height/70, 0, height/2,height/2.5);
  }
}

