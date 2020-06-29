let burgerButton = document.querySelector('.burger-menu');
let mobileMenu = document.querySelector('.menu');
let linkNavVisiblity = document.querySelector('.menu li');

burgerButton.addEventListener('click', function () {
    if (this.classList.contains('burger-is-active')) {
        this.classList.remove('burger-is-active');
        mobileMenu.style.display = 'none';
        // mobileMenu.style.height = '0';
    } else {
        this.classList.add('burger-is-active');
        mobileMenu.style.display = 'block';
        // mobileMenu.style.height = '100%';
    }
});