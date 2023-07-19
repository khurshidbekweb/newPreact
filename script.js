"use strict"
let toggleMine = document.querySelector(".toggle")
let toggle = document.querySelector(".toggleAcaid");

toggleMine.addEventListener("click", () =>{
    toggle.classList.toggle("display");
    console.log(toggle.classList);
})
toggle.setAttribute("class", "what up")
console.log(toggle.getAttribute("class"));

