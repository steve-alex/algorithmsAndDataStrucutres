function calcProductArray(arr){
  let totalArray = [];
  for (let i = 0; i < arr.length; i++){
    let modifiedArray = [...arr]
    modifiedArray.splice(i, 1);
    let total = modifiedArray.reduce((a, b) => a + b);
    totalArray.push(total)
  }
 return totalArray
}

function calcProductArray1(arr){
  
}

console.log(calcProductArray([1, 2, 1, 10, 5]))
