function setup() {
  createCanvas(516, 516);
}

function draw() {
  background(255);

  noFill();
  stroke(0);
  strokeWeight(2);
  rect(1, 1, width - 2, height - 2);

  fill(0, 255, 255, 100);
  quad(50, 0, 140, 0, 516, 300, 516, 500);

  fill(255, 255, 0, 100);
  quad(516, 0, 0, 600, 0, 400, 450, 0);

  noFill();
	stroke(0,0,0,200)
  strokeWeight(20);
  ellipse(256, 256, 400, 400);

	noStroke()
	fill(200, 200, 200, 100)
	ellipse(250, 300, 140, 140)
	ellipse(300, 250, 120, 120)
	ellipse(200, 250, 120, 120)
	ellipse(270, 200, 120, 120)
}
