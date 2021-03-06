class Paper {
   constructor(x,y,r){
   var options={
    'isStatic':false,
    'restitution':0.3,
    'friction':0.5,
    'density':1.2
   }
   this.x=x;
   this.y=y;
   this.r=r;
   this.body=Matter.Bodies.circle(x,y,r,options);
   World.add(world,this.body);
   }
   display() {
   push();
   rectMode(RADIUS);
   fill("red"); 
   ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
   pop();
   }
}