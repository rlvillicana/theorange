var font;
var list;

function preload(){
  font = loadFont('../IMFell.ttf');
  list =loadImage('../img/list.png');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  textFont(font);
  textSize(30);
}

function draw() {
  background(255, 249, 237);
  text('The rest of the day was quite easy.\nI did all the jobs on my list.', width/10, width/7);
  image(list, width/2,mouseY,width/2.3,height-70)
}