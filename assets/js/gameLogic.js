var startButton = document.querySelector(".start-button");
var highScores = document.querySelector(".high-scores");
var timeLeft = document.querySelector(".time-left");

var chosenAnswer = "",
var timer;
var timerCount;
var scoreCount;
var myQuestions = [
    {
        title: "How many years can a snail sleep for?",
        choices: ["3, 1, < 1, 7"],
        answer: "3",
    },
    {
        title: "What is the only animal that cannot jump?",
        choices: ["Rhino, Hippo, Elephant, Alligator"],
        answer: "Elephant"
    },
    {
        title: "What is a rhino's horn made out of?",
        choices: ["Bone, Hair, Cartilage, Enamel"],
        answer: "Hair",
    },
    {
        title: "About how many glasses of milk can a cow make in its lifetime?",
        choices: ["500, 200000, 3000, 1000000"],
        answer: "200000",
    },
    {
        title: "An ostrich's eye is bigger than its ____",
        choices: ["Brain, Heart, Stomach, Beak"],
        answer: "Brain",
    }
]

var chosenAnswer = [];

startButton.addEventListener("click")

function startQuiz(){
    timerCount = 60;
}