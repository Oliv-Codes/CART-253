/**
 * Variation Jam
 * 
 * 
 * 3 magic wands
 */

"use strict";

/**
* Create the canvas and background
*/
function setup() {
    createCanvas(640, 640);
    cursor('assets/images/Wand_1_s.png');

}

let trail = [];


//Variables
let heartImg;
let heart2Img;
let currentheart;




/**
 * Altogether draws
 */
function draw() {
    drawSky();

}
    

//scene draws

function drawSky() {
   background("black"); 
}

function drawWater() {
    push();
    fill ("#0b4538ff");
    noStroke();
    rect(0,360,width,300);
    pop();
}


