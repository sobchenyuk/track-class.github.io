(function($) {
	$(function() {

	
		
	var scrollTop = $('.scroll').offset();
		scrollTop = scrollTop.top,
		scroll= $(".menu");
	
	console.log(scrollTop)	
		
	$(window).scroll(function(){
		if($(this).scrollTop()>scrollTop){
			scroll.animate({top: '0',},5);
		}
		else if ($(this).scrollTop()<scrollTop){
			scroll.animate({top: '-60',},5);
		}
	});


	});
}(jQuery));
