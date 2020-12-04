import readlineSync from 'readline-sync';
import getRandomNum from '../src/randomNum.js';
import { gameLogic, userName } from '../src/index.js';

const descr = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkEven = (number) => (((number % 2) === 0) ? 'yes' : 'no');

const brainEven = () => {
  const randomNum = getRandomNum(1, 100);
  const even = checkEven(randomNum);
  console.log(`Question: ${randomNum}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === even) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${even}'.\nLet's try again, ${userName}!`);
  return false;
};
export default () => gameLogic(descr, brainEven);
