$(function () {
 	$('#goalPepTree a').toggleClass('nohighlight').append("&#160;").prepend("&#160;");
 	$('#panel_content a').toggleClass('nohighlight').append("&#160;").prepend("&#160;");
	
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
		
	$('#goalPepTree a').click(function(e) {
		var name = $(this).html();
		$('#panel_content a').html(name);

		$('#goalPepTree a').removeClass('select');
		$(this).addClass('select');		
		return false;
	});

	$('#goalPepTree a').hover(
	  function () {
	    $(this).toggleClass('nohighlight highlight');
	  }, 
	  function () {
	    $(this).toggleClass('nohighlight highlight');
	  }
	);
	
	$('#panel-content a').click(function(e) {
		return false;
	});

});