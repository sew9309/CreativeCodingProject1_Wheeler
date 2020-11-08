//I learned from TA Lilly's workshop to organize all my classes into one MyClasses.js file and call to it in the index script! Thank you Lilly <3
class Energy {
  constructor(x, y, r) {
    this.position = createVector(random(width), 0);
    this.velocity = createVector();
    this.acceleration = createVector(-0.001, 0.01);
    /*this.x = x;
    this.y = y;
    this.r = r;
    this.r = 150;*/
  }//energy constructor

  update() { //learned from acceleration portion of Nature of Code
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
  }//update() method

  display() {
    fill(255);
    ellipse(this.position.x + 40, this.position.y + 10, 150);
    fill(255, 204, 0);
    triangle(this.position.x, this.position.y, this.position.x + 50, this.position.y - 55, this.position.x + 40, this.position.y); //top of energy bolt
    triangle(this.position.x + 30, this.position.y - 10, this.position.x + 30, this.position.y + 75, this.position.x + 85, this.position.y - 10); //bottom of energy bolt

//original hard coded drawing of lightning bolt
    //triangle(30, 75, 80, 20, 70, 75); //top of energy bolt
    //triangle(55, 55, 55, 140, 110, 55); //bottom of energy bolt
  }//energy display

  checkEdges() {
    if (this.position.x > width + 1000) {
      this.position.x = 0;
    }
    else if (this.position.x < 0) {
      this.position.x = width;
    }

    if (this.position.y > height + 500) {
      this.position.y = 0;
    }
    else if (this.position.y < 0) {
      this.position.y = height;
    }
  }

  /*clicked(px, py) {
      let d = dist(px, py, this.x, this.y);
      if (d < this.r){
        console.log("CLICKED ON ENERGY BOLT!");
      }//checking to see if mouse is clicking energyBolt. If these distance is less than the radius, then it is touching the object.
    }//energy clicked */

  //rain() {
//for (let i = 0; i <0, i++){
  
//}
//}//rain() method
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
      this.y = 500;
      this.scale = 0.5;
      energyBolt.display();
      energyBolt.update();
      energyBolt.checkEdges();
      energyBolt.display();
      //energyBall.rain();
    }//else
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
    rect(width/2, height/2 - 60, 175, 425);//
    fill(250, 128, 114);//salmon color
    rect(width/2, height/2 - 200, 175, 110);//freezer
    rect(width/2, height/2, 175, 280);//fridge
    fill(179, 179, 179);//silver
    rect(width/2 - 70, height/2 - 200, 5, 50);//freezer handle
    rect(width/2 - 70, height/2, 5, 125);//fridge handle
  }//fridge display

  empty() { //displays an empty fridge
    fill(255);//white
    rect(width/2, height/2 - 200, 160, 90, 2);//white freezer case
    rect(width/2, height/2, 160, 260, 2);//white fridge case
    fill(230);//gray for shelves
    rect(width/2, height/2 - 220, 160, 35);//top freezer shelf
    rect(width/2, height/2 - 180, 160, 35);//bottom freezer shelf
    rect(width/2, height/2 - 90, 160, 60);//fridge shelf 1
    rect(width/2, height/2 - 25, 160, 60);//fridge shelf 2
    rect(width/2, height/2 + 40, 160, 60);//fridge shelf 3
    rect(width/2, height/2 + 100, 160, 45);//fridge shelf 4

    //door
    fill(179, 179, 179);//silver
    rect(width/2 + 90, height/2 - 235, 10, 5);//top freezer hinge
    rect(width/2 + 90, height/2 - 160, 10, 5);//bottom freezer hinge
    fill(250, 128, 114);//salmon color
    rect(width/2 + 180, height/2 - 200, 175, 110, 2);//freezer door
    rect(width/2 + 180, height/2, 175, 280, 2);//frige door
    fill(220);
    rect(width/2 + 180, height/2 - 200, 160, 90, 2);//freezer door case
    rect(width/2 +180, height/2, 160, 260, 2);//fridge door case
    rect(width/2 + 90, height/2 - 115, 10, 5);//top fridge hinge
    rect(width/2 + 90, height/2 + 125, 10, 5);//top fridge hinge
  }//empty method

  fridgeLight(){
    noStroke();
    fill(255, 204, 0, random(45, 80));
    triangle(width/2 - 80, height/2 + 130, width/2, height/2 - 130, width/2 + 80, height/2 + 130);
  }//fridge light method

  clicked() {
  	fridge.empty();
  }//fridge clicked
}//class Fridge

class Table {
  	constructor(){
  		this.x1 = 200;
  		this.y1 = 300;
  	}

  	display(){
  		//legs
      fill(139, 69, 19);//brown
  		rect(this.x1 - 55, this.y1 + 50, 50, 100);//back left leg
  		rect(this.x1 + 55, this.y1 + 50, 50, 100);//back right leg
      //below is black legs drawn on top of brown table legs to create dimension. Couldn't use alpha because checkerboard was visible in table legs.
      fill(0, 85);//black opaque
      rect(this.x1 - 55, this.y1 + 50, 50, 100);//back left leg
      rect(this.x1 + 55, this.y1 + 50, 50, 100);//back right leg

      fill(150, 69, 19);//brown
  		rect(this.x1 + 100, this.y1 + 100, 50, 100);//front right leg
  		rect(this.x1 - 100, this.y1 + 100, 50, 100);//front left leg
      fill(143, 69, 19);//brown
  		rect(this.x1, this.y1, 250, 100);//tabletop

  		phone.display();
  	}
  }//class Table

  class Phone {
  	constructor(){}

	display(){
		fill(0);
  		rect(200, 300, 35, 60, 5);//phone border
  		fill(255);
  		rect(200, 300, 30, 55, 5);//phone screen
  		fill(0);
  		rect(200, 273, 17, 5, 5);//phone notch

  	}//phone display
  }//class Phone

  class CheckeredFloor { //credit: allison.parrish "checkerboard"
    constructor(){}

    display(){
    for (let i = 0; i < width; i += 75) {
    for (let j = height/2 + 25; j < height; j += 75) {
      if (j % 2 == 0) {
        if (i % 2 == 0) {
          fill(0);
        }//if i even
        else {
          fill(255);
        }//else white
      }//if j even
      else {
        if (i % 2 == 0) {
          fill(255);
        }//else white
        else {
          fill(0);
        }//else black
      }//else i and j are not even
      noStroke();
      rectMode(CORNER);
      rect(i, j, 75, 75);
    }//for j
  }//for i
}//display CheckeredFloor
  }//class CheckeredFloor

  class Windows {
    constructor() {}

    display() {
    fill(255, 112, 52);//burnt orange
    rect(800, 125, 150, 175);//orange window
    fill(184, 188, 134);//olive green window panel color
    rect(800, 125, 10, 175);//center vertical window panel
    rect(800, 125, 150, 10);//center hortizontal window panel
  }
  }