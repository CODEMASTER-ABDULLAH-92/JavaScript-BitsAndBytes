let count = document.querySelector(".count");
let count1 = document.querySelector(".count1");
let count2 = document.querySelector(".count2");
let count3 = document.querySelector(".count3");

let target1 = 89;
let target2 = 78;
let target3 = 22;
let target4 = 45;

let duration = 2000; // total time for animation (ms)
let steps = 100;     // number of updates
let stepTime = duration / steps;

let c1 = 0, c2 = 0, c3 = 0, c4 = 0;

let i = 0;
let interval = setInterval(() => {
    i++;

    // calculate proportional progress
//     🔹 Math.round() in JavaScript
// The function Math.round(x) rounds a number to the nearest integer.
// console.log(Math.round(4.2)); // 4  (because 4.2 is closer to 4)
// console.log(Math.round(4.7)); // 5  (because 4.7 is closer to 5)
// console.log(Math.round(4.5)); // 5  (0.5 and above goes up)
// (i / steps) * target1 produces a decimal value (like 22.36 when progress is ~25%).

// Math.round() converts it into a clean whole number (e.g., 22).

// This way, the counter doesn’t display messy decimal numbers in the UI.

// Math.min  returns the minimum value from list like math.min(3,5,7,10) it returns the 3 
// in below example Math.round((i / steps) * target1) is the first Value and target1 is the second value 

    c1 = Math.min(Math.round((i / steps) * target1), target1);
    c2 = Math.min(Math.round((i / steps) * target2), target2);
    c3 = Math.min(Math.round((i / steps) * target3), target3);
    c4 = Math.min(Math.round((i / steps) * target4), target4);

    count.innerText = c1;
    count1.innerText = c2;
    count2.innerText = c3;
    count3.innerText = c4;

    if (i >= steps) clearInterval(interval);
}, stepTime);
