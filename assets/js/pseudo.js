// declare variable at top state

//declare varibale to keep track of our quiz state (questions index, times, time variables)

//variable to reference DOM elements
//var question = document.getElementById("your id goes here")

//create a startquiz function to start your quiz
// put timer stuff in here an run your function to get your quiz items

// create a function to render questions for the user 
function get(){
    // get current question object from the array 

    //update your html with current question

    //clear our any older question choices

    //loop over our choices and crate new button for new choices
        // check out. forEach()

    // attach click event listener to each choice
    choice.onclick = qclick;

    //display questions on the page 
}


// create a function for a questionClicked()
function = qClick (){
    // check if user answered wrong question
    // if you want you can decrement time if user is long 

    // creat if to check it time has hit 0 or time is still remaining
    // if (time < 0){
         //   time = 0
    //}


    // display time on the page 

    // check to see if the answer is correct if correct move on give gif (whatver your heart desires)
    // move on to next question 

    // check to see if we're out of questions
    // if we are out of q's run endQuiz function else get next questins 
    if (currentQIndex === questions.length){
        quizEnd();
    } else{
        qutQ();
    }

    // create function to end quiz
    // clear time interval
    // show an end quiz page if you want
    // show user final score 

    // checl out methods.hide() and .show()

    // function to run time 
    // if time hits 0 run endQ()

    // create function for highscore 

    // write any function to check how many questions user got right and perform your math or hardcoded data to display user score

    // chekc to make sure user inputs user name/intials into user prompt
    // save high schores to local storage
    // retrive high schores from local storage

    // creare a new object to store user scores for the high score page 

    // redirect to the highscores page
    // HINT window.location.href