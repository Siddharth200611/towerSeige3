class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:0.7,
          friction:2,
          density:1.5
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      if (this.body.speed<5){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("yellow");
      rect(pos.x, pos.y, this.width, this.height);
      }
      else {
        World.remove(world, this.body);
        score=score+0.01;
      }
    }
  };