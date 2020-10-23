/*
Screens:
NEW IDEA: Start with BatteryLow screen. Scale down battery to top right. Game becomes finding charge for battery, which goes up with every charge.

1) Hunger Spotlight
Searching for red hunger ball, which grows once you've spotted it. Represents hunger growing once you realize you are hungry.
2) Battery Low
Press spacebar to keep battery from dying. Drag charger to plug it in and charge it.
3) Angry Bubbles
Little white peaceful circles on screen slowly start to turn red and buzz angrily
4) Pattern
Drawing a pattern but number of bristles decreases slowly until you're drawing nothing
5) Vacuum
A bunch of objects fall onto the ground, bouncing everywhere until they all settles on the gound. Then a big vaccuum which is moved by the users mouse collects them all, while the vacuum bag grows in size.
*/

let screen = 1;
let col = 255;
let ball = 50;
var screenFade = 0;
var spot1;
var spot2;
let b;

function setup() {
  createCanvas(800, 800);
  b = new Battery();
  spot1 = new Spotlight(10,10);
}

function draw() {

  if (screen == 1) {
    background(0);
    spot1.display();
  } //Screen 1

  //Screen 2: Battery Low
  if (screen == 2) {
    screenFade = map(batteryLevel, 0, 175, 0, 255);//learned how to use map() from Shiffman's 2.4 p5.js tutorial
    background(screenFade);
    b.display();
    b.batteryLevel();
  } //Screen 2

  if (screen == 3) {
    background(255);
  }//Screen 3
} //draw

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    screen++;
  } //if right arrow is pressed 
  if (keyCode == LEFT_ARROW) {
    screen--;
  }
  if (keyCode == 32) {
    batteryLevel += 5;
    print(batteryLevel);
  } //if spacebar is pressed, increase battery level (AKA rectangle width)
} //keyPressed
//function food() {
//}