`use strict:`;
const screen = document.querySelector('.screen--txt');
const btn__numbers = document.querySelectorAll('button');
const screenFont = document.getElementById(`screenfont`);

let num1 = null;
let num2 = null;
let doMath;
let numbersOne = [];
let numbersTwo = [];
let total = [];
let finished = false;
let btn__num;
let mem = null;
let maxNum = [];
let maxNumTwo = [];
let symbol;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const reset = () => {
  num1 = null;
  num2 = null;
  doMath = '';
  numbersOne = [];
  numbersTwo = [];
  total = [];
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
    if (num1 !== null) {
      screen.textContent = `${num1} ${symbol} `;
      mem = operate(num1, num2);
    }
  } else if (mem !== null) {
    num1 = Math.round(mem * 10) / 10;
    screen.textContent = Math.round(mem * 10) / 10;
  }
  numbersTwo = [];
  numbersOne = [];
};
const numberInputButtons = () => {
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

    screen.textContent = `${num1} ${symbol} ${num2 !== null ? num2 : ``}`;
    mem = operate(num1, num2);
    maxNumTwo.push(btn__num.classList[0]);
    scaleFontSize(maxNumTwo);
    total.push(mem);
  }
};
const numberInputKeyboard = () => {
  if (mem === null) {
    numbersOne.push(keyNumber);
    num1 = Number(numbersOne.join(''));
    screenNumber = num1;
    screen.textContent = num1;
    maxNum.push(keyNumber);
    scaleFontSize(maxNum);
  } else if (num1 !== null) {
    numbersTwo.push(keyNumber);
    num2 = Number(numbersTwo.join(''));

    screen.textContent = `${num1} ${symbol} ${num2 !== null ? num2 : ``}`;
    mem = operate(num1, num2);
    maxNumTwo.push(keyNumber);
    scaleFontSize(maxNumTwo);
    total.push(mem);
  }
};
btn__numbers.forEach((button) => {
  button.addEventListener('click', (e) => {
    btn__num = e.target;
    if (btn__num.classList.contains('numbers')) {
      numberInputButtons();
      // if (mem === null) {
      //   numbersOne.push(btn__num.classList[0]);
      //   num1 = Number(numbersOne.join(''));
      //   screenNumber = num1;
      //   screen.textContent = num1;
      //   maxNum.push(btn__num.classList[0]);
      //   scaleFontSize(maxNum);
      // } else if (num1 !== null) {
      //   numbersTwo.push(btn__num.classList[0]);
      //   num2 = Number(numbersTwo.join(''));

      //   screen.textContent = `${num1} ${symbol} ${num2 !== null ? num2 : ``}`;
      //   mem = operate(num1, num2);
      //   maxNumTwo.push(btn__num.classList[0]);
      //   scaleFontSize(maxNumTwo);
      //   total.push(mem);
      // }
    }
  });
});

document.querySelector('.add').addEventListener('click', () => {
  doMath = add;
  symbol = `+`;
  calc();
});
document.querySelector('.subtract').addEventListener('click', () => {
  doMath = subtract;
  symbol = `-`;
  calc();
});
document.querySelector('.multiply').addEventListener('click', () => {
  doMath = multiply;
  symbol = `*`;
  calc();
});
document.querySelector('.divide').addEventListener('click', () => {
  doMath = divide;
  symbol = `/`;
  numbersTwo.push(btn__num.classList[0]);
  num2 = Number(numbersTwo.join(''));
  calc();
});

document.querySelector('.equals').addEventListener('click', () => {
  total.push(mem);
  scaleFontSize(total);
  screen.textContent = Math.round(mem * 10) / 10;
});

document.querySelector('.clear').addEventListener('click', () => {
  reset();
  screen.textContent = 'Do maths';
});
document.querySelector('.back').addEventListener('click', () => {});

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

//Keyboard

let keyNumber;
const operatorArr = [`+`, `-`, `/`, `*`];
const operatorPressed = (e) => {
  let symbol = e.key;
  // console.log(operatorArr);
  operatorArr.forEach((operate) => {
    if (operate === symbol) {
      console.log(operate);
    }
  });
};
const keyPressed = (e) => {
  // console.log(e);
  if (
    (e.keyCode >= 49 && e.keyCode <= 57) ||
    (e.keyCode >= 97 && e.key <= 105)
  ) {
    keyNumber = Number(e.key);
    numberInputKeyboard();
  }
};

// const keyPressedNum = (e) => {
//   if (e.keyCode >= 97 && e.key <= 105) {
//     keyNumber = Number(e.key);
//     numberInputKeyboard();
//   }
// };
// document.addEventListener('keydown', keyPressedNum);
document.addEventListener('keydown', keyPressed);
document.addEventListener('keydown', operatorPressed);
