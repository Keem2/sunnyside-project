//hamburger 
let hamburger = document.getElementById("ham-a");
let menu = document.getElementById("mobile");

hamburger.addEventListener('click', showMobileMenu);

function showMobileMenu() {
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}
