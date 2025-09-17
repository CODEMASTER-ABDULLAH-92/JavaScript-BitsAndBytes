// select all li tag and prints there text using the loop
// Task 1 
let li = document.querySelectorAll("li");
for(let i = 0; i <li.length; i++){
    console.log(li[i].innerText);
}


// Task2 

let ul = document.querySelector("ul");

const listItem = document.createElement("li");
listItem.innerText = "Once the time is gone it's never come again | Tate Work hard and don't waste your single mint."
ul.appendChild(listItem);

