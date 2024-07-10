function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  background(15,52,92);
  
  //Sun
  noStroke();
  fill(253, 184, 19)
  circle(400,0, 150)
  
  //Moon
  fill(246,241,213)
  circle(200, 550, 500)
  
  
  // Alien body
  fill(32, 132, 240); // Green color
  noStroke();
  ellipse(200, 250, 100, 180); // Body
  
  // Alien Head
  fill(156, 150, 149); // Green color
  noStroke();
  ellipse(200, 130, 100, 150); // Body

  // Alien eyes
  fill(20,231,237); // White color
  ellipse(170, 120, 25, 50); // Left eye
  ellipse(230, 120, 25, 50); // Right eye
  
  // Pupils
  fill(255); // Black color
  ellipse(175, 110, 5, 10); // Left pupil
  ellipse(235, 110,5,10);
  
  // Alien antennae
  stroke(156, 150, 149); // Green color
  strokeWeight(6);
  line(165, 80, 130, 40); // Left antenna
  line(235, 80, 270, 40); // Right antenna
  
  
}
