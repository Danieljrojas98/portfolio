
var radio = 0
var res = 10

function setup() {
  createCanvas(800, 800);
  noFill()
  frameRate(50)
}
function draw() {
 
  
  var x = res*cos(radio)
  var y = res*sin(radio)
  radio+=0.05
  res +=0.5
  
  push();
  translate(height/2,width/2)
  strokeWeight(x/2)
  stroke(30,1)
  ellipse(x,y,30,20,20)
  pop();
  push();
   triangle(x,y,30,20,20,20)
  strokeWeight(y)
  fill(100)
  stroke(10,10)
  
 

  
  
  
  
}