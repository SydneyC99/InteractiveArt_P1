let p;


function setup() {
    p = createP("404 Error");
    p.position(30, 30);
    alert("Nope that's not it! Try again.");
    
}
//should I make the last one into an answer page?

function draw(){
    if (frameCount >= 60*5) {
        location.href = "index.html";
    }
}