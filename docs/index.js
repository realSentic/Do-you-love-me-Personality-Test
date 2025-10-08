const cards = document.querySelectorAll('.card');
const buttons = document.querySelectorAll('.btn');
const scores = { love: 0, not: 0 };
let currentQuestion = 0;

function showNextQuestion() {
  cards.forEach(card => card.classList.remove('active'));
  if (currentQuestion < cards.length) {
    cards[currentQuestion].classList.add('active');
  }
}

function showResults() {
  const textResult = document.getElementById("text-result");
  const resultDescription = document.getElementById("result-description");
  const lovedImage = document.getElementById("loved-image");
  const hatedImage = document.getElementById("hated-image");

  if (scores.love > scores.not) {
    textResult.innerHTML = "You LOVE me!";
    lovedImage.style.display = 'flex';
    resultDescription.innerHTML = "You secretly scream inside every time you see me… in the best way! Your heart is totally mine.";
  } else {
    textResult.innerHTML = "You HATE me!";
    hatedImage.style.display = 'flex';
    resultDescription.innerHTML = "You keep your distance, and your heart isn’t racing when I’m around. Maybe it’s just friendship… or annoyance.";
  }
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.getAttribute('data-value');
    scores[value]++;

    currentQuestion++;

    if (currentQuestion < cards.length - 1) {
      showNextQuestion();
    } else {
      showNextQuestion();
      showResults();
    }
  });
});

showNextQuestion();
