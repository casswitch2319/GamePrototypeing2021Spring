var c = document.querySelector('canvas');
var ctx = c.getContext('2d')
var interval = 1000 / 60
var timer
var ball  
ball = new Ball()

    ball.vx = 2;
    ball.vy = 0;

    timer = setInterval(animate, interval);
function animate() {

ctx.clearRect(0,0, canvas.width, canvas.height)

ball.move()
//loop screen

if(ball.x>canvas.width + ball.width/2)
{
    ball.x=-ball.width/2
}
ball.draw()




}
//animate()