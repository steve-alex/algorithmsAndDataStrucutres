const map = (array, fn) => {
  const answer = [];
  for (let i = 0; i < array.length; i++) {
    answer.push(fn(array[i]));
  }
  return answer;
};

const double = num => 2 * num;
const squareAndMinusFive = num => num ** 2 - 5;