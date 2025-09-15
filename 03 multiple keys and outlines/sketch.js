// Multiple keys and outlines
// Aedan
// Sept 15 2025
//

// keyIsDown( keycode) -> returns boolean

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(220);
  drawtorso();


}

function drawtorso() {
  noStroke();
  fill(144, 238, 144);
  // rect(width / 2, height / 2, 100);
  rectMode(CENTER);
  rect( width/2, height/2,70, 100, 55, 50, 0);
  rectMode(CORNER);
  rect(width/2 - 35, height /2 +50, 5, 25);
  rect(width/2 + 30, height /2 +50, 5, 25);
}

function draweyes(){
 noStroke
 fill(0,0,0;
  circle(width-)
 )

}




}
// function checkMulti(){
//   strokeWeight(10);
//   stroke(255,105,180);
//   //check for multiple keypresses (3 simultanously )
//  let a = keyIsDown(65); // 65 = a
//  let b = keyIsDown(66); // b
//  let c = keyIsDown(67); // c
//  textSize(40);
//  text("a:"+  a  +  "\tb:"  +  b +  "\tc:" + c, 100 , 300)



