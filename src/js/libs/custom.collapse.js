// Меню-гамбургер
$(function() {
	$('.expand-lnk').on('click', function(){
		$(this).toggleClass("in").next('.expand-block').slideToggle();
	});

});
