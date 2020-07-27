var bullet,wall
var speed ,weight,thickness






function setup() {
  createCanvas(1600,400);
  speed=random(1,321);
  weight=random(30,52);
  thickness=random(22,83);

 bullet=createSprite(20 ,200, 30, 20);
 bullet.velocityX=speed;
 bullet.shapeColor="white";

 wall=createSprite(1200,200,thickness,height/2);
 wall.shapeColor="white";
 

}

function draw() {
  background(0); 
 
  isTouching(bullet,wall);
  if(wall.x-bullet.x<(bullet.width+wall.width)){
    bullet.velocityX=0;
      
    var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness)
      
      if(damage<=3.68){
        wall.shapeColor="green";
      }
      if(damage===12.43||damage>=3.68){
        wall.shapeColor="red";
      }

  }
  
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<=object2.width/2+object1.width/2
      && object2.x-object1.x<=object2.width/2+object1.width/2
     && object1.y-object2.y<=object2.height/2+object1.height/2
     && object2.y-object1.y<=object2.height/2+object1.height/2){
          return true
      }else {
          return false
      }
}