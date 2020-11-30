import readlineSync from 'readline-sync';
import getRandomNum from '../src/randomNum.js';
import { gameLogic, userName } from '../src/index.js';

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
  const rigthResult = calcExp(op[randOp], operand1, operand2);
  console.log(`Question: ${operand1} ${op[randOp]} ${operand2}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === String(rigthResult)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rigthResult}'.\nLet's try again, ${userName}!`);
  return false;
};

export default () => gameLogic(descr, brainCalc);
