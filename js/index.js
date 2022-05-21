//hamburger 
let hamburger = document.getElementById("ham-a");
let menu = document.getElementById("mobile");
menu.style.display = 'none';

function showMobileMenu() {

    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    }

    if (menu.classList.contains('ani') == true) {
        menu.classList.remove('ani');
        menu.classList.add('ani-back');
    }
    else {
        menu.classList.remove('ani-back');
        menu.classList.add('ani');
    }
}

hamburger.addEventListener('click', showMobileMenu);
