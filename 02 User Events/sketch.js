// User EVents + Day 1 challenge
// Aedan
// Sep 11, 2025
//

// GLOBAL VARIABLES HERE...
let circleColor = false;
// declaration    initialization

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  challenge();  //coordinate system challenge
}
function keyPressed(){
    //this is  special event function, gets
    // automatically called anytime a keyboard
    // button is pressed
    print("key was keyPressed")
    circleColor = !circleColor;
    //how to tell which key was pressed??



}


function challenge() {
  //draw 5 hollow circles, in 4 corners and center position
  // 50 px in diameter each
  noFill();
  
  if(circleColor === true){   //  circlecolor === true
    fill(255, 0 ,0);
  }

  // 5 circles
  circle(400,400,50);
  circle(0, 0, 50);
  circle(200, 200, 50);
  circle(0,400,50);
  circle(400,0, 50);




}
