
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bar1,bar2,bar3;
var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 
	var bar1_options ={
		'friction': 1,
	    'isStatic': true
	}

	bar1 = Bodies.rectangle(650,690,20,50);
	World.add(world,bar1);

	var bar2_options ={
		'friction': 1,
	    'isStatic': true
	}

	bar2 = Bodies.rectangle(680,690,50,20);
	World.add(world,bar2);

    var bar3_options ={
		'friction': 1,
	    'isStatic': true
	}

	bar3 = Bodies.rectangle(740,690,20,50);
	World.add(world,bar3);

	ball = new Ball(600,690,200,PI/7);
	ground = new Ground(400,695,800,5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


   ball.rectMode(CENTER);
   ground.rectMode(CENTER);


  drawSprites();


	  
  }
 
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}







