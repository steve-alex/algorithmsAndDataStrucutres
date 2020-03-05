// const efficientLooping = (arr) => {
//   const obj = {}
//   let result = true;

//   for (let i = 0; i < arr.length; i++){
//     if (object[arr[i]]){
//       result = false;
//     } else {
//       obj[arr[i]] = false;
//     }
//   }

//   return result;
// }

const unefficientLooping = (arr) => {
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++){
      console.log([i, j]);
    }
  }
}

unefficientLooping([1, 2, 3, 4])