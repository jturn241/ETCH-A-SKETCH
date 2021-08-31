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

makeRows(30, 30);

gridDraw();

function reset () {
    let papa = document.getElementById("container")
    papa.querySelectorAll('*').forEach(n => n.remove());
    let x = parseInt(prompt("Please enter grid size of 100 or less"));
    while(!Number.isInteger(x) || x > 100) {
        x = parseInt(prompt("Please enter a valid number of 100 or less"));
    };
    makeRows(x, x);
    gridDraw(); 
};

var stopColor;

function gridDrawRandom() {
    stopColor = setTimeout(() =>{gridDrawRandom();}, 3000);
    const squares = document.querySelectorAll("divs");
    squares.forEach(function(squares) {
        squares.addEventListener("mouseenter", function() {
            this.style.backgroundColor = randomRGB();
        });
    });
};

function eraser() {
    clearTimeout(stopColor);
    const squares = document.querySelectorAll("divs");
    squares.forEach(function(squares) {
        squares.addEventListener("mouseenter", () => {
            squares.classList.add('clear');
        });
    });
};

function randomRGB() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")"
    return bgColor;
}; 

function randomColorReset() {
    let papa = document.getElementById("container")
    papa.querySelectorAll('*').forEach(n => n.remove());
    let x = parseInt(prompt("Please enter grid size of 100 or less"));
    while(!Number.isInteger(x) || x > 100) {
        x = parseInt(prompt("Please enter a valid number of 100 or less"));
    };
    makeRows(x, x);
    gridDrawRandom();
};