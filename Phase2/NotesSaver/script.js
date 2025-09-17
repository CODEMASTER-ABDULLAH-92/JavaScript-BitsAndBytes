// let add_btn = document.querySelector(".add-btn");
// let textArea = document.querySelector("textarea");
// let container = document.querySelector(".container");

// let notes = JSON.parse(localStorage.getItem("Items")) || [];
// add_btn.addEventListener("click", () => {
//     let textAreaValue = textArea.value.trim();
//     let div = document.createElement("div");
//     let textContent = document.createElement("div");
//     let editBtn = document.createElement("button");
//     let deleteBtn = document.createElement("button");
    
    

//     container.appendChild(div);
//     div.classList.add("note");
//     div.appendChild(textContent);
//     textContent.classList.add("note-text");
//     div.appendChild(editBtn);
//     editBtn.classList.add("edit-btn");
//     div.appendChild(deleteBtn);
//     deleteBtn.classList.add("delete-btn");
//     textContent.innerText = textAreaValue;
//     editBtn.innerText = "Edit";
//     deleteBtn.innerText = "Delete";
    
    
//     if (textAreaValue == "") {
//         return alert("Adding the Notes First");
//     }
    
//     textArea.value = "";
    
//     deleteBtn.addEventListener("click", () => {
//         div.remove();
//     });
//     notes.unshift(textAreaValue);
//     localStorage.setItem("Items", JSON.stringify(notes));
//     console.log(localStorage.getItem("Items"));
//     });

//     function fetchNotes(){

//     }

let add_btn = document.querySelector(".add-btn");
let textArea = document.querySelector("textarea");
let container = document.querySelector(".container");

// Load existing notes from localStorage or start with an empty array
let notes = JSON.parse(localStorage.getItem("Items")) || [];

// Function to render all notes
function renderNotes() {
    // container.innerHTML = ""; // clear container to avoid duplicates
    notes.forEach((note, index) => {
        let div = document.createElement("div");
        let textContent = document.createElement("div");
        let editBtn = document.createElement("button");
        let deleteBtn = document.createElement("button");

        container.appendChild(div);
        div.classList.add("note");

        div.appendChild(textContent);
        textContent.classList.add("note-text");
        textContent.innerText = note;

        div.appendChild(editBtn);
        editBtn.classList.add("edit-btn");
        editBtn.innerText = "Edit";

        div.appendChild(deleteBtn);
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerText = "Delete";
    });
}

// Render notes when page loads
renderNotes();

// Add new note
add_btn.addEventListener("click", () => {
    let textAreaValue = textArea.value.trim();

    if (textAreaValue === "") {
        return alert("Adding the Notes First");
    }

    notes.unshift(textAreaValue);
    localStorage.setItem("Items", JSON.stringify(notes));
    textArea.value = "";

    renderNotes(); // refresh the UI
});
