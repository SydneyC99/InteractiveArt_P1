let pdfQuestions = "Question 10: What kind of warranty is provided within this license?";
let answers;
let A = "A) Full coverage.";
let B = "B) There is no warranty provided here.";
let C = "C) Coverage of Google's Maps and Search functions.";
let p;
let p2;

function setup() {
  noCanvas();
  p2 = createP ();
  p =  createP(pdfQuestions);
  
  console.log("Got it!");
  let img = createImg("assets/Page_10.jpg");
  img.parent(p2);
  answers = createRadio();
  answers.option (A);
  answers.option (B);
  answers.option (C);
  answers.class("Answers");
//     call function to load the next image and question
}

function mouseClicked () {
  if (answers.value() == C || answers.value() == A) {
    location.href = "wrongInput10.html";
    console.log("click!");
    console.log(answers.value());
  } 
    else if (answers.value() == B){
    location.href = "page11.html";
  }

  
}