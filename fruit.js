class Fruit {

    constructor(scle, size, x, y, ySpeed) {
        this.scle = scle;
        this.size = size;
        this.x = x;
        this.y = y;
        this.ySpeed = ySpeed;
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
            console.log('OOPS!');
        }

    }

    score() {

        if(this.x >= h.x && this.x <= h.x + h.scle*h.size && this.y + this.size/2 == h.y) {
            this.reset();
            score++;
            console.log('SCORE');
        }

    }

    reset() {

        this.y = 10;
        this.x = (this.scle)*Math.round(random(0,50));
    }
}