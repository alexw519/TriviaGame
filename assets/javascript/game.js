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
var rightAnswer = false;

showQuestion(questions);

//Resets All Of The Values So The User Can Play Again
function reset()
{
    correctAnswers = 0;
    wrongAnswers = 0;
    questionNumber = 0;
    //Hide The Reset Button
}

function showQuestion(questionArray)
{
    $("#questionDiv").text();
    $("#questionDiv").append("<h2>" + questionArray[questionNumber].question + "</h2>");

    // for (i = 0; i < 4; i++)
    for (i = 0; i < questionArray[questionNumber].choices.length; i++)
    {
        $("#answer" + i).append("<h3 class='answers'>" + questionArray[questionNumber].choices[i] + "</h3>");
    }
    currentQuestion = questionNumber;
    questionNumber++;
}

function resultScreen(result)
{
    if (result)
    {
        correctAnswers++;
        alert("That was the correct answer");
    }
    else
    {
        wrongAnswers++;
        alert("That was the wrong answer");
    }
}


$("#answer0").on("click", function()
{
    // alert("clicked");
    guess = 0;
    if (guess === questions[currentQuestion].answerIndex)
        rightAnswer = true;
    else
        rightAnswer = false;
    
    resultScreen(rightAnswer);
})
$("#answer1").on("click", function()
{
    guess = 1;
    if (guess === questions[currentQuestion].answerIndex)
        rightAnswer = true;
    else
        rightAnswer = false;

    resultScreen(rightAnswer);
})
$("#answer2").on("click", function()
{
    guess = 2;
    if (guess === questions[currentQuestion].answerIndex)
        rightAnswer = true;
    else
        rightAnswer = false;

    resultScreen(rightAnswer);
})
$("#answer3").on("click", function()
{
    guess = 3;
    if (guess === questions[currentQuestion].answerIndex)
        rightAnswer = true;
    else
        rightAnswer = false;

    resultScreen(rightAnswer);
})
