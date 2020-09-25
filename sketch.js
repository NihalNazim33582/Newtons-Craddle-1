
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball1,ball2,ball3,ball4,ball5;
var chain1,chain2,chain3,chain4,chain5;
var diameter;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

	diameter = 50

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2,150,width/2,50);

	ball1 = new Ball(280,400,60);
	ball2 = new Ball(320,400,60);
	ball3 = new Ball(width/2,400,60);
	ball4 = new Ball(470,400,60); 
	ball5 = new Ball(520,400,60);


	chain1 = new Chain(ball1.body,roof.body,-120,0);
	chain2 = new Chain(ball2.body,roof.body,-60,0);
	chain3 = new Chain(ball3.body,roof.body,0,0);
    chain4 = new Chain(ball4.body,roof.body,60,0);
	chain5 = new Chain(ball5.body,roof.body,120,0);
	
	Engine.run(engine);

}


function draw() {
  	rectMode(CENTER);
  	background(255);

	roof.display();

	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();

	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();

	drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(ball5.body,ball5.body.position,{x:500,y:500});
  
	}
}