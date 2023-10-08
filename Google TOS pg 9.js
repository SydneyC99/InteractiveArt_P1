let pdfQuestions = "Question 9: Which of these is true of this license?";
let answers;
let A = "A) This license allows you to use Google's branding anywhere at anytime.";
let B = "B) This license is only valid within the United States.";
let C = "C) This license is non-assignable.";
let val;

function setup() {
  noCanvas();
  let p2 = createP ();
  let p =  createP(pdfQuestions);
  
  console.log("Got it!");
  let img = createImg("assets/Page_09.jpg");
  img.parent(p2);
  answers = createRadio();
  answers.option (A);
  answers.option (B);
  answers.option (C);
  answers.class("Answers");
//     call function to load the next image and question
}

function mouseClicked () {
  if (answers.value() == B || answers.value() == A) {
    location.href = "wrongInput9.html";
    console.log("click!");
    console.log(answers.value());
  } 
    else if (answers.value() == C){
    location.href = "page10.html";
  }

  
}