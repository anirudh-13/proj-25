class Paper{
    constructor(x,y,rad){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 1,
            density: 10
        }
        this.body = Matter.Bodies.circle(x, y, rad,options);
        this.width = x;
        this.height = y;
        this.diameter = rad;
        this.image = loadImage("paper.png");
        World.add(world, this.body);  
    }
    display(){
        var pos = this.body.position;   
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
        
}