//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let font1;

let bgMusic;
let isMuted = false;
let soundOn;
let musicButton;


let enterButton;

let a1Button;
let a2Button;
let b1Button;
let b2Button;
let backButton;

let screen = 0;

let ball;
let fish;
let cat;
let page;
let picker;
let star1;
let star2;

let virus;

let pointer;

let smiski;
let backSmiski;

function preload() {
  font1 = loadFont('FONTS/MYFONT.ttf');
  bgMusic = loadSound('MUSIC/background.mp3');
  soundOn = loadImage('ICONS/SOUNDON.png');
}

/* SETUP RUNS ONCE */
function setup() {
  getAudioContext().suspend(); 

  bgMusic.loop();
  textFont(font1);


  // Setup
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20);
  noStroke();

  ball = new Sprite();
  ball.img = loadImage('ICONS/BALL.png');
  ball.x = 160; 
  ball.y = 100; 
  ball.visible = true;

  fish = new Sprite();
  fish.img = loadImage('ICONS/fish.png');
  fish.x = 460; 
  fish.y = 250; 
  fish.visible = true;

  cat = new Sprite();
  cat.img = loadImage('ICONS/cat.png');
  cat.x = 410; 
  cat.y = 130; 
  cat.visible = true;

  page = new Sprite();
  page.img = loadImage('ICONS/page.png');
  page.x = 110; 
  page.y = 350; 
  page.visible = true;
  page.rotation = 16;

  star1 = new Sprite();
  star1.img = loadImage('ICONS/star1.png');
  star1.x = 420; 
  star1.y = 350; 
  star1.visible = true;

  star2 = new Sprite();
  star2.img = loadImage('ICONS/star2.png');
  star2.x = 140; 
  star2.y = 270; 
  star2.visible = true;

  virus = new Sprite();
  virus.img = loadImage('ICONS/virus.png');
  virus.x = width/2; 
  virus.y = 270; 
  virus.visible = false;

  smiski = new Sprite();
  smiski.img = loadImage('ICONS/smiski.png');
  smiski.x = width - 40;
  smiski.y = 100;
  smiski.collider = 'k';
  smiski.visible = true;


  // // MUSIC BUTTON SPRITEEEE
  musicButton = new Sprite();
  musicButton.img = soundOn;
  musicButton.x = 0;
  musicButton.y = height/2;
  musicButton.w = 100;  
  musicButton.h = 100; 
  musicButton.collider = 'k';

  // Create buttons for all screens
  enterButton = new Sprite(-100, -100);
  a1Button = new Sprite( -200, -200);  
  a2Button = new Sprite( -200, -200);
  b1Button = new Sprite( - 100, -100);
  b2Button = new Sprite( - 150, -150);

  backButton = new Sprite(-100, -100);
  backButton.rotation = 0;
  backButton.img = loadImage('ICONS/back.png');

  showScreen0();

}



/* DRAW LOOP REPEATS */
function draw() {
  if (!isMuted){
    musicButton.rotation += 1;
  }

  // Display enter button
  enterButton.w = 100;
  enterButton.h = 50;
  enterButton.collider = "k";
  enterButton.color = "#e8c76b";
  enterButton.text = "enter";

  // Button 1: Flashy Ad Portal
  a1Button.w = 120;
  a1Button.h = 40;
  a1Button.text = "ad portal";
  a1Button.color = "#b89e9c";

  // Button 2: Quiet Tunnel
  a2Button.w = 120;
  a2Button.h = 40;
  a2Button.text = "quiet...";
  a2Button.color = "#dbcede";

  fill(0);

  // Check enter button
  if (enterButton.mouse.presses()) {
    print("enter button pressed");
    showScreen1();
    screen = 1;
  }

  textSize(15);
  stroke(255);
  fill(255);
  text("press to \nmute <3", 52, 95);

  if (musicButton.mouse.presses()) {
    isMuted = !isMuted;  

    if (isMuted) {
      bgMusic.setVolume(0);
    } else {
      bgMusic.setVolume(1);
    }
  }

  if ( smiski.mouse.presses() ){
    showHomepage();
  }

  if (screen == 1) {

    if (a1Button.mouse.presses()) {
      print("Display screen 2");
      showScreen2();
      screen = 2;

    } else if (a2Button.mouse.presses()) {
      print("Display screen 5");
      showScreen5();
      screen = 5;
    }
  } else if (screen == 2){
    if (b1Button.mouse.presses()){
      print("Display screen 3");
      showScreen3();
      screen = 3;
    } else if (b2Button.mouse.presses()){
      print("Display screen 4");
      showScreen4();
      screen = 4
    }
  } 

  if (backButton.mouse.presses()){
    showScreen0();
  }

  enterButton.rotation = 0;
  backButton.rotation = 0;

}

/* MUSIC FUNCS */
function mousePressed() {
  if (getAudioContext().state !== 'running') {
    userStartAudio();
  }
}

function touchStarted() {
  if (getAudioContext().state !== 'running') {
    userStartAudio();
  }
}

function showHomepage(){
  print("showing homepage");

  fill("#7e7b74ff");
  rect(0, 0, 600, 400, 20); 
  drawTopBar();


  ball.visible = false;
  fish.visible = false;
  cat.visible = false;
  page.visible = false;
  star1.visible = false;
  star2.visible = false;

  enterButton.pos = {x: -200, y: -200};


  stroke("faf7ed");
  fill("#6c7d59");
  rect(90, 130, 160, 100, 20);

  fill("#6c7d59");
  rect(297, 130, 220, 30, 10);

  fill("#6c7d59");
  rect(297, 170, 220, 110, 20);

  strokeWeight(2);
  stroke("#faf7ed");
  fill("#faf7ed");
  textSize(30);
  text("about me: clair w.", width/2, 90);

  strokeWeight(0);
  textSize(12); 

  strokeWeight(1);
  text("my fav programming \nlanguages...", 172, 150);
  text("hs graduation year: 2028", 402, 150);
  text("favorite hobbies:", 410, 190);

  strokeWeight(0);
  text("java, c++, js\n special shout-out: \nlatex", 171, 184);
  text("playing my oboe - math \ncoding - listening to music \npiano - traveling", 410, 220);

  backButton.pos = { x: 60, y: 360 };

}


/* FUNCTIONS TO DISPLAY SCREENS */
function showScreen0(){
  print("back to screen 0");

  // Set up the home screen
  background("#fffff");
  fill("#769c8b");
  rect(0, 0, 600, 400, 20); 

  ball.visible = true;
  fish.visible = true;
  cat.visible = true;
  page.visible = true;
  star1.visible = true;
  star2.visible = true;
  smiski.visible = true;


  enterButton.pos = { x: width / 2, y: height / 2 + 90 };
  a1Button.pos = { x: -100, y: -100};
  a2Button.pos = { x: -100, y: -100};
  b1Button.pos = { x: -100, y: -100};
  b2Button.pos = { x: -100, y: -100};
  virus.pos = { x: -100, y: -100};
  backButton.pos = {x: -100, y: -100};


  fill(255);
  textFont(font1);
  textSize(40);
  text("404 :( \nPATH NOT FOUND", 
       width / 2, height / 2 - 60);
  textSize(10);
  text("you tried to visit your favorite online game.\nbut instead of loading, \nyour browswer started blinking. \nyou're... inside the internet?", width/2, height/2 + 10);

  textSize(20);
  textFont(font1);
  noFill();

      // CUSTOMIZATION FOR HOME SCREEN

      fill("#f0dcc0"); 
      rect(0, 0, 600, 40, 20, 20, 0, 0);
      fill("#b3342b");
      ellipse(30, 20, 20, 20);
      fill("#e3bf4b");
      ellipse(60, 20, 20, 20);
      fill("#99c47aff");
      ellipse(90, 20, 20, 20);

}

function showScreen1(){

  fill("#04214fff");
  rect(0, 0, 600, 400, 20); 
  drawTopBar();

  textSize(18);
  stroke(255);
  fill(255);
  text("you float into the digital \nvoid. two portals open: one has a \nbunch of flashy ads. the \nother one is eerily \nsilent. which path do you \nchoose?", 
       width/2, height/2 - 70);
  enterButton.pos = {x: -200, y: -200};

  ball.visible = false;
  fish.visible = false;
  cat.visible = false;
  page.visible = false;
  star1.visible = false;
  star2.visible = false;

  smiski.visible = false;

  // Button 1: Flashy Ad Portal
  a1Button.pos = { x: width / 2 - 90, y: height / 2 + 100 };
  a1Button.w = 120;
  a1Button.h = 40;
  a1Button.text = "ad portal";
  a1Button.color = "#b89e9c";

  // Button 2: Quiet Tunnel
  a2Button.pos = { x: width / 2 + 90, y: height / 2 + 100 };
  a2Button.w = 120;
  a2Button.h = 40;
  a2Button.text = "quiet...";
  a2Button.color = "#d5c3daff";

}

function showScreen2(){  

  fill("#981d50ff");
  rect(0, 0, 600, 400, 20); 
  drawTopBar();

  text("pop-ups swarm you!\nyou swat them away.\n\n\n\na download bar appears.", 
       width / 2, height / 2 - 90);

  ball.visible = false;
  fish.visible = false;
  cat.visible = false;
  page.visible = false;
  star1.visible = false;
  star2.visible = false;

  // Move extra buttons off screen
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };

  // Button 1: Accept download
  b1Button.pos = { x: width / 2 - 90, y: height / 2 + 100 };
  b1Button.w = 140;
  b1Button.h = 40;
  b1Button.text = "download it";
  b1Button.color = "#dea4bc";

  // Button 2: Run virus scan
  b2Button.pos = { x: width / 2 + 90, y: height / 2 + 100 };
  b2Button.w = 140;
  b2Button.h = 80;
  b2Button.text = "run virus \nscan";
  b2Button.color = "#ffbfc6";

}

function showScreen3() {

  fill("#4b2d61");
  rect(0, 0, 600, 400, 20); 
  drawTopBar();
  virus.visible = true;

  text("you installed 'SystemCleaner.EXE'.\nyour screen fades to black...\n\n\n\n\n\n\n\n\n\n", width / 2, height / 2 - 65);
  text("\n\n\n\n\n\n\nyou’ve been logged out — forever.", width / 2, height / 2);

  ball.visible = false;
  fish.visible = false;
  cat.visible = false;
  page.visible = false;
  star1.visible = false;
  star2.visible = false;

  backButton.pos = { x: 60, y: 360 };

  // Move extra buttons off screen
  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };
}

function showScreen4() {

  fill("#3a4536");
  rect(0, 0, 600, 400, 20); 
  drawTopBar();

  text("Virus scan complete!\nSpyware blocked.\n\n\n\nyou find a secret admin node.", width / 2, height / 2 - 60);
  text("you escape the pop-up maze.", width / 2, height / 2);

  ball.visible = false;
  fish.visible = false;
  cat.visible = false;
  page.visible = false;
  star1.visible = false;
  star2.visible = false;

  // Move extra buttons off screen
  b1Button.pos = { x: -100, y: -100 };
  b2Button.pos = { x: -150, y: -150 };

  backButton.pos = { x: 60, y: 360 };
}

function showScreen5(){

  fill("#85160c");
  rect(0, 0, 600, 400, 20); 
  drawTopBar();

  text("you enter a forgotten forum from 2003.\na lone internet moderator responds...", width / 2, height / 2 - 60);
  text("\n\n\n\nSTRANGE ENDING: you’re free...  for now.", width / 2, height / 2);

  ball.visible = false;
  fish.visible = false;
  cat.visible = false;
  page.visible = false;
  star1.visible = false;
  star2.visible = false;

  // Move extra buttons off screen
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };

  backButton.pos = { x: 60, y: 360 };

}



function drawTopBar() {
  // Rounded top bar
  fill("#eedec7ff");
  rect(0, 0, 600, 40, 20, 20, 0, 0);

  // Browser-style window buttons
  fill("#b3342b");
  ellipse(30, 20, 20, 20);  // red
  fill("#e3bf4b");
  ellipse(60, 20, 20, 20);  // yellow
  fill("#a6cf88");
  ellipse(90, 20, 20, 20);  // green
}