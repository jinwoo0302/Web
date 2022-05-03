window.onload=pageload;

function pageload(){
	setCTime();
	changeColor();
	document.getElementById("calcbtn").onclick=calc;
	document.getElementById("guessbtn").onclick=guess;
	document.getElementById("replaybtn").onclick=replay;
	document.getElementById("hangmanguess").onclick=guessLetter;
	document.getElementById("restart").onclick=newGame;
	document.getElementById("changeimg").onclick=changeImage;
	document.getElementById("ctCreate").onclick=createColorTable;
	document.getElementById("ctRemove").onclick=removeColorTable;
	document.getElementById("stopTextColorbtn").onclick=stopTextColor;
	document.getElementById("boxmove").onclick=myMove;


}



function calc(){
	var x=document.getElementById("x").value;
	var y=document.getElementById("y").value;
	var sum=parseInt(x)+parseInt(y);
	document.getElementById("sum").value=sum;
}



var computerNumber=Math.floor(Math.random()*100+1);
var nGuesses=0;

function guess(){
	var user=document.getElementById("user").value;
	
	if(user>computerNumber){
		document.getElementById("result").value="큽니다."
	}
	else if(user==computerNumber){
		document.getElementById("result").value="정답입니다."
	}
	else {
		document.getElementById("result").value="작습니다."
	}
	nGuesses++;
	document.getElementById("guesses").value=nGuesses;
	document.getElementById("answer").value=computerNumber;

}

function replay(){
	nGuesses=0;
	computerNumber=Math.floor(Math.random()*100+1);
	document.getElementById("user").value="";
	document.getElementById("result").value="";
	document.getElementById("guesses").value=nGuesses;
	document.getElementById("answer").value=computerNumber;
}

function setCTime(){
	var now=new Date();
	var s=now.getHours() +':'+now.getMinutes() +':'+now.getSeconds();
	var month=now.getMonth();
	var date=now.getDate();
	var m;
	switch(month){
		case 0:
			m="January"
			break;
		case 1:
			m="February"
			break;
		case 2:
			m="March"
			break;
		case 3:
			m="April"
			break;
		case 4:
			m="May"
			break;
		case 5:
			m="June"
			break;
		case 6:
			m="July"
			break;
		case 7:
			m="August"
			break;
		case 8:
			m="September"
			break;
		case 9:
			m="October"
			break;
		case 10:
			m="November"
			break;
		case 11:
			m="December"
			break;

	}


	document.getElementById('ctime').innerHTML=m+" "+date+". "+s;

	setTimeout(setCTime,1000);
}






var POSSIBLE_WORDS=["obdurate", "verisimilitude", "defenestrate", 
"obsequious", "dissonant", "today", "idempotent"];
var MAX_GUESSES = 6;

var guesses="";
var guessCount=MAX_GUESSES;
var word;





function newGame(){
	var x=parseInt(Math.random()*POSSIBLE_WORDS.length);
	word=POSSIBLE_WORDS[x];
	console.log(word);
	guessCount=MAX_GUESSES;
	guesses="";
	document.getElementById("hangmanguess").disabled=false;
	updatePage();
}

function updatePage(){


	var clue=""
	for(i=0;i<word.length;i++){
		if(guesses.indexOf(word.charAt(i))>=0){
			clue+=word.charAt(i)+" ";
		}
		else
			clue+="_ ";
	}

	document.getElementById("clue").innerHTML=clue;

	var guess=	document.getElementById("guessstr").innerHTML

	if(guessCount==0){
		guess="you lose";
	}
	else if(clue.indexOf("_")<0){
		guess="you win";
		
	}
	else{
		guess="Guess: "+guesses;
		
	}


	document.getElementById("guessstr").innerHTML=guess;

	document.getElementById("hangmanpic").src="hangman"+guessCount+".gif";

}

function guessLetter(){
	var letter=document.getElementById("hguess").value;
	var clue= document.getElementById("clue");
	if(guessCount==0||clue.innerHTML.indexOf("_")<0 ||guesses.indexOf(letter)>=0 ){
		return;
	}
	guesses+=letter;
		
	if(word.indexOf(letter)<0){
		guessCount--;
	}

	updatePage();




}

function changeImage(){
	var bimg=document.getElementById("image");
	var sarray=bimg.src.split('/');
	var str=sarray[sarray.length-1];
	if(str=="rick1.jpg")
		bimg.src="rick2.jpg";
	else
		bimg.src="rick1.jpg";

}

var colorNames=["maroon", "red","orange","yellow","olive","purple","fuchsia","white",
"lime","green","navy","blue","aqua","teal","black","silve","gray"];

function createColorTable(){
	var colordiv=document.getElementById("colorTable");
	for(var i=0;i<colorNames.length;i++){
		var ndiv=document.createElement("div");
		ndiv.setAttribute("class","ctbox");
		ndiv.innerHTML=colorNames[i];
		ndiv.style.display="inline-block";
		ndiv.style.width="60px";
		ndiv.style.padding="10px";
		ndiv.style.backgroundColor=colorNames[i];
		colordiv.appendChild(ndiv);
	}
}

function removeColorTable(){
	var parent=document.getElementById("colorTable");
	var child=parent.getElementsByTagName("div");
	while(child[0]){
		parent.removeChild(child[0]);
	}
}







var id;
function changeColor() {
	id=setInterval(flashText,1000);
}


function flashText(){
	var elem=document.getElementById("target");
	elem.style.color= (elem.style.color == "red") ? "blue" : "red";
	elem.style.backgroundColor= (elem.style.backgroundColor == "green") ? "yellow" : "green";

}

function stopTextColor(){
	clearInterval(id);
}





function myMove(){
	var box=document.getElementById("animate");
	var pos=0;
	var mv=setInterval(move,5);
	

	function move(){
		box.style.top=pos+"px";
		box.style.left=pos+"px";
		pos++;
		if(pos>350){
			clearInterval(mv);
		}
	}




}

