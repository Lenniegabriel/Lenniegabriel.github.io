const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('open-menu'),
    navClose = document.getElementById('close-menu')

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
