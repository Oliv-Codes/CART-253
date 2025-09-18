/**
 * Title of Project
 * Olivia
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * Creaing canvas
*/
function setup() {
    createCanvas (640,640)

}


/**
 * Draw circle in center of canvas
*/
function draw() {
    background(0)

    // Draw circle
    push();
    fill(255,255,0);
    noStroke();
    ellipse(mouseX, mouseY, 100 , 100);

}