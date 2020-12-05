import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';
import getUserName from './cli.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();

export default (descr, game) => {
  console.log(descr);

  let countRightAnswers = 0;

  while (countRightAnswers < 3) {
    const gameData = game();
    const question = car(gameData);
    const rightAnswer = `${cdr(gameData)}`;
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
      countRightAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  if (countRightAnswers === 3) console.log(`Congratulations, ${userName}!`);
};
