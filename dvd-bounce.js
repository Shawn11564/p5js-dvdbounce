// ball size : DON'T CHANGE
let size = 30;

// color variables
let fll = 255;
let dir = false;
let timer = 0;

// starting position
let x;
let y;

// starting direction
let xDirection;
let yDirection;

// ball speed
let xSpeed = 5.6;
let ySpeed = 5.6;

function setup() {
  createCanvas(800, 600);
  textSize(50);
  
  // set starting position
  x = random(width - 25, 25);
  y = random(height - 25, 25);
  
  // set x and y directions
  xDirection = random(0.1, 3);
  yDirection = random(0.1, 3);
}

function draw() {
  
  fill(255);
  text('Click to Restart', width / 2, 25);
  
  // party controller
  if (timer > 0) {
    background(random(255), random(255), random(255));
    timer--;
  } else {
    background(0);
  }
  
  fill(fll);
  ellipse(x, y, 50, 50);
  
  // ball move
  x = x + xSpeed * xDirection;
  y = y + ySpeed * yDirection;
  
  // ball bounce
  if (x > (width - 25) || x < 25) {
    xDirection *= -1;
  }
  if (y > (height - 25) || y < 25) {
    yDirection *= -1;
  }
  
  // fade control
  /*
  if (dir == false) {
  	fll -= 5;
    if (fll <= 0) {
      dir = true;
    }
  } else if (dir == true) {
  	fll += 5;
    if (fll >= 255) {
      dir = false;
    }
  }
  */
  
  // corner hit check
  if (x <= 25 && y <= 25 || x >= (width - 25) && y <= 25 || x <= 25 && y >= (height - 25) || x >= (width - 25) && y >= (height - 25)) {
      timer = 200;
  }
}

function mousePressed() {
  // RESET GAME
  // set starting position
  x = random(width - 25, 25);
  y = random(height - 25, 25);
  
  // set x and y directions
  xDirection = random(0.1, 3);
  yDirection = random(0.1, 3);
}
