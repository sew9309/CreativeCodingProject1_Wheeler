let screen = 1;
var screenFade = 0;
let b;
let energyBall;
let fridge;

function setup() {
  createCanvas(1500, 600);
  background(0);
  //spot1 = new Spotlight(100, 0)
  b = new Battery();
  //spot1 = new Spotlight(10, 10);
  energyBolt = new Energy();
  fridge = new Fridge();
}

function draw() {

  if (screen == 1) {
    fridge.display();
  } //Screen 1

  //Screen 2: Battery Low
  if (screen == 2) {
    screenFade = map(b.level, 0, 175, 0, 255); //learned how to use map() from Shiffman's 2.4 p5.js tutorial
    background(screenFade);
    b.display();
    b.batteryLevel();
  } //Screen 2

  if (screen == 3) {
    background(0);
    fridge.display();
    fridge.empty();
  }//Screen 3

  if (screen ==4) {

  }//Screen 4
} //draw

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    screen++;
  } //if right arrow is pressed 
  if (keyCode == LEFT_ARROW) {
    screen--;
  }
  if (keyCode == 32) {
    b.level += 5;
  } //if spacebar is pressed, increase battery level (AKA rectangle width)
} //keyPressed

function mousePressed() {
	fridge.clicked();
}