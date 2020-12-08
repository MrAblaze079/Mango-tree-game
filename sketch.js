
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground;
var kid , kidIMG;

var tree, treeIMG;








function preload()
{
	kidIMG = loadImage("Plucking mangoes/boy.png");	
	treeIMG = loadImage("Plucking mangoes/tree.png");

}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground (400,590,800,15);

	kid = createSprite (200,530,30,70);
	kid.addImage(kidIMG);
	kid.scale = 0.1;

	tree = createSprite (600,350,50,50)
	tree.addImage(treeIMG);
	tree.scale = 0.4




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	ground.display();














  drawSprites();
 
}



