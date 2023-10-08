let pdfQuestions = "Question 8: If you are representing an organization, who must agree to these terms?";
let answers;
let A = "A) Anyone who has ever been related to the organization.";
let B = "B) Only the active user.";
let C = "C) An authorized organization representative.";
let val;

function setup() {
  noCanvas();
  let p2 = createP ();
  let p =  createP(pdfQuestions);
  
  console.log("Got it!");
  let img = createImg("assets/Page_08.jpg");
  img.parent(p2);
  answers = createRadio();
  answers.option (A);
  answers.option (B);
  answers.option (C);
  answers.class("Answers");
//     call function to load the next image and question
}

function mouseClicked () {
  if (answers.value() == B || answers.value() == A) {
    location.href = "wrongInput8.html";
    console.log("click!");
    console.log(answers.value());
  } 
//     else if (answers.value() == C){
//     location.href = "page8.html";
//   }

  
}