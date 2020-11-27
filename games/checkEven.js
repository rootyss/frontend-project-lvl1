const giveCondition = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};
const getRandomNum = (max) => Math.floor(Math.random() * Math.floor(max));
const checkEven = (number) => (((number % 2) === 0) ? 'yes' : 'no');

export { checkEven, giveCondition, getRandomNum };
