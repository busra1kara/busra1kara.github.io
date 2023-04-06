const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const main = document.querySelector("main");
const path = document.querySelector("path");

btn.addEventListener("click", () => {
    var hex = '#';
    for(let i=0; i<6; i++){
        const randomHex = Math.floor(Math.random() * colors.length);
        hex+=colors[randomHex];
    };
    path.style.fill=hex;
    color.style.color=hex;
    color.innerText=hex;
})