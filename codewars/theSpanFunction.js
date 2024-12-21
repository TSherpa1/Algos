// The span function is a good one to know. It accepts a sequence and a predicate function and returns two sequences.
// The first sequence contains all the elements of the argument sequence up to the item that caused the first failure of the predicate.
// The second returned sequence contains the rest of the original sequence. The original sequence is not modified.

// For example,
// function isEven (x) {
//   return Math.abs(x) % 2 === 0;
// }
// var arr = [2,4,6,1,8,10];
// // This is true
// span(arr, isEven) === [[2,4,6],[1,8,10]]

// link: https://www.codewars.com/kata/54f2f335cb9d99e8530008d7

function span(arr, predicate) {
  let array1 = [];
  let array2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      array1.push(arr[i]);
    } else {
      array2 = arr.slice(i);
      break;
    }
  }
  return [array1, array2];
}
