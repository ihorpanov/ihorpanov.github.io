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