const solution = (A) => {
  const uniqueHolidays = getUniqueHolidays(A);
  let shortest = A.length;
  for (let i = 0; i < A.length; i++){
    for (let j = i + 1; j <= A.length; j++){
      let slice = A.slice(i, j);
      let temp = [...uniqueHolidays]
      const found = temp.every(a => slice.includes(a))
      if (found){
        if (slice.length < shortest){
          shortest = slice.length
        }
      }
    }
  }
  return shortest;
}

const getUniqueHolidays = (A) => {
  const holidays = {}
  A.forEach(item => {
    if (holidays[item]){
      holidays[item] +=1;
    } else {
      holidays[item] = 1;
    }
  })
  return Object.keys(holidays).map(item => Number(item));
}
