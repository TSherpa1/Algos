// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

// link: https://www.codewars.com/kata/52fba66badcd10859f00097e

function disemvowel(str) {
  let newStr = "";
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;
}
