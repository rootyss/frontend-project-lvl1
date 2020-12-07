import { cons } from '@hexlet/pairs';
import getRandomNum from '../randomNum.js';
import buildGame from '../index.js';

const descr = 'What number is missing in the progression?';

const generateProgression = (firstElement, progressionLegth, progressionStep) => {
  const progression = [firstElement];
  for (let i = 1; i <= progressionLegth; i += 1) {
    progression.push(progression[i - 1] + progressionStep);
  }
  return progression;
};

const getElemProg = (progression, index) => progression[index];

const hiddenElemProg = (progression, index) => {
  const progWithHiddenElem = progression;
  progWithHiddenElem[index] = '..';
  return progWithHiddenElem;
};

const genGameProgression = () => {
  const progressionLegth = getRandomNum(10, 16);
  const progressionStep = getRandomNum(2, 10);
  const firstElement = getRandomNum(1, 30);
  const indexHiddenElem = getRandomNum(0, progressionLegth - 1);
  let progression = generateProgression(firstElement, progressionLegth, progressionStep);
  const rightAnswer = getElemProg(progression, indexHiddenElem);
  progression = hiddenElemProg(progression, indexHiddenElem);

  return cons(progression.join(' '), rightAnswer);
};

export default () => buildGame(descr, genGameProgression);
