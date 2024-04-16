let time = 60;
let currentQuestionIndex = 0;
const timeEl = document.querySelector("#time");
const startEl = document.querySelector(".start");
const startButton = document.querySelector("#start-button");
const questionsEl = document.querySelector("#questions");
const choicesEl = document.querySelector("#choices");
const quizEndEl = document.querySelector("#quiz-end");
const finalScore = document.querySelector("#final-score");
const nameEl = document.querySelector("#name");
const saveScoreButton = document.querySelector("#save-score");
const leaderboardEl = document.querySelector("#leaderboard");
const scoresEl = document.querySelector("#scores");
let timeInterval;

const questions = [
  {
    title: "Arrays are enclosed within ____.",
    choices: ["parenthesis", "quotations", "hashtags", "brackets"],
    answer: "brackets",
  },
  {
    title: "Data types DO NOT include ____.",
    choices: ["strings", "booleans", "variables", "numbers"],
    answer: "variables",
  },
  {
    title: "____ represents strict equality.",
    choices: ["=", "==", "===", "!=="],
    answer: "===",
  },
  {
    title: "Arrays can be used to store ____.",
    choices: ["strings", "arrays", "booleans", "all of the above"],
    answer: "all of the above",
  },
  {
    title: '"NaN" is the abbreviation for ____.',
    choices: ["not a number", "null", "no argument", "no activation"],
    answer: "not a number",
  },
  {
    title: "____ parses a JSON string.",
    choices: ["parseJSON()", "toJSON()", "JSON.parse()", "stringify()"],
    answer: "JSON.parse()",
  },
  {
    title: "Comment out lines using ____.",
    choices: ["##", "//", "--", "||"],
    answer: "//",
  },
  {
    title: "____ converts a string to lower case.",
    choices: ["toLower()", "lowerCase()", "toLowerCase()", "stringToLower()"],
    answer: "toLowerCase()",
  },
  {
    title: "____ is used to declare a constant.",
    choices: ["const", "for", "let", "var"],
    answer: "const",
  },
  {
    title: "____ is sued to combine datatypes.",
    choices: ["+=", "++", "&", "+"],
    answer: "+",
  },
];

function startQuiz() {
  startEl.classList.add("hide");
  timeInterval = setInterval(countdown, 1000);
  timeEl.textContent = time;
  questionsEl.removeAttribute("class");
  displayQuestion();

  nameEl.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      saveScore();
    }
  });
}

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const titleEl = document.querySelector("#questions-title");
  titleEl.textContent = currentQuestion.title;
  titleEl.classList.add("questions");
  choicesEl.innerHTML = "";

  for (let i = 0; i < currentQuestion.choices.length; i++) {
    const choice = currentQuestion.choices[i];
    const choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);
    choiceNode.textContent = choice;
    choicesEl.appendChild(choiceNode);
  }
}

function questionClick(event) {
  const buttonEl = event.target;

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
    quizEnd();
  }
}

function quizEnd() {
  clearInterval(timeInterval);

  quizEndEl.classList.remove("hide");

  finalScore.textContent = time;

  questionsEl.setAttribute("class", "hide");

  saveScoreButton.onclick = saveScore;
}

function saveScore() {
  const highscores = JSON.parse(localStorage.getItem("scores")) || [];
  const score = {
    name: nameEl.value,
    score: time,
  };

  highscores.push(score);
  localStorage.setItem("scores", JSON.stringify(highscores));

  window.location.href = "scores.html";
}

startButton.addEventListener("click", startQuiz);
choicesEl.addEventListener("click", questionClick);
