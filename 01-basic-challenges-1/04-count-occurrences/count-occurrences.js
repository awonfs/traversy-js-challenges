function countOccurrences(string, char) {
  let occurance = 0;
  for (const character of string) {
    // Make all the characters lowercase
    const lowerCaseCharacter = character.toLowerCase();
    if (lowerCaseCharacter === char) {
      occurance++;
    }
  }
  return occurance;
}

module.exports = countOccurrences;
