import { cons } from '@hexlet/pairs';
import getRandomNum from '../randomNum.js';
import buildGame from '../index.js';

const description = 'What is the result of the expression?';

const getCorrectAnswer = (operator, operand1, operand2) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};
const operators = '+-*';

const genGameQuestion = () => {
  const operand1 = getRandomNum(1, 10);
  const operand2 = getRandomNum(1, 10);
  const randomOperator = operators[getRandomNum(0, operators.length - 1)];
  const rightAnswer = String(getCorrectAnswer(randomOperator, operand1, operand2));
  const question = `${operand1} ${randomOperator} ${operand2}`;

  return cons(question, rightAnswer);
};

export default () => buildGame(description, genGameQuestion);
