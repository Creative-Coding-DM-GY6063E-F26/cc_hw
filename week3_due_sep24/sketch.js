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
  
  //turquoise
  fill(76,181,219);
  rect(0,260,160,20);

  //seafoam greenish
  fill(220,228,221);
  quad(210,0,300,0,300,50,210,80);
  quad(90,48,145,45,140,180,85,190);
  quad(10,320,280,140,355,140,55,325);

  
  //blue
  fill(47,78,151);
  circle(540,480,45);
  circle(540,810,43);
  circle(770,680,46);
  circle(910,400,40);
  rect(120,100,570,12);
  triangle(0,52,30,48,0,165);
  triangle(130,32,180,24,155,130)

  //yellow bottom left
  fill(238,186,47);
  quad(120,840,500,1000,180,1000,120,840);

  //green rect
  fill(35,138,114);
  rect(0,700,300,50);

  //brown lines
  noFill();
  stroke(75,45,31, 185);
  strokeWeight(8);
  line(0,900,800,1000);
  stroke(75,45,31, 160);
  strokeWeight(6);
  line(0,700,1000,850);
  stroke(39,44,33, 230);
  strokeWeight(6);
  line(0,850,100,850);
  strokeWeight(4);
  arc(200,1000,1000,450,PI,QUARTER_PI)
  circle(100,650,100);
  line(0,450,270,440);
  line(270,440,250,700);
  line(110,446,100,600);

  bezier(440,670,510,680,560,610,600,610);
  bezier(510,560,550,510,720,500,750,500);
    
  stroke(90, 100, 115);
  strokeWeight(8);
  bezier(0,720,300,740,400,610,600,590);
  strokeWeight(6);
  bezier(125,245,400,450,750,500,1000,510);
  
  noStroke();

  //darker turquoise
  fill(34,111,164);
  rect(130,245,160,7);
  rect(130,265,160,7);
  quad(980,510,1000,510,1000,600,979,620);
  triangle(1000,645,1000,670,980,670)

  
  //green  
  fill(35,139,114);
  rect(700,880,30,120);
  rect(770,880,30,120);
  beginShape();
  vertex(750,150);
  vertex(880,170);
  vertex(875,350);
  vertex(810,368);
  vertex(740,335);
  endShape(CLOSE);
  triangle(280,430,430,460,280,460);

  
  //red
  fill(207, 64, 63);
  rect(250,730,130,40);
  triangle(30,48,80,40,50,150);
  triangle(80,40,130,32,110,130);

  //yellow
  fill(238,186,47);
  beginShape();
  vertex(850,0);
  vertex(980,0);
  vertex(980,70);
  vertex(930,70);
  vertex(930,25);
  vertex(850,25);
  endShape(CLOSE);


  noFill();
  stroke(238,186,47);
  strokeWeight(37);
  arc(798, 680, 140, 140, (1.3*PI), PI+(.55*PI));
  
  fill(74,91,103);
  
  
}