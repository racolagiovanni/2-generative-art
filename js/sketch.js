let x
let y
let size = x+1

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(20)
}

function draw() {
  background(60, 150, 190);
  circle(width/2,height/2,random(200));
  circle(random(5,50), random(5,50), random(5,50));
  fill(random(0,255), random(0,255), random(0,255), random(0,255));
  
}