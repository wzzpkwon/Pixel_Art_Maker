// Select color input
var colorSelector = document.getElementById('colorPicker');
// Select size input
var gridHeight = document.getElementById('inputHeight');
var gridWidth = document.getElementById('inputWidth');
// When size is submitted by the user, call makeGrid()
/**
 * @desc a function that pulls height and width of the grid from users' input
 * @param {string} e = an event object to prevent default behavior of submit event handler
 */
document.getElementById('sizePicker').addEventListener('submit', function(e) {
    e.preventDefault();
    const rows = gridHeight.value;
    const columns = gridWidth.value;

    makeGrid(rows, columns);
});

// set the table
const designCanvas = document.getElementById('pixelCanvas');

/**
 * @desc a function to create a grid based on the size selected by the user
 * @param int rows = number of rows representing the height of the grid
 * @param int columns = number of columns representing the width of the grid
 */
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
}

// An event listener to color the grid when the user clicks cell(s) in the grid
designCanvas.addEventListener('click', function(e) {
    const color = colorSelector.value;
    e.target.style.backgroundColor = color;
});
