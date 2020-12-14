import { cons } from '@hexlet/pairs';
import getRandomNum from '../randomNum.js';
import buildGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2, lastDividing = Math.sqrt(num); i <= lastDividing; i += 1) {
    if (num % i === 0 || num === 1) {
      return false;
    }
  }
  return true;
};

const genGameQuestion = () => {
  const question = getRandomNum(2, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(question, rightAnswer);
};

export default () => buildGame(description, genGameQuestion);
