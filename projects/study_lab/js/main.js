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