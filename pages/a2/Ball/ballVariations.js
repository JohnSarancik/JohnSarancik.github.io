////////////////////////
//CSMA101             //
//Intro to Programming//
//Fall 19             //
//Professor Theohar   //
//John Henry Sarancik //
//562-846-2322        //
////////////////////////


//Ball variations

var startX;
var startY;
var directionX;
var directionY;

function setup(){

createCanvas(1000,1000);
background(0);

//starting point
    startX = width/2;
    startY = height/2;
    
//movement
    directionX = 10;
    directionY = 6;
    
}

function draw(){

    noStroke();
    
    //starting point+ movement
    startX = startX + directionX;
    startY = startY + directionY;

    //reverse direction of horizontal movement
    if(startX > width || startX < 0){
       directionX = -directionX;  
    }
    //reverse direction of vetical movement
    if(startY > height || startY < 0){
        directionY = -directionY;
    }
    
    
    //change colors, gradient
    
    sizeX = map(width/2.5, startX, 0, startY, 5, 20, true);   
    sizeY = map(height/2.5, startX, 0, startY, 5, 7,true);
    
    fill((startX/width)*255, (startY/height)*255, startX/2*startY/2);
    
    rect(startX, startY, sizeX/2, sizeY/2);
    
}
