const arr1 = [1, 2, 1, 2, 1, 2, 1]
const arr2 = [4, 5, 10, 45]

const subArraySum2 = (n) => {
  
}

const subArraySum1 = (n) => {
  let count = 0;
  for (let i=0; i< arr1.length; i++){
    for (let j=0; j<arr1.length; j++){
      let sum = 0;
      arr1.slice(i, j + 1).forEach(num => {
        sum += num
      })
      if (sum === n) {
        count += 1
      }
    }
  }
  return count;
}

console.log(subArraySum(4))