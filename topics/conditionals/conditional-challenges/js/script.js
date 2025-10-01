/**
 * Circle Master
 * Olivia Ho
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */

const puck = {
  x: 200,
  y: 300,
  size: 100,
  fill: "#ff0000"
};



const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#000000"
};

const goal = {
    x:200,
    y:-50,
    size:300, 
    fill:"#acddedff",
    fills: {
    noOverlap: "#acddedff", // red for no overlap
    overlap: "#00ff00" // green for overlap
  }
}

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}


/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
  background("#aaaaaa");
  
  // Move user circle
  moveUser();
  
  // Draw the user and puck
  goalYay();
  drawGoal();
  drawUser();
  drawPuck();
  movePuck(); 
}

//Adding movePuck
function movePuck() {
    const d = dist(user.x, user.y, puck.x, puck.y);
    const overlap = (d < user.size/2 + puck.size/2);
    if (overlap) {
    if (user.x <= puck.x) {  
        puck.x = puck.x + 2 
    }
    if (user.x >= puck.x) {  
        puck.x = puck.x - 2
    }
    if  (user.y <= puck.y) {  
        puck.y = puck.y + 2
    }
     if  (user.y >= puck.y) {  
        puck.y = puck.y - 2
    }
    }    
    }

//Making goal change colour
function goalYay (){
    const d = dist(puck.x,puck.y,goal.x,goal.y)
    const overlap = (d < puck.size/2 + goal.size/2);
if (overlap) {
    goal.fill = goal.fills.overlap;
  }
  else {
    goal.fill = goal.fills.noOverlap;
  }
}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
  push();
  noStroke();
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
  pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
  push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);
  pop();
}

function drawGoal() {
    push();
    fill(goal.fill);
    ellipse(goal.x,goal.y,goal.size)
    pop();
}
