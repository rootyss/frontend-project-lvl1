import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

const meetingUser = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const roundsCount = 3;

export default (description, importGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = meetingUser();
  console.log(description);

  let rightAnswersCount = 0;

  while (rightAnswersCount < roundsCount) {
    const gameData = importGameData();
    const question = car(gameData);
    const rightAnswer = cdr(gameData);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
      rightAnswersCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
