const findKthPositive = function (arr, k) {
  let current = 1;
  let i = 0;

  while (k > 0) {
    if (arr[i] === current) {
      i++;
    } else {
      k--;
    }
    current++;
  }

  return current - 1;
};
console.log(findKthPositive([1, 2, 3, 4], 2));
