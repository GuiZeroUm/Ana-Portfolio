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

/* Alternar entre tema escuro e branco */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'] (iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/* Animação do scroll reveal */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 400,
})

sr.reveal('.home__perfil, .about__image, .contact__mail', {origin: 'right'})
sr.reveal('.home__name, .home__info, .home__description, .about__container .section__title-1, .about__info, .contact__social, .contact__data', {origin: 'left'})
sr.reveal('.services__card, .projects__card', {interval: 100})