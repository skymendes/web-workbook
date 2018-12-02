'use strict';

$(document).ready(function() {
  // let playerone = 'x';
  // let playertwo = 'o';
  let play = 'x';
  var count = 0;
  $('[data-cell]').on('click', function() {
    if ($(this).text() === '');
    $(this).text(play);
    count++;
    checkForWin(count);
    if(play === 'o'){
      play = 'x';
    }else{
      play = 'o'
    }
    clearBoard();
    // checkForTie();
  })
  function checkForWin(tie){
    if(tie === 9){
      $('#announce-winner').text(`It's a tie! Try again`)
    }
  
    if
      ($('[data-cell="0"]').text() === play &&
      $('[data-cell="1"]').text() === play &&
      $('[data-cell="2"]').text() === play){
      
        $('#announce-winner').text(`${play} Wins!`);
    }else if 
      ($('[data-cell="3"]').text() === play &&
      $('[data-cell="4"]').text() === play &&
      $('[data-cell="5"]').text() === play){

        $('#announce-winner').text(`${play} Wins!`);
    }else if
      ($('[data-cell="6"]').text() === play &&
      $('[data-cell="7"]').text() === play &&
      $('[data-cell="8"]').text() === play){

        $('#announce-winner').text(`${play} Wins!`);
    }else if
      ($('[data-cell="0"]').text() === play &&
      $('[data-cell="3"]').text() === play &&
      $('[data-cell="6"]').text() === play){

        $('#announce-winner').text(`${play} Wins!`);
    }else if
    ($('[data-cell="1"]').text() === play &&
      $('[data-cell="4"]').text() === play &&
      $('[data-cell="7"]').text() === play){

        $('#announce-winner').text(`${play} Wins!`);
    }else if
      ($('[data-cell="2"]').text() === play &&
      $('[data-cell="5"]').text() === play &&
      $('[data-cell="8"]').text() === play){

        $('#announce-winner').text(`${play} Wins!`);
    }else if
    ($('[data-cell="0"]').text() === play &&
      $('[data-cell="4"]').text() === play &&
      $('[data-cell="8"]').text() === play){

        $('#announce-winner').text(`${play} Wins!`);
    }else if
    ($('[data-cell="2"]').text() === play &&
      $('[data-cell="4"]').text() === play &&
      $('[data-cell="6"]').text() === play){

        $('#announce-winner').text(`${play} Wins!`);
      }
      if('[data-cell]' !==0){
        return false;
      }
  }
  // function checkForTie(){

    // var tie = (!checkForWin);
    // for (var i = 0; i < 9; i++){
    //   if(!$('[data-cell]').text()){
    //   $('#announce-winner').text(`try again!`);
    // }
  
    // var count = 0;
    // for(let i = 0; i < 9; i++){
    //   if(!$('[data-cell]').text()){
    //     count++;
    // if ('[data-cell]' === ''){
    // $('#announce-winner').text(`try again!`);
    // }
  // }

function clearBoard(){
  $(document).ready(function(){
    $('#clear').click(function(){
      location.reload();
    });
  });
}

});