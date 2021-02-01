//to create variables
var hr,mn,sc;
var hr_angle,mn_angle,sc_angle;

function setup() {
  //to create canvas
  createCanvas(400,400);
}

function draw() {
  //to color background
  background(0); 
  
  //calculating time using predefined fun from p5.js
  hr = hour();
  mn = minute();
  sc = second();
  
  //measure angle in degrees
  angleMode(DEGREES);
  
  //compute the angle for the seconds, minutes and hour
  hr_angle = map(hr%12,0,12,0,360);
  mn_angle = map(mn,0,60,0,360);
  sc_angle = map(sc,0,16,0,360);
  
  //hands could easily be drawn 
  translate(200,200);
  
  //to rotate the clock 
  rotate(-90);
  
  //draw the clock hands
  push();
  noFill();
  strokeWeight(9);
  stroke("red");
  arc(0, 0, 300, 300,0,sc_angle );
  rotate(sc_angle);
  line(0,0,100,0);
  pop();

  push();
  noFill();
  strokeWeight(9);
  stroke(1, 252, 10);
  arc(0,0,280,280,0,mn_angle);
  rotate(mn_angle);
  line(0,0,75,0);
  pop();

  push();
  noFill();
  strokeWeight(9);
  stroke(1,2,246);
  arc(0,0,260,260,0,hr_angle);
  rotate(hr_angle);
  line(0,0,75,0);
  pop();

  //to create draw sprites
  drawSprites();
}
