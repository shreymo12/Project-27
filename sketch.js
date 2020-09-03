
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(150,100,150,20);
	bob1 = new Bob(90,210);
	bob2 = new Bob(120,210);
	bob3 = new Bob (150,210);
	bob4 = new Bob (180,210);
	bob5 = new Bob (210,210);

	rope1 = new Rope(bob1.body,roof.body,-54,-10);
	rope2 = new Rope(bob2.body,roof.body,-24,-10);
	rope3 = new Rope(bob3.body,roof.body,6,-10);
	rope4 = new Rope(bob4.body,roof.body,36,-10);
	rope5 = new Rope(bob5.body,roof.body,66,-10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  

  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-105,y:205});
	 
  
	}

}



