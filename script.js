`use strict:`;
const screen = document.querySelector('.screen--txt');
const btn__numbers = document.querySelectorAll('button');
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
let finished = false;
let btn__num;

const reset = () => {
  num1 = null;
  num2 = null;
  temp = '';
  screenNumber;
  numbers = [];
  total;
};
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
    case divide:
      result = divide(num1, num2);
      break;
  }
  return result;
};
const calc = () => {
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
};

btn__numbers.forEach((button) => {
  button.addEventListener('click', (e) => {
    btn__num = e.target;
    if (btn__num.classList.contains('numbers')) {
      numbers.push(btn__num.classList[0]);
      screenNumber = Number(numbers.join(''));
      screen.textContent = screenNumber;
    }
  });
});

document.querySelector('.add').addEventListener('click', () => {
  temp = add;
  finished ?? reset();
  calc();
});
document.querySelector('.subtract').addEventListener('click', () => {
  temp = subtract;
  finished ?? reset();
  calc();
});
document.querySelector('.multiply').addEventListener('click', () => {
  temp = multiply;
  finished ?? reset();
  calc();
});
document.querySelector('.divide').addEventListener('click', () => {
  temp = divide;
  finished ?? reset();
  calc();
});

document.querySelector('.equals').addEventListener('click', () => {
  finished = true;
  num2 = screenNumber;
  total = operate(num1, num2);
  screen.textContent = total;
  num1 = total;
  num2 = null;
  if (num2 === screenNumber) {
    num2 = null;
  }
  reset();
});
