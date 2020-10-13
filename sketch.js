
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin1,Paper1,groundobj;
var world;


function setup() {
	createCanvas(1600, 700);
  rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  dustbin1 = new dustbin(1200,650);
  groundobj = new Ground(width/2,670,width,20);
  Paper1 = new Paper(200,450,70);
  var render = Render.create({
     element: document.body,
      engine: engine,
       options: { 
         width: 1600,
          height: 700,
           wireframes: false 
          } });

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  dustbin1.display();
  Paper1.display();
  groundobj.display();

 

  drawSprites();
  
}
function keyPressed() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(Paper1.body,Paper1.body.position,{x: 130,y:-145})
  }
}


