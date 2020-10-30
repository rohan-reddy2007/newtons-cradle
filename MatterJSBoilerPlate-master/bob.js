class bobClass{
    constructor(x, y) {
      
      var options = {
          'restitution':1.1,
          'friction':10.1,
          'density':10.1
      }
      this.body = Bodies.circle(x, y,25,options);
      
      
      
    
      World.add(world, this.body);
    }
    display(){
      

      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(2);
      stroke("#266AD1");
      fill("#266AD1");
      ellipse(0,0);
      pop();
    }
  };