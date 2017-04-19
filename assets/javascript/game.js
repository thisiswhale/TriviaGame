
var wrongAnswers= 0;
var rightAnswers= 0;

//number counter 
var timeStart = 5;
$(".timer").html(timeStart)

//interval ID when executing the "run" function
var intervalID;

function run(){
	intervalID = setInterval(countdown,1000);
}

function countdown(){
	timeStart--;
	$(".timer").html(timeStart);

	if(timeStart ===0){
		$(".timer").html(timeStart);
		clearInterval(intervalID);
		//pop out wrong, answer page
	}


}

$(".answer-choice").on("click",function(){

	if(this.getAttribute("id")==="A"){
		console.log("you chose A");
	}
	if(this.getAttribute("id")==="B"){
		console.log("you chose B");
	}
	if(this.getAttribute("id")==="C"){
		console.log("you chose C");
	}
	if(this.getAttribute("id")==="D"){
		console.log("you chose D");
	}
});

//show the screen for choosing right or worng answer, then display next question