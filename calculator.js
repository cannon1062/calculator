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
let initialState = true;
let delay = false;

numButtons.forEach((numButton) => {
    numButton.addEventListener('click', () => {
        if (display.textContent === '0' || inputToggle === false) {
            display.textContent = numButton.getAttribute('value');
            activeNumber = +display.textContent;
            secondNumber = activeNumber;
            inputToggle = true;
            initialState = false;
        } else if(display.textContent.length < 12) {
            display.textContent += numButton.getAttribute('value');
            activeNumber = +display.textContent;
            secondNumber = activeNumber;
        }
    })
})

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        if (initialState === false) {
            inputToggle = false;
            if (firstNumber === '') {
                activeNumber = +display.textContent;
                firstNumber = activeNumber;
                operator = operatorButton.getAttribute('value');
                return;
            }
            if (firstNumber && secondNumber && !delay) {
                let result = operate(+firstNumber, +secondNumber, operator);
                display.textContent = result.toString().slice(0, 12);
                firstNumber = result;
                secondNumber = '';
                operator = operatorButton.getAttribute('value');
                return;
            }
            delay = false;
            operator = operatorButton.getAttribute('value');
        }
    });
});
decimalButton.addEventListener('click', () => {
    if (inputToggle === false) {
        display.textContent = '0.';
        inputToggle = true;
        return;
    }
    if (!display.textContent.includes('.')) {
        display.textContent += '.';
    }
})

plusMinusButton.addEventListener('click', () => {
    display.textContent *= -1;
    secondNumber = -secondNumber;
})

percentButton.addEventListener('click', () => {
    display.textContent = parseFloat((display.textContent/100).toFixed(10));
})

clearButton.addEventListener('click', () => {
    display.textContent = '0';
    firstNumber = '';
    secondNumber = '';
    activeNumber = '';
    operator = '';
    inputToggle = true;
    initialState = true;
})

equalsButton.addEventListener('click', () => {
    if (initialState === false && firstNumber && inputToggle === true) {
        let result = operate(+firstNumber, +secondNumber, operator);
        display.textContent = result.toString().slice(0, 12);
        firstNumber = result;
        delay = true;
    }
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
    if (+b === 0) {
        return 'DIV BY ZERO';
    }
    return a / b;
}