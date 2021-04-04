const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world;

function preload(){
    pImg=loadImage("polygon.png")
}

function setup(){
    engine=Engine.create();
    world=engine.world;

    createCanvas(1300,650);

    var options={
        isStatic: false,
        restitution: 0
    }

    polygon=Bodies.rectangle(200,300,70,70,options)
    World.add(world,polygon)

    chain=new Chain(polygon,{x: 200,y:300})

    groundObj=new Ground(650,640,1300,25)

    stand= new Ground(780,500,300,20)

    box1=new Box(800,460,40,60,)
    box2=new Box(755,460,40,60,)
    box3=new Box(710,460,40,60,)
    box4=new Box(665,460,40,60,)
    box5=new Box(845,460,40,60,)
    box6=new Box(890,460,40,60,)
    box7=new Box(780,399,40,60,)
    box8=new Box(825,399,40,60,)
    box9=new Box(870,399,40,60,)
    box10=new Box(735,399,40,60,)
    box11=new Box(690,399,40,60,)
    box12=new Box(715,338,40,60,)
    box13=new Box(760,338,40,60,)
    box14=new Box(805,338,40,60,)
    box15=new Box(850,338,40,60,)
    box16=new Box(830,277,40,60,)
    box17=new Box(785,277,40,60,)
    box18=new Box(740,277,40,60,)

    Engine.run(engine);
}

function draw(){
    background(0);

    imageMode(CENTER);
    image(pImg,polygon.position.x,polygon.position.y,70,70)

    groundObj.display();
    stand.display();
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

    chain.display();
    //Engine.updatebox2.display();(engine)
}

function keyPressed(){
    if(keyCode===32){
        chain.attach(polygon);
    }
}

function mouseDragged(){
    Matter.Body.setPosition(polygon,{x: mouseX,y: mouseY})
}

function mouseReleased(){
    chain.fly();
}

