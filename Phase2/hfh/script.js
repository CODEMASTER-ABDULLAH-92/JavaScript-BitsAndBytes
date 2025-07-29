let box = document.querySelector(".box")
window.addEventListener("mousemove", function(evt){
    box.style.top = evt.clientY + "px";
    box.style.left = evt.clientX + "px";
})