import { cons } from '@hexlet/pairs';
import getRandomNum from '../randomNum.js';
import gameLogic from '../index.js';

const descr = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) { if (num % i === 0 || num === 1) return 'no'; }
  return 'yes';
};

const prime = () => {
  const question = getRandomNum(2, 100);
  const rightAnswer = isPrime(question);

  return cons(question, rightAnswer);
};

export default () => gameLogic(descr, prime);
