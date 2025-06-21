// //carAt 
// //This is also zero-based-index

// // let str = "abdullah";
// // let newString = str.charAt(2);
// // console.log(newString);



// //Length


// // let str = "mara name abdullah hai ";
// // let lengthOfString = str.length;  
// // console.log(lengthOfString); //Output is 23 


 
// //Concat ======>>> Connncting two Strings 

// // let str1 = "Muhammad ";
// // let str2 = "Abdullah ";
// // let str3 = str1.concat(str2);
// // console.log(str3); // Output is Muhammad Abdullah

// //To Upper Case 

// // let str1 = "Muhammad ";
// // let str2 = str1.toUpperCase();
// // console.log(str2); //MUHAMMAD;


// //To Lower case 

// // let str1 = "Muhammad ";
// // let str2 = str1.toLowerCase();
// // console.log(str2); //muhammad;


// // Includes it returns the value true or false 
// // Here we give the substring if the substring exist it return true and vice verse


// // let substring = "ull";
// // let str = "abdullah";
// // console.log(str.includes(substring)); // true



// //Slice 
// // let str = "frontend";
// // console.log(str.slice(0,5)); //front

// //Substrings 

// // let str = "frontend";
// // console.log(str.substring(0,5)); // same as the slice but it does not contain the negative index 


// // let old = "abdullah";
// // let newStr = "rajab";
// // console.log(old.replace(old,newStr));

// //  "code".replace("c", "m") ➝ "mode"


// // let str =  " abdullah ";
// // console.log(str.trim());// trim remove the while spacse from start and end;


// // split 
// // .split() method is used to split a string into an array of substrings

// // let str = "Hello my name is Abdullah";
// // let result = str.split(" ");
// // console.log(result); 
// // Output: ["Hello", "my", "name", "is", "Abdullah"]

// let fruits = "apple,banana,mango";
// let result = fruits.split(",");
// console.log(result); 
// // Output: ["apple", "banana", "mango"]


// =======================
// charAt() Method
// =======================
let str = "abdullah";
let newString = str.charAt(2);  // 'd'
console.log("charAt(2):", newString);

// More examples
console.log("charAt(0):", str.charAt(0)); // 'a'
console.log("Last character:", str.charAt(str.length - 1)); // 'h'


// =======================
// length Property
// =======================
let str2 = "mara name abdullah hai ";
let lengthOfString = str2.length;
console.log("Length:", lengthOfString); // 25


// =======================
// concat() Method
// =======================
let str1 = "Muhammad ";
let str3 = "Abdullah";
let fullName = str1.concat(str3);
console.log("Using concat:", fullName);

// Using + operator
console.log("Using + :", str1 + str3);


// =======================
// toUpperCase() Method
// =======================
let name = "abdullah";
console.log("Uppercase:", name.toUpperCase());


// =======================
// toLowerCase() Method
// =======================
let upperName = "ABDULLAH";
console.log("Lowercase:", upperName.toLowerCase());


// =======================
// includes() Method
// =======================
let text = "abdullah";
console.log("Includes 'dull':", text.includes("dull"));   // true
console.log("Includes 'hello':", text.includes("hello")); // false


// =======================
// slice(start, end) Method
// =======================
let word = "frontend";
console.log("slice(0, 5):", word.slice(0, 5));   // "front"
console.log("slice(-4):", word.slice(-4));       // "end"
console.log("slice(1, -1):", word.slice(1, -1)); // "ronten"


// =======================
// substring(start, end) Method
// =======================
let str4 = "frontend";
console.log("substring(0, 5):", str4.substring(0, 5)); // "front"
console.log("substring(1, 4):", str4.substring(1, 4)); // "ron"


// =======================
// replace() Method
// =======================
let old = "abdullah";
let newStr = "rajab";
console.log("Replace full name:", old.replace(old, newStr)); // rajab

// Replace one character
console.log("Replace 'c' with 'm':", "code".replace("c", "m")); // "mode"


// =======================
// trim() Method
// =======================
let spaced = "   abdullah   ";
console.log("Trimmed:", spaced.trim()); // "abdullah"


// =======================
// split() Method
// =======================
let sentence = "Hello my name is Abdullah";
let words = sentence.split(" ");
console.log("Split by space:", words); 
// ["Hello", "my", "name", "is", "Abdullah"]

let fruits = "apple,banana,mango";
let fruitList = fruits.split(",");
console.log("Split by comma:", fruitList); 
// ["apple", "banana", "mango"]

// Split by character
console.log("Split characters:", "abc".split("")); 
// ["a", "b", "c"]
