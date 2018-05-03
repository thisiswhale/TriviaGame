var wrongAnswers;
var rightAnswers;
var missed;
var index;

//can change time here
var imageTime = 4;
var remainingTime = 12;

//number counter
var timeStart;
$(".timer").html(timeStart)

//interval ID when executing the "run" function
var intervalID;

function run() {
    intervalID = setInterval(countdown, 1000);
}

function stop() {
    clearInterval(intervalID);
}

function countdown() {
    timeStart--;
    $(".timer").html(timeStart);
    // console.log(timeStart);
    if (timeStart === 0) {
        stop();
        $(".right-wrong").html("Times Up!! <strong>Correct answer is " + trivia[index].answer + ".</strong>");
        missed++;
        // console.log("Times up!");
        $(".timer").html(timeStart);
        showImage();
    }
}

var width = 250;
var image0 = new Image(width);
var image1 = new Image(width);
var image2 = new Image(width);
var image3 = new Image(width);
var image4 = new Image(width);
var image5 = new Image(width);
var image6 = new Image(width);
var image7 = new Image(width);
var image8 = new Image(width);
var image9 = new Image(width);
var image10 = new Image(width);

image0.src = "assets/images/homer.gif";
image1.src = "assets/images/africa.gif";
image2.src = "assets/images/coke.gif";
image3.src = "assets/images/interesting.gif";
image4.src = "assets/images/coffeeface.gif";
image5.src = "assets/images/pony-gargle.gif";
image6.src = "assets/images/blackcoffee.gif";
image7.src = "assets/images/cantstop.gif";
image8.src = "assets/images/toomuch.gif";
image9.src = "assets/images/espresso.gif";


var trivia = [{
    question: "About how many cups of coffee does the average person drink daily?",
    choice: ["1", "3", "5", "8"],
    answer: "3",
    image: image0.src
}, {
    question: "Where did coffee first come from?",
    choice: ["Hawaii", "Madagascar", "South and Centra America", "Africa"],
    answer: "Africa",
    image: image1.src
}, {
    question: "A 'grande' coffee has as much caffeine as how many cans of cola?",
    choice: ["1", "3", "5", "7"],
    answer: "7",
    image: image2.src
}, {
    question: "Every year the average American drinks enough coffee to fill",
    choice: ["A swimming pool", "A bathtub", "a wading pool", "the ocean"],
    answer: "A bathtub",
    image: image3.src
}, {
    question: "What's the best place to store your coffee beans or ground coffee?",
    choice: ["Outside", "The counter", "The freezer", "The refrigerator"],
    answer: "The counter",
    image: image4.src
}, {
    question: "What's the best way to protect your teeth from the acid in coffee?",
    choice: ["Rinse your mouth with water",
        "Brush your teeth after",
        "Use a straw",
        "Drink something to balance the acid"
    ],
    answer: "Rinse your mouth with water",
    image: image5.src
}, {
    question: "What percentage of coffee drinkers prefer their coffee black?",
    choice: ["30%", "40%", "50%", "60%"],
    answer: "40%",
    image: image6.src
}, {
    question: "About how many milligrams of caffeine is the human body capable of absorbing?",
    choice: ["100", "200", "300", "400"],
    answer: "300",
    image: image7.src
}, {
    question: "How many milligrams of coffee are in a typical cup of coffee?",
    choice: ["50", "80", "120", "150"],
    answer: "150",
    image: image8.src
}, {
    question: "Where does the word espresso come from?",
    choice: ["From the Greek Expreco, meaning 'strong beverage'",
        "From its Latin root meaning 'under pressure'",
        "From the first Italian machine called Espresso Machine",
        "From a drink served in early Viennese coffeehouses"
    ],
    answer: "From its Latin root meaning 'under pressure'",
    image: image9.src
}];

//shows the start screen and hides the multiple choice texts
$(".background").html("<img src='assets/images/game-coffee.gif'>");
$(".container").hide();

//Start button reveals question and M/C texts
$("#start").on('click', function() {
    $(".container").show();
    $(".background").hide();
    $("#start").hide();
    newGame();
});

//when clicked, the this is checked for right or wrong answer and calls showImage
window.onload = function() {

    $(".answer-choice").on("click", function() {
        console.log(index);
        if (trivia[index].choice[this.getAttribute("id")] === trivia[index].answer) {
            // console.log("you are correct");
            rightAnswers++;
            $(".right-wrong").html("You are correct!!");
        } else {
            // console.log("you are wrong!");
            wrongAnswers++;
            $(".right-wrong").html("You are wrong!! <strong>Correct answer is " + trivia[index].answer + ".</strong>");
        }
        showImage();
    });

};

// New Game when button is clicked
function newGame() {
    timeStart = remainingTime;
    $(".timer").html(timeStart);
    wrongAnswers = 0
    rightAnswers = 0
    missed = 0;
    $(".result").html("");
    $(".box").show();
    index = 0;
    newTrivia();
    run();
}

//empties image, and reveals next trivia of index i
function newTrivia() {
    $(".image").empty();
    $(".trivia-question").html(trivia[index].question);
    $(".A").html(trivia[index].choice[0]);
    $(".B").html(trivia[index].choice[1]);
    $(".C").html(trivia[index].choice[2]);
    $(".D").html(trivia[index].choice[3]);
}

function nextTrivia() {
	//hides image and the right/wrong answer box
    $(".image").html("");
    $(".right-wrong").html("");

    // next trivia question
    index++;
    $(".choice-box").show();
    //checks if at end of question
    if (index >= trivia.length) {
        console.log("No more questions");
        stop();
        endGame();
    }
    //else restarts timer
    else {
        timeStart = remainingTime;
        $(".timer").html(timeStart);
        newTrivia();
        run();
    }
}

//reveals Image after on click choice and waits
function showImage() {
    //stops timer
    stop();
    $(".choice-box").hide();
    //$(".image").attr("src",trivia[index].image);
    $(".image").html("<img src=" + trivia[index].image + " width='200px'/>");
    //execute function in 5 seconds
    setTimeout(nextTrivia, 1000 * imageTime);
}



function endGame() {
    console.log("end game here");
    $(".result").html("Answers Correct: " + rightAnswers + "&nbsp; &nbsp; Answers Wrong: " + wrongAnswers + "&nbsp; &nbsp; Unanswered: " + missed);
    $("#start").html("Restart");
    $("#start").show();
    $(".box").hide();
}
