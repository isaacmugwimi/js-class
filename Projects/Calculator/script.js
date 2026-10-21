const display = document.getElementById("display");
const previousOperand = document.getElementById("previous-operand");
const buttons = document.querySelector(".buttons");
let expression = "";
let justCalculated = false;

// update the display

function updateDisplay() {
  display.value = expression || "0";
}

// Check whether a value is a single digit
function isDigit(value) {
  let response = value >= "0" && value <= "9" && value.length === 1;
  return response;
}

// check  whether the expression contains only allowd characters
function isValidExpression(value) {
  const allowedCharcters = "0123456789+-*/.";
  for (let i = 0; i < value.length; i++) {
    if (!allowedCharcters.includes(value[i])) {
      return false;
    }
  }

  return true;
}

// add a number or operator to the expression
function appendValue(value) {
  if (justCalculated) {
    // Start a new calculation after pressing a number
    if (isDigit(value) || value === ".") {
      expression = "";
      previousOperand.textContent = "";
    }
    justCalculated = false;
  }

  // prevent multiple decimal points in the same number
  if (value === ".") {
    let currentNumber = "";
    for (let i = expression.length - 1; i >= 0; i--) {
      const character = expression[i];

      if (
        character === "+" ||
        character === "-" ||
        character === "*" ||
        character === "/"
      ) {
        break;
      }
      currentNumber = character + currentNumber;
    }
    if (currentNumber.includes(".")) {
      return;
    }
  }

  expression += value;
  updateDisplay();
}

// clear everything
function clearCalculator() {
  expression = "";
  justCalculated = false;
  previousOperand.textContent = "";
  updateDisplay();
}
// Delete the last character
function deleteLast() {
  if (justCalculated) {
    clearCalculator();
    return;
  }

  expression = expression.slice(0, -1);
  updateDisplay();
}

// Calculate the complete expression
function calculateResult() {
  if (expression === "") return;
  if (!isValidExpression(expression)) {
    previousOperand.textContent = "Invalid calculation";
    expression = "Error";
    justCalculated = true;
    updateDisplay();
  } else {
    // Evaluate the expression
    const result = Function(`"use strict"; return(${expression})`)();
    if (typeof result !== "number" || !Number.isFinite(result)) {
      previousOperand.textContent = "Invalid calculation";
      expression = "Error";
      justCalculated = true;
      updateDisplay();
    } else {
      // Display the original expression
      previousOperand.textContent = `${expression}=`;

      // Replace the expression wuth the answer
      expression = String(Number(result.toPrecision(12)));
      justCalculated = true;
      updateDisplay();
    }
  }
}

// Handle button clicks using event delegation
buttons.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (!button || !buttons.contains(button)) {
    return;
  }

  const value = button.textContent.trim();
  // clear button
  if (value === "AC") {
    clearCalculator();
    return;
  }

  // Delete button
  if (value === "DEL") {
    deleteLast();
    return;
  }

  // Equals button
  if (value === "=") {
    calculateResult();
    return;
  }

  // Convert X into the multiplication operator
  if (value === "X") {
    appendValue("*");
    return;
  }
  // Handle arithmetic operators
  if (["+", "-", "/"].includes(value)) {
    appendValue(value);
  }

  // Handle numbers and decimal points
  if (isDigit(value) || value === ".") {
    appendValue(value);
    return;
  }
});

// Initialize the calculator
updateDisplay();
