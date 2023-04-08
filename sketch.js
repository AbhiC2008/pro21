
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var ball_options = {
	isStatic:false,
	restitution: 0.3,
	friction:0,
	density:1.2
}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj = new ground(width/2,670,width,20);
	LeftSide = new ground(1100,600,20,120);
Matter.bodies.circle(20,20,10,ball_options,maxsides);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function keypressed(){
	if (keycode === UP_ARROW){
		Matter.Body.applyForce(ball.Body,ball_position,)
	}
}


