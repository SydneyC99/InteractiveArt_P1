let pdfQuestions = "Question 6: Which of these is a right provided by the lisence?";
let answers;
let A = "A) Modify or create derivitive works based on your content.";
let B = "B) Right to privacy and safety.";
let C = "C) Right to remove others' content.";
let val;

function setup() {
  noCanvas();
  let p2 = createP ();
  let p =  createP(pdfQuestions);
  
  console.log("Got it!");
  let img = createImg("assets/Page_06.jpg");
  img.parent(p2);
  answers = createRadio();
  answers.option (A);
  answers.option (B);
  answers.option (C);
  answers.class("Answers");
//     call function to load the next image and question
}

function mouseClicked () {
  if (answers.value() == B || answers.value() == C) {
    location.href = "wrongInput6.html";
    console.log("click!");
    console.log(answers.value());
  } 
//     else if (answers.value() == A){
//     location.href = "page6.html";
//   }

  
}