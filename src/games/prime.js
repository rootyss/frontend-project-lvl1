import { cons } from '@hexlet/pairs';
import getRandomNum from '../randomNum.js';
import buildGame from '../index.js';

const descr = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0 || num === 1) return false;
  }
  return true;
};

const genGamePrime = () => {
  const question = getRandomNum(2, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(question, rightAnswer);
};

export default () => buildGame(descr, genGamePrime);
