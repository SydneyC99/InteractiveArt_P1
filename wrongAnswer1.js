let p;


function setup() {
    p = createP("404 Error");
    p.position(300, 300);
    alert("Nope that's not it! Try again.");
}

function draw() {
    let millisecond = millis();
    if (millisecond = 10000) {
        location.href = "index.html"
    }
}

// function timePassed(){
//     let millisecond = millis();
//     if (millisecond = 10000) {
//         location.href = "index.html"
//     }
// }