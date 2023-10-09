let pdfQuestions = "Question 15: Which of these is defined here as an Integrated Service?";
let answers;
let A = "A) Google Search.";
let B = "B) Google Maps.";
let C = "C) Google Slides.";
let val;

function setup() {
  noCanvas();
  let p2 = createP ();
  let p =  createP(pdfQuestions);
  
  console.log("Got it!");
  let img = createImg("assets/Page_15.jpg");
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
    location.href = "wrongInput15.html";
    console.log("click!");
    console.log(answers.value());
  } 
    else if (answers.value() == B){
    location.href = "page16.html";
  }

  
}