'use strict';

const calculateSecretNumber = function () {
	return Math.trunc(Math.random() * 20) + 1;
};

const messageObject = document.querySelector('.message');
const numberObject = document.querySelector('.number');
const highScoreObject = document.querySelector('.highscore');
const guessObject = document.querySelector('.guess');
const scoreObject = document.querySelector('.score');

let score = 20;
let highScore = 0;
let secretNumber = calculateSecretNumber();

const setGameBackgroundColor = function (value) {
	document.querySelector('body').style.backgroundColor = value;
};

const setNumberControlWidth = function (value) {
	document.querySelector('.number').style.width = value;
};

const process = function () {
	let userInput = Number(guessObject.value);
	if (!userInput) {
		// no guess
		messageObject.textContent = '⛔ No Number!';
	} else if (userInput === secretNumber) {
		// guess was correct!
		messageObject.textContent = '🎉 Correct Number!';
		numberObject.textContent = secretNumber;
		// set the player's highscore
		if (score > highScore) highScore = score;
		highScoreObject.textContent = highScore;
		// display to user they won
		setGameBackgroundColor('#60b347');
		setNumberControlWidth('30rem');
	} else if (userInput !== secretNumber) {
		// guess was wrong!
		if (score > 1) {
			messageObject.textContent = userInput > secretNumber ? '📈 Too high!' : '📉 Too low!';
			// subtract score for guessing incorrect number
			score--;
			scoreObject.textContent = score;
		} else {
			// player reached 0 score, game over!
			messageObject.textContent = '💥 You lost the game!';
			scoreObject.textContent = 0;
		}
	}
};

const reset = function () {
	score = 20;
	secretNumber = calculateSecretNumber();
	scoreObject.textContent = score;
	messageObject.textContent = 'Start guessing...';
	numberObject.textContent = '?';
	guessObject.value = '';
	setGameBackgroundColor('#222');
	setNumberControlWidth('15rem');
};

document.querySelector('.check').addEventListener('click', process);
document.querySelector('.again').addEventListener('click', reset);
