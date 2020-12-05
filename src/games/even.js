import { cons } from '@hexlet/pairs';
import getRandomNum from '../randomNum.js';
import gameLogic from '../index.js';

const descr = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const brainEven = () => {
  const question = getRandomNum(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return cons(question, rightAnswer);
};
export default () => gameLogic(descr, brainEven);
