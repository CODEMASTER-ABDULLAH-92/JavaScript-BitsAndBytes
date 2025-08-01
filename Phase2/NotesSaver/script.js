let input = document.querySelector("input");
let add = document.querySelector(".add");
let cardsContainer = document.getElementById("cardsContainer");

// Load saved items on page load
window.onload = () => {
  let saved = JSON.parse(localStorage.getItem("Items")) || [];
  saved.forEach(item => createCard(item));
};

// Add new note
add.addEventListener("click", () => {
  let inpValue = input.value.trim();
  if (inpValue !== "") {
    let arr = JSON.parse(localStorage.getItem("Items")) || [];
    arr.push(inpValue);
    localStorage.setItem("Items", JSON.stringify(arr));

    createCard(inpValue);
    input.value = "";
  }
});

function createCard(text) {
  let div = document.createElement("div");
  div.classList.add("card");
  div.innerText = text;
  cardsContainer.appendChild(div);
}