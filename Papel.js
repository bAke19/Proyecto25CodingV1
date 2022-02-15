class Papel{
    constructor(x,y){
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0,
            'density':1.2
        }

        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 30;

        this.body = Bodies.rectangle(this.x, this.y, 25, 25, options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }

    display(){
        var paperpos = this.body.position;

        push();
        translate(paperpos.x, paperpos.y);
        imageMode(CENTER);
        image(this.image, 0, 0,this.width, this.height);
        pop();

    }
}