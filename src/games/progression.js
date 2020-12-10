import { cons } from '@hexlet/pairs';
import getRandomNum from '../randomNum.js';
import buildGame from '../index.js';

const description = 'What number is missing in the progression?';

const generateProgression = (firstElement, progressionLength, progressionStep) => {
  const progression = [firstElement];
  for (let i = 1; i <= progressionLength; i += 1) {
    progression.push(progression[i - 1] + progressionStep);
  }
  return progression;
};

const getElemProg = (progression, index) => progression[index];

const genQuestionGame = (progression, index) => {
  const progWithHiddenElem = progression;
  progWithHiddenElem[index] = '..';
  return progWithHiddenElem.join(' ');
};

const genGameProgression = () => {
  const progressionLength = getRandomNum(10, 16);
  const progressionStep = getRandomNum(2, 10);
  const firstElement = getRandomNum(1, 30);
  const indexHiddenElem = getRandomNum(0, progressionLength - 1);
  const progression = generateProgression(firstElement, progressionLength, progressionStep);
  const rightAnswer = String(getElemProg(progression, indexHiddenElem));
  const question = genQuestionGame(progression, indexHiddenElem);

  return cons(question, rightAnswer);
};

export default () => buildGame(description, genGameProgression);
