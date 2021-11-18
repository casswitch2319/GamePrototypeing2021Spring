//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;
var playerScore = 0
var bonusScore = 0 



	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:100, y:canvas.height/2-100});

	//drawing platforms

	platform0 = new GameObject();
		platform0.width = 200;
		platform0.x = platform0.width/2;
		platform0.y = canvas.height - platform0.height/2;
		platform0.color = "#66ff33";



	platform1 = new GameObject()
		platform1.color = "aqua"
		platform1.width = 200
		platform1.x = canvas.width/2  - platform1.width/2 
		platform1.y = canvas.height - platform0.height/2 - platform1.height/2 -50

	platform2 = new GameObject()
		platform2.color = "purple"
		platform2.width = 200
		platform2.x = canvas.width/2 +50
		platform2.y = canvas.height/2 + platform2.height

	platform3 = new GameObject()
		platform3.color = "pink"
		platform3.width = 200
		platform3.x = canvas.width/2 + platform3.width + 50 
		platform3.y = canvas.height/2 - platform3.height/2

	platform4 = new GameObject()
		platform4.color = "coral"
		platform4.width = 200
		platform4.x = canvas.width/2 + platform4.width*2
		platform4.y = canvas.height/2 - platform4.height *2


	goal = new GameObject({width:24, height:50, x:canvas.width-50, y:100, color:"#00ffff"});
	
	powerup = new GameObject({width:25, height:25, x:canvas.width/2, y:canvas.height/2, color:"blue"})

	collectabes = new GameObject({width:25, height:25, x:platform1.x , y:550, color:"purple"})
		
		



	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	
	

    //scores player 1 and 2
    context.fillStyle = "black"
    context.font = "20px Arial"
    context.textAlign = "center"
    context.fillText("Player Score " + (playerScore + bonusScore), canvas.width/2, 40)
    //context.fillText(playe, canvas.width/2, 60)
 



	if(w && player.canJump && player.vy ==0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
	}

	if(a)
	{
		player.vx += -player.ax * player.force;
	}
	if(d)
	{
		player.vx += player.ax * player.force;
	}

	player.vx *= fX;
	player.vy *= fY;
	
	player.vy += gravity;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);
	

	while(platform0.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform0.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	
	//teal platfroem
	while(platform1.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform1.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform1.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform1.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}

	//purple
	while(platform2.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform2.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform2.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform2.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}

	//pink
	while(platform3.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform3.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform3.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform3.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}


	//CORAL
	
	while(platform4.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform4.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform4.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform4.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}


	
	//---------Objective: Treasure!!!!!!!---------------------------------------------------------------------------------------------------- 
	//---------Run this program first.
	//---------Get Creative. Find a new way to get your player from the platform to the pearl. 
	//---------You can do anything you would like except break the following rules:
	//---------RULE1: You cannot spawn your player on the pearl!
	//---------RULE2: You cannot change the innitial locations of platform0 or the goal! 
		
	if(player.hitTestObject(goal))
	{
		goal.y = 10000;
		context.textAlign = "center";
		context.drawText("You Win!!!", canvas.width/2, canvas.height/2);
	}


	//first mechanic added - powerup
	
	if(player.hitTestObject(powerup)){
		//player score to be added later 
		//playerScore ++;
		bonusScore += 50 
		powerup.y = 10000
	}
	if(player.hitTestObject(collectabes)){
		//player score to be added later 
		playerScore ++;
	
		collectabes.y = 10000
	}

	
	
	platform0.drawRect();
	platform1.drawRect();
	platform2.drawRect()
	platform3.drawRect()
	platform4.drawRect()


	//Show hit points
	player.drawRect();
	goal.drawCircle();
	powerup.drawCircle()

	collectabes.drawCircle()
}

