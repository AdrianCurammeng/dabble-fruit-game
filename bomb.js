class Bomb {

    constructor() {
        this.scle = 10;
        this.size = 20;
        this.x = (this.scle)*Math.round(random(0,40));
        this.y = 10;
        this.ySpeed = 30;
    }

    display() {

        fill(0);
        noStroke();
        ellipse(this.x, this.y, this.size, this.size);

    }

    fall() {

        this.y += this.ySpeed;

        if(this.y > height + this.scle) {
            this.reset();
        }

    }

    score() {

        if(this.x >= h.x && this.x <= h.x + h.scle*h.size && this.y + this.size/2 == h.y) {
            this.reset();
            score--;
            console.log('OUCH');
        }

    }

    reset() {

        this.x = (this.scle)*Math.round(random(0,40));
        this.y = 10;

    }

}