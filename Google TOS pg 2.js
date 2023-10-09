let pdfQuestions = "Question 2: Who are you contracting with?";
let answers;
let A = "A) The Internet";
let B = "B) Google LLC";
let C = "C) My Computer";
let p;
let p2;

function setup() {
  noCanvas();
  p2 = createP ();
  p =  createP(pdfQuestions);
  
  console.log("Got it!");
  let img = createImg("assets/Page_02.jpg");
  img.parent(p2);
  answers = createRadio();
  answers.option (A);
  answers.option (B);
  answers.option (C);
  answers.class("Answers");
//     call function to load the next image and question
}

function mouseClicked () {
  if (answers.value() == A || answers.value() == C) {
    location.href = "wrongInput2.html";
    console.log("click!");
    console.log(answers.value());
  } 
    else if (answers.value() == B){
    location.href = "page3.html";
  }

  
}