'use strict';

const numberDisplay = document.querySelector('.number');
const body = document.querySelector('body');
const checkBtn = document.querySelector('.check');

let score = 20;
let highScore = 0;
let secretNum = Math.trunc(Math.random() * 50) + 1;

const updateText = function (element, newMessage) {
  return (document.querySelector(element).textContent = newMessage);
};

const checkGuess = function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    // No guess
    updateText('.message', '⛔ No Number!');
  } else if (guess === secretNum) {
    //Correct guess
    updateText('.message', '🎉 Correct Number!');
    updateText('.number', secretNum);
    body.style.backgroundColor = '#60b347';
    numberDisplay.style.width = '30rem';
    checkBtn.disabled;
    if (score > highScore) {
      highScore = score;
      updateText('.highscore', highScore);
    }
  } else if (guess !== secretNum) {
    // Incorrect guess
    if (score > 1) {
      score--;
      updateText('.score', score);
      updateText(
        '.message',
        guess > secretNum ? '📈 Too High!' : '📉 Too Low!'
      );
    } else {
      updateText('.message', '💥 You lost the game!');
      updateText('.score', 0);
      checkBtn.disabled = true;
    }
  }
};

checkBtn.addEventListener('click', checkGuess);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') checkGuess();
});

document.querySelector('.again').addEventListener('click', function () {
  secretNum = Math.trunc(Math.random() * 50) + 1;
  score = 20;
  updateText('.score', score);
  updateText('.message', 'Start guessing ...');
  document.querySelector('.guess').value = '';
  numberDisplay.textContent = '?';
  numberDisplay.removeAttribute('style');
  body.removeAttribute('style');
  checkBtn.disabled = false;
});
