// Working with images
// and random() noise
// Aedan
// September 24

let x1, y1, x2,y2;
let d1, d2;
let noiseTime = 5, noiseSpeed = 0.01;
  // noisespeed controls how connected 
  // our random noise()value are
  let minSize = 5; let maxSize = 200;

  let mX, mY; //move x and y




function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = width * 0.3; y1 = height *0.5;
  x2 = width * 0.7; y2 = height *0.5;
  mY - height * 0.3;

}

function noiseMove(){
  //use random noise to set the xposition of a third circle
  circle(mX,mY,50);

}

function draw() {
  background(220);
  randomCircle();
}

function noiseCircle(){
  // will draw a fixed circcle with randomly 
  // changing (but smooth diamaters)
  d2 = noise(noiseTime); //yields value between 0-1
  d2 = map(d2,0,1 ,minSize, maxSize);
  fill(25,31,51);
  circle(x2,y2,d2);
  noiseTime += noiseSpeed;
}

function randomCircle(){
 //draw a fixed circle with randomly changing diameter
  fill(10,110,132);
  d1 = random(minSize, maxSize)
  circle(x1,y1,d1);
  noiseCircle();


}