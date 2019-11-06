////////////////////////
//CSMA101             //
//Intro to Programming//
//Fall 19             //
//Professor Theohar   //
//John Henry Sarancik //
//562-846-2322        //
////////////////////////

function setup() {
  createCanvas(400, 400);
    background(0,0,102);
}
function mouseDragged() {
  stroke(0);
  strokeWeight(1);
  fill(192,192,192);
  circle(mouseX,mouseY,40,40);
  rect(mouseX,mouseY,40,60);
}
function draw() {
  stroke(204,153,255);
  strokeWeight(2);
  line(300,100,200,150);
  line(200,150,250,200);
  line(250,200,225,300);
  line(200,150,210,210);
  line(210,210,150,270);
}
