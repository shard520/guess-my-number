'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
*/
const message = document.querySelector('.message');
const scoreDisplay = document.querySelector('.score');
let score = 20;
const secretNum = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNum;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    message.textContent = '⛔ No Number!';
  } else if (guess === secretNum) {
    message.textContent = '🎉 Correct Number!';
  } else if (guess > secretNum) {
    if (score > 1) {
      message.textContent = '📈 Too High!';
      score--;
      scoreDisplay.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      scoreDisplay.textContent = 0;
    }
  } else if (guess < secretNum) {
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
