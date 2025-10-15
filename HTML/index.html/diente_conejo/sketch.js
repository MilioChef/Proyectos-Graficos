function setup() {
    createCanvas(400, 400); 
    noLoop(); 
}

function draw() {
    // 4: Dientes de conejo
    background(255); 

    var eyeSire = 20 ; 
    var tootHHeight = 20 ; 

    ellipse(150, 70, 60, 120); 
    ellipse(240, 70, 60, 120); 

    ellipse(200, 170, 150, 150); 

    fill(0, 0, 0); 
    ellipse(170, 150, eyeSire, eyeSire); 
    ellipse(230, 150, eyeSire, eyeSire); 

    line(150, 200, 250, 200); 

    noFill(); 
    rect(185, 200, 15, tootHHeight); 
    rect(200, 200, 15, tootHHeight); 
}