var time = 60;
var currentQuestionIndex = 0;
var timeEl = document.querySelector("#time");
var startEl = document.querySelector(".start");
var startButton = document.querySelector("#start-button");
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#choices");
var quizEndEl = document.querySelector("#quiz-end");
var finalScore = document.querySelector("#final-score");
var nameEl = document.querySelector("#name");
var saveScoreButton = document.querySelector("#save-score");
var leaderboardEl = document.querySelector("#leaderboard");
var scoresEl = document.querySelector("#scores");
var timeInterval;
var questions = [
    {
        title: 'Arrays are enclosed within ____.',
        choices: ['parenthesis', 'quotations', 'hashtags', 'brackets'],
        answer: 'brackets',
    },
    {
        title: 'Common data types DO NOT include:',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts',
    },
    {
        title: 'Which operator is used for strict equality ____.',
        choices: ['=', '==', '===', '!=='],
        answer: '===',
    },
    {
        title: 'Arrays in JavaScript can be used to store ____.',
        choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above',
    },
    {
        title: 'What does "NaN" represent in JavaScript?',
        choices: ['not a number', 'null', 'no argument', 'no activation'],
        answer: 'not a number',
    },
    {
        title: 'Which function is used to parse a JSON string?',
        choices: ['parseJSON()', 'toJSON()', 'JSON.parse()', 'stringify()'],
        answer: 'JSON.parse()',
    },
    {
        title: 'How do you comment lines in JavaScript?',
        choices: ['##', '//', '--', '||'],
        answer: '//',
    },
    {
        title: 'Which function converts a string to lowercase?',
        choices: ['toLower()', 'lowerCase()', 'toLowerCase()', 'stringToLower()'],
        answer: 'toLowerCase()',
    },
    {
        title: 'How do you declare a constant in JavaScript?',
        choices: ['const', 'for', 'let', 'var'],
        answer: 'const',
    },
    {
        title: 'Which operator combines two or more strings?',
        choices: ['+=', '++', '&', '+'],
        answer: '+',
    },
];

function startQuiz() {
    startEl.classList.add("hide");
    timeInterval = setInterval(countdown, 1000);
    timeEl.textContent = time;
    questionsEl.removeAttribute("class");
    displayQuestion()
}

function displayQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var titleEl = document.querySelector("#questions-title");
    titleEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = "";

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choice = currentQuestion.choices[i];
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);
        // var choiceLetter = String.fromCharCode(65 + i);
        // choiceNode.textContent = choiceLetter + '. ' + choice;
        choiceNode.textContent = choice;
        choicesEl.appendChild(choiceNode);
    }
    
}

function questionClick(event) {
    var buttonEl = event.target;

    if (!buttonEl.matches(".choice")) {
        return;
    }

    if (buttonEl.value !== questions[currentQuestionIndex].answer) {
        time -= 5;

        if (time < 0) {
            time = 0;
        }
    }

    timeEl.textContent = time;

    currentQuestionIndex++;

    if (time <= 0 || currentQuestionIndex === questions.length) {
        quizEnd();
    } else {
        displayQuestion();
    }
}

function countdown() {
    time--;
    timeEl.textContent = time;
    if (time <= 0) {
        quizEnd()
    }
}

function quizEnd() {
    clearInterval(timeInterval);

    var quizEndEl = document.querySelector('#quiz-end');
    quizEndEl.classList.remove("hide");

    var finalScoreEl = document.querySelector('#final-score');
    finalScoreEl.textContent = time;

    questionsEl.setAttribute("class", "hide");

    saveScoreButton.onclick = saveScore
}

function saveScore() {
    var highscores = JSON.parse(localStorage.getItem("scores")) || []
    var score = {
        name: nameEl.value,
        score: time
    }

    highscores.push(score)
    localStorage.setItem("scores", JSON.stringify(highscores))

    window.location.href = "scores.html"

}

startButton.addEventListener("click", startQuiz);

choicesEl.addEventListener("click", questionClick);