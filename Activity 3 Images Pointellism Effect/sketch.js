let img;

function preload() {
  img = loadImage('Cat.jpg');
}

function setup() {
  createCanvas(400, 400);
  img.resize(400, 400);
  noLoop();
  img.loadPixels();
  let dotSize = 5;
  for (let x = 0; x < width; x += dotSize) {
    for (let y = 0; y < height; y += dotSize) {
      let c = img.get(x, y);
      fill(c);
      noStroke();
      ellipse(x, y, dotSize, dotSize);
    }
  }
}
