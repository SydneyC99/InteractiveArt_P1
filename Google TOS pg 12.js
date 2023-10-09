let pdfQuestions = "Question 12: What state governs any legal disputes with Google Services?";
let answers;
let A = "A) California.";
let B = "B) Ohio.";
let C = "C) Kentucky.";
let val;

function setup() {
  noCanvas();
  let p2 = createP ();
  let p =  createP(pdfQuestions);
  
  console.log("Got it!");
  let img = createImg("assets/Page_12.jpg");
  img.parent(p2);
  answers = createRadio();
  answers.option (A);
  answers.option (B);
  answers.option (C);
  answers.class("Answers");
//     call function to load the next image and question
}

function mouseClicked () {
  if (answers.value() == C || answers.value() == B) {
    location.href = "wrongInput12.html";
    console.log("click!");
    console.log(answers.value());
  } 
    else if (answers.value() == A){
    location.href = "page13.html";
  }

  
}