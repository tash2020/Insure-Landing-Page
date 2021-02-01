const hamburger = document.querySelector('#hamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', function () {
  console.log('click hamburger');

  if (header.classList.contains('open')) {
    header.classList.remove('open');
    overlay.classList.remove('slide-in');
    overlay.classList.add('slide-out');
  } else {
    header.classList.add('open');
    overlay.classList.remove('slide-out');
    overlay.classList.add('slide-in');
  }
});
