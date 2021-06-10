class Magnet{
    constructor(bodyA,bodyB) {
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,stiffness:0.04,length:10
        }
        this.magnet = Constraint.create(options)
        World.add(world, this.magnet);
      }
      display(){
        var pointA =this.magnet.bodyA.position;
        var pointB =this.magnet.bodyB.position;

        strokeWeight(3)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
    };

    