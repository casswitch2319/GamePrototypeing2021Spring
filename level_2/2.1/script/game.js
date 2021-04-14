var c = document.querySelector('canvas');
var ctx = c.getContext('2d')
var interval = 1000 / 60
var timer
var ball  
var paddle
//var gravity = .05
//var gravitySpeed=.05


ball = new GameObject()
paddle = new GameObject()

    ball.vx = 3;
    ball.vy = 3;

    paddle.x= paddle.width/2
    paddle.y= c.height/2
  

    timer = setInterval(animate, interval);
function animate() {

ctx.clearRect(0,0, canvas.width, canvas.height)

ball.move()

//bottom
if(ball.y>canvas.height + ball.width/2-50)
{
    ball.y = canvas.height + ball.width/2-50
    ball.vy= -ball.vy
  

}

//top
if(ball.y  < canvas.height- 780)
{
    ball.y = canvas.height-780
    ball.vy= -ball.vy

}
//right
if(ball.x>canvas.width + ball.width/2-40)
{
    ball.x = canvas.width + ball.width/2-50
    ball.vx= -ball.vx
  
}

//left
if(ball.x  < canvas.width-999 )
{
    ball.x = canvas.width-999
    ball.vx= -ball.vx
  
}
ball.drawCircle()
paddle.drawRect()




}
