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

//colour
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
    drawJaw();
 
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