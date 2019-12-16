function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50);
  drawCircle(width/2,height/2,200);
}
function drawCircle (x,y,r) {
    stroke(255);
    noFill();
    ellipse(x, y, r, r);
    if (r > 2){
      drawCircle(x + r/2, y, r/2);
      drawCircle(x - r/2, y, r/2);
      drawCircle(x- r/4, y - r/2, r/2)
      
    }
}