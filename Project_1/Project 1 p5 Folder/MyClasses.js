//I learned from TA Lilly's workshop to organize all my classes into one MyClasses.js file and call to it in the index script! Thank you Lilly <3
class Energy {
  constructor() {}

  display() {
    fill(255, 204, 0);
    triangle(30, 75, 80, 20, 70, 75); //top of energy bolt
    triangle(55, 55, 55, 140, 110, 55); //bottom of energy bolt
  }

  rain() {

}
}
/*class Spotlight {
  constructor(x2, y2) {
    this.x2 = x2;
    this.y2 = y2;
  } //Spotlight constructor

  display() {
    noStroke();
    fill(255, 204, 0, 50);
    triangle(0, height, this.x2, this.y2, 200, height);
  } //Energy display
} //class Energy
*/

class Battery {
  constructor() {
    this.level = 175;
    this.scale = 1;
    this.col = color(0, 255, 0); //Green battery
    this.x = width / 2;
    this.y = height / 2;
  } //Battery constructor

  batteryLevel() {
    if (this.level > 10) {
      this.level--;
      this.batteryCol = (0, 255, 0);
      fill(this.col);
    } else {
      this.level = 10;
      this.col = color(255, 0, 0);
      background(0, 50);
      this.x = mouseX;
      this.y = mouseY;
      this.scale = 0.5;
      energyBall.display();
      //energyBall.rain();
    }
  } //method batteryLevel

  display() {
    rectMode(CENTER);
    fill(255);
    rect(this.x + 90, this.y, 10, 50, 10); //White notch on battery
    stroke(255);
    strokeWeight(3);
    fill(0, 0);
    rect(this.x, this.y, 175, 75, 10); //Battery outline
    fill(this.col); //Fill battery in with green
    noStroke();
    rectMode(CORNER);
    rect(this.x - 86, this.y - 37, this.level, 73, 10); //Green battery
    scale(this.scale);
  } //method Battery display
} //Class Battery