function findMaxNumber(arr) {
  let max;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1] || arr[i] === arr[i - 1]) {
      max = arr[i];
    }
  }
  return max;
}

module.exports = findMaxNumber;
