import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const showGreeting = () => console.log('Welcome to the Brain Games!');
const resultForWin = 3;

export default (descr, game) => {
  showGreeting();
  const userName = getUserName();
  console.log(descr);

  let countRightAnswers = 0;

  while (countRightAnswers < resultForWin) {
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
  console.log(`Congratulations, ${userName}!`);
};
