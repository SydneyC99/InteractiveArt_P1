let pdfQuestions = ("Question 1: Who are you contracting with?");
let answers;
let A = ("Google LLC");
let B = ("The Internet");
let C = ("My Computer");
let val;
// #declare array of images
// let questions = ["q1", "q2", "q3"];
// #declare array of questions (just the text like "What does Google have access to in....")
//let answers = ["a1", "a2", "a3"];
// #declare array of the correct answers


function setup() {
  noCanvas();
  // let button = createButton("A");
  // button.mouseClicked(loadNextPage);
  let p =  createP(pdfQuestions);
  let p2 = createP ();
  console.log("Got it!");
  let img = createImg("assets/ladyBug-00.jpg");
  img.parent(p2);
  answers = createRadio();
  answers.option ('A)' + " " + A);
  answers.option ('B)' + " " + B);
  answers.option ('C)' + " " + C);
  let val = answers.value();
  // p.mouseClicked(clicked);
  
//     #call function to load the next image and question
}

function mouseClicked () {
  // if (condition) {
    location.href = "page2.html";
  // }
    
  
  console.log("click!");
}