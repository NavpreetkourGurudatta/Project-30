class Blocks {
  constructor(x, y) {
    var options = {
        isStatic : true,
        'friction':0.8,
        'density':5.0,
    }
    
    this.body = Bodies.rectangle(x, y,30,40, options);
    this.width = 30;
    this.height = 40;
    
    World.add(world, this.body);
  }
  display(){ 
    var pos =this.body.position;
    
    push();
    strokeWeight(12);
    stroke('purple');
    translate(pos.x, pos.y,pos.width,pos.height);
    rectMode(CENTER);
    fill('pink');
    rect(0, 0, this.width, this.height);
    pop();
  }
};
