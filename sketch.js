const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var bg;

var maxSnow=100;
var snow=[];
var rand;

var ground;



function preload()
{

  bg = loadImage("snow3.jpg");

}



function setup() 
{
  createCanvas(900,600);
  
  engine = Engine.create();
  world = engine.world;

  //ground = new Ground(450,580,900,10)

  //ground.Visible=false;


  Engine.run(engine);

}

function draw()

{

  Engine.update(engine);
  background(bg); 
  

  rand =Math.round(random(1,4));

  if(frameCount%50===0)
  {
    snow.push(new Snow(random(0,700),30,30));
  }
  for(var i = 0; i<snow.length; i++)
  {
    snow[i].display();
  }

  //ground.display();

  drawSprites();
}