class Bird{
  constructor(x,y){
    var options = {
      isStatic: false,
    }
  this.width= this.width;
  this.height= this.height;
  this.image = loadImage("hexagon.png");
   this.body = Bodies.rectangle(x,y,20,20);
   World.add(world,this.body);
  }

  display(){
    push();
    imageMode(CENTER);
    image(this.image,this.body.position.x, this.body.position.y,this.width, this.height);
    pop();
  }
}