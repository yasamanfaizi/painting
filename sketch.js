var brush 

function preload(){
  Eraser = loadImage("Eraser-512.png")
}

function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {


  if (mouseIsPressed){
    if (mouseX<=100){
      if (mouseY<=100){
        brush = "red"
      } else if (mouseY<=200){
        brush = "orange"
      }else if (mouseY<=300){
        brush = "yellow"
      }else if (mouseY<=400){
        brush = "green"
      }
      else if (mouseY<=500){
        brush = "blue"
      }else if (mouseY<=600){
        brush = "purple"
      }
      else if (mouseY<=700){
        brush = "white"
      }
    }
    stroke(brush)
    line(mouseX, mouseY,pmouseX,pmouseY)
  }
  fill("black")
  textSize(20)
  noStroke()
  text("Sizes:",displayWidth-100,20)
  
  fill ("red")
  rect(0,0,100,100)
  fill ("orange")
  rect(0,100,100,100)
  fill ("yellow")
  rect(0,200,100,100)
  fill ("green")
  rect(0,300,100,100)
  fill ("blue")
  rect(0,400,100,100)
  fill ("purple")
  rect(0,500,100,100)
  fill ("white")
  rect(0,600,100,100)
  image(Eraser,0,600,100,100)
 size1 = createButton("Small")
  size1.position(displayWidth-100,50)
  size2 = createButton("Medium")
  size2.position(displayWidth-100,100)
  size3 = createButton("Large")
  size3.position(displayWidth-100,150)
  
  size1.mousePressed(()=>{
    strokeWeight(5)
  })
  size2.mousePressed(()=>{
    strokeWeight(10)
  })
  size3.mousePressed(()=>{
    strokeWeight(15)
  })
  
  

  if (keyDown("c")){
    clear()
  }
}