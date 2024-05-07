var font;
var orange;
var table;

function preload(){
  font = loadFont('../IMFell.ttf');
  orange = loadImage('../img/orange.png');
  table = loadImage('../img/table.png');
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  textFont(font);
  textSize(30);
}

function draw() {
  background(255, 249, 237);
  text('At lunchtime I bought a huge orange—\nThe size of it made us all laugh.', width/14, width/7);
  image(table, 0, height/8, height-90,height-90);
  if (mouseX < 250){
  image(orange, width/1.95, height/2.5, height-500, height-500);
  }else{
    image(orange, width/2.2, height/4.2, width/2, width/2);
  }

  if (mouseX > width-200){
  createA('two.html','next');
  }
}
