/**
 * Lines
 * Pippin Barr
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}




/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");

    for (let i = 0; i <= width; ++i) {
        let hue = map(i, 0, width, 0, 255)
        push()
        colorMode(HSB)
        stroke(hue, 255, 255)
        line(i, 0, i, height)
        pop()
    }

    let strokeColor = 0;
    let lineX = 0;
    while (strokeColor <= 250) {
        stroke(strokeColor)
        strokeColor = strokeColor + 25
        line(lineX, 0, lineX, height)
        lineX = lineX + 50
    }
    
    let lineY = 0;
    strokeColor = 0;
    while (strokeColor <= 250) {
        stroke(strokeColor)
        strokeColor = strokeColor + 25
        line(0, lineY, width, lineY)
        lineY = lineY + 50
    }

    
    // stroke(0);
    // line(0, 0, 0, height);
    
    // stroke(25);
    // line(50, 0, 50, height);
    
    // stroke(50);
    // line(100, 0, 100, height);
    
    // stroke(75);
    // line(150, 0, 150, height);
    
    // stroke(100);
    // line(200, 0, 200, height);
    
    // stroke(125);
    // line(250, 0, 250, height);
    
    // stroke(150);
    // line(300, 0, 300, height);
    
    // stroke(175);
    // line(350, 0, 350, height);
    
    // stroke(200);
    // line(400, 0, 400, height);
    
    // stroke(225);
    // line(450, 0, 450, height);
    
    // stroke(250);
    // line(500, 0, 500, height);
}