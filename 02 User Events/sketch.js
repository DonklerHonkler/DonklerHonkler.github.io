// User EVents + Day 1 challenge
// Aedan
// Sep 11, 2025
//

// GLOBAL VARIABLES HERE...
// can only work with simple data in this section of code
// no system variables are available until in setup(),
// after canvas is made
let circleColor = false;
let currentColor = "white";
let x; let y = 300;
let tSize = 50; // for text font size

// declaration    initialization



function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  x = width / 2;
}

function draw() {
  background(220);
  challenge();  //coordinate system challenge
  movement();
  rect(x, y, 60, 30);
  mouseReport();
}

function mouseReport() {
  //inspect 
  fill(0)
  let src = mouseX + "," + mouseY + "," + mouseIsPressed;
  text(src, mouseX, mouseY)

  if (mouseIsPressed) 
    tSize = random(10, 80);

}
function mousePressed(){
  // function automatically called once per mouse click interaction
  tSize = random(10, 80);
}

function movement() {
  // check keyboard for presses each frame
  //and move the rectangle accordingly
  // if (keyCode === RIGHT_ARROW && keyIsPressed) x += 5;
  // else if (keyCode === LEFT_ARROW && keyIsPressed) x -= 5;

  if (keyIsDown(UP_ARROW)) y -= 5;
  if (keyIsDown(DOWN_ARROW)) y += 5;
  if (keyIsDown(LEFT_ARROW)) x -= 5;
  if (keyIsDown(RIGHT_ARROW)) x += 5;

}






function keyPressed() {
  //this is  special event function, gets
  // automatically called anytime a keyboard
  // button is pressed
  if (keyCode === LEFT_ARROW) x = x - 10;

  print("key was keyPressed")
  if (key === "g") currentColor = "green"
  else if (keyCode === CONTROL) currentColor = "aqua";




  circleColor = !circleColor;
  //how to tell which key was pressed??



}


function challenge() {
  //draw 5 hollow circles, in 4 corners and center position
  // 50 px in diameter each
  noFill();

  if (circleColor === true) {   //  circlecolor === true
    fill(currentColor);
  }

  // 5 circles
  circle(400, 400, 50);
  circle(0, 0, 50);
  circle(200, 200, 50);
  circle(0, 400, 50);
  circle(400, 0, 50);




}
