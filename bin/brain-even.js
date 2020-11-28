#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';
import { getRandomNum } from '../src/index.js';
import { checkEven, giveCondition } from '../games/Even.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
giveCondition();

let countRightAnswers = 0;

while (countRightAnswers < 3) {
  const randomNum = getRandomNum(100);
  const even = checkEven(randomNum);
  console.log(`Question: ${randomNum}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === even) {
    console.log('Correct!');
    countRightAnswers += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${even}'.\nLet's try again, ${userName}!`);
  }
}
if (countRightAnswers === 3) console.log(`Congratulations, ${userName}!`);
