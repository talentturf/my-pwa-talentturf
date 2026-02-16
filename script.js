// Talent Turf - Phase 1 Psychometric Engine

// Personality Score Object
let score = {
  introvert: 0,
  extrovert: 0,
  analytical: 0,
  creative: 0
};

// Questions Data
const questions = [
  {
    question: "You enjoy spending your free time:",
    options: [
      { text: "Reading or alone activities", type: "introvert" },
      { text: "Hanging out with friends", type: "extrovert" },
      { text: "Solving logical puzzles", type: "analytical" },
      { text: "Drawing or creating something", type: "creative" }
    ]
  },
  {
    question: "In a group project you usually:",
    options: [
      { text: "Work quietly on your part", type: "introvert" },
      { text: "Lead discussions", type: "extrovert" },
      { text: "Plan strategy", type: "analytical" },
      { text: "Bring creative ideas", type: "creative" }
    ]
  },
  {
    question: "You make decisions based on:",
    options: [
      { text: "Personal feelings", type: "introvert" },
      { text: "People's opinions", type: "extrovert" },
      { text: "Facts and data", type: "analytical" },
      { text: "Imagination and vision", type: "creative" }
    ]
  },
  {
    question: "You feel energized when:",
    options: [
      { text: "Spending time alone", type: "introvert" },
      { text: "Talking to many people", type: "extrovert" },
      { text: "Solving complex problems", type: "analytical" },
      { text: "Designing new ideas", type: "creative" }
    ]
  },
  {
    question: "Your strongest skill is:",
    options: [
      { text: "Deep thinking", type: "introvert" },
      { text: "Communication", type: "extrovert" },
      { text: "Critical analysis", type: "analytical" },
      { text: "Innovation", type: "creative" }
    ]
  }
];

let currentQuestionIndex = 0;

// Start Quiz
function loadQuestion() {
  const questionContainer = document.getElementById("question");
  const optionsContainer = document.getElementById("options");

  optionsContainer.innerHTML = "";

  let currentQuestion = questions[currentQuestionIndex];
  questionContainer.innerText = currentQuestion.question;

  currentQuestion.options.forEach(option => {
    let button = document.createElement("button");
    button.innerText = option.text;
    button.onclick = () => selectAnswer(option.type);
    optionsContainer.appendChild(button);
  });
}

// Select Answer
function selectAnswer(type) {
  score[type]++;
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// Show Final Result
function showResult() {
  document.getElementById("quiz").style.display = "none";

  let highest = Object.keys(score).reduce((a, b) =>
    score[a] > score[b] ? a : b
  );

  document.getElementById("result").innerHTML =
    "<h2>Your Personality Type:</h2><h1>" + highest.toUpperCase() + "</h1>";
}

// Initialize on Page Load
window.onload = loadQuestion;