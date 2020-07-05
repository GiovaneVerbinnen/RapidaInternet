
$(function(){   
	var nav = $('#menu');   
	$(window).scroll(function () { 
		if ($(this).scrollTop() > 100) { 
			nav.addClass("menu-fixo");
			//$('body').css('padding-top', 70);
		} else { 
			nav.removeClass("menu-fixo"); 
			//$('body').css('padding-top', 0);
		} 
	});  
});