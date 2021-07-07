function setup() {
  createCanvas(400, 400);
  background(220);
  drawing = false
}

function draw() {
  pos = [mouseX,mouseY]
  noStroke()
  if (drawing == true){
  fill(40, 90, 150)
  ellipse(pos[0], pos[1], 20, 20)
  }
}

  function mousePressed(){
  drawing = true
  }
  
function mouseReleased(){
  drawing = false
  }

function keyPressed (){
  if (keyCode === BACKSPACE){
    background(220);
  }
  
}

