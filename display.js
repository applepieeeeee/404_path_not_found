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
let fish2;
let fish3;

let cat;
let page;
let star1;
let star2;

let dice;
let colorpicker;

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
  createCanvas(1200, 800);
  
  colorpicker = new Sprite();
  colorpicker.img = loadImage('ICONS/colorpicker.png');
  colorpicker.x =  width - 100;
  colorpicker.y = height - 220;
  colorpicker.collider = 'k';
  colorpicker.visible = true; 
  
  textAlign(CENTER);
  textSize(40);
  noStroke();


  // Load images and create sprites
  ball = new Sprite();
  ball.img = loadImage('ICONS/BALL.png');
  ball.x = 220; 
  ball.y = 240; 
  ball.visible = true;

  fish = new Sprite();
  fish.img = loadImage('ICONS/fish.png');
  fish.x = 920; 
  fish.y = 500; 
  fish.visible = true;
  fish.rotation = 0;

  fish2 = new Sprite();
  fish2.img = loadImage('ICONS/fish.png');
  fish2.x = 980; 
  fish2.y = 560; 
  fish2.visible = true;
  fish2.rotation = 0;

  fish3 = new Sprite();
  fish3.img = loadImage('ICONS/fish.png');
  fish3.x = 960; 
  fish3.y = 515; 
  fish3.visible = true;
  fish3.rotation = 0;

  cat = new Sprite();
  cat.img = loadImage('ICONS/cat.png');
  cat.x = 820; 
  cat.y = 260; 
  cat.visible = true;

  page = new Sprite();
  page.img = loadImage('ICONS/page.png');
  page.x = 160; 
  page.y = 700; 
  page.visible = true;
  page.rotation = 16;

  star1 = new Sprite();
  star1.img = loadImage('ICONS/star1.png');
  star1.x = 840; 
  star1.y = 700; 
  star1.visible = true;

  star2 = new Sprite();
  star2.img = loadImage('ICONS/star2.png');
  star2.x = 190; 
  star2.y = 580; 
  star2.visible = true;

  smiski = new Sprite();
  smiski.img = loadImage('ICONS/smiski.png');
  smiski.x = width - 150;
  smiski.y = 200;
  smiski.collider = 'k';
  smiski.visible = true;

  dice = new Sprite();
  dice.img = loadImage('ICONS/dice.png');
  dice.x = 330;
  dice.y = height - 280;
  dice.collider = 'k';
  dice.visible = true; 


  // MUSIC BUTTON SPRITEE
  musicButton = new Sprite();
  musicButton.img = soundOn;
  musicButton.x = -1;
  musicButton.y = height/2 + 40;
  musicButton.w = 200;  
  musicButton.h = 200; 
  musicButton.collider = 'k';

  // Create buttons for all screens
  enterButton = new Sprite(-500, -500);
  a1Button = new Sprite( -500, -500);  
  a2Button = new Sprite( -500, -500);
  b1Button = new Sprite( - 500, -500);
  b2Button = new Sprite( - 500, -500);

  backButton = new Sprite(-500, -500);
  backButton.rotation = 0;
  backButton.img = loadImage('ICONS/back.png');

  showScreen0();

}



/* DRAW LOOP REPEATS */
function draw() {
  // Rotates the vinyl icon
  if (!isMuted){
    musicButton.rotation += 1;
  }

  // Display enter button
  enterButton.w = 200;
  enterButton.h = 70;
  enterButton.collider = "k";
  enterButton.color = "#e8c76b";
  enterButton.text = "enter";
  enterButton.textColor = '#fff3e7ff'

  // Button 1: Flashy Ad Portal
  a1Button.w = 240;
  a1Button.h = 80;
  a1Button.text = "ad portal";
  a1Button.color = "#b89e9c";

  // Button 2: Quiet Tunnel
  a2Button.w = 240;
  a2Button.h = 80;
  a2Button.text = "quiet...";
  a2Button.color = "#dbcede";

  fill(0);

  // Check enter button
  if (enterButton.mouse.presses()) {
    print("enter button pressed");
    showScreen1();
    screen = 1;
  }

  textSize(20);
  stroke(255);
  fill(255);
  text("press to \nmute <3", 90, 190);

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
  a2Button.rotation = 0;
  b2Button.rotation = 0;

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






// This function shows the homepage with information about meeeeee
// It is called when you click on the smiski icon
function showHomepage(){
  print("showing homepage");

  fill("#7e7b74ff");
  rect(0, 0, 1200, 800, 40); 
  drawTopBar();


  ball.visible = false;
  fish.visible = false;
  fish2.visible = false;
  fish3.visible = false;

  cat.visible = false;
  page.visible = false;
  star1.visible = false;
  star2.visible = false;
  dice.visible = false;
  colorpicker.visible = false;

  enterButton.pos = {x: -400, y: -400};

  stroke("#faf7ed");
  fill("#6c7d59");
  rect(180, 260, 320, 200, 40);

  fill("#6c7d59");
  rect(594, 260, 440, 60, 20);

  fill("#6c7d59");
  rect(594, 340, 440, 220, 40);

  strokeWeight(2);
  stroke("#faf7ed");
  fill("#faf7ed");
  textSize(30);
  text("about me: clair w.", width/2, 180);

  strokeWeight(0);
  textSize(24); 

  strokeWeight(1);
  text("my fav programming \nlanguages...", 344, 300);
  text("hs graduation year: 2028", 804, 300);
  text("favorite hobbies:", 820, 380);

  strokeWeight(0);
  text("java, c++, js\n special shout-out: \nlatex", 344, 368);
  text("playing my oboe - math \ncoding - listening to music \npiano - traveling", 820, 440);

  backButton.pos = { x: 160, y: 700 };

}





/* FUNCTIONS TO DISPLAY SCREENS */
// This function sets up the home screen
// It is called when the page loads or when you press the back button
function showScreen0(){
  print("back to screen 0");

  // Set up the home screen
  background("#ffffff");
  fill("#678377ff");
  rect(0, 0, 1200, 800, 40); 

  ball.visible = true;
  fish.visible = true;
  fish2.visible = true;
  fish3.visible = true;

  cat.visible = true;
  page.visible = true;
  star1.visible = true;
  star2.visible = true;
  smiski.visible = true;
  dice.visible = true;
  colorpicker.visible = true;

  enterButton.pos = { x: width / 2, y: height / 2 + 170 };
  a1Button.pos = { x: -500, y: -500};
  a2Button.pos = { x: -500, y: -500};
  b1Button.pos = { x: -500, y: -500};
  b2Button.pos = { x: -500, y: -500};
  backButton.pos = {x: -500, y: -500};

  fill("#bbb09fff"); 
  rect(width / 2 - 200, 95, 400, 40, 20); 
  
  fill(255);
  textFont(font1);
  textSize(80);
  text("404 :( \nPATH NOT FOUND", 
       width / 2, height / 2 - 120);
  textSize(20);
  text("you tried to visit your favorite online game.\nbut instead of loading, \nyour browswer started blinking. \nyou're... inside the internet?", 
    width/2, height/2 + 20);

  textSize(15);
  text("psa: click anywhere to start the music", width/2, height/2 - 280);

  textSize(40);
  textFont(font1);
  noFill();

      // CUSTOMIZATION FOR HOME SCREEN

      fill("#f0dcc0");
      rect(0, 0, 1200, 80, 40, 40, 0, 0); 

      fill("#b3342b");
      ellipse(60, 40, 40, 40); 

      fill("#e3bf4b");
      ellipse(120, 40, 40, 40); 

      fill("#99c47aff");
      ellipse(180, 40, 40, 40);

}

// If you press the enter button, it will take you to the first screen
// This is the first screen where you choose between two portals
function showScreen1(){

  fill("#04214fff");
  rect(0, 0, 1200, 800, 40); 
  drawTopBar();

  textSize(30);
  stroke(255);
  fill(255);
  text("you float into the digital \nvoid. two portals open: one has a \nbunch of flashy ads. the \nother one is eerily \nsilent. which path do you \nchoose?",
     width/2, height/2 - 140);

  enterButton.pos = {x: -500, y: -500};

  ball.visible = false;
  fish.visible = false;
  fish2.visible = false;
  fish3.visible = false;
  cat.visible = false;
  page.visible = false;
  star1.visible = false;
  star2.visible = false;
  dice.visible = false;
  colorpicker.visible = false;

  smiski.visible = false;

  // Button 1: Flashy Ad Portal
  a1Button.pos = { x: width / 2 - 180, y: height / 2 + 200 };
  a1Button.w = 240;
  a1Button.h = 80;
  a1Button.text = "ad portal";
  a1Button.color = "#b89e9c";

  // Button 2: Quiet Tunnel
  a2Button.pos = { x: width / 2 + 180, y: height / 2 + 200 };
  a2Button.w = 240;
  a2Button.h = 80;
  a2Button.text = "quiet...";
  a2Button.color = "#d5c3daff";

}

// If you choose the flashy ad portal, it will take you to screen 2
// Button A1
function showScreen2(){  

  fill("#981d50ff");
  rect(0, 0, 1200, 800, 40); 
  drawTopBar();

  // Text customization
  fill(255);
  stroke(255);
  textSize(30);
  text("pop-ups swarm you!\nyou swat them away.\n\n\n\na download bar appears.", 
       width / 2, height / 2 - 200);

  ball.visible = false;
  fish.visible = false;
  fish2.visible = false;
  fish3.visible = false;
  cat.visible = false;
  page.visible = false;
  star1.visible = false;
  star2.visible = false;
  dice.visible = false;
  colorpicker.visible = false;

  // Move extra buttons off screen
  a1Button.pos = { x: -500, y: -500 };
  a2Button.pos = { x: -500, y: -500 };

  // Button 1: Accept download
  b1Button.pos = { x: width / 2 - 180, y: height / 2 + 200 };
  b1Button.w = 280;
  b1Button.h = 80;
  b1Button.text = "download it";
  b1Button.color = "#dea4bc";

  // Button 2: Run virus scan
  b2Button.pos = { x: width / 2 + 180, y: height / 2 + 200 };
  b2Button.w = 280;
  b2Button.h = 160;
  b2Button.text = "run virus \nscan";
  b2Button.color = "#ffbfc6";

}


// If you choose to download the file, it will take you to screen 3
// Button B1
function showScreen3() {

  fill("#4b2d61");
  rect(0, 0, 1200, 800, 40); 
  drawTopBar();

  // Text customization
  textSize(30);
  stroke(255);
  fill(255);
  text("you installed 'SystemCleaner.EXE'.\nyour screen fades to black...\n\n\n\n\n\n\n\n\n\n", 
    width / 2, height / 2 - 130);
  text("\n\n\n\n\n\n\nyou’ve been logged out — forever.", width / 2, height / 2);

  ball.visible = false;
  fish.visible = false;
  fish2.visible = false;
  fish3.visible = false;
  cat.visible = false;
  page.visible = false;
  star1.visible = false;
  star2.visible = false;
  dice.visible = false;
  colorpicker.visible = false;

  backButton.pos = { x: 160, y: 700 };

  // Move extra buttons off screen
  b1Button.pos = { x: -500, y: -500 };
  b2Button.pos = { x: -500, y: -500 };
}

// If you choose to run the virus scan, it will take you to screen 4
// Button B2
function showScreen4() {

  fill("#3a4536");
  rect(0, 0, 1200, 800, 40); 
  drawTopBar();

  // Text customization
  textSize(30);
  stroke(255);
  fill(255);
  text("Virus scan complete!\nSpyware blocked.\n\n\n\nyou find a secret admin node.", width / 2, height / 2 - 120);
  text("you escape the pop-up maze.", width / 2, height / 2);

  ball.visible = false;
  fish.visible = false;
  fish2.visible = false;
  fish3.visible = false;
  cat.visible = false;
  page.visible = false;
  star1.visible = false;
  star2.visible = false;
  dice.visible = false;
  colorpicker.visible = false;

  // Move extra buttons off screen
  b1Button.pos = { x: -500, y: -500 };
  b2Button.pos = { x: -500, y: -500 };

  backButton.pos = { x: 160, y: 700 };
}

// If you choose the quiet tunnel, it will take you to screen 5
// Button A2
function showScreen5(){

  fill("#85160c");
  rect(0, 0, 1200, 800, 40); 
  drawTopBar();

  // Text customization
  textSize(30);
  stroke(255);
  fill(255);
  text("you enter a forgotten forum from 2003.\na lone internet moderator responds...", width / 2, height / 2 - 120);
  text("\n\n\n\nSTRANGE ENDING: you’re free...  for now.", width / 2, height / 2);

  ball.visible = false;
  fish.visible = false;
  fish2.visible = false;
  fish3.visible = false;
  cat.visible = false;
  page.visible = false;
  star1.visible = false;
  star2.visible = false;
  dice.visible = false;
  colorpicker.visible = false;

  // Move extra buttons off screen
  a1Button.pos = { x: -500, y: -500 };
  a2Button.pos = { x: -500, y: -500 };

  backButton.pos = { x: 160, y: 700 };

}

function drawTopBar() {
  // Rounded top bar
  fill("#eedec7ff");
  rect(0, 0, 1200, 80, 40, 40, 0, 0); 

  // Window buttons
  fill("#b3342b");
  ellipse(60, 40, 40, 40);  
  fill("#e3bf4b");
  ellipse(120, 40, 40, 40); 
  fill("#a6cf88");
  ellipse(180, 40, 40, 40); 
}