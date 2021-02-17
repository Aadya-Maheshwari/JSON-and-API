const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var bird;
var log1,log2,log3,log4;
var ground;
var backgroundING;
var platform;
var constrainedLog;
var slingshot;

var gameState="onSling";
var backgroundImg;
var score=0;

function preload(){
    getBackgroundImg();
}

function setup(){
createCanvas(1200,400);

engine=Engine.create();
world=engine.world;
ground=new Ground(600,height,1200,20);
platform=new Ground(150,305,300,170);

box1=new Box(700,320,70,70);
box2=new Box(920,320,70,70);
box3=new Box(700,240,70,70);
box4=new Box(920,240,70,70);
box5=new Box(810,160,70,70);

log1=new Log(810,260,300,PI/2);
log2=new Log(810,180,300,PI/2);
log3=new Log(760,120,150,PI/7);
log4=new Log(870,120,150,-PI/7);

constrainedLog=new Log(230,100,80,PI/2);

pig1=new Pig(810,350);
pig2=new Pig(810,220);

bird=new Bird(200,50);

slingshot=new SlingShot(bird.body,{x:200,y:50});

// string 
var string="this is my coding class" 
console.log(string);

//number
var num=7+100;
console.log(num);

//boolean
var bool=true;
console.log(bool);

//undiefened
var object;
console.log(object);

//null 
//reassioning the same undiefened object to null
object=null;
console.log(object);

//examples of an array
//an array holding same datatype
var array1=[1,2,3,4,5];
console.log(array1);

//an array holding deffent datatype 
var array2=["Aadya",1,true];
console.log(array2);

var array3=[[1,7,4],[3,6,8],[5,7,8,1]];
console.log(array3);
console.log(array3[0]);
console.log(array3[0][1]);

array3.push("student4")
array3.pop("student4")


}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
        noStroke();
        textSize(35);
        fill("white");
        text("score "+score,width-300,50);
        Engine.update(engine);
    }
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();
   
    ground.display();
    platform.display();

    pig1.display();
    pig2.display();

    bird.display();

    slingshot.display();
     
    pig1.score();
    pig2.score();
}

function mouseDragged(){
    if(gameState!=="luanched"){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY}); 
   }   
}

function mouseReleased(){
    slingshot.fly()

    gameState="launched"
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attached(bird.body);
    }
}

async function getBackgroundImg(){
    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJSON= await response.json();
    console.log(responseJSON);
    var datetime=responseJSON.datetime;
    console.log(datetime);
    var hour=datetime.slice(11,13);
    console.log(hour);

    if(hour>=06  && hour<=19){
        bg="sprites/bg2.jpg";
    }
    else {
        bg="spirites/bg.png";
    }

    backgroundImg=loadImage(bg);
}


