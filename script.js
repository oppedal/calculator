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
let numbersOne = [];
let numbersTwo = [];
let total;
let finished = false;
let btn__num;
let mem = null;

const reset = () => {
  num1 = null;
  num2 = null;
  doMath = '';
  numbersOne = [];
  numbersTwo = [];
  total;
  mem = null;
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
  if (mem === null) {
    if (num1 !== null) {
      mem = operate(num1, num2);
      console.log(`calc mem if mem IS null = ${mem}`);
    }
  } else if (mem !== null) {
    num1 = mem;

    // mem = operate(num1, num2);
    screen.textContent = mem;
    console.log(`calc mem if mem is not null = ${mem}`);
  }
  numbersTwo = [];
  numbersOne = [];
};

btn__numbers.forEach((button) => {
  button.addEventListener('click', (e) => {
    btn__num = e.target;
    if (btn__num.classList.contains('numbers')) {
      if (mem === null) {
        numbersOne.push(btn__num.classList[0]);
        num1 = Number(numbersOne.join(''));
        screenNumber = num1;
        screen.textContent = num1;
        console.log(num1);
      } else if (num1 !== null) {
        numbersTwo.push(btn__num.classList[0]);
        num2 = Number(numbersTwo.join(''));
        screen.textContent = num2;
        mem = operate(num1, num2);
        console.log(`mem after we input num2 = ${mem}`);
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
  doMath = divide;
  // num2 = screen.textContent;
  // finished ?? reset();

  if (num2 !== null) {
    calc();
    screen.textContent = mem;
  }
});

document.querySelector('.equals').addEventListener('click', () => {
  screen.textContent = mem;
});

document.querySelector('.clear').addEventListener('click', () => {
  reset();
  screen.textContent = '';
});
document.querySelector('.back').addEventListener('click', () => {
  if (mem === null) {
    console.log(numbersOne);
    mem = numbersOne.pop();
    screenNumber = Number(numbersOne.join(''));
    screen.textContent = screenNumber;
  } else {
    numbersTwo.pop();
    screenNumber = Number(numbersTwo.join(''));
    screen.textContent = screenNumber;
  }
});
