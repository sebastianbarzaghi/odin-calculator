// Get the result input element
const previousInput = document.getElementById("previous");
const resultInput = document.getElementById("result");

// Initialize variables and constants for the calculator
let firstOperand = null;
let secondOperand = null;
let operator = null;
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const calculate = document.querySelector(".calculate");
const clear = document.querySelector(".clear");

// Set the event listeners on buttons
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
    // Check if the current value is zero
    if (resultInput.value === "0") {
        // If it is, replace it with the selected number
        resultInput.value = number;
    } else {
        // Else, concatenate it
        resultInput.value += number;
    }
}

// Function to add an operator to the calculator
function addOperator(op) {
    firstOperand = parseFloat(resultInput.value);
    // Check if the current value in the result input ends with an operator
    const lastChar = resultInput.value[resultInput.value.length - 1];
    if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
        // If it does, replace the last operator with the new operator
        resultInput.value = resultInput.value.slice(0, -1) + op;
        operator = op;
    } else {
        // If it doesn't, append the operator to the result input
        resultInput.value += op;
        operator = op;
    }
    // Clear the result input
    resultInput.value = "";
    // Append the operator
    resultInput.value += operator;
    // Update the previous input to display the previous number and operator
    previousInput.value = `${firstOperand} ${operator}`;
}

// Function to clear the result input
function clearResult() {
    resultInput.value = "0";
    firstOperand = null;
    secondOperand = null;
    operator = null;
    previousInput.value = "";
}

// Function to perform the calculation
function calculateResult() {
    if (operator !== null) {
        // Split the result input into an array of operands and operators
        const operands = resultInput.value.split(/[-+*/]/);
        // Extract the second operand from the array
        secondOperand = parseFloat(operands[1]);
        // Initialize the result variable
        let result = null;
        // Check the value of the operator variable and perform the corresponding calculation
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
        // The value property expects a string
        resultInput.value = result.toString();
        // Record the previous input
        previousInput.value = `${firstOperand} ${operator} ${secondOperand} =`;
        // Reset to a clean state for a new calculation
        firstOperand = null;
        secondOperand = null;
        operator = null;
    }
}