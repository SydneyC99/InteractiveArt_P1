let pdfQuestions = "Question 5: What does this license cover?";
let answers;
let A = "A) Privacy rights";
let B = "B) Feedback offered to Google.";
let C = "C) Your content if it is protected by IP rights.";
let val;

function setup() {
  noCanvas();
  let p2 = createP ();
  let p =  createP(pdfQuestions);
  
  console.log("Got it!");
  let img = createImg("assets/Page_05.jpg");
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
    location.href = "wrongInput5.html";
    console.log("click!");
    console.log(answers.value());
  } 
    else if (answers.value() == C){
    location.href = "page6.html";
  }

  
}