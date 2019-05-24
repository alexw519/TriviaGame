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
        answerIndex: 1
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
        answerIndex: 2
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
        answerIndex: 1
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
        answerIndex: 0
    },
    five = 
    {
        question: "On The Periodic Table, What Is The Symbol For Silver?",
        choices:
        [
            "Si",
            "Ar",
            "Au",
            "S"
        ],
        answerIndex: 2
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
        answerIndex: 3
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
        answerIndex: 2
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
        answerIndex: 0
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
        answerIndex: 3
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
        answerIndex: 0
    }    
]

var correctAnswers = 0;
var wrongAnswers = 0;
var currentQuestion = 0;
var questionNumber = 0;
var guess = 0;
var isRight = false;
var rightAnswer;
var correctIndex;

showQuestion(questions);

//Resets All Of The Values So The User Can Play Again
function reset()
{
    correctAnswers = 0;
    wrongAnswers = 0;
    currentQuestion = 0;
    questionNumber = 0;
    guess = 0;
    isRight = false;

    //Hide The Reset Button


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
}

function resultScreen(result)
{
    $(".answers").empty();
 
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

    //Wait At This Screen For Some Time, And Then
    if (questionNumber < 10)
    {
       showQuestion(questions);
    }
    else
    {
        finalScreen();
    }
}

function finalScreen()
{
    //Show Amount Of Correct And Wrong Answers
    //Show The Reset Button
}


$("#answer0").on("click", function()
{
    guess = 0;
    if (guess === questions[currentQuestion].answerIndex)
        isRight = true;
    else
        isRight = false;
    
    resultScreen(isRight);
})
$("#answer1").on("click", function()
{
    guess = 1;
    if (guess === questions[currentQuestion].answerIndex)
        isRight = true;
    else
        isRight = false;

    resultScreen(isRight);
})
$("#answer2").on("click", function()
{
    guess = 2;
    if (guess === questions[currentQuestion].answerIndex)
        isRight = true;
    else
        isRight = false;

    resultScreen(isRight);
})
$("#answer3").on("click", function()
{
    guess = 3;
    if (guess === questions[currentQuestion].answerIndex)
        isRight = true;
    else
        isRight = false;

    resultScreen(isRight);
})
