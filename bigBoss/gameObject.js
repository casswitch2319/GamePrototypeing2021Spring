


function GameObject() {

    //Default Values
    this.x = canvas.width / 2
    this.y = canvas.height / 2
    this.width = 250
    this.height = 40



    //player's velocity or speed on each axis

    this.vx = 3
    this.vy = 2
   
    

    //ball specs 
    this.draw = function () {
        ctx.save()
        ctx.fillStyle = "#ff00ff"
        ctx.beginPath()
        ctx.translate(this.x, this.y)
        ctx.arc(0, 0, this.height, 0, 360 * Math.PI / 180, true)
        ctx.closePath()
        ctx.fill()
        ctx.restore()

    }

    //paddle specs
    this.drawRect = function () {

        ctx.save()
        ctx.fillStyle = "#00ffff"
        ctx.translate(this.x, this.y);
        ctx.fillRect(-this.width/2, -this.height/2, this.width, this.height);
        ctx.restore();
    }


    //This changes the player's position
    this.moveCircle = function () {
        this.x += this.vx 
        this.y += this.vy
       // this.vy = gravity

        
    }

    
    this.moveRect = function(){
        if (a) {
            console.log("Moving Left");
            this.x += -5
            this.ax = -1
        }
        if (d) {
            console.log("Moving Right");
            this.x += 5
            this.ax = 1
        }
 }

    this.left = function () {
        return this.x - this.width / 2;
    }
    this.right = function () {
        return this.x + this.width / 2;
    }

    this.top = function () {
        return this.y - this.height / 2;
    }
    this.bottom = function () {
        return this.y + this.height / 2;
    }

    this.hitTestObject = function (obj) {
        if (this.left() < obj.right() &&
            this.right() > obj.left() &&
            this.top() < obj.bottom() &&
            this.bottom() > obj.top()) {
            return true
        }
        return false;
    }


}






