// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

// Examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

// link: https://www.codewars.com/kata/58235a167a8cb37e1a0000db

function numberOfPairs(gloves) {
  let numPairs = 0;
  let copyGloveArr = [...gloves]; //not allowed to modifiy original array
  for (let i = 0; i < gloves.length; i++) {
    let currGlove = copyGloveArr.shift();
    if (copyGloveArr.includes(currGlove)) {
      const index = copyGloveArr.indexOf(currGlove);
      copyGloveArr.splice(index, 1);
      numPairs++;
    }
  }
  return numPairs;
}
