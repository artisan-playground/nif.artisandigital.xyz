//click on the canvas to create self destructing sprite and toggle visibility

function setup() {
    createCanvas(800, 400);
}
function draw() {
    background(0, 255, 255);
    drawSprites();
}
function mousePressed() {

    //create a sprite
    var nfirst = createSprite(mouseX, mouseY);
    nfirst.addAnimation('normal', '../assets/first_001.png');

    //set a self destruction timer (life)
    nfirst.life = 10;
}