var time = 60;
var timeEl = document.querySelector("#time");
var header = document.querySelector("header");
var startEl = document.querySelector(".start");
var startButton = document.querySelector("#start-button");
var quizEl = document.querySelector(".quiz");
var questionsEl = document.querySelector(".question");
var answersEl = document.querySelector(".answers");
var quizEndEl = document.querySelector(".quiz-end");
var finalScore = document.querySelector("#final-score");
var initialsEl = document.querySelector("#initials");
var saveScoreButton = document.querySelector("#save-score");
var leaderboardEl = document.querySelector(".leaderboard");
var olEl = document.querySelector("ol");
var timeInterval;
var questions = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    },]

function startQuiz() {
    startEl.classList.add("hide");
    quizEl.classList.remove("hide");
    timeInterval = setInterval(countdown, 1000);
    timeEl.textContent = time;
    displayQuestion()
}

function countdown() {
    time --;
    timeEl.textContent = time;
    if (time <= 0) {
        quizEnd()
    }
}

function displayQuestion() {
    
    

}

function quizEnd() {
    clearInterval(timeInterval)
}

startButton.addEventListener("click", startQuiz)

// display q, check answers
// questions 