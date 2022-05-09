var context;
var velocity;
var angle;
var ballVx;
var ballVy;
var ballX=10;
var ballY=250;
var ballRadius=10;
var score=0;
var image=new Image();
image.src="lawn.jpg";
image.width=500;
var backimage=new Image();
backimage.src="net.jpg";
var timer;


function init(){
	ballX=10;
	ballY=250;
	ballRadius=10;
	context=document.getElementById('canvas').getContext('2d');
	context.clearRect(0,0,500,300);
	drawBackground();
	draw();
	
}


function draw(){
	context.clearRect(0,0,450,270);
	drawBall();
}

function drawBall(){
	context.beginPath();
	context.arc(ballX,ballY,ballRadius,0,2.0*Math.PI,true);
	context.fillStyle="red";
	context.fill();
}

function drawBackground(){
	context.drawImage(image,0,270,600,30);
	context.drawImage(backimage,450,60,30,150);

}

/*발사 버튼 누르면 호출*/
function start(){
	init();
	velocity=Number(document.getElementById("velocity").value);
	angle=Number(document.getElementById("angle").value);
	var angleR=angle*Math.PI/180;
	ballVx=velocity*Math.cos(angleR);
	ballVy=-1*velocity*Math.sin(angleR);

	timer=setInterval(calculate,100);
	return false;
}

function calculate() {
	ballVy=ballVy+1.98;

	ballX=ballX+ballVx;
	ballY=ballY+ballVy;

	if((ballX>=450)&&(ballX<=480)&&(ballY>=60)&&(ballY<=210)){
		score++;
		document.getElementById("score").innerHTML="점수="+score;
		clearInterval(timer);
	}

	if(ballY>=300 || ballY<0){
		clearInterval(timer);
	}
	draw();
}