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
}



/**
 * calling functions to draw
*/
function draw() {
    drawSky();
    drawSun();
    drawOcean();
    drawSand();
}

function drawSky() {
   backgroud(148,203,246); 
}

function drawOcean() {
    fill(111,238,216);
    noStroke();
    rect(640,300);
}
function drawSand() {
    fill(200,190,120);
    noStroke();
    rect(240,100);
}
function drawSun() {
    fill(255,255,255);
    noStroke();
    circle(80,80,130,300);
}