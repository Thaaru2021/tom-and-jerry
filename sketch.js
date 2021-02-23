var tom,tomImg;
var tomImg1;
var garden,gardenImg;
var jerry,jerryImg;

function preload() {
 tomImg=loadAnimation ("images/cat1.png")
 tomImg1=loadAnimation("images/cat2.png","images/cat3.png")
 
 gardenImg=loadImage("images/garden.png")
 jerryImg=loadAnimation("images/mouse2.png","images/mouse3.png")
 jerryImg1=loadAnimation("images/mouse1.png")
 jerryImg2=loadAnimation("images/mouse4.png")
 
 catImg=loadImage("images/cat4.png")
 
}

function setup(){
    createCanvas(1000,800);

tom=createSprite(870,600)
tom.addAnimation("evil",tomImg)
tom.scale=0.2;

jerry=createSprite(300,600)
jerry.addAnimation("cute",jerryImg1)
jerry.scale=0.2;



}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
      tom.velocityX=0;
      tom.addAnimation("evil",catImg)
      tom.changeAnimation("evil")
      tom.x=400;
      jerry.addAnimation("lastImg",jerryImg2)
      jerry.changeAnimation("lastImg")
      }

    text(mouseX+','+mouseY,10,45)

   //keyPressed();
  
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
tom.velocityX=-5;
tom.addAnimation("catrunning",tomImg1)
tom.changeAnimation("catrunning")}

jerry.addAnimation("jerryTeasing",jerryImg)
jerry.changeAnimation("jerryTeasing")
}




