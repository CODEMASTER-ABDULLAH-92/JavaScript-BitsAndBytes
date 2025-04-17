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
