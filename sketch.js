const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var bg1,bg2,bg3
var maxsnow
var snow=[]
var rand
function preload(){
  bg1=loadImage("snow1.jpg")
  bg2=loadImage("snow2.jpg")
  bg3=loadImage("snow3.jpg")

}
function setup() {
  createCanvas(800,400);
  background(bg1);  

  engine=Engine.create()
  world=engine.world
}

function draw() {

  Engine.update(engine)

  if(frameCount%200===0){
    rand=Math.round(random(1,3))  
  }

  if(rand===1){
    background(bg1);  
      
    }
   else if(rand===2){
      background(bg2);  
        
      }
   else if(rand===3){
        background(bg3);  
          
        }
    else{
        background(bg1);  
        }
if(frameCount%5===0){
  snow.push(new Snow(random(0,800),30,30))
}
for(var j=0;j<snow.length;j++){
  snow[j].display();
}
}