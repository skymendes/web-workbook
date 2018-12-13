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
    //var array = ".wholeBoard"
    //var newArray = $.makeArray(array)
//console.log(newArray);
    // for(i=0; i<moles.length; i++){

    // }
    
    // var score = ".score"
    clearBoard();
//Setting mole to change color when clicked
//Switching mole back to black after 2s
    $(moles).each(function(index){
        $("#mole" + index).click(function () {
            $("#mole" + index).css("background-color", "rgb(255,20,147)");
            setTimeout(function() {
                $("#mole" + index).css("background-color", 'black');
            },getRandomTimeout());   
            checkForWin();
        });  
    }); 
    function checkForWin() {
        if($("#mole0").css("background-color") === ("rgb(255,20,147)") &&
            $("#mole1").css("background-color") === ("rgb(255,20,147)") &&
            $("#mole2").css("background-color") === ("rgb(255,20,147)") &&
            $("#mole3").css("background-color") === ("rgb(255,20,147)") &&
            $("#mole4").css("background-color") === ("rgb(255,20,147)") && 
            $("#mole5").css("background-color") === ("rgb(255,20,147)") &&
            $("#mole6").css("background-color") === ("rgb(255,20,147)") &&
            $("#mole7").css("background-color") === ("rgb(255,20,147)") &&
            $("#mole8").css("background-color") === ("rgb(255,20,147)")){
        $("#winner").text('You Win!');
        }
    }
    function getRandomTimeout() {
        return Math.floor((Math.random()*5500) +2500);
    }
    clearTimeout(checkForWin);
    function clearBoard(){
        $(document).ready(function(){
            $('#reset').click(function(){
                location.reload();
            });
        });
    }
});