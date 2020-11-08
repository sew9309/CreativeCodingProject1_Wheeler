//Sofia Wheeler
//Professor Bennett 
//Creative Coding Section E Fall 2020
//Project 1

let screen = 1;
var screenFade = 0;
let b;
let energyBall;
let fridge;
let table;
let phone;
let fridgeOpen = false;
let energyBolts = [];
let floor;
let windows;

function setup() {
  createCanvas(1000, 600);
  background(0);
  //spot1 = new Spotlight(100, 0);
  b = new Battery();
  //spot1 = new Spotlight(10, 10);
  energyBolt = new Energy(0, 0, 150);
  fridge = new Fridge();
  table = new Table();
  phone = new Phone();
  floor = new CheckeredFloor();
  windows = new Windows();
}

function draw() {

  if (screen == 1) {
    background(0);
    floor.display();
    fridge.display();
    table.display();
    windows.display();
  
  if (fridgeOpen == true) {
  fridge.empty();
  //dims background
  fill(0, 90);
    rect(width/2, height/2, width, height);
    
  fridge.fridgeLight();
}

else if (fridgeOpen == false) {
  fridge.display();
}//else if fridgeOpen is false

  } //Screen 1

  //Screen 2: Battery Low
  if (screen == 2) {
    screenFade = map(b.level, 0, 175, 0, 255); //learned how to use map() from Shiffman's 2.4 p5.js tutorial
    background(screenFade);
    b.display();
    b.batteryLevel();
    energyBolt.update();
    energyBolt.display();
    energyBolt.checkEdges();
    //energyBolt.clicked();
  } //Screen 2

  if (screen == 3) {
    background(0);
    //fridge.display();
    //fridge.empty();
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
if (mouseX > 175 && mouseX < 220){
	screen = 2;
}
if (mouseX > width/2-100 && mouseX < 600){
  fridgeOpen = !fridgeOpen;
} 
/*for (let i = 0; i <)
energyBolts[i].clicked(); */
}//function mousePressed