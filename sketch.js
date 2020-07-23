const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;

function preload() {
   
}

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,5);
    ground1= new Ground(600,300,360,15);
    ground2 = new Ground(1000,250,250,15);

    bird1 = new Bird(100,220);

    slingshot = new SlingShot(bird1.body,{x:100, y:200});

    //row1 ground1
    box1 = new Box2(449,272,40,40);
    box2 = new Box2(491,272,40,40);
    box3 = new Box(533,272,40,40);
    box4 = new Box2(575,272,40,40);
    box5 = new Box2(617,272,40,40);
    box6 = new Box(659,272,40,40);
    box7 = new Box2(701,272,40,40);
    box8 = new Box2(743,272,40,40);

    //row 2 ground2
    box9 = new Box(491,230,40,40);
    box10 = new Box2(533,230,40,40);
    box11 = new Box(575,230,40,40);
    box12 = new Box(617,230,40,40);
    box13 = new Box2(659,230,40,40);
    box14 = new Box(701,230,40,40);

    //row3 ground1
    box15 = new Box(533,188,40,40);
    box16 = new Box2(575,188,40,40);
    box17 = new Box2(617,188,40,40);
    box18 = new Box(659,188,40,40);

    //row4 ground1
    box19 = new Box(575,146,40,40);
    box20 = new Box(617,146,40,40);

    //row5  ground1
    //box21 = new Box(595,104,40,40);

    //row1 ground2
    box22 = new Box(900,222,30,30);
    box23 = new Box2(932,222,30,30);
    box24 = new Box(964,222,30,30);
    box25 = new Box2(996,222,30,30);
    box26 = new Box(1028,222,30,30);
    box27 = new Box2(1060,222,30,30);
    box28 = new Box(1092,222,30,30);

    //row2 ground2
    box29 = new Box(932,178,30,30);
    box30 = new Box2(964,178,30,30);
    box31 = new Box(996,178,30,30);
    box32 = new Box2(1028,178,30,30);
    box33 = new Box(1060,178,30,30);

    //row3 ground2
    box34 = new Box(964,136,30,30);
    box35 = new Box2(996,136,30,30);
    box36 = new Box(1028,136,30,30);
    
    //row4 ground3
    box37 = new Box(996,94,30,30);


   
}

function draw(){
    background("#0EEAF1");

    noStroke();
    textSize(30);
    fill("white");
    text("Press SPACE to reattach the bird.",(width/2)-200, 50)

    Engine.update(engine);
    
    ground.display();
    ground1.display();
    ground2.display();
    bird1.display();
    slingshot.display();  
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    //box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
}


function mouseDragged(){
    Matter.Body.setPosition(bird1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird1.body);
        Matter.Body.setPosition(bird1.body, {x: 200 , y: 50});
    }
}