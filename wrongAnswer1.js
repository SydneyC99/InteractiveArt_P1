let p;


function setup() {
    p = createP("404 Error");
    p.position(30, 30);
    alert("No , not quite! Good try, though!");
    
}
//should I make the last one into an answer page?

function draw(){
    if (frameCount >= 60*5) {
        location.href = "index.html";
    }
}