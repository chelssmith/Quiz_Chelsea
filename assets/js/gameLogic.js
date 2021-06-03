// variables for quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables for DOM elements
var startscreenEl = document.getElementById("start-screen");
var questionsEL = document.getElementById("questions");
var questiontextEl = document.getElementById("question-text");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start-button");
var intialEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var endscreenEl = document.getElementById("end-screen");


// hide endscreen
endscreenEl.style.visibility = "hidden";

function startQuiz() {
    // hide start screen when button clicked
    startscreenEl;
    if (startscreenEl.style.display === "none") {
        startscreenEl.style.display = "block";
    }
    else {
        startscreenEl.style.display = "none";
    }


    //start timer 
    // 1. call setInterval method, passing in a callback function and an interval value of 1000 as input arguments
    // 2. store the returned id to the global variable timerId

    timerId = setInterval(clockTick, 1000)

    // show starting time on html timer element 
    timerEl.textContent = time;

    askQuestions();
}


function askQuestions() {
    // grabbing questions from array
    var currentQuestion = myQuestions[currentQuestionIndex];

    questiontextEl.textContent = currentQuestion.title;

    choicesEl.innerHTML = "";

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var currentQuestionChoice = currentQuestion
        currentQuestionChoice = document.createElement("button");

        currentQuestionChoice.setAttribute("choice");

        button.textContent = choices;

        button.addEventListener("click" function(userChoices))
    }
}

function userChoices () {}


function clockTick() {}