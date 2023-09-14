const arrayIntersection = require("./array-intersection");

test("Finding array intersection", () => {
  expect(arrayIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])).toEqual([
    3, 4, 5,
  ]);
  expect(arrayIntersection([10, 20, 30], [30, 40, 50])).toEqual([30]);
  expect(arrayIntersection([1, 2, 3], [4, 5, 6])).toEqual([]);
  expect(
    arrayIntersection(
      [1, 3, 3, 135, 2, 45, 35, 50],
      [4, 5, 6, 9, 10, 2, 50, 135]
    )
  ).toEqual([2, 50, 135]);
});
