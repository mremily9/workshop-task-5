let table; 
let gamePic = [ ]; 



function preload(){
  //table details 
  table = loadTable('Assets/games.csv', 'csv', 'header');

  //pictures import for games 
  gamePic[0] = loadImage('Assets/bloons.jpg');
  gamePic[1] = loadImage('Assets/p5r.jpg');
  gamePic[2] = loadImage('Assets/p4g.jpg');
  gamePic[3] = loadImage('Assets/kh1.5.jpg');
  gamePic[4] = loadImage('Assets/balatro.jpg');
}

function setup() { // bar graph
  createCanvas(550, 400);
  //visual template

  background(255);
  gameLabels();
  showHours();
  hoursLabel();


  setTimeout(animation, 3000);
}


function gameLabels() {
  for (x = 0; x < 5; x++){
    let row = table.getRow(x);
    let game = row.get("gameTitle");
    fill(0);
    text(game, 80, 30 + x * 60);
  }
}

function showHours(){
  for (x = 0; x < 5; x++){
    let row = table.getRow(x);
    let hours = row.get("HoursPlayed");
    noStroke();
    fill(119, 166, 154);
    rect(80, 35 + x * 60, hours * 2, 30); 
  }
}

function gameLabels() {
  for (x = 0; x < 5; x++){
    let row = table.getRow(x);
    let game = row.get("gameTitle");
    
    stroke(0);
    fill(0);
    text(game, 80, 30 + x * 60);

    gamePic[x].resize(50, 50);

    image(gamePic[x], 20, 20 + x * 60);
  }
}

function hoursLabel(){
  let row = table.getRow(0);
  let row1hours = row.get("HoursPlayed");
 
  // text(row1hours, 10, 10);

  let i = row1hours/20; 

  // text(i, 20, 40);

  for (j = 0; j <= i+1; j++){
    let space = j * 20; 
    stroke(0);
    fill(0);
    text(space, 75 + (j * 40), 350);
    
    line( 75 + (j * 40), 335, 75 + (j * 40), 325);
  }

  line(75, 330, row1hours * 2.5, 330);

  text('Hours Played', 75, 370);
}


function draw() {
  // let rows = table.getRowCount();
  // text("wa "+ rows, 20, 100);
}

function animation() {
  background(119, 166, 154);
  let xpos = 0;
  let ypos = 0;
  for (x = 0; x < 5; x++){
    let row = table.getRow(x);
    let hours = row.get("HoursPlayed");

    fill(0);
    // text(game, 80, 30 + x * 60);

    gamePic[x].resize(50, 50);
    for(i= 0; i <hours/10; i++){
      image(gamePic[x], xpos + random(0, width - 50), ypos + random(0, height - 50));
    }
  }
}


