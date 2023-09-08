function isPalindrome(str) {
  const string = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = string.split("").reverse().join("");
  console.log(string);
  if (string === reversed) {
    return true;
  }
  return false;
}

module.exports = isPalindrome;
