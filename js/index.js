nav = document.querySelector('.nav')

window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > 100) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}
