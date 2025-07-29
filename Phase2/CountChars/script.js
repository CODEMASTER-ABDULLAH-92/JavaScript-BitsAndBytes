let inp = document.querySelector("input");
let div = document.querySelector("div");
let p = document.createElement("p");
let count = 0;

inp.addEventListener("input", (evt)=>{
    if (evt.data !==null) {
        count++;
    }
    else{
        if (count >=0) {
            count--;
        }
    }
    console.log(count);
    p.innerText= `Count: ${count}`;
    div.appendChild(p);
})




// Optimzed Version of the code 

// let inp = document.querySelector("input");
// let div = document.querySelector("div");
// let p = document.createElement("p");

// div.appendChild(p); // append once

// inp.addEventListener("input", () => {
//     let count = inp.value.length; // directly count characters
//     p.innerText = `Count: ${count}`;
// });
