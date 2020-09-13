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


// function getEqualHeight(params) {
//     let mainDivs = document.querySelector('.usa-equal-height');
//     let maxHeight = 0;

//     for (let i = 0; i < mainDivs.length; ++i) {
//         if (maxHeight < mainDivs[i].clientHeight) {
//             maxHeight = mainDivs[i].clientHeight;
//         }
//     }

//     for (let i = 0; i < mainDivs.length; ++i) {
//         mainDivs[i].style.height = maxHeight + "px";
//     }
// }
 

$(document).ready(function(){
    // слайдеры
    $('.slider-no-attributes').slick({
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

    $('#univer-slider').owlCarousel({
        margin: 110,
        nav: true,
        responsive: {
            0: {
                items: 1,
                margin: 80,
            },
            
            768: {
                items: 2,
                margin: 80,
            },

            1000: {
                items: 2,
                margin: 110,
            },
        }
    });

    // выравнивание слайдов по высоте
    function equalHeight(block) {
        let maxHeight = 0;

        block.each(function() {
            thisHeight = $(this).height();

            if (thisHeight > maxHeight) {
                maxHeight = thisHeight;
            }
        });

        block.height(maxHeight);
    };

    equalHeight($('.usa-equal-height'));
});