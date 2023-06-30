var song; 
var song2; 
var button; 
var amp;  
var bpmhistory = [];  
var yVal; 
var accel; 
var velocity; 
var mass; 
var togglesong; 
var bpm;  

function toggleSong2() { 
if (song2.isPlaying()) { 
song2.pause(); 
} else{ 
song2.play();  
}
}
function preload() {
  // preload() runs once
  song = loadSound("BohemianR.mp3"); 
  song2 = loadSound("BeatlesS.mp3")
}  
 
function setup() {
  createCanvas(800,800);  
  yVal = 10;  
  velocity = 1; 
  mass = 50; 
  accel = mass * 0.01; 
  button = createButton ('toggle'); 
  button.mousePressed(togglesong, 500, 500);    
  song2.play(); 
  amp = new p5.Amplitude();
  // Create ball objects
for(var i =0;i<200;i++){
  
}

} 

function loaded(){  
  song.play();
}
function mousePressed() {
  if (song.isPlaying()) {
   song.setBpm(0.3); 
   song2.setBpm(0.3);
   song.stop(); 
   song2.stop();
 } else {
   song.play();  
   song2.play();
 }  }

function draw() {
 background(120,160,190);   
  fill(0);
  velocity += accel; 
  yVal += velocity;
	ellipse(width/10,yVal, mass);  
  	ellipse(width/20,yVal, mass); 
    ellipse(width/30,yVal, mass);   
    ellipse(width/40,yVal, mass); 
  
  if (yVal > height - mass/4) {
    velocity *= -0.1;
    yVal = height - mass/4;
  
  
 var bpm = amp.getLevel();    
 var Velocity = map(bpm, 0, 0.3)
 bpmhistory.push(bpm);   
 stroke(255);  
 noFill();
 beginShape()
 for (var i = 9; i < bpmhistory.length; i++) { 
   var y = map(bpmhistory[i], 0, 1, height/2, 0); 
   point(i,y);   
   vertex(i,y);

 
 }   }
  endShape(); 
  
if (bpmhistory.length > width) { 
  bpmhistory.splice(0,1)
                              } 
  
  function mousePressed() {
  ellipse.setVelocityY(-100);
}

fill(0);
ellipse(height/2.65, width/2, 50, bpm * 200);  
   velocity += accel; 
  yVal += velocity;
	ellipse(width/10,yVal, mass);  
  	ellipse(width/20,yVal, mass); 
    ellipse(width/30,yVal, mass);   
    ellipse(width/40,yVal, mass); 
  
  if (yVal > height - mass/4) {
    velocity *= -0.1;
    yVal = height - mass/4;
drawGlass();
for(i =0;i<200;i++){
}}

function drawGlass(){
  stroke(0);
strokeWeight(5);
noFill();
beginShape();
vertex(100,100);
vertex(500,100);
vertex(350,350);
vertex(350,450);
vertex(500,700);
vertex(100,700);
vertex(250,450);
vertex(250,350);
vertex(100,100);
endShape();
}}