/**
 * Variation Jam
 * Olivia Ho
 * 
 * 3 magic wands
 */

"use strict";

/**
* Create the canvas and background
*/
function setup() {
    createCanvas(640, 640);
    cursor('assets/images/Wand_1_s.png');
}

//Variables
let heartImg;

//colours
let sky = {
    r: 30,
    g: 10,
    b: 110,
}

//shake
let shake = {
    x:0,
    y:0,
}

//Love words array setup
"use strict";
let loveData = undefined
let loveThoughts = "I have so much love"

function preload () {
    loveData=loadJSON("/assets/love.json"); 
    heartImg = loadImage('assets/images/heart.png');
}


/**
 * Altogether draws
 */
function draw() {
    drawSky();
    drawWater();
    drawLilypad();
    drawFrog();
    drawNormalPupil();
    
    // Check if mouse is over the frog
    if (mouseX > 230 && mouseX < 230 + 210 && mouseY > 280 && mouseY < 280 + 210) {
        drawSpeechBubble();drawHeartPupil(); drawThoughts();
    }
    
    
    
}



//scene draws

function drawSky() {
   background(sky.r,sky.g,sky.b); 
}

function drawWater() {
    push();
    fill ("#0b4538ff");
    noStroke();
    rect(0,360,width,300);
    pop();
}

function drawFrog() {
    push();
    fill ("#499417ff");
    noStroke();
    rect(230, 280, 210, 210, 50);
    ellipse(200, 460, 250, 60);
    ellipse(480, 460, 250, 60);
    quad(230, 460, 300, 460, 300, 540, 200, 540);
    quad(370, 460, 430, 460, 470, 540, 370, 540);
    fill ("#d1ed52ff");
    rect(250, 330, 170, 150, 50);
    fill ("#ecf3d1ff");
    circle(280, 270, 70);
    circle(390, 270, 70);
    pop();
}

function drawNormalPupil(){
    push();
    fill("black");
    ellipse(280, 270, 20, 50);
    ellipse(390, 270, 20, 50);
    pop();

}

function drawHeartPupil(){
    push();
    imageMode(CENTER);
    if (heartImg) {
        const w = 50;
        const h = 50;
        image(heartImg, 280, 270, w, h);
        image(heartImg, 390, 270, w, h);
    }
    pop();

}

function drawLilypad() {
    push();
    fill ("#255305ff");
    arc(350,500,500,200,90,120);
    fill ("#8c1490ff");
    circle(460, 400, 140);
    pop();
}

function drawSpeechBubble(){
    push();
    rect(310, 60, 300, 130, 20);
    pop();
}

function drawThoughts() {
    push();
    fill("black");
    textAlign(CENTER, CENTER);
    textSize(29);
    text(loveThoughts, 460, 100);
    pop();
}

function mousePressed() {
    loveThoughts = (loveData.love [int(random(0,loveData.love.length))])
    console.log(loveData)
}