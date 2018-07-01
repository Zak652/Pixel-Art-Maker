// Select color input
var pixelColor;
// Select size input
// get Number of rows entered by user
var rows;
// get Number of columns entered by user
var columns;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function() {
    // Pick values after user submits
    rows = $('#inputHeight').val();
    columns = $('#inputWeight').val();
    // Call grid maker
    makeGrid(event);
});

function makeGrid(event){

    // First remove grid if any
    $('tr').remove();
    $('#canvas').removeClass();

    // Identify grid area
    var grid = $('#pixelCanvas');

    // Creat rows by looping through given number
        for(var r = 1; r <= rows; r++){
            //create row as child to table element
            $(grid).append('<tr></tr>');
                
            // Create columns by looping through given number
            for(var c = 1; c <= columns; c++){
                // create columns as children to row above
                $('tr:last').append('<td></td>');
                // add class attribute 
                $('td').attr('class', 'pixel');
                }
            }
        $('#canvas').attr('class', 'canvas-wrapper');
        event.preventDefault();

        // Pixel painting
        $('.pixel').click(function(event){
            pixelColor = $('#colorPicker').val();
            $(event.target).css('background-color', pixelColor);
        });
};