function areAllCharactersUnique(str) {
  const set = new Set();
  if (str === "") return true;
  let counter = 0;
  for (let i = 0; i <= str.length; i++) {
    if (!set.has(str[i])) {
      set.add(str[i]);
    } else {
      counter++;
    }
  }
  if (counter > 0) return false;
  else return true;
}

module.exports = areAllCharactersUnique;
