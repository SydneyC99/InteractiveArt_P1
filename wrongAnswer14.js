let p;


function setup() {
    p = createP("404 Error");
    p.position(30, 30);
    alert("What is wrong with you???");
    
}
//gotta find the loop

function draw(){
    if (frameCount >= 60*5) {
        location.href = "page14.html";
    }
}