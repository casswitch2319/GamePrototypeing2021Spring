var c = document.querySelector('canvas');
var ctx = c.getContext('2d')
var interval = 1000 / 60
var timer
var ball
var paddle
var paddle2
//var gravity = .05
//var gravitySpeed=.05


//Define Booleans for each key
var a = false;
var d = false;
var s = false;
var w = false;
//player 2
var up = false;
var down = false;


//drawing text 



//game objects
ball = new GameObject()
paddle = new GameObject()
paddle2 = new GameObject()

// ball.leftSide = function(){return ball.x - ball.width/2};
// ball.rightSide = function(){return ball.x + ball.width/2};
// ball.topSide = function(){return ball.y - ball.height/2};
// ball.bottomSide = function(){return ball.y + ball.height/2};

// paddle.leftSide = function(){return paddle.x - paddle.width/2};
// paddle.rightSide = function(){return paddle.x + paddle.width/2};
// paddle.topSide = function(){return paddle.y - paddle.height/2};
// paddle.bottomSide = function(){return paddle.y + paddle.height/2};

//velocity
ball.vx = 5;
ball.vy = 5;
//paddle location
paddle.x = paddle.width / 2
paddle.y = c.height / 2
paddle.width = 10
paddle.height = 150

//paddle 2 location
paddle2.x = c.width - paddle2.width 
paddle2.y = c.height / 2
paddle2.width = 10
paddle2.height = 150




timer = setInterval(animate, interval);

//game movements
//Add Event Listeners
document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

//Event Functions
function press(e) {
    //---This logs key codes into the browser's console.
    if (e.keyCode == 87) {
        w = true;
    }
    //down
    if (e.keyCode == 83) {
        s = true;
    }
    if(e.keyCode == 38){
        up = true;
    }
    if(e.keyCode == 40){
        down = true;
    }


}

function release(e) {
    //---This logs key codes into the browser's console.
    //console.log("Released" + e.keyCode);

    if (e.keyCode == 87) {
        w = false;
    }
    if (e.keyCode == 83) {
        s = false;
    }
   
    if(e.keyCode == 38){
        up = false;
    }
    if(e.keyCode == 40){
        down = false;
    }


}


function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height)



   
	if(w)
	{
		console.log("Moving Up");
		paddle.y += -5;
	}
	if(s)
	{
		console.log("Moving Down");
		paddle.y += 5;
	}

    if(up)
	{
		console.log("Moving Up");
		paddle2.y += -5;
	}
	if(down)
	{
		console.log("Moving Down");
		paddle2.y += 5;
	}



    ball.moveCircle()

    
  

    //boundaries for ball
    //bottom
    if (ball.y > canvas.height - ball.height / 2) {
        ball.y = canvas.height - ball.height / 2
        ball.vy = -ball.vy
       // ball.bottomSide = function () { return ball.y + ball.height / 2 };
    }

    //top
    if (ball.y < ball.height / 2) {
        ball.y = ball.height / 2
        ball.vy = -ball.vy
        //ball.topSide = function () { return ball.y - ball.height / 2 };
    }
    //left
    if (ball.x < -ball.width ) {
        ball.x = canvas.width / 2
        ball.y = canvas.height / 2
        ball.vx *= -1
       // ball.leftSide = function () { return ball.x - ball.width / 2 };
    }

    //right
    if (ball.x > canvas.width - ball.width / 2) {
        ball.x = canvas.width /2
        ball.y = canvas.height / 2
        ball.vx *= -1
       // ball.rightSide = function () { return ball.x + ball.width / 2 };
    }

  
    paddleBoundary(paddle)
    paddleBoundary(paddle2)



    // if(hitTestObject(ball, paddle))
    //  {
    //   //paddle.color = "yellow"

    //   ball.vx = -ball.vx


    //   }
    if (paddle.hitTestObject(ball)) {
        //ball hits top
        if (ball.y < paddle.height / 3) {
            ball.vx *= -1
            ball.vy = -ball.vy;
        }
        else if (ball.y > paddle.height / 6) {
            ball.vx *= -1;
            ball.vy = ball.vy;
        }
        else {
            ball.vx *= -1
            ball.vy = 0
        }

    }
    if (paddle2.hitTestObject(ball)) {
        //ball hits top
        if (ball.y < paddle2.height / 3) {
            ball.vx *= -1
            ball.vy = -ball.vy;
        }
        else if (ball.y > paddle2.height / 6) {
            ball.vx *= -1;
            ball.vy = ball.vy;
        }
        else {
            ball.vx *= -1
            ball.vy = 0
        }
        
    }

    ball.drawCircle()
    paddle.drawRect()
    paddle2.drawRect()
    console.log(paddle.y)


}

function paddleBoundary(paddle){
    //boundaries for paddle
      if (paddle.y > canvas.height - paddle.height / 2) {
        paddle.y = canvas.height - paddle.height / 2


    }
    if (paddle.y < paddle.height / 2) {
        paddle.y = paddle.height / 2
    }

}
