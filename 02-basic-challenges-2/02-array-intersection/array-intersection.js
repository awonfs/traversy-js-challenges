function arrayIntersection(arr1, arr2) {
  const duplicates = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.includes(arr2[i])) {
      duplicates.push(arr2[i]);
    }
  }
  return duplicates;
}

module.exports = arrayIntersection;
