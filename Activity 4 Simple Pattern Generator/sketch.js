var r;
var g;
var b;
var sqSize;

function setup() {
  createCanvas(400, 400);
  r = random(100,225);
  g = random(100,225);
  b = random(100,225);
  sqSize1 = random(10,30);
  sqSize2 = random(10,30);
  spacing = random(5);
}

function draw() {
  background(255);
  
  fill(r,g,b); 
  strokeWeight(3);
  rectMode(CENTER);
  
  let space = 50;
  for(x=0;x<width+100;x+=space){
    for(y=0;y<height+100;y+=space){
      square(x,y,sqSize1);
      square(x+space/spacing,y+space/spacing,sqSize2)
    }
  }
}