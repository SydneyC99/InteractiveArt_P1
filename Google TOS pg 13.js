let pdfQuestions = "Question 13: If these terms conflict with service-specific additional terms, which terms will govern for the service?";
let answers;
let A = "A) These terms.";
let B = "B) They will cancel each other out.";
let C = "C) The additional terms.";
let val;

function setup() {
  noCanvas();
  let p2 = createP ();
  let p =  createP(pdfQuestions);
  
  console.log("Got it!");
  let img = createImg("assets/Page_13.jpg");
  img.parent(p2);
  answers = createRadio();
  answers.option (A);
  answers.option (B);
  answers.option (C);
  answers.class("Answers");
//     call function to load the next image and question
}

function mouseClicked () {
  if (answers.value() == A || answers.value() == B) {
    location.href = "wrongInput13.html";
    console.log("click!");
    console.log(answers.value());
  } 
    else if (answers.value() == C){
    location.href = "page14.html";
  }

  
}