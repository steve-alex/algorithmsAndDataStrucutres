const times10 = (n) => {n * 10}

const cache = {};

const memoTimes10 = (n) => {
  if (n in cache){
    console.log('Fetching from cache:', n);
    return cache[n]
  } else {
    console.log('Calculating result');
    let result = times10(n)
    cache[n] = result;
    return result;
  }
};

