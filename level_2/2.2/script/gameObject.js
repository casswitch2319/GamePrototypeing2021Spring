

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
        ctx.fillRect(0,0,10,150);
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
		paddle.x += 2;
	}
	if(a)
	{
		console.log("Moving Left");
		paddle.x += -2;
	}
	if(w)
	{
		console.log("Moving Up");
		paddle.y += -2;
	}
	if(s)
	{
		console.log("Moving Down");
		paddle.y += 2;
	}
       
       
       
       
   
    
    }
}