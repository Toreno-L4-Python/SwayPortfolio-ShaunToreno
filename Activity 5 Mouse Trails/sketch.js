let ripples = [];
var r;
var g;
var b;

function setup() {
  createCanvas(400, 400);
  noFill(255,255,255);
  stroke(255, 255, 255); // Blue color for the ripples
  strokeWeight(2);
  frameRate(25);

}

function draw() {
  background(0);
  
  
    ripples.push({ x: mouseX, y: mouseY, size: 10, alpha: 255 });

  
  // Draw and update all ripples
  for (let i = ripples.length - 1; i >= 0; i--) {
    let ripple = ripples[i];
    stroke(255, 255, 255, ripple.alpha);
    ellipse(ripple.x, ripple.y, ripple.size);
    
    // Update ripple properties
    ripple.size += 2; // Increase size
    ripple.alpha -= 5; // Decrease alpha (fade out)
    
    // Remove ripple if it's completely faded
    if (ripple.alpha <= 0) {
      ripples.splice(i, 1);
    }
  }
}