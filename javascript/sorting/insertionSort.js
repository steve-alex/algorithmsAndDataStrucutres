const insertionSort = items => {
  for (let i = 1; i < items.length; i++){
    for (let j = 0; j < i; j++){
      if (nums[i] < num[j]){
        const spliced = nums.splice(i, 1);
        nums.splice(j, 0, spliced[0]);
      }
    }
  }
}