const uniqSort = arr => {
  let duplicates = {};
  let uniqArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!duplicates[arr[i]]) {
      duplicates[arr[i]] = true;
      uniqArray.push(arr[i]);
    }
  }
  return uniqArray.sort((a, b) => a - b);
};

console.log(uniqSort([1, 2, 1, 1, 2, 1, 1]));
