let btnHamb = document.querySelector('.header__hamburger');
let body = document.querySelector('body');
let header = document.querySelector('.header');
let overlay = document.querySelector('.overlay');
let visible = document.querySelectorAll('.visibility');

btnHamb.addEventListener('click', function () {
  if (header.classList.contains('active')) {
    body.classList.remove('noscroll');
    header.classList.remove('active');
    visible.forEach(function (element) {
      element.classList.remove('slide-in');
      element.classList.add('slide-out');
    });
  } else {
    body.classList.add('noscroll');
    header.classList.add('active');
    visible.forEach(function (element) {
      element.classList.remove('slide-out');
      element.classList.add('slide-in');
    });
  }
});
