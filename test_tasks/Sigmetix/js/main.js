/* burger-menu JS*/
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

/* align blocks height jQuery*/
equalHeight($('.questions__row-1'));
equalHeight($('.questions__row-2'));
equalHeight($('.questions__row-3'));
equalHeight($('.questions__row-4'));
equalHeight($('.questions__row-5'));
equalHeight($('.questions__row-6'));

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