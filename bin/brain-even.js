#!/usr/bin/env node
import getUserName from '../src/cli.js';
import readlineSync from 'readline-sync';
import { checkEven, giveCondition, getRandomNum } from '../games/checkEven.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
giveCondition();

let countRightAnswers = 0;

while(countRightAnswers < 3) {
  let randomNum = getRandomNum(100);
  let even = checkEven(randomNum);
  console.log(`Question: ${randomNum}`);
  let answer = readlineSync.question('Your answer: ');
  if (answer === even) {
    console.log(`Correct!`);
  	countRightAnswers += 1;
  } else {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${even}'.\nLet's try again, ${userName}!`)
  }
}
if (countRightAnswers === 3) console.log(`Congratulations, ${userName}!`);