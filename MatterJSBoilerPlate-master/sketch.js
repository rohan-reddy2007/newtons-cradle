
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob = new bobClass(270,350);
    bob2 = new bobClass(320,350);
    bob3 = new bobClass(370,350);
    bob4 = new bobClass(420,350);
    bob5 = new bobClass(470,350);
    bob6 = new bobClass(650,200);

    roof = new Roof(400,350,300,20);

    ropebob = new ropeClass(bob.body,{x:270, y:350});
    ropebob2 = new ropeClass(bob2.body,{x:320, y:350});
    ropebob3 = new ropeClass(bob3.body,{x:370, y:350});
    ropebob4 = new ropeClass(bob4.body,{x:420, y:350});
    ropebob5 = new ropeClass(bob5.body,{x:470, y:350});
    ropebob6 = new ropeClass(bob6.body,{x:520, y:350});


	Engine.run(engine);
  
}


function draw() {
  background(255);
  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();

  roof.display();

  ropebob.display();
  ropebob2.display();
  ropebob3.display();
  ropebob4.display();
  ropebob5.display();
  ropebob6.display();

  drawSprites();
 
}



