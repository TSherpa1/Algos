// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(strng) {
  let incrementedString = "";
  let numStr = "";
  let hasNum = false;
  for (let i = 0; i < strng.length; i++) {
    if (!isNaN(Number(strng[i]))) {
      numStr += Number(strng[i]);
      hasNum = true;
    } else {
      numStr = "";
    }
  }
  let sliceIdx = Number(numStr).toString().length;
  if (hasNum === true) {
    if (strng[strng.length - 1] === "9" && strng.includes("0")) {
      incrementedString = strng.substring(0, strng.length - sliceIdx - 1);
    } else {
      incrementedString = strng.substring(0, strng.length - sliceIdx);
    }
    let newNum;
    if (Number(numStr) === 0) {
      newNum = "1";
    } else {
      newNum = Number(numStr) + 1;
    }
    incrementedString += newNum;
  } else {
    incrementedString += `${strng}1`;
  }
  return incrementedString;
}
