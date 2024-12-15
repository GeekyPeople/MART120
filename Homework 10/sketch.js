function setup() {
  createCanvas(400, 500);
}

function draw() {
// Body.
  background(0, 157, 255);
  let c1= color('#035C00')
  let c2= color('#5C3400')
  let c3=color('#FFF1D1')
  let c4=color('#E00400')
  let c5= color('#c0c0c0')
  let c6= color('#A80000')
  fill(c2)
  triangle(0,250, 165,50, 345,250)
  triangle(183,250, 315,75, 500,250)
  fill(c1)
  rect(0,250, 500,250)
  strokeWeight(2)
  fill(c6)
 triangle(183,170, 115,285, 250,285)
  fill(c3)
  circle(183, 220, 100)
  fill(c6)
  triangle(250,255, 225,185, 210,255)
  triangle(110,255, 140,185, 150,255)
  arc(183, 190, 90, 45, PI, TWO_PI);
 fill(c4)
  rect(145,270,75,125 )
 fill(c5)
  quad(192,300, 200, 280, 208, 291, 202, 290)
  line(145, 270,110,350 )
  line(110,350, 145,375)
  line(220,270, 255,350)
  line(255,350, 220,375)
  line(160,395, 160,475)
  line(205,395, 205,475);

  //Face.
  strokeWeight(13)
  point(165,205);
  point(200,205);
strokeWeight(2)
  fill(c3)
  arc(180, 235, 25, 30, .5, HALF_PI+QUARTER_PI);
  text('Caitlyn Asmussen', 5,490 )

}

  
  
    
    
