const questions = [
	{
	  text: "Which planet is known as the Red Planet?",
	  answers: ["Earth", "Mars", "Jupiter"],
	  correct: 1
	},
	{
	  text: "What is the capital of Japan?",
	  answers: ["Seoul", "Tokyo", "Beijing"],
	  correct: 1
	},
	{
	  text: "How many continents are there?",
	  answers: [5 , 6, 7],
	  correct: 2
	}
  ];
  
  let current = 0;
  let score = 0;
  let userAnswers = [];
  
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const nextBtn = document.getElementById("next-btn");
  const scoreContainer = document.getElementById("score-container");
  
  function loadQuestion() {
	const q = questions[current];
	questionEl.textContent = q.text;
	answersEl.innerHTML = '';
	nextBtn.disabled = true;
  
	q.answers.forEach((ans, i) => {
	  const div = document.createElement("div");
	  div.textContent = ans;
	  div.className = "answer";
	  div.onclick = () => selectAnswer(div, i);
	  answersEl.appendChild(div);
	});
  }
  
  function selectAnswer(el, index) {
	[...answersEl.children].forEach(child => child.classList.remove("selected"));
	el.classList.add("selected");
	userAnswers[current] = index;
	nextBtn.disabled = false;
  }
  
  nextBtn.onclick = () => {
	if (userAnswers[current] === questions[current].correct) {
	  score++;
	}
	current++;
	if (current < questions.length) {
	  loadQuestion();
	} else {
	  showScore();
	}
  };
  
  function showScore() {
	document.getElementById("quiz-container").style.display = "none";
	scoreContainer.style.display = "block";
	scoreContainer.innerHTML = `
	  <h2>Quiz Complete!</h2>
	  <p>Your score: ${score} / ${questions.length}</p>
	`;
  }
  
  loadQuestion();