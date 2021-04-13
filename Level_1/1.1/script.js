var c = document.querySelector('canvas');
var ctx = c.getContext('2d')

var timer
var interval = 1000/60

var ball = new Ball()


function Ball()
{
	
	//Default Values
    this.x = canvas.width/2
    this.y=canvas.height/2
    this.width=50
    this.height=50

	
		//player's color
		this.color = "purple";

	
	//player's velocity or speed on each axis
	this.vx = 0
	this.vy = 0
    
    this.draw = function()
	{
		ctx.save();
			ctx.fillStyle = this.color;
			ctx.beginPath();
			ctx.translate(this.x, this.y);
			ctx.arc(0, 0, this.width/2, 0, 360 *Math.PI/180, true);
			ctx.closePath();
			ctx.fill();
		ctx.restore();
		
	}	
	
	//This changes the player's position
	this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	}
}

timer = setInterval(animate, interval);


	ball.draw()
       // context.clearRect(0,0,canvas.width, canvas.height);
    //ball.move();

    
    //if(ball.x > canvas.width + ball.width/2)
  
     // ball.x = -ball.width/2
  
//ball.draw()
