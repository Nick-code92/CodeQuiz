var questions = [
    {
      title: "Commonly used data types DO NOT include?",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts",
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.?",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses",
    },
    {
        title: "What dose HTML stand for?",
        choices: ["hypertext markup language", "cascading style sheets", "parentheses", "java script"],
        answer: "hypertext markup language",
    },
    {
        title: "who is on the two dollar bill?",
        choices: ["Abraham Lincoln", "Dwight D. Eisenhower", "Thomas Jefferson", "Albert Einstein"],
        answer: "Thomas Jefferson",
    },
    {
        title: "What dose CSS stand for?",
        choices: ["strings", "java script", "cascading style sheets", "square brackets"],
        answer: "cascading style sheets",
    },
    {
      title: "Web pages are written using?",
      choices: ["CSS", "JS", "HTML", "URL"],
      answer: "HTML",
    },
    {
      title: "Which is a single integrated circuit?",
      choices: ["Mother Board", "Gate", "CPU", "Chip"],
      answer: "Gate",
    };

    var currentQuestion = 0;
    var score = 0;
    var totQuestion = question.length;

    var container = document.getElementById("questionContainer");
    var questionEl = document.getElementById("question");
    var choices1 = document.getElementById("AnswerA");
    var choices2 = document.getElementById("AnswerB");
    var choices3 = document.getElementById("AnswerC");
    var choices4 = document.getElementById("AnswerD");
    var Next = document.getElementById("Next");
    var resultCont = document.getElementById("result");



