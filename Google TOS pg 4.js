let pdfQuestions = "Question 4: Who retains intellectual property rights within Google provided services?";
let answers;
let A = "A) I retain the rights.";
let B = "B) Google retains the rights.";
let C = "C) No one has intellectual property rights.";
let p;
let p2;

function setup() {
  noCanvas();
  p2 = createP ();
  p =  createP(pdfQuestions);
  
  console.log("Got it!");
  let img = createImg("assets/Page_04.jpg");
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
    location.href = "wrongInput4.html";
    console.log("click!");
    console.log(answers.value());
  } 
    else if (answers.value() == B){
    location.href = "page5.html";
  }

  
}