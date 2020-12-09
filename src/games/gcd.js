import { cons } from '@hexlet/pairs';
import getRandomNum from '../randomNum.js';
import buildGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (firstInt, secondInt) => {
  let a = firstInt;
  let b = secondInt;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

const genGameGcd = () => {
  const a = getRandomNum(1, 50);
  const b = getRandomNum(1, 50);
  const question = `${a} ${b}`;
  const rightAnswer = `${findGcd(a, b)}`;

  return cons(question, rightAnswer);
};

export default () => buildGame(description, genGameGcd);
