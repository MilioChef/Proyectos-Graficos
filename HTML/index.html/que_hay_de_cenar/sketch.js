function setup() {
    createCanvas(400, 400); 
    noLoop(); 
}

function draw() {
    // 2: ¿Qué hay de cena?
    background(186, 145, 20); 
    fill(220, 220, 220); 
    stroke(0, 0, 0); 
    ellipse(200, 200, 350, 350); 
    fill(255, 255, 255); 
    ellipse(200, 200, 300, 300); 
    
    fill(240, 200, 0); 
    noStroke(); 
    triangle(190, 130, 250, 320, 340, 150); 
    
    fill(255, 230, 100); 
    triangle(210, 157, 250, 320, 320, 170); 
    
    noStroke(); 
    fill(200, 50, 50); 
    
    ellipse(260,250,25,25); 
    ellipse(240,210,20,20); 
    ellipse(280,180,15,15); 
    ellipse(280,220,17,17); 
    
    stroke(150, 100, 0); 
    strokeWeight(15); 
    line(190, 130, 340, 149); 
    
    stroke(230, 230, 230); 
    fill(222, 222, 222); 
    strokeWeight(120); 
    ellipse(140,220,17,17); 
    
    stroke(240, 197, 5); 
    fill(222, 222, 222); 
    strokeWeight(40); 
    ellipse(140,220,17,17); 
    
    stroke(64, 63, 64); 
    strokeWeight(4); 
    fill(99, 99, 99); 
    
    rect(20,150,10,200); 
    rect(10,150,30,10); 
    
    stroke(99, 99, 99); 
    strokeWeight(5); 
    fill(125, 116, 125); 
    line(14, 150, 15, 130); 
    line(21, 150, 21, 130); 
    line(27, 150, 27, 130); 
    line(34, 150, 34, 130); 
}