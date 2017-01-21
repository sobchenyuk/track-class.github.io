//  #navigation - это класс у которого будет длбавляться клас fixed 
//когда будет пересикаться верхняя часть экрана над класом .scroll
(function($) {
  $(function() {
    
var scroll = $('.scroll').offset();

console.log(scroll.top)

$(window).scroll(function(){
	            if($(this).scrollTop()>scroll.top){
	                $('#navigation').addClass('fixed');
	            }
	            else if ($(this).scrollTop()<scroll.top){
	                $('#navigation').removeClass('fixed');
	            }
	        });
  });
})(jQuery);