let btnHamb = document.querySelector('.header__hamburger');
let header = document.querySelector('.header');
let overlay = document.querySelector('.overlay');

btnHamb.addEventListener('click', function () {
  if (header.classList.contains('active')) {
    header.classList.remove('active');
    overlay.classList.remove('slide-in');
    overlay.classList.add('slide-out');
  } else {
    header.classList.add('active');
    overlay.classList.remove('slide-out');
    overlay.classList.add('slide-in');
  }
});
