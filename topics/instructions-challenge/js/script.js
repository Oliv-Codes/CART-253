/**
 * Beach
 * Olivia, Xueyi
 * 
 * Beautiful Beach
 */

"use strict";

/**
 * create the canvas
*/
function setup() {
createCanvas(640,480)
angleMode(DEGREES)
}



/**
 * calling functions to draw
*/
function draw() {
    drawSky();
    drawSun();
    drawFish();
    drawOcean();
    drawSand();
    drawBird();
    drawUmbrella();
}

function drawSky() {
   background(148,203,246); 
}

function drawOcean() {
    push();
    fill(111,238,216,150);
    noStroke();
    rect(0,300,640,300);
    pop();
}
function drawSand() {
    push();
    fill(320,190,120);
    noStroke();
    rect(0,380,640,100);
    pop();
}
function drawSun() {
    push();
    fill(255,230,0);
    noStroke();
    circle(120,90,130,300);
    pop();
}
function drawBird() {
    push();
    noFill();
    stroke(0,0,0);
    arc(300,150,80,30,180,0);
    arc(380,150,80,30,180,0);
    arc(420,200,60,20,180,0);
    arc(480,200,60,20,180,0);
    pop();
}
function drawUmbrella() {
    push();
    fill(235,14,29)
    arc(205,250,300,100,180,0)
    fill(105,70,60);
    noStroke();
    rect(200,250,15,200);
    pop();
}
function drawFish () {
    push();
    fill(235,138,225)
    noStroke();
    circle(390,350,40)
    arc(420,350,30,30,90,0);
    
}