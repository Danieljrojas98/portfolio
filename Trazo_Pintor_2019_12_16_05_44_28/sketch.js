let foto;

function preload() {
  foto = loadImage('Nubes.jpg');
} // no carga imagen.


function setup() {
  createCanvas(foto.width, foto.height);
  rectMode(CENTER);
  noLoop();
}

let sp = 5; // spacer o "espaciador"

function draw() {
  background(foto);
  noStroke();
  for (let y = 0; y < height; y += sp) {
    for (let x = 0; x < width; x += sp) {
      let col = foto.get(x, y);
      Trazopintor(x, y, col);
    }
  }
}

function Trazopintor(x, y, col){
 let b = brightness(col);
  let r = red(col);
  let g = green(col);
  let bl = blue(col);
  let n =  round(map(b, 0, 200, 50, 10));
  for(let i = 0; i < n; i++){
   let nx = random(-sp, sp);
    let ny = random(-sp, sp);
    
    let c = color( 200 - r, 200 - g, 200 - bl);
    fill(c);
  ellipse(x + nx, y + ny, 10,10);
  }
  
}