const changeBtn = document.getElementById("changeBtn");
const resetBtn = document.getElementById("resetBtn");
const colorText = document.getElementById("colorText");
// Declare an array of 10 color

const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "cyan",
  "magenta",
  "beige",
  "black",
  "violet",
  "indigo",
];

function changeColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  console.log(randomIndex);
  const selectedColor = colors[randomIndex];
  console.log(selectedColor);
  document.body.style.backgroundColor = selectedColor;
  colorText.textContent = selectedColor;
}

function resetColor() {
  document.body.style.backgroundColor = "white";
  colorText.textContent = "White";
}

changeBtn.addEventListener("click", changeColor);
resetBtn.addEventListener("click", resetColor);
