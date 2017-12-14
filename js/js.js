$(document).ready(function(){
    if ($(window).width() <= 960) {
            $('.wrapper').removeClass('animated fadeIn');
            $('.navbar').removeClass('animated fadeInRight');
            $('.home').removeClass('animated fadeInUp');
            $('.title').removeClass('animated fadeInRight');
    }


    // -----------------scroll counter------//

   // $(window).scroll(function(){
   //      var windowScrollPosTop = jQuery(window).scrollTop();
   //      $(".status").html(windowScrollPosTop);
   //  });//



   $(window).bind('scroll', function() {

         if ($(window).scrollTop() >= 150) {
             $('.resAbout').addClass('show1');
             $('.resAbout').addClass('animated fadeInRight');
         }

         if ($(window).scrollTop() >= 1076) {
             $('.foodChoice').addClass('show1');
             $('.foodChoice').addClass('animated fadeInLeft');
         }

         if ($(window).scrollTop() >= 2153) {
             $('.container').addClass('show1');
             $('.container').addClass('animated fadeInUp');
         }
    });


   $(".fcSec.grp2,.fcSec.grp4,.fcSec.grp5,.fcSec.grp7").hover(function(){
        $(this).addClass('animated pulse');
        }, function(){
        $(this).removeClass('animated pulse');
    });



   $(window).bind('scroll', function() {
		 if ($(window).scrollTop() > 0) {
			 $('.navbar').addClass('navigBar');
		 }
		 else {
			 $('.navbar').removeClass('navigBar');
		 }
	});

   $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 2500) {
            $('.fa-eject').removeClass('hide');
            $('.fa-eject').addClass('animated bounce');
        }
        else{
            $('.fa-eject').addClass('hide');
            $('.fa-eject').removeClass('animated bounce');
        }
    });


    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 800, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    $(".fa-times").click(function() {
        $(".contWrap").removeClass("appear");
    });

    $("#contBtn").click(function() {
        $(".contWrap").addClass("appear");
    });

    $('.fa-times-circle').click(function() {
        $('.reserveWrap').removeClass('appear1');
    });

    $('#resBtn').click(function() {
        $('.reserveWrap').addClass('appear1');
    });

    $('#bookBtn').click(function() {
        $('.reserveWrap').addClass('appear1');
    });

    $('.disIcon').click(function(){
        $('.disText').toggleClass('hide3');
    });
});