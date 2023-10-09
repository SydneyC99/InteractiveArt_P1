let pdfQuestions = "Question 7: How long does this license last?";
let answers;
let A = "A) As long as your content is protected by Intellectual Property Rights.";
let B = "B) Forever.";
let C = "C) For 1 year after you accept the terms.";
let p;
let p2;

function setup() {
  noCanvas();
  p2 = createP ();
  p =  createP(pdfQuestions);
  
  console.log("Got it!");
  let img = createImg("assets/Page_07.jpg");
  img.parent(p2);
  answers = createRadio();
  answers.option (A);
  answers.option (B);
  answers.option (C);
  answers.class("Answers");
//     call function to load the next image and question
}

function mouseClicked () {
  if (answers.value() == B || answers.value() == C) {
    location.href = "wrongInput7.html";
    console.log("click!");
    console.log(answers.value());
  } 
    else if (answers.value() == A){
    location.href = "page8.html";
  }

  
}