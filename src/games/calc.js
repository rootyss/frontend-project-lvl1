import { cons } from '@hexlet/pairs';
import getRandomNum from '../randomNum.js';
import buildGame from '../index.js';

const descr = 'What is the result of the expression?';

const calcExp = (op, a, b) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown operator: '${op}'!`);
  }
};

const genGameCalc = () => {
  const operand1 = getRandomNum(1, 10);
  const operand2 = getRandomNum(1, 10);
  const randOp = getRandomNum(0, 2);
  const op = ['+', '-', '*'];
  const rightAnswer = calcExp(op[randOp], operand1, operand2);
  const question = `${operand1} ${op[randOp]} ${operand2}`;

  return cons(question, rightAnswer);
};

export default () => buildGame(descr, genGameCalc);
