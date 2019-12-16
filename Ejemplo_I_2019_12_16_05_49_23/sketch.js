function setup() {
  createCanvas(400, 400);
}

function draw() {
 
  background(200);
  //draw a circle at (200,300,200) with diameter of 30
  circle(mouseX,200,mouseY,200);
c = color('hsla(180, 90%, 60%, 0.5)');
fill(c); // Use updated 'c' as fill color
  
 if (mouseIsPressed){
   circle(mouseX,200,mouseY,100);
    }else{
      ellipse(mouseX,200,mouseY,100)
       c=color(100,200,255)
      fill(c) //Use updated 'c' as fill color

    }
}