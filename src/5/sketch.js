//animations like p5 images should be stored in variables
//in order to be displayed during the draw cycle
var mouse_moved = false;
var touch_started = false;
var nfirst;
var nfirstSpriteSheet;
var nfirstwalk;
var nfirststand;

function preload() {
    //create an animation from a sequence of numbered images
    //pass the first and the last file name and it will try to find the ones in between]
    // nfirstSpriteSheet = loadSpriteSheet('../assets/first_001.png', player_frames);
    nfirstwalk = loadAnimation("../assets/first_001.png",
        "../assets/first_002.png",
        "../assets/first_003.png",
        "../assets/first_004.png",
        "../assets/first_005.png",
        "../assets/first_006.png",
        "../assets/first_007.png",
        "../assets/first_008.png",
        "../assets/first_009.png");
    nfirststand = loadAnimation(new SpriteSheet('../assets/first_001.png',
        [{ 'name': 'player_stand', 'frame': { 'x': 0, 'y': 0 } }]));
}

function setup() {
    createCanvas(displayWidth, displayHeight);
    // Create the Player sprite and add it's animations
    nfirst = createSprite(100, 284, 70, 94);
    nfirst.addAnimation('walk', nfirstwalk);
    nfirst.addAnimation('stand', nfirststand);
}

function draw() {
    clear();
    background(0, 255, 255);

    var eventX;
    if (isTouch()) {
        eventX = touchX;
    } else {
        eventX = mouseX;
    }
    if (keyDown('z')) {
        nfirst.changeAnimation('walk');
        // flip horizontally
        nfirst.mirrorX(-1);
        // move left
        nfirst.velocity.x = -2;
    }
    else if (keyDown('x')) {
        nfirst.changeAnimation('walk');
        // flip horizontally
        nfirst.mirrorX(1);
        // move right
        nfirst.velocity.x = 2;
    }
    else {
        nfirst.changeAnimation('stand');
        //if close to the mouse, don't move
        nfirst.velocity.x = 0;
    }
    drawSprites();
}
function touchStarted() {
    touch_started = true;
}

function mouseMoved() {
    mouse_moved = true;
}

function isTouch() {
    return touch_started && !mouse_moved;
}