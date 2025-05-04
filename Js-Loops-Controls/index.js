// for(let i = 1; i <= 10; i++){
//     console.log("Number: ",i);
// }

const { log } = require("console");




// for of Loop 

const name = ["abdullah", "rajab", "ali", "afaq"]
for(let names of name){
    console.log(names);
}

// output 
// abdullah
// rajab
// ali
// afaq

//  for in loop


const person = {name:"abdullah", age:"22Y", fatherName:"sabir ali"}

// for(let key in person){
//     console.log(key, "=> ", person[key]); 
// }

const str = "abdullahSabir"
for(let chars of str){
    console.log(chars);
}

// const items = [10, 20, 30, 40, 50];

// for (let item of items) {
//   if (item === 30) {
//     console.log("Found 30, stopping loop");
//     break;
//   }
//   console.log("Checking item:", item);


const items = [10,20,30,40]

for(let item of items){
    if (item === 30) {
        
    }
}
// continue
// => Skips the current loop and continues
// => When you want to skip specific cases

// break
// => Exits the loop completely
// => When you want to stop looping early
