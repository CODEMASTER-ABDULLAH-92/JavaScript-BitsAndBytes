// 🟢 if
// It checks a condition. If the condition is true, the code runs.

// 🟡 else if
// It checks another condition if the first if is false.

// 🔵 if - else if
// Used when you want to check multiple conditions, one after another.

// 👉 if
let name = "abdullah";
if (name === "abdullah") {
  console.log("Correct");
}

// 👉 else if
let age = 18;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// 👉 if else if
let marks = 85;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 80) {
  console.log("Grade B");
} else {
  console.log("Grade C or below");
}

const dayNumber = 3; // Let's assume 0 = Sunday, 1 = Monday, ..., 6 = Saturday

switch (dayNumber) {
  case 0:
    // If dayNumber is 0
    console.log("Sunday");
    break; // Exit the switch after executing this case

  case 1:
    // If dayNumber is 1
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;

  default:
    // If none of the cases match
    console.log("Invalid day number");
    break;
}

// ternary operator

let numbers = 45;

let grade =
  numbers >= 90
    ? "A"
    : numbers >= 80
    ? "B"
    : numbers >= 70
    ? "C"
    : numbers >= 60
    ? "D"
    : "E";
console.log(grade);


