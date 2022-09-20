let slideIndex = 0;

function receiveValues (value) {
    slideIndex = value
}

toggleImages(slideIndex)

function toggleImages (n) {
    let i;
    let images = document.getElementsByClassName('slide')
    let buttons = document.getElementsByClassName('dots')

    if (n > images.length - 1) {
        slideIndex = 0
    }

    for (i = 0; i < images.length; i++) {
        images[i].style.display = 'none'
    }
    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('activate')
    }

    images[slideIndex].style.display = 'block'
    buttons[slideIndex].classList.add('activate')
    slideIndex++
    setTimeout (toggleImages, 2000)
}
// Há algo de errado aqui, não sei o que