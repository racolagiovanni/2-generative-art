let x = 1;
let y = 1;
let size = 20;
let rectSpeedX = 15;
let rectSpeedY = 15;

var bx = 0
var speed = 10

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(12);
  x = size + 1;
  y = size + 1;
  //background(70, 130, 180);
}

function draw() {
  background(255, 255, 255, 3);
  noStroke();
  strokeWeight(4);
  fill(100, 0, 100)
  ellipse(bx, 200, 75, 75)
    ellipse(bx, 530, 75, 75)
  bx = bx + speed
  
  if (bx > width) {
    speed = -12
  }

  if (bx < 0) {
    speed = 12
  }
  
  stroke(2);
  strokeWeight(2);
  fill(80, 150, 250);
  rect(20, y, 55, 355);
  noStroke();
  
  stroke(2);
  strokeWeight(random(0,10));
  fill(40, 180, 250);
  rect(80, y, 85, 235);
  noStroke();
  
  stroke(2);
  strokeWeight(2);
  fill(70, 180, 230);
  rect(160, y, 35, 155);
  noStroke();
  
  stroke(2);
  strokeWeight(random(0,5));
  fill(40, 180, 250);
  rect(230, y, 55, 275);
  noStroke();
   
  stroke(2);
  strokeWeight(random(0,10));
  fill(70, 180, 200);
  rect(330, y, 115, 275);
  noStroke();
  
  stroke(2);
  strokeWeight(random(0,15));
  fill(40, 180, 250);
  rect(460, y, 100, 235);
  noStroke();
  
  stroke(2);
  strokeWeight(2);
  fill(80, 150, 250);
  rect(550, y, 55, 355);
  noStroke();
  
  stroke(2);
  strokeWeight(random(0,7));
  fill(70, 180, 230);
  rect(630, y, 35, 155);
  noStroke();
  
  stroke(2);
  strokeWeight(random(0,5));
  fill(80, 150, 250);
  rect(670, y, 90, 355);
  noStroke();
  
  fill(random(220, 255), random(50, 255), random(50, 255), random(100, 255));
  square(170, 180, random(390));
  x = x + rectSpeedX;
  y = y + rectSpeedY;
  
  stroke(3);
  fill(200,120,150); 
  rect(160,165,400,400);
  noFill();
  noStroke();
  
  fill(200,120,150); 
  rect(188,200,340,330);
  noFill();
   
  fill(random(220, 255), random(250, 255), random(150, 255), random(200, 255));
  circle(270, 270, random(5, 100));
  noFill();
  
  fill(random(220, 255), random(250, 255), random(150, 255), random(200, 255));
  circle(460, 320, random(5, 50));
  noFill();
  
  fill(random(220, 255), random(250, 255), random(150, 255), random(200, 255));
  circle(400, 480, random(5, 70));
  noFill();
  
  stroke(220,150,200);
  strokeWeight(2);
  line(530, 200, 185, 200);
 
  stroke(140,50,50);
  line(187, 200, 187, 500);

  line(530, 200, 530, 530);
  stroke(250,140,200);
  line(190, 530, 530, 530);
  noStroke();
  
  fill(random(220, 255), random(50, 255), random(50, 255), random(100, 255));
  circle(360, 365, random(330));
  x = x + rectSpeedX;
  y = y + rectSpeedY;

  //AND && OR ||
  
  if (x >= width - size/2 || x <= size/2){
    rectSpeedX=rectSpeedX * -1;
    
    fill(random(255),random(255),random(255));
}
  if (y >= height - size/2 || y <= size/2){
    rectSpeedY=rectSpeedY * -1;
   
   fill(random(255),random(255),random(255));
   strokeWeight(random(0,10));
}
  
}