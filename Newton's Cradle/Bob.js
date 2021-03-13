class Bob{

    constructor(x,y,r){
    
        var option={
            isStatic:false,
            restitution:1.0,
            friction:0.001,
            density:0.5
           
          }
          this.r=r;
          this.x=x;
          this.y=y;
          this.body = Bodies.circle(this.x,this.y,(this.r)/2,option);
          World.add(world,this.body);
    
    }
    
    display(){
    
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("red");
        ellipse(0,0,this.r,this.r);
        pop();
    
    }
    
    }