const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = '0';
var engine, world;
var Ground2,Ground3
var block8,block9,block10,block11,block12
var block13,block14,block15
var slingshot,chain1
function preload(){
IMG = loadImage('polygon.png');
}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    Ground2 = new Ground(400,270,290,20);
    Ground3 = new Ground(900,200,290,20);
    //level two 
   block8 = new Blocks(330,235);
   block9 = new Blocks(360,235);
block10 = new Blocks(390,235);
block11 = new Blocks(420,235);
block12 = new Blocks(450,235);
//level three
block13 = new Blocks(360,192);
block14 = new Blocks(390,192);
block15 = new Blocks(420,192);
//level 4
block16 = new Blocks(390,145);



  //level two 
  block17 = new Blocks(900,165);
  block18 = new Blocks(930,165);
block19 = new Blocks(960,165);
block20 = new Blocks(870,165);
block21 = new Blocks(835,165);
//level three
block22 = new Blocks(855,125);
block23 = new Blocks(885,125);
block24 = new Blocks(910,125);
//level 4
block25 = new Blocks(880,80);


polygon =  Bodies.circle(50,200,20);
World.add(world,polygon);
chain1 = new SlingShot(polygon,{x:100,y:200});

}


function draw(){
  text('score:'+score,750,40 )
    background(0);
    Engine.update(engine);
    //strokeWeight(3);
    Ground2.display();
    Ground3.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display()
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    imageMode(CENTER);
image(IMG,polygon.position.x,polygon.position.y,50,50);

    }
    function mouseDragged(){
  
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }