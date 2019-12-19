//presented with a call-to-action to "Start Quiz." Also note the navigation option to "View Highscores" and the "Time" value set at 0.

//Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.

//Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).

//When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in `localStorage`.

//Your application should also be responsive, ensuring that it adapts to multiple screen sizes.

//The first view of the application displays a button that starts the quiz.

// Clicking the start button displays a series of questions.

//  Once the quiz begins, a timer starts.

// If a question is answered incorrectly, additional time is subtracted from the timer.

// The timer stops when all questions have been answered or the timer reaches 0.

// After the game ends, the user can save their initials and score to a highscores view using local storage

var questionEl = document.getElementById("question");
var choice1 = document.getElementById("AnswerA");
var choice2 = document.getElementById("AnswerB");
var choice3 = document.getElementById("AnswerC");
var choice4 = document.getElementById("AnswerD");
var start = document.getElementById("start-btn");
// var Next = document.getElementById("next-btn");

//var timeGauge =document.getElementById("timeGauge");
var resultCont = document.getElementById("result");
var control = document.getElementById("controls") 
var container = document.getElementById("question-container");

var currentQuestion = 0;
 var score = 0;
 var totQuestion = questions.length;

 function question (qobj) {
   questionEl.innerText = qobj.title;
   choice1.innerText = qobj.choices[0];
   choice2.innerText = qobj.choices[1];
   choice3.innerText = qobj.choices[2];
   choice4.innerText = qobj.choices[3];
 };
 
 container.style.display = "none";
 resultCont.style.display = "none";
 
 start.addEventListener("click", function(e){
   control.style.display = "none"
   container.style.display = "block";
   question(questions[currentQuestion])   
   
 });


 
 

