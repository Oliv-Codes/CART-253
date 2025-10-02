/**
 * Art Jam
 * Olivia
 * 
 * Self portrait
 */

"use strict";

/**
* Create the canvas and background
*/
function setup() {
createCanvas(480, 640);
}



//Variables

let box = {
    x:0,
    y:600,
}

//colours
let sky = {
    r: 30,
    g: 10,
    b: 110,
}

let hair = {
    r: 35,
    g: 30,
    b: 20,
}

let eye = {
    fill: "#ffffffff",
    open: "#ffffffff",
    closed: "#C88769",
}

let shade = {
    r: 200,
    g: 135,
    b: 105,
}

/**
 * Calling functions to draw
*/
function draw() {
    drawSky();
    drawBox();
    drawHead();
    drawHair();
    drawShirt();
    drawNeck();
    drawSide();
    drawJaw();
    drawBang();
    drawEye();
    drawDot();
    blink();
  
}

function drawSky() {
    sky.r = sky.r  -1
    sky.g = sky.g  -1
    sky.b = sky.b  -1
     background(sky.r, sky.g, sky.b);
}

function drawBox(){
    push();
    fill ("#564137ff")
    rect(box.x,box.y,480,700)
    pop();
    box.y = box.y - 1
    box.y = constrain(box.y,0,600)
    console.log(box.x,box.y)
}


/**
 My draws
*/


function drawDot(){
    push();
    fill ("#ff0000ff")
    ellipse(mouseX, mouseY, 30, 30);
    pop();
}


function drawHead() {
    push();
    fill(215,175,120);
    noStroke();
    circle(240,300,220,300);
    pop();
}

function drawJaw() {
    push();
    fill(215,175,120);
    noStroke();
    square(140, 250, 200, 50);;
    pop();
}

function drawNeck() {
    push();
    fill(200,135,105);
    noStroke();
    square(183, 390, 115, 43);;
    pop();
}

function drawShirt() {
    push();
    fill(80,115,80);
    noStroke();
    square(90, 470, 300, 50);;
    pop();
}

function drawSide() {
    push();
    fill(0,50,255);
    noStroke();
    rect(120, 230, 20, 200);
    rect(337, 230, 15, 190);
    pop();
}
function drawBang() {
    push();
    fill(hair.r,hair.g,hair.b);
    noStroke();
    ellipse(210,230,180,120);
    ellipse(292,240,120,110);
    quad(120, 340, 250, 285, 160, 230, 130, 250);
    quad(300, 340, 260, 285, 160, 230, 130, 250);
    quad(350, 340, 250, 285, 250, 230, 350, 250);
    rect(120, 230, 20, 200);
    rect(337, 230, 15, 190);
    pop();
}


function drawHair() {
    push();
    fill(hair.r,hair.g,hair.b);
    noStroke();
    ellipse(140,400,50,200);
    ellipse(330,400,50,200);
    rect(140, 300, 200, 200);
    pop();
}

function drawEye() {
    push();
    fill(eye.fill);
    noStroke();
    bezier(170, 360, 240, 410, 240, 305, 170, 360);
    bezier(310, 360, 240, 410, 240, 305, 310, 360);
    pop();
}

//Making blink
function blink(){
    if (mouseIsPressed) {
        eye.fill = eye.closed
    }
    else {
        eye.fill = eye.open
    }
}
