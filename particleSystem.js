class Particlesystem {

constructor(x,y,r) {
 this.particles = [];
 let rows = 20;
 let cols = 20;
 for (let i = 0; i < cols * rows; i++) {
 this.addParticle(x + (i % cols) * r, y + (floor(i / rows)) * r, r); // Difficult to interpret
}
}


addParticle(x,y,r) {
  this.particles.push(new Particle(x,y,r));

}



display() {
  for (let particle of this.particles) {
    particle.display();
  }


}


shatter() {
  for (let particle of this.particles) {
    let force = p5.Vector.random2D();
    force.mult(10);
    particle.applyForce(force);

}
}


update() {
  for (let particle of this.particles) {
    particle.update();
  }
}

}
