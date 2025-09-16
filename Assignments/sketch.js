// Interactive Scene
// Aedan
// Sept 16, 2025
//



function setup() {
  createCanvas(920, 920);
  
}

function draw() {
  background(171, 212, 209);
  drawmoon();
  drawmountain();
}

function drawmoon() {
  noStroke();
  fill(205, 222, 220);
  circle(windowWidth - 800,windowHeight - 800, 120);


}

function drawmountain(){
  triangle(25, 550, 255, 100, 560, 550)


}