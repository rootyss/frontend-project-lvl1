import readlineSync from 'readline-sync';
import getRandomNum from '../src/randomNum.js';
import { gameLogic, userName } from '../src/index.js';

const descr = 'What number is missing in the progression?';

const arratToSting = (array) => {
  let str = '';
  for (let i = 0; i < array.length; i += 1) {
    str = `${str} ${array[i]}`;
  }
  return str;
};

const progression = () => {
  const progressionLegth = getRandomNum(10, 16);
  const progressionStep = getRandomNum(2, 10);
  const firstElement = getRandomNum(1, 30);
  const indexHiddenElem = getRandomNum(0, progressionLegth - 1);
  const prog = [firstElement];
  let rigthResult = [];
  for (let i = 1; i <= progressionLegth; i += 1) {
    prog.push(prog[i - 1] + progressionStep);
  }
  rigthResult = prog[indexHiddenElem];
  prog[indexHiddenElem] = '..';
  console.log(`Question: ${arratToSting(prog)}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === String(rigthResult)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rigthResult}'.\nLet's try again, ${userName}!`);
  return false;
};

export default () => gameLogic(descr, progression);
