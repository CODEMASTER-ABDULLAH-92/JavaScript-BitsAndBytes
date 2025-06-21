// for(let i = 1; i <= 10; i++){
//     console.log("Number: ",i);
// }

// for of Loop 

// const name = ["abdullah", "rajab", "ali", "afaq"]
// for(let names of name){
//     console.log(names);
// }

// output 
// abdullah
// rajab
// ali
// afaq

//  for in loop


// const person = {name:"abdullah", age:"22Y", fatherName:"sabir ali"}

// for(let key in person){
//     console.log(key, "=> ", person[key]); 
// }

// const str = "abdullahSabir"
// for(let chars of str){
//     console.log(chars);
// }

// const items = [10, 20, 30, 40, 50];

// for (let item of items) {
//   if (item === 30) {
//     console.log("Found 30, stopping loop");
//     break;
//   }
//   console.log("Checking item:", item);


// continue
// => Skips the current loop and continues
// => When you want to skip specific cases

// const items = [10,20,30,40]

// for(let item of items){
//     if (item === 30) {
//         continue;
//     }
//     console.log(item);
// }



// break
// const items = [10,20,30,40];
// for(let item of items){
//     if (item == 20) {
//         break;
//     }
//     console.log(item);
// }
// => Exits the loop completely
// => When you want to stop looping early



// =========================

//        Pc 

//==========================

// 🔸 1. for...in Loop — used for objects


// let student = {
//   name: "Rajab",
//   age: 14,
//   class: "9th"
// };
// Student Object ma kEY PASS Kara na value mil rahi hai 



// for(let stu in student){
//     console.log(stu + " " +  student[stu]);
// }


// let car = {
//   brand: "Toyota",
//   model: "Yaris",
//   color: "White",
//   year: 2022
// };

// for(let cars in car  ){
//     console.log(`The ${cars} is ${car[cars]}`);
// }


// let inventory = {
//   "apple": 30,
//   "banana": 45,
//   "orange": 20,
//   "mango": 10
// };

// for(let inven in inventory){
//     console.log(`item: ${inven}, stock ${inventory[inven]}`);
// }


let inventory = {
    apple: 30,
    banana: 45,
    orange: 20,
    mango: 10
  };
  
  let totalStock = 0;
  
  for (let item in inventory) {
    totalStock += inventory[item];  // Add each stock to total
  }
  
  console.log("Total stock in store:", totalStock);
  
  
  
  // 🔹 2. for...of Loop — used for arrays (or strings)
  
  // let fruits = ["🍎", "🍌", "🍇"]; 
  
  // for(let fruit of fruits){
  //     console.log(fruit);
  // }