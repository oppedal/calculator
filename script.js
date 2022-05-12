`use strict:`;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;
let num1 = 2;
let num2 = 3;
let temp = multiply;
const operate = (num1, num2) => {
  let result;
  switch (temp) {
    case add:
      result = add(num1, num2);
      break;
    case subtract:
      result = subtract(num1, num2);
      break;
    case multiply:
      result = multiply(num1, num2);
      break;
  }
  return result;
};

console.log(operate(3, 2));
