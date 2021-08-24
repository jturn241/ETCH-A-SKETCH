const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("divs");
        container.appendChild(cell).className = "grid-item";
    }
} 

makeRows(16, 16);

const squares = document.querySelectorAll("divs");

squares.forEach(function(squares) {
    squares.addEventListener("mouseenter", () => {
        squares.classList.add('final');
    });
});


function reset () {
    let papa = document.getElementById("container")
    papa.querySelectorAll('*').forEach(n => n.remove());
};
