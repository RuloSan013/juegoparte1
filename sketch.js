const Engine = Matter.Engine; const Render = Matter.Render; const World = Matter.World; const Bodies = Matter.Bodies; const Constraint = Matter.Constraint; const Body = Matter.Body;

var court;
var cancha;
var jug1;
var jug2;
var pelota;
var engine, world
var suelo

function preload(){
  court = loadImage("imagenes/court.png")
}

function setup(){
  createCanvas(3000, 2000)
  engine = Engine.create(); world = engine.world;
  cancha = createSprite(1750,1750,3500,2000)
  cancha.addImage(court)
  cancha.scale=4

  jug2 = createSprite(3000,1500,300,1000)
  jug1 = createSprite(500,1500,300,1000)
  
  

  var options = {restitution: 1}
  pelota = Bodies.circle(1000,1000,150,options)
  World.add(world,pelota)
  var options2 = {isStatic: true}
  suelo = Bodies.rectangle(1750,2000,3000,50,options2)
  World.add(world,suelo)
  muroin = Bodies.rectangle(jug1.x+150,jug1.y,300,1000,options2);
  World.add(world,muroin);
  muroin2 = Bodies.rectangle(jug2.x-150,jug2.y,300,1000,options2);
  World.add(world,muroin2);

  rectMode(CENTER); 
  ellipseMode(RADIUS); 
  imageMode(CENTER);
}

function draw(){
  background("green");
  Engine.update(engine);
  if( jug2.x < 3000 && jug2.x > 1500){
    muroin2.position.x = pelota.position.x
  }
  if(keyDown("D") && jug1.x < 1500 ){
    jug1.x = jug1.x + 20
  }
  if(keyDown("A") && jug1.x>0){
    jug1.x = jug1.x -20
  }
  muroin.position.x=jug1.x;
  drawSprites();
  ellipse(pelota.position.x,pelota.position.y,150,150)
  noFill()
  rect(suelo.position.x,suelo.position.y,3000,50)
  rect(muroin.position.x,muroin.position.y,300,1000);
  rect(muroin2.position.x,muroin2.position.y,10,1000);
  /*if(collide(pelota,muroin)==true){
    console.log("si");
  jug1.shapeColor = "red"
  }
  if(collide2(pelota,jug2)==true){
    jug2.shapeColor = "red"
    }*/

if(muroin.position.x - pelota.position.x < muroin.width/2 + pelota.width/2  && pelota.position.x-muroin.position.x < muroin.width/2 + pelota.width/2  ){
    Matter.Body.setVelocity(pelota,{x:0,y:0},{x:0.01,y:0});
    console.log("si");
  }
}

function collide(body,sprite)
{

         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
              Matter.Body.applyForce(pelota,{x:0,y:0},{x:0.01,y:0});
             
   
         }
}

function collide2(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
              Matter.Body.applyForce(fruit,{x:0,y:0},{x:-0.01,y:0});
             
   
         }
}
}