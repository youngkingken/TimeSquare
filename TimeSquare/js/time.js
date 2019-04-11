var numberOfRows; //determine the number of rows we want

var numberOfColumns; //determine the number of columns we want

var xStep; //determine the size of the gap between two points on the x axis

var yStep; //determine the size of the gap between two points on the y axis

var positions = []; //an array of positions where we will store each of our Vectors
let value = 0;

let a, b;

function setup() {
    createCanvas(1000,1000);
    numberOfColumns = 5; //we want 5 columns
    numberOfRows = 12; //we want 12 rows
    xStep = width/numberOfColumns; //to make sure they are evenly spaced, we divide the width and height by numberOfColumns
    yStep = height/numberOfRows; //and numberOfRows respectively
    for(var x = 0; x < width; x += xStep){ //start at the first column, where x = 0
  for(var y = 0; y < height; y += yStep){ //go through all the rows (y = 0, y = yStep * 1, y  = yStep * 2, etc.)
  var p = createVector(x, y); //we create a vector at this location
  positions.push(p); // and then we put the vector into the array
  
      }
      //at the end of the inner for loop, we go back to the first loop, and we increment x
      //now our column is going to be x = xStep*1, and we populate all the rows with the inner for loop
      //and again, and again until x > width
    }
  myMinutes = minute();

}

function draw() {
    //Time Variables
    var m = minute();
    var h = hour();
    var s = second();

    //Background
    text('Current hour:\n' + h, 5, 50);
    background( 4.32*m,10.625*h, 4*s);


 /* Using a For Loop Grid
    let space = 40;
    for(var x=0; x<5; x++){
        for(var y=0; y<12; y++){
            rect(x*space+5, y*space+12, 50, 50);

        }
    } 
*/

for(var i = 0; i < positions.length; i++){ //go through all our positions

    if(i >= myMinutes ){

      fill(transparent);

    }else{

      fill(s * 4, 5, 150);

    }
    rect(positions[i].x, positions[i].y, 50, 50); //put a circle at each of them
  }

/* Manual Technique
//1st Row
if (m > 0) {fill (0);} else {fill (255);}
    rect(10,10,50,50);

if (m > 1) {fill (0);} else {fill (255);}
    rect(60,10,50,50);

if (m > 2) {fill (0);} else {fill (255);}
    rect(110,10,50,50);

if (m > 3) {fill (0);} else {fill (255);}
    rect(160,10,50,50);

if (m > 4) {fill (0);} else {fill (255);}
    rect(210,10,50,50);


//2nd Row
if (m > 5) {fill (0);} else {fill (255);}
    rect(10,60,50,50);

if (m > 6) {fill (0);} else {fill (255);}
    rect(60,60,50,50);

if (m > 7) {fill (0);} else {fill (255);}
    rect(110,60,50,50);

if (m > 8) {fill (0);} else {fill (255);}
    rect(160,60,50,50);

if (m > 9) {fill (0);} else {fill (255);}
    rect(210,60,50,50);


//3rd Row
if (m > 10) {fill (0);} else {fill (255);}
    rect(10,110,50,50);

if (m > 11) {fill (0);} else {fill (255);}
    rect(60,110,50,50);

if (m > 12) {fill (0);} else {fill (255);}
    rect(110,110,50,50);

if (m > 13) {fill (0);} else {fill (255);}
    rect(160,110,50,50);

if (m > 14) {fill (0);} else {fill (255);}
    rect(210,110,50,50);


//4th Row
if (m > 15) {fill (0);} else {fill (255);}
    rect(10,160,50,50);

if (m > 16) {fill (0);} else {fill (255);}
    rect(60,160,50,50);

if (m > 17) {fill (0);} else {fill (255);}
    rect(110,160,50,50);

if (m > 18) {fill (0);} else {fill (255);}
    rect(160,160,50,50);

if (m > 19) {fill (0);} else {fill (255);}
    rect(210,160,50,50);


//5th Row
if (m > 20) {fill (0);} else {fill (255);}
    rect(10,210,50,50);

if (m > 21) {fill (0);} else {fill (255);}
    rect(60,210,50,50);

if (m > 22) {fill (0);} else {fill (255);}
    rect(110,210,50,50);

if (m > 23) {fill (0);} else {fill (255);}
    rect(160,210,50,50);

if (m > 24) {fill (0);} else {fill (255);}
    rect(210,210,50,50);


    //6th Row
    if (m > 25) {fill (0);} else {fill (255);}
    rect(10,260,50,50);

    if (m > 26) {fill (0);} else {fill (255);}
    rect(60,260,50,50);

    if (m > 27) {fill (0);} else {fill (255);}
    rect(110,260,50,50);

    if (m > 28) {fill (0);} else {fill (255);}
    rect(160,260,50,50);

    if (m > 29) {fill (0);} else {fill (255);}
    rect(210,260,50,50);


    //7th Row
    if (m > 30) {fill (0);} else {fill (255);}
rect(10,310,50,50);

if (m > 31) {fill (0);} else {fill (255);}
rect(60,310,50,50);

if (m > 32) {fill (0);} else {fill (255);}
rect(110,310,50,50);

if (m > 33) {fill (0);} else {fill (255);}
rect(160,310,50,50);

if (m > 34) {fill (0);} else {fill (255);}
rect(210,310,50,50);


//8th Row
if (m > 35) {fill (0);} else {fill (255);}
rect(10,360,50,50);

if (m > 36) {fill (0);} else {fill (255);}
rect(60,360,50,50);

if (m > 37) {fill (0);} else {fill (255);}
rect(110,360,50,50);

if (m > 38) {fill (0);} else {fill (255);}
rect(160,360,50,50);

if (m > 39) {fill (0);} else {fill (255);}
rect(210,360,50,50);


//9th Row
if (m > 40) {fill (0);} else {fill (255);}
rect(10,410,50,50);

if (m > 41) {fill (0);} else {fill (255);}
rect(60,410,50,50);

if (m > 42) {fill (0);} else {fill (255);}
rect(110,410,50,50);

if (m > 43) {fill (0);} else {fill (255);}
rect(160,410,50,50);

if (m > 44) {fill (0);} else {fill (255);}
rect(210,410,50,50);


//10th Row
if (m > 45) {fill (0);} else {fill (255);}
rect(10,460,50,50);

if (m > 46) {fill (0);} else {fill (255);}
rect(60,460,50,50);

if (m > 47) {fill (0);} else {fill (255);}
rect(110,460,50,50);

if (m > 48) {fill (0);} else {fill (255);}
rect(160,460,50,50);

if (m > 49) {fill (0);} else {fill (255);}
rect(210,460,50,50);


//11th Row
if (m > 50) {fill (0);} else {fill (255);}
rect(10,510,50,50);

if (m > 51) {fill (0);} else {fill (255);}
rect(60,510,50,50);

if (m > 52) {fill (0);} else {fill (255);}
rect(110,510,50,50);

if (m > 53) {fill (0);} else {fill (255);}
rect(160,510,50,50);

if (m > 54) {fill (0);} else {fill (255);}
rect(210,510,50,50);


//12th Row
if (m > 55) {fill (0);} else {fill (255);}
rect(10,560,50,50);

if (m > 56) {fill (0);} else {fill (255);}
rect(60,560,50,50);

if (m > 57) {fill (0);} else {fill (255);}
rect(110,560,50,50);

if (m > 58) {fill (0);} else {fill (255);}
rect(160,560,50,50);

if (m > 59) {fill (0);} else {fill (255);}
rect(210,560,50,50);

*/


}
