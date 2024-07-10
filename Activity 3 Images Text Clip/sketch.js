let img;
let maskGraphic;

function preload() {
  img = loadImage('Cat.jpg');  // Load the image you want to apply the mask to
}

function setup() {
  createCanvas(400, 400);
  
  // Resize the image to fit the canvas
  img.resize(400, 400);
  
  // Create a graphics buffer to hold the text mask
  maskGraphic = createGraphics(400, 400);
  
  // Set the text properties
  maskGraphic.textSize(128);
  maskGraphic.textAlign(CENTER, CENTER);
  maskGraphic.fill(225);  // White text on a black background to create the mask
  maskGraphic.text('Cat', width / 2, height / 2);
  
  // Apply the mask to the image
  img.mask(maskGraphic);
  
  // Display the image with the mask applied
  image(img, 0, 0);
}

