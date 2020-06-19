$(window).scroll(function() {
	$('#future h2').each(function() {
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow + 650) {
			$(this).addClass("bounceInDown");
		}
	});
});

$(window).scroll(function() {
	$('.icon_1').each(function() {
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow + 650) {
			$(this).addClass("bounceInLeft");
		}
	});
});

$(window).scroll(function() {
	$('.icon_2').each(function() {
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow + 650) {
			$(this).addClass("bounceInUp");
		}
	});
});

$(window).scroll(function() {
	$('.icon_3').each(function() {
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow + 650) {
			$(this).addClass("bounceInRight");
		}
	});
});

$(window).scroll(function() {
	$('.sc_form h2').each(function() {
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow + 650) {
			$(this).addClass("bounceInDown");
		}
	});
});

$(window).scroll(function() {
	$('#form').each(function() {
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow + 650) {
			$(this).addClass("bounceInLeft");
		}
	});
});