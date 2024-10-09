const container = document.querySelector(".container");

let initialNumber=16;
let side=  (800)/initialNumber+ "px";

for (let i=0;i<=(initialNumber**2)-1;i++){
    var box = document.createElement("div");
    box.className = `box`;
    box.style.minWidth = side;
    box.style.minHeight = side;
    container.appendChild(box);
   console.log(i)
}

