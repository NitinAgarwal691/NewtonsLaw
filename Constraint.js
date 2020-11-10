class Connector{
 constructor(bodyA,bodyB) {
     var options={
         bodyA:bodyA,
         bodyB:bodyB,
         stiffness:0.9,
         length:90
     }
     this.join= Constraint.create(options);    
     World.add(world,this.join);
 }
 display() {
    var posA=this.bodyA.position;
    var posB=this.bodyB.position;
    line(posA.x,posA.y,posB.x,posB.y);
 }
}