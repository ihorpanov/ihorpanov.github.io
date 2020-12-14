/* бургер меню на чистом js (для себя) */
let burgerButton = document.querySelector('.header__burger-menu');
let mobileMenu = document.querySelector('.header__menu');
let mobileMenuList = document.querySelector('.header__list');
let linkNavVisiblity = document.querySelector('.header__menu li');
let navSeparator = document.querySelector('.header__nav-separator');

burgerButton.addEventListener('click', function () {
    if (this.classList.contains('burger-is-active')) {
        this.classList.remove('burger-is-active');
        mobileMenu.style.display = 'none';
        navSeparator.style.display = 'none';
    } else {
        this.classList.add('burger-is-active');
        mobileMenu.style.display = 'block';
        mobileMenuList.style.display = 'block';
        navSeparator.style.display = 'block';
    }
});

$(document).ready(function(){
    /* owl carousel */
    $("#slider-profit").owlCarousel({
        responsiveClass:true,
        margin:10,
        loop:true,
        autoplay:true,
        autoplaySpeed:1000,
        responsive:{
            0:{
                items:1,
                dots:true,
            },
            600:{
                items:2,
                dots:true,
            },
            900:{
                loop:false,
                autoplay:false,
                items:3,
                dots:false,
            },
        }
    });

    $("#other-services__slider").owlCarousel({
        responsiveClass:true,
        dotsEach:true,
        // loop:true,
        autoplay:true,
        autoplaySpeed:1000,
        responsive:{
            0:{
                items:1,
                dots:true,
            },
            600:{
                items:2,
                dots:true,
            },
            1000:{
                loop:false,
                items:3,
            },
        }
    });

    // вирівнювання слайдів по висоті
    $(window).on("resize", function () {
        var maxH = 0;  
        $('.other-services__slider-description').each(function(){
            $(this).css('height','auto');

            console.log($(this).height());
            if ( $(this).height() > maxH ) {
                maxH = $(this).height();
            }
        });

        $('.other-services__slider-description').height(maxH);
    }).resize();

    /* popup projects */
    $('.projects__item').on('click', function(e) {
        e.preventDefault();

        $('.overlay').fadeIn();
        $('.popup-projects').fadeIn();
        $('body').addClass('no-scroll');
    })

    $('.close-popup').on('click', function(e) {
        e.preventDefault();

        $('.overlay').fadeOut();
        $('.popup-projects').fadeOut();
        $('body').removeClass('no-scroll');
    })

    $('.overlay').on('click', function(e) {
        e.preventDefault();

        $('.overlay').fadeOut();
        $('.popup-projects').fadeOut();
        $('body').removeClass('no-scroll');
    })

    /* faq hidden */
    $('.faq__question').on('click', '.faq__ask', function() {
		$(this).toggleClass('faq__answer-hidden').siblings('.faq__answer').slideToggle(300);
	});
});