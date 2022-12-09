class Hero {

    constructor() {
        this.scle = 20;
        this.size = 5;
        this.x = this.x = width / 2 - ((this.scle*this.size)/2);
        this.y = height - 60;
        this.xSpeed = 0;
    }

    display() {

        fill(255);
        noStroke();
        rect(this.x, this.y, this.scle*this.size, this.scle);

    }

    update(i) {

        //Constrains h.x to Edges of Canvas
        this.x = constrain(this.x, 0, width - this.scle*this.size);

        switch(i) {
            case 0:
                this.xSpeed = 0;
                break;
            case 1:
                this.xSpeed = this.scle;
                this.x += this.xSpeed;
                break;
            case 2:
                this.xSpeed = -this.scle;
                this.x += this.xSpeed;
                break;
        }

    }

    move() {

        //Moves Hero Left and Right
        if(keyIsDown(RIGHT_ARROW)) {
            h.update(1);
        } else if(keyIsDown(LEFT_ARROW)) {
            h.update(2);
        } else {
            h.update(0);
        }

    }

    reset() {

        this.x = this.x = width / 2 - ((this.scle*this.size)/2); 
    }


}