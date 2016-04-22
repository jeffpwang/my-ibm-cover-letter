$(function() {
  $('#hidden').hide();
  $('#easter-egg').on('click', function(){
    $('#easter-egg').hide();
    $('#hidden').show();
  });
  $( "#draggable" ).draggable();
  $( "#droppable" ).droppable({
    drop: function( event, ui ) {
      $('#droppable').css('background-image', 'none');
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .html( "" );
    }
  });
});