const container = document.querySelector(".container");
const body = document.querySelector("body");

let initialNumber=3;
let side=  (800)/initialNumber+ "px";

for (let i=0;i<=(initialNumber**2)-1;i++){
    var box = document.createElement("div");
    box.className = "box";
    box.style.width = side;
    box.style.height = side;
    container.appendChild(box);        
}

const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    box.addEventListener("mouseover", () => {
        // Add your desired functionality here
        box.style.backgroundColor = "lightblue"; // Example: Change background color
    });
});

boxes.forEach(box => {
    box.addEventListener("mouseout", () => {
        // Add your desired functionality here
        box.style.backgroundColor = "rgb(241, 241, 177)"; // Example: Change background color
    });
});

// This is my test div
const div = document.createElement("div"); 
div.style.border= "1px solid black";
div.style.padding= "50px";
body.appendChild(div)
div.addEventListener("mouseover",()=>{
    div.style.backgroundColor= "red";
});

div.addEventListener("mouseout",()=>{
    div.style.backgroundColor= " rgb(241, 241, 177)";
})
