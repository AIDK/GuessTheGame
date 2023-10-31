'use strict';

let score = 20;
// TODO: Implement way of keeping track of user score
let hightScore = 0;

// this will generate a random number between 1 and 20
const generateSecret = function () {
	return Math.trunc(Math.random() * 20) + 1;
};

document.querySelector('.check').addEventListener('click', function () {
	const userInput = Number(document.querySelector('.guess').value);
	const secretNumber = generateSecret();

	if (!userInput) {
		console.log('⛔ No Number!');
	} else if (userInput === secretNumber) {
		console.log('🎉 Correct Number!');
		// TODO: Implement high score check
	} else if (userInput > secretNumber) {
		console.log('📈 Too high!');
		// TODO: Implement 'Game Over'
	} else if (userInput < secretNumber) {
		console.log('📉 Too low!');
		// TODO: Implement 'Game Over'
	}
});
