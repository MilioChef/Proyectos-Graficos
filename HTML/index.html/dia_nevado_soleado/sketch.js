function setup() {
    createCanvas(400, 400); 
    noLoop(); 
}

function draw() {
    // 3: Día nevado soleado
    background(135, 206, 235); 

    fill(0, 255, 0); 
    rect(0, 350, 400, 50); 

    fill(255, 255, 0); 
    ellipse(50, 50, 80, 80); 

    fill(255, 255, 255); 
    ellipse(200, 300, 150, 150); 
    ellipse(200, 200, 100, 100); 
    ellipse(200, 120, 75, 75); 
}