var garden,gardenimg;
var cat,catimg,catimg2,catimg3
var rat,ratimg,ratimg2,ratimg3;
function preload() {
    //load the images here
    gardenimg=loadImage("garden.png");
    catimg=loadImage("cat1.png");
    catimg2=loadAnimation("cat2.png","cat3.png");
    catimg3=loadImage("cat4.png");
    ratimg=loadImage("mouse1.png");
    ratimg2=loadAnimation("mouse2.png","mouse3.png");
    ratimg3=loadImage("mouse4.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   garden=createSprite(250,300,100,20);
   garden.addImage("garden",gardenimg);

   cat=createSprite(650,570,10,10);
   cat.addImage("cat",catimg);
   cat.scale=0.1;

   rat=createSprite(50,570,10,10);
   rat.addImage("rat",ratimg);
   rat.scale=0.1;
}

function draw() {

    background(254);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-rat.x<(cat.width-rat.width)/2 ){
       rat.addImage("rat3",ratimg3);
        rat.changeImage("rat3",ratimg3);
        cat.addImage("cat3",catimg3);
        cat.changeImage("cat3",catimg3);
        cat.velocityX=0;

    }
    
   
  
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("catRunning",catimg2);
    cat.changeAnimation("catRunning",catimg2);
    rat.addAnimation("rat2",ratimg2);
    rat.changeAnimation("rat2",ratimg2);
}

}
