/**
 * Creating Variables
 * Olivia
 * 
 * experimenting with variables
 */

"use strict";

let cheeseRed= 255;
let cheeseGreen = 255;
let cheeseBlue = 0;

let holeSize = 180;

/**
 * Creaing canvas
*/
function setup() {
    createCanvas (480,480)

}


/**
 * Draw hole in cheese
*/
function draw() {
    background(cheeseRed,cheeseGreen,cheeseBlue)

    // Draw hole
    push();
    fill(0);
    noStroke();
    ellipse(140,175,holeSize);
    pop();

}