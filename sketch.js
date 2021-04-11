var snowbg;
var boy,boyImg1,boyImg2,boyImg3,jump3;
var snowImg,snow

function preload(){

snowbg=loadImage("snow1.jpg");

boyImg1= loadAnimation("walking1.jpg");
boyImg2= loadAnimation("walking2.jpg")
boyImg3= loadAnimation("walking3.jpg")

jump3= loadAnimation("jumping3.jpg");

snowImg=loadImage("snow4.webp");
}

function setup() {
  createCanvas(1000,800);

  boy= createSprite(100,600);
  boy.addAnimation("boyStanding",boyImg1);
  
}

function draw() {
  background(snowbg);  

  keyPressed();
  createSnow()

  drawSprites();
}

function keyPressed(){

  if(keyCode === RIGHT_ARROW){
    boy.velocityX=5;
    boy.addAnimation("boyRunning",boyImg2);
    boy.changeAnimation("boyRunning")

    boy.addAnimation("boyRunning2",boyImg3);
    boy.changeAnimation("boyRunning2")

  }

  if(keyCode === UP_ARROW){
    boy.velocityY=2
    boy.addAnimation("boyJumping",jump3);
    boy.changeAnimation("boyJumping");
  }

  if(keyCode === DOWN_ARROW){
    boy.addAnimation("boyRunning",boyImg2);
    boy.changeAnimation("boyRunning")

  }
}

function createSnow() {
  if (World.frameCount % 50 == 0) {
  var snow = createSprite(Math.round(random(50,width-50),40, 10, 10));
  snow.addImage(snowImg);
  snow.scale=0.12;
  snow.velocityY = 3;
  snow.lifetime = 300;
  }
}

