/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let bird = {
    x: 120,
    y: 480,
    size: 50, 
    velocity: {
        x: 0,
        y: 0,
        
    }
    acceleration {
        x: 0.025,
        y: -0.85,
    }
}

/**
 * Create canvas
*/
function setup() {
    createCanvas(640,480)
}


/**
 * Move Bird and display
*/
function draw() {
    background(0);

    //Move bird
    bird.x = bird.x + bird.velocity.x + bird.acceleration.x;
    bird.y = bird.y + bird.velocity.y + bird.acceleration.y;

    //Draw bird
    push();
    fill(255,0,0);
    noStroke();
    elipse(bird.x, bird.y, bird.size)

}