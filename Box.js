class Box {
  constructor(x, y,width,height){
    var options = {
      isStatic:false,
      restitution: 0.8
    }
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
  }


  display(){
  
    rectMode(CENTER);
    push();
  
    fill("#F10EEA");
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    pop();
  }
};
