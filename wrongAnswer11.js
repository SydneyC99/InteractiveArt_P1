let p;


function setup() {
    p = createP("404 Error");
    p.position(30, 30);
    alert("No, dummy, can't you read??");
    
}
//gotta find the loop

function draw(){
    if (frameCount >= 60*5) {
        location.href = "page11.html";
    }
}