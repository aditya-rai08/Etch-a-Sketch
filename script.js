
let button = document.querySelector("button");
let container = document.querySelector("#container");
let color=document.querySelector("#color");
let randColor=document.querySelector("#randColor");

let randMode=false;
color.addEventListener("input",()=>{
    randMode=false;
});
randColor.addEventListener("click",()=>{
    randMode=true;
});

function randomColor(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);

    let color=`${r},${g},${b}`;
    return color;
}


button.addEventListener("click", () => {
    container.innerHTML = "";

    let n = Number(prompt("Enter a number between 1 and 100:"));
    while (!Number.isInteger(n) || n<1 || n>100){
        n = Number(prompt("Enter a number between 1 and 100:")); 
    }

    let boxSize = 700 / n;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let box = document.createElement("div");

            box.style.width = `${boxSize}px`;
            box.style.height = `${boxSize}px`;
            box.style.flexShrink="0";
            box.classList.add("box");

            container.appendChild(box);
            
            box.addEventListener("mouseenter",()=>{
                if(randMode===true){
                    box.style.backgroundColor=`rgb(${randomColor()})`;
                }
                else{
                    box.style.backgroundColor=color.value;
                }
                });
        }
    }
});




