var c = document.querySelector('canvas');
var ctx = c.getContext('2d')
var interval = 1000 / 60
var timer
var ball  
//var gravity = .05
//var gravitySpeed=.05


ball = new Ball()

    ball.vx = 2;
    ball.vy = 2;
    //ravity ;
   // gravitySpeed;

    timer = setInterval(animate, interval);
function animate() {

ctx.clearRect(0,0, canvas.width, canvas.height)

ball.move()

if(ball.y>canvas.height + ball.width/2-50)
{
    ball.y = canvas.height + ball.width/2-50
    ball.vy= -ball.vy

}
if(ball.y  < canvas.height- 780)
{
    ball.y = canvas.height-780
    ball.vy= -ball.vy
}
if(ball.x>canvas.width + ball.width/2-50)
{
    ball.x = canvas.width + ball.width/2-50
    ball.vx= -ball.vx

}
if(ball.x  < canvas.width-999 )
{
    ball.x = canvas.width-999
    ball.vx= -ball.vx
}
ball.draw()




}
