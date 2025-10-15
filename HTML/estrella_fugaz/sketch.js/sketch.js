var xPos = 3; 
var yPos = 2; 
var x2Pos = 4; 
var y2Pos = 4; 

function setup() {
    createCanvas(400, 400); 
}

function draw() {
    // 8: Estrella fugaz
    background(29, 40, 115); 
    
    noStroke(); 
    fill(200, 200, 200); 
    ellipse(350,50,70,70); 
    
    fill(61, 61, 61); 
    rect(0, 300, 120, 100); 
    rect(150,250,100,150); 
    rect(270,320,200,80); 
    
    fill(255, 209, 59); 
    rect(160, 290, 10, 10); 
    rect(180,290,10,10); 
    rect(210,290,10,10); 
    rect(230,290,10,10); 
    rect(210,310,10,10); 
    rect(230,310,10,10); 
    rect(160,310,10,10); 
    rect(180,310,10,10); 
    rect(30,330,12,8); 
    rect(10,330,12,8); 
    rect(70,330,12,8); 
    rect(90,330,12,8); 
    rect(70,350,12,8); 
    rect(90,350,12,8); 
    rect(10,350,12,8); 
    rect(30,350,12,8); 
    rect(285,350,12,8); 
    rect(310,350,12,8); 
    rect(350,350,12,8); 
    rect(380,350,12,8); 
    rect(70,350,12,8); 
    rect(90,350,12,8); 
    rect(10,350,12,8); 
    rect(30,350,12,8); 
    
    xPos += 10; 
    yPos += 5; 
    
    if(xPos > 600) { 
        xPos = 0; 
        yPos = 0; 
    } 
    
    fill(255, 242, 0); 
    ellipse(xPos, yPos, 10, 10); 
    
    fill(232, 250, 30); 
    ellipse(50, 80, 6, 6); 
    ellipse(250, 30, 8, 8); 
    ellipse(300, 250, 2, 2); 
    ellipse(20, 60, 2, 2); 
    ellipse(100, 250, 6, 6); 
    ellipse(40, 150, 5, 5); 
    ellipse(200, 80, 6, 6); 
    ellipse(270, 180, 6, 6); 
}