const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,conector,hanger;

/*function preload()
{
	
}*/

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=new Paper(400,350,70);
	ground=new Ground();
	hanger=new Hanger(400,250,200,30);
    conector=new Connector(ball.body,hanger.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  hanger.display();
  conector.display();
}



