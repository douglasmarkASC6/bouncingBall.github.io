/// controls the speed of our x and y values of the ball
let x = 2;
let y = 3;

let x1 = 2;
let y1 = 3;

let x2 = 2;
let y2 = 3;

// creates the initial position of the ball on the canvas
let xCoord = 300;
let yCoord = 300;

let xCoord1 = 100;
let yCoord1 = 40;

let xCoord2 = 70;
let yCoord2 = 400;

function setup(){
    createCanvas(1270,700);
    background("black");
}

function draw(){
    background("black");
    circle(xCoord,yCoord,35);
    fill(random(0, 1000), random(0, 400), random(0, 400));
    yCoord += y;
    xCoord += x;
    circle(xCoord1,yCoord1,35);
    fill(random(0, 1000), random(0, 400), random(0, 400));
    yCoord1 += y1;
    xCoord1 += x1;
    circle(xCoord2,yCoord2,35);
    fill(random(0, 1000), random(0, 400), random(0, 400));
    yCoord2 += y2;
    xCoord2 += x2;

    if(xCoord2 <= 10 || xCoord2 >= 1250){
        x2 = -x2;
    }
    if (yCoord2 <= 10 || yCoord2 >= 690){
        y2 = -y2;
    }

    if(xCoord1 <= 10 || xCoord1 >= 1250){
        x1 = -x1;
    }
    if (yCoord1 <= 10 || yCoord1 >= 690){
        y1 = -y1;
    }

    if(xCoord <= 10 || xCoord >= 1250){
        x = -x;
    }
    if (yCoord <= 10 || yCoord >= 690){
        y = -y;
    }

    
}