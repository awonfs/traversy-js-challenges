function findMissingNumber(nums) {
  const compareNumbers = (a, b) => a - b;
  const sorted = nums.sort(compareNumbers);
}

module.exports = findMissingNumber;
