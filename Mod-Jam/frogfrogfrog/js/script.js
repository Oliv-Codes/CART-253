/**
 * Frogfrogfrog
 * Pippin Barr
 * 
 * A game of catching flies with your frog-tongue
 * 
 * Instructions:
 * - Move the frog with your mouse
 * - Click to launch the tongue
 * - Catch flies
 * - Avoid red flies
 * 
 * Made with p5
 * https://p5js.org/
 */

"use strict";

// Our frog
const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 520,
        size: 150
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    }
};

// Our fly
// Has a position, size, and speed of horizontal movement
const fly = {
    x: 0,
    y: 200, // Will be random
    size: 10,
    speed: 3
};

// Poison Bug
const psnbug = {
    x: 0,
    y: 300, // Will be random
    fill: ("#ae1515ff"),
    size: 10,
    speed: 5
}

// Hunger Meter
let hunger = {
    x: 50,
    y: 300, //will become smaller when flies are eaten
}

let gameLost = false

// Images
let win; 
let lose; 
let start;
let showStart = true;
function preload() {
win = loadImage('assets/images/win.png');
lose = loadImage('assets/images/lose.png');
start = loadImage('assets/images/frogfrogfrog.png');
}



/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(640, 480);

    // Give the fly its first random position
    resetFly();
}

function draw() {
    // If the start/title screen is active, draw it and skip game logic
    if (showStart) {
        drawStart();
        return;
    }

    background("#87ceeb");
    moveFly();
    movePsnbug ();
    drawFly();
    drawPsnbug ();
    moveFrog();
    moveTongue();
    drawFrog();
    drawHunger();
    drawHungerLVL ();
    checkTongueFlyOverlap();
    checkTonguePoisoned();
    //drawStart();
    drawWin();
    if (gameLost===true) {
        drawLost();
    }
}

/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly() {
    // Move the fly
    fly.x += fly.speed;
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly();
    }
}

function movePsnbug() {
    // Move the fly
    psnbug.x += psnbug.speed;
    // Handle the fly going off the canvas
    if (psnbug.x > width) {
        resetPsnbug();
    }
}

/**
 * Draws the fly as a black circle
 */
function drawFly() {
    push();
    noStroke();
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size);
    pop();
}

function drawPsnbug() {
    push();
    noStroke();
    fill(psnbug.fill)
    ellipse(psnbug.x, psnbug.y, psnbug.size);
    pop();
}

/**
 * Resets the fly to the left with a random y
 */
function resetFly() {
    fly.x = 0;
    fly.y = random(0, 300);
}

function resetPsnbug() {
    psnbug.x = random (0,30);
    psnbug.y = random(0, 100);
}

/**
 * Moves the frog to the mouse position on x
 */
function moveFrog() {
    frog.body.x = mouseX;
}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    frog.tongue.x = frog.body.x;
    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        // Do nothing
    }
    // If the tongue is outbound, it moves up
    else if (frog.tongue.state === "outbound") {
        frog.tongue.y += -frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= 0) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= height) {
            frog.tongue.state = "idle";
        }
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
    // Draw the tongue tip
    push();
    fill("#ff0000");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#ff0000");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    // Draw the frog's body
    push();
    fill("#00ff00");
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    pop();
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size/2 + fly.size/2);
    if (eaten) {
        // Reset the fly
        resetFly();
        // Bring back the tongue
        frog.tongue.state = "inbound";
        hunger.y=hunger.y-20
    }
}

//Poisoned
function checkTonguePoisoned() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, psnbug.x, psnbug.y);
    // Check if it's an overlap
    const poisoned = (d < frog.tongue.size/2 + psnbug.size/2);
    if (poisoned) {
       gameLost = true
    }
}

function drawLost(){
    image (lose,0,0)
}

/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
    // If the title/start screen is showing, hide it on the first click
    if (showStart) {
        showStart = false;
        return; // don't launch the tongue when dismissing the start screen
    }

    // Otherwise, behave as before and launch the tongue if idle
    if (frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";
    }
}

// Hunger meter
function drawHunger() {
    push();
    fill("#ff0000ff")
    rect(50, 80, 50, 300);
    fill("#000000ff")
    text('Fullness Meter', 40, 400);
    pop();
}

// Hunger level
function drawHungerLVL (){
    rect(50, 80, 50,hunger.y);
    fill("#b4edf5ff")
}

// Win condition
function drawWin() {
 if (hunger.y<=20) {
    image (win,0,0)
 }
}

function drawStart() {
    // Draw the start/title image full screen while showStart is true
    push();
    image(start, 0, 0);
    pop();
}