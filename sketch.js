let score = 0;
let scle = 20;
let bg = 30;

let h;
let f;

let tGameStart;
let tReset;

let gameStart = false;

function setup() {

    createCanvas(500, 500);
    frameRate(40);
    
    h = new Hero();
    f = new Fruit();

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
    }

    // //Grid Lines
    // stroke(0);
    // for(let i = 0; i < width; i += scle) {
    //     stroke(0);
    //     line(i, 0, i, height);
    //     line(0, i, width, i);

    //     stroke(255,0,0);
    //     line(width/2, 0, width/2, height);
    // }

}

function keyPressed() {

    //Resets Game when Space is Pressed
    if(key == ' ') {
        h.reset();
        f.reset();
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