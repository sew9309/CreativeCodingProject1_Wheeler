//I learned from TA Lilly's workshop to organize all my classes into one MyClasses.js file and call to it in the index script! Thank you Lilly <3

class Spotlight {
  constructor(x2, y2) {
  this.x2 = x2;
  this.y2 = y2;
  }//Spotlight constructor

  display() {
    background(0);
    noStroke();
    fill(255, 204, 0, 50);
    triangle(0, height, this.x2, this.y2, 200, height);
  }//Spotlight display
}//class Spotlight
//going to use a for loop to make the spotlights sweep from side to side and change directions when they hit the top of the screen


class Battery {
  constructor() {
  this.level = 175;  
  }//Battery constructor
  
  batteryLevel() {
  if (this.level > 10) {
      this.level--;
    } else if (this.level < 11) {
      this.level = 10;
      fill(255, 0, 0);
      rect(314, 363, this.level, 73, 10); //Green battery
      background(0, 50);
    }  
  }//method batteryLevel
  
  display() {
  rectMode(CENTER);
    fill(255);
    rect(490, height / 2, 10, 50, 10); //White notch on battery
    stroke(255);
    strokeWeight(3);
    fill(0, 0);
    rect(width / 2, height / 2, 175, 75, 10); //Battery outline
  //for (batteryLevel = 175; batteryLevel > 0; batteryLevel--){
    fill(0, 255, 0); //COLOR GREEN BATTERY
    //fill(batteryCol)
    noStroke();
    rectMode(CORNER);
    rect(314, 363, this.level, 73, 10); //Green battery
  }//Battery display
}//Class Battery