const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("divs");
        container.appendChild(cell).className = "grid-item";
    }
} 

function gridDraw() {
    const squares = document.querySelectorAll("divs");
    squares.forEach(function(squares) {
        squares.addEventListener("mouseenter", () => {
            squares.classList.add('final');
        });
    });
};

makeRows(16, 16);

gridDraw();

function reset () {
    let papa = document.getElementById("container")
    papa.querySelectorAll('*').forEach(n => n.remove());
    let x = parseInt(prompt("Please enter grid size of 40 or less"));
    while(!Number.isInteger(x) || x > 40) {
        x = parseInt(prompt("Please enter a valid number"));
    };
    makeRows(x, x);
    gridDraw(); 
};
