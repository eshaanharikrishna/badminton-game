var play,help,playImage,helpImage
var gameState="start"
var back,backImage
var player1,player2
var ground
var cock
function preload(){
 playImage=loadImage("images/play.png")
 helpImage=loadImage("images/help.png")
 backImage=loadImage("images/back.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  play=createSprite(windowWidth/2-40, windowHeight/2-100, 50, 50);
  play.debug=true
  play.setCollider("rectangle",0,0,400,150)
  play.addImage("play",playImage)
  
  help=createSprite(windowWidth/2-40,windowHeight/2+80)
  help.debug=true
  help.setCollider("rectangle",0,0,400,150)
  help.addImage("help",helpImage)
  
  help.scale=0.6
  play.scale=0.8
  
  back=createSprite(100,100)
  back.debug=true
  back.setCollider("rectangle",0,0,300,150)
back.addImage("back",backImage)
back.scale=0.6

player1=createSprite(windowWidth/2-250,windowHeight/2+250,50,50)
player1.debug=true
player2=createSprite(windowWidth/2+250,windowHeight/2+250,50,50)
player2.debug=true

ground=createSprite(windowWidth/2,windowHeight/2+300,windowWidth,10)

cock=createSprite(windowWidth/2,windowHeight/2+200,10,10)



}

function draw() {
  background("black");  
  if(gameState==="start"){
    play.visible=true
    help.visible=true
    back.visible=false
    player1.visible=false
player2.visible=false
cock.visible=false
    if(mousePressedOver(play)){
      gameState="play"
      play.visible=false
      help.visible=false

    }
    
      if(mousePressedOver(help)){
        gameState="help"
        play.visible=false
        help.visible=false
      }

  }
  if(gameState==="play"){
    if(keyDown("space")){
      player1.velocityY=-10
    }
    player1.velocityY=player1.velocityY+0.8

    player1.visible=true
    player2.visible=true


    player1.collide(ground)
cock.visible=true
cock.velocityX=-3
cock.velocityY=+4

if(cock.isTouching(player1)&&mousePressedOver(player1)){
  cock.velocityX=+2
  cock.velocityY=+2
}

back.visible=true

if(mousePressedOver(back)){
  gameState="start"
  
  
}
  }
  if(gameState==="help"){
    back.visible=true
    if(mousePressedOver(back)){
      gameState="start"
      
      
    }
      }
  drawSprites();
}