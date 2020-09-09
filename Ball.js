class BallClass{
    constructor(x,y,height,angle){
        var options ={
            isStatic :false,
            restitution :0.3,
            friction :0.5,
            density :1.2
        }

        this.body = Bodies.circle(x,y,PI/7,options);
        this.shapeColor("purple");
        World.add(world,this.body);
    }
 
display(){
  var pos = this.body.position;
  push();
  translate(this.body.position.x,this.body.position.y);
  imageMode(CENTER);
  pop();
}

}