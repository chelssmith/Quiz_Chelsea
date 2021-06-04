

const myQuestions = [
    {
        title: "How many years can a snail sleep for?",
        choices: ["3", "1", "< 1", "7"],
        answer: "3",
    },
    {
        title: "What is the only animal that cannot jump?",
        choices: ["Rhino", "Hippo", "Elephant", "Alligator"],
        answer: "Elephant"
    },
    {
        title: "What is a rhino's horn made out of?",
        choices: ["Bone", "Hair", "Cartilage", "Enamel"],
        answer: "Hair",
    },
    {
        title: "About how many glasses of milk can a cow make in its lifetime?",
        choices: ["500", "200000", "3000", '1000000'],
        answer: "200000",
    },
    {
        title: "An ostrich's eye is bigger than its ____",
        choices: ["Brain", "Heart", "Stomach", "Beak"],
        answer: "Brain",
    },
]

// variables for quiz state
var currentQuestionIndex = 0;
var time = myQuestions.length * 15;
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

    currentQuestion.choices.forEach(function(choice,i){
        var choiceBtn= document.createElement("button");
        choiceBtn.setAttribute("class", "choice-button");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.textContent = i + 1 + ". " + choice;
        choiceBtn.onclick= userChoice;
        choicesEl.append(choiceBtn);
    })









    // for (var i = 0; i < currentQuestion.choices.length; i++) {
    //     console.log(currentQuestion.choices)
        
    //     // currentQuestion.choices[0]= document.createElement("button");
    //     // choicesEl.textContent = choices
    //     // console.log(choices)
        

    // }
}

function userChoice(){

    // USER CHOICE EVENT CALLBACK FUNCTION

    // CHECK IF USER CHOICE IS WRONG
    // 1. event target has the choice button element on which user clicked
    //    that button element has the value attribute to contain the choice user clicked
    //    console.log the event target to look for the where the value attribute is
    // 2. get the anwer to the current question
    // 3. compare these two variables to check if user choice is wrong
  
    if (this.value !== myQuestions[currentQuestionIndex].answer) {
      // PENALIZE TIME BY SUBTRACTING 15 SECONDS FROM THE GLOBAL TIME VARIABLE
        time -= 15;
      // IF TIME IS LESS THAN 0, MAKE IT EQUAL TO 0
        if (time < 0){
            time = 0
        };
  
      // DISPLAY NEW TIME ON THE PAGE BY ASSIGNING TIME TO TEXT CONTEXT OF HTML TIMER ELEMENT
      timerEl.textContent = time
  
      // ASSIGN  "WRONG!" TO TEXT CONTENT OF HTML FEEDBACK ELEMENT
      feedbackEl.textContent = "Wrong!";
  
    } else {
      
  
      // ASSIGN "CORRECT!" TO TEXT CONTENT OF HTML FEEDBACK ELEMENT
      feedbackEl.textContent = "Correct!";
    }
  
    // FLASH RIGHT/WRONG FEEDBACK ON PAGE FOR HALF A SECOND
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
      feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);

    // MOVE TO NEXT QUESTION BY INCREMENTING THE GLOBAL INDEX VARIABLE
    currentQuestionIndex++;
    // CHEKC IF WE'VE RUN OUT OF QUESTIONS
    // 1. if we've run out, call quizEnd function
    // 2. else call ask questions funciton
  if (currentQuestionIndex=myQuestions.length){
    quizEnd();
  }
  else {
    askQuestions();
  }
  }



startBtn.onclick= startQuiz;

function clockTick() {}
function quizEnd() {}