// let firstNumber = +prompt('enter first number');
// let operator = prompt('enter operator');
// let secondNumber = +prompt('enter second number');

// console.log(operate(firstNumber, secondNumber, operator));

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