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

    // $("#resetButton").hide();
    $("#resetButton").css("visibility", "hidden");
    $("#resultDiv").empty();


    showQuestion(questions);
}

function showQuestion(questionArray)
{
    $("#questionDiv").text();
    $("#questionDiv").append("<h2>" + questionArray[questionNumber].question + "</h2>");

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

    timerCount = 10;
    timer = setInterval(function (){questionTimer();}, 1000);
}

function resultScreen(result)
{
    clearTimeout(timer);
    $(".answers").empty();
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
    getImage(questions[currentQuestion].pictureId);

    //Wait At This Screen For Some Time, And Then Go To The Next Question
    timer = setTimeout(function (){resultsTimer();}, 5000);
}

function finalScreen()
{
    //Show Amount Of Correct And Wrong Answers
    $("#resultDiv").html("<h3>You Had " + correctAnswers + " Correct Answers");
    $("#resultDiv").append("<h3>You Had " + wrongAnswers + " Incorrect Answers");
    //Show The Reset Button
    $("#resetButton").css("visibility", "visible");
}

function questionTimer()
{
    if (timerCount === 0)
    {
        clearInterval(timer);
        $("#timeLeft").empty();
        resultScreen(isRight);  
    }
    else
    {
        $("#timeLeft").html("<h4>Time Remaining: " + timerCount + " seconds</h4>");
        timerCount--;
    }
  
}
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
        // answerImage.attr("src", response.data.embed_url);
        answerImage.attr("src", response.data.images.original.url);
        console.log(response.data.embed_url);
        $("#resultDiv").append(answerImage);
    })
}