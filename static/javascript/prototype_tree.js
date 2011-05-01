$(document).ready(function(event) {
  $('#goalPepTree ul')
    .hide()
    .prev('span')
    .before('<span></span>')
    .prev()
    .addClass('handle closed')
    .click(function(){
      // plus/minus handle click
      $(this)
        .toggleClass('closed opened')
        .nextAll('ul')
        .toggle();
		})
		
   $('#goalPepTree a').click(function(event) {
		//event.stopPropagation();
		event.preventDefault();
		$('#panel').html('Info Goes Here');
	})
	.hover(
	  function () {
		// console.log('hover');
	    $(this).addClass('highlight');
	  }, 
	  function () {
		// console.log('hover');
	    $(this).removeClass('highlight');
	  })
	
	
});