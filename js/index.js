//hamburger 
let hamburger = document.getElementById("ham-a");
let menu = document.getElementById("mobile");

hamburger.addEventListener('click', showMobileMenu);

function showMobileMenu() {
    // menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
        menu.style.animation = 'ani 1s';
    } else {
        menu.style.display = 'none';
        menu.style.animation = 'ani-back 1s';
    }
}
