class Dustbin{
    constructor (x,y,width,height) {
        var options = {
            isStatic:true,
           
        
        }

        //load the image
        this.w = width;
        this.h = height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
}