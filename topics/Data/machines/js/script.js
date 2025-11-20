/**
 * Machines
 * Pippin Barr
 * 
 * A starting point for a project that displays different machines
 * on the canvas. Eventually I'd like to be able to drag and drop
 * items onto the machines and have them act in different ways.
 * For now I'm happy to just show that they're distinct.
 */

"use strict";


const incinerator = {
    x: 0,
    y: 100,
    width: 100,
    height: 100,
    fill: "#ff4400"
}

const freezer = {
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    fill: "#bbbbff"
}

const crusher = {
    x: 300,
    y: 100,
    width: 100,
    height: 100,
    fill: "#777777"
}

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 200);
}

/**
 * Display the three machines
 */
function draw() {
    background(0);

    // Incinerator
    push();
    noStroke();
    fill(incinerator.fill);
    rect(incinerator.x, incinerator.y, incinerator.width, incinerator.y);
    pop();

    // Freezer
    push();
    noStroke();
    fill(freezer.fill);
    rect(150, 100, 100, 100);
    pop();

    // Crusher
    push();
    noStroke();
    fill(crusher.fill);
    rect(300, 100, 100, 100);
    pop();
}