
var navio,sea;
var navioimg,seaimg;

function preload(){

 navioimg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
 seaimg = loadImage("sea.png"); 

 

  
}

function setup(){
  createCanvas(400,400);
  
  navio = createSprite (200,200,50,50);
  navio.addAnimation("navio",navioimg);
  navio.scale=0.8;

  sea = createSprite(200,200,400,400);
  sea.addImage(seaimg);
  sea.scale=1.2;
  sea.velocityX = -3;
}

function draw() {
  
  background(blue);

  
  sea.velocityX = -3;
  if(sea.x > 400 ){
    sea.x = height/2;
  }

  

  drawSprites();

   
 
}
