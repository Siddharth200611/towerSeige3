
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


//platform1
var block1,block2,block3,block4,block5,block6;
var block7,block8,block9,block10;
var block11,block12;
var block13;
//platform2
var block14,block15,block16,block17,block18;
var block19,block20,block21;
var block22;
//base
var platform1,platform2;
//polygon
var polygon;
//constrint
var slingshot;

var score;

function preload()
{
	
}


function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

  polygon=new Polygon(200,300,50)
	//Create the Bodies Here.
platform1=new Platform(700,400,200,10)	
platform2=new Platform(1000,200,200,10)	
platform3=new Platform(600,550,1200,50)	
//platform 1
block1=new Block (620,370,30,40)
block2=new Block (650,370,30,40)
block3=new Block (680,370,30,40)
block4=new Block (710,370,30,40)
block5=new Block (740,370,30,40)
block6=new Block (770,370,30,40)

block7=new Block (650,330,30,40)
block8=new Block (680,330,30,40)
block9=new Block (710,330,30,40)
block10=new Block (740,330,30,40)

block11=new Block (680,290,30,40)
block12=new Block (710,290,30,40)

block13=new Block (695,250,30,40)

//platform 2
block14=new Block (940,170,30,40)
block15=new Block (970,170,30,40)
block16=new Block (1000,170,30,40)
block17=new Block (1030,170,30,40)
block18=new Block (1060,170,30,40)

block19=new Block (970,130,30,40)
block20=new Block (1000,130,30,40)
block21=new Block (1030,130,30,40)

block22=new Block (1000,90,30,40)

slingshot=new Sling (polygon.body,{x:180,y:300})
score=0;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  textSize(30);
  fill('purple');
  text("Drag the hexagon and try to destroy the tower.Press SPACE for another try.",50 ,50);
  text ("score "+score,100,100);




  drawSprites();
  platform1.display();
  platform2.display();
  platform3.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  polygon.display();
  slingshot.display();
}



function mouseDragged(){

	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
	
	}
	
	function mouseReleased(){
	
		slingshot.fly();
	
	}
	
	

	  function keyPressed() {
		if (keyCode === 32) {
		Matter.Body.setPosition(polygon.body, {x:180, y:300}) 
		  slingshot.attach(polygon.body);
		}
	  }