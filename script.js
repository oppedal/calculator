`use strict:`;
const screen = document.querySelector('.screen--txt');
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;
let num1 = null;
let num2 = null;
let temp;
let screenNumber;
let numbers = [];
let total;
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

document.querySelector('.number1').addEventListener('click', () => {
  numbers.push(1);
  screenNumber = Number(numbers.join(''));
  screen.textContent = screenNumber;
});
document.querySelector('.number2').addEventListener('click', () => {
  numbers.push(2);
  screenNumber = Number(numbers.join(''));
  screen.textContent = screenNumber;
});

document.querySelector('.add').addEventListener('click', () => {
  temp = add;
  if (num1 === null) {
    num1 = screenNumber;
  } else if (num1 !== null) {
    num2 = screenNumber;
    let sum = operate(num1, num2);
    num1 = sum;
    screen.textContent = num1;
  }
  numbers = [];
  screenNumber = null;
});
document.querySelector('.subtract').addEventListener('click', () => {
  temp = subtract;
  if (num1 === null) {
    num1 = screenNumber;
  } else if (num1 !== null) {
    num2 = screenNumber;
    let sum = operate(num1, num2);
    num1 = sum;
    screen.textContent = num1;
  }
  numbers = [];
  screenNumber = null;
});

document.querySelector('.equals').addEventListener('click', () => {
  num2 = screenNumber;
  total = operate(num1, num2);
  screen.textContent = total;
  num1 = total;
});
