import { cons } from '@hexlet/pairs';
import getRandomNum from '../randomNum.js';
import buildGame from '../index.js';

const description = 'What is the result of the expression?';

const calcExp = (operator, a, b) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};
const operators = '+-*';

const genGameCalc = () => {
  const operand1 = getRandomNum(1, 10);
  const operand2 = getRandomNum(1, 10);
  const randomOperator = getRandomNum(0, operators.length - 1);
  const rightAnswer = `${calcExp(operators[randomOperator], operand1, operand2)}`;
  const question = `${operand1} ${operators[randomOperator]} ${operand2}`;

  return cons(question, rightAnswer);
};

export default () => buildGame(description, genGameCalc);
