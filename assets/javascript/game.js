//Creating Objects For The Questions
var questions = 
[
    one = 
    {
        question: "Which Is Not A Unit Of Temperature?",
        choices:
        [
            "Fahrenheit",
            "Decible",
            "Celsius",
            "Kelvin"
        ],
        answerIndex: 1,
        pictureId: "4ZgLPakqTajjVFOVqw"
    },
    two = 
    {
        question: "Which Fingernail Grows The Fastest?",
        choices:
        [
            "Index Finger",
            "Thumb",
            "Middle Finger",
            "Pointer Finger"
        ],
        answerIndex: 2,
        pictureId: "l3UcqjMBeQzXaoqGI"
    },
    three = 
    {
        question: "Who Painted The Mona Lisa?",
        choices:
        [
            "Raphael",
            "Da Vinci",
            "Michelangelo",
            "Donatello"
        ],
        answerIndex: 1,
        pictureId: "12qj9BbWNWbnz2"
    },
    four = 
    {
        question: "Which Is The Smallest Ocean?",
        choices:
        [
            "Arctic",
            "Atlantic",
            "Indian",
            "Pacific"
        ],
        answerIndex: 0,
        pictureId: "qHz3mRPG4je0w"
    },
    five = 
    {
        question: "On The Periodic Table, What Is The Symbol For Silver?",
        choices:
        [
            "Si",
            "Au",
            "Ag",
            "S"
        ],
        answerIndex: 2,
        pictureId: "tHyYVcQPXYF8c2eYjR"
    },
    six = 
    {
        question: "Which Planet Has The Most Moons?",
        choices:
        [
            "Neptune",
            "Saturn",
            "Earth",
            "Jupiter"
        ],
        answerIndex: 3,
        pictureId: "6Bh9wnTgVqAPm"
    },
    seven = 
    {
        question: "Which Company Does Not Make Phones?",
        choices:
        [
            "Apple",
            "LG",
            "Nintendo",
            "Sony"
        ],
        answerIndex: 2,
        pictureId: "4Iepymq5msMg"
    },
    eight = 
    {
        question: "What Color Jersey Is Worn By The Winners Of The Tour De France?",
        choices:
        [
            "Yellow",
            "Blue",
            "Red",
            "Green"
        ],
        answerIndex: 0,
        pictureId: "13bQlXWgv1hvldoIBF"
    },
    nine = 
    {
        question: "What Chess Piece Can Move In All Directions?",
        choices:
        [
            "Bishop",
            "Pawn",
            "Rook",
            "King"
        ],
        answerIndex: 3,
        pictureId: "JJlFxKzdFNbMc"
    },
    ten = 
    {
        question: "How Many Keys Are On A Piano?",
        choices:
        [
            "88",
            "100",
            "74",
            "56"
        ],
        answerIndex: 0,
        pictureId: "rmPO4UCJXGNNu"
    }    
]

//Initalizing Variables
var correctAnswers = 0;
var wrongAnswers = 0;
var currentQuestion = 0;
var questionNumber = 0;
var guess = 4;
var isRight = false;
var rightAnswer;
var correctIndex;
var timer;
var timerCount;

//Resets All Of The Values So The User Can Play Again
function reset()
{
    correctAnswers = 0;
    wrongAnswers = 0;
    currentQuestion = 0;
    questionNumber = 0;
    guess = 4;
    isRight = false;

    $("#resetButton").css("visibility", "hidden");
    $("#resultDiv").css("background-color", "transparent");
    $("#resultDiv").empty();

    showQuestion(questions);
}

//Gets the question array, and then lists the question and possible answers
function showQuestion(questionArray)
{
    $("#questionDiv").text();
    $("#questionDiv").append("<h2>" + questionArray[questionNumber].question + "</h2>");

    //For loop to display the choices
    for (i = 0; i < questionArray[questionNumber].choices.length; i++)
    {
        $("#answer" + i).html("<h3 class='answers'>" + questionArray[questionNumber].choices[i] + "</h3>");
    }
    currentQuestion = questionNumber;
    correctIndex = questionArray[questionNumber].answerIndex;
    rightAnswer = questionArray[questionNumber].choices[correctIndex];
    questionNumber++;
    isRight = false;
    guess = 4;

    //Sets a timer for 10 seconds, and calls the questionTimer function every second.
    timerCount = 10;
    timer = setInterval(function (){questionTimer();}, 1000);
}

//Tells the user the results of their guess
function resultScreen(result)
{
    clearTimeout(timer);
    $(".answers").empty();

    //Clearing the answer divs
    for (i = 0; i < 4; i++)
        $("#answer" + i).empty();

    $("#questionDiv").empty();
 
    if (result)
    {
        correctAnswers++;
        $("#questionDiv").html("<h2>Correct! " + rightAnswer + " was the right answer!</h2>");
    }
    else
    {
        wrongAnswers++;
        $("#questionDiv").html("<h2>Sorry, the Correct Answer Was: " + rightAnswer + "</h2>");
    }

    //Pulls a gif from the question array id
    getImage(questions[currentQuestion].pictureId);

    //Wait At This Screen For Some Time, And Then Go To The Next Question
    timer = setTimeout(function (){resultsTimer();}, 5000);
}

//The final result screen and gives the user the option to restart the game
function finalScreen()
{
    //Show Amount Of Correct And Wrong Answers
    $("#resultDiv").html("<h3>You Had " + correctAnswers + " Correct Answers");
    $("#resultDiv").append("<h3>You Had " + wrongAnswers + " Incorrect Answers");
    $("#resultDiv").css("background-color", "white");

    //Show The Reset Button
    $("#resetButton").css("visibility", "visible");
}

//When called, checks the time and branches based on how much time is left if any
function questionTimer()
{
    //If the timer ran out, the answer is marked as wrong and goes to the result screen
    if (timerCount === 0)
    {
        clearInterval(timer);
        $("#timeLeft").empty();
        resultScreen(isRight);  
    }

    //If the timer is 5 or less, changes the color of text to red
    else if (timerCount <= 5)
    {
        $("#timeLeft").css("color", "red");
        $("#timeLeft").html("<h4>Time Remaining: " + timerCount + " seconds</h4>");
        timerCount--;
    }

    else
    {
        $("#timeLeft").css("color", "black");
        $("#timeLeft").html("<h4>Time Remaining: " + timerCount + " seconds</h4>");
        timerCount--;
    }
  
}

//Function to either go to the next question or end the game when called
function resultsTimer()
{
    $("#questionDiv").empty();
    $("#resultDiv").empty();
    if (questionNumber < 10)
    {
       showQuestion(questions);
    }
    else
    {
        finalScreen();
    }
}

//When field is selected, puts it in as the user's answer and branches to the results screen
$("#answer0").on("click", function()
{
    clearInterval(timer);
    $("#timeLeft").empty();
    guess = 0;
    if (guess === questions[currentQuestion].answerIndex)
        isRight = true;
    else
        isRight = false;
    
    resultScreen(isRight);
})

//When field is selected, puts it in as the user's answer and branches to the results screen
$("#answer1").on("click", function()
{
    clearInterval(timer);
    $("#timeLeft").empty();
    guess = 1;
    if (guess === questions[currentQuestion].answerIndex)
        isRight = true;
    else
        isRight = false;

    resultScreen(isRight);
})

//When field is selected, puts it in as the user's answer and branches to the results screen
$("#answer2").on("click", function()
{
    clearInterval(timer);
    $("#timeLeft").empty();
    guess = 2;
    if (guess === questions[currentQuestion].answerIndex)
        isRight = true;
    else
        isRight = false;

    resultScreen(isRight);
})

//When field is selected, puts it in as the user's answer and branches to the results screen
$("#answer3").on("click", function()
{
    clearInterval(timer);
    $("#timeLeft").empty();
    guess = 3;
    if (guess === questions[currentQuestion].answerIndex)
        isRight = true;
    else
        isRight = false;

    resultScreen(isRight);
})


$("#resetButton").on("click", function()
{
    reset();
})
$("#startButton").on("click", function()
{
    $("#startButton").hide();
    showQuestion(questions);
})

function getImage(answerId)
{
    var queryURL = "https://api.giphy.com/v1/gifs/" + answerId + "?api_key=5tQ9UTo8mjRwwFkXBekijv4vt8KzKW9t";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response)
    {
        var answerImage = $("<img>");
        answerImage.attr("src", response.data.images.original.url);
        console.log(response.data.embed_url);
        $("#resultDiv").append(answerImage);
    })
}