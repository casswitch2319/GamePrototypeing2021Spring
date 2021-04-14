var c = document.querySelector('canvas');
var ctx = c.getContext('2d')
var interval = 1000 / 60
var timer
var ball  
//var gravity = .05
//var gravitySpeed=.05


ball = new Ball()

    ball.vx = 3;
    ball.vy = 3;
    //ravity ;
   // gravitySpeed;

    timer = setInterval(animate, interval);
function animate() {

ctx.clearRect(0,0, canvas.width, canvas.height)

ball.move()

//bottom
if(ball.y>canvas.height + ball.width/2-50)
{
    ball.y = canvas.height + ball.width/2-50
    ball.vy= -ball.vy
    ball.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    ball.width= 25

}

//top
if(ball.y  < canvas.height- 780)
{
    ball.y = canvas.height-780
    ball.vy= -ball.vy
    ball.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    ball.width=50
}
//right
if(ball.x>canvas.width + ball.width/2-40)
{
    ball.x = canvas.width + ball.width/2-50
    ball.vx= -ball.vx
    ball.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    ball.width = 100
}

//left
if(ball.x  < canvas.width-999 )
{
    ball.x = canvas.width-950
    ball.vx= -ball.vx
    ball.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    ball.width= 70
}
ball.draw()




}
