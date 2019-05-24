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
        question: "Which Is Not A Unit Of Temperature?",
        choices:
        [
            "Fahrenheit",
            "Decible",
            "Celsius",
            "Kelvin"
        ],
        answerIndex: 2
    },
    four = 
    {
        question: "Which Is Not A Unit Of Temperature?",
        choices:
        [
            "Fahrenheit",
            "Decible",
            "Celsius",
            "Kelvin"
        ],
        answerIndex: 2
    },
    five = 
    {
        question: "Which Is Not A Unit Of Temperature?",
        choices:
        [
            "Fahrenheit",
            "Decible",
            "Celsius",
            "Kelvin"
        ],
        answerIndex: 2
    },
    six = 
    {
        question: "Which Is Not A Unit Of Temperature?",
        choices:
        [
            "Fahrenheit",
            "Decible",
            "Celsius",
            "Kelvin"
        ],
        answerIndex: 2
    },
    seven = 
    {
        question: "Which Is Not A Unit Of Temperature?",
        choices:
        [
            "Fahrenheit",
            "Decible",
            "Celsius",
            "Kelvin"
        ],
        answerIndex: 2
    },
    eight = 
    {
        question: "Which Is Not A Unit Of Temperature?",
        choices:
        [
            "Fahrenheit",
            "Decible",
            "Celsius",
            "Kelvin"
        ],
        answerIndex: 2
    },
    nine = 
    {
        question: "Which Is Not A Unit Of Temperature?",
        choices:
        [
            "Fahrenheit",
            "Decible",
            "Celsius",
            "Kelvin"
        ],
        answerIndex: 2
    },
    ten = 
    {
        question: "Which Is Not A Unit Of Temperature?",
        choices:
        [
            "Fahrenheit",
            "Decible",
            "Celsius",
            "Kelvin"
        ],
        answerIndex: 2
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
    $(".answers").text("");
 
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
    // if (questionNumber < 10)
    // {
    //    showQuestion(questions);
    // }
    // else
    // {
    //     finalScreen();
    // }
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
