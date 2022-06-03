// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  const words = str.split(' ');
  words.forEach((value, index, self) => {
    let chars = [...value];
    let temp = chars.shift();
    chars.push(temp, 'a', 'y');
    words[index] = chars.join('');
  });
  return words.join(' ');
}
