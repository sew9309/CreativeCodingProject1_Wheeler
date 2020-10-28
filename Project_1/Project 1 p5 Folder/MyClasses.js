//I learned from TA Lilly's workshop to organize all my classes into one MyClasses.js file and call to it in the index script! Thank you Lilly <3
class Energy {
  constructor() {
    this.position = createVector(width/2, height/2);
    this.velocity = createVector();
    this.acceleration = createVector(-0.001, 0.01);
    this.topspeed = 10;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
  }//update() method

  display() {
    fill(255, 204, 0);
    ellipse(this.position.x, this.position.y, 48, 48);
    //triangle(this.position.x, this.position.y, 80, 20, 70, 75); //top of energy bolt
    //triangle(55, 55, 55, 140, 110, 55); //bottom of energy bolt

    //triangle(30, 75, 80, 20, 70, 75); //top of energy bolt
    //triangle(55, 55, 55, 140, 110, 55); //bottom of energy bolt
  }

  checkEdges() {
    if (this.position.x > width) {
      this.position.x = 0;
    }
    else if (this.position.x < 0) {
      this.position.x = width;
    }

    if (this.position.y > height) {
      this.position.y = 0;
    }
    else if (this.position.y < 0) {
      this.position.y = height;
    }
  }

  rain() {
//for (let i = 0; i <0, i++){
  
//}
}//rain() method
}//class Energy

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
      energyBolt.display();
      energyBolt.update();
      energyBolt.checkEdges();
      energyBolt.display();
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

class Fridge {
  constructor(){}
  
  display() {
  //front of fridge
    rectMode(CENTER);
    fill(250, 0, 0);
    rect(width/2, height/2 - 60, 175, 425);
    fill(250, 128, 114);
    rect(width/2, height/2 - 200, 175, 110);//freezer
    rect(width/2, height/2, 175, 280);//fridge
    fill(179, 179, 179);
    rect(width/2 - 70, height/2 - 200, 5, 50);//freezer handle
    rect(width/2 - 70, height/2, 5, 125);//fridge handle
  }
}//class Fridge