// const vowels = ["a", "e", "i", "o", "u"];

const translate = (dialogue) => {
  dialogue = dialogue.toLowerCase();
  wordArr = dialogue.split(" "); // this splits the phrase at each space!
  const vowelsRegex = /[aeiou]/;
  const pigArray = [];
  wordArr.forEach((word) => {
    if (/[0-9@&$#!]/.test(word)) {
      pigArray.push(word);
    } else if (vowelsRegex.test(word[0])) {
      pigArray.push(word + "way");
    } else {
      const index = word.search(vowelsRegex);
      pigArray.push(word.slice(index) + word.slice(0, index) + "ay");
    }
  });
  return pigArray.join(" ");
};

// const translate = (word) => {
//   // if the input word has a number or an @ symbol, split back the input unchanged
//   if (/[0-9@]/.test(word)) {
//     return word;
//   }
//   word = word.toLowerCase();
//   // if the word's character at index 0 === anything in the vowels array, return wordway!
//   if (vowels.includes(word[0])) {
//     return `${word}way`;
//   } else {
//     let index = 0;
//     // start at index 0, while the current index placement hasn't reached the end- continue, change the index placement to +1;
//     for (let i = 0; i < word.length; i++) {
//       // loops through the word and stores the index of the first vowel it finds!
//       if (vowels.includes(word[i])) {
//         index = i;
//         const firstPart = word.slice(0, index); // start the slice at index 0, end the slice at BUT NOT INCLUDING the index
//         const secondPart = word.slice(index); // start the slice at the index until the end!!
//         return `${secondPart}${firstPart}ay`;
//       }
//     }
//   }
// };

// const translate = (word) => {
//  if(vowels.includes(word[0])){
//      return `${word}way;
// } else {
//      const wordArray = word.split(""); // ["s", "p", "a", "c", "e"]
//      const index = wordArray.findIndex((char) => vowels.includes(char))
//      return word.slice(index) + word.slice(0, index) + "ay";
// }}

module.exports = { translate };
