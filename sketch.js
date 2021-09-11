const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world;
var mickeyImg;
var bg;
var ground;
var snow,snowImg;
var snow1 , snow2 , snow3 , snow4 , snow5 , snow6, snow7, snow8, snow9 , snow10 , snow11, snow12, snow13, snow14, snow15, snow16;

function preload(){
  bg = loadImage("snow1.jpg");
  mickeyImg = loadImage("Mickey.png"); 
  
}

function setup(){
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  var m_options = {
    restitution:1.5
  
  }
  mickey = Bodies.rectangle(150,300,50,50,m_options);
  World.add(world,mickey)

  var g_options = {
    isStatic:true
  }
  ground = Bodies.rectangle(100,340,500,50,g_options);
  World.add(world,ground)
 
  snow1 = new Snow(50,-20,40,40);
  snow2 = new Snow(200,-20,50,50);
  snow3 = new Snow(100,-20,60,60);
  snow4 = new Snow(150,-20,40,40);
  snow5 = new Snow(250,-20,50,50);
  snow6 = new Snow(300,-20,60,60);
  snow7 = new Snow(350,-20,40,40);
  snow8 = new Snow(400,-20,50,50);
  snow9 = new Snow(450,-20,60,60);
  snow10 = new Snow(500,-20,40,40);
  snow11 = new Snow(550,-20,40,40);
  snow12 = new Snow(600,-20,50,50);
  snow13 = new Snow(650,-20,60,60);
  snow14 = new Snow(700,-20,40,40);
  snow15= new Snow(750,-20,50,50);
  snow16= new Snow(800,-20,60,60);
  
}

function draw(){

  background(bg);

  Engine.update(engine);
  
  image(mickeyImg , mickey.position.x , mickey.position.y,120,120);
  
  fill("brown");
  stroke("black");
  rect(ground.position.x , ground.position.y,10,10);

  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();
  snow11.display();
  snow12.display();
  snow13.display();
  snow14.display();
  snow15.display();
  snow16.display();
  
  //console.log(mickey);
  
}

//function keyPressed(){
  //if(keyCode === LEFT_Arrow){
  //  mickey.x = mickey.x - 10;
  //}

//}