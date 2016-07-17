	$(document).ready(function() {
	var NavY = $('#navi').offset().top;

	var stickyNav = function(){
	var ScrollY = $(window).scrollTop();

	if (ScrollY > NavY) {
		$('#navi').addClass('sticky');
	} else {
		$('#navi').removeClass('sticky');
	}
	};

	stickyNav();

	$(window).scroll(function() {
		stickyNav();
	});
	});
