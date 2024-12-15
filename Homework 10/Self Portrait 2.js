//shape 1 
var x1=1
  var y1=1
  var d1=50
  
  
  //shape 2
  var x2=350
  var y2=450
  
  //shape 3
  var x3=10
  var y3=10
  var x6=20
  var y6=25
  var m5= 8
  var m6= 10
  
  //shape 4
  var x4= 10
  var y4=450
  //shape 5
  var x5=390
  var y5= 450
  
  //title movement
  let size=25
let growAmount = 1;
let grow = true;
  
  function setup() {
  createCanvas(400, 500);
    
    m1=floor(random()*15) +1
 m2=floor(random() * 10) + 1
    m3=floor(random()*8)+1
    m4=floor(random()*2) +1
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
  textSize(15)
  text('Caitlyn Asmussen', 5,490 )
 
  
  //title stuff
  
 textSize(size)
  text('Self Portrait', 5,475)
   if(size >50) 
   {grow=false}
  if (size < 25) {grow = true}
  
  if (grow== true)
    {size += growAmount}
  else{size -= growAmount}
  
  
  //random shapes ig
  
  circle(x1,y1,d1)
   if(x1 >= 400 || x1 <= 0)
    {
       m1 *= -1;
    }

     x1 += m1;
  
  rect(x2,y2, 30, 10)
if(x2 >= 400 || x2 <= 0)
    {
       m2 *= -1;
    }

     x2 += m2;
  
  strokeWeight(5)
 point(x4,y4)
  if(y4 >=500 || y4 <= 0)
    {m3 *= -1}
  y4 += m3
  
  point(x5,y5)
  if(y5 >=500 || y5 <=0)

{m4 *= -1}
  y5 += m4
  
  strokeWeight(2)
  line(x3,y3,x6,y6)
  if (x3 >=400 || x3 <=0 || y3 >=500 || y3 <=0 ||x6 >=400 || x6 <=0 || y6 >=500 || y6 <=0)
    {m5 *= -1
     m6 *= -1
    }
  x3 += m5
    y3 += m6
     x6 += m5
     y6 += m6
  
  
}