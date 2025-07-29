// ================================
// 📘 DOM Selection & Manipulation
// ================================

// ✅ 1. Selecting multiple elements by class name
let h = document.getElementsByClassName("abcd");

// 'h' is an HTMLCollection, so we access elements using index
h[0].innerText = "Hello gee";
h[1].innerText = "Hello gee 2";

// ❗ This won't work: h.innerText → because h is a collection, not a single element
console.log(h); // Outputs a live HTMLCollection of elements with class "abcd"

// ✅ 2. Selecting a single element using querySelector (modern way)
let abcd = document.querySelector(".abcd");

// ===========================
// 🔹 innerHTML vs outerHTML
// ===========================

// innerHTML only changes the content **inside** the selected element
abcd.innerHTML = "<i>Abdullah Bhai</i>";
// Result: <h1 class="abcd"><i>Abdullah Bhai</i></h1>

// outerHTML replaces the **entire** element including the tag
abcd.outerHTML = "<p>hee</p>";
// Result: <p>hee</p> replaces <h1 class="abcd">...</h1>

// ✅ 3. Hiding an element using `.hidden` property
abcd.hidden = true; // Hides the element from the page

// ======================================
// 📘 Attribute Manipulation in DOM
// ======================================

// 👉 What is an Attribute?
// An attribute in HTML gives extra info about an element.
// It exists in name/value pairs like: <img src="..." alt="...">

// ✅ 4. Selecting an <img> element
let img = document.querySelector("img");

// ✅ setAttribute(name, value)
// Used to set or change any attribute of an element
img.setAttribute("alt", "Good image");
img.setAttribute("src", "https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg");

// ✅ getAttribute(name)
// Used to read the value of a specific attribute
console.log(img.getAttribute("alt")); // Output: Good image
console.log(img.getAttribute("src")); // Output: image URL

// ✅ removeAttribute(name)
// Used to remove an attribute from an element
img.removeAttribute("alt");
img.removeAttribute("src");










// Create the Element 
let newElement = document.querySelector(".newElement");
let h1 = document.createElement("h1");
h1.innerText = "Hello Abdullah";
newElement.prepend(h1);
// h1.remove(); We can remove the element because of this 




// Style 
h1.style.color="red";
h1.style.background="white"


// if we wants to adds the much more styling we needs to use the classList 


// ClassList 
let newDiv = document.createElement("div");
newElement.appendChild(newDiv);
newDiv.classList.add("nn")

let newH1 = document.createElement("h1");
h1.innerText="JS Mastery | By Abdullah";
newDiv.prepend(newDiv);




