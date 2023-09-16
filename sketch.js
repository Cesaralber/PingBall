var Player;
var Block;
var Block2;
var Player2;
var ball;
var puntajeP1 = 0;
var puntajeP2 = 0;
var gloves;
var bg;
var bgImg;
var balon;




function preload(){
  gloves = loadImage("Guantes.png");
  bgImg = loadImage("fondo.avif");
  balon = loadImage("bal.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
  bg.addImage("Imagen",bgImg);
  bg.scale = 3;

  edge = createEdgeSprites();
  Player = createSprite(100,350,50,200);
  Player.setCollider("rectangle",0,0,50,500);
  //Player.debug = true;
  Player.scale = 0.3
  Player.addImage("guantes",gloves);


  Block2 = createSprite(2,windowHeight/2,20,windowHeight);
  Block2.visible = false;

  Player2 = createSprite(1400,350,50,200);
  Player2.setCollider("rectangle",0,0,50,500);
  //Player2.debug = true;
  Player2.scale = 0.3;
  Player2.addImage("guantes",gloves);


  Block  = createSprite(1520,windowHeight/2,20,windowHeight);
  Block.visible = false;
  
  ball = createSprite(windowWidth/2,windowHeight/2,50,50);
  ball.setVelocity(10,20);
  ball.setCollider("rectangle",0,0,400,400);
  //ball.debug = true;
  ball.addImage("bal",balon);
  ball.scale = 0.15;
  
  
  
  

}


function draw() {
  background(0); 
  //movimiento de player1
  if(keyDown("W")||touches.length>0){
    Player.y = Player.y-15
   }

  if(keyDown("S")||touches. length>0){
    Player.y = Player.y+15
   }

  if(keyDown("A")||touches.length>0){
    Player.x = Player.x-15
  }
  if(keyDown("D")||touches.length>0){
    Player.x = Player.x+15
    
  }
  //movimiento de player 2
  if(keyDown("UP_ARROW")||touches.length>0){
    Player2.y = Player2.y-15
   }

  if(keyDown("DOWN_ARROW")||touches. length>0){
    Player2.y = Player2.y+15
   }

  if(keyDown("LEFT_ARROW")||touches.length>0){
  Player2.x = Player2.x-15
    }
  if(keyDown("RIGHT_ARROW")||touches.length>0){
  Player2.x = Player2.x+15
  
    }
  //colisiones
  if(Player.isTouching(edge)){
    Player.bounceOff(edge);
   }
  if(Player2.isTouching(edge)){
    Player2.bounceOff(edge);
   }
  if(ball.isTouching(edge)){
    ball.bounceOff(edge);
   }
  if(ball.isTouching(edge)){
    ball.bounceOff(edge);
   }
  if(ball.isTouching(Player)){
    ball.bounceOff(Player);
   }
  if(ball.isTouching(Player2)){
    ball.bounceOff(Player2);
   }

   //puntos
   if (ball.isTouching(Block)){
    ball.bounceOff(Block);
    puntajeP2 = puntajeP2 + 1;
    
   }
   if (ball.isTouching(Block2)){
    ball.bounceOff(Block2);
    puntajeP1 = puntajeP1+1;
    
   }
   if(puntajeP1 == 10){
    fill("white");
    textSize(30);
    text("P1 Gana",windowHeight/2,windowWidth/2);
   }
   if(puntajeP2 == 10){
    fill("white");
    textSize(30);
    text("P2 Gana",windowHeight/2,windowWidth/2);
   }

  drawSprites();
  fill("white");
  textSize(30);
  text("P1 = " + puntajeP1,80,80);
  fill("white");
  textSize(30);
  text("P2 = " + puntajeP2,1300,50);

  }

