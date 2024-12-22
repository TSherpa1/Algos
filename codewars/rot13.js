// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13.
// If there are numbers or special characters included in the string, they should be returned as they are.
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// link: https://www.codewars.com/kata/530e15517bc88ac656000716

function rot13(message) {
  let rot13Str = "";
  let upperCaseArr = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  let lowerCaseArr = [..."abcdefghijklmnopqrstuvwxyz"];
  for (let i = 0; i < message.length; i++) {
    if (upperCaseArr.includes(message[i])) {
      let rot13Idx = upperCaseArr.indexOf(message[i]) + 13;
      if (rot13Idx > 25) {
        rot13Idx -= 26;
      }
      rot13Str += upperCaseArr[rot13Idx];
    } else if (lowerCaseArr.includes(message[i])) {
      let rot13Idx = lowerCaseArr.indexOf(message[i]) + 13;
      if (rot13Idx > 25) {
        rot13Idx -= 26;
      }
      rot13Str += lowerCaseArr[rot13Idx];
    } else {
      rot13Str += message[i];
    }
  }
  return rot13Str;
}
