let screen = 2;
var screenFade = 0;
//var spot1;
//var spot2;
let b;
let energyBall;

function setup() {
  createCanvas(800, 800);
  background(0);
  //spot1 = new Spotlight(100, 0)
  b = new Battery();
  //spot1 = new Spotlight(10, 10);
  energyBall = new Energy();
}

function draw() {

  if (screen == 1) {
    //spot1.display();
  } //Screen 1


  //Screen 2: Battery Low
  if (screen == 2) {
    screenFade = map(b.level, 0, 175, 0, 255); //learned how to use map() from Shiffman's 2.4 p5.js tutorial
    background(screenFade);
    b.display();
    b.batteryLevel();
  } //Screen 2

  if (screen == 3) {
    background(255);
  }
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
//function food() {
//}