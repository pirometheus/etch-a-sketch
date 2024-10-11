const container = document.querySelector(".container");
const body = document.querySelector("body");

let initialNumber=25;
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
    let isClicked = false;

    box.addEventListener("mouseover", () => {
        if (!isClicked) {
            box.style.backgroundColor = "black";   
        }
    });

    //First click makes the box black
    box.addEventListener("mouseout", () => {
        if (!isClicked) {
            box.style.backgroundColor = "rgb(241, 241, 177)";
        }
    });
    
    // Second click makes it yellow again
    let clickCount = 0;
    box.addEventListener("click", () => {
        isClicked = true;
        if (clickCount % 2){
            box.style.backgroundColor = "rgb(241, 241, 177)";
        } else {
            box.style.backgroundColor = "black";
        }
        clickCount++;
    });

    
});


// This is my test div
// const div = document.createElement("div"); 
// div.style.border= "1px solid black";
// div.style.padding= "50px";
// body.appendChild(div)
// div.addEventListener("mouseover",()=>{
//     div.style.backgroundColor= "red";
// });

// div.addEventListener("mouseout",()=>{
//     div.style.backgroundColor= " rgb(241, 241, 177)";
// })
