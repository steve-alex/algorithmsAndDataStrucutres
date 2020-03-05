const bubbleSort = arr => {
  do {
    let swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (nums[i] > nums[i + 1]) {
        let temp = num[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
};

const bubbleSort1 = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
};
