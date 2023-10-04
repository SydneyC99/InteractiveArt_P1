let pdfQuestions = ("Question 1: Who are you contracting with?");
let i = 0;
// #declare array of images
// let questions = ["q1", "q2", "q3"];
// #declare array of questions (just the text like "What does Google have access to in....")
//let answers = ["a1", "a2", "a3"];
// #declare array of the correct answers


function setup() {
  noCanvas();
  // let button = createButton("A");
  // button.mouseClicked(loadNextPage);
  let p =  createP(pdfQuestions);
  let p2 = createP ();
  console.log("Got it!");
  let img = createImg("assets/ladyBug-00.jpg");
  img.parent(p2);
  
//     #call function to load the next image and question
}




// function loadNextPage(parameter of the current image number?) {
//     # check that we aren't over the bounds of the array
//     # load the image
//     # load the radio buttons (maybe call a function to do this for you?)
// }
// function createRadioButtons(pdfPages, questions) {
  
// }
// function createRadioButtons(parameter of current image/question number) {
//     # use the createButton function from p5.js
//     # create a submit button for the question
//     # set the mousePressed to check if the answer was right
//     # by referring to the answer array we declared at the beginning
//     # if it's right, call loadNextPage
// }