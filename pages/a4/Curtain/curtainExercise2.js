
////////////////////////
//CSMA101             //
//Intro to Programming//
//Fall 19             //
//Professor Theohar   //
//John Henry Sarancik //
//562-846-2322        //
////////////////////////



var img1;
var img2;
var totalCircles;
var x, y;
var desiredColor;
var c;
    
    
function preload(){
    img1 = loadImage("data/super.jpg");
    img2 = loadImage("data/vortex.png");
}

function setup() {
   
   createCanvas(225, 225);
    background(0);
    
    //loading image data
    img1.loadPixels();
    img2.loadPixels();
    
    //initialize values
    totalCircles = 50;
    y = 0;
    c = 1;

    
}

function draw() {
  
    frameRate = 60;
    //set circle size based off totalCircles
    var circleSize = width/totalCircles;
    
    //draw circles
    var currentCircle = 0;
    
    //this keeps the size proportional to the width
    while(currentCircle < totalCircles) {
       
        x = currentCircle * circleSize;
        
    
    //Get color
    var desiredColor1 = getColor1();
    var desiredColor2 = getColor2();
    
    if(c > 0){
        
        fill(desiredColor1);
    }
    
    if(c < 0){
        
        fill(desiredColor2);
    }
    
    translate(random(100, 150)), height/10, rotate(radians(40));
    strokeWeight(0.5);
    triangle(x, y, circleSize, circleSize, 2*x, 2*y);
        currentCircle++;
}

    //move down a row
    y = y + circleSize;
    x = x * circleSize;
    
    //start over at top
    if(y > height) {
        totalCircles = 50;
        c = -c;
        y = 0;
        
    }

function getColor1() {
    
   var desiredColor1 = img1.get(floor(x),floor(y));
    return desiredColor1;
}


function getColor2() {
    
    var desiredColor2 = img2.get(floor(x),floor(y));
    return desiredColor2;
    
}

}


