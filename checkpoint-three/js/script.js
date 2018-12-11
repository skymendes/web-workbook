'use strict'

$(document).ready(function() {
    var gameboard = ".board"
    var moles = ".mole"
    clearBoard();
//Setting mole to change color when clicked
//Switching mole back to black after 2s
$(moles).click(function () {
    var v = $(this).text();
// console.log($(this).css('backgroundColor'));
    $(this).css("background-color", 'red');
    setTimeout(function(){
        $(moles).css("background-color", 'black');
    },//getRandomTimeout()
    4000);   

if($("#mole1").css("background-color") === ("rgb(255, 0, 0)") &&
    $("#mole2").css("background-color") === ("rgb(255, 0, 0)") &&
    $("#mole3").css("background-color") === ("rgb(255, 0, 0)") &&
    $("#mole4").css("background-color") === ("rgb(255, 0, 0)") &&
    $("#mole5").css("background-color") === ("rgb(255, 0, 0)") && 
    $("#mole6").css("background-color") === ("rgb(255, 0, 0)") &&
    $("#mole7").css("background-color") === ("rgb(255, 0, 0)") &&
    $("#mole8").css("background-color") === ("rgb(255, 0, 0)") &&
    $("#mole9").css("background-color") === ("rgb(255, 0, 0)")){
$("#winner").text('You Win!');
}
});
// function getRandomTimeout(){
//     return Math.floor(Math.random()*3500+1000);
// }
function clearBoard(){
    $(document).ready(function(){
    $('#reset').click(function(){
        location.reload();
    });
    });
}
});