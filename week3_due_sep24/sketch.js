function setup() {
  createCanvas(1000, 1000);
  // bg tan
  background(218,203,181);
  
  //nostroke objects
  noStroke();
  // bg blue
  beginShape();
  fill(191,201,176)
  vertex(0,0);
  vertex(1000,0);
  vertex(1000,200);
  vertex(150,300);
  vertex(1000,500);
  vertex(1000,530);
  vertex(0,400);  
  vertex(0,750);
  vertex(1000,900);
  vertex(1000,960);
  vertex(0,843); 
  endShape(CLOSE);

  //orange diamond
  fill(234,111,59);
  quad(550,200,790,540,595,850,340,500);

  //blue dots
  fill(47,78,151);
  circle(540,480,45);
  circle(540,810,43);
  circle(770,680,46);

  //green rectangles
  fill(35,139,114);
  rect(700,880,20,120);
  rect(750,880,20,120);
  
}