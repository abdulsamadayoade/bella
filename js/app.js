// NAV SLIDER ON DESKTOPS
const navMenu = document.querySelector('.nav__menu');
const leftBox = document.querySelector('.left-box');
const rightBox = document.querySelector('.right-box');
const closeMenu = document.querySelector('.close');


navMenu.addEventListener('click', slideInNavList);

function slideInNavList(e) {
    e.preventDefault();

    leftBox.classList.add('active');
    rightBox.classList.add('active');
}

closeMenu.addEventListener('click', removeSlideInNavList);

function removeSlideInNavList() {
    leftBox.classList.remove('active');
    rightBox.classList.remove('active');
}