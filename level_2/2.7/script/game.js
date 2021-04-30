var c = document.querySelector('canvas');
var ctx = c.getContext('2d')
var interval = 1000 / 60
var timer
var ball
var paddle
//var gravity = .05
//var gravitySpeed=.05


//Define Booleans for each key
var a = false;
var d = false;
var s = false;
var w = false;



//game objects
ball = new GameObject()
paddle = new GameObject()

// ball.leftSide = function(){return ball.x - ball.width/2};
// ball.rightSide = function(){return ball.x + ball.width/2};
// ball.topSide = function(){return ball.y - ball.height/2};
// ball.bottomSide = function(){return ball.y + ball.height/2};

// paddle.leftSide = function(){return paddle.x - paddle.width/2};
// paddle.rightSide = function(){return paddle.x + paddle.width/2};
// paddle.topSide = function(){return paddle.y - paddle.height/2};
// paddle.bottomSide = function(){return paddle.y + paddle.height/2};

//velocity
ball.vx = 10;
ball.vy = 5;
//paddle location
paddle.x = paddle.width / 2
paddle.y = c.height / 2
paddle.width = 10
paddle.height = 150



timer = setInterval(animate, interval);

//game movements
//Add Event Listeners
document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

//Event Functions
function press(e) {
    //---This logs key codes into the browser's console.
    //console.log("Pressed" + e.keyCode);
    /*
    //left
    if(e.keyCode == 65)
    {
        a = true;
    }
   //right
    if(e.keyCode == 68)
    {
        d = true;
    }*/
    //up
    if (e.keyCode == 87) {
        w = true;
    }
    //down
    if (e.keyCode == 83) {
        s = true;
    }

}

function release(e) {
    //---This logs key codes into the browser's console.
    //console.log("Released" + e.keyCode);

    if (e.keyCode == 65) {
        a = false;
    }
    if (e.keyCode == 68) {
        d = false;
    }
    if (e.keyCode == 87) {
        w = false;
    }
    if (e.keyCode == 83) {
        s = false;
    }
}


function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ball.moveCircle()
    paddle.moveRect()

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
        ball.x = canvas.width - ball.width / 2
        ball.vx = -ball.vx
       // ball.rightSide = function () { return ball.x + ball.width / 2 };
    }

    //boundaries for paddle
    if (paddle.y > canvas.height - paddle.height / 2) {
        paddle.y = canvas.height - paddle.height / 2


    }
    if (paddle.y < paddle.height / 2) {
        paddle.y = paddle.height / 2
    }





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

    ball.drawCircle()
    paddle.drawRect()
    console.log(paddle.y)


}
