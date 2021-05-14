// NAV SLIDER ON WIDE SCREENS
const navMenu = document.querySelector('.nav__menu');
const leftBox = document.querySelector('.left-box');
const rightBox = document.querySelector('.right-box');
const closeMenu = document.querySelector('.close');


navMenu.addEventListener('click', slideInNavList);

function slideInNavList(e) {
    e.preventDefault();

    leftBox.classList.add('active');
    rightBox.classList.add('active');

    gsap.from('.close', {opacity: 0, x: -50, duration: .8, ease: 'back.in(1.7)'});
    gsap.from('.community', {opacity: 0, y: 30, duration: 1, delay: .3, ease: 'back.in(1.7)'});
    gsap.from('.subscribe', {opacity: 0, y: 20, duration: 1, delay: .7, ease: 'back.in(1.7)'})
}

closeMenu.addEventListener('click', removeSlideInNavList);

function removeSlideInNavList() {
    leftBox.classList.remove('active');
    rightBox.classList.remove('active');
}