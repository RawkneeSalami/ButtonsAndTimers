//RONNIE SAINI

// 2 of these variables are used for timers and
var countdown1,but1,yInc = 250,yStrt = 20,txt = 50,bttnY = 500,bttnX = 1200,posX = 0,clickImg,waitForClick = true;

//loading the end image before the page
function preload(){
  clickImg = loadImage('assets/rocket1.jpg');
}

//setting up the screen resolution and the buttons and the functionality.
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textAlign(CENTER);
  countdown1 = new Timer(15000);
  countdown1.start();
  but1 = new Clickable();
  but1.width = bttnX;
  but1.height = bttnY;
  but1.locate((windowWidth/2) - (but1.width/2),
   (windowHeight/2) - (but1.height/2 + 75));

but1.onOutside = function(){
  this.color = ('#8E0EE7');
  this.textSize = txt;
  this.text = "[0]  [0] - LAUNCH THE ROCKET - [0]  [0]";
  this.textColor = ('#000000');
}

but1.onPress = function() {
  this.stroke = ('#8E0EE7');
  this.textSize = txt;
  this.text = "LAUNCHED THE ROCKET!";
 
}
}
// now drawing each time the buttons and counters when pressed
function draw() {
  background('#8E0EE7');
  if(waitForClick) {
 }
   else {
    Counter1();
 }
  but1.draw(); 
}

function Counter1() {
  if( countdown1.expired() ) {
    textAlign(CENTER);
    stroke(7);
    fill(255);
    textSize(4);
    text('gotcha', width/2, 500);
    image(clickImg, width/2, height/4);
}

else {
	fill(255,0,0);
    textSize(200);
    text( Math.round(countdown1.getRemainingTime()/1000), width/2, 1200);
 }
}

function mousePressed() {
	waitForClick = false;
	countdown1.start();	
}
