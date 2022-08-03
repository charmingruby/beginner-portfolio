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

const accordionHeaders = document.querySelectorAll('.accordion__header');

accordionHeaders.forEach(accordionHeader => {
    accordionHeader.addEventListener('click', () => {
        const height = accordionHeader.nextElementSibling.scrollHeight
        const accordionBtn = accordionHeader.querySelector('.accordion__button');
        accordionHeader.classList.add('active');
        if(accordionHeader.classList.contains('active')) {
            accordionHeaders.forEach(item => {
                item.nextElementSibling.style.maxHeight = '0px';
                const itemBtn = item.querySelector('.accordion__button');
                itemBtn.innerHTML = '+';
            })
            accordionHeader.nextElementSibling.style.maxHeight = `${height}px`
            accordionBtn.innerHTML = '-';
        } else {
            accordionHeader.nextElementSibling.style.maxHeight = '0px';
            accordionBtn.innerHTML = '+';
        }
    })
})
