var m = 50 ;
function setup() {
  createCanvas(800, 800);
  strokeWeight =0.5
}

function draw() {
  background(250);
  for (let i = 0; i < 10000; i++) {
    push();
  var posX = random (m,width-m);
  var posY = random (m,height-m);
    translate(posX,posY)
    rotate(random(TWO_PI))
    line(-30,0,30,0)
    pop();
  }
}