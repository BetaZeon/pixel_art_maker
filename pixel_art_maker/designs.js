
const $colorPicker = $('#colorPicker');
// Select size input
var h, w, p;
// When size is submitted by the user, call createGrid()
$("#sizePicker").submit(function (event) {
    event.preventDefault();
    h = $("#inputHeight").val();
    w = $("#inputWidth").val();
    createGrid(h, w);
    addCellClickListener();

});

// Creating table rows and table data
function createGrid(h, w) {
// remove current grid if one exists
    $("tr").remove();
for (var i = 1; i <= h; i++) {
       $("#pixelCanvas").append("<tr></tr>");
           for (var j = 0; j < w; j++) {
             $('tr:last-child').append('<td></td>');
             $('td').attr("class", 'color');
           }
    }
}
// Function to Paint td with color and also remove color
// Adding and removing color to table data
// When table data is clicked by a user, add background color or revert change to table data
    
function addCellClickListener() {
    $('td').click( event => {
        let color = $colorPicker.val();
        $(event.currentTarget).css("background-color", color)
    });
};
