/* -------------------------- Burger Menu -------------------------- */
let burgerBtn = document.querySelector('.burger-menu');
let mobileMenuList = document.querySelector('.mobile-nav-list');
let closeMenuBtn = document.querySelector('.mobile-menu-close');

burgerBtn.addEventListener('click', function () {
  mobileMenuList.classList.add('visible');
});
closeMenuBtn.addEventListener('click', function () {
  mobileMenuList.classList.remove('visible');
});