// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping any digit with a value of zero. There cannot be more than 3 identical symbols in a row.

// In Roman numerals:

// 1990 is rendered: 1000=M + 900=CM + 90=XC; resulting in MCMXC.
// 2008 is written as 2000=MM, 8=VIII; or MMVIII.
// 1666 uses each Roman symbol in descending order: MDCLXVI.
// Example:

//    1 -->       "I"
// 1000 -->       "M"
// 1666 --> "MDCLXVI"

// link: https://www.codewars.com/kata/51b62bf6a9c58071c600001b

function solution(number) {
  let romanStr = "";
  if (number / 1000 >= 1) {
    romanStr += convertToRom(number, 1000, "M");
    number %= 1000;
    console.log("1000", number);
  }
  if (number / 500 >= 1) {
    if (number / 900 >= 1) {
      romanStr += "CM";
      number = removeFirstDigit(number);
      if (number === 900) {
        return romanStr;
      }
    } else {
      romanStr += convertToRom(number, 500, "D");
    }
    number %= 500;
    console.log("500", number);
  }
  if (number / 100 >= 1) {
    if (number / 400 >= 1) {
      romanStr += "CD";
      number = removeFirstDigit(number);
      if (number === 400) {
        return romanStr;
      }
    } else {
      romanStr += convertToRom(number, 100, "C");
    }
    number %= 100;
  }
  if (number / 50 >= 1) {
    if (number / 90 >= 1) {
      romanStr += "XC";
      number = removeFirstDigit(number);
      if (number === 90) {
        return romanStr;
      }
    } else {
      romanStr += convertToRom(number, 50, "L");
    }
    number %= 50;
    console.log("50", number);
  }
  if (number / 10 >= 1) {
    if (number / 40 >= 1) {
      romanStr += "XL";
      number = removeFirstDigit(number);
      if (number === 40) {
        return romanStr;
      }
    } else {
      romanStr += convertToRom(number, 10, "X");
    }
    number %= 10;
    console.log("10", number);
  }
  if (number / 5 >= 1) {
    if (number === 9) {
      romanStr += "IX";
      return romanStr;
    } else {
      romanStr += convertToRom(number, 5, "V");
    }
    number %= 5;
    console.log("5", number);
  }
  if (number / 1 >= 1) {
    if (number === 4) {
      romanStr += "IV";
      return romanStr;
    }
    romanStr += convertToRom(number, 1, "I");
    number %= 1;
    console.log("1", number);
  }

  return romanStr;
}

function convertToRom(number, divisor, romanNum) {
  let tempStr = "";
  let num = Math.floor(number / divisor);
  for (let i = 0; i < num; i++) {
    tempStr += romanNum;
  }
  return tempStr;
}

function removeFirstDigit(number) {
  let numString = number.toString();
  let newString = numString.slice(1);
  let newNumber = parseInt(newString);
  return newNumber;
}
