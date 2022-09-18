let menuStatus = false;
let menu = document.getElementById('menu')

function toggleMenu () {
    if (menuStatus == false) {
        menu.style.display = 'block'
        menuStatus = true;
    } else {
        menu.style.display = 'none'
        menuStatus = false;
    }
}