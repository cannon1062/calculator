const display = document.querySelector('.display-area');
const numButtons = document.querySelectorAll('.num-button');
const clearButton = document.querySelector('.clear-button');
const decimalButton = document.querySelector('.decimal-button');
const plusMinusButton = document.querySelector('.plus-minus-button');
const percentButton = document.querySelector('.percent-button');
const operatorButtons = document.querySelectorAll('.op-button');
const equalsButton = document.querySelector('.equals-button');

let firstNumber = '';
let secondNumber = '';
let activeNumber = '';
let operator = '';
let inputToggle = true;

numButtons.forEach((numButton) => {
    numButton.addEventListener('click', () => {
        if (display.textContent === '0' || inputToggle === false) {
            display.textContent = numButton.getAttribute('value');
            activeNumber = +display.textContent;
            secondNumber = activeNumber;
            inputToggle = true;
        } else if(display.textContent.length < 12) {
            display.textContent += numButton.getAttribute('value');
            activeNumber = +display.textContent;
            secondNumber = activeNumber;
        }
    })
})

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        operator = operatorButton.getAttribute('value');
        inputToggle = false;
        if (firstNumber === '') {
            firstNumber = activeNumber;
            return;
        }
        if (firstNumber && secondNumber) {
            let result = operate(+firstNumber, +secondNumber, operator);
            display.textContent = result;
            firstNumber = result;
            secondNumber = '';
            return;
        }

    });
});
decimalButton.addEventListener('click', () => {
    if (!display.textContent.includes('.')) {
        display.textContent += '.';
    }
})

plusMinusButton.addEventListener('click', () => {
    display.textContent = -display.textContent;
})

percentButton.addEventListener('click', () => {
    display.textContent = parseFloat((display.textContent/100).toFixed(16));
})

clearButton.addEventListener('click', () => {
    display.textContent = '0';
    firstNumber = '';
    secondNumber = '';
    activeNumber = '';
    operator = '';
    inputToggle = true;
})

equalsButton.addEventListener('click', () => {
    display.textContent = operate(+firstNumber, +secondNumber, operator);
})

function operate(firstNumber, secondNumber, operator) {
    switch(operator) {
        case '+':
            return add(firstNumber, secondNumber);

        case '-':
            return subtract(firstNumber, secondNumber);

        case '*':
            return multiply(firstNumber, secondNumber);
            
        case '/':
            return divide(firstNumber, secondNumber);

        default:
            return "Invalid Operator";
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}