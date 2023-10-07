let pdfQuestions = "Question 1: Why should you be reading this TOS?";
let answers;
let A = "A) To establish what you can expect from Google services.";
let B = "B) Because it's the right thing to do.";
let C = "C) Might as well while you're here.";
let val;
let p;
let p2;

function setup() {
  noCanvas();
  p2 = createP ();
  p =  createP(pdfQuestions);
  
  console.log("Got it!");
  let img = createImg("assets/Page_01.jpg");
  img.parent(p2);
  answers = createRadio();
  answers.option (A);
  answers.option (B);
  answers.option (C);
  answers.class("Answers");
  // p.mouseClicked(clicked);
  
//     call function to load the next image and question
}

function mouseClicked () {
  if (answers.value() == B || answers.value() == C) {
    location.href = "wrongInput1.html";
    console.log("click!");
    console.log(answers.value());
  } else if (answers.value() == A){
    location.href = "page2.html";
  }

  
}