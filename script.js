const toggle = document.querySelector('.toggle');
const topbar = document.querySelector(".topbar");

function toggleTopbar() {
    if (topbar.classList.contains("active")) {
        topbar.classList.remove("active");

        toggle.querySelector('a').innerHTML = '<img src="./images/icon-hamburger.svg" />';
    } else {
        topbar.classList.add("active");

        toggle.querySelector('a').innerHTML = '<img src="./images/icon-close.svg" />';
    }
}  

toggle.addEventListener('click', toggleTopbar, false);