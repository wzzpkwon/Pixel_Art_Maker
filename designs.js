// Select color input
var colorSelector = document.getElementById('colorPicker');
// Select size input
var gridHeight = document.getElementById('inputHeight');
var gridWidth = document.getElementById('inputWidth');
// When size is submitted by the user, call makeGrid()
document.getElementById('sizePicker').addEventListener('submit', function(e) {
    e.preventDefault()
    const rows = gridHeight.value;
    const columns = gridWidth.value;

    makeGrid(rows, columns);
});

// set the table
const designCanvas = document.getElementById('pixelCanvas');

// define a function to create a grid based on the size selected by the user
function makeGrid(rows, columns) {
    designCanvas.innerHTML = '';   // to reset the grid
    for (let m = 0; m < rows; m++) {          
        const trElement = document.createElement('tr');
        for (let n = 0; n < columns; n++) {
            const tdElement = document.createElement('td');
            trElement.appendChild(tdElement);
        }
        designCanvas.appendChild(trElement);
    }
};

// color the grid to create pixel art
designCanvas.addEventListener('click', function(e) {
    const color = colorSelector.value;
    e.target.style.backgroundColor = color;
});
