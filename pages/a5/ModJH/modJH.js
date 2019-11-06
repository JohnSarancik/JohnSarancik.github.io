
////////////////////////
//CSMA101             //
//Intro to Programming//
//Fall 19             //
//Professor Theohar   //
//John Henry Sarancik //
//562-846-2322        //
////////////////////////


//modular ball exercise

var poke;
var great;
var master;
var pikachu;
var score = 0;

function setup() {
    createCanvas (800, 800);
   
    colorMode(HSB, 360, 100, 100);
    
    poke = new Ball(200, 200, 5, 2, 10, 100);
    great = new Ball(400, 400, 3, 6, 190, 100);
    master = new Ball(600, 600, 4, 4, 270, 100);
    pikachu = new player(200, 700, 70, 70, 5, 5);
   
}


function draw() {
    
    background(60);
    
    //score
    fill(255);
    textSize(24);
    text ("Score: " + score, 10, 25);
    
    
    
    pikachu.drawPikachu();
    pikachu.movePikachu();
    
    
    poke.drawBall();
    great.drawBall();
    master.drawBall();
    
    poke.moveBall();
    great.moveBall();
    master.moveBall();
    
    poke.bounceBall();
    great.bounceBall();
    master.bounceBall();
    
    //balls reset after collision
    if(poke.isCollided(great.x, great.y, master.x, master.y)){
        poke.reset();
        great.reset();
        master.reset();
    }
    if(great.isCollided(master.x, master.y, poke.x, poke.y)){
        poke.reset();
        great.reset();
        master.reset();
    }
    if(master.isCollided(poke.x, poke.y, great.x, great.y)){
        poke.reset();
        great.reset();
        master.reset();
    }
    if(pikachu.isKilled(great.x, great.y)){
        pikachu.lose();
        poke.drawBall() = false;
        great.drawBall() = false;
        master.drawBall() = false;
    }
    if(pikachu.isKilled(master.x, master.y)){
        pikachu.lose();
        poke.drawBall() = false;
        great.drawBall() = false;
        master.drawBall() = false;
    }
    if(pikachu.isKilled(poke.x, poke.y)){
        pikachu.lose();
        poke.drawBall() = false;
        great.drawBall() = false;
        master.drawBall() = false;
    }
    
    if(score >= 60){
        fill(10, 100, 100);
        rect(0, 0, 800, 800);
        fill(0, 0, 100);
        textSize(48);
        text("You Still Lose", width/3, height/3);
        text("I Know You Cheated", width/4, height/2);
    }
}

function Ball(ballX, ballY, speedX, speedY, hueBall, scale){
    
    //properties of ball
    this.x = ballX;
    this.y = ballY;
    this.spX = speedX;
    this.spY = speedY;
    this.hBall = hueBall;
    this.scl = scale;
    
    
    this.drawBall = function(){
        
    //pokeballs
    fill(this.hBall, 100, 100);
    ellipse(this.x, this.y, this.scl * 0.75);
   
    
    //black bar and black circle in the middle
    fill(0);
    rect(this.x - this.scl/2 + 10, this.y - 6, this.scl * .85, this.scl/5.5);
    ellipse(this.x, this.y + 10, this.scl/2);
    
    //small white circle inside of pokeball
    fill(255);
    ellipse(this.x, this.y + 10, this.scl/3);
    
    }
    
    this.moveBall = function(){
        this.x += this.spX;
        this.y += this.spY;
    }
    
    this.bounceBall = function(){
        
        if(this.x < 50 || this.x > width - 50){
            this.spX = -this.spX
        }
        if(this.y < 50 || this.y > height - 50){
            this.spY = -this.spY
        }
    }
    
    this.isCollided = function(otherX, otherY){
        if(dist(this.x, this.y, otherX, otherY) <= 100){
            return true;
        }
    }
    
    this.reset = function(){
        background(90);
        this.x = random(50, width - 50);
        this.y = random(50, height - 50);
        this.spX = random(2, 6);
        this.spY = random(2, 6);
        this.hBall = random(360);
        this.scl = scale * random(0.75, 2.24);
        score++;
    }
}

function player(pikachuX, pikachuY, pikachuR, pikachuH, spdX, spdY){
    
    this.x = pikachuX;
    this.y = pikachuY;
    this.r = pikachuR;
    this.h = pikachuH;
    this.spX = spdX;
    this.spY = spdY;
    
    this.drawPikachu = function(){
        
    //body
    fill(50, 100, 100);
    rect(this.x, this.y, this.r, this.h ,this.spX, this.spY);
    //cheeks
    fill(10, 100, 100);
    circle(this.x + 10, this.y + 45, this.r - 60, this.spX, this.spY);
    circle(this.x + 60, this.y + 45, this.r - 60, this.spX, this.spY);
    //black eye
    fill(0, 0, 0);
    circle(this.x + 10, this.y + 25, this.r - 62, this.spX, this.spY);
    circle(this.x + 55, this.y + 25, this.r - 62, this.spX, this.spY);
    circle(this.x + 25, this.y + 55, this.r - 62, this.spX, this.spY);
    //white eye
    fill(0, 0, 100);
    circle(this.x + 15, this.y + 25, this.r - 67, this.spX, this.spY);
    circle(this.x + 55, this.y + 25, this.r - 67, this.spX, this.spY);
    
    } 
    
    this.movePikachu = function(){
        
        if(keyIsDown(LEFT_ARROW)){
            this.x -= this.spX;
        }
        if(keyIsDown(RIGHT_ARROW)){
            this.x += this.spX;
        }
        if(keyIsDown(UP_ARROW)){
            this.y -= this.spY;
        }
        if(keyIsDown(DOWN_ARROW)){
            this.y += this.spY;
        }
        
    }
    this.isKilled = function(otherX, otherY){
        
        if(dist(this.x, this.y, otherX, otherY) <= 60){
            return true;
        }
    }
    this.lose = function(){
        background(10, 100, 100);
        fill(0, 0, 100);
        textSize(48);
        text("You Lose", width/3, height/5);
    }
        
}
    
    
    
