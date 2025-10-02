/**
 * Art Jam
 * Olivia
 * 
 * Self portrait
 */

"use strict";

/**
* Create the canvas and background
*/
function setup() {
createCanvas(480, 640);
}

//Varables

//colours
let hair = {
r: 45,
g: 30,
b: 20
}

/**
 * Calling functions to draw
*/
function draw() {
    drawSky();
    drawHead();
    drawHair()
    drawNeck();
    drawJaw();
    drawBang();
    
}

function drawSky() {
   background(125,105,100); 
}

/**
 My draws
*/
function drawHead() {
    push();
    fill(215,175,120);
    noStroke();
    circle(240,300,220,300);
    pop();
}

function drawJaw() {
    push();
    fill(215,175,120);
    noStroke();
     square(140, 250, 200, 50);;
    pop();
}

function drawNeck() {
    push();
    fill(200,135,105);
    noStroke();
     square(180, 390, 120, 50);;
    pop();
}

function drawBlu() {
    push();
    fill(0,50,255);
    noStroke();
    quad(350, 340, 250, 285, 250, 230, 350, 250);
    pop();
}
function drawBang() {
    push();
    fill(hair.r,hair.g,hair.b);
    noStroke();
    ellipse(210,230,180,120);
    ellipse(292,240,120,110);
    quad(120, 340, 250, 285, 160, 230, 130, 250);
    quad(300, 340, 260, 285, 160, 230, 130, 250);
    quad(350, 340, 250, 285, 250, 230, 350, 250);
    rect(120, 230, 20, 200);
    rect(337, 230, 15, 190);
    pop();
}


function drawHair() {
    push();
    fill(hair.r,hair.g,hair.b);
    noStroke();
    ellipse(140,400,50,200);
    ellipse(330,400,50,200);
    rect(140, 300, 200, 200);
    pop();
}