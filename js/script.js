// Get the result input element
const resultInput = document.getElementById("result");

// Initialize variables for the calculator
let firstOperand = null;
let secondOperand = null;
let operator = null;
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const calculate = document.querySelector(".calculate");
const clear = document.querySelector(".clear");

numbers.forEach(number => {
    number.addEventListener("click", () => addNumber(number.textContent));
});
operators.forEach(operator => {
    operator.addEventListener("click", () => addOperator(operator.textContent));
});
calculate.addEventListener("click", calculateResult);
clear.addEventListener("click", clearResult);


// Function to add a number to the result input
function addNumber(number) {
    if (resultInput.value === "0") {
        resultInput.value = number;
    } else {
        resultInput.value += number;
    }
}

// Function to add an operator to the calculator
function addOperator(op) {
    firstOperand = parseFloat(resultInput.value);
    operator = op;

    if (resultInput.value === "0") {
        resultInput.value = "0";
    } else {
        resultInput.value += operator;
    }
}

// Function to clear the result input
function clearResult() {
    resultInput.value = "0";
    firstOperand = null;
    secondOperand = null;
    operator = null;
}

// Function to perform the calculation
function calculateResult() {
    if (operator !== null) {
        secondOperand = parseFloat(resultInput.value);
        let result = null;
        switch (operator) {
            case "+":
                result = firstOperand + secondOperand;
                break;
            case "-":
                result = firstOperand - secondOperand;
                break;
            case "*":
                result = firstOperand * secondOperand;
                break;
            case "/":
                result = firstOperand / secondOperand;
                break;
        }
        resultInput.value = result.toString();

        firstOperand = result;
        secondOperand = null;
        operator = null;
    }
}