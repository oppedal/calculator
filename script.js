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
let finished = false;
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

document.querySelector('.number--1').addEventListener('click', () => {
  numbers.push(1);
  screenNumber = Number(numbers.join(''));
  screen.textContent = screenNumber;
});
document.querySelector('.number--2').addEventListener('click', () => {
  numbers.push(2);
  screenNumber = Number(numbers.join(''));
  screen.textContent = screenNumber;
});
document.querySelector('.number--3').addEventListener('click', () => {
  numbers.push(3);
  screenNumber = Number(numbers.join(''));
  screen.textContent = screenNumber;
});
document.querySelector('.number--4').addEventListener('click', () => {
  numbers.push(4);
  screenNumber = Number(numbers.join(''));
  screen.textContent = screenNumber;
});
document.querySelector('.number--5').addEventListener('click', () => {
  numbers.push(5);
  screenNumber = Number(numbers.join(''));
  screen.textContent = screenNumber;
});
document.querySelector('.number--6').addEventListener('click', () => {
  numbers.push(6);
  screenNumber = Number(numbers.join(''));
  screen.textContent = screenNumber;
});
document.querySelector('.number--7').addEventListener('click', () => {
  numbers.push(7);
  screenNumber = Number(numbers.join(''));
  screen.textContent = screenNumber;
});
document.querySelector('.number--8').addEventListener('click', () => {
  numbers.push(8);
  screenNumber = Number(numbers.join(''));
  screen.textContent = screenNumber;
});
document.querySelector('.number--9').addEventListener('click', () => {
  numbers.push(9);
  screenNumber = Number(numbers.join(''));
  screen.textContent = screenNumber;
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
