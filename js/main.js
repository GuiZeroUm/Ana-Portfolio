/* Mostrar o menu */
const navMenu = document.getElementById ('nav-menu'),
navToggle = document.getElementById ('nav-toggle'),
navClose = document.getElementById ('nav-close')

if (navToggle) {
    navToggle.addEventListener ('click', () => {
        navMenu.classList.add ('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener ('click', () => {
        navMenu.classList.remove ('show-menu')
    })
}

/* Remover o menu do mobile */
const navLink = document.querySelectorAll ('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById ('nav-menu')
    navMenu.classList.remove ('show-menu')
}
navLink.forEach(nav => nav.addEventListener('click', linkAction))