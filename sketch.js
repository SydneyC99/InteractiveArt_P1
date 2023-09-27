let height;
let width;
let pdf1;
let pdf2;
let input = false;

function preload() {
  pdf1 = loadStrings('assets/GoogleTOS.txt');
  pdf2 = loadStrings('assets/GoogleTOS_2.txt');
}

function setup() {
  width = windowWidth;
  height = windowHeight;
  createCanvas(width, height);
  
}

function draw() {
  background(225);
  text(pdf1, 50, 50, 300, 300);
  text(pdf2, 50, 320, 300, 300);
  showInput();
}

function windowResized() {
  width = windowWidth;
  height = windowHeight;
  resizeCanvas(width,height);
}

function showInput() {
  if (input === false) {
    input = createInput("Answer Here");
    input = true;
  }
}