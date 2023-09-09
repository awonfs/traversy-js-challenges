function countVowels(string) {
  const lowerCasedString = string.toLowerCase();
  let counter = 0;
  for (let i = 0; i < lowerCasedString.length; i++) {
    const char = lowerCasedString[i];
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      counter++;
    }
  }
  return counter;
}

module.exports = countVowels;
