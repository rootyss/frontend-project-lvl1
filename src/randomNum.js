export default (min, max) => {
  let a = min;
  let b = max;
  a = Math.ceil(a);
  b = Math.floor(b);
  return Math.floor(Math.random() * (b - a + 1)) + a;
};
