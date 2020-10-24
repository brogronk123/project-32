const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;
var polygon;
var platform,platform2;
var backgrond;
var score;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  score = 0;
  var options = {
    density: 1
  }
  polygon = Bodies.circle(50,200,20,options);
  World.add(world, polygon);

  SlingShot = new SlingShot(this.polygon,{x:100,y:200});

  platform = new Ground(420,400,300,20);

  platform2 = new Ground(420,140,300,10);

  
  //level one
  block1 = new Block(330,380,30,40);
  block2 = new Block(360,380,30,40);
  block3 = new Block(390,380,30,40);
  block4 = new Block(420,380,30,40);
  block5 = new Block(450,380,30,40);
  block6 = new Block(480,380,30,40);
  block7 = new Block(510,380,30,40);
  //level two
  block8 = new Block(360,330,30,40);
  block9 = new Block(390,330,30,40);
  block10 = new Block(420,330,30,40);
  block11 = new Block(450,330,30,40);
  block12 = new Block(480,330,30,40);
  //level three
  block13 = new Block(390,300,30,40);
  block14 = new Block(420,300,30,40);
  block15 = new Block(450,300,30,40);
  //level four
  block16 = new Block(420,250,30,40);

  //level one
  block17 = new Block(330,100,30,40);
  block18 = new Block(360,100,30,40);
  block19 = new Block(390,100,30,40);
  block20 = new Block(420,100,30,40);
  block21 = new Block(450,100,30,40);
  //level two
  block22 = new Block(360,87,30,40);
  block23 = new Block(390,87,30,40);
  block24 = new Block(420,87,30,40);
  //level three
  block25 = new Block(390,75,30,40);
}

function draw() {
  background(255,255,255);  

  Engine.update(engine);

  platform.display();
  platform2.display();
  fill("#87CEEA");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("#FFC0CB");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("#3FE0D0");
  block13.display();
  block14.display();
  block15.display();
  fill("#808080");
  fill("#87CEEA");
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("#3FE0D0");
  block22.display();
  block23.display();
  block24.display();
  fill("#FFC0CB");
  block25.display();
  fill("yellow");
  ellipse(this.polygon.position.x,this.polygon.position.y,20);
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  fill("green");
  text("SCORE: "+score, 700, 40);
  SlingShot.display();


  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX, y:mouseY});
}
function mouseReleased(){
  SlingShot.fly();
}

function keyPressed(){
  if(keyCode == 32){
    SlingShot.attach(this.polygon);
  }
}