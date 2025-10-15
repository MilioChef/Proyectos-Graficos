function setup() {
    createCanvas(400, 400); 
    noLoop(); 
}

function draw() {
    // 1: Muñeco de nieve que saluda
    fill(200); 
    rect(0, 350, 400, 50); 
    
    fill(255); 
    ellipse(200, 300, 150, 150); 
    ellipse(200, 200, 100, 100); 
    ellipse(200, 120, 75, 75); 
    
    stroke(0, 0, 0); 
    strokeWeight(3); 
    
    line(150, 200, 80, 160); 
    line(250, 200, 320, 160); 
}