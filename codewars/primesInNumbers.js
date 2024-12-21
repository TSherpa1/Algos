// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

// link: https://www.codewars.com/kata/54d512e62a5e54c96200019e

function primeFactors(n) {
  let primeFactorStr = "";
  let divisor = 2;
  while (n > 1) {
    let counter = 0;
    while (n % divisor === 0) {
      n /= divisor;
      counter++;
    }
    if (counter > 0) {
      if (counter > 1) {
        primeFactorStr += `(${divisor}**${counter})`;
      } else {
        primeFactorStr += `(${divisor})`;
      }
    }
    divisor++;
  }
  return primeFactorStr;
}
