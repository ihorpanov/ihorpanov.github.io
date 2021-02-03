/* бургер меню на чистом js (для себя) */
let burgerButton = document.querySelector('.header__burger-menu');
let mobileMenu = document.querySelector('.header__menu');
let mobileMenuList = document.querySelector('.header__list');
let linkNavVisiblity = document.querySelector('.header__menu li');

burgerButton.addEventListener('click', function () {
    if (this.classList.contains('header__burger-is-active')) {
        this.classList.remove('header__burger-is-active');
        mobileMenu.style.display = 'none';
    } else {
        this.classList.add('header__burger-is-active');
        mobileMenu.style.display = 'block';
        mobileMenuList.style.display = 'block';
    }
});

$(document).ready(function(){
    /* выравнивание блоков по высоте */
    $(window).on("resize", function () {
        var maxH = 0;  
        $('.portfolio__project').each(function(){
            $(this).css('height','auto');

            console.log($(this).height());
            if ( $(this).height() > maxH ) {
                maxH = $(this).height();
            }
        });

    $('.portfolio__project').height(maxH);
}).resize();

    /* прокрутка по якорям */
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});