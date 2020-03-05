const mergeSort = arr => {
  if (arr.length < 2) {
    return arr;
  }

  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle, length);

  return stitch(mergeSort(left), mergeSort(right));
};

const stitch = (left, right) => {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift);
    } else {
      result.push(right.shift);
    }
  }
  
  return [...result, ...left, ...right]
};
