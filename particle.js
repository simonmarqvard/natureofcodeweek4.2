class Particle {

  constructor(x,y,r) {
    this.location = createVector(x,y);
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
    this.r = r;
    this.lifespan = 255;
  }

  display() {
    stroke(0);
    fill(0);
    ellipse(this.location.x,this.location.y,this.r,this.r);
  }

  update() {
    this.location.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.acceleration.mult(0);
    this.lifespan = this.lifespan - 2;
  }

  finished() {
    return (this.lifespan < 0);
  }

  applyForce(force){
    this.acceleration.add(force);
  }
}
