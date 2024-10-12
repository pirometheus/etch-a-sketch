const container = document.querySelector(".container");
const body = document.querySelector("body");
const submit = document.querySelector(".submit");
const getInput = document.getElementById("getInput");
const reset = document.querySelector(".reset");
const userInput = document.querySelector(".userInput");
const draw = document.querySelector(".draw");


let initialNumber =16;
let side=  (800)/initialNumber+ "px";
let mouseOverEnabled=false;




function createBoxes() {
    container.innerHTML = "";
    
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
            if (!isClicked || mouseOverEnabled) {
                box.style.backgroundColor = "gray";   
            }
        });
    
        box.addEventListener("mouseout", () => {
            if (!isClicked && !mouseOverEnabled) {
                box.style.backgroundColor = "rgb(241, 241, 177)";
            }
        });
        
        // Second click makes it yellow again
        let clickCount = 0;
        box.addEventListener("click", () => {
            isClicked = !mouseOverEnabled;
            if (clickCount % 2){
                box.style.backgroundColor = "rgb(241, 241, 177)";
            } else {
                box.style.backgroundColor = "black";
            }
            clickCount++;
        });    
    });
};





createBoxes();


submit.addEventListener("click", ()=>{
    initialNumber = document.getElementById("getInput").value;
    side=  (800)/initialNumber+ "px";
    getInput.value="";
    userInput.textContent = `Grid Size: ${initialNumber}x${initialNumber}`;

    createBoxes();
    
});

reset.addEventListener("click",()=>{
    createBoxes();
});





let clickCount2=0;
draw.addEventListener("click",()=>{
    mouseOverEnabled = !mouseOverEnabled;

    if (clickCount2%2){
        draw.textContent = "Activate";
    } else {
        draw.textContent = "Deactivate";
    }
    clickCount2++;
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
