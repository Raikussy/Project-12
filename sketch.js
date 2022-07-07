var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png");
}

function setup(){
  
  createCanvas(400,400);

  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.3;

  boy = createSprite(200,340,30,30);
  boy.addAnimation("boyImg");

  leftBoundary=createSprite(0.2,0,100,800);
  leftBoundary.visible = false;

  rightBoundary=createSprite(400,0,100,800);
  rightBoundary.visible = false;
}

function draw() {
  background("black");

  boy.x = World.mouseX;
  
  edges = createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}