$(document).ready(function(){
	
	$('.btn-book').hover(function() {
		$('.book').removeClass('hide');
	}, function() {
		$('.book').addClass('hide');
	});

	$('.btn-home').hover(function() {
		$('.home').removeClass('hide');
	}, function() {
		$('.home').addClass('hide');
	});

	$('.btn-home').click(function() {
		$('.wrapper').addClass('animated fadeOut');
		$('.topMenu').addClass('animated fadeOut');
	});

	$('.img-one').hover(function() {
		$('.img-one > h2,.img-one > p').removeClass('hide');
	}, function() {
		$('.img-one > h2,.img-one > p').addClass('hide');
	});

	$('.img-two').hover(function() {
		$('.img-two > h2,.img-two > p').removeClass('hide');
	}, function() {
		$('.img-two > h2,.img-two > p').addClass('hide');
	});

	$('.img-three').hover(function() {
		$('.img-three > h2,.img-three > p').removeClass('hide');
	}, function() {
		$('.img-three > h2,.img-three > p').addClass('hide');
	});

	$('.img-four').hover(function() {
		$('.img-four > h2,.img-four > p').removeClass('hide');
	}, function() {
		$('.img-four > h2,.img-four > p').addClass('hide');
	});

	$('#resBtn').click(function() {
        $('.reserveWrap').addClass('appear1');
    });

    $('.fa-times-circle').click(function() {
        $('.reserveWrap').removeClass('appear1');
    });

    $('.disIcon').click(function(){
        $('.disText').toggleClass('hide3');
    });

});