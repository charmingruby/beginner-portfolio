const burguer = document.querySelector('#nav__burguer-input');
const sidebar = document.querySelector('.nav__list');
const body = document.querySelector('body');

burguer.addEventListener('click', (e) => {
    sidebar.classList.toggle('is-active');
    body.classList.toggle('nav--overflow');
});

const nav = document.querySelector('.nav');
let scrolled = 0;

window.addEventListener('scroll', () => {
    let actualScroll = window.scrollY;
    if(actualScroll > scrolled) {
        nav.classList.add('nav__scroll');
    } else {
        nav.classList.remove('nav__scroll');
    }
    scrolled = actualScroll;    
});

