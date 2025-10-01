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

function drawBang() {
    push();
    fill(hair.r,hair.g,hair.b);
    noStroke();
    elipse(240,300,120,400);
    pop();
}