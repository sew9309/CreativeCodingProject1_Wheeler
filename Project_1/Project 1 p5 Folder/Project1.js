/*Adjective: Hungry

Screens:
1) Hunger Spotlight
Searching for red hunger ball, which grows once you've spotted it. Represents hunger growing once you realize you are hungry.
2) Battery Low
Press spacebar to keep battery from dying.
3) Angry Bubbles
Little white peaceful circles on screen slowly start to turn red and buzz angrily
4) Pattern
Drawing a pattern but number of bristles decreases slowly until you're drawing nothing
5) Vacuum
A bunch of objects fall onto the ground, bouncing everywhere until they all settles on the gound. Then a big vaccuum which is moved by the users mouse collects them all, while the vacuum bag grows in size.
*/

let screen = 1;
let batteryLevel = 175;
//let batteryCol = color(255, 0, 0);
let col = 255;
let hungerBall = 50;

function setup() {
  createCanvas(800, 800);
}

function draw() {

  if (screen == 1) {
    background(0);
    noStroke();
    fill(255, 204, 0, 50);
    triangle(mouseX - 100, height, width / 4, 0, mouseX + 100, height);
    triangle(mouseX - 100, height, (width / 4) * 3, 0, mouseX + 100, height);
    fill(255, 0, 0);
    if (mouseX == (300, 400)) {
      circle(width / 2, 700, hungerBall);
      hungerBall++;
    }
  } //Screen 1

  //Screen 2: Battery Low
  if (screen == 2) {
    background(0);
    rectMode(CENTER);
    fill(255);
    rect(490, height / 2, 10, 50, 10); //White notch on battery
    stroke(255);
    strokeWeight(3);
    fill(0, 0);
    rect(width / 2, height / 2, 175, 75, 10);//Battery outline
    
    //for (batteryLevel = 175; batteryLevel > 0; batteryLevel--){
    fill(0, 255, 0); //COLOR GREEN BATTERY
    //fill(batteryCol)
    noStroke();
    rectMode(CORNER);
    rect(313, 363, batteryLevel, 75, 10); //Green battery
    
    
    //for loop wasn't working for some reason!!
    if (batteryLevel > 10){
    batteryLevel--;}
    else if (batteryLevel < 11){
      batterylevel = 10;
      fill(255, 0, 0);
      rect(313, 363, batteryLevel, 75, 10); //Green battery
      background(0, 50);
    }
    
    
    //}//for batteryLevel decreasing
  } //Screen 2
  
  if(screen == 3) {
    background(255);
  }
} //draw

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    screen++;
  } //if right arrow is pressed 
  if (keyCode == 32) {
    batteryLevel+= 5;
  print(batteryLevel);
}//if spacebar is pressed, increase battery level (AKA rectangle width)
} //keyPressed
//function food() {
//}