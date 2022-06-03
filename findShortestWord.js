// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let words = s.split(' ');
  let min = words[0].length;
  words.forEach((value) => {
    if (value.length < min) min = value.length;
  });
  return min;
}
