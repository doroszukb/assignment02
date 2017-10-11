
function setup() {
  
createCanvas(500, 500);

 background(111,111,111)

angleMode(DEGREES);

frameRate(12);

d = 10;
g = 100;

}
function draw() {
  
  translate(250,250);
  stroke(255,255,255) 
  noFill()

//KRESKI 1

if (frameCount < 120){
line(160,0,cos(frameCount*3)*160,sin(frameCount*3)*160);
}

//KOLKO 1
if (frameCount == 120) {
  
fill(80,80,80)
//rect(-200,-200,200,200)
stroke(255,255,255,200)
ellipse(0,0,320,320);
}

//KRESKI 2
stroke(lerpColor(color(255,255,255), color(80,80,80), frameCount/240));
//stroke(200,200,200) //ZOLTY
if (frameCount > 120 && frameCount < 240) {
 line(160,0,cos(frameCount*3)*160,sin(frameCount*3)*160);
}

//KOLKO 2

if (frameCount == 240) {
  
fill(226,34,9)
stroke(255,255,255,200)
ellipse(0,0,160,160);
}

//KRESK 3
stroke(200,200,200)
if (frameCount > 240 && frameCount < 360) {
 line(80,0,cos(frameCount*3)*80,sin(frameCount*3)*80);
}

//KOLKO 3

if (frameCount == 360) {
  
fill(50,50,59)
stroke(255,255,255)
ellipse(0,0,80,80);
}

//KONNIEC
if (frameCount > 360) {
  //noLoop()
}
if (frameCount == 400) {
  background(50,50,59)
  noFill()
  ellipse(0,0,80,80);
}
}