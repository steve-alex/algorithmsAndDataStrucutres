const subarraySumEqualsKfast = (nums, k) => {
  const map = new Map([[0, 1]]);
  let sum = 0;
  let total = 0;
  for (let num of nums) {
      sum = sum + num;
      total += (map.get(sum - k) || 0);
      map.set(sum, (map.get(sum) || 0) + 1);
  }
  
  return total;
};

const subarraySumEqualsKmedium = (arr, k) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++){
    let cumulative = 0;
    for (let j = i; j < arr.length; j++){
      cumulative += arr[j]
      if (cumulative === k){
        count += 1
      }
    }
  }
  return count;
}

const subarraySumEqualsKslow = (arr, k) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length + 1; j++){
      let slice = arr.slice(i, j)
      let sumOfSlice = slice.reduce((a, b) => a + b)
      if (sumOfSlice === k){
        count += 1
      }
    }
  }
  return count;
}

let a = [1,1,1];
console.log(subarraySumEqualsK([1, 1, 1, 1], 2))