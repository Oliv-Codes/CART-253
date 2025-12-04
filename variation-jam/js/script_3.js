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
    cursor('assets/images/Wand_3_s.png');
}

let trail = [];

//Variables
let musicImg;



//colours
let sky = {
    r: 30,
    g: 10,
    b: 110,
}

let frog = {
    r: 70,
    g: 120,
    b: 20,
}


function preload () {
    musicImg = loadImage('assets/images/note-303708_640.png');
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
    drawMouth();
    drawSpeechBubble(); 
    drawThoughts();
 
        //Mouse Trail
    trail.push({ x: mouseX+ random (-30,30), y: mouseY+ random (-20,20) });
    let maxTrailLength = 20; // Adjust this value for longer/shorter trails
    if (trail.length > maxTrailLength) {
        trail.shift(); // Remove the oldest element
    }

    
    for (let i = 0 ; i < trail.length; i++ ){
        let pos = trail[i]
        image (musicImg, pos.x, pos.y, 25, 25)
        console.log(pos)

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
    fill (frog.r,frog.g,frog.b);
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

function drawMouth(){
    push();
    fill("#53051fff");
    // Make mouth taller when mouse is higher on the canvas, smaller when mouse is lower
    const minH = 8;
    const maxH = 120;
    // map mouseY (0 at top) so top -> maxH, bottom -> minH
    let mouthH = map(mouseY, 0, height, maxH, minH);
    mouthH = constrain(mouthH, minH, maxH);
    ellipse(335, 340, 60, mouthH);
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
  const minS = 15;
  const maxS = 35;
  // Map mouseX to a text size between minS and maxS
  let textS = map(mouseY, 0, width,maxS,minS);
  textS = constrain(textS, minS, maxS);
  textSize(textS);
  text("la la LAAAAA", 460, 100);
  pop();
}
