// Generate a secret number between 1 and 10
let secretNumber = Math.floor(Math.random() * 10) + 1;
console.log("Secret Random Number is: ", secretNumber);

// Get HTML elements
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");

// fUNCTION TO CHECK THE PLAYERS GUESS

function checkGuess() {
  const guess = Number(guessInput.value);
  console.log("The user Guessed this number: ", guess);

  if (guess < 1 || guess > 10) {
    message.textContent = "Enter a number between 1 and 10";
  } else if (guess === secretNumber) {
    message.textContent = "🎉Correct! You won!";
  } else if (guess > secretNumber) {
    message.textContent = "Too high! Try again.";
  } else {
    message.textContent = "Too low! Try again";
  }
}

// Function to start a new game
function playAgain() {
  secretNumber = Math.floor(Math.random() * 10) + 1;
  guessInput.value = "";
  message.textContent = "";
}

guessButton.addEventListener("click", checkGuess);
playAgainButton.addEventListener("click", playAgain);
