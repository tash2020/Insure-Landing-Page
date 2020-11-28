function myFunction() {
    var x = document.getElementById('navbar');
    if (x.className === 'topbar') {
        x.className += ' responsive' ;
    } else {
        x.className = 'topbar';
    }
}