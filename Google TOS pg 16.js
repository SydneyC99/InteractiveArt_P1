let pdfQuestions = "And you're done! Go ahead and Accept and you can use Google's Services! Remember, you can't use these services if you don't accept the TOS!";
let answers;
let A = "A) Google Search.";
let B = "B) Google Maps.";
let C = "C) Google Slides.";
let p;
let p2;
let acceptButton;

function setup() {
  noCanvas();
  p2 = createP ();
  p =  createP(pdfQuestions);
  
  console.log("Got it!");
  let img = createImg("assets/Page_16.jpg");
  img.parent(p2);
  acceptButton = createButton("Accept");
  acceptButton.mousePressed(acceptTerms);
  acceptButton.class ("button");
}


function acceptTerms() {
    location.href = "accept.html";
}