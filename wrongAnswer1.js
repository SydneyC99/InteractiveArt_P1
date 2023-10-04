let p;


function setup() {
    p = createP("404 Error");
    p.position(30, 30);
    alert("Nope that's not it! Try again.");
    
}

// function draw() {
//     let millisecond = millis();
//     if (millisecond = 10000) {
//         location.href = "index.html"
//     }
// }
//How to return to the last page after 10 seconds
//millis counts the time since everything started, so it doesn't
//seem to work?
//Draw stops working over time

//if (10+ seconds have passed since the page has loaded)
//go back to the other page

function draw(){
    if (frameCount >= 60*5) {
        location.href = "index.html";
    }
}
//how to properly call this?