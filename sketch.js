var bullet, wall;
var speed, weight,thickness;





function setup() {
  createCanvas(1600,400);
 
  bullet = createSprite(50,20,20,20);
  bullet.shapeColor = color("white");
  wall = createSprite(1200,200,thickness,200);
  wall.shapeColor = color(80,80,80);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83)
}

function draw() {
  background(255,255,255); 
  
  bullet.velocityX = speed;

  collided();



  if(collided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  }

  if(damage<10)
  {
    wall.shapeColor = color(0,255,0);
  }

  if(damage>10)
  {
    wall.shapeColor = color(255,0,0);
  }

  drawSprites();
}

function collided(bullets, walls)
{
  bulletRightEdge = bullets.x+bullets.width;
  wallLeftEdge = walls.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}