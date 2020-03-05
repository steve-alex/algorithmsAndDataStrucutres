const stringCompression = (chars) => {
  let count = 1;
  let currentIndex = 0;
  for (let i = 0; i < chars.length - 1; i++){
    if (s[i] !== s[i + 1]){
      if (!count === 1){
  
      }
    } else {
      chars.slice(i, 0);
      count += 1
    }
  }

}


let a = ["a","b","b","b","b","b","b","b","b","b","b","b","b"];
let b = ["a","a","b","b","c","c","c"]
let c = ["a"]

console.log(stringCompression(a))
console.log(stringCompression(b))