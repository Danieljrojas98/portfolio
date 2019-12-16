function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);
  rotateX(frameCount *0.02);
  rotateY(frameCount *0.02);
  cylinder(30,30)
  if(mouseIsPressed){
    cylinder(30,30);
  }else{
    box(100)
    rotateY(frameCount *0.001)
    rotateX(frameCount *0.001)
  }
}