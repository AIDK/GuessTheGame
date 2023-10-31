'use strict';

const setDisplayMessage = function (control, value) {
	document.querySelector(`${control}`).textContent = value;
	console.log(`${control}`, value, secretNumber);
};

const setPlayerScore = function (score) {
	document.querySelector('.score').textContent = score;
};

const setGameBackgroundColor = function (value) {
	document.querySelector('body').style.backgroundColor = value;
};

const setNumberControlWidth = function (value) {
	document.querySelector('.number').style.width = value;
};

document.querySelector('.check').addEventListener('click', function () {
	const userInput = Number(document.querySelector('.guess').value);

	if (!userInput) {
		// no guescalculatePlayerScore
		setDisplayMessage('.message', '⛔ No Number!');
	} else if (userInput === secretNumber) {
		// guess was correct!
		setDisplayMessage('.message', '🎉 Correct Number!');
		setDisplayMessage('.number', secretNumber);
		// set the player's highscore
		calculatePlayerScore();
		setDisplayMessage('.highscore', hightScore);
		// display to user they won
		setGameBackgroundColor('#60b347');
		setNumberControlWidth('30rem');
	} else if (userInput !== secretNumber) {
		// guess was wrong!
		if (score > 1) {
			setDisplayMessage(
				'.message',
				userInput > secretNumber ? '📈 Too high!' : '📉 Too low!'
			);
			// subtract score for guessing incorrect number
			subtractPlayerScore();
			setPlayerScore(score);
		} else {
			// player reached 0 score, game over!
			setDisplayMessage('.message', '💥 You lost the game!');
			setPlayerScore(0);
		}
	}
});

document.querySelector('.again').addEventListener('click', function () {
	// reset game
	score = 20;
	secretNumber = generateSecretNumber();
	setPlayerScore(score);
	setDisplayMessage('.message', 'Start guessing...');
	setDisplayMessage('.number', '?');
	setGameBackgroundColor('#222');
	setNumberControlWidth('15rem');
	document.querySelector('.guess').value = '';
});
