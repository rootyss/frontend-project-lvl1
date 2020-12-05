import { cons } from '@hexlet/pairs';
import getRandomNum from '../randomNum.js';
import gameLogic from '../index.js';

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
  const question = [firstElement];
  let rightAnswer = [];
  for (let i = 1; i <= progressionLegth; i += 1) {
    question.push(question[i - 1] + progressionStep);
  }
  rightAnswer = question[indexHiddenElem];
  question[indexHiddenElem] = '..';

  return cons(arratToSting(question), rightAnswer);
};

export default () => gameLogic(descr, progression);
