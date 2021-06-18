const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var bg
var b,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15

function preload() {
bg=loadImage("bw lane.jpg")
b=loadImage("bottle.png")
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
    b1=createSprite(560,150,10,10)
    b1.addImage(b)
    b1.scale=0.3

    b2=createSprite(600,150,10,10)
    b2.addImage(b)
    b2.scale=0.3

    b3=createSprite(640,150,10,10)
    b3.addImage(b)
    b3.scale=0.3

    b4=createSprite(680,150,10,10)
    b4.addImage(b)
    b4.scale=0.3

    b5=createSprite(720,150,10,10)
    b5.addImage(b)
    b5.scale=0.3

    b6=createSprite(760,150,10,10)
    b6.addImage(b)
    b6.scale=0.3

    b7=createSprite(800,150,10,10)
    b7.addImage(b)
    b7.scale=0.3

    b8=createSprite(840,150,10,10)
    b8.addImage(b)
    b8.scale=0.3

    b9=createSprite(580,170,10,10)
    b9.addImage(b)
    b9.scale=0.3

    b10=createSprite(660,170,10,10)
    b10.addImage(b)
    b10.scale=0.3

    b11=createSprite(740,170,10,10)
    b11.addImage(b)
    b11.scale=0.3

    b12=createSprite(820,170,10,10)
    b12.addImage(b)
    b12.scale=0.3  

    b13=createSprite(620,190,10,10)
    b13.addImage(b)
    b13.scale=0.3

    b14=createSprite(700,190,10,10)
    b14.addImage(b)
    b14.scale=0.3

    b15=createSprite(780,190,10,10)
    b15.addImage(b)
    b15.scale=0.3
}

function draw(){
    background(bg);
    Engine.update(engine);
   drawSprites()
}
