
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rightwall,leftwall, paper;
var ground;
var dustbinimg,paperimg;
function preload(){
paperimg = loadImage('paper.png');
dustbinimg=loadImage('dustbinimg.jpeg');
}

function setup() {
	createCanvas(800, 400);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
paper = new Paper(100,100,30);
	leftwall = new Dustbin(550, 320, 20, 120);
	rightwall = new Dustbin(750, 320, 20, 120);
	ground = new Ground(400,390,800,75)
	
	Engine.run(engine);
}

function draw() {
  	rectMode(CENTER);
  	background('yellow');
 

	ground.display();
	imageMode(CENTER)
	image(dustbinimg, 605, 302, 300, 200);
	paper.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode=== 32){
		Matter.Body.applyForce(paper.body, {x:0,y:0},{x:55,y:-45});
	}
}
