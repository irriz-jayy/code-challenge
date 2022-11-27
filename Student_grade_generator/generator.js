//This creates a dialog box with a prompt to input marks by student.
let marks = prompt("Please input marks");
console.log(`The marks input is: ${marks}.`);

//Creates validation and grading of marks input into the dialog box.
function studentGradeGenerator(marks) {
  if (marks >= 0 && marks <= 39) {
    console.log("Grade E.");
  } else if (marks >= 40 && marks <= 49) {
    console.log("Grade D.");
  } else if (marks >= 50 && marks <= 59) {
    console.log("Grade C.");
  } else if (marks >= 60 && marks <= 79) {
    console.log("Grade B.");
  } else if (marks >= 80 && marks <= 100) {
    console.log("Grade A.");
  } else {
    console.log("Value not recognized!");
  }
}

//calls the previous validation function and prints marks onto the console
studentGradeGenerator(marks);
