class Snow{
    constructor(x,y,r){
        var options={restitution:0.4}
        this.r=r
        this.snow1=loadImage("snow4.webp")
        this.snow2=loadImage("snow5.webp")
        this.body=Bodies.circle(x,y,this.r,options)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var rand=Math.round(random(1,2))

        if(rand===1){
            push()
        translate(pos.x,pos.y)
      rotate(this.body.angle)
      imageMode(CENTER)
      image(this.snow1,0,0,this.r*2,this.r*2)
      pop()

        }
        else{
            push()
        translate(pos.x,pos.y)
      rotate(this.body.angle)
      imageMode(CENTER)
            image(this.snow2,0,0,this.r*2,this.r*2)
        pop()

        }
        
    }

}