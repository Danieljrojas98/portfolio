function setup() {
  createCanvas(400, 400,WEBGL);
}

function draw() {
  background(220);
  
for (var x = 0; x < width;x += 200){
  for (var y = 0; y < height;y += 200){
  rotateX(frameCount*0.01);
  rotateY(frameCount*0.01);
  box(x-100);
    let c= color(80,160,190)
     fill (c)
if(mouseIsPressed){
  sphere(100);
  
  }
  }
}
}