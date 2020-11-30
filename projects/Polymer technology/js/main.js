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
    $(".owl-carousel").owlCarousel({
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
});