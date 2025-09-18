/**
 * Creating Variables
 * Olivia
 * 
 * experimenting with variables
 */

"use strict";

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
    background(255,255,0)

    // Draw hole
    push();
    fill(0);
    noStroke();
    ellipse(140,175,180);
    pop();

}