

function GameObject() {

   
    //location
    this.x = canvas.width / 2
    this.y = canvas.height / 2
    //size
    this.width = 50
    this.height = 50


    //player's color
    this.color = "aquamarine";


    //player's velocity or speed on each axis
    this.vx = 0
    this.vy = 0

    //gravity
   // this.gravity=0

   //draws circle to canvas
    this.drawCircle = function () {
        ctx.save();
        ctx.fillStyle = "purple";
        ctx.beginPath();
        ctx.translate(this.x, this.y);
        ctx.arc(0, 0, this.width / 2, 0, 360 * Math.PI / 180, true);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

    }
//draws rectangle
    this.drawRect = function (){

        ctx.save();
        ctx.fillStyle = this.color;
        ctx.translate(this.x, this.y);
        ctx.fillRect(-this.width/2,-this.height/2,this.width,this.height);
        ctx.restore();
        
    }

    //This changes the player's position
    this.moveCircle = function () {
        this.x += this.vx;
        this.y += this.vy;
    }

    this.moveRect = function(){
       	//Move the Player to the right
	if(d)
	{
		console.log("Moving Right");
		paddle.x += 5;
	}
	if(a)
	{
		console.log("Moving Left");
		paddle.x += -5;
	}
	if(w)
	{
		console.log("Moving Up");
		paddle.y += -5;
	}
	if(s)
	{
		console.log("Moving Down");
		paddle.y += 5;
	}}

    this.left = function() 
	{
		return this.x - this.width/2;
	}
	this.right = function() 
	{
		return this.x + this.width/2;
	}
	
	this.top = function() 
	{
		return this.y - this.height/2;
	}
	this.bottom = function() 
	{
		return this.y + this.height/2;
	}
	
	this.hitTestObject = function(obj)
	{
		if(this.left() < obj.right() && 
		   this.right() > obj.left() &&
		   this.top() < obj.bottom() &&
		   this.bottom() > obj.top())
		{
			return true
		}
		return false;
	}
       
       
   
    
    
}