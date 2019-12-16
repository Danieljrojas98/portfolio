function setup() {
  createCanvas(400, 400);
  strokeWeight(10)
}

function draw() {
  background(220);
  for(var x = 1;x < 400; x= x+20){
   line(0,x,400,x)
  }
  triangle(200,100,100,300,300,300)
  line(120,260,120,300)
  line(140,220,140,300)
  line(160,185,160,300)
  line(180,140,180,300)
  line(200,110,200,300)
  line(220,130,220,300)
  line(240,180,240,300)
  line(260,220,260,300)
  line(280,260,280,300)
  
   
}