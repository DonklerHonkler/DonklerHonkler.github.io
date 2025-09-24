// Interactive Scene
// Aedan
// Sept 16, 2025
//

let manx =  0

function setup() {
  createCanvas(920, 920);

}

function draw() { 
  background(171, 212, 209);
  gradientBackground();
  drawmoon();
  drawmountain();
  drawmountain2();
  mouseReport();
  drawdock();
  drawprotag();
  
}
function gradientBackground() {
  //create a gradient to use as a background
  let h = 1;  //height of each rectangle

  // use a loop(doesnt have to be a while loop) to
  // draw a vertical stack of rectangles
  let y = 0;
  while (y <= 487) {
    noStroke();
    let mappedY = map(y,0,height,0,255);
    let flippedY = 255 - mappedY;
    let mappedMouseX= map (mouseX, 0, width, 0,255);
    let mappedMouseY= map( mouseY, 0, height, 0 , 255);
    fill(mappedMouseX, flippedY, mappedMouseY);
    rect(0, y, width, h);
    y += h;

  }

}
function mouseReport() {
  fill(0)
  let src = mouseX + "," + mouseY ;
  text(src, mouseX, mouseY)
}

function drawmoon() {
  noStroke();
  fill(205, 222, 220);
  circle(windowWidth - 500, windowHeight - 800, 120);


}

function drawmountain() {
  fill(178, 188, 201);
  triangle(-50, 460, 110, 160, 321, 420)
  triangle(136,385,308, 225, 490,401)
  triangle(336,333,523, 166, 616,479)
  triangle(536,335,794, 106, 1000,488)
  fill(139, 206, 237);
  rect(0,488, width, height)

}


function drawmountain2(){
  noStroke();
  fill(184, 195, 208);
  triangle(-50,488,118, 300,350,488);
  triangle(83,487,349,310,454,488)
  triangle(261,488,449, 315,609,488)
  triangle(500,488,625,177,1000,488)

}

function drawdock(){
  fill(191, 137, 67)
  rect(0,488,200,15);
  rect(200,488,5,600);
  stroke(0)
  if (mouseIsPressed){
    line(manx+40,440, mouseX, mouseY);
  }
  

}
function drawprotag(){
  
  line(manx+5,487,manx+20,457);
  line(manx+20,457,manx+35,487);
  line(manx+20,457, manx+20,420);
  line(manx+10,450, manx+20,440);
  line(manx+40,440, manx+20,440);
  fill(246, 231, 141);
  circle(manx+20,420,30);
  

  
  
}
//////  TAKE DEMO 5 GRADIENT SKY 