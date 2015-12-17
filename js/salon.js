$(document).ready(function(){

	var sliderWidth = 780;
	var slider = $('#slides');
	var sliderCount = $('div', slider).length;
	slider.width(sliderCount * sliderWidth);

	$('a.previous').click(function () {
	    $('#slides').animate({
	        left: '+=' + sliderWidth
	    }, 500);
	});

	$('a.next').click(function () {
	    $('#slides').animate({
	        left: '-=' + sliderWidth
	    }, 500);
	});

});