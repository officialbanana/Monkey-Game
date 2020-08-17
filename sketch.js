var surivalTime = 0;
var Monkey,monkeyPic,ground, Banana,BananaPic, BananaGroup, Obstacle,ObstaclePic, ObstacleGroup;
function preload() {
monkeyPic = loadImage("Monkey.png");
BananaPic = loadImage("bna.PNG");
ObstaclePic = loadImage("Rock.png");  
}
function Bananation() {
if (frameCount%80===0) {
Banana = createSprite(200,Math.round(random(160,200)),50,50);
Banana.velocityX = -5;
Banana.addImage(BananaPic);
Banana.life = 40;  
}
}
function Rock() {
  if (frameCount%150===0) {
  Obstacle = createSprite(380,370,40,40);
  Obstacle.velocityX = -8;
  Obstacle.addImage(ObstaclePic);
  Obstacle.life = 40;
  Obstacle.scale = 0.08 ; 
  }
}
function setup() {
  Bananation();
  createCanvas(400,400);
  ground = createSprite(5,400,800,30);
  Monkey = createSprite(0,400,30,30);  
  Monkey.addImage(monkeyPic)
  ground.x = ground.width / 2;
  ground.velocityX = -4;
  surivalTime = Math.ceil(frameCount/frameRate())
  fill("white")
  text(surivalTime,400,400)
}
function draw() {
  Rock();
  Bananation();
  if (ground.x<0) { 
ground.x = ground.width / 2;
}
  if (keyIsDown(32)) {
    Monkey.velocityY = -30;  
  } 
  Monkey.velocityY = Monkey.velocityY + 2;
  Monkey.collide(ground)
background(220);
drawSprites();  
}