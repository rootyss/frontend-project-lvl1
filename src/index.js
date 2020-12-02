import getUserName from './cli.js';

const userName = getUserName();
const gameLogic = (descr, game) => {
  console.log(descr);
  let countRightAnswers = 0;
  while (countRightAnswers < 3) {
    if (game()) countRightAnswers += 1;
  }
  if (countRightAnswers === 3) console.log(`Congratulations, ${userName}!`);
};

export { gameLogic, userName };
