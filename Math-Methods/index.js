// ✅ Math.floor(x)
// It rounds down the value to the nearest smaller whole number.
// Even if the decimal is .9, it will go down (e.g., 4.9 becomes 4).
console.log(Math.floor(4.5));     // Output: 4
console.log(Math.floor(4.10));    // Output: 4

// ✅ Using Math.floor() with Math.random()
// This gives a random number from 0 to 9 (inclusive)
console.log(Math.floor(Math.random() * 10));


// ✅ Function to generate a strong random password
function generatePassword(length) {
    const digits = "0123456789";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%^&*";
    
    // Combine all character types
    let allChar = digits + lowercase + uppercase + symbols;
    let password = "";

    for (let i = 0; i < length; i++) {
        // Math.random() gives a value between 0 and 0.999...
        // Multiply by allChar.length to get a value like 0 to 71
        // Math.floor(...) turns that into an integer index
        // allChar[randomIndex] returns one random character
        let randomPass = allChar[Math.floor(Math.random() * allChar.length)];

        password += randomPass;
    }

    console.log("Random Number Example: ", Math.random()); // Example: 0.8471
    console.log("Generated Password: ", password);
}

generatePassword(10); // Generate a 10-character password



// ✅ Math.min()
// Returns the minimum value among the numbers
let arr = [1, 2, 3, 4, 5];
let min = Math.min(...arr); // Use spread operator to pass array elements
console.log("Minimum value:", min); // Output: 1

console.log(Math.min(1, 2, 3, 4)); // Output: 1



// ✅ Math.trunc()
// Removes the decimal part and returns the integer portion only
console.log(Math.trunc(4.88));   // Output: 4
console.log(Math.trunc(-4.88));  // Output: -4


/*
📝 NOTES:

🔹 Math.floor(x)
   → Always rounds down to the nearest whole number
   → Example: 4.9 → 4

🔹 Math.random()
   → Gives a value between 0 (inclusive) and 1 (exclusive)
   → Multiply by a number to scale it, then use Math.floor() to get an integer

🔹 Math.min(...arr)
   → Use the spread operator (...) to get the smallest number in an array

🔹 Math.trunc(x)
   → Simply cuts off the decimal part of a number
   → Does not round, just drops the fractional part

🔹 Password Generator
   → Combines digits, lowercase, uppercase, and symbols
   → Picks a random character in each loop to build a password
*/

