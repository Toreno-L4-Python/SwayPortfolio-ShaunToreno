let img;

function preload() {
  img = loadImage('Cat.jpg'); 
}

function setup() {
  createCanvas(400, 400);
  img.resize(400, 400); 
  image(img, 0, 0);
  filter(POSTERIZE, 4);
}

