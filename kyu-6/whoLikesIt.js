// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names) {
  if (names && names.length > 1) {
    let text = '';
    if (names.length === 1) {
      return `${names[0]} likes this`;
    } else if (names.length === 2) {
      text = names.join(' and ');
    } else if (names.length <= 4) {
      text = `${names.slice(0, 2).join(', ')} and ${names[2]}`;
    } else {
      text = `${names.slice(0, 2).join(', ')} and ${names.length - 2} others`;
    }

    if (!text) return 'no one likes this';
    return text + ' like this';
  }

  return 'no one likes this';
}
