'use strict';

$(document).ready(function() {
  $('.draggable').draggable({
    revert: 'invalid'
  })
  
  $('#drop-area1, #drop-area2, #drop-area3').droppable({
    drop: function( event, ui ){
    let $last = ($(this).children().last()).data('block');
    let $blockVal = $(ui.draggable).data('block');
    // $(ui.draggable).appendTo(this).attr('style', 'position: "relative"');
    if($blockVal > $last) {
      $(ui.draggable).draggable('option', 'revert', true);
    }else{
      $(ui.draggable).appendTo(this).attr('style', 'position: "relative"');
    }
    checkForWin();
    }
})

function checkForWin(){
if($('[data-stack="3"]').children().length === 4){
  $('#announce-game-won').text(`You Won!`)
}
// would this work?
// if($('[data-stack="3"]') === $('[data-block="100"]'), $('[data-block="75"]'), $('[data-block="50"]'), $('[data-block="25"]')){
//   $('#announce-game-won').text(`You Won!`)
}
});