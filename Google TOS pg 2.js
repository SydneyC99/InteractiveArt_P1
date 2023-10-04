let pdfQuestions = "Question 2: B is the right answer.";
let answers;
let A = "A) Wrong";
let B = "B) B";
let C = "C) Right";
let val;

function setup() {
  noCanvas();
 
  let p =  createP(pdfQuestions);
  let p2 = createP ();
  console.log("Got it!");
  let img = createImg("assets/Page_02.jpg");
  img.parent(p2);
  answers = createRadio();
  answers.option (A);
  answers.option (B);
  answers.option (C);
  
//     call function to load the next image and question
}

function mouseClicked () {
  if (answers.value() == A || answers.value() == C) {
    location.href = "wrongInput2.html";
    console.log("click!");
    console.log(answers.value());
  } 
//     else if (answers.value() == A){
//     location.href = "page2.html";
//   }

  
}