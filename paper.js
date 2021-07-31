class Paper {
    constructor (x,y) {
        var options = {
            isStatic:false,
            restitution: 1,
           
            density : 1.2
        }
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(x, y, 20, options);
        this.r = 20;
        World.add(world, this.body);
        
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle)
        fill("red")
        imageMode(CENTER);
        image(this.image,0,0,this.r*5,this.r*5);
        pop();
    }
}