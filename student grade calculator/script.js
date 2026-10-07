// get the elements from html
const nameInput = document.getElementById("name");
const mathInput = document.getElementById("math");
const englishInput = document.getElementById("english");
const scienceInput = document.getElementById("science");

const calculateBtn = document.getElementById("calculateBtn");

const studentName = document.getElementById("studentName");
const average = document.getElementById("average");
const grade = document.getElementById("grade");

// Function to calculate the result

function calculateResult() {
  // Get values from the inputs
  const name = nameInput.value;
  console.log("Students Name: ", name);

  const math = Number(mathInput.value);
  console.log(" Math: ", math);

  const english = Number(englishInput.value);
  console.log(" English: ", english);

  const science = Number(scienceInput.value);
  console.log(" Science: ", science);

  //   calculate the Total
  const total = math + english + science;

  // calculate the average
  const averageMark = total / 3;

  //   Determine grade
  let studentGrade;
  if (averageMark >= 80) {
    studentGrade = "A";
  } else if (averageMark >= 70) {
    studentGrade = "B";
  } else if (averageMark >= 60) {
    studentGrade = "C";
  } else if (averageMark >= 50) {
    studentGrade = "D";
  } else {
    studentGrade = "E";
  }

  //   Display the results
  studentName.textContent = name;
  average.textContent = averageMark.toFixed(2);
  grade.textContent = studentGrade;
}

// Run the function when the button is clicked
calculateBtn.addEventListener("click", calculateResult);
