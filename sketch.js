let ps;


function setup() {
  createCanvas(500, 500);
  ps = new Particlesystem(200,100,10);
}

function draw() {
  background(220);

  ps.display();
  ps.update();

}

function mousePressed() {

  ps.shatter();
}
