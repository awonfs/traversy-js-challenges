const countOccurrences = require("./count-occurrences");

test("Count Occurrences of a Character", () => {
  expect(countOccurrences("hello", "l")).toBe(2);
  expect(countOccurrences("programming", "m")).toBe(2);
  expect(countOccurrences("banana", "a")).toBe(3);
  expect(countOccurrences("InGa", "g")).toBe(1);
  expect(countOccurrences("Loki the cat is the best cat there is", "e")).toBe(
    5
  );
});
