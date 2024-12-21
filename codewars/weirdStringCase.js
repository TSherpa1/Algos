// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"

// link: https://www.codewars.com/kata/52b757663a95b11b3d00062d

function toWeirdCase(string) {
  let tracker = 0;
  let stringArray = string.split("");
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] !== " ") {
      if (tracker % 2 === 0) {
        stringArray[i] = stringArray[i].toUpperCase();
      } else {
        stringArray[i] = stringArray[i].toLowerCase();
      }
      tracker++;
    } else {
      tracker = 0;
    }
  }
  return stringArray.join("");
}
