
////////////////////////
//CSMA101             //
//Intro to Programming//
//Fall 19             //
//Professor Theohar   //
//John Henry Sarancik //
//562-846-2322        //
////////////////////////


var petTable;
var pets = [];
var hVal = [];
var usNum = [];
var bright = 100;
var sat = 100;
var szY = [];


function preload(){
    
    petTable = loadTable("Assets/pets.csv");
}

function setup(){
    
    createCanvas(800, 600);
    colorMode(HSB, 360, 100, 100);
    background(0);
    noStroke();
    
    for(var i = 0; i < petTable.getRowCount() - 1; i++){
        
        pets[i] = petTable.getString(i + 1, 0);
        hVal[i] = petTable.getNum(i + 1, 1);
        usNum[i] = petTable.getNum(i + 1, 2);
        szY[i] = map(usNum[i], 1, 10, 10, 25);
        
    }
    
}


function draw(){
    background(0);
    
    fill(255);
    text("Total Number of Pets Owned in the US 2018", 100, 400);
    text("(in millions)", 250, 450);
    
    for(var i = 0; i < petTable.getRowCount() - 1; i++){
        
        fill(hVal[i], bright, sat);
        rect(100 * (i+1), 300, 40, -szY[i]);
        
        fill(255);
        textSize(20);
        text(pets[i], 100 * (i + 1), 325);
        text(usNum[i], 100 * (i + 1), 350)
    }
}
