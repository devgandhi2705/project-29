class Box2 {
  constructor(x, y,width,height){
    var options = {
      isStatic:false,
      restitution: 1
    }
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
  }


  display(){
  
    rectMode(CENTER);
    push();
  
    fill("#EAF10E");
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    pop();
  }
};
