import p5 from "p5";

const theme = {
  green400: "#4ade80",
  green500: "#22c55e",
  green600: "#16a34a",
  sky50: "#f0f9ff",
  sky100: "#e0f2fe",
  sky200: "#bae6fd",
  sky400: "#38bdf8",
  sky500: "#0ea5e9",
  sky600: "#0284c7",
  yellow400: "#facc15",
  yellow500: "#eab308",
  yellow600: "#ca8a04",
  stone400: "#a8a29e",
  stone500: "#78716c",
  stone600: "#57534e",
  brown400: "#9A5B36",
  brown500: "#804522",
  brown600: "#633319",
  red400: "#f87171",
  red500: "#ef4444",
  red600: "#dc2626",
};

new p5((p: p5) => {
  p.setup = () => {
    p.createCanvas(1024, 576);
    p.noStroke();
  };

  p.draw = () => {
    drawBackground(p);
    withTransform(p, drawSun, { translate: { x: 60, y: 60 } });
    withTransform(p, drawCloud, { translate: { x: 200, y: 100 } });
    withTransform(p, drawMountain, { translate: { x: 500, y: 432 } });
    withTransform(p, (p) => drawTree(p, 100), {
      translate: { x: 800, y: 432 },
    });
    withTransform(p, drawCanion, { translate: { x: 100, y: 432 } });
    withTransform(p, drawItem, { translate: { x: 400, y: 432 } });
  };
});

interface TransformOptions {
  translate?: { x: number; y: number };
  scale?: number;
  rotate?: number;
}

function withTransform(
  p: p5,
  shape: (p: p5) => void,
  transform: TransformOptions,
) {
  p.push();
  if (transform.translate)
    p.translate(transform.translate.x, transform.translate.y);
  if (transform.scale) p.scale(transform.scale);
  if (transform.rotate) p.rotate(transform.rotate);
  shape(p);
  p.pop();
}

function drawSun(p: p5) {
  p.fill(theme.yellow500);
  p.stroke(theme.yellow400);
  p.strokeWeight(4);
  p.circle(0, 0, 50);
  p.stroke(theme.yellow400);
  for (const _ of Array.from({ length: 8 })) {
    p.line(40, 0, 50, 0);
    p.rotate(p.TWO_PI / 8);
  }
  p.noStroke();
}

function drawBackground(p: p5) {
  p.background(theme.sky500);
  p.fill(theme.sky400);
  p.rect(0, 0, 1024, 144);
  p.fill(theme.sky600);
  p.rect(0, 432, 1024, -144);
  p.fill(theme.green500);
  p.rect(0, 432, 1024, 144);
  p.fill(theme.green600);
  p.rect(0, 432, 1024, 144 / 3);
  p.fill(theme.green400);
  p.rect(0, 576, 1024, -144 / 3);
}

function drawCloud(p: p5) {
  p.fill(theme.sky200);
  p.rect(25, 40, 50, 11);
  p.fill(theme.sky200);
  p.circle(74, 34, 34);
  p.fill(theme.sky100);
  p.circle(50, 25, 50);
  p.fill(theme.sky50);
  p.circle(25, 31, 40);
}

function drawMountain(p: p5) {
  function drawPeak() {
    p.fill(theme.stone500);
    p.triangle(0, 0, 50, -150, 100, 0);
    p.fill(theme.stone400);
    p.triangle(0, 0, 50, -150, 30, 0);
    p.fill(theme.stone600);
    p.triangle(70, 0, 50, -150, 100, 0);
  }
  withTransform(p, drawPeak, { scale: 0.8 });
  withTransform(p, drawPeak, { translate: { x: 90, y: 0 }, scale: 0.7 });
  withTransform(p, drawPeak, { translate: { x: 30, y: 0 } });
}

function drawCanion(p: p5) {
  p.fill(theme.stone500);
  p.triangle(0, 0, 35, 150, 70, 0);
  p.fill(theme.stone600);
  p.triangle(0, 0, 35, 150, 20, 0);
  p.fill(theme.stone400);
  p.triangle(50, 0, 35, 150, 70, 0);
}

function drawItem(p: p5) {
  p.fill(theme.red500);
  p.arc(0, -30, 40, 60, p.PI, p.TWO_PI, p.PIE);
  p.fill(theme.red600);
  p.ellipse(0, -30, 40, 20);
  p.fill(theme.brown600);
  p.rect(-5, -30, 10, 30);
  p.arc(0, -30, 10, 10, p.PI, p.TWO_PI, p.PIE);
}

function drawTree(p: p5, trunkHeight: number = 100) {
  p.fill(theme.brown500);
  p.rect(40, 0, 20, -trunkHeight);
  p.fill(theme.brown400);
  p.triangle(40, -trunkHeight + 30, 40, 0, 55, 0);
  p.fill(theme.brown600);
  p.triangle(40, -trunkHeight, 60, -20, 60, -trunkHeight);
  const foliageY = -50 - trunkHeight;
  p.fill(theme.brown600);
  p.rect(25, foliageY + 40, 50, 11);
  p.fill(theme.green600);
  p.circle(74, foliageY + 34, 34);
  p.fill(theme.green500);
  p.circle(50, foliageY + 25, 50);
  p.fill(theme.green400);
  p.circle(25, foliageY + 31, 40);
}
