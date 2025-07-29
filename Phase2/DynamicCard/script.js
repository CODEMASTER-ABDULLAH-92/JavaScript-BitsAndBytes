let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let body = document.body;
form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let card = document.createElement("div");
  card.classList.add("card");

  let profile = document.createElement("div");
  profile.classList.add("profile");

  let img = document.createElement("img");
  img.setAttribute("src", inputs[0].value);

  let h1 = document.createElement("h1");
  h1.innerText = inputs[1].value;
  let h2 = document.createElement("h2");
  h2.innerText = inputs[2].value;
  let h6 = document.createElement("h6");
  h6.innerText = inputs[3].value;


//   appending the elements 

card.appendChild(profile);
profile.appendChild(img);
card.appendChild(h1);
card.appendChild(h2);
card.appendChild(h6);
console.log(inputs);

inputs.forEach(function(evt){
    if (evt.type !== "submit") {
        evt.value = "";
    }
})
body.appendChild(card);
});
