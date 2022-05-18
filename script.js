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
    console.log(`Buttons mem ${mem}`);
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
    //Push numbers to check length of string
    maxNum.push(keyNumber);
    scaleFontSize(maxNum);
  } else if (num1 !== null) {
    mem = num1;
    numbersTwo.push(keyNumber);
    num2 = Number(numbersTwo.join(''));

    screen.textContent = `${num1} ${symbol} ${num2 !== null ? num2 : ``}`;
    // mem = operate(num1, num2);

    //Push numbers to check length of string
    maxNumTwo.push(keyNumber);
    scaleFontSize(maxNumTwo);
    total.push(mem);
  }
};
const back = () => {
  if (mem === null) {
    numbersOne.pop();
    num1 = Number(numbersOne.join(''));
    screenNumber = num1;
    screen.textContent = num1;
    scaleFontSize(numbersOne);
  } else {
    numbersTwo.pop();
    num2 = Number(numbersTwo.join(''));
    scaleFontSizeNumTwo(numbersTwo);

    screen.textContent = `${num1} ${symbol} ${num2 !== null ? num2 : ``}`;
  }
};
btn__numbers.forEach((button) => {
  button.addEventListener('click', (e) => {
    btn__num = e.target;
    if (btn__num.classList.contains('numbers')) {
      numberInputButtons();
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
  scaleFontSize(numbersOne);
});
const clearAll = (e) => {
  if (e.key === `Escape` || e.key === `Delete`) {
    reset();
    screen.textContent = 'Do maths';
    scaleFontSize(numbersOne);
  }
};

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
const scaleFontSizeNumTwo = (arr) => {
  screenFont.style.fontSize = `3.2rem`;
  if (arr.length > 3) {
    screenFont.style.fontSize = `2rem`;
    if (arr.length >= 7) {
      screenFont.style.fontSize = `1.5rem`;
    }
  } else if (arr.length === 0) {
    screenFont.style.fontSize = `3rem`;
  }
};

//Keyboard
const operatorObj = {
  add: `+`,
  subtract: `-`,
  divide: `/`,
  multiply: `*`,
};
const getKeyByValue = (object, symbol) => {
  return Object.keys(object).find((key) => object[key] === symbol);
};

let keyNumber;

const operatorPressed = (e) => {
  Object.values(operatorObj).map((value) => {
    if (e.key === value) {
      symbol = value;
      doMath = getKeyByValue(operatorObj, symbol);
      calc();
    }
  });
};

const keyPressed = (e) => {
  if (
    (e.keyCode >= 49 && e.keyCode <= 57) ||
    (e.keyCode >= 97 && e.key <= 105)
  ) {
    keyNumber = Number(e.key);
    numberInputKeyboard();
  }
};
const equalsPressed = (e) => {
  if (e.keyCode === 61 || e.keyCode === 13) {
    console.log(doMath);

    console.log(`Mem on equals pressed ${mem}`);
    total.push(mem);
    scaleFontSize(total);
    console.log(`num1: ${num1} num2: ${num2}`);
    console.log(total);
    console.log(mem);
    numberInputKeyboard();
    // screen.textContent = Math.round(mem * 10) / 10;
  }
};

const backspace = (e) => {
  if (e.key === `Backspace`) {
    back();
  }
};
document.addEventListener('keydown', keyPressed);
document.addEventListener('keydown', operatorPressed);
document.addEventListener('keydown', equalsPressed);
document.querySelector('.back').addEventListener('click', back);
document.addEventListener('keydown', backspace);
document.addEventListener('keydown', clearAll);
