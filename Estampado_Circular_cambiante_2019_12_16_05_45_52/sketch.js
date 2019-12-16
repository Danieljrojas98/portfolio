
let C1,C2;  
function preload(){
  C1 =loadImage('P5/C2.png');
  C2 = loadImage('P5/C1.png');
 
}
function setup() {
  createCanvas(600, 600);
  background(200)

}
function draw() {
}
function stamp(x , y){
  push();
  imageMode (CENTER);
  image(cir, x, y, 100, 100);
  pop();
}
function mousePressed() {
  LOS = [C1,C2];
  cir = random(LOS);
  stamp(mouseX, mouseY);
}