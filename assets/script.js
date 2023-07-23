var time = 60;
var currentQuestionIndex = 0;
var timeEl = document.querySelector("#time");
// var header = document.querySelector("header");
var startEl = document.querySelector(".start");
var startButton = document.querySelector("#start-button");
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");
// var answersEl = document.querySelector("#answers");
var quizEndEl = document.querySelector("#quiz-end");
var finalScore = document.querySelector("#final-score");
var initialsEl = document.querySelector("#initials");
var saveScoreButton = document.querySelector("#save-score");
var leaderboardEl = document.querySelector("#leaderboard");
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
    },
    {
        title: 'Arrays in JavaScript can be used to store ____.',
        choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above',
    },
    {
        title: 'String values must be enclosed within ____ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'quotes',
    },
    {
        title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
        answer: 'console.log',
    },
];

function displayQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var titleEl = document.querySelector('#question-title');
    titleEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = '';

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choice = currentQuestion.choices[i];
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);
        choiceNode.textContent = i + 1 + '. ' + choice;
        choicesEl.appendChild(choiceNode);
    }
}

function countdown() {
    time--;
    timeEl.textContent = time;
    if (time <= 0) {
        quizEnd()
    }
}

function startQuiz() {
    startEl.classList.add("hide");
    timeInterval = setInterval(countdown, 1000);
    timeEl.textContent = time;
    questionsEl.removeAttribute("class");
    displayQuestion()
}

startButton.addEventListener("click", startQuiz)

function quizEnd() {
    clearInterval(timeInterval)
}

// display q, check answers
// questions 