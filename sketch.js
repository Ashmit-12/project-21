var bullet,speed,weight;
var wall,thickness;

function setup(){
  createCanvas(1600,400);
thickness=random(22,83);
weight=random(30,52);
speed=random(223,321);
bullet=createSprite(100,200,50,50);
bullet.shapeColor="white";
wall=createSprite(1500,200,thickness,height/2);
wall.shapeColor=color(80,80,80);
bullet.velocityX=speed;
} 
function draw() {
  background("lightblue"); 
  
  if(hascollided(bullet,wall)){
bullet.velocityX=0;
var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);
if (damage>10){
  wall.shapeColor=color(255,0,0);

}
if (damage<10){
  wall.shapeColor=color(0,255,0);
  
}


  }
  drawSprites();
}
