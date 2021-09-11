class Snow{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        this.snowImg = loadImage("snow4.webp");
        World.add(world,this.body);
    }
    
    display(){
        image(this.snowImg,this.body.position.x,this.body.position.y,this.width,this.height);
            
    }
}
