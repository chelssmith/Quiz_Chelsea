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
var 