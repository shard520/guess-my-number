'use strict';

const message = document.querySelector('.message');
const scoreDisplay = document.querySelector('.score');
const numberDisplay = document.querySelector('.number');
const body = document.querySelector('body');
let score = 20;
let secretNum = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // No input
  if (!guess) {
    message.textContent = '⛔ No Number!';
  }
  // When player wins
  else if (guess === secretNum) {
    message.textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNum;
    body.style.backgroundColor = '#60b347';
    numberDisplay.style.width = '30rem';
  }
  // Guess is too high
  else if (guess > secretNum) {
    if (score > 1) {
      message.textContent = '📈 Too High!';
      score--;
      scoreDisplay.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      scoreDisplay.textContent = 0;
    }
  }
  // Guess is too low
  else if (guess < secretNum) {
    if (score > 1) {
      message.textContent = '📉 Too Low!';
      score--;
      scoreDisplay.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      scoreDisplay.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  scoreDisplay.textContent = score;
  message.textContent = 'Start guessing ...';
  document.querySelector('.guess').value = '';
  numberDisplay.textContent = '?';
  numberDisplay.removeAttribute('style');
  body.removeAttribute('style');
});
