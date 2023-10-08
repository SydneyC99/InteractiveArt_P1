let p;


function setup() {
    p = createP("404 Error");
    p.position(30, 30);
    alert("No, you'd better read it again.");
    
}
//gotta find the loop

function draw(){
    if (frameCount >= 60*5) {
        location.href = "page6.html";
    }
}