let pdfQuestions = "Question 11: What is Google liable for?";
let answers;
let A = "A) Its own breaches of these terms or service-specific terms.";
let B = "B) Any breaches applied by users or third parties.";
let C = "C) They are not liable for anything.";
let p;
let p2;

function setup() {
  noCanvas();
  p2 = createP ();
  p =  createP(pdfQuestions);
  
  console.log("Got it!");
  let img = createImg("assets/Page_11.jpg");
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
    location.href = "wrongInput11.html";
    console.log("click!");
    console.log(answers.value());
  } 
    else if (answers.value() == A){
    location.href = "page12.html";
  }

  
}