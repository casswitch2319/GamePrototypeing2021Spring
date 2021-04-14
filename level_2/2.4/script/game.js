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

//velocity
    ball.vx = 3;
    ball.vy = 3;
//paddle location
    paddle.x= paddle.width/2
    paddle.y= c.height/2
    paddle.width = 10
    paddle.height = 150
  

    timer = setInterval(animate, interval);

    //game movements
function animate() {

ctx.clearRect(0,0, canvas.width, canvas.height)

ball.moveCircle()
paddle.moveRect()

//boundaries for ball
//bottom
if(ball.y>canvas.height-ball.height/2)
{
    ball.y = canvas.height -ball.height/2
    ball.vy= -ball.vy
}

//top
if(ball.y  <ball.height/2)
{
    ball.y = ball.height/2
    ball.vy= -ball.vy
}
//left
if(ball.x< ball.width/2)
{
    ball.x = ball.width/2
    ball.vx= -ball.vx
}

//right
if(ball.x  > canvas.width - ball.width/2 )
{
    ball.x = canvas.width - ball.width/2
    ball.vx= -ball.vx
}

//boundaries for paddle
if(paddle.y>canvas.height - paddle.height/2){
    paddle.y=canvas.height- paddle.height/2


}
if(paddle.y<paddle.height/2){
   paddle.y = paddle.height/2
} 


     //Add Event Listeners
     document.addEventListener("keydown", press);
     document.addEventListener("keyup", release);
     
     //Event Functions
     function press(e)
     {
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
         if(e.keyCode == 87)
         {
             w = true;
         }
         //down
         if(e.keyCode == 83)
         {
             s = true;
         }
     }
     
     function release(e)
     {
         //---This logs key codes into the browser's console.
         //console.log("Released" + e.keyCode);
         
         if(e.keyCode == 65)
         {
             a = false;
         }
         if(e.keyCode == 68)
         {
             d = false;
         }
         if(e.keyCode == 87)
         {
             w = false;
         }
         if(e.keyCode == 83)
         {
             s = false;
         }
     }
     


ball.drawCircle()
paddle.drawRect()
console.log(paddle.y)


}
