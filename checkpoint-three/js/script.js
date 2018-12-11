'use strict'
//clicking function for moles
//if mole is orange
//click changes to black and add point
//change board value to show mole has been whacked

//check for win
//check all values
//if all whacked - announce win

//create timer for mole to switch

$(document).ready(function() {
    var gameboard = ".board"
    var moles = ".mole"
    var score = ".score"
//Setting mole to change color when clicked
//Switching mole back to black after 2s
$(moles).click(function () {
    var v = $(this).text();
    $(this).css("background-color", 'red');
    setTimeout(function(){
        $(moles).css("background-color", 'black');
    },8000);
});

if($("#mole1").css("background-color") === "red"){
    console.log(($("winner").text(`You Win!`)));
}
});