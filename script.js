`use strict:`;
const screen = document.querySelector('.screen--txt');
const btn__numbers = document.querySelectorAll('button');
const screenFont = document.getElementById(`screenfont`);
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
let maxNum = [];
let maxNumTwo = [];
let symbol;

const reset = () => {
  num1 = null;
  num2 = null;
  doMath = '';
  numbersOne = [];
  numbersTwo = [];
  total;
  mem = null;
  maxNum = [];
  maxNumTwo = [];
};
const operate = (num1, num2) => {
  maxNum = [];
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
  screen.textContent = ``;
  if (mem === null) {
    console.log((screen.textContent = `${num1} ${symbol}`));
    console.log(symbol);
    if (num1 !== null) {
      screen.textContent = `${num1} ${symbol} `;
      mem = operate(num1, num2);
    }
  } else if (mem !== null) {
    num1 = mem;

    // mem = operate(num1, num2);
    screen.textContent = mem;
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
        maxNum.push(btn__num.classList[0]);
        scaleFontSize(maxNum);
      } else if (num1 !== null) {
        numbersTwo.push(btn__num.classList[0]);
        num2 = Number(numbersTwo.join(''));

        // screen.textContent = num2;
        screen.textContent = `${num1} ${symbol} ${num2 !== null ? num2 : ``}`;
        mem = operate(num1, num2);
        maxNumTwo.push(btn__num.classList[0]);
        scaleFontSize(maxNumTwo);
      }
      if (doMath === divide) {
        console.log(`Divide`);
      }
    }
  });
});

document.querySelector('.add').addEventListener('click', () => {
  doMath = add;
  symbol = `+`;
  // finished ?? reset();
  calc();
  // console.log(`this is the total ${sum}`);
});
document.querySelector('.subtract').addEventListener('click', () => {
  doMath = subtract;
  symbol = `-`;
  // finished ?? reset();
  calc();
});
document.querySelector('.multiply').addEventListener('click', () => {
  doMath = multiply;
  symbol = `*`;

  // finished ?? reset();
  calc();
});
document.querySelector('.divide').addEventListener('click', () => {
  doMath = divide;
  symbol = `/`;
  numbersTwo.push(btn__num.classList[0]);
  num2 = Number(numbersTwo.join(''));
  // screen.textContent = `${num1} ${symbol} ${num2 !== null ? num2 : ``}`;

  console.log(num2);
  console.log(`NumberOne arr = ${numbersOne}`);
  console.log(`NumberTwo arr = ${numbersTwo}`);

  // num2 = screen.textContent;
  // finished ?? reset();
  calc();
  // if (num2 !== null) {

  //   screen.textContent = mem;
  // }
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
    mem = numbersOne.pop();
    screenNumber = Number(numbersOne.join(''));
    screen.textContent = screenNumber;
    maxNum.pop();
  } else {
    numbersTwo.pop();
    screenNumber = Number(numbersTwo.join(''));
    screen.textContent = screenNumber;
    maxNumTwo.pop();
  }
});

const scaleFontSize = (arr) => {
  screenFont.style.fontSize = `3.2rem`;
  if (arr.length >= 5) {
    screenFont.style.fontSize = `2rem`;
    if (arr.length >= 13) {
      screenFont.style.fontSize = `1.5rem`;
    }
  } else if (arr.length === 0) {
    screenFont.style.fontSize = `3rem`;
  }
};
