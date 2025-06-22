
// ==============================================
// 📚 JavaScript Arrays & Strings - Complete Notes
// ==============================================

// ========================
// 📦 What is an Array?
// ========================

// ✅ An array is a special variable that can hold multiple values.
// ✅ It stores values in an **ordered list**, accessible via index (starting from 0).

let fruits = ["apple", "banana", "mango"];
console.log("First fruit:", fruits[0]); // apple


// Array Methods 

// ✅ PUSH Method
// Adds an element to the end of the array
let arr1 = [1, 2, 3];
arr1.push(4);
console.log("Push:", arr1); // [1, 2, 3, 4]

// ✅ POP Method
// Removes the last element from the array
let arr2 = [1, 2, 3];
arr2.pop();
console.log("Pop:", arr2); // [1, 2]

// ✅ UNSHIFT Method
// Adds an element at the beginning of the array
let arr3 = [2, 3, 4];
arr3.unshift(1);
console.log("Unshift:", arr3); // [1, 2, 3, 4]

// ✅ SHIFT Method
// Removes the first element from the array
let arr4 = [1, 2, 3];
arr4.shift();
console.log("Shift:", arr4); // [2, 3]

// ✅ CONCAT Method
// Merges two or more arrays into a new one
let a = [1, 2];
let b = [3, 4];
let combined = a.concat(b);
console.log("Concat:", combined); // [1, 2, 3, 4]

// ✅ SLICE Method
// Returns a shallow copy from start to (but not including) end index
let arr5 = [10, 20, 30, 40, 50];
console.log("Slice:", arr5.slice(1, 4)); // [20, 30, 40]

// ✅ SPLICE Method
// Used to remove or add items to an array

// Remove elements
let arr6 = [1, 2, 3, 4, 5];
arr6.splice(2, 2); // Remove 2 elements from index 2
console.log("Splice - Remove:", arr6); // [1, 2, 5]

// Add elements
let arr7 = [1, 2, 5];
arr7.splice(2, 0, 3, 4); // Add at index 2
console.log("Splice - Add:", arr7); // [1, 2, 3, 4, 5]

// ✅ INCLUDES Method
// Checks if an element exists in the array
let arr8 = [10, 20, 30];
console.log("Includes 20?", arr8.includes(20)); // true
console.log("Includes 50?", arr8.includes(50)); // false

// ✅ FIND Method
// Returns the first element that satisfies the condition
let arr9 = [1, 5, 10, 15];
console.log("Find > 6:", arr9.find((num) => num > 6)); // 10

// ✅ FINDINDEX Method
// Returns the index of the first element that satisfies the condition
console.log("FindIndex > 6:", arr9.findIndex((num) => num > 6)); // 2

// ✅ FILTER Method
// Returns a new array with elements that match the condition
let arr10 = [1, 2, 3, 4, 5, 6];
console.log("Filter evens:", arr10.filter((num) => num % 2 === 0)); // [2, 4, 6]

// ✅ MAP Method
// Creates a new array by applying a function to each element
console.log("Map *2:", arr10.map((num) => num * 2)); // [2, 4, 6, 8, 10, 12]

// ✅ FOREACH Method
// Executes a function on each element (does NOT return a new array)
arr10.forEach((num) => {
  console.log("ForEach *2:", num * 2);
});

// ✅ REVERSE Method
// Reverses the array in place
let arr11 = [1, 2, 3];
arr11.reverse();
console.log("Reverse:", arr11); // [3, 2, 1]

// ✅ REDUCE Method
// Reduces array to a single value using a reducer function
let arr12 = [1, 2, 3, 4];
let sum = arr12.reduce((acc, curr) => acc + curr);
console.log("Reduce Sum:", sum); // 10

// ✅ SORT Method
// Sorts array values. Needs compare function for numbers
let arr13 = [737, 299, 19, 90, 45];
let sorted = arr13.sort((a, b) => a - b); // Ascending
console.log("Sort Ascending:", sorted); // [19, 45, 90, 299, 737]

// Explanation:
// a - b < 0 => a comes before b
// a - b > 0 => b comes before a
// a - b === 0 => no change

// ✅ SOME Method
// Returns true if **at least one** element satisfies the condition
let arr14 = [1, 3, 5, 6];
console.log("Some even?", arr14.some((num) => num % 2 === 0)); // true

// ✅ EVERY Method
// Returns true if **all** elements satisfy the condition
let arr15 = [2, 4, 6];
console.log("Every even?", arr15.every((num) => num % 2 === 0)); // true

// ✅ JOIN Method
// Joins all array elements into a string (with optional separator)
let arr16 = ["a", "b", "c"];
console.log("Join:", arr16.join(",")); // "a,b,c"
console.log("Join - no sep:", arr16.join("")); // "abc"
console.log("Join with - :", arr16.join("-")); // "a-b-c"
