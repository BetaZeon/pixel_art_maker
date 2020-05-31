"use strict";

const $tableElement = $('#pixelCanvas');
const $inputh = $('#inputh');  // Storing grid h value
const $inputw = $('#inputw');  // Storing grid w value
const $colorPicker = $('#colorPicker');  //Storing color value
// this sets the size of grid
$('#pickingSize').submit( event => {
    event.preventDefault();

    let w = $inputw.val();
    let h = $inputh.val();

    //$tableElement.html('');

    createGrid(h, w);
    cellClickListener();
});
//Function to change color of pixel when clicked.
function cellClickListener() {
    // When the cell is clicked, the background color changes to the selected color
    $('td').click( event => {
        let color = $colorPicker.val();
        $(event.currentTarget).css("background-color", color)
    });
};

function createGrid(h, w) {
    //Loop to Insert row
    for(let x = 0; x < h; x++) {
        $tableElement.append('<tr></tr>');
    };

    //Loop to Insert Column

    for(let x = 0; x < w; x++) {
        $('tr').append('<td></td>');
    };
};

createGrid(10, 10);   //This creates a 10x10 grid by default.
