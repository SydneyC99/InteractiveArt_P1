let pdfQuestions = "Question 3: How can you export your content from your Google Account";
let answers;
let A = "A) The Export Button in Google Apps";
let B = "B) Copy and Paste";
let C = "C) Using Google Takeout";
let val;

function setup() {
  noCanvas();
  let p2 = createP ();
  let p =  createP(pdfQuestions);
  
  console.log("Got it!");
  let img = createImg("assets/Page_03.jpg");
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
    location.href = "wrongInput2.html";
    console.log("click!");
    console.log(answers.value());
  } 
//     else if (answers.value() == C){
//     location.href = "page4.html";
//   }

  
}