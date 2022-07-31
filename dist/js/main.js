const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
let showBtn = false;

menuBtn.addEventListener('click',toggleMenu);

function toggleMenu() {
  if (!showBtn) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    // comes as array 
    // we loop over the array an add the class open to each item
    navItems.forEach(item => item.classList.add('open'));
    showBtn = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));
    showBtn = false;
  }
}