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

/**
 * Calling functions to draw
*/
function draw() {
    drawSky();
 
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
    circle(120,90,130,300);
    pop();
}