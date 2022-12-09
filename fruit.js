class Fruit {

    constructor() {
        this.scle = 10;
        this.size = 20;
        this.x = (this.scle)*Math.round(random(0,50));
        this.y = 10;
        this.ySpeed = 20;
    }

    display() {

        fill(0, 0, 255);
        noStroke();
        rect(this.x, this.y, this.size, this.size);

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
            score++;
        }

    }

    reset() {

        this.y = 10;
        this.x = (this.scle)*Math.round(random(0,50));
    }
}