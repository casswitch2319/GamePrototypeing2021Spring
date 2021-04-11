

function Ball() {

   
    //location
    this.x = canvas.width / 2
    this.y = canvas.height / 2
    //size
    this.width = 50
    this.height = 50


    //player's color
    this.color = "purple";


    //player's velocity or speed on each axis
    this.vx = 0
    this.vy = 0

   //draws to canvas
    this.draw = function () {
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.translate(this.x, this.y);
        ctx.arc(0, 0, this.width / 2, 0, 360 * Math.PI / 180, true);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

    }

    //This changes the player's position
    this.move = function () {
        this.x += this.vx;
        this.y += this.vy;
    }

}


