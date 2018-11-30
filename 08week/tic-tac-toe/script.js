'use strict';

$(document).ready(function() {
  // let playerone = 'x';
  // let playertwo = 'o';
  let play = 'x';

  $('[data-cell]').on('click', function() {
    if ($(this).text() === '');
    $(this).text(play);
    checkForWin();
    if(play === 'o'){
      play = 'x';
    }else{
      play = 'o'
    }
    clearBoard();
  })
  function checkForWin(){

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
      var count = 0;
      for(let i = 0; i < 9; i++){
        if($('[data-cell]').text()){
          count++;
        }
      }
      if(count === 9){
        $('#announce-winner').text(`Try again`);
      }
  }
function clearBoard(){
  $(document).ready(function(){
    $('#clear').click(function(){
      $('[data-cell]').empty();
    });
  });
}

});