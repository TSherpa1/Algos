// Implement a function that returns the minimal and the maximal value of a list (in this order).

// link: https://www.codewars.com/kata/57a1ae8c7cb1f31e4e000130

function getMinMax(arr) {
  let minMaxArray = [];
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return [min, max];
}
