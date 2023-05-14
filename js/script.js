// variables and constants
let firstNum = null;
let currentOperator = null;
let secondNum = null;
let displayValue = null;

const mostRecentOperation = document.querySelector(".mostRecentOperation");
const currentOperation = document.querySelector(".currentOperation");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operation");
const equal = document.querySelector(".calculate");
const clear = document.querySelector(".delete");

digits.forEach(digit => {
    digit.addEventListener("click", appendDigit(digit.textContent));
});

operators.forEach(operator => {
    operator.addEventListener("click", setOperator(operator.textContent));
});

equal.addEventListener("click", calculate);
clear.addEventListener("click", clearDisplay)

// functions
function add(x, y) {
    return (x + y);
};

function subtract(x, y) {
    return (x - y);
};

function multiply(x, y) {
    return (x * y);
};

function divide(x, y) {
    return (x / y);
};

function operate(operator, x, y) {
    if (operator === "+") {
        return add(x, y);
    } else if (operator === "-") {
        return subtract(x, y);
    } else if (operator === "*") {
        return multiply(x, y);
    } else if (operator === "/") {
        return divide(x, y);
    };
};

function appendDigit(digit) {
    if (currentOperation.textContent === "0") {
        clearDisplay();
    }
    currentOperation.textContent += digit;
};

function setOperator(operator) {
    if (currentOperation !== null) {
        calculate();
    };
    firstNum = displayValue;
    currentOperator = operator
    mostRecentOperation.textContent = `${firstNum} ${currentOperator}`
};

function calculate() {
    secondNum = displayValue;
    displayValue = operate(currentOperator, parseFloat(firstNum), parseFloat(secondNum));
    currentOperation.textContent = displayValue;
};

function clearDisplay() {
    displayValue = "";
    currentOperation.textContent = displayValue;
}