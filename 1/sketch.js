//animations like p5 images should be stored in variables
//in order to be displayed during the draw cycle
var nfirst = [];
var count = 10;
//it's advisable (but not necessary) to load the images in the preload function
//of your sketch otherwise they may appear with a little delay
function preload() {
  //create an animation from a sequence of numbered images
  //pass the first and the last file name and it will try to find the ones in between
  for (let i = 0; i < count; i++) {
    nfirst.push(loadAnimation(
      "../assets/first_001.png",
      "../assets/first_002.png",
      "../assets/first_003.png",
      "../assets/first_004.png",
      "../assets/first_005.png",
      "../assets/first_006.png",
      "../assets/first_007.png",
      "../assets/first_008.png",
      "../assets/first_009.png"
    ));
  }

}

function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  clear();
  background(0, 255, 255);
  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
  let start = 300
  for (let i = 0; i < count; i++) {
    start = start + 50
    animation(nfirst[i], start, 150);
  }
}
