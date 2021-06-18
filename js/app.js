// NAV SLIDER ON WIDE SCREENS
const navMenu = document.querySelector('.nav__menu');
const leftBox = document.querySelector('.left-box');
const rightBox = document.querySelector('.right-box');
const closeMenu = document.querySelector('.close');
const closeMobile = document.querySelector('.close-mobile');


navMenu.addEventListener('click', slideInNavList);

function slideInNavList(e) {
    e.preventDefault();

    leftBox.classList.add('active');
    rightBox.classList.add('active');

    // LEFT BOX ANIMATION
    gsap.from('.close', {opacity: 0, x: -50, duration: .8, ease: 'back.in(1.7)'});
    gsap.from('.community', {opacity: 0, y: 30, duration: 1, delay: .3, ease: 'back.in(1.7)'});
    gsap.from('.subscribe', {opacity: 0, y: 20, duration: 1, delay: .7, ease: 'back.in(1.7)'});

    // RIGHT BOX ANIMATION
    gsap.from('.leftLink1', {opacity: 0, y: 40, x: -20, duration: .8, delay: .4, ease: 'ease.out(1.5)'});
    gsap.from('.leftLink2', {opacity: 0, y: 40, x: -20, duration: .8, delay: .8, ease: 'ease.out(1.5)'});
    gsap.from('.leftLink3', {opacity: 0, y: 40, x: -20, duration: .8, delay: 1.3, ease: 'ease.out(1.5)'});
    gsap.from('.leftLink4', {opacity: 0, y: 40, x: -20, duration: .8, delay: 1.6, ease: 'ease.out(1.5)'});
    gsap.from('.leftLink5', {opacity: 0, y: 40, x: -20, duration: .8, delay: 1.9, ease: 'ease.out(1.5)'});
}

closeMenu.addEventListener('click', removeSlideInNavList);
closeMobile.addEventListener('click', removeSlideInNavList);

function removeSlideInNavList() {
    leftBox.classList.remove('active');
    rightBox.classList.remove('active');
}

// SLIDER
$('.row-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    prevArrow: false,
    nextArrow: false,
    responsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
});

// GETTING QUOTES FROM THE JSON FILE
function getQuotes() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', '/quotes.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      const result = JSON.parse(this.responseText);

      const quoteText = document.querySelector('.quote-text');
      const quoteAuthor = document.querySelector('.quote-author');

      const quotesArray = result;
      let curQuoteIndex = -1;

      let intervalID = setInterval(function() {
        ++curQuoteIndex;
        function renderQuote() {
          quoteAuthor.innerText = quotesArray[curQuoteIndex].author;
          quoteText.innerText = quotesArray[curQuoteIndex].quote;
        }
        if (curQuoteIndex >= quotesArray.length) {
          curQuoteIndex = 0;
        }
        renderQuote(quotesArray[curQuoteIndex]);
      }, 3000);
    }
  }

  xhr.send();
}

getQuotes();