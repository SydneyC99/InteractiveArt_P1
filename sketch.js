let height;
let width;

function setup() {
  width = windowWidth;
  height = windowHeight;
  createCanvas(width, height);
  background(225);
  text("I love Lucy", 50, 50);
}

function draw() {
  
}

function windowResized() {
  width = windowWidth;
  height = windowHeight;
  resizeCanvas(width,height);
}

function displayTOS() {
  
}