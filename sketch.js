let angleX = 0;
let angleY = 0;
let lastTouchX = 0;
let lastTouchY = 0;
let touchDist = 0;
let zoomFactor = 1;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB);
  angleMode(DEGREES);
  stroke(205, 50, 100);
  strokeWeight(4);


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(230, 50, 15);
  // orbitControl(4, 4);//3D mouse control
  rotateX(angleX);
  rotateY(angleY);
  scale(zoomFactor);


  rotateX(-30);

  //zinnia();
  //camellia();
  //lotus();
  dahlia();



}


function dahlia() {
  for (let r = 0; r <= 1; r += 0.03) {
    beginShape(POINTS);
    stroke(20 - r * 20, 80 - r * 40, 60 + r * 40);
    for (let theta = 0; theta <= 180 * 30; theta += 1.5) {
      let phi = (180 / 1.75) * Math.exp(-theta / (11 * 180));
      let petalCut = 0.6 + abs(asin(sin(4.75 * theta)) + 420 * sin(4.75 * theta)) / 2000;
      let hangDown = 2.3 * pow(r, 2) * pow(0.9 * r - 1, 2) * sin(phi);

      if (0 < petalCut * (r * sin(phi) + hangDown * cos(phi))) {
        let pX = 300 * (1 - theta / 20000) * petalCut * (r * sin(phi) + hangDown * cos(phi)) * sin(theta);
        let pY = -300 * (1 - theta / 20000) * petalCut * (r * cos(phi) - hangDown * sin(phi));
        let pZ = 300 * (1 - theta / 20000) * petalCut * (r * sin(phi) + hangDown * cos(phi)) * cos(theta);
        vertex(pX, pY, pZ);
      }
    }
    endShape();
  }
}

function touchStarted() {
  if (touches.length === 2) {
    // Calculate the initial distance between two touches for zooming
    touchDist = dist(touches[0].x, touches[0].y, touches[1].x, touches[1].y);
  } else {
    lastTouchX = touches[0].x;
    lastTouchY = touches[0].y;
  }
  return false;
}

function touchMoved() {
  if (touches.length === 2) {
    // Pinch zoom
    let newTouchDist = dist(touches[0].x, touches[0].y, touches[1].x, touches[1].y);
    zoomFactor *= newTouchDist / touchDist;
    touchDist = newTouchDist;
  } else if (touches.length === 1) {
    // Rotate
    angleY += (touches[0].x - lastTouchX) * 0.2;
    angleX += (touches[0].y - lastTouchY) * 0.2;
    lastTouchX = touches[0].x;
    lastTouchY = touches[0].y;
  }
  return false;
}



function camellia() {
  for (let r = 0; r <= 1; r += 0.02) {
    beginShape(POINTS);
    stroke(20 - r * 20, 80 - r * 40, 60 + r * 40);

    for (let theta = 0; theta <= 180 * 20; theta += 1.5) {
      let phi = (180 / 2.5) * Math.exp(-theta / (16 * 180));
      let petalCut = 0.75 + abs(asin(sin(2.75 * theta)) + 80 * sin(2.75 * theta)) / 480;
      let hangDown = 1.4 * pow(r, 2) * pow(1.0 * r - 1, 2) * sin(phi);

      if (0 < petalCut * (r * sin(phi) + hangDown * cos(phi))) {
        let pX = 300 * (1 - theta / 6000) * petalCut * (r * sin(phi) + hangDown * cos(phi)) * sin(theta);
        let pY = -300 * (1 - theta / 6000) * petalCut * (r * cos(phi) - hangDown * sin(phi));
        let pZ = 300 * (1 - theta / 6000) * petalCut * (r * sin(phi) + hangDown * cos(phi)) * cos(theta);
        vertex(pX, pY, pZ);
      }
    }
    endShape();
  }
}



function rose() {
  for (let r = 0; r <= 1; r += 0.02) {
    beginShape(POINTS);
    stroke(20 - r * 20, 80 - r * 40, 60 + r * 40);
    for (let theta = -2 * 180; theta <= 180 * 15; theta += 2) {
      let phi = (180 / 2) * Math.exp(-theta / (8 * 180));
      let petalCut = 1 - (1 / 2) * pow((5 / 4) * pow(1 - ((3.6 * theta % 360) / 180), 2) - 1 / 4, 2);
      let hangDown = 2 * pow(r, 2) * pow(1.3 * r - 1, 2) * sin(phi);

      if (0 < petalCut * (r * sin(phi) + hangDown * cos(phi))) {
        let pX = 300 * petalCut * (r * sin(phi) + hangDown * cos(phi)) * sin(theta);
        let pY = -300 * petalCut * (r * cos(phi) - hangDown * sin(phi));
        let pZ = 300 * petalCut * (r * sin(phi) + hangDown * cos(phi)) * cos(theta);
        vertex(pX, pY, pZ);
      }
    }
    endShape();
  }
}

function zinnia() {
  for (let r = 0; r <= 1; r += 0.02) {
    beginShape(POINTS);
    stroke(20 - r * 20, 80 - r * 40, 60 + r * 40);
    for (let theta = -2 * 180; theta <= 180 * 15; theta += 1.5) {
      let phi = (180 / 2) * Math.exp(-theta / (16 * 180));
      let petalCut = 1 - (1 / 2) * pow((5 / 4) * pow(1 - ((10.4 * theta % 360) / 180), 2) - 1 / 12, 2);
      let hangDown = 1.3 * pow(r, 2) * pow(1.25 * r - 1, 2) * sin(phi);

      if (0 < petalCut * (r * sin(phi) + hangDown * cos(phi))) {
        let pX = 300 * (1 - theta / 6500) * petalCut * (r * sin(phi) + hangDown * cos(phi)) * sin(theta);
        let pY = -300 * (1 - theta / 6500) * petalCut * (r * cos(phi) - hangDown * sin(phi));
        let pZ = 300 * (1 - theta / 6500) * petalCut * (r * sin(phi) + hangDown * cos(phi)) * cos(theta);
        vertex(pX, pY, pZ);
      }
    }
    endShape();
  }
}

function lotus() {
  for (let r = 0; r <= 1; r += 0.02) {
    beginShape(POINTS);
    stroke(20 - r * 20, 80 - r * 40, 60 + r * 40);
    for (let theta = 0; theta <= 180 * 8; theta += 1.5) {
      let phi = (180 / 2.5) * Math.exp(-theta / (6.5 * 180));
      let petalCut = 0.5 + abs(asin(sin(2.25 * theta)) + 120 * sin(2.25 * theta)) / 360;
      let hangDown = 2.3 * pow(r, 2) * pow(0.8 * r - 1, 2) * sin(phi);

      if (0 < petalCut * (r * sin(phi) + hangDown * cos(phi))) {
        let pX = 300 * (1 - theta / 10000) * petalCut * (r * sin(phi) + hangDown * cos(phi)) * sin(theta);
        let pY = -300 * (1 - theta / 10000) * petalCut * (r * cos(phi) - hangDown * sin(phi));
        let pZ = 300 * (1 - theta / 10000) * petalCut * (r * sin(phi) + hangDown * cos(phi)) * cos(theta);
        vertex(pX, pY, pZ);
      }
    }
    endShape();
  }
}
