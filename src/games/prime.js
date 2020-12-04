import readlineSync from 'readline-sync';
import getRandomNum from '../randomNum.js';
import { gameLogic, userName } from '../index.js';

const descr = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) { if (num % i === 0 || num === 1) return 'no'; }
  return 'yes';
};

const prime = () => {
  const int = getRandomNum(2, 100);
  const rigthResult = isPrime(int);
  console.log(`Question: ${int}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === String(rigthResult)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rigthResult}'.\nLet's try again, ${userName}!`);
  return false;
};

export default () => gameLogic(descr, prime);
