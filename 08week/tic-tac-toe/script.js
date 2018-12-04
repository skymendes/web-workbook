'use strict';

$(document).ready(function() {
  // let playerone = 'x';
  // let playertwo = 'o';
  let play = 'x';
  var count = 0;
  let gamestate = 0;
  $('[data-cell]').on('click', function() {
    if($(this).text() === '' && gamestate === 0){
    $(this).text(play);
    count++;
    checkForWin(count);
    if(play === 'o'){
      play = 'x';
    }else{
      play = 'o'
    }
  }
    clearBoard();
  
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
        gamestate = 1;
    }else if 
      ($('[data-cell="3"]').text() === play &&
      $('[data-cell="4"]').text() === play &&
      $('[data-cell="5"]').text() === play){

        $('#announce-winner').text(`${play} Wins!`);
        gamestate = 1;
    }else if
      ($('[data-cell="6"]').text() === play &&
      $('[data-cell="7"]').text() === play &&
      $('[data-cell="8"]').text() === play){

        $('#announce-winner').text(`${play} Wins!`);
        gamestate = 1;
    }else if
      ($('[data-cell="0"]').text() === play &&
      $('[data-cell="3"]').text() === play &&
      $('[data-cell="6"]').text() === play){

        $('#announce-winner').text(`${play} Wins!`);
        gamestate = 1;
    }else if
    ($('[data-cell="1"]').text() === play &&
      $('[data-cell="4"]').text() === play &&
      $('[data-cell="7"]').text() === play){

        $('#announce-winner').text(`${play} Wins!`);
        gamestate = 1;
    }else if
      ($('[data-cell="2"]').text() === play &&
      $('[data-cell="5"]').text() === play &&
      $('[data-cell="8"]').text() === play){

        $('#announce-winner').text(`${play} Wins!`);
        gamestate = 1;
    }else if
    ($('[data-cell="0"]').text() === play &&
      $('[data-cell="4"]').text() === play &&
      $('[data-cell="8"]').text() === play){

        $('#announce-winner').text(`${play} Wins!`);
        gamestate = 1;
    }else if
    ($('[data-cell="2"]').text() === play &&
      $('[data-cell="4"]').text() === play &&
      $('[data-cell="6"]').text() === play){

        $('#announce-winner').text(`${play} Wins!`);
        gamestate = 1;
      }
    }

function clearBoard(){
  $(document).ready(function(){
    $('#clear').click(function(){
      location.reload();
    });
  });
}

});