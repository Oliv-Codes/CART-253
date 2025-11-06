/**
 * Lines
 * Olivia, Xueyi, Philippe
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
}