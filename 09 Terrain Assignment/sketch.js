// Starter code for terrain assignment
// Aedan
// September 29, 2025

// Global variables
let rectWidth = 1;
let noiseTime = 0;
let noiseOff = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //for now, generate the terrain once
  generateTerrain();
  keyPressed();

}
function keyPressed() {

  if ((keyCode === RIGHT_ARROW)) {
    rectWidth += 1;
  }
  if ((keyCode === LEFT_ARROW)) {
    rectWidth -= 1;

  }


}


function draw() {
  // don't need to use draw UNTIL
  // animating the terrain (panning)

  // background(220);
}
function generateTerrain() {
  // Use a loop to generate and draw several
  // rectangles side to side to look like 2D 
  // terrain.
  rectMode(CORNERS);

  for (let x = 0; x < width; x += rectWidth) {
    // generate a random height.
    // NOTE!! change this from random() to noise()
    rectHeight = noise(noiseTime);
    rectHeight = map(rectHeight, 0, 1, height * 0.2, height * 0.8);

    // calculate the upper-right corner of rect
    let x2 = x + rectWidth;
    let y2 = height - rectHeight;

    rect(x, height, x2, y2);

    //change noise value
    noiseTime += noiseOff;
  }

  rectMode(CORNER);  //revert to default
}

