let pdfQuestions = "Question 14: Who is defined to be a consumer?";
let answers;
let A = "A) An individual who uses Google services for personal, non-commercial purposes.";
let B = "B) An individual or entity who is not a consumer.";
let C = "C) Anyone who uses Google services.";
let val;

function setup() {
  noCanvas();
  let p2 = createP ();
  let p =  createP(pdfQuestions);
  
  console.log("Got it!");
  let img = createImg("assets/Page_14.jpg");
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
    location.href = "wrongInput14.html";
    console.log("click!");
    console.log(answers.value());
  } 
    else if (answers.value() == A){
    location.href = "page15.html";
  }

  
}