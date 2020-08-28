var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  wall=createSprite(1000,200,thickness,200);
  wall.shapeColor=color(80,80,80,80);
  bullet=createSprite(50,200,40,20);
  bullet.shapeColor=color("white");
  bullet.velocityX=speed;
}

function draw() {
  background("black");  
  drawSprites();
  if (wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness**3);
    if(damage<10){
      bullet.shapeColor=color("green");
    }
    if(damage>10){
      bullet.shapeColor=color("red");
    }
  }
}