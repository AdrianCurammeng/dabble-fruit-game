let score = 0;
let scle = 20;
let bg = 30;

let h;
let f;
let b;

let tGameStart;
let tReset;

let gameStart = false;

function setup() {

    createCanvas(500, 500);
    frameRate(40);
    
    h = new Hero();
    f = new Fruit();
    b = new Bomb();

    tGameStart = new Text(255, 30, 'Press Enter to Start Game', width/2, height/2);
    tReset = new Text(bg, 15, 'Press Space to Reset Game', 390, 25);

}

function draw() {

    background(bg);

    //Displays Score
    stroke(bg);
    text('Score: ', 35, 20);
    text(score, 63, 20);

    tGameStart.display();
    tReset.display();

    //Shows Elements when Game is Started
    if(gameStart) {
        f.display();
        f.fall();
        f.score();
        h.display();
        h.move();
        b.display();
        b.move();
    }

}

function keyPressed() {

    //Resets Game when Space is Pressed
    if(key == ' ') {
        h.reset();
        f.reset();
        b.reset();
        gameStart = false;
        score = 0;
        console.log('RESET');
    }

    //Before Game Start, and After Game Start
    if(!gameStart) {
        tGameStart.show();
        tReset.hide();
        if(keyCode === ENTER) {
            gameStart = true;
            tGameStart.hide();
            tReset.show();
            console.log('START');
        }
    }

}