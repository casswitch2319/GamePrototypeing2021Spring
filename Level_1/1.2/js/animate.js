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

if(ball.x>canvas.width + ball.width)
{
    ball.x=-ball.width
}
ball.draw()



}
//animate()