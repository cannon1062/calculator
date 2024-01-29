const display = document.querySelector('.display-area');
const numButtons = document.querySelectorAll('.num-button');
const clearButton = document.querySelector('.clear-button');
const decimalButton = document.querySelector('.decimal-button');
const plusMinusButton = document.querySelector('.plus-minus-button');
const percentButton = document.querySelector('.percent-button');

numButtons.forEach((numButton) => {
    numButton.addEventListener('click', () => {
        if (display.textContent === '0') {
            display.textContent = numButton.getAttribute('value');
        } else if(display.textContent.length < 12) {
            display.textContent += numButton.getAttribute('value');
        }
    })
})

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