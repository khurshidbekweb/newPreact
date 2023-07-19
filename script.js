"use strict"
// const program = {
//     name: "John",
//     hobbis: ["futball","Animals"],
//     family: {
//         brother: {
//             name:"Gaze",
//             hobbis:["Game", "PGE", "Dance"],
//             age:21,
//         },
//         sister: "Jone",
//     }
// };
// console.log(program);
// let exem = Object.entries(program)
// let exam = Object.fromEntries(exem);
// console.log(Object.entries(program));
// console.log(exam);
// let value = Object.values(program)
// console.log(value);
// let keys = Object.keys(program)
// console.log(keys);



// let a = +prompt("a= ");
// let b = +prompt("b= ");

// let calculator = new Object({
//     add: function(a,b){
//         return a + b;
//     },
//     minus: function(a,b){
//         return a-b;
//     }
// })
// let add = calculator.add(a, b);
// console.log(add);
// console.log(calculator.minus(a,b));
// calculator.divid = function(a,b){
//     return a/b;
// }
// console.log(calculator.divid(a,b));
let box = document.querySelector(".box");

// box.style.width = "300px";
// box.style.height = "300px";
// box.style.backgroundColor = "red";
box.style.cssText = "background-color:green; width:20px; height:20px; ";

window.addEventListener('mousemove', (e) => { 
    console.log(e.clientX);
    console.log(e.clientY);
    box.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
})

