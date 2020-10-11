var fixedRect, movingRect;
var ob1,ob2,ob3,ob4,ob5,ob6;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY = 5;
  fixedRect.velocityX = 5;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
 movingRect.velocityY = -5
 movingRect.velocityX = -5
ob1 = createSprite(100, 100, 50, 50);
ob1.shapecolor = "green"  
ob2 = createSprite(200, 100, 50, 50);
ob2.shapecolor = "green" 
ob3 = createSprite(300, 100, 50, 50);
ob3.shapecolor = "green"   
ob4 = createSprite(400, 100, 50, 50);
ob4.shapecolor = "green"  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if (isTouching(movingRect,ob3)){
  movingRect.shapeColor = "red";
 ob3.shapeColor = "red";

}else {
  movingRect.shapeColor = "yellow";
 ob3.shapeColor = "yellow";
}
bounceOff(movingRect,fixedRect)
  drawSprites();
}
