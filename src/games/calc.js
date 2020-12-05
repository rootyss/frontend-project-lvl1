import { cons } from '@hexlet/pairs';
import getRandomNum from '../randomNum.js';
import gameLogic from '../index.js';

const descr = 'What is the result of the expression?';

const calcExp = (op, a, b) => {
  if (op === '+') return a + b;
  if (op === '-') return a - b;
  if (op === '*') return a * b;
  return false;
};

const brainCalc = () => {
  const operand1 = getRandomNum(1, 10);
  const operand2 = getRandomNum(1, 10);
  const randOp = getRandomNum(0, 2);
  const op = ['+', '-', '*'];
  const rightAnswer = calcExp(op[randOp], operand1, operand2);
  const question = `${operand1} ${op[randOp]} ${operand2}`;

  return cons(question, rightAnswer);
};

export default () => gameLogic(descr, brainCalc);
