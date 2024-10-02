const btn = document.querySelector(".change-grid-btn");
const container = document.querySelector(".container");

btn.addEventListener("click", changeGrid);
let gridSize = 16;

function changeGrid(){
    let gridSize = prompt("Choose grid size, min: 2 and max: 100");
    gridSize = Number(gridSize);

    if (gridSize >= 2 && gridSize <= 100){
        container.innerHTML = '';
        drawGrid(gridSize);
    } else 
        alert("minimum 2 and maximum 100");
    
}

function drawGrid(gridSize){
    for (let i = 0; i < gridSize; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0; j < gridSize; j++){
            const col = document.createElement("div");
            row.appendChild(col);
            col.classList.add("col");
            col.addEventListener("mouseover", () => {
                col.style["backgroundColor"] = randomColor();
            });
        }
    }
}

function randomColor(){
    return `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
}

drawGrid(gridSize);