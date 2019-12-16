
var button
function setup() {
  createCanvas(400, 400,WEBGL);
  detailX = createSlider(4, 24, 3);
  detailX.position(10, height + 5);
  detailX.style('width', '80px');
  }

function draw() {
  background(0);
if(mouseIsPressed){
  rotateX(frameCount*0.01)
  rotateY(frameCount*0.01)

}else{
    rotateX(frameCount*0.001)
    rotateY(frameCount*0.001)
  }
  box(60)  
 
 torus(80,5,detailX.value(),10)
    rotateY(millis() / 800);
  torus(150, 10, detailX.value(), 10);



}