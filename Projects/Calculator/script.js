const display = document.getElementById("display");
const buttons = document.querySelector(".buttons");

let firstNumber = "";
let operator = "";
// handle button clicks

function handleButtonClick(event) {
  const button = event.target;
  // Ignore clicks outside the buttons
  if (button.tagName !== "BUTTON") return;

  // Enter numbers
  if (button.hasAttribute("data-number")) {
    const number = button.dataset.number;
    if (display.value == "Error") {
      display.value = "";
    }
    if (number === "." && display.value.includes(".")) return;
    display.value += number;
  }

  // select am operator
  if (button.hasAttribute("data-operator")) {
    if (display.value === "" || display.value == "Error") return;

    firstNumber = Number(display.value);
    operator = button.dataset.operator;
    display.value = "";
  }
}

buttons.addEventListener("click", handleButtonClick)
