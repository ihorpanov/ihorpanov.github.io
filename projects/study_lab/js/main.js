// бургер меню на чистом js (для себя)
let burgerButton = document.querySelector('.burger-menu');
let mobileMenu = document.querySelector('.menu');
let linkNavVisiblity = document.querySelector('.menu li');
let navSeparator = document.querySelector('.nav-separator');

burgerButton.addEventListener('click', function () {
    if (this.classList.contains('burger-is-active')) {
        this.classList.remove('burger-is-active');
        mobileMenu.style.display = 'none';
        navSeparator.style.display = 'none';
    } else {
        this.classList.add('burger-is-active');
        mobileMenu.style.display = 'block';
        navSeparator.style.display = 'block';
    }
});

$(document).ready(function(){
    $('.team-slider').slick({
        arrows: false,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                }
            },
        ]
    });

    $('.advantages-slider').slick({
        arrows: false,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                }
            },
        ]
    });
});