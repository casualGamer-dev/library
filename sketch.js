var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 100);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect=createSprite(10,20,100,50);
 movingRect.shapeColor="green";
 movingRect.debug=true;
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(isTouching(fixedRect, movingRect)){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  drawSprites();
}
