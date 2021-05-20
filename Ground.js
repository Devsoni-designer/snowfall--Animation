class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(x,y,width,height,ground_options)
          World.add(world,this.ground);
    }
    display(){
        push();
        var pos = this.body.position;
        translate (this.body.position.x,this.body.position.y)
        //noStroke();
       // fill(188,67,67);
        rectMode(CENTER);
        rect(this.position.x,this.position.y,900,20);
        pop ();
    }
}