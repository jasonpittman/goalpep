$(function () {
 	$('#goalPepTree a').addClass('nohighlight').append("&#160;").prepend("&#160;");
 	$('#panel-content a').addClass('nohighlight').append("&#160;").prepend("&#160;");
	
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
		//event.preventDefault();
		var name = $(this).html();

		$('#panel-content a').html(name);
		$('#panel-content a').removeClass('highlight').addClass('nohighlight');
		
		return false;
	});

	$('#goalPepTree a').hover(
	  function () {
	    $(this).removeClass('nohighlight').addClass('highlight');
	  }, 
	  function () {
	    $(this).removeClass('highlight').addClass('nohighlight');
	  }
	);
	
	$('#panel-content a').click(function(event) {
		//event.stopPropagation();
		//event.preventDefault();
		return false;
	});

});