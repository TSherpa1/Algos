// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:

// eight(dividedBy(three()));

// link: https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

const operators = {
  plus: "+",
  minus: "-",
  times: "*",
  dividedBy: "/",
};

function zero(callback) {
  if (callback) {
    let operation = operators[callback[0]];
    return Math.floor(eval(0 + operation + callback[1]));
  }
  return 0;
}
function one(callback) {
  if (callback) {
    let operation = operators[callback[0]];
    return Math.floor(eval(1 + operation + callback[1]));
  }
  return 1;
}
function two(callback) {
  if (callback) {
    let operation = operators[callback[0]];
    return Math.floor(eval(2 + operation + callback[1]));
  }
  return 2;
}
function three(callback) {
  if (callback) {
    let operation = operators[callback[0]];
    return Math.floor(eval(3 + operation + callback[1]));
  }
  return 3;
}
function four(callback) {
  if (callback) {
    let operation = operators[callback[0]];
    return Math.floor(eval(4 + operation + callback[1]));
  }
  return 4;
}
function five(callback) {
  if (callback) {
    let operation = operators[callback[0]];
    return Math.floor(eval(5 + operation + callback[1]));
  }
  return 5;
}
function six(callback) {
  if (callback) {
    let operation = operators[callback[0]];
    return Math.floor(eval(6 + operation + callback[1]));
  }
  return 6;
}
function seven(callback) {
  if (callback) {
    let operation = operators[callback[0]];
    return Math.floor(eval(7 + operation + callback[1]));
  }
  return 7;
}
function eight(callback) {
  if (callback) {
    let operation = operators[callback[0]];
    return Math.floor(eval(8 + operation + callback[1]));
  }
  return 8;
}
function nine(callback) {
  if (callback) {
    let operation = operators[callback[0]];
    return Math.floor(eval(9 + operation + callback[1]));
  }
  return 9;
}

function plus(operand) {
  return ["plus", operand];
}
function minus(operand) {
  return ["minus", operand];
}
function times(operand) {
  return ["times", operand];
}
function dividedBy(operand) {
  return ["dividedBy", operand];
}
