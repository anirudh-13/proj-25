const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;	

var engine, world;
var trash,trashcan;
var ground1;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	trash = new Paper(60,60, 30);
	ground1 = new Ground(200, 600, 2000,10);
	trashcan  = new Dustbin(600, 535, 150, 150);

}
function preload(){
}


function draw() {
  background("white");
  Engine.update(engine);
  
  ground1.display();
  trashcan.display();
  trash.display();

  
  
  keyPressed();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(trash.body, {x: trash.body.position.x,y: trash.body.position.y}, {x:0.1, y: 1.3});
		Matter.Body.setVelocity( trash.body, {x: 10, y: -10});
	}
        
}


