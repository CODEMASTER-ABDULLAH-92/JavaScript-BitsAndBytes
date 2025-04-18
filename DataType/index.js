// 🔹 Primitive Data Types

// String
let name = "Abdullah";
console.log("String:", name, "| Type:", typeof name);

// Number
let age = 21;
let pi = 3.14159;
console.log("Number (Integer):", age, "| Type:", typeof age);
console.log("Number (Float):", pi, "| Type:", typeof pi);

// Boolean
let isStudent = true;
console.log("Boolean:", isStudent, "| Type:", typeof isStudent);

// Undefined
let notAssigned;
console.log("Undefined:", notAssigned, "| Type:", typeof notAssigned);

// Null
let emptyValue = null;
console.log("Null:", emptyValue, "| Type:", typeof emptyValue); // typeof null is object (JS quirk)

// BigInt
let bigNumber = 1234567890123456789012345678901234567890n;
console.log("BigInt:", bigNumber, "| Type:", typeof bigNumber);

// Symbol
let sym = Symbol("id");
console.log("Symbol:", sym, "| Type:", typeof sym);


// 🔸 Non-Primitive (Reference) Data Types

// Object
let person = {
  name: "Abdullah",
  age: 21,
  isDeveloper: true,
};
console.log("Object:", person, "| Type:", typeof person);

// Array
let skills = ["JavaScript", "React", "Node.js"];
console.log("Array:", skills, "| Type:", typeof skills); // still 'object'

// Function
function greet() {
  return "Hello, world!";
}
console.log("Function:", greet, "| Type:", typeof greet);

// Extra check for typeof null
console.log("typeof null is:", typeof null); // weird JavaScript behavior => 'object'

// Bonus: typeof operator on all
let types = [name, age, isStudent, notAssigned, emptyValue, bigNumber, sym, person, skills, greet];
types.forEach((item, index) => {
  console.log(`Type of item[${index}]:`, typeof item);
});





// 🔹 Primitive Data Types (Basic Types)
// String:
// Text inside quotes. Example: "Abdullah"
// → Used to store names, sentences, etc.

// Number:
// Can be whole or decimal. Example: 21, 3.14
// → Used for age, price, etc.

// Boolean:
// Only true or false
// → Used for yes/no type answers.

// Undefined:
// A variable declared but not given any value.
// → Means "nothing assigned yet".

// Null:
// Empty value on purpose.
// → Means "nothing" or "cleared".

// BigInt:
// Very large numbers. Ends with n.
// → Used when normal numbers are not enough.

// Symbol:
// Unique and hidden identifiers.
// → Mostly used in advanced coding.

// 🔸 Non-Primitive Data Types (Complex Types)
// Object:
// Stores data in key-value pairs like a mini database.
// → Used for things with many properties like a person (name, age, etc.).

// Array:
// A list of values in square brackets.
// → Used to store multiple items like skills or numbers.

// Function:
// A block of code that does something when called.
// → Used to perform actions or return results.