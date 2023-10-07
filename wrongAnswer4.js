let p;


function setup() {
    p = createP("404 Error");
    p.position(30, 30);
    alert("Nope, that's not it! Try again.");
    
}
//gotta find the loop

function draw(){
    if (frameCount >= 60*5) {
        location.href = "page4.html";
    }
}