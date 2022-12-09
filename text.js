class Text {

    constructor(myFill, myTextSize, myText, myX, myY) {
        this.fill = myFill;
        this.textSize = myTextSize;
        this.text = myText;
        this.x = myX;
        this.y = myY;
    }

    display() {

        fill(this.fill);
        noStroke();
        textSize(this.textSize);
        textAlign(CENTER);
        text(this.text, this.x, this.y);

    }

    hide() {

        this.fill = bg;

    }

    show() {

        this.fill = 255;

    }

}