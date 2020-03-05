var pascalsTriangle = function(n) {
  let triangle = [];
  let cache = {};
  for (let i = 1; i <= n; i++){
    triangle.push(nthRowPascalsTriangle(i, cache));
  }
  return triangle;
};



const nthRowPascalsTriangle = (n, cache) => {
  let row = [];
  row[0] = 1;
  row[n - 1] = 1;
  for (let i = 1; i < n - 1; i++) {
    if (i in cache){
      let previousTriangle = cache[i];
      row[i] = previousTriangle[i] + previousTriangle[i - 1];
    } else {
      cache[i] = nthRowPascalsTriangle(n);
      let previousTriangle = cache[i];
      row[i] = previousTriangle[i] + previousTriangle[i - 1];
    }
  }

  return row;
};
console.log(pascalsTriangle(3));
console.log
