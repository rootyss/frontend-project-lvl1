import readlineSync from 'readline-sync';
import getRandomNum from '../src/randomNum.js';
import { gameLogic, userName } from '../src/index.js';

const descr = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  while (a !== b) {
    if (a > b) a -= b;
    else b -= a;
  }
  return a;
};

const brainGcd = () => {
  const a = getRandomNum(1, 50);
  const b = getRandomNum(1, 50);
  const rigthResult = findGcd(a, b);
  console.log(`Question: ${a} ${b}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === String(rigthResult)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rigthResult}'.\nLet's try again, ${userName}!`);
  return false;
};

export default () => gameLogic(descr, brainGcd);
