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

// checkForTie();
  }

  // function checkForTie(){
  //   if ($('[data-cell]').text( !=== ''){
  //     $('#announce-winner').text(`It's A Tie!`)
  //     }
  //   }
});