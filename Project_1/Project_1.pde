void setup() {
  size(800,800);
  background(0);
}

void draw() {
  noStroke();
  //ellipse(width/2, 700, 150, 75);
  //fill(255, 5);
  //ellipse(width/2, 700, 175, 100);
  fill(255, 1);
  triangle(250, height, width/2, 100, 550, height);
}
