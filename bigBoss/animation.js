var c = document.querySelector('canvas');
var ctx = c.getContext('2d')


var ball = new GameObject()
var paddle = new GameObject()
var line = new GameObject()
var score = 0
var interval = 1000 / 60
var timer
var gravity = 1

var ax = 1
var friction = .85;

ball.vx = 0
ball.width = 80
ball.height = 80
paddle.y = 550
paddle.vx = 10
ball.force = 5


//adding accelerations and frictions
paddle.ax = 1




timer = setInterval(animate, interval)
//animation
function animate() {


    //boundaries for ball
    //bottom
    if (ball.y > canvas.height - ball.height) {
        ball.y = canvas.height - ball.height
        score = 0
        ball.vy = -ball.vy * .67
    }
    //top
    if (ball.y - ball.height <= 0) {
        // ball.y = ball.height/2
        ball.vy = -ball.vy

    }
    //left
    if (ball.x - ball.height <= 0) {
        ball.vx = -ball.vx
    }
    //right
    if (ball.x + ball.height >= canvas.width) {
        ball.vx = -ball.vx
    }


    //apply gravity
    ball.vy += gravity

    //animate ball
    ball.move()

    if (d) {
        paddle.vx += paddle.ax * paddle.force;
      //  paddle.x += vx;
      console.log(paddle.vx)
      //  paddle.vx *= friction;
    }
    
    if (a) {
        paddle.vx -= paddle.ax * paddle.force;
        //paddle.x += -vx;
        //paddle.vx *= friction;
    }
    //friction always gets added not only when pushing 
    paddle.vx *= friction;

    paddle.move()


    if (paddle.hitTestObject(ball)) {
        ball.y = paddle.y - paddle.height / 2 - ball.height;
        ball.vy = -35
        score++


        if (ball.x < paddle.x - paddle.width / 3) {

            ball.vx = -ball.force * 5

        }
        if (ball.x > paddle.x + paddle.width / 3) {

            ball.vx = ball.force * 5
        }
        if (ball.x > paddle.x + paddle.width / 6) {
            ball.vx = ball.force
        }
        if (ball.x < paddle.x - paddle.width / 6) {
            ball.vx = - ball.force
        }

    }

    paddleBoundary(paddle)

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    //draw game objects to screen 
    ball.draw()
    paddle.drawRect()
  
    //score text 
    ctx.fillStyle = "#555555"
    ctx.font = "16px Arial"
    ctx.textAlign = "center"
    ctx.fillText("Score: ", 80, 25)
    ctx.fillText(score, 110, 25)

    //draw line
    ctx.save();
    ctx.strokeStyle = "black";
    ctx.beginPath()
    ctx.moveTo(ball.x, ball.y)
    ctx.lineTo(paddle.x, paddle.y)
    ctx.closePath()
    ctx.lineWidth = 1
    ctx.stroke()
    ctx.restore()

}

function paddleBoundary(paddle) {
    //boundaries for paddle


    if (paddle.x > canvas.width - paddle.width / 2) {
        paddle.x = canvas.width - paddle.width / 2


    }
    if (paddle.x < paddle.width / 2) {
        paddle.x = paddle.width / 2
    }


    
  

}







