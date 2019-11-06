
////////////////////////
//CSMA101             //
//Intro to Programming//
//Fall 19             //
//Professor Theohar   //
//John Henry Sarancik //
//562-846-2322        //
////////////////////////


var sun;
var sky;
var island;
var island2;
var boat;
var score = 0;

function setup(){
    
    createCanvas(800, 600);
    colorMode(HSB, 360, 100, 100);
    
    sun = new Sun(50, 350, 100, 3, 3);
    island = new Rock(0, 350, 150, 50, 2);
    island2 = new Rock(100, 450, 150, 50, 2);
    boat = new Boat(600, 500, 75, 40, 1, 1);
}

function draw(){
    
   
    
    var sky = map(sun.y, 0, height/2, 0, 100);
    
    background(195, 100, 100 - sky);
  
    fill(255);
    textSize(24);
    text ("Score: " + score, 10, 25);
    
    sun.drawSun();
    sun.moveSun();
    sun.reset();
        
    //Sea
    noStroke();
    fill(175, 100, 100);
    rect(0, 350, 800, 250);
    
    boat.drawBoat();
    boat.moveBoat();

    island.drawRock();
    island.moveRock();
    island.reset();
    
    island2.drawRock();
    island2.moveRock();
    island2.reset();
    
     if(boat.isCrashed(island.x, island.y)){
        boat.lose();
        island.drawRock() = false;
        island2.drawRock() = false;
        boat.drawBoat() = false;
      
    }
     if(boat.isCrashed(island2.x, island2.y)){
        boat.lose();
        island.drawRock() = false;
        island2.drawRock() = false;
        boat.drawBoat() = false;
      
    }
   
     if(score >= 30){
        fill(10, 100, 100);
        rect(0, 0, 800, 800);
        fill(0, 0, 100);
        textSize(48);
        text("Congrats, You Win!!", width/4, height/3);
        text("Not So Hard Right?", width/4, height/2);
        boat.drawBoat() = false;
    }
    
}

function Sun(sunX, sunY, sunR, spdX, spdY){
    this.x = sunX;
    this.y = sunY;
    this.scl = sunR;
    this.spdX = spdX;
    this.spdY = spdY;
    
    this.drawSun = function(){
        
        fill(40, 100, 100);
        ellipse(this.x, this.y, this.scl);
        
    }
    
    this.moveSun = function(){
        
        if(this.x >= 50){
        this.x += this.spdX;
        this.y -= this.spdY;
        }
        
        if(this.y <= 0){
        this.spdY = -this.spdY;
        }
    
    }
    
    this.reset = function(){
        
        if(this.x >= width){
            this.x = 50;
            this.y = 350;
            this.spdY = -this.spdY;

            
        }
    }
}

function Rock(rockX, rockY, rockW, rockH, rockSpdX){
    
    this.x = rockX;
    this.y = rockY;
    this.w = rockW;
    this.h = rockH;
    this.spdX = rockSpdX;
    
    this.drawRock = function(){
        fill(38, 64, 100);
        ellipse(this.x, this.y, this.w, this.h);
    }
    
    this.moveRock = function(){
        this.x += this.spdX * 2;
    }
    
    this.reset = function(){
        if(this.x >= width){
            this.x = rockX;
            this.y = random(350, 600);
            this.x += this.spdX * 2;
            score++;
        }
    }
}

function Boat(boatX, boatY, boatW, boatH, spdX, spdY){
    
    this.x = boatX;
    this.y = boatY;
    this.w = boatW;
    this.h = boatH;
    this.spdX = spdX;
    this.spdY = spdY;
    
    this.drawBoat = function(){
        
        fill(10, 100, 100);
        rect(this.x, this.y, this.w, this.h, this.spdX, this.spdY);
        
      
    }
    
    this.moveBoat = function(){
        
        
        if(keyIsDown(UP_ARROW)){
            this.y -= this.spdY;
        }
        if(keyIsDown(DOWN_ARROW)){
            this.y += this.spdY;
        }
    }
    
    this.isCrashed = function(otherX, otherY){
        
        if(dist(this.x, this.y, otherX, otherY) <= 43){
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


