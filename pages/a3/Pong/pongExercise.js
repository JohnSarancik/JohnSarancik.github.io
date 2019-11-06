
////////////////////////
//CSMA101             //
//Intro to Programming//
//Fall 19             //
//Professor Theohar   //
//John Henry Sarancik //
//562-846-2322        //
////////////////////////



//pong exercise

//variables for ball
var ballX = 50;
var ballY = 150;
var diameter = 50;
var directionX = 9;
var directionY = 8;

//variables for paddle
var rectX;
var rectY;
var rectW = 400;
var rectH = 10;

var started = false;
var score = 0;



function setup() {
    createCanvas(800, 800);
    
}

function draw(){
    background(0);
    
    
    //ball bounces off wall
    ballX = ballX + directionX;
    ballY = ballY + directionY;
    
    if (ballX < 0 || ballX > width) {
        directionX = -directionX;
    }
    
     if (ballY < 0 || ballY > height) {
        directionY = -directionY;
    }
    
    //detects collision with paddle
    if((ballX > rectX && ballX < rectX + rectW) && (ballY + (diameter/2)) >= rectY) {
        
        directionX*= -1;
        directionY*= -1;
        score++;
        rectW = rectW - 25;
       
    }
    

    //cap for paddle size
    if(rectW <= 100) {
        rectW = 100;
    }
   
    //draw ball
    fill(255);
    ellipse(ballX, ballY, diameter, diameter);
    
    //draw paddle
    fill(255);
    rect(rectX, rectY, rectW, rectH);
    
    //draw loss barrier
    fill(255, 0, 0);
    rect(0, 780, 800, 20);
    
    //lose when hitting loss barrier
    if(ballY >= height){
       
        textSize(48);
        text("Game Over", width/3, height/3);
        
       directionX = 0;
       directionY = 0;
        ballX = 1000;
        ballY = 800;
    }
    
    //update paddle location
    if(!started) {
        rectX = width/2;
        rectY = height - 100;
        started = true;    
    }
    
    //score
    fill(255);
    textSize(24);
    text ("Score: " + score, 10, 25);
}

function keyPressed() {
    
    if(keyCode === LEFT_ARROW) {
         rectX = rectX - 50;
    }
               
    if(keyCode === RIGHT_ARROW) {
       rectX = rectX + 50; 
    }
        
        
}

