// Coordinate systems and user effects
// Aedan Malayo
// September 10, 2025
// A first look at interactive programs with p5.js
//



function setup() { // runs ONCE at the start
  createCanvas(400, 400);
  print(windowWidth, windowHeight, width, height);
  // window width is current browser width
  // width: canvas width
}

function draw() { //runs OVER and OVER 
  // Strive to keep draw() clean and tidy
  background(220); // targetting 60 fps 
  fill(0, 165, 31);

  drawTwoCircles();
  //     R  G  B



  function drawTwoCircles() {  // ALT + SHIFT + F -> autoformat
    // draws 2 circles, one at a fixed location and one at the
    // mouse location
    fill(0, 255, 0);
    circle(mouseX, mouseY, 30);
    
    circle(mouseX, mouseY, 30);
    fill(255, 0 ,255);
    circle(width / 2, height / 2, 100);

  }

}


