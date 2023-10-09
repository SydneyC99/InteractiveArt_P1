let p;


function setup() {
    p = createP("404 Error");
    p.position(30, 30);
    alert("I think a toddler could do better!");
    
}
//gotta find the loop

function draw(){
    if (frameCount >= 60*5) {
        location.href = "page13.html";
    }
}