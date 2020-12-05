import { cons } from '@hexlet/pairs';
import getRandomNum from '../randomNum.js';
import gameLogic from '../index.js';

const descr = 'Find the greatest common divisor of given numbers.';

const findGcd = (firsrtInt, secondInt) => {
  let a = firsrtInt;
  let b = secondInt;
  while (a !== b) {
    if (a > b) a -= b;
    else b -= a;
  }
  return a;
};

const brainGcd = () => {
  const a = getRandomNum(1, 50);
  const b = getRandomNum(1, 50);
  const question = `${a} ${b}`;
  const rightAnswer = findGcd(a, b);

  return cons(question, rightAnswer);
};

export default () => gameLogic(descr, brainGcd);
