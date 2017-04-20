var wrongAnswers = 0;
var rightAnswers = 0;
var missed = 0;
var index = 9;


//number counter 
var timeStart = 5;
$(".timer").html(timeStart)

//interval ID when executing the "run" function
var intervalID;

function run() {
    intervalID = setInterval(countdown, 1000);
}

function stop(){
	clearInterval(intervalID);
}

function countdown() {
    timeStart--;
    $(".timer").html(timeStart);

    if (timeStart === 0) {
    	stop();
    	$(".right-wrong").html("Times Up!! <strong>Correct answer is " +trivia[index].answer +".</strong>");
        missed++;
        console.log("Times up!");
        $(".timer").html(timeStart);
        showImage();
    }
}

var trivia = [{
    question: "About how many cups of coffee does the average person drink daily?",
    choice: ["1", "3", "5", "8"],
    answer: "3",
    image: "image 0"
}, {
    question: "Where did coffee first come from?",
    choice: ["Hawaii", "Madagascar", "South and Centra America", "Africa"],
    answer: "Africa",
    image: "image 1"
}, {
    question: "A 'grande' coffee has as much caffeine as how many cans of cola?",
    choice: ["1", "3", "5", "7"],
    answer: "7",
    image: "image 2"
}, {
    question: "Every year the average American drinks enough coffee to fill",
    choice: ["A swimming pool", "A bathtub", "a wading pool", "the ocean"],
    answer: "A bathtub",
    image: "image 3"
}, {
    question: "What's the best place to store your coffee beans or ground coffee?",
    choice: ["Outside", "The counter", "The freezer", "The refrigerator"],
    answer: "The counter",
    image: "image 3"
}, {
    question: "What's the best way to protect your teeth from the acid in coffee?",
    choice: ["Rinse your mouth with water", 
    		"Brush your teeth after", 
    		"Use a straw", 
    		"Drink something to balance the acid"],
    answer: "Rinse your mouth with water",
    image: "image 3"
}, {
    question: "What percentage of coffee drinkers prefer their coffee black?",
    choice: ["30%", "40%", "50%", "60%"],
    answer: "40%",
    image: "image 3"
}, {
    question: "About how many milligrams of caffeine is the human body capable of absorbing?",
    choice: ["100", "200", "300", "400"],
    answer: "300",
    image: "image 3"
}, {
    question: "How many milligrams of coffee are in a typical cup of coffee?",
    choice: ["50", "80", "120", "150"],
    answer: "150",
    image: "image 3"
}, {
    question: "Where does the word espresso come from?",
    choice: ["From the Greek Expreco, meaning 'strong beverage'",
        "From its Latin root meaning 'under pressure'",
        "From the first Italian machine called Espresso Machine",
        "From a drink served in early Viennese coffeehouses"
    ],
    answer: "From its Latin root meaning 'under pressure'",
    image: "image 3"
}];

function newTrivia() {
    $(".trivia-question").html(trivia[index].question);
    $(".A").html(trivia[index].choice[0]);
    $(".B").html(trivia[index].choice[1]);
    $(".C").html(trivia[index].choice[2]);
    $(".D").html(trivia[index].choice[3]);
}

function nextTrivia() {
	$(".image").html("");
	$(".right-wrong").html("");

    // next trivia question
        index++;
    //checks if at end of question
    if (index >= trivia.length) {
    	console.log("No more questions");
    	stop();
        endGame();
    } 
    else{
        timeStart = 5;
        $(".timer").html(timeStart);
        newTrivia();
        run();
    }
}

function showImage() {
    //stops timer
    stop();
    $(".image").html(trivia[index].image);
    //execute function in 5 seconds
    setTimeout(nextTrivia, 1000 * 3);
}

function endGame() {
	console.log("end game here");
    $(".result").html("Answers Correct: " + rightAnswers + "&nbsp; &nbsp; Answers Wrong: " + wrongAnswers + "&nbsp; &nbsp; Unanswered: " + missed);
    //create a button to reset game
    //$(".result").append("<button class=")
}

function reset() {
    wrongAnswers = 0
    rightAnswers = 0
    missed = 0;
    index = 0;
    newTrivia();
    run();
}

window.onload = function() {
    
	run();
	newTrivia();

    $(".answer-choice").on("click", function() {
        console.log(index);
        if (trivia[index].choice[this.getAttribute("id")] === trivia[index].answer) {
            console.log("you are correct");
            rightAnswers++;
            $(".right-wrong").html("You are correct!!");
            showImage();
        } else {
            console.log("you are wrong!");
            wrongAnswers++;
            $(".right-wrong").html("You are wrong!! <strong>Correct answer is " +trivia[index].answer +".</strong>");
            showImage();
        }
    });

};

//add gifs to coresponding questions
//makes things pretty
//add reset button