let pdfQuestions = "Question 1: Who are you contracting with?";
let answers;
let A = "A) Google LLC";
let B = "B) The Internet";
let C = "C) My Computer";
let val;

function setup() {
  noCanvas();
 
  let p =  createP(pdfQuestions);
  let p2 = createP ();
  console.log("Got it!");
  let img = createImg("assets/ladyBug-00.jpg");
  img.parent(p2);
  answers = createRadio();
  answers.option (A);
  answers.option (B);
  answers.option (C);
  
  // p.mouseClicked(clicked);
  
//     call function to load the next image and question
}

function mouseClicked () {
  if (answers.value() == B || answers.value() == C) {
    location.href = "wrongInput1.html";
    console.log("click!");
    console.log(answers.value());
  } else if (answers.value() == A){
    location.href = "page2.html";
  }

  
}