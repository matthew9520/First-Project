const NUM_DOTS = 100;
const LINK_THRESHOLD = 200;
let ballArray = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    // Populate all arrays
    for (let i = 0; i < NUM_DOTS; i++) {
        ballArray[i] = { xpos: random(0, width), ypos: random(0, height), xdir: random(-5, 5), ydir: random(-5, 5), distance: [] }
    }
}

function draw() {
    background(30); // For each ball
    for (let i = 0; i < NUM_DOTS; i++) {
        fill(random(0, 255), random(0, 255), random(0, 255));
        ellipse(ballArray[i].xpos, ballArray[i].ypos, 10, 10);
        for (let j = 0; j < ballArray.length; j++) {
            ballArray[i].distance[j] = calcDistance(ballArray[i].xpos, ballArray[i].ypos, ballArray[j].xpos, ballArray[j].ypos);
            if (ballArray[i].distance[j] < LINK_THRESHOLD) {
                stroke(random(0, 255), random(0, 255), random(0, 255));
                line(ballArray[i].xpos, ballArray[i].ypos, ballArray[j].xpos, ballArray[j].ypos);
            }
        }
        // Update position of this ball
        ballArray[i].xpos = ballArray[i].xpos + ballArray[i].xdir;
        ballArray[i].ypos = ballArray[i].ypos + ballArray[i].ydir;

        // TO-DO: If the ball has hit the borders, bounce
        if (ballArray[i].xpos > width || ballArray[i].xpos < 0) {
            ballArray[i].xdir = ballArray[i].xdir * -1;
        }
        if (ballArray[i].ypos > height || ballArray[i].ypos < 0) {
            ballArray[i].ydir = ballArray[i].ydir * -1;
        }
    }

}

function calcDistance(x1, y1, x2, y2) {
    let dist = sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    return dist;
}