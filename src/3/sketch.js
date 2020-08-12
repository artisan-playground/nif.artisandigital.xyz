//Changing the sprites' animations
//position and transformations: rotation, scale, mirror
//move the mouse and click
//press and hold the up and down keys

var nfirst;


function setup() {
    createCanvas(800, 300);

    //create a sprite and add the 3 animations
    nfirst = createSprite(400, 150, 50, 100);
    nfirst.addAnimation('stand', "../assets/first_001.png");
    nfirst.addAnimation('spinning', "../assets/first_001.png", "../assets/first_002.png", "../assets/first_003.png", "../assets/first_004.png", "../assets/first_005.png", "../assets/first_006.png");
}

function draw() {
    clear();
    background(0, 255, 255);
    drawSprites();
}
function mouseDragged() {
    nfirst.position.x = mouseX;
    nfirst.position.y = mouseY;
    nfirst.changeAnimation('spinning');
}
function mouseReleased() {
    nfirst.changeAnimation('stand');
}