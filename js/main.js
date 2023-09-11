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

/* Sombra no header */

const shadowHeader = () => {
    const header = document.getElementById ('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                    : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/**/


/* Mostrar o scroll up */
const scrollUp = () => {
    const scrollUp = document.getElementById ('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add ('show-scroll') 
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/* Animação do header */
const sections = document.querySelectorAll('section[id]')
const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*='+ sectionId +']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        } else {
            sectionClass.classList.remove ('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)