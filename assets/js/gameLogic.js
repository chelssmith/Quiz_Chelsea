// variables for quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables for DOM elements
var startscreenEl = document.getElementById("start-screen");
var questionsEL = document.getElementById("questions");
var questiontextEl = document.getElementById("question-text");
var timerEL = document.getElementById("timer");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start-button");
var intialEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");


function startQuiz() {
// hide start screen && show questions screen
startscreenEl;
    if (startscreenEl.style.display === "none") {
        startscreenEl.style.display = "block";
    }
    else {
        startscreenEl.style.display = "none";
    }
}

