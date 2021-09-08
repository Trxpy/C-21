
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  gameObject1=createSprite(200,200,90,90)
  gameObject2=createSprite(400,450,60,90)

  gameObject2.shapeColor = "red"
  gameObject1.shapeColor = "yellow"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 

  if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor = "blue";
    gameObject2.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
  
    gameObject2.shapeColor = "yellow"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}




