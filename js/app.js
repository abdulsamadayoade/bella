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

// FADE IN

var rule = CSSRulePlugin.getRule('.right-box:before');

gsap.to(rule, {cssRule: {scaleY: 0}, duration: 1});

let animRight = gsap.timeline({stagger: 1});

animRight.from('.close', {opacity: 0, y: 10, duration: 1});
animRight.from('.community', {opacity: 0, y: 10, duration: 1});
animRight.from('.subscribe', {opacity: 0, y: 10, duration: 1});