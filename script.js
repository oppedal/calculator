`use strict:`;
const screen = document.querySelector('.screen--txt');
const btn__numbers = document.querySelectorAll('button');
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let num1 = null;
let num2 = null;
let doMath;
let screenNumber;
let screenNumberTwo;
let numbersOne = [];
let numbersTwo = [];
let total;
let finished = false;
let btn__num;
let mem = null;
let sum = null;

const reset = () => {
  num1 = null;
  num2 = null;
  doMath = '';
  screenNumber;
  numbers = [];
  total;
};
const operate = (num1, num2) => {
  let result;
  switch (doMath) {
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
  // if (mem === null) {
  //   if (num1 === null) {
  //     num1 = screenNumber;
  //   } else if (num1 !== null) {
  //     num2 = screenNumber;

  //     let sum = operate(num1, num2);
  //     num1 = sum;
  //     mem = num1;
  //     console.log(mem);
  //     screen.textContent = num1;
  //   }
  // } else {
  //   num2 = screenNumber;
  //   sum = operate(mem, num2);
  // }
  // if (num2 !== null && mem !== null) {
  //   mem.shift();
  //   console.log(mem);
  // }
  if (mem === null) {
    num1 = screenNumber;
    if (num1 !== null) {
      num2 = screenNumberTwo;
      sum = operate(num1, num2);
      mem = sum;
      console.log(sum);
    }
  }

  numbersOne = [];
  screenNumber = null;
};

btn__numbers.forEach((button) => {
  button.addEventListener('click', (e) => {
    btn__num = e.target;
    if (btn__num.classList.contains('numbers')) {
      if (mem === null) {
        numbersOne.push(btn__num.classList[0]);

        screenNumber = Number(numbersOne.join(''));
        num1 = screenNumber;
        screen.textContent = screenNumber;
        // console.log(`First array: ${numbersOne}`);
        // console.log(`This is num1: ${num1}`);
      } else if (num1 !== null) {
        numbersTwo.push(btn__num.classList[0]);

        screenNumberTwo = Number(numbersTwo.join(''));
        num2 = screenNumberTwo;
        screen.textContent = screenNumberTwo;
        mem = operate(num1, num2);
        console.log(`mem: ${mem} num1: ${num1} num2: ${num2}`);
        // console.log(`Second array: ${numbersTwo}`);
        // console.log(`This is num2: ${num2}`);
      } else {
        console.log(mem);
      }
    }
  });
});

document.querySelector('.add').addEventListener('click', () => {
  doMath = add;
  // finished ?? reset();
  calc();
  // console.log(`this is the total ${sum}`);
});
document.querySelector('.subtract').addEventListener('click', () => {
  doMath = subtract;
  // finished ?? reset();
  calc();
});
document.querySelector('.multiply').addEventListener('click', () => {
  doMath = multiply;
  // finished ?? reset();
  calc();
});
document.querySelector('.divide').addEventListener('click', () => {
  temp = divide;
  finished ?? reset();
  calc();
});

document.querySelector('.equals').addEventListener('click', () => {
  // console.log(`this is the memory ${mem}`);
  finished = true;
  num2 = screenNumber;
  total = operate(num1, num2);
  screen.textContent = total;
  num1 = total;
  num2 = null;
  // numbers.push(total);

  if (num2 === screenNumber) {
    num2 = null;
  }
  reset();
});

document.querySelector('.clear').addEventListener('click', () => {
  reset();
  screen.textContent = '';
});
document.querySelector('.back').addEventListener('click', () => {
  numbersOne.pop();
  screenNumber = Number(numbersOne.join(''));
  screen.textContent = screenNumber;
});
