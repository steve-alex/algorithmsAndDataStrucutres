const quickSort = nums => {
  if (nums.length < 2) return nums;

  const pivot = nums[nums.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < nums.length - 1; i++){
    if (nums[i] < pivot){
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }

  return [...quickSort(left), ...quickSort(right)]
}