let img;

function preload() {
  img = loadImage('Cat.jpg'); 
}

function setup() {
  createCanvas(400, 400);
  img.resize(400, 400); 
  background(209, 173, 31); 
  let maskImg = createGraphics(width, height);
  maskImg.noStroke();
  maskImg.fill(255);
  maskImg.ellipse(200, 160, 200, 200); 
  img.mask(maskImg);
  image(img, 0, 0);
}


