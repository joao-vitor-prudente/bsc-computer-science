function setup() {
  createCanvas(800, 800);
}

function draw() {
  fill(255, 0, 0);
  strokeWeight(12);
  rect(150, 0, 600, 600);

  fill(255, 255, 255);
  strokeWeight(12);
  rect(0, 0, 150, 300);

  fill(255, 255, 255);
  strokeWeight(12);
  rect(0, 300, 150, 300);

  fill(0, 0, 255);
  strokeWeight(12);
  rect(0, 600, 150, 150);

  fill(255, 255, 255);
  strokeWeight(12);
  rect(150, 600, 525, 150);
  
  fill(255, 255, 255);
  strokeWeight(12);
  rect(675, 600, 75, 75);

  fill(255, 255, 0);
  strokeWeight(12);
  rect(675, 675, 75, 75);
}
