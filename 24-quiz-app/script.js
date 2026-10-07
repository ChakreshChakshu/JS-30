const questions = [
  {
    question: "Which keyword declares a block-scoped variable that cannot be reassigned?",
    options: ["var", "let", "const", "static"],
    answer: 2
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Manager",
      "Dynamic Order Module",
      "Desktop Output Mechanism"
    ],
    answer: 0
  },
  {
    question: "Which method is used to add an element at the end of an array?",
    options: ["shift()", "pop()", "unshift()", "push()"],
    answer: 3
  },
  {
    question: "How do you select an element with id 'app' in vanilla JS?",
    options: [
      "document.select('#app')",
      "document.getElementById('app')",
      "document.queryId('app')",
      "document.getElement('.app')"
    ],
    answer: 1
  },
  {
    question: "Which JavaScript function converts a JSON string into an object?",
    options: ["JSON.stringify()", "JSON.toObject()", "JSON.parse()", "JSON.convert()"],
    answer: 2
  },
  {
    question: "What is the return type of typeof NaN?",
    options: ["number", "undefined", "NaN", "object"],
    answer: 0
  },
  {
    question: "Which array method creates a new array with all elements passing a test?",
    options: ["forEach()", "map()", "filter()", "reduce()"],
    answer: 2
  },
  {
    question: "What event occurs when a user clicks on an HTML element?",
    options: ["onchange", "onclick", "onmouseclick", "onhover"],
    answer: 1
  },
  {
    question: "Where is localStorage data stored?",
    options: [
      "On the remote server",
      "In a temporary cookie header",
      "In the browser client with no expiration date",
      "In session cache expiring on tab close"
    ],
    answer: 2
  },
  {
    question: "What does the strict equality operator (===) compare?",
    options: [
      "Only the values",
      "Both value and data type",
      "Memory addresses only",
      "Variable names"
    ],
    answer: 1
  }
];

let currentIndex = 0;
let score = 0;
let answered = false;

const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const progressBar = document.getElementById("progressBar");
const questionCounter = document.getElementById("questionCounter");
const scoreCounter = document.getElementById("scoreCounter");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const nextBtn = document.getElementById("nextBtn");
const finalScore = document.getElementById("finalScore");
const finalFeedback = document.getElementById("finalFeedback");
const restartBtn = document.getElementById("restartBtn");

function loadQuestion() {
  answered = false;
  nextBtn.disabled = true;

  const current = questions[currentIndex];
  questionCounter.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
  scoreCounter.textContent = `Score: ${score}`;
  questionText.textContent = current.question;
  progressBar.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;

  optionsContainer.innerHTML = "";
  current.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    btn.textContent = opt;
    btn.addEventListener("click", () => selectOption(idx));
    optionsContainer.appendChild(btn);
  });
}

function selectOption(selectedIdx) {
  if (answered) return;
  answered = true;

  const current = questions[currentIndex];
  const buttons = optionsContainer.querySelectorAll(".option-btn");

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === current.answer) {
      btn.classList.add("correct");
    } else if (idx === selectedIdx) {
      btn.classList.add("wrong");
    }
  });

  if (selectedIdx === current.answer) {
    score++;
    scoreCounter.textContent = `Score: ${score}`;
  }

  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
});

function showResults() {
  quizScreen.style.display = "none";
  resultScreen.style.display = "block";
  finalScore.textContent = `${score} / ${questions.length}`;

  const pct = (score / questions.length) * 100;
  if (pct >= 80) {
    finalFeedback.textContent = "🌟 Outstanding! You have great frontend mastery!";
  } else if (pct >= 50) {
    finalFeedback.textContent = "👍 Good job! Keep practicing to sharpen your skills.";
  } else {
    finalFeedback.textContent = "📚 Keep studying! Review JavaScript concepts and try again.";
  }
}

restartBtn.addEventListener("click", () => {
  currentIndex = 0;
  score = 0;
  resultScreen.style.display = "none";
  quizScreen.style.display = "block";
  loadQuestion();
});

loadQuestion();
