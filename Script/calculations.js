'use strict';

const generateSecretNumber = function () {
	return Math.trunc(Math.random() * 20) + 1;
};

const subtractPlayerScore = function () {
	score--;
};

const calculatePlayerScore = function () {
	if (score > hightScore) hightScore = score;
};

let secretNumber = generateSecretNumber();
let score = 20;
let hightScore = 0;
