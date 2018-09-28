// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let counts = {};
  let maxChar = str[0];

  for (let i = 0; i < str.length; i++){
    let char = str[i];
    counts[char] = counts[char] + 1 || 1;
    if (counts[char] > counts[maxChar]){
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
