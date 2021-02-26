var ball, ballPos;
var database,position;
function setup(){
   database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(350,350,10,10);
    ball.shapeColor = "red";
 ballPos = database.ref("ball/position");
ballPos.on("value",readPos,showErr);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePos(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePos(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePos(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePos(0,+1);
    }
    drawSprites();
}

function writePos(x,y){
ballPos.set({
x:position.x+x,
y:position.y+y
})
}

function readPos(data){
position = data.val();
ball.x = position.x;
ball.y = position.y;
}
function showErr(){
    console.log("error");
}