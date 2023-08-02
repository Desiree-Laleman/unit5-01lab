const vowels = ["a", "e", "i", "o", "u"];
const consonants = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const translate = (word) => {
  word = word.toLowerCase();
  // if the word's character at index 0 === anything in the vowels array, return wordway!
  if (vowels.includes(word[0])) {
    return `${word}way`;
  } else {
    let index = 0;
    // start at index 0, while the current index placement hasn't reached the end- continue, change the index placement to +1;
    for (let i = 0; i < word.length; i++) {
      // loops through the word and stores the index of the first vowel it finds!
      if (vowels.includes(word[i])) {
        index = i;
        const firstPart = word.slice(0, index); // start the slice at index 0, end the slice at BUT NOT INCLUDING the index
        const secondPart = word.slice(index); // start the slice at the index until the end!!
        return `${secondPart}${firstPart}ay`;
      }
    }
  }
};

// const translate = (word) => {
//  if(vowels.includes(word[0])){
//      return `${word}way;
// } else {
//      const wordArray = word.split(""); // ["s", "p", "a", "c", "e"]
//      const index = wordArray.findIndex((char) => vowels.includes(char))
//      return word.slice(index) + word.slice(0, index) + "ay";
// }}

module.exports = { translate };
