let img;  
let circles = [];  

function preload() {
  img = loadImage('Cat.jpg'); 
}

function setup() {
  createCanvas(400, 400);
  image(img, 0, 0, width, height); 
}

function draw() {
  background(220);
  image(img, 0, 0, width, height); 

 
  noStroke();
  for (let i = 0; i < circles.length; i++) {
    fill(circles[i].color);
    ellipse(circles[i].x, circles[i].y, 50, 50); 
  }
}

function mousePressed() {
  
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    
    let x = int(mouseX * img.width / width);
    let y = int(mouseY * img.height / height);
    let c = img.get(x, y);
    
    
    circles.push({
      x: mouseX,
      y: mouseY,
      color: c
    });
  }
}
