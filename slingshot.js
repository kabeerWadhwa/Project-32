//class slingshot
class SlingShot{
    //constructor
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        //create sling
        this.sling = Constraint.create(options);
        //add to world
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            //point A and Point B
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48,22,8)


            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}