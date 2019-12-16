function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(230);
  
 
  var x = 0
  while( x  <=  height ){
  ellipse(x,70,70,70)
  x = x + 100;
  }
  
  for (var x = 50; x < 100; x = x + 10) {
     ellipse(x,200,100,100)
  }
  
      }