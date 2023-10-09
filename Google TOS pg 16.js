let pdfQuestions = "And you're done! Go ahead and Accept and you can use Google's Services!";
let answers;
let A = "A) Google Search.";
let B = "B) Google Maps.";
let C = "C) Google Slides.";
let acceptButton;

function setup() {
  noCanvas();
  let p2 = createP ();
  let p =  createP(pdfQuestions);
  
  console.log("Got it!");
  let img = createImg("assets/Page_16.jpg");
  img.parent(p2);
  acceptButton = createButton("Accept");
  acceptButton.mousePressed(acceptTerms);
}


function acceptTerms() {
    location.href = "accept.html";
}