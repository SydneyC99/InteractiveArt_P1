let p;
let p2;
let p3;
let p4;
let google;


function setup() {
    noCanvas();
    google = createImg("assets/googleLogo.png");
    google.class("logo");
    p = createP("Congrats, you did it! You can now use");
    p2 = createP();
    google.parent (p2);
    p2.position(420, 0);
    p3 = createP("Services!");
    p3.position(525, 0);
    p4 = createP("You can now close this page.")
}